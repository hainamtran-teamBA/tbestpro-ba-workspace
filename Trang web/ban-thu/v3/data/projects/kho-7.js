/* DỰ ÁN – Bàn dự án tự giữ dữ liệu (không đọc Trang web/data/ của Hồ sơ BA).
 * Mỗi dự án một file, gọi BDA.addProject({...}). Khai báo file trong index.html (khối "Dữ liệu").
 * Lấy một lần ngày 2026-11-17 từ: Trang web/data/projects/kho-7/project.js (Hồ sơ BA, cập nhật 13/11)
 * và reference/kho-7-gani-2-wms.md mục 10-12 (16-17/11).
 *
 * id, code, name, short, status ("Đang làm" | "Đang thử" | "Chờ quyết định" | "Bị chặn" | "Chưa bắt đầu" | "Xong")
 * owner, approver, updated (YYYY-MM-DD), goal, summary (tóm tắt 1 dòng cho thẻ ở Tổng quan, viết ngắn từ goal), scopeIn, scopeOut, roles
 * gates   { now: số cổng đang ở (0 Đề bài … 4 Triển khai) hoặc null,
 *           nowSure: true nếu người dùng đã xác nhận, false nếu chỉ suy từ nhật ký,
 *           items: [{ date: "YYYY-MM-DD" | null, pct: số % | null }] x 5 }
 * due     hạn (YYYY-MM-DD) hoặc null
 * risks   [{ text, src }]   rủi ro lớn nhất để đầu tiên
 * next    [ "việc", … ]
 * waiting [{ text, summary, who, since (YYYY-MM-DD), level }]   chờ quyết định; summary: 1 dòng cho danh sách ở Tổng quan; level: "Đã kiểm" | "Bên khác nói" | "Giả định"
 * decisions [{ date, by, text }] mới nhất trên cùng
 * openQuestions, glossary, groups [{ name, color, ucs }] (màu khung nhóm trên bản đồ nghiệp vụ), useCaseSystem, useCaseLinks
 * docs    [{ group, items: [{ name, url, date, type, note }] }]  type để trống thì tự nhận theo link; url để trống = "Chưa có link"
 * Chỗ chưa có nguồn: để null hoặc [] – trang hiện "Chưa có".
 */
