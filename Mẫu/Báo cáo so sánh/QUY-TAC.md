# Quy tắc dựng báo cáo theo khuôn chung

Khuôn chốt ngày 18/11/2026, dựa trên báo cáo Kho 7 v2 (Mahi dựng, Hải Nam duyệt).
Dùng cho mọi báo cáo so sánh / đề xuất gửi Hải Nam hoặc gửi sếp: thiết bị, công cụ, nhà cung cấp, bên dữ liệu, phương án...

## Bộ khuôn gồm 3 file (thư mục này)
| File | Để làm gì |
|---|---|
| `khuon-bao-cao.html` | Giao diện + bộ tự dàn trang. **Không sửa.** Muốn đổi giao diện thì báo Kyo. |
| `dung-bao-cao.py` | Ghép file dữ liệu vào khuôn, tự nhúng ảnh để file gửi đi một mình vẫn đủ ảnh. |
| `QUY-TAC.md` | File này. |

Ví dụ thật đã dựng: `Cho-duyet/facebook-ads/bao-cao/du-lieu-cong-cu-ads.json` (8 công cụ, 3 trang).

## Cách làm (3 bước)
1. Tạo thư mục `Cho-duyet/<dự án>/bao-cao/`, để ảnh trong `anh/` bên trong.
2. Viết file dữ liệu `du-lieu-<tên>.json` (chép ví dụ Facebook Ads rồi sửa là nhanh nhất).
3. Chạy:
   ```
   python3 ~/Documents/OpenMausBot/Mau/bao-cao/dung-bao-cao.py du-lieu-<tên>.json bao-cao-<tên>.html
   ```
   Rồi mở file HTML xem lại (chụp màn hình soi) trước khi báo xong. Bấm nút "In / Lưu PDF" ra bản A4.

## Bộ tự dàn trang (không cần tự tính)
Bảng so sánh tự chia hàng theo số mục trong nhóm lớn nhất:

| Số mục | Bố cục | Cỡ chữ, cỡ ảnh |
|---|---|---|
| 1–4 | 1 hàng | bình thường |
| 5–6 | 3-3 (5 thì 3-2) | bình thường |
| 7–8 | 4-4 | nhỏ lại một nấc |
| 9 | 3-3-3 | bình thường |
| 10 | 5-5 | nhỏ hai nấc |
| 11–12 | 4-4-4 | nhỏ một nấc |
| 13–15 | 5 mỗi hàng | nhỏ hai nấc |
| nhiều hơn | 5 hoặc 6 mỗi hàng | nhỏ nhất |

Muốn ép số cột thì thêm `"cot": 3` vào khối. Thẻ đề xuất: 2 thẻ nằm ngang (ảnh trái), 3 thẻ trở lên xếp dọc; 4 thẻ thành 2-2.
Nhiều hơn khoảng 15 mục thì nên tách: trang 1 so sánh nhóm rút gọn (5–8 mục mạnh nhất), phần còn lại để trang phụ lục.

## Cấu trúc file dữ liệu
```
{ "tieu_de": "tên tab trình duyệt",
  "trang": [                      ← mỗi phần tử là 1 trang A4, tự đánh số 1, 2, 3
    { "nhan": "DỰ ÁN · CHỦ ĐỀ", "tieu_de": "Tiêu đề lớn", "mo_ta": "1 câu",
      "khoi": [ ...các khối bên dưới, xếp từ trên xuống... ] } ] }
```

### Các loại khối
- **so-sanh**: bảng so sánh có ảnh.
  `{"loai":"so-sanh", "kieu_anh":"anh"|"logo", "nhom":[{"ten":"Máy in tem", "phu":"dòng phụ", "muc":[...], "dong":[...]}]}`
  - mỗi mục: `{"ten":"TSC TE200", "anh":"anh/te200.jpg", "phu":"dòng phụ", "de_xuat":true, "nhan":"Dự phòng"}`
    `de_xuat` = viền đậm + cột tô nền + nhãn đen "Đề xuất"; `nhan` không kèm `de_xuat` = nhãn viền mảnh.
  - mỗi dòng: `{"ten":"Giá ở Việt Nam", "o":[ô của mục 1, ô của mục 2, ...]}` — thứ tự ô theo thứ tự mục.
  - `kieu_anh`: `"anh"` cho ảnh sản phẩm (to), `"logo"` cho logo hãng, phần mềm (nhỏ, ô thấp). Không có ảnh thì tự hiện chữ viết tắt.
- **the**: thẻ đề xuất. `{"loai":"the", "kieu_anh":"anh"|"logo", "the":[{"anh","nhan":"MÁY IN TEM · 1 MÁY","ten","mo_ta","thong_so":[["Khổ in","4 inch"]],"gia_nhan":"Đơn giá","gia":"3.590.000 đ"}]}`
- **bang-gia**: bảng chi phí. `{"loai":"bang-gia","tieu_de":"Bảng chi phí","cot":["Hạng mục (đơn vị: đồng)","Số lượng","Đơn giá","Thành tiền"],"dong":[{"ten","phu","can_chot":"cần chốt số lượng","o":["1","3.590.000","3.590.000"]}],"tong":{"nhan":"TỔNG CỘNG","phu":"ước tính","gia_tri":"≈ 9,15 triệu"}}`
- **chi-so**: ô số liệu to. `{"loai":"chi-so","muc":[{"so":"12","nhan":"bên đã xem","phu":"dòng nhỏ"}]}`
- **danh-sach**: danh sách đánh số. `{"loai":"danh-sach","muc":[{"dam":"Ý chính.","noi_dung":"giải thích"}]}`
- **ghi-chu**: `{"loai":"ghi-chu","noi_dung":"..."}`; thêm `"kieu":"noi-bat"` thành khối nền đen để nêu kết luận / bước tiếp.
- Khối nào cũng thêm được `"tieu_de"` (tiêu đề nhỏ phía trên khối).

### Cách viết một ô
- Chữ thường: `"4 inch, 203 dpi"`
- Có dòng phụ / in đậm: `{"v":"3.590.000 đ","dam":true,"phu":"khuyến mãi"}`
- Mờ đi (Không, điểm yếu): `{"v":"Không","mo":true}`
- Cần chốt: `{"v":"2","can_chot":"cần chốt số lượng"}`
- Chưa có thông tin: `null` → tự hiện "Chưa ghi" màu mờ. **Không bịa số cho đủ ô.**
- Trong mọi chữ, `**chữ**` thành in đậm.

## Quy tắc nội dung
- Tiếng Việt, ngắn, ít thuật ngữ. Mỗi trang trả lời đúng một câu hỏi (So sánh gì? Chọn gì, hết bao nhiêu? Còn gì chưa chắc?).
- Thứ tự trang hay dùng: 1) So sánh → 2) Đề xuất + chi phí → 3) Còn chưa chắc + bước tiếp.
- Tiền quy ra đồng, ghi "≈" khi là quy đổi; nguồn giá, ngày xem và tỷ giá ghi ở khối ghi-chu cuối trang chi phí.
- Mục đề xuất luôn có `de_xuat: true` để người đọc thấy ngay.
- Ảnh sản phẩm: nền trắng hoặc trong suốt, cỡ khoảng 600 px. Logo: lấy biểu tượng vuông của hãng.
- Lưu bản chờ duyệt ở `Cho-duyet/<dự án>/bao-cao/`; Hải Nam duyệt thì chuyển sang `Da-chot/<dự án>/`.
