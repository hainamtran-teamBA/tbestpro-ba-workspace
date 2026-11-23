---
name: quyet-dinh-kien-truc
description: Phân tích hệ thống và ghi lại quyết định kiến trúc (ADR) cho Tbestpro: vẽ bản đồ hệ thống As-Is/To-Be, phân tích đánh đổi giữa các phương án kiến trúc, quyết định ranh giới tích hợp và nguồn dữ liệu gốc (source of truth), rồi lưu thành bản ghi quyết định. Dùng khi người dùng hỏi "nên chọn kiến trúc nào", "modular monolith hay microservice", "hệ thống nào làm chủ dữ liệu X", "vẽ sơ đồ hệ thống", "thiết kế tích hợp", "ghi lại quyết định/ADR", hoặc cần so sánh hai hướng kiến trúc trước khi trình Ban Giám đốc.
---

# Quyết định kiến trúc (ADR) và tư duy hệ thống

**Mảng BABOK:** 5. Đặc tả và thiết kế (định kiến trúc yêu cầu, phương án thiết kế) và 4. Phân tích chiến lược (đánh giá rủi ro). Kỹ thuật: phân tích quyết định, mô hình dữ liệu, sơ đồ hệ thống.

Người dùng là PO/BA đang lên vai trò kiến trúc sư giải pháp tại Tbestpro. Trả lời bằng **tiếng Việt**. Việc của skill: giúp người dùng **suy nghĩ có cấu trúc về hệ thống** và **ghi lại quyết định kèm lý do**, để sau này ai cũng biết vì sao chọn vậy. Skill không tự quyết thay người dùng hay thay Ban Giám đốc/IT: đưa lựa chọn, đánh đổi và khuyến nghị có căn cứ.

Đọc trước khi làm: skill `hieu-nghiep-vu` (`references/kien-truc-tbestpro-os.md`, `ban-do-luong-don-hang.md`, `thuc-te-cong-ty.md`) để hiểu hiện trạng và hướng đã đề xuất. Đọc `adr/` của skill này để không tạo quyết định trùng hoặc mâu thuẫn. Nếu không đọc được (workspace khác), hỏi bối cảnh tối thiểu. Khi cần số liệu thật (khối lượng đơn, số kho, số SKU), tra Tizi Tbest (chỉ đọc).

## Chọn chế độ làm việc
Xác định người dùng đang cần gì rồi vào đúng chế độ (có thể chuyển tiếp giữa các chế độ):
| Chế độ | Khi nào | Đầu ra |
|---|---|---|
| **A. Bản đồ hệ thống** | "Hệ thống hiện tại ra sao", "ai giữ dữ liệu nào", "vẽ luồng" | Sơ đồ As-Is/To-Be, bảng dữ liệu gốc, điểm nghẽn |
| **B. Phân tích đánh đổi và quyết định** | "Chọn A hay B", "nên tách service không" | ADR (đề xuất) |
| **C. Thiết kế tích hợp** | "Hai hệ thống nối nhau thế nào", "ranh giới module" | Bảng tích hợp: sự kiện, API, chủ sở hữu dữ liệu, xử lý lỗi |
| **D. Rà soát quyết định cũ** | "Quyết định này còn đúng không" | Cập nhật trạng thái ADR (thay thế/lỗi thời) |

## Chế độ A: Bản đồ hệ thống (tư duy hệ thống)
1. **Xác định ranh giới:** hệ thống/luồng nào, từ đâu đến đâu (ví dụ: đơn COD từ lúc khách bấm quảng cáo đến lúc đối soát tiền).
2. **Liệt kê thành phần:** con người/vai trò, hệ thống, kho dữ liệu, dịch vụ bên ngoài, tài liệu/Excel. Với mỗi thành phần ghi: **làm gì, giữ dữ liệu gì, ai sở hữu**.
3. **Vẽ luồng:** dữ liệu và tiền/hàng đi đâu, **kích hoạt bởi sự kiện nào**, đồng bộ hay không, độ trễ. Dùng sơ đồ văn bản (Mermaid hoặc bảng); nếu người dùng cần trang đẹp để chia sẻ, đề nghị tạo artifact.
4. **Nguồn dữ liệu gốc (source of truth):** với mỗi loại dữ liệu (đơn, tồn, giá vốn, tỷ giá, khách, nhân sự) chỉ ra **nơi làm chủ**. Nhập hai nơi hoặc không rõ chủ → đánh dấu **xung đột**.
5. **Tìm điểm nghẽn và vòng phản hồi:** nút thắt (thủ công, Excel, nhập trùng), điểm lệch số, vòng lặp tăng cường (ví dụ báo cáo chậm khiến ra quyết định cảm tính khiến thêm chi phí), điểm đơn lẻ gây hỏng toàn hệ thống (SPOF), chỗ thiếu giám sát.
6. **Tóm tắt:** 3-5 phát hiện quan trọng nhất, mỗi phát hiện kèm bằng chứng và gợi ý hướng xử lý. Kiểm tra lại với người dùng, đánh dấu **[giả định]** các chỗ suy luận.

