# Thực tế công ty (Tbestpro)

> File cập nhật dần khi người dùng cung cấp thông tin. Ghi ngày và nguồn. Nhãn: [N] tài liệu nói thẳng, [S] suy luận, [?] chưa xác nhận.
> Nguồn viết tắt: KT = Kien_truc_Tbestpro_OS_final_v2.pdf (72 trang, tài liệu ngày 04-06/10/2026); IT = Tbestpro_So_do_to_chuc_IT_BA_VN_v10.pdf (v10, 13/10/2026, đánh dấu mật; người dùng nói không mật, 2026-11-08); CC = SƠ ĐỒ CƠ CẤU TỔ CHỨC CÔNG TY 2026.docx.pdf (cũ hơn, khi lệch thì ưu tiên IT); SMS = Đề xuất tối ưu chi phí SMS.pdf; HD-BA = Huong-dan-BA-x-Truong-phong-FB-Tbestpro.pdf (COO Vũ Thành Đạt, 01/10/2026; bản rút gọn: Quy-trinh-tong-quan-Facebook-Ads-v3.pdf); AsIs = Quy trình FB Ads As-Is.html; BC-TD = BÁO CÁO TIẾN ĐỘ.doc.pdf (người dùng, 06/10/2026); KH-FB-SMS = Kế Hoạch Triển Khai Facebook Ads + SMS.pdf; AI-MA = AI Agent Meta Ads.pdf (đề xuất pilot); SMS-PA = TBESTPRO_Bao_cao_SMS_dung_font_ban_dau.pdf; UNISMS = TBESTPRO_UniSMS_Bao_cao_chi_phi_va_so_ao_2_trang.pdf. Đọc toàn bộ thư mục `pdf/` lần 2 ngày 2026-11-04 (đọc PDF bằng PDFKit). Chưa đọc được (PDF dạng ảnh, cần OCR): "Bản Thiết Kế AI Agent Bán Lẻ.pdf" (18 trang); "Đề xuất tối ưu chi phí SMS.pdf" đã tóm tắt trước đó. Không trích: hướng dẫn bên ngoài của Phan Đông Giang; 2 đoạn chat Gemini của người dùng ("Vai Trò BA In-house", "Tối ưu hóa quy trình thiết kế") đã phản ánh trong bộ nhớ.
> Tài liệu nguồn là nội bộ/mật: không đưa nội dung file này ra ngoài workspace.
> Cập nhật lần đầu: 2026-10-26 (trích từ tài liệu workspace, chưa được người dùng xác nhận từng điểm).

## Người dùng và bối cảnh
- Người dùng: Product Owner kiêm BA, nền tảng IT; muốn phát triển lên tư duy hệ thống và kiến trúc sư giải pháp. [N, người dùng nói]
- Công ty: CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI TBESTPRO. [N, CC]

## Mô hình kinh doanh (3 mảng) [N, IT tr.3-4]
| Mảng | Nội dung | Pháp nhân bán | Kho |
|---|---|---|---|
| **Tizi Retail** | Bán lẻ COD tại Philippines (thương hiệu Fitgum...), kênh FB-COD, TikTok Shop, Shopee, Lazada, telesales cứu đơn, sỉ Tizi; hàng từ nhà máy Trung Quốc (OEM) | PH01 Laco | MLB-K5, MLB-K6 (Malabon) |
| **Ganico Philippines (GNP)** | B2B cà phê nhân xanh, lô 1-10 tấn, khách roaster/trader | PH02 Ronnila | MLB-K7 |
| **Tbestpro Global (TBG)** | Xuất khẩu chính ngạch nông sản Việt Nam (cà phê nhân đi Philippines, Israel; nước Revie đi Úc); tên nội bộ, không phải pháp nhân | VN01 Tbestpro VN | |
- Quy mô: Việt Nam 157 người (Tizi Retail 124, Ganico 11, chức năng dùng chung 19, Ban GĐ 2, CTV 1), Philippines thêm 2 quản lý pickup và 50 pickup, telesales, CSKH. [N, IT tr.1]
- Khoảng 1.500 đơn/ngày (đầu tháng 10/2026). [N, KT]
- Kho Cebu: dự kiến, kho fulfilment đối tác. [?, IT tr.13]

