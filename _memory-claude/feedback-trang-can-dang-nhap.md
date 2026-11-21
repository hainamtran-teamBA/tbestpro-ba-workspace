---
name: feedback-trang-can-dang-nhap
description: Cách xem trang/tài liệu cần đăng nhập: mở cửa sổ Playwright cho người dùng tự đăng nhập một lần, rồi chạy ngầm bằng cùng hồ sơ; không xin mật khẩu
metadata:
  type: feedback
---

Khi người dùng nhờ xem một trang hay tài liệu **cần đăng nhập** (ví dụ EchoTik, Kalodata, FastMoss), làm theo "cách B", không xin mật khẩu:
1. Mở cửa sổ có hình: `playwright-cli -s=<tên> open <url> --headed --persistent --profile "$HOME/.playwright-profiles/<tên>" --browser chrome` (PATH có `$HOME/.local/bin`).
2. Báo người dùng tự đăng nhập trong cửa sổ đó (kể cả mã xác nhận, hình xác minh), chờ họ nhắn "xong".
3. Đóng cửa sổ có hình, mở lại **chạy ngầm** cùng `--profile` (bỏ `--headed`) để xem và tìm hiểu.
4. Chỉ đọc: không thanh toán, không đổi cài đặt tài khoản, không đăng ký gói, không tải hàng loạt.
5. Xong hỏi người dùng có xóa hồ sơ không (`playwright-cli -s=<tên> delete-data` hoặc xóa thư mục hồ sơ); dọn thư mục `.playwright-cli/` nếu nó sinh ra trong workspace.

**Why:** Hải Nam (2026-11-21) chọn cách này khi cần xem EchoTik: không muốn đưa mật khẩu cho Claude (mật khẩu gõ vào chat bị lưu trong lịch sử), và dặn ghi nhớ làm cách mặc định cho mọi trang cần đăng nhập. Cửa sổ có hình chỉ mở ở bước đăng nhập, là ngoại lệ của [[feedback-trinh-duyet-chay-ngam]].

**How to apply:** nếu người dùng đưa mật khẩu trong chat thì nhắc đổi lại; nếu trang có captcha hoặc đăng nhập Google mà chạy ngầm bị kẹt thì quay về cửa sổ có hình; nhắc người dùng rằng nhiều công cụ cấm tự động hóa trong điều khoản, nên ưu tiên tài khoản dùng thử.
