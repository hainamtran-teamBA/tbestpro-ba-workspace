# SmsMk365: nghiên cứu tài liệu nhà cung cấp (phục vụ tích hợp với Tizi CRM)

Ngày đọc: 13/11/2026. Nguồn chính là support.smsmk365.com (bài 114 đến 166, đã đọc toàn bộ text và các ảnh chụp màn hình quan trọng), smsmk365.com, utp.smsmk365.com.
Ảnh đã tải về: `...\scratchpad\smsmk-C\img\`. HTML gốc: `...\smsmk-C\html\`. Text từng bài: `...\smsmk-C\txt\<id>.txt`.

Quy ước: **[FACT]** là điều tài liệu hoặc ảnh chụp ghi rõ. **[SUY LUẬN]** là điều tôi suy ra, chưa được nhà cung cấp xác nhận.

---

## 0. Kết luận nhanh

- SmsMk365 gồm **2 hệ thống tách rời nhau**:
  1. **Core**: `smsmk365.com/dashboard`. Đây là SMS gateway trên điện thoại Android, kèm WhatsApp, API, Webhooks, Actions, Flows, AI keys và AI plugins.
  2. **Toolkits**: `smsmk365.com/toolkits/vn/` và landing page `utp.smsmk365.com`. Đây là hệ PHP riêng, có đăng nhập riêng. Nó chứa phễu/form đăng ký, vòng quay may mắn, khảo sát, mẫu EMAIL spintax, "Máy chủ gửi Mail", lọc số theo nhà mạng, quét SĐT từ comment Facebook và website, cùng "Trung tâm CSKH".
- **[SUY LUẬN, độ tin cậy rất cao] Core là bản rebrand của "Zender" của TitanSystems** (script SaaS trên CodeCanyon). Bằng chứng:
  - HTML trang chủ smsmk365.com có `window.titansys_echo = "https://echo.anycdn.link";`.
  - Danh sách quyền của API key trong ảnh chụp khớp đúng tên quyền của Zender: `sms_send, sms_send_bulk, wa_send, wa_send_bulk, get_subscription, get_sms_pending, get_wa_pending, get_sms_received, get_wa_received, get_sms_sent, get_sms_campaigns, get_wa_sent, get_wa_campaigns, get_contacts, get_groups, get_notifications, get_wa_accounts, get_wa_groups, get_devices, create_whatsapp, delete_contact, delete_group, delete_sms_sent, delete_sms_campaign, delete_wa_sent, delete_wa_campaign, delete_sms_received, delete_wa_received, delete_notification`.
  - Gọi `GET https://smsmk365.com/api/get/subscription` (không có tham số) trả về `{"status":400,"message":"Invalid Parameters!","data":false}`. Gọi `GET /api` trả về `{"status":401,"message":false,"data":false}`. Cả hai đúng format JSON của Zender.
  - Giao diện có USSD, Notifications, Hosts > Android/WhatsApp, Partnership/Credits/Redeem, "SMSMK365_WASERVER", Flow Builder, AI Keys (OpenAI) và AI Plugins (JSON schema). Đây là bộ tính năng của Zender 3.x.
- **Tài liệu API chính thức** nằm ở `smsmk365.com/dashboard/docs/...` (menu CÁC TÀI LIỆU > API / WEBHOOKS / ACTIONS / ANDROID / PARTNERSHIP, hoặc nút DOCS). **Mọi đường dẫn docs đều chuyển về trang login**, nên tôi không đọc được (theo yêu cầu, tôi không đăng nhập). Support site **không công bố endpoint, tham số hay payload nào**.

---

## 1. Năng lực sản phẩm [FACT]

