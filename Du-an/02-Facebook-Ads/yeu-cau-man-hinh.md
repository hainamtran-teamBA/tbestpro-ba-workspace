# Yêu cầu màn hình: Báo cáo hiệu suất bài Ads (tính năng 1)

> Cập nhật: 2026-10-30 | Dùng để: gửi từng màn cho ChatGPT vẽ giao diện, sau đó dựng demo và code
> Nghiệp vụ gốc: [nghiep-vu-tinh-nang-1.md](nghiep-vu-tinh-nang-1.md)

## Cách dùng file này
1. Copy **Phần A (quy tắc chung)** và dán vào ChatGPT **một lần** ở đầu cuộc trò chuyện.
2. Sau đó copy **từng màn (B1 → B5)**, mỗi lần một màn. Không gửi nhiều màn cùng lúc.
3. Mỗi màn chỉ trả lời **một câu hỏi**. Nếu ChatGPT vẽ thêm thứ không có trong yêu cầu, bảo nó bỏ đi.

---

## Phần A. Quy tắc chung (dán một lần)

```
Tôi cần bạn vẽ giao diện web (ảnh mockup) cho một công cụ báo cáo nội bộ tên "Tbestpro Post Analytics". Tôi sẽ gửi từng màn hình một. Hãy theo các quy tắc chung sau cho mọi màn:

Bối cảnh: công ty chạy quảng cáo Facebook bán 4 sản phẩm (Fitgum Collagen Chia Coffee, Fitgum Acai Berry, Fitgum Organic Barley, Dr.Pinoca Brown Rice). Có 3 đội quảng cáo: DINO, CLIMAX, PASSION. Mỗi đội có vài bạn Marketing (tên dạng mã, ví dụ MINHPQ, LINHHT02). Người xem là trưởng phòng, leader đội và chính các bạn Marketing.

Phong cách:
- Desktop 1440px, nền sáng, gọn và thoáng. Ít chữ, nhiều khoảng trắng.
- Mỗi màn chỉ có MỘT khối chính. Tối đa 4 thẻ số ở đầu trang.
- Thanh bên trái hẹp có logo "TBESTPRO / POST ANALYTICS" và 2 mục: "Theo đội", "Theo cá nhân".
- Thanh trên: đường dẫn (breadcrumb) cho biết đang ở đâu, nhãn nhỏ "Dữ liệu mẫu", ô chọn kỳ (Tháng 10/2026, 30 ngày, 7 ngày).
- Toàn bộ chữ tiếng Việt. Tiền dạng "24,01 triệu" hoặc "1.470.000 ₫".
- Không vẽ nút xuất file, chuông thông báo, chatbot.

Thuật ngữ (dùng đúng chữ này trên giao diện):
- Chi tiêu: tiền chạy quảng cáo.
- Kết quả: số đăng ký (Website complete registration).
- DT ước tính: Kết quả × 490.000 ₫. Luôn ghi chữ "ước tính", không gọi là doanh thu.
- ROAS ước tính: DT ước tính ÷ Chi tiêu, dạng "3,43×".
- Bài: một bài viết trên Facebook. Một bài có thể chạy trong nhiều chiến dịch, số được cộng gộp.
```

---

## Phần B. Từng màn hình

### B1. Tổng quan 3 đội
**Câu hỏi màn này trả lời:** Đội nào đang làm tốt trong kỳ?

```
Màn 1: "Tổng quan 3 đội".
Câu hỏi màn này trả lời: đội nào đang làm tốt trong kỳ?

Nội dung:
1. Tiêu đề "Tổng quan" và kỳ đang chọn.
2. 4 thẻ số của cả công ty: Chi tiêu, DT ước tính, ROAS ước tính, Số bài có chi tiêu. Mỗi thẻ có mũi tên tăng/giảm so với kỳ trước.
3. Khối chính: 3 thẻ lớn nằm ngang, mỗi thẻ là một đội (DINO, CLIMAX, PASSION). Mỗi thẻ có: tên đội, số thành viên, DT ước tính (số to nhất), Chi tiêu, ROAS ước tính (nhãn màu), số bài, và một đường xu hướng nhỏ theo ngày. Cả thẻ bấm được, có chữ "Xem đội →".

Không có: bảng thành viên, danh sách bài, biểu đồ lớn.
Dữ liệu mẫu (số bịa): DINO DT ước tính 120 triệu, chi tiêu 40 triệu; CLIMAX 45 triệu / 18 triệu; PASSION 30 triệu / 14 triệu.
```

### B2. Chi tiết một đội
**Câu hỏi:** Trong đội, bạn nào ra số nhiều nhất?

```
Màn 2: "Đội DINO".
Câu hỏi màn này trả lời: trong đội, bạn Marketing nào ra số nhiều nhất?

Nội dung:
1. Breadcrumb: Tổng quan › Đội DINO. Ô chọn đội để đổi nhanh sang đội khác.
2. 4 thẻ số của đội: Chi tiêu, DT ước tính, ROAS ước tính, Số bài có chi tiêu (so với kỳ trước).
3. Khối chính: bảng xếp hạng thành viên, sắp theo DT ước tính giảm dần. Cột: Hạng, Thành viên (ảnh đại diện tròn + mã tên), Số bài có chi tiêu, Số bài có kết quả, Chi tiêu, DT ước tính, ROAS ước tính (nhãn màu), nút "Xem →". Dòng cuối là Tổng đội.
4. Một dòng đặc biệt nền vàng nhạt tên "Chưa xác định" kèm nhãn "Tên chiến dịch sai quy ước" (số vẫn tính vào tổng đội). Nằm cuối bảng, trước dòng Tổng.

Không có: danh sách bài, ảnh bài, biểu đồ.
Dữ liệu mẫu: 4 thành viên MINHPQ, LINHHT02, BAONV, SONTD01, mỗi người 6–14 bài.
```

