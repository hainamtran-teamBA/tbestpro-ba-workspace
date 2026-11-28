---
name: feedback-khong-tu-giao-agent-dung
description: "Không tự suy \"làm xong phần X\" thành dựng giao diện rồi giao agent; hỏi làm gì và hỏi trước khi giao agent ghi file"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 0eb76c8d-3c0d-4eb7-bc04-b0977f02b520
  modified: 2026-11-26T10:17:09.622Z
---

Hải Nam nói kiểu "hôm nay làm xong phần kho" thì **hỏi lại cụ thể làm việc gì** (rà luồng, chốt điểm mở, tài liệu, màn hình nào). Không tự hiểu thành dựng wireframe và giao agent.

**Why:** 2026-11-26 mình tự giao 3 agent dựng 3 màn khi Hải Nam chỉ định làm màn xuất kho; Hải Nam phản ứng "tôi đã bảo làm giao diện đâu", phải dừng cả 3. CLAUDE.md đã có "agent ghi file thì hỏi trước" nhưng mình vẫn vi phạm.

**How to apply:** trước mọi lần giao agent ghi file: nói 1 câu agent sẽ làm gì, làm mấy màn, chờ Hải Nam gật. Chỉ làm đúng phạm vi được nói (ví dụ "màn xuất" là 1 màn, không kèm màn khác). Liên quan [[feedback-khong-tu-mo-rong]], [[feedback-bam-trong-tam]].
