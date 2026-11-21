/* BỘ CÔNG CỤ – các skill / agent của Claude, xếp theo bước làm việc. Hiện ở trang #/cong-cu.
 *
 * SITE.setToolbox([ { step: "Tên bước", items: [ { name, use, cmd, note } ] }, … ])
 *   step  tên bước làm việc (cột "Bước")
 *   name  tên skill / agent (cột "Skill")
 *   use   dùng khi nào, một câu (cột "Dùng khi")
 *   cmd   lệnh gõ trong Claude Code (cột "Gõ lệnh"); nhiều lệnh thì ghi mảng
 *   note  (không bắt buộc) ghi chú nhỏ dưới lệnh, ví dụ "Chỉ có ở máy nhà"
 * Thứ tự trên trang = thứ tự trong file này.
 */
SITE.setToolbox([
  { step: "Làm rõ ý tưởng", items: [
    { name: "grilling", use: "Ý tưởng còn mơ hồ: Claude hỏi dồn từng nhánh cho tới khi chốt được.", cmd: "/mattpocock-skills:grilling" },
    { name: "grill-with-docs", use: "Như grilling, nhưng ghi luôn thuật ngữ và quyết định vào tài liệu trong repo.", cmd: "/mattpocock-skills:grill-with-docs" },
    { name: "wayfinder", use: "Dự án lớn, kéo dài nhiều phiên: vạch đường đi và điểm dừng cho từng phiên.", cmd: "/mattpocock-skills:wayfinder" }
  ]},
  { step: "Tìm hiểu", items: [
    { name: "research", use: "Tra từ nguồn gốc (tài liệu hãng, văn bản luật), ghi ra file có dẫn nguồn.", cmd: "/mattpocock-skills:research" },
    { name: "deep-research", use: "Nghiên cứu nhiều nguồn, so sánh phương án, ra báo cáo dài.", cmd: "deep-research", note: "Nhắc tên skill trong yêu cầu, Claude tự gọi" },
    { name: "dispatching-parallel-agents", use: "Có nhiều việc độc lập (tra cứu, chạy thử): giao song song cho nhanh.", cmd: "/dispatching-parallel-agents" }
  ]},
  { step: "Hỏi người khác", items: [
    { name: "to-questionnaire", use: "Gom câu hỏi thành bảng hỏi gửi một người hoặc một bên (kế toán, nhà cung cấp…).", cmd: "/mattpocock-skills:to-questionnaire" }
  ]},
  { step: "Thuật ngữ", items: [
    { name: "domain-modeling", use: "Chốt và giữ thống nhất thuật ngữ (GLOSSARY), ghi quyết định (ADR).", cmd: "/mattpocock-skills:domain-modeling" }
  ]},
  { step: "Thiết kế, thử", items: [
    { name: "prototype", use: "Làm nhanh bản thử giao diện hoặc luồng trạng thái để xem có ổn không trước khi viết đặc tả.", cmd: "/mattpocock-skills:prototype" }
  ]},
  { step: "Đặc tả, giao IT", items: [
    { name: "to-spec", use: "Gom thảo luận đã chốt thành bản đặc tả để giao IT.", cmd: "/mattpocock-skills:to-spec" },
    { name: "to-tickets", use: "Chia đặc tả thành các phiếu việc nhỏ cho IT làm.", cmd: "/mattpocock-skills:to-tickets" }
  ]},
  { step: "Trình bày", items: [
    { name: "artifact-design", use: "Làm trang web / trang trình bày đẹp để chia sẻ bằng đường link.", cmd: "artifact-design", note: "Claude tự dùng khi làm trang" },
    { name: "dataviz", use: "Vẽ biểu đồ, bảng số liệu, dashboard.", cmd: "dataviz", note: "Claude tự dùng khi vẽ biểu đồ" },
    { name: "docs", use: "Tài liệu để người khác đọc, bình luận và sửa cùng.", cmd: "docs", note: "Nói: “làm tài liệu …”" },
    { name: "docx · pdf · pptx · xlsx", use: "Cần file Word, PDF, slide hoặc Excel để gửi đi.", cmd: ["docx", "pdf", "pptx", "xlsx"], note: "Nói rõ định dạng file cần" }
  ]},
  { step: "Học", items: [
    { name: "teach", use: "Muốn học một chủ đề mới theo từng bước, có bài kiểm tra nhỏ.", cmd: "/mattpocock-skills:teach" }
  ]},
  { step: "Khi không hiểu", items: [
    { name: "wait-what", use: "Đọc câu trả lời mà không hiểu: bắt Claude giải thích lại ngắn và đủ bối cảnh.", cmd: "/mattpocock-skills:wait-what" }
  ]},
  { step: "Chuyển phiên", items: [
    { name: "handoff", use: "Hết phiên hoặc đổi máy: ghi lại tình trạng để phiên sau làm tiếp.", cmd: "/mattpocock-skills:handoff" }
  ]},
  { step: "Định kỳ", items: [
    { name: "loop", use: "Lặp lại một việc theo chu kỳ trong phiên đang mở (ví dụ 10 phút kiểm tra một lần).", cmd: "/loop" },
    { name: "schedule", use: "Hẹn giờ cho agent chạy định kỳ trên đám mây, kể cả khi tắt máy.", cmd: "/schedule" }
  ]},
  { step: "Viết skill, agent", items: [
    { name: "writing-for-agents", use: "Viết hoặc sửa skill, CLAUDE.md, hướng dẫn cho agent.", cmd: "/mattpocock-skills:writing-for-agents" },
    { name: "skill-creator", use: "Tạo skill mới và đo xem skill có chạy đúng không.", cmd: "skill-creator", note: "Nói: “tạo skill …”" }
  ]},
  { step: "Điều phối dài", items: [
    { name: "chief-of-staff", use: "Việc dài nhiều bước, nhiều đầu mối cần điều phối và theo dõi.", cmd: "/chief-of-staff" }
  ]},
  { step: "Agents", items: [
    { name: "phan-bien", use: "Soi lỗi tài liệu (logic, số liệu, chỗ thiếu) trước khi gửi sếp.", cmd: "phan-bien", note: "Nói: “dùng agent phan-bien soát …” · Chỉ có ở máy nhà" },
    { name: "nghien-cuu", use: "Giao một câu hỏi nghiên cứu để agent tự tra và báo lại.", cmd: "nghien-cuu", note: "Nói: “dùng agent nghien-cuu …” · Chỉ có ở máy nhà" }
  ]}
]);
