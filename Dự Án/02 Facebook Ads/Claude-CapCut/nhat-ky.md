# Nhật ký thử: Claude + CapCut

## 07/11/2026
- Tạo dự án con và thư mục `video-goc/`, `video-da-dung/`, `tham-khao/`.
- Chốt: website dùng chung (đăng nhập, phân quyền) là bước cuối; bắt đầu từ làm thử với 1 video thật.
- Máy chưa có ffmpeg và Homebrew.
- Thử ghi thẳng file nháp CapCut (Project01, CapCut Mac 9.7.1): đưa video snaptik lên timeline + hiệu ứng "Mờ" (Blur, mã 7399464929830423813, mức 50%) cho 0–3 giây. Sao lưu ở `sao-luu/Project01/20261107-164538/`. Lưu ý: đường dẫn có dấu tiếng Việt phải so khớp theo chuẩn Unicode, nếu không sẽ báo không tìm thấy video. Chờ Hải Nam mở CapCut kiểm tra.
- Kết quả thử 1: CapCut hiện dải hiệu ứng "模糊" đúng 0–3 giây nhưng hình KHÔNG mờ; file hiệu ứng không được tải về máy (Cache/effect không có mã 7399464929830423813).
- Thử 2: đổi sang "Spinning Focus" (7399466076825799941, kho CapCut quốc tế, miễn phí). Sao lưu ở `sao-luu/Project01/20261107-164955/`.
- Thử 2 (Spinning Focus) cũng không chạy, CapCut tự gỡ hiệu ứng. Kết luận: CapCut KHÔNG tự tải hiệu ứng được ghi từ ngoài vào; hiệu ứng phải được người dùng bấm chọn 1 lần để tải về bộ nhớ đệm.
- Hải Nam kéo 3 hiệu ứng vào: Polygon Glass (7699385841315056914), Square Blur (7395470784166251782), 3D Screens (7436469103449084432). Điểm mấu chốt: CapCut ghi trường `path` trỏ tới thư mục hiệu ứng trong `~/Library/Containers/com.lemon.lvoverseas/Data/Movies/CapCut/User Data/Cache/effect/<mã>/<md5>`; hiệu ứng mình ghi trước đó thiếu `path` nên không chạy.
- Thử 3: chia đều 3 hiệu ứng, mỗi cái 3 giây: Square Blur 0–3s, Polygon Glass 10,13–13,13s, 3D Screens 20,3–23,3s. Sao lưu ở `sao-luu/Project01/20261107-171244/`. Chờ Hải Nam kiểm tra.
- Thử 3 chạy được (Hải Nam xác nhận): dời 3 hiệu ứng do CapCut tạo sang chỗ mới thì vẫn hiển thị đúng.
- Thử 4: tách clip thành 5 đoạn bằng nhau (nhân bản đoạn CapCut tạo + 6 vật liệu kèm theo), chèn 4 chuyển cảnh 1 giây: Screen Swap, Rotation Fade, 7687882558989765895, 7198424967803834881 (2 cái sau chưa biết tên). Chuyển cảnh do mình tự ghi, có `path` trỏ tới bộ nhớ đệm. Sao lưu ở `sao-luu/Project01/20261107-171719/`. Chưa có nhạc CapCut nào trên máy.
- Chuyển cảnh mình tự ghi (có `path`) được CapCut giữ lại. Hải Nam thêm nhạc "Y Que Fue" (music_id 7666845866570270729, 166 s; file m4a trong Cache/music dù đuôi .mp3; có file nhịp .beat gồm time/value(1=phách mạnh)/energy, ~130 BPM).
- Video gốc không có tiếng → bỏ bước cắt giọng nói.
- Thử 5: nhạc lấy từ 6,70 s để cú bùng nổ (9,70 s của bài) rơi đúng giây 3 lúc mờ tan; cắt đoạn ở đầu mỗi câu nhạc (6,67 / 10,37 / 14,03 / 17,70 s); Polygon Glass 12,20–13,60 s, 3D Screens 19,53–21,40 s; nhạc 100%, nhỏ dần 1,5 s cuối. Sao lưu `sao-luu/Project01/20261107-172752/`.
