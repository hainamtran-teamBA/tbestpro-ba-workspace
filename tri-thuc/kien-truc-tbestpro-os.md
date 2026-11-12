# Kiến trúc Tbestpro OS (hệ thống sẽ xây)

> Nguồn: KT = Kien_truc_Tbestpro_OS_final_v2.pdf (blueprint 06/10/2026, tác giả ký "@Tai") và IT = Tbestpro_So_do_to_chuc_IT_BA_VN_v10.pdf (13/10/2026, mật). Số trang ghi theo PDF. Cập nhật 2026-10-26. Đây là **đề xuất, chưa chạy thật** (trừ Gani 2 demo). Tài liệu nội bộ, không đưa ra ngoài.

## 1. Mục tiêu và tầm nhìn
- **Một nền tảng duy nhất thay Tizi và Gani**, phục vụ nhiều pháp nhân và nhiều kênh. Mọi đồng tiền đi qua **sổ cái**, mọi chiếc hàng đi qua **sổ lô**, mọi con số đi qua **một từ điển chỉ số**. AI nhúng vào từng luồng làm việc. (KT tr.1)
- **Giữ lại** nghiệp vụ đã kiểm chứng: luật check trùng, công thức income từng sàn, công thức lương, FIFO, phân bổ chi phí. **Bỏ** phần khung kỹ thuật cũ. (KT tr.1)
- **Tizi 2 và Gani 2 là lõi** của Tbestpro OS; sau này các công cụ nội bộ khác cũng chạy trong đó. Giao diện song ngữ Việt-Anh vì nhân sự Philippines làm việc bằng tiếng Anh. (IT tr.2, 14)
- Lý do rebuild: Vue 2 hết hỗ trợ, MongoDB một nút, bảng đơn 330 trường và 87 index, 4 cách tính giá vốn, báo cáo chạy 10-90 giây, lỗ hổng bảo mật, không backup/monitoring.

## 2. Mười quyết định thiết kế (KT tr.1-2)
| # | Quyết định | Thay cho |
|---|---|---|
| D1 | Một nền tảng đa pháp nhân (tenant); cấu hình theo tenant ở một chỗ | Tenant suy từ tài khoản/tên miền/header, quyền xuyên tenant rải rác |
| D2 | PostgreSQL 16, Row-Level Security theo tenant, bảng đơn phân vùng theo tháng, payload gốc JSONB | MongoDB 5, bảng đơn 330 trường |
| D3 | Đơn chuẩn hóa: order, order_line, shipment, order_event, channel_order_raw | Một bảng chung, cột riêng từng sàn |
| D4 | Mọi đổi trạng thái là **sự kiện (outbox)**; số liệu báo cáo tính sẵn từ sự kiện | Báo cáo chạy 4-38 aggregation mỗi lần bấm |
| D5 | **Sổ cái kép** cho tiền: COD, income sàn, phí, top-up, rút, đối tác, khách sỉ | Cộng động theo originType, khớp chuỗi mã |
| D6 | **Sổ lô FIFO** cho mọi kho, giá vốn lô = tiền hàng + chi phí các chặng | 4 cách tính giá vốn song song |
| D7 | **Từ điển chỉ số (semantic layer)**: mỗi chỉ số một định nghĩa; tham số (tỷ giá, phí sàn, %CPQC, commission) có ngày hiệu lực | 3 định nghĩa DS tính lương, 2 định nghĩa CPQC, hằng số rải rác |
| D8 | Đăng nhập OIDC + passkey; xác thực lại khi xem số nhạy cảm; policy engine RBAC + ABAC | Mật khẩu chung trên trang, mật khẩu admin vạn năng |
| D9 | **AI-native:** MCP là cửa API hạng nhất; agent đề xuất, người duyệt, hệ thống ghi, nhật ký bất biến | MCP chỉ đọc, chỉ Admin |
| D10 | Chuyển đổi kiểu **strangler**: đồng bộ một chiều từ Mongo, chạy song song, Gani trước rồi Tizi; nghiệm thu bằng **golden dataset** | Không dừng kinh doanh ngày nào |

**Lời khuyên của tác giả (KT tr.2):** rủi ro lớn nhất không phải kỹ thuật mà là **định nghĩa số liệu**. Ban Giám đốc phải chốt 4 việc trước khi viết dòng code đầu: phương pháp giá vốn; có giữ "doanh số tối ưu" (giá +100 PHP) không; công thức doanh số tính lương; cách tính CPQC. Nếu không, hệ mới sẽ chép lại sự hỗn loạn của hệ cũ.

