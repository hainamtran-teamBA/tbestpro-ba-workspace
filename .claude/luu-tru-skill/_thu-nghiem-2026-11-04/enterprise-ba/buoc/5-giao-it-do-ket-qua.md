# Bước 5 · Giao IT và đo kết quả

**Mục tiêu:** IT đọc xong làm được mà không phải hỏi lại; sau khi chạy thử thì đo được có đạt hay không.

## Phần A: Giao IT

Chỉ giao **phần còn thiếu** (danh sách từ bước 3), không viết lại cái hệ thống đã có.

1. **Phát biểu vấn đề và chỉ số thành công** lấy từ bước 0 và 4, không viết lại.
2. **Vai trò và quyền:** ai làm gì, ai không được xem gì.
3. **Phạm vi:** trong và ngoài (phần "không làm" là bắt buộc); MVP và phần để sau.
4. **Luồng chính, luồng rẽ, ngoại lệ** theo `mau/checklist-edge-case.md`. Mỗi ngoại lệ ghi: hệ thống làm gì, báo gì, ai xử lý.
5. **Quy tắc nghiệp vụ** đánh số (BR-01…), bảng chuyển trạng thái, dữ liệu (trường, bắt buộc, kiểm tra), tích hợp (ai làm chủ dữ liệu, xử lý lỗi, chống ghi trùng).
6. **Yêu cầu chất lượng bằng số:** không viết "nhanh", "dễ dùng"; viết "cập nhật tồn dưới 5 giây", "quét một pallet dưới 30 giây".
7. **Viết PRD** theo `mau/mau-prd.md` (1–6 trang) và **user story** theo `mau/mau-user-story.md`: tiêu chí chấp nhận dạng Cho trước / Khi / Thì, có cả luồng lỗi.
8. **Rà soát** theo `mau/checklist-chat-luong.md`, rồi cho agent `phan-bien` đọc.

Tài liệu cho IT tách riêng với tài liệu cho sếp.

## Phần B: Đo kết quả thí điểm (Solution Evaluation trong BABOK)

1. **Trước khi chạy:** chốt chỉ số, baseline, tiêu chí đạt, người đo, nguồn dữ liệu.
2. **Trong khi chạy:** ghi lại sự cố, các cách người làm tự lách quy trình, và phản hồi của người vận hành.
3. **Sau khi chạy** (mốc 2 tuần, 30 ngày, 90 ngày): so với baseline. Đạt thì mở rộng; không đạt thì tìm nguyên nhân: do quy trình, do công cụ hay do con người.
4. **Rút kinh nghiệm:** điều đúng, điều sai, điều sẽ làm khác. Ghi vào `Tri-thuc/` và báo agent `kiem-dinh-skill` để cải tiến bộ skill.

## Xong dự án khi

Chỉ số đạt tiêu chí, người vận hành dùng ổn định, và bài học đã được ghi lại.
