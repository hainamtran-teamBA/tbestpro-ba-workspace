# Không gian làm việc BA – Tbestpro

Kho riêng tư của Trần Hải Nam (PO/BA). Dùng để làm việc trên 2 máy (MacBook và máy công ty Windows) cùng Claude Code.

## Có gì trong kho
| Thư mục / file | Nội dung |
|---|---|
| `CLAUDE.md` | Cách làm việc với Claude (đọc đầu tiên mỗi phiên) |
| `.claude/rules/` | Quy tắc chi tiết, Claude tự nạp (tài liệu đầu ra, tri thức, hai máy, giao diện) |
| `Du-an/` | 4 dự án; mỗi dự án có `README.md`, `lo-trinh.md`, `nhat-ky.md`, `bao-cao/` (trang HTML) |
| `reference/` | Kho tri thức công ty (tổ chức, kho, luồng đơn, kiến trúc) |
| `cai-dat-may.md` | Danh sách phần mềm, skill, agent đã cài ở từng máy (skill không đẩy GitHub) |
| `_memory-claude/` | Trí nhớ của Claude (trạng thái dự án, cách làm việc) |

## Không có trong kho (cố ý)
- **PDF, Word, Excel, ảnh, video** (`tai-lieu-goc/`: pdf, docx, anh, excel): để trên Google Drive, cần file nào thì tải file đó.
- **Skill, agent** (`.claude/skills/`, `.claude/agents/`): mỗi máy tự cài, danh sách ở `cai-dat-may.md`.
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
