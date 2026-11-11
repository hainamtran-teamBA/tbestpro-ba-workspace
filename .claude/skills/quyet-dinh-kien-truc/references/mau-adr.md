# Mẫu ADR (Architecture Decision Record)

Tên file: `adr/NNNN-ten-ngan-gon.md`. Viết ngắn (1-2 trang), ai đọc cũng hiểu sau 6 tháng.

```markdown
# ADR-NNNN: <Tiêu đề quyết định, dạng khẳng định>

- **Trạng thái:** Đề xuất | Đã duyệt | Bị thay thế bởi ADR-xxxx | Lỗi thời
- **Ngày:** YYYY-MM-DD
- **Người đề xuất:** <tên/vai trò>   **Người duyệt:** <BGĐ/trưởng IT; để trống nếu chưa duyệt>
- **Liên quan:** <ADR khác, tài liệu nguồn kèm trang>

## 1. Bối cảnh
Vấn đề cần quyết định và vì sao phải quyết định bây giờ. Lực tác động: yêu cầu nghiệp vụ, ràng buộc, quy mô hiện tại (có số), hiện trạng (As-Is).

## 2. Thuộc tính chất lượng ưu tiên
Xếp hạng 3-4 thuộc tính quan trọng nhất cho quyết định này (xem `thuoc-tinh-chat-luong.md`) và điều chấp nhận hy sinh.

## 3. Các phương án đã xem xét
### Phương án A: <tên>
Mô tả ngắn. **Ưu:** ... **Nhược:** ... **Rủi ro:** ... **Chi phí/độ phức tạp vận hành:** ... **Đảo ngược được không:** ...
### Phương án B: <tên>
...
### Phương án C: Giữ nguyên/làm tối thiểu (nếu liên quan)
...

## 4. Quyết định (đề xuất)
Chọn phương án nào, **vì sao** (gắn với thuộc tính ưu tiên).

## 5. Hệ quả
- **Tích cực:**
- **Tiêu cực/đánh đổi chấp nhận:**
- **Việc phải làm theo:** (kèm người phụ trách, hạn)

## 6. Kiểm chứng
Cách chứng minh sớm quyết định đúng (spike/PoC), tiêu chí đạt/không đạt, thời hạn.

## 7. Điều kiện xem xét lại
Dấu hiệu/ngưỡng khiến phải đổi quyết định (ví dụ đơn/ngày vượt X, đội IT tăng/giảm, nhà cung cấp đổi chính sách).

## 8. Nguồn và giả định
Tài liệu, dữ liệu, ngày; danh sách **[Giả định]** chưa xác nhận.

## 9. Nhật ký thay đổi
| Ngày | Thay đổi | Người |
|---|---|---|
```