## Hệ thống hiện có [N, KT]
- **Tizi (tizi.asia) và Gani (gani.asia)** cùng một codebase và một backend (NestJS 7, MongoDB 5, giao diện Vue 2); tách dữ liệu bằng trường tenantCode: rỗng = Tizi, "ganico" = Gani, "tbestproGlobal" = xuất khẩu. Khoảng 120 màn, 74 nhóm API, 24 thị trường (8 còn hoạt động, đều ở Philippines). Chi phí phát triển 2021-2026 khoảng 2,4 tỷ VNĐ.
- **Tizi** là trung tâm bán lẻ: đơn, telesale, kho (giá vốn bình quân tháng), vận chuyển, đối soát COD, lợi nhuận, lương/KPI. **Gani** là Tizi ẩn bớt menu cho B2B, dùng FIFO.
- Tích hợp: LadiPage API; API chính thức Shopee/Lazada/TikTok Shop; J&T và Flash Express (tạo vận đơn qua API); Extension Chrome "TIZI Management"; Excel upload (CPQC, SOA/COD J&T, trạng thái vận chuyển, chi phí tháng); BigSeller xử lý đơn sàn; Airwallex (đồng bộ cron), Pingpong (chưa nối API); MCP server /core-api/mcp (khoảng 207 công cụ chỉ đọc, chỉ Admin).
- **Tbestpro Finance** (tbestpro.pro): báo cáo tài chính từ sheet nhập tay. **MISA**: dự kiến đẩy hóa đơn B2B.
- **Không thấy** trong tài liệu: WMS riêng, POS cửa hàng, ERP kế toán ngoài MISA, OMS riêng. [S] Tizi đóng vai trò OMS + WMS + CRM + báo cáo gộp.

## Hướng dự kiến (chưa chạy thật) [N, KT, IT]
> Chi tiết đầy đủ: xem `kien-truc-tbestpro-os.md`.
- **Tbestpro OS / Tizi 2 / Gani 2:** đa pháp nhân, đa kênh, sổ cái kép, sổ lô FIFO, từ điển chỉ số, rule engine có ngày hiệu lực, sự kiện/outbox, MCP và agent AI 4 mức tự chủ (L0-L3). Gani 2 đã có demo (tbestpro.pro/ganico-demo), chạy song song với gani.asia.
- **Hai hướng kiến trúc lệch nhau:** KT đề xuất modular monolith trên PostgreSQL 16 (Row-Level Security); IT ghi đề xuất của trưởng bộ phận IT: service tách theo nghiệp vụ, mỗi service một schema PostgreSQL, giao diện React. [S] IT là bản mới hơn; cần xác nhận hướng nào được chọn.
- **Lộ trình Tizi 2 (IT tr.11):** GĐ1 đăng nhập/phân quyền/"Hôm nay của tôi"/BXH MKT; GĐ2 chi phí MKT đồng bộ Facebook, MKT Link, thưởng ngày tự động; GĐ3 telesale hàng đợi, gửi vận chuyển, mua hàng, nhận hàng, kho; GĐ4 kế toán, báo cáo, tắt Tizi 1.
- Kỳ vọng sau 3 tháng (KT tr.23): P&L tháng ra ngày 5 thay vì 15-20, lệch CPQC về 0, không còn đơn lỗi SKU tồn quá 1 ngày.

## Tổ chức (liên quan vận hành) [N, IT tr.1, 6-9]
- Ban Giám đốc: **CEO Nguyễn Văn Tài** ("anh Tài"; tác giả blueprint KT ký "@Tai"; phụ trách trực tiếp Ganico GN-SALES 11 người) và **COO Vũ Thành Đạt** ("anh Đạt", người dùng gọi là phó giám đốc; phụ trách Tizi Retail, kiêm trưởng nhóm Facebook Ads B2B; tác giả HD-BA). [N, IT tr.1; người dùng xác nhận 2026-11-04]
- Người khác hay nhắc: **anh An** trưởng bộ phận IT (kiến trúc tham chiếu ưu tiên của BGĐ là đề xuất của anh An); **anh Tùng** dev Tizi (thêm cột, trạng thái); trưởng nhóm HCNS Nguyễn Thị Lan; trưởng nhóm Mua hàng & Logistics Nguyễn Thị Quỳnh Dương (mua hàng nội địa Ganico chỉ báo cáo CEO). Nhân sự VN 157 người (BGĐ 2, Tizi Retail 124, Ganico 11, chức năng chung 19). [N, IT tr.1; KH-FB-SMS]
- **Quy trình xây hệ thống mới do BGĐ chốt:** mỗi vai trò xem demo, xác nhận workflow và **dữ liệu mình được thấy**, góp ý; công ty chốt demo rồi mới code; BA rà soát từng vai trò. Đây là căn cứ cho yêu cầu "phân quyền và sắp xếp hiển thị" của COO (dự án Facebook Ads, 2026-11-04). [N, IT tr.2]
- **Tizi Retail:** Khối Marketing Facebook (khoảng 95 người, 2 phòng, 11 team); Khối TMĐT (9 người, chưa có trưởng khối); Khối Hỗ trợ và Vận hành (20 người: Content, Design-Media, Truyền thông, R&D, CSKH và Xử lý đơn, HCNS).
- **Chức năng dùng chung:** Mua hàng và Logistics (5 người: mua hàng quốc tế TQ/OEM 2 cho Tizi; mua hàng nội địa nông sản 2 và Logistics-Chứng từ XNK 1 cho Ganico); Kiểm soát nội bộ KSNB (7, độc lập); Kế toán (3, sổ sách 3 pháp nhân); Công nghệ và Dữ liệu (4+1, có 3 BA, 1 IT outsource).
- **Vận hành Philippines (Laco):** Đội Pickup và Kho (2 quản lý PH-WH + 50 PH-PICK), Đội Telesales PH-TELE (xác nhận, cứu đơn), Đội CSKH PH-CS.
- Quyền hệ thống gắn vào vị trí, không gắn người; sale không thấy lợi nhuận; BA/IT thấy doanh số, còn lợi nhuận/giá vốn/lương hiển thị "xxx".
- Chưa xác nhận [?]: số người PH-TELE và PH-CS; 52 tài khoản telesales chưa thuộc phòng nào; quản lý pickup có quản lý kho 7 không.