| Nhóm | Nội dung |
|---|---|
| SMS | Gửi từ SIM của điện thoại Android cài App SmsMk365 ("Máy chủ Android"). Hỗ trợ nhiều máy và nhiều SIM, chọn SIM1/SIM2, đặt khoảng nghỉ ngẫu nhiên min/max để tránh bị khóa SIM, có hàng đợi ưu tiên. Không hỗ trợ iPhone. Khuyến nghị tối đa khoảng 300 SMS/ngày/SIM, nghỉ 1,5–2 phút giữa hai tin. |
| Chế độ Gateway | "THIẾT BỊ" là gửi bằng máy của mình. "TÍN DỤNG" là thuê máy hoặc SIM của "Đối tác" (trả bằng credit nạp qua PayPal). |
| Nhận SMS | Trong cấu hình máy Android, bật "Nhận tin nhắn SMS = CHO PHÉP" thì mọi SMS gửi đến điện thoại sẽ được đẩy lên hệ thống. Cũng có thể lấy notification của app khác theo package name (ví dụ `com.facebook.orca`). |
| WhatsApp | Gửi nhanh, chiến dịch gửi ngay hoặc theo lịch, tìm nạp nhóm WhatsApp (copy địa chỉ nhóm, xuất thành viên ra Excel), nhận chat ("Receive Chats" ENABLE). Quảng cáo là "0đ/tin". |
| Chiến dịch | Gửi tới danh sách số, Nhóm liên hệ hoặc file Excel. Có lập lịch và "Ngày lặp lại". Hỗ trợ Spintax. Shortcode gồm `{{contact.name}} {{contact.number}} {{group.name}} {{date.now}} {{date.time}} {{unsubscribe.command}} {{unsubscribe.link}}`. Có Mẫu tin nhắn (Templates) và báo cáo (Tin nhắn > Gửi, xuất Excel). |
| Hủy đăng ký | Menu LIÊN HỆ > ĐÃ HỦY ĐĂNG KÝ. Dùng mã STOP hoặc link hủy qua shortcode. |
| USSD | Có menu (Android > USSD). |
| Actions | Hook (gọi URL ngoài) và Tự động trả lời theo từ khóa (xem mục 4). |
| Flows | Kịch bản kéo-thả gồm các block: SMS SOURCE / WHATSAPP SOURCE, CONDITION, SEND TEXT/IMAGE/VIDEO/AUDIO/DOCUMENT, **SAVE CONTACT**. Mỗi flow chỉ có 1 source. |
| AI | Menu TRÍ TUỆ NHÂN TẠO > KHÓA AI: Provider (OpenAI được khuyến nghị), Initial Prompt, Post Prompt, Vision. **CÁC PLUGIN**: Name, Plugin Endpoint (URL của mình), Plugin Schema (JSON function-calling, ví dụ `getTime`). Nghĩa là bot AI trả lời SMS/WA có thể gọi API của chính mình (ví dụ tra cứu đơn hàng). Bài 163 về AI **chỉ có 1 ảnh, không có text**. |
| WordPress | Plugin WooCommerce (tải từ Tổng quan > nút PLUGIN > WooCommerce). Gửi SMS/WA khi có đơn mới hoặc đổi trạng thái. Tag `[shop_name] [order_id] [order_amount] [order_status] [order_product] [payment_method] [bank_details] [billing_first_name] [billing_last_name] [billing_phone] [billing_email] [billing_address] [billing_city] [billing_state] [billing_country] [billing_postcode] [billing_company]`. Tương thích Contact Form 7, Dokan, WCFM, MemberPress, FluentCRM, Jetpack CRM, Groundhogg, LatePoint... |
| Partner | Cho thuê điện thoại của mình để người khác gửi SMS, nhận tiền qua PayPal. |
| Toolkits (hệ riêng) | Phễu/Form đăng ký (nhúng vào website hoặc landing page), Vòng quay may mắn, Khảo sát (chỉ gói Business), Mẫu EMAIL Spintax, "Máy chủ gửi Mail", lọc số theo nhà mạng VN, lọc số có Zalo, quét SĐT từ comment Facebook, quét SĐT trên website, quét Google Maps / Trang Vàng / 9 mạng xã hội (link sang khotailieuthucte.com), xóa hàng loạt, Trung tâm CSKH (gọi điện, chat Zalo/Viber). |

