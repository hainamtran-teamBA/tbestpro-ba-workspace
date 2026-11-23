---
name: danh-gia-giai-phap
description: Đánh giá một giải pháp đã chạy thử hoặc đã triển khai tại Tbestpro (thí điểm thiết bị, quy trình mới, tính năng mới, agent AI) - đo so với số liệu gốc, phân tích vì sao đạt hay chưa đạt, tách lỗi do giải pháp với lỗi do con người và quy trình, rồi khuyến nghị giữ, mở rộng, điều chỉnh hay dừng. Dùng khi người dùng hỏi "chạy thử có đạt không", "đánh giá pilot", "sau khi triển khai thấy thế nào", "có nên mở rộng không", "vì sao không hiệu quả", "đo kết quả", "rút kinh nghiệm dự án", hoặc khi đến mốc 2 tuần / 30 / 90 ngày sau khi chạy.
---

# Đánh giá giải pháp sau khi chạy

**Mảng BABOK:** 6. Đánh giá giải pháp (đo hiệu quả, phân tích số đo, đánh giá giới hạn của giải pháp và của doanh nghiệp, khuyến nghị tăng giá trị).

Người dùng là PO/BA tại Tbestpro. Mục tiêu: trả lời trung thực "**giải pháp có mang lại giá trị như đã hứa không, và làm gì tiếp**". Giải pháp đã làm xong chưa phải là xong việc: chỉ xong khi số đo chứng minh được. Trả lời **tiếng Việt**, ngắn, dùng bảng.

Đầu vào: business case (`business-case-lo-trinh`: chỉ số, baseline, tiêu chí đạt), hồ sơ To-Be (`thiet-ke-quy-trinh-to-be`), PRD (`viet-prd-user-story`). Số liệu thật: tra Tizi Tbest (chỉ đọc), nêu phạm vi thời gian.

## Quy trình 6 bước

### 1. Chốt thước đo TRƯỚC khi chạy (nếu chưa có)
Bảng: chỉ số · baseline (giá trị, nguồn, kỳ đo) · tiêu chí đạt · nguồn dữ liệu · người đo · mốc đo (2 tuần, 30, 90 ngày). Có cả **chỉ số sớm** (tỷ lệ quét đủ, số ngoại lệ mỗi ngày) và **chỉ số kết quả** (thất thoát, lệch tồn, giờ công).
**Không đổi tiêu chí sau khi thấy kết quả.** Nếu buộc phải đổi, ghi rõ lý do và giữ cả tiêu chí cũ để so.

### 2. Đo
- **Định lượng:** lấy số theo đúng định nghĩa đã chốt; ghi kỳ đo, phạm vi (kho, mã hàng, ca).
- **Định tính:** hỏi 3–5 người dùng thật (thao tác nào chậm, chỗ nào phải làm vòng); quan sát một ca làm việc.
- **Cách người làm lách quy trình** (ghi giấy rồi nhập sau, quét hộ, bỏ qua bước): đây là tín hiệu quan trọng nhất, ghi lại đầy đủ, không quy lỗi cá nhân.

### 3. Phân tích số đo
- So với baseline và tiêu chí đạt, theo từng chỉ số.
- **Chênh lệch có ý nghĩa không:** thời gian đủ dài chưa, mẫu có đủ lớn không, có yếu tố mùa vụ hay sự kiện lạ không, có thay đổi nào khác cùng lúc không.
- **Chuỗi nhân quả:** chỉ số sớm có tốt không? Nếu chỉ số sớm tốt mà kết quả không đổi, giả thuyết trong business case có thể sai.

### 4. Tìm nguyên nhân khi chưa đạt
| Loại giới hạn | Ví dụ | Hướng xử lý |
|---|---|---|
| Của giải pháp | Thiết bị đọc sót, phần mềm thiếu bước, chậm, lỗi | Sửa, cấu hình, đổi thiết bị |
| Của doanh nghiệp | Chưa đào tạo đủ, thiếu người, quy trình cũ còn chạy song song, không ai chịu trách nhiệm, động lực ngược (làm đúng thì chậm hơn) | Đào tạo, đổi RACI, bỏ đường cũ, đổi chỉ tiêu |
| Của giả thuyết | Vấn đề gốc không nằm ở đây | Quay lại `tu-van-giai-phap` |

Dùng ADKAR để soi phần con người: họ **Biết** vì sao phải đổi chưa · **Muốn** đổi chưa · **Biết cách** chưa · **Làm được** chưa · có gì **Duy trì** không.

### 5. Khuyến nghị
Một trong bốn: **giữ và mở rộng** (kèm điều kiện) · **điều chỉnh rồi đo lại** (sửa gì, đo lại khi nào) · **thu hẹp** · **dừng** (và quay về cách cũ thế nào). Nêu chi phí và lợi ích đã thực hiện được so với business case. Nếu mở rộng, nhắc **bỏ hẳn cách làm cũ** (đường song song) để không tốn hai lần.

### 6. Rút kinh nghiệm
Ghi gọn: mục tiêu so với kết quả · quyết định then chốt và vì sao · điều đúng · điều chưa lường · lần sau làm khác gì. Ghi dữ kiện mới vào `hieu-nghiep-vu/references/thuc-te-cong-ty.md` hoặc file mảng liên quan; bài học về cách làm thì đề xuất sửa skill tương ứng.

## Đầu ra
Báo cáo 1 trang cho sếp: kết luận và khuyến nghị (3 dòng) · bảng chỉ số so với baseline và tiêu chí · nguyên nhân chính · việc tiếp theo và mốc đo lại. Chi tiết để phụ lục. Cho agent `phan-bien` đọc trước khi gửi.

## Nguyên tắc
- **Trung thực với số:** không làm đẹp kết quả. Chưa đạt thì nói chưa đạt, kèm lý do và lối đi.
- **Nhãn nguồn:** [Dữ liệu công ty], [Quan sát], [Người dùng nói], [Giả định], [Ý kiến của tôi].
- **Không quy lỗi cá nhân;** tìm nguyên nhân ở thiết kế, đào tạo, động lực.
- Quyết định mở rộng hay dừng thuộc về sếp; skill đưa khuyến nghị và điều kiện.
