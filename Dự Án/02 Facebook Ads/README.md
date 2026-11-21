# Dự án 02: Hệ thống hiệu suất Marketing và tài sản nội dung quảng cáo (Facebook Ads)

> Cập nhật: 2026-10-27 | Trạng thái: **Đang thử** (n8n → Slack qua Graph API; Claude + MCP kéo dữ liệu chiến dịch) | Chủ: Hải Nam | Người duyệt: Sếp, trưởng phòng Marketing

## 1. Mục tiêu (bản tóm tắt để trình sếp)
Tự động thu thập và tổng hợp dữ liệu quảng cáo, theo dõi hiệu quả theo **chiến dịch, bài viết, video, đội, cá nhân**; giảm điền báo cáo thủ công; lưu giữ nội dung có giá trị; **cảnh báo đúng người**; báo cáo chung cho lãnh đạo. Thiết kế sẵn để nối dữ liệu bán hàng từ **Tizi 2** ở giai đoạn sau. [Nguồn: bản tóm tắt người dùng dán, 2026-10-27]

## 2. Giá trị và người dùng
| Nhóm | Giúp được gì |
|---|---|
| Giảm tổng hợp thủ công | Tự lấy số, kiểm mã, gom nhóm, tính chỉ số |
| Theo dõi hiệu quả | Đội/cá nhân/post/video nào có kết quả |
| Giữ tài sản nội dung | File gốc, mã video, phiên bản, tác giả, lịch sử dùng |
| Hỗ trợ điều hành | Một nguồn dữ liệu, xem theo phạm vi được cấp |
| Cảnh báo chủ động | Hiệu suất xuống ngưỡng, thiếu mã, đồng bộ lỗi |
Người dùng: Marketing Ads, Content/Creative, Leader/Trưởng phòng, Sếp/Phó giám đốc (xem toàn công ty, không cần quyền sửa cấu hình), Admin.

## 3. MVP đề xuất
> **Một đội không phải điền lại báo cáo hằng ngày; leader xem được số liệu đáng tin cậy; tìm được post tốt và truy ngược về video gốc và người làm nội dung.**
Chưa làm trong MVP: AI/chatbot, tự tối ưu ngân sách, đối soát đầy đủ với bán hàng.

## 4. Hiện trạng thử nghiệm (người dùng nói)
- **n8n** gửi báo cáo về **Slack**, kết nối qua **Facebook Graph API**.
- Đang thử **Claude + MCP** để kéo tất cả bài/campaign.
- Câu hỏi của người dùng: "giờ dùng Claude API và cung cấp cho nó MCP à?" → xem mục 5.

## 4b. Liên quan demo Gani 2 (đọc 2026-10-27)
Demo "Ganico OS v2" có mục **Facebook Ads** nhưng cho **Ganico B2B (tìm lead)**: chi phí quảng cáo theo ngày đồng bộ từ BM (nhập tay kèm ảnh khi API/MCP lỗi), chi phí tài nguyên, lead và phân bổ sale, BXH MKT. **Không có** hiệu suất theo bài/video/đội cho bán lẻ và thư viện nội dung. Phần **trùng** là thu thập chi phí quảng cáo từ Meta: nên chỉ có **một nguồn CPQC** (xem ADR hạ tầng, hỏi anh An: bảng chi phí ads hằng ngày nằm ở Gani 2/Tbestpro OS nào, n8n ghi vào đó). Chi tiết: `thuc-te-cong-ty.md` mục Demo "Ganico OS v2".

## 5. Quyết định kiến trúc cần chốt (ghi ADR)
| Cách | Mô tả | Hợp khi | Rủi ro |
|---|---|---|---|
| **A. Quy trình cố định** | n8n/code lấy dữ liệu từ Graph API → lưu → **tính số bằng code/SQL** → Slack/dashboard | Báo cáo hằng ngày cần đúng và rẻ | Cần bảo trì quy trình khi API đổi |
| **B. Claude + MCP kéo trực tiếp** | Claude gọi công cụ MCP đọc dữ liệu rồi tự tóm tắt | Khám phá tức thời, hỏi đáp | Chậm, tốn token, **số do mô hình tính có thể sai**, khó lặp lại |
| **C. Lai (đề xuất)** | A cho thu thập và tính số; Claude chỉ viết nhận xét, giải thích bất thường; MCP cho phân tích tùy hứng | MVP và về sau | Cần ranh giới rõ |
Ghi chú: Claude API là cách gọi mô hình bằng mã; **MCP là chuẩn để cấp công cụ cho mô hình**, hai thứ không đối lập. Nguyên tắc của Tbestpro OS: **agent không tự tính lại số liệu**. [Ý kiến của tôi; chưa kiểm chứng giới hạn Graph API]
**Rủi ro bảo mật:** token Meta lưu an toàn; nội dung ngoài (tên chiến dịch, bình luận) có thể chứa chỉ dẫn gài (prompt injection), không cho mô hình thực thi hành động từ nội dung đó.
**Hạ tầng:** bản tóm tắt đề xuất Supabase (PostgreSQL + đăng nhập + lưu file) hoặc PostgreSQL trên VPS. Chuẩn công ty là **PostgreSQL trên Google Cloud** (Tbestpro OS). Cần hỏi anh An để tránh tách hạ tầng. Lưu ý: sao lưu cơ sở dữ liệu **không gồm file trong kho lưu trữ**, ảnh/video cần sao lưu riêng.

