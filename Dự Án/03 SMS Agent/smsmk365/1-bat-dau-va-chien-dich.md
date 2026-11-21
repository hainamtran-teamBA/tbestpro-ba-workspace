# SmsMk365 – Ghi chép tài liệu hướng dẫn (support.smsmk365.com)

Ngày đọc: 2026-11-13. Nguồn: HTML tải bằng curl + ảnh chụp màn hình trong bài (lưu tại `smsmk-A/img/`, HTML tại `smsmk-A/html/`).
Quy ước: **[SỰ KIỆN]** = có trong bài/ảnh; **[SUY LUẬN]** = suy đoán của người ghi chép.

Bài mục lục chính: https://support.smsmk365.com/post/114/huong-dan-su-dung-smsmk365-toan-tap (quy trình 5 bước cơ bản = bài 119→118→115→116→117; phần nâng cao "Bộ ToolKits" = bài 120–128).
Trang chủ support còn có **bộ bài tiếng Anh mới hơn (post 143–166, 06–07/2025)** với nhiều ảnh hơn, dùng để bổ sung cho các bài tiếng Việt chỉ có video: 144 (tạo tài khoản), 145 (app/Android server), 147 (nhóm & dữ liệu KH), **148 (Mẫu tin nhắn / Templates + Spintax)**, 149 (SMS nhanh), 150 (chiến dịch gửi ngay), 151 (lập lịch).

---

## 0. Tóm tắt cú pháp nội dung (Spintax + Shortcode)

**[SỰ KIỆN]**
- **Spintax**: `{lựa_chọn_1|lựa_chọn_2|...}` – hệ thống chọn ngẫu nhiên 1 giá trị. Gợi ý ngay dưới ô Thông điệp: `Tom là một con mèo {tốt|xấu}` → "Các giá trị tốt và xấu sẽ được sử dụng ngẫu nhiên" (bản EN: `Tom is a {good|bad} cat`).
- Ví dụ thật trong bài 148 (mẫu "ADS 01 For Google Data Scraper Tools"):
  ```
  {📍|🌍|⚙️} Discover {unlimited leads|endless business data} with our {auto Google Maps scraper|smart map data extractor}! {Scan any country, city, or industry|Target any region or niche}, {no API|zero API}, {no proxy needed|no proxies required}, {easy Excel export|one-click Excel output}. Start now – {Get leads fast!|Try it today!} {bizToolsSuite.Com|www.bizToolsSuite.Com}
  ```
  → Emoji được dùng bên trong spintax; nhiều nhóm `{}` nối tiếp trong một tin.
- **Shortcode – khi gửi theo Nhóm liên hệ / danh sách số** (form Gửi hàng loạt, Mẫu tin nhắn):
  `{{contact.name}}` (tên KH), `{{contact.number}}` (SĐT KH), `{{group.name}}` (tên nhóm), `{{date.now}}` (ngày giờ hiện tại), `{{date.time}}` (giờ hiện tại), `{{unsubscribe.command}}` (mã hủy – "STOP"), `{{unsubscribe.link}}` (link hủy nhận tin).
- **Shortcode – form Lập lịch**: chỉ có `{{contact.name}}, {{contact.number}}, {{group.name}}, {{date.now}}, {{date.time}}` (ảnh màn hình KHÔNG có 2 mã unsubscribe).
- **Shortcode – form Gửi hàng loạt bằng EXCEL** (bài 150, ảnh): `{{phone}}`, `{{sim}}`, `{{priority}}`, `{{date.now}}`, `{{date.time}}`, `{{unsubscribe.command}}`, `{{unsubscribe.link}}`, `{{custom.YourVariable}}` – biến tùy chỉnh khớp với cột `custom_var1`, `custom_var2` trong file Excel. Ở form Excel KHÔNG có `{{contact.name}}`.
- Câu kết đề xuất (bài 127): `Để không nhận tin nhắn bạn vui lòng nhắn: {{unsubscribe.command}}` hoặc `Để không nhận tin nhắn bạn vui lòng kích vào link sau: {{unsubscribe.link}}`. KH đã hủy sẽ tự động bị bỏ qua ở các chiến dịch sau (kể cả khi bạn chọn họ).
- Trong **bộ ToolKits (utp.smsmk365.com)** mã hủy là **`HUY_NT`** (KH nhắn lại HUY_NT → các chiến dịch ToolKits sau bỏ qua KH đó) – bài 127.

