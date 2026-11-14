# OMS (Order Management System)

## 1. Là gì, giải quyết gì
OMS quản lý **vòng đời đơn hàng** từ lúc đơn xuất hiện đến lúc giao xong/hoàn. Nó đứng giữa kênh bán (web, sàn, POS, chat) và kho/vận chuyển/kế toán. Câu hỏi nó trả lời: đơn này hợp lệ chưa, lấy hàng ở đâu, giao bằng gì, đang ở trạng thái nào?

## 2. Chức năng chuẩn
| Nhóm | Nội dung |
|---|---|
| Tiếp nhận đa kênh | Gom đơn từ nhiều kênh về một chuẩn dữ liệu (đơn, khách, SKU, giá) |
| Kiểm tra và xác nhận | Trùng đơn, đơn rác/gian lận, kiểm tra thanh toán, xác nhận khách (gọi/tin nhắn) |
| Giữ tồn (ATP/reservation) | Giữ hàng cho đơn, tính "tồn có thể bán" = tồn vật lý trừ đã giữ, tính cả tồn đang về |
| Điều phối (sourcing) | Chọn kho/cửa hàng xuất theo quy tắc: gần, đủ hàng, rẻ; tách hoặc gộp đơn |
| Vận chuyển | Chọn ĐVVC, tạo vận đơn, nhận trạng thái giao |
| Khuyến mãi, giá | Áp mã, combo, tính phí ship |
| Hoàn, đổi, hủy | Đơn hoàn (RMA), hoàn tiền, nhập lại kho |
| Theo dõi, thông báo | Trạng thái đơn, SMS/email/chat cho khách |

## 3. Vòng đời trạng thái (mẫu)
Mới → Chờ xác nhận → Đã xác nhận → Đã giữ hàng → Đang soạn → Đã xuất kho → Đang giao → Giao thành công | Hoàn | Hủy.
Với mỗi trạng thái, luôn hỏi: **ai/sự kiện nào chuyển trạng thái, có quay lui được không, có kích hoạt gì ở hệ thống khác không** (trừ tồn, ghi doanh thu, gửi tin).

## 4. Liên hệ kế toán và kho
- Giữ hàng (reservation) khác trừ tồn: giữ chưa phải xuất; kế toán chỉ ghi nhận khi xuất kho hoặc giao.
- Hủy/hoàn phải trả lại tồn đã giữ; sai chỗ này là gốc của "bán được mà không có hàng".
- Đơn COD: doanh thu "thật" chỉ khi giao thành công và tiền về; phải có đối soát với ĐVVC.

## 5. Rủi ro thường gặp
Oversell (bán vượt tồn), trùng đơn, địa chỉ sai gây hoàn, trạng thái cập nhật trễ làm báo cáo sai, đơn "kẹt" ở trạng thái trung gian không ai xử lý.

## 6. Tbestpro
> Nguồn: KT, IT, Quy trình FB Ads As-Is. Cập nhật 2026-10-26.
- Tbestpro **không có OMS riêng**; Tizi đóng vai trò OMS cùng WMS, CRM, báo cáo [suy luận từ KT, tài liệu không nói thẳng].
- Trạng thái đơn trong Tizi: kt (khởi tạo), cbpu (chuẩn bị pickup), cpu (chờ pickup), cxk (chờ xuất kho), dxk (đã xuất kho), ht (hoàn thành), return (hoàn về), h (hủy). Trạng thái telesale: kt (chưa gọi), ssdt (sai số), sdttb (thuê bao), kkn (không nghe máy), k (khác), ht (xác nhận), h (từ chối). Thực tế đơn đi từ "đủ điều kiện gửi" thẳng sang "đã xuất kho" (KT tr.43).
- Check trùng đơn theo cùng SĐT và nhóm sản phẩm; mã đặc biệt: ODZ (vùng không giao), INC (thiếu thông tin), lý do hủy I1 (khác quốc gia), I4 (blacklist IP), I5 (IP trùng), ipn (SĐT sai định dạng).
- Một bảng đơn dùng chung mọi kênh (khoảng 148 cột hiển thị; các bản tài liệu ghi khoảng 330 trường, lệch nhau).
- Đơn sàn TMĐT xử lý trên BigSeller; có câu hỏi chưa chốt: giữ BigSeller hay nối trực tiếp API sàn (KT tr.12, 30).
- Lộ trình Tizi 2 (IT tr.11): GĐ3 gồm telesale hàng đợi, gửi vận chuyển, mua hàng, nhận hàng, kho.
- Nỗi đau: gửi vận chuyển qua 4 tab, telesale 20 ô/cuộc gọi, nhập chi phí MKT hai lần (IT tr.10-11).
