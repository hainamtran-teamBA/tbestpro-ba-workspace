---
name: feedback-trinh-duyet-chay-ngam
description: Dùng Playwright mặc định chạy ngầm (không hiện cửa sổ); chỉ mở cửa sổ khi người dùng muốn xem demo
metadata:
  type: feedback
---

Từ 2026-11-12: khi cần trình duyệt (playwright-cli hoặc thư viện Playwright), **mặc định chạy ngầm (headless)**, không mở cửa sổ. Chỉ dùng `--headed` khi người dùng nói muốn xem demo trực quan.

**Why:** người dùng thích chạy ngầm như trước, cửa sổ bật lên làm phiền.

**How to apply:** trang cần đăng nhập (vd Nextwaves) thì hỏi người dùng cách đăng nhập; không lưu mật khẩu vào file hay memory. Liên quan [[project-wms-kho7]].
