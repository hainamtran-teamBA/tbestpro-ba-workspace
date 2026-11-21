# SmsMk365 – Ghi chép tài liệu nhà cung cấp (nhóm B)

Ngày đọc: 2026-11-13. Nguồn: HTML tải bằng curl + ảnh chụp màn hình trong thân bài (đã xem từng ảnh). Không đăng nhập / đăng ký / gửi form.
Quy ước: **[SỰ KIỆN]** = có ghi trong bài hoặc nhìn thấy trong ảnh. **[SUY LUẬN]** = nhận định của người đọc, chưa kiểm chứng.

Ảnh đã tải: `...\scratchpad\smsmk-B\img\` (9 file, ảnh `smsmk365-mobile-app-20250624.png` trùng với `mobile-app-thanh-phan-quan-trong-cua-smsmk365-20250627.png`, cùng dung lượng 144.510 byte).

## Bối cảnh chung: có 2 giao diện

[SỰ KIỆN]
- **Giao diện chính (Core)**: truy cập từ `smsmk365.com` → Đăng nhập. Menu trái: BẢNG ĐIỀU KHIỂN (Tổng quan, Tin nhắn ▸ [Hàng đợi, Gửi, Nhận, Chiến dịch Marketing, Lập kế hoạch], WhatsApp, Máy chủ), ANDROID (USSD, Thông báo), LIÊN HỆ (Liên hệ đã lưu, Danh sách nhóm, Đã hủy đăng ký), Webhooks... Thanh trên: Đăng ký, Gói dịch vụ, Đổi thưởng. Landing có chọn ngôn ngữ: Tiếng Việt, Nhật, Anh.
- **Bộ Toolkits (Toolkits Addon)**: truy cập từ `utp.smsmk365.com` → menu Toolkits (`smsmk365.com/toolkits/`), đăng nhập riêng (Tên tài khoản + Mật khẩu; có link "Khôi phục mật khẩu" tới `toolkits/vn/frmreset-password.php`). Menu "BỘ TOOLKITS ADDON": Lọc và tạo DSKH theo tất cả nhà mạng; Lọc và tạo DSKH theo từng nhà mạng; Quét Data Khách hàng; Tạo DS nội dung SMS động; Tạo nội dung chúc mừng sinh nhật động; Xóa Danh sách SMS lỗi; Xóa KH số lượng lớn. "CHỨC NĂNG NÂNG CAO": Gửi SMS số lượng lớn với nội dung cực động; Gửi SMS số lượng lớn với Excel; Gửi SMS sinh nhật số lượng lớn...
- Toolkits là phần giao diện tiếng Việt (đường dẫn `/toolkits/vn/`), do đại lý Uy Tín Phát cung cấp.

[SUY LUẬN] Core là sản phẩm gateway quốc tế (giao diện kiểu SMS-gateway dùng Android, có bản tiếng Anh/Nhật); Toolkits là lớp bổ trợ riêng cho thị trường VN (lọc theo nhà mạng VN, cú pháp HUY_NT). Cần kiểm tra Toolkits có dùng được với số nước ngoài hay không.

---

## Bài 120 – Hướng dẫn xóa khách hàng số lượng lớn
- **Mục đích** [SỰ KIỆN]: xóa nhiều liên hệ một lúc thay vì xóa từng người, để làm sạch dữ liệu, giảm chi phí chiến dịch.
- **Đường dẫn menu (Core)**: LIÊN HỆ ĐÃ LƯU (1) → ô tìm kiếm "Nhập từ khóa vào đây..." (2 trong ảnh; bài viết ghi là 3) → chọn các dòng (dòng chọn tô xanh) → biểu tượng đỏ **XÓA CÁC MỤC ĐÃ CHỌN** (4).
- **Ảnh** [SỰ KIỆN]: trang "ĐỊA CHỈ LIÊN HỆ ĐÃ LƯU", cột: TÔI (ID, ví dụ #177952), TÊN LIÊN HỆ, SỐ LIÊN HỆ, DANH SÁCH NHÓM, TÙY CHỌN (sửa/xóa). Nút: THÊM LIÊN HỆ, NHẬP HÀNG LOẠT. Hiển thị 10/trang; có nút copy/Excel/PDF. Số điện thoại lưu dạng quốc tế E.164, ví dụ `+84932155807`.
- **Cách 2**: qua Toolkits ("Xóa KH số lượng lớn") – **chỉ có video YouTube** `https://www.youtube.com/watch?v=a9K4W4MbwE0` (khuyến khích, "nhanh và triệt để hơn").
- [SUY LUẬN] Vì số lưu dạng `+84...`, số Philippines sẽ phải lưu dạng `+63...`.

