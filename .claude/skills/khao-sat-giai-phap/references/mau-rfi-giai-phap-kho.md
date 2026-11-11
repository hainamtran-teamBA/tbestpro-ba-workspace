# Mẫu bộ câu hỏi gửi nhà cung cấp giải pháp kho (RFI) và kịch bản thử

> Dùng cho khảo sát giải pháp kho (kho cà phê Kho 7 trước, kho Tizi sau). **Người dùng tự gửi**; skill không liên hệ ai. Mặc định **không nêu tên công ty, không gửi số liệu nội bộ**; chỉ mô tả chung. Soạn bản tiếng Anh cho nhà cung cấp quốc tế và Philippines, tiếng Việt cho nhà cung cấp Việt Nam.

## 1. Bối cảnh mô tả chung (an toàn để gửi)
- Công ty thương mại nông sản, kho ở Philippines, hàng cà phê nhân đóng **bao 60 kg** (bao đay), nhập khẩu theo container từ Việt Nam; bán B2B theo kg, có bán lẻ **mở bao lấy phần lẻ** (ví dụ 30 kg).
- Quy mô cỡ vừa: vài chục đến vài trăm bao mỗi ngày [điền số khi đã đo]; một kho, sau mở rộng nhiều kho và nhiều pháp nhân.
- Hiện kho thủ công; muốn **kiểm soát tồn thời gian thực, giảm thất thoát**, truy vết theo lô, quản lý bao dở, nối cân.
- Hệ thống nội bộ hiện có (ERP/CRM nội bộ) cần **tích hợp qua API**; hóa đơn đẩy sang phần mềm kế toán.

## 2. Bốn kịch bản đề nghị nhà cung cấp trình diễn bằng dữ liệu của chúng tôi
1. **Nhận hàng:** lô 1.800 kg, 30 bao; đạt 1.740,5 kg, hỏng/mốc 60 kg; ghi độ ẩm, ngày sản xuất; tạo lô, in nhãn, cách ly hàng hỏng; cất vào vị trí quét mã; tồn chỉ vào "khả dụng" khi được duyệt.
2. **Xuất và rạch bao:** đơn 90 kg (30 kg bao dở + 60 kg bao nguyên theo quy tắc), đơn 30 kg phải **rạch bao 60 kg**; cân thật; phần dư thành bao dở có mã, liên kết nguồn; **quét sai lô** phải bị chặn.
3. **Kiểm kê:** kiểm kê mù theo lô/vị trí, lệch 2 kg, kho gửi đề xuất, **người khác** duyệt; tồn chỉ đổi khi duyệt; xem nhật ký bất biến.
4. **Điều phối:** lệnh xuất tạo từ hệ thống khác (hoặc API), không qua tin nhắn; trạng thái quay lại hệ thống thời gian thực.

## 3. Câu hỏi theo nhóm
**A. Phù hợp nghiệp vụ**
1. Quản lý theo **lô** (lô nhà cung cấp và lô nội bộ), độ ẩm/chất lượng theo lô, FIFO/FEFO và có thể **đè quy tắc** có duyệt?
2. **Bao dở/hàng lẻ:** tách một bao thành phần dư, nhãn mới, truy vết về bao gốc, ưu tiên xuất bao dở?
3. **Đơn vị đo:** kg và bao cùng lúc, trừ bì, làm tròn?
4. **Cân:** tích hợp cân (Bluetooth/nối tiếp/USB) có sẵn không? Cân hãng nào đã thử? Có kiểm tra **số cân ổn định**, **trừ bì**, lưu bằng chứng (ảnh)?
5. **Dung sai và hao hụt:** thiết lập ngưỡng chấp nhận chênh lệch, định mức hao hụt, cảnh báo?
6. **Kiểm kê:** mù, theo chu kỳ ABC, theo sự kiện, quy trình duyệt, người đếm khác người duyệt?
7. **Nhận hàng:** đối chiếu thông báo giao hàng/đơn mua, **chênh lệch với số xuất từ nguồn**, hàng hỏng cách ly?
8. **Hàng đi đường / nhiều kho / nhiều chủ hàng, nhiều pháp nhân:** hỗ trợ không?

