# Dự án WMS Kho 7 (Gani 2 WMS) và phân quyền Ganico 2

> Nguồn: **[Sổ tay]** = "Sổ tay WMS Version 1.0.pdf" (sổ tay giới thiệu demo, 3 trang); **[Demo]** = "Gani 2 WMS.html" (bản demo; tôi chỉ đọc chữ giao diện và chú thích, **chưa chạy thử để xem logic**); **[PQ]** = "Ganico2_so_do_phan_quyen_va_quy_trinh (1).pdf" (cập nhật 20/10/2026, đã chỉnh theo phản hồi, 12 trang). Cập nhật 2026-10-26. Tài liệu nội bộ.
> Demo chạy trong phiên, **chưa phải dữ liệu kho lưu chính thức** [Sổ tay tr.1].

## 1. Phạm vi và xác nhận
- Đây là **Kho 7 (Malabon): cà phê nhân Ganico**, chủ hàng Ronnila (PH02). [Sổ tay tiêu đề "TBESTPRO / KHO 7"]
- Hệ thống đích: **Gani 2** (bản xây lại của gani.asia). [?] Người dùng nói hiện dùng "Tizi"; tài liệu cho thấy kho cà phê thuộc Ganico nên nhiều khả năng là **Gani 1 (tenant ganico)**: cần xác nhận.

## 2. Demo thể hiện gì [Sổ tay tr.1-2, Demo]
| Nhóm | Mức thể hiện |
|---|---|
| Nhập kho và chất lượng | Nhận PO dự kiến; nhập kg đạt/hỏng, độ ẩm, ngày sản xuất, hạn sử dụng; ảnh phiếu cân + **OCR giả lập**; tạo lô và **tem lô**; tính số pallet (tối đa 15 bao/pallet), in tem pallet cùng một lô |
| Trạng thái nhập | **Tạm nhập (chờ kế toán duyệt)**: tồn chưa vào "Tồn khả dụng" cho đến khi kế toán duyệt; hàng hỏng/ẩm mốc cách ly ở **K7-QC-HOLD**, bắt buộc ảnh bằng chứng |
| Cất hàng, vị trí | Khu **K7-INBOUND** (dock) → bay; **K7-ODD-ZONE** (bao dở); quét QR lô + mã vạch bay; cất hàng chỉ đổi vị trí, không tăng tổng kg |
| Xuất kho và rạch bao | Lệnh xuất chỉ định lô/vị trí; **bao dở ưu tiên xuất trước**, bao nguyên theo FIFO; quét xác nhận đúng lô (quét sai báo "SAI LÔ"); nhập cân; **rạch bao 60kg** → tem lô con cho phần dư, vào ODD-ZONE |
| Kiểm kê, báo hỏng | **Kiểm kê mù** (không hiện tồn hệ thống đến khi gửi); kho gửi đề xuất, **kế toán duyệt/từ chối**; tồn chỉ điều chỉnh khi được duyệt; báo hỏng (ẩm mốc, mọt, rách bao) kèm ảnh |
| Điều phối | Kế toán nhập xác nhận tiền → **đẩy lệnh xuống kho** ("không qua Viber"); ví dụ 15.000.000 ÷ 250.000/kg = 60 kg |
| Tra cứu, kiểm soát | Sổ lô FIFO, **nhật ký stock_move bất biến** (tồn = tổng stock_move theo lô), hộp duyệt ngoại lệ; giá vốn và giá trị tài chính **ẩn với vai trò kho**; bảng điều khiển có chỉ số "0 tin nhắn Viber" |

## 3. Chưa có / giới hạn [Sổ tay tr.3]
- **Ưu tiên trước pilot:** lưu dữ liệu tập trung, nhiều người dùng, kiểm soát quyền phía máy chủ, **chặn xuất vượt, tồn âm, gửi/duyệt lặp**, xử lý rạch bao nhất quán.
- **Quét và in thật:** mã QR/barcode đọc được bằng camera/máy quét, nhãn, máy in thực tế.
- **Cân Bluetooth:** cần khảo sát model cân, giao thức, thiết bị; trừ bì, lưu bằng chứng; **chưa mặc định tương thích**.
- **Tối ưu vị trí:** chưa có thuật toán theo sức chứa/đường đi.
- **FIFO:** bao dở theo ngày mở trước; bao nguyên theo ngày sản xuất rồi ngày nhận; **cần chốt căn cứ FIFO với kho, chưa coi là Strict FIFO đã nghiệm thu**.
- **Phân quyền:** mới có vai trò Kho/Kế toán ở giao diện; **cần bổ sung tài khoản, quyền phía máy chủ, phân tách người lập và người duyệt**.
- **RFID:** "xem xét sau", khi có nhu cầu đọc nhiều đơn vị nhanh; cần đánh giá tem, đầu đọc, độ chính xác, chi phí trước khi quyết.

