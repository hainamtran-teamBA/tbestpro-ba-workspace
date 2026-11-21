// DANH SÁCH FILE DỮ LIỆU – trang web nạp lần lượt từ trên xuống.
// Thêm dự án mới: thêm dòng "data/projects/<id>/project.js", rồi các dòng UC của dự án đó ngay bên dưới.
// Thêm UC mới: thêm dòng "data/projects/<id>/uc/UC-xx.js" (sau project.js của dự án).
// Thứ tự dự án trên trang chủ = thứ tự trong danh sách này. Đường dẫn tính từ index.html.
// Quên khai báo file ở đây thì trang sẽ không thấy file đó.
SITE.load([
  "data/toolbox.js",

  "data/projects/kho-7/project.js",
  "data/projects/kho-7/uc/UC-01.js",
  "data/projects/kho-7/uc/UC-02.js",
  "data/projects/kho-7/uc/UC-03.js",
  "data/projects/kho-7/uc/UC-04.js",
  "data/projects/kho-7/uc/UC-05.js",
  "data/projects/kho-7/uc/UC-06.js",
  "data/projects/kho-7/uc/UC-07.js",
  "data/projects/kho-7/uc/UC-08.js",
  "data/projects/kho-7/uc/UC-09.js",
  "data/projects/kho-7/uc/UC-10.js",

  "data/projects/fb-ads/project.js",
  "data/projects/sms/project.js",
  "data/projects/bao-cao/project.js"
]);
