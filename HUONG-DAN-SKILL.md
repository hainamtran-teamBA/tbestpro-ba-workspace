# Hướng dẫn dùng skill cho phân tích nghiệp vụ

Plugin đang dùng: **mattpocock-skills** (bản 1.2.3, đồng bộ từ tài khoản claude.ai). Gõ lệnh trong khung chat
Claude Code. Nếu một lệnh trùng tên với lệnh có sẵn (ví dụ `code-review`), gõ đầy đủ `/mattpocock-skills:<tên>`.

## 1. Chọn skill theo tình huống

| Bạn đang ở đâu | Gõ | Kết quả |
|---|---|---|
| Có ý tưởng/kế hoạch còn mơ hồ, không gắn với repo | `/grill-me` | Claude hỏi dồn từng lượt đến khi mọi nhánh quyết định đã rõ |
| Đang trong một dự án có tài liệu (repo) và muốn chốt một thay đổi | `/grill-with-docs` | Như trên, đồng thời ghi thuật ngữ vào `GLOSSARY.md` và quyết định lớn vào `docs/adr/` |
| Thuật ngữ đang bị hiểu mỗi người một kiểu | `/domain-modeling` | Chốt từ chuẩn, ghi từ cần tránh vào `GLOSSARY.md` |
| Câu trả lời nằm trong đầu người khác (BGĐ, nhà cung cấp, vận hành) | `/to-questionnaire` | File câu hỏi Markdown cho đúng một người, xếp theo mức quan trọng |
| Cần sự thật từ nguồn chính thức (luật, tài liệu API, thông số) | `/research` | Một file Markdown có trích nguồn từng ý |
| Việc lớn, nhiều phiên, chưa thấy đường đi | `/wayfinder` | Bản đồ các "phiếu quyết định", giải từng phiếu một |
| Đã quyết xong, cần chuyển sang đội làm | `/to-spec` rồi `/to-tickets` | Một spec ghi lại các quyết định, sau đó tách thành các ticket nhỏ |
| Cần một bản thử để mọi người phản hồi | `/prototype` | Một file HTML dùng thử, hoặc vài biến thể giao diện |
| Đọc câu trả lời mà không hiểu | `/wait-what` | Claude giải thích lại, ngắn hơn và đủ bối cảnh |
| Không biết dùng skill nào | `/ask-matt` | Claude gợi ý skill hoặc chuỗi skill phù hợp |
| Chuyển việc sang phiên mới mà không mất bối cảnh | `/handoff` | Một file tóm tắt để phiên sau đọc tiếp |

Các skill thiên về code (`/tdd`, `/implement`, `/code-review`, `/diagnosing-bugs`…) dành cho giai đoạn phát triển.

## 2. Chuỗi làm việc gợi ý cho BA

```mermaid
flowchart LR
  A[Ý tưởng mơ hồ] -->|/grill-me hoặc /grill-with-docs| B[Hiểu chung + GLOSSARY]
  B -->|thiếu thông tin từ người khác| Q[/to-questionnaire]
  B -->|thiếu sự thật bên ngoài| R[/research]
  Q --> B
  R --> B
  B -->|việc lớn, nhiều phiên| W[/wayfinder]
  W --> S[/to-spec]
  B -->|đã chốt| S
  S --> T[/to-tickets] --> D[Đội dev]
```

## 3. Ví dụ áp dụng ngay cho WMS (kho RFID)

| Việc | Skill | Cách gõ |
|---|---|---|
| Chốt 8 điểm còn mở OP-01…OP-08 và 7 mâu thuẫn M-01…M-07 | `/grill-with-docs` | `/grill-with-docs chốt các điểm OP và M trong docs/DAC-TA-TONG.md` |
| Gửi Nextwaves 10 giả định thiết bị GD-01…GD-10 | `/to-questionnaire` | `/to-questionnaire các giả định GD trong docs/06-trien-khai.md, gửi kỹ sư Nextwaves` |
| Xin BGĐ quyết GS1 prefix, ngưỡng duyệt, ngân sách tag | `/to-questionnaire` | `/to-questionnaire OP-01, OP-04 và giá tag, gửi Ban Giám Đốc` |
| Kiểm tra quy định SMS quảng cáo VN (NĐ 91/2020) và Philippines | `/research` | `/research quy định gửi SMS quảng cáo tại Việt Nam và Philippines` |
| Lập kế hoạch xây cả module WMS trong hệ thống lớn | `/wayfinder` | `/wayfinder xây module kho RFID GĐ1 trong hệ thống Go + React` |
| Chuyển GĐ1 đã chốt cho dev | `/to-spec`, `/to-tickets` | gõ lần lượt sau khi đã chốt |

## 4. Thiết lập một lần cho mỗi repo

Các skill `/to-spec`, `/to-tickets`, `/wayfinder`, `/triage` cần biết ticket lưu ở đâu. Trong mỗi repo git
(hiện có `WMS/kho-rfid`), mở Claude tại repo đó và gõ:

```
/setup-matt-pocock-skills
```

Khuyến nghị chọn **Local markdown** (ticket lưu thành file trong `.scratch/`), vì máy chưa có GitHub CLI.
Sau này dùng GitHub/GitLab/Jira thì chạy lại để đổi.

## 5. Lưu ý khi dùng

- **Câu hỏi bị hỏi dồn là đúng thiết kế.** `grill-me` hỏi từng lượt và chờ bạn trả lời; trả lời "chưa biết"
  cũng được, Claude sẽ ghi lại là điểm còn mở.
- **`GLOSSARY.md` chỉ chứa thuật ngữ.** Nếu thấy Claude ghi cả quyết định hay ghi chú vào đó, nhắc lại.
- **`grill-with-docs` đôi khi không cập nhật `GLOSSARY.md`.** Khi đó gõ thêm `/domain-modeling` trong cùng phiên.
- **`/research` có lỗi đã biết:** đôi khi tự tạo thêm một agent con chạy trùng, tốn token. Sau khi gọi, xem danh
  sách tác vụ nền và dừng bản trùng.
- **File research là ảnh chụp tại thời điểm viết.** Dùng xong nên lưu trữ hoặc xóa; chỉ giữ ADR lâu dài.
- Plugin bản 1.2.3 cũ hơn bản mới nhất trên GitHub (1.3.2); bản mới thêm `/pr`, `/retro`, `/implement-spec`.
  Muốn cập nhật, cập nhật ở phần plugin trên claude.ai, không cài thêm bản thứ hai.
