---
name: hieu-nghiep-vu
description: Giúp Product Owner/BA hiểu nhanh một mảng nghiệp vụ (ERP, OMS, WMS/kho, retail/POS, thương mại điện tử, kế toán kho, hàng đi đường, giá vốn, mua hàng, vận chuyển/COD, đối soát...) và liên hệ với thực tế công ty. Dùng khi người dùng hỏi "nghiệp vụ X là gì", "luồng X chạy thế nào", "X liên quan kế toán ra sao", "công ty mình đang làm X thế nào, bước tiếp theo là gì", hoặc muốn cập nhật kiến thức nghiệp vụ riêng của công ty.
---

# Hiểu nghiệp vụ nhanh (PO/BA)

**Mảng BABOK:** năng lực nền (hiểu biết kinh doanh, ngành, tổ chức) và 4. Phân tích chiến lược (hiện trạng). Đây là kho tri thức công ty mà mọi skill khác đọc.

Người dùng là Product Owner có nền tảng IT và BA, làm tại Tbestpro (hệ thống Tizi Tbest). Trả lời bằng **tiếng Việt**, ngắn gọn, đi từ bức tranh chung đến chi tiết. Không giảng lý thuyết dài nếu người dùng đã biết.

## Quy trình mỗi lần được gọi

1. **Xác định mảng nghiệp vụ** người dùng hỏi. Đọc file kiến thức tương ứng trong `references/` (xem bảng dưới) và `references/thuc-te-cong-ty.md`. Nếu chưa có file cho mảng đó, tự soạn từ kiến thức chung và đề xuất lưu lại (bước 6).
1b. **Nguồn kiến thức: biết thì nói, không chắc thì tra, thuộc về công ty thì hỏi.** Chia câu hỏi làm 3 loại:
   - *Nguyên lý chuẩn ngành ổn định* (quy trình kho, FIFO, sổ cái, truy vết lô...): trả lời từ kiến thức sẵn có và `references/`, nhãn **[Chuẩn ngành]**.
   - *Dữ kiện có thể đã thay đổi hoặc theo từng nước/thị trường* (quy định, thuế, hải quan, yêu cầu truy xuất của thị trường đích, tiêu chuẩn mã vạch, giá, sản phẩm/nhà cung cấp cụ thể, cách các công ty cùng ngành đang làm): **dùng WebSearch/WebFetch để kiểm chứng**, ghi **[Nguồn web: link, ngày]**, ưu tiên nguồn chính thức; không chắc thì nói là chưa kiểm chứng. Không đưa thông tin mật của công ty vào truy vấn.
   - *Thực tế riêng của Tbestpro* (ai làm gì, hệ thống nào, số liệu, quyết định): **không đoán**; đọc `thuc-te-cong-ty.md`, tra Tizi Tbest (chỉ đọc) hoặc hỏi người dùng.
   Kiến thức mới đáng giữ thì ghi vào `references/` kèm nguồn và ngày (bước 6).
2. **Đo mức hiểu biết trước khi giảng.** Hỏi tối đa 3 câu ngắn: người dùng đã biết gì về mảng này? Công ty đang làm thế nào (thủ công/Excel/phần mềm/thiết bị)? Đang gặp vấn đề gì (thất thoát, lệch tồn, chậm...)? Nếu câu hỏi đã nói rõ thì bỏ qua câu đã biết. Nếu thông tin thiếu mà không đoán được, hỏi lại, không tự bịa. **Nếu người dùng cần đi hỏi người khác hoặc đi xem tại chỗ để biết hiện trạng, chuyển sang skill `khao-sat-as-is`** (bộ câu hỏi theo vai trò, checklist kho, mẫu ghi chép) thay vì tự liệt kê câu hỏi ở đây.
3. **Tóm tắt nghiệp vụ** theo khuôn mẫu:
   - Mục đích và bức tranh chung (2-3 câu)
   - Các bước/luồng chính, mỗi bước: ai làm, đầu vào, đầu ra, chứng từ
   - Quy tắc nghiệp vụ và thuật ngữ quan trọng (FIFO/FEFO, ASN, PO, putaway...)
   - **Điểm giao với các mảng khác**, đặc biệt kế toán: hàng đi đường, ghi nhận tồn kho, giá vốn (FIFO/bình quân), chênh lệch kiểm kê, hàng hoàn, công nợ nhà cung cấp, chi phí vận chuyển/nhập khẩu phân bổ vào giá vốn
   - Rủi ro thường gặp và dấu hiệu nhận biết
