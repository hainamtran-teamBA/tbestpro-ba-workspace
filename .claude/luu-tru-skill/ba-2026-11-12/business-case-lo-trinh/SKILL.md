---
name: business-case-lo-trinh
description: Lập business case (luận chứng kinh doanh) và lộ trình triển khai theo giai đoạn cho một sáng kiến/hệ thống/thay đổi quy trình tại Tbestpro: lượng hóa lợi ích, tính chi phí đầy đủ (TCO), ROI, thời gian hoàn vốn, độ nhạy, rủi ro, phân giai đoạn có tiêu chí nghiệm thu, kế hoạch đo lường sau triển khai. Dùng khi người dùng hỏi "có đáng làm không", "tính ROI/hoàn vốn", "lập business case", "xin ngân sách", "lộ trình triển khai", "chia giai đoạn", "ưu tiên sáng kiến nào trước", hoặc cần thuyết phục Ban Giám đốc duyệt một đề xuất.
---

# Business case và lộ trình

**Mảng BABOK:** 4. Phân tích chiến lược (xác định chiến lược thay đổi) và 5. Đặc tả và thiết kế (phân tích giá trị tiềm năng). Kỹ thuật: business case, phân tích tài chính, phân tích rủi ro. Đo kết quả sau khi chạy: skill `danh-gia-giai-phap`.

Người dùng là PO/BA đang lên vai trò kiến trúc sư giải pháp tại Tbestpro. Trả lời bằng **tiếng Việt**. Mục tiêu: giúp Ban Giám đốc **quyết định có làm không, làm gì trước, bỏ bao nhiêu, nhận lại gì, đo bằng cách nào**. Business case tốt không chứng minh "nên làm" bằng mọi giá; nó cho thấy giá trị, chi phí, rủi ro và cả điều kiện **không nên làm**.

Bối cảnh công ty: skill `hieu-nghiep-vu` (`references/thuc-te-cong-ty.md`, `kien-truc-tbestpro-os.md`, `ban-do-luong-don-hang.md`). Đầu vào từ các skill khác nếu có: khảo sát giải pháp (`khao-sat-giai-phap`: TCO các phương án) và ADR (`quyet-dinh-kien-truc`: quyết định đã chọn). Nếu không đọc được, hỏi bối cảnh tối thiểu. Khi cần số liệu thật (đơn/ngày, tỷ lệ hoàn, chi phí SMS, chi phí quảng cáo, tồn kho), tra Tizi Tbest (chỉ đọc), nêu phạm vi thời gian; không bịa.

## Quy trình 8 bước

### 1. Xác định sáng kiến và quyết định cần ra
Hỏi tối đa 4 câu, bỏ câu đã biết:
- Sáng kiến là gì, **vấn đề gốc** (5 Whys) và **ai là người ra quyết định** (BGĐ, trưởng IT, kế toán trưởng)?
- **Quyết định cụ thể** cần ra (duyệt ngân sách X, chọn phương án A, bắt đầu giai đoạn 1)? Hạn chót?
- **Mục tiêu đo được** (giảm chi phí SMS bao nhiêu, giảm tỷ lệ hoàn, rút P&L từ ngày 15-20 xuống ngày 5)?
- Phương án thay thế gồm cả **"không làm gì"** (đường cơ sở).
Chốt thành "Tuyên bố vấn đề và quyết định" 3-4 dòng, xin người dùng xác nhận.

### 2. Lập đường cơ sở (baseline)
Không có baseline thì không có lợi ích. Với mỗi chỉ số liên quan, ghi **giá trị hiện tại, nguồn, kỳ đo, độ tin cậy**. Ví dụ: chi phí SMS khoảng 45 triệu VNĐ/tháng; chênh lệch CPQC 139,3 triệu giữa hai nguồn trong 4 ngày; số giờ kế toán đối soát COD (cần đo, chưa có). Chỉ số chưa có số: ghi **[cần đo]** và đề xuất cách đo trong 1-2 tuần (khảo sát thời gian, trích dữ liệu), không đoán.

### 3. Lượng hóa lợi ích
Phân loại và **không tính trùng**:
| Loại | Ví dụ | Cách tính |
|---|---|---|
| Tiết kiệm chi phí cứng | Giảm phí SMS, giảm phí hoàn, bỏ phần mềm cũ | Giá trị tuyệt đối × khối lượng, so baseline |
| Tăng doanh thu/lợi nhuận | Giảm tỷ lệ hoàn, tăng tỷ lệ chốt, ít hết hàng | Δ tỷ lệ × số đơn × lợi nhuận/đơn (dùng lợi nhuận, không dùng doanh thu) |
| Tiết kiệm thời gian | Giảm giờ đối soát, nhập liệu | Giờ tiết kiệm × chi phí giờ **chỉ khi giờ đó được dùng việc khác hoặc giảm tuyển**; không thì ghi là "giá trị mềm" |
| Giảm rủi ro/tổn thất | Giảm thất thoát kho, tránh sai lệch tài chính, tránh sự cố bảo mật | Xác suất × tổn thất; ghi rõ là ước tính |
| Giá trị chiến lược (khó đo) | Rút ngắn thời gian chốt sổ, nền tảng để mở thị trường | Mô tả định tính, **không cộng vào ROI** |
Mỗi dòng lợi ích có **công thức, giả định, nguồn, mức tin cậy (Cao/Trung/Thấp)**. Dùng **ba kịch bản**: bảo thủ, cơ sở, lạc quan. Không dùng con số chỉ lấy từ trang tiếp thị nhà cung cấp làm kịch bản cơ sở.

