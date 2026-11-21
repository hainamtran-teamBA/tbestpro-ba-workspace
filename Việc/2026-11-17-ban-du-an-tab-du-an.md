---
viec: Bàn dự án - dựng tab "Dự án" (trang chi tiết dự án, tài liệu đặc tả, tài liệu liên quan)
trang-thai: dung
giao-cho: giao-dien
du-an: Trang web/ban-thu
tao: 2026-11-17
cap-nhat: 2026-11-17
---

## Đề
Bàn dự án (`Trang web/ban-thu/tong-quan-v2.html`, giao diện kính) là **bản chuẩn**; hiện mới có trang Tổng quan. Làm tiếp **tab "Dự án"**:
- Ở Tổng quan, **bấm một dự án → nhảy sang tab Dự án, hiện chi tiết dự án đó** (thay cho cửa sổ trượt).
- Trang dự án có 2 phần: **Tài liệu đặc tả** (trình bày giống "Hồ sơ BA" máy công ty) và **Tài liệu liên quan** (bấm là mở Google Drive/Docs ở tab mới).
- **Dữ liệu riêng của Bàn dự án** (không đọc `Trang web/data/` của máy công ty lúc chạy). Lấy thông tin thật một lần từ Hồ sơ BA + tri thức, rồi Bàn dự án tự giữ.

Người dùng chốt 2026-11-17: bản chuẩn là Bàn dự án; Hồ sơ BA (`Trang web/index.html`, `Trang web/data/`) chỉ để tham khảo cách trình bày và dữ liệu thật.

## Nguồn tham khảo (chỉ đọc)
| Cần | Đọc |
|---|---|
| Giao diện, token, khung kính, rail, Tổng quan đang có | `Trang web/ban-thu/tong-quan-v2.html` |
| Cách trình bày đặc tả, route, các mục | `Trang web/app.js`, `Trang web/styles.css`, `Trang web/README.md` |
| Dữ liệu thật dự án | `Trang web/data/projects/*/project.js`, `Trang web/data/projects/kho-7/uc/UC-*.js` |
| Sơ đồ | `Trang web/diagrams/kho-7/UC-02-*.svg` (bản sáng + tối) |
| Tri thức mới hơn Hồ sơ BA | `reference/kho-7-gani-2-wms.md` mục 10-12 (dung sai **đã chốt** −0,5%/+0,1% ngày 17/11; hướng tự dựng phần mềm 16/11, chưa trình sếp; Nextwaves báo phí 60 triệu) |
| Hồ sơ dự án | `Dự Án/*/README.md`, `Dự Án/00-Tong-quan.md` |

## Kế hoạch (3 phần, một lượt agent)
1. **Khung và dữ liệu**
   - Bản mới ở thư mục riêng `Trang web/ban-thu/v3/` (`index.html` + `data/` + `diagrams/`); không ghi đè `tong-quan-v2.html`.
   - Dữ liệu: `data/projects/<id>.js` (mỗi dự án một file) + `data/uc/<id>/UC-xx.js`. Trường: tên, mã, trạng thái, mục tiêu, phạm vi trong/ngoài, vai trò, **5 cổng (Đề bài → Khảo sát → Giải pháp → Thử nghiệm → Triển khai) kèm ngày và %**, rủi ro lớn nhất, hạn, việc tiếp theo, quyết định (ngày, ai, nội dung), **chờ quyết định (việc, ai quyết, từ ngày)**, câu hỏi mở, thuật ngữ, nhóm luồng → UC, tài liệu liên quan (nhóm, tên, link, ngày, loại).
   - Điền: **Kho 7 đầy đủ** (từ Hồ sơ BA + tri thức 16-17/11), SMS, FB Ads, Cổng báo cáo theo đúng mức dữ liệu thật đang có; chỗ chưa có ghi "Chưa có", **không bịa**. Giai đoạn/ngày/rủi ro chưa có nguồn thì ghi "Chưa có" và liệt kê ở mục câu hỏi cho người dùng.
   - Điều hướng bằng địa chỉ (`#/`, `#/du-an`, `#/du-an/<id>`, `#/du-an/<id>/dac-ta/<mục>`, `#/du-an/<id>/<UC>`, `#/du-an/<id>/lien-quan`). Rail: mục **Dự án** bật thật (bỏ chữ "sau").
   - Tổng quan: dùng dữ liệu thật từ `data/` (bỏ dữ liệu mẫu ở phần dự án); bấm thẻ dự án → `#/du-an/<id>`. Phần việc tuần, việc quan trọng nhất: nếu chưa có dữ liệu thật thì giữ mẫu và ghi rõ "Dữ liệu mẫu".
