---
name: project-sms-nha-cung-cap
description: SMS 28/11 - chọn UniSMS (API + webhook), chờ trả lời câu hỏi pháp nhân Philippines; báo cáo chờ duyệt ở Cho-duyet/03-sms, cần sửa bố cục
metadata:
  type: project
---

Trạng thái 2026-11-28: đang chọn nhà cung cấp SMS thay Semaphore. **UniSMS dẫn đầu** (có API và webhook, ₱0,47/tin). Cast.ph rẻ hơn nhưng không có API công khai, dùng làm giá để ép UniSMS. Chi tiết, nguồn và việc tiếp theo ở `Dự Án/03 SMS Agent/README.md` mục 8.

- Email với UniSMS nằm ở **Gmail cá nhân** (tranhainam1412507@gmail.com, đã kết nối). Email công ty chưa kết nối.
- UniSMS hỏi ngày 28/10 (chưa trả lời): Tbestpro có pháp nhân ở Philippines không, Semaphore có tính tài khoản nước ngoài không. Câu này phải hỏi sếp hoặc kế toán.
- Báo cáo `Cho-duyet/03-sms/bao-cao/bao-cao-nha-cung-cap-sms.html` dựng bằng khuôn `Mẫu/Báo cáo so sánh/`. Hải Nam chê "rối" rồi "chán". Phải tự chụp màn hình soi trước khi đưa; chạy `python3 -m http.server` để Playwright mở trang từng bị chặn, cần Hải Nam cho quyền.

**Why:** chuyển máy giữa chừng; máy mới cần biết đang ở bước nào.
**How to apply:** khi Hải Nam nhắc SMS, đọc README mục 8 trước, hỏi đã có câu trả lời về pháp nhân chưa. Liên quan [[project-portfolio-du-an]].