## Bài 125 – Thống kê, báo cáo kết quả chiến dịch SMS marketing
- **Mục đích** [SỰ KIỆN]: theo dõi lịch sử gửi, xuất kết quả ra Excel.
- **Menu (Core)**: TIN NHẮN (1) → GỬI (2) → trang "ĐÃ GỬI SMS". Tin nhận: TIN NHẮN → NHẬN (tin khách phản hồi hoặc đối tác gửi), thao tác tương tự.
- **Thành phần** (theo bài): ô 3 = lọc/tìm kiếm (ảnh: ô từ khóa + khoảng ngày, mặc định `01/01/1975 - 06/26/202x`); khung 4 = danh sách SMS đã gửi, chọn để xuất hoặc xóa; 5 = xuất Excel; 6 = xuất PDF; 7 = làm mới; 8 = xóa các dòng đã chọn. Trong ảnh nút 5 là icon lưới, 6 là icon tài liệu, cạnh nút copy.
- **Cột bảng** [SỰ KIỆN, ảnh]: TẠO (ngày giờ, ví dụ 6/25/2025 8:20 PM), NGƯỜI NHẬN (tên + số `+84...`), THÔNG ĐIỆP (rút gọn + nút "THÔNG ĐIỆP ĐẦY ĐỦ"), BÁO CÁO, TÙY CHỌN (gửi lại xanh / xóa đỏ).
- **Khối BÁO CÁO mỗi tin** [SỰ KIỆN, ảnh]:
  - Trạng thái: `Gửi` (nhãn xanh)
  - Chế độ: Thiết bị
  - Mã: `SMS_SENT`
  - Ưu tiên: Không
  - API đã gửi: Không
  - Khe cắm sim: SIM 1
  - Thiết bị: Samsung Đen
  - Hệ điều hành: Android 12
- **Trạng thái nêu trong bài** [SỰ KIỆN]: "Gửi thành công, hay Gửi thất bại, hay đang ở chế độ chờ..." – bài không liệt kê đầy đủ mã trạng thái; ảnh chỉ thấy `Gửi` / `SMS_SENT`.
- Toolkits: **chỉ có video** `https://www.youtube.com/watch?v=embTMMa8tx4`.
- [SUY LUẬN] "Mã" giống mã kết quả từ Android SmsManager (SMS_SENT); có thể có thêm mã giao (delivered) hoặc lỗi kiểu RESULT_ERROR_* – chưa thấy trong tài liệu. "Gửi" chỉ xác nhận máy đã phát tin, không chắc là báo đã nhận (delivery report).

## Bài 126 – Xóa SMS gửi bị lỗi / SMS không muốn gửi
- **Mục đích** [SỰ KIỆN]: dọn hàng đợi các SMS lỗi, thất bại hoặc còn chờ; hoặc gửi lại SMS lỗi.
- **Cách 1 (Core)**: TIN NHẮN → GỬI (cùng màn hình bài 125). Xóa từng tin: biểu tượng thùng rác cuối dòng. Xóa hàng loạt: chọn dòng (xanh) → nút đỏ số 8.
- **Cách 2 (Toolkits)**: utp.smsmk365.com → Toolkits → đăng nhập → menu **Xóa Danh sách SMS lỗi** (bài ghi 8, ảnh ghi 9). Màn hình "Xóa danh sách SMS lỗi" [SỰ KIỆN, ảnh]:
  - Khung TRUY VẤN DỮ LIỆU (10): ô "Nhập mã SMS đã gửi", 2 dropdown "Tất cả" (không thấy nhãn; [SUY LUẬN] có thể là thiết bị và trạng thái), ô "Ngày đã gửi SMS".
  - Nút: **Đặt lọc dữ liệu** (11), **Xóa tất cả SMS** (13, vàng), **Xóa SMS bị lỗi** (14, đỏ), **Gửi lại SMS bị lỗi** (15, xanh lá). Link "Truy vấn và xóa dữ liệu nâng cao..." để lọc theo khoảng ngày.
  - Bảng kết quả (12) "DANH SÁCH KHÁCH HÀNG": cột Số thứ tự, Mã tin sms, Gửi từ Thiết bị [ID - Unique] (ví dụ `INFINIX - Samsung Đen [4 - 0cac337b590be6e3]`), SIM, Gửi tới số điện thoại (`+84968237118`), **Trạng thái** (ví dụ `Đã gửi thành công`), Ngày gửi (`18-06-2025 19:57:21`), Nội dung... Hiển thị 100 dòng/trang, có ô Search.
  - **Giới hạn gói miễn phí** [SỰ KIỆN, ảnh]: "Do Bạn đang dùng gói Miễn phí nên Hệ thống chỉ hiển thị tối đa 15 kết quả ứng với mỗi nhà mạng. Hệ thống sẽ hiển thị kết quả đầy đủ khi Bạn đã đăng ký Gói trả phí."
