---
name: project-portfolio-du-an
description: Claude đóng vai PM cho 4 dự án (thêm 04 Cổng báo cáo nội bộ) của người dùng (Kho real-time, Facebook Ads, SMS agent); thư mục Du-an/ trong workspace là nguồn sự thật
metadata:
  type: project
---

Từ 2026-10-27 người dùng nhờ Claude làm **PM** cho 3 dự án, thư mục `Du-an/` trong workspace: `00-Tong-quan.md` (bảng điều khiển, lộ trình 12 tuần), `01-Kho-Real-time/`, `02-Facebook-Ads/`, `03-SMS-Agent/` (mỗi nơi có `README.md`, `lo-trinh.md`, `nhat-ky.md`). Người dùng muốn phân thành các thư mục con để dễ quản lý; ưu tiên Kho (sếp giao trực tiếp), sau đó FB Ads (đang thử n8n + Slack + Claude MCP), SMS (chưa bắt đầu).

**Why:** để quản lý theo cổng quyết định, đo bằng kết quả, không để việc nằm trong trí nhớ hội thoại.
**How to apply:** khi người dùng nói "cập nhật dự án X" hoặc báo kết quả, ghi `nhat-ky.md`, đổi trạng thái việc trong `lo-trinh.md`, cập nhật bảng ở `00-Tong-quan.md` (thứ Sáu). Số liệu AI không tự tính, dùng code/SQL. Liên quan [[project-wms-kho7]].

**2026-10-27:** thêm dự án `04-Cong-bao-cao-noi-bo/` (website nhỏ tự host để báo cáo công việc thay tin nhắn nhóm, đính kèm file; tách hẳn dự án Facebook Ads; dùng ~5-10% thời gian). Báo cáo hiện qua tin nhắn nên dễ trôi. Chưa chốt số người, người xem, mẫu báo cáo, chỗ chạy thật.

**2026-10-27 (sau):** dự án 04 đã có bản chạy thử tại `Du-an/04-Cong-bao-cao-noi-bo/app/` (WORKNOTE: Node + SQLite có sẵn, chạy `node server.js` → http://localhost:3000). Phạm vi người dùng chốt: Tổng quan + hộp thoại tạo báo cáo + đính kèm file + phản hồi; ai cũng xem được; chưa đăng nhập/phân quyền.
