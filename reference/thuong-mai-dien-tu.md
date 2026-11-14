# Thương mại điện tử (TMĐT)

## 1. Các mô hình kênh
| Mô hình | Đặc điểm | Hệ quả hệ thống |
|---|---|---|
| Website/landing page riêng | Tự chủ dữ liệu khách, tự chạy quảng cáo | Cần form, tracking, nối OMS |
| Sàn (Shopee, Lazada, TikTok Shop) | Sàn giữ khách và tiền, có phí và chính sách | Đồng bộ đơn/tồn qua API hoặc phần mềm trung gian, đối soát ví sàn |
| Social commerce (Facebook, TikTok) | Bán qua chat, livestream, affiliate | Đơn từ chat, nhận diện nguồn, chốt đơn thủ công |
| COD (thu tiền khi giao) | Phổ biến ở nhiều thị trường Đông Nam Á | Rủi ro hoàn cao, phải xác nhận trước, đối soát với ĐVVC |

## 2. Chỉ số cốt lõi
Chi phí trên mỗi đơn (CPA), tỷ lệ chốt, tỷ lệ giao thành công, tỷ lệ hoàn, giá trị đơn trung bình (AOV), ROAS thật (tính trên đơn giao thành công, không phải đơn đặt), biên lợi nhuận sau phí sàn, quảng cáo, vận chuyển, hoàn.

## 3. Điểm nghiệp vụ dễ nhầm
- **Doanh số đặt** khác **doanh số giao thành công**; quảng cáo báo cáo theo đặt, kế toán ghi theo giao.
- Với sàn: tiền thực nhận (income) khác giá bán, vì trừ phí sàn, voucher, vận chuyển; tiền nằm trong **ví sàn** rồi mới rút.
- Phụ thuộc chính sách nền tảng: sản phẩm giảm cân/làm đẹp bị Meta hạn chế chặt, rủi ro khóa tài khoản quảng cáo.
- Dữ liệu cá nhân khách: cần tuân thủ quy định nơi bán.