2. **Trang dự án + Tài liệu đặc tả**
   - Trang dự án: đầu trang (tên, trạng thái, người duyệt, cập nhật, mục tiêu), dải 5 cổng, rủi ro, việc tiếp theo, chờ quyết định, quyết định gần đây; cột trái là cây "Tài liệu đặc tả" và "Tài liệu liên quan" như Hồ sơ BA.
   - Đặc tả: Tổng quan và phạm vi, Bản đồ nghiệp vụ (nhóm luồng → UC), Ai dùng chức năng nào, Danh sách use case (trạng thái Chưa viết/Đang viết/Đang duyệt/Đã chốt), Quyết định, Câu hỏi mở, Thuật ngữ.
   - Trang use case: thẻ Luồng (sơ đồ, nút phóng to, sáng/tối theo giao diện), Các bước, Ngoại lệ, Quy tắc, User story, Trạng thái & dữ liệu, 3 lớp, Câu hỏi, Nhật ký. UC chưa có đặc tả: hiện "Chưa viết".
3. **Tài liệu liên quan**: theo nhóm, ô lọc; mỗi tài liệu có biểu tượng loại (Docs, Sheets, PDF, Drive, Trang Claude) và ngày; **bấm mở link ở tab mới** (`target=_blank rel=noopener`). Tài liệu chưa có link: hiện mờ, ghi "Chưa có link".

## Tiêu chí xong
- [x] Bấm Kho 7 ở Tổng quan → sang `#/du-an/kho-7`, đủ khối đầu trang, 5 cổng, việc tiếp theo, quyết định.
- [x] Mở được đủ 7 mục đặc tả của Kho 7; UC-02 đủ các thẻ, sơ đồ luồng hiện đúng ở nền sáng và tối. (7 mục; UC-02 có 9 thẻ; sơ đồ tự đổi `.svg`/`.dark.svg` theo nền; có phóng to.)
- [x] Tài liệu liên quan Kho 7: đủ 13 tài liệu, bấm mở đúng link Drive ở tab mới. (13 link, cả 13 `target=_blank rel=noopener`: 9 Google Docs/Sheets, 4 trang Claude.)
- [x] Dự án sơ sài (Cổng báo cáo, FB Ads) hiện trạng thái "Chưa có" gọn gàng, không lỗi (trang dự án, đặc tả, tài liệu liên quan).
- [x] Không số liệu nào bịa; chỗ thiếu ghi "Chưa có"; danh sách thông tin thiếu nằm trong báo cáo nộp (mục Kết quả).
- [x] Nút quay lại của trình duyệt dùng được; tải lại trang giữ đúng màn đang xem.
- [x] Giữ phong cách kính hiện có (token, rail, nền sáng/tối, bảng màu); máy tính 1440 và 1280 không vỡ; điện thoại không tràn ngang. (1440, 1280, 390 không tràn ngang trên mọi màn; nền sáng mới chụp UC-02.)
- [x] Chụp kiểm (ảnh ở thư mục tạm), máy chấm lọc theo trang app, console sạch. (Vòng làm đẹp 17/11: máy chấm Taste trên 5 màn `#/`, `#/du-an/kho-7`, `…/dac-ta`, `…/UC-02`, `…/lien-quan`; lỗi thật 50 → 28 (vòng 1) → 16 (vòng 2) → lần chạy xác nhận sau sửa: 0 lỗi thật, 1 báo nhầm. Console sạch ở 1440, 1280, 390, sáng và tối.)

## Ngoài phạm vi lần này
Văn phòng ảo trong Bàn dự án; sửa đặc tả các UC chưa viết; đồng bộ ngược sang Hồ sơ BA; đẩy GitHub (chốt buổi lo).

