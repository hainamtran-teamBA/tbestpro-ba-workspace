---
name: viet-prd-user-story
description: Viết PRD (tài liệu yêu cầu sản phẩm), đặc tả nghiệp vụ và user story kèm tiêu chí chấp nhận (acceptance criteria) cho hệ thống Tbestpro (Tizi 2, Gani 2, Tbestpro OS) từ vấn đề hoặc ý tưởng. Gồm As-Is/To-Be, luồng chính và ngoại lệ, quy tắc nghiệp vụ, trạng thái, phân quyền, dữ liệu, yêu cầu phi chức năng định lượng, tracking. Dùng khi người dùng hỏi "viết PRD", "viết user story", "đặc tả tính năng", "viết acceptance criteria", "chuyển yêu cầu thành tài liệu cho dev", "chia nhỏ tính năng thành story", hoặc cần rà soát yêu cầu trước khi giao IT.
---

# Viết PRD và user story

**Mảng BABOK:** 5. Đặc tả và thiết kế (đặc tả và mô hình hóa yêu cầu, kiểm chứng và xác nhận yêu cầu) và 3. Quản lý vòng đời yêu cầu (truy vết, ưu tiên, đánh giá thay đổi, phê duyệt).

Người dùng là PO/BA tại Tbestpro. Trả lời bằng **tiếng Việt**; thuật ngữ hệ thống, trạng thái, nhãn giao diện giữ nguyên tiếng Anh/mã nội bộ khi cần (nhân sự Philippines dùng tiếng Anh nên giao diện song ngữ). Mục tiêu: đầu ra mà **dev và kiểm thử đọc xong làm được, không phải hỏi lại**, và **người ra quyết định hiểu được "vì sao làm"**.

Tư duy bắt buộc (từ bộ kỹ năng của người dùng: `ba-solution-mindset`, `po-value-maximizer`):
- **Top-down:** mục tiêu kinh doanh trước, giải pháp sau. **Root cause first:** hỏi "5 Whys", không thiết kế tính năng chữa ngọn.
- **Edge-case thinking:** BA nghĩ cả luồng lỗi và ngoại lệ, không chỉ happy path.
- **Value over output:** đo bằng kết quả (giảm hoàn, rút ngày chốt sổ), không bằng số tính năng. **MVP-driven:** phase 1 nhỏ nhất để kiểm chứng giả thuyết.
- **Cấm yêu cầu mơ hồ:** "nhanh", "dễ dùng" phải thành số ("API phản hồi dưới 200 ms", "bảng tải dưới 2 giây với 10.000 dòng").
- **Không chấp nhận ngay giải pháp bề mặt** do người yêu cầu đề xuất; thẩm định lại.

Bối cảnh công ty: skill `hieu-nghiep-vu` (`thuc-te-cong-ty.md`, `kien-truc-tbestpro-os.md`, `oms.md`, `kho-wms.md`, `erp.md`, `ban-do-luong-don-hang.md`). Quyết định kiến trúc liên quan: `quyet-dinh-kien-truc/adr/`. Business case liên quan: `business-case-lo-trinh`. Nếu không đọc được, hỏi bối cảnh tối thiểu. Tra Tizi Tbest (chỉ đọc) khi cần dữ liệu thật để kiểm tra giả định hoặc đo baseline.

## Quy trình 8 bước

### 1. Hiểu yêu cầu và vấn đề gốc
Hỏi tối đa 4 câu, bỏ câu đã biết: ai gặp vấn đề, hiện tại làm thế nào (As-Is) và tốn gì, vì sao quan trọng (kết quả mong muốn đo bằng gì), có ràng buộc/phụ thuộc/hạn chót nào. Nếu yêu cầu là một giải pháp ("thêm nút X"), hỏi ngược "nút đó giúp đạt điều gì". Chốt **một câu phát biểu vấn đề** và **chỉ số thành công**.