### Bảng giá (utp.smsmk365.com) [FACT]
- **Trial 0đ (1 tháng)**: 1 máy, 50 SĐT, 15 SMS gửi/ngày, 1 WA, 30 WA/ngày, 1 API key, 1 webhook, 1 phễu, 5 mẫu SMS spintax, 5 mẫu EMAIL spintax, 1 máy chủ mail, 1 vòng quay, không có khảo sát. **Nội dung SMS bị chèn quảng cáo.**
- **Startup 1.100.000đ/năm**: 1 máy, 1.500 SĐT, 1.500 SMS/ngày, 1 WA, 1.500 WA/ngày, 3 API key, 3 webhook, 5 phễu, 5 máy chủ mail, không có khảo sát.
- **Business 2.750.000đ/năm**: 3 máy, 25.000 SĐT, 5.000 SMS/ngày, 3 WA, 5.000 WA/ngày, 15 API key, 15 webhook, 10 phễu, mẫu và máy chủ mail không giới hạn, tích hợp vòng quay với form, có khảo sát.
- Thanh toán bằng chuyển khoản vào tài khoản cá nhân. Hotline/Zalo 0945.062.863. (Bài FAQ 129 cũ ghi 800k và 2,5tr/năm, đã lỗi thời.)
- **Lưu ý cho Philippines**: hạn mức "số SĐT khách hàng" (1.500 hoặc 25.000 contact) có thể là nút thắt với tệp đơn COD lớn. [SUY LUẬN] Chưa rõ hạn mức này tính trên contact đã lưu hay cả số gửi qua API.

---

## 2. Thiết lập và đường dẫn menu [FACT]

Menu dọc (bản mới), xem ảnh `img/p159_how-to-get-api-code-20250805.png`:
- BẢNG ĐIỀU KHIỂN: Tổng quan, Tin nhắn (SMS), WhatsApp, Máy chủ (Hosts) > Android / WhatsApp
- ANDROID: USSD, Thông báo
- LIÊN HỆ: Liên hệ đã lưu (Saved), Danh sách nhóm (Groups), Đã hủy đăng ký
- CÔNG CỤ: Khóa API, Webhooks, Hành động, Mẫu tin nhắn, Flows (Kịch bản tự động), Ghi nhật ký (Logger)
- TRÍ TUỆ NHÂN TẠO: Khóa AI, Các Plugin
- CÁC TÀI LIỆU: API, Webhooks, Actions, Android, Partnership

**Cài App Android** (bài 118, 145): việc tải, cài app và kết nối app với web **chỉ được hướng dẫn bằng video** (zLm8VefCUtA, XO1qpqA9B6w). Sau đó vào MÁY CHỦ > ANDROID > bút chì để chỉnh: Tên thiết bị, Nhận SMS (bật/tắt), Khoảng gửi ngẫu nhiên min/max, Applications (package name để lấy notification), Trạng thái đối tác / Quốc gia / Tỷ lệ / Khe SIM. Biểu tượng số 3 dùng để copy **Device Unique ID** (dùng cho API).

**WhatsApp** (bài 133, 146), liên kết bằng **QR "Linked devices"** (cơ chế WhatsApp Web / multi-device):
1. MÁY CHỦ > WHATSAPP > THÊM TÀI KHOẢN.
2. Chọn server `SMSMK365_WASERVER`, bấm LIÊN KẾT TÀI KHOẢN. Màn hình hiện QR, chỉ có **15 giây để quét**.
3. Trên điện thoại: WhatsApp > ⋮ > Linked devices > Link a device, rồi quét QR.
4. Danh sách tài khoản có các nút: refresh, relink, copy **Unique ID** (dùng cho chiến dịch và API), sửa (Receive Chats, Random Send Interval), xóa.
- [SUY LUẬN] Đây là WhatsApp **cá nhân/Business app** qua giao thức Web (kiểu Baileys hoặc whatsapp-web.js), **không phải WhatsApp Business Cloud API chính thức**. Rủi ro bị khóa số khi gửi hàng loạt, và vi phạm điều khoản của WhatsApp. Bài 133 nói server WhatsApp ra lệnh "cho App điện thoại", nhưng ảnh cho thấy đó là server WA riêng (node). Trên CodeCanyon có người mua phản ánh Zender liên kết WA trên Android không ổn định.

