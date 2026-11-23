# Checklist ngoại lệ (edge case) cho yêu cầu hệ thống Tbestpro

Với mỗi luồng, tự hỏi các nhóm sau và ghi **hệ thống làm gì / thông báo gì / ai xử lý**.

## Dữ liệu đầu vào
- Thiếu/sai định dạng (SĐT 09 và +639 là một số; địa chỉ không khớp barangay/city của J&T/Flash).
- Trùng (cùng SĐT và nhóm sản phẩm; trùng qua MKT Link; trùng webhook gửi lại → chống ghi trùng bằng khóa duy nhất/idempotency).
- Dữ liệu lạ từ đối tác (SKU sàn chưa map; trạng thái vận chuyển mới; đơn một sàn nhiều kiện).
- Ký tự đặc biệt, tiếng Việt/Anh lẫn lộn, độ dài quá lớn, số âm, tiền thập phân (làm tròn, đơn vị kg/pcs).

## Trạng thái và vòng đời
- Chuyển trạng thái sai thứ tự; quay lui; trạng thái "kẹt" quá X ngày (cảnh báo).
- Hủy giữa chừng (sau khi giữ hàng/vận đơn); hoàn một phần; hoàn về kho lô cũ; hàng hoàn bị thiếu/tráo.
- Sửa đơn sau khi đã xuất kho hoặc sau khi khóa kỳ (bút toán điều chỉnh).

## Đồng thời và nhất quán
- Hai người sửa cùng bản ghi; hai tiến trình trừ cùng tồn; webhook đến trước/sau; xử lý lại sau lỗi.
- Bán vượt tồn (oversell), xuất âm kho (chỉ khi cờ tenant bật, kèm cảnh báo).

## Quyền và dữ liệu nhạy cảm
- Vai trò không đủ quyền; kiêm nhiệm nhiều vị trí; vị trí đổi người; phạm vi xem theo pháp nhân/kênh/kho.
- Hiển thị "xxx" cho lợi nhuận/giá vốn/lương; xuất Excel có dữ liệu khách; xem số nhạy cảm cần xác thực lại và ghi nhật ký.
- Agent AI thao tác thay người: không vượt quyền người dùng.

## Hệ thống ngoài
- Đối tác lỗi/chậm/đổi API/token hết hạn hoặc bị xoay vòng; thử lại; hàng đợi lỗi; cảnh báo connector "im lặng".
- Webhook không ký/ký sai; tốc độ giới hạn (rate limit); dữ liệu về muộn.

## Thời gian, tiền tệ, địa phương
- Múi giờ VN và PH; giờ UTC lưu, hiển thị theo người dùng; cuối ngày/tháng khác nhau theo kho.
- Đa tiền tệ (VND, PHP, USD); tỷ giá kế hoạch hay thực, có ngày hiệu lực; không ghi đè ngược số liệu cũ.
- Ngôn ngữ: nhãn song ngữ; văn bản/mẫu tin nhắn cho khách Philippines bằng tiếng Anh.
- Kỳ đã khóa; thay đổi cơ cấu tổ chức giữa tháng (doanh số tháng cũ tính cho team cũ).

## Hiệu năng và vận hành
- Khối lượng lớn (1.500 đơn/ngày, đợt cao điểm gấp 3); báo cáo kỳ dài; thao tác hàng loạt.
- Mất mạng ở kho (PWA quét mã: xử lý ngoại tuyến?); thiết bị quét; in nhãn thất bại.
- Chạy song song hệ cũ/mới: đối soát đêm, báo lệch, quay lui.

## Hậu quả tài chính/kế toán
- Ghi sổ lệch (Nợ ≠ Có), một giao dịch khớp vượt số tiền của nó, hàng đi đường, chênh lệch tỷ giá, giao dịch nội bộ phải loại trừ khi hợp nhất.
