# Thuộc tính chất lượng (quality attributes) cho Tbestpro

Chọn **3-4** thuộc tính ưu tiên cho mỗi quyết định. Ghi mức quan trọng (Cao/Trung/Thấp) và vì sao.

| Thuộc tính | Câu hỏi kiểm tra | Ví dụ ở Tbestpro |
|---|---|---|
| **Tính đúng đắn của tiền và kho** | Có thể sai một đồng/một món hàng không? Có kiểm tra, đối soát tự động không? | Sổ cái kép, sổ lô, Airwallex phân bổ trùng, kho 7 chưa hạch toán |
| **Khả năng truy vết (audit)** | Ai làm gì, lúc nào, từ đâu; có sửa lịch sử được không? | Nhật ký bất biến, kỳ đã khóa, phiên bản công thức lương |
| **Bảo mật và phân quyền** | Ai thấy gì (lợi nhuận, lương, CCCD)? Agent AI có quyền vượt người dùng không? | "xxx" cho BA/IT, quyền theo vị trí, passkey |
| **Hiệu năng và độ trễ** | Mở báo cáo mất bao lâu? Đơn vào hệ thống trong bao lâu? | SLO: đơn vào < 5 giây, báo cáo tháng < 2 giây |
| **Độ sẵn sàng và khôi phục** | Hệ thống chết thì mất gì, mất bao lâu? | RPO ≤ 5 phút, RTO ≤ 1 giờ; chưa có backup định kỳ ở hệ cũ |
| **Khả năng mở rộng** | 3 lần đơn/ngày, thêm quốc gia/pháp nhân/kênh có phải sửa code? | Thêm pháp nhân bằng cấu hình, thêm kênh bằng adapter |
| **Khả năng thay đổi** | Đổi một quy tắc (phí sàn, công thức) cần bao lâu, ai làm? | Rule engine có ngày hiệu lực |
| **Dễ vận hành và hiểu** | Đội nhỏ có vận hành và gỡ lỗi nổi không? | Đội IT 4-5 người; chi phí vận hành microservice |
| **Khả năng tích hợp** | Nối đối tác (J&T, sàn, MISA) ổn định thế nào? | ChannelAdapter, CarrierAdapter |
| **Chi phí** | Xây, chạy, bảo trì tốn bao nhiêu, ai trả? | Hạ tầng GCP, chi phí gọi model AI |
| **Thời gian ra mắt** | Bao lâu có thứ dùng được? | Lộ trình 5-6 tháng, chạy song song 1 kỳ tháng |
| **Tuân thủ** | Quy định dữ liệu cá nhân, hóa đơn, thuế ở nơi hoạt động? | Hóa đơn Việt Nam (MISA), dữ liệu khách Philippines |
| **Khả năng kiểm soát AI** | Agent có thể làm điều nguy hiểm không, có người duyệt không? | 4 mức tự chủ L0-L3, rào chắn cứng |

Mẹo: nếu mọi thuộc tính đều "Cao", chưa phải ưu tiên. Hỏi: nếu buộc chọn giữa hai thứ, bỏ cái nào?