### Cơ cấu chi tiết theo sơ đồ IT v10 (13/10/2026) [N, IT tr.1; người dùng nói tài liệu không mật, 2026-11-08]
> Tên đọc từ PDF bị lỗi định dạng chữ; "Bùi Anh Tùng", "Nguyễn Thị Lan Anh" [cần người dùng soát]. Báo cáo: nhân sự → trưởng nhóm → trưởng phòng → COO.
- **Khối Marketing Facebook** (COO Vũ Thành Đạt phụ trách; bán lẻ COD qua LadiPage):
  - **Phòng Alpha** (TP Bùi Thị Huyền): Kaido (Trần Duy Hùng), Smile (Phan Duy Kiên), Panther (Đinh Quý Hiếu).
    - Phòng con **Scale** (TP Đỗ Trọng Dũng): Passion (chưa có trưởng nhóm), Climax (Lưu Hoàng Nam), Fusion (Lê Đình Đắc).
    - Phòng con **Skynet** (TP Trần Thị Thục Linh): Mavis (chưa có trưởng nhóm), Dream (Hà Công Du).
    - TP Alpha xem được số liệu của Scale và Skynet.
  - **Phòng Evo** (TP Nguyễn Thanh Huyền): Carat (Hoàng Cúc Mai), Infinity (Trần Danh Lịch), Dino (Bùi Anh Tùng).
  - **Team Facebook Ads B2B** (COO kiêm trưởng nhóm; thành viên Giang, Hảo): chạy ads tìm khách sỉ cho Ganico, đang thử.
- **Khối TMĐT** (9 người, chưa có trưởng khối): TikTok Nova (Nguyễn Thị Dung 10, kiêm), TikTok Beta (Phạm Thị Tuyết); Shopee–Lazada Vega (Nguyễn Thị Dung 10, kiêm), Shopee–Lazada Rainbow (chưa có trưởng nhóm).
- **Khối Hỗ trợ & Vận hành** (20 người, báo cáo COO): Content (Nguyễn Thị Thảo – Flora); Design–Media (phụ trách Nguyễn Hải Như, trưởng nhóm Media Nguyễn Thị Minh Phượng); Truyền thông (Nguyễn Thị Dung 10, kiêm); R&D sản phẩm; CSKH & Xử lý đơn; HCNS (Nguyễn Thị Lan).
- **Ganico:** GN-SALES 11 người, CEO phụ trách trực tiếp, chưa có trưởng nhóm; một team bán cho cả Tbestpro Global (xuất khẩu) và Ganico Philippines (B2B).
- **Chức năng dùng chung** (báo cáo BGĐ): Mua hàng & Logistics (Nguyễn Thị Quỳnh Dương; mua hàng nội địa và logistics Ganico chỉ báo cáo CEO); Kiểm soát nội bộ (Nguyễn Thị Lan Anh; kiểm soát chi phí ads, hóa đơn quảng cáo, content, landing page); Kế toán (Đồng Thị Ngọc Quỳnh; sổ VN01, PH01, PH02); Công nghệ & Dữ liệu (trưởng bộ phận anh An; 3 BA; 1 IT outsource).
- **Vận hành Philippines – Laco** (PH-OPS, báo cáo CEO): Đội Pickup & Kho (2 quản lý + 50 pickup), Đội Telesales, Đội CSKH; 3 kho Malabon (K5, K6 Tizi; K7 cà phê Ganico).

## Quy trình đã biết
- Luồng đơn COD đầu-cuối: xem `ban-do-luong-don-hang.md`.
- Quy trình Facebook Ads (6 bước, 4 team Alpha/Evo/Skynet/Scale): xem `thuong-mai-dien-tu.md`. Skynet, Scale, Alpha, Evo là **tên team** chạy FB Ads.
- BA làm việc với trưởng phòng: chương trình 4 tuần; mỗi cặp BA-trưởng phòng họp 2 buổi/tuần, 60 phút, gửi biên bản trong ngày; BA quan sát, hỏi, vẽ sơ đồ, **không đề xuất giải pháp AI trước khi trưởng phòng xác nhận bản đồ dữ liệu** (HD-BA).
- Tiến độ BA (đến 06/10/2026): đang ở giai đoạn Khảo sát quy trình FB Ads; đầu ra: quy trình xác nhận, bản đồ dữ liệu, danh sách quy tắc nghiệp vụ; bước tiếp theo: sơ đồ As-Is từng team, To-Be, đưa Agent AI vào.

