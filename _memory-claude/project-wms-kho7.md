---
name: project-wms-kho7
description: "Dự án số hóa Kho 7 cà phê Ganico (Gani 2 WMS): sếp yêu cầu barcode/RFID, người dùng đã làm demo giao anh An (IT) code"
metadata:
  node_type: memory
  type: project
  originSessionId: e731f2bd-7bcc-4456-acec-ae445b3c234e
  modified: 2026-11-07T02:02:03.183Z
---

Từ 2026-10-26: sếp yêu cầu số hóa kho cà phê (Kho 7, Ganico) bằng barcode/RFID vì kho đang thủ công qua Viber, lo thất thoát. Người dùng đã thiết kế demo "Gani 2 WMS" (file `Gani 2 WMS.html`, sổ tay `Sổ tay WMS Version 1.0.pdf`) giao anh An (trưởng IT) code; sơ đồ phân quyền: `Ganico2_so_do_phan_quyen_va_quy_trinh (1).pdf`. Người dùng nhận ra mình chốt barcode trước khi khảo sát giải pháp, nên đang quay lại khảo sát thị trường và cách doanh nghiệp khác vận hành. Chưa có số liệu thất thoát (cần đo bằng kiểm kê thử).

Ghi chú chi tiết (điểm cần làm rõ trong demo: 3 ngưỡng độ ẩm khác nhau, dung sai cân, mức truy vết lô/pallet/bao, FIFO chưa chốt) nằm ở `reference/kho-7-gani-2-wms.md`.

**2026-11-04:** Kho 7 đang ở **bước 2 (học thị trường)**. Đã có brief gửi các bên và phiếu đi demo kèm thang chấm (link trong `Du-an/01-Kho-Real-time/README.md`). Việc tiếp theo: đi demo, chấm điểm, và đo baseline thất thoát (kiểm kê đối chiếu) song song.

**2026-11-04, sau họp Giám đốc (người dùng nói):** hướng là **kết hợp cân + QR + RFID**, và **mua trọn gói thiết bị kèm phần mềm của nhà cung cấp để dùng trước**, chưa nối Gani 2, tự thiết kế sau. Đã tóm tắt 2 bên trên Google Docs: Nextwaves (RFID, kit 27tr gồm VAT, không có kg) và Delfi Technologies (QR + cân, chưa báo giá); link trong README dự án. Đang tìm thêm bên. Tiêu chí mới thay "nối Gani 2": lấy được toàn bộ dữ liệu ra.

**2026-11-06, chốt phân quyền khi dùng Nextwaves Sense Inventory (người dùng chốt, sẽ làm thành file chi tiết + hỏi lại Nextwaves; không cần tạo tài khoản test):** nhập kho bắt đầu từ **đơn mua hàng** (mua hàng hoặc kế toán tạo), kho nhận bằng "Nhận hàng PO" trên app; **kế toán duyệt phiếu nhập/xuất** (không để quản lý kho duyệt); Kho 7 có 1 quản lý kho, không tự quét; kiểm kê: quản lý kho chốt, **kế toán duyệt cuối** (cần tạo vai trò "Kế toán" có stock.reconcile.approve/post và stock_request.confirm); 5 vai trò: nhân viên kho (app), quản lý kho (app+web), kế toán (web), mua hàng (web, tạo đơn mua), admin. Nextwaves không gợi ý FIFO/bao dở khi xuất thủ công → quy định kho, hỏi Nextwaves làm thêm. Câu hỏi treo cho Nextwaves: kg số lẻ bị báo "phải số nguyên", ô trừ vỏ, kiểm kê mù, nối cân, FIFO ở màn nào, app có hộp Cân túi/danh sách PO chờ nhận không, quyền stock_operation.validate của nhân viên kho có vượt duyệt không, giá theo số tài khoản.

**2026-11-06 tối:** đã có trang hướng dẫn 5 tab (nhập, xuất, xé lẻ, kiểm kê, dùng lại thẻ) chạy thật trên demo Nextwaves: https://claude.ai/artifact/C3yFWucBn7A48tRXLve35W ; tài liệu Google Doc phân quyền + luồng (định dạng chuẩn): https://docs.google.com/document/d/1NJ0QqWcWSVrYN6Q_Rxay2Fa9wJhmR_8YFIlqHw8C3Z8/edit . Ngày 07/11 người dùng sẽ hỏi lại Nextwaves 13 câu. Cách làm hướng dẫn lưu thành skill `huong-dan-tu-demo`.

**2026-11-06 khuya, đọc docs.nextwaves.com (bản vi):** tài liệu có ô "Bì mỗi túi" khi nhập túi (demo chưa thấy); ví dụ số lẻ "1,235 kg" (demo báo lỗi số nguyên); không có kiểm kê mù, không nối cân (gõ tay); FIFO/FEFO "hệ thống chọn lô" khi xuất nhưng không nói màn nào; chốt kiểm kê có 3 lựa chọn rồi "Duyệt đối chiếu"; đơn mua bật ở Cài đặt → Tính năng; không có giá. Mã quyền stock_operation.validate không có trong tài liệu.

**2026-11-07 (người dùng nói):** Nextwaves báo **nối cân làm được**, cần đội kỹ thuật của họ làm thêm, chưa có giá. Người dùng cho rằng nhập kg số lẻ "chắc là được", bỏ khỏi danh sách rủi ro. Báo cáo trực quan gửi BGĐ (bản thử, 4 phần: làm được → thiết bị và giá → cần kiểm tra lại → bước tiếp): https://claude.ai/artifact/F6wz1rxqqRtpMwxGAu5mve ; nguồn `scratchpad/bao-cao/src-v3.html` (ảnh chèn bằng {{KIT}}/{{THE}}).

