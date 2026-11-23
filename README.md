# Không gian làm việc BA – Tbestpro

Kho riêng tư của Trần Hải Nam (PO/BA). Làm việc trên một máy cùng Claude Code; GitHub dùng để lưu và để dựng lại khi cần.

## Có gì trong kho
| Thư mục / file | Nội dung |
|---|---|
| `CLAUDE.md` | Luật làm việc với Claude (Claude đọc đầu tiên mỗi buổi) |
| `.claude/rules/` | Quy tắc chi tiết, Claude tự nạp (tài liệu đầu ra, tri thức, giao diện) |
| `.claude/agents/`, `.claude/skills/` | Agent và skill đã cài. Đẩy lên kho để máy mới tải về là đủ |
| `Dự Án/` | 4 dự án (Kho, Facebook Ads, SMS, Cổng báo cáo nội bộ). Mỗi dự án có `README.md` và `bao-cao/` (bản chính thức) |
| `Mẫu/` | File mẫu để lần sau tham khảo: `Báo cáo so sánh/` (khuôn + ví dụ), `Giao diện/` (bảng mẫu Pinterest) |
| `reference/` | Kho tri thức công ty (tổ chức, kho, luồng đơn, kiến trúc) |
| `Trang web/` | Trang xem dự án. `Trang web/ban-thu/v3/` là **Bàn dự án** (bản chuẩn); `Trang web/index.html` là Hồ sơ BA cũ, chỉ để tham khảo |
| `Việc/` | Phiếu việc cho việc nhiều buổi hoặc giao cho agent |
| `_memory-claude/` | Sổ nhớ của Claude (anh là ai, đã dặn gì, dự án đang ở đâu) |
| `Cài đặt máy.md` | Phần mềm đã cài (không nằm trong kho, máy mới phải cài lại) |

## Không có trong kho (cố ý)
- **PDF, Word, Excel, ảnh, video** (`Tài liệu gốc/` và mọi file `.pdf .docx .xlsx .png .jpg .mp4`): để trên Google Drive, cần file nào thì tải file đó.
- **`.env`** (token), **`.wrangler/`** (bộ nhớ đệm Cloudflare), **`*.db`** (cơ sở dữ liệu cục bộ): không bao giờ đẩy lên.

Danh sách đầy đủ ở `.gitignore`.

## Dùng hằng ngày
- Rời máy: nói với Claude **"chốt buổi"** (ghi nhật ký vào Notion).
- Muốn lưu lên GitHub: nói **"đẩy GitHub"** (Claude liệt kê thay đổi, chờ xác nhận rồi mới đẩy).

## Dựng lại ở máy mới
1. Cài Git.
2. VS Code → `Git: Clone` → dán link kho này.
3. Cài phần mềm theo `Cài đặt máy.md`.
4. Nối bộ nhớ: nhờ Claude tạo lối tắt từ thư mục memory của dự án (`~/.claude/projects/<tên thư mục>/memory`) tới `_memory-claude/`.