## Vấn đề đang gặp [N]
- **Đối soát tiền bằng Excel** (SOA COD, CPQC, chi phí tháng, tiền đối tác); sai/trễ file thì lợi nhuận sai không cảnh báo.
- **Nhiều định nghĩa số:** 4 cách tính giá vốn, 3 định nghĩa doanh số tính lương, 2 định nghĩa CPQC; CPQC lệch 139,3 triệu giữa MKT khai và KSNB upload (1-4/10).
- **Kho:** tồn tính lại từ đơn mỗi 2 phút; FIFO có lỗi (không đưa tồn đầu kỳ, bỏ hàng hỏng, âm kho); kho 5 và 6 đang gộp thành 1; kho 7 chưa hạch toán trên phần mềm.
- **Doanh thu theo bài do Marketing tự khai [người dùng nói, 2026-11-04; chưa xác nhận]:** đơn Tizi có MKT Link nên biết **mkt, content, team, sản phẩm** (trường đơn: `mktLinkId`, `mktUserId`, `contentUserId`, `mktTeamId`, `chatPage`; theo mô tả công cụ Tizi MCP), nhưng **không biết bài/quảng cáo nào** (UTM chưa mang campaign/adset/ad id, xem `thuong-mai-dien-tu.md`). Marketing tự khai doanh thu theo bài, có thể khai cho khớp tổng. Hệ quả: hiệu quả theo bài thiếu tin cậy. Hướng xử lý đã có trong tài liệu `pdf/Huong-dan-BA-x-Truong-phong-FB-Tbestpro.pdf` (Vũ Thành Đạt, 01/10/2026): UTM động `{{campaign.id}}/{{adset.id}}/{{ad.id}}` qua MKT Link, landing gửi kèm form sang Tizi; chỉ số số 1 là chi phí trên đơn giao thành công. Marketing khai vào file Excel đánh giá hiệu quả post (ví dụ `Du-an/02-Facebook-Ads/ĐÁNH GIÁ HIỆU QUẢ POST CHẠY TEAM MAVIS.xlsx`, người dùng xác nhận 2026-11-04; BC-TD cũng ghi "điền đánh giá hiệu quả post trên Excel thủ công"). Cần kiểm chứng: Tizi đã nhận trường UTM/ID quảng cáo chưa (tra MKT Link `baseUrl` trong Tizi).
- **Nhập liệu trùng:** chi phí MKT khai tay hằng ngày và KSNB upload file; báo cáo chậm (10-30 giây/màn).
- **Lead chat** đi qua Google Sheet trước khi vào Tizi, dữ liệu chat không được lưu; địa chỉ sai dẫn đến hoàn đơn và mất phí hai chiều.
- **SMS thông báo** tốn khoảng 45 triệu VNĐ/tháng do mẫu dài.
- **Rủi ro kỹ thuật/bảo mật** (KT, mức nghiêm trọng, cần trao đổi với IT): có 6 lỗ hổng cần vá ngay; không backup định kỳ; Vue 2 hết hỗ trợ. Chi tiết xem trực tiếp KT tr.2, 34, 62, 68-69, không chép vào đây.

## Quyết định đang chờ Ban Giám đốc [N, KT tr.29-30; IT tr.14]
Phương pháp giá vốn (đề xuất FIFO); định nghĩa "doanh số tối ưu" và doanh số tính lương; CPQC lấy từ MKT hay KSNB; giữ BigSeller hay nối trực tiếp sàn; phạm vi quốc gia (chỉ PH hay mở lại MY/ID); Ganico và Tbestpro Global tách hay gộp.

