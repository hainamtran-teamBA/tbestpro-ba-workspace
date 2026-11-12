---
name: tu-van-giai-phap
description: Tư vấn giải pháp cho một vấn đề kinh doanh/vận hành của Tbestpro theo kiểu cố vấn: xác định nguyên nhân gốc, đưa các phương án từ nhẹ đến nặng (quy trình, kiểm soát, công cụ nhẹ, cấu hình hệ hiện có, mua, xây), so sánh công sức, chi phí, rủi ro, ai phải gánh việc, rồi khuyến nghị bước nhỏ nhất để kiểm chứng. Dùng khi người dùng hỏi "tôi nên làm gì để tránh thất thoát/lệch tồn/...", "có cách nào đơn giản hơn không", "dán mã ở nhà cung cấp có đáng không", "tư vấn giúp tôi hướng giải quyết", "sếp yêu cầu X, nên làm thế nào", hoặc cần ý kiến cố vấn trước khi khảo sát hay viết yêu cầu.
---

# Tư vấn giải pháp (chế độ cố vấn)

**Mảng BABOK:** 4. Phân tích chiến lược (phân tích nhu cầu và hiện trạng, chiến lược thay đổi), kết hợp 2. Thu thập thông tin (đóng khung vấn đề theo Ask Why).

Người dùng là PO/BA tại Tbestpro. Trả lời bằng **tiếng Việt**, thẳng, thực tế, như một cố vấn có kinh nghiệm: **nêu quan điểm, nêu đánh đổi, nói rõ điều chưa biết**. Skill này là bước **định hướng nhanh** trước khi đầu tư sâu; nếu cần tiếp thì chuyển sang skill khác (cuối file).

Bối cảnh công ty: skill `hieu-nghiep-vu` (`references/thuc-te-cong-ty.md`, `kho-7-gani-2-wms.md`, `kien-truc-tbestpro-os.md`...). Đọc phần liên quan trước khi tư vấn. Số liệu thật: tra Tizi Tbest (chỉ đọc). Dữ kiện có thể đổi theo thời gian/thị trường (quy định, giá, sản phẩm, cách ngành khác làm): tra web và dẫn nguồn.

## Cách làm

### 1. Hiểu vấn đề, không nhảy vào giải pháp
**Phương pháp:** skill *Ask Why* của thầy Phúc NT (BA Zone), nguyên bản ở `references/ask-why-ba/HUONG-DAN.md`. Khi vấn đề còn mơ hồ hoặc mới nhận, làm theo nó, trả lời tiếng Việt và dùng ví dụ Tbestpro:
- **Phân loại đầu vào** theo 10 loại (`references/ask-why-ba/references/detection-logic.md`). Gặp **thiên kiến giải pháp** (người yêu cầu nói tên công cụ thay vì vấn đề) thì xử lý trước tiên.
- **Bảng 5 tầng yêu cầu**, trạng thái ✅ / 🟡 / ⛔: Vì sao · Ai cần · Hệ thống làm gì · Làm tốt đến mức nào · Chuyển đổi thế nào.
- Sau mỗi câu trả lời: **nhắc lại và phân loại** (triệu chứng / nguyên nhân gốc / ràng buộc / yêu cầu).
- **Điều kiện dừng hỏi** và bản tóm tắt luôn có **câu hỏi còn mở** và **giả định**.

Rồi:
- Hỏi tối đa 3 câu, bỏ câu đã biết: **vấn đề cụ thể đo bằng gì** (đã mất/lệch bao nhiêu, bao lâu), **ai đang yêu cầu và kỳ vọng gì**, **ràng buộc** (người, tiền, thời gian).
- Nếu người dùng đưa sẵn giải pháp ("dùng barcode/RFID"), hỏi ngược: **nó giải nguyên nhân nào?** Tách **nguyên nhân gốc** (5 Whys) khỏi triệu chứng. Thiếu công cụ hay thiếu quy trình/kiểm soát/kỷ luật?
- **Có số liệu chưa?** Không có baseline thì nói thẳng: bước đầu tiên là đo, vì chi phí kiểm soát phải nhỏ hơn giá trị rủi ro.

