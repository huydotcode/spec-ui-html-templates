# Rule: Spec UI Design Tokens & Theme Standards (`design-tokens`)

> **Quy tắc bất biến**: Hệ thống Spec UI sử dụng bộ Theme Tokens chuẩn hóa theo gam màu kem ấm (_Warm Terracotta Tone_) kết hợp hệ thống Đa giao diện (Multi-Theme Engine). Mọi thành phần tạo mới phải tuyệt đối tuân thủ hệ thống CSS Variables này, không tự ý viết mã màu hex cứng hay inline styles (`style="..."`).

---

## 1. Bảng Biến Màu Cốt Lõi (Color Tokens)

Các biến CSS chuẩn được khai báo tại `:root` trong `custom.css`:

| Tên Biến CSS | Mã Hex Mặc Định | Ý Nghĩa Kỹ Thuật & Vị Trí Ứng Dụng                                             |
| :----------- | :-------------: | :----------------------------------------------------------------------------- |
| `--bg`       |    `#faf7f2`    | Màu nền tổng thể cổng tài liệu (Warm Cream). Tự đổi sang dark trong theme tối. |
| `--surface`  |    `#fffdf9`    | Nền thẻ Card, Sidebar, Modal content, Diagram canvas.                          |
| `--ink`      |    `#2b211e`    | Màu chữ chính, độ tương phản cao, dễ đọc.                                      |
| `--muted`    |    `#7a6a61`    | Màu chữ phụ, mô tả ngắn, breadcrumb, caption sơ đồ.                            |
| `--accent`   |    `#c65a3a`    | Màu nhấn Terracotta (Cam gạch): hover liên kết, nút bấm hành động.             |
| `--accent-2` |    `#9f3f2a`    | Màu thương hiệu chính (Đỏ đất): trạng thái active sidebar, tiêu đề section.    |
| `--accent-3` |    `#f2b66d`    | Màu vàng hổ phách: highlight cảnh báo, border accent phụ.                      |
| `--line`     |    `#e3d8d0`    | Đường viền ngăn cách, viền bảng biểu, viền sơ đồ.                              |

---

## 2. Quy Chuẩn Phông Chữ (Typography Tokens — Clean Sans-Serif Standard)

Hệ thống sử dụng **Be Vietnam Pro** (chuẩn hóa theo phong cách kỹ thuật hiện đại Stripe / Linear):

- **Văn bản chung & Tiêu đề**:
  `font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
  - Tiêu đề cấp 1 (`h1`): Độ đậm `700`, `letter-spacing: -0.025em`, màu `var(--ink)`.
  - Tiêu đề cấp 2 (`h2`): Độ đậm `600`, `letter-spacing: -0.02em`, có viền gạch phân cách nhẹ.
  - Văn bản nội dung (`p`, `li`): Kích thước `15px`, chiều cao dòng `line-height: 1.7`.
  - **Quy tắc "Non-AI"**: Tuyệt đối không chèn emoji hoạt hình vào tiêu đề các cấp (H1, H2, H3).
- **Mã nguồn & Tham số (Code & Monospace)**:
  `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`
  - Mã inline (trong backticks `` `code` ``): Nền `var(--code-inline-background)`, màu `var(--code-inline-color)`.

---

## 3. Khoảng Cách & Bo Góc (Spacing & Radius)

- **Bo góc (Border Radius)**:
  - Khung Card lớn, Modal: `var(--radius)` (`18px`)
  - Thành phần nhỏ (Nút bấm, Input, Callout, Badges): `var(--radius-sm)` (`12px` hoặc `99px` cho pill)
- **Khoảng cách (Spacing)**:
  - `--space-1`: `6px` | `--space-2`: `10px` | `--space-3`: `16px` | `--space-4`: `24px` | `--space-5`: `32px` | `--space-6`: `48px`

---

## 4. Biểu Tượng Chuẩn Hóa (Tabler Icons)

- Bộ icon sử dụng: **Tabler Icons (Webfont CDN)**.
- Cú pháp: `<i class="ti ti-[tên-icon]"></i>`.
- Chỉ sử dụng khi phục vụ mục đích công năng (trong Callout, nút điều khiển modal, toolbar, CLI tags). Không dùng để trang trí tiêu đề.
