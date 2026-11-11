# Nhật ký dự án 01 Kho

> Mỗi mục: ngày, việc/quyết định, bằng chứng/nguồn, việc tiếp theo. Mới nhất ở trên.

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
