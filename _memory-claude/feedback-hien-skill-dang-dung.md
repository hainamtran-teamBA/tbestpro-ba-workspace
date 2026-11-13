---
name: feedback-hien-skill-dang-dung
description: Mỗi câu trả lời phải ghi rõ đang dùng skill/agent nào (hoặc không dùng skill nào)
metadata:
  node_type: memory
  type: feedback
  originSessionId: 601c7a5b-0775-49bf-9ac4-f524ae47cfa3
  modified: 2026-11-05T15:52:21.111Z
---

2026-11-05, người dùng dặn: "mỗi lần trả lời tôi nhớ là phải hiện skill gì trong khi dùng nhé".

**Why:** người dùng đang học tư duy Enterprise BA qua bộ skill, cần thấy kỹ thuật/skill nào được dùng ở mỗi bước; trước đó tôi trả lời nhiều lượt mà không dùng skill nào và không nói ra.
**How to apply:** cuối mỗi câu trả lời thêm một dòng `🧰 Skill: <tên skill> · Agent: <tên agent>`; không dùng thì ghi thẳng "không dùng skill (trả lời trực tiếp)". Câu hỏi có skill phù hợp (khảo sát, tư vấn, thiết kế To-Be…) thì nên gọi skill đó thay vì trả lời tay. Liên quan [[user-po-ba-tbestpro]].

2026-11-13 (máy công ty): người dùng sợ không biết đang có skill gì. Thêm: **trước mỗi việc lớn nói một câu sẽ dùng skill/agent nào và vì sao**; nhiều việc độc lập (tra cứu, chạy thử) thì dùng `dispatching-parallel-agents` giao song song. Sẽ có trang "Bộ công cụ" trên trang web quản lý dự án.