## 3. Kiến trúc tổng thể (KT tr.3-8)
**6 lớp**, mỗi lớp chỉ nói chuyện với lớp kề. Lõi nghiệp vụ là nơi **duy nhất được ghi dữ liệu**. Người (giao diện), agent AI (công cụ MCP) và connector (adapter) đều gọi **cùng một bộ lệnh nghiệp vụ**, nên cùng bị kiểm quyền và ghi nhật ký.

**Vòng module:**
- *Nền tảng dùng chung:* định danh/phân quyền, pháp nhân, SKU, khách và đối tác, kho theo lô, sổ cái, rule engine, sự kiện, từ điển chỉ số, lớp AI, design system.
- *Lõi nghiệp vụ Tizi + Gani:* bán lẻ (Facebook/LadiPage COD, Shopee, TikTok Shop, Lazada, telesale, vận chuyển, đối soát COD); B2B/XNK (đơn sỉ, công nợ, lô FIFO, đơn xuất khẩu, giao dịch nội bộ).
- *Module mở rộng (giai đoạn 7 trở đi, mỗi module khoảng 3-6 tuần):* Tài chính và BCTC (gộp Tbestpro Finance), mua hàng/nguồn nông sản/XNK, nhân sự và tuyển dụng, công việc và phê duyệt, phát triển sản phẩm và KOL/KOC.

**5 nguyên tắc để "all-in-one" không thành khối rối:** một bản dữ liệu gốc; module contract (mỗi module khai báo schema riêng, lệnh, sự kiện, quyền, menu, công cụ MCP, chỉ số; không đọc thẳng bảng module khác); ngành hàng mới là cấu hình; AI có sẵn trong mọi module; một design system.

**Cách mở rộng "cắm thêm":** kênh mới = viết adapter `ChannelAdapter` (pullOrders, pullSettlements, pushFulfillment, mapStatus); hãng vận chuyển mới = `CarrierAdapter` (createShipment, track, parseRemittance); pháp nhân/quốc gia mới = thêm dòng tenant/market + cấu hình; phí sàn/công thức lương = sửa trong rule engine có ngày hiệu lực; chỉ số mới = khai báo trong từ điển chỉ số.

**Quyết định kiến trúc then chốt:** *modular monolith trước, tách dịch vụ sau* (quy mô 1.500 đơn/ngày không cần microservices). Đọc và ghi tách ở tầng dữ liệu: ghi vào PostgreSQL, sự kiện đẩy sang kho phân tích và bảng tính sẵn, báo cáo và AI đọc từ đó.

**5 trục dữ liệu (KT):** ai bán (pháp nhân, phòng, team, người); bán ở đâu (kênh, thị trường, shop); bán gì (SKU, combo, lô); giao thế nào (kiện, ĐVVC); tiền đi đâu (sổ cái). Mọi quan hệ có **ngày hiệu lực** để báo cáo quá khứ không đổi khi cơ cấu thay đổi (nhân viên chuyển team từ ngày X).

**Thực thể chính theo module (rút gọn):** tổ chức (tenant, org_unit, person, membership), kênh (channel, market, shop, mkt_link), danh mục và giá (sku, bundle, channel_listing, price_rule), đơn hàng (customer, order, order_line, order_event, channel_order_raw, dedupe_decision, call_task), giao vận (shipment, shipment_event, carrier_account, pickup_batch, return_receipt), kho (warehouse, lot, stock_move, stock_count), mua hàng và XNK (supplier, purchase_order, landed_cost từng chặng, shipment_in, intercompany_link), tiền (ledger_account, journal_entry/line, wallet, bank_txn, match, fx_rate), marketing (ad_account, agency, campaign, ad_spend_daily, creator), chi phí và kỳ (cost_entry, allocation_rule, period), lương, quy tắc (rule), AI và kiểm soát (agent_run, proposal, approval, audit_log).

**Sáu bất biến hệ thống** (viết thành ràng buộc DB hoặc test): tồn kho = tổng stock_move theo lô, không có số tồn ghi tay; mỗi bút toán Nợ = Có, một giao dịch ngân hàng chỉ khớp tối đa bằng đúng số tiền của nó (chặn lỗi Airwallex phân bổ trùng); kỳ đã khóa không sửa, chỉ có bút toán điều chỉnh vào kỳ mở; mã đơn duy nhất theo sequence của DB; mọi truy vấn bị RLS lọc theo tenant, không có đường vòng; báo cáo kỳ đã khóa là bản chụp, tính lại sinh phiên bản mới.

