# AGENTS.md — Hướng Dẫn Điều Phối Trí Tuệ Nhân Tạo (Spec UI System Agentic Blueprint)

> **Phạm vi áp dụng**: Dành cho tất cả các trợ lý và Agent lập trình tự trị (Autonomous AI Agents: Claude Code, Cursor Agent, Antigravity, GitHub Copilot, Devin, ChatGPT) khi vận hành, phân tích mã nguồn và khởi tạo tài liệu kỹ thuật trong hệ sinh thái **Spec UI System**.

---

## 🎯 1. Bản Chất Dự Án & Bối Cảnh Hệ Thống

**Spec UI System** là hệ thống tài liệu đặc tả kỹ thuật và phân tích kiến trúc phần mềm chuyên nghiệp, vận hành dưới dạng **Cổng tài liệu Docsify Portal đa trang (Multi-page Markdown Portal)** kết hợp:

1. **Bộ Theme Tokens ấm áp**: Gam màu Terracotta & Warm Cream (`#faf7f2`, `#fffdf9`, `#9f3f2a`, `#c65a3a`).
2. **Khắc phục triệt để lỗi Mermaid**: Tích hợp sẵn bộ lọc Auto-Sanitizer (khử xung đột copy-code & PrismJS), chế độ co vừa khung (Fit-to-Frame 100%), Smart Toolbar (Zoom 1:1, Double-click) và Fullscreen Modal chuẩn Figma/Miro.
3. **Zero-Dependency Server**: Khởi chạy ngay bằng Node.js thuần (`node serve.cjs`) hoặc Bun (`bun serve.cjs`) trên cổng `3300` mà không cần `npm install` hay `node_modules`.

---

## 🤖 2. Phân Nhiệm Các Vai Trò Chuyên Biệt (Specialized Agent Personas)

Khi xử lý một dự án tài liệu hóa, Agent cần linh hoạt kích hoạt một trong 4 vai trò chuyên biệt (hoặc phân rã subagent tương ứng):

```text
               ┌───────────────────────────────┐
               │    @codebase-architect        │
               │  (Khảo sát & Phân rã Domain)  │
               └───────────────┬───────────────┘
                               │
               ┌───────────────▼───────────────┐
               │         @spec-writer          │
               │   (Soạn thảo Spec 5 phần)     │
               └───────────────┬───────────────┘
                               │
       ┌───────────────────────┴───────────────────────┐
       │                                               │
┌──────▼───────────────────────┐       ┌───────────────▼───────────────┐
│     @mermaid-engineer        │       │         @qa-auditor           │
│ (Thiết kế sơ đồ trực quan)   │       │ (Kiểm thử liên kết & Render)  │
└──────────────────────────────┘       └───────────────────────────────┘
```

1. **`@codebase-architect`** (Chi tiết tại [`agents/roles/codebase-architect.md`](agents/roles/codebase-architect.md)):
   - Quét manifest (`package.json`, `go.mod`, `pom.xml`...), router, database schemas, auth middleware.
   - Phân rã toàn bộ hệ thống thành **6 đến 10 Domain Bounded Contexts**.
   - Khởi tạo và đồng bộ `_sidebar.md`, `_navbar.md` và bảng ma trận tại `README.md`.
2. **`@spec-writer`** (Chi tiết tại [`agents/roles/spec-writer.md`](agents/roles/spec-writer.md)):
   - Soạn thảo nội dung từng file markdown `.md` theo chuẩn cấu trúc 5 phần bắt buộc.
   - Đào sâu logic ngầm (Hidden Logic, Edge Cases, Data Validation).
   - Sử dụng linh hoạt các component Spec UI: Callouts, Badges, Status labels, Tables.
3. **`@mermaid-engineer`** (Chi tiết tại [`agents/roles/mermaid-engineer.md`](agents/roles/mermaid-engineer.md)):
   - Chịu trách nhiệm thiết kế các sơ đồ hệ thống trực quan (Sequence, Flowchart, Architecture Graph).
   - Đảm bảo 100% cú pháp Mermaid an toàn (không dùng mũi tên ngược, nháy kép nhãn đặc biệt, gán classDef Spec UI).
   - Luôn bọc sơ đồ trong thẻ `<div class="diagram-wrapper">`.
4. **`@qa-auditor`** (Chi tiết tại [`agents/roles/qa-auditor.md`](agents/roles/qa-auditor.md)):
   - Kiểm tra chéo toàn bộ liên kết nội bộ trong `_sidebar.md` và giữa các file `.md` (chống link 404).
   - Khởi chạy server kiểm thử cục bộ (`node serve.cjs`), đảm bảo không có lỗi console hay gãy giao diện.

---

## 🧭 3. Quy Trình 4 Bước Tiêu Chuẩn (Standard Operating Procedure)

