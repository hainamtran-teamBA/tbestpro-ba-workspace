# Kho 7: số cân hiển thị và lưu trên Sense Inventory như thế nào

**Mục đích:** Nextwaves đã báo nối được cân với Sense Inventory. Chúng tôi cần biết số cân sẽ **hiện ở đâu, thao tác ra sao và được đối chiếu thế nào** trên phần mềm, để quyết định có dùng Nextwaves cho phần cân của Kho 7 hay không.

**Từ:** Trần Hải Nam (PO/BA, Tbestpro) · **Gửi:** Đội kỹ thuật Nextwaves · **Câu trả lời dùng để:** thiết kế quy trình nhập/xuất Kho 7 và trình Ban Giám đốc quyết định.

## Bối cảnh

Kho 7 ở Philippines chứa cà phê nhân đóng bao PP khoảng 60 kg, khoảng 3.000 bao/tháng, quản lý theo lô và cần kiểm soát từng bao (không dùng pallet). Mỗi lượt cân **10–12 bao** trên cân sàn 5 tấn, đầu cân **Fuji FI05** (First Philippine Scales). Đầu cân có cổng RS232 DB9 (Comport #2: chân 2 = TXD, 3 = RXD, 5 = GND). Kho cân cả khi **nhập** và khi **xuất**, tồn kho tính bằng **kg cả bì (không trừ bì)**. Mỗi bao sẽ có tem lai QR + RFID. Theo tài liệu công khai, Sense Inventory có "Chế độ đóng gói (số lượng thay đổi)" và hộp "Cân túi" nhưng số cân hiện đang gõ tay. Chúng tôi không hỏi về cách nối dây hay Bluetooth; chỉ hỏi số cân **hiện và được xử lý thế nào trên phần mềm**.

## Cách trả lời

Khoảng 20–30 phút. Ghi thẳng dưới mỗi câu. Chỗ nào chưa làm hoặc chưa chắc, ghi rõ "chưa có" hoặc "cần làm thêm" thay vì bỏ trống; câu trả lời như vậy vẫn rất hữu ích. Ảnh chụp màn hình hoặc video demo được hoan nghênh hơn mô tả bằng chữ.

## 1. Màn hình và thao tác cân

### Số cân hiện ở màn hình nào: trên app hay trên web, trong phiếu nào?

>

### Anh/chị gửi giúp ảnh chụp hoặc video màn hình cân (bản đang có hoặc bản thiết kế)?

_Vì sao cần: ảnh giúp chúng tôi hình dung nhanh hơn mọi mô tả và dùng để trình Ban Giám đốc._

>

### Nhân viên thao tác theo thứ tự nào, từ lúc đặt bao lên cân đến lúc lưu xong?

>

### Số cân được điền tự động vào ô nào: thay cho ô gõ tay trong hộp "Cân túi" hay một ô khác?

>

### Nhân viên có sửa tay được số cân không?

_Vì sao cần: số cân không ai sửa được là lý do chính để nối cân; nếu được sửa thì cần biết có ghi nhật ký hoặc phân quyền không._

>

### Phần mềm chỉ nhận số khi cân đã đứng yên (ổn định) hay nhận cả khi số còn nhảy?

>

### Màn hình cân chạy trên thiết bị nào: điện thoại cài app, máy tính bảng hay máy tính mở web?

>

### Số kg có phần lẻ (ví dụ 742,5 kg) có lưu đúng không?

_Vì sao cần: khi chạy thử bản demo, ô số lượng từng báo "phải là số nguyên"._

>

### Có tắt được phần trừ bì để lưu kg cả bì không?

>

## 2. Lượt cân 10–12 bao

### Khi 10–12 bao nằm trên cân cùng lúc, màn hình hiện kg cả lượt hay kg từng bao?

>

### Phần mềm có tự chia kg của cả lượt đều cho từng thẻ trong lượt không?

_Vì sao cần: Sense Inventory lưu kg theo từng bao, còn kho chỉ cân được theo lượt._

>

### Nếu chưa chia tự động được, Nextwaves đề xuất cách nào?

>

### Mỗi lượt cân có được lưu lại riêng không (mã lượt, thời gian, người cân, danh sách thẻ, số kg)?

>

### Làm sao chắc chắn danh sách thẻ trong lượt chỉ gồm các bao đang nằm trên cân, không lẫn bao xung quanh?

_Vì sao cần: đầu đọc RFID có thể đọc cả bao ở gần cân; nếu lẫn thì kg bị chia sai._

>

## 3. Đối chiếu và cảnh báo

### Phiếu nhập hiện tổng kg đã cân so với kg dự kiến (theo phiếu nhà cung cấp) ở đâu?

>

### Có cài được ngưỡng lệch hai chiều không (ví dụ chấp nhận nhẹ hơn đến −0,5%, nặng hơn đến +0,1%)?

>

### Khi vượt ngưỡng, phiếu bị chặn chờ duyệt hay chỉ hiện cảnh báo?

>

### Khi xuất, kg cân lúc xuất có hiện cạnh kg cân lúc nhập của cùng bao không?

>

### Phần hao hụt (kg lúc nhập trừ kg lúc xuất) xem ở báo cáo nào?

>

### Phiếu nhập có cảnh báo khi số bao thực tế khác số bao dự kiến không?

>

## Còn gì khác?

Có điều gì về cách hiển thị và lưu số cân mà chúng tôi chưa hỏi nhưng nên biết không?

>
