# WORKNOTE: bản chạy thử

Cổng báo cáo công việc nội bộ. Gồm: **Tổng quan** (thẻ số liệu, lọc, báo cáo gần đây), **Tạo báo cáo** (hộp thoại, đính kèm file), **chi tiết báo cáo** (file đính kèm, phản hồi). Ai mở cũng xem được (chưa có đăng nhập).

## Chạy
```
cd Dự Án/04 Cổng báo cáo nội bộ/app
node server.js
```
Mở **http://localhost:3000**. Cần Node 22 trở lên (không cần cài gói nào, không cần Docker). Dừng: `Ctrl+C` trong cửa sổ đang chạy.

- Đường dẫn nhanh: `http://localhost:3000/#/new` (mở thẳng form tạo), `http://localhost:3000/#/report/1` (mở báo cáo số 1).
- Lần đầu có **5 báo cáo mẫu** (tên người trong mẫu là giả). Muốn bắt đầu trống: dừng server, xóa thư mục `data/`, chạy `node server.js --empty`.
- Tên của bạn: bấm vào tên ở góc phải trên cùng; lưu trong trình duyệt, tự điền khi gửi báo cáo/phản hồi.

## Dữ liệu nằm đâu
Thư mục `data/`: `worknote.db` (báo cáo, phản hồi) và `uploads/` (file đính kèm). **Sao lưu = chép thư mục `data/`.**

## Giới hạn hiện tại
- **Không có đăng nhập, không phân quyền** (theo yêu cầu bản đầu). Mặc định chỉ máy này truy cập được. Muốn mở cho mạng nội bộ: `HOST=0.0.0.0 node server.js`, **chỉ làm trong mạng tin cậy**, vì ai cũng đọc và gửi được.
- File: PDF, Word, Excel, CSV, PowerPoint, TXT, ảnh; tối đa 25 MB mỗi file. Không nhận loại khác. **PDF, ảnh và TXT xem được ngay trong trang** (nút “Xem”); Word, Excel, PowerPoint phải tải về (trình duyệt không tự mở được).
- Chưa có: sửa/xóa báo cáo, thông báo, nháp, đăng nhập, quản lý danh sách dự án. Phản hồi hiện chưa có người nhận thông báo.
- Giao diện ngày/giờ lấy theo máy.

## Mã nguồn
`server.js` (máy chủ + cơ sở dữ liệu SQLite có sẵn trong Node), `public/index.html`, `public/style.css`, `public/app.js`.
