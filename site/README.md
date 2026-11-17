# Hồ sơ BA – trang xem dự án và đặc tả

Trang web chỉ để xem. Nội dung do Claude sửa trong các file `data/`. Không cần máy chủ.

## Mở trang
Bấm đúp `index.html` (Chrome, Edge, Safari đều được). Cần mạng để tải phông chữ; không có mạng vẫn xem được, phông khác đi.

Địa chỉ: `#/` trang chủ · `#/kho-7` dự án · `#/kho-7/UC-02` use case · `#/cong-cu` bộ công cụ.

## Cấu trúc
```
index.html, app.js, styles.css     giao diện (không cần sửa khi thêm nội dung)
styles-dark-backup.css             bản giao diện tối cũ (chỉ để tham khảo, trang không dùng)
data/manifest.js                   danh sách file dữ liệu, nạp theo thứ tự
data/toolbox.js                    trang Bộ công cụ
data/projects/<id>/project.js      một dự án
data/projects/<id>/uc/UC-xx.js     một use case
diagrams/theme-light.puml          màu sơ đồ khi trang ở giao diện sáng
diagrams/theme-dark.puml           màu sơ đồ khi trang ở giao diện tối
diagrams/theme.puml                file tạm do lệnh vẽ tự chép, không sửa tay
diagrams/<id>/UC-xx-activity.puml  sơ đồ (kèm .svg bản sáng và .dark.svg bản tối)
```
Đầu mỗi file dữ liệu có ghi chú giải thích các trường.

## Thêm dự án
1. Tạo `data/projects/<id>/project.js` (chép từ `sms/project.js` cho gọn, hoặc `kho-7/project.js` cho đầy đủ).
2. Thêm dòng `"data/projects/<id>/project.js"` vào `data/manifest.js`.

## Thêm use case
1. Thêm mã UC vào `groups` trong `project.js` của dự án.
2. Tạo `data/projects/<id>/uc/UC-xx.js` (chưa có đặc tả: chép `UC-03.js`; có đặc tả: chép `UC-02.js`).
3. Thêm dòng file đó vào `data/manifest.js`, ngay dưới `project.js` của dự án.

## Thêm sơ đồ
1. Tạo `diagrams/<id dự án>/UC-xx-activity.puml` (hoặc `-state.puml`), dòng đầu sau `@startuml` là `!include ../theme.puml`.
   Bước hệ thống ghi `:Tên bước; <<sys>>`, bước ngoại lệ ghi `<<err>>` (màu theo từng giao diện).
2. Chạy lệnh vẽ (dưới đây): ra `UC-xx-activity.svg` (sáng) và `UC-xx-activity.dark.svg` (tối). Trang tự chọn ảnh theo giao diện.
3. Trong file UC ghi `diagrams: ["activity", "state"]` (có sơ đồ nào ghi tên đó).

## Vẽ lại sơ đồ
- Windows: `powershell -ExecutionPolicy Bypass -File build-diagrams.ps1`
- Mac / Git Bash: `bash build-diagrams.sh`
  (trên Mac: `JAVA=java PLANTUML_JAR=~/duong-dan/plantuml.jar bash build-diagrams.sh`)

## Giao diện sáng / tối
Nút Sáng / Tối ở cuối thanh bên trái. Trình duyệt nhớ lựa chọn; mặc định là sáng.
Tên trong lời chào trang chủ đặt ở dòng `const USER = "Nam"` trong `app.js`.

## Khi trang báo lỗi
Khung đỏ trên cùng cho biết file nào sai (thiếu dấu phẩy, sai ngoặc, quên khai báo trong manifest).
