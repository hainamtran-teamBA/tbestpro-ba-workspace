# Dự án 03: SMS và agent hậu mãi (từ giảm chi phí sang kích thích mua lại)

> Cập nhật: 2026-10-27 | Trạng thái: **Chưa bắt đầu** (đã có ý tưởng và tra cứu) | Chủ: Hải Nam | Người duyệt: Sếp, kế toán (chi phí), pháp lý

## 1. Bối cảnh
- Luồng hiện tại: J&T quét mã → Tizi nhận webhook → gửi SMS qua Semaphore; mẫu dài tách 3-4 tin, khoảng 1.000 đ/đơn, khoảng 45 triệu VNĐ/tháng. [Tài liệu: Đề xuất tối ưu chi phí SMS]
- Đề xuất đã có: rút mẫu dưới 160 ký tự; đơn chat gửi qua Messenger (thẻ POST_PURCHASE_UPDATE chỉ cho mã vận đơn); khoảng giảm 86%. Kế hoạch: BGĐ duyệt, BA viết đặc tả, Dev lập trình. Hai mức xác nhận đơn qua Messenger (mức 1 làm tay, mức 2 cần dev).
- **Mở rộng (ý của người dùng):** tin nhắn theo sự kiện **"đơn giao thành công"** do **agent soạn tin và chọn gợi ý sản phẩm** để **kích thích khách mua thêm**; có thể dùng kênh giàu hình ảnh (MMS/Viber/Messenger).

## 2. Mục tiêu và giả thuyết
- Giảm chi phí tin nhắn **và** tăng **đơn lặp** (doanh thu lặp trừ chi phí tin).
- **Giả thuyết cần kiểm chứng:** tin sau khi giao, kèm gợi ý, làm tăng tỷ lệ đặt lại mà không tăng hoàn đơn hay từ chối nhận tin.
- Chỉ số thành công (đề xuất): tỷ lệ đặt lại trong 14-30 ngày, **doanh thu lặp trừ chi phí tin**, tỷ lệ hoàn của đơn lặp, tỷ lệ từ chối nhận tin. Ngưỡng đặt sau khi đo baseline.

## 3. Điều đã tra (2026-10-27; chi tiết ở `thuong-mai-dien-tu.md`)
- **Pháp lý Philippines:** tin quảng cáo cần **đồng ý trước và có đường từ chối**; tin giao dịch thường nằm trong quan hệ hiện có. Hiệu lực một thông tư 2009 chưa xác nhận; chưa thấy hướng dẫn NPC. Nguồn là bên thương mại.
- **MMS A2P ở Philippines:** [chưa tìm thấy]. Viber Business, Messenger, RCS là kênh thay thế; so sánh nhiều kênh.
- **Thời điểm:** bán thêm **sau giao hàng**, không phải lúc "đơn đã gửi"; không có số thí nghiệm riêng cho COD.

## 4. Thiết kế đề xuất (mức khái niệm)
Ba nhịp tin: (1) **giao dịch** (đã gửi, mã vận đơn, không quảng cáo); (2) **sau giao vài ngày** (hỏi cảm nhận, gợi ý sản phẩm liên quan); (3) **nhắc mua lại** theo chu kỳ dùng.
**Agent hậu mãi:** sự kiện `đơn giao thành công` → agent chọn gợi ý theo lịch sử mua (theo quy tắc) → **soạn nháp** → **người duyệt** (mức tự chủ L1) → gửi → đo kết quả. Khớp thiết kế agent của Tbestpro OS.

## 5. Phụ thuộc
- **Độ trễ trạng thái giao hàng:** hệ thống hiện đồng bộ hành trình J&T/Flash theo lịch (06:00 và 20:00) và đôi khi qua file tay, nên "giao thành công" có thể chậm; cần webhook thời gian thực.
- **Đồng ý nhận tin** của khách và nơi lưu (consent).
- Dữ liệu SĐT, lịch sử mua từ Tizi (tool Tizi Tbest từng báo lỗi phiên; nhờ anh An/BA trích số).
- Người triển khai: anh Tùng (webhook, thêm cột/trạng thái trên Tizi), anh An (ứng dụng Meta) theo tài liệu kế hoạch.

## 6. Rủi ro
| Rủi ro | Cách giảm |
|---|---|
| Vi phạm quy định tin quảng cáo | Hỏi pháp lý; chỉ gửi cho khách đã đồng ý; tách tin giao dịch và quảng cáo |
| Tin bán thêm làm tăng hoàn/từ chối | Gửi sau giao; thí nghiệm có nhóm đối chứng; đo từ chối |
| Chi phí tăng khi thêm kênh | So sánh Viber/Messenger/SMS; đo chi phí mỗi đơn lặp |
| Agent soạn sai/không hợp thông điệp (sản phẩm giảm cân/làm đẹp nhạy cảm) | Người duyệt; kho mẫu tin đã duyệt; danh sách cấm |
| Chưa có baseline | Đo tỷ lệ mua lại theo SĐT trước |

## 7. Câu hỏi mở
1. **Tỷ lệ khách mua lại hiện nay** (theo SĐT)? Sản phẩm nào có chu kỳ mua lại rõ?
2. Công ty **đã có sự đồng ý** nhận tin quảng cáo chưa, lưu ở đâu?
3. Kênh nào khách phản hồi tốt nhất (SMS, Viber, Messenger)?
4. Phạm vi thí nghiệm: một thị trường và một nhóm sản phẩm nào?
5. Ai duyệt nội dung tin (Marketing, pháp lý)?
