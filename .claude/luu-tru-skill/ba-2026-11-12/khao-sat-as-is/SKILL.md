---
name: khao-sat-as-is
description: Chuẩn bị và ghi lại khảo sát hiện trạng (As-Is) tại Tbestpro: xác định cần hỏi ai, hỏi gì, đi xem gì tại chỗ (kho, văn phòng), ghi chép thế nào để thành bản đồ As-Is và baseline. Dùng khi người dùng hỏi "tôi nên hỏi kế toán/mua hàng/thủ kho những gì", "chuẩn bị phỏng vấn", "đi khảo sát kho cần chụp/đo gì", "hiện trạng quy trình X là gì", "ghi lại kết quả khảo sát", hoặc trước khi thiết kế To-Be/chọn giải pháp mà chưa nắm rõ cách công ty đang làm.
---

# Khảo sát hiện trạng (As-Is)

**Mảng BABOK:** 2. Thu thập thông tin và cộng tác (chuẩn bị, thực hiện, xác nhận kết quả thu thập) và 4. Phân tích chiến lược (phân tích hiện trạng).

Người dùng là PO/BA tại Tbestpro. Trả lời bằng **tiếng Việt**, ngắn, dùng bảng. Mục tiêu: **biết công ty đang làm thế nào thật sự** (không phải thế nào theo tài liệu hay theo trí nhớ), có bằng chứng, trước khi đề xuất bất cứ giải pháp nào.

Bối cảnh: `hieu-nghiep-vu/references/thuc-te-cong-ty.md` và file mảng liên quan (kho: `kho-wms.md`, `kho-7-gani-2-wms.md`). **Đọc trước để không hỏi lại điều đã biết.** Bộ câu hỏi riêng cho Kho 7 theo từng người nằm ở `kho-7-gani-2-wms.md` mục 9; skill này dùng chung, không chép lại.

## Quy trình 6 bước

### 1. Chốt phạm vi và câu cần trả lời
Hỏi tối đa 3 câu, bỏ câu đã biết: **mảng/chặng nào** (nhập kho, xuất kho, tồn kho, đối soát COD...), **quyết định nào sẽ dựa vào khảo sát này** (thiết kế To-Be, chọn nhà cung cấp, viết yêu cầu), **tuần này gặp được ai**. Khảo sát không có câu hỏi cần trả lời thì dễ thành đi hỏi lan man.

### 2. Lập bản đồ người cần hỏi
Nếu dự án chưa có danh sách các bên liên quan, chạy skill `cac-ben-lien-quan` trước (hoặc làm bản rút gọn). Bảng: người/vai trò, vì sao hỏi, thứ tự. Thứ tự gợi ý: **người nắm luồng tổng** (trưởng bộ phận) → **người làm trực tiếp** (thủ kho, kế toán kho) → **người chịu kết quả** (kế toán trưởng, sale) → **người giữ dữ liệu** (IT). Người bên ngoài (nhà cung cấp, QC, forwarder) chỉ liên hệ qua người nội bộ phụ trách và khi người dùng đã được sếp đồng ý.

### 3. Chọn câu hỏi
Lấy từ `references/ngan-hang-cau-hoi.md` theo vai trò và mảng. Quy tắc:
- **Mỗi phiên 30-45 phút, 10-15 câu.** Mỗi câu gắn **mục đích** (để quyết định gì). Câu không phục vụ quyết định nào thì bỏ.
- Ưu tiên **"kể cho tôi lần gần nhất"** và **"cho tôi xem"** hơn câu giả định ("thường thì...", "nếu... thì sao"): người ta nói đúng hơn khi kể chuyện thật.
- Hỏi **số liệu cụ thể** (bao nhiêu bao/ngày, lệch lần gần nhất bao nhiêu), không hỏi "nhiều hay ít".
- Câu mở trước, câu đóng sau. Không dẫn dắt ("có phải hay bị mất hàng không?").
- Kết thúc luôn hỏi: **"còn điều gì tôi chưa hỏi mà anh/chị thấy quan trọng?"** và **"còn ai nên hỏi nữa?"**

**Chọn cấu trúc buổi hỏi** theo người được hỏi:
| Cấu trúc | Cách đi | Hợp khi |
|---|---|---|
| **Phễu** | Câu mở rộng → hẹp dần → câu đóng để chốt số | Người nói nhiều, chưa rõ vấn đề nằm đâu |
| **Kim tự tháp** | Câu cụ thể, dễ trả lời → mở rộng dần | Người ít nói, ngại, hoặc mới gặp lần đầu |
| **Kim cương** | Cụ thể → mở rộng → chốt lại cụ thể | Buổi dài, cần cả bức tranh lẫn số liệu |