## 6. Sáu điểm cần bổ sung trước khi code sâu (từ bản tóm tắt)
1. Tách **doanh thu thực** và **doanh thu ước tính** (kết quả Meta × giá chỉ là quy đổi).
2. Tách **video, post, quảng cáo** (một video nhiều post; một post nhiều quảng cáo).
3. Tách **người làm nội dung** và **người chạy quảng cáo**.
4. Quy tắc đếm sản lượng Content: nội dung gốc → phiên bản → bài đăng → đã chạy Ads.
5. Lưu **file thực**, không chỉ link Facebook.
6. Chuẩn hóa mã sản phẩm/video, gán nhân sự, múi giờ, tiền tệ, cập nhật số liệu; quy tắc khi nhân sự chuyển đội.

## 7. Tích hợp Tizi 2
Thiết kế sẵn để nối, nhưng **chưa có tài liệu xác nhận Tizi 2 hỗ trợ giao diện nào**. Hai mức: nối dữ liệu (đơn, trạng thái, hoàn/hủy) và đưa dashboard vào Tizi 2 (phụ thuộc đăng nhập/phân quyền). Thống nhất sớm mã dùng chung: nhân sự, đội, sản phẩm, đơn hàng, nguồn quảng cáo, mã nội dung. (Liên quan: UTM động `utm_campaign={{campaign.id}}`, `utm_content={{ad.id}}` để Tizi biết đơn đến từ quảng cáo nào.)

## 8. Rủi ro
| Rủi ro | Cách giảm |
|---|---|
| Phạm vi phình (báo cáo + thư viện + đối soát + AI) | MVP một đội, một báo cáo |
| Số liệu AI tính sai | Tính bằng code/SQL, AI chỉ diễn giải |
| Tách hạ tầng khỏi chuẩn công ty | Hỏi anh An, ghi ADR |
| Lộ token, nội dung gài chỉ dẫn | Quản lý bí mật; giới hạn quyền công cụ |
| Dữ liệu pilot mất | Sao lưu cơ sở dữ liệu và file từ đầu |

## 9. Câu hỏi mở
1. Chọn **đội nào** và **báo cáo thủ công nào** làm MVP?
2. Công thức và nguồn dữ liệu của báo cáo đó là gì?
3. Ai duyệt cách thu thập (A/B/C) và hạ tầng?
4. Slack đang dùng cho kênh nào; ai nhận cảnh báo?

## 10. Hiệu quả post (bản dùng thử; trước đây gọi "Săn bài win") — cập nhật 2026-11-21
> Trạng thái: **đang thử, chưa duyệt**. Mục đích: giúp bên marketing Facebook xem video viral, quảng cáo và sản phẩm cùng ngành của đối thủ để **tham khảo cách làm** (không phải báo cáo hiệu quả nội bộ như mục 1–9).

### 10.1 Đã chốt (người dùng, 20–21/11/2026)
- Tên ứng dụng: **Hiệu quả post**. Giao diện: thanh bên trái (Video viral, Quảng cáo, Sản phẩm), nền tảng là thẻ gạch dưới có số lượng.
- **Không đặt bộ lọc mặc định**; "bài win" của team (đăng ≤90 ngày, từ 300k lượt xem, kênh <200k follow, không tích xanh) chỉ là cách lọc, kho dữ liệu giữ rộng để tham khảo (kể cả kênh ít follow mà video viral).
- Mốc lượt xem theo nền tảng: TikTok từ 50k/100k/300k/500k/1tr; Facebook Reels dưới 1tr, từ 1tr, từ 50k, từ 100k. Ô "Từ… Đến…" tự nhập cho lượt xem, thích, lưu, chia sẻ, follow.
- Giao diện **không chú thích thừa**; bộ lọc nền tảng không có dữ liệu thì **ẩn**; xếp hạng tuần = 7 ngày, tháng = 30 ngày, xếp từ trên xuống theo lượt xem; số nổi bật của thẻ quảng cáo đổi theo cách xếp (bản nhiều nhất thì "36 bản" to nhất).
- Ảnh bìa: **lưu ngay lúc kéo** (link TikTok hết hạn sau khoảng 1 ngày) và nhúng video khi bấm xem; không tải video về. Video cũ dưới 50k lượt xem không lấy lại ảnh.
- Cờ nước hiện bằng lá cờ (phông cờ kèm theo để Windows cũng hiện đúng).

