# Changelog

Tất cả các thay đổi đáng chú ý của dự án **Spec UI System** sẽ được ghi chép trong tài liệu này.

Định dạng tài liệu tuân thủ theo tiêu chuẩn [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) và tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.0] - 2026-09-15

### Multi-Theme Engine & Obsidian Dark Mode (Kiến Trúc Đa Giao Diện & Chế Độ Tối)

#### Đã Thêm Mới (Added)

- **Hệ Thống Đa Giao Diện Cắm Rút (Pluggable Multi-Theme Architecture)**:
  - Hỗ trợ 5 bộ Theme Tokens được tinh chỉnh tỉ mỉ theo tiêu chuẩn Tech Portal cao cấp:
    1. `warm-terracotta` (Mặc định sáng): Gam màu Đất nung & Kem ấm (`#faf7f2`, `#fffdf9`, `#9f3f2a`, `#c65a3a`).
    2. `obsidian-terracotta` (Tối cao cấp): Nền than đen ấm đá Obsidian (`#141210`), surface (`#1e1a17`) và điểm nhấn Đất nung rực sáng (`#e2725b`).
    3. `nordic-slate` (Tối Bắc Âu): Nền đá phiến than lạnh (`#0b0f19`), surface (`#111827`) và viền xanh băng (`#38bdf8`).
    4. `forest-sage` (Tối Rừng sâu): Nền ngọc lục bảo thẫm (`#091310`), surface (`#111f1a`) và điểm nhấn ngọc bích (`#34d399`).
    5. `solarized-paper` (Sách cổ Sepia): Gam màu giấy ngả vàng (`#fbf5e6`), surface (`#f5ebd4`) và điểm nhấn hổ phách (`#b58900`).
  - Chế độ **Tự động theo hệ thống (Auto)**: Lắng nghe sự kiện `prefers-color-scheme` của hệ điều hành để tự động chuyển giao diện theo thời gian thực.
- **Bộ Khởi Động Chống Nháy Sáng (Zero-Flash Anti-FOUC Bootloader)**:
  - Script siêu nhẹ đặt ngay đầu thẻ `<head>` đọc `localStorage` và áp dụng thuộc tính `data-theme` trước khi CSS render, loại bỏ hoàn toàn hiện tượng nháy trắng (Flash of White) khi F5 tải lại trang ở chế độ tối.
- **Menu Chuyển Đổi Giao Diện Nổi (Floating Theme Switcher Dropdown)**:
  - Nút bấm nổi góc phải màn hình với icon bảng màu (`palette`).
  - Menu xổ lên với các tùy chọn kèm Swatch màu hai tông (Background / Accent) và icon check đánh dấu theme đang kích hoạt.
  - Đóng mở mượt mà bằng click ngoài hoặc phím `Escape`.
- **Tự Động Đổi Theme Sơ Đồ Mermaid Theo Thời Gian Thực (Live Re-rendering)**:
  - Khi người dùng đổi theme, toàn bộ sơ đồ Mermaid trong trang và Modal được vẽ lại ngay lập tức với theme Mermaid tương ứng (`default` cho theme sáng, `dark` cho theme tối) mà không cần tải lại trang.
  - Bảo tồn toàn vẹn tính năng Interactive Node Focus & Path Highlight sau khi re-render.
  - Bộ xuất ảnh SVG và PNG độ phân giải cao tự động lấy màu nền của theme hiện tại để chèn vào file xuất ra.

---

## [2.3.0] - 2026-09-15

### Mermaid Pro Interactive Suite (Bộ Tương Tác Sơ Đồ Chuyên Sâu)

#### Đã Thêm Mới (Added)

- **Xuất ảnh Sơ đồ Vector & Raster (Export SVG & High-Res PNG 2x)**:
  - Tích hợp nút xuất trực tiếp file vector `.svg` sắc nét và ảnh raster `.png` (độ phân giải cao 2x Retina, tự động lót nền sáng `#fffdf9` chống đen nền khi dán vào slide/tài liệu).
  - Khả dụng trên cả thanh công cụ Smart Toolbar và tiêu đề Fullscreen Modal.
- **Sao chép mã nguồn Mermaid 1-Click (Copy Code)**:
  - Bổ sung nút "Sao chép mã" trên Diagram Toolbar giúp lập trình viên copy tức thì cú pháp Mermaid gốc để paste vào GitHub Issues, Notion hoặc trình soạn thảo khác.
  - Phản hồi trực quan tức thì với hiệu ứng đổi sang icon check và nhãn "Đã sao chép!" trong 2 giây.
