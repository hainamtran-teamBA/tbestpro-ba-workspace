---
paths:
  - "**/*.html"
  - "Trang web/**"
---
# Giao diện, trang HTML

- Thay đổi giao diện thì làm bản thử ở link riêng trước; bản chính chỉ cập nhật khi người dùng duyệt.
- Trang demo, giao diện (front end tĩnh): khi người dùng muốn chia sẻ thì xuất ra link Cloudflare Pages thay cho localhost; dữ liệu nội bộ thì bật trang đăng nhập có mã hóa. **Chỉ chat chính đăng, sau khi người dùng đồng ý; agent không bao giờ đăng.**
- Link làm ra phải mở được bằng tài khoản ngoài Tbestpro (artifact claude.ai của công ty bị khóa chia sẻ ngoài).
- Kiểm tra bằng Playwright chạy ngầm (không mở cửa sổ), chụp khổ máy tính và điện thoại trước khi giao. Chỉ mở cửa sổ khi người dùng muốn xem demo.
- Ảnh chụp kiểm tra chỉ lưu ở thư mục tạm, không để trong `Trang web/`. Người dùng duyệt xong thì xóa ảnh chụp (người dùng cho phép xóa loại file này, 2026-11-16).
- Skill: `frontend-design`, `ui-ux-pro-max`, `evon:ui-ux`; việc dựng dài giao agent `giao-dien`.

## Sửa nhỏ hay dựng mới (duyệt 2026-11-16, đề xuất của phó nhóm)
- **Sửa nhỏ**: trang đã có, sửa tối đa 2 file, không đổi bố cục (đổi chữ, tách hay thêm vai trò, thêm cột, đổi màu một nút). Chat chính tự sửa, không giao agent `giao-dien`: sửa file, chụp 1 ảnh khổ máy tính (thêm khổ điện thoại nếu phần sửa có chữ dài hay bảng) bằng Playwright chạy ngầm, xem ảnh rồi báo người dùng. Không gọt unslop, không chạy máy chấm.
- **Dựng mới hoặc đổi bố cục**: giao agent `giao-dien` theo quy trình đầy đủ.
- Chưa chắc thuộc loại nào thì coi là sửa nhỏ; ảnh chụp thấy vỡ bố cục thì chuyển sang agent.

## Wireframe (người dùng chốt 2026-11-20)
- Giai đoạn wireframe chỉ để chốt **bố cục và trường dữ liệu**: không gọt bằng unslop, không chạy máy chấm Taste, không chấm điểm. Chụp tối đa 3 ảnh khổ máy tính để tự kiểm.
- Chỉ khi người dùng **chốt wireframe** mới dựng bản thật; lúc đó mới dùng unslop và máy chấm theo quy trình đầy đủ của agent `giao-dien`.
- Đổi hình hoặc bố cục wireframe: giao agent `giao-dien` và giữ đúng hình của bản người dùng đã chọn. Chat chính chỉ chuyển trường dữ liệu và quyết định bằng chữ, không tự viết lại HTML cho "giống" bản khác (đã thử với C3, ra không giống).
