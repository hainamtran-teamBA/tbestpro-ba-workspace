/* DỰ ÁN – mỗi dự án một file project.js, gọi SITE.addProject({...}). Khai báo file trong data/manifest.js.
 *
 * id            mã dùng trên địa chỉ trang (#/kho-7) và tên thư mục; chữ thường, không dấu, nối bằng "-"
 * code          số thứ tự hiện trên trang chủ ("01", "02"…)
 * name          tên dự án; phần trước dấu ":" là tên ngắn (hiện giữa bản đồ và trên đường dẫn)
 * status        "Đang làm" | "Đang thử" | "Chưa bắt đầu" | "Tạm dừng" | "Xong"
 * owner, approver, updated (YYYY-MM-DD), goal
 * scopeIn, scopeOut   danh sách việc trong / ngoài phạm vi
 * roles         các vai trò tham gia (thứ tự này quyết định màu của vai trò)
 * groups        bản đồ nghiệp vụ: nhóm luồng { name, color, ucs: [mã UC] }. Tên, trạng thái UC nằm trong file uc/UC-xx.js
 * useCaseSystem tên khung hệ thống trong sơ đồ "Ai dùng chức năng nào"
 * useCaseLinks  { "Vai trò": ["Chức năng", …] } – một chức năng ghi ở nhiều vai trò = dùng chung
 * decisions     [{ date, by, text }] – mới nhất để trên cùng
 * openQuestions [ "câu hỏi", … ]
 * glossary      [{ term, def }]
 * docs          tài liệu liên quan (link ngoài): [{ group, items: [{ name, url, date, note }] }]
 *               loại tự nhận theo link: Google Docs, Google Sheets, trang Claude, Notion
 * Mục nào không có dữ liệu thì bỏ trống / bỏ hẳn, trang tự ẩn mục đó.
 */
SITE.addProject({
  id: "kho-7",
  code: "01",
  name: "Kho 7: kiểm soát kho cà phê nhân",
  status: "Đang làm",
  owner: "Hải Nam",
  approver: "Sếp",
  updated: "2026-11-13",
  goal: "Tồn kho theo kg trên phần mềm khớp thực tế; mỗi bao có thẻ, biết thuộc lô nào, còn bao nhiêu kg.",
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
  // việc tiếp theo (hiện ở màn tổng quan dự án)
  next: [
    "Chốt 5 câu hỏi còn treo (dung sai, nhập theo đơn mua, quyền sửa thẻ, kiểm lô khi duyệt xuất, cân bao lẻ)",
    "Cập nhật UC-02 Nhập kho theo các quyết định 11–13/11",
    "Chờ Nextwaves trả lời về cách xử lý kg khi nối cân",
    "Viết đặc tả các UC còn lại, ưu tiên UC-03 Xuất bán"
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

  decisions: [
    { date: "2026-11-12", by: "Hải Nam", text: "Mua thiết bị Nextwaves, tự tích hợp vào Ganico v2 qua SDK mã nguồn mở; phần mềm Nextwaves dùng tạm." },
    { date: "2026-11-12", by: "Hải Nam", text: "Sản phẩm không gán sẵn kg; kg từng bao chỉ lấy từ cân." },
    { date: "2026-11-12", by: "Hải Nam", text: "Một container = một lô. Mã lô công ty tạo, nhà cung cấp in." },
    { date: "2026-11-12", by: "Hải Nam", text: "Cân theo lượt, số bao tùy ý; tổng kg chia đều theo từng SKU. Không trừ bì." },
    { date: "2026-11-12", by: "Hải Nam", text: "Chưa lắp ăng-ten cạnh bàn cân; kiểm soát bằng dung sai tổng kg." },
    { date: "2026-11-11", by: "Hải Nam", text: "Không dùng pallet; bỏ cân 150 kg; cân cả khi nhập và khi xuất; FIFO." }
  ],

  openQuestions: [
    "Mức dung sai cuối cùng (đang bàn: hụt tối đa 0,5%, dư tối đa 0,1%).",
    "Nhập theo đơn mua (mất kg từng bao trên Nextwaves) hay phiếu thường ghi số đơn mua?",
    "Bỏ quyền sửa thẻ (tag.update) khỏi NV kho, giao cho QL kho?",
    "Kế toán kiểm cột lô khi duyệt xuất vì FIFO không chặn được?",
    "Cân gì cho bao lẻ khi xé bao và kiểm kê bao dở?"
  ],

  glossary: [
    { term: "Lô", def: "Một lần hàng về: một container. Mã lô công ty tạo, nhà cung cấp in lên bao." },
    { term: "Lượt cân", def: "Một lần đặt một nhóm bao (số lượng tùy ý) lên cân sàn và chốt số kg." },
    { term: "Bao dở", def: "Bao đã xé lấy một phần; thẻ vẫn ở trên bao, giữ số kg còn lại." },
    { term: "Dung sai", def: "Mức lệch cho phép giữa tổng kg cân được và tổng kg dự kiến." }
  ],

  docs: [
    { group: "Hiện trạng và thông tin gửi các bên", items: [
      { name: "Kho 7 - Quy trình hiện tại và câu hỏi cho các bên giải pháp", url: "https://docs.google.com/document/d/1Mdb9ZkNYCnsrOvpSBw6_AEPnB1aQBcVJceayNRUJHPQ/edit", note: "Tóm tắt As-Is" },
      { name: "Kho 7 - Thông tin gửi bên giải pháp", url: "https://docs.google.com/document/d/1wxE1d_zHSwe4EOrXj9PuygnTEgl2dvCHF0WyL_IhtbI/edit", date: "2026-11-03", note: "Brief gửi các bên" },
      { name: "Kho 7 - Phiếu đi demo và chấm điểm", url: "https://docs.google.com/document/d/1rrkpr8prUnIK0DsXelToaaiC6gtrOEsmpikaMTmtgHM/edit", date: "2026-11-04", note: "Nội bộ" }
    ]},
    { group: "Nhà cung cấp", items: [
      { name: "Kho 7 - Các bên giải pháp", url: "https://docs.google.com/spreadsheets/d/1sHXQWJ4PS6mvBlD9iLXhW6VHhsxFuvSJWD67wOhmyZs/edit", date: "2026-11-04", note: "Bản dùng chính: danh sách 7 bên, so sánh chi tiết" },
      { name: "Kho 7 - Giải pháp RFID Nextwaves: thiết bị, phần mềm và cách áp dụng", url: "https://docs.google.com/document/d/1_Oa_o6lKiyWT1_YsfuKQeTklTQ_9-rqwpgFlsBjcUZU/edit", date: "2026-11-05", note: "Bản dùng chính" },
      { name: "Kho 7 - Tóm tắt giải pháp RFID của Nextwaves", url: "https://docs.google.com/document/d/16NKkFxJnO9MCH4G-aJy9EkcDSOBxbsRb_D4KBKcM4n0/edit", date: "2026-11-04" },
      { name: "Kho 7 - Tóm tắt giải pháp QR + cân của Delfi Technologies", url: "https://docs.google.com/document/d/1B6VhMn7Md6C7zi0Ux0ctBYacqheTCtZYT6D50sY-bZM/edit", date: "2026-11-04", note: "Chưa báo giá" }
    ]},
    { group: "Đề xuất và báo cáo", items: [
      { name: "Kho 7 - Đề xuất thử bộ RFID có sẵn của Nextwaves", url: "https://docs.google.com/document/d/1irN5pZpF5DjtLvPxEF6R1Vh1Fu_yGOIxO_FIaX7MftM/edit", date: "2026-11-05", note: "Gửi BGĐ" },
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