## 4. Điểm cần làm rõ trong demo (do tôi phát hiện khi đọc chữ giao diện) [S]
| # | Điểm | Vì sao quan trọng |
|---|---|---|
| 1 | **Ba ngưỡng độ ẩm khác nhau**: "chuẩn ≤ 12,5%", "rủi ro > 12,8% (AI bỏ qua FIFO, buộc xuất sớm)", bảng điều khiển cảnh báo "lô ẩm > 12,3%" | Ngưỡng nào là chuẩn? Đây là quy tắc nghiệp vụ cần chốt với kho/kế toán, không để mỗi màn một số |
| 2 | **"AI sẽ bỏ qua FIFO"** khi độ ẩm cao | Quy tắc đè lên FIFO cần được duyệt và ghi lại; ai chịu trách nhiệm nếu AI sai? |
| 3 | **Định danh theo lô/pallet** (tem pallet), còn từng bao nguyên có mã riêng không? | **Đã chốt 2026-11-11:** theo lô, mỗi bao một tem QR; không dùng pallet (mục 10) |
| 4 | "Tối đa 15 bao/pallet" | **Đã chốt 2026-11-11:** kho không dùng pallet; giả định này bỏ |
| 5 | **Dung sai cân khi xuất** (lấy 30kg thì cân 30,3kg có chấp nhận không?) và **định mức hao hụt** | Không thấy trong chữ giao diện; nếu thiếu, mọi lệch nhỏ sẽ thành ngoại lệ hoặc bị bỏ qua |
| 6 | Bước **"Mua hàng check"** khi nhập kho (có trong [PQ]) | Demo ghi kế toán duyệt nhập PO; chưa thấy bước mua hàng kiểm số lượng |
| 7 | **Ai khởi tạo kiểm kê:** demo cho kho tự lập đề xuất; [PQ] ghi Kho/Quản lý kho tạo lệnh kiểm kê | Cần thống nhất: kiểm kê định kỳ do ai lập lệnh, kiểm kê mù ngẫu nhiên do ai |
| 8 | **Tách người làm và người duyệt trong kho:** [PQ] cho Quản lý kho duyệt xuất khi hàng ra kho; ai kiểm quản lý kho? | Nếu cùng một người, kiểm soát độc lập vẫn yếu |
| 9 | Dữ liệu tồn đầu kỳ "chuyển từ Excel" | Cần kiểm kê khởi tạo và người ký xác nhận số dư đầu |
| 10 | OCR cân và mô phỏng chụp ảnh là **giả lập** | Cần thử thật: ánh sáng kho, loại cân, độ chính xác |

## 5. Phân quyền và quy trình trên Ganico 2 [PQ]
**Nguyên tắc:** mỗi bộ phận chỉ thấy menu được liệt kê, menu không nêu thì **ẩn hoàn toàn**; mặc định chỉ xem; quyền xem rộng dần theo cấp. 6 bộ phận: Sale, Mua hàng, Quản lý kho, Kế toán, CS, Marketing.

| Cấp | Phạm vi dữ liệu |
|---|---|
| Nhân viên | Chỉ dữ liệu của chính mình (khách, đơn, công nợ được phân) |
| Leader team | Thành viên trong team |
| Trưởng phòng | Thành viên trong phòng |
| Kế toán trưởng (admin) | Toàn bộ, kể cả **lợi nhuận và báo cáo tài chính** (chỉ kế toán trưởng xem) |

**Quy trình đơn sỉ (6 bước) [PQ tr.10]:** Sale tạo đơn → CS check → Kế toán check tiền → Kế toán **tạo lệnh xuất kho trên phần mềm gửi kho** → CS check → **Quản lý kho duyệt xuất kho khi hàng thực tế được đưa ra kho** (kế toán chỉ tạo lệnh, không xác nhận xuất).
**Nhập kho:** Kho tạo lệnh nhập → Mua hàng check → Kế toán xác nhận. **Mua hàng** tạo đơn mua và chi phí, nhập kho và kiểm kê → Kế toán check.
**Kiểm kê:** Kho/Quản lý kho tạo lệnh → **Kế toán duyệt cuối**; Quản lý kho duyệt hướng xử lý hàng hỏng.
**Chi phí/đề nghị (dùng chung):** nhân viên đề xuất → trưởng bộ phận duyệt → **BGĐ duyệt (không có ngoại lệ)** → kế toán chi theo hóa đơn/chứng từ; KSNB nghiệm thu là bước **không bắt buộc**.
**Khác:** Mua hàng tạo sản phẩm, kế toán check; bảng giá bán cần BGĐ duyệt (hiện do một người tạo, sau này kế toán; Leader mua hàng được tạo); lead: Marketing tạo nhưng không sửa, kế toán sửa; CS dùng Ganico 2 để **kiểm tra đơn và phiếu xuất**.