**B. Mã và thiết bị**
9. **Loại mã:** QR, barcode, GS1-128 (SSCC, lô)? **Nhãn in từ hệ thống**: máy in nào, mẫu nhãn tùy biến?
10. **RFID:** có hỗ trợ không, ở cấp nào (bao, pallet, cổng)? Khuyến nghị trong ngữ cảnh bao đay?
11. **Thiết bị quét:** điện thoại/Android chuyên dụng/máy quét Bluetooth; thiết bị đã được kiểm chứng?
12. **Ngoại tuyến:** làm việc khi mất mạng, đồng bộ lại thế nào, xung đột xử lý ra sao?

**C. Thời gian thực và dữ liệu**
13. Độ trễ cập nhật tồn kho sau một lần quét (giây/phút)? Cập nhật theo **sự kiện**?
14. **Nhật ký thao tác bất biến;** sửa bằng điều chỉnh có duyệt; ai xem được gì?
15. **Quyền** theo vai trò, theo kho, che giá vốn với người kho?
16. Dữ liệu **xuất được** toàn bộ (định dạng), ai sở hữu, lưu ở đâu, sao lưu?

**D. Tích hợp**
17. **API/webhook** (REST?), tài liệu công khai? Nhận **lệnh xuất từ hệ thống ngoài**, đẩy **phiếu nhập/xuất/tồn** ngược lại?
18. Tích hợp **phần mềm kế toán/hóa đơn** (ví dụ MISA) và hãng vận chuyển?
19. **Chạy song song** với hệ thống cũ và **chuyển dữ liệu** (tồn đầu kỳ) thế nào?

**E. Triển khai và vận hành**
20. Lộ trình triển khai, thời gian, ai làm gì, đào tạo (**giao diện tiếng Anh/ngôn ngữ nhân sự kho**)?
21. **Dùng thử/pilot** thế nào (thời gian, phạm vi, chi phí)? Có thể chạy 4 kịch bản trên?
22. Hỗ trợ: múi giờ, ngôn ngữ, thời gian phản hồi, SLA?
23. Khách hàng tương tự (hàng bao, nông sản, hàng rời) có tham khảo được không?

**F. Chi phí**
24. Mô hình giá (thuê bao theo người dùng/kho/giao dịch, phí triển khai, tích hợp, nhãn, thiết bị, hỗ trợ), **tổng chi phí 3 năm** cho 1 kho và cho 3 kho?
25. Chi phí khi tăng khối lượng; phí rút dữ liệu; điều khoản hợp đồng tối thiểu.

## 4. Bảng chấm sau khi nhận trả lời
| Tiêu chí (trọng số) | Nhà cung cấp A | B | C | Bằng chứng |
|---|---|---|---|---|
| Lô, độ ẩm, FIFO/FEFO | | | | |
| Bao dở và cân lẻ | | | | |
| Tích hợp cân | | | | |
| Thời gian thực và nhật ký | | | | |
| API và tích hợp | | | | |
| Ngoại tuyến, thiết bị | | | | |
| Chi phí 3 năm | | | | |
| Dùng thử/pilot được | | | | |
Ghi nhãn **[theo nhà cung cấp]** cho điều chỉ nghe nói, **[đã thấy demo]** cho điều đã thấy chạy với kịch bản của mình.

## 5. Mẫu thư gửi (tiếng Anh, rút gọn)
> Subject: Request for information: inventory control and WMS for bagged commodity warehouse
>
> Hello, we are a commodity trading company operating a warehouse in the Philippines handling green coffee in 60 kg jute bags, including partial-bag sales. We are evaluating solutions for real-time inventory control with lot traceability, partial-bag handling, scale integration and API integration with our in-house systems.
> Could you (1) answer the attached questions, (2) tell us if you can demonstrate four scenarios using our sample data (receiving with moisture and lot labels, picking with partial bags, blind cycle count with approval, and API-driven pick orders), and (3) share pricing for one warehouse and for three warehouses over three years, and trial/pilot options?
> Thank you.

**Lưu ý trước khi gửi:** kiểm tra với sếp có được phép gửi chưa; không đính kèm chứng từ nội bộ; ghi lại ngày gửi và người trả lời.
