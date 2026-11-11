---
name: cac-ben-lien-quan
description: Phân tích và lập kế hoạch làm việc với các bên liên quan cho một dự án hoặc sáng kiến tại Tbestpro - ai liên quan, ai có quyền chặn hay quyết, ai làm/ai duyệt (RACI), ai chốt phạm vi và duyệt thay đổi, xung đột lợi ích, và kế hoạch trao đổi (ai nhận gì, khi nào, qua kênh nào). Dùng khi người dùng hỏi "ai cần đồng ý", "ai duyệt", "cần báo ai", "sếp/kế toán/kho không đồng ý thì sao", "lập RACI", "ma trận quyền lực", "kế hoạch trao đổi với các bên", "bắt đầu dự án mới nên làm việc với ai", hoặc trước khi khảo sát, đi demo hay trình sếp.
---

# Các bên liên quan và cách ra quyết định

**Mảng BABOK:** 1. Lập kế hoạch và giám sát (lập kế hoạch làm việc với các bên liên quan; lập kế hoạch quản trị quyết định), và 2. Thu thập thông tin và cộng tác (quản lý sự cộng tác).

Người dùng là PO/BA tại Tbestpro, làm việc của Enterprise BA: dự án nào cũng chạm nhiều bộ phận (sếp, kế toán, kho, mua hàng, IT, đối tác ở Philippines). Dự án hay thất bại không vì giải pháp sai mà vì **sai người được hỏi, thiếu người được báo, hoặc không rõ ai được quyết**. Trả lời **tiếng Việt**, ngắn, dùng bảng.

Bối cảnh: đọc `hieu-nghiep-vu/references/thuc-te-cong-ty.md` (tổ chức, vai trò) và mục "Người liên quan" trong `Du-an/<dự án>/README.md` trước khi hỏi người dùng.

## Quy trình 7 bước

### 1. Chốt việc đang phân tích
Một câu: dự án/sáng kiến nào, đang ở giai đoạn nào, **quyết định sắp tới là gì** (ví dụ "sếp duyệt bảng chấm điểm trước khi đi demo"). Phân tích các bên liên quan luôn gắn với một việc cụ thể, không làm chung chung cho cả công ty.

### 2. Danh sách các bên liên quan
Dùng checklist vai trò của BABOK để không sót:
| Vai trò | Ví dụ ở Tbestpro |
|---|---|
| Người bảo trợ, người quyết ngân sách | Sếp |
| Chuyên gia nghiệp vụ | Kế toán, mua hàng, logistics |
| Người dùng cuối | Nhân viên kho, telesale |
| Người hỗ trợ vận hành | Quản lý kho Philippines |
| Người triển khai | Anh An và đội IT |
| Nhà cung cấp, đối tác | Bên giải pháp, forwarder, QC thuê ngoài, đơn vị vận chuyển |
| Người chịu kết quả | Sale, khách hàng, CEO các mảng |
| Người kiểm soát, tuân thủ | Kế toán trưởng, kiểm soát nội bộ |

Mỗi bên ghi: **vai trò trong việc này, họ được gì và mất gì khi thay đổi, mối lo, thái độ hiện tại** (ủng hộ / trung lập / lo ngại / phản đối / chưa rõ), **bằng chứng** cho nhận định đó. Mẫu ở `references/mau-cac-ben-lien-quan.md`.

### 3. Ma trận quyền lực và quan tâm
| | Quan tâm thấp | Quan tâm cao |
|---|---|---|
| **Quyền lực cao** | Giữ hài lòng: báo ngắn, đúng lúc | **Làm việc chặt**: hỏi ý kiến ở mỗi cổng quyết định |
| **Quyền lực thấp** | Theo dõi | Giữ thông tin, mời góp ý |

"Quyền lực" là **khả năng chặn hoặc làm chậm** việc trên thực tế, không phải chức danh. Ví dụ: người duy nhất nhập liệu vào hệ thống có quyền lực thực tế cao dù chức vụ thấp.

### 4. RACI cho các việc và quyết định chính
R = người làm · A = người chịu trách nhiệm cuối và **duyệt** (mỗi dòng **đúng một A**) · C = người được hỏi ý kiến trước · I = người được báo sau.
Soi 4 lỗi hay gặp:
- Dòng không có A, hoặc có hai A.
- Một người vừa R vừa A ở việc liên quan **tiền hoặc kho** (tự làm, tự duyệt).
- Người làm thật (R) chưa từng được hỏi (không phải C ở bước thiết kế).
- Quá nhiều C khiến việc chậm.

### 5. Quản trị quyết định
Chốt và ghi rõ: **ai chốt phạm vi**, **ai duyệt thay đổi** sau khi đã chốt, **cách ghi quyết định** (nhật ký dự án, ADR), **thời gian chờ phản hồi** tối đa, **leo thang cho ai** khi bị tắc.

### 6. Xung đột và thương lượng
Với mỗi xung đột: bên A muốn gì, bên B muốn gì, **điểm chung**, phương án đề xuất, ai quyết nếu không thống nhất. Khi phải **nói "không"** hoặc "chưa": nêu lý do bằng mục tiêu và số liệu, đưa phương án thay thế (làm nhỏ hơn, làm sau, làm cách khác), không nói "không" trống.

### 7. Kế hoạch trao đổi
Bảng: ai nhận · nhận gì (1 trang, bảng số, demo) · khi nào hoặc tần suất · kênh (gặp, Viber, email, Google Docs) · người gửi · cần họ làm gì sau khi nhận. Mặc định cho sếp: **1 trang mỗi thứ Sáu** và trước mỗi cổng quyết định. Nhân sự Philippines: tiếng Anh, câu ngắn, có ví dụ.

## Đầu ra và lưu
- Bốn bảng: danh sách các bên, ma trận quyền lực–quan tâm, RACI, kế hoạch trao đổi; cộng danh sách xung đột và câu hỏi còn mở.
- Lưu vào `Du-an/<dự án>/cac-ben-lien-quan.md` khi người dùng đồng ý. Cập nhật mỗi khi có người mới hoặc thái độ thay đổi.
- Chuyển tiếp: cần hỏi ai, hỏi gì → `khao-sat-as-is`; trình sếp → `business-case-lo-trinh`.

## Nguyên tắc
- **Tài liệu này là riêng tư.** Nhận định về thái độ, quyền lực của từng người chỉ để người dùng làm việc tốt hơn; **không đưa vào báo cáo gửi sếp hay đội**, không gửi ra ngoài. Bản cần chia sẻ chỉ gồm RACI và kế hoạch trao đổi.
- **Không phán xét cá nhân.** Nhận định về thái độ ghi nhãn [Người dùng nói], [Quan sát], [Ý kiến của tôi]; viết theo hành vi ("chưa trả lời 2 lần"), không theo tính cách.
- **Không đoán cơ cấu tổ chức.** Chưa biết ai quyết thì ghi [cần hỏi] và gợi ý người dùng hỏi sếp.
- Không tự liên hệ ai; chỉ soạn nội dung, người dùng quyết định gửi.