**Ma trận menu (rút gọn):**
| Menu | Sale | Mua hàng | Quản lý kho | Kế toán | CS | Marketing |
|---|---|---|---|---|---|---|
| Hàng tồn kho | Số lượng, hàng đi đường, chuẩn bị xuất | Nhập/xuất/tồn, dự kiến về; **cả giá trị và số lượng** | Chỉ số lượng, chuẩn bị xuất/về | Full | Số lượng, hàng về, chuẩn bị xuất | ẩn |
| Phiếu xuất kho | ẩn | ẩn | **Duyệt khi hàng ra kho** | **Tạo lệnh xuất** | Xem để kiểm tra | ẩn |
| Kiểm kê | ẩn | Xem lệnh | Tạo lệnh; duyệt xử lý hàng hỏng | **Duyệt cuối** | ẩn | ẩn |
| Mua hàng và nhập kho | ẩn | Full | Tạo lệnh nhập | Full | ẩn | ẩn |
| Lợi nhuận, báo cáo tài chính | ẩn | ẩn | ẩn | **Chỉ kế toán trưởng** | ẩn | ẩn |
| Bảng lương | Xem của mình (leader/trưởng phòng xem cấp dưới) | ẩn | ẩn | Xem | ẩn | ẩn |

**Điểm còn cần xác nhận [PQ tr.12]:** (1) Quản lý kho có duyệt lệnh kiểm kê trước khi kế toán duyệt cuối, hay chỉ duyệt hướng xử lý hàng hỏng? (2) Người làm bảng giá hiện tại có phải leader mua hàng, và sau này khi kế toán làm bảng giá thì leader mua hàng còn được tạo không? (3) Marketing chỉ xem hay được sửa Facebook Ads? (4) Quyền sửa lead: tất cả kế toán hay chỉ kế toán trưởng?

## 6. So khớp với hiện trạng (As-Is) [S]
| Hiện trạng (người dùng nói) | Thiết kế mới | Nhận xét |
|---|---|---|
| Lệnh xuất đi qua Viber | Kế toán đẩy lệnh trên phần mềm | Giải quyết chứng từ |
| Kế toán xác nhận "đã xuất" mới trừ tồn thực | **Quản lý kho duyệt xuất** khi hàng ra | Giảm phụ thuộc kế toán; cần tách người làm/người duyệt trong kho |
| Cân lẻ do kho tự double check | Quét + nhập cân + ảnh cân + OCR | Có bằng chứng; cân thật và OCR còn là giả lập |
| FIFO không kiểm soát | Chỉ định lô/vị trí, quét kiểm tra | Cần chốt căn cứ FIFO |
| Kiểm kê chỉ đếm bao + số lẻ | Kiểm kê mù theo lô/vị trí | Cần quy trình, tần suất, ngưỡng chênh lệch |
| Hàng nhập: kho báo Viber, mua hàng kiểm | Tạm nhập, QC, kế toán duyệt | Cần giữ bước mua hàng check |
| Bao dở chưa có sổ | ODD-ZONE, tem bao dở, ưu tiên xuất | Có; cần thao tác thực tế |

## 7. Chuỗi hàng từ Việt Nam đến Kho 7 (phía thượng nguồn) [người dùng nói, 2026-10-26; chưa có tài liệu xác nhận]
- **Mua hàng nội địa** (nhóm Mua hàng, phần Ganico báo cáo CEO) mua cà phê ở Việt Nam (ví dụ Đắk Lắk...). **Hàng vẫn nằm ở kho của nhà cung cấp** sau khi mua.
- Công ty **thuê một đội QC** kiểm tra chất lượng, sau đó mới xuất hàng.
- **Đề xuất của kế toán (chưa chốt):** **dập mã QR** lên hàng ngay từ nguồn; hàng **thông quan qua forwarder** rồi vận chuyển sang Philippines hoặc nước khác. **Chỉ hàng bán cho Kho 7 (Ganico Philippines)** mới cần bước nhập kho; hàng bán nước khác thì **không cần quan tâm nữa**.
- [Tài liệu IT v10] Tbestpro Global (pháp nhân bán VN01) bán nguyên container cho Ronnila (PH02, Ganico PH) qua nhập khẩu ủy thác; đây là đơn nội bộ, tạo phiếu nhập Kho 7 cho GNP và **loại trừ khi hợp nhất**.
- **Điểm cần chốt:** mức gắn QR (từng bao, pallet hay lô/container), định dạng mã và ai phát hành, mã lô có xuyên suốt từ nguồn đến Kho 7 không, quyền sở hữu và trách nhiệm hàng đang nằm ở kho nhà cung cấp, kiểm tra thực tế khi hàng về Kho 7, hao hụt đường vận chuyển, điều kiện giao hàng (Incoterm) với khách nước khác.

