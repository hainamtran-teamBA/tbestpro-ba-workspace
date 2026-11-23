# Mẫu PRD (Tbestpro)

> 1-6 trang. Mục 1-4 cho người ra quyết định; mục 5-12 cho dev/QA. Nhãn: [Dữ liệu công ty] / [Tài liệu] / [Giả định] / [Cần xác nhận].

## 0. Thông tin
- **Tên tính năng/epic:** | **Trạng thái:** Nháp | Đang rà soát | Đã duyệt | **Phiên bản/ngày:**
- **Người viết (BA/PO):** | **Người duyệt (BGĐ/trưởng IT/trưởng phòng):** | **Dev phụ trách:**
- **Liên quan:** ADR-xxxx, business case, khảo sát giải pháp, tài liệu nguồn.

## 1. Vấn đề và mục tiêu kinh doanh
- Vấn đề (1-2 câu), nguyên nhân gốc (5 Whys), ai bị ảnh hưởng.
- **Chỉ số thành công:** baseline → mục tiêu, nguồn đo, mốc đo. (Ví dụ: tỷ lệ hoàn do địa chỉ sai; thời gian đối soát COD; số click tạo MKT Link.)

## 2. Phạm vi
- **Trong phạm vi (MVP):** ...
- **Ngoài phạm vi (Non-goals):** ...
- **Phase sau:** ...
- **Áp dụng cho:** pháp nhân / đơn vị kinh doanh / kênh / kho / thị trường.

## 3. Người dùng và quyền
| Vai trò | Việc cần làm | Được thấy | Không được thấy (che "xxx") |
|---|---|---|---|

## 4. As-Is và To-Be
- **As-Is:** các bước, công cụ, điểm đau, số liệu.
- **To-Be:** luồng mới (sơ đồ), thay đổi so với hiện tại, tác động module khác.

## 5. Luồng chức năng
- **Luồng chính:** các bước 1..n (ai, làm gì, hệ thống làm gì).
- **Luồng rẽ nhánh:** ...
- **Ngoại lệ và lỗi:** bảng (tình huống | hệ thống xử lý | thông báo | ai xử lý). Xem `checklist-edge-case.md`.

## 6. Quy tắc nghiệp vụ
| Mã | Điều kiện | Hành động | Ngoại lệ | Ngày hiệu lực | Nguồn |
|---|---|---|---|---|---|
| BR-01 | | | | | |

## 7. Trạng thái và sự kiện
| Từ | Sang | Ai/sự kiện kích hoạt | Điều kiện | Hệ quả (tồn, sổ, thông báo) |
|---|---|---|---|---|

## 8. Dữ liệu
- Thực thể/trường: tên | kiểu | bắt buộc | quy tắc kiểm tra | nguồn gốc dữ liệu | nhạy cảm?
- Khóa duy nhất, quan hệ, dữ liệu chuyển đổi/làm sạch (nếu thay hệ cũ).
- Chỉ số liên quan: trỏ về từ điển chỉ số (định nghĩa, ngày nào, tỷ giá nào).

## 9. Tích hợp
| Hệ thống | Hướng | Cách (API/webhook/file) | Dữ liệu | Xử lý lỗi/chống trùng | Đối soát |
|---|---|---|---|---|---|

## 10. Giao diện và trải nghiệm
- Màn hình/luồng chính (wireframe hoặc mô tả), thao tác tối thiểu (mục tiêu số click), **song ngữ Việt-Anh**, thiết bị (web/PWA/quét mã), trạng thái rỗng/lỗi nói rõ bước tiếp theo.

## 11. Yêu cầu phi chức năng (định lượng)
| Nhóm | Yêu cầu | Cách đo |
|---|---|---|
| Hiệu năng | ví dụ: màn danh sách tải < 2 giây với 10.000 dòng | |
| Độ chính xác | ví dụ: khớp đối soát ≥ 95% tự động | |
| Bảo mật | quyền theo vị trí, che dữ liệu, nhật ký thao tác/xem | |
| Sẵn sàng | ví dụ: 99,9% giờ làm việc; RPO/RTO | |
| Khả năng kiểm toán | truy vết ai/lúc nào/từ đâu | |
| Tương thích | trình duyệt, thiết bị kho | |

## 12. Đo lường và tracking
Sự kiện cần ghi (tên, thuộc tính), báo cáo/chỉ số theo dõi, ai xem, mốc 30/90/180 ngày.

## 13. Phát hành và chuyển đổi
Phương án triển khai (thí điểm, chạy song song, bật theo pháp nhân/kho), đào tạo, quay lui, tiêu chí nghiệm thu.

## 14. Rủi ro, phụ thuộc, câu hỏi mở
| # | Mô tả | Loại (rủi ro/phụ thuộc/câu hỏi) | Người phụ trách | Hạn |
|---|---|---|---|---|

## 15. Phụ lục
Danh sách user story (xem `mau-user-story.md`), sơ đồ, nguồn, nhật ký thay đổi.
