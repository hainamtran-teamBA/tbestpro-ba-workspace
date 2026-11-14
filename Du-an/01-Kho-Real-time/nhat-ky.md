# Nhật ký dự án 01 Kho

> Mỗi mục: ngày, việc/quyết định, bằng chứng/nguồn, việc tiếp theo. Mới nhất ở trên.

## 2026-11-13
- Đọc bản mẫu "Đặc tả UC-02 Nhập kho" (HTML, 10/11): khung tốt; nội dung UC-02 cần cập nhật theo quyết định 11–12/11 (pallet, trừ bì, cân theo lượt chia đều, một container một lô).
- Chốt hướng làm **trang web quản lý dự án** riêng (memory `project-trang-quan-ly-du-an`). Thử 4 công cụ vẽ sơ đồ: chọn PlantUML (activity chia làn, use case, trạng thái), D2 (sơ đồ ngữ cảnh), mindmap dạng thẻ tự vẽ; bỏ bpmn-js.

## 2026-11-12
- Chạy thử 2 lần trên tài khoản test Nextwaves: tạo 4 vai trò, 4 tài khoản; nhập, xuất, xé bao, kiểm kê, đảo phiếu theo từng vai trò. Kết quả: `reference/kho-7-gani-2-wms.md` mục 11.
- Chốt: mua thiết bị Nextwaves, tự tích hợp vào Ganico v2 qua SDK mã nguồn mở; phần mềm Nextwaves dùng tạm. Sản phẩm không gán kg; một container một lô; chia đều kg theo SKU; không trừ bì; chưa cần ăng-ten. [Người dùng nói]
- Soạn tin nhắn gửi anh Thanh Giang (Nextwaves) về phần xử lý dữ liệu kg.
- Tiếp theo: chốt 5 câu còn treo (mục 11); cập nhật UC-02 theo khung mới.

## 2026-11-11
- Chốt luồng cân + QR cho Kho 7 (grilling 6 vòng): kg cả bì, cân 10–12 bao/lượt cả khi nhập và xuất, ngưỡng −0,5%/+0,1%, FIFO, QR trước, RFID sau cho kiểm kê. Chi tiết: `kho-7-gani-2-wms.md` mục 10. [Người dùng nói]
- Sửa dữ kiện sai: kho **không dùng pallet**; bỏ cân 150 kg. [Người dùng nói]
- Đầu cân Fuji FI05 có cổng RS232; dùng Comport #2 với cáp USB–RS232. [Ảnh kho PH chụp]
- Tài liệu: [Số hóa kho cà phê: cân, QR và RFID](https://claude.ai/artifact/ECTZw6uTowC7fN3TLCbNJy).
- Tiếp theo: hỏi Nextwaves 6 câu về cách hiển thị số cân; mua cáp; viết chương trình đọc cân để thử.

## 2026-10-27
- Người dùng đọc lại hai đoạn chat Gemini; xác nhận hướng sếp: tìm giải pháp QR/RFID, đăng ký demo, Gani cũ chạy song song, không xây lại phần mềm kho. [Người dùng nói]
- Quyết định PM: **ưu tiên nhà cung cấp thiết bị nhận dạng tự động trước, phần mềm sau**. Cần soạn bộ RFI thiết bị (K3).
- Đã có kiến thức về mã lô, QC, kiểm tra xuất nhập khẩu (ghi ở `kho-7-gani-2-wms.md` mục 8-9).

## 2026-10-26
- Chốt: đã dừng demo Gani 2 WMS theo chỉ đạo sếp; giữ làm bộ kịch bản thử.
- Quyết định giữ: không gộp các file kho; thông tin mới ghi vào file phù hợp.
- Khảo sát web vòng 1-2 hoàn tất (ghi ở `kho-wms.md` mục 7-8); soạn RFI phần mềm (docx EN/VI).
- Xác nhận: Kho 7 = cà phê Ganico; phiếu xuất nhiều khả năng ở Gani 1 [cần xác nhận].
- Chưa có: baseline thất thoát, quy mô (bao/ngày), phản hồi sếp.
