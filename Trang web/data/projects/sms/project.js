/* DỰ ÁN – xem giải thích đầy đủ các trường ở data/projects/kho-7/project.js.
 * Dự án mới chỉ cần: id, code, name, status, owner, approver, updated, goal.
 * Khi có bản đồ nghiệp vụ thì thêm groups (và tạo file uc/UC-xx.js), useCaseLinks, decisions, openQuestions, glossary.
 * Tài liệu là file PDF trên Drive thì ghi thêm type: "pdf" để hiện đúng nhãn.
 */
SITE.addProject({
  id: "sms",
  code: "03",
  name: "SMS và agent hậu mãi",
  abbr: "SMS",
  status: "Đang thử",
  owner: "Hải Nam",
  approver: "Sếp, kế toán, pháp lý",
  updated: "2026-11-13",
  goal: "Từ giảm chi phí SMS sang kích thích khách mua lại.",
  decisions: [
    { date: "2026-11-13", text: "Đã thử ở thị trường Philippines bằng SmsMk365 (gói dùng thử) và SIM Philippines: gửi thành công, khách nhận được tin." }
  ],
  next: [
    "Thử chiều ngược lại: khách trả lời về số SIM Philippines, SmsMk365 nhận tin và đẩy qua webhook",
    "Hỏi SmsMk365 tài liệu API và webhook (endpoint, payload tin đến) để nối với Tizi",
    "So sánh chi phí SmsMk365 (gói năm + cước SIM Philippines) với UniSMS hai chiều",
    "Chọn phương án tiếp nhận phản hồi (SIM Gateway hay SMS hai chiều UniSMS)"
  ],
  openQuestions: [
    "SmsMk365 có giới hạn hay điều khoản gì khi dùng SIM nước ngoài (Philippines) không? Điều khoản hiện chỉ nhắc luật Việt Nam.",
    "Webhook tin đến của SmsMk365 gửi những trường nào (số gửi, nội dung, thời gian, SIM nhận)? Có gửi lại khi lỗi không?",
    "Mỗi SIM Philippines gửi được bao nhiêu tin một ngày mà không bị nhà mạng khóa? (Con số 300 tin/ngày của SmsMk365 là cho nhà mạng Việt Nam)",
    "Gói trả phí có bỏ dòng \"Sent by SmsMk365\" ở cuối tin không? (gói dùng thử có chèn quảng cáo)"
  ],
  docs: [
    { group: "Báo cáo phương án", items: [
      { name: "Báo cáo 5 phương án SMS", type: "pdf", date: "2026-10-20", note: "Bản dùng chính", url: "https://drive.google.com/file/d/1bUKvMBRGS2QmkKu8dgBSdTay5Y4xGlx9/view" },
      { name: "Báo cáo 5 phương án SMS (bản Gemini)", type: "pdf", date: "2026-10-20", url: "https://drive.google.com/file/d/1OWFzUfB5l-RnvM2eMTp_BVxA_AOMKRuz/view" },
      { name: "Triển khai SMS SIM Gateway (slide)", type: "pdf", date: "2026-10-20", url: "https://drive.google.com/file/d/1cX8qYKuC-hyzNd7DSbDCKv8c98RElxTP/view" }
    ]},
    { group: "Nhà cung cấp", items: [
      { name: "Báo giá UniSMS: SMS hai chiều", type: "pdf", date: "2026-10-20", note: "Hiệu lực tới 19/11/2026", url: "https://drive.google.com/file/d/1-LuQdAf-xCaJelEDipiwtPxO1SBloCtb/view" }
    ]},
    { group: "Công cụ SmsMk365", items: [
      { name: "Trang giới thiệu và bảng giá SmsMk365", note: "Đại lý Việt Nam (Uy Tín Phát)", url: "https://utp.smsmk365.com/" },
      { name: "Hướng dẫn sử dụng SmsMk365 toàn tập", url: "https://support.smsmk365.com/group/114/huong-dan-su-dung-smsmk365-toan-tap" },
      { name: "API, webhook và hành động tự động", url: "https://support.smsmk365.com/post/130/khoa-api-webhook-va-hanh-dong-flows-voi-smsmk365com" },
      { name: "Tạo và chạy chiến dịch SMS", url: "https://support.smsmk365.com/post/117/tao-chien-dich-sms-marketing-thuc-thi-va-kiem-soat-chien-dich-sms-marketing" },
      { name: "Xử lý khách không muốn nhận tin", url: "https://support.smsmk365.com/post/127/xu-ly-voi-cac-khach-hang-khong-muon-nhan-tin-nhan-sms-marketing" },
      { name: "Câu hỏi thường gặp", url: "https://support.smsmk365.com/post/129/cac-cau-hoi-thuong-gap-khi-su-dung-tool-tu-dong-gui-sms-va-whatsapp-hang-loat" },
      { name: "Quy định sử dụng dịch vụ", url: "https://support.smsmk365.com/post/134/quy-dinh-su-dung-dich-vu" }
    ]},
    { group: "Thư mục gốc", items: [
      { name: "Thư mục Dự Án SMS trên Drive", url: "https://drive.google.com/drive/folders/1K7mDckFqSb9ek3x0O6lACMr0B2XsDtAE" }
    ]}
  ]
});
