# Checklist chất lượng trước khi giao PRD/story cho IT

## Nội dung
- [ ] Vấn đề gốc và chỉ số thành công có baseline (hoặc [cần đo])
- [ ] Phạm vi, Non-goals, phase MVP rõ; không nhồi mọi yêu cầu vào một phase
- [ ] Vai trò đúng hệ thống; quyền xem/sửa và dữ liệu che ("xxx") rõ
- [ ] As-Is và To-Be có bước, ai làm, sự kiện/trạng thái, tác động module khác
- [ ] Luồng chính, rẽ nhánh, ngoại lệ có xử lý và thông báo (xem `checklist-edge-case.md`)
- [ ] Quy tắc nghiệp vụ đánh số, có điều kiện/hành động/ngoại lệ/ngày hiệu lực
- [ ] Bảng trạng thái chuyển tiếp và hệ quả (tồn, sổ, thông báo)
- [ ] Dữ liệu: trường, kiểu, bắt buộc, kiểm tra, khóa, nguồn gốc, nhạy cảm
- [ ] Tích hợp: hướng, sự kiện/API, xử lý lỗi, chống trùng, đối soát
- [ ] Định nghĩa chỉ số nhất quán với từ điển chỉ số; quyết định cần BGĐ chốt được nêu
- [ ] Phi chức năng **định lượng**, có cách đo
- [ ] Giao diện: song ngữ, thao tác tối thiểu, trạng thái rỗng/lỗi
- [ ] Tracking/đo lường và mốc đánh giá
- [ ] Phương án phát hành, chuyển đổi, đào tạo, quay lui
- [ ] Rủi ro, phụ thuộc, câu hỏi mở có người phụ trách và hạn

## Từ ngữ
- [ ] Không còn từ mơ hồ ("nhanh", "dễ dùng", "phù hợp", "linh hoạt", "nếu cần"); mỗi yêu cầu **một ý, kiểm thử được**
- [ ] Mỗi acceptance criterion có đầu vào và kết quả quan sát được
- [ ] Thuật ngữ, mã trạng thái, tên menu dùng nhất quán với thuật ngữ nội bộ

## Quy trình
- [ ] Đã xác nhận giả định với người liên quan (trưởng phòng, kế toán trưởng, IT, vận hành PH); ghi ai và khi nào
- [ ] Dev/QA đọc thử và xác nhận ước lượng, không cần hỏi lại phần cốt lõi
- [ ] Liên kết ADR/business case/khảo sát; không mâu thuẫn quyết định đã duyệt
- [ ] Không chứa thông tin mật không cần thiết (tham chiếu nguồn thay vì chép)
