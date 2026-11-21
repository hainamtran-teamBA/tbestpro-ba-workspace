---
de-xuat: Tách "sửa nhỏ" giao diện cho chat chính tự làm, không giao agent giao-dien
ai: pho-nhom
ngay: 2026-11-16
trang-thai: da-duyet
file: .claude/rules/giao-dien.md, CLAUDE.md
---

## Đề xuất
Chia việc giao diện thành 2 loại.

**1. Thêm vào `.claude/rules/giao-dien.md`** (chép nguyên văn):

```markdown
## Sửa nhỏ hay dựng mới
- **Sửa nhỏ**: trang đã có, sửa tối đa 2 file, không đổi bố cục (đổi chữ, tách hay thêm vai trò, thêm cột, đổi màu một nút). Chat chính tự sửa, không giao agent `giao-dien`: sửa file, chụp 1 ảnh khổ máy tính (thêm khổ điện thoại nếu phần sửa có chữ dài hay bảng) bằng Playwright chạy ngầm, xem ảnh rồi báo người dùng. Không gọt unslop, không chạy máy chấm.
- **Dựng mới hoặc đổi bố cục**: giao agent `giao-dien` theo quy trình đầy đủ.
- Chưa chắc thuộc loại nào thì coi là sửa nhỏ; ảnh chụp thấy vỡ bố cục thì chuyển sang agent.
```

**2. Sửa dòng `giao-dien` trong bảng Đội agent của `CLAUDE.md`**, cột "Giao khi": thêm "(chỉ dựng mới hoặc đổi bố cục; sửa nhỏ chat chính tự làm, xem `rules/giao-dien.md`)".

## Vì sao
Người dùng thấy việc đơn giản như tách phó nhóm và trưởng nhóm trên giao diện có sẵn mà phải chờ lâu. Nguyên nhân: mọi việc giao diện đều giao agent `giao-dien`, agent chạy đủ quy trình (đọc skill, dựng, gọt unslop nhiều lượt, chụp 2 khổ, máy chấm 2 lớp, tối đa 3 vòng) kể cả khi chỉ sửa vài dòng.

Đổi xong: sửa nhỏ còn khoảng 1–2 phút [Giả định, chưa đo]; agent chỉ dùng cho việc lớn. Khớp quy tắc sẵn có trong `CLAUDE.md` (chat chính tự làm khi việc cần tối đa 3 lệnh gọi công cụ và 2 file).

Rủi ro: sửa nhỏ không qua máy chấm, có thể lọt lỗi kỹ thuật nhỏ (tương phản, kích thước nút). Ảnh chụp kiểm tra bắt được lỗi vỡ bố cục, đè chữ.

## Kết quả duyệt
2026-11-16 · Trưởng nhóm · **Đã duyệt** (người dùng duyệt trong chat VS Code). Đã ghi vào `.claude/rules/giao-dien.md` (mục "Sửa nhỏ hay dựng mới") và dòng `giao-dien` trong bảng Đội agent của `CLAUDE.md`.
