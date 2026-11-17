# Skill của workspace (máy công ty)

Mỗi skill một thư mục `<ten-skill>/SKILL.md` (có `name`, `description` ở đầu file). Trên nhánh `may-cong-ty` các skill này được đẩy lên GitHub để máy nhà xem.

| Skill | Dùng khi |
|---|---|
| `chief-of-staff` | Điều phối, tổng hợp việc nhiều đầu |
| `dispatching-parallel-agents` | Chia nhiều việc độc lập cho agent chạy song song |
| `frontend-design` | Chọn hướng giao diện có chủ đích (màu, chữ, bố cục) |
| `software-factory` | Dựng hệ agent biến ticket/PR thành code |
| `ui-ux-pro-max` | Tra quy tắc UI/UX, bảng màu, font, biểu đồ (chạy `scripts/search.py` bằng Python `-I`) |

Bản gốc cài ở mức máy `C:\Users\PC\.claude\skills\` (17/11 chép sang đây). Skill plugin (`synced/`, ví dụ mattpocock-skills) do Claude tự đồng bộ, không chép.
Thêm skill mới: tạo thư mục ở đây, ghi thêm một dòng vào bảng.
