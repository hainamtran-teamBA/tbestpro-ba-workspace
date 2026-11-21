---
viec: Kho 7 - trạm cân tự dựng nối vào Nextwaves (nhập, xuất trước); không được mới tự dựng toàn bộ
trang-thai: dang-lam
giao-cho: chat-chinh (+ nghien-cuu)
du-an: Dự Án/01 WMS
tao: 2026-11-17
cap-nhat: 2026-11-17
---

## Đề
Người dùng chốt 2026-11-17: **tự dựng phần mềm kho**, chỉ mua thiết bị Nextwaves (đầu đọc, thẻ). Cân FI05 đã đọc được dữ liệu qua USB–RS232 (dev bên mình viết chương trình đọc). Bắt đầu bằng **trạm cân nhập kho**, rồi xuất kho; kiểm kê cân nhắc dùng app Nextwaves hoặc tự làm.

Lưu ý: chỉ đạo sếp 04/11 là "mua trọn gói dùng trước, tự thiết kế tính sau" (`Dự Án/01 WMS/README.md:9`) → hướng tự dựng **cần trình sếp**.

## Tiêu chí xong (giai đoạn thiết kế)
- [x] Bản học Nextwaves (nhập, xuất): luồng của họ, cái hay, cái thiếu, API/SDK thiết bị.
- [ ] Quy trình to-be đã chốt: nhập (trạm cân), xuất (FIFO chặn, cân khi xuất), kiểm kê, ngoại lệ, ai làm/ai duyệt.
- [ ] Hợp đồng dữ liệu trạm cân (lượt cân, kg gốc, ổn định, về 0, thẻ/QR, người, giờ; không gõ tay).
- [ ] Đặc tả UC-02 (Nhập) cập nhật; UC xuất viết mới.
- [ ] Một trang trình sếp (hướng tự dựng, chi phí, rủi ro, bước chạy thử).

## Nhật ký
- 2026-11-17 · chat chính · người dùng chốt tự dựng; giao `nghien-cuu` học tài liệu + demo Nextwaves (tài khoản demo do Nextwaves cấp, không lưu mật khẩu).
- 2026-11-17 · chat chính · người dùng làm rõ: **ưu tiên dùng Nextwaves phía sau + trạm cân tự dựng** (Nextwaves đã cung cấp tài liệu); chỉ khi không nối được (không ghi được kg từng bao, không xuất được) mới **tự dựng toàn bộ**. Phạm vi trước mắt: **nhập và xuất**, câu hỏi chính: chia đều kg cho từng bao thế nào khi nối trạm cân.
- 2026-11-17 · nghien-cuu · học Nextwaves (docs + demo, chỉ đọc): kg lưu **theo từng túi/thẻ (EPC)**; có **API REST công khai** (khóa đọc/ghi, 600 lệnh/phút; tài liệu `https://api-xuong.nextwaves.app/api/public-docs`): `POST /api/v1/public/stock-requests` tạo phiếu nháp nhập/xuất, dòng có `packBags[{epc, quantity}]` (kg từng túi), lô, rồi submit/approve/complete; `POST /api/v1/public/packs`; Idempotency-Key, webhook HMAC. **Không** có chia đều (trạm cân tự chia), **không** cân khi xuất, **không chặn FIFO** (chỉ gợi ý), không dung sai tổng kg; xé bao làm được trên giao diện (phần còn lại ở cùng thẻ), qua API chưa rõ. Phiếu: Nháp → Đã gửi → Đã duyệt → Hoàn tất; tồn đổi lúc Hoàn tất; sửa sau hoàn tất bằng "Đảo phiếu"/"Sửa tồn kho" có lý do. → **Hướng lai khả thi cho NHẬP**; xuất cần thử API.

## Kết quả
