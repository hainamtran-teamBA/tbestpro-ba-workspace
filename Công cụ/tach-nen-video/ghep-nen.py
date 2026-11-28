"""Tách người khỏi nền video rồi ghép ảnh nền mới vào phía sau.

Gộp 2 mô hình: Robust Video Matting (viền tóc mượt, ổn định giữa các khung)
và BiRefNet (giữ đồ vật cầm tay như điện thoại, gói sản phẩm).

Cách chạy (xem HUONG-DAN.md):
  ~/tools/tach-nen-video/.venv/bin/python ghep-nen.py <video> <ảnh nền> <file ra> [bắt đầu giây] [độ dài giây, 0 = đến hết]
Ví dụ: ... ghep-nen.py "Rosmar 21.10.mp4" nen-giang-sinh-fitgum.png ra.mp4 177 0
"""
import os, sys, subprocess, time
import cv2, numpy as np, torch

TOOL = os.environ.get('TACH_NEN_DIR', os.path.expanduser('~/tools/tach-nen-video'))
sys.path.insert(0, TOOL + '/rvm')
from model import MattingNetwork
from transformers import AutoModelForImageSegmentation

BIREFNET_REV = 'e2bf8e4460fc8fa32bba5ea4d94b3233d367b0e4'  # ghim bản đã kiểm, tránh tự tải code mới

src, bg_path, out = sys.argv[1], sys.argv[2], sys.argv[3]
start = float(sys.argv[4]) if len(sys.argv) > 4 else 0.0
dur = float(sys.argv[5]) if len(sys.argv) > 5 else 0.0
dev = 'mps' if torch.backends.mps.is_available() else 'cpu'

rvm = MattingNetwork('resnet50').eval().to(dev)
rvm.load_state_dict(torch.load(TOOL + '/rvm_resnet50.pth', map_location=dev))
bir = AutoModelForImageSegmentation.from_pretrained('ZhengPeng7/BiRefNet', revision=BIREFNET_REV,
                                                    trust_remote_code=True).eval().to(dev)
if dev == 'mps': bir = bir.half()
dt = torch.float16 if dev == 'mps' else torch.float32
mean = torch.tensor([0.485, 0.456, 0.406], device=dev).view(1, 3, 1, 1)
std = torch.tensor([0.229, 0.224, 0.225], device=dev).view(1, 3, 1, 1)

cap = cv2.VideoCapture(src)
fps = cap.get(cv2.CAP_PROP_FPS); W, H = int(cap.get(3)), int(cap.get(4))
cap.set(cv2.CAP_PROP_POS_MSEC, start * 1000)
n = int(dur * fps) if dur > 0 else 10**9

# Ảnh nền: phóng cho phủ kín khung, cắt giữa
bg = cv2.imread(bg_path); s = max(W / bg.shape[1], H / bg.shape[0])
bg = cv2.resize(bg, (round(bg.shape[1] * s), round(bg.shape[0] * s)), interpolation=cv2.INTER_LANCZOS4)
y0, x0 = (bg.shape[0] - H) // 2, (bg.shape[1] - W) // 2
bg = torch.from_numpy(bg[y0:y0 + H, x0:x0 + W].copy()).to(dev).float()

tmp = out + '.khong-tieng.mp4'
ff = subprocess.Popen(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'bgr24',
                       '-s', f'{W}x{H}', '-r', str(fps), '-i', '-', '-c:v', 'libx264', '-crf', '16',
                       '-preset', 'medium', '-pix_fmt', 'yuv420p', tmp], stdin=subprocess.PIPE)
rec = [None] * 4; t0 = time.time(); i = 0
with torch.no_grad():
    while i < n:
        ok, f = cap.read()
        if not ok: break
        fb = torch.from_numpy(f).to(dev).float()
        t = fb.flip(-1).permute(2, 0, 1).unsqueeze(0) / 255
        _, pha, *rec = rvm(t, *rec, downsample_ratio=0.25)
        x = torch.nn.functional.interpolate(t, (1024, 1024), mode='bilinear', align_corners=False)
        b = bir(((x - mean) / std).to(dt))[-1].sigmoid().float()
        b = torch.nn.functional.interpolate(b, (H, W), mode='bilinear', align_corners=False)
        a = torch.maximum(pha, b)[0, 0].unsqueeze(-1)  # chỗ nào 1 trong 2 mô hình nhận là tiền cảnh thì giữ
        ff.stdin.write((fb * a + bg * (1 - a)).clamp(0, 255).byte().cpu().numpy().tobytes())
        i += 1
        if i % 300 == 0: print(f'{i} khung, {(time.time() - t0) / i:.2f} giây/khung', flush=True)
ff.stdin.close(); ff.wait()

# Ghép lại tiếng gốc đúng đoạn đã cắt
a_args = ['-ss', str(start)] + (['-t', str(dur)] if dur > 0 else [])
subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', tmp, *a_args, '-i', src,
                '-map', '0:v', '-map', '1:a?', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', out], check=True)
os.remove(tmp)
print(f'Xong {i} khung trong {(time.time() - t0) / 60:.1f} phút -> {out}')
