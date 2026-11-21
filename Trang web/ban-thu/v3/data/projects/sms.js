/* DỰ ÁN – xem giải thích các trường ở kho-7.js.
 * Lấy một lần ngày 2026-11-17 từ Trang web/data/projects/sms/project.js (Hồ sơ BA, 13/11),
 * Dự Án/03 SMS Agent/README.md và nhat-ky.md (27/10, 13/11).
 */
BDA.addProject({
  id: "sms",
  code: "SMS",
  name: "SMS và agent hậu mãi",
  short: "SMS",
  status: "Đang thử",
  owner: "Hải Nam",
  approver: "Sếp, kế toán, pháp lý",
  updated: "2026-11-13",
  goal: "Từ giảm chi phí SMS sang kích thích khách mua lại.",
  summary: "Kích thích khách mua lại",
  // "Thử nghiệm" suy từ nhật ký 13/11 (đã gửi thử ở Philippines); chưa có ngày, % từng cổng.
  gates: { now: 3, nowSure: false, items: [
    { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }
  ]},
  due: null,
  risks: [
    { text: "Vi phạm quy định tin quảng cáo (cần khách đồng ý trước, có đường từ chối).", src: "Hồ sơ dự án 03 (27/10)" },
    { text: "Chưa có số đo tỷ lệ khách mua lại để so trước và sau.", src: "Hồ sơ dự án 03 (27/10)" }
  ],
  next: [
    "Thử chiều ngược lại: khách trả lời về số SIM Philippines, SmsMk365 nhận tin và đẩy qua webhook",
    "Hỏi SmsMk365 tài liệu API và webhook (endpoint, payload tin đến) để nối với Tizi",
    "So sánh chi phí SmsMk365 (gói năm + cước SIM Philippines) với UniSMS hai chiều",
    "Chọn phương án tiếp nhận phản hồi (SIM Gateway hay SMS hai chiều UniSMS)"
  ],
  waiting: [
    { text: "Chạy thử bằng file Excel xuất từ Tizi, hay làm thẳng vào Tizi", summary: "Thử bằng Excel xuất từ Tizi hay làm vào Tizi", who: "Sếp", since: "2026-11-13", level: "Đã kiểm" },
    { text: "Có gửi tin bán thêm không, cho nhóm khách nào; pháp lý", summary: "Gửi tin bán thêm: nhóm khách nào, pháp lý", who: "Sếp, pháp lý", since: "2026-10-27", level: "Đã kiểm", note: "Ghi ở bảng tổng quan 27/10, chưa cập nhật lại." }
  ],
  decisions: [
    { date: "2026-11-13", by: null, text: "Đã thử ở thị trường Philippines bằng SmsMk365 (gói dùng thử) và SIM Philippines: gửi thành công, khách nhận được tin." }
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
