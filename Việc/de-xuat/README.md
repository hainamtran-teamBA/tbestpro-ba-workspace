# Đề xuất chờ duyệt

Phiên chạy trên Văn phòng ảo (Phó nhóm và agent con mở từ trang) **không tự** đổi quy tắc, agent, hook, `CLAUDE.md` hay ghi tri thức vào `reference/`. Thay vào đó, ghi một đề xuất vào thư mục này. Trưởng nhóm (chat chính ở VS Code) đọc, bàn với người dùng, rồi duyệt hoặc từ chối (chốt 2026-11-16).

- Tên file: `YYYY-MM-DD-<ten-ngan>.md` (chữ thường không dấu, gạch nối), ví dụ `2026-11-16-them-quy-tac-anh-chup.md`.
- Phần đầu file (giữa hai dòng `---`) phải đúng mẫu: trang Văn phòng ảo chỉ đọc phần này để hiện huy hiệu "Có đề xuất mới".
- Duyệt xong thì đổi `trang-thai` và ghi kết quả; không xóa file.

## Mẫu

```markdown
---
de-xuat: Thêm quy tắc chụp ảnh vào giao-dien.md
ai: pho-nhom                   # pho-nhom, hoặc tên agent (tra-cuu, giao-dien...)
ngay: 2026-11-16
trang-thai: moi                # moi | da-duyet | tu-choi
file: .claude/rules/giao-dien.md
---

## Đề xuất
Đổi gì, viết ngắn. Nếu là đoạn chữ mới thì chép nguyên văn.

## Vì sao
Chuyện gì xảy ra khiến cần đổi; đổi xong được gì.

## Kết quả duyệt
(Trưởng nhóm ghi: ngày, duyệt hay từ chối, lý do.)
```
