---
name: feedback-trinh-duyet-chay-ngam
description: Playwright mặc định chạy ngầm; chỉ hiện cửa sổ khi cần người dùng đăng nhập để xem chi tiết hơn, hoặc khi muốn xem demo
metadata:
  type: feedback
---

Từ 2026-11-12: khi cần trình duyệt (playwright-cli hoặc thư viện Playwright), **mặc định chạy ngầm (headless)**, không mở cửa sổ. Chỉ hiện cửa sổ (`--headed`) khi **cần người dùng đăng nhập** để xem chi tiết hơn (làm rõ 2026-11-21) hoặc khi họ muốn xem demo trực quan.

**Why:** cửa sổ bật lên làm phiền, nhưng trang cần đăng nhập thì chỉ người dùng đăng nhập được.

**How to apply:** trang cần đăng nhập thì làm theo [[feedback-trang-can-dang-nhap]] (người dùng tự đăng nhập một lần rồi chạy ngầm); không lưu mật khẩu vào file hay memory. Liên quan [[project-wms-kho7]].
