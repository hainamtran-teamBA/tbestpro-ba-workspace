/* DỰ ÁN – xem giải thích các trường ở kho-7.js.
 * Lấy một lần ngày 2026-11-17 từ Trang web/data/projects/fb-ads/project.js (Hồ sơ BA)
 * và Dự Án/00-Tong-quan.md (bảng tổng quan 27/10). Chưa có đặc tả, cổng, hạn.
 */
BDA.addProject({
  id: "fb-ads",
  code: "FB",
  name: "Facebook Ads: hiệu suất marketing",
  short: "Facebook Ads",
  status: "Đang thử",
  owner: "Hải Nam",
  approver: "Sếp, TP Marketing",
  updated: "2026-10-27",
  goal: "Hệ thống hiệu suất marketing và tài sản nội dung quảng cáo.",
  summary: "Hiệu suất và nội dung QC",
  gates: { now: null, nowSure: false, items: [] },
  due: null,
  risks: [
    { text: "Phạm vi phình to: báo cáo, thư viện nội dung, đối soát và AI cùng lúc.", src: "Bảng tổng quan (27/10)" }
  ],
  next: [
    "Chốt một đội và một báo cáo thủ công để làm bản đầu tiên"
  ],
  waiting: [
    { text: "Cách lấy số liệu quảng cáo (n8n/code hay Claude + MCP) và chỗ lưu dữ liệu", summary: "Cách lấy số liệu quảng cáo và chỗ lưu", who: "Anh An (IT), Sếp", since: "2026-10-27", level: "Đã kiểm", note: "Ghi ở bảng tổng quan 27/10, chưa cập nhật lại." },
    { text: "Hạ tầng: Supabase hay PostgreSQL theo chuẩn Tbestpro OS", summary: "Hạ tầng: Supabase hay PostgreSQL", who: "Anh An (IT), Sếp", since: "2026-10-27", level: "Đã kiểm", note: "Ghi ở bảng tổng quan 27/10, chưa cập nhật lại." }
  ],
  docs: [
    { group: "Đề án và đặc tả", items: [
      { name: "Đề án bản cho Ban Giám đốc", url: "https://docs.google.com/document/d/1KbGErUBJYE1Z6uTvRNki5AeY2dqgvChSHEJnBDnBEO8/edit" },
      { name: "Đặc tả cho dev", url: "https://docs.google.com/document/d/1Yuf58cNFqMaW9jPtumNghPiTmsCOBU80ZPlG7GIaqLo/edit" },
      { name: "Kế hoạch thí điểm Agent A và B", url: "https://docs.google.com/document/d/1Wq2-sDnjY0hsq2vkBSOJ50JpNtkJQip-99_J4DGBHQg/edit" },
      { name: "Mẫu dữ liệu 3 tài khoản (T10/2026)", url: "https://docs.google.com/document/d/10DWp3uUWDTpe9y_hohmDOpHWdx7fzpQ1okUo1AlhwGg/edit" }
    ]},
    { group: "Bản mẫu", items: [
      { name: "Demo báo cáo (Post Analytics)", url: "https://claude.ai/artifact/TLrDrMziQbPUW8tWMcHPHj" },
      { name: "Marketing Hub bản mẫu", url: "https://claude.ai/artifact/XQRyzMcabdkm3bDfZMobNk" }
    ]}
  ]
});