## 8. QC, kiểm tra xuất nhập khẩu và lô (tra web 2026-10-26)
> Nguồn: trang nhà cung cấp dịch vụ, vận tải, cơ quan nước ngoài; **chưa tìm thấy** quy định cụ thể của phía Việt Nam (cơ quan cấp giấy, thủ tục hải quan). Cần xác nhận với bộ phận Logistics & chứng từ XNK/forwarder.

**Ba loại "kiểm tra" khác nhau, đừng nhầm**
| Loại | Ai làm | Vì sao | Bắt buộc? |
|---|---|---|---|
| **QC/giám định thuê ngoài** (kiểm tra trước khi giao) | Công ty giám định hoặc nhóm do bên mua thuê | Bảo vệ bên mua: hàng đúng điều khoản đơn mua/L/C | Theo **hợp đồng và thỏa thuận**, không phải thủ tục nhà nước [nguồn nêu mục đích PSI: Amazon Global Selling, TÜV SÜD] |
| **Kiểm dịch thực vật** | Cơ quan nhà nước (nước xuất cấp giấy, nước nhập kiểm tra) | An toàn sinh học | **Theo yêu cầu nước nhập**; Philippines: giấy chứng nhận kiểm dịch + giấy phép nhập khẩu; kiểm tra tại cảng [Úc/PNTR/BPI] |
| **Hải quan** | Cơ quan hải quan | Khai báo, thuế, kiểm tra theo mức rủi ro | Có, theo quy định từng nước [chưa tra phía VN] |

