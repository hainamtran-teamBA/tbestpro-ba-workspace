---
name: khao-sat-giai-phap
description: Khảo sát và so sánh giải pháp phần mềm/hệ thống có sẵn trên thị trường (WMS, OMS, ERP, POS, kế toán, vận chuyển, đối soát, tích hợp...) để quyết định MUA, TỰ XÂY hay KẾT HỢP cho Tbestpro. Dùng khi người dùng hỏi "nên mua hay tự xây", "có giải pháp nào sẵn cho X", "so sánh A với B", "khảo sát thị trường", "chọn hệ thống cho kho/đơn hàng/kế toán", hoặc cần báo cáo khảo sát để trình Ban Giám đốc.
---

# Khảo sát giải pháp: mua, xây hay kết hợp

**Mảng BABOK:** 4. Phân tích chiến lược (xác định trạng thái tương lai, chiến lược thay đổi) và 5. Đặc tả và thiết kế (định nghĩa phương án giải pháp, phân tích giá trị tiềm năng, khuyến nghị giải pháp). Kỹ thuật: đánh giá nhà cung cấp, tiêu chí chấp nhận và đánh giá.

Người dùng là PO/BA đang lên vai trò kiến trúc sư giải pháp tại Tbestpro. Trả lời bằng **tiếng Việt**. Mục tiêu không phải liệt kê sản phẩm mà là **đưa ra khuyến nghị có căn cứ, nói rõ đánh đổi và điều còn chưa biết**, để người ra quyết định (Ban Giám đốc) chọn được.

Bối cảnh công ty nằm trong skill `hieu-nghiep-vu` (`references/thuc-te-cong-ty.md`, `kien-truc-tbestpro-os.md`, `ban-do-luong-don-hang.md`). Đọc trước khi khảo sát để không đề xuất thứ đã có hoặc trái với hướng kiến trúc đang chọn. Nếu không đọc được các file đó (workspace khác), hỏi người dùng bối cảnh tối thiểu.

## Quy trình 7 bước

### 1. Đóng khung bài toán (không bỏ qua)
Hỏi tối đa 4 câu ngắn, bỏ câu đã biết:
- **Vấn đề kinh doanh** cần giải quyết là gì, đo bằng gì (thất thoát, lệch tồn, thời gian đối soát, chi phí...)? Dùng "5 Whys": nguyên nhân gốc là thiếu hệ thống hay thiếu quy trình/kỷ luật?
- **Phạm vi:** mảng nghiệp vụ nào, bao nhiêu người dùng, kho/thị trường/pháp nhân nào, khối lượng (đơn/ngày, SKU)?
- **Ràng buộc:** ngân sách, thời hạn, ai quyết định, phải tích hợp với Tizi/Gani/MISA/J&T/sàn, ngôn ngữ (nhân sự Philippines dùng tiếng Anh), yêu cầu dữ liệu.
- **Lựa chọn đã cân nhắc** hoặc ý kiến sẵn có (của IT, BGĐ).

Chốt thành 1 đoạn "Bài toán, mục tiêu, ràng buộc" và xin người dùng xác nhận trước khi đi tiếp.

### 2. Kiểm tra: có cần phần mềm mới không?
Trước khi so sánh sản phẩm, xét **ba hướng không cần mua gì**: (a) sửa quy trình/kiểm soát thủ công, (b) cấu hình hoặc mở rộng hệ đang có (Tizi 1, Tizi 2/Tbestpro OS đã có trong lộ trình), (c) chờ đến giai đoạn tương ứng của lộ trình Tbestpro OS. Nếu tính năng sắp có trong lộ trình, nêu rõ để tránh mua trùng hoặc xây chồng.

### 3. Định tiêu chí và trọng số (trước khi nhìn sản phẩm)
Lập bảng tiêu chí, gán trọng số tổng 100, **chốt cùng người dùng trước khi chấm** để tránh chấm theo cảm tính. Nhóm mặc định (điều chỉnh theo bài toán):
| Nhóm | Ví dụ tiêu chí |
|---|---|
| Phù hợp nghiệp vụ | Phủ luồng bắt buộc (must-have), COD, đa kho/đa pháp nhân, FIFO/lô/HSD, hàng hoàn |
| Tích hợp | API/webhook, nối J&T/Flash, Shopee/Lazada/TikTok, MISA, LadiPage; nối Tizi |
| Dữ liệu và bảo mật | Ai sở hữu dữ liệu, xuất dữ liệu, phân quyền theo vai trò, nơi lưu, nhật ký |
| Khả năng mở rộng | Quy mô đơn/ngày, nhiều quốc gia, nhiều ngôn ngữ (tiếng Anh) |
| Chi phí | Cấp phép, triển khai, tích hợp, đào tạo, vận hành, nâng cấp (xem TCO) |
| Rủi ro nhà cung cấp | Độ ổn định, hỗ trợ ở múi giờ/ngôn ngữ phù hợp, khóa nhà cung cấp (lock-in), lộ trình sản phẩm |
| Triển khai | Thời gian, công sức nội bộ, rủi ro chuyển đổi, đào tạo |
Phân riêng **tiêu chí loại trừ** (must-have): thiếu là loại ngay, không cộng điểm bù.