**Khóa API** (bài 130, 159): CÔNG CỤ > KHÓA API > THÊM KHÓA. Nhập Tên và chọn Quyền (multi-select) rồi LƯU. Nút copy "Copy API secret to clipboard". Nút DOCS mở tài liệu (phải đăng nhập).

**Webhook** (bài 130, 160): CÔNG CỤ > WEBHOOKS > THÊM WEBHOOK. Nhập Tên, **Nhận sự kiện** (mặc định "TIN NHẮN"/SMS; [SUY LUẬN] các lựa chọn khác như ở Zender là WhatsApp, USSD, Notifications), và URL (ví dụ `http://yourdomain.com/hook_listen.php`). Tài liệu ghi: "Whenever Receive Events occurs, it will transmit all data to your URL via **POST** method." Ví dụ trong bài: khách nhắn tin đến điện thoại thì hệ thống POST nội dung tin sang website.

**Hành động, phần Hook** (bài 130, 161): CÔNG CỤ > HÀNH ĐỘNG > HOOK.
- Nguồn: TIN NHẮN | WHATSAPP.
- Biến cố: ĐANG GỬI (ON SEND) | KHI NHẬN (on receive).
- Cấu trúc liên kết (URL template), ví dụ: `http://someremoteurl.com/test.php?phone={{phone}}&message={{message}}&time={{date.now}}`. Shortcode: `{{phone}} {{message}} {{date.now}} {{date.time}}`.
- [SUY LUẬN] Hook gọi URL bằng GET với query string đã thay shortcode. Dữ liệu chỉ có SĐT, nội dung và thời gian, không có id tin hay device.

**Hành động, phần Tự động trả lời** (bài 130, 161): Tên, Nguồn (SMS/WA), Điều kiện so sánh (ví dụ "CHỨA CÁC TỪ KHÓA"), Thiết bị, Khe SIM, Từ khóa kích hoạt, Tin nhắn phản hồi (spintax và shortcode như trên).

**Flows** (bài 142, 162): CÔNG CỤ > FLOWS > TẠO KỊCH BẢN. Kéo SOURCE (chọn device hoặc WA account), nối sang CONDITION (Loại điều kiện + Giá trị từ khóa), nối sang SEND TEXT (Text Message, Priority), có thể thay bằng SEND IMAGE/VIDEO/AUDIO/DOCUMENT, rồi LƯU. Có block **SAVE CONTACT**. [SUY LUẬN] Block này lưu người nhắn vào nhóm liên hệ. App mobile phải bật thì mới tự trả lời được SMS.

**Nhóm và khách hàng** (bài 115, 116, 147): LIÊN HỆ > DANH SÁCH NHÓM > THÊM NHÓM. Cột ID nhóm hiển thị trong bảng (dùng cho file import và API). Thêm thủ công tại LIÊN HỆ ĐÃ LƯU > THÊM LIÊN HỆ (SĐT kèm mã quốc gia, có thể chọn nhiều nhóm).

---

## 3. API: những gì biết được

### 3.1 [FACT] từ SmsMk365
- Base: `https://smsmk365.com/api/...`. Endpoint đang hoạt động và trả JSON `{"status":..,"message":..,"data":..}`.
- Xác thực bằng **API secret** (copy từ trang Khóa API), giới hạn theo danh sách quyền.
- Bài 130 nói API key cho phép "tạo nhóm, tổ chức danh sách khách hàng từ chính website", "tạo và thực thi chiến dịch SMS/WhatsApp ngay từ website".
- Device Unique ID (Hosts > Android) và WhatsApp Unique ID (Hosts > WhatsApp) "dùng cho API, Hook".