**[SUY LUẬN / CHƯA RÕ]**
- Không tài liệu nào nói spintax có lồng nhau `{a|{b|c}}` được hay không, có escape ký tự `|` `{` hay không → coi như chỉ hỗ trợ 1 cấp.
- Cú pháp chính xác của `{{custom.YourVariable}}` với cột `custom_var1`: có thể là `{{custom.var1}}` hoặc `{{custom.custom_var1}}` – tài liệu chữ không ghi rõ; cần thử hoặc xem video bài 124.
- Định dạng đầu ra của `{{date.now}}`/`{{date.time}}` không được mô tả.
- Không có giới hạn độ dài tin/ký tự nào được nêu. Cạnh nhãn "Thông điệp" có badge đếm số (đang là `0`) – có lẽ là bộ đếm ký tự; và nút **DỊCH/TRANSLATE**.

---

## 1. Bài 119 – Hướng dẫn tạo tài khoản thành viên miễn phí
URL: https://support.smsmk365.com/post/119/huong-dan-tao-tai-khoan-thanh-vien-mien-phi

- **Mục đích [SỰ KIỆN]**: tạo tài khoản miễn phí trên điện thoại và trên máy tính.
- **Nội dung thật: CHỈ CÓ VIDEO YOUTUBE**, không có chữ hướng dẫn hay ảnh.
  - **CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=spkSWoPMl1E** – mục "Tạo tài khoản trên điện thoại"; tiêu đề video: "Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P1".
  - **CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=oCHVXjT_lAw** – mục "Tạo tài khoản trên máy tính"; tiêu đề: "... - P1 - Phiên bản 3.0".
- **Bổ sung từ bài EN 144 (có ảnh) [SỰ KIỆN]**: vào https://SmsMk365.Com → nút **Sign In** → **Create Account** → form Đăng ký gồm: Full Name (8), Email Address (9 – phải là email thật, dùng để đăng nhập), Password (10), Confirm Password (11), **Timezone (12 – phải chọn đúng múi giờ nơi bạn sống)**, Country Code (13), reCAPTCHA "I'm not a robot" (14), nút SIGN UP (15). Đăng nhập: form Sign In → SIGN IN → vào Dashboard. Đổi thông tin: menu avatar → SETTINGS → SAVE; avatar khuyến nghị 400x400px; LOGOUT ở menu avatar.
- **[SUY LUẬN]**: Timezone quan trọng vì lịch gửi (Lập lịch) chạy theo múi giờ tài khoản – với kho ở Philippines nên chọn Asia/Manila nếu tài khoản dùng cho SIM Philippines.

## 2. Bài 118 – Tải App điện thoại, cài đặt và sử dụng
URL: https://support.smsmk365.com/post/118/huong-dan-tai-app-dien-thoai-cai-dat-va-su-dung

