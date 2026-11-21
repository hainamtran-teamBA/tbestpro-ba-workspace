# Cài đặt trên từng máy

Phần mềm và skill **không đẩy lên GitHub**; mỗi máy tự cài theo danh sách này. Cài thêm gì thì thêm một dòng.

**Memory của Claude:** thư mục `_memory-claude/` trong workspace là bộ nhớ thật, được đồng bộ qua GitHub. Ở mỗi máy, `~/.claude/projects/<tên thư mục dự án>/memory` là lối tắt (symlink) trỏ vào đó. Ở máy mới phải trỏ đúng theo tên thư mục dự án của máy đó (nói "cài đồng bộ máy mới" để Claude làm).

## Phần mềm

| Thứ | Phiên bản | Dùng để | Máy công ty (Windows) | Máy nhà (Mac) |
|---|---|---|---|---|
| Node.js | 22.11.0 | Playwright, script, trang web | Có (`C:\Users\PC\tools\node-v22.11.0-win-x64`, bản giải nén) | Có (24.13.1) |
| Playwright + Chromium | 1.48.2 | Chạy thử web, chụp ảnh | Có | Không (dùng Playwright CLI thay) |
| Playwright CLI | 0.1.24 | Điều khiển trình duyệt bằng lệnh, chạy ngầm, dùng Chrome có sẵn | ? | Có (`~/.local/bin`, cài 2026-11-12) |
| uv + Python | uv 0.13.7, Python 3.12 | Chạy Graphify | ? | Có (`~/.local/bin`, cài 2026-11-12) |
| Graphify | 0.9.107 | Vẽ bản đồ tri thức từ thư mục (`/graphify reference`) | ? | Có (cài qua uv, 2026-11-12) |
| Java (Temurin JRE) | 21.0.13+9 | Chạy PlantUML | Có (`C:\Users\PC\tools\jdk-21.0.13+9-jre`) | Có (OpenJDK 26.0.2 sẵn có) |
| PlantUML | 1.2026.10 | Activity chia làn, use case, trạng thái | Có (`C:\Users\PC\tools\plantuml\`) | Có (`~/tools/plantuml.jar`, tải từ GitHub chính thức 2026-11-17; vẽ: `JAVA=java PLANTUML_JAR=~/tools/plantuml.jar bash Trang web/build-diagrams.sh`) |
| D2 | 0.9.0 | Sơ đồ ngữ cảnh | Có (`C:\Users\PC\tools\d2\d2.exe`) | Chưa |
| Antigravity CLI (`agy`, Gemini) | 1.5.9 | Giao việc cho Gemini chạy ngầm: `~/.gemini/bin/agy -p "<prompt>" --model gemini-3.8-flash-high` (tài khoản Pro của người dùng, đã đăng nhập; kiểm 2026-11-17) | ? | Có (`~/.gemini/bin/agy`, chưa vào PATH) |
| Theme Claude Desktop | themes-for-claude 0.8.0 | Đổi giao diện app Claude Desktop | ? | Có (2026-11-12) |
| OpenMausBot | 0.1.169 | App chat với đội agent (mỗi bot chạy Claude Code trên máy), duyệt quyền trong chat. Nguồn: github.com/milind-soni/OpenMausBot (bản gốc, không dùng bản chép), Apache 2.0, chữ ký Apple hợp lệ. **Mặc định Full access**, phải hạ mức | Chưa | Có (`/Applications/OpenMausBot.app`, 2026-11-18) |
| Máy chủ Văn phòng ảo mức 2 | node-pty 1.1.0, ws 8.21.3 | Chat Claude Code trong trang pixel (`tools/van-phong/`, cài bằng `npm install --cache ./.npm-cache`) | Chưa | **Đã gỡ 2026-11-18** (thay bằng OpenMausBot; vào Thùng rác `van-phong-ao-bo-2026-11-18`) |

## Skill cài tay (ngoài plugin mattpocock-skills đồng bộ theo tài khoản)

| Skill | Nguồn | Máy công ty | Máy nhà |
|---|---|---|---|
| dispatching-parallel-agents | obra/superpowers, commit 22f0b46 | Có (`~/.claude/skills/`) | Có (`.claude/skills/` của workspace, thêm mục "Áp dụng cho BA") |
| verification-before-completion | obra/superpowers, commit 22f0b46 | ? | Có (`.claude/skills/` của workspace, thêm mục "Áp dụng cho BA") |
| chief-of-staff, software-factory | mattpocock/skills, commit 4ae2317 | Có | ? |
| graphify | cài bằng lệnh `graphify install` | ? | Có (`~/.claude/skills/`, để nguyên vì lệnh cài tự ghi đường dẫn) |

## Skill trong workspace (`.claude/skills/`, không đẩy GitHub từ 2026-11-13)

| Nhóm | Skill | Nguồn | Máy công ty | Máy nhà |
|---|---|---|---|---|
| BA, quy trình | process-doc, process-optimization, risk-assessment, vendor-review, change-request, user-research | anthropics/knowledge-work-plugins (operations, design) | ? | Có |
| Kiến trúc | architecture, system-design | anthropics/knowledge-work-plugins (engineering) | ? | Có |
| Viết tài liệu | doc-coauthoring | anthropics/skills | ? | Có |
| Giao diện | frontend-design, ui-ux-pro-max | Anthropic; nextlevelbuilder/ui-ux-pro-max | ? | Có |
| Giao diện | unslop (gỡ dấu vết "AI dựng" khỏi giao diện) | heydamir/unslop, commit 97daa3e (cài 2026-11-14) | ? | Có |
| Giao diện | design-taste-frontend (Taste Skill: dựng trang giới thiệu, trang bán hàng "không giống AI"; có bộ chấm tự động chạy khi kết thúc lượt; cần Node 22+ và Chrome) | Leonxlnx/taste-skill, commit f6b7657, MIT (cài 2026-11-15) | ? | Có |
| Tìm skill | find-skills (tìm skill trên skills.sh; có mục "Áp dụng tại workspace": chỉ đề xuất, soi trước, người dùng đồng ý mới cài, không `-y`/`-g`) | vercel-labs/skills, commit b716f9d (cài 2026-11-16) | ? | Có |
| Trình duyệt | playwright-cli | `playwright-cli install --skills` | ? | Có |
| Matt Pocock | ask-matt, codebase-design, diagnosing-bugs, domain-modeling, grill-me, grill-with-docs, grilling, handoff, implement, implement-spec, improve-codebase-architecture, loop-me, pr, prototype, research, retro, setup-matt-pocock-skills, tdd, teach, to-questionnaire, to-spec, to-tickets, triage, wait-what, wayfinder, wizard, writing-for-agents | mattpocock/skills, bản 2026-10-31 | Plugin (đồng bộ theo tài khoản) | Có |
| Skill BA cũ đã cất | 12 skill BA tự viết | `.claude/luu-tru-skill/` | ? | Có (chỉ máy này) |

## Agent

Máy nhà: để trong workspace `.claude/agents/` (từ 2026-11-14, nhìn thấy được, không đẩy GitHub). Máy công ty: tùy chỗ đang để.

| Agent | Dùng để | Máy công ty | Máy nhà |
|---|---|---|---|
| tra-cuu (Haiku) | Đọc, tìm, tóm tắt file, Drive, Notion, Tizi cho chat chính | ? | Có (2026-11-16) |
| nghien-cuu (Sonnet; đào sâu web bằng playwright-cli, Bash bị hook `chan-bash-nghien-cuu.py` giới hạn, 2026-11-16), phan-bien (Opus), kiem-dinh-skill (Opus) | Nghiên cứu trước đề bài, phản biện tài liệu, rà bộ skill | ? | Có (model theo việc từ 2026-11-16) |
| viet-yeu-cau (Sonnet) | Viết đặc tả, user story, ticket từ quyết định đã chốt | ? | Có (2026-11-13) |
| giao-dien (Opus, từ 2026-11-16) | 3 chế độ: tìm mẫu, dựng thử theo skill, làm tiếp; gọt unslop, chấm bằng Taste | ? | Có (viết lại 2026-11-15) |
