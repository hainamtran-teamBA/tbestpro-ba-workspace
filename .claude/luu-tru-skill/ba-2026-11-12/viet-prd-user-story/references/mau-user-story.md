# Mẫu user story và tiêu chí chấp nhận

## 1. Khuôn story
```
ID: US-<epic>-<số>        Epic: <tên>        Ưu tiên: Must/Should/Could/Won't (hoặc RICE)    MVP: Có/Không
Với vai trò <vai trò>, tôi muốn <hành động>, để <giá trị/kết quả đo được>.

Bối cảnh / quy tắc liên quan: BR-xx, ADR-xx
Phụ thuộc: US-xx / dữ liệu / đối tác
Ước lượng sơ bộ: <để dev xác nhận>

Tiêu chí chấp nhận:
 AC1 (luồng chính)
   Cho (Given) ...
   Khi (When) ...
   Thì (Then) ...
 AC2 (ngoại lệ) ...
 AC3 (quyền) ...
 AC4 (phi chức năng, định lượng) ...

Ghi chú UI/dữ liệu: ...
Câu hỏi mở: ...
```

## 2. Checklist INVEST
Độc lập · Đàm phán được · Có giá trị cho người dùng · Ước lượng được · Nhỏ (hoàn thành trong 1 sprint) · Kiểm thử được. Story quá lớn: tách theo **lát cắt dọc** (một đường end-to-end mỏng) hoặc theo luồng/quy tắc/vai trò, không theo lớp kỹ thuật.

## 3. Ví dụ minh họa (dựa trên tài liệu Tizi 2; **chỉ để tham khảo cấu trúc, cần xác nhận quy tắc thật**)
```
US-TELE-01  Epic: Telesale hàng đợi  Ưu tiên: Must  MVP: Có
Với vai trò Telesale, tôi muốn thấy đơn kế tiếp tự động sau khi lưu kết quả cuộc gọi, để gọi nhiều đơn hơn mỗi giờ và không tự đi tìm đơn.

AC1 (chính)
  Cho tôi đang xử lý đơn A có trạng thái telesale "kt" (chưa gọi)
  Khi tôi chọn kết quả "ht" (xác nhận) và bấm Lưu
  Thì hệ thống ghi kết quả vào lịch sử đơn (ai, lúc nào) và hiển thị ngay đơn tiếp theo trong hàng đợi của tôi trong < 1 giây
AC2 (ngoại lệ)
  Cho hàng đợi của tôi đã hết đơn
  Khi tôi lưu kết quả đơn cuối
  Thì hệ thống hiện trạng thái rỗng "Không còn đơn cần gọi" và gợi ý bước tiếp theo
AC3 (quyền)
  Cho tôi là telesale
  Thì tôi chỉ thấy đơn được phân cho tôi, không thấy giá vốn hay chi phí quảng cáo ("xxx" hoặc ẩn)
AC4 (đồng thời)
  Cho hai telesale mở cùng một đơn
  Thì chỉ một người khóa được đơn; người còn lại thấy thông báo "Đơn đang được xử lý bởi <tên>"
```

## 4. Quy tắc viết tiêu chí chấp nhận
- Mỗi AC **kiểm thử được** (có đầu vào và kết quả đo/nhìn thấy được); có số cho thời gian, số lượng, sai số.
- Phủ **luồng chính, ngoại lệ chính, quyền, dữ liệu sai, đồng thời, đảo ngược**.
- Dùng đúng **mã trạng thái, tên vai trò, tên menu** của hệ thống.
- Không mô tả cách làm kỹ thuật (trừ ràng buộc bắt buộc); không viết "tốt", "nhanh", "thân thiện".
- Mỗi tiền tệ/tỷ giá/múi giờ nêu rõ nguồn.

## 5. Bảng theo dõi story (mẫu)
| ID | Epic | Story | Ưu tiên | MVP | Phụ thuộc | Ước lượng | Trạng thái |
|---|---|---|---|---|---|---|---|
