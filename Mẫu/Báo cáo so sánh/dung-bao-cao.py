#!/usr/bin/env python3
"""Ghép file dữ liệu báo cáo (.json) vào khuôn khuon-bao-cao.html.

Cách dùng:
    python3 dung-bao-cao.py <du-lieu.json> <bao-cao-ra.html>

- Mọi trường "anh" là đường dẫn file (tính từ thư mục chứa file .json) sẽ được
  nhúng thẳng vào HTML, để file ra gửi đi một mình vẫn hiện đủ ảnh.
- Không sửa khuôn; muốn đổi giao diện thì báo Kyo.
"""
import base64, json, mimetypes, re, sys
from pathlib import Path

KHUON = Path(__file__).with_name("khuon-bao-cao.html")


def nhung_anh(x, goc: Path):
    if isinstance(x, dict):
        for k, v in x.items():
            if k == "anh" and isinstance(v, str) and v and not v.startswith(("data:", "http://", "https://")):
                p = (goc / v).resolve()
                if not p.is_file():
                    sys.exit(f"Không thấy ảnh: {p}")
                loai = mimetypes.guess_type(p.name)[0] or "image/png"
                x[k] = f"data:{loai};base64," + base64.b64encode(p.read_bytes()).decode()
            else:
                nhung_anh(v, goc)
    elif isinstance(x, list):
        for v in x:
            nhung_anh(v, goc)


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    vao, ra = Path(sys.argv[1]), Path(sys.argv[2])
    du_lieu = json.loads(vao.read_text(encoding="utf-8"))
    nhung_anh(du_lieu, vao.parent)
    khuon = KHUON.read_text(encoding="utf-8")
    chuoi = json.dumps(du_lieu, ensure_ascii=False, indent=1).replace("</", "<\\/")
    moi, n = re.subn(
        r'(<script type="application/json" id="du-lieu">)(.*?)(</script>)',
        lambda m: m.group(1) + "\n" + chuoi + "\n" + m.group(3),
        khuon, count=1, flags=re.S,
    )
    if n != 1:
        sys.exit("Khuôn bị sửa, không tìm thấy khối du-lieu")
    ra.parent.mkdir(parents=True, exist_ok=True)
    ra.write_text(moi, encoding="utf-8")
    print(f"Đã dựng: {ra} ({ra.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
