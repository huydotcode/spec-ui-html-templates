# Changelog

Tất cả các thay đổi đáng chú ý của dự án **Spec UI System** sẽ được ghi chép trong tài liệu này.

Định dạng tài liệu tuân thủ theo tiêu chuẩn [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) và tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-09-15

### 🚀 Major Architecture Overhaul (Chuyển Đổi Sang Docsify Portal & Agentic AI)

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
