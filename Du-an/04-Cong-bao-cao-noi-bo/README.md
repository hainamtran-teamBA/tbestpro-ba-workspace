# Dự án 04: Cổng báo cáo nội bộ (website nhỏ tự host)

> Cập nhật: 2026-10-27 | Trạng thái: **Đang làm: bản chạy thử đã dựng (`app/`)** | Chủ: Hải Nam | Người duyệt: Sếp (nếu dùng cho cả đội)
> **Tách hẳn dự án 02 Facebook Ads.** Đây chỉ là website nhỏ để báo cáo, không có số liệu quảng cáo.

## 1. Vấn đề
Báo cáo công việc hiện nay gửi **qua tin nhắn nhóm**: dễ trôi, không quản lý, khó tìm lại, sếp khó biết ai đã nộp. [Người dùng nói]

## 2. Mục tiêu
Một nơi tập trung để cả đội **nộp báo cáo, đính kèm file, và sếp xem, tìm, phản hồi**, thay cho Excel và tin nhắn.

## 2b. Bản chạy thử
Thư mục `app/`: giao diện bám prototype **WORKNOTE** (ảnh trong `image/`). Chạy bằng `node server.js`, xem `app/README.md`. Phạm vi đã chốt với người dùng: **Tổng quan + hộp thoại Tạo báo cáo + đính kèm file + phản hồi; ai cũng xem được (chưa phân quyền); trạng thái giữ như prototype**.

## 3. Phạm vi MVP
| Có | Chưa làm |
|---|---|
| Đăng nhập, vai trò (nhân viên, trưởng nhóm, sếp) | Đọc dữ liệu từ trong file Excel |
| **Form báo cáo** (ngày, đội, việc đã làm, kết quả, vướng mắc, kế hoạch mai) | Tích hợp Slack/AI |
| **Đính kèm file** (PDF, doc, Excel, ảnh) | Dashboard số liệu quảng cáo (thuộc dự án 02) |
| Danh sách, lọc theo đội/ngày/người, tìm kiếm | |
| Màn hình sếp: ai đã nộp, ai chưa; xem chi tiết | |
| Phản hồi/ghi chú của sếp trên từng báo cáo | |
| Xuất Excel khi cần tổng hợp | |

## 4. Tiêu chí thành công (đề xuất, ngưỡng đặt sau khi có baseline)
- Đội dùng cổng thay tin nhắn trong 2 tuần thử.
- Sếp **tìm lại một báo cáo cũ trong dưới 1 phút**.
- Tỷ lệ nộp đúng hạn tăng so với hiện tại [cần đo].
- Số tin nhắn báo cáo trong nhóm giảm.

## 5. Quyết định cần chốt
| # | Quyết định | Ai |
|---|---|---|
| 1 | **Tự xây** hay dùng công cụ có sẵn tự host/miễn phí (NocoDB, Baserow, Google Forms) [chưa kiểm chứng tính năng] | Hải Nam |
| 2 | **Chỗ chạy thật:** máy chủ công ty / VPS / máy văn phòng | Anh An, sếp |
| 3 | Có bắt buộc cả đội nộp ở đây thay tin nhắn | Sếp |

## 6. Rủi ro
| Rủi ro | Cách giảm |
|---|---|
| **Không ai dùng** (thói quen tin nhắn) | Sếp yêu cầu nộp ở đây; form ngắn, điền dưới 3 phút |
| Lộ dữ liệu | Đăng nhập bắt buộc; không mở ra Internet nếu không cần; HTTPS |
| File tải lên có hại hoặc quá nặng | Giới hạn loại và dung lượng |
| Mất dữ liệu | Sao lưu hằng ngày (cơ sở dữ liệu và file) |
| Hosting miễn phí không hợp dùng thật | Chỉ thử bằng dữ liệu không nhạy cảm; hỏi anh An chỗ chạy thật (Vercel gói miễn phí chỉ cho dùng cá nhân phi thương mại) |

## 7. Câu hỏi mở
1. **Bao nhiêu người** báo cáo và **ai xem**?
2. **Mẫu báo cáo hiện nay** gồm những mục gì? (một ví dụ đã che thông tin)
3. Chạy **trong mạng nội bộ** hay cần truy cập từ ngoài?