## 4. Tám luồng nghiệp vụ to-be (KT tr.9-14)
Cả 8 luồng dùng chung một khuôn: **sự kiện → quy tắc → bút toán hoặc phát sinh kho → chỉ số tính sẵn**. AI làm phần lặp lại, người duyệt ngoại lệ.
| # | Luồng | Điểm chính |
|---|---|---|
| W1 | Đơn COD Facebook/LadiPage (khoảng 1.500 đơn/ngày) | Rút còn **8 bước**: nhận đơn, chuẩn hóa và chấm điểm rủi ro, quyết định, telesale, tạo vận đơn, xuất kho, hành trình, đối soát COD. Người chỉ gọi khách và xử lý ngoại lệ. Bỏ bước check địa chỉ, 3 tab trung gian, SMS lần 1-3. Giữ nguyên luật check trùng và lý do hủy (dùng làm dữ liệu huấn luyện). |
| W2 | Đơn sàn TMĐT | Đồng bộ webhook + polling 30 phút; map SKU qua channel_listing; income dự kiến từ rule engine; quyết toán sàn thành bút toán; tiền về qua ví sàn, Pingpong, đổi VNĐ. Câu hỏi mở: giữ BigSeller hay xử lý trực tiếp. |
| W3 | B2B Ganico và giao dịch nội bộ | Lead, báo giá, đơn, thanh toán nhiều đợt khớp bank_txn, **xuất hàng theo tiền đã nhận / đơn giá**, hóa đơn đẩy MISA, đơn nội bộ TBG bán cho GNP tự sinh đơn mua, ghi sổ đối ứng, loại trừ khi hợp nhất. |
| W4 | Mua hàng, nhập khẩu, kho | Đề xuất mua dựa dự báo bán, đơn mua có chi phí từng chặng (nội địa VN, LCC, cước biển, đầu PH) mỗi chặng có tiền tệ/tỷ giá, hàng đi đường, nhập kho theo lô (giá vốn lô = (tiền hàng + chi phí thực các chặng) / SL nhận tốt), kiểm kê, hàng hoàn về lô cũ, cảnh báo hạn sử dụng. |
| W5 | Marketing và chi phí quảng cáo | Kéo chi tiêu tự động từ Meta/TikTok/Google/Shopee/Lazada Ads theo ngày, gán camp cho MKT/team/NSP, **một nguồn CPQC duy nhất**, ví quảng cáo là bút toán, cảnh báo camp vượt lằn ranh đỏ trong ngày. |
| W6 | Tiền và đối soát | Mọi nguồn tiền vào bank_txn; khớp tự động theo luật rồi khớp mờ có độ tin cậy; công nợ thời gian thực; chênh lệch tỷ giá có tài khoản riêng. |
| W7 | Lương và KPI | Snapshot chốt dữ liệu bất biến có phiên bản; bộ công thức cú pháp kiểu Excel (HyperFormula) để kế toán tự sửa; tính thử trên tháng trước; AI giải thích lương từng người; chi trả duyệt hai cấp. |
| W8 | Đóng kỳ và P&L | Danh mục đóng kỳ do agent kiểm; phân bổ chi phí chung theo allocation_rule; tính commission trưởng phòng, chi phí sensitive, dự phòng tồn kho; khóa kỳ, chụp báo cáo; AI viết nhận xét quản trị, BGĐ duyệt. |

## 5. Từ điển chỉ số (KT tr.14-16)
Mỗi chỉ số ghi 4 điều: tập đơn nào được tính, dùng ngày nào (ngày đặt, xuất kho hay giao), dùng tỷ giá nào, tham số nào từ rule engine. Các chỉ số: doanh số đặt (GMV), doanh số MKT tối ưu *(cần chốt)*, income dự kiến sàn, income/COD thực nhận, DS giao thành công dự kiến, CPQC *(cần chốt)*, CPQC/DSDK, tỷ lệ return, doanh số tính lương *(cần chốt)*, DSHQ, giá vốn đơn, lợi nhuận góp NSP, LN nhân viên, LN NET công ty, LN tạm tính hằng ngày, số ngày tồn còn đủ, số ngày lưu kho. Từ điển này cũng là **tri thức của AI**: khi hỏi "vì sao CPQC/DSDK team Kaido hôm nay 18%", agent trả lời bằng đúng định nghĩa và dẫn về số gốc.