## 4. Tbestpro
> Nguồn: KT, IT, SMS, HD-BA, Quy trình FB Ads As-Is (2026-10-26); BC-TD, AI-MA, KH-FB-SMS, SMS-PA, UNISMS (2026-11-04). Viết tắt nguồn xem đầu `thuc-te-cong-ty.md`.
- **Kênh (mã kênh):** FB-COD, TTSHOP, SHOPEE, LAZADA, TELESALE, SI-TIZI (sỉ), EXPORT, B2B-PH.
- **Thị trường chủ yếu: Philippines** (8 thị trường còn hoạt động đều ở PH; trước đây có MY, ID, TH, UAE, SA, nay đóng). Phạm vi quốc gia là câu hỏi mở.
- **Khối Marketing Facebook** (khoảng 95 người, 11 team: Alpha gồm Kaido, Smile, Panther, Scale, Skynet, Passion, Climax, Fusion, Mavis, Dream; Evo gồm Carat, Infinity, Dino). **Khối TMĐT** (9 người, chưa có trưởng khối): TikTok (Nova, Beta), Shopee-Lazada (Vega, Rainbow).
- **Sản phẩm:** chủ yếu giảm cân và làm đẹp (Fitgum, gluta, aloe, cà phê...), không có danh mục đầy đủ trong tài liệu.
- **Quy trình quảng cáo 6 bước (4 team):** idea, content và video/ảnh, landing page gắn MKT Link từ Tizi, lên campaign, care ads, đơn về Tizi.
- **Đối soát thủ công hằng ngày** giữa số đơn, doanh thu, hoàn với campaign; số liệu campaign không realtime, có cả đơn hoàn.
- **Tracking:** Tizi nhận UTM chủ yếu là mã mkt, team, content; muốn gắn đủ campaign/adset/ad. Hai khóa nối: ID quảng cáo (qua MKT Link) và số điện thoại (chat với đơn).
- **Chỉ số quan trọng nhất theo tài liệu BA:** chi phí trên mỗi đơn giao thành công và ROAS thật, ghép từ Facebook và Tizi.
- **SMS thông báo:** J&T quét mã, Tizi nhận webhook, gửi qua Semaphore; mẫu dài bị tách 3-4 tin, khoảng 1.000đ/đơn (khoảng 45 triệu VNĐ/tháng); đề xuất mẫu ngắn và gửi Messenger cho đơn chat để giảm khoảng 86%.
- **Khảo sát 2 team (BC-TD, người dùng, 06/10/2026):** Skynet bán chủ yếu Fitgum Coffee và Acai, mkt tự viết content, video KOL/KOC có mã lưu Drive (độc quyền 1-2 tháng), tự xây 2-3 page (2-3 tuần, không mua page), TKQC bên thứ ba, cấu trúc 1 chiến dịch - 1 nhóm - 1 quảng cáo, khoảng 500.000đ/chiến dịch, dừng ngay bài không có đơn. Scale: content từ đội chuyên trách + AI, Veo 3 tạo khoảng 3 giây mở đầu ghép video KOC, 1-2 page + hội nhóm, landing từ mẫu CS, **tên chiến dịch gồm tên mkt, mã video, mã content**, khoảng 388.000đ/ngày, bài đạt 3-4 đơn thì xét tăng ngân sách. Chung: đối chiếu giá, combo, content trên Slack trước khi đăng; landing có form đặt hàng gắn MKT Link; **đánh giá hiệu quả post điền Excel thủ công**; giữ/dừng camp do cá nhân quyết theo kinh nghiệm. BA đã có quyền BM, Tizi, LadiPage.
- **Chi tiết HD-BA (COO Đạt):** MKT Link nên mang `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm_content={{ad.id}}&mkt=<mã mkt>&page=<ID page>`; landing đọc tham số gửi kèm form sang Tizi. Công cụ trên landing: Pixel, Conversions API (gửi đơn thật, trạng thái giao về Facebook), GA4, Clarity. Khách không để lại SĐT là ẩn danh, không công cụ hợp pháp nào lấy được danh tính. Thứ tự chỉ số: (1) chi phí/đơn giao thành công, ROAS thật; (2) CPA, tỷ lệ chốt, hoàn; (3) chuyển đổi landing, CTR, CPC; (4) giữ chân video, CPM, tần suất; (5) tiền tiêu, trạng thái duyệt. Ad Library API chỉ trả quảng cáo chính trị/xã hội và EU, nên idea bước 1 giữ thủ công. Cổng lấy số: Marketing API (System User ads_read), hoặc trung gian Supermetrics/Windsor.ai; tin nhắn qua Messenger webhook, bình luận qua Page webhook; nếu dùng Pancake thì kiểm tra xuất dữ liệu. AI phân loại tin nhắn 6 nhóm (muốn mua, cân nhắc, khiếu nại đơn, khiếu nại sản phẩm, bình luận tiêu cực, rác). **Lộ trình 4 tuần BA × trưởng phòng:** T1 hiểu nghề, T2 **truy ngược 10 đơn Tizi về quảng cáo**, T3 kiểm quyền truy cập và khối lượng tin nhắn, T4 hai BA đối chiếu, chọn 2-3 bài toán AI cho 4 trưởng phòng duyệt. Lưu ý: **Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 hiệu lực 01/01/2026**, thông tin sức khỏe cần thận trọng hơn; Meta hạn chế quảng cáo giảm cân/làm đẹp; AI trả lời khách chỉ theo kịch bản đã duyệt.
- **Đề xuất pilot AI Agent Meta Ads (AI-MA):** Claude + Meta Ads MCP + Higgsfield (ảnh thành video); pilot 2-4 tuần trên 1 tài khoản ngân sách nhỏ: đọc số và chọn 3 mẫu win, tạo creative (5 text + 5 headline), AI dựng camp nháp ở trạng thái tắt rồi Media Buyer duyệt, care camp có cảnh báo (cần scheduler, Claude Desktop đơn lẻ không giám sát 24/7). Mục tiêu giả thuyết: tốc độ creative gấp 3-5 lần.
- **Messenger xác nhận đơn (KH-FB-SMS):** sau form LadiPage hiện nút mở Messenger. Mức 1 (mkt tự cài, khoảng 30 phút/landing): link chung, người trực page tìm đơn theo SĐT và xác nhận tay. Mức 2 (cần dev, vài tuần + chờ Meta duyệt): link có mã riêng `m.me/Page?ref=<mã>`, tự tìm đúng đơn, khách bấm "Đúng" thì đơn tự xác nhận; Tizi lưu PSID, tên, link hội thoại. Phân công: anh An (visit_id, app Meta, webhook, xin quyền), anh Tùng (cột, trạng thái Tizi).
- **SMS (SMS-PA, UNISMS):** đang dùng Semaphore khoảng 250đ/segment. 3 phương án tiếp nhận phản hồi: SMS + hotline + link form (POC Google Apps Script; Semaphore xác nhận 14/10 link không bảo đảm tới máy), SMS hai chiều, Messenger + SMS dự phòng. Báo giá UniSMS 19/10/2026: ₱0,47-0,49/segment theo sản lượng, số ảo ₱3.000/tháng + ₱7.000 cài đặt; ở 60.000 tin/tháng rẻ hơn Semaphore khoảng 2,2 triệu đồng/tháng, ở 15.000 tin đắt hơn khoảng 0,5 triệu (tỷ giá ước 1 PHP ≈ 410đ).
- **Sàn:** đơn xử lý trên BigSeller; ví shop sàn và rút tiền về Pingpong; API chính thức Shopee/Lazada/TikTok Shop vào Tizi.