## Thuật ngữ nội bộ
- **Đơn vị/pháp nhân:** VN01 Tbestpro VN, PH01 Laco, PH02 Ronnila; TIZI, TBG, GNP; Ganico; Fitgum.
- **Kênh:** FB-COD, TTSHOP, SHOPEE, LAZADA, TELESALE, SI-TIZI, EXPORT, B2B-PH. **Kho:** MLB-K5/K6/K7; **Kho Lysan** (tên kho chính trên Tizi, có thể là K5/K6 gộp [?]). **Đơn vị PH:** PH-OPS, PH-WH, PH-PICK, PH-TELE, PH-CS.
- **Team Facebook** (mã FB-<TÊN>): Alpha, Evo, Scale, Skynet (phòng); Kaido, Smile, Panther, Passion, Climax, Fusion, Mavis, Dream, Carat, Infinity, Dino; FB-B2B. **Team TMĐT:** TTS-NOVA, TTS-BETA, SL-VEGA, SL-RAINBOW. Chi tiết: mục Tổ chức. [2026-11-08]
- **Hệ thống:** Tizi, Gani, Tizi 2, Gani 2, Tbestpro OS, Tbestpro Finance, MISA, LadiPage, BigSeller, J&T, Flash Express, Airwallex, Pingpong.
- **Dự án của người dùng** (thư mục `Du-an/`): Kho 7 (RFID, Nextwaves), Facebook Ads (lõi dữ liệu, AI Agent; dự án con Claude + CapCut), SMS, Cổng báo cáo nội bộ.
- **Chức danh:** tp (trưởng phòng), ld (trưởng nhóm), pn (phó nhóm), ct (chính thức), tv (thử việc).
- **Trạng thái đơn:** xem `oms.md`.
- **Vai trò hệ thống cũ:** admin, kt (kế toán), qlk (quản lý kho), mkt, vd/vdl (vận đơn), telesale, cdc, rd/rdl, ksnb/ksnbl, tp, design, content.
- **Chỉ số:** DSDK (doanh số đặt), DSHQ (doanh số hiệu quả), CPQC (chi phí quảng cáo), LN NV, LN NET, BXH MKT, SOA/remittance (đối soát COD J&T), NSP (nhóm sản phẩm), thưởng ngày, lằn ranh đỏ, Hệ số A.
- **Quảng cáo:** MKT (người làm marketing), MKT Link (link Tizi gắn quảng cáo với đơn), BM (Business Manager), TKQC (tài khoản quảng cáo), via (tài khoản Facebook cá nhân dùng quản lý page), KSNB (kiểm soát nội bộ, giữ tài khoản và chi phí quảng cáo), KOC/KOL, camp, care ads (theo dõi quảng cáo đang chạy), agency, TKCN (thẻ).
- **Vận hành:** pickup (soạn và bàn giao hàng), cứu đơn (telesale cứu đơn sắp hủy/hoàn), chia vòng tròn (chia lead xoay vòng cho Sales), đơn rác/đơn ảo, gọi confirm, ODZ, INC.
- **Khác:** "xxx" (che số), golden dataset (bộ số liệu vàng để đối chiếu khi chạy song song), strangler, tenant.

