# Lộ trình và việc: Dự án 01 Kho

## Cổng quyết định
| Cổng | Thời điểm | Tiêu chí | Ai duyệt |
|---|---|---|---|
| **G0** | T1 (1-2 ngày) | Sếp xác nhận phạm vi, tiêu chí, quyền gửi RFI, trần chi phí thử | Sếp |
| **G1** | Cuối T1 | Có số kg lệch của ít nhất một mã hàng; As-Is đầu-cuối được Logistics, Mua hàng, Kho xác nhận; các quyết định nghiệp vụ mở đã có người phụ trách | Hải Nam, anh An |
| **G2** | T3-4 | Shortlist 2-3 bên sau demo bốn kịch bản; kết quả thử nhãn bao đay và cân; quyết định đi pilot / dừng / hỏi thêm | Sếp |
| **G3** | Cuối pilot | Đạt tiêu chí đặt sau G1 (ví dụ ngưỡng lệch tồn, thời gian xuất, lỗi quét) | Sếp |
| **G4** | T9+ | Quyết định mua/xây/kết hợp + business case có số thật + kế hoạch mở sang kho Tizi | Ban Giám đốc |

## Việc theo tuần
| ID | Việc | Hạn | Trạng thái |
|---|---|---|---|
| K1 | Hỏi sếp ba câu (sản phẩm bàn giao, tiêu chí, phạm vi); xin phép gửi RFI, phỏng vấn, quan sát, kiểm kê thử | T1 | Chưa |
| K2 | Điền chỗ trống docx RFI phần mềm (người gửi, ngày, quy mô) | T1 | Chưa |
| K3 | Soạn **bộ RFI thiết bị/Auto-ID** (RFID, thẻ bao đay, PDA, cân, máy in, ROI mỗi tem) | T1 | Chưa (Claude soạn) |
| K4 | Phỏng vấn Logistics và chứng từ XNK, Mua hàng | T1 | Chưa |
| K5 | Quan sát nửa ngày Kho 7; phỏng vấn quản lý kho | T1-2 | Chưa |
| K6 | **Kiểm kê thử một mã hàng** (baseline) | T1 | Chưa |
| K7 | Phỏng vấn kế toán; chốt các quyết định nghiệp vụ mở | T2 | Chưa |
| K8 | Gửi RFI đợt 1: thiết bị trước (ưu tiên theo chỉ đạo sếp), phần mềm: Qbil, FoodReady, Focus WMS, Ecount, MISA AMIS Kho | T1-2 | Chưa |
| K9 | Demo 4 kịch bản; ghi bảng chấm | T3-4 | Chưa |
| K10 | Thử nhãn/thẻ trên bao đay; thử cân Bluetooth; thử điện thoại và máy quét | T3-4 | Chưa |
| K11 | Kiểm soát nhẹ (tầng 1): quản lý kho duyệt xuất, phiếu cân ký, kiểm kê đột xuất | T1-2 | Chưa (cần đồng ý) |
| K12 | Viết ADR "lô nguồn" (đề xuất) | T2-3 | Chưa |
| K13 | Pilot 2-4 tuần: một mã hàng/khu; đo so baseline | T5-8 | Chưa |
| K14 | Business case có số thật; quyết định G4 | T9 | Chưa |

## Phụ thuộc và đường găng
G0 (sếp) → gửi RFI; kiểm kê thử (kho đồng ý) → baseline → tiêu chí pilot → business case. Phỏng vấn Logistics trước vì chặn nhiều câu hỏi về lô.

## Điều làm đổi lộ trình
- Baseline nhỏ → dừng ở kiểm soát nhẹ, hoãn mua.
- Lệch chủ yếu ở hàng về (đường biển) → ưu tiên kiểm nhận, hợp đồng, bảo hiểm với forwarder.
- Không bên nào xử lý được lô + cân + bao dở → hướng kết hợp: mua thiết bị, tự xây phần lô và bao dở trên Gani 2.