### 10.2 Nguồn dữ liệu: ScrapeCreators
- Credit tính **theo lần gọi** (khoảng 30 video/lần), **không** theo khoảng ngày hay số trường dữ liệu. [Đã kiểm]
- API **không có bộ lọc lượt xem/follow**; chỉ lọc sau khi kéo. [Đã kiểm một phần, chưa đọc trọn tài liệu]
- **Top Search** (`/v1/tiktok/search/top`, `publish_time=this-week`, `sort_by=most-liked`): 1 credit = 30 video, 30/30 đăng trong 7 ngày, xếp theo thích, 24/30 đúng chủ đề, 10/30 từ 100k xem và kênh nhỏ. [Đã kiểm 1 lần]
- Chi tiết video: `/v2/tiktok/video` (1 credit/video). Dùng để lấy lại ảnh bìa cho video cũ. [Đã kiểm]
- **Không dùng:** Trending Feed và YouTube Trending Shorts (không đúng chủ đề), Popular Hashtags (TikTok đã gỡ trang nguồn).
- Facebook Reels lấy từ **tìm kiếm video theo từ khóa trên Facebook** (không phải trang cá nhân), không có thích/follower. Quảng cáo Facebook Philippines lấy được (tham số nước), kho chính thức của Meta/TikTok không có quảng cáo bán hàng ở Philippines.

### 10.3 Dữ liệu hiện có (đã kéo)
TikTok 1.527 video (65 nước, 5 nước US/ID/TH/MY/PH chiếm 77%); YouTube Shorts 170 (không có thích, follower, nước); Facebook Reels 99; quảng cáo Facebook Philippines 202 (31 của công ty). 59% video TikTok cũ hơn 90 ngày; 104 video đạt đúng định nghĩa bài win; 510 video từ 300k xem và kênh <200k follow. **Chỉ TikTok trả lời đủ "viral + follow + like".** Ảnh bìa: 1.511 ảnh lưu **trên máy**, chưa sao lưu.

### 10.4 Công cụ khác (chưa mua)
Báo cáo gốc: OpenMausBot `Cho-duyet/facebook-ads/bao-cao/` (bản nháp 18/11/2026, giá quy đổi 26.000 đ/USD). **EchoTik**: phân tích TikTok Shop (sản phẩm, shop, creator, video bán được hàng, "ngựa ô"); người dùng thấy có chọn vùng Philippines, dữ liệu Philippines và gói có API chưa kiểm. FastMoss/Kalodata/Tabcut: sản phẩm TikTok Shop; PiPiADS/BigSpy: số tương tác và lượt hiển thị **ước tính** do họ tự tính. [Bên khác nói; chưa công cụ nào được chạy thật với Philippines]

### 10.5 Vị trí file và địa chỉ
- Bản giao diện: `Test Data/ban-that/mau-E.html`; gói đăng: `Test Data/dang-len-e/`; dữ liệu: `Test Data/goi-thu/` và `Test Data/wireframe/` (ảnh bìa, JSON). **Không đẩy GitHub** (đã loại trong `.gitignore`).
- Đang đăng trên Cloudflare Workers tên `hieu-qua-post` (công khai bằng link, **chưa có đăng nhập**, chỉ gửi người trong công ty).

### 10.6 Việc tiếp và câu hỏi mở
1. Chạy Top Search tuần này cho khoảng 16 từ khóa của công ty (khoảng 16 credit).
2. Xem EchoTik sau đăng nhập: vùng Philippines, ngành sức khỏe/làm đẹp, doanh số, gói có API.
3. Cách bảo vệ trang: Cloudflare Zero Trust (mã gửi qua email) hay một mật khẩu chung kiểm ở máy chủ.
4. Chốt màu nhấn; sao lưu ảnh bìa; tab Sản phẩm đang là dữ liệu mẫu.
5. Bên marketing cần học gì: cách làm video/creative hay cách bán sản phẩm (giá, ưu đãi)?
