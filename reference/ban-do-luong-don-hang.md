# Bản đồ luồng đơn hàng đầu-cuối (Order-to-Cash)

Dùng file này làm "xương sống": mỗi hệ thống (TMĐT, POS, OMS, WMS, ERP) chỉ là một đoạn trên luồng này. Khi người dùng hỏi về một mảng, định vị mảng đó trên bản đồ trước.

## 1. Chuẩn ngành
| # | Chặng | Hệ thống thường phụ trách | Dữ liệu chính sinh ra |
|---|---|---|---|
| 1 | Thu hút, lead | Marketing, CRM | lead, nguồn (UTM) |
| 2 | Đặt hàng | Web/app/sàn TMĐT, POS | đơn, giá, khuyến mãi |
| 3 | Xác nhận, kiểm tra | OMS (kiểm tra thanh toán, gian lận, trùng đơn) | trạng thái đơn |
| 4 | Điều phối, giữ hàng | OMS (chọn kho, giữ tồn, tách/gộp đơn) | đơn con theo kho |
| 5 | Nhặt, đóng gói | WMS | phiếu nhặt, kiện hàng |
| 6 | Vận chuyển | TMS/đơn vị vận chuyển | vận đơn, trạng thái giao |
| 7 | Giao, thu tiền | ĐVVC, cổng thanh toán | COD, thanh toán |
| 8 | Hoàn, đổi trả | OMS + WMS | đơn hoàn, nhập lại kho |
| 9 | Đối soát, ghi sổ | ERP/kế toán | doanh thu, giá vốn, công nợ, bút toán |

## 2. Nguyên tắc đọc bản đồ
- **Nguồn dữ liệu gốc (source of truth):** mỗi loại dữ liệu chỉ nên có một nơi làm chủ (đơn: OMS; tồn: WMS; sổ cái: ERP). Nhập hai nơi là gốc của lệch số.
- **Điểm bàn giao** giữa các chặng là nơi sinh lỗi: hỏi "ai bàn giao cho ai, bằng chứng từ gì, đối chiếu thế nào".
- **Hai dòng chảy song song:** dòng hàng (kho) và dòng tiền (COD, thanh toán, đối soát). Phải khớp nhau ở bước 9.
- **Vòng ngược (hoàn hàng):** thường bị bỏ sót khi thiết kế; luôn hỏi hàng hoàn đi đâu, tiền hoàn ai trả, phí hai chiều ai chịu.

## 3. Tbestpro đang ở đâu trên bản đồ
> Nguồn: Kien_truc_Tbestpro_OS_final_v2.pdf (KT), Tbestpro_So_do_to_chuc_IT_BA_VN_v10.pdf (IT), Quy trình FB Ads As-Is.html, Đề xuất tối ưu chi phí SMS.pdf. Cập nhật 2026-10-26.

Luồng đơn COD Facebook (chủ lực, khoảng 1.500 đơn/ngày đầu tháng 10/2026, chủ yếu Philippines):

| # | Chặng thực tế | Ai/hệ thống | Ghi chú |
|---|---|---|---|
| 1-2 | Quảng cáo Facebook, landing page LadiPage hoặc chat page | MKT, LadiPage, Messenger | Khoảng 60% đơn từ LadiPage (có mkt_link_id), 40% từ chat (có PSID) (SMS tr.3,6,7) |
| 2 | Đơn vào Tizi | Tizi (MKT Link/API; chat: lead qua Google Sheet rồi Sales tạo đơn) | Webhook LadiPage hiện không có secret (KT) |
| 3 | Check đơn: lọc trùng/rác, gọi xác nhận, cứu đơn | Telesale (PH-TELE), Tizi | Gọi xác nhận là chốt chặn chính cho địa chỉ sai |
| 5 | Soạn hàng, quét mã, bàn giao | Pickup/kho (PH-WH, PH-PICK) tại Malabon | Trạng thái: cbpu, cpu, cxk, dxk |
| 6 | Vận chuyển | J&T, Flash Express (tạo vận đơn qua API) | |
| 7-8 | Giao thành công hoặc hoàn | ĐVVC, Tizi (cập nhật trạng thái) | Hoàn mất phí hai chiều; ai cập nhật trạng thái và sau bao lâu: chưa xác nhận |
| 9 | Đối soát COD (SOA J&T) và kế toán | Kế toán, Excel upload | Đối soát bằng Excel; sai/trễ file thì lợi nhuận sai không cảnh báo (KT tr.31,40) |

Luồng khác: sàn TMĐT (Shopee, Lazada, TikTok Shop) xử lý đơn trên BigSeller, Tizi chỉ lưu dữ liệu và báo cáo; B2B cà phê (Ganico) dùng Gani: lead, báo giá, đơn sỉ, xuất kho FIFO, thu tiền nhiều đợt; xuất khẩu chính ngạch (Tbestpro Global).

## 4. Câu hỏi mở nên xác minh
- Ai tạo đơn từ chat: Sales hay người khác? Ai cập nhật "giao thành công/hoàn" trên Tizi, sau bao lâu?
- Hàng hoàn về kho: quy trình kiểm tra và nhập lại ở đâu, có sổ ghi không?
- Đối soát COD: tần suất, ai làm, chênh lệch xử lý ra sao?