BDA.addProject({
  id: "kho-7",
  code: "KHO7",
  name: "Kho 7: kiểm soát kho cà phê nhân",
  short: "Kho 7",
  status: "Đang làm",
  owner: "Hải Nam",
  approver: "Sếp",
  updated: "2026-11-17",
  goal: "Tồn kho theo kg trên phần mềm khớp thực tế; mỗi bao có thẻ, biết thuộc lô nào, còn bao nhiêu kg.",
  summary: "Tồn kho kg khớp thực tế",
  scopeIn: [
    "Nhập, xuất, xé bao, kiểm kê, hàng hoàn, thẻ RFID",
    "Cân sàn Fuji FI05 nối máy tính",
    "Giai đoạn 1 dùng tạm phần mềm Nextwaves"
  ],
  scopeOut: [
    "Gia công rang, trộn có lô cha (để sau)",
    "Nối Ganico v2 (khi Ganico v2 xong)"
  ],
  roles: ["Mua hàng", "NV kho", "QL kho", "Kế toán", "Admin"],

  // Cổng: chưa có nguồn ghi ngày và % từng cổng. "Giải pháp" là suy từ nhật ký (đã chọn thiết bị 12/11, đang chờ sếp duyệt hướng phần mềm 16/11).
  gates: { now: 2, nowSure: false, items: [
    { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }, { date: null, pct: null }
  ]},
  due: null,

  risks: [
    { text: "Hướng tự dựng phần mềm chưa có người viết và người bảo trì.", src: "Tri thức Kho 7, mục 12 (16/11)" },
    { text: "Chưa có số đo thất thoát hiện tại để so trước và sau.", src: "Hồ sơ dự án 01 (27/10)" }
  ],

  next: [
    "Trình sếp hướng tự dựng phần mềm (mua thiết bị Nextwaves, không trả phí phát triển)",
    "Chốt ai viết và bảo trì phần mềm",
    "Xin Nextwaves báo giá chỉ thiết bị và danh sách máy",
    "Thử đọc chuỗi số từ cân FI05 qua cáp USB–RS232",
    "Chốt 4 câu còn treo: nhập theo đơn mua, quyền sửa thẻ, kiểm lô khi duyệt xuất, cân bao lẻ",
    "Viết đặc tả các use case còn lại, ưu tiên UC-03 Xuất bán"
  ],

  waiting: [
    { text: "Tự dựng phần mềm (chỉ mua thiết bị Nextwaves) hay trả Nextwaves phát triển thêm (báo phí 60 triệu)", summary: "Tự dựng phần mềm hay trả Nextwaves 60 triệu", who: "Sếp", since: "2026-11-16", level: "Bên khác nói", note: "Phí 60 triệu là Nextwaves báo qua tin nhắn; hướng tự dựng chưa trình sếp." }
  ],

  decisions: [
    { date: "2026-11-17", by: "Hải Nam", text: "Dung sai tổng kg khi nhập: hụt tối đa 0,5%, dư tối đa 0,1% (đã chốt). Định mức hao hụt +0,1%/tháng vẫn là đề xuất." },
    { date: "2026-11-16", by: "Hải Nam", text: "Số kg không được sửa tay. Quét QR/RFID để đối soát số bao và loại hàng; cân theo lượt cộng dồn để so tổng kg với kg dự kiến." },
    { date: "2026-11-12", by: "Hải Nam", text: "Mua thiết bị Nextwaves, tự tích hợp vào Ganico v2 qua SDK mã nguồn mở; phần mềm Nextwaves dùng tạm." },
    { date: "2026-11-12", by: "Hải Nam", text: "Sản phẩm không gán sẵn kg; kg từng bao chỉ lấy từ cân." },
    { date: "2026-11-12", by: "Hải Nam", text: "Một container = một lô. Mã lô công ty tạo, nhà cung cấp in." },
    { date: "2026-11-12", by: "Hải Nam", text: "Cân theo lượt, số bao tùy ý; tổng kg chia đều theo từng SKU. Không trừ bì." },
    { date: "2026-11-12", by: "Hải Nam", text: "Chưa lắp ăng-ten cạnh bàn cân; kiểm soát bằng dung sai tổng kg." },
    { date: "2026-11-11", by: "Hải Nam", text: "Không dùng pallet; bỏ cân 150 kg; cân cả khi nhập và khi xuất; FIFO." }
  ],

  openQuestions: [
    "Nhập theo đơn mua (mất kg từng bao trên Nextwaves) hay phiếu thường ghi số đơn mua?",
    "Bỏ quyền sửa thẻ (tag.update) khỏi NV kho, giao cho QL kho?",
    "Kế toán kiểm cột lô khi duyệt xuất vì FIFO không chặn được?",
    "Cân gì cho bao lẻ khi xé bao và kiểm kê bao dở?",
    "Nextwaves báo tối đa 10 bao cùng SKU mỗi lượt cân; quyết định 12/11 ghi số bao tùy ý. Giữ theo bên nào?",
    "Hướng tự dựng lệch với chốt 04/11 (mua trọn gói dùng trước). Sếp có đồng ý đổi không?"
  ],

  glossary: [
    { term: "Lô", def: "Một lần hàng về: một container. Mã lô công ty tạo, nhà cung cấp in lên bao." },
    { term: "Lượt cân", def: "Một lần đặt một nhóm bao (số lượng tùy ý) lên cân sàn và chốt số kg." },
    { term: "Bao dở", def: "Bao đã xé lấy một phần; thẻ vẫn ở trên bao, giữ số kg còn lại." },
    { term: "Dung sai", def: "Mức lệch cho phép giữa tổng kg cân được và tổng kg dự kiến: hụt tối đa 0,5%, dư tối đa 0,1%." }
  ],

  groups: [
    { name: "Thiết lập", color: "#4fb39a", ucs: ["UC-01"] },
    { name: "Nhập", color: "#6f8fe8", ucs: ["UC-02"] },
    { name: "Xuất", color: "#e8925a", ucs: ["UC-03", "UC-04"] },
    { name: "Gia công", color: "#a98be0", ucs: ["UC-05"] },
    { name: "Chuyển kho", color: "#4fb8d0", ucs: ["UC-06"] },
    { name: "Kiểm soát", color: "#e07a86", ucs: ["UC-07", "UC-09"] },
    { name: "Hàng hoàn", color: "#b5bd4f", ucs: ["UC-08"] },
    { name: "Thẻ RFID", color: "#d4a94a", ucs: ["UC-10"] }
  ],

  useCaseSystem: "Phần mềm kho (Nextwaves, giai đoạn 1)",
  useCaseLinks: {
    "Mua hàng": ["Tạo đơn mua"],
    "NV kho": ["Nhận hàng theo đơn mua", "Xuất bán", "Xé bao lấy lẻ", "Chuyển kho", "Quét kiểm kê", "Gỡ, dùng lại thẻ"],
    "QL kho": ["Kiểm hàng nhập", "Chốt kiểm kê"],
    "Kế toán": ["Duyệt phiếu nhập", "Duyệt phiếu xuất", "Duyệt kiểm kê cuối", "Tạo đơn mua"],
    "Admin": ["Thiết lập kho, mã hàng, người dùng"]
  },

  docs: [
    { group: "Hiện trạng và thông tin gửi các bên", items: [
      { name: "Quy trình hiện tại và câu hỏi cho các bên giải pháp", url: "https://docs.google.com/document/d/1Mdb9ZkNYCnsrOvpSBw6_AEPnB1aQBcVJceayNRUJHPQ/edit", note: "Tóm tắt As-Is" },
      { name: "Thông tin gửi bên giải pháp", url: "https://docs.google.com/document/d/1wxE1d_zHSwe4EOrXj9PuygnTEgl2dvCHF0WyL_IhtbI/edit", date: "2026-11-03", note: "Brief gửi các bên" },
      { name: "Phiếu đi demo và chấm điểm", url: "https://docs.google.com/document/d/1rrkpr8prUnIK0DsXelToaaiC6gtrOEsmpikaMTmtgHM/edit", date: "2026-11-04", note: "Nội bộ" }
    ]},
    { group: "Nhà cung cấp", items: [
      { name: "Các bên giải pháp", url: "https://docs.google.com/spreadsheets/d/1sHXQWJ4PS6mvBlD9iLXhW6VHhsxFuvSJWD67wOhmyZs/edit", date: "2026-11-04", note: "Bản dùng chính: danh sách 7 bên, so sánh chi tiết" },
      { name: "Giải pháp RFID Nextwaves: thiết bị, phần mềm và cách áp dụng", url: "https://docs.google.com/document/d/1_Oa_o6lKiyWT1_YsfuKQeTklTQ_9-rqwpgFlsBjcUZU/edit", date: "2026-11-05", note: "Bản dùng chính" },
      { name: "Tóm tắt giải pháp RFID của Nextwaves", url: "https://docs.google.com/document/d/16NKkFxJnO9MCH4G-aJy9EkcDSOBxbsRb_D4KBKcM4n0/edit", date: "2026-11-04" },
      { name: "Tóm tắt giải pháp QR + cân của Delfi Technologies", url: "https://docs.google.com/document/d/1B6VhMn7Md6C7zi0Ux0ctBYacqheTCtZYT6D50sY-bZM/edit", date: "2026-11-04", note: "Chưa báo giá" }
    ]},
    { group: "Đề xuất và báo cáo", items: [
      { name: "Đề xuất thử bộ RFID có sẵn của Nextwaves", url: "https://docs.google.com/document/d/1irN5pZpF5DjtLvPxEF6R1Vh1Fu_yGOIxO_FIaX7MftM/edit", date: "2026-11-05", note: "Gửi BGĐ" },
      { name: "Báo cáo trực quan gửi BGĐ", url: "https://claude.ai/artifact/F6wz1rxqqRtpMwxGAu5mve", date: "2026-11-07", note: "Bản thử" }
    ]},
    { group: "Quy trình, phân quyền và chạy thử", items: [
      { name: "Phân quyền và luồng trên Nextwaves", url: "https://docs.google.com/document/d/1NJ0QqWcWSVrYN6Q_Rxay2Fa9wJhmR_8YFIlqHw8C3Z8/edit", date: "2026-11-06" },
      { name: "Hướng dẫn 5 luồng trên demo Nextwaves", url: "https://claude.ai/artifact/C3yFWucBn7A48tRXLve35W", date: "2026-11-06", note: "Nhập, xuất, xé lẻ, kiểm kê, dùng lại thẻ" },
      { name: "Số hóa kho cà phê: cân, QR và RFID", url: "https://claude.ai/artifact/ECTZw6uTowC7fN3TLCbNJy", date: "2026-11-11", note: "Quyết định cân FI05" },
      { name: "Kết quả chạy thử luồng và phân quyền", url: "https://claude.ai/artifact/UHWKgMUkmknpcXXYAQQt4K", date: "2026-11-12", note: "Bản dở, 6/8 mục" }
    ]}
  ]
});