## Nhật ký
- 2026-11-17 · chat chính · người dùng chốt đề và cho giao `giao-dien`; lập phiếu, giao việc.
- 2026-11-17 · giao-dien · người dùng đổi cách làm: chỉ làm phần 1 + đầu trang dự án rồi dừng. Đã dựng `Trang web/ban-thu/v3/` (index.html + data/ 4 dự án, 10 UC Kho 7 + diagrams/ UC-02); điều hướng `#/`, `#/du-an`, `#/du-an/<id>`; rail Dự án bật; Tổng quan dùng dữ liệu thật; trang dự án có đầu trang, 5 cổng, rủi ro, việc tiếp theo, chờ quyết định, quyết định gần đây. Phần 2 (đặc tả, UC) và phần 3 (tài liệu liên quan) chưa làm.
- 2026-11-17 · chat chính · người dùng xem phần 1: chưa đẹp bằng bản cũ (dữ liệu thật nhiều "Chưa có", chưa gọt). Chốt: **dựng đủ trước, làm đẹp sau**. Trang dự án đổi theo kiểu trang tổng quan dự án của Hồ sơ BA (`Trang web/app.js:468-528`, ảnh `#/kho-7`): khối đầu (tên, trạng thái, phụ trách, duyệt, cập nhật, mục tiêu), 4 ô số (use case, quyết định, câu hỏi mở, tài liệu), Việc tiếp theo, Quyết định gần đây, Đặc tả nghiệp vụ (chip UC), Tài liệu mới cập nhật; cột trái cây "Tài liệu đặc tả" + "Tài liệu liên quan". Giữ dải 5 cổng gọn trong khối đầu. Giao giao-dien làm tiếp phần 2 và 3, không gọt, không máy chấm (để vòng làm đẹp cuối).
- 2026-11-17 · giao-dien · đổi trang dự án theo kiểu Hồ sơ BA (cây trái Tài liệu đặc tả + Tài liệu liên quan có ô lọc; khối đầu có mục tiêu, rủi ro, dải 5 cổng gọn; 4 ô số; Việc tiếp theo; Quyết định (chờ + gần đây); Đặc tả nghiệp vụ chip UC; Tài liệu mới cập nhật). Làm phần 2 (7 mục đặc tả, trang use case 9 thẻ, sơ đồ sáng/tối, phóng to, UC chưa viết) và phần 3 (tài liệu theo nhóm, ô lọc, biểu tượng loại, tab mới, chưa có link thì mờ). Không gọt, không máy chấm.
- 2026-11-17 · giao-dien · theo yêu cầu người dùng: Bản đồ nghiệp vụ và Ai dùng chức năng nào vẽ thành sơ đồ bằng Mermaid 11.4.1 (jsdelivr, nạp khi cần, `securityLevel:'strict'`, vẽ lại khi đổi nền). Bản đồ: mỗi nhóm luồng là một khung chứa UC, viền theo trạng thái, mũi tên theo `groupFlow` trong `data/projects/kho-7.js` (chỉ Thiết lập → Nhập → Xuất, [Giả định] cần xác nhận; nhóm khác xếp hàng riêng, không mũi tên). Sơ đồ use case: hình người cho vai trò, khung "Hệ thống Kho 7" chứa 10 UC hình viên thuốc, đường nối lấy từ trường `who` của từng UC (Mua hàng chưa có UC nào ghi nên không vẽ, có ghi chú); giữ bảng chức năng × vai trò bên dưới. Bấm UC trong cả 2 sơ đồ mở trang UC. Mất mạng: hiện "Không tải được sơ đồ" và bản danh sách. Trang dự án thêm 2 nút xem sơ đồ. Kiểm: tối và sáng vẽ được, bấm UC đúng, 390 không tràn, console sạch.
- 2026-11-17 · giao-dien · người dùng đổi ý: dùng PlantUML (giống máy công ty), không dùng Mermaid. Đã gỡ toàn bộ phần Mermaid (nạp CDN, mã vẽ, CSS, 2 nút xem sơ đồ, trường `groupFlow` trong `data/projects/kho-7.js`); Bản đồ nghiệp vụ về lại lưới nhóm, Ai dùng chức năng nào về lại bảng. Chờ chat chính cài PlantUML rồi giao lại.
- 2026-11-17 · giao-dien · thử PlantUML cho 2 mục rồi dừng theo yêu cầu (bản công ty không dùng PlantUML cho 2 mục này); đã gỡ hết file PlantUML vừa thêm (ban-do.puml, use-case.puml, theme v3, build-diagrams.sh, data/diagrams.js). Làm giống bản công ty: Bản đồ nghiệp vụ là sơ đồ tỏa tròn (chuyển `mindmapHtml`/`drawMindmap` từ `Trang web/app.js`: nút giữa, nhóm chia hai bên cân số UC, khung màu theo `groups[].color`, thẻ UC có mã, trạng thái, tên, người tham gia, đường cong màu, vẽ lại khi đổi cỡ và nền); Ai dùng chức năng nào là sơ đồ use case SVG do JS vẽ (chuyển `useCaseSvg`: người que màu theo vai trò, khung hệ thống, chức năng hình elip, dùng chung viền vàng, theo `useCaseLinks`); Danh sách use case có cột Luồng màu. Thêm lại màu nhóm vào `data/projects/kho-7.js` (lấy từ Hồ sơ BA). Trang dự án thêm 2 nút sang 2 mục này. Sơ đồ PlantUML của UC-02 giữ nguyên.
- 2026-11-17 · chat chính · người dùng duyệt nội dung **trang Tài liệu đặc tả** (sơ đồ tỏa tròn + sơ đồ use case giống bản công ty). Trang chi tiết use case "chưa ổn" nhưng **để tạm, không đổi cấu trúc**. Giao **vòng làm đẹp** (unslop + máy chấm) cho cả v3: Tổng quan (ẩn "Chưa có", tóm tắt 1 dòng cho thẻ, giới hạn danh sách + "Xem cả n", gom nhãn phụ), trang dự án (gọn hơn, cây trái gọn), đặc tả và tài liệu liên quan (chỉ đánh bóng), trang UC (chỉ đánh bóng, giữ cấu trúc).
- 2026-11-17 · giao-dien · **vòng làm đẹp** (unslop chế độ đánh bóng + máy chấm Taste, trang app). Không đổi nội dung, cấu trúc trang. Gọt: chữ nội dung và chữ phụ sáng hơn (đủ tương phản trên kính), chỉ còn 2 độ đậm 400/500 (bỏ 300); một thang bo góc (cửa sổ 30, ô 24, khối trong 16, dòng 12, nút viên thuốc); một kiểu nút (`.btn` = `.jbtn`), một kiểu nhãn trạng thái (chấm + chữ, bỏ viền); bỏ quầng sáng (chấm thông báo, viền UC đang duyệt, vòng ngoài nút giữa sơ đồ) và hiệu ứng mờ khi hiện; bỏ lớp nền lồng quanh 2 sơ đồ đặc tả; ✓ ✗ trong user story thành icon. Tổng quan: thẻ dự án dùng trường mới `summary`, chưa có cổng thì không vẽ dải, chưa có hạn thì bỏ dòng Hạn, bỏ "ước đoán" trên thẻ, thêm dòng "Chờ quyết định n"; danh sách chờ quyết định hiện 3 việc lâu nhất + nút "Xem cả n" (mở hết, cuộn trong khung), dùng `summary` của từng việc; màn thấp (1280x760) tự gọn để vừa một màn. Trang dự án: tên một dòng, dải 5 cổng cùng hàng người phụ trách, 4 ô số thấp hơn, quyết định gần đây 2 mục (tối đa 2 dòng); cây trái: nhóm tài liệu liên quan mặc định gập, có số lượng, tên nhóm một dòng, thanh cuộn mảnh. UC-02: thêm font dự phòng trong `diagrams/kho-7/*.svg` (trên Mac sơ đồ rơi về font có chân), sơ đồ luồng hiện tối thiểu 1000px (cuộn ngang trong khung, vẫn phóng to được), sơ đồ trạng thái không còn phóng quá cỡ; sửa dòng "ai làm" ở Các bước bị dính khoảng cách của đầu trang. Điện thoại: cột phải 1 cột, tuần 1 cột, nút lọc 40px, nút 44px, bảng use case thành dòng gập, tên tài liệu xuống dòng, cả trang cuộn để thanh icon không che dòng cuối. Dữ liệu: thêm `summary` cho 4 dự án và 6 việc chờ quyết định (viết ngắn từ chính nội dung có sẵn). Điểm: mắt chấm (agent tự chấm, chỉ tham khảo) 5/10 → 8/10; máy chấm lỗi thật 50 → 0 (1 báo nhầm).
- 2026-11-17 · chat chính · người dùng **tạm dừng** Bàn dự án để làm kế hoạch quản lý công việc hằng ngày (time blocking). Còn mở: duyệt vòng làm đẹp (giữ hay bỏ dòng "Chờ quyết định n" trên thẻ), sửa trang chi tiết use case, 7 thông tin thiếu (cổng, ngày, hạn...).

