# Không gian làm việc BA – Tbestpro

Kho riêng tư của Trần Hải Nam (PO/BA). Dùng để làm việc trên 2 máy (MacBook và máy công ty Windows) cùng Claude Code.

## Có gì trong kho
| Thư mục / file | Nội dung |
|---|---|
| `CLAUDE.md` | Quy tắc làm việc cho Claude |
| `Du-an/` | Các dự án; mỗi dự án có `README.md`, `lo-trinh.md`, `nhat-ky.md` |
| `.claude/skills/` | Bộ skill BA (khảo sát, tư vấn, To-Be, PRD...) và kho tri thức công ty (`hieu-nghiep-vu/references/`) |
| `_memory-claude/` | Trí nhớ của Claude (trạng thái dự án, cách làm việc) |
| Các file `.html` ở gốc | Báo cáo, đề xuất đã làm |

## Không có trong kho (cố ý)
- **PDF, Word, Excel, ảnh, video** (`pdf/`, `docx/`, `image/`...): để trên Google Drive, cần file nào thì tải file đó.
- **`.env`** (token): không bao giờ đẩy lên; tạo lại ở từng máy.
- **`Du-an/01-Kho-Real-time/kho-rfid`**: kho của dev, tải riêng từ GitHub của dev.

Danh sách đầy đủ ở `.gitignore`.

## Dùng hằng ngày
- Rời máy: nói với Claude **"chốt buổi"** (ghi nhật ký Notion + đẩy lên GitHub).
- Ngồi vào máy kia: nói **"làm tiếp"** (kéo về + đọc nhật ký).
- Mỗi lúc chỉ làm trên một máy.

## Cài ở máy mới
1. Cài Git (Windows: git-scm.com).
2. VS Code → `Git: Clone` → dán link kho này.
3. Mở thư mục, nói với Claude **"cài đồng bộ máy mới"** để nối memory và kiểm tra.