### 4. Tính chi phí đầy đủ (TCO)
Đầy đủ cả chi phí **một lần** và **định kỳ**, trong khung 3 năm (hoặc theo đời sống sáng kiến):
- Cấp phép/thuê bao, hạ tầng, triển khai và tích hợp, chuyển đổi dữ liệu, đào tạo (kể cả nhân sự Philippines), vận hành và bảo trì, nhân sự nội bộ dành cho dự án (chi phí cơ hội), chạy song song hai hệ, dự phòng rủi ro (khuyến nghị 15-30% với dự án mới), chi phí gọi model AI nếu có.
- Phân biệt **chi phí tiền mặt** và **chi phí nhân sự nội bộ**. Nêu tiền tệ và tỷ giá, ngày tham chiếu.
- Với "tự xây": tính cả bảo trì sau khi xây xong và rủi ro vượt tiến độ.

### 5. Tính chỉ số tài chính
Dùng `references/cong-thuc-tai-chinh.md`. Tối thiểu: **dòng tiền theo năm/quý, tổng lợi ích − tổng chi phí, ROI, thời gian hoàn vốn, NPV** (nêu tỷ lệ chiết khấu và vì sao), cho từng kịch bản. Hiển thị **công thức và bảng tính** để người khác kiểm lại. Nếu người dùng cần file, tạo bảng Excel qua skill xlsx; không dán số máy móc vào văn bản mà không có bảng nền.

### 6. Độ nhạy và rủi ro
- **Độ nhạy:** 3-5 giả định ảnh hưởng nhiều nhất (tỷ lệ hoàn giảm bao nhiêu, số đơn/ngày, giá nhà cung cấp, độ trễ tiến độ); lập bảng "giả định thay đổi ±X% thì ROI/hoàn vốn đổi thế nào"; tìm **điểm hòa vốn** (giả định tối thiểu để vẫn có lợi).
- **Rủi ro:** xác suất, tác động, cách giảm, người phụ trách (xem `references/rui-ro-du-an.md`). Có mục **rủi ro của việc không làm**.

### 7. Lộ trình theo giai đoạn
Dùng `references/mau-lo-trinh.md`:
- Chia theo **giá trị tăng dần và rủi ro giảm dần**: giai đoạn đầu nhỏ, kiểm chứng giả thuyết; quyết định tiếp theo dựa trên kết quả (**cổng quyết định "đi/dừng/điều chỉnh"**).
- Mỗi giai đoạn: mục tiêu, phạm vi (trong/ngoài), **tiêu chí nghiệm thu định lượng**, phụ thuộc (quyết định nghiệp vụ cần BGĐ chốt, dữ liệu, đối tác), nguồn lực, thời gian (khoảng, không con số cứng), chi phí, rủi ro, kế hoạch quay lui.
- **Đường găng và phụ thuộc:** nêu việc nào chặn việc nào (ví dụ chốt phương pháp giá vốn trước khi thiết kế sổ lô). Nếu có xung đột với lộ trình Tbestpro OS, nêu rõ.
- **Ưu tiên nhiều sáng kiến:** dùng bảng giá trị/công sức/rủi ro/phụ thuộc, hoặc RICE; giải thích vì sao, không chỉ cho điểm.

### 8. Kế hoạch đo lường và thực hiện lợi ích
- **Ai đo, đo gì, khi nào, nguồn dữ liệu** (từ Tizi/báo cáo nào), mốc 30/90/180 ngày; so với baseline.
- **Người chịu trách nhiệm** từng lợi ích (benefit owner).
- **Điều kiện dừng/điều chỉnh** nếu chỉ số không đạt.
- Đề xuất lưu quyết định vào ADR hoặc `thuc-te-cong-ty.md` sau khi được duyệt.

## Đầu ra
Viết theo `references/mau-business-case.md`. Người đọc là Ban Giám đốc: **mở đầu 1 trang** gồm quyết định cần ra, đề xuất, lợi ích và chi phí tóm tắt (3 kịch bản), thời gian hoàn vốn, rủi ro lớn nhất, bước tiếp theo; chi tiết phía sau. Nếu người dùng cần chia sẻ, đề nghị xuất thành tài liệu hoặc trang; không tự đăng.

## Nguyên tắc chất lượng
- **Trung thực với số:** nhãn **[Dữ liệu công ty]**, **[Nguồn]** (link, ngày), **[Giả định]**, **[Cần đo]**, **[Ý kiến của tôi]**. Không làm đẹp số để đạt ROI mong muốn; nếu ROI không hấp dẫn, nói thẳng và đề xuất phương án nhỏ hơn hoặc dừng.
- **Không tính trùng lợi ích** (tiết kiệm giờ rồi cộng cả lương; giảm hoàn rồi cộng cả doanh thu). Dùng lợi nhuận, không dùng doanh thu, khi tính tăng bán.
- **Tách lợi ích cứng và mềm:** chỉ lợi ích cứng và giá trị tiền mặt hóa có cơ sở mới đưa vào ROI.
- **Cẩn trọng với khoảng tin cậy:** đưa khoảng thay vì một con số; nói rõ phần nào thật sự chắc.
- **Định nghĩa số liệu phải nhất quán:** công ty đang có nhiều định nghĩa doanh số, CPQC, giá vốn; ghi rõ định nghĩa nào được dùng.
- **Không đưa thông tin mật** (lương cá nhân, lỗ hổng bảo mật, số liệu tài chính chi tiết) vào bản gửi rộng; tham chiếu nguồn.
- Quyết định cuối thuộc về BGĐ; skill đưa khuyến nghị và điều kiện, không tự "duyệt".
- Trả lời hội thoại ngắn (bảng, gạch đầu dòng); viết dài chỉ khi lập tài liệu.