## 6. Stack kỹ thuật và hạ tầng (KT tr.16-19)
- **Repo:** monorepo TypeScript strict (pnpm + Turborepo) gồm web, api, worker, mobile, packages/domain (công thức thuần + test), packages/contracts (schema Zod dùng chung FE/BE/MCP), packages/adapters.
- **API:** NestJS 11 (hoặc Fastify), command tách khỏi query; hợp đồng Zod sinh OpenAPI.
- **CSDL:** PostgreSQL 16 (RLS, phân vùng theo tháng, numeric cho tiền và kg, JSONB cho payload sàn).
- **Sự kiện và job:** transactional outbox → hàng đợi (BullMQ/Redis, hoặc Temporal cho luồng dài), khóa phân tán, idempotency key.
- **Số liệu:** bảng tính sẵn cập nhật theo sự kiện + kho OLAP (ClickHouse, hoặc Postgres + dbt lúc đầu); semantic layer (Cube hoặc tự xây).
- **Frontend:** React 19 + Next.js, i18n vi/en, PWA cho telesale và kho (quét mã bằng camera).
- **AI:** Claude qua API, agent runtime phía server, MCP server là cửa công cụ, pgvector cho tri thức, eval chạy trong CI.
- **Hạ tầng:** Google Cloud Singapore (cùng nơi tbestpro.pro): Cloud Run, Cloud SQL Postgres, Cloud Storage, Secret Manager, BigQuery; IaC; quan sát OpenTelemetry + Grafana + Sentry; backup PITR + bản sao ngoài vùng, diễn tập khôi phục hằng quý; CI/CD có test golden so với số liệu Tizi.
- **SLO:** đơn LadiPage vào hệ thống dưới 5 giây không mất đơn; đồng bộ đơn sàn dưới 5 phút qua webhook; báo cáo 1 tháng dưới 2 giây; tự khớp đối soát COD/sàn từ 95%; 99,9% giờ làm việc, RPO ≤ 5 phút, RTO ≤ 1 giờ.
- **Đa tenant fail-closed:** tenant lấy từ phiên đăng nhập, không từ header Host; thiếu tenant là lỗi; cron/job/webhook khai báo tenant tường minh; quyền xuyên tenant là policy riêng, tách đọc/ghi, có nhật ký.

## 7. Phân quyền, bảo mật, AI (KT tr.19-23)
- **Quyền = vai trò × phạm vi × độ nhạy cảm**, do **một policy engine** (Cerbos hoặc OPA) trả lời, áp cho giao diện, API, báo cáo và agent AI. **Agent không bao giờ có quyền cao hơn người đang dùng nó.**
- Độ nhạy cảm: thường, tiền (giá vốn, lợi nhuận, thanh toán), lương, hồ sơ cá nhân. Cột lợi nhuận chỉ kế toán/BGĐ; xem cần xác thực lại passkey, hạn 15 phút.
- Hồ sơ nhân sự tách bảng person, mã hóa cấp trường CCCD và tài khoản; mỗi lần xem ghi nhật ký. Secret trong Secret Manager/KMS. Nhật ký bất biến cho mọi thao tác ghi, mọi lần xem số nhạy cảm, mọi hành động của agent (kèm prompt và công cụ đã gọi).
- **AI là lực lượng lao động có việc cụ thể**, mỗi agent có 4 thứ: công cụ riêng, người chịu trách nhiệm, KPI, bộ eval. **4 mức tự chủ:** L0 gợi ý; L1 soạn sẵn (người bấm gửi); L2 làm sau khi người duyệt trong Hộp duyệt; L3 tự làm trong hạn mức, báo cáo sau. Nâng L2 lên L3 cần tỷ lệ đúng vượt ngưỡng và BGĐ duyệt.
- **Rào chắn cứng:** agent không bao giờ tự chuyển tiền, tự sửa kỳ đã khóa, tự đổi công thức lương; có hạn mức số thao tác và chi phí gọi model theo ngày; luôn chạy dưới quyền một người chịu trách nhiệm.
- **Agent giai đoạn đầu:** Đơn hàng (chuẩn hóa SĐT/địa chỉ, điểm rủi ro, map SKU), Telesale copilot, Giao vận, Đối soát (SOA, sàn, ngân hàng), Marketing, Kho và mua hàng, B2B Ganico, Đóng kỳ, Lương, Chất lượng dữ liệu, Trợ lý số liệu (⌘K).
- **Vá ngay trên hệ cũ (không chờ rebuild):** bật mongodump hằng ngày và thử khôi phục, tắt đăng nhập admin mặc định, thêm kiểm role cho các endpoint lộ dữ liệu, đóng cổng thừa, giới hạn thử đăng nhập, thêm secret cho webhook LadiPage, xoay vòng secret sàn. (Chi tiết kỹ thuật xem trực tiếp KT tr.19-20.)

