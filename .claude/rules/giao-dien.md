---
paths:
  - "**/*.html"
  - "Trang web/**"
---
# Giao diện, trang HTML

## Luật của Hải Nam
- Sửa giao diện thì làm bản thử ở link riêng; bản chính chỉ cập nhật khi Hải Nam duyệt.
- Không chú thích thừa: hỏi Hải Nam trước khi thêm chữ phụ (ghi chú, gợi ý, cảnh báo); giới hạn dữ liệu ghi vào tài liệu cho dev, không ghi lên màn hình.
- Bộ lọc hoặc nút mà nền tảng không có thì ẩn hẳn, không làm mờ.
- Đăng link (Cloudflare Pages) chỉ khi Hải Nam muốn chia sẻ; trước khi đăng chỉ hỏi "link này có cần bảo mật không", không thì đăng bình thường (Hải Nam chốt 2026-11-27). Chỉ chat chính đăng, sau khi Hải Nam đồng ý; agent không bao giờ đăng. Link phải mở được bằng tài khoản ngoài Tbestpro (artifact claude.ai của công ty bị khóa chia sẻ ngoài).
- Kiểm tra bằng Playwright chạy ngầm, chụp khổ máy tính và điện thoại. Ảnh chụp chỉ để ở thư mục tạm, không để trong `Trang web/`; duyệt xong thì xóa (Hải Nam cho phép xóa loại file này, 2026-11-16).

## Sửa nhỏ hay dựng mới
- **Sửa nhỏ** (trang đã có, tối đa 2 file, không đổi bố cục): chat chính tự sửa, chụp 1 ảnh khổ máy tính (thêm điện thoại nếu có chữ dài hay bảng), xem ảnh rồi báo. Không gọt, không chấm.
- **Dựng mới hoặc đổi bố cục**: giao agent `giao-dien`. Chưa chắc thì coi là sửa nhỏ; ảnh chụp vỡ bố cục thì chuyển sang agent.
- **Wireframe chép từ bản mẫu đã chốt** (cùng bố cục, chỉ đổi trường dữ liệu và bước luồng): chat chính tự làm, không giao agent (Hải Nam chốt 2026-11-26). Giao agent chỉ khi dựng mới hoàn toàn hoặc làm giao diện chuẩn (bước 3–5). Sửa xong kiểm cú pháp và bấm thử rồi mới báo.

## Dựng mới
1. Điểm xuất phát: mẫu Hải Nam đưa; không có mẫu thì theo Bàn dự án v3 (`Trang web/ban-thu/v3/`): nút bấm, icon, font chữ. Tìm mẫu Pinterest hoặc Dribbble chỉ khi Hải Nam nói "tìm mẫu".
2. Chưa chốt bố cục của kiểu màn mới: dựng wireframe, chỉ chốt bố cục và trường dữ liệu (không gọt, không chấm, tối đa 3 ảnh khổ máy tính). Đổi hình hoặc bố cục wireframe thì giao agent và giữ đúng hình bản đã chọn; chat chính chỉ chuyển trường dữ liệu bằng chữ, không tự viết lại HTML (đã thử với C3, ra không giống).
3. Dựng thử: 3 agent chạy song song, mỗi agent một skill (`evon:ui-ux`, `ui-ux-pro-max`, `frontend-design`), không gọt. Hải Nam chọn 1 bản.
4. Làm tiếp bản đã chọn: dựng nhanh, gọt bằng `unslop`, đưa Hải Nam xem.
5. Hải Nam xem và duyệt hướng xong thì `design-taste-frontend` (Taste) chấm một lần, chỉ sửa lỗi thật.

Trang giới thiệu (không phải màn trong phần mềm): dựng bằng `design-taste-frontend`.