Mọi Agent khi nhận nhiệm vụ phân tích một codebase mới **BẮT BUỘC** phải tuân thủ đúng quy trình:

1. **Bước 1 — Khảo sát Nền tảng (Survey Phase)**:
   - Kích hoạt kỹ năng [`codebase-survey`](agents/skills/codebase-survey/SKILL.md).
   - Tìm kiếm entrypoints, framework, database, router, auth strategy.
2. **Bước 2 — Phân rã Domain (Decomposition Phase)**:
   - Gom nhóm chức năng theo Domain Bounded Contexts (thư mục `01-foundation`, `02-identity`, `03..08-core-domains`...).
   - Xuất bản khung mục lục tại `_sidebar.md` và `_navbar.md`.
3. **Bước 3 — Soạn thảo Đặc tả (Authoring Phase)**:
   - Kích hoạt kỹ năng [`spec-authoring`](agents/skills/spec-authoring/SKILL.md) và [`mermaid-design`](agents/skills/mermaid-design/SKILL.md).
   - Viết từng file `.md` đảm bảo đủ 5 phần chuẩn.
4. **Bước 4 — Kiểm thử & Nghiệm thu (Verification Phase)**:
   - Kích hoạt kỹ năng [`docs-verification`](agents/skills/docs-verification/SKILL.md).
   - Kiểm tra hiển thị sơ đồ, bảng biểu, tabs và server status.

---

## 🚫 4. Các Giới Hạn An Toàn Bắt Buộc (Hard Guardrails & Constraints)

Agent **TUYỆT ĐỐI KHÔNG** được vi phạm các quy tắc sau:

1. **Không sử dụng Inline Style (`style=""`)**: Chỉ sử dụng class CSS Spec UI đã định nghĩa sẵn. Không tự ý nhồi inline CSS làm phá vỡ tính đồng bộ của Design Tokens.
2. **Không dùng mũi tên ngược trong Mermaid**: Nghiêm cấm dùng `<-` hoặc `<--` trong flowchart vì sẽ gây lỗi Syntax Error. Luôn dùng mũi tên xuôi `-->` và đảo chiều nút nguồn / đích.
3. **Nhãn Mermaid có ký tự đặc biệt phải đặt trong nháy kép**: Mọi nhãn chứa dấu `/`, `:`, `()`, `""` phải viết dưới dạng `Node["Nội dung (Chi tiết / Lưu ý)"]`.
4. **Luôn dùng khối mã Markdown chuẩn ` ```mermaid `**: Trình biên dịch của Docsify đã tự động bọc thẻ `<div class="diagram-wrapper">`, đồng thời đảm bảo sơ đồ hiển thị chuẩn xác trên cả giao diện web của GitHub (không dùng thẻ HTML thuần `<pre class="mermaid">` vì sẽ bị GitHub coi là code thô).
5. **Không viết mô tả hời hợt**: Tuyệt đối không chỉ liệt kê lại code hoặc viết lý thuyết chung chung. Phải bóc tách được:
   - Tham số I/O thực tế.
   - Cơ chế bảo mật ngầm (Token, Hashing, Encryption).
   - Điểm nghẽn hiệu năng, điều kiện rẽ nhánh và các edge-cases thực tế.
6. **Không phá vỡ cấu trúc 5 phần của tài liệu module**: Mọi tệp `.md` đều phải có Header Status, Tóm tắt logic, Sơ đồ Mermaid, Bảng API/tham số, Callout cảnh báo và Code Tabs đối chiếu nếu có.

---

## 📋 5. Bảng Tra Cứu Lệnh Điều Khiển Nhanh

| Hành động                   | Lệnh thực thi                         | Mục đích                                           |
| :-------------------------- | :------------------------------------ | :------------------------------------------------- |
| **Khởi chạy Local Server**  | `node serve.cjs` hoặc `bun serve.cjs` | Khởi chạy máy chủ tài liệu cổng 3300               |
| **Khởi chạy qua NPM**       | `npm start`                           | Chạy lệnh mặc định định nghĩa trong `package.json` |
| **Chỉ định cổng tùy biến**  | `$env:PORT="3301"; node serve.cjs`    | Chạy trên cổng tùy biến khi cổng 3300 bận          |
| **Kiểm tra cú pháp server** | `node -c serve.cjs`                   | Kiểm tra cú pháp script server Node.js             |

---

## 📂 6. Thư Mục Tài Liệu Tham Chiếu Dành Cho Agent

- **Vai trò chuyên biệt**: [`agents/roles/`](agents/roles/)
- **Kỹ năng thực thi**: [`agents/skills/`](agents/skills/)
- **Quy tắc bất biến**: [`agents/rules/`](agents/rules/)
- **Cẩm nang Prompt Master**: [`AI-SPEC-WRITER-GUIDE.md`](AI-SPEC-WRITER-GUIDE.md)