## 8. Giao diện (KT tr.24-25)
Phong cách Apple HIG (rõ ràng, nhường chỗ cho nội dung, có chiều sâu). Sidebar cố định **10 mục** (Hôm nay, Đơn hàng, Khách hàng, Sản phẩm và giá, Kho và mua hàng, Tiền, Marketing, Báo cáo, Con người, Cài đặt) ẩn/hiện theo quyền; **workspace switcher** (Tizi, Ganico, Tbestpro Global). Mỗi màn: KPI tóm tắt + nhận định AI; bảng gọn tối đa 7 cột; Inspector trượt ra bên phải. Thành phần chung: ⌘K (lệnh ngôn ngữ tự nhiên), Hộp duyệt, passkey step-up, Smart view. PWA cho telesale và kho. Màn ưu tiên: Hôm nay, Đơn hàng + Inspector, Đối soát COD, P&L drill-down tới đơn, Hộp duyệt, Cài đặt quy tắc.

## 9. Lộ trình chuyển đổi (KT tr.25-27; IT tr.11)
Strangler: hệ cũ là nguồn sự thật đến khi nghiệm thu; mỗi đêm chạy job so khớp, đẩy báo cáo lệch vào Hộp duyệt; có nút rollback từng mảng; chạy song song ít nhất 1 chu kỳ tháng cho tiền, giá vốn, lương.
| GĐ | Nội dung | Thời gian ước tính | Tiêu chí nghiệm thu |
|---|---|---|---|
| 0 | Ổn định hệ cũ: vá bảo mật, bật backup, chốt quy tắc nghiệp vụ, xuất golden dataset (đơn, giá vốn, lương, COD 3 tháng mẫu) | 1-2 tuần | Backup khôi phục thử thành công; golden dataset được kế toán ký xác nhận |
| 1 | Nền tảng dữ liệu: Postgres + RLS, OIDC/passkey, tenant, outbox, đồng bộ một chiều Mongo → Postgres, semantic layer | 3-4 tuần | Báo cáo v2 khớp golden dataset ≤ 0,5% |
| 2 | **Gani + Tbestpro Global** trên v2 (khách, kho, lô FIFO, PO, công nợ, đơn xuất khẩu) | 3-4 tuần + 2-4 tuần chạy song song | 1 kỳ tháng song song, lãi gộp và tồn kho khớp |
| 3 | Đơn hàng Tizi + kết nối: ChannelAdapter, CarrierAdapter (J&T, Flash), check trùng, telesale, kho | 5-7 tuần | Mọi đơn 1 tuần vào đủ 2 hệ, trạng thái vận đơn khớp ≥ 99,5% |
| 4 | Sổ cái và P&L: đối soát COD/payment, phí sàn theo ngày hiệu lực, chi phí tháng | 4-6 tuần | Đối soát 1 tháng chênh lệch COD = 0 sau giải trình; P&L khớp báo cáo kế toán |
| 5 | Lương và KPI: rule engine thay HyperFormula | 3-4 tuần + 1 kỳ lương song song | 100% phiếu lương khớp hoặc lệch có duyệt |
| 6 | Tắt hệ cũ: chuyển ghi toàn bộ sang v2, hệ cũ chỉ đọc 3 tháng rồi lưu trữ | 1-2 tuần | Không còn ghi mới vào Mongo trong 30 ngày |
Tổng khoảng **5-6 tháng**; Gani có bản chạy thật sau khoảng 6-8 tuần. Điều quyết định tốc độ là việc **chốt quyết định nghiệp vụ** và chạy song song, không phải viết code.
**Lưu ý app API dùng chung:** hai hệ cùng dùng một app đã duyệt của sàn phải theo 4 quy tắc (một chủ token duy nhất vì refresh token xoay vòng; hệ cũ giữ quyền refresh ở GĐ 1-2...).

