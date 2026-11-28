# Tách nền video, ghép ảnh nền mới

Tách người (kèm tay, điện thoại, gói sản phẩm đang cầm) khỏi nền video, rồi đặt một ảnh nền mới phía sau. Chạy ngay trên máy Mac, không gửi video đi đâu, không tốn phí.

Dùng lần đầu ngày 27/11/2026: video Rosmar 21.10, đoạn từ 2:57 đến hết, ghép nền Giáng sinh FITGUM.

## Thư mục này có gì (đi theo GitHub)

| File | Là gì |
|---|---|
| `ghep-nen.py` | Script chính: tách nền, ghép ảnh nền, tự ghép lại tiếng gốc |
| `nen-giang-sinh-fitgum.png` | Ảnh nền Giáng sinh "Buy 6 Pay 3" (937x1652) |
| `HUONG-DAN.md` | File này |

## Trên máy hiện tại đang cài gì (KHÔNG đi theo GitHub)

| Thứ | Nằm ở | Dung lượng | Ghi chú |
|---|---|---|---|
| Bộ thư viện Python 3.11 (torch, opencv, transformers…) | `~/tools/tach-nen-video/.venv` | ~830 MB | Cài bằng uv |
| Code Robust Video Matting | `~/tools/tach-nen-video/rvm` | 10 MB | github.com/PeterL1n/RobustVideoMatting, commit 53d74c6 |
| Mô hình Robust Video Matting | `~/tools/tach-nen-video/rvm_resnet50.pth` | 108 MB | Bản resnet50, tải từ trang Releases v1.0.0 của repo trên |
| Mô hình BiRefNet | `~/.cache/huggingface/hub/models--ZhengPeng7--BiRefNet` | ~424 MB | Tự tải lần chạy đầu, ghim bản `e2bf8e4` trong script |
| ffmpeg | `~/.local/bin/ffmpeg` | | Đã ghi trong `Cài đặt máy.md` |

Thư mục tạm của phiên Claude (`/private/tmp/claude-501/...`) chỉ chứa bản thử và đoạn cắt trung gian. Nó tự xóa khi khởi động lại máy, nên không cần mang theo.

## Cài lại trên máy mới (~10 phút, cần mạng)

Cần có sẵn: `uv` và `ffmpeg` (xem `Cài đặt máy.md`). Máy Mac chip M (M1 trở lên) chạy nhanh. Máy khác chạy bằng CPU, chậm hơn nhiều.

```bash
T=~/tools/tach-nen-video
mkdir -p $T && cd $T
git clone --depth 1 https://github.com/PeterL1n/RobustVideoMatting.git rvm
curl -L -o rvm_resnet50.pth https://github.com/PeterL1n/RobustVideoMatting/releases/download/v1.0.0/rvm_resnet50.pth
uv venv --python 3.11 .venv
VIRTUAL_ENV=$T/.venv uv pip install torch==2.15.0 torchvision==0.29.2 opencv-python-headless==5.1.0.95 \
  numpy transformers==4.49.0 timm kornia einops
```

BiRefNet sẽ tự tải ở lần chạy đầu tiên (~424 MB).

## Cách chạy

```bash
~/tools/tach-nen-video/.venv/bin/python "Công cụ/tach-nen-video/ghep-nen.py" \
  "<video gốc>" "<ảnh nền>" "<file ra>.mp4" <bắt đầu, giây> <độ dài, giây>
```

- Độ dài để `0` là chạy đến hết video.
- Ví dụ từ 2:57 đến hết: bắt đầu `177`, độ dài `0`.
- Nên chạy thử 6 giây ở cảnh khó trước (cầm đồ vật, vuốt điện thoại), xem ổn rồi mới chạy cả đoạn.

**Thời gian:** khoảng 0,56 giây mỗi khung hình trên MacBook chip M5. Video 60 khung/giây thì 1 phút video mất khoảng 34 phút. Máy sẽ nóng và quạt kêu, đó là bình thường. Trong lúc chạy không tắt máy, không cho máy ngủ.

**Ảnh nền:** tự phóng cho phủ kín khung video rồi cắt phần giữa. Ảnh nên cùng tỉ lệ dọc 9:16 để không mất chữ ở mép.

## Bài học

- Chỉ dùng Robust Video Matting thì người và tóc đẹp, nhưng **điện thoại bị nhìn xuyên** khi người trong video vuốt màn hình, vì mô hình chỉ nhận ra người.
- Thêm BiRefNet (nhận mọi vật ở tiền cảnh) và gộp kết quả: chỗ nào một trong hai mô hình nhận là tiền cảnh thì giữ lại. Cách này sửa được lỗi điện thoại.
- Đừng dùng mẹo "lấp lỗ" trên vùng người: nó làm sót mảng nền cũ (ghế sofa) ở góc dưới.
- Dreamina thay nền bằng cách tạo lại cả cảnh, dễ làm lệch mặt và chữ trên điện thoại, nên không hợp cho việc này. CapCut tách nền nhanh nhưng hay mất đồ vật cầm tay.
- Muốn nhanh và sạch nhất cho các video sau: quay trước phông xanh.

## Muốn nhanh hơn

- Hạ video xuống 30 khung/giây (Facebook, TikTok dùng phổ biến): nhanh gấp đôi.
- Chạy BiRefNet cách một khung: nhanh thêm, đổi lại viền điện thoại có thể trễ nhẹ lúc vuốt nhanh. Chưa làm, cần sửa script.
