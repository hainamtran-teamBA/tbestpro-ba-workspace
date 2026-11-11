# Dự án 02 - Facebook Ads: lõi dữ liệu và AI Agent cho phòng Marketing

## Truy cập dữ liệu
- Token Meta nằm trong `.env` (biến `FB_TOKEN`). Không bao giờ in token ra màn hình hay ghi vào file khác.
- Token là System User "Ads_test", không hết hạn, quyền: ads_read, ads_management, read_insights, business_management, đọc page. Thêm tài khoản, page, pixel thì gán tài sản cho system user, không cần tạo lại token.
- Hiện thấy 22 tài khoản quảng cáo (agency Lexcom): INFINITY 8, DINO 7, CLIMAX 3, PANTHER 3, PASSION 1. 14 tài khoản VND, 8 tài khoản USD (cần quy đổi); LLC03 dùng giờ Phoenix (UTC−7).
- Video trong thư viện tài khoản quảng cáo tải được; video đăng qua page cần page được gán cho system user.

## Định nghĩa số liệu (đã chốt)
- Đơn = sự kiện complete_registration (Hoàn tất đăng ký) theo quảng cáo, không tính theo pixel (pixel dùng chung nhiều nguồn).
- Doanh thu trên demo = giá trị pixel trừ chi tiêu quảng cáo (vẫn gọi là "Doanh thu"). ROAS = doanh thu chưa trừ ÷ chi tiêu. Ngưỡng hòa vốn mặc định 2,5.
- Nhãn bài: Lời (ROAS ≥ ngưỡng), Lỗ (có đơn, ROAS < ngưỡng), Không đơn (có chi tiêu, 0 đơn).
- Chiến dịch mục tiêu Tương tác không chấm theo đơn.

## Lỗi dữ liệu đã biết
- CLIMAX: ô giá trị pixel nhập "400.000" nên mỗi đơn chỉ ghi 400đ (cần "400000", VND). Từ 15/10 tài khoản Q1168 gần như ngừng chạy.
- Pixel không thuộc BM Tbestpro; một số pixel dùng chung giữa các đội và nguồn ngoài.

## Link và file chính
- Demo báo cáo (Post Analytics): https://claude.ai/artifact/TLrDrMziQbPUW8tWMcHPHj
- Marketing Hub bản mẫu: https://claude.ai/artifact/XQRyzMcabdkm3bDfZMobNk
- Cloudflare: https://tbestpro-ads-report.pages.dev (bản chính), https://version-1-0.tbestpro-ads-report.pages.dev (bản thử). Đăng nhập admin, mật khẩu do người dùng giữ.
- Đề án bản cho Ban Giám đốc (Google Docs): https://docs.google.com/document/d/1KbGErUBJYE1Z6uTvRNki5AeY2dqgvChSHEJnBDnBEO8/edit
- Đặc tả cho dev: https://docs.google.com/document/d/1Yuf58cNFqMaW9jPtumNghPiTmsCOBU80ZPlG7GIaqLo/edit
- Kế hoạch thí điểm Agent A và B: https://docs.google.com/document/d/1Wq2-sDnjY0hsq2vkBSOJ50JpNtkJQip-99_J4DGBHQg/edit
- Mẫu dữ liệu 3 tài khoản: `Mau-du-lieu-Meta-Ads-3-tai-khoan-T10-2026.xlsx` và https://docs.google.com/document/d/10DWp3uUWDTpe9y_hohmDOpHWdx7fzpQ1okUo1AlhwGg/edit

## Lộ trình đã chốt
Giai đoạn 1 lõi dữ liệu (đang làm) → 2: Agent đọc số và cảnh báo (thử trước Agent A Ý tưởng & Content, Agent B Cảnh báo & Đề xuất) → 3: duyệt rồi mới thực thi → 4: mở rộng (Tizi 2, các Agent khác, tùy biến phòng ban). AI không tự bật, tắt hay đổi ngân sách khi chưa có người duyệt.