## 10. Phần IT v10 bổ sung/khác KT (IT tr.2, 10-11)
- **Tách dữ liệu bằng 5 chiều độc lập thay vì "tenant"**: pháp nhân, đơn vị kinh doanh, kênh bán, tổ chức, kho. Mỗi đơn, khách, khoản thu, phiếu kho gắn đúng 1 pháp nhân và 1 đơn vị kinh doanh ngay khi tạo. Lý do: ở hệ cũ trường tenant vừa thay pháp nhân vừa thay mảng kinh doanh.
- **Quyền gắn vào vị trí trong sơ đồ, không gắn người**; một người nhiều vị trí (kiêm nhiệm); vị trí có ngày hiệu lực; phạm vi xem = tổ chức × kênh × pháp nhân × đơn vị kinh doanh × kho. Quyền lấy từ trường "kênh", không dò theo tên (ví dụ Team Facebook Ads B2B mang mã FB-B2B nhưng dữ liệu thuộc Ganico).
- **Mã trung tính** cho kho và tài khoản thu tiền (MLB-K5 thay cho tên người; dạng [Loại]-[Pháp nhân]-[Tiền tệ]-[STT]); bảng đối chiếu tên thật chỉ BGĐ và kế toán trưởng xem.
- **Bảo mật dữ liệu khi xây:** môi trường dev/demo dùng **bản sao dữ liệu đã che** (số tiền thay số giả giữ cấu trúc; tên, SĐT, số tài khoản che); công thức kiểm bằng bộ dữ liệu mẫu có đáp án; chạy song song thì đối chiếu số thật do kế toán trưởng/BGĐ làm, công cụ so sánh chỉ báo "khớp"/"lệch", không hiện số; quyền đọc DB thật chỉ trưởng bộ phận IT; che trên giao diện không ngăn được người có quyền đọc DB, nên phân quyền DB là lớp bảo vệ chính.
- **Quy trình xây:** mỗi vai trò xem demo, xác nhận workflow và dữ liệu mình được thấy, góp ý; công ty chốt demo chính thức rồi mới code; **BA rà soát từng vai trò trước khi chốt demo**. Nút "Góp ý" trên mọi màn, lưu tập trung.
- **Đo cải tiến theo số click** (IT tr.11): mở phần mềm 0 click (Hôm nay của tôi); nhập chi phí quảng cáo 1 bảng cả tháng tự điền từ Facebook thay vì 5-10 click/lần; tạo MKT Link từ khoảng 20 click xuống 1 click; mua hàng giảm khoảng 70% thao tác; kiểm kê quét mã.
- **Đăng nhập:** Google Workspace @tbestpro.vn. **Kiến trúc tham chiếu ưu tiên:** đề xuất của trưởng bộ phận IT.

## 11. Hai bản kiến trúc đang lệch nhau (cần làm rõ)
| Điểm | KT (06/10, "@Tai") | IT v10 (13/10) |
|---|---|---|
| Cấu trúc ứng dụng | **Modular monolith** trước, tách dịch vụ sau | **Service tách theo nghiệp vụ**, mỗi service một schema PostgreSQL |
| Cô lập dữ liệu | **Tenant** (pháp nhân) + RLS ở DB | **5 chiều** (pháp nhân, đơn vị kinh doanh, kênh, tổ chức, kho), bỏ "tenant" |
| Frontend | React 19 + Next.js | React dùng chung |
| Đăng nhập | OIDC + passkey | Google @tbestpro.vn |
| Thứ tự | Gani trước, rồi Tizi (chạy song song) | Giống |
[S] IT là bản mới hơn và nói rõ "ưu tiên đề xuất của trưởng bộ phận IT", nên nhiều khả năng đây là hướng đang chọn; **chưa có tài liệu xác nhận**. Đây là cơ hội rất tốt để bạn làm bài **ADR (ghi quyết định kiến trúc)**: hai mô hình đánh đổi gì, quy mô 1.500 đơn/ngày và đội IT 4-5 người có hợp microservice không.

## 12. Điểm mạnh và rủi ro để bạn suy nghĩ [S, ý kiến của tôi]
- **Mạnh:** nhận diện đúng gốc rễ là định nghĩa số liệu; sổ cái kép + sổ lô + từ điển chỉ số là xương sống đúng cho công ty đa pháp nhân; strangler với golden dataset ít rủi ro; AI có quyền hạn và bậc tự chủ rõ.
- **Rủi ro:** phạm vi "all-in-one" rất rộng so với đội IT 4-5 người (trong đó 3 BA, 1 outsource); lộ trình 5-6 tháng lạc quan khi quyết định nghiệp vụ chưa chốt; hai hướng kiến trúc chưa thống nhất; chạy song song đòi hỏi kế toán và vận hành dồn công sức; phụ thuộc vào việc BGĐ chốt 4-6 quyết định; mua hàng, kho Philippines, hàng hoàn chưa được mô tả chi tiết ở mức thao tác.
