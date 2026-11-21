---
name: project-wms-kho7
description: Trạng thái dự án số hóa Kho 7 (cà phê Ganico, Gani 2 WMS): 2026-11-21 áp dụng QR trước (máy in QR + máy quét cầm tay) rồi tự dựng phần mềm; thiết bị Nextwaves tính sau; chi tiết ở reference/kho-7-gani-2-wms.md
metadata:
  type: project
---

**Chi tiết nghiệp vụ, luồng cân, phân quyền, dung sai:** `reference/kho-7-gani-2-wms.md` (mục 10-12). Hồ sơ dự án: `Dự Án/01 WMS/README.md`. Memory này chỉ giữ trạng thái.

**Bối cảnh:** từ 2026-10-26 sếp yêu cầu số hóa Kho 7 (cà phê, Ganico) bằng barcode/RFID vì kho thủ công qua Viber, lo thất thoát. Anh đã làm demo "Gani 2 WMS" giao anh An (trưởng IT). Việc của BA: học cách các bên giải quyết, thiết kế lại quy trình To-Be, chốt scope, sếp duyệt rồi mới đưa IT vào; không xây lại từ 0.

**Trạng thái (người dùng nói 2026-11-21):** hiện tại muốn **áp dụng QR trước** (mua **máy in QR và máy quét cầm tay**), **tự dựng phần mềm**, **sau đó mới tính đến mua thiết bị Nextwaves** (RFID). Trước đó (2026-11-19) ghi là mua thiết bị Nextwaves rồi tự dựng, vì nối cân đã lấy được dữ liệu; thứ tự giờ đổi thành QR trước, Nextwaves sau. Thư mục `kho-rfid` của dev đã xóa khỏi workspace (kho này vẫn còn trên GitHub của dev). Báo cáo thiết bị: `Dự Án/01 WMS/bao-cao/bao-cao-kho7-thiet-bi.html` (có thể còn nhắc Nextwaves/RFID là bước đầu, cần rà). `reference/kho-7-gani-2-wms.md` **chưa sửa**, chờ người dùng xác nhận thứ tự mới.

**Đã chốt (có trong reference):** thiết bị Nextwaves + tự tích hợp vào Ganico v2; luồng cân + QR (kg không gán sẵn, một container một lô, không trừ bì); dung sai −0,5%/+0,1% (xác nhận 2026-11-17); nguyên tắc **số kg không được sửa tay**; thử nối cân FI05 qua USB–RS232 đã lấy được dữ liệu (2026-11-17). Nextwaves báo phí phát triển riêng 60 triệu [Bên khác nói]; anh chọn không mua phần đó.

**Còn chưa rõ:** sếp đã đồng ý hướng tự dựng chưa (reference ghi "chưa trình sếp" ở 2026-11-16); ai viết và bảo trì phần mềm; kho chuyển sang kho mới (chưa rõ ngày). Nếu anh xác nhận, cập nhật mục 12 của reference.

Liên quan [[feedback-bam-trong-tam]], [[project-portfolio-du-an]].
