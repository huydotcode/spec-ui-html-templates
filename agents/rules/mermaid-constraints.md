# Rule: Mermaid Syntax & Design Constraints (`mermaid-constraints`)

> **Quy tắc bất biến**: Nhằm triệt tiêu 100% các lỗi cú pháp Mermaid ("Syntax error in text" / "Icon quả bom"), Agent bắt buộc phải tuân thủ các ràng buộc cú pháp sau đây.

---

## 🚫 1. Ràng Buộc Cú Pháp Mũi Tên (Arrow Syntax Constraints)

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

## 🔤 2. Ràng Buộc Nhãn Node (Node Label Constraints)

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

## 📦 3. Định Danh Node (Node ID Rules)

- Node ID chỉ được chứa các ký tự chữ cái (`a-z`, `A-Z`), chữ số (`0-9`) và dấu gạch dưới (`_`).
- Tuyệt đối không chứa dấu cách, dấu gạch ngang hoặc ký tự đặc biệt trong Node ID:
  - ❌ `user-service --> db-main`
  - ✅ `user_service --> db_main` hoặc `UserService --> DBMain`

---

## 🖼️ 4. Thẻ Bọc Khung Bắt Buộc (Wrapper Element)

- Mọi sơ đồ Mermaid đều phải được bọc trong `<div class="diagram-wrapper">`:

  ````html
  <div class="diagram-wrapper">```mermaid flowchart LR A["Client"] --> B["API Gateway"]</div>
  ````

  </div>
  ```

- Thẻ wrapper này đảm bảo:
  1. Tự động tương thích với bộ lọc Auto-Sanitizer (khử xung đột với PrismJS và plugin Copy-Code).
  2. Kích hoạt tính năng thu phóng thông minh (Zoom / Pan / Fit-to-Frame).
  3. Kích hoạt nút phóng to toàn màn hình (Modal Figma/Miro).
