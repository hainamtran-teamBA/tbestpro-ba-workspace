---
name: feedback-luong-it-buoc-vi-du
description: Giải thích luồng nghiệp vụ (nhất là kho) theo từng bước ngoài hiện trường với ví dụ số cụ thể; ưu tiên phương án ít thao tác
metadata:
  node_type: memory
  type: feedback
  originSessionId: 0eb76c8d-3c0d-4eb7-bc04-b0977f02b520
  modified: 2026-11-26T10:17:10.481Z
---

Khi giải thích hay đề xuất luồng thao tác (kho, trạm cân, xuất lẻ): đi **từng bước ngoài hiện trường** (ai làm gì, màn hình hiện gì) với **một ví dụ số cụ thể** xuyên suốt (ví dụ "khách cần 30 kg Robusta"). Đề xuất bản **ít thao tác nhất**; bước nào lợi ít (như cân thêm phần còn lại) thì bỏ và nói hao hụt được bắt ở đâu khác.

**Why:** 2026-11-26 Hải Nam nhiều lần nói "rối", "lằng nhằng" khi mình đưa luồng xuất lẻ có tem con và bước cân phần còn lại; chỉ hiểu khi mình rút còn "quét mã → đổ ra bao khách → cân → xuất". Bộ giả lập wireframe gộp cân và quét làm Hải Nam hiểu sai luồng.

**How to apply:** viết bảng "Bước | Nhân viên làm | Màn hình hiện"; tránh khái niệm phụ (tem con, nhập lại) nếu không bắt buộc; wireframe giả lập phải giống thao tác thật (mỗi thiết bị một nhóm nút). Liên quan [[project-wms-kho7]].