- **Interactive Node Focus & Path Highlighting (Tập trung luồng)**:
  - Khi click vào bất kỳ nút nào trong sơ đồ (Flowchart, Sequence, Architecture), hệ thống tự động làm sáng rõ nút đó cùng toàn bộ các luồng (edges) và nút láng giềng kết nối trực tiếp.
  - Tự động làm mờ nhẹ (dimming opacity 0.16) tất cả các thành phần ngoại lai không liên quan, giúp kỹ sư phân tích luồng logic phức tạp mà không bị rối mắt.
  - Click lại vào node hoặc click ra vùng nền trống để hủy chế độ focus.
  - Hoạt động mượt mà trên cả sơ đồ nhúng trong bài viết lẫn sơ đồ trong Fullscreen Modal.
- **Bộ Điều Khiển Phóng To Đa Mức (Multi-Level Zoom Presets)**:
  - Bổ sung thanh chọn tỉ lệ nhanh dạng segmented pill trong Modal: `Fit` (Vừa khung), `50%`, `100%`, `150%`, `200%`.
  - Bổ sung phím tắt bàn phím tiện dụng trong Modal: `1` (100%), `2` (200%), `5` (50%), `0` (Reset vừa khung), `F` (Toàn màn hình).
- **Toàn Màn Hình Trình Duyệt Native (F11 Fullscreen API)**:
  - Bổ sung nút chuyển đổi Native Fullscreen thật sự (F11) ngay trong Modal, mang lại trải nghiệm xem sơ đồ toàn cảnh chuẩn Figma và Miro.

---

## [2.2.0] - 2026-09-15

### Chuẩn Hóa Tabler Icons & Thiết Kế "Non-AI" (Clean Typography)

#### Đã Thêm Mới (Added)

- **Tích hợp Tabler Icons Webfont (CDN)**:
  - Nhúng stylesheet `@tabler/icons-webfont` trực tiếp trong `index.html`.
  - Hỗ trợ cú pháp `<i class="ti ti-[tên-icon]"></i>` trong toàn bộ tài liệu Markdown, Callouts và giao diện điều khiển.
- **Chuẩn hóa Smart Diagram Toolbar & Fullscreen Modal**:
  - Chuyển đổi toàn bộ nút bấm thanh công cụ (Xem kích thước gốc, Thu vừa khung, Toàn màn hình) và bộ điều khiển Modal (Zoom in, Zoom out, Vừa khung, Đóng Esc) sang Tabler Icons vector nét thanh, bo tròn chuẩn 24x24.
  - Loại bỏ hoàn toàn các emoji `🔍`, `📐`, `💡` trong UI điều khiển sơ đồ.
- **Quy tắc "Non-AI" Guardrail trong AI Ruleset**:
  - Bổ sung quy định bắt buộc trong `AGENTS.md`, `CLAUDE.md`, `AI-SPEC-WRITER-GUIDE.md` và `04-ai-ruleset/ruleset-and-prompts.md`: Nghiêm cấm chèn emoji trang trí vào tiêu đề (H1, H2, H3) và thanh điều hướng.
  - Biểu tượng chỉ được phép sử dụng khi có mục đích công năng thực tế (Functional Cues).

#### Đã Thay Đổi (Changed)

- **Thanh lọc toàn diện Emoji ở các tiêu đề**:
  - Loại bỏ toàn bộ emoji trang trí ở tiêu đề H1/H2/H3 trong `README.md`, `_navbar.md`, `01-design-tokens/`, `02-components/`, `03-diagram-templates/`, `04-ai-ruleset/` và các hồ sơ Agent.
  - Trả lại sự trang nhã, nghiêm túc và đẳng cấp cho hệ thống Typography (Lora + Be Vietnam Pro).
- **Nâng cấp Callout Boxes**: Bổ sung icon Tabler tinh tế vào đầu các hộp ghi chú (`info-circle`, `circle-check`, `alert-triangle`, `alert-circle`).

---

## [2.1.0] - 2026-09-15

### Zero-Dependency Live Reload Server

#### Đã Thêm Mới (Added)