## Kho hàng bao (cà phê): quy trình hiện tại [người dùng nói, 2026-10-26; chưa xác nhận kho nào]
> Theo Sổ tay WMS đây là **Kho 7 (cà phê Ganico)**; chi tiết demo, giới hạn, phân quyền: xem `kho-7-gani-2-wms.md`. Còn [?]: đang chạy trên Tizi hay Gani 1 (IT v10 ghi Kho 7 "chưa hạch toán trên phần mềm"; người dùng nói phiếu xuất lập trên Tizi).
- **Xuất kho:** có đơn → kế toán check tiền về → lập/lấy phiếu xuất trên Tizi → gửi nhóm **Viber** cho kho → kho lấy hàng theo phiếu và xuất cho khách. Bán lẻ (vd 30kg) thì mở bao 60kg, cân rồi xuất. Chưa có công cụ xác nhận lấy đúng sản phẩm/số lượng; cân lẻ do kho tự double check, kế toán chưa kiểm soát được.
- **Trừ tồn hai bước:** lập phiếu xuất chỉ trừ **stock dự kiến**; khi kho xuất xong, **kế toán vào xác nhận "đã xuất kho" lần nữa** mới trừ **stock thực**.
- **FIFO:** "nhập trước xuất trước" chỉ là lý thuyết; chưa kiểm soát được kho có làm đúng không (không phân biệt lô/ngày nhập khi lấy bao).
- **Nhập kho (inbound, nhập khẩu từ VN hoặc nước khác):** kho báo lên Viber → bộ phận **mua hàng** kiểm số lượng khớp đơn mua → mua hàng báo kế toán nhập kho.
- **Tồn kho cuối ngày:** kho kiểm đếm hằng ngày (chỉ đếm **số bao** và cân **số lẻ**), gửi báo cáo lên Viber, kế toán đối chiếu với Tizi. Chênh lệch: tìm nguyên nhân rồi làm bút toán kiểm kê trên phần mềm.
- **Phần mềm:** đã có phiếu nhập và phiếu xuất; chỉ có **báo cáo hàng tồn kho** (không có quản lý lô, vị trí).
- **Bối cảnh dự án:** sếp yêu cầu số hóa bằng barcode/RFID để kiểm soát tồn, tránh thất thoát. Người dùng đã thiết kế demo giao anh An (IT) code; đang tìm hiểu giải pháp thị trường và cách họ vận hành. Chưa có số liệu thất thoát. [cần đo]
- **Cập nhật 2026-10-28 [người dùng nói]:** demo Gani 2 đang chạy; ý sếp là người dùng **tìm hiểu thiết bị QR/RFID để sau này tích hợp vào phần mềm**. Người dùng muốn hiểu nghiệp vụ kho trước (chưa có khảo sát tại chỗ; mọi mô tả hiện trạng ở trên đều là lời kể của một người, chưa kiểm chứng).
- **Kho 7 thêm dữ kiện 2026-10-28 [người dùng nói]:** quy mô khoảng **2.000 bao/tháng** (chưa rõ là nhập, xuất hay cả hai; chưa biết số bao mỗi ngày); chưa biết số người làm kho; **[Quan sát qua ảnh]** nhân viên dỡ bao từ container xuống, **đưa lên cân để cân lại** rồi xếp lên pallet. Chưa hỏi về thất thoát. Bộ câu hỏi khảo sát chuẩn bị ngày 2026-10-28 (skill `khao-sat-as-is`).
- **Kho 7 dữ kiện 2026-11-02 [đội kho PH trả lời bằng tiếng Anh, người dùng chuyển lại; ảnh `image/kho7-nhan-bao-2026-10-27.png`]:**
  - **Nhãn bao [Quan sát qua ảnh]:** tờ giấy in sẵn đựng trong túi nhựa, buộc vào miệng bao; nội dung chữ: GREEN COFFEE BEAN / ROBUSTA S18 CLEAN GRADE 1 / ORIGIN: VIET NAM / NET WEIGHT: 60KG / LOT: ?70926AP (ký tự đầu bị che) / SKU: CF_ROBUSTA_S18_CLEAN_G… **Không có mã vạch hay QR.** Bao trông là bao dệt màu xanh (có vẻ PP, không phải bao đay) [S].
  - **Không dùng pallet [người dùng nói, sửa 2026-11-11]:** hàng nhập và quản lý **theo lô**, kiểm soát từng bao. (Ghi chú cũ "10 bao/pallet" là sai, đã bỏ.)
  - **Cân khi dỡ hàng [người dùng nói, sửa 2026-11-11]:** cân **10–12 bao mỗi lượt** trên **cân sàn 5 tấn, đầu cân Fuji FI05** (hãng First Philippine Scales, hiệu chuẩn 28/07/2026, mức cân 0–5.000 kg). Cân điện tử 150 kg không nối máy tính được, **bỏ**. Cách nối cân: xem `kho-7-gani-2-wms.md` mục 10.
  - **Container:** quay video lúc chưa mở khóa/niêm phong rồi mới dỡ hàng [người dùng nói].
  - **Kiểm đếm:** đếm tay, không gửi ảnh.
  - **Bao lẻ:** đã có bao tách riêng cho đơn nhỏ.
  - **Xác nhận 2026-11-03 [người dùng nói]:** phiếu nhập/xuất Kho 7 làm trên phần mềm công ty (người dùng không muốn ghi tên hệ thống cụ thể); kho ghi số cân bằng **Excel**; "mua hàng kiểm số lượng" là **mua hàng nội địa ở VN kiểm từ xa** qua số kho báo trên Viber; **2.000 bao/tháng là số nhập**; trừ tồn hai bước vẫn đúng; **chưa có quy trình hàng hỏng**, khoảng **2 tuần một lần mang hàng ra khử trùng**. Kho đang làm thực tế thế nào ở nhiều bước vẫn chưa rõ. File As-Is: `docx/Kho7_Luong_hien_tai_AsIs.docx` (bản nháp 2).
  - **Bổ sung 2026-11-03 (bản nháp 3) [người dùng nói]:** khoảng **6 container 20 feet/tháng** (khoảng 320 bao/container); kho **biết trước** hàng về (có packing list); file Excel số cân **kho và kế toán cùng biết**; xuất: kho chuẩn bị rồi chuyển đến khách (chưa cần làm rõ); **rạch bao nhiều** vì khách hay yêu cầu **trộn các loại cà phê** (cách trộn chưa rõ, hỏi sau); kho khoảng **10 người**; toàn bộ quy trình **thủ công**; yêu cầu: phần mềm cho kho phải **dễ dùng**.
  - **Phiếu giao container [Quan sát, ảnh `image/kho7-phieu-giao-container-2026-10-27.png`]:** Way Bill/Delivery Receipt của nhà xe Marlhy-Ash Transport (Caloocan), ngày 27/10/2026, xe CCR 1769, IMPORT, địa chỉ Panghulo, hãng tàu Wan Hai, container WHSU 0472750, 1x20 loaded; có chữ ký nhận. **Ô số niêm phong (Shipping Seal, Para Seal) để trống.** Phiếu ghi: không nhận khiếu nại thiếu/hỏng sau khi đã ký nhận không ghi chú. Phiếu không có số bao, lô hay trọng lượng.
  - **Báo hàng trước (pre-advice) từ mua hàng cho kho [Quan sát: tin nhắn tiếng Anh người dùng dán, 2026-11-03]:** mua hàng nhắn kho qua tin nhắn, mỗi container ghi số container, số vận đơn (BL), SKU, tổng kg tịnh, số bao, **màu bao**; yêu cầu kho sau khi dỡ đếm số bao thực tế, kiểm tổng trọng lượng thực tế, chụp ảnh/quay video hạt trong bao gửi lại để kiểm tra. Ví dụ ngày giao 27/10/2026: WHSU2465209 (BL 100GX17811) CF_ROBUSTA_S18_CLEAN_G1 19.200 kg, 320 bao **đỏ**; WHSU0472750 (BL 039GX92118) CF_ARABICA_SON LA_S18_PREMIUM 18.600 kg, 310 bao **vàng** (trùng container trên phiếu nhà xe). Có ít nhất 2 loại hàng (Robusta, Arabica Sơn La). Pre-advice **không có số niêm phong, số lô**.
  - **Thông tin mua hàng cung cấp cho kho [người dùng dán lời chị mua hàng, 2026-11-03]:** số container, số tracking, số bao, tổng trọng lượng tịnh, SKU, màu bao; kèm ảnh **tem shipping mark may ở đầu mỗi bao** (đang nhờ nhà cung cấp may) để kho đối chiếu khi nhận.
  - **Bổ sung 2026-11-03 [người dùng nói]:** một container có một hay nhiều lô: **chưa rõ**; kho gửi số bao, số kg cho mua hàng bằng **file Excel qua Viber**; video kiểm hạt chỉ quay **khi khách hàng yêu cầu**.
  - **Nhãn bao Robusta ngày 30/10/2026 [Quan sát, ảnh `image/kho7-nhan-bao-robusta-2026-10-30.png`]:** bao dệt **màu đỏ/hồng**, nhãn trong túi nhựa: SKU CF_ROBUSTA_S18_CLEAN_G1, **LOT 140926AP**, 60 kg. Ảnh 27/10 cùng SKU Robusta S18 có LOT ?70926AP và bao **màu xanh lá**. [Suy luận] mã lô có thể là ngày (14/09/26, ?7/09/26) + "AP"; **cùng một SKU có nhiều lô**, và **có thể không cùng màu bao** (cần xác nhận: pre-advice ghi Robusta là bao đỏ). Nhãn này có phải "tem shipping mark may ở đầu bao" mà mua hàng nói không: chưa rõ.
  - **Ai nhập hệ thống [người dùng nói, 2026-11-03]:** Kho 7 **không tự thao tác gì trên hệ thống**; **kế toán nhập hết thay cho kho** (dựa trên số kho gửi). Khớp với tài liệu IT "Kho 7 chưa hạch toán trên phần mềm" theo nghĩa kho không dùng phần mềm. Người dùng xác nhận (có chữ "hình như", 2026-11-03): kế toán lập phiếu trên phần mềm, kho không có tài khoản; nguồn là **file Excel** kho gửi Viber đối chiếu tin báo hàng; nhập theo SKU và tổng số lượng, không lô/pallet/vị trí; không ai kiểm số kế toán nhập; kho không xem được tồn trên hệ thống. Độ trễ nhập và cách nhập rạch bao/trộn: chưa biết.
  - **Màn hình "Add New" phiếu nhập kho [Quan sát, ảnh `image/phan-mem-form-phieu-nhap-kho.png`; danh sách phía sau là "Kho Lysan", có thể là màn hình Tizi bán lẻ]:** đầu phiếu: Ngày nhập kho*, ID mua hàng*, Kho*, Loại tiền tệ*. Mỗi dòng: Mã phiếu nhập kho, Sản phẩm*, Số lượng*, SL hỏng/mốc, Tracking number*, Ghi chú, Diễn giải, Ngày sản xuất, Hạn sử dụng. **Không có trường:** số lô, số kg riêng (đơn vị của "Số lượng" chưa rõ), số bao, pallet, vị trí, số container, số niêm phong, người nhận, ảnh. [?] Kho 7 có dùng đúng màn hình này không.
  - Còn [?]: ai in nhãn bao (nhà cung cấp VN hay đội đóng gói), ý nghĩa mã lô (có phải ngày 07/09/26 + "AP"?), bì pallet bao nhiêu kg, dung sai cân chấp nhận.

