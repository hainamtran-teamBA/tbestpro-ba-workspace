# Nghiệp vụ Kho và WMS

## 1. Luồng chính
| Quy trình | Việc chính | Chứng từ | Điểm kiểm soát |
|---|---|---|---|
| **Inbound (nhận hàng)** | Đối chiếu phiếu nhập với PO và ASN của NCC; kiểm tra chất lượng (QC); xử lý thiếu/thừa/hỏng | PO, ASN, phiếu nhập kho (GRN), biên bản QC | Đếm thực tế, ghi nhận chênh lệch, không nhập khi chưa đối chiếu |
| **Putaway (cất hàng)** | Hệ thống gợi ý vị trí (location/bin) theo kích thước, hàng bán chạy để gần khu xuất, hàng nặng tầng thấp | Phiếu putaway, sơ đồ vị trí | Mỗi SKU có vị trí; quét mã vị trí khi cất |
| **Picking (nhặt hàng)** | Nhặt theo đơn, theo lô (batch) hoặc theo khu (zone); quy tắc FIFO, FEFO (hạn sử dụng), LIFO | Phiếu nhặt, danh sách pick | Nhặt đúng SKU/số lượng/lô; ưu tiên theo quy tắc xuất |
| **Packing và Outbound** | Đóng gói, in vận đơn, bàn giao đơn vị vận chuyển, trừ tồn | Phiếu xuất, vận đơn, biên bản bàn giao | Quét đối chiếu đơn-hàng-vận đơn trước khi giao |
| **Cycle count** | Kiểm kê cuốn chiếu theo phân loại ABC thay vì đóng kho kiểm kê toàn bộ | Phiếu kiểm kê, biên bản chênh lệch | A đếm thường xuyên, C ít; xử lý chênh lệch có phê duyệt |
| **Returns (hàng hoàn)** | Nhận hàng hoàn, kiểm tra, phân loại nhập lại/hỏng, cập nhật tồn | Phiếu nhập hoàn | Không nhập lại tồn bán được khi chưa kiểm |
| **Transfer (chuyển kho)** | Xuất kho đi, hàng đang chuyển, nhập kho đến | Lệnh chuyển kho, phiếu xuất/nhập | Đối chiếu số xuất với số nhận |

## 2. Liên hệ kế toán
- **Hàng đi đường (in-transit):** hàng đã xuất khỏi kho gửi/NCC nhưng chưa nhập kho nhận. Cần ghi nhận riêng (ví dụ TK 151 theo chế độ kế toán VN) để không mất hàng khỏi sổ. Rủi ro: hàng đi đường quá lâu, không ai chịu trách nhiệm đối chiếu.
- **Ghi nhận tồn kho:** thời điểm ghi tăng/giảm tồn phải khớp chứng từ (nhập khi nhận và QC xong, xuất khi bàn giao vận chuyển).
- **Giá vốn (COGS):** phương pháp tính FIFO, bình quân gia quyền, hoặc đích danh. Giá nhập gồm giá mua + chi phí vận chuyển/thuế/nhập khẩu phân bổ. Giá vốn xuất kho phụ thuộc phương pháp, nên dữ liệu nhập sai sẽ làm lệch lãi gộp.
- **Chênh lệch kiểm kê:** thiếu/thừa phải có biên bản, xác định nguyên nhân (mất, nhầm, hỏng) và bút toán xử lý được phê duyệt.
- **Hàng hoàn:** ghi giảm doanh thu/giá vốn tương ứng; hàng hỏng không nhập lại tồn bán được.
- **Công nợ NCC:** đối chiếu PO, phiếu nhập và hóa đơn (3-way match) trước khi thanh toán.
- **Chuyển kho nội bộ:** không phát sinh doanh thu/giá vốn nhưng phải giữ đúng tồn từng kho và hàng đang chuyển.

