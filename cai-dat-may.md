# Cài đặt trên từng máy

Phần mềm và skill **không đẩy lên GitHub**; mỗi máy tự cài theo danh sách này. Cài thêm gì thì thêm một dòng.

## Phần mềm

| Thứ | Phiên bản | Dùng để | Máy công ty (Windows) | Máy nhà (Mac) |
|---|---|---|---|---|
| Node.js | 22.11.0 | Playwright, script, trang web | Có (`C:\Users\PC\tools\node-v22.11.0-win-x64`, bản giải nén) | Có (24.13.1) |
| Playwright + Chromium | 1.48.2 | Chạy thử web, chụp ảnh | Có | Không (dùng Playwright CLI thay) |
| Playwright CLI | 0.1.24 | Điều khiển trình duyệt bằng lệnh, chạy ngầm, dùng Chrome có sẵn | ? | Có (`~/.local/bin`, cài 2026-11-12) |
| uv + Python | uv 0.13.7, Python 3.12 | Chạy Graphify | ? | Có (`~/.local/bin`, cài 2026-11-12) |
| Graphify | 0.9.107 | Vẽ bản đồ tri thức từ thư mục (`/graphify reference`) | ? | Có (cài qua uv, 2026-11-12) |
| Java (Temurin JRE) | 21.0.13+9 | Chạy PlantUML | Có (`C:\Users\PC\tools\jdk-21.0.13+9-jre`) | Chưa |
| PlantUML | 1.2026.10 | Activity chia làn, use case, trạng thái | Có (`C:\Users\PC\tools\plantuml\`) | Chưa |
| D2 | 0.9.0 | Sơ đồ ngữ cảnh | Có (`C:\Users\PC\tools\d2\d2.exe`) | Chưa |
| Theme Claude Desktop | themes-for-claude 0.8.0 | Đổi giao diện app Claude Desktop | ? | Có (2026-11-12) |

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
| Trình duyệt | playwright-cli | `playwright-cli install --skills` | ? | Có |
| Matt Pocock | ask-matt, codebase-design, diagnosing-bugs, domain-modeling, grill-me, grill-with-docs, grilling, handoff, implement, implement-spec, improve-codebase-architecture, loop-me, pr, prototype, research, retro, setup-matt-pocock-skills, tdd, teach, to-questionnaire, to-spec, to-tickets, triage, wait-what, wayfinder, wizard, writing-for-agents | mattpocock/skills, bản 2026-10-31 | Plugin (đồng bộ theo tài khoản) | Có |
| Skill BA cũ đã cất | 12 skill BA tự viết | `.claude/luu-tru-skill/` | ? | Có (chỉ máy này) |

## Agent

Máy nhà: để trong workspace `.claude/agents/` (từ 2026-11-14, nhìn thấy được, không đẩy GitHub). Máy công ty: tùy chỗ đang để.

| Agent | Dùng để | Máy công ty | Máy nhà |
|---|---|---|---|
| nghien-cuu, phan-bien, kiem-dinh-skill | Nghiên cứu trước đề bài, phản biện tài liệu, rà bộ skill | ? | Có |
| viet-yeu-cau | Viết đặc tả, user story, ticket từ quyết định đã chốt | ? | Có (2026-11-13) |
| giao-dien | Dựng trang HTML, tự chụp kiểm tra bằng Playwright | ? | Có (2026-11-13) |
