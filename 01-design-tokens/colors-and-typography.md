# Hệ Thống Design Tokens (Màu Sắc, Typography & Spacing)

<span class="status-label stable">Design Tokens v1.7</span>

Design Tokens là tập hợp các biến giá trị nguyên tử (Atomic Values) được chuẩn hóa để duy trì sự nhất quán về màu sắc, kiểu chữ và khoảng cách trong toàn bộ hệ sinh thái tài liệu kỹ thuật **Spec UI System**.

---

## 1. Bảng Màu Chuẩn (Color Tokens)

Hệ thống sử dụng gam màu kem ấm (_Warm Cream & Terracotta_) sang trọng, thân thiện với mắt khi đọc tài liệu kỹ thuật dài.

| Tên Token    | Mã Màu Hex / HSL | Mục Đích Sử Dụng                                   |                                                      Mẫu Hiển Thị Trực Quan                                                      |
| :----------- | :--------------: | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------: |
| `--bg`       |    `#faf7f2`     | Màu nền chính của toàn bộ trang tài liệu           | <span style="display:inline-block;width:32px;height:20px;background:#faf7f2;border:1px solid #e3d8d0;border-radius:4px;"></span> |
| `--surface`  |    `#fffdf9`     | Nền thẻ Card, Sidebar, Container hộp nội dung      | <span style="display:inline-block;width:32px;height:20px;background:#fffdf9;border:1px solid #e3d8d0;border-radius:4px;"></span> |
| `--ink`      |    `#2b211e`     | Màu chữ chính (Độ tương phản cao, dễ đọc)          |             <span style="display:inline-block;width:32px;height:20px;background:#2b211e;border-radius:4px;"></span>              |
| `--muted`    |    `#7a6a61`     | Chữ phụ, mô tả ghi chú, thông tin meta             |             <span style="display:inline-block;width:32px;height:20px;background:#7a6a61;border-radius:4px;"></span>              |
| `--accent`   |    `#c65a3a`     | Màu nhấn Terracotta (Cam gạch - hover, links)      |             <span style="display:inline-block;width:32px;height:20px;background:#c65a3a;border-radius:4px;"></span>              |
| `--accent-2` |    `#9f3f2a`     | Màu thương hiệu chủ đạo (Đỏ đất - active, headers) |             <span style="display:inline-block;width:32px;height:20px;background:#9f3f2a;border-radius:4px;"></span>              |
| `--accent-3` |    `#f2b66d`     | Màu vàng hổ phách (Cảnh báo, highlight đặc biệt)   |             <span style="display:inline-block;width:32px;height:20px;background:#f2b66d;border-radius:4px;"></span>              |
| `--line`     |    `#e3d8d0`     | Đường viền ngăn cách nhẹ nhàng giữa các khối       |             <span style="display:inline-block;width:32px;height:20px;background:#e3d8d0;border-radius:4px;"></span>              |

<div class="callout info">
  <i class="ti ti-info-circle"></i> <strong>Gợi ý:</strong> Khi viết CSS tùy chỉnh, luôn sử dụng biến <code>var(--tên-token)</code> thay vì viết mã màu Hex cứng để đảm bảo tính đồng bộ khi thay đổi theme.
</div>

---

## 2. Hệ Thống Kiểu Chữ (Typography Tokens)

Hệ thống kết hợp tinh tế giữa 3 họ font chữ phục vụ cho từng mục đích cụ thể:

### 1. Tiêu Đề Chính (Headings — Lora)

- **Font Family**: `'Lora', 'Georgia', serif`
- **Đặc trưng**: Font chữ có chân mang nét cổ điển, sang trọng, tạo điểm nhấn cấu trúc bài viết vững chãi.
- **Ứng dụng**: Các thẻ `<h1>`, `<h2>`, `<h3>` và tiêu đề Sidebar.

### 2. Văn Bản Nội Dung (Body Text — Be Vietnam Pro)

- **Font Family**: `'Be Vietnam Pro', 'Segoe UI', sans-serif`
- **Đặc trưng**: Được thiết kế tối ưu hóa hoàn hảo cho hiển thị tiếng Việt, các dấu thanh không bị dính vào chữ hoa hay chữ thường, đọc thoải mái trên mọi độ phân giải màn hình.
- **Ứng dụng**: Các đoạn văn `<p>`, danh sách `<ul>`, bảng biểu `<table>`.

### 3. Mã Nguồn & Dữ Liệu (Code & Monospace)

- **Font Family**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Ứng dụng**: Các khối code `pre`, biến nội dòng `code`, mã token, HTTP endpoints.

---

## 3. Khoảng Cách & Lưới (Spacing Tokens)

Hệ thống Spacing tuân thủ tỉ lệ bước nhảy chuẩn hóa, giúp bố cục thông thoáng và mạch lạc:

