---
name: feedback-link-xem-ngoai-tbestpro
description: Cách chia sẻ link tùy dạng tài liệu (báo cáo dùng HTML hoặc claude.ai); form báo cáo nằm trong thư mục Mẫu; link claude.ai chỉ người trong Tbestpro xem được
metadata:
  type: feedback
---

Cách chia sẻ link **tùy dạng tài liệu**: báo cáo có thể là **HTML** hoặc **claude.ai**, chọn theo từng trường hợp. **Form báo cáo nằm trong thư mục `Mẫu/`** (báo cáo so sánh, giao diện); làm báo cáo mới thì lấy form ở đó.

**Why:** Hải Nam (2026-11-12, làm rõ 2026-11-21) cần người khác xem được; artifact claude.ai của tài khoản công ty bị tổ chức tắt chia sẻ ra ngoài, chỉ người trong Tbestpro xem được.

**How to apply:** trước khi xuất trang, nói rõ link claude.ai chỉ người trong Tbestpro xem được; cần người ngoài xem thì dùng trang HTML đăng lên Cloudflare Workers (từ 2026-11-20, ví dụ `hieu-qua-post`; công khai bằng link, **chưa có đăng nhập**, chỉ gửi người trong công ty) hoặc nhờ admin mở chia sẻ. Dữ liệu nội bộ về sau cần lớp đăng nhập (Zero Trust hoặc mật khẩu chung kiểm ở máy chủ, chưa chọn). Liên quan [[reference-nhat-ky-notion]].