## Chế độ B: Quyết định và ADR
Quy trình:
1. **Phát biểu quyết định cần đưa ra** (một câu hỏi rõ ràng) và **bối cảnh/lực tác động** (driver): yêu cầu nghiệp vụ, thuộc tính chất lượng (hiệu năng, tính đúng đắn tiền/kho, bảo mật, khả năng thay đổi, chi phí, năng lực đội), ràng buộc.
2. **Xếp hạng thuộc tính chất lượng** theo mức quan trọng cho **Tbestpro** (xem `references/thuoc-tinh-chat-luong.md`). Không thể tối ưu mọi thứ: chọn 3-4 thứ quan trọng nhất và nói rõ hy sinh gì.
3. **Đề ra ≥ 2 phương án thật sự khả thi** (không tạo phương án giả để dễ thắng), kể cả "giữ nguyên/làm tối thiểu" và "hoãn quyết định".
4. **Phân tích từng phương án:** ưu điểm, nhược điểm, rủi ro, chi phí và độ phức tạp vận hành, **khả năng đảo ngược** (quyết định "cửa hai chiều" làm nhanh, "cửa một chiều" phải kỹ). Dùng bảng đánh đổi ở `references/ma-tran-danh-doi.md`.
5. **Kiểm thử bằng kịch bản** (`references/ma-tran-danh-doi.md`): thử mỗi phương án với các kịch bản cụ thể của Tbestpro (ví dụ: tăng gấp 3 đơn/ngày, thêm pháp nhân/quốc gia mới, một sàn đổi API, chạy song song hệ cũ/mới, một thành viên IT nghỉ).
6. **Khuyến nghị:** nêu phương án đề xuất, vì sao, đánh đổi chấp nhận, **điều kiện làm đổi quyết định**, và **cách kiểm chứng sớm** (spike/PoC, tiêu chí đạt/không đạt).
7. **Viết ADR** theo mẫu `references/mau-adr.md`, trạng thái **"Đề xuất"**. Chỉ người có thẩm quyền (BGĐ, trưởng IT) chuyển sang **"Đã duyệt"**; skill không tự ghi "Đã duyệt". Lưu vào thư mục `adr/` của skill này với tên `NNNN-ten-ngan-gon.md` (số tăng dần). Trước khi ghi, cho người dùng xem bản nháp.

## Chế độ C: Thiết kế tích hợp
Cho mỗi cặp hệ thống/module, lập bảng:
| Hạng mục | Nội dung cần chốt |
|---|---|
| Chủ sở hữu dữ liệu | Hệ thống nào ghi, nơi khác chỉ đọc/tham chiếu |
| Kiểu tích hợp | Sự kiện/webhook, gọi API, đồng bộ theo lô, file; đồng bộ hay bất đồng bộ |
| Hợp đồng dữ liệu | Trường, định dạng, mã trạng thái, khóa duy nhất, phiên bản |
| Độ trễ chấp nhận | Thời gian thực / phút / ngày |
| Xử lý lỗi | Thử lại, idempotency (chống ghi trùng), hàng đợi lỗi, cảnh báo, ai xử lý |
| Đối soát | Cách phát hiện lệch giữa hai bên và sửa |
| Bảo mật | Xác thực, ký webhook, che dữ liệu nhạy cảm, nhật ký |
| Thay đổi/phiên bản | Ai được đổi hợp đồng, thông báo thế nào |
Nguyên tắc: **một nơi làm chủ mỗi loại dữ liệu**; tích hợp qua hợp đồng rõ ràng, không đọc thẳng bảng của hệ khác; luôn có đối soát tự động cho dữ liệu liên quan tiền và kho.

## Chế độ D: Rà soát quyết định
Mở ADR liên quan, hỏi: bối cảnh còn đúng không, giả định nào đã đổi, điều kiện đổi quyết định đã xảy ra chưa? Cập nhật **trạng thái** (Đề xuất / Đã duyệt / Bị thay thế bởi ADR-xxxx / Lỗi thời) và ghi **nhật ký thay đổi**; không sửa lịch sử, tạo ADR mới khi đổi hướng.

## Nguyên tắc chất lượng
- **Quyết định = lựa chọn có đánh đổi.** Nếu phương án nào cũng "tốt hơn mọi mặt", dừng lại tìm điều chưa thấy.
- **Phân biệt dữ kiện và ý kiến:** nhãn **[Tài liệu]** (kèm nguồn/trang), **[Dữ liệu công ty]**, **[Giả định]**, **[Ý kiến của tôi]**. Nhận định về năng lực đội hay lộ trình là **[Giả định]** cho tới khi được xác nhận.
- **Không đánh bại phương án tác giả khác bằng cách bóp méo:** khi so sánh hai tài liệu (ví dụ blueprint và sơ đồ IT), trình bày công bằng lập luận của cả hai và nêu những gì chưa rõ; hỏi người dùng xem có cần xác nhận với tác giả không.
- **Chú ý nhạy cảm:** quyết định kiến trúc có thể liên quan đến quan hệ giữa các bộ phận/con người; trình bày khách quan, không quy lỗi cho cá nhân.
- **Không đưa thông tin mật** (lỗ hổng bảo mật chi tiết, dữ liệu nhân sự, số liệu tài chính) vào ADR nếu ADR sẽ được chia sẻ rộng; tham chiếu tài liệu nguồn.
- **Đừng thiết kế quá mức:** ưu tiên giải pháp đơn giản nhất đáp ứng thuộc tính chất lượng đã chốt; với quy mô hiện tại (khoảng 1.500 đơn/ngày, đội IT nhỏ) chi phí vận hành phức tạp là một thuộc tính phải tính.
- Ngắn gọn khi trả lời hội thoại; chỉ viết ADR dài khi lưu.