## 3. Rủi ro và dấu hiệu
| Rủi ro | Dấu hiệu | Gốc thường gặp |
|---|---|---|
| Thất thoát | Tồn sổ lệch tồn thực, hao hụt tăng | Kho thủ công, không quét mã, một người làm cả nhập/xuất/kiểm |
| Lệch tồn | Bán được mà không có hàng, hoặc ngược lại | Ghi chứng từ trễ, nhập tay sai |
| Lệch giá vốn | Lãi gộp bất thường | Chi phí nhập chưa phân bổ, phương pháp tính không nhất quán |
| Hàng đi đường treo | Phiếu chuyển/xuất quá hạn chưa nhập | Không có người đối chiếu |
| Hàng hoàn không kiểm | Hàng hỏng quay lại tồn | Thiếu quy trình QC hoàn |

## 4. Mức trưởng thành triển khai (để đối chiếu với công ty)
1. Thủ công: sổ/Excel, đếm tay, không mã vị trí
2. Có quy trình và chứng từ chuẩn, phân quyền (tách người nhập/xuất/kiểm)
3. Phần mềm quản lý kho, mã SKU và vị trí, kiểm kê định kỳ
4. Quét mã vạch/QR bằng thiết bị, đối chiếu thời gian thực
5. WMS đầy đủ: gợi ý putaway, tối ưu picking, tích hợp kế toán và vận chuyển

## 5. Câu hỏi nên hỏi người vận hành
- Một đơn hàng đi từ lúc có đơn đến lúc giao: ai chạm vào hàng ở bước nào, ghi chép ở đâu?
- Tồn kho thực và tồn hệ thống lệch lần gần nhất bao nhiêu, xử lý ra sao?
- Giá vốn hiện tính theo phương pháp nào, ai chốt?
- Hàng chuyển giữa các kho/hàng hoàn xử lý thế nào, ai đối chiếu?

## 6. Tbestpro
> Nguồn: KT, IT. Cập nhật 2026-10-26. Chi tiết xem `thuc-te-cong-ty.md`.
- **Không có WMS riêng.** Chức năng kho nằm trong Tizi/Gani: tồn kho tính lại từ đơn mỗi 2 phút, phiếu nhập/xuất, chuyển kho, kiểm kê (reset).
- **Kho:** 3 kho tại Malabon (Philippines): MLB-K5 và MLB-K6 (hàng Tizi, chủ hàng Laco; hiện gộp thành 1 trên hệ thống), MLB-K7 (cà phê Ganico, chủ hàng Ronnila; **chưa hạch toán trên phần mềm**). Kho Cebu dự kiến (đối tác fulfilment).
- **Nhân sự:** 2 quản lý kho PH-WH và 50 pickup PH-PICK; quy trình pickup: soạn hàng, quét mã, bàn giao J&T/Flash Express.
- **Giá vốn:** Tizi bình quân tháng; Gani FIFO có lỗi (không đưa tồn đầu kỳ, bỏ hàng hỏng, âm kho). Chờ Ban Giám đốc chốt phương pháp (đề xuất FIFO).
- **Mức trưởng thành (mục 4):** có phần mềm và quét mã khi bàn giao [N], các điểm còn lại (vị trí/bin, putaway, cycle count theo ABC) chưa thấy trong tài liệu [?] → hỏi người dùng/vận hành kho khi cần.
- **Hàng đi đường, hàng hoàn, chuyển kho giữa pháp nhân:** Tbestpro Global xuất kho thì Gani 1 tự sinh đơn mua bên Ganico; phải loại trừ khi hợp nhất. Quy trình hàng hoàn về kho chưa có trong tài liệu [?].

## 7. Cách thị trường kiểm soát tồn kho thời gian thực (nghiên cứu web 2026-10-26)
> **Hầu hết là blog/trang sản phẩm của nhà cung cấp**, số liệu là tuyên bố của họ, chưa kiểm chứng độc lập. Chưa tìm thấy nguồn riêng cho **kho cà phê/ngũ cốc**; các kết quả đến từ ngành liền kề (thực phẩm, phân bón, vật liệu rời, bán lẻ). Chưa tra nhà cung cấp ở Đông Nam Á.

