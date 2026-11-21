# Nhật ký dự án 03 SMS và agent hậu mãi

## 2026-10-27
- Người dùng mở rộng ý tưởng: SMS không chỉ giảm chi phí; gửi theo sự kiện đơn giao thành công, agent soạn tin và gợi ý để khách mua thêm; xét thêm MMS.
- Đã tra: quy định tin quảng cáo (cần đồng ý và đường từ chối), thời điểm bán thêm sau giao, kênh thay thế MMS (Viber, Messenger, RCS); chưa tìm thấy nguồn về MMS A2P ở Philippines. Ghi ở `thuong-mai-dien-tu.md`.
- Quyết định PM (đề xuất): làm **thí nghiệm nhỏ có đối chứng** trước khi mở rộng; đo baseline mua lại trước.

## 2026-11-13
- Thử gửi SMS ở Philippines bằng SmsMk365 (gói dùng thử) và SIM Philippines: gửi thành công, khách nhận được tin. Gói dùng thử chèn dòng "Sent by SmsMk365".
- 3 agent đọc toàn bộ tài liệu SmsMk365 (cả ảnh các bước). Ghi chép ở `smsmk365/` (1: bắt đầu và chiến dịch, 2: vận hành, giá, điều khoản, 3: API, WhatsApp, email, phễu); mỗi file có danh sách mục chỉ có video YouTube.
- Tóm tắt: SIM Gateway trên Android; 1,1 triệu/năm (1 máy) hoặc 2,75 triệu/năm (3 máy); cước tin trừ vào SIM; mỗi tin cách 1,5–2 phút (khoảng 30–40 tin/giờ/SIM); có webhook khi khách nhắn đến; tài liệu API phải đăng nhập; email hàng loạt và khảo sát không có tài liệu.
- Đã báo sếp, chờ chọn: chạy thử bằng file Excel xuất từ Tizi, hay làm thẳng vào Tizi.
- Câu hỏi cho nhà cung cấp: tài liệu API/webhook; giới hạn khi dùng SIM Philippines; gửi từ Excel có tính vào giới hạn danh bạ không; gói trả phí có bỏ dòng "Sent by" không.
