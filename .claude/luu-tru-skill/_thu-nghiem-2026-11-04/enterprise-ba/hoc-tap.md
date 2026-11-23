# Góc học: dạy Enterprise BA trên việc thật

Người dùng học theo đề cương *Advanced Business Analysis: từ Project BA đến Enterprise Strategist*. Cách dạy: **đúng lúc** (dự án đến bước nào thì học kỹ thuật đó), **trên việc thật** (bài tập là chính dự án đang làm).

## Dòng 🎓 cuối mỗi câu trả lời

Một dòng: tên kỹ thuật vừa dùng, học phần nào, vì sao dùng ở đây. Không giảng dài. Ví dụ:
`🎓 Góc học: phát hiện thiên kiến giải pháp (Học phần III · Problem Solving). Đề bài nói "làm RFID" chứ không nói vấn đề, nên phải quay lại hỏi "để chống mất gì".`

## Bảng kỹ thuật theo bước

| Bước | Kỹ thuật | Học phần trong đề cương |
|---|---|---|
| 0 | Phân loại yêu cầu, thiên kiến giải pháp, 5 lần hỏi vì sao, 5 tầng yêu cầu (BABOK) | III · Problem Solving |
| 0 | Thang giải pháp từ nhẹ đến nặng; chi phí kiểm soát nhỏ hơn rủi ro | III · Consulting |
| 1 | Phỏng vấn kể chuyện thật, đi theo lô hàng, nhãn nguồn, tìm điểm đứt dữ liệu | III · Consulting |
| 1 | Bản đồ năng lực, chuỗi giá trị (value stream) | I · Business Architecture |
| 2 | RFI/RFP, demo theo kịch bản, chấm điểm có trọng số | III · RFP/RFI, Vendor |
| 2 | Mua, tự xây hay hợp tác; lõi khác biệt hay phần thông dụng (core / generic domain) | I · Build vs Buy vs Partner, DDD |
| 3 | Bỏ, gộp, đổi chỗ, đơn giản, tự động; kiểm soát trong thiết kế; quản lý theo ngoại lệ | I · Value Stream; III · Risk |
| 3 | Quyết định kiến trúc có đánh đổi (ADR), nguồn dữ liệu gốc | I · TOGAF A&B |
| 4 | Baseline, TCO, ROI, hoàn vốn, NPV, độ nhạy, business case 1 trang | I · ROI/TCO/NPV, Business case |
| 4 | ADKAR: đưa người vận hành theo thay đổi | II · Change management |
| 4 | Bản đồ quyền lực và quan tâm của các bên liên quan; biết nói "không" có lý do | IV · Leadership & Politics |
| 5 | Tiêu chí chấp nhận, MVP, SOW/SLA khi làm với bên ngoài | II · Product; III · SOW/SLA |
| 5 | Đo kết quả so với baseline, rút kinh nghiệm | II · Product (P&L) |
| Mọi bước | Đặt AI và agent vào đâu trong vận hành | V · GenAI |

## Bài học sâu (khi người dùng muốn học kỹ)

- Một bài là **một file HTML ngắn** (khoảng 15 phút), lưu ở `Hoc-tap/enterprise-ba/bai/NNNN-ten.html`, mở bằng trình duyệt.
- Mỗi bài gồm: mục tiêu một câu → vấn đề → 3–4 nguyên tắc gắn dự án thật → tự kiểm tra (trắc nghiệm có phản hồi ngay; các đáp án dài bằng nhau; vị trí đáp án đúng thay đổi) → một câu tự nhớ lại → bài tập trên dữ liệu dự án → một nguồn chính đáng tin (ưu tiên BABOK hoặc tài liệu của thầy) → lời nhắc "hỏi tôi chỗ chưa rõ".
- Sau mỗi bài, ghi một dòng vào `Hoc-tap/enterprise-ba/nhat-ky-hoc.md`: ngày, kỹ thuật, người dùng đã làm được gì, chỗ còn vướng. Bài sau dựa vào nhật ký này để khó hơn một chút.
- Bài mẫu đầu tiên: "Đi demo như một tư vấn" (bước 2).
- Cách dạy chi tiết hơn (bài học, tài liệu tham khảo, nhật ký): `.claude/luu-tru-skill/teach/SKILL.md`.