### B3. Hiệu suất một bạn Marketing
**Câu hỏi:** Bạn này chạy bao nhiêu bài, bài nào ra số?

```
Màn 3: "Hiệu suất cá nhân - LINHHT02".
Câu hỏi màn này trả lời: bạn này chạy bao nhiêu bài trong kỳ, bài nào ra số?

Nội dung:
1. Breadcrumb: Tổng quan › Đội DINO › LINHHT02. Ảnh đại diện + mã tên + đội. Ô chọn nhân sự.
2. 4 thẻ số: Chi tiêu, DT ước tính, ROAS ước tính, Số bài có chi tiêu (so với kỳ trước).
3. Khối chính: lưới thẻ bài (3 cột). Phía trên lưới có 3 tab "Tất cả 12 / Video 5 / Ảnh 7".
   Mỗi thẻ bài: ảnh bìa (video có nút play và thời lượng), tiêu đề bài, mã content (ví dụ CT1474.161026), số chiến dịch đang chạy bài (ví dụ "2 camp"), Chi tiêu, DT ước tính, nhãn ROAS. Bài chưa ra kết quả thì số hiển thị màu xám.
   Bấm vào thẻ thì sang màn Chi tiết bài.

Không có: biểu đồ xu hướng, phân bổ sản phẩm, khung chi tiết bên phải (để màn sau).
```

### B4. Chi tiết một bài
**Câu hỏi:** Bài này ra số ngày nào, chạy ở những chiến dịch nào, nội dung gì?

```
Màn 4: "Chi tiết bài".
Câu hỏi màn này trả lời: bài này ra số những ngày nào, chạy trong chiến dịch nào, nội dung là gì?

Bố cục 2 cột:
Cột trái (rộng):
1. Breadcrumb: Tổng quan › Đội DINO › LINHHT02 › Bài "Morning coffee ritual".
2. 3 thẻ số nhỏ của bài: Chi tiêu, Kết quả, DT ước tính.
3. Biểu đồ cột "Kết quả theo ngày" từ ngày bài bắt đầu chạy đến hôm nay. Ngày không có kết quả vẫn có cột xám thấp (giá trị 0).
4. Bảng theo ngày: Ngày, Chi tiêu, Kết quả, DT ước tính. Ngày không có số vẫn hiện dòng với số 0 màu xám.

Cột phải (hẹp):
5. Ảnh bìa bài (video có nút play).
6. Thông tin: Chủ bài (mã Marketing), Đội, Page, Post ID, Mã content + người làm content (ví dụ CT1474.161026 · HanhKTM), Mã video gốc (ví dụ Ros415.090926), nút "Mở bài trên Facebook".
7. Nội dung text của bài (khung cuộn).
8. Danh sách chiến dịch chạy bài này: tên chiến dịch đầy đủ (font đơn cách, có thể dài) + Chi tiêu + Kết quả của từng chiến dịch.

Ví dụ tên chiến dịch: "TMH - T8663 - LINHHT02 - DINO - CT1474.161026 - HanhKTM - Ros415.090926 - D".
```

### B5. Chiến dịch đặt tên sai quy ước
**Câu hỏi:** Chiến dịch nào cần sửa tên để số về đúng người?

```
Màn 5: "Kiểm tra tên chiến dịch".
Câu hỏi màn này trả lời: chiến dịch nào đặt tên sai quy ước và cần sửa thế nào?

Nội dung:
1. Một dòng giải thích quy ước: "TMH - T8663 - [Marketing] - [Đội] - [Mã content] - [Người làm content] - [Mã video gốc] - [Ghi chú]", các phần cách nhau bằng " - " (có dấu cách hai bên).
2. 2 thẻ số: Số chiến dịch sai tên, Chi tiêu đang nằm trong nhóm "Chưa xác định".
3. Khối chính: bảng. Cột: Đội (theo tài khoản quảng cáo), Tên chiến dịch hiện tại (tô đỏ phần sai), Lỗi (ví dụ "Thiếu dấu cách quanh dấu gạch", "Thiếu mã content"), Chi tiêu trong kỳ.

Không có: biểu đồ, ảnh bài.
Ví dụ tên sai: "TMH - T8663 - QUYENKT- PASSION -CT1247.280926 - HANHKTM- Ros283.270426- q1432đỏ".
```

---

## Phần C. Thứ tự màn và luồng bấm
```
B1 Tổng quan 3 đội
  └─ bấm thẻ đội → B2 Chi tiết đội
        ├─ bấm thành viên → B3 Hiệu suất cá nhân
        │     └─ bấm thẻ bài → B4 Chi tiết bài
        └─ bấm dòng "Chưa xác định" → B5 Kiểm tra tên chiến dịch
```

## Phần D. Để sau (không đưa vào bản vẽ lần này)
- Tải và xem file video, kho video gốc.
- Phân quyền (ai xem được đội nào).
- Doanh thu thật từ Tizi 2.
- CPC, CPR, CTR và các chỉ số sâu.
- Phân bổ theo sản phẩm, xu hướng nhiều chỉ số.

## Phần E. Còn chờ chốt
- Ngưỡng màu ROAS (đang tạm: xanh từ 2,5×, cam 1,5–2,5×, đỏ dưới 1,5×).
- Ý nghĩa phần "T8663" và các đuôi như "cf28", "D", "AI".