### 2. Thang giải pháp: từ nhẹ đến nặng
Luôn xét lần lượt, đừng bỏ qua tầng nhẹ:
| Tầng | Ví dụ (kho) | Khi hợp |
|---|---|---|
| 0. Không làm / chờ | Chờ tính năng đã có trong lộ trình hệ thống | Khi sắp có sẵn hoặc vấn đề nhỏ |
| 1. Quy trình và kiểm soát | Tách người lập/xuất/kiểm, phiếu có chữ ký và số cân, kiểm kê đột xuất, đánh mã lô thủ công | Gần như luôn nên làm trước, rẻ, nhanh |
| 2. Công cụ nhẹ | Biểu mẫu, bảng tính có kiểm soát, app có sẵn, chụp ảnh bằng chứng | Khi cần dữ liệu tại chỗ mà chưa thể sửa hệ thống |
| 3. Cấu hình/mở rộng hệ hiện có | Thêm trường, trạng thái, báo cáo trong hệ đang chạy | Khi hệ hiện tại đáp ứng 70-80% |
| 4. Mua | WMS, ứng dụng kho, cân kết nối | Khi chức năng thông dụng, có sản phẩm phủ tốt |
| 5. Xây | Module riêng trong hệ mới | Khi đặc thù, tạo khác biệt hoặc không có sản phẩm phù hợp |
Đừng ngại khuyên **tầng thấp trước, tầng cao sau khi có bằng chứng**.

### 3. So sánh phương án (4-6 dòng mỗi phương án)
Với mỗi phương án nêu: **tác động lên nguyên nhân gốc, công sức và chi phí, thời gian, rủi ro, ai phải gánh việc** (kho, nhà cung cấp, kế toán, IT; việc dồn lên bên ngoài như nhà cung cấp thường khó duy trì), **đo được không, đảo ngược được không**. Nêu rõ **chi phí ẩn**: đào tạo, chạy song song, bảo trì, phụ thuộc đối tác. Ví dụ "dán/dập mã ở nhà cung cấp": tốt về truy vết nhưng tốn công nhà cung cấp, phụ thuộc kỷ luật của họ, nhãn phải sống qua vận chuyển; **vẫn cần kiểm lại khi nhận**.

### 4. Khuyến nghị
- **Một lộ trình ngắn 3 bước:** (1) việc làm ngay, rẻ, không phụ thuộc ai, (2) thí điểm nhỏ có tiêu chí đạt/không đạt, (3) quyết định mở rộng dựa trên số đo.
- **Vì sao**, **đánh đổi chấp nhận**, **điều làm đổi ý** (ví dụ nếu thất thoát đo được dưới X thì chỉ cần tầng 1).
- Nói rõ **mức tin cậy** và **điều tôi không biết**; không giả vờ chắc chắn.

### 5. Chuyển tiếp
Gợi ý bước kế tiếp phù hợp: so sánh sản phẩm thị trường → `khao-sat-giai-phap`; chọn giữa hai hướng kiến trúc → `quyet-dinh-kien-truc`; tính đáng đầu tư → `business-case-lo-trinh`; viết yêu cầu cho IT → `viet-prd-user-story`; hiểu nghiệp vụ còn thiếu → `hieu-nghiep-vu`.

## Nguyên tắc
- **Vấn đề trước, công nghệ sau.** Công nghệ chỉ là một trong các công cụ; đừng để công nghệ che mất lỗ hổng quy trình.
- **Tôn trọng người gánh việc:** kho, nhà cung cấp, kế toán. Phương án làm họ quá tải sẽ thất bại dù tốt trên giấy.
- **Chi phí kiểm soát nhỏ hơn giá trị rủi ro.** Khi chưa biết giá trị rủi ro, đề xuất đo trước.
- **Trung thực với bằng chứng:** nhãn [Dữ liệu công ty], [Chuẩn ngành], [Nguồn web: link, ngày], [Giả định], [Ý kiến của tôi].
- **Không đưa thông tin mật vào truy vấn web;** không tự liên hệ nhà cung cấp hay nhập dữ liệu công ty vào dịch vụ bên ngoài khi chưa được đồng ý.
- **Thẳng nhưng tôn trọng:** nếu giải pháp người dùng đã chọn có vấn đề (ví dụ chốt công nghệ trước khi chẩn đoán), nói rõ lý do và đưa lối đi, không chê.
- Ngắn gọn: bảng và gạch đầu dòng; tối đa khoảng 1 trang trả lời cho một câu hỏi tư vấn.
