# Tổng quan 4 dự án (bảng điều khiển PM)

> Cập nhật: 2026-10-27. Người phụ trách: Hải Nam (PO/BA). Cập nhật bảng này mỗi **thứ Sáu**. Nhãn trạng thái: Chưa bắt đầu / Đang làm / Chờ quyết định / Bị chặn / Xong.

## 1. Danh mục dự án (4 dự án)
| # | Dự án | Mục tiêu | Trạng thái | Cổng tiếp theo | Người duyệt | Rủi ro lớn nhất |
|---|---|---|---|---|---|---|
| 01 | [Kho real-time](01-Kho-Real-time/README.md) | Kiểm soát tồn kho thời gian thực, giảm thất thoát (Kho 7 cà phê trước, kho Tizi sau) bằng QR/RFID và cân | Đang làm (khảo sát) | G0: sếp xác nhận phạm vi, tiêu chí, quyền gửi RFI | Sếp | Chưa có baseline thất thoát; chưa có phản hồi nhà cung cấp |
| 02 | [Facebook Ads: hiệu suất và thư viện nội dung](02-Facebook-Ads/README.md) | Tự động thu thập số liệu quảng cáo, báo cáo theo đội/cá nhân/post/video, giữ tài sản nội dung | Đang thử (n8n → Slack; Claude + MCP) | G0: chốt một đội và một báo cáo thủ công để làm MVP | Sếp, trưởng phòng Marketing | Phạm vi phình to (báo cáo + thư viện + đối soát + AI) |
| 03 | [SMS và agent hậu mãi](03-SMS-Agent/README.md) | Từ giảm chi phí tin nhắn sang tin theo sự kiện "giao thành công", agent soạn tin và gợi ý để khách mua lại | Chưa bắt đầu (có ý tưởng và tra cứu) | G0: đo tỷ lệ khách mua lại; xác nhận pháp lý đồng ý nhận tin | Sếp, kế toán (chi phí) | Quy định tin quảng cáo; chưa có số đo |
| 04 | [Cổng báo cáo nội bộ](04-Cong-bao-cao-noi-bo/README.md) | Website nhỏ tự host để cả đội nộp báo cáo và đính kèm file thay cho tin nhắn; sếp xem, tìm, phản hồi (tách khỏi dự án 02) | Đang làm: bản chạy thử đã dựng | G1: người dùng và một người thử xác nhận dùng được | Sếp (nếu dùng cho cả đội) | Không ai dùng vì thói quen tin nhắn |

## 2. Nền tảng chung (làm một lần, dùng ba dự án)
| Nền tảng | Kho | FB Ads | SMS |
|---|---|---|---|
| **Khóa nối dữ liệu** | Mã lô (lô nguồn), mã bao dở | Mã video/content, ad.id, UTM | SĐT, PSID, mã đơn |
| **Dữ liệu từ Tizi/Gani** | Tồn, phiếu nhập/xuất | Đơn, hoàn/hủy, nguồn | Đơn giao thành công, lịch sử mua |
| **Mẫu AI-native** | Agent kiểm kê, cảnh báo chênh lệch | Agent báo cáo, cảnh báo ngưỡng | Agent soạn tin, gợi ý |
| **Hộp duyệt (người duyệt)** | Duyệt điều chỉnh tồn | Duyệt thay đổi bất thường | Duyệt tin trước khi gửi |
Quy tắc chung: **agent đề xuất, người duyệt, hệ thống ghi**; số liệu tính bằng code/SQL, **AI không tự tính số**.

## 3. Phân bổ thời gian (khoảng 45-50 giờ/tuần, điều chỉnh mỗi tuần)
| Giai đoạn | Kho | FB Ads | SMS |
|---|---|---|---|
| Tuần 1-4 | khoảng 50% | khoảng 30% | khoảng 20% |
| Tuần 5-8 | khoảng 45% (pilot) | khoảng 30% | khoảng 25% (thí nghiệm) |
| Tuần 9-12 | theo quyết định G4 | theo kết quả MVP | theo kết quả thí nghiệm |

## 4. Nhịp làm việc
- **Thứ Hai (1 giờ):** chọn 3-5 việc ưu tiên cho tuần (xem `lo-trinh.md` từng dự án).
- **Hằng ngày (30 phút cuối ngày):** ghi `nhat-ky.md`: quyết định, bằng chứng, việc mai.
- **Thứ Sáu (1 giờ):** cập nhật bảng này, trạng thái các cổng, báo cáo sếp một trang.

## 5. Lộ trình 12 tuần (thời gian là khoảng; chưa tính ngày nghỉ lễ)
| Tuần | Kho | FB Ads | SMS |
|---|---|---|---|
| T1 (27/10-2/11) | Xin chỉ đạo; phỏng vấn Logistics/Mua hàng; kiểm kê thử; gửi RFI đợt 1 | Chọn đội + báo cáo thủ công; liệt kê trường dữ liệu và công thức | Đo tỷ lệ mua lại; kiểm tra đồng ý nhận tin và pháp lý |
| T2 (3/11-9/11) | Phỏng vấn kho, kế toán; quyết định nghiệp vụ mở; RFI thiết bị | So sánh cách thu thập: n8n/Graph API và Claude + MCP trên cùng 10 chiến dịch | Chọn kênh; viết thí nghiệm một trang |
| T3-4 | Nhận phản hồi; demo 4 kịch bản; thử nhãn và cân | MVP: luồng dữ liệu thật + đối chiếu báo cáo thủ công | Spec agent (L1: soạn nháp, người duyệt); mẫu tin |
| T5-8 | **Pilot** 2-4 tuần (một mã hàng/khu) | Dashboard v0 + cảnh báo; thiết kế thư viện nội dung | **Chạy thí nghiệm** 2-4 tuần |
| T9-12 | G4: mua/xây/kết hợp, mở sang kho Tizi | Nối Tizi 2 (đối soát); mở rộng đội | Quyết định mở rộng theo số đo |

## 6. Quyết định đang chờ
| # | Quyết định | Ai quyết | Dự án |
|---|---|---|---|
| 1 | Phạm vi, tiêu chí, quyền gửi RFI, trần chi phí thử | Sếp | Kho |
| 2 | Cách thu thập dữ liệu quảng cáo (n8n/code vs Claude + MCP) và hạ tầng lưu trữ | Anh An, sếp | FB Ads |
| 3 | Hạ tầng: Supabase hay PostgreSQL theo chuẩn Tbestpro OS | Anh An, sếp | FB Ads |
| 4 | Có gửi tin bán thêm không, cho nhóm khách nào; pháp lý | Sếp, pháp lý | SMS |

## 7. Quy ước thư mục
Mỗi dự án có 3 file: `README.md` (mục tiêu, phạm vi, trạng thái, rủi ro, câu hỏi mở), `lo-trinh.md` (giai đoạn, cổng, việc theo tuần), `nhat-ky.md` (quyết định, họp, bằng chứng). Tri thức nghiệp vụ nằm ở `reference/`. Khi bạn nói "cập nhật dự án X", tôi ghi nhật ký và trạng thái.
