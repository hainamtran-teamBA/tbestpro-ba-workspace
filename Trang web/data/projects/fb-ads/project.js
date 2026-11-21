/* DỰ ÁN – xem giải thích đầy đủ các trường ở data/projects/kho-7/project.js.
 * Dự án mới chỉ cần: id, code, name, status, owner, approver, updated, goal.
 * Khi có bản đồ nghiệp vụ thì thêm groups (và tạo file uc/UC-xx.js), useCaseLinks, decisions, openQuestions, glossary.
 */
SITE.addProject({
  id: "fb-ads",
  code: "02",
  name: "Facebook Ads: hiệu suất marketing",
  abbr: "FB",
  status: "Đang thử",
  owner: "Hải Nam",
  approver: "Sếp, TP Marketing",
  updated: "2026-10-27",
  goal: "Hệ thống hiệu suất marketing và tài sản nội dung quảng cáo.",
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