**Why:** để phiên làm việc sau (kể cả khi đổi tài khoản) tiếp tục đúng chỗ.
**How to apply:** bước tiếp theo trong kế hoạch: skill `khao-sat-giai-phap` (đóng khung bài toán, kiểm tra giải pháp không cần mua gì, rồi khảo sát thị trường), sau đó `business-case-lo-trinh`, `viet-prd-user-story`.

**Cập nhật 2026-10-26:** thêm skill `tu-van-giai-phap` và `huan-luyen-kien-truc-su` (tổng 7 skill). Đề xuất kế toán: dập QR/mã lô tại nguồn rồi thông quan qua forwarder; chỉ hàng bán cho Kho 7 mới nhập kho. Đã tra web: dấu ICO tại nguồn là thông lệ, chưa có chuẩn nội dung QR (xem `truy-vet-lo-ca-phe.md`).

**Cập nhật 2026-10-28 (người dùng nói):** demo Gani 2 đang chạy; ý sếp là người dùng tìm hiểu thiết bị QR/RFID để sau này tích hợp vào phần mềm; người dùng muốn hiểu nghiệp vụ kho trước.
**Chỉ đạo của sếp (2026-10-26):** tạm dừng demo WMS (các luồng nghiệp vụ sẽ chốt sau). Việc trước mắt: tìm hiểu các bên bán giải pháp kho làm quy trình kiểm soát hàng thời gian thực thế nào; không "làm lại bánh xe"; không chỉ số hóa mà phải **tối ưu** quy trình. Người dùng nghĩ: **mua thiết bị, phần mềm chưa chắc mua** (có thể dùng thử). Tiêu chí: giảm thất thoát **và** thời gian thực. Phạm vi: Kho 7 (cà phê) trước, sau mở rộng sang kho Tizi. Đã tạo skill `thiet-ke-quy-trinh-to-be` (tổng 8 skill) và khảo sát bước đầu, kết quả ở `kho-wms.md` mục 7.

**2026-11-03, chốt vai trò (người dùng nói, tôi tư vấn):** sếp không cần người dùng thiết kế phần mềm. Việc của BA: học cách các bên giải quyết (demo, dùng thử, mua thử thiết bị) → thiết kế lại quy trình Kho 7 (To-Be + ma trận kiểm soát + thiết bị) → **chốt scope, sếp duyệt, rồi mới đưa IT vào**. "Không xây từ 0" = so To-Be với mục kho có sẵn trong Gani 2, chỉ giao IT phần thiếu (gap). Đã có file As-Is: `tai-lieu-goc/docx/Kho7_Luong_hien_tai_AsIs.docx` (2026-11-03). Dữ kiện Kho 7 mới: nhãn bao chỉ có chữ (xem `thuc-te-cong-ty.md`). (Ghi chú "10 bao/pallet, cân 150 kg" ở đây trước đây là sai; sửa 2026-11-11: không dùng pallet, cân 10–12 bao/lượt trên cân sàn Fuji FI05, bỏ cân 150 kg.)

**2026-11-11 (người dùng chốt, máy công ty):** chốt luồng cân + QR, xem `kho-7-gani-2-wms.md` mục 10 (đơn vị kg cả bì, ngưỡng −0,5%/+0,1%, cân cả nhập và xuất, FIFO, QR trước RFID sau, đầu cân FI05 dùng Comport #2 với cáp USB–RS232). Nextwaves vẫn là hướng chính cho nối cân; 6 câu hỏi về cách hiển thị số cân trên phần mềm ở mục 10. Dự phòng: tự mua thiết bị và tự viết chương trình trạm cân. Tài liệu: https://claude.ai/artifact/ECTZw6uTowC7fN3TLCbNJy . Việc tiếp: hỏi Nextwaves, mua cáp, viết chương trình đọc cân để thử.

**2026-10-27, từ hai đoạn chat Gemini của người dùng:** sếp muốn tập trung tìm giải pháp **QR/RFID (nhận dạng tự động) và đăng ký demo các bên**, Gani cũ chạy song song, không xây lại phần mềm kho từ đầu (IT code nhanh nhờ AI). Nên bộ RFI hiện tại thiên về **phần mềm** cần bổ sung bộ RFI **thiết bị/Auto-ID** (RFID xuyên khối hạt ẩm, thẻ trên bao đay, PDA, cân + máy in nhãn, ROI mỗi tem). Người dùng hiểu vai trò mình là BA "người đi nối điểm đứt dữ liệu", chưa chắc là AI Engineer.

**2026-11-12/13 (máy công ty, người dùng chốt):** bỏ hướng mua phần mềm Nextwaves; **mua thiết bị Nextwaves, tự tích hợp vào Ganico v2** (SDK MIT), phần mềm Nextwaves dùng tạm. Luồng nhập mới: thẻ qua đầu đọc để bàn → cân theo lượt (số bao tùy ý) → chia đều kg theo SKU; không gán kg cho sản phẩm; một container = một lô; không trừ bì; không ăng-ten. Chạy thử phân quyền đạt (chi tiết `reference/kho-7-gani-2-wms.md` mục 11); 4 vai trò và tài khoản TEST- đang để trên tenant xuong.nextwaves.app (mật khẩu chỉ ở máy công ty). Người dùng muốn chốt **từng vòng ngắn, không tự ghi "đã chốt"** khi họ chưa nói chốt.