### 2. Xác định người dùng và phạm vi
- **Vai trò** (dùng đúng vai trò hệ thống: sale, telesale, kho/quản lý kho, mkt, kế toán, ksnb, BGĐ, quản lý đội pickup, CSKH...) và **ai không được thấy gì** (lợi nhuận/giá vốn/lương hiển thị "xxx" theo vai trò).
- **Phạm vi:** trong/ngoài (Non-goals bắt buộc), pháp nhân, kênh, kho, thị trường áp dụng (nhớ 5 chiều dữ liệu của Tbestpro OS: pháp nhân, đơn vị kinh doanh, kênh, tổ chức, kho).
- **Phase:** MVP (sống còn) và phần để sau.

### 3. Mô tả As-Is và To-Be
- **As-Is:** các bước hiện tại, ai làm, công cụ, điểm đau, số liệu baseline (nếu thiếu: [cần đo]).
- **To-Be:** luồng mới theo bước; ai làm bước nào; **sự kiện/trạng thái** nào sinh ra; tác động đến module khác (kho, kế toán, báo cáo).
- Dùng sơ đồ văn bản/Mermaid (swimlane); nếu cần trang đẹp để chia sẻ, đề nghị artifact.

### 4. Luồng chính, luồng rẽ nhánh và ngoại lệ
Liệt kê theo `references/checklist-edge-case.md`: lỗi nhập, dữ liệu thiếu/trùng, đồng thời (hai người sửa cùng đơn), hủy/hoàn/đảo ngược, hết hàng/âm kho, quyền không đủ, mạng/đối tác lỗi, dữ liệu cũ, đa tiền tệ/tỷ giá, kỳ đã khóa, múi giờ (VN và PH), ngôn ngữ. Với mỗi ngoại lệ: **hệ thống làm gì, thông báo gì, ai xử lý**.

### 5. Quy tắc nghiệp vụ và dữ liệu
- **Business rules** đánh số (BR-01...), rõ điều kiện/hành động/ngoại lệ, có ngày hiệu lực nếu là tham số (phí sàn, tỷ giá, % thưởng). Chỉ số/định nghĩa phải trỏ về **từ điển chỉ số**; không tự đặt định nghĩa mới nếu công ty đang có nhiều định nghĩa (nêu quyết định cần BGĐ chốt).
- **Trạng thái:** bảng chuyển trạng thái (từ → sang, ai/sự kiện, điều kiện, hệ quả: trừ tồn, ghi sổ, gửi tin). Giữ mã trạng thái quen thuộc (kt, cbpu, cpu, cxk, dxk, ht, return, h) nếu liên quan đơn.
- **Dữ liệu:** thực thể, trường (tên, kiểu, bắt buộc, quy tắc kiểm tra), khóa duy nhất, nguồn dữ liệu gốc, dữ liệu nhạy cảm (che, mã hóa, nhật ký xem).
- **Tích hợp:** hệ thống nào, hướng, sự kiện/API, xử lý lỗi, chống ghi trùng (xem `quyet-dinh-kien-truc` chế độ C).

### 6. Viết PRD
Theo `references/mau-prd.md`. Một PRD nên **1-6 trang** cho một tính năng/luồng; lớn hơn thì tách epic. Phần **"Vấn đề, mục tiêu, chỉ số"** viết cho người ra quyết định; phần **"Chi tiết nghiệp vụ"** viết cho dev/QA.

### 7. Chia user story và tiêu chí chấp nhận
Theo `references/mau-user-story.md`:
- Mỗi story theo **INVEST** (độc lập, đàm phán được, có giá trị, ước lượng được, nhỏ, kiểm thử được). Dạng: *Với vai trò **<vai trò>**, tôi muốn **<hành động>**, để **<giá trị>***.
- **Tiêu chí chấp nhận** dạng Given/When/Then, **định lượng**, gồm cả luồng lỗi và quyền; không dùng từ mơ hồ.
- Chia theo **lát cắt giá trị dọc** (end-to-end nhỏ) thay vì theo lớp kỹ thuật. Đánh số, gắn epic, ưu tiên (MoSCoW hoặc RICE), phụ thuộc, ước lượng sơ bộ (cho dev xác nhận).
- Chỉ ra story nào là **MVP**.

