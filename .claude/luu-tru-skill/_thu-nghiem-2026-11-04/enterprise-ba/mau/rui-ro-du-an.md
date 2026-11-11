# Rủi ro dự án thường gặp tại Tbestpro

| Nhóm | Rủi ro | Dấu hiệu | Cách giảm |
|---|---|---|---|
| Nghiệp vụ | **Định nghĩa số liệu chưa chốt** (giá vốn, doanh số tính lương, CPQC) | Mỗi báo cáo ra một số | Chốt với BGĐ trước khi thiết kế; ghi vào từ điển chỉ số |
| Nghiệp vụ | Yêu cầu trôi, nhiều bên mỗi người một ý | Đổi phạm vi liên tục | Người ra quyết định duy nhất, chốt demo theo vai trò |
| Dữ liệu | Dữ liệu cũ bẩn (SKU trùng, kho gộp, tên người thay mã) | Chuyển đổi lệch số | Làm sạch trước; bộ số liệu vàng (golden dataset); chạy song song |
| Kỹ thuật | Hệ cũ thiếu backup, lỗ hổng bảo mật, Vue 2 hết hỗ trợ | Sự cố, mất dữ liệu | Vá khẩn trước; không chờ rebuild |
| Kỹ thuật | Tích hợp sàn/hãng vận chuyển đổi API, token xoay vòng | Mất đồng bộ đơn | Một chủ token, cảnh báo connector im lặng, polling đối chiếu |
| Tiến độ | Ước lượng lạc quan, đội IT nhỏ, phụ thuộc người chủ chốt | Trễ mốc, quá tải | Chia giai đoạn nhỏ, cổng quyết định, tài liệu hóa, dự phòng 15-30% |
| Con người | Nhân sự (50 pickup, telesales PH) không quen hệ thống mới, tiếng Anh | Dùng sai, né hệ thống | Giao diện song ngữ, đào tạo tại chỗ, người dẫn đường, hỗ trợ giờ đầu |
| Con người | Kháng cự thay đổi (MKT quen khai tay, Excel quen tay) | Dùng song song hai nơi mãi | Giữ tên menu/mẫu xuất quen thuộc, nêu lợi ích trực tiếp cho từng vai trò |
| Tài chính | Chi phí vượt, đa tiền tệ, chi phí ẩn (chạy song song, AI) | Ngân sách cạn giữa chừng | Dự phòng, theo dõi theo tháng, hạn mức gọi model |
| Tổ chức | Quyền sở hữu mơ hồ giữa IT/BA/vận hành | Việc rơi giữa hai bên | RACI, benefit owner |
| Vận hành | Chạy song song làm công việc gấp đôi | Kế toán/vận hành quá tải | Lên lịch, hỗ trợ thêm nhân lực tạm, tự động hóa đối soát |
| Tuân thủ | Dữ liệu cá nhân, hóa đơn, thuế ở nhiều nước | Phát hiện muộn | Rà soát sớm với kế toán trưởng/pháp lý |
| AI | Agent làm sai, chi phí model tăng | Số liệu lạ, hóa đơn model cao | Mức tự chủ L0-L3, người duyệt, hạn mức |
| **Không làm** | Thất thoát tiếp diễn, báo cáo sai, rủi ro bảo mật, mất lợi thế | Số liệu xấu dần | Luôn nêu chi phí của việc không hành động |

Mẫu ghi: Rủi ro | Xác suất (T/TB/C) | Tác động (T/TB/C) | Cách giảm | Người phụ trách | Dấu hiệu cảnh báo sớm.