## Kho bán lẻ Tizi: phân tích dữ liệu Tizi từ phiên Claude Desktop [2026-11-03; người dùng dán kết quả; CHƯA KIỂM CHỨNG trong workspace này]
> Phiên khác tự tra Tizi và tự viết; mới xem mẫu record gần nhất, chưa thống kê toàn bộ. Có chỗ mâu thuẫn với tài liệu KT/IT (ghi bên dưới).
- **Kho đang chạy chính:** "Kho Lysan (Philippines)", gộp từ 8 kho cũ tháng 3/2023; hệ thống còn 11 kho, phần lớn disable hoặc test. **Mâu thuẫn:** tài liệu KT/IT gọi là MLB-K5/K6 (Malabon) gộp thành 1. [?] Lysan có phải tên hệ thống của K5/K6 không.
- **Giá vốn:** phân tích ghi FIFO (giá mua + phí vận chuyển phân bổ). **Mâu thuẫn:** KT ghi Tizi tính bình quân tháng, Gani FIFO. Cần hỏi IT/kế toán.
- **Luồng:** lệnh mua `PH-OD-xxxx` (NCC "Sup Wei", forwarder Huibang; phí vận chuyển theo bảng giá forwarder, ví dụ sea food 8.300đ/kg; có ETA và cờ cảnh báo quá hạn) → nhập kho nhiều đợt `PH-NK-xxxx` (loại `nm` nhập mua, `return` nhập hoàn) → xử lý đơn (telesale, kiểm địa chỉ) → **Team CS** tạo phiếu xuất theo đợt `sendToJnt`, đẩy J&T, trạng thái `dxk` → có log quét mã vận đơn J&T theo sản phẩm (`realCount`, `failedCount`, `switchedCount`; dùng ở bước nào chưa rõ).
- **Hàng hoàn:** phiếu `return` ghi theo SKU, **mỗi tuần một đợt, không gắn mã đơn** → [suy luận] nhập gộp, không đối soát theo đơn.
- **Điều chỉnh tồn:** lệnh chuyển kho dùng để đổi SKU/đổi tem trong cùng kho; lệnh kiểm kê (reset) để chốt số thực.
- **Điểm đáng chú ý (theo phân tích):** kiểm kê 04/09/2026 ghi "mất do return sp acai + chia coffee", giảm 48.147 và 45.559 đơn vị, **khoảng 2 tỷ VND**; có tồn âm (−1.136, −2.876) trước kiểm kê; xóa sổ gạo hỏng −31.852 đơn vị (khoảng 280 triệu VND) và hàng hết hạn khoảng 380 triệu VND; chưa thấy cảnh báo hạn dùng/FEFO; lệnh mua quá ETA vẫn treo. Đề xuất của phiên đó: đo tỷ lệ đơn hoàn so với số thực nhập lại kho theo tháng.