**Nguyên tắc nhiều nguồn cùng nêu**
- Lỗi tồn thường **bắt đầu từ nhận hàng, cất hàng, di chuyển**, không phải nhặt hàng; nên đặt kiểm soát ở phía trước luồng. [[Cleverence](https://www.cleverence.com/articles/for-business/inventory-procedures-for-warehouse-4827/)]
- **Một sổ ghi duy nhất**; mỗi di chuyển ghi bằng quét hoặc tác vụ do hệ thống giao, không dùng giấy/bảng tính. [[Hopstack](https://hopstack.io/blog/top-inventory-control-strategies-for-high-performing-warehouses)]
- **Kiểm kê theo sự kiện** (kích hoạt sau hoạt động) thay vì chỉ theo lịch; **chia tần suất theo ABC** (A hằng ngày/tuần, B tuần/tháng, C tháng/quý); **kiểm kê mù**; **ngưỡng chênh lệch** (nhỏ thì đếm lại, lớn thì điều tra); **người đếm không duyệt điều chỉnh lớn**. [Hopstack; Cleverence]
- **Nhận hàng:** đối chiếu thông báo giao hàng (ASN), quét mã nhà cung cấp, đánh dấu chênh lệch **trước khi hàng vào kệ**; nhận có chênh lệch lớn cần xác nhận lần hai. [Cleverence]
- **Cất hàng có hướng dẫn** theo quy tắc (vòng quay, kích thước, nguy cơ) để giảm phụ thuộc phán đoán cá nhân. [Cleverence]
- **Chỉ tiêu ví dụ:** độ chính xác vị trí 99%, lỗi nhặt 0,1%, mọi vật tư được quét mỗi lần di chuyển. [Cleverence] *(con số nhà cung cấp nêu làm ví dụ)*

**RFID hay barcode**
- Phổ biến là **mô hình lai:** **barcode** để nhặt và xác minh từng món, **RFID** để xác nhận ở cổng nhận hàng và kiểm kê cấp pallet. Barcode rẻ hơn mỗi đơn vị, RFID có lợi khi đọc **hàng loạt** giảm công quét. RFID thường **thí điểm trước**. [[Racklify](https://racklify.com/encyclopedia/barcode-inventory-software-versus-rfid-when-to-use-each/); [Fabrico](https://www.fabrico.io/blog/barcode-vs-rfid-tracking/)]
- **Giá tem** các nguồn nêu rất khác nhau (barcode vài xu; RFID thụ động từ khoảng 10-30 xu đến vài đô); **độ chính xác** "65-80% với barcode, 95-99% với RFID" là tuyên bố tiếp thị, **không có so sánh độc lập**. RFID có thể suy giảm gần kim loại hoặc chất lỏng nếu không chọn tem phù hợp. [[Cybra](https://cybra.com/rfid-faqs/how-accurate-is-rfid-compared-to-barcode-scanning/)]
- Một bài tập tình huống (Metro): gắn tem RFID **cấp thùng** tốn khoảng 155.550 USD so với khoảng 2.224 USD **cấp pallet** (số minh họa, không dùng để tính). [[Temple University case](https://community.mis.temple.edu/mis3537beaver2017/?p=280)]
- **Hệ quả cho cà phê bao [ý kiến]:** gắn tem từng bao sẽ đắt và khó; hợp lý hơn là **barcode/QR cho bao và lô**, **RFID chỉ cân nhắc cấp pallet/cổng nhận hàng sau pilot**.

**Bao dở và cân**
- Với thùng/bao bị tách thành phần dư: hệ thống nên **mô hình hóa đơn vị chứa, cho dán nhãn lại ngay tại sàn khi tách, giữ truy vết qua mỗi lần tách**. [[Cleverence rare-earth WMS](https://www.cleverence.com/amp/articles/business-blogs/rare-earth-wms-4827/)] Cách thiết kế **K7-ODD-ZONE + tem phần dư** của demo phù hợp với hướng này.
- **Cân nối phần mềm:** Datascope WMS cho nối cân để cân từng bao và hiệu chỉnh số lượng trước khi chuyển vị trí, nhưng **ghi rõ hàng quản lý theo lô chưa được hỗ trợ ở module đó** (vẫn có module riêng cho hàng theo lô). [[Datascope](https://datascopewms.atlassian.net/wiki/x/P4D7B)]
- **Ví dụ nối cân Bluetooth:** Finale Inventory nhận cân làm số lượng khi nhận, nhặt, kiểm kê, chuyển kho, nhưng cần **bộ chuyển cổng nối tiếp sang Bluetooth** nên không dùng được với cân Bluetooth thuần. [[Finale](https://support.finaleinventory.com/hc/en-us/articles/4403737172379-How-to-connect-a-digital-scale-with-Bluetooth-to-a-Finale-Inventory-mobile-scanner-for-recording-weights)] Bizerba E3 basic và MobileDemand xScale là cân Bluetooth để **bạn tự tích hợp**, không có tài liệu API. [[Bizerba](https://www.bizerba.com/int/en/products/e3_basic); [MobileDemand](https://www.mobiledemand.com/solutions/bluetooth-mobile-scale-weight-capture)]
- **Chưa có nguồn** nói về trừ bì, về ổn định số cân trước khi ghi, về đơn vị. Cần thử với cân thật.
- Một ứng dụng có **chế độ ngoại tuyến** (offline) là điểm đáng lưu ý cho sàn kho Wi-Fi yếu. [WISK, qua kết quả tìm kiếm]

**Chưa tìm thấy / việc tra tiếp:** hệ thống riêng cho cà phê/ngũ cốc (ví dụ kho bao của nhà xuất khẩu, nhà rang lớn, nhà vận hành kho hàng nông sản); nhà cung cấp và thiết bị bán được ở Philippines/Việt Nam; giá thực tế; độ bền nhãn trên bao đay.

## 8. Khảo sát vòng hai: phần mềm, thiết bị, nhãn (nghiên cứu web 2026-10-26)
> Nguồn gần như hoàn toàn từ **trang nhà cung cấp hoặc bài "tốt nhất" của bên bán**; chưa kiểm chứng giá, tính năng, đánh giá khách hàng. Danh sách bên dưới là **ứng viên để hỏi**, không phải khuyến nghị.

**Cà phê và hàng hóa (thương mại/nhập khẩu)**
- **Qbil**: ERP cho thương mại hàng hóa, theo dõi tồn theo kho và theo pháp nhân, hợp với lưu kho bên ngoài. [[Qbil](https://qbilsoftware.com/erp-software-for-the-green-coffee-trade/)]
- **FoodReady** (trang hướng dẫn của chính nhà cung cấp, có thể thiên vị): ghi độ ẩm khi nhận, gán mã vạch/QR, vị trí bin thời gian thực, FIFO/FEFO. [[FoodReady](https://foodready.ai/guides/best-coffee-inventory-management-software/)]
- **Softengine Coffee One** (trên SAP Business One), **Inecta Food ERP** (trên Dynamics 365 Business Central), **NetSuite** (theo trang đánh giá): lô, nhiều kho, định giá, nhưng là mức ERP. [[Softengine](https://softengine.com/blog-green-coffee-inventory-management/)]
- **Lời khuyên một bài hướng dẫn:** hỏi nhà cung cấp có giữ **lô nhà cung cấp, lô nội bộ, xuất xứ, hợp đồng, trạng thái chất lượng, vị trí lưu kho đến tận lô giao khách** không.
- Hầu hết nhắm đến **nhà rang**, ít bên nói về nhà nhập khẩu/xuất khẩu (chứng từ hải quan, hợp đồng).

**Philippines**
- **Focus WMS (Focus Softnet)**: WMS đám mây, có VAT, nhận hàng, cất hàng, nhặt, mã vạch. [[Focus](https://www.focussoftnet.com/ph/focus-wms-software)]
- **Ecount**: ERP kèm quét mã vạch, nhiều kho, **có đường dẫn dùng thử**. [[Ecount PH](https://www.ecount.com/ph/ecount/trial/inventory-management-system-philippines)]
- **Delaware Philippines** (SAP Warehouse Management), **FAST Logistics** (triển khai Honeywell WMS), **JMB IT** (SME), **Unicommerce** (hướng thương mại điện tử). [[Delaware](https://www.delaware.pro/en-ph/solutions/warehouse-management); [FAST](https://blog.fast.com.ph/?p=1013); [Unicommerce](https://unicommerce.com/ph/warehouse-management/)]
- **Tiêu chí chọn theo một hướng dẫn:** hỗ trợ **ngoại tuyến**, mã vạch GS1, **nhiều đơn vị đo**. [[Cleverence](https://www.cleverence.com/articles/for-business/inventory-management-software-philippines-7395/)]

**Việt Nam**
- **MISA AMIS Kho hàng** và **Sapo**: quét mã vạch/QR bằng điện thoại, tồn theo lô và hạn, vị trí; có thể đồng bộ với ERP/WMS. Chủ yếu hướng bán lẻ/SME; chưa rõ hỗ trợ bao dở, cân lẻ, hàng bao lớn. [[MISA](https://amis.misa.vn/228925/quan-ly-kho-bang-ma-vach/); [Sapo](https://www.sapo.vn/blog/quan-ly-kho-bang-ma-vach)]
- Công ty đã dự kiến đẩy hóa đơn B2B sang MISA nên **khả năng nối MISA là một tiêu chí**.

**Thiết bị**
- **Điện thoại có camera** đủ cho quét nhẹ, ít; kém với nhãn nhỏ, nhăn, độ tương phản thấp, ca dài ở môi trường bụi/lạnh. **Máy quét chuyên dụng** đọc nhanh hơn và bền hơn cho khối lượng lớn. Giá mà một nhà cung cấp phần mềm nêu: máy chuyên dụng khoảng 1.500-2.500 USD, điện thoại 250-600 USD (một chiều, chưa kiểm chứng). [[Cleverence](https://www.cleverence.com/articles/business-blogs/mobile-scanning-impact-on-barcode-scanning-4728/); [Packagex](https://packagex.io/blog/why-barcode-scanners-are-being-replaced-by-smartphones)] **Không có so sánh độc lập**; cần thử trên nhãn và điều kiện kho thật.
- **Nhãn trên bao đay:** chưa có thử nghiệm nào cho mã vạch in trực tiếp lên bao đay. Nguồn gián tiếp: **thẻ buộc (tie-on tag) giữ chắc hơn nhãn dán** trên bề mặt thô/bụi; vật liệu thẻ giấy hoặc nhựa/polyester khác nhau về độ bền; bao đay hút ẩm và dầu nên ảnh hưởng độ bám và mực. [[Hub Packaging](https://shop.hub-packaging.com/products/pre-strung-wired-tags.html); [Cromwell](https://www.cromwell.co.uk/shop/storage-and-handling/sack-tags-and-ties/c/060816)] **Cần tự thử** (mài mòn, ẩm, quét lại sau vận chuyển).

**Chưa tìm thấy:** WMS chuyên cà phê nhân dùng ở Đông Nam Á; so sánh độc lập; giá thật; hỗ trợ bao dở và cân lẻ ở các sản phẩm nêu trên.

## 9. Nhà cung cấp QR/RFID và cân cho Kho 7 ở Philippines (agent nghiên cứu, 2026-11-03)
> Chưa xác nhận được nhà tích hợp RFID nào ở Metro Manila. Không có thông tin demo, SDK, giá của các bên PH (trừ giá bán lẻ online): phải hỏi trực tiếp. Một số nguồn cũ (2007, 2012).

| Nhóm | Bên | Ghi chú | Nguồn |
|---|---|---|---|
| RFID | RS Philippines | Phân phối đầu đọc, thẻ; không tích hợp; có giá trên web | [RS PH](https://ph.rs-online.com/web/p/identification-sensors/1963702) |
| RFID | Makerlab.ph | Bán lẻ thẻ UHF (1 hoặc 5 cái), hợp mua thử | [Makerlab](https://www.makerlab.ph/products/uhf-rfid-tag) |
| RFID | Skyhawk Technology Systems | Đầu mối cũ, cần kiểm lại | [RFID Journal](https://www.rfidjournal.com/?p=176450) |
| RFID | Chainway C5/C72 (đầu đọc cầm tay Android) | Chưa thấy nhà phân phối PH | [Impinj](https://impinj.com/partners/chainway/c5-handheld-rfid-reader) |
| RFID, in tem | Zebra | Trung tâm bảo hành PH (Highpoint, từ 2021); tìm đại lý qua Partner Locator | [tin 2021](https://www.printedelectronicsnow.com/contents/view_breaking-news/2021-12-03/zebra-technologies-opens-first-service-center-in-the-philippines/) |
| QR/barcode | Barcotech Philippines | Đối tác Honeywell; máy quét, máy in, tự làm tem; có khách kho bãi | [Honeywell partner](https://productivity.honeywell.com/partners/english/directory/partner/1233377/barcotech-philippines-inc) |
| QR/barcode | Newegg PH | Tham khảo giá: Zebra ZD621 ₱27.353,77 | [Newegg](https://www.newegg.com/global/ph-en/Supersuperuncle-Barcode-Label-Printers/BrandSubCat/ID-211532-3031) |
| Cân | First Philippine Scales (Malabon) | Sản xuất, phân phối cân; cổng dữ liệu chưa rõ | [danh bạ](https://www.sourceready.com/supplier/detail/first-philippine-scales) |
| Cân | Mettler-Toledo PH; Up-Town Industrial Sales | Có văn phòng PH | [Mettler PH](https://www.mt.com/ph/en/home/site_content/contact_us.html) |

- Mẫu đầu cân tham khảo: Adam AE503 (in tem QR khi cân), DINI ARGEO dfwli (RS232 nối máy in tem).
- **Case gần nhất:** KWS gắn UHF từng bao hạt giống, phần mềm gom thành "pallet ảo" ([Sigma Chemnitz](https://www.sigma-chemnitz.de/en/references/references/reference-video-kws-europe-wide-tracing-of-seed-bags), trang NCC). Adani Grain Logistics (Ấn Độ, 2007) dùng RFID cho kho ngũ cốc ([RFID Journal](https://www.rfidjournal.com/?p=176443), chưa đọc toàn văn). Không tìm thấy case ở PH, gạo, đường, phân bón.
- **Rủi ro RFID trên bao hạt:** hạt hút sóng UHF, ẩm càng hút mạnh, bao giữa đống khó đọc. Một nghiên cứu: độ ẩm 0-25% đọc 100%, trên 30% dưới 95% ([earticle](https://www.earticle.net/Article/A301607)). [Suy luận] cà phê nhân khoảng 10-12% ẩm, nên rủi ro chính có thể là đọc xuyên khối xếp chồng; nên thử thẻ treo ở miệng bao hoặc thẻ trên pallet. Chưa tra dải tần UHF và chứng nhận NTC ở PH.

## 10. Bên giải pháp đã tiếp xúc (học quy trình, không phải để mua ngay)
### NextWave (người dùng kể lại theo trí nhớ, 2026-11-03; cần xác nhận lại)
- **Nhận hàng:** trước khi hàng về, khai báo sản phẩm trên phần mềm của họ (ví dụ bao cà phê Robusta 60 kg); dùng **bàn đọc/ghi RFID** đưa lần lượt từng thẻ vào để ghi thông tin, số đếm tăng dần đến số dự kiến (ví dụ 100 bao); sau đó mang thẻ đi dán lên bao.
- **Kiểm kê:** ứng dụng di động chạy trên máy quét RFID cầm tay; khi có lệnh kiểm kê, cầm máy quét trong khu vực khoảng 8 m.
- **Câu hỏi còn phải hỏi họ [ý kiến của tôi]:** gắn thẻ từng bao (khoảng 2.000 thẻ/tháng: giá thẻ, công dán, gắn ở đâu trên bao dệt); số kg thực tế từ cân sàn đi vào đâu (luồng của họ chỉ đếm bao, coi mỗi bao 60 kg); thẻ của bao bị rạch hoặc trộn xử lý thế nào; đọc được bao ở giữa chồng pallet 10 bao không, tỷ lệ đọc thực tế; dữ liệu đẩy sang phần mềm công ty bằng cách nào (API); chạy khi mất mạng; giá trọn gói và bản dùng thử.