- **Gửi lại**: tích chọn SMS lỗi → **GỬI LẠI SMS BỊ LỖI** (15).
- [SUY LUẬN] "mỗi nhà mạng" cho thấy Toolkits phân loại theo nhà mạng VN; số Philippines có thể không được nhận diện nhà mạng.

## Bài 127 – Xử lý khách hàng không muốn nhận SMS
- **Mục đích** [SỰ KIỆN]: tránh gửi lại cho người từ chối, tránh bị báo spam với nhà mạng, có thể dẫn tới **khóa SIM**.
- **Cách 1 (Core)**: TIN NHẮN (11) → CHIẾN DỊCH MARKETING (12) → nút **GỬI HÀNG LOẠT** (13). Thêm 1 trong 2 câu cuối tin:
  - "Để không nhận tin nhắn bạn vui lòng nhắn: `{{unsubscribe.command}}`"
  - "Để không nhận tin nhắn bạn vui lòng kích vào link sau: `{{unsubscribe.link}}`"
  → Khách nhắn mã hoặc bấm link thì các chiến dịch sau tự bỏ qua họ, kể cả khi chiến dịch chọn họ. (Menu LIÊN HỆ có mục "ĐÃ HỦY ĐĂNG KÝ".)
- **Form "SMS hàng loạt"** [SỰ KIỆN, ảnh]:
  - (14) Tên chiến dịch
  - (15) Số điện thoại di động – textarea, mỗi dòng 1 số, gợi ý `+84912345678`
  - (16) Nhóm liên hệ (mặc định KHÔNG CÓ)
  - (17) Link rút gọn (KHÔNG ÁP DỤNG LINK RÚT...)
  - (18) Chế độ Gateway (THIẾT BỊ)
  - (19) Khe cắm sim (SIM1)
  - (20) Thiết bị di động (Nothing selected)
  - (21) Quyền ưu tiên (KHÔNG)
  - (22) Mẫu tin nhắn (KHÔNG CÓ)
  - (23) Thông điệp + nút **DỊCH** (translator), bộ đếm ký tự
  - Spintax: ví dụ `Tom là một con mèo {tốt|xấu}`
  - Mã ngắn: `{{contact.name}}`, `{{contact.number}}`, `{{group.name}}`, `{{date.now}}`, `{{date.time}}`, `{{unsubscribe.command}}`, `{{unsubscribe.link}}`
  - (24) GỬI. Ngoài ra cạnh nút Gửi hàng loạt có nút EXCEL.
- **Cách 2 (Toolkits)**: chèn mã **HUY_NT** vào nội dung; khách nhắn lại `HUY_NT` thì các chiến dịch Toolkits sau bỏ qua họ.
- **Màn hình Toolkits "Gửi SMS số lượng lớn với nội dung cực động"** [SỰ KIỆN, ảnh]: dropdown Chọn nhóm KH, Chọn điện thoại cần gửi, "Tất cả", Chọn SIM để gửi, Ưu tiên gửi trước?; nút Đặt lọc kết quả, Gửi SMS ngay; tên chiến dịch tự sinh ("Chiến dịch sms marketing 26-06-2025 17:06:04"); chọn Mẫu SMS Spintax / Tạo mẫu SMS Spintax; công thức nội dung dạng `[a|b|c]` với `[contact.name]`, `[date.time]`. Lưu ý đỏ: nếu đang **bật App điện thoại** thì sau khi lập chiến dịch phải **thoát App rồi bật lại** để việc gửi được thực thi.
- [SUY LUẬN] Mã `HUY_NT` và câu hướng dẫn tiếng Việt cần thay bằng từ khóa tiếng Anh/Tagalog (ví dụ STOP) nếu gửi ở Philippines; chưa rõ `{{unsubscribe.command}}` trả về chuỗi gì (trong ảnh bài 125 thấy nội dung tin có chữ "STOP ht..." → có thể là STOP + link).