- **Mục đích**: tải app Android miễn phí, cài đặt (thiết lập "Máy chủ Android"), kết nối app với web, kiếm tiền qua chương trình Đối tác.
- **Phần I (tải – cài – kết nối)**: CHỈ CÓ VIDEO. **CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=zLm8VefCUtA** – tiêu đề: "Phần mềm sms marketing và whatsapp marketing - Phần 2 Tải và cài đặt App điện thoại". (Bản EN 145 cũng chỉ là video: https://www.youtube.com/watch?v=XO1qpqA9B6w.)
- **Phần 2.1 – Thiết lập thông số app [SỰ KIỆN, ảnh Hình 1]**
  - Đường dẫn: **MÁY CHỦ → ANDROID → biểu tượng bút chì** ở dòng thiết bị → cửa sổ "CHI TIẾT THIẾT BỊ".
  - Các nút cùng dòng (bản EN 145): (3/5 trong ảnh VN) copy **Device Unique ID** (dùng cho API); bút chì = sửa; thùng rác = xóa. Đầu trang: DOCS, PARTNERSHIP/LIÊN HỆ ĐỐI TÁC, THÊM THIẾT BỊ (ADD DEVICE). Bảng: Registered, Name, Brand, Version (Android), Partner.
  - Trường:
    - **Tên thiết bị (6)**: đặt tên để phân biệt khi chọn thiết bị trong chiến dịch (ví dụ ảnh: "Samsung Đen").
    - **Nhận tin nhắn SMS (7)**: CHO PHÉP → mọi SMS đến điện thoại được ghi nhận/sắp xếp trên web; VÔ HIỆU HÓA → không nhận.
    - **Khoảng thời gian gửi ngẫu nhiên (8)**: VÔ HIỆU HÓA → gửi liên tục không nghỉ, **rất dễ bị nhà mạng KHÓA SIM – tuyệt đối không chọn**; CHO PHÉP → dừng ngẫu nhiên giữa **Gửi khoảng thời gian tối thiểu (9)** và **tối đa (10)** – khuyến khích. Ảnh ví dụ: tối thiểu `5`, tối đa `10`.
    - Mục "THIẾT LẬP THÔNG BÁO" – **Các ứng dụng (11)**: bài VN bảo bỏ qua; bài EN: nhập package name app muốn lấy thông báo, mỗi dòng 1 package (vd `com.facebook.orca`, `com.facebook.katana`, `com.instagram.android`).
    - Mục "CÀI ĐẶT ĐỐI TÁC": **Trạng thái đối tác (12)** CHO PHÉP = cho người khác thuê điện thoại/SIM của bạn để gửi SMS và nhận tiền; VÔ HIỆU HÓA = không tham gia. **Quốc gia (13)** phải khớp với SIM; **Tỷ lệ (14)** = giá bạn thu (ảnh: `0.01`); **Quyền ưu tiên (15)** (ảnh: VÔ HIỆU HÓA – không được giải thích); **Khe cắm SIM (16)** = SIM dùng cho đối tác thuê.
    - **LƯU (17)**.
  - **[CHƯA RÕ]**: đơn vị của 5/10 không ghi (giây?). FAQ (bài 129) lại nói khoảng nghỉ giữa 2 tin "từ 1,5 đến 2 phút" → **[SUY LUẬN]** đơn vị có lẽ là giây và giá trị 5/10 trong ảnh chỉ là ví dụ; nên đặt cao (ví dụ 90–120) theo khuyến cáo FAQ. Tỷ lệ 0.01 có lẽ là USD/tin.
- **Phần 2.2 – Chương trình Đối tác & thu nhập [SỰ KIỆN, ảnh Hình 2]**
  - **BẢNG ĐIỀU KHIỂN → TỔNG QUAN (18)**: thẻ Tổng số đã gửi, Tổng số tin đã nhận, Thành công %, Thất bại %, biểu đồ 7 ngày (Đã gửi SMS / Đã nhận SMS / WA đã gửi / WA đã nhận).
  - Khung 19: **ĐỐI TÁC** = thu nhập (USD) khi cho thuê điện thoại, nút THANH TOÁN để rút qua **PayPal**; **SỐ DƯ TÀI KHOẢN** = Credit (tín dụng) để trả cho đối tác khi bạn thuê điện thoại của họ, nút NẠP TIỀN qua PayPal.
  - Nút **ĐỐI TÁC (20)** (cạnh PLUGIN, CỔNG SMS): danh sách đối tác cho thuê điện thoại + mức phí.
- Ảnh app (bài 149): app hiển thị tên thiết bị, log "Fetching messages from the queue", Device ID, "Gateway Build v3.9.8". **Phải mở app trên điện thoại thì chiến dịch mới chạy** (bài 149/150/151).

## 3. Bài 115 – Tổ chức dữ liệu khách hàng
URL: https://support.smsmk365.com/post/115/to-chuc-du-lieu-khach-hang

- **Mục đích**: tổ chức dữ liệu KH, phân nhóm (phân đoạn), nhập KH thủ công.
- **Chữ + 1 ảnh** chỉ để đối chiếu menu cũ/mới; nội dung hướng dẫn thật là **VIDEO**: **CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=VUeOw1DjvRM** – tiêu đề "Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P3". Video dùng **giao diện cũ (menu ngang)**.
- **Bảng đối chiếu menu [SỰ KIỆN]**: LIÊN HỆ (cũ) = khu "LIÊN HỆ" ở menu dọc (gồm LIÊN HỆ ĐÃ LƯU, DANH SÁCH NHÓM, ĐÃ HỦY ĐĂNG KÝ); ĐÃ LƯU (cũ) = LIÊN HỆ ĐÃ LƯU; NHÓM LIÊN HỆ (cũ) = DANH SÁCH NHÓM.
- Ảnh: trang "NHÓM LIÊN HỆ" có nút THÊM NHÓM, nút xóa hàng loạt (đỏ), bảng **ID NHÓM** (vd `#1792`), TÊN NHÓM, TÙY CHỌN (sửa/xóa), nút copy/Excel/PDF, ô tìm kiếm.
- **Bổ sung từ bài EN 147 [SỰ KIỆN]**: Thêm nhóm: ADD GROUP → Name → SUBMIT. Thêm KH thủ công: LIÊN HỆ ĐÃ LƯU → ADD CONTACT → điền form (Phone Number có mã quốc gia; Contact Group có thể chọn **nhiều nhóm**) → SUBMIT. Xóa nhiều KH: chọn dòng → icon xóa hàng loạt. Danh sách nhóm/KH xuất được Excel/PDF/clipboard.

## 4. Bài 116 – Nhập dữ liệu KH số lượng lớn từ file Excel
URL: https://support.smsmk365.com/post/116/nhap-du-lieu-khach-hang-so-luong-lon-tu-file-excel

- **Phần I – giao diện chính (ảnh) [SỰ KIỆN]**: **LIÊN HỆ ĐÃ LƯU (1) → NHẬP HÀNG LOẠT (2)** → cửa sổ "Nhập danh bạ": "Tệp Excel – **Tệp mẫu: Tải xuống** (3)" → điền dữ liệu theo mẫu → **Choose File (4)** → **LƯU (5)**.
- **Cột file mẫu [SỰ KIỆN]**:
  - `phone`: SĐT kèm mã quốc gia (VN: `+84...`).
  - `groups`: **ID nhóm** muốn gán; nhiều nhóm cách nhau bằng **dấu phẩy**.
  - `name`: tên KH.
- **Lấy ID nhóm (Hình 2)**: menu **DANH SÁCH NHÓM (6)** → cột **ID NHÓM (7)** (hiển thị dạng `#1792`).
- Bảng LIÊN HỆ ĐÃ LƯU (ảnh): cột Tôi/ID (#177952...), Tên liên hệ, SĐT (+849...), Danh sách nhóm, Tùy chọn; nút THÊM LIÊN HỆ, NHẬP HÀNG LOẠT.
- **[CHƯA RÕ]**: trong cột `groups` có ghi dấu `#` hay chỉ số (1792)? Ảnh hiển thị `#1792`; **[SUY LUẬN]** có lẽ chỉ nhập số. Không nêu giới hạn số dòng/dung lượng file, định dạng .xlsx hay .csv, xử lý trùng số.
- **Phần II – nhập từ bộ ToolKits**: CHỈ VIDEO. **CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=QRWz9j1tCdA** – tiêu đề "Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P4".

## 5. Bài 117 – Tạo chiến dịch SMS marketing, thực thi và kiểm soát
URL: https://support.smsmk365.com/post/117/tao-chien-dich-sms-marketing-thuc-thi-va-kiem-soat-chien-dich-sms-marketing

Bài có chữ + 3 ảnh đầy đủ; video cuối bài (giao diện cũ): **https://www.youtube.com/watch?v=W4GG2xx1aa8** ("... - P5") – không bắt buộc vì chữ/ảnh đã đủ.

### 5.1 Gửi SMS nhanh (thủ công, ít KH) – Hình 1
Đường dẫn: **TIN NHẮN (1) → HÀNG ĐỢI (2) → GỬI SMS NHANH (3)** → cửa sổ "Gửi SMS Nhanh":
- **Số điện thoại (4)**: SĐT kèm mã quốc gia (placeholder `eg. +84912345678`). Chỉ 1 số.
- **Chế độ Gateway (5)**: THIẾT BỊ = gửi từ điện thoại của bạn; TÍN DỤNG = gửi qua điện thoại đối tác cho thuê (trả credit).
- **Link rút gọn (6)**: bỏ qua (mặc định "KHÔNG ÁP DỤNG LINK RÚT GỌN").
- **Khe cắm SIM (7)**: SIM1 / SIM2.
- **Quyền ưu tiên (8)**: ĐÚNG = gửi trước dù còn chiến dịch chưa xong; KHÔNG = xếp hàng đợi.
- **Thiết bị di động (8 – trùng số trong bài)**: bài VN bảo "Bỏ qua" (mặc định "NOTHING SELECTED"); bài EN 149 bảo chọn điện thoại sẽ gửi. **[SUY LUẬN]** nên chọn khi có ≥2 điện thoại.
- **Thông điệp (9)**: nội dung, hỗ trợ Spintax (gợi ý bên dưới). Có badge đếm (0) và nút DỊCH.
- **GỬI (10)** (bài viết ghi "LƯU").
- Trang Hàng đợi (bài EN 149): cột Created, Recipient, Message (nút FULL MESSAGE), Report (Status: Pending…, Mode, Priority, API Sent, Sim Slot, Device, OS), nút refresh, xóa hàng loạt, xóa dòng.

### 5.2 Chiến dịch gửi hàng loạt ngay – Hình 2
Đường dẫn: **TIN NHẮN (11) → CHIẾN DỊCH MARKETING (12) → GỬI HÀNG LOẠT (13)** → cửa sổ "SMS hàng loạt":
- **Tên chiến dịch (14)**.
- **Số điện thoại di động (15)**: danh sách số, mỗi dòng 1 số, có mã quốc gia. Gửi theo danh sách này thì **KHÔNG cá nhân hóa** (không có tên). **Có thể để trống.**
- **Nhóm liên hệ (16)**: chọn nhóm → **có cá nhân hóa** (dùng được tên KH).
- **Link rút gọn (17)**, **Chế độ Gateway (18)**, **Khe cắm SIM (19)**, **Thiết bị di động (20)**, **Quyền ưu tiên (21)**: như 5.1.
- **Mẫu tin nhắn (22)**: chọn mẫu đã tạo (CÔNG CỤ → MẪU TIN NHẮN) → tự điền vào Thông điệp.
- **Thông điệp (23)**: Spintax + **Mã ngắn**: `{{contact.name}}, {{contact.number}}, {{group.name}}, {{date.now}}, {{date.time}}, {{unsubscribe.command}}, {{unsubscribe.link}}`.
- **GỬI (24)** → chạy ngay.
- Nút **EXCEL** cạnh GỬI HÀNG LOẠT: tạo chiến dịch từ file Excel (chi tiết ở bài EN 150, xem 5.4).
- Danh sách chiến dịch (EN 150): cột Created, Name, Gateway (thiết bị), Contacts, Status (vd "0 of 3 processed", "Completed"); nút **PLAY** (chạy lại), **PAUSE** (tạm dừng), **TRASH** (xóa).
- **[CHƯA RÕ]** Bài VN không ghi "Nhóm liên hệ" chọn được nhiều nhóm hay chỉ 1.

### 5.3 Lập lịch chiến dịch – Hình 3
Đường dẫn: **TIN NHẮN (25) → LẬP KẾ HOẠCH (26) → LẬP LỊCH GỬI SMS (27)** → form "Lập lịch gửi SMS":
- **Tên (28)**; **Lịch trình (29)** (bài ghi nhầm là 19) – ngày giờ bắt đầu, dạng `06/26/2025 12:00 AM`; **Thiết bị di động (30)**; **Số điện thoại di động (31)**; **Nhóm liên hệ (32)**; **Link rút gọn (33)**; **Ngày lặp lại (34)** – số ngày sau đó chiến dịch chạy lại (mặc định `0`); **Chế độ Gateway (35)**; **Khe cắm SIM (36)**; **Mẫu tin nhắn (37)**; **Thông điệp (38)**; nút **LỊCH TRÌNH (39)**.
- Form này **không có ô Quyền ưu tiên** và mã ngắn **không có** `{{unsubscribe.*}}` (theo ảnh).
- **[SUY LUẬN]** "Ngày lặp lại = 0" = không lặp; `N` = lặp mỗi N ngày (bài không nói rõ lặp mãi hay 1 lần).
- Danh sách lịch (EN 151): sửa (bút chì), xóa (thùng rác).

### 5.4 (Bổ sung từ EN 150) Chiến dịch từ file Excel – nút EXCEL
Form "Bulk SMS by Excel": Campaign Name (20), Excel File + **Sample File: Download (21)**, Choose File (22), Shortener (23), Gateway Mode (24), Mobile Device (25), Template (26), Message (27), SEND (28). **Không có ô Sim Slot / Priority** – lấy từ file.
File mẫu `sms_sample.xlsx` (ảnh) cột:
| phone | sim | priority | custom_var1 | custom_var2 |
|---|---|---|---|---|
| +639206150514 | 2 | 1 | jake sword | engineer |
| +639206150514 | 2 | 1 | mike mendoza | driver |
| +639206150514 | 2 | 0 | renielle cruz | lawyer |
- `sim`: 1 = SIM1, 2 = SIM2; `priority`: 0 = KHÔNG, 1 = CÓ; `custom_var1/2`: dữ liệu tùy chỉnh (tên, điểm...). Ví dụ trong ảnh dùng số Philippines (+63).
- **[CHƯA RÕ]** có thêm được custom_var3, 4… không (bài 124 nói "trộn từ nhiều cột" → có thể có; cần xem video).

### 5.5 Thống kê (bài 117 liệt kê nhưng không trình bày; chi tiết ở bài 125)
TIN NHẮN → GỬI (danh sách tin đã gửi, lọc/tìm, trạng thái thành công/thất bại/chờ, xuất Excel/PDF, làm mới, xóa); TIN NHẮN → NHẬN (tin KH phản hồi). Bài 126: gửi lại SMS lỗi.

## 6. Bài 121 – Chiến dịch "cực động" – nâng cao 1
URL: https://support.smsmk365.com/post/121/huong-dan-tao-chien-dich-sms-marketing-cuc-dong-phan-nang-cao-1
- **Mục đích [SỰ KIỆN]**: chiến dịch nội dung "cực động" dùng dữ liệu KH đã tổ chức theo nhóm (bài 115/116), cá nhân hóa để tránh bị nhà mạng coi là SPAM. Điều kiện: đã cài app (118) và tổ chức dữ liệu (115).
- **Nội dung: CHỈ VIDEO. CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=djPyBWjxxVc** – tiêu đề "Hướng dẫn sử dụng phần mềm sms marketing - Phần nâng cao 01".
- **[SUY LUẬN]**: theo bài 114 đây là phần "Bộ ToolKits" (utp.smsmk365.com) – công cụ khác giao diện web chính; có thể kết hợp spintax + tên KH.

## 7. Bài 122 – Chiến dịch "cực động" – nâng cao 2
URL: https://support.smsmk365.com/post/122/huong-dan-tao-chien-dich-sms-marketing-cuc-dong-phan-nang-cao-2
- **Mục đích**: nội dung cực động với data KH lấy **trực tiếp từ file Excel nhiều cột**, đưa các cột vào nội dung tin.
- **CHỈ VIDEO. CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=PEtPqPYZibI** – tiêu đề "Tạo chiến dịch sms marketing với nội dung CỰC ĐỘNG và thực thi chiến dịch".

## 8. Bài 123 – Chiến dịch chúc mừng sinh nhật KH
URL: https://support.smsmk365.com/post/123/huong-dan-tao-chien-dich-sms-marketing-chuc-mung-sinh-nhat-khach-hang
- **Mục đích**: chiến dịch chúc mừng sinh nhật với data KH từ file Excel.
- **CHỈ VIDEO. CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=bNjd1D-gefE** – tiêu đề "Tạo chiến dịch sms marketing để chúc mừng sinh nhật khách hàng".
- **[CHƯA RÕ]**: không có chữ nào cho biết có cột ngày sinh / tự kích hoạt đúng ngày, hay chỉ là lọc Excel thủ công + lập lịch. Danh bạ trên web (bài 116) **không có cột ngày sinh**.

## 9. Bài 124 – Nội dung trộn từ nhiều cột Excel
URL: https://support.smsmk365.com/post/124/tao-chien-dich-sms-marketing-voi-noi-dung-duoc-tron-tu-nhieu-cot-trong-file-excel
- **Mục đích**: trộn nội dung từ nhiều cột Excel; phù hợp gửi thông báo lương, bảng giá, khuyến mại, kết quả học tập/thi/tuyển dụng.
- **CHỈ VIDEO. CẦN XEM YOUTUBE: https://www.youtube.com/watch?v=UGG6iZ_bfkw** – tiêu đề "Hướng dẫn tạo Chiến dịch Sms marketing với nội dung được trộn từ nhiều cột trong file Excel".
- Phần gần nhất có chữ: form EXCEL trong web chính với `{{custom.YourVariable}}` + cột `custom_var1`, `custom_var2` (mục 5.4).

## 10. Bài "Mẫu tin nhắn" – EN 148 (không có bản tiếng Việt)
URL: https://support.smsmk365.com/post/148/how-to-add-sms-whatsapp-content-templates
(Không bài VN nào trong danh sách link tới bài này; bài 117 chỉ nói "CÔNG CỤ → MẪU TIN NHẮN". Đây là bài duy nhất về mẫu/spintax tìm được trên site.)
- **Đường dẫn [SỰ KIỆN]**: khu **TOOLS/CÔNG CỤ → TEMPLATES/MẪU TIN NHẮN (1)**. Danh sách: Template Name, Template Format, Options; nút **ADD TEMPLATE (2)**, bút chì sửa (3), thùng rác xóa (4); tìm kiếm.
- Form "Add Template": **Name (5)** (vd "Announcement"), **Format (6)** – nội dung, dùng Spintax; gợi ý Spintax + Shortcodes `{{contact.name}}, {{contact.number}}, {{group.name}}, {{date.now}}, {{date.time}}, {{unsubscribe.command}}, {{unsubscribe.link}}`; **SUBMIT (7)**.
- Ví dụ đầy đủ xem mục 0. Mẫu dùng chung cho SMS và WhatsApp.

---

## 11. Giới hạn / khuyến cáo vận hành (từ FAQ bài 129 – bổ sung)
- **Mỗi SIM nên gửi tối đa 300 SMS/ngày**, với điều kiện nội dung được trộn khác nhau cho mỗi người nhận.
- Khoảng nghỉ giữa 2 tin: **1,5–2 phút** (để bộ lọc tưởng gửi tay).
- Không giới hạn số SIM. Chỉ hỗ trợ **Android** (không iOS).
- Nhiều chiến dịch trên cùng 1 điện thoại **không chạy đồng thời**; chiến dịch lập trước/có ưu tiên chạy trước, còn lại xếp hàng.
- Giá: 800k/năm (Basic), 2,5tr/năm (Business); có thể dùng miễn phí để trải nghiệm; phí SMS do nhà mạng trừ (ví dụ gói Viettel).
- App cần Wi-Fi/3G/4G và phải đang mở.

## 12. Danh sách nội dung CHỈ CÓ YOUTUBE (cần xem video)
| Bài | Video | Tiêu đề video |
|---|---|---|
| 119 (ĐT) | https://www.youtube.com/watch?v=spkSWoPMl1E | Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P1 |
| 119 (PC) | https://www.youtube.com/watch?v=oCHVXjT_lAw | ... - P1 - Phiên bản 3.0 |
| 118 phần I | https://www.youtube.com/watch?v=zLm8VefCUtA | Phần mềm sms marketing và whatsapp marketing - Phần 2 Tải và cài đặt App điện thoại |
| 115 | https://www.youtube.com/watch?v=VUeOw1DjvRM | ... - P3 (giao diện cũ) |
| 116 phần II (ToolKits) | https://www.youtube.com/watch?v=QRWz9j1tCdA | ... - P4 |
| 121 | https://www.youtube.com/watch?v=djPyBWjxxVc | Hướng dẫn sử dụng phần mềm sms marketing - Phần nâng cao 01 |
| 122 | https://www.youtube.com/watch?v=PEtPqPYZibI | Tạo chiến dịch sms marketing với nội dung CỰC ĐỘNG và thực thi chiến dịch |
| 123 | https://www.youtube.com/watch?v=bNjd1D-gefE | Tạo chiến dịch sms marketing để chúc mừng sinh nhật khách hàng |
| 124 | https://www.youtube.com/watch?v=UGG6iZ_bfkw | Hướng dẫn tạo Chiến dịch Sms marketing với nội dung được trộn từ nhiều cột trong file Excel |
(117 có video W4GG2xx1aa8 nhưng chữ + ảnh đã đủ; 119 và 118-phần-I đã được bù một phần bằng bài EN 144/145.)

## 13. Điểm chưa rõ cần xác minh
1. Đơn vị và giá trị khuyến nghị cho "Gửi khoảng thời gian tối thiểu/tối đa" (ảnh 5/10 vs FAQ 1,5–2 phút).
2. Cú pháp đúng của biến Excel: `{{custom.var1}}`? `{{custom.custom_var1}}`? Số cột custom tối đa.
3. Spintax lồng nhau / escape; giới hạn độ dài tin; tin dài có tách nhiều SMS không; tiếng Việt có dấu (Unicode) tính ký tự thế nào.
4. "Ngày lặp lại" lặp vô hạn hay một lần; lịch chạy theo timezone nào.
5. Cột `groups` khi import: có kèm `#` không; "Nhóm liên hệ" trong chiến dịch chọn được nhiều nhóm không.
6. Chiến dịch sinh nhật: cơ chế ngày sinh (không có trong chữ).
7. Ý nghĩa "Quyền ưu tiên" trong mục Cài đặt đối tác (bài 118, ô 15) không được giải thích.
8. Bài 117 có lỗi đánh số (hai ô số 8; "LỊCH TRÌNH (19)" thực tế là 29; nút GỬI ghi là LƯU).
