# Phiếu việc

Chỉ tạo phiếu khi việc **kéo dài nhiều buổi**, **làm qua hai máy**, hoặc **giao cho AI khác** (Antigravity). Việc xong trong một buổi thì không cần (chốt 2026-11-16).
`nhat-ky.jsonl` do hook tự ghi mỗi lần giao việc cho agent và khi agent xong; không sửa tay.
Phiếu giúp hai máy cùng biết việc đang dở; sau này là nguồn dữ liệu cho văn phòng ảo và chỗ giao việc cho AI khác (Antigravity).

- Tên file: `YYYY-MM-DD-<viec-ngan>.md`, ví dụ `2026-11-15-sua-loi-ban-lam-viec.md`.
- Chat chính tạo phiếu khi giao việc, cập nhật trạng thái khi nhận kết quả.
- Xong việc vẫn giữ phiếu (không xóa), trạng thái `xong`.

## Mẫu

```markdown
---
viec: Sửa 13 lỗi trang Bàn làm việc
trang-thai: moi | dang-lam | cho-duyet | xong | dung
giao-cho: giao-dien            # agent, hoặc antigravity, hoặc hai-nam
du-an: ban-du-an               # thư mục trong Dự Án/ hoặc Trang web/, nếu có
tao: 2026-11-15
cap-nhat: 2026-11-15
---

## Đề
Cần làm gì, vì sao, đầu vào là gì (file, link).

## Tiêu chí xong
- ...

## Nhật ký
- 2026-11-15 · chat chính · giao cho giao-dien (chế độ Làm tiếp)

## Kết quả
File, link, điểm chấm, điều còn mở.
```
