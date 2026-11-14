---
name: project-dong-bo-hai-may
description: Hải Nam làm trên 2 máy (công ty + MacBook); đồng bộ qua kho GitHub riêng tư, nhật ký Notion, tài liệu gốc ở Drive; lệnh "chốt buổi" / "làm tiếp"
metadata:
  type: project
---

Từ 2026-11-11, thư mục làm việc là một kho git (nhánh main), sẽ đẩy lên kho GitHub **riêng tư** của Hải Nam (không phải GitHub của dev).

- Đưa lên GitHub: ghi chú .md, skill, CLAUDE.md, trang .html, memory (thư mục `_memory-claude/` trong workspace; `~/.claude/projects/<thư mục dự án>/memory` là lối tắt trỏ sang; bản cũ giữ ở `memory.bak-20261111`).
- Không đưa lên (đã có trong `.gitignore`): pdf/, docx/, image/, mọi file PDF, Word, Excel, ảnh, video, `.env`; kho của dev `Du-an/01-Kho-Real-time/kho-rfid` (tải riêng từ GitHub của dev).
- Tài liệu gốc nặng để trên Google Drive, cần thì tải từng file.

**Why:** Hải Nam muốn về nhà chỉ cần kéo về là làm tiếp, không muốn hai máy giống hệt nhau.

**How to apply:**
- "chốt buổi": ghi nhật ký Notion ([[reference-nhat-ky-notion]]), rồi **liệt kê từng file sẽ đẩy (đường dẫn, mới hay sửa, nội dung 1 dòng) và chờ người dùng xác nhận** mới commit và push (người dùng dặn 2026-11-11). File cần đọc trước thì chép ra chỗ người dùng mở được.
- "làm tiếp": **trước khi pull, tóm tắt những gì mới** (commit nào, file nào, nội dung chính), rồi pull hết (không kéo từng phần), đọc nhật ký Notion, xem `cai-dat-may.md` có gì máy này chưa cài thì báo.
- **Ba lớp (chốt 2026-11-13):** Notion = nhật ký tóm tắt mỗi buổi; GitHub = chỉ thứ dùng lâu dài (quyết định, đặc tả, template, dự án, memory quan trọng, danh sách cài đặt `cai-dat-may.md`); mỗi máy tự giữ phần mềm và skill đã cài. Không đẩy đoạn chat, file thử, ảnh chạy thử, phần mềm.
- Máy công ty **không clone repo**: Claude sửa ở bản sao tạm, chỉ đẩy file đã duyệt; memory của máy công ty gộp vào `_memory-claude/` khi chốt buổi.
- Ở máy mới: lối tắt memory phải trỏ đúng tên thư mục dự án của máy đó (tên theo đường dẫn workspace).

**Cập nhật 2026-11-14:** quy tắc hai máy chuyển thành `.claude/rules/hai-may.md` (nguồn chính). Notion = nhật ký + link; GitHub = cấu trúc thư mục, CLAUDE.md, rules, reference, Du-an, memory, cai-dat-may.md; mỗi máy tự giữ skill, agent, phần mềm, tài liệu gốc. `tri-thuc/` đổi tên thành `reference/`: trang `site/` ở máy công ty nếu đọc `tri-thuc/` thì phải đổi đường dẫn.
