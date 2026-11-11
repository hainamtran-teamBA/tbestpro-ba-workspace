# Khung quyết định: Mua, Xây hay Kết hợp

## 1. Câu hỏi sàng lọc (trả lời theo thứ tự)
1. **Có tạo lợi thế cạnh tranh không?** Nếu quy trình này là thứ làm Tbestpro khác đối thủ (ví dụ cách chấm điểm rủi ro đơn COD, tối ưu chi phí quảng cáo theo đơn giao thành công), nghiêng về **xây hoặc kiểm soát được**. Nếu chỉ là chức năng thông dụng (kế toán, tuân thủ hóa đơn, kho cơ bản), nghiêng về **mua**.
2. **Có sản phẩm phủ ≥ 80% nghiệp vụ must-have mà không phải tùy biến nặng không?** Có → mua/cấu hình. Không → xây hoặc kết hợp.
3. **Tích hợp có khả thi không?** Nối được với Tizi/Gani, J&T/Flash, sàn, MISA bằng API ổn định? Nếu phải nhập tay hoặc chờ nhà cung cấp, rủi ro cao.
4. **Kiểm soát dữ liệu và rủi ro khóa nhà cung cấp:** xuất được toàn bộ dữ liệu không? Phụ thuộc một nhà cung cấp cho tiền/kho có chấp nhận được không?
5. **Năng lực và thời gian:** đội IT có đủ người xây và **bảo trì** (không chỉ xây xong)? Quyết định có đụng lộ trình Tbestpro OS không?
6. **Quy mô và tốc độ thay đổi:** nghiệp vụ còn thay đổi nhiều (công ty đang chốt định nghĩa số liệu)? Nghiệp vụ chưa ổn định thì khó mua (phải tùy biến) và khó xây (yêu cầu trôi).

## 2. Bảng gợi ý
| Tình huống | Hướng nghiêng | Lưu ý |
|---|---|---|
| Chức năng thông dụng, chuẩn ngành | **Mua** (SaaS) | Kiểm tra API, xuất dữ liệu, hỗ trợ tiếng Anh |
| Đặc thù, tạo khác biệt, dữ liệu là tài sản lõi | **Xây** | Tính chi phí bảo trì dài hạn |
| Nền thông dụng + phần đặc thù nhỏ | **Kết hợp**: mua lõi, xây lớp mở rộng qua API | Giữ ranh giới rõ; tránh tùy biến sâu vào lõi đã mua |
| Nghiệp vụ chưa chốt | **Chờ hoặc làm pilot nhỏ** | Chốt định nghĩa trước, tránh khóa vào cấu hình sai |
| Tính năng sắp có trong lộ trình nội bộ | **Chờ hoặc dùng tạm thời (thủ công/cấu hình)** | Tránh mua trùng |

## 3. Cạm bẫy thường gặp
- **Chọn công cụ trước, hỏi nghiệp vụ sau.**
- **Đánh giá thấp chi phí bảo trì và chi phí cơ hội** của tự xây; đánh giá thấp chi phí tùy biến và tích hợp của mua.
- **Bị demo cuốn hút:** yêu cầu thử với **kịch bản thật của Tbestpro** (ví dụ 20 đơn COD thật, 1 container hàng, 1 đợt hàng hoàn) thay vì demo chuẩn.
- **Bỏ qua chuyển đổi dữ liệu và đào tạo** (50 nhân sự pickup tiếng Anh, thay đổi thói quen).
- **Khóa vào một nhà cung cấp** cho phần tiền/kho mà không có đường thoát.
- **So sánh không công bằng:** phương án "xây" tính lý tưởng, phương án "mua" tính thực tế.

## 4. Mẫu PoC/pilot
- Phạm vi nhỏ (một kho, một kênh, một nhóm sản phẩm), thời gian 2-4 tuần.
- Tiêu chí đạt/không đạt **định lượng** (ví dụ: lệch tồn < 1%, thời gian nhặt đơn giảm X%, đối soát khớp ≥ 95%).
- Người chịu trách nhiệm, dữ liệu dùng (đã che nếu cần), điều kiện dừng, chi phí tối đa.