| Token       | Kích Thước | Ví Dụ Ứng Dụng                                      |
| :---------- | :--------: | :-------------------------------------------------- |
| `--space-1` |   `6px`    | Khoảng cách giữa icon và chữ, padding nhãn badge    |
| `--space-2` |   `10px`   | Khoảng cách giữa các nút tab, padding trong ô input |
| `--space-3` |   `16px`   | Khoảng cách giữa các đoạn văn, padding thẻ callout  |
| `--space-4` |   `24px`   | Padding trong của thẻ Card, lề bảng dữ liệu         |
| `--space-5` |   `32px`   | Khoảng cách ngăn cách giữa các mục `h2` lớn         |
| `--space-6` |   `48px`   | Khoảng cách phân cách giữa các Section chính        |

<div class="callout success">
  <i class="ti ti-circle-check"></i> <strong>Quy tắc bo góc (Border Radius):</strong> Thẻ lớn dùng <code>--radius: 18px</code> (khung Card, Modal); thành phần nhỏ dùng <code>--radius-sm: 12px</code> (nút bấm, ô tìm kiếm, callout).
</div>

---

## 4. Biểu Tượng Chuẩn Hóa (Tabler Icons Tokens)

Hệ thống sử dụng bộ **Tabler Icons (Webfont CDN)** với triết lý thiết kế công năng và tối giản ("Non-AI Aesthetics"):

- **Cú pháp sử dụng**: `<i class="ti ti-[tên-icon]"></i>` (Ví dụ: `<i class="ti ti-info-circle"></i>`, `<i class="ti ti-arrows-maximize"></i>`).
- **Nguyên tắc "Không AI"**:
  - Tuyệt đối không chèn emoji hoạt hình hoặc icon trang trí vào tiêu đề các cấp (H1, H2, H3) và thanh điều hướng.
  - Icon chỉ xuất hiện khi phục vụ một mục đích công năng rõ rệt (chỉ dẫn trạng thái Callout, nút bấm Toolbar, công cụ phóng to/thu nhỏ, điều hướng phân trang).
- **Quy chuẩn hiển thị**: Nét vẽ `stroke-width: 1.5px - 2px`, tự động thừa hưởng màu chữ qua `currentColor`.

---

## 5. Hệ Thống Đa Giao Diện (Multi-Theme Palette Tokens)

Hệ thống cung cấp kiến trúc đa theme cắm rút (Pluggable Multi-Theme Architecture) thông qua thuộc tính `data-theme` trên thẻ `<html>`, lưu trữ trạng thái tại `localStorage.getItem('spec-ui-theme')` và hỗ trợ chống nháy sáng Anti-FOUC ngay từ `<head>`.

### Bảng Ma Trận Màu Sắc 5 Giao Diện Chuẩn

| Giao Diện (Theme ID)                            |      Loại       | Nền Chính (`--bg`) | Thẻ Card (`--surface`) | Chữ Chính (`--ink`) | Chữ Phụ (`--muted`) | Nhấn Chính (`--accent`) | Đường Viền (`--line`) |
| :---------------------------------------------- | :-------------: | :----------------: | :--------------------: | :-----------------: | :-----------------: | :---------------------: | :-------------------: |
| **Warm Terracotta** (`warm-terracotta`)         | Sáng (Mặc định) |     `#faf7f2`      |       `#fffdf9`        |      `#2b211e`      |      `#7a6a61`      |        `#c65a3a`        |       `#e3d8d0`       |
| **Obsidian Terracotta** (`obsidian-terracotta`) |       Tối       |     `#141210`      |       `#1e1a17`        |      `#ede6df`      |      `#a3968c`      |        `#e2725b`        |       `#332c26`       |
| **Nordic Slate** (`nordic-slate`)               |       Tối       |     `#0b0f19`      |       `#111827`        |      `#f1f5f9`      |      `#94a3b8`      |        `#38bdf8`        |       `#1e293b`       |
| **Forest Sage** (`forest-sage`)                 |       Tối       |     `#091310`      |       `#111f1a`        |      `#ecfdf5`      |      `#86a397`      |        `#34d399`        |       `#1b332b`       |
| **Solarized Paper** (`solarized-paper`)         |      Sáng       |     `#fbf5e6`      |       `#f5ebd4`        |      `#3f3932`      |      `#81786c`      |        `#b58900`        |       `#decfa9`       |

<div class="callout info">
  <i class="ti ti-palette"></i> <strong>Cơ chế tự động thích ứng Sơ đồ Mermaid:</strong> Khi chuyển đổi qua lại giữa các theme, hệ thống tự động khởi tạo lại Mermaid engine với chế độ màu tối (Dark) hoặc sáng (Default), đồng bộ màu nền vector SVG/PNG khi tải về và bảo tồn 100% tính năng Interactive Node Focus.
</div>
