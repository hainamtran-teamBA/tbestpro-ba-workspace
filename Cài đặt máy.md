# Phần mềm đã cài (MacBook, máy đang dùng)

Phần mềm không nằm trong GitHub, máy mới cần cài lại theo danh sách này. Skill và agent đã nằm trong kho (`.claude/skills/`, `.claude/agents/`), tải kho về là có. Cài thêm gì thì thêm một dòng.

**Bộ nhớ của Claude:** `_memory-claude/` trong workspace là bộ nhớ thật. `~/.claude/projects/<tên thư mục dự án>/memory` là lối tắt (symlink) trỏ vào đó. Ở máy mới phải tạo lại lối tắt theo tên thư mục dự án của máy đó.

## Phần mềm

| Thứ | Phiên bản | Dùng để | Ghi chú |
|---|---|---|---|
| Node.js | 24.13.1 | Playwright, script, trang web | |
| Playwright CLI | 0.1.24 | Điều khiển trình duyệt bằng lệnh, chạy ngầm, dùng Chrome có sẵn | `~/.local/bin`, cài 2026-11-12 |
| uv + Python | uv 0.13.7, Python 3.12 | Chạy Graphify | `~/.local/bin`, cài 2026-11-12 |
| Graphify | 0.9.107 | Vẽ bản đồ tri thức từ thư mục (`/graphify reference`) | Cài qua uv, 2026-11-12 |
| Java | OpenJDK 26.0.2 | Chạy PlantUML | Có sẵn trên máy |
| PlantUML | 1.2026.10 | Activity chia làn, use case, trạng thái | `~/tools/plantuml.jar`, tải từ GitHub chính thức 2026-11-17. Vẽ: `JAVA=java PLANTUML_JAR=~/tools/plantuml.jar bash Trang web/build-diagrams.sh` |
| Antigravity CLI (`agy`, Gemini) | 1.5.9 | Giao việc cho Gemini chạy ngầm: `~/.gemini/bin/agy -p "<prompt>" --model gemini-3.8-flash-high` | Tài khoản Pro của người dùng, đã đăng nhập; kiểm 2026-11-17. Chưa vào PATH |
| Theme Claude Desktop | themes-for-claude 0.8.0 | Đổi giao diện app Claude Desktop | Cài 2026-11-12 |
| OpenMausBot | 0.1.169 | App chat với đội agent (mỗi bot chạy Claude Code trên máy), duyệt quyền trong chat | `/Applications/OpenMausBot.app`, cài 2026-11-18. Nguồn: github.com/milind-soni/OpenMausBot (bản gốc, không dùng bản chép), Apache 2.0, chữ ký Apple hợp lệ. **Mặc định Full access**, phải hạ mức |

## Skill nằm ngoài kho

| Skill | Cách cài | Ghi chú |
|---|---|---|
| graphify | `graphify install` | Nằm ở `~/.claude/skills/`, để nguyên vì lệnh cài tự ghi đường dẫn |

## Nguồn của skill trong kho (để cập nhật khi cần)

| Nhóm | Skill | Nguồn |
|---|---|---|
| Quy trình, BA | process-doc, process-optimization, risk-assessment, vendor-review, change-request, user-research | anthropics/knowledge-work-plugins (operations, design) |
| Kiến trúc | architecture, system-design | anthropics/knowledge-work-plugins (engineering) |
| Viết tài liệu | doc-coauthoring | anthropics/skills |
| Giao diện | frontend-design, ui-ux-pro-max | Anthropic; nextlevelbuilder/ui-ux-pro-max |
| Giao diện | unslop (gỡ dấu vết "AI dựng" khỏi giao diện) | heydamir/unslop, commit 97daa3e (cài 2026-11-14) |
| Giao diện | design-taste-frontend (dựng trang giới thiệu, trang bán hàng "không giống AI"; có bộ chấm tự động chạy khi kết thúc lượt; cần Node 22+ và Chrome) | Leonxlnx/taste-skill, commit f6b7657, MIT (cài 2026-11-15) |
| Tìm skill | find-skills (tìm skill trên skills.sh; có mục "Áp dụng tại workspace": chỉ đề xuất, soi trước, người dùng đồng ý mới cài, không `-y`/`-g`) | vercel-labs/skills, commit b716f9d (cài 2026-11-16) |
| Công cụ | dispatching-parallel-agents, verification-before-completion (đã thêm mục "Áp dụng cho BA") | obra/superpowers, commit 22f0b46 |
| Trình duyệt | playwright-cli | `playwright-cli install --skills` |
| Matt Pocock | ask-matt, codebase-design, diagnosing-bugs, domain-modeling, grill-me, grill-with-docs, grilling, handoff, implement, implement-spec, improve-codebase-architecture, loop-me, pr, prototype, research, retro, setup-matt-pocock-skills, tdd, teach, to-questionnaire, to-spec, to-tickets, triage, wait-what, wayfinder, wizard, writing-for-agents | mattpocock/skills, bản 2026-10-31 |
| Skill BA cũ đã cất | 12 skill BA tự viết | `.claude/luu-tru-skill/` (chỉ máy này, không đẩy GitHub) |