**Dịch vụ giám định cà phê có thể làm gì** [[Control Union Peru](https://peru.controlunion.com/en/service-widget/coffee)]: kiểm **số bao, bao bì, lưu kho**; lấy mẫu theo ISO 2859-1; đo **độ ẩm**; phân loại hạt (ISO 10470); cupping theo SCAA; **giám sát đóng container** (kiểm container trước khi xếp, theo dõi đóng và niêm phong, **xác nhận cân nặng**). Điểm quan trọng: **có thể thuê thêm việc đếm bao và cân**, không chỉ chất lượng. Tiêu chuẩn BSI cho khám mùi và tạp chất. [[BSI](https://knowledge.bsigroup.com/products/green-coffee-olfactory-and-visual-examination-and-determination-of-foreign-matter-and-defects-1)] Chưa tìm thấy ngưỡng độ ẩm hay mẫu điều khoản hợp đồng.

**Giấy tờ xuất khẩu cà phê từ Việt Nam (theo một hãng tàu)**: đăng ký, hóa đơn thương mại, vận đơn, giấy chứng nhận xuất xứ, giấy kiểm dịch thực vật; chế biến chưa thì có thể cần khử trùng/kiểm dịch; **nên xác nhận kiểm tra bắt buộc với đối tác nhập khẩu**. Hầu hết hàng xuất khẩu từ Việt Nam không bị đánh thuế xuất; cà phê không nằm trong nhóm có thuế xuất. [[MSC](https://www.msc.com/en/lp/blog/industries/vietnam-coffee-exports-guide)]

**Nhập khẩu cà phê nhân vào Philippines (nguồn thứ cấp, cần xác nhận)**: cơ quan kiểm dịch quốc gia là **BPI**; cần **giấy phép nhập khẩu và giấy kiểm dịch thực vật** của nước xuất; xử lý khử trùng ghi trên giấy (cơ sở dữ liệu của Úc nêu methyl bromide, **cần hỏi BPI cập nhật**); đơn **SPS Import Clearance (SPSIC)** cần **giấy phép hoạt động nhà nhập khẩu**; kiểm tra tại cảng; có thuế nhập khẩu, VAT. [[Úc, cơ sở dữ liệu nhập khẩu](https://micor.agriculture.gov.au/plants/philippines_ph/coffee-beans---green); [BPI SPSIC](https://buplant.da.gov.ph/wp-content/uploads/2024/07/Application-of-Sanitary-and-Phytosanitary-Import-Clearance-SPSIC.pdf); [PNTR](https://www.pntr.gov.ph/?p=72769)] Thuế suất một trang tính ngoài nêu 20% (mã HS 0901.11.01), **chỉ tham khảo**.

## 9. Ai nên được hỏi (theo sơ đồ tổ chức IT v10) và câu hỏi cho từng người
| Người/nhóm | Lý do hỏi |
|---|---|
| **Mua hàng nội địa nông sản** (2 người, Ganico, báo cáo CEO) | Nhà cung cấp, đội QC, hợp đồng mua, kiểm số lượng, hàng nằm ở kho NCC |
| **Logistics và chứng từ XNK** (1 người, Ganico, báo cáo CEO) | Forwarder, thông quan, chứng từ, container, hàng đi đường: **người nắm đường đi của lô** |
| **Kế toán** (3 người) | Giá vốn, chi phí nhập khẩu, hàng đi đường, kiểm kê, thanh toán |
| **Quản lý kho Philippines và nhân viên Kho 7** | Thực tế nhận hàng, cân, rạch bao, kiểm kê |
| **Sale Ganico và CEO** (phụ trách trực tiếp Ganico) | Khách yêu cầu gì về chất lượng/truy vết; quyết định chuẩn QC, hao hụt, mức đầu tư |
| **Anh An/IT** | Ràng buộc kỹ thuật, dữ liệu Gani 1, API |
| **Bên ngoài (qua mua hàng/logistics):** đội QC, nhà cung cấp, forwarder, đại lý hải quan tại Philippines | Chứng từ, thủ tục, trách nhiệm |
Ghi chú: **KSNB** hiện kiểm soát chi phí ads, hóa đơn quảng cáo, content, landing page, chưa nằm trong kho; có nên mở rộng sang kho (kiểm soát độc lập) là câu hỏi cho CEO. [Ý kiến]

**A. Mua hàng nội địa**
1. Nhà cung cấp ở Việt Nam: bao nhiêu bên, nơi nào, mỗi lần mua bao nhiêu tấn? Họ là nông hộ, đại lý hay nhà chế biến?
2. **Một "lô" mua** là gì (một nhà cung cấp, một đợt thu mua, một vụ mùa, một lần giao)? Đặt mã lô ở đâu, ai đặt?
3. Hàng **mua xong còn nằm ở kho nhà cung cấp bao lâu**? Ai giữ, ai chịu rủi ro, có hợp đồng lưu kho không?
4. **Đội QC** là ai, thuê theo chuyến hay dài hạn? Kiểm **chỉ tiêu nào** (độ ẩm, lỗi, cỡ hạt, mùi, số bao, cân)? Lấy mẫu bao nhiêu bao?
5. QC ra **báo cáo gì**, gửi cho ai, có **mã lô**? Hàng **không đạt** ai quyết định, nhà cung cấp chịu gì?
6. Hợp đồng mua ghi **tiêu chuẩn chất lượng** nào, **ngưỡng độ ẩm** nào, trừ giá/trả hàng thế nào?
7. Ai **kiểm số lượng** khi nhận hàng từ nhà cung cấp (đếm bao, cân)? Có biên bản?
8. Quy trình thanh toán và chứng từ: đơn mua, hóa đơn, thời điểm trả tiền?

**B. Logistics và chứng từ XNK** (quan trọng nhất cho câu "lô đi thế nào")
1. Từ kho nhà cung cấp đến Kho 7: **các chặng** (vận chuyển nội địa, cảng, tàu, cảng Philippines, nhập khẩu, vận chuyển về Malabon), mỗi chặng ai làm, bao lâu?
2. **Một container chứa mấy lô**, hay một lô chia nhiều container? Cách ghi trên chứng từ (vận đơn, packing list, hóa đơn) có **mã lô** không?
3. **Số bao, trọng lượng** được xác nhận ở đâu (đóng container, cảng), ai niêm phong, ai chứng kiến?
4. Giấy tờ xuất khẩu và nhập khẩu thực tế gồm gì (kiểm dịch thực vật, xuất xứ, giấy phép nhập khẩu, SPS)? Đã có sự cố **bị kiểm tra, giữ hàng, khử trùng** chưa?
5. **Nhập khẩu ủy thác:** đối tác nào đứng tên nhập, ai chịu trách nhiệm kiểm tra tại cảng?
6. **Hao hụt và hư hỏng đường biển:** từng xảy ra chưa, bao nhiêu, xử lý bảo hiểm/khiếu nại thế nào?
7. Dữ liệu hàng đi đường hiện **ghi ở đâu** (Excel, hệ thống), ai cập nhật?
8. Với đơn bán **nước khác** (Israel, Úc): điều kiện giao hàng (Incoterm), **giao ở đâu** thì xong? Ai đứng tên chứng từ?

**C. Kế toán**
1. Hàng **đang đi đường** ghi sổ thế nào từ lúc xuất khỏi kho nhà cung cấp đến lúc nhập Kho 7?
2. **Chi phí nhập khẩu** (vận chuyển, thuế, giám định, khử trùng) phân bổ vào giá vốn **theo lô** hay gộp?
3. **Giá vốn** hiện tính thế nào cho Kho 7 (FIFO hay khác); chênh lệch số nhập so số mua xử lý ra sao?
4. **Kiểm kê:** tần suất, ai duyệt, ngưỡng nào thì phải điều tra?
5. Hàng hỏng, ẩm mốc: bút toán thế nào, ai chịu?
6. Với đề xuất **dập QR ở nguồn**: chị thấy lợi ích gì cụ thể, và lo gì?

**D. Quản lý kho và nhân viên Kho 7**
1. Hàng về: **ai nhận, ai cân, ai ký**; có đối chiếu với số xuất từ nguồn không?
2. **Kiểm tra chất lượng khi nhận** có không (độ ẩm, mốc, rách bao)? Làm bằng gì, ghi ở đâu?
3. Hàng hỏng/ẩm mốc xử lý thế nào, báo cho ai?
4. Cất hàng: có **vị trí cố định** không, xếp pallet thế nào?
5. Rạch bao: ai làm, **bao dở** để đâu, ai biết còn bao nhiêu?
6. Kiểm kê hiện đếm thế nào, **lần lệch gần nhất** là bao nhiêu?
7. Dụng cụ: cân (loại, hiệu chuẩn), điện thoại, Wi-Fi, máy in?
8. Nhân sự biết tiếng gì, thao tác nào khó nhất trong ngày?

**E. Sale Ganico và CEO**
1. Khách (rang xay, trader) có **yêu cầu truy vết nguồn gốc/lô** hay chứng nhận chất lượng không?
2. Đã có **khiếu nại chất lượng** chưa, xử lý ra sao?
3. Mục tiêu sếp đặt cho kho: giảm thất thoát bao nhiêu, thời hạn, ngân sách?
4. **Chuẩn chất lượng** của công ty (độ ẩm tối đa, loại hạt) do ai quyết?
5. Có kế hoạch **bán sang nước có yêu cầu truy vết nghiêm** (ví dụ EU) không?

**F. Anh An (IT)**
1. Gani 1 đang lưu **trường lô** nào cho phiếu nhập/xuất? Có thêm "lô nguồn" được không?
2. API/webhook có thể nhận lệnh từ hệ thống kho mới không?
3. Chạy song song và chuyển tồn đầu kỳ làm thế nào?

## 10. Cân, quét và nối cân: đã chốt 2026-11-11 [người dùng nói; ảnh đầu cân do kho PH chụp]
Tài liệu chi tiết (luồng, thiết bị, phương án dự phòng): [Số hóa kho cà phê: cân, QR và RFID](https://claude.ai/artifact/ECTZw6uTowC7fN3TLCbNJy).

**Đã chốt**
| Chủ đề | Chốt |
|---|---|
| Đơn vị tồn | Kg là chính, số bao là phụ; **không trừ bì** (kg cả bì) |
| Cách cân | 10–12 bao một lượt trên cân sàn FI05; kg mỗi bao = kg cả lượt ÷ số bao, lưu mã lượt cân. Cân cả khi nhập và khi xuất |
| Đối chiếu | Số bao phải đủ (thiếu là lập biên bản). Kg: chấp nhận **−0,5% đến +0,1%**; vượt thì quản lý duyệt. Hao hụt khi xuất: ngưỡng tăng theo thời gian lưu kho (đề xuất +0,1%/tháng, cài được) |
| Xuất | Theo mặt hàng, lô nhập trước xuất trước (FIFO) |
| Đánh dấu bao | Trước mắt **QR** (in bằng máy in nhiệt, quét bằng điện thoại; ở trạm cân dùng máy quét QR cắm USB). **RFID** treo trên bao để kiểm kê sau này |
| Phần mềm | Hướng chính: Nextwaves nối cân (họ báo làm được, 07/11). Dự phòng: tự mua thiết bị, tự viết chương trình trạm cân, sau đẩy dữ liệu lên phần mềm công ty |
| Ngôn ngữ | Nhân viên kho dùng tiếng Anh, quản lý dùng tiếng Việt |

**Đầu cân Fuji FI05 [Quan sát qua ảnh 2026-11-11]:** mặt sau có 2 cổng DB9. **Comport #2** (xanh, đầu cái, tem ghi 2 = TXD, 3 = RXD, 5 = Ground) cắm thẳng cáp USB–RS232 thông thường, không cần đảo chân. **Comport #1** (đen, đầu đực, chân 9 = DC 5V) cần dây đảo chân; không dùng. Hãng không công bố giao thức; [?] cần bật xuất dữ liệu trong menu Set/Func và biết tốc độ truyền (hỏi FPSI, timbangan.ph). Cáp đang chọn: Ugreen USB–RS232 chip Prolific PL2303 (Shopee PH); cần hỏi người bán chip có chạy Windows 10/11 không.

**Câu hỏi cho Nextwaves: số cân hiện trên phần mềm thế nào** (nối dây hay Bluetooth đều được; điều cần biết là cách hiển thị và lưu dữ liệu)
1. Số cân hiện ở **màn hình nào** (app hay web, trong phiếu nhập/xuất nào)? Xin ảnh chụp màn hình hoặc cho xem demo.
2. Nhân viên thao tác thế nào: quét thẻ các bao trên cân → số cân tự hiện → bấm xác nhận? Số cân có **bị khóa, không gõ tay sửa** được không?
3. Một lượt 10–12 bao thì màn hình hiện **kg cả lượt hay từng bao**? Có tự chia đều kg cho từng thẻ không?
4. Xem lại ở đâu: phiếu nhập có hiện **danh sách lượt cân và kg từng bao** không? Tổng so với số dự kiến và phần chênh lệch hiện thế nào, có cảnh báo khi vượt ngưỡng (−0,5% / +0,1%) không?
5. Khi xuất: kg cân lúc xuất có hiện **cạnh kg lúc nhập** của cùng bao không? Hao hụt xem ở báo cáo nào?
6. Dữ liệu lượt cân và kg từng bao có **xuất ra Excel hoặc lấy qua API** được không?

## 11. Cập nhật 12–13/11/2026: thiết bị, luồng cân, chạy thử phân quyền [người dùng chốt; chạy thử trên tài khoản test Nextwaves]
**Đã chốt**
- **Mua thiết bị Nextwaves, tự tích hợp vào Ganico v2.** Nextwaves có SDK mã nguồn mở (MIT) cho súng NHR-10 (Bluetooth: web, Flutter, Android) và đầu đọc để bàn NRN (USB): https://github.com/Nextwaves-Industries/nextwaves-sdk . Phần mềm Nextwaves (được tặng) **dùng tạm**. Chưa có SDK cho đầu đọc cố định NR155.
- **Sản phẩm không gán sẵn kg.** Nhập: mở phiếu, chọn SKU, đưa thẻ qua đầu đọc để bàn (phiếu hiện đủ số bao, kg trống), treo thẻ, cân theo lượt (**số bao mỗi lượt tùy ý**), tổng kg **chia đều theo từng SKU**. **Không trừ bì.**
- **Một container = một lô** (mã lô công ty tạo, nhà cung cấp in). Container nhiều lô thì làm từng lô riêng, không trộn lô trên một lượt cân.
- **Không lắp ăng-ten cạnh bàn cân**; kiểm soát bằng dung sai tổng kg (**đã chốt**: hụt tối đa 0,5%, dư tối đa 0,1%; người dùng xác nhận lại 2026-11-17). Ngưỡng không bắt được sót 1 bao khi một SKU có hơn khoảng 200 bao → QL kho kiểm ngẫu nhiên.

**Kết quả chạy thử phân quyền (12/11, 4 vai trò TEST-, đăng nhập từng vai trò)**
- Bật "bắt buộc duyệt": tồn **chỉ đổi khi Kế toán bấm Hoàn tất**; NV kho, QL kho tự duyệt bị chặn (`SELF_APPROVAL_FORBIDDEN`); chỉ admin tự duyệt được (quyền dựng sẵn).
- Quyền duyệt thật là `stock_request.confirm`. Đảo phiếu cần `confirm` + `stock.adjust`; ô lý do **không bắt buộc**.
- Kiểm kê: khi bật duyệt chỉ còn "Chỉ chốt phiên"; QL kho chốt không cần `stock.reconcile.post`; Kế toán duyệt rồi tồn mới đổi.
- Vai trò dựng sẵn `warehouse_staff` có thừa `stock_operation.validate`, `tag.inventory_adjust` → không dùng, tạo vai trò riêng.
- Phần mềm chưa có: kg từng bao khi **nhận theo đơn mua** (chỉ ô tổng), **chặn FIFO** (chỉ sắp xếp), cân khi xuất, cột lô ở chi tiết phiếu xuất. Kg số lẻ chạy được khi đặt sản phẩm 3 chữ số lẻ (form tạo sản phẩm làm mất giá trị này, phải sửa lại).
- API Nextwaves có upsert mã hàng, nhà cung cấp, đơn mua theo mã ngoài + webhook → nối Ganico v2 sau này.
- Tài liệu (bản dở, 6/8 mục): https://claude.ai/artifact/UHWKgMUkmknpcXXYAQQt4K

**Còn chờ chốt:** nhập theo đơn mua hay phiếu thường ghi số đơn mua; bỏ `tag.update` khỏi NV kho; kế toán kiểm lô khi duyệt xuất; cân cho bao lẻ.

## 12. Cập nhật 16/11/2026: báo giá phát triển Nextwaves, hướng tự dựng phần mềm, nguyên tắc số kg

- **Nextwaves báo (tin nhắn gửi người dùng, 2026-11-16) [Bên khác nói]:** bộ giải pháp có sẵn chỉ phục vụ bán lẻ. Có sẵn: sản phẩm chỉ cần mã + đơn vị kg (không cài 60 kg/bao); phiếu nhập chọn SKU, đưa thẻ qua bàn đọc, mỗi thẻ 1 bao, cột kg trống; mỗi bao lưu kg riêng. Phải phát triển thêm: kết nối cân lấy kg tự động theo lượt (**tối đa 10 bao cùng SKU/lượt**), cộng dồn; chốt phiếu chia đều tổng kg cho số thẻ của SKU, phần lẻ dồn bao cuối; dung sai so kg thực cân với kg dự kiến, vượt ngưỡng chờ người có quyền duyệt; màn hình phiếu nhập và màn hình cân. **Phí phát triển riêng 60.000.000 VNĐ**; thiết bị (bàn đọc, thẻ, ăng-ten) báo giá sau khi đồng ý phí phát triển.
- **Hướng người dùng đang nghiêng (2026-11-16, chưa trình sếp):** mua thiết bị Nextwaves, **tự dựng phần mềm**. Lệch với chốt 04/11 ("mua trọn gói dùng trước, tự thiết kế tính sau", `Dự Án/01 WMS/README.md:9`) → cần sếp đồng ý; cần người viết và bảo trì. SDK công khai có cho súng NHR-10 và đầu đọc bàn NRN, chưa có cho NR155 [Đã kiểm GitHub 2026-11-16].
- **Nguyên tắc đã chốt (người dùng, 2026-11-16): số kg không được sửa tay.** Quét QR/RFID đối soát số bao và loại hàng; cân theo lượt cộng dồn để so tổng kg với kg dự kiến. Cách lấy kg theo mức chống sửa tay: gõ tay (không dùng) → gõ tay + bắt buộc ảnh màn hình cân + người khác duyệt khi lệch → nối cân tự động qua RS232 của FI05, chỉ nhận số khi cân báo ổn định.
- **Còn chờ:** sếp đồng ý tự dựng; ai viết phần mềm; Nextwaves báo giá chỉ thiết bị và danh sách máy; thử đọc chuỗi số từ FI05 qua cáp USB–RS232.
- **2026-11-17 (người dùng xác nhận):** dung sai −0,5% / +0,1% là **đã chốt** (bỏ ghi "đang bàn" ở mục 11 và khỏi danh sách "còn chờ chốt"). Định mức hao hụt +0,1%/tháng vẫn là đề xuất.
- **2026-11-17 (người dùng nói):** thử nối cáp USB–RS232 vào cân FI05 **đã lấy được dữ liệu cân** trên máy tính (chương trình đọc cân do dev bên mình viết). Kho sắp chuyển sang kho mới (Joseph báo, chưa rõ ngày).
- **2026-11-19 (người dùng nói):** vì nối cân đã lấy được dữ liệu, **chốt mua thiết bị rồi tự dựng phần mềm**, không mua phần phát triển 60 triệu của Nextwaves. Sếp đã duyệt hướng này chưa: chưa có thông tin. Ai viết và bảo trì: chưa rõ.
