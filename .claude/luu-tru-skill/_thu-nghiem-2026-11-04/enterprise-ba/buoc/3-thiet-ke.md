# Bước 3 · Thiết kế lại quy trình (To-Be)

**Mục tiêu:** quy trình tốt hơn chứ không chỉ đưa các bước thủ công lên máy. Số hóa một quy trình xấu chỉ làm nó xấu nhanh hơn.

## Cách làm

1. **Chốt mục tiêu bằng số**, ví dụ "thời gian thực" nghĩa là tồn cập nhật trong vài giây sau thao tác, hay giảm thất thoát xuống dưới X kg/tháng.
2. **Tối ưu theo đúng thứ tự**, tự động hóa để sau cùng:
   1. **Bỏ** bước không tạo giá trị (trung chuyển qua chat, nhập lại).
   2. **Gộp** bước cùng người, cùng lúc.
   3. **Đổi chỗ** để dữ liệu sinh ra ngay tại chỗ làm việc (quét, cân, chụp ảnh).
   4. **Đơn giản hóa**: ít trường, ít ngoại lệ.
   5. **Tự động hóa** phần còn lại (thiết bị, tích hợp, AI).
3. **Kiểm soát nằm trong thiết kế:**
   - Bằng chứng tại chỗ mà người làm không tự sửa được.
   - Tách người làm, người duyệt, người đối chiếu.
   - Chỉ ngoại lệ mới cần người duyệt; luồng bình thường tự chạy.
   - Tự đối chiếu số hệ thống với thực tế theo chu kỳ.
   - Sai thì sửa bằng điều chỉnh có duyệt, không ghi đè.
   - Mỗi thao tác là một sự kiện; tồn là kết quả của các sự kiện, không nhập tay.
4. **Bảng sự kiện kiểm soát**, mỗi dòng một sự kiện:

   | Sự kiện | Ai, thiết bị | Bằng chứng | Độ trễ | Kiểm tra tự động | Ngoại lệ → ai xử lý |
   |---|---|---|---|---|---|

5. **Đưa 2–3 phương án** khác nhau thật sự (khác mức gắn mã, khác mức tự động), trong đó có một phương án tối giản để thử.
6. **Đối chiếu với hệ đang có** (Gani 2, Tizi): phần nào đã có, phần nào thiếu. **Danh sách phần còn thiếu** là đầu vào cho IT.
7. **Thử trên giấy** với kịch bản thật, cùng kho và kế toán: chỗ nào nghẽn, chỗ nào người làm không nổi.

## Khi phải chọn giữa hai hướng hệ thống

Ví dụ: dữ liệu nào hệ nào làm chủ, tích hợp thế nào, mua trọn gói hay gắn thiết bị vào Gani.
- So sánh theo `mau/ma-tran-danh-doi.md`, chọn 3–4 thuộc tính chất lượng quan trọng nhất (`mau/thuoc-tinh-chat-luong.md`).
- Ghi lại quyết định theo `mau/mau-adr.md`, trạng thái "Đề xuất". Chỉ sếp hoặc trưởng IT chuyển sang "Đã duyệt".
- Nguyên tắc: mỗi loại dữ liệu chỉ một nơi làm chủ; dữ liệu liên quan tiền và kho phải có đối chiếu tự động.

## Ra cái gì

Hồ sơ To-Be 2–3 trang: mục tiêu, nguyên lý học được ở bước 2, phương án khuyến nghị, bảng sự kiện kiểm soát, danh sách phần còn thiếu so với Gani/Tizi, chỉ số đo, kế hoạch thử.

## Qua bước 4 khi

Người vận hành đồng ý quy trình mới làm được, và có danh sách phần còn thiếu đủ rõ để ước chi phí.