- **Tích hợp Live Reload tự động vào `serve.cjs`**:
  - Hỗ trợ cơ chế Server-Sent Events (SSE) qua endpoint `GET /__livereload`.
  - Tự động theo dõi tệp bằng `fs.watch` nguyên bản (hỗ trợ debounce 150ms, theo dõi các tệp `.md`, `.css`, `.html`, `.js`, `.json`, `.svg`, `.png`, `.jpg`).
  - Tự động tiêm script `EventSource` vào `index.html` khi phục vụ cục bộ mà không làm bẩn file tĩnh trên đĩa.
  - Hỗ trợ tắt bằng biến môi trường `LIVE_RELOAD=false` hoặc `NO_RELOAD=1`.

---

## [2.0.0] - 2026-09-15

### Major Architecture Overhaul (Chuyển Đổi Sang Docsify Portal & Agentic AI)

#### Đã Thêm Mới (Added)

- **Docsify Multi-Page Portal Engine**:
  - Chuyển đổi toàn bộ tài liệu từ file HTML tĩnh đơn lẻ sang cổng tài liệu Docsify Portal đa trang hiện đại (`index.html`, `custom.css`, `_sidebar.md`, `_navbar.md`).
  - Tích hợp bộ giải mã Mermaid nâng cao: Auto-Sanitizer (khử xung đột copy-code & PrismJS), Smart Toolbar (Zoom 1:1, Double-click toggle), Fullscreen Modal chuẩn Figma/Miro.
  - Tích hợp Draw.io Viewer và PrismJS highlight đa ngôn ngữ.
- **Zero-Dependency Local Server**:
  - Script máy chủ cục bộ thuần Node.js / Bun (`serve.cjs`) chạy trên cổng mặc định `3300`, hỗ trợ override qua biến môi trường `PORT`.
  - Không cần `npm install` hay thư mục `node_modules` cồng kềnh.
- **Hệ Thống Agentic AI Chuẩn Hóa**:
  - `AGENTS.md`: Master Blueprint điều phối AI với 4 vai trò chuyên biệt, quy trình 4 bước chuẩn và hard guardrails.
  - `CLAUDE.md`: Bản hướng dẫn tương thích riêng cho Claude Code CLI và các mô hình Anthropic, trực tiếp tham chiếu tới `AGENTS.md`.
  - `agents/roles/`: Hồ sơ 4 vai trò chuyên biệt (`@codebase-architect`, `@spec-writer`, `@mermaid-engineer`, `@qa-auditor`).
  - `agents/skills/`: Bộ 4 kỹ năng thực thi (`codebase-survey`, `spec-authoring`, `mermaid-design`, `docs-verification`) định dạng `SKILL.md` có YAML frontmatter.
  - `agents/rules/`: 3 bộ quy tắc bất biến (`spec-components.md`, `mermaid-constraints.md`, `design-tokens.md`).
- **Module Hóa Nội Dung Đặc Tả**:
  - `01-design-tokens/colors-and-typography.md`: Hệ thống Design Tokens, bảng màu Warm Terracotta, font và khoảng cách.
  - `02-components/ui-components.md`: Callout boxes phân cấp, HTTP method badges, status labels, tech table và code tabs.
  - `03-diagram-templates/mermaid-gallery.md`: Thư viện 5 sơ đồ Mermaid thực chiến (Use Case, 3-Layer Architecture, AWS Deployment, WebSocket Sequence, OTP Activity).
  - `04-ai-ruleset/ruleset-and-prompts.md`: AI Ruleset v1.7 và cấu trúc 5 phần bắt buộc.
  - `AI-SPEC-WRITER-GUIDE.md`: Cẩm nang Master Prompt cho mọi trợ lý AI.

#### Đã Thay Đổi (Changed)

- Đồng bộ toàn bộ màu sắc và kiểu dáng về tông màu kem ấm Terracotta (`#faf7f2`, `#fffdf9`, `#9f3f2a`, `#c65a3a`).
- Tối ưu cấu trúc điều hướng phân cấp trên `_sidebar.md` và thanh menu `_navbar.md`.

#### Đã Loại Bỏ (Removed)

- Loại bỏ file HTML tĩnh đơn khối cũ (`index.html` 54KB) và file CSS cũ (`styles.css`).
- Loại bỏ thư mục trung gian dư thừa (`docs-starter/`), đưa cổng Docsify lên trực tiếp thư mục gốc.

---

## [1.0.0] - 2026-09-01

### Khởi Tạo Ban Đầu (Initial Release)

- Bản mẫu tài liệu kỹ thuật tĩnh dạng Single-Page HTML.
- Hỗ trợ các thẻ màu và định dạng bảng đặc tả cơ bản.
