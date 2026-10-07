# Kế hoạch website “Tập Tành Tách Rác”

**Phạm vi:** Website frontend dùng React. Không xây dựng backend, cơ sở dữ liệu, đăng nhập hay trang admin. Nội dung tra cứu được lưu cùng mã nguồn dưới dạng dữ liệu tĩnh.

**Trạng thái chung:** Frontend phiên bản đầu hiển thị các section trên cùng một trang; code được chia thành file riêng. Nội dung và kiểm tra phát hành còn tiếp tục.

## Hướng thiết kế và tài liệu tham khảo

- **Design read:** Website giáo dục môi trường cho người trẻ ở Đà Nẵng, mang cảm giác vui tươi và gần gũi nhờ bộ minh họa/mascot sẵn có, nhưng trình bày nội dung theo cấu trúc biên tập rõ ràng để người dùng tra cứu nhanh.
- **Màu sắc và phân khu:** dùng màu tươi lấy cảm hứng từ cover: `#F4FBEF`, `#E5F4DC`, `#BFE5A9`, `#53C52B`, `#32A844`, `#176B35`, `#174A2A`, vàng `#FFD52A`, xanh trời `#69C9F2`. Nền lớn luân phiên cố định giữa xanh nhạt và trắng; xanh đậm dùng cho chữ/nút, vàng chỉ làm viền nhấn nhỏ, xanh trời chỉ làm nền biểu tượng kiến thức.
- **Chữ:** dùng stack font hệ thống có hỗ trợ tiếng Việt, hạn chế tracking âm quá chặt ở tiêu đề để dấu không bị dính/cắt.
- **Tiêu đề trang chủ:** câu “Đừng tiện tay.” và “Phân loại ngay.” nằm thành đúng hai hàng; không để mỗi câu tự xuống thành nhiều dòng ở desktop/mobile.
- **Điều hướng:** chữ navigation lớn hơn, có gạch nhấn xanh khi rê chuột hoặc bàn phím focus; giữ kiểu liên kết để phù hợp thao tác cuộn giữa các section.
- **Logo và điều hướng:** dùng `logo_2.png` với tỉ lệ ảnh tự nhiên, không cắt vào khung vuông; thanh điều hướng chỉ chứa liên kết cuộn đến section, không có nút tra cứu.
- **Cấu trúc giao diện:** website là một trang đơn (single-page); navigation cuộn đến các section. Code từng section và các thành phần dùng lại vẫn được chia thành file riêng dưới `frontend/src/sections/` và `frontend/src/components/` để dễ bảo trì.
- **Bố cục:** ưu tiên khoảng thở và phân cấp tiêu đề rõ; dùng minh họa cover/mascot như điểm nhìn chính, không lặp lại phần chữ đã được nhúng trong ảnh. Khu vực tra cứu cần nổi bật và dễ dùng trên điện thoại.
- **Chuyển động và mật độ:** chuyển động nhẹ, chủ yếu phản hồi thao tác; giữ mật độ nội dung vừa phải để bài hướng dẫn dài dễ đọc. Mục tiêu dự kiến: `DESIGN_VARIANCE 5`, `MOTION_INTENSITY 2`, `VISUAL_DENSITY 4`.
- Trang [Recycle Now – Recycling symbols](https://www.recyclenow.com/how-to-recycle/recycling-symbols) là tham khảo cấu trúc giải thích ký hiệu: tên ký hiệu, ý nghĩa và hướng dẫn thực tế. Không sao chép nguyên văn, hình ảnh hoặc áp dụng kết luận thu gom theo quy định tại Vương quốc Anh cho Đà Nẵng.
- Brief cũng dựa một phần trên hướng dẫn phân loại của Kuki, Saitama, Nhật Bản. Phân loại địa phương Nhật Bản không được trình bày như quy định của Đà Nẵng nếu chưa được đối chiếu/xác minh.

## Quyết định chức năng

- Người dùng nhập tên/chất liệu rác rồi bấm **Kiểm tra**; không tự tìm khi đang gõ.
- Theo brief, sau khi bấm **Kiểm tra**, cuộn đến khu vực **Hướng dẫn** trên cùng trang và hiển thị kết quả tra cứu tại đó.
- Tra cứu theo chất liệu và các nhóm/ví dụ trong danh mục hướng dẫn của dự án.
- Có kết quả phù hợp thì hiển thị nhóm rác và hướng dẫn tương ứng.
- Với rác tái chế, hiển thị cách chuẩn bị. Nếu món đó thuộc nhóm Green Da Nang tiếp nhận, hiển thị thêm tên tổ chức và địa chỉ điểm tiếp nhận.
- Không khớp mục nào thì hiển thị **“Không có kết quả”**. Nếu từ khóa gần giống tên/chất liệu trong danh mục thì có thể hiển thị gợi ý để người dùng chọn.
- Nội dung tra cứu được biên tập trong file dữ liệu frontend; muốn cập nhật sẽ sửa dữ liệu và triển khai lại website.
- Nếu ô tìm kiếm để trống, cần yêu cầu nhập từ khóa thay vì báo “Không có kết quả”. Từ khóa gần giống chỉ gợi ý mục thực sự có trong danh mục; không tự suy đoán cách xử lý.
- Một chất liệu rộng có thể khớp nhiều loại đồ với cách xử lý khác nhau. Thiết kế dữ liệu/giao diện để phân biệt từng mục cụ thể và không kết luận chỉ dựa vào tên vật liệu.

## Các task

### 1. Chuẩn bị môi trường và dự án

- [x] Cài Node.js và npm (đã dùng được trong môi trường hiện tại).
- [x] Cài trình soạn thảo mã nguồn Visual Studio Code (đã mở dự án trong IDE).
- [x] Khởi tạo dự án React bằng Vite trong thư mục `frontend/`.
- [x] Khởi tạo cấu trúc trang, dữ liệu tĩnh và tài nguyên trong `frontend/src/`.
- [ ] Chạy thử trực tiếp trên trình duyệt ở kích thước điện thoại và máy tính.

### 2. Chốt và chuẩn hóa nội dung

- [ ] Rà soát danh sách loại rác và sửa các mục chưa rõ/chưa thống nhất.
- [ ] Xác minh hướng dẫn áp dụng cho Đà Nẵng và danh sách Green Da Nang tiếp nhận.
- [ ] Tách riêng “vật liệu có khả năng tái chế”, “được thu gom tại địa phương” và “Green Da Nang tiếp nhận”; không hiển thị chúng như một kết luận duy nhất.
- [ ] Ghi nguồn và thời điểm xác minh cho hướng dẫn phân loại/điểm tiếp nhận.
- [ ] Chuẩn hóa mỗi mục dữ liệu: tên cụ thể, chất liệu, từ khóa/tên tương đương, nhóm rác, khả năng tái chế, cách chuẩn bị, có được Green Da Nang tiếp nhận không, lưu ý theo địa phương và nguồn/ngày xác minh.
- [ ] Chuẩn hóa tên tổ chức, địa chỉ và thông tin liên hệ Green Da Nang trước khi công khai.
- [ ] Hoàn thiện bài ký hiệu tái chế: tên/hình ký hiệu, ý nghĩa, hướng dẫn đọc và lưu ý về giới hạn của từng ký hiệu.
- [ ] Lập danh sách ký hiệu sẽ đưa vào phiên bản đầu: nhãn trên bao bì (rửa sạch, không tái chế, tách bộ phận), mã nhựa 1–7, Mobius loop và các ký hiệu khác thực sự phù hợp với nội dung dự án; mỗi mục cần có tên, hình minh họa được phép dùng, ý nghĩa, hành động gợi ý, phạm vi áp dụng và nguồn.
- [ ] Bổ sung các mã nhựa 1–7 còn thiếu trong brief sau khi kiểm chứng; sửa mô tả độc hại/không thể tái chế nếu chưa có nguồn phù hợp.
- [ ] Giải thích rõ Mobius loop chỉ biểu thị khả năng tái chế của vật liệu, không bảo đảm mọi nơi đều tiếp nhận; phân biệt với các dấu hiệu khác (ví dụ Green Dot không phải cam kết món đồ được tái chế).
- [ ] Ghi rõ khi thông tin ký hiệu/tái chế đến từ hệ thống Anh hoặc Nhật Bản và chỉ dùng làm kiến thức chung nếu được xác minh; không suy rộng quy định thu gom tại Đà Nẵng.

### 3. Xây dựng trải nghiệm tra cứu

- [x] Làm bố cục trang chủ và thanh điều hướng theo brief.
- [x] Làm ô nhập từ khóa và nút **Kiểm tra**.
- [x] Chỉ thực hiện tra cứu sau khi bấm nút; hỗ trợ phím Enter.
- [x] Tìm theo chất liệu/tên mục; chuẩn hóa chữ hoa, chữ thường, dấu tiếng Việt và khoảng trắng.
- [x] Gợi ý từ khóa gần giống từ danh mục tĩnh, không tự suy luận cách xử lý.
- [x] Sau khi tra cứu, cuộn đến khu vực **Hướng dẫn** trên cùng trang.
- [x] Xử lý từ khóa rỗng bằng thông báo yêu cầu nhập nội dung.
- [x] Hiển thị kết quả và trạng thái **“Không có kết quả”**.
- [x] Với loại tái chế, hiển thị cách chuẩn bị.
- [x] Với loại có cờ tiếp nhận, hiển thị Green Da Nang và địa chỉ theo brief.
- [x] Nêu rõ khi điểm tiếp nhận chưa được xác nhận trong danh mục dự án.

### 4. Hoàn thiện các trang nội dung

- [x] Làm phần giới thiệu dự án, lĩnh vực hoạt động và thành viên/cố vấn theo brief.
- [x] Dựng khu vực tra cứu và các nhóm hướng dẫn.
- [x] Dựng khu vực kiến thức ban đầu về nhận biết rác, ký hiệu Mobius và hạn chế nhiễm bẩn.
- [ ] Hoàn thiện bài ký hiệu và bổ sung các liên kết video khi có nội dung/link được duyệt.
- [x] Làm phần thông tin điểm tiếp nhận Green Da Nang.
- [x] Tách các trang và thành phần giao diện thành các file riêng để dễ bảo trì.
- [x] Giữ toàn bộ section trên cùng một trang; navigation cuộn đến section thay vì chuyển trang.
- [x] Thêm ô tìm kiếm vào trang Hướng dẫn.
- [x] Dùng logo `logo_2.png` đầy đủ, không giới hạn/cắt theo hình vuông; bỏ nút tra cứu khỏi navigation.
- [x] Dùng cover, logo dự án và logo Green Da Nang có sẵn trong `frontend/src/assets/images`.
- [ ] Xác nhận quyền sử dụng hình ảnh và xác minh địa chỉ/nhóm tiếp nhận trước khi public.

### 5. Hoàn thiện giao diện và phát hành

- [x] Tạo bố cục responsive cho điện thoại, máy tính bảng và máy tính; cần kiểm tra trực tiếp trên trình duyệt.
- [ ] Kiểm tra khả năng đọc, tương phản, nhãn cho ô nhập và điều hướng bàn phím.
- [x] Dùng nền trắng cố định và xanh lá làm màu chủ đạo, vàng điểm xuyết theo nhận diện.
- [x] Kiểm tra tương phản chính của nút và chữ phụ trong giao diện sáng (đạt tối thiểu 4.5:1 theo phép tính màu).
- [ ] Kiểm tra các luồng tra cứu đại diện và rà soát nội dung hiển thị.
- [x] Tạo bản build frontend để phát hành.
- [ ] Chọn dịch vụ hosting static, cấu hình tên miền (nếu có) và đưa website lên public.
- [ ] Kiểm tra website sau khi phát hành và ghi lại quy trình cập nhật nội dung.

## Tiêu chí hoàn thành phiên bản đầu

- Người dùng có thể tìm một loại rác bằng cách nhập từ khóa và bấm **Kiểm tra**.
- Sau khi bấm, người dùng được chuyển đến khu vực **Hướng dẫn** có kết quả; từ khóa trống có lời nhắc nhập.
- Kết quả thể hiện đúng nhóm, cách chuẩn bị và thông tin điểm tiếp nhận theo dữ liệu đã biên tập.
- Từ khóa không khớp cho ra **“Không có kết quả”**; từ khóa gần giống có gợi ý phù hợp khi có dữ liệu.
- Website sử dụng được trên điện thoại và máy tính.
- Không có backend, đăng nhập hay chức năng admin; cập nhật nội dung bằng cách sửa dữ liệu frontend và phát hành lại.

## Hướng dẫn cài đặt môi trường (Windows)

1. Cài **Node.js LTS** từ [trang tải chính thức](https://nodejs.org/en/download/). Bộ cài Node.js có kèm npm. Vite hiện yêu cầu Node.js `20.19+` hoặc `22.12+`; chọn bản LTS hiện hành để đáp ứng yêu cầu này.
2. Cài [Visual Studio Code](https://code.visualstudio.com/) nếu máy chưa có. Đây là trình soạn thảo, không bắt buộc để chạy React nhưng thuận tiện để làm đồ án.
3. Đóng rồi mở lại PowerShell, kiểm tra cài đặt:

   ```powershell
   node -v
   npm -v
   ```

   Nếu mỗi lệnh trả về số phiên bản thì môi trường đã sẵn sàng.

4. Tại thư mục dự án `D:\Project Code\DoAnKhue`, tạo ứng dụng React + Vite trong thư mục con `frontend`:

   ```powershell
   cd 'D:\Project Code\DoAnKhue'
   npm.cmd create vite@latest frontend -- --template react
   cd frontend
   npm.cmd install
   npm.cmd run dev
   ```

   Dùng `npm.cmd` trong PowerShell nếu máy chặn `npm.ps1` theo Execution Policy.

5. Mở địa chỉ local được Vite in trong PowerShell (thường là `http://localhost:5173`). Giữ cửa sổ này chạy trong lúc phát triển; nhấn `Ctrl+C` để dừng.

Không cần cài React toàn cục. Lệnh tạo dự án sẽ thêm React và các gói cần thiết vào dự án. Tài liệu Vite: [Getting Started](https://vite.dev/guide/).

## Ghi chú phiên bản đầu

- Tra cứu hiện dùng dữ liệu tĩnh mẫu đã rút từ brief; danh mục chưa đầy đủ và các quy tắc lấy từ tài liệu Nhật Bản chưa được xác minh cho Đà Nẵng.
- Chưa có nội dung tài trợ, ảnh nhân sự, series video/link TikTok hoặc danh mục ký hiệu hoàn chỉnh; bổ sung sau khi có nội dung được duyệt.
- Website chưa được triển khai public. Cần kiểm tra giao diện trên trình duyệt, nội dung và quyền sử dụng hình ảnh trước khi phát hành.
