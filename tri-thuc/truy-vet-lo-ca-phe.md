# Truy vết lô và đánh dấu bao cà phê nhân (nghiên cứu web)

> Tra cứu ngày **2026-10-26** bằng WebSearch. **Hầu hết nguồn là trang nhà cung cấp/nhà nhập khẩu/blog tuân thủ, không phải văn bản chuẩn gốc**, nên dùng làm hướng tham khảo, chưa phải căn cứ pháp lý. Nhãn: [Nguồn web] kèm link; [Chưa tìm thấy] = đã tìm mà không có; [Ý kiến] = suy luận của tôi.

## 1. Thực tế ngành về đánh dấu bao
- **Dấu ICO ("ICO marks") là mức cơ bản:** theo một bài trình bày của nhà nhập khẩu, mỗi bao phải mang dấu theo chuẩn ICO gồm **nước xuất xứ, mã nhà xuất khẩu, số lô** (mã ba phần), được đánh dấu **tại nguồn**; hầu hết người gửi hàng chỉ dừng ở dấu này. Cũng trong tài liệu đó đề xuất thêm mã vạch "human-readable" để vận chuyển, lưu kho và truy vết đầu-cuối, và nêu **chưa có chuẩn** cho việc ghi cộng đồng, phương pháp chế biến, mô tả vật lý lên bao. [Nguồn web: [ICO Extension SCM 10a, San Cristobal Coffee](https://www.sancristocafe.com/media/archives/ICO-Extension_SCM_10a.pdf)] *(đây là đề xuất của một công ty, chưa kiểm chứng với văn bản ICO)*
- **Có hướng dẫn chuẩn về lấy mẫu, đóng gói, đánh dấu, lưu kho, vận chuyển cà phê nhân** (ISO, ví dụ ISO 4072 về lấy mẫu cà phê trong bao). [Nguồn web: [BSI, hướng dẫn phương pháp mô tả cà phê nhân](https://knowledge.bsigroup.com/products/green-coffee-guidance-on-methods-of-specification-1); [ISO 4072:1982](https://scc-ccn.ca/standardsdb/standards/8103529)] Nội dung chuẩn là tài liệu trả phí, tôi chưa đọc.
- **[Chưa tìm thấy]** nguồn nói riêng về quy ước dập/stencil tại kho hay cách số lô được nối với sổ kho.

## 2. Mô hình "QR từng bao tại nguồn, kho quét khi nhận" đã có thật
- **Coffee Hunter / Assure+:** đối tác tại nguồn gắn **QR duy nhất cho từng bao**; tại kho, nhân viên **quét một mã đại diện cho cả lô** để ghi nhận đã nhận hàng. Có bài kể việc gắn hàng nghìn bao và thùng trong 18 tháng. [Nguồn web: [Coffee Hunter Assure+](https://coffeehunter.com/assure-project/); [hành trình bao cà phê đặc sản](https://coffeehunter.com/the-specialty-coffee-bags-journey-from-farm-to-roastery-powered-by-rfider/)] *(tiêu biểu cho phân khúc đặc sản, quy mô nhỏ; có nhắc RFID trong tên bài nhưng tôi chưa đọc chi tiết)*
- **Tra cứu cho người mua:** Just Coffee nhập mã dưới bao để xem xuất xứ, ngày rang, mã lô quốc tế, giá trả cho hợp tác xã; trang ghi có trường đôi khi thiếu hoặc đăng muộn. [Nguồn web: [Just Coffee tracker](https://justcoffee.coop/coffee-tracker/)]
- **Vùng Cerrado Mineiro (Brazil)** dùng QR trên bao cà phê nhân. [Nguồn web: [Perfect Daily Grind](https://perfectdailygrind.com/?p=67428)]
- **Nghiên cứu nhỏ (9 hộ ở Colombia):** hệ thống QR trên nền đám mây giúp nhập dữ liệu chính xác hơn và tra cứu thời gian thực; mẫu nhỏ nên hạn chế. [Nguồn web: [Universidad del Pacífico](https://faculty.up.edu.pe/en/publications/traceability-in-the-supply-chain-of-specialty-coffee-small-produc/)]
- **Kết luận từ nguồn:** ủng hộ QR từng bao + sự kiện quét khi nhập kho, nhưng **không có chuẩn ngành cho nội dung mã QR hay các sự kiện quét**.

## 3. Điểm gãy thường gặp: chứng từ không khớp mã lô
Bài của một công ty phần mềm nêu truy vết hay đứt ở mắt xích chứng từ: hóa đơn, chứng nhận, lịch giao dùng **mã lô khác nhau cho cùng một lô hàng**. [Nguồn web: [ImageToTable](https://imagetotable.ai/blog/coffee-supply-chain-lot-traceability-verification)] *(blog vendor)* Đây chính là rủi ro của việc để Kho 7 đặt mã lô mới mà không lưu liên kết với mã lô nguồn.

## 4. Chuẩn GS1 cho pallet
- **SSCC** là mã 18 chữ số định danh một đơn vị logistics (pallet, thùng); **GS1-128** có thể mang SSCC cùng số lô/hạn dùng trong một lần quét; dùng chia sẻ dữ liệu qua EDI/EPCIS. Ví dụ: pallet trứng nhiều lô, mỗi pallet có SSCC, mã lô nằm trong GS1-128. [Nguồn web: [GS1 case study Rothex](https://gs1.org/insights-events/case-studies/rothex-traceability-eggs-has-never-been-easier-gs1-standards); [CartonCloud: SSCC](https://help.cartoncloud.com/knowledge/what-is-sscc)]
- **[Chưa tìm thấy]** hướng dẫn riêng cho **bao hàng rời nông sản** (bao có là đơn vị logistics riêng với SSCC không, hay chỉ dán nhãn lô).

## 5. Quy định EU (chỉ liên quan nếu hàng vào EU)
- Các nguồn thứ cấp nêu ngày áp dụng chính **30/12/2026** (doanh nghiệp lớn và vừa) và **30/6/2027** (vi mô và nhỏ) theo Quy định (EU) 2025/2650; **bắt buộc định vị địa lý đến từng thửa** (điểm cho thửa ≤ 4 ha, đa giác cho thửa lớn hơn); cấp vùng hoặc hợp tác xã là chưa đủ. **Các nguồn mâu thuẫn** về việc đơn vị hạ nguồn và thương nhân có phải nộp đầy đủ tờ khai hay chỉ nghĩa vụ đơn giản. [Nguồn web: [ECF](https://www.ecf-coffee.org/european-union-deforestation-regulation-eudr/); [Tracextech](https://tracextech.com/eudr-coffee-importers/); [Digital Link](https://digital-link.com/guides/eudr-traceability/)] **Cần đối chiếu Công báo EU trước khi dựa vào.**
- [Ý kiến] Thị trường của Tbestpro theo tài liệu là Philippines, Israel, Úc, nên EUDR **chưa áp dụng trực tiếp** trừ khi có kế hoạch bán vào EU; nhưng dữ liệu nguồn gốc theo lô ngày càng được khách hàng hỏi.

## 6. Chưa tra (việc còn lại)
- Yêu cầu nhập khẩu cà phê nhân vào Philippines, Israel, Úc (kiểm dịch thực vật, nhãn, truy xuất).
- Cách các kho xử lý **bao đã mở/phần lẻ**, định mức hao hụt, kiểm tra khi hàng về.
- Kiểm tra văn bản ICO về dấu bao.

## 7. Hệ quả cho thiết kế Kho 7 [Ý kiến]
1. **Mã lô nguồn nên được dập hoặc in lên bao tại nguồn** (đúng thông lệ dấu ICO) và **Kho 7 ghi mã đó thành trường "lô nguồn"** gắn vào lô nội bộ (demo đã có trường "Lô cha").
2. **QR/mã vạch máy đọc từng bao tại nguồn** là có thật nhưng chưa có chuẩn; chi phí và độ bền nhãn cần thử; chưa nên coi là bắt buộc ở giai đoạn đầu.
3. Dù quét ở nguồn, **Kho 7 vẫn cân và kiểm lại khi nhận**, ghi chênh lệch với số xuất từ nguồn.
4. **Nhất quán mã lô trên mọi chứng từ** (đơn mua, QC, hóa đơn, vận đơn, phiếu nhập) để không gãy ở mắt xích chứng từ.
