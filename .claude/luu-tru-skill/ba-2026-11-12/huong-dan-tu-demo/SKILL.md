---
name: huong-dan-tu-demo
description: Tạo trang hướng dẫn sử dụng phần mềm có ảnh chụp từng bước (ô viền đỏ chỗ cần bấm), chia tab theo nghiệp vụ (nhập, xuất, kiểm kê...), kèm hộp "Làm được / Chưa làm được", bằng cách tự chạy thử bản demo web của nhà cung cấp với Playwright. Dùng khi người dùng nói "làm hướng dẫn cho phần mềm X", "chụp các bước", "thử demo rồi làm hướng dẫn", "tạo file hướng dẫn theo từng hạng mục", hoặc cần kiểm tra phần mềm có làm được luồng nghiệp vụ của công ty không.
---

# Hướng dẫn từ demo (Playwright + trang nhiều tab)

Người dùng là PO/BA Tbestpro. Trả lời tiếng Việt, ngắn. Định dạng trang đã được người dùng duyệt ngày 06/11/2026 (mẫu: hướng dẫn Nextwaves Kho 7). Giữ nguyên hình thức đó.

## Khi nào dùng
- Có tài khoản demo bản **web** của phần mềm, cần biết nó làm được luồng nào và làm thế nào.
- Cần trang hướng dẫn có ảnh cho người dùng, sếp hoặc nhân viên.
- Không dùng cho app điện thoại (Playwright chỉ chạy web); với app thì ghi rõ "chưa thử được trên app".

## Quy trình

1. **Chốt danh sách tab** với người dùng (ví dụ: Nhập kho, Xuất kho, Xé bao lấy lẻ, Kiểm kê, Dùng lại thẻ) và ai làm, ai duyệt mỗi tab. Không tự thêm tab.
2. **Cài Playwright vào scratchpad**, không cài vào dự án:
   ```bash
   mkdir -p <scratchpad>/pw && cd <scratchpad>/pw && npm init -y >/dev/null && npm i playwright@1.48.2
   PLAYWRIGHT_BROWSERS_PATH=$PWD/browsers npx playwright install chromium
   ```
   Chép `scripts/lib.js` của skill này vào đó. Mọi lệnh node sau đều kèm `PLAYWRIGHT_BROWSERS_PATH=$PWD/browsers`.
3. **Đăng nhập một lần, lưu phiên:** truyền tài khoản qua biến môi trường (`NW_U`, `NW_P`), không ghi mật khẩu vào file, memory hay tài liệu. Nút đăng nhập bị che thì nhấn Enter ở ô mật khẩu. Lưu `state.json` bằng `ctx.storageState`.
4. **Đọc tài liệu nhà cung cấp trước** (ví dụ Nextwaves: https://docs.nextwaves.com/vi/sense-inventory/README), giao cho agent `web-fetch` kèm danh sách câu cần trả lời. Ghi lại trang nguồn. Chỗ tài liệu nói một đằng, demo chạy một nẻo thì ghi cả hai vào hộp cam.
   **Đọc trước khi bấm:** liệt kê menu (mở từng nhóm), đọc trang Cài đặt và Phân quyền (vai trò, quyền) để biết sự thật. Việc tra cứu là của mình, không hỏi người dùng.
5. **Chạy từng luồng bằng script**, mỗi bước gọi `shot(locator)` từ `lib.js`: tô viền đỏ `#e11d48` 4px quanh chỗ cần bấm, chụp, bỏ viền. Bước chỉ xem kết quả thì `shot(null)`.
   - Dùng dữ liệu thử có tiền tố `TEST`, không đụng dữ liệu mẫu của nhà cung cấp.
   - Đặt `p.setDefaultTimeout(30000)`, bắt lỗi từng luồng và chụp `*-err.png` để xem bằng mắt.
   - Ô chọn dạng ô gõ (combobox) thì bấm vào ô rồi bấm chữ trong danh sách, không dùng `selectOption`.
   - Ghi lại mọi điều phát hiện khác tài liệu (ví dụ lỗi số lẻ, không gợi ý FIFO, kiểm kê không mù).
6. **Mở ảnh ra xem** (Read) vài bước quan trọng để chắc viền đỏ đúng chỗ.
7. **Nén ảnh:** `sips -Z 1100 -s format jpeg -s formatOptions 70 a.png --out a.jpg`.
8. **Viết spec.json rồi ghép trang:** `python3 -I scripts/build_guide.py spec.json out.html`. Mỗi tab có:
   - dòng vai trò (Làm / Kiểm / Duyệt),
   - hộp xanh **"Làm được (đã thử)"** và hộp cam **"Chưa làm được / cần hỏi nhà cung cấp"**,
   - các bước đánh số tròn xanh, tiêu đề ngắn, mô tả 1 đến 3 câu, chữ cần bấm in **đậm**, ảnh có viền đỏ.
   Mô tả bước nói cả thao tác thực tế ngoài kho nếu khác bản web (ví dụ "ở kho: bóp cò máy quét thay cho gõ mã").
9. **Đăng bằng Artifact** (riêng tư), gửi link. Báo người dùng: dữ liệu thử đã tạo trên demo, cài đặt đã đổi, câu nào cần hỏi nhà cung cấp.
10. Hỏi người dùng có muốn xóa thư mục Playwright (khoảng 300 MB) không.

## Hình thức (đã duyệt, giữ nguyên)
- Đầu trang: dòng nhỏ màu nhấn (đơn vị · demo · ngày), tiêu đề lớn, một câu dẫn nói ô viền đỏ là chỗ bấm.
- Thanh tab dính đầu trang, tab đang chọn nền xanh `#0b5cad` chữ trắng; link có `#id` mở đúng tab.
- Có giao diện tối theo máy người xem; điện thoại thì hai hộp trạng thái xếp dọc.

## Nguyên tắc
- Chỉ ghi điều đã chạy thật hoặc đọc thấy trên màn hình; chỗ chưa thử ghi rõ.
- Không đăng nhập bằng tài khoản Google hay tài khoản thật của người dùng; chỉ dùng tài khoản demo nhà cung cấp cấp.
- Không chia sẻ link ra ngoài khi người dùng chưa yêu cầu.
- Cuối câu trả lời ghi dòng `🧰 Skill: huong-dan-tu-demo · Agent: ...`.
