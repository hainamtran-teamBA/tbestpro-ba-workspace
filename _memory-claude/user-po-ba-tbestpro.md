---
name: user-po-ba-tbestpro
description: "Người dùng là PO kiêm BA tại Tbestpro, muốn lên vai trò kiến trúc sư giải pháp; làm việc bằng tiếng Việt"
metadata:
  node_type: memory
  type: user
  originSessionId: e731f2bd-7bcc-4456-acec-ae445b3c234e
  modified: 2026-11-04T03:51:32.776Z
---

Trần Hải Nam, Product Owner kiêm Business Analyst (nền tảng IT) tại Tbestpro (hệ thống Tizi/Gani, thị trường chính Philippines). Mong muốn phát triển tư duy hệ thống, khảo sát giải pháp, kiến trúc sư giải pháp, không chỉ viết yêu cầu. Giao tiếp bằng **tiếng Việt**; thích được hỏi lại khi chưa rõ thay vì đoán.

Bộ skill trong workspace `.claude/skills/`: `hieu-nghiep-vu`, `khao-sat-as-is`, `khao-sat-giai-phap`, `thiet-ke-quy-trinh-to-be`, `tu-van-giai-phap`, `quyet-dinh-kien-truc`, `business-case-lo-trinh`, `viet-prd-user-story`, `huan-luyen-kien-truc-su` (9 skill tự làm) cùng vài skill mượn (grilling, teach…). Kiến thức công ty nằm trong `hieu-nghiep-vu/references/` (đặc biệt `thuc-te-cong-ty.md`). **Nguồn sự thật là các file này, không phải trí nhớ hội thoại.** Agent: `nghien-cuu`, `phan-bien`, `kiem-dinh-skill` (`~/.claude/agents/`); sau này có thể thêm agent demo, chưa cần.

**Quyết định 2026-11-04:** đã thử gộp thành 1 skill `enterprise-ba` (6 bước) nhưng người dùng **chọn giữ bộ skill cũ** và **sửa từng skill cho khớp BABOK v3** (6 mảng kiến thức), bổ sung chỗ thiếu; người dùng sẽ gửi link một bộ skill BA để đối chiếu. Bản thử cất ở `.claude/luu-tru-skill/_thu-nghiem-2026-11-04/` (có skill `ask-why-ba` của thầy Phúc NT, dùng lại được). Đừng đề xuất gộp lại thành một skill nữa.

**Đã làm 2026-11-04 (người dùng sẽ dùng thử):** đối chiếu bộ 45ck/business-analysis-skills (53 skill mỏng, thiếu description, không cài). Thêm 2 skill: `cac-ben-lien-quan` (BABOK 1) và `danh-gia-giai-phap` (BABOK 6). Sửa `khao-sat-as-is` (hỏi phễu/kim tự tháp/kim cương, câu đào sâu, tách 3 lớp quy trình), `viet-prd-user-story` (bước 7b truy vết, quản lý thay đổi), `tu-van-giai-phap` (bước 1 dùng Ask Why của thầy, cài ở `references/ask-why-ba/`), mỗi skill BA có dòng "Mảng BABOK". Agent `phan-bien` thêm soi thiên kiến và kết luận vượt bằng chứng.

**Why:** người dùng đã hỏi về việc mất ngữ cảnh khi đổi tài khoản Claude.
**How to apply:** khi có thông tin mới về công ty, ghi vào file tri thức trong workspace (kèm ngày, nguồn, nhãn đã xác nhận/giả định), đừng chỉ nói trong chat.

**Mục tiêu vai trò (2026-10-26):** muốn thành *chuyên gia phân tích nghiệp vụ và đưa giải pháp cho doanh nghiệp AI-native*. Sếp kỳ vọng tư duy hệ thống và dùng AI để học nhanh; Senior BA/PO coi là dễ, hướng Solution Architect. Người dùng dành khoảng 8-10 giờ/ngày; muốn được giao danh sách đầu việc cụ thể.

**Định vị vai trò (2026-11-04):** thầy dạy BA của người dùng nhận xét công việc của họ **không phải BA dự án bình thường**; người dùng gửi đề cương khóa "Advanced Business Analysis: từ Project BA đến Enterprise Strategist" (kiến trúc doanh nghiệp/TOGAF, capability map, value stream, DDD core vs generic để build/buy, ROI/TCO, RFP/RFI, change management ADKAR, AI). Công việc thực tế khớp nhất với vai trò **Enterprise BA / tư vấn nội bộ**. Người dùng thấy có quá nhiều skill, muốn cách làm việc gọn hơn.

**Ưu tiên làm việc:** người dùng **không muốn gộp các file tri thức đã tách** (đã quyết định, đừng đề xuất lại); không thích file mọc thêm tràn lan, muốn thông tin cùng chủ đề cập nhật vào file đã có.

**Cấu trúc workspace (2026-10-27):** file ảnh vào `image/`, PDF vào `pdf/`, docx vào `docx/` (cùng cấp với `Du-an/`). Khi người dùng thêm file mới ở thư mục gốc, nhắc hoặc xếp vào đúng thư mục khi được nhờ. HTML, mp4, md giữ ở gốc. Prototype web báo cáo nội bộ tên "WORKNOTE" (3 ảnh trong `image/`).

**Người trong công ty (2026-11-04):** "anh Tài" = CEO Nguyễn Văn Tài; "anh Đạt"/phó giám đốc = COO Vũ Thành Đạt (tác giả hướng dẫn BA × Trưởng phòng FB); anh An = trưởng IT; anh Tùng = dev Tizi. Chi tiết tổ chức và nguồn PDF: `hieu-nghiep-vu/references/thuc-te-cong-ty.md` mục Tổ chức.
