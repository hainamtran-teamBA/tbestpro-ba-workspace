/* DỰ ÁN – xem giải thích các trường ở kho-7.js.
 * Lấy một lần ngày 2026-11-17 từ Trang web/data/projects/bao-cao/project.js (Hồ sơ BA)
 * và Dự Án/04 Cổng báo cáo nội bộ/README.md (27/10). Chưa có đặc tả, cổng, hạn, tài liệu.
 */
BDA.addProject({
  id: "bao-cao",
  code: "BC",
  name: "Cổng báo cáo nội bộ",
  short: "Cổng báo cáo",
  status: "Đang làm",
  owner: "Hải Nam",
  approver: "Sếp",
  updated: "2026-10-27",
  goal: "Website nhỏ tự host để báo cáo công việc.",
  summary: "Báo cáo công việc tự host",
  gates: { now: null, nowSure: false, items: [] },
  due: null,
  risks: [
    { text: "Không ai dùng vì vẫn quen gửi báo cáo qua tin nhắn.", src: "Hồ sơ dự án 04 (27/10)" }
  ],
  next: [],
  waiting: [
    { text: "Chỗ chạy thật: máy chủ công ty, VPS hay máy văn phòng", summary: "Chỗ chạy thật: máy chủ, VPS hay máy văn phòng", who: "Anh An (IT), Sếp", since: "2026-10-27", level: "Đã kiểm", note: "Ghi ở hồ sơ dự án 27/10, chưa cập nhật lại." }
  ],
  docs: []
});