## Bài 128 – Khôi phục mật khẩu
- **Core** [SỰ KIỆN, ảnh]: smsmk365.com (1) → (2) nút mũi tên lên / (3) chọn ngôn ngữ Vietnamese (có cờ VN, Nhật, Mỹ) → (4) Đăng Nhập → (5) "Quên mật khẩu" → (6) Địa chỉ email → (7) reCAPTCHA "I'm not a robot" → (8) LẤY LẠI → email gửi link đặt lại (kiểm tra cả Inbox và Spam). Form đăng nhập: Địa chỉ email + Mật khẩu + reCAPTCHA.
- **Toolkits**: **chỉ có video** `https://www.youtube.com/watch?v=7bCdA-axVeY`.
- [SUY LUẬN] Tài khoản Core đăng nhập bằng email; Toolkits đăng nhập bằng "Tên tài khoản".

## Bài 129 – FAQ (19 câu)
[SỰ KIỆN]
- Gồm 2 thành phần: **App điện thoại Android** (điều khiển gửi) + **Ứng dụng web** (nhóm/danh sách KH, chiến dịch gửi ngay hoặc hẹn giờ, báo cáo).
- Chỉ **Android**; **không hỗ trợ iOS/iPhone**.
- Chi phí (FAQ, giá cũ): 800k/năm gói Basic; 2,5tr/năm gói Business. Cước SMS do nhà mạng trừ: Viettel nội mạng 200đ, ngoại mạng 250đ; gói S3/S5 khoảng 10đ/sms. (Giá hiện tại xem bảng giá bên dưới.)
- Viettel: S3 = 3.000đ/300 sms/ngày; S5 = 5.000đ/500 sms/tuần; S10 = 10.000đ/500 sms/tháng (20đ/sms); đăng ký: nhắn tên gói gửi 170; `*098#` xem khuyến mại; `*101#`/`*102#` tài khoản; `HUYSMS` gửi 170 để hủy. "Nhà mạng khác: Đang cập nhật".
- Dùng được khi di chuyển nếu điện thoại Android có App, bật wifi/3G/4G.
- Nhập hàng loạt từ Excel theo mẫu; lập lịch gửi trong tương lai.
- **Số SIM: không giới hạn**.
- **Mỗi SIM tối đa 300 sms/ngày** ("theo quy định của các nhà mạng"), với điều kiện nội dung được trộn khác nhau.
- Nhiều chiến dịch trên 1 điện thoại **không chạy đồng thời**; chiến dịch lập trước / có ưu tiên chạy trước, còn lại xếp hàng đợi.
- Chống khóa SIM: **giãn cách 1,5–2 phút giữa 2 tin**; trộn nội dung bằng công thức (spintax).
- Có công cụ lọc số theo nhà mạng, quét SĐT từ comment Facebook, quét SĐT trên website.
- [SUY LUẬN] Tính toán: 1 SIM giãn cách 1,5–2 phút → khoảng 30–40 tin/giờ; 300 tin mất khoảng 7,5–10 giờ. Mức 300/ngày là con số cho nhà mạng VN, **không có số liệu cho nhà mạng Philippines** (Globe/Smart/DITO).