### 4. Tìm và sàng lọc giải pháp
- Dùng WebSearch/WebFetch để tìm sản phẩm, giá, tính năng, đánh giá, tài liệu API. **Ghi nguồn và ngày truy cập** cho mọi dữ kiện; không dùng nhớ chung chung cho giá và tính năng vì dễ cũ. Phân biệt trang chính thức của nhà cung cấp (tuyên bố tiếp thị) với đánh giá độc lập (G2, Capterra, cộng đồng) và nêu độ tin cậy.
- Lập **danh sách dài** (5-10) rồi lọc bằng tiêu chí loại trừ xuống **danh sách ngắn** (2-4) để so sánh sâu. Luôn thêm một cột **"tự xây/mở rộng hệ hiện có"** làm phương án đối chứng.
- Nếu cần dữ liệu thật của công ty (khối lượng đơn, số SKU, số kho, tồn, lệch tồn, đơn hoàn), tra Tizi Tbest bằng các tool `mcp__claude_ai_Tizi_Tbest__*` (chỉ đọc). Nêu phạm vi thời gian; không tự bịa.
- Với mảng không quen, đọc `references/` tương ứng của skill `hieu-nghiep-vu` để hỏi đúng câu khi demo/làm việc với nhà cung cấp.

### 5. So sánh và chấm điểm
- Bảng so sánh các phương án đã lọc theo tiêu chí; mỗi ô có **bằng chứng và nguồn**, không chỉ "tốt/kém". Chỗ chưa kiểm chứng ghi rõ **[chưa xác minh]**; nếu thông tin chỉ từ trang tiếp thị thì ghi **[theo nhà cung cấp]**.
- Tính **TCO 3 năm** cho mỗi phương án (mẫu ở `references/mau-bao-cao-khao-sat.md`): cấp phép/thuê bao, triển khai và tích hợp, đào tạo, vận hành và bảo trì, nhân sự nội bộ, chi phí chuyển đổi dữ liệu, chi phí rủi ro/chậm. Với "tự xây" phải tính cả chi phí cơ hội của đội IT. Nêu giả định rõ; không có số thì đưa **khoảng** và nói chưa chắc.
- **Phân tích độ nhạy:** nếu đổi trọng số hoặc giả định chính thì thứ hạng có đổi không?

### 6. Khuyến nghị mua / xây / kết hợp
Dùng khung ra quyết định ở `references/khung-mua-hay-xay.md`. Nguyên tắc: **mua phần "thông dụng" (không tạo khác biệt), xây phần "đặc thù" tạo lợi thế hoặc không có sản phẩm phù hợp**, ưu tiên cấu hình hơn tùy biến nặng. Phải nêu:
- Phương án khuyến nghị và **vì sao hơn các phương án khác**.
- **Đánh đổi** chấp nhận được, **rủi ro lớn nhất** và cách giảm.
- **Điều kiện làm thay đổi khuyến nghị** (ví dụ: nếu khối lượng vượt X, nếu nhà cung cấp không nối được J&T).
- **Bước chứng minh nhanh (PoC/pilot)** với tiêu chí đạt/không đạt, trước khi cam kết mua hoặc xây.

### 7. Đầu ra và lưu lại
- Viết báo cáo theo mẫu `references/mau-bao-cao-khao-sat.md`. Người đọc là Ban Giám đốc và IT: mở đầu bằng **kết luận và đề xuất quyết định** (3-5 dòng), chi tiết phía sau. Nếu người dùng cần chia sẻ cho người khác, đề nghị xuất thành tài liệu (docs/Word) hoặc trang artifact; không tự đăng.
- Đề xuất lưu quyết định vào `thuc-te-cong-ty.md` của skill `hieu-nghiep-vu` (mục "Quyết định") hoặc, nếu có skill ADR (`quyet-dinh-kien-truc`), tạo bản ghi quyết định tại đó. Ghi ngày, nguồn, trạng thái (đề xuất / đã duyệt).

## Nguyên tắc chất lượng
- **Không thiên vị sản phẩm:** không bắt đầu từ sản phẩm quen thuộc; khuyến nghị xuất phát từ tiêu chí đã chốt. Nếu bị đòi kết luận trước khi đủ dữ liệu, nêu rõ mức độ tin cậy thay vì chọn bừa.
- **Phân biệt dữ kiện và ý kiến:** nhãn **[Nguồn]** (có link, ngày), **[Dữ liệu công ty]**, **[Giả định]**, **[Ý kiến của tôi]**.
- **Không đưa thông tin mật của công ty** (cơ cấu nhân sự, lỗ hổng bảo mật, số liệu tài chính) vào truy vấn web hoặc gửi cho nhà cung cấp. Khi viết yêu cầu gửi nhà cung cấp (RFI/RFP), dùng mô tả chung.
- **Không tự liên hệ nhà cung cấp, đăng ký dùng thử, nhập dữ liệu công ty vào dịch vụ bên ngoài** nếu người dùng chưa đồng ý. Đề xuất, người dùng quyết định.
- **Giá và tính năng thay đổi nhanh:** ghi ngày kiểm tra, nhắc xác nhận lại với nhà cung cấp trước khi quyết định.
- **Cẩn trọng bản địa:** thị trường vận hành chính là Philippines (kho Malabon) và công ty ở Việt Nam; kiểm tra hỗ trợ tiếng Anh, múi giờ, thuế/hóa đơn Việt Nam (MISA), quy định dữ liệu cá nhân.
- Ngắn gọn: trả lời hội thoại bằng bảng và gạch đầu dòng; chỉ viết báo cáo dài khi người dùng cần xuất bản.
