# .claude/ – bản gốc cấu hình AI (chỉ sửa ở đây)

| Thư mục | Chứa gì | Lên GitHub? |
|---|---|---|
| `rules/` | Quy tắc chi tiết, Claude tự nạp theo `paths` | Có |
| `skills/` | Skill của workspace. Mỗi skill một thư mục có `SKILL.md` | Có (nhánh `may-cong-ty`) |
| `agents/` | Agent con (`<tên>.md`) | Chỉ `README.md` |
| `commands/` | Lệnh gõ `/tên` (`<tên>.md`) | Có |
| `plans/` | Kế hoạch việc nhiều bước (Plan mode lưu ra đây) | Có |

Tri thức công ty không để ở đây: máy nhà có `reference/` ở gốc; máy công ty đọc qua `git show origin/main:reference/...`.

## Skill: hai chỗ
| Chỗ | Đường dẫn | Có tác dụng |
|---|---|---|
| Mức máy | Windows `C:\Users\<tên>\.claude\skills\` · Mac `~/.claude/skills/` | Mọi thư mục trên máy đó (skill dùng chung: giao diện, tra cứu…) |
| Mức workspace | `.claude/skills/` trong repo này | Chỉ khi mở repo này (skill nghiệp vụ Tbestpro) |

Cài thêm skill thì ghi một dòng vào `cai-dat-may.md`.

## Sau này nếu dùng Codex / Antigravity
Giữ `.claude/` làm gốc, thêm `scripts/sync-ai-config.py` để tự sinh (không sửa tay):
- `.claude/skills/<x>/` → `.agents/skills/<x>/`
- `.claude/commands/a/b.md` → `.agents/skills/a-b/SKILL.md`
- `.claude/rules/a/b.md` → `.agents/rules/a-b.md` (thêm `trigger:`)
- `.claude/agents/x.md` → `.codex/agents/x.toml`
