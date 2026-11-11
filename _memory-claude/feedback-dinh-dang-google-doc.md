---
name: feedback-dinh-dang-google-doc
description: "Google Docs gửi sếp/đối tác phải theo định dạng chuẩn của tài liệu cũ (Arial, tiêu đề đánh số, bảng viền xám đầu bảng nền xám)"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 601c7a5b-0775-49bf-9ac4-f524ae47cfa3
  modified: 2026-11-06T15:18:48.945Z
---

2026-11-06, người dùng chê file Google Docs tạo mới "font chữ và trình bày không như các file cũ", yêu cầu theo mẫu "Kho 7 - Đề xuất thử bộ RFID có sẵn của Nextwaves" (id 1irN5pZpF5DjtLvPxEF6R1Vh1Fu_yGOIxO_FIaX7MftM) và "chuyên nghiệp lên".

Định dạng chuẩn (đọc từ file mẫu): toàn bộ Arial; tiêu đề H1 17pt đậm; ngay dưới là một dòng ghi chú 9pt màu xám #666666 (đối tượng đọc, nhãn nguồn, ngày cập nhật); tiêu đề mục H2 13pt đậm, **đánh số tay "1. ", "2. "**; chữ thường 11pt; bảng viền 1pt #bbbbbb, hàng đầu nền #eeeeee chữ đậm, đệm ô khoảng 4pt.

**Why:** tài liệu gửi BGĐ và đối tác cần nhìn đồng bộ, chuyên nghiệp như bộ tài liệu đã có.
**How to apply:** khi tạo Google Doc bằng Drive `create_file` (HTML), ghi style inline theo các thông số trên (h1 font-size:17pt, h2 font-size:13pt có số thứ tự, dòng ghi chú 9pt #666666, td border:1pt solid #bbb;padding:4pt, hàng đầu background:#eee;font-weight:700). Google Docs tự dùng Arial nên không cần khai font. Liên quan [[user-po-ba-tbestpro]].
