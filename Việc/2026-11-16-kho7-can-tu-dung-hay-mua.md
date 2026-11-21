---
viec: Kho 7 - nối cân: tự dựng (mua thiết bị) hay mua Nextwaves rồi tự làm phần cân
trang-thai: cho-duyet
giao-cho: chat-chinh (+ tra-cuu, nghien-cuu x2)
du-an: Dự Án/01 WMS
tao: 2026-11-16
cap-nhat: 2026-11-16
---

## Đề
Chọn hướng cho phần cân ở Kho 7: (A) mua trọn Nextwaves gồm gói nối cân, (B) mua thiết bị + phần mềm Nextwaves, tự nối dữ liệu cân qua API/SDK, (C) mua thiết bị rời, tự dựng phần mềm. Người dùng nghiêng về tự dựng.
Thông tin mới (người dùng nói 2026-11-16): Nextwaves có thiết bị quét QR + RFID; phần kết nối cân của họ giá 60 triệu [Bên khác nói, chưa thấy báo giá].

## Tiêu chí xong
- So 3 hướng: chi phí, rủi ro, ai gánh việc, đảo ngược được không, khi nào hỏng.
- Một khuyến nghị kèm điều làm đổi ý; người dùng chốt.
- Ghi vào `reference/kho-7-gani-2-wms.md` sau khi chốt (theo quy tắc tri thức).

## Nhật ký
- 2026-11-16 · chat chính · giao tra-cuu (tóm tri thức Kho 7), nghien-cuu (thị trường cân kết nối), nghien-cuu (Nextwaves SDK/API/cân)

- 2026-11-16 · chat chính · gom 3 báo cáo, đối chiếu README:7-9 và kho-7 dòng 174-197; đưa bảng A/B/C, khuyên chưa chọn C; chờ người dùng trả lời câu hỏi và 2 phép thử

## Kết quả
- Sơ bộ: A (trọn Nextwaves) hợp chỉ đạo 04/11 "một bên lo đủ cân + QR + RFID, dùng trước" nhưng 60 triệu chưa có báo giá giấy, phần mềm thử 12/11 thiếu kg từng bao khi nhận, chặn FIFO, cân khi xuất. B (Nextwaves + tự viết trạm cân đọc FI05 qua RS232) rẻ phần cứng nhưng cần người viết và API Nextwaves chưa có tài liệu công khai. C trái "không làm lại bánh xe", để sau.
- Hai phép thử quyết định: (1) xin Nextwaves báo giá tách khoản + tài liệu API + demo cân FI05 chạy thật; (2) cắm FI05 vào laptop qua cáp USB-RS232 đọc thử chuỗi số.