## Kết quả
**Vòng làm đẹp, 2026-11-17** (chờ người dùng duyệt)
- File sửa: `Trang web/ban-thu/v3/index.html`; `data/projects/{kho-7,sms,fb-ads,bao-cao}.js` (thêm `summary`); `diagrams/kho-7/UC-02-*.svg` (chỉ thêm font dự phòng).
- Máy chấm Taste (lọc theo trang app, 5 màn): trước 50 lỗi thật (Tổng quan 17, dự án 8, đặc tả 9, UC-02 6, liên quan 10) → vòng 1: 28 → vòng 2: 16 → chạy xác nhận: 0. Báo nhầm 1: `cut-text` thẻ UC-02 ở sơ đồ tỏa tròn bị mép dưới cửa sổ cắt ở 1440 (phần dưới cuộn tiếp). Không áp dụng (luật trang giới thiệu): container, container-edges, hero-*, cta, copy-*, one-*, moment-none, card-visual, heading-scale, row-lines, run-on, nav, links (máy chấm coi địa chỉ `#/…` là liên kết hỏng vì trang điều hướng bằng địa chỉ).
- Mắt chấm (agent tự chấm, chỉ tham khảo): trước 5/10 (bố cục 1, chữ 1, màu 1, chi tiết 1, điện thoại 1) → sau 8/10 (bố cục 2, chữ 2, màu 2, chi tiết 1, điện thoại 1).
- Còn yếu: sơ đồ use case (SVG) chữ còn nhỏ khi khung hẹp; UC-02 trên điện thoại phải cuộn ngang sơ đồ; tóm tắt thẻ ở 1280 xuống 2 dòng; "Xem cả n" mở trong khung, chưa có trang riêng.

