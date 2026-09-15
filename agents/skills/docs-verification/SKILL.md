---
name: docs-verification
description: Kỹ năng kiểm tra chất lượng, tính toàn vẹn của liên kết, tính hợp lệ của HTML/Markdown và khởi chạy kiểm thử cục bộ cho hệ thống tài liệu Docsify.
---

# Kỹ Năng: Kiểm Thử & Nghiệm Thu Tài Liệu (`docs-verification`)

Kỹ năng này hướng dẫn Agent cách thực hiện quy trình kiểm thử toàn diện (QA) trước khi hoàn tất công việc soạn thảo tài liệu trên hệ thống Spec UI Docsify Portal.

---

## Quy Trình Kiểm Thử Từng Bước

### Bước 1: Rà Soát Liên Kết Nội Bộ (Broken Link Check)

1. Đọc nội dung tệp `_sidebar.md` và `_navbar.md`.
2. Trích xuất tất cả các đường dẫn tương đối (ví dụ `01-design-tokens/colors-and-typography.md`).
3. Kiểm tra xem các tệp đích có tồn tại trên đĩa hay không.
4. Đảm bảo mọi bài viết đều có mặt trong mục lục `_sidebar.md` để người dùng có thể điều hướng.

### Bước 2: Kiểm Tra Tính Hợp Lệ Của Thẻ HTML & Markdown

1. Đảm bảo các thẻ mở đều có thẻ đóng tương ứng:
   - `<div class="diagram-wrapper">` → `</div>`
   - `<div class="callout ...">` → `</div>`
   - `<span class="badge ...">` → `</span>`
2. Đảm bảo có dòng trắng (empty line) giữa thẻ HTML và nội dung Markdown lồng bên trong (nếu có), giúp parser Docsify nhận diện chính xác.
3. Kiểm tra không có thuộc tính `style="..."` tự phát.
4. **Kiểm tra Typography & Icons**: Đảm bảo không có emoji hoạt hình ở tiêu đề H1, H2, H3 hoặc menu điều hướng; chỉ sử dụng Tabler Icons (`<i class="ti ti-..."></i>`) cho mục đích công năng.

### Bước 3: Rà Soát Cú Pháp Mermaid & Code Blocks

1. Kiểm tra tất cả các khối mã `mermaid`:
   - Không chứa mũi tên ngược `<-` hoặc `<--`.
   - Các nhãn chứa ký tự đặc biệt như `/`, `:`, `()` đều đã được bọc trong cặp nháy kép `["..."]`.
   - Có thẻ bọc `<div class="diagram-wrapper">`.
2. Kiểm tra các khối mã Prism: Đảm bảo có chỉ định tên ngôn ngữ hợp lệ (ví dụ ``bash`, ``json`, ````typescript`, ````yaml`).

### Bước 4: Khởi Chạy Local Server & Kiểm Thử Truy Cập (Smoke Test)

1. Chạy cú pháp kiểm tra server:
   ```bash
   node -c serve.cjs
   ```
2. Khởi chạy máy chủ cục bộ bằng Node.js hoặc Bun:
   ```bash
   node serve.cjs
   # hoặc
   bun serve.cjs
   ```
3. Gửi HTTP GET request tới cổng chạy (`http://localhost:3300/`) và kiểm tra phản hồi HTTP 200 OK.

---

## Báo Cáo Nghiệm Thu Mẫu

Khi hoàn thành nghiệm thu, Agent xuất bản bảng báo cáo kiểm thử với các tiêu chí:

| Tiêu chí                     | Trạng thái | Ghi chú kiểm thử                                          |
| :--------------------------- | :--------: | :-------------------------------------------------------- |
| **Cấu trúc thư mục & Files** |  ✅ PASS   | Đầy đủ tệp theo Bounded Contexts                          |
| **Tính toàn vẹn liên kết**   |  ✅ PASS   | 100% link trong `_sidebar.md` hợp lệ                      |
| **Cú pháp Mermaid**          |  ✅ PASS   | Đã khử mũi tên ngược, bọc wrapper chuẩn                   |
| **Giao diện & Spec UI CSS**  |  ✅ PASS   | Không dùng inline styles, hiển thị đủ thẻ Callout/Badge   |
| **Chuẩn mực Typography**     |  ✅ PASS   | Không có emoji ở tiêu đề, Tabler Icons hiển thị chính xác |
| **Local Server**             |  ✅ PASS   | Chạy ổn định trên Node.js/Bun thuần                       |
