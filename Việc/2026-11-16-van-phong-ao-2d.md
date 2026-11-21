---
viec: Văn phòng ảo 2D (bản thử mức 1, chỉ xem)
trang-thai: dung
giao-cho: giao-dien
du-an: Trang web/van-phong
tao: 2026-11-16
cap-nhat: 2026-11-18
---

## Đề
Trang 2D hiện tất cả agent theo phòng, đọc nhật ký sự kiện `Việc/nhat-ky.jsonl` để thấy ai đang làm việc gì. Chưa chat trên trang (mức 2 làm sau).

## Tiêu chí xong
- Đủ 7 chỗ ngồi: chat chính, tra-cuu, nghien-cuu, viet-yeu-cau, giao-dien, phan-bien, kiem-dinh-skill, và bàn trống Antigravity.
- Trạng thái lấy từ nhật ký thật, tự đọc lại vài giây một lần; không đọc được thì hiện dữ liệu mẫu và ghi rõ.
- Hook ghi nhật ký chạy khi giao việc và khi agent xong.
- Thử giao 2-3 việc chỉ đọc, trang hiện đúng.

## Nhật ký
- 2026-11-16 · chat chính · người dùng đồng ý; giao giao-dien dựng trang; chat chính cài hook

- 2026-11-16 · giao-dien · nộp bản thử: mắt chấm 8/10, máy chấm 2 lỗi thật (dòng nhật ký cuối bị cắt; một dòng lệch lưới ở 390)
- 2026-11-16 · chat chính · hook chạy thật; mở trang qua máy chủ 127.0.0.1:8800; giao thử nghien-cuu và phan-bien

## Kết quả
- Trang: `Trang web/van-phong/index.html` (xem qua `http://127.0.0.1:8800/site/van-phong/index.html`, máy chủ chạy ở gốc workspace)
- Còn mở: nhân vật nhỏ, phòng trống; việc không có "xong" thì đèn giữ mãi; chat trên trang (mức 2)
- 2026-11-16 · tạm dừng (đóng băng theo phản biện). Giữ 2 bản: `Trang web/van-phong/pixel-v2.html` (ảnh tĩnh, gần như không tốn pin) và `pixel-v2-di-bo.html` (có đi bộ). Bản kính, pixel cũ, v2 ban đầu đã chuyển vào Thùng rác (`~/.Trash/van-phong-ban-cu-2026-11-16/`). Xem: chạy máy chủ ở gốc workspace rồi mở `/site/van-phong/pixel-v2.html`. Mức 2 (khung chat thật, nút Cho phép/Từ chối) chưa làm.
- 2026-11-18 · chat chính · người dùng bỏ văn phòng ảo, dùng OpenMausBot thay. Tắt máy chủ; `tools/van-phong/`, `Trang web/van-phong/`, `Việc/.phien-*` chuyển vào Thùng rác (`van-phong-ao-bo-2026-11-18`).
