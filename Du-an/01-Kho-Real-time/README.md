# Dự án 01: Kiểm soát kho thời gian thực (Kho 7 trước, kho Tizi sau)

> Cập nhật: 2026-10-27 | Trạng thái: **Đang làm (khảo sát)** | Chủ: Hải Nam | Người duyệt: Sếp

## 1. Bối cảnh và chỉ đạo
- Kho 7 (cà phê nhân Ganico, Philippines) vận hành thủ công qua Viber; tồn trừ hai bước (kế toán xác nhận lần hai); FIFO không kiểm soát; kiểm kê chỉ đếm bao và cân lẻ. [Người dùng nói]
- Demo "Gani 2 WMS" đã có; **sếp chỉ đạo tạm dừng demo**, tập trung **tìm hiểu cách các bên kiểm soát hàng thời gian thực, dán QR/RFID, và đăng ký demo**; không làm lại bánh xe, không chỉ số hóa mà phải tối ưu.
- **Họp Giám đốc 2026-11-04** [Người dùng nói]: tìm hiểu các bên đang đưa giải pháp và thiết bị thế nào để số hóa kho; hướng dùng **kết hợp QR + cân + RFID**. Đã có tóm tắt Nextwaves (RFID) và Delfi (QR + cân); cần thêm bên khác.
- **Chốt hướng 2026-11-04** [Người dùng nói]: **mua trọn gói thiết bị kèm phần mềm của nhà cung cấp để dùng trước**, chưa cần nối Gani 2; tự thiết kế hệ thống riêng tính sau. Sếp nêu quy mô **3.000 bao/tháng** (trước đây dùng 2.000; các ước tính cũ theo 2.000 cần tính lại). Hệ quả: tiêu chí "nối Gani 2" đổi thành "lấy được toàn bộ dữ liệu ra"; ưu tiên một bên lo đủ cân + QR + RFID trên một phần mềm.
- Người dùng nghĩ: **mua thiết bị**, phần mềm chưa chắc (dùng thử). Tiêu chí: **giảm thất thoát và thời gian thực**. Phạm vi: Kho 7 trước, sau mở rộng sang kho Tizi.

## 2. Mục tiêu và tiêu chí thành công
- Biết **mức thất thoát hiện tại** (baseline) và ở **khâu nào**.
- Chọn được **cơ chế bắt dữ liệu tại hiện trường** (QR/RFID, cân, thiết bị) phù hợp bao đay 60 kg, bao dở, độ ẩm.
- Pilot chạy đạt tiêu chí **đặt sau khi có baseline** (ngưỡng lệch tồn, thời gian xuất, tỷ lệ lỗi quét).

## 3. Phạm vi
- **Trong:** khảo sát nhà cung cấp thiết bị và phần mềm; baseline; phỏng vấn nội bộ; thử nhãn/cân; pilot nhỏ; khuyến nghị mua/xây/kết hợp.
- **Ngoài (hiện tại):** xây lại WMS từ đầu; nối thiết bị vào Gani 2 (để sau, theo hướng chốt 2026-11-04); ép nhà cung cấp dập mã trước pilot.

## 4. Người liên quan
Sếp (chỉ đạo) · Logistics và chứng từ XNK (1 người) · Mua hàng nội địa (2) · Quản lý kho PH và nhân viên Kho 7 · Kế toán · Sale Ganico/CEO · Anh An (IT) · Đội QC thuê ngoài · Nhà cung cấp giải pháp.