## Tin nhắn sau mua: SMS, MMS, Viber, Messenger (ý tưởng người dùng + tra web 2026-10-27)
> Ý tưởng của người dùng: SMS/tin nhắn không chỉ để giảm chi phí mà còn là kênh **bán thêm** ("đơn của bạn đã gửi" + gợi ý sản phẩm khác, có thể dùng MMS) để khách **mua lại**. Chưa có số đo tỷ lệ mua lại hiện tại [cần đo, tính theo SĐT từ dữ liệu đơn].
- **Quy định Philippines (nguồn thương mại, chưa xác nhận hiệu lực):** tin **quảng cáo** cần người nhận **đồng ý trước/có đường từ chối**, không gửi 21:00-07:00; tin **giao dịch** (giao hàng, xác nhận) thường nằm trong quan hệ khách hàng hiện có. Một thông tư NTC 2009 được nêu là cấm "push message" quảng cáo; chưa xác nhận còn hiệu lực. Chưa tìm thấy hướng dẫn của NPC. [[Telerivet](https://www.telerivet.com/blog/business-sms-messaging-compliance-in-the-philippines); [JUR.ph](https://jur.ph/law/facts/rules-and-regulations-on-broadcast-messaging-service)]
- **MMS A2P ở Philippines:** [Chưa tìm thấy] nguồn nói có hỗ trợ hay giá. Kênh giàu hình ảnh khác: **Viber Business** (media, link, PDF; giá niêm yết một aggregator khoảng 0,0011 EUR/tin so với SMS khoảng 0,0059 EUR/tin, chưa rõ ngày), **RCS** (Globe ra mắt 2018, mức dùng chưa rõ), Messenger đã phủ rộng. [[Messaggio](https://messaggio.com/messaging/philippines/); [Telerivet: Viber/WhatsApp/SMS](https://www.telerivet.com/blog/viber-vs-whatsapp-vs-sms-philippines)] SMS nội địa nêu khoảng 0,20-0,30 PHP/tin (một nhà cung cấp).
- **Thời điểm bán thêm:** các hướng dẫn khuyên **sau khi giao** hoặc khi đã có tin tưởng, không chào trước khi hàng gửi; nêu tỷ lệ bán cho khách cũ cao hơn khách mới nhưng đó là số **không nguồn** của bên bán. Không có số thí nghiệm có đối chứng, không có số riêng cho COD. [[Sendcloud](https://www.sendcloud.com/blog/post-purchase-upsell/)]
- **Messenger:** thẻ POST_PURCHASE_UPDATE chỉ cho cập nhật mã vận đơn, **không quảng cáo** (theo tài liệu đề xuất SMS của công ty).
