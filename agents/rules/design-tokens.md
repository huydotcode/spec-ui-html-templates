# Rule: Spec UI Design Tokens & Theme Standards (`design-tokens`)

> **Quy tắc bất biến**: Hệ thống Spec UI sử dụng bảng màu ấm áp (Terracotta Warm Tone) được thiết kế đặc thù cho việc đọc tài liệu kỹ thuật dài mà không gây mỏi mắt. Mọi thành phần bổ sung phải tôn trọng triệt để hệ thống Token này.

---

## 🎨 1. Bảng Màu Cốt Lõi (Color Palette Tokens)

| Tên Token            |  Mã Hex   | Ý nghĩa & Vị trí ứng dụng                                                      |
| :------------------- | :-------: | :----------------------------------------------------------------------------- |
| `--color-primary`    | `#9f3f2a` | Màu nhấn chính, thương hiệu Spec UI, thanh active sidebar, viền callout chính. |
| `--color-accent`     | `#c65a3a` | Màu nhấn phụ, hiệu ứng hover liên kết, nút bấm hành động.                      |
| `--color-bg-main`    | `#faf7f2` | Màu nền tổng thể cổng tài liệu (Warm Cream Tone).                              |
| `--color-bg-surface` | `#fffdf9` | Màu nền của các khối thẻ, panel nội dung, bảng biểu, diagram canvas.           |
| `--color-text-main`  | `#2c2623` | Màu chữ chính, độ tương phản cao, êm dịu cho mắt.                              |
| `--color-text-muted` | `#7a6e65` | Màu chữ phụ, mô tả ngắn, breadcrumb, chú thích nhỏ.                            |
| `--color-border`     | `#e2d9cf` | Đường viền ngăn cách, viền bảng biểu, viền sơ đồ.                              |

---

## 🔤 2. Quy Chuẩn Phông Chữ (Typography Tokens)

- **Văn bản chung & Tiêu đề**:
  `font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
  - Tiêu đề cấp 1 (`h1`): Kích thước `2.25rem` (36px), độ đậm `700`, màu `#2c2623`.
  - Tiêu đề cấp 2 (`h2`): Kích thước `1.5rem` (24px), độ đậm `600`, có gạch dưới nhẹ ngăn cách.
  - Văn bản nội dung (`p`, `li`): Kích thước `1rem` (16px), chiều cao dòng `line-height: 1.65`.
- **Mã nguồn & Tham số (Code & Monospace)**:
  `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`
  - Mã inline (trong dấu backtick `` ` ``): Nền `#f3ede4`, viền `#e2d9cf`, màu `#9f3f2a`.

---

## 📐 3. Khoảng Cách & Bo Góc (Spacing & Radius)

- **Bo góc (Border Radius)**:
  - Huy hiệu (Badges): `4px`
  - Nút bấm & Ô nhập: `6px`
  - Hộp Callout & Sơ đồ Wrapper: `8px`
- **Khoảng cách đệm (Padding)**:
  - Callout: `16px 20px`
  - Khối sơ đồ (`diagram-wrapper`): `24px`
  - Ô bảng (`th`, `td`): `10px 14px`
