# Rule: Mermaid Syntax & Design Constraints (`mermaid-constraints`)

> **Quy tắc bất biến**: Nhằm triệt tiêu 100% các lỗi cú pháp Mermaid ("Syntax error in text" / "Icon quả bom"), Agent bắt buộc phải tuân thủ các ràng buộc cú pháp sau đây.

---

## 1. Ràng Buộc Cú Pháp Mũi Tên (Arrow Syntax Constraints)

- ❌ **NGHIÊM CẤM** sử dụng mũi tên ngược: `<-`, `<--`, `<==`, `<..`.
- ✅ **BẮT BUỘC** chỉ sử dụng mũi tên xuôi:
  - `-->` (Liên kết liền nét có mũi tên)
  - `-.->` (Liên kết nét đứt có mũi tên)
  - `==>` (Liên kết nét đậm có mũi tên)
  - `---` (Liên kết không có mũi tên)
- **Kỹ thuật đảo chiều**: Khi muốn thể hiện phản hồi hoặc luồng ngược, hãy đổi vị trí node nguồn và node đích:
  - Thay vì viết: `Gateway <-- Service : Return Data`
  - Hãy viết: `Service --> Gateway : Return Data`

---

## 2. Ràng Buộc Nhãn Node (Node Label Constraints)

- **Quy tắc nháy kép**: Bất kỳ nội dung nhãn nào có chứa ký tự sau đều bắt buộc phải bọc trong cặp dấu nháy kép `["..."]`:
  - Dấu gạch chéo: `/`, `\`
  - Dấu hai chấm: `:`
  - Dấu ngoặc: `()`, `[]`, `{}`, `<>`
  - Dấu gạch ngang hoặc ký tự toán học: `-`, `+`, `*`, `%`
  - Dấu nháy đơn, nháy kép hoặc khoảng trắng phức tạp.
- Ví dụ:
  - ❌ `API[GET /api/v1/users (Public)]` → Gây lỗi parser.
  - ✅ `API["GET /api/v1/users (Public)"]` → Cú pháp chuẩn an toàn.

---

## 3. Định Danh Node (Node ID Rules)

- Node ID chỉ được chứa các ký tự chữ cái (`a-z`, `A-Z`), chữ số (`0-9`) và dấu gạch dưới (`_`).
- Tuyệt đối không chứa dấu cách, dấu gạch ngang hoặc ký tự đặc biệt trong Node ID:
  - ❌ `user-service --> db-main`
  - ✅ `user_service --> db_main` hoặc `UserService --> DBMain`

---

## 4. Định Dạng Khối Sơ Đồ & Khả Năng Tương Thích Kép (GitHub & Docsify)

- **Khuyến nghị chuẩn**: Luôn viết sơ đồ bằng khối mã Markdown tiêu chuẩn:
  ````markdown
  ```mermaid
  flowchart LR
      A["Client"] --> B["API Gateway"]
  ```
  ````
- **Cơ chế tương thích kép**:
  1. **Trên GitHub / Git Portal**: GitHub tự động nhận diện ` ```mermaid ` và vẽ thành sơ đồ SVG trực quan ngay trên giao diện web của repository mà không bị biến thành đoạn code thô.
  2. **Trên Docsify Portal**: Trình biên dịch Markdown trong `index.html` đã được lập trình sẵn để tự động bọc mọi khối `mermaid` vào thẻ `<div class="diagram-wrapper"><pre class="mermaid">`, tự động kích hoạt bộ lọc Auto-Sanitizer, Smart Toolbar (Zoom 1:1, Double-Click) và Fullscreen Modal chuẩn Figma/Miro.
- _Lưu ý_: Tránh tự viết thẻ HTML thuần `<pre class="mermaid">` trực tiếp trong file Markdown vì GitHub sẽ coi đó là văn bản thô (preformatted text) và không thể render được sơ đồ trên web GitHub.
