/* USE CASE – mỗi UC một file, gọi BDA.addUC("<id dự án>", {...}). Khai báo file trong index.html.
 * Lấy một lần ngày 2026-11-17 từ Trang web/data/projects/kho-7/uc/UC-02.js (Hồ sơ BA, v0.4, 13/11),
 * cập nhật theo reference/kho-7-gani-2-wms.md mục 12: dung sai −0,5%/+0,1% đã chốt (17/11).
 * Trường: xem chú thích đầu file gốc ở Hồ sơ BA (id, name, status, who, version, updated, approver, goal,
 * actors, trigger, pre, success, fail, diagrams, steps, exceptions, rules, stories, data, layers, questions, changelog).
 * Nhãn tag: "chot" Đã chốt · "de-xuat" Đề xuất · "can-chot" Cần chốt · "chua-co" Phần mềm chưa có
 */
BDA.addUC("kho-7", {
  id: "UC-02",
  name: "Nhập theo đơn mua",
  status: "Đang duyệt",
  who: "Làm: NV kho · Kiểm: QL kho · Duyệt: Kế toán",

  version: "0.4",
  updated: "2026-11-13",
  approver: "Kế toán, Sếp",
  goal: "Mọi bao vào kho có thẻ, có lô, có kg cân thật. Mọi chênh lệch với đơn mua được ghi và giải trình.",
  actors: "Mua hàng · NV kho · QL kho · Kế toán · Hệ thống",
  trigger: "Container về kho",
  pre: "Có đơn mua · Mã hàng tính theo kg, bật lô, 3 chữ số lẻ · Có thẻ trắng · Đầu đọc để bàn đã nối · Cân FI05 đã nối máy tính",
  success: "Phiếu Hoàn tất, tồn tăng, kg từng bao = tổng kg SKU chia đều",
  fail: "Tồn không đổi; phiếu Trả lại hoặc Hủy, có lý do",
  diagrams: ["activity", "state"],

  steps: [
    { who: "Mua hàng", act: "Tạo đơn mua: nhà cung cấp, SKU, số bao, kg dự kiến, container", sys: "Đơn \"Chờ nhận\"", tag: "chot" },
    { who: "NV kho", act: "Container về: mở phiếu nhập theo đơn mua", sys: "Phiếu Nháp, điền sẵn SKU, số dự kiến", tag: "chot" },
    { who: "NV kho", act: "Chọn SKU, đưa thẻ qua đầu đọc để bàn", sys: "Ghi nhận N mã thẻ, cột kg để trống", tag: "chot" },
    { who: "NV kho", act: "Treo thẻ lên bao", sys: "", tag: "chot" },
    { who: "NV kho", act: "Đặt bao lên cân theo lượt (số bao tùy ý, cùng SKU)", sys: "Đọc kg từ cân, cộng dồn các lượt", tag: "chot" },
    { who: "Hệ thống", act: "Cân xong SKU: chia đều tổng kg cho các thẻ, kiểm dung sai", sys: "Lệch quá ngưỡng thì báo, chờ giải trình", tag: "chot" },
    { who: "QL kho", act: "Lệch quá ngưỡng: giải trình chênh lệch", sys: "", tag: "de-xuat" },
    { who: "NV kho", act: "Gửi duyệt", sys: "Phiếu \"Đã gửi\"", tag: "chot" },
    { who: "Kế toán", act: "Đối chiếu số bao, lô, kg với chứng từ; duyệt hoặc trả lại", sys: "Hoàn tất: tồn tăng, sổ kho ghi từng bao", tag: "chot" }
  ],

  exceptions: [
    { id: "E1", name: "Chưa có đơn mua", text: "Không nhập. Để khu chờ, báo Mua hàng tạo đơn.", tag: "de-xuat" },
    { id: "E2", name: "Thiếu bao", text: "Nhập đúng số thực nhận; đơn mua giữ phần còn thiếu; lập biên bản.", tag: "chot" },
    { id: "E3", name: "Thừa bao", text: "Không nhập phần thừa; chờ Mua hàng sửa đơn hoặc trả nhà cung cấp.", tag: "de-xuat" },
    { id: "E4", name: "Bao rách, ướt, mốc", text: "Cân thành lượt riêng, chụp ảnh, trạng thái chờ xử lý; không xuất bán.", tag: "de-xuat" },
    { id: "E5", name: "Tổng kg lệch quá ngưỡng", text: "Cân lại cả SKU. Vẫn lệch: QL kho giải trình, Kế toán quyết.", tag: "can-chot" },
    { id: "E6", name: "Thẻ hỏng, không đọc được", text: "Thay thẻ khác, ghi lại thẻ hỏng.", tag: "de-xuat" },
    { id: "E7", name: "Sót bao hoặc cân trùng", text: "Dung sai bắt được khi SKU ít bao; SKU trên khoảng 200 bao thì QL kho kiểm ngẫu nhiên.", tag: "chot" },
    { id: "E8", name: "Cân mất kết nối", text: "Cho nhập tạm tổng kg kèm ảnh màn hình cân, bắt buộc có người duyệt.", tag: "can-chot" },
    { id: "E9", name: "Container nhiều lô", text: "Làm từng lô riêng, không trộn lô trên một lượt cân.", tag: "chot" },
    { id: "E10", name: "Kế toán trả lại", text: "Phiếu về NV kho kèm lý do, sửa rồi gửi lại.", tag: "de-xuat" }
  ],

  rules: [
    { id: "BR-K01", text: "Mỗi bao một thẻ; một thẻ chỉ gắn một bao đang trong kho", tag: "chot" },
    { id: "BR-K02", text: "Bắt buộc số lô; một container = một lô", tag: "chot" },
    { id: "BR-K03", text: "Kg từng bao chỉ lấy từ cân, không gõ tay, không có số mặc định", tag: "chot" },
    { id: "BR-K04", text: "Kg bao = tổng kg các lượt của SKU ÷ số thẻ của SKU (3 chữ số lẻ)", tag: "chot" },
    { id: "BR-K05", text: "Tồn tính kg cả bì, không trừ bì", tag: "chot" },
    { id: "BR-K06", text: "Một lượt cân chỉ chứa một SKU và một lô", tag: "chot" },
    { id: "BR-K07", text: "Lệch tổng kg ngoài khoảng −0,5% … +0,1% thì chờ giải trình và duyệt", tag: "chot" },
    { id: "BR-K08", text: "Tồn chỉ tăng khi Kế toán Hoàn tất; người lập không tự duyệt", tag: "chot" },
    { id: "BR-K09", text: "Phiếu Hoàn tất không sửa số lượng; sai thì Kế toán đảo phiếu, bắt buộc lý do", tag: "de-xuat" }
  ],

  stories: [
    { id: "US-02.1", who: "NV kho", want: "Đưa thẻ qua đầu đọc để phiếu hiện đủ số bao", why: "để không gõ mã thẻ",
      ok: ["Quét N thẻ thì phiếu có N dòng bao, kg trống"], no: ["Thẻ đang gắn bao khác thì báo thẻ lạ, không thêm"] },
    { id: "US-02.2", who: "NV kho", want: "Cân theo lượt, số bao tùy ý, số kg tự lấy từ cân", why: "để không gõ tay kg",
      ok: ["Chỉ nhận số khi cân ổn định", "Mỗi lượt lưu giờ, người cân, số kg"], no: ["Không có ô gõ tay kg"] },
    { id: "US-02.3", who: "Hệ thống", want: "Chia đều tổng kg cho các thẻ của SKU khi chốt", why: "để tồn có kg từng bao",
      ok: ["Tổng kg các bao = tổng kg các lượt"], no: ["Lệch ngoài dung sai thì không cho gửi khi chưa giải trình"] },
    { id: "US-02.4", who: "Kế toán", want: "Duyệt phiếu trước khi tồn tăng", why: "để tồn khớp chứng từ",
      ok: ["Hoàn tất thì tồn tăng, sổ kho ghi từng bao"], no: ["Người lập phiếu không thấy nút Duyệt"] }
  ],

  data: [
    { obj: "Phiếu nhập", fields: "Số phiếu · Đơn mua · Container · Lô · Người lập, người giải trình, người duyệt · Lý do trả lại" },
    { obj: "Dòng SKU", fields: "SKU · Số bao dự kiến, thực nhận · Kg dự kiến · Tổng kg cân · % lệch" },
    { obj: "Lượt cân", fields: "Số thứ tự · Số kg · Giờ · Người cân · Dòng SKU" },
    { obj: "Bao", fields: "Mã thẻ (EPC) · Lô · Kg (= chia đều) · Tình trạng · Ảnh nếu lỗi" }
  ],

  layers: [
    { item: "Đơn mua tự sinh phiếu nhập", biz: "Phiếu nhập gắn đơn mua", nw: "Nhận theo đơn mua không có kg từng bao → tạm dùng phiếu thường ghi số đơn mua", g2: "Nhận theo đơn mua có danh sách bao", tag: "can-chot" },
    { item: "Kg từ cân", biz: "Không gõ tay kg", nw: "Chưa có, đang đề nghị Nextwaves làm", g2: "Đọc FI05 qua RS232, cộng dồn lượt, chia đều", tag: "chua-co" },
    { item: "Duyệt trước khi tồn tăng", biz: "Kế toán duyệt", nw: "Có: bật bắt buộc duyệt, đã chạy thử đạt", g2: "Như Nextwaves", tag: "chot" },
    { item: "Dung sai", biz: "−0,5% … +0,1%", nw: "Chưa có, kế toán soát tay", g2: "Tự tính, chặn khi vượt", tag: "chua-co" }
  ],

  questions: [
    "Cân mất kết nối: ai được nhập tạm tổng kg, ai duyệt?",
    "QL kho kiểm mọi phiếu hay chỉ phiếu lệch?"
  ],

  changelog: [
    { v: "0.4", date: "2026-11-17", text: "Ghi chú trên Bàn dự án: dung sai −0,5% / +0,1% đã chốt (BR-K07 chuyển sang Đã chốt, bỏ câu hỏi dung sai)." },
    { v: "0.4", date: "2026-11-13", text: "Cập nhật theo quyết định 11–12/11: bỏ pallet, bỏ trừ bì, cân theo lượt chia đều theo SKU, một container một lô, tách 3 lớp." },
    { v: "0.3", date: "2026-11-10", text: "Bản mẫu đầu tiên." }
  ]
});
