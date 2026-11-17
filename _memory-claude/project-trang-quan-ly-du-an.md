---
name: project-trang-quan-ly-du-an
description: Ý tưởng trang web riêng để Hải Nam quản lý dự án và đặc tả nghiệp vụ, thay Google Docs/Sheets; các quyết định đã chốt 2026-11-13
metadata:
  type: project
---

Từ 2026-11-13 (grilling, máy công ty): làm **một trang web riêng** quản lý các dự án và bản đặc tả nghiệp vụ, thay cho Google Docs/Sheets (Docs chỉ dùng khi cần in hoặc gửi dev).

Đã chốt:
- Người dùng: Hải Nam; sau này dev vào xem. Chưa cần phân quyền.
- Sửa nội dung **qua Claude**; trang chỉ để xem → **trang tĩnh, không máy chủ**. Đặt trong repo này, thư mục `site/`, lấy dữ liệu từ `Du-an/`, `reference/`. Trước mắt chạy localhost; sau đăng Cloudflare Pages có đăng nhập (không dùng GitHub Pages vì repo riêng tư).
- Thêm dự án: bảo Claude làm, không cần nút. Kanban (Cần làm / Đang làm / Chờ duyệt / Đã xong): **GitHub Projects**.
- Khung dự án 8 mục: Tổng quan · Bản đồ nghiệp vụ (bấm vào mở UC) · Vai trò và phân quyền · Quy trình tổng · Dữ liệu · Hệ thống và giải pháp · Quyết định/Câu hỏi mở/Rủi ro · Thuật ngữ. Khung UC lấy từ bản mẫu "Đặc tả UC-02 Nhập kho" (10/11) và thêm: nguồn và ngày chốt, tách 3 lớp (nghiệp vụ / làm tạm trên phần mềm có sẵn / yêu cầu Ganico v2), nhật ký thay đổi.
- Sơ đồ: **PlantUML** cho activity chia làn, use case, trạng thái; **D2** chỉ cho sơ đồ ngữ cảnh; **mindmap bản đồ nghiệp vụ dạng thẻ** như bản UC-02 (trang tự vẽ; Mermaid mindmap bố cục lộn xộn); **bỏ bpmn-js**. Bản thử ở máy công ty `C:\TbestPro Project\Tbestpro\thu-so-do\`.
- Thêm trang **"Bộ công cụ"** liệt kê skill theo bước làm việc.

**Why:** người dùng muốn một chỗ duy nhất, trực quan, cho mọi dự án; artifact gắn tài khoản nên không làm bản gốc được (xem [[feedback-link-xem-ngoai-tbestpro]]).
**How to apply:** bước tiếp theo là `/to-spec` hoặc `/prototype` cho trang; dự án đầu tiên đưa vào là Kho 7 với UC-02 cập nhật. Liên quan [[project-wms-kho7]], [[project-dong-bo-hai-may]].

**2026-11-13 (đã dựng, máy công ty):** trang nằm ở `site/` (mở thẳng `site/index.html`, không cần máy chủ; đã thử bản sao ở thư mục khác vẫn chạy; font Google cần mạng, mất mạng thì dùng font máy). Dữ liệu: `site/data/projects/<id>/project.js` (+ `uc/UC-xx.js`), nạp qua `data/manifest.js`.
- Bấm dự án → **hồ sơ 2 nhánh**: "Tài liệu đặc tả" (bản đồ nghiệp vụ nằm trong đây) và "Tài liệu liên quan" (link Google Docs/Sheets, PDF trên Drive ghi `type: "pdf"`, trang Claude). Cây tài liệu bên trái, có ô lọc tìm cả trong quyết định, câu hỏi, thuật ngữ.
- Trang tổng quan dự án phải gói trong **một màn hình**, không cuộn dài. Trường `next` = việc tiếp theo.
- Người dùng **không thích cây UC ở thanh bên**: UC chỉ hiện bằng nút UC-xx trên tổng quan và nút UC trước/sau.
- Đã rà UI/UX bằng 3 agent, sửa mức cao + trung bình; còn mức thấp (tab UC chưa ghi vào địa chỉ, nút "Chép" nhỏ, chữ mồ côi).
