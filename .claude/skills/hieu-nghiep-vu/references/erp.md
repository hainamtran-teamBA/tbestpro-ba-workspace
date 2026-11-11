# ERP (Enterprise Resource Planning)

## 1. Là gì
ERP là hệ thống lõi **ghi sổ và quản trị nguồn lực** của doanh nghiệp: tài chính-kế toán, mua hàng, kho, bán hàng, nhân sự, sản xuất. Điểm cốt lõi: **một bộ dữ liệu thống nhất** và **sổ cái** làm nơi hội tụ số liệu từ mọi quy trình.

## 2. Module chuẩn
| Module | Nội dung |
|---|---|
| Tài chính-kế toán (GL) | Sổ cái, bút toán, kỳ kế toán, báo cáo tài chính, hợp nhất nhiều pháp nhân |
| Phải thu (AR) | Công nợ khách, đối soát thu tiền (kể cả COD) |
| Phải trả (AP) | Công nợ NCC, đối chiếu 3 bên (PO, phiếu nhập, hóa đơn) |
| Mua hàng (Procurement) | Yêu cầu mua, PO, nhận hàng, nhà cung cấp, hàng đi đường |
| Tồn kho và giá vốn | Nhập/xuất, phương pháp tính giá vốn (FIFO, bình quân), kiểm kê |
| Bán hàng | Báo giá, đơn, hóa đơn, bảng giá |
| Tài sản cố định, ngân sách | Khấu hao, kế hoạch, kiểm soát chi |
| Nhân sự, lương | Chấm công, KPI, lương |

## 3. Khái niệm cần nắm
- **Sổ cái kép:** mỗi giao dịch ghi Nợ/Có cân bằng; từ đó ra báo cáo lãi lỗ (P&L) và bảng cân đối.
- **Đa pháp nhân, đa tiền tệ:** mỗi pháp nhân có sổ riêng; giao dịch nội bộ phải **loại trừ khi hợp nhất**; quy đổi tỷ giá cần có nguồn và quy tắc thống nhất.
- **Đóng kỳ:** khóa dữ liệu kỳ, sau đó chỉ điều chỉnh có kiểm soát.
- **Giá vốn:** phương pháp áp dụng phải nhất quán; thay đổi phải có quyết định kế toán.
- **Nguyên tắc ghi nhận doanh thu:** thời điểm chuyển giao rủi ro/quyền kiểm soát (với COD thường là giao thành công).
- **Chuẩn Việt Nam:** hóa đơn điện tử, phần mềm kế toán như MISA; luôn xác nhận chế độ kế toán áp dụng với kế toán trưởng.

## 4. Rủi ro thường gặp
Nhiều định nghĩa cho cùng một chỉ số (doanh số, giá vốn), tỷ giá gõ tay, đối soát bằng Excel, đóng kỳ muộn, giao dịch nội bộ không loại trừ làm doanh thu ảo.

## 5. Tbestpro
> Nguồn: KT, IT. Cập nhật 2026-10-26.
- **Không có ERP đầy đủ.** Có: Tizi/Gani (bán lẻ, kho, vận chuyển, đối soát COD, lợi nhuận, lương/KPI), Tbestpro Finance (tbestpro.pro, báo cáo tài chính từ sheet nhập tay), MISA (dự kiến là đích đẩy hóa đơn B2B qua connector).
- **3 pháp nhân:** VN01 Tbestpro VN, PH01 Laco (đứng tên shop và bán COD tại Philippines), PH02 Ronnila (B2B cà phê). Giao dịch nội bộ: Tbestpro Global bán container cho Ganico Philippines; cần loại trừ khi hợp nhất.
- **Đa định nghĩa số:** 4 cách tính giá vốn, 3 định nghĩa doanh số tính lương, 2 định nghĩa chi phí quảng cáo (CPQC), ít nhất 6 định nghĩa doanh số, tỷ giá gõ tay ít nhất 8 chỗ (KT tr.1, 31, 54).
- **CPQC lệch:** 1-4/10 MKT khai 397,8 triệu, KSNB upload 537,1 triệu, lệch 139,3 triệu (KT tr.32).
- **Quyết định chờ Ban Giám đốc:** phương pháp giá vốn (đề xuất FIFO), doanh số tối ưu, doanh số tính lương, nguồn CPQC, phạm vi quốc gia, tách hay gộp Ganico và Tbestpro Global (KT tr.29-30; IT tr.14).
- **Hướng dự kiến (Tbestpro OS):** đa pháp nhân, sổ cái kép, sổ lô FIFO, từ điển chỉ số, rule engine có ngày hiệu lực; kỳ vọng P&L tháng ra ngày 5 thay vì ngày 15-20.
- Tizi dùng giá vốn **bình quân tháng**; Gani dùng **FIFO** (có lỗi: không đưa tồn đầu kỳ, bỏ hàng hỏng, âm kho) (KT tr.35, 47-48, 64).
- Kế toán: 3 người, sổ sách cho 3 pháp nhân. Tiền về: rút ví sàn về Pingpong rồi đổi VNĐ; Airwallex đã đồng bộ, Pingpong chưa nối API.