## Bài 134 – Quy định sử dụng dịch vụ
[SỰ KIỆN]
- Dịch vụ: gửi SMS hàng loạt từ thiết bị cá nhân; WhatsApp hàng loạt; quản lý, lên lịch, cá nhân hóa.
- Điều kiện: điện thoại Android + app; internet ổn định; **tuân thủ pháp luật Việt Nam** (quảng cáo, viễn thông, bảo vệ dữ liệu cá nhân, chống spam).
- Người dùng: không chia sẻ tài khoản; tự chịu trách nhiệm nội dung; **danh sách người nhận phải được sự cho phép**; không vượt giới hạn phần mềm/nhà mạng.
- Cấm: lừa đảo, đa cấp bất chính, tín dụng đen, link giả mạo; khiêu dâm, phản động, bạo lực, kích động; phá hoại hệ thống.
- Nhà cung cấp: hỗ trợ qua email/Zalo/ticket; có quyền ngừng dịch vụ khi vi phạm.
- Bảo mật: danh bạ và nội dung tin "chỉ lưu tạm thời phục vụ quá trình gửi", không chia sẻ bên thứ ba.
- Miễn trừ: không chịu trách nhiệm khi người dùng bị khiếu nại hoặc **bị khóa số**; **không bảo đảm 100% gửi thành công**.
- Thanh toán: **không hoàn phí** (trừ lỗi kỹ thuật nghiêm trọng do nhà cung cấp); vi phạm pháp luật thì khóa tài khoản, không hoàn tiền còn lại.
- Liên hệ: smsmk365agent@gmail.com; Hotline/Zalo 0945.062.863.
- Không nhắc tới Philippines hoặc quốc gia khác. [SUY LUẬN] Dùng ở PH còn phải tuân thủ luật PH (Data Privacy Act, SIM Registration Act) – tài liệu không đề cập.

## Bài 135 – Tại sao nên dùng nền tảng này (marketing)
[SỰ KIỆN]
- Ảnh: App Android "Black Samsung", log: "Fetching USSD requests from the queue", "Fetching messages from the queue", "Device ID: 0cac337b590be6e3", "**Gateway Build v3.9.8**". 4 nút: tin nhắn, thông báo, gọi, thoát.
- Biến điện thoại Android thành "máy chủ gửi tin"; không cần đầu số (brandname); "hàng ngàn SMS và WhatsApp mỗi ngày".
- WhatsApp "hoàn toàn miễn phí, không giới hạn số lượng", "không lo bị khóa tài khoản" (lời quảng cáo).
- SMS nội mạng từ 10đ/tin; cần điện thoại Android + 1 SIM 4G.
- Tự động: lịch gửi hằng ngày/tuần, sinh nhật, nhắc hẹn, flow; Form đăng ký có phản hồi tự động; tự trả lời theo kịch bản; tích hợp AI tạo nội dung; plugin WordPress; API, HOOK.
- "SmsMk365 không lưu trữ dữ liệu khách hàng" (mâu thuẫn một phần với bài 134 "lưu tạm thời", và việc danh bạ thực tế nằm trên web).
- Dùng thử miễn phí 7 ngày (trong khi bảng giá utp ghi Trial 01 tháng).
- [SUY LUẬN] Các khẳng định "không bị khóa", "không giới hạn" là lời quảng cáo, mâu thuẫn với giới hạn 300 sms/SIM/ngày ở bài 129 và giới hạn theo gói.

---

## Bảng giá Việt Nam – utp.smsmk365.com (đại lý độc quyền Uy Tín Phát)
[SỰ KIỆN] Giá **chưa gồm 10% VAT**; là giá nền tảng (App + tài khoản web), cước SMS do nhà mạng tính riêng.

| Hạng mục | Trial | Startup | Business |
|---|---|---|---|
| Giá | 0đ (dùng thử 01 tháng) | 1.100.000đ/năm (~4.999đ/ngày)* | 2.750.000đ/năm (~11.666đ/ngày)* |
| Đăng ký tối thiểu | – | 01 năm | 01 năm |
| Thiết bị di động | 01 | 01 | 03 |
| Số điện thoại KH (danh bạ) | 50 | 1.500 | 25.000 |
| SMS gửi/ngày | 15 | 1.500 | 5.000 |
| SMS nhận/ngày | 15 | 1.500 | 5.000 |
| Tài khoản WhatsApp | 01 | 01 | 03 |
| WhatsApp gửi/ngày | 30 | 1.500 | 5.000 |
| WhatsApp nhận/ngày | 30 | 1.500 | 5.000 |
| Chức năng | Cơ bản | Cơ bản | Cơ bản & Nâng cao |
| Mã API | 01 | 03 | 15 |
| Webhook | 01 | 03 | 15 |
| Phễu thu thập thông tin | 01 | 05 | 10 |
| Mẫu SMS Spintax | 05 | 20 | Không giới hạn |
| Mẫu EMAIL Spintax | 05 | 20 | Không giới hạn |
| Máy chủ gửi Mail | 01 | 05 | Không giới hạn |
| Vòng Quay May Mắn | 01 | 01 | 01 |
| Tích hợp Vòng quay với Form | Không | Không | Có |
| Tạo Khảo sát | Không | Không | Có |
| Ký tự nội dung SMS | Không giới hạn | Không giới hạn | Không giới hạn |
| Gắn Link / SĐT trong SMS | Có | Có | Có |
| FLOWS / AI / ACTION / WP Plugin / Kiếm tiền Đối tác | Có | Có | Có |
| Quảng cáo trong SMS ("Send by SmsMk365") | **Có** | Không | Không |

