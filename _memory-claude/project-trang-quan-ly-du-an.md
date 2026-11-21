---
name: project-trang-quan-ly-du-an
description: Bàn dự án (Trang web/ban-thu/v3/) là trang xem dự án và đặc tả, bản chuẩn từ 2026-11-17, đang tạm dừng; Hồ sơ BA (Trang web/index.html) chỉ để tham khảo
metadata:
  type: project
---

Anh làm **một trang web riêng** quản lý các dự án và đặc tả nghiệp vụ, thay Google Docs/Sheets (Docs chỉ khi cần in hoặc gửi dev).

**Bản chuẩn (anh chốt 2026-11-17): "Bàn dự án"** ở `Trang web/ban-thu/v3/index.html` (giao diện kính, mở thẳng file). `Trang web/index.html` + `Trang web/data/` là **Hồ sơ BA cũ**, chỉ để tham khảo cách trình bày và dữ liệu. Phiếu việc đầy đủ: `Việc/2026-11-17-ban-du-an-tab-du-an.md`. `Trang web/ban-thu/` chưa có trong GitHub, đừng xóa.

**Đã chốt từ trước (2026-11-13):**
- Người dùng: Hải Nam, sau này dev vào xem; chưa cần phân quyền.
- Sửa nội dung **qua Claude**, trang chỉ để xem → trang tĩnh, không máy chủ. Sau này có thể đăng Cloudflare Pages có đăng nhập (không dùng GitHub Pages vì repo riêng tư). Kanban dùng GitHub Projects.
- Mỗi dự án có 2 nhánh: **Tài liệu đặc tả** (bản đồ nghiệp vụ, use case) và **Tài liệu liên quan** (link Google Docs/Sheets, PDF trên Drive, trang Claude).
- Sơ đồ: PlantUML cho activity, use case, trạng thái; bản đồ nghiệp vụ dạng sơ đồ tỏa tròn (trang tự vẽ); bỏ bpmn-js, không dùng Mermaid.
- Anh **không thích cây UC ở thanh bên**. Trang tổng quan dự án phải gói trong một màn hình.

**Trạng thái (tạm dừng từ 2026-11-17 để làm kế hoạch công việc hằng ngày):** đã dựng đủ Tổng quan, trang dự án, 7 mục đặc tả, trang use case, tài liệu liên quan; đã làm đẹp một vòng. Còn mở: duyệt vòng làm đẹp (giữ hay bỏ dòng "Chờ quyết định n" trên thẻ); sửa trang chi tiết use case (anh thấy chưa ổn); 7 thông tin còn thiếu (ngày qua từng cổng, hạn dự án...). Sau dọn 2026-11-19 chưa kiểm dữ liệu v3 có nhắc phần đã xóa (`kho-rfid`, Facebook Ads) không.

Liên quan [[project-wms-kho7]], [[feedback-link-xem-ngoai-tbestpro]].