**Câu hỏi đào sâu** khi câu trả lời còn mơ hồ: *làm rõ* ("ý anh/chị là…?"), *ví dụ* ("lần gần nhất là khi nào?"), *bằng chứng* ("có phiếu hay ảnh không?"), *ngoại lệ* ("khi nào thì không làm như vậy?"), *hệ quả* ("nếu bỏ bước này thì sao?"), *người khác* ("ai làm khi anh/chị nghỉ?").

### 4. Đi xem tại chỗ (nếu là kho hoặc nơi làm việc thật)
Dùng `references/checklist-khao-sat-tai-cho.md`: đo diện tích, vẽ sơ đồ, chụp ảnh, quan sát **một ca làm việc**, **đi theo một lô hàng** từ lúc nhận đến lúc xuất, bấm giờ các bước chính. Xem tận mắt giá trị hơn lời kể.

### 5. Ghi chép đúng cách
Dùng `references/mau-ghi-chep-as-is.md`. Mỗi thông tin gắn nhãn nguồn:
| Nhãn | Nghĩa |
|---|---|
| **[Quan sát]** | Tôi/người dùng tận mắt thấy, có ảnh hoặc số đo |
| **[Có tài liệu]** | Có phiếu, báo cáo, ảnh chụp màn hình |
| **[Được kể]** | Một người nói, chưa kiểm chứng |
| **[Giả định]** | Suy ra, cần xác minh |
Khi hai người nói **khác nhau**, ghi cả hai, không tự chọn bên; đó thường là chỗ vấn đề nằm.

**Tách ba lớp quy trình**, ghi riêng từng lớp:
1. **Trên giấy:** theo quy định, phân quyền, tài liệu.
2. **Theo lời kể:** người làm nói họ làm thế nào.
3. **Làm thật:** quan sát được, có bằng chứng; gồm cả **cách lách** (ghi giấy rồi nhập sau, nhờ người khác nhập hộ, chat thay cho phiếu).
Chỗ ba lớp lệch nhau là nơi rủi ro và thất thoát hay nằm. Ví dụ Kho 7: trên giấy kho nhập phiếu, thực tế kho gửi Excel qua Viber và kế toán nhập thay.

### 6. Tổng hợp
Kết quả gồm:
1. **Bản đồ As-Is** theo bước: ai làm, đầu vào, đầu ra, chứng từ, công cụ, thời gian, **điểm đau**.
2. **Số liệu nền (baseline)**: đã có / **[cần đo]** và cách đo.
3. **Mâu thuẫn và khoảng trống** còn lại, kèm ai hỏi tiếp.
4. **Cập nhật tri thức:** đề xuất ghi vào `thuc-te-cong-ty.md` hoặc file mảng đã có (mục thực tế, kèm ngày và nguồn); **không tạo file mới cho mỗi đợt khảo sát**. Báo người dùng đã lưu gì.
5. **Chuyển tiếp:** đủ hiểu → `thiet-ke-quy-trinh-to-be` hoặc `tu-van-giai-phap`; cần số tiền → `business-case-lo-trinh`.

## Đầu ra khi được gọi
Mặc định trả lời gọn theo thứ tự: (1) mục tiêu khảo sát một dòng, (2) bảng người cần hỏi và thứ tự, (3) **bộ câu hỏi cho người đầu tiên** (bảng: câu hỏi, mục đích), (4) checklist tại chỗ nếu liên quan, (5) cách ghi chép. Chỉ đưa bộ câu hỏi cho từng người tiếp theo khi người dùng cần.

## Nguyên tắc
- **Hỏi để hiểu, không để đánh giá hay bắt lỗi.** Nói rõ với người được hỏi: mục đích là làm việc của họ dễ hơn, không dùng đánh giá cá nhân. Nhân viên dễ giấu lỗi nếu sợ bị trách.
- **Tôn trọng người gánh việc:** hỏi vào giờ họ rảnh, không cản việc đang chạy.
- **Ảnh và video:** xin phép; tránh chụp rõ mặt người nếu không cần; không đăng lên dịch vụ bên ngoài.
- **Không đưa thông tin mật** (số liệu tài chính chi tiết, lương, lỗ hổng bảo mật) ra ngoài workspace; khi cần gửi bên ngoài thì ẩn tên công ty và số liệu thật.
- **Nhân sự Philippines:** hỏi người dùng ngôn ngữ làm việc (tiếng Anh, Tagalog) và có cần người dịch; câu hỏi ngắn, ví dụ cụ thể.
- Không tự liên hệ nhà cung cấp hay người ngoài; chỉ soạn câu hỏi, người dùng quyết định gửi.
- Không bịa hiện trạng. Điều chưa biết ghi **[cần hỏi]**.
