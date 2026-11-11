# Lộ trình và việc: Dự án 03 SMS và agent hậu mãi

## Giai đoạn và cổng
| Giai đoạn | Làm gì | Cổng |
|---|---|---|
| **0. Baseline và pháp lý** (T1-2) | Đo tỷ lệ mua lại, hoàn đơn theo nhóm; kiểm tra đồng ý nhận tin; hỏi pháp lý | **G0:** có số baseline; biết được gửi tin gì cho ai |
| **1. Thiết kế thí nghiệm và agent** (T2-4) | Thí nghiệm một trang (3 nhóm); chọn kênh; spec agent (L1); mẫu tin; xác nhận nguồn sự kiện "giao thành công" | **G1:** sếp duyệt thí nghiệm, ngân sách thử, nội dung tin |
| **2. Chạy thí nghiệm** (T5-8) | 2-4 tuần, một thị trường và một nhóm sản phẩm | **G2:** đo xong; có doanh thu lặp trừ chi phí tin |
| **3. Quyết định và mở rộng** (T9+) | Mở rộng nếu tăng thêm có ý nghĩa; nối agent vào Tbestpro OS | **G3:** sếp duyệt mở rộng |

## Việc theo tuần
| ID | Việc | Hạn | Trạng thái |
|---|---|---|---|
| S1 | Trích **tỷ lệ khách mua lại** (theo SĐT) và hoàn đơn theo nhóm sản phẩm/thị trường từ dữ liệu đơn | T1 | Chưa (cần dữ liệu từ IT/BA) |
| S2 | Kiểm tra **đồng ý nhận tin** hiện có; hỏi pháp lý về tin quảng cáo ở Philippines | T1-2 | Chưa |
| S3 | Tra tiếp: MMS/Viber/RCS cho doanh nghiệp (giá, điều kiện), hướng dẫn NPC/NTC hiện hành | T2 | Chưa (Claude tra) |
| S4 | Viết **thí nghiệm một trang** (nhóm A/B/C, chỉ số, rủi ro pháp lý, cách đo) | T2 | Chưa (Claude soạn) |
| S5 | Xác nhận nguồn sự kiện "giao thành công" và độ trễ (webhook hay đồng bộ 06:00/20:00) với anh Tùng | T2-3 | Chưa |
| S6 | Spec agent hậu mãi: kích hoạt, công cụ, quyền, mức tự chủ L1, người chịu trách nhiệm, bộ test, KPI, rào chắn | T3-4 | Chưa |
| S7 | Mẫu tin 3 nhịp; danh sách nội dung cấm; người duyệt | T3-4 | Chưa |
| S8 | Chạy thí nghiệm 2-4 tuần; theo dõi hằng tuần | T5-8 | Chưa |
| S9 | Báo cáo kết quả và đề xuất | T8-9 | Chưa |

## Tiêu chí quyết định (đặt sau baseline)
Đơn lặp tăng thêm so với nhóm đối chứng đủ bù chi phí tin; hoàn đơn lặp không cao hơn; tỷ lệ từ chối nhận tin dưới ngưỡng; không có khiếu nại pháp lý.