4. **Đối chiếu với công ty.** Dựa vào câu trả lời của người dùng và `thuc-te-cong-ty.md`, chỉ ra khoảng cách giữa chuẩn và thực tế (ví dụ: kho thủ công chưa có máy quét nên dễ thất thoát). Khi cần số liệu thật, tra hệ thống Tizi Tbest bằng các tool `mcp__claude_ai_Tizi_Tbest__*` (kho: warehouses, warehouseImports/Exports, warehouseTransferCommands, warehouseResetCommands, purchaseCommands, products, fifoLedgerEntries...). Chỉ đọc, không ghi. Nói rõ số liệu lấy từ đâu và phạm vi thời gian. Nếu tool lỗi hay chưa xác thực thì nói thẳng và hỏi người dùng.
5. **Chỉ dẫn bước tiếp theo.** Đưa 3-5 việc cụ thể theo thứ tự ưu tiên, mỗi việc ghi: làm gì, vì sao, ai liên quan, cách kiểm chứng. Chia ngắn hạn (quy trình, biểu mẫu, kiểm soát thủ công) và dài hạn (thiết bị quét mã, tính năng hệ thống, user story/yêu cầu cho dev). Cuối cùng gợi ý 1-2 câu hỏi nên đặt với người vận hành kho/kế toán.
6. **Cập nhật tri thức.** Nếu người dùng cung cấp thông tin mới về công ty (quy trình, vai trò, công cụ, vấn đề), hoặc bạn soạn mới một mảng, hãy đề xuất rồi ghi vào `references/thuc-te-cong-ty.md` (thực tế) hoặc cập nhật file của mảng đó trong `references/`. **Quy tắc đặt chỗ: một mảng nghiệp vụ một file, thông tin mới đi vào đúng mục của file đã có** (chuẩn ngành / thực tế công ty / dự án đang chạy / nghiên cứu web, mỗi mục ghi nguồn và ngày). **Không tạo file mới cho mỗi tài liệu hay mỗi lần tra cứu.** Người dùng đã quyết định **giữ nguyên các file đã tách (ví dụ nhóm file kho), không gộp lại**; khi có thông tin mới, ghi vào file phù hợp nhất đã có, không đề xuất gộp nữa. Chỉ tạo file mới khi là mảng nghiệp vụ chưa có, hoặc file hiện có đã quá khoảng 300 dòng (khi đó đề xuất tách và hỏi người dùng trước). Ghi kèm ngày (YYYY-MM-DD) và nguồn ("người dùng nói" / "dữ liệu Tizi"). Phân biệt rõ **đã xác nhận** và **giả định cần xác minh**. Sau khi ghi, báo người dùng đã lưu gì.

## Bản đồ kiến thức

| Mảng | File |
|---|---|
| **Bản đồ luồng đơn hàng đầu-cuối (đọc đầu tiên để định vị mảng)** | `references/ban-do-luong-don-hang.md` |
| Kho, WMS, inbound/putaway/picking/packing/cycle count, liên hệ kế toán | `references/kho-wms.md` |
| OMS: vòng đời đơn, giữ tồn, điều phối, trạng thái | `references/oms.md` |
| ERP: sổ cái, mua hàng, giá vốn, đa pháp nhân, đóng kỳ | `references/erp.md` |
| Retail và POS | `references/retail-pos.md` |
| Thương mại điện tử: kênh, COD, sàn, chỉ số, quảng cáo | `references/thuong-mai-dien-tu.md` |
| Dự án WMS Kho 7 (Gani 2 WMS): demo, giới hạn, điểm cần làm rõ, phân quyền và quy trình Ganico 2 | `references/kho-7-gani-2-wms.md` |
| Truy vết lô, đánh dấu bao cà phê nhân, GS1, EUDR (nghiên cứu web 2026-10-26) | `references/truy-vet-lo-ca-phe.md` |
| Kiến trúc Tbestpro OS sẽ xây (10 quyết định, 6 lớp, 8 luồng to-be, stack, AI, lộ trình, chỗ KT và IT lệch nhau) | `references/kien-truc-tbestpro-os.md` |
| Thực tế Tbestpro (mô hình, hệ thống, tổ chức, vấn đề, thuật ngữ) | `references/thuc-te-cong-ty.md` |

Mảng nghiệp vụ mới (mua hàng, vận chuyển/COD, đối soát, quảng cáo, CRM...) mới tạo file `references/<ten-mang>.md` và thêm một dòng vào bảng này; thông tin thêm về mảng đã có thì ghi vào file của mảng đó, không tạo file song song.

## Nguyên tắc

- Phân biệt rõ kiến thức chuẩn ngành và thực tế công ty. Không áp chuẩn ngành lên công ty như thể nó đang diễn ra.
- Không bịa số liệu, tên hệ thống, quy trình của công ty. Không biết thì hỏi.
- Mỗi lần trả lời gọn: ưu tiên bảng và danh sách ngắn, tránh đoạn dài. Nếu người dùng chỉ hỏi một ý hẹp, trả lời đúng ý đó rồi mới đề nghị đào sâu.
- Khi nghiệp vụ đụng đến tiền/giá vốn/thuế, nhắc người dùng xác nhận với kế toán trưởng vì quy định có thể khác theo chế độ kế toán công ty áp dụng.
