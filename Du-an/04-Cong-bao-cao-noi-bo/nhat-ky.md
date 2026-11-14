# Nhật ký dự án 04 Cổng báo cáo nội bộ

## 2026-10-27 (sau)
- Nhận prototype **WORKNOTE** (3 màn hình, ảnh trong `tai-lieu-goc/anh/`). Người dùng chốt: đơn giản; **đính kèm file + đầu mục công việc + mục phản hồi**; **ai cũng xem được**; trước mắt **Tổng quan + Tạo báo cáo dạng hộp thoại**; trạng thái như prototype (Hoàn thành, Đang thực hiện, Chờ duyệt, Có vướng mắc).
- Đã dựng bản chạy thử trong `app/` (Node + SQLite có sẵn, không cần cài thêm). Đã kiểm thử API (tạo, kiểm tra dữ liệu, chặn file `.exe`, chặn link `javascript:`, chặn truy cập ngoài thư mục) và chụp giao diện bằng Chrome.
- Chưa làm: đăng nhập/phân quyền, sửa/xóa, thông báo, nháp.

## 2026-10-27
- Người dùng nêu nhu cầu: website nhỏ tự host để cả đội báo cáo thay vì tin nhắn nhóm; có thể đẩy file đính kèm; tách khỏi dự án Facebook Ads. Báo cáo hiện gửi qua tin nhắn, dễ trôi, không quản lý. [Người dùng nói]
- Quyết định: lập thành **dự án 04**.
- Đã trao đổi: gói Vercel miễn phí chỉ cho dùng cá nhân phi thương mại; "1 GB miễn phí" của Supabase là dung lượng file, database là 500 MB; chỉ thử bằng dữ liệu không nhạy cảm.
- Chưa có: số người, người xem, mẫu báo cáo, chỗ chạy thật.