**Lượt 2 (đủ phần 1-3, chưa làm đẹp), 2026-11-17**
- Thêm địa chỉ: `#/du-an/<id>/dac-ta[/<mục>]` (mục: tong-quan, ban-do, ai-dung, use-case, quyet-dinh, cau-hoi, thuat-ngu), `#/du-an/<id>/UC-xx`, `#/du-an/<id>/lien-quan`.
- Kiểm (Playwright chạy ngầm, mở thẳng file): 7 mục đặc tả có đủ; UC-02 9 thẻ, sơ đồ tối `UC-02-activity.dark.svg` và sáng `UC-02-activity.svg` tải được; phóng to chạy; UC-05 hiện "Chưa viết"; 13 tài liệu Kho 7 mở tab mới; lọc cây và lọc tài liệu chạy; FB Ads, Cổng báo cáo không lỗi; 1440, 1280, 390 không tràn ngang; console sạch.
- Bản đồ nghiệp vụ (tỏa tròn) và Ai dùng chức năng nào (sơ đồ use case) vẽ bằng HTML + SVG giống bản công ty, theo giao diện kính.

**Lượt 1 (phần 1 + đầu trang dự án), 2026-11-17**
- File: `Trang web/ban-thu/v3/index.html`; dữ liệu `Trang web/ban-thu/v3/data/projects/{kho-7,sms,fb-ads,bao-cao}.js`, `data/uc/kho-7/UC-01..10.js`; sơ đồ `diagrams/kho-7/UC-02-*.svg` (chép từ Hồ sơ BA). Không sửa `tong-quan-v2.html`, `Trang web/index.html`, `Trang web/app.js`, `Trang web/data/`.
- Cách mở: bấm đúp `Trang web/ban-thu/v3/index.html` (không cần máy chủ). Địa chỉ: `#/` Tổng quan, `#/du-an` danh sách, `#/du-an/kho-7` một dự án. `#/du-an/<id>/dac-ta`, `/lien-quan`, `/<UC>` hiện dòng "dựng ở lượt sau" kèm đầu trang dự án.
- Kiểm: 1440, 1280, 390 không tràn ngang; console sạch; bấm thẻ Kho 7 sang đúng trang; tải lại giữ màn; nút quay lại về Tổng quan. Không chạy máy chấm lượt này.
- Đã cập nhật theo tri thức 16-17/11: dung sai −0,5%/+0,1% ghi là đã chốt (quyết định 17/11, BR-K07 của UC-02 chuyển Đã chốt, bỏ khỏi câu hỏi mở); chờ quyết định Kho 7 "tự dựng hay trả Nextwaves phí 60 triệu" ghi [Bên khác nói], ai quyết: Sếp, từ 16/11.
- Còn dữ liệu mẫu (có nhãn "Dữ liệu mẫu"): việc tuần, việc quan trọng nhất, vòng việc ở đầu Tổng quan.

**Thông tin còn thiếu, cần người dùng bổ sung**
1. Ngày qua từng cổng và % cổng hiện tại của cả 4 dự án (đang ghi "Chưa có").
2. Cổng hiện tại: Kho 7 "Giải pháp" và SMS "Thử nghiệm" là ước đoán từ nhật ký, cần xác nhận; FB Ads và Cổng báo cáo chưa có.
3. Hạn của từng dự án (cả 4 đều "Chưa có").
4. FB Ads và Cổng báo cáo: việc tiếp theo, quyết định, chờ quyết định đều lấy từ bảng 27/10; có còn đúng không.
5. SMS: quyết định 13/11 không ghi ai quyết.
6. Kho 7: mâu thuẫn 10 bao/lượt (Nextwaves báo) và "số bao tùy ý" (12/11) – đã đưa vào câu hỏi mở.
7. Cổng báo cáo chưa có tài liệu liên quan; Kho 7 tài liệu "Quy trình hiện tại…" chưa có ngày.
