# Mẫu lộ trình theo giai đoạn

## 1. Nguyên tắc chia giai đoạn
- Mỗi giai đoạn **tạo ra giá trị dùng được** và **kiểm chứng một giả thuyết**; không chia theo lớp kỹ thuật thuần túy.
- Giai đoạn đầu nhỏ, rủi ro thấp, học nhanh (ví dụ Gani trước Tizi trong lộ trình Tbestpro OS).
- Giữa các giai đoạn có **cổng quyết định**: Đi / Dừng / Điều chỉnh, dựa trên tiêu chí nghiệm thu đo được.
- Luôn có **kế hoạch quay lui** (hệ cũ vẫn là nguồn sự thật cho đến khi nghiệm thu).

## 2. Bảng giai đoạn
| Giai đoạn | Mục tiêu | Trong phạm vi | Ngoài phạm vi | Tiêu chí nghiệm thu (định lượng) | Phụ thuộc | Thời gian (khoảng) | Chi phí | Rủi ro chính | Quay lui |
|---|---|---|---|---|---|---|---|---|---|
| 0. Chuẩn bị/ổn định | | | | | | | | | |
| 1. Thí điểm | | | | | | | | | |
| 2. Mở rộng | | | | | | | | | |
| 3. Toàn bộ và tắt hệ cũ | | | | | | | | | |

## 3. Cổng quyết định (mẫu)
| Cổng | Câu hỏi | Dữ liệu cần | Người quyết | Hạn |
|---|---|---|---|---|
| G1 sau thí điểm | Đạt tiêu chí chưa? Chi phí thực so với kế hoạch? | Chỉ số 30 ngày so baseline | BGĐ | |
| G2 trước mở rộng | Người dùng chấp nhận chưa? Đối soát khớp chưa? | Báo cáo song song 1 kỳ tháng | Kế toán trưởng + BGĐ | |

## 4. Đường găng và phụ thuộc
Liệt kê việc chặn việc khác. Ví dụ: **chốt phương pháp giá vốn → thiết kế sổ lô → chạy song song kho**; **backup + vá bảo mật → mọi thay đổi**; **golden dataset được kế toán ký → nghiệm thu báo cáo**.

## 5. Kế hoạch đo lường
| Chỉ số | Baseline | Mục tiêu | Nguồn dữ liệu | Người đo | Mốc đo (30/90/180 ngày) |
|---|---|---|---|---|---|

## 6. Giao tiếp và thay đổi
Ai cần biết gì khi nào (BGĐ, trưởng phòng, kế toán, vận hành Philippines); đào tạo; hỗ trợ giờ đầu sau chuyển đổi.

## 7. Ưu tiên nhiều sáng kiến
| Sáng kiến | Giá trị (1-5) | Công sức (1-5) | Rủi ro (1-5) | Phụ thuộc | Thứ tự đề xuất | Lý do |
|---|---|---|---|---|---|---|
Quy tắc: làm trước việc **giá trị cao, công sức thấp, và việc mở khóa người khác**; việc "một cửa" (vá bảo mật, backup) đi trước dù không tạo lợi ích tiền mặt. Có thể dùng RICE (Reach × Impact × Confidence / Effort) nhưng phải giải thích bằng lời.