\* Con số "/ngày" được ghi y nguyên từ trang (4.999đ và 11.666đ không khớp phép chia 1.100.000/365 và 2.750.000/365, có vẻ là số cũ còn sót lại).

Ưu đãi Business: mua 1 năm tặng 1 tháng; 2 năm 4.750.000đ (+2 tháng); 3 năm 7.000.000đ (+3 tháng). Quà: vCard 4.0 (Only vCard cho Startup, Beginner cho Business). Thanh toán chuyển khoản (VCB/VietinBank, chủ TK Hoàng Quốc Uy), nội dung "SMSMK365 - Họ tên - 5 số cuối SĐT - Tên gói", sau đó gọi hotline để nâng cấp. Đại lý tự nhận giá "rẻ hơn ít nhất 30% so với giá niêm yết".
**Về nước ngoài** [SỰ KIỆN]: "Nếu Bạn cần GIẢI PHÁP TỰ ĐỘNG NHẮN TIN SMS CHĂM SÓC KHÁCH HÀNG HÀNG LOẠT Ở THỊ TRƯỜNG NƯỚC NGOÀI - DÀNH CHO DOANH NGHIỆP thì vui lòng liên hệ Hotline/Zalo 0945.062.863".
FAQ cũ (bài 129) ghi Basic 800k/năm, Business 2,5tr/năm, đã lỗi thời so với bảng trên.

Tính năng trên utp [SỰ KIỆN]: App điện thoại; gửi hàng loạt theo phân đoạn, có cơ chế tránh khóa SIM; API & Webhooks; Web app + Toolkits; nhập Excel, nội dung động; **nhiều thiết bị và nhiều SIM, gửi và nhận, thống kê đầy đủ**. Toolkits: lọc SĐT theo nhà mạng; quét SĐT Facebook/website; nội dung động/sinh nhật; trộn theo cột Excel; xóa SMS lỗi và KH hàng loạt; Trung tâm CSKH (gọi, Zalo/Viber); phễu thu thập.

## Bảng giá quốc tế – smsmk365.com/user-guide/vi/ (USD/tháng)
[SỰ KIỆN] Trang tiếng Anh dù URL là `/vi/`. Không thấy tùy chọn trả theo năm.

| Gói | Giá | SMS gửi/ngày | SMS nhận/ngày | WA gửi/ngày | WA nhận/ngày | USSD/ngày | Notifications/ngày | Lịch hẹn SMS/Chat | Danh bạ | API Keys | Webhooks | Actions | Thiết bị Android | Tài khoản WA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Trial | USD 0 | 15 | 20 | 15 | 20 | 15 | 20 | 3 | 50 | 1 | 1 | 1 | 1 | 1 |
| Startup | USD 15 | 1.500 | 1.500 | 1.500 | 1.500 | 1.500 | 1.500 | 30 | 1.500 | 3 | 3 | 3 | 1 | 1 |
| Business | USD 35 | 5.000 | 5.000 | 5.000 | 5.000 | 5.000 | 5.000 | 50 | 25.000 | 5 | 5 | 5 | 3 | 3 |
| Professional | USD 59 | 5.000 | 7.000 | 7.000 | 7.000 | 7.000 | 7.000 | 70 | 4.000 | 10 | 10 | 10 | 5 | 5 |
| Enterprise | USD 99 | 5.000 | 15.000 | 10.000 | 10.000 | 10.000 | 1.000 | 150 | 7.500 | 20 | 20 | 20 | 10 | 10 |
| Elite | USD 199 | 5.000 | 50.000 | 25.000 | 25.000 | 30.000 | 30.000 | 300 | 15.000 | 30 | 30 | 30 | 20 | 20 |

[SUY LUẬN] Bảng có vẻ nhập sai: gói cao hơn vẫn "SMS Send 5,000", danh bạ Professional/Enterprise/Elite (4.000/7.500/15.000) thấp hơn Business (25.000), Notifications Enterprise 1.000. Cần hỏi nhà cung cấp trước khi chọn gói.

