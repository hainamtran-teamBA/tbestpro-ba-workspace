# Công thức tài chính cho business case

## 1. Chỉ số chính
| Chỉ số | Công thức | Lưu ý |
|---|---|---|
| Lợi ích ròng (Net benefit) | Σ lợi ích − Σ chi phí (cùng kỳ) | Dùng dòng tiền, không dùng "doanh thu" |
| ROI | (Σ lợi ích − Σ chi phí) / Σ chi phí | Nêu khung thời gian (3 năm); ROI một mình không đủ, kèm hoàn vốn và NPV |
| Hoàn vốn (Payback) | Thời điểm dòng tiền ròng lũy kế ≥ 0 | Tính theo tháng/quý; nêu có/không chiết khấu |
| NPV | Σ [dòng tiền ròng_t / (1+r)^t] | r là tỷ lệ chiết khấu; nêu lý do chọn (chi phí vốn/yêu cầu lợi suất); thử r khác |
| Điểm hòa vốn | Giả định tối thiểu để NPV = 0 | Ví dụ "tỷ lệ hoàn phải giảm ít nhất X điểm" |
| Chi phí trên đơn vị | Tổng chi phí / số đơn | Dùng để so với baseline (ví dụ SMS/đơn) |

## 2. Ví dụ mẫu tính lợi ích (minh họa cấu trúc, **không phải số thật**)
- **Giảm chi phí SMS:** (chi phí/đơn hiện tại − chi phí/đơn mới) × số đơn/tháng × 12. Nguồn số: đề xuất tối ưu SMS (chi phí 1.000đ/đơn so với khoảng 138-230đ/đơn, ~1.500 đơn/ngày theo tài liệu [kiểm chứng lại với dữ liệu thật]).
- **Giảm tỷ lệ hoàn:** (tỷ lệ hoàn cũ − tỷ lệ hoàn mới) × số đơn giao × (lợi nhuận/đơn thành công + phí vận chuyển hai chiều tránh được). Cẩn thận: chỉ tính phần hoàn do nguyên nhân can thiệp được (ví dụ địa chỉ sai).
- **Tiết kiệm thời gian đối soát:** giờ/tháng × số người × chi phí giờ; chỉ vào ROI nếu thật sự giảm tuyển/OT hoặc chuyển sang việc có giá trị; còn lại là "giá trị mềm".
- **Giảm thất thoát kho:** (tỷ lệ hao hụt cũ − mới) × giá vốn hàng luân chuyển; cần đo hao hụt hiện tại bằng kiểm kê trước.
- **Rút ngắn chốt P&L:** giá trị chiến lược (quyết định sớm hơn); mô tả, không cộng ROI.

## 3. Ba kịch bản
| Kịch bản | Cách xác định |
|---|---|
| Bảo thủ | Lợi ích thấp (đạt 50-70% giả định), chi phí cao (+20-30%), trễ tiến độ |
| Cơ sở | Giả định hợp lý nhất, có nguồn |
| Lạc quan | Lợi ích đạt đủ, chi phí theo kế hoạch |
Ra quyết định chủ yếu theo **bảo thủ và cơ sở**.

## 4. Độ nhạy (mẫu bảng)
| Giả định | Thay đổi | ROI | Hoàn vốn |
|---|---|---|---|
| Tỷ lệ hoàn giảm | −30% so với giả định | | |
| Số đơn/ngày | −20% | | |
| Chi phí triển khai | +30% | | |
| Trễ tiến độ | +3 tháng | | |

## 5. Tiền tệ
Công ty có chi phí VNĐ, PHP, USD. Chọn **một đơn vị báo cáo** và nêu tỷ giá, ngày tham chiếu (tỷ giá trong công ty đang dùng nhiều nguồn; dùng tỷ giá kế hoạch hay thực phải ghi rõ). Mọi bảng tính ghi giả định ở một sheet riêng để dễ đổi.

## 6. Lỗi thường gặp
Tính lợi ích bằng doanh thu thay vì lợi nhuận; cộng cả tiết kiệm giờ lẫn lương; bỏ qua chi phí vận hành năm 2-3; không tính chạy song song; lấy số nhà cung cấp làm số cơ sở; chọn tỷ lệ chiết khấu để ra kết quả đẹp.