## 5. Đã có
- Kiến thức: `tri-thuc/` (`kho-wms.md` mục 7-10, `kho-7-gani-2-wms.md`, `truy-vet-lo-ca-phe.md`, `thuc-te-cong-ty.md`).
- As-Is Kho 7 (chỉ để đọc): `docx/Kho7_Luong_hien_tai_AsIs.docx`; bản tóm tắt Google Docs [Kho 7 - Quy trình hiện tại và câu hỏi cho các bên giải pháp](https://docs.google.com/document/d/1Mdb9ZkNYCnsrOvpSBw6_AEPnB1aQBcVJceayNRUJHPQ/edit).
- Brief gửi các bên (2026-11-03): [Kho 7 - Thông tin gửi bên giải pháp](https://docs.google.com/document/d/1wxE1d_zHSwe4EOrXj9PuygnTEgl2dvCHF0WyL_IhtbI/edit).
- Bảng so sánh giải pháp RFID/QR, nội bộ (2026-11-04): `Du-an/01-Kho-Real-time/Kho7_So_sanh_giai_phap_RFID.xlsx` (6 tab: hướng dẫn, danh sách, kỹ thuật, chấm điểm, chi phí 3 năm, tóm tắt).
- Phiếu đi demo và thang chấm, nội bộ (2026-11-04): [Kho 7 - Phiếu đi demo và chấm điểm](https://docs.google.com/document/d/1rrkpr8prUnIK0DsXelToaaiC6gtrOEsmpikaMTmtgHM/edit).
- Tóm tắt giải pháp Nextwaves, nội bộ (2026-11-04, từ `pdf/Nextwaves_Giai_phap_RFID_Van_hanh_Kho_hang.pdf`; kit 27.000.000đ gồm VAT): [Kho 7 - Tóm tắt giải pháp RFID của Nextwaves](https://docs.google.com/document/d/16NKkFxJnO9MCH4G-aJy9EkcDSOBxbsRb_D4KBKcM4n0/edit).
- Tóm tắt giải pháp Delfi Technologies (QR + cân), nội bộ (2026-11-04, từ transcript buổi gọi; chưa báo giá): [Kho 7 - Tóm tắt giải pháp QR + cân của Delfi Technologies](https://docs.google.com/document/d/1B6VhMn7Md6C7zi0Ux0ctBYacqheTCtZYT6D50sY-bZM/edit). Người dùng thấy chưa hợp, sẽ tham khảo thêm bên khác.
- **Bảng các bên, Google Sheets** (2026-11-04, bản dùng chính): [Kho 7 - Các bên giải pháp](https://docs.google.com/spreadsheets/d/1sHXQWJ4PS6mvBlD9iLXhW6VHhsxFuvSJWD67wOhmyZs/edit). Tab "Danh sách các bên" (7 bên, có trạng thái), tab "So sánh chi tiết" (chỉ Nextwaves, Delfi đã làm việc thật + cột Bên 3 trống).
- Bản Docs cũ, sai vì đưa bên chưa làm việc vào so sánh (chờ người dùng xử lý): [Kho 7 - Bảng so sánh các bên giải pháp](https://docs.google.com/document/d/1tJdRMsaR-ZvklbBWae0lrk8kQbYO8LYcxQj5-_IjNx0/edit).
- **Báo cáo chi tiết Nextwaves (bản dùng chính, 2026-11-05)**: [Kho 7 - Giải pháp RFID Nextwaves: thiết bị, phần mềm và cách áp dụng](https://docs.google.com/document/d/1_Oa_o6lKiyWT1_YsfuKQeTklTQ_9-rqwpgFlsBjcUZU/edit). Người dùng xác nhận: Nextwaves cung cấp đủ đầu đọc, thiết bị, phần mềm; **nối cân làm thêm được**; phần mềm/thiết bị dùng nhiều ngôn ngữ.
- Đề xuất gửi BGĐ (bản trước, người dùng chê lan man) (2026-11-05, đã qua phan-bien): [Kho 7 - Đề xuất thử bộ RFID có sẵn của Nextwaves](https://docs.google.com/document/d/1irN5pZpF5DjtLvPxEF6R1Vh1Fu_yGOIxO_FIaX7MftM/edit). Năm đầu ước tính 55–67 triệu chưa VAT; cần BGĐ chấp nhận cân gõ tay giai đoạn đầu.
- Phần mềm Nextwaves "Sense Inventory" (đọc tài liệu docs.nextwaves.com/vi/sense-inventory ngày 2026-11-05): **có** lô (bắt buộc số lô + hạn dùng), đơn vị quy đổi, vị trí kệ, nhiều kho, phiếu nhập 4 trạng thái (người lập không tự hoàn tất), đối chiếu thừa/thiếu với PO, tem thùng, gỡ tem dùng lại (chỉ khi đã xuất/bán, nhập lại qua phiếu), làm offline trên app, API + webhook, phân quyền + nhật ký. Giao diện có tiếng Anh [Người dùng nói, 2026-11-05]. **Có "Chế độ đóng gói (số lượng thay đổi)"**: mỗi bao một thẻ, kg riêng; nhập qua hộp "Cân túi" (trừ bì, gõ tay); xuất một phần thì phần còn lại vẫn trên thẻ; đóng bao từ hàng rời có dung sai (trang stock-movements, đã kiểm 2026-11-05). Có FIFO/FEFO, quy tắc ô kệ Chặn/Cảnh báo, chuyển kho phải xử lý dòng thiếu, điều chỉnh bắt buộc lý do, sổ kho không xóa. **Không nêu:** nối cân tự động, trộn lô có truy nguồn, trạng thái giữ hàng khi khử trùng, kiểm kê theo ô kệ, ngưỡng chênh lệch cần duyệt, báo cáo theo lô/hao hụt, tiền PHP/thuế PH, bảng giá gói thuê bao (kit đi kèm gói "Essentials"). Bản tóm tắt Docs Nextwaves cũ ghi thiếu các điểm "có" này.
- Nextwaves còn có **Warehouse Starter Kit 37 triệu chưa VAT** (đầu đọc bàn, máy cầm tay, 2.500 tem, 200 tem vị trí kệ) và Security Kit từ 65 triệu; blog 06/07/2026 nói phần mềm **"miễn phí trọn đời, không thuê bao tháng"**, nhưng tài liệu phần mềm lại nói có giới hạn theo gói → cần hỏi. Chưa tìm thấy bên Việt Nam nào khác công bố gói RFID kho có giá sẵn (tra web 2026-11-05).
- Danh sách bên tìm thêm (tra web 2026-11-04, nguồn là trang của nhà cung cấp, chưa kiểm chứng): SmartBiz/sbiz.vn (QR + cân + camera, kho thực phẩm), MIND/iotmind.vn (RFID + QR + cảm biến ẩm), Trackify (RFID WMS, Heineken, Panasonic), RFID Việt/Basis (thiết bị Zebra, có bảng chi phí tham khảo), Mỹ Lan (dự án RFID + QR từng bao phân bón Bình Điền, thử nghiệm từ 09/2026).
- Bộ câu hỏi RFI **phần mềm** (docx): `docx/RFI_giai_phap_kho_EN.docx`, `docx/RFI_giai_phap_kho_VI.docx`.
- Bộ câu hỏi phỏng vấn nội bộ theo người: `kho-7-gani-2-wms.md` mục 9.

## 6. Cần làm ngay
- Bộ RFI **thiết bị/nhận dạng tự động** (RFID xuyên khối hạt ẩm, thẻ trên bao đay, PDA, cân + máy in nhãn, giá mỗi tem). Xem `lo-trinh.md`.
- Hỏi sếp ba câu: sản phẩm bàn giao và hạn, tiêu chí thành công, phạm vi.

## 7. Rủi ro
| Rủi ro | Cách giảm |
|---|---|
| Sếp chưa trả lời (chặn G0) | Gửi tờ một trang, hẹn thời gian |
| Chưa có baseline | Kiểm kê thử một mã hàng ở tuần 1 |
| Nhà cung cấp chỉ cho xem demo chuẩn | Bắt chạy 4 kịch bản với dữ liệu mẫu |
| Nhãn không bền trên bao | Tự thử mài mòn, ẩm; tem treo hoặc tem nhựa dán (kho không dùng pallet) |
| Kho không cho kiểm kê thử | Xin phép sếp trước |
| Thiếu thông tin về QC, lô, chuỗi hàng | Phỏng vấn Logistics và Mua hàng trước |
| Rủi ro của việc không làm | Thất thoát tiếp diễn, không có số đo |

## 8. Câu hỏi mở
1. "Một lô" là gì (nhà cung cấp, đợt, container)? Truy vết đến lô hay từng bao?
2. Ngưỡng độ ẩm nào là chuẩn (demo có 12,3%, 12,5%, 12,8%)? Dung sai cân khi xuất?
3. Đội QC thuê có cân và đếm bao không? Báo cáo có mã lô không?
4. Phiếu xuất đang ở Gani 1 hay Tizi?
5. Quy mô thực: số bao/ngày, số SKU.