## Demo "Ganico OS v2" (Gani 2) [đọc từ artifact người dùng chia sẻ, 2026-10-27; tôi đọc mã giao diện, chưa chạy thử]
- Trang tự ghi: **bản demo, dữ liệu mẫu, thao tác chỉ lưu trên trình duyệt**; có công tắc nguồn dữ liệu Mẫu/Thật (gani.asia), chưa rõ cách nối. Không gian làm việc: Ganico B2B cà phê nhân, Tbestpro Global, Xuất khẩu VN, Tizi Bán lẻ đa kênh. Có xem theo vai trò (Admin, Sale, CS, Quản lý kho, Mua hàng, Kế toán, Kế toán trưởng, Marketing, IT, BA).
- **Nhóm menu:** Bán hàng (đơn đặt sỉ, phiếu xuất, khách sỉ, sản phẩm và giá, data khách và lead, bảng giá theo ngày, đề nghị xuất kho, **Facebook Ads**); Hàng hóa (kho và lô FIFO, mua hàng và nhập kho, luân chuyển, rang gia công, tồn Kho 7 dự kiến và thực tế, kiểm kê tuần và hàng hỏng, lịch nhắc kho, báo cáo tồn); Tài chính (thu tiền và công nợ, chi phí tháng, tỷ giá, kênh thu tiền, đối soát sao kê, sổ đăng ký tài khoản, bảng lương); Phân tích; Hệ thống (hộp duyệt AI, đặc tả nghiệp vụ, so sánh Gani gốc và v2, test luồng, nhật ký thay đổi, phân quyền); Tbestpro Global và Xuất khẩu (đơn xuất khẩu, giá vốn VN và giá Kho 7, mua hàng nội địa, lịch tàu và hàng đi đường, công nợ nội bộ USD).
- **Phạm vi mục Facebook Ads trong demo (cho Ganico B2B, tìm lead):** 5 tab: Tổng quan và BXH MKT; Chi phí quảng cáo (đồng bộ từ BM theo ngày; **nhập tay kèm ảnh Ads Manager khi API/MCP lỗi**; đối soát lệch trên 3%); Chi phí tài nguyên (tên miền, via, BM, fanpage, proxy... có duyệt kế toán, ghi ngày "die"); Lead và phân bổ sale (import lead, bỏ trùng theo SĐT, phân bổ xoay vòng/vùng/nhóm khách, quá 24 giờ chưa liên hệ thì thu hồi); Kịch bản phát sinh. BXH MKT theo lead, chi phí, doanh số, khách tích lũy, khách mới (khách mới chỉ tính khi có đơn đầu không hủy).
- **Không thấy trong demo:** hiệu suất theo bài viết/video/đội cho bán lẻ, thư viện lưu file nội dung quảng cáo, cảnh báo ngưỡng hiệu suất, báo cáo gửi Slack.
