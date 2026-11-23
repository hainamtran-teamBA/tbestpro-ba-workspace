# Danh mục ADR của Tbestpro

Mỗi quyết định kiến trúc một file `NNNN-ten-ngan-gon.md` theo mẫu `../references/mau-adr.md`. Trạng thái chỉ chuyển sang "Đã duyệt" khi người có thẩm quyền (Ban Giám đốc, trưởng bộ phận IT) xác nhận. Không sửa lịch sử: đổi hướng thì tạo ADR mới và đánh dấu ADR cũ "Bị thay thế".

| # | Tiêu đề | Trạng thái | Ngày |
|---|---|---|---|
| (chưa có) | | | |

## Gợi ý ADR đầu tiên (rút từ tài liệu workspace)
1. **Modular monolith (blueprint 06/10) hay service tách theo nghiệp vụ (IT v10)** cho Tbestpro OS.
2. **Cô lập dữ liệu: tenant + RLS hay 5 chiều độc lập** (pháp nhân, đơn vị kinh doanh, kênh, tổ chức, kho).
3. **Kho Malabon: dùng chức năng kho của Tizi 2 giai đoạn 3 hay mua WMS** (nối với skill `khao-sat-giai-phap`).
4. **Đơn sàn TMĐT: giữ BigSeller hay nối API trực tiếp.**
5. **Phương pháp giá vốn duy nhất** (đề xuất FIFO): đây là quyết định nghiệp vụ nhưng kéo theo thiết kế sổ lô.
