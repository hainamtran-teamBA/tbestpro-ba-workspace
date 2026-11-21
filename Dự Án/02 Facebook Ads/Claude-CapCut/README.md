# Dự án con: Claude + CapCut (dựng video cho đội Facebook)

> Tạo: 2026-11-07 | Thuộc: Dự án 02 Facebook Ads | Trạng thái: **Bước 0, chờ video mẫu** | Chủ: Hải Nam

## 1. Mục tiêu
Claude dựng các việc lặp lại trên video quảng cáo (cắt, đổi khung hình, phụ đề, logo, ra nhiều phiên bản), người dựng chỉ duyệt và chỉnh nhỏ. Làm được cho Hải Nam trước, rồi mới nhân rộng cho đội.

## 2. Thư mục
| Thư mục | Để gì |
|---|---|
| `video-goc/` | Video gốc đội đang dựng (đầu vào) |
| `video-da-dung/` | Video Claude dựng ra để so sánh, duyệt |
| `tham-khao/` | Video mẫu đội muốn giống, logo, font, ảnh chụp màn hình yêu cầu |
| `nhat-ky.md` | Ghi lại mỗi lần thử: làm gì, kết quả, lỗi |

## 3. Lộ trình
| Bước | Làm gì | Qua bước sau khi |
|---|---|---|
| 0. Chọn việc | Chọn một việc dựng lặp lại nhiều nhất, đo thời gian làm tay hiện tại | Có số đo thật |
| 1. Làm cùng Claude | Dựng 3–5 video thật; chọn cách xuất thẳng (ffmpeg) hay bản nháp CapCut | Video đủ chất lượng chạy quảng cáo |
| 2. Skill cá nhân | Gom các bước thành skill, gõ một lệnh là chạy | 10 video liên tục không sửa tay |
| 3. Hỏi lần đầu + cấu hình | Skill hỏi logo, font, khung hình, cách đặt tên; lưu lại | Người khác chạy được, không cần hỏi Hải Nam |
| 4. Cho 1–2 người thử | Người dựng trong đội dùng thật | Tiết kiệm rõ, người thử muốn dùng tiếp |
| 5. Đóng gói plugin | Đưa lên kho git nội bộ, cài bằng `/plugin` | Cài trên máy khác chạy được |
| 6. **Website dùng chung** (bước cuối) | Mọi người đăng nhập, phân quyền, dùng skill trên web, không cần cài máy | Chốt sau khi bước 4–5 có kết quả |

## 4. Hai cách dựng
| Cách | Ra cái gì | Lưu ý |
|---|---|---|
| **ffmpeg** (công cụ dựng video bằng lệnh) | Video xong, xuất thẳng | Ổn định, làm hàng loạt được; chỉnh tinh thì khó hơn CapCut |
| **Bản nháp CapCut** | File nháp mở trong CapCut để người chỉnh tiếp | CapCut không có cách kết nối chính thức; công cụ là bên thứ ba, cần xem điều khoản CapCut |

## 5. Hiện trạng máy
- Máy chưa cài ffmpeg, chưa có Homebrew (kiểm tra 2026-11-07). Cần cài trước bước 1.

## 6. Cần Hải Nam gửi
1. Một video gốc đội đang dựng → bỏ vào `video-goc/`.
2. Yêu cầu dựng thường gặp: khung hình nào (9:16, 1:1, 4:5), phụ đề, logo, mấy phiên bản.
3. Video mẫu muốn giống (nếu có) → `tham-khao/`.
4. Hiện người dựng mất bao lâu cho việc đó (nếu biết).

## 7. Câu hỏi mở
1. Việc dựng nào lặp lại nhiều nhất?
2. Chọn ffmpeg, bản nháp CapCut, hay thử cả hai?
3. Ai trong đội thử ở bước 4?
