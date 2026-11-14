# Hai máy (MacBook ở nhà, máy công ty Windows)

Chốt 2026-11-14:

| Chỗ | Chứa gì |
|---|---|
| **Notion** "Nhật ký công việc" | Mỗi buổi một mục: đã làm, thông tin mới và đã chốt, link (Docs, Drive, trang báo cáo). Đọc đầu tiên khi "làm tiếp" |
| **GitHub** (repo riêng tư, máy nhà đẩy cả cấu trúc thư mục) | `CLAUDE.md`, `.claude/rules/`, `reference/`, `Du-an/`, `_memory-claude/`, `cai-dat-may.md`, `README.md`. Có thay đổi cấu trúc thì đẩy lên để máy kia biết cách sắp xếp |
| **Từng máy tự giữ** (không đẩy) | `.claude/skills/`, `.claude/agents/`, phần mềm, `tai-lieu-goc/`, file thử, `graphify-out/`. Cài thêm gì thì ghi một dòng vào `cai-dat-may.md` |

- **"chốt buổi":** ghi mục ngày vào Notion (đọc trang trước để không ghi trùng); liệt kê từng file sẽ đẩy (đường dẫn, mới hay sửa, nội dung 1 dòng), chờ người dùng xác nhận rồi mới commit và push.
- **"làm tiếp":** tóm tắt commit mới trên GitHub trước khi kéo về; kéo hết; đọc Notion; xem `cai-dat-may.md` có gì máy này chưa cài thì báo.
- Không đẩy đoạn chat, file thử, ảnh chạy thử, phần mềm, `.env`.
