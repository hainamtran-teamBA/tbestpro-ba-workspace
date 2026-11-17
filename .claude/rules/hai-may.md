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

## Nhánh theo máy (chốt 2026-11-17)
| Máy | Nhánh | Chứa gì |
|---|---|---|
| MacBook ở nhà | `main` | Cấu trúc đầy đủ của máy nhà (`Du-an/`, `reference/`, `site/`, `_memory-claude/`…) |
| Máy công ty Windows | `may-cong-ty` | **Chỉ thư mục của máy công ty** (`C:\TbestPro Project\Tbestpro\`), nhánh riêng không chung lịch sử với `main` |

- Hai máy **không cần giống nhau**. Đẩy lên chỉ để máy kia xem thông tin mới; không gộp nhánh, không kéo nhánh của máy kia đè lên máy mình.
- Máy nhà xem việc ở công ty: `git fetch` rồi xem nhánh `origin/may-cong-ty` (hoặc trên GitHub). Muốn lấy file nào thì người dùng nói rõ, chép tay sang.
- Máy công ty cần đọc tài liệu ở `main` (ví dụ `reference/`, `Du-an/`): `git fetch` rồi `git show origin/main:<đường dẫn>`, không chép cả nhánh về.
- "chốt buổi" ở máy công ty: liệt kê file, chờ OK, đẩy `origin may-cong-ty`.
