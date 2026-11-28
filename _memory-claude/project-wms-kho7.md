---
name: project-wms-kho7
description: Trạng thái số hóa Kho 7 (Ganico): QR + cân, tự dựng; 28/11 demo HTML đã có nhập/xuất/kiểm kê, luật xuất và kiểm kê đã chốt, chờ ok đăng và viết UC; chi tiết ở reference/kho-7-gani-2-wms.md
metadata:
  type: project
---

**Chi tiết nghiệp vụ, luồng cân, phân quyền, dung sai:** `reference/kho-7-gani-2-wms.md` (mục 10-12). Hồ sơ dự án: `Dự Án/01 WMS/README.md`. Memory này chỉ giữ trạng thái.

**Bối cảnh:** từ 2026-10-26 sếp yêu cầu số hóa Kho 7 (cà phê, Ganico) bằng barcode/RFID vì kho thủ công qua Viber, lo thất thoát. Anh đã làm demo "Gani 2 WMS" giao anh An (trưởng IT). Việc của BA: học cách các bên giải quyết, thiết kế lại quy trình To-Be, chốt scope, sếp duyệt rồi mới đưa IT vào; không xây lại từ 0.

**Trạng thái 2026-11-28 (mới nhất):** demo HTML `Trang web/ban-thu/kho7-tram-can/ganico-kho.html` (bản chạy được, đã gồm nhập + xuất + kiểm kê). Link điện thoại https://kho-qr-demo.pages.dev chỉ có bản nhập; phần kiểm kê và xuất sửa ngày 28/11 **chưa đăng**, chờ anh nói "ok đăng" (đăng bằng `npx wrangler pages deploy`, project `kho-qr-demo`; máy mới phải `npx wrangler login` lại). Dev đang làm phần mềm thật; demo chỉ để hiểu nghiệp vụ.
- **Nhập (anh duyệt):** QR `<PO>|<Lô>|<SKU>|<NNN>` (lô lấy đúng mã lô nhà cung cấp, vd 081226BT); tem A5 ngang; một phiếu mua nhiều SKU, quét SKU nào trong phiếu cũng mở lượt, chỉ chặn phiếu khác; lượt cân lẫn mã thì chia kg theo số bao; quét là số bao nhảy ngay; hiện danh sách số bao chưa quét. PDF tem 4 PO đang ở thư mục tạm (mất khi chuyển máy nếu chưa chép ra).
- **Kiểm kê (theo ý anh):** cả kho, thứ 6 hằng tuần, lúc không nhập xuất nên **không khóa** phiếu nào; đặt bao lên cân rồi quét, lẫn mã thì tự chia bao + kg; lệch kg >0,5% phải giải trình; 2 lần/tháng hay không do sếp quyết.
- **Xuất (chốt 28/11):** mọi hàng đều cân để có kg đối soát; bao nguyên quét + cân theo lượt (lẫn mã được); kg lẻ = quét bao nguồn → đổ ra túi khách → đặt túi lên cân → chốt lượt trừ kg vào bao nguồn, bao thành bao dở; **bắt buộc dùng bao dở trước**; FIFO chỉ nhắc ngầm; dung sai 0,5% **tổng kg cả phiếu** (gộp bao nguyên và túi khách); màn hình hiện "Còn cần x bao / x kg", không hiện "lô cần lấy". Giả định chưa xác nhận: túi khách rỗng được trừ bì (về 0) trước khi đổ.
- **Việc tiếp theo:** (1) anh "ok đăng"; (2) viết tài liệu tổng quan dạng Bàn dự án: viết lại UC-02 Nhập, UC-03 Xuất, UC-07 Kiểm kê trong `Trang web/ban-thu/v3/data/uc/kho-7/` (UC cũ đang theo RFID, phải hỏi trước khi ghi đè) + 1 file .md cho dev; (3) nhắc dev chốt định dạng QR trước khi in hàng loạt. Câu còn treo: có thêm bước "QL kho xác nhận thiếu bao" ở nhập không.

**Trạng thái 2026-11-25:** đã chốt luồng nhập và xuất với QR + cân, bản 1 (reference mục 13). Phần mềm tự dựng hoàn toàn, Nextwaves không giữ tồn. Bước tiếp theo: dựng giao diện demo theo mục 13.

**Trạng thái (người dùng nói 2026-11-21):** hiện tại muốn **áp dụng QR trước** (mua **máy in QR và máy quét cầm tay**), **tự dựng phần mềm**, **sau đó mới tính đến mua thiết bị Nextwaves** (RFID). Trước đó (2026-11-19) ghi là mua thiết bị Nextwaves rồi tự dựng, vì nối cân đã lấy được dữ liệu; thứ tự giờ đổi thành QR trước, Nextwaves sau. Thư mục `kho-rfid` của dev đã xóa khỏi workspace (kho này vẫn còn trên GitHub của dev). Báo cáo thiết bị: `Dự Án/01 WMS/bao-cao/bao-cao-kho7-thiet-bi.html` (có thể còn nhắc Nextwaves/RFID là bước đầu, cần rà). Mục 13 của reference (25/11) đã ghi thứ tự mới.

**Đã chốt (có trong reference):** thiết bị Nextwaves + tự tích hợp vào Ganico v2; luồng cân + QR (kg không gán sẵn, một container một lô, không trừ bì); dung sai −0,5%/+0,1% (xác nhận 2026-11-17); nguyên tắc **số kg không được sửa tay**; thử nối cân FI05 qua USB–RS232 đã lấy được dữ liệu (2026-11-17). Nextwaves báo phí phát triển riêng 60 triệu [Bên khác nói]; anh chọn không mua phần đó.

**Còn chưa rõ:** sếp đã đồng ý hướng tự dựng chưa (reference ghi "chưa trình sếp" ở 2026-11-16); ai viết và bảo trì phần mềm; kho chuyển sang kho mới (chưa rõ ngày). Nếu anh xác nhận, cập nhật mục 12 của reference.

Liên quan [[feedback-bam-trong-tam]], [[project-portfolio-du-an]].