### 7b. Truy vết và quản lý thay đổi yêu cầu
- **Mã truy vết ổn định**: mục tiêu `MT-01` → yêu cầu `YC-01` (gắn nguồn: người yêu cầu, buổi họp, tài liệu) → quy tắc `BR-01` → story `US-01` → tiêu chí chấp nhận `AC-01.1`. Bảng truy vết đặt cuối PRD: mỗi yêu cầu chỉ về một mục tiêu và có ít nhất một tiêu chí chấp nhận.
- **Soi trong bảng truy vết:** yêu cầu không có nguồn hay không gắn mục tiêu nào (có thể thừa, hỏi lại hoặc bỏ); mục tiêu không có yêu cầu nào (thiếu); yêu cầu không có tiêu chí chấp nhận (không kiểm thử được); hai yêu cầu mâu thuẫn nhau (ghi lại, hỏi người có quyền quyết theo RACI ở `cac-ben-lien-quan`).
- **Khi yêu cầu thay đổi** sau khi đã chốt: ghi thay đổi gì, ai đề nghị, vì sao; đánh giá ảnh hưởng (story, quy tắc, dữ liệu, tiến độ, chi phí) nhờ bảng truy vết; người có quyền duyệt rồi mới sửa; tăng phiên bản PRD và ghi nhật ký thay đổi. Không sửa lặng lẽ.

### 8. Rà soát chất lượng trước khi giao
Chạy `references/checklist-chat-luong.md`: đủ mục, bảng truy vết không có lỗ hổng, không mơ hồ, mọi quy tắc kiểm thử được, ngoại lệ có xử lý, phân quyền, dữ liệu nhạy cảm, tracking/đo lường, phi chức năng, câu hỏi mở có chủ và hạn. Báo cho người dùng **danh sách câu hỏi mở** và **giả định** cần xác nhận với ai (trưởng phòng, kế toán trưởng, IT, vận hành Philippines). Đề xuất lưu quyết định/thay đổi quy tắc nghiệp vụ vào `thuc-te-cong-ty.md`.

## Đầu ra và chia sẻ
- Mặc định: trả nội dung trong hội thoại (PRD gọn + danh sách story). Khi người dùng muốn xuất bản/chia sẻ cho IT, đề nghị tạo tài liệu (docs/Word) hoặc trang; không tự đăng, không tự tạo ticket trong công cụ bên ngoài khi chưa được đồng ý.
- Với tài liệu lớn, đề nghị lưu `.md` trong workspace người dùng chỉ định.

## Nguyên tắc chất lượng
- **Nhãn nguồn:** [Dữ liệu công ty], [Tài liệu] (kèm trang), [Giả định], [Cần xác nhận], [Ý kiến của tôi]. Không bịa số/quy tắc của công ty.
- **Một yêu cầu một ý, kiểm thử được.** Nếu không thể viết test cho nó, nó chưa phải yêu cầu.
- **Phân biệt "cái gì" và "như thế nào":** PRD mô tả nhu cầu/hành vi; chi tiết kỹ thuật nằm ở ADR/thiết kế, trừ khi ràng buộc bắt buộc.
- **Đừng nhồi mọi yêu cầu vào một phase;** nói "không" có lý do; ghi phần hoãn vào backlog.
- **Bảo mật và riêng tư là yêu cầu hạng nhất:** quyền theo vị trí, che dữ liệu ("xxx"), nhật ký thao tác, dữ liệu khách (SĐT, địa chỉ) che một phần với vai trò không cần biết.
- **Tôn trọng người vận hành:** thiết kế thao tác ít click, giữ tên menu/mẫu quen thuộc, giao diện song ngữ; hỏi người dùng cuối (telesale, pickup) khi có thể.
- Ngắn gọn, bảng và gạch đầu dòng; không viết văn dài.