### 3.2 [SUY LUẬN] API của Zender, suy ra từ SDK không chính thức `limon/laravel-zender` (GitHub limonhassan606/laravel-zender, tự nhận phủ "54 endpoints")
**Chưa kiểm chứng trên SmsMk365. Cần đăng nhập để đọc `/dashboard/docs/api` và xác nhận.**
- Secret truyền qua tham số `secret` (query với GET, form-data với POST). URL dạng `{site}/api/{endpoint}`.
- `POST /api/send/sms`: `secret, mode` ("devices" | "credits"; SDK ghi "gateways"), `phone` (E.164), `message` (có spintax), `device` (Device Unique ID, khi mode=devices), `sim` (1|2), `gateway`, `priority` (1 = gửi ngay, 2 = vào hàng đợi), `shortener`.
- `POST /api/send/sms.bulk`: `mode, campaign, message, numbers` (phân tách bằng dấu phẩy), `groups` (ID nhóm, phân tách bằng dấu phẩy), `device, sim, gateway, priority, shortener`.
- `POST /api/send/whatsapp`: `account` (WA Unique ID), `recipient` (SĐT hoặc địa chỉ nhóm), `message`, `type` (text|media|document), `priority`, `media_file | media_url, media_type` (image|audio|video), `document_file | document_url, document_name, document_type`.
- `POST /api/send/whatsapp.bulk`: `recipients`, `groups`, ...
- `GET /api/validate/whatsapp?unique=&phone=`: kiểm tra số có dùng WhatsApp hay không.
- `GET /api/get/sms.received`, `get/wa.received` (`limit, page`), `get/sms.sent`, `get/sms.pending`, `get/sms.campaigns`, `get/sms.message?id=&type=`, các bản `wa.*` tương tự, `get/wa.accounts`, `get/wa.groups?unique=`, `get/wa.group.contacts`, `get/wa.servers`, `create/wa.link?sid=`, `create/wa.relink`, `get/wa.qr?token=`, `get/devices`, `get/credits`, `get/subscription`, `get/earnings`, `get/rates`, `get/shorteners`, `get/notifications`.
- Contacts: `POST /api/create/contact` (`name, phone, groups`), `POST /api/create/group` (`name`), `GET get/contacts`, `get/groups`, `get/unsubscribed`, `delete/contact?id=`, `delete/group?id=`, `delete/unsubscribed?id=`.
- Khác: OTP (`send/otp`, `get/otp?otp=`), USSD, start/stop campaign, các endpoint delete/*.

### 3.3 [SUY LUẬN] Payload webhook của Zender (theo trí nhớ về tài liệu Zender, CHƯA kiểm chứng)
- Gửi HTTP POST dạng form-urlencoded, gồm `secret` (webhook secret để xác thực), `type` ("sms" | "whatsapp" | "ussd" | "notification"), `data[...]`.
- SMS nhận: `data[id], data[rid], data[sim], data[phone], data[message], data[timestamp]`. WhatsApp nhận: `data[id], data[wid], data[phone], data[message], data[attachment], data[timestamp]`.
- **Phải xác nhận lại** ở `/dashboard/docs/webhooks` sau khi đăng nhập. Form tạo webhook trong ảnh chụp **không có ô secret**. [SUY LUẬN] Secret có thể nằm ở trang profile hoặc được sinh tự động.

---

## 4. SMS đến đi vào hệ thống ngoài (Tizi CRM) bằng cách nào

Có 3 đường, đều yêu cầu bật "Nhận tin nhắn SMS" trên máy Android (và bật "Receive Chats" nếu là WA):
1. **Webhook** (CÔNG CỤ > WEBHOOKS, sự kiện TIN NHẮN, URL = endpoint của Tizi). Hệ thống POST toàn bộ dữ liệu ngay khi có tin. [FACT] cơ chế. [SUY LUẬN] trường dữ liệu (mục 3.3). Đây là cách nên dùng.
2. **Hành động Hook** với Biến cố KHI NHẬN: gọi URL template `...?phone={{phone}}&message={{message}}&time={{date.now}}`. [FACT]. Đơn giản, nhưng dữ liệu ít và [SUY LUẬN] không có cơ chế xác thực. Nên kèm token bí mật trong URL.
3. **Polling API** `get/sms.received` và `get/wa.received` với quyền `get_sms_received, get_wa_received`. [FACT] quyền này có tồn tại. [SUY LUẬN] tên endpoint.
- Biến cố ĐANG GỬI (ON SEND) cũng có thể bắn sang Tizi để log trạng thái gửi. [SUY LUẬN] Không thấy tài liệu về webhook delivery report hay báo lỗi gửi.

---

## 5. Cách đưa SĐT khách hàng VÀO SmsMk365

| Cách | Trạng thái | Ghi chú |
|---|---|---|
| Nhập tay | [FACT] | LIÊN HỆ ĐÃ LƯU > THÊM LIÊN HỆ |
| **Import Excel** | [FACT] | LIÊN HỆ ĐÃ LƯU > NHẬP HÀNG LOẠT > tải TỆP MẪU. Cột: `phone` (có mã quốc gia, ví dụ +63), `groups` (ID nhóm, cách nhau bằng dấu phẩy), `name`. Bản Toolkits có hướng dẫn bằng video. |
| Gửi chiến dịch thẳng từ file Excel | [FACT] | Nút EXCEL cạnh GỬI HÀNG LOẠT (không cần lưu contact). Có trộn nội dung theo nhiều cột Excel (chỉ có video). |
| Dán danh sách số vào chiến dịch | [FACT] | Mỗi dòng một số, không cá nhân hóa được. |
| **API** `create/contact` | [FACT] quyền tồn tại (bài 130 nói "tạo nhóm, tổ chức data từ website"). [SUY LUẬN] tham số `name, phone, groups`. | Cách phù hợp nhất để Tizi đẩy đơn COD sang. Hoặc bỏ qua contact, gọi thẳng `send/sms` cho từng đơn. |
| **Webhook từ form website** | [FACT] được mô tả (bài 130, ví dụ 1) | Bài 130 viết "tích hợp WebHook vào Form đăng ký trên website thì thông tin khách tự nhảy vào NHÓM". [SUY LUẬN] Thực chất là website gọi API create/contact, vì Webhook của Zender là chiều đi ra. |
| **Phễu/Form đăng ký (Toolkits)** | [FACT] | Nhúng bằng `<embed src="https://smsmk365.com/toolkits/vn/frmform-register-visitors?fid=...">`. Các trường: Họ tên, SĐT, Email, Công ty, Chức vụ, Ngày sinh, Giới tính, Địa chỉ, Câu hỏi, captcha (bật/tắt từng trường). Có phản hồi tự động bằng email và SMS sau khi điền. Cách tạo phễu **chỉ có video**. [SUY LUẬN] Dữ liệu nằm trong Toolkits, chưa rõ có tự đồng bộ sang nhóm của Core hay không. |
| Vòng quay may mắn (Toolkits) | [FACT] có | Gói Business tích hợp được với Form đăng ký. **Chỉ có video.** |
| Khảo sát (Toolkits) | [FACT] có trong bảng giá (chỉ gói Business) | **Không có tài liệu hay video nào.** |
| **WordPress / WooCommerce plugin** | [FACT] | Gửi thông báo đơn hàng tự động. [SUY LUẬN] Plugin gọi API send, không chắc có lưu contact. Không áp dụng nếu shop không chạy WooCommerce. |
| Flow block SAVE CONTACT | [FACT] block tồn tại | [SUY LUẬN] Lưu số của người nhắn đến vào nhóm. |
| Quét comment Facebook | [FACT] có (Toolkits) | **Chỉ có video** (58MJW9gyYZ4). |
| Quét SĐT trên website, Google Maps, Trang Vàng, MXH | [FACT] có (Toolkits hoặc tool bên ngoài khotailieuthucte.com) | Hướng tới thị trường VN. |
| Xuất thành viên nhóm WhatsApp ra Excel | [FACT] | WHATSAPP > DANH SÁCH NHÓM > icon 6 |

---

## 6. Email hàng loạt, máy chủ mail, spintax email

- [FACT] Bảng giá có "Mẫu Nội dung EMAIL Spintax" và "Máy chủ gửi Mail" (Trial 1, Startup 5, Business không giới hạn). Form phễu có "phản hồi tự động qua email".
- **Không có bài viết, ảnh hay video nào** trên support site hướng dẫn cấu hình máy chủ mail (SMTP) hoặc gửi email hàng loạt. [SUY LUẬN] Các tính năng này nằm trong Toolkits (`smsmk365.com/toolkits/vn/`, sau trang login), không nằm trong Core (Zender không có email marketing). Cần demo hoặc hỏi nhà cung cấp.

---

## 7. Những mục CHỈ có YouTube (không có hướng dẫn bằng chữ hoặc ảnh)

| Chủ đề | Link | Tiêu đề video |
|---|---|---|
| Tạo Form đăng ký / **Phễu** | https://www.youtube.com/watch?v=h_bxmlNbrEE | Cách xây dựng PHỄU BÁN HÀNG cực đặc biệt |
| **Vòng quay may mắn** | https://www.youtube.com/watch?v=OVr1mpoGQyQ | Hướng dẫn cách làm vòng quay may mắn online cực dễ dàng |
| **Quét SĐT từ comment Facebook** | https://www.youtube.com/watch?v=58MJW9gyYZ4 | Hướng dẫn Quét thông tin của người đăng ký từ comment facebook |
| Đổi tên thiết bị + khoảng gửi ngẫu nhiên | https://www.youtube.com/watch?v=7zv1TIuJoxs | Cách đổi tên thiết bị điện thoại và thiết lập thời gian gửi sms marketing ngẫu nhiên |
| Gỡ App, xóa thiết bị | https://www.youtube.com/watch?v=aIzF4E9s0k4 | Hướng dẫn cách gỡ APP ra khỏi điện thoại và xóa thông tin thiết bị di động khỏi Hệ thống |
| Tải, cài, kết nối App Android (VN) | https://www.youtube.com/watch?v=zLm8VefCUtA | Phần mềm sms marketing và whatsapp marketing - Phần 2 Tải và cài đặt App điện thoại |
| Tải, cài, kết nối App Android (EN) | https://www.youtube.com/watch?v=XO1qpqA9B6w | How to install mobile App to send bulk Sms & Whatsapp from SmsMk365.Com? |
| Tạo tài khoản | https://www.youtube.com/watch?v=oCHVXjT_lAw , https://www.youtube.com/watch?v=spkSWoPMl1E | Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P1 (bản 3.0 và bản cũ) |
| Nội dung "cực động" nâng cao 1 | https://www.youtube.com/watch?v=djPyBWjxxVc | Hướng dẫn sử dụng phần mềm sms marketing - Phần nâng cao 01 |
| Nội dung "cực động" từ Excel | https://www.youtube.com/watch?v=PEtPqPYZibI | Tạo chiến dịch sms marketing với nội dung CỰC ĐỘNG và thực thi chiến dịch |
| SMS chúc mừng sinh nhật | https://www.youtube.com/watch?v=bNjd1D-gefE | Tạo chiến dịch sms marketing để chúc mừng sinh nhật khách hàng |
| Trộn nội dung từ nhiều cột Excel | https://www.youtube.com/watch?v=UGG6iZ_bfkw | Hướng dẫn tạo Chiến dịch Sms marketing với nội dung được trộn từ nhiều cột trong file Excel |
| Xóa khách hàng hàng loạt | https://www.youtube.com/watch?v=a9K4W4MbwE0 | Hướng dẫn xóa khách hàng số lượng lớn với sms marketing |
| Import Excel qua Toolkits | https://www.youtube.com/watch?v=QRWz9j1tCdA | Hướng dẫn sử dụng phần mềm gửi sms marketing hàng loạt - P4 |
| Tổng quan | https://www.youtube.com/watch?v=deusEXIbLOA | Hướng dẫn sử dụng phần mềm sms marketing miễn phí chỉ từ 10đ/sms |

Các video đi kèm bài có chữ (không phải chỉ có video): VUeOw1DjvRM (P3, tổ chức dữ liệu), W4GG2xx1aa8 (P5, chiến dịch), embTMMa8tx4 (báo cáo), 7bCdA-axVeY (khôi phục mật khẩu). Hầu hết video quay **giao diện cũ (menu ngang)**.

Các mục **không có tài liệu nào cả**: Khảo sát, Máy chủ mail / Email hàng loạt, Email spintax, payload webhook, tham số API. Bài 163 (AI), 164 và 165 (WP plugin, AI plugin) chỉ có 1 ảnh, không có chữ. "Tài liệu HDSD WhatsApp Marketing" phải liên hệ hotline mới được cung cấp.

---

## 8. Rủi ro và câu hỏi cần hỏi nhà cung cấp (phục vụ Tizi CRM, PH COD)

1. Xin quyền đọc `/dashboard/docs/api` và `/dashboard/docs/webhooks` (hoặc bản PDF) để xác nhận endpoint và payload (mục 3.2, 3.3).
2. Có webhook báo trạng thái gửi (sent/failed/delivered) không, hay chỉ có "ON SEND"? Có `id` để đối soát với mã đơn không?
3. Webhook có secret hoặc chữ ký không? Có retry không?
4. Hạn mức "Số điện thoại khách hàng" có áp dụng cho số gửi qua API `send/sms` (không lưu contact) không?
5. Toolkits (phễu, email, khảo sát) có API hoặc webhook riêng không? Lead từ phễu có tự vào nhóm của Core không?
6. Hỗ trợ SIM Philippines (Globe, Smart, DITO): cần máy Android đặt tại PH, có SIM PH và internet liên tục. Mã quốc gia +63. Rủi ro SIM bị khóa vì spam (300/ngày/SIM là con số khuyến nghị cho mạng VN).
7. WhatsApp không chính thức (liên kết QR): rủi ro bị ban số. Không có template hoặc opt-in chuẩn của Meta.
8. Bản Trial chèn quảng cáo vào nội dung SMS.
9. Pháp lý: SMS marketing từ SIM cá nhân tại PH (Data Privacy Act; quy định chống spam và SIM Registration Act). Cần kiểm tra trước khi dùng cho nhắn tin marketing.
10. Nhà cung cấp là cá nhân hoặc đại lý ở VN (thanh toán vào tài khoản cá nhân), nền tảng là script Zender mua lại. SLA và khả năng tự nâng cấp script phụ thuộc vào TitanSystems.

---

## Nguồn
- https://support.smsmk365.com/post/130/khoa-api-webhook-va-hanh-dong-flows-voi-smsmk365com
- https://support.smsmk365.com/post/131/tai-smsmk365-wordpress-pluggin-mien-phi
- support.smsmk365.com/post/114 đến 166 (đặc biệt 114, 116, 117, 118, 129, 133, 135, 142, 145, 146, 147, 159, 160, 161, 162, 163, 165)
- https://utp.smsmk365.com/ (tính năng, bảng giá, demo phễu)
- https://smsmk365.com/ (dấu vết `titansys_echo`), https://smsmk365.com/api/get/subscription
- Zender (TitanSystems): https://community.titansystems.ph/changelogs/889-zender.html , https://codecanyon.net/comments/31843124
- SDK không chính thức: https://packagist.org/packages/limon/laravel-zender , https://github.com/limonhassan606/laravel-zender