Mô tả trên trang quốc tế [SỰ KIỆN]: "Utilize your network provider's unlimited sms plan... for marketing, bulk sms and projects **in your country**"; Android làm SMS gateway; WhatsApp; autoreply, webhooks; **Earn Money** (làm partner, dùng điện thoại của mình làm gateway, nhận tiền mỗi tin); Shortcodes, **Spintax**, **Translator**; Schedule; Webhooks; Actions; **USSD** (kiểm tra số dư); Notifications. "Trusted by 3,000+ customers". Email: SmsMk365Agent@gmail.com, support@smsmk365.com.

## SIM nước ngoài / Philippines – tổng hợp
- [SỰ KIỆN] Không bài nào nhắc **Philippines** hoặc danh sách quốc gia được hỗ trợ. Trang quốc tế nói chung chung "in your country". Trang utp nói giải pháp cho thị trường nước ngoài thì liên hệ hotline. Landing smsmk365.com có bản tiếng Việt/Nhật/Anh.
- [SỰ KIỆN] Số điện thoại trong hệ thống ở dạng E.164 (`+84...`); form có "Khe cắm sim" (SIM1/SIM2) và "Chế độ Gateway: Thiết bị".
- [SUY LUẬN] Vì SMS được gửi từ chính SIM trong điện thoại Android, về kỹ thuật SIM Philippines (Globe/Smart/DITO) có thể dùng được với Core, nhập số dạng `+63...`; cước theo gói của nhà mạng PH. Những phần **gắn với VN** có thể không dùng được: lọc theo nhà mạng VN, cú pháp `HUY_NT`, mẹo gói Viettel, mức 300 sms/SIM/ngày (con số của nhà mạng VN), "gói miễn phí hiển thị 15 kết quả/nhà mạng". Cần xác nhận với nhà cung cấp: (1) Toolkits có nhận số +63 không; (2) báo cáo trạng thái giao tin (delivered) có hoạt động với nhà mạng PH không; (3) mua gói VN (utp) hay gói USD; (4) giới hạn chống spam ở PH; (5) WhatsApp ở PH.

## Mục trong trang tổng hợp (group 114) CHỈ là video YouTube
[SỰ KIỆN] Mục trong danh sách trỏ thẳng tới YouTube, không có bài viết:
1. 2.10 – Hướng dẫn thay đổi tên Thiết bị Điện thoại và Thiết lập khoảng thời gian gửi Sms ngẫu nhiên để tránh bị bộ lọc nhà mạng coi là Spam – https://www.youtube.com/watch?v=7zv1TIuJoxs
2. 2.11.1 – Hướng dẫn tạo Form đăng ký/Phễu thu thập thông tin khách hàng – https://www.youtube.com/watch?v=h_bxmlNbrEE
3. 2.11.2 – Hướng dẫn tạo Vòng Quay May Mắn – https://www.youtube.com/watch?v=OVr1mpoGQyQ
4. 3.1 – Hướng dẫn cách gỡ APP ra khỏi điện thoại và xóa thông tin thiết bị di động khỏi Hệ thống – https://www.youtube.com/watch?v=aIzF4E9s0k4
5. 3.4 – Quét danh sách Khách hàng trên các comment Facebook của bạn mà khách hàng để lại thông tin – https://www.youtube.com/watch?v=58MJW9gyYZ4

Phần trong bài viết chỉ có video (bài có chữ nhưng phần Toolkits chỉ là video nhúng):
- Bài 120 phần 2 (Xóa KH bằng Toolkits) – https://www.youtube.com/watch?v=a9K4W4MbwE0
- Bài 125 phần 2 (Báo cáo bằng Toolkits) – https://www.youtube.com/watch?v=embTMMa8tx4
- Bài 128 phần 2 (Khôi phục mật khẩu Toolkits) – https://www.youtube.com/watch?v=7bCdA-axVeY
- Video tổng quan trên utp – https://www.youtube.com/watch?v=deusEXIbLOA

Mục trỏ ra trang ngoài (không phải YouTube, không thuộc support): 3.5–3.9 (khotailieuthucte.com: Google Map, Trang Vàng, 9 mạng xã hội, lọc số theo nhà mạng VN, lọc số Zalo), 3.11 (hoangquocuy.com). Ghi chú đầu trang: tài liệu WhatsApp Marketing phải liên hệ BQT để nhận.
