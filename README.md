# Không gian làm việc BA – Tbestpro

Kho riêng tư của Trần Hải Nam (PO/BA). Dùng để làm việc trên 2 máy (MacBook và máy công ty Windows) cùng Claude Code.

## Có gì trong kho
| Thư mục / file | Nội dung |
|---|---|
| `CLAUDE.md` | Luật làm việc với Claude (Claude đọc đầu tiên mỗi buổi) |
| `.claude/rules/` | Quy tắc chi tiết, Claude tự nạp (tài liệu đầu ra, tri thức, hai máy, giao diện) |
| `Dự Án/` | 4 dự án (Kho, Facebook Ads, SMS, Cổng báo cáo nội bộ). Mỗi dự án có `README.md` và `bao-cao/` (bản chính thức) |
| `Mẫu/` | File mẫu để lần sau tham khảo: `Báo cáo so sánh/` (khuôn + ví dụ), `Giao diện/` (bảng mẫu Pinterest) |
| `reference/` | Kho tri thức công ty (tổ chức, kho, luồng đơn, kiến trúc) |
| `Trang web/` | Trang xem dự án. `Trang web/ban-thu/v3/` là **Bàn dự án** (bản chuẩn); `Trang web/index.html` là Hồ sơ BA cũ, chỉ để tham khảo |
| `Việc/` | Phiếu việc cho việc nhiều buổi hoặc giao cho agent |
| `_memory-claude/` | Sổ nhớ của Claude (anh là ai, đã dặn gì, dự án đang ở đâu) |
| `Cài đặt máy.md` | Phần mềm, skill, agent đã cài ở từng máy |

## Không có trong kho (cố ý)
- **PDF, Word, Excel, ảnh, video** (`Tài liệu gốc/` và mọi file `.pdf .docx .xlsx .png .jpg .mp4`): để trên Google Drive, cần file nào thì tải file đó.
- **Skill, agent** (`.claude/skills/`, `.claude/agents/`): mỗi máy tự cài, danh sách ở `Cài đặt máy.md`.
- **`.env`** (token): không bao giờ đẩy lên; tạo lại ở từng máy.

Danh sách đầy đủ ở `.gitignore`.

## Dùng hằng ngày
- Rời máy: nói với Claude **"chốt buổi"** (ghi nhật ký Notion + đẩy lên GitHub).
- Ngồi vào máy kia: nói **"làm tiếp"** (kéo về + đọc nhật ký).
- Mỗi lúc chỉ làm trên một máy.

## Cài ở máy mới
1. Cài Git (Windows: git-scm.com).
2. VS Code → `Git: Clone` → dán link kho này.
3. Mở thư mục, nói với Claude **"cài đồng bộ máy mới"** để nối memory và kiểm tra.
