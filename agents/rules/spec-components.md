# Rule: Spec UI Components Specification (`spec-components`)

> **Quy tắc bất biến**: Khi tạo các phần tử giao diện trong tài liệu Markdown, Agent bắt buộc phải sử dụng các component HTML chuẩn đã được định nghĩa trong `custom.css`. Tuyệt đối không sử dụng inline styles (`style="..."`).

---

## 1. Hộp Thông Báo (Callout Boxes)

Luôn có cấu trúc 2 lớp thẻ:

```html
<div class="callout callout-[loại]">
  <div class="callout-title">[TIÊU ĐỀ IN HOA]</div>
  <div class="callout-content">Nội dung chi tiết của ghi chú, cảnh báo hoặc hướng dẫn.</div>
</div>
```

### Các biến thể được hỗ trợ:

| Class             | Ý nghĩa & Ứng dụng                                                          |
| :---------------- | :-------------------------------------------------------------------------- |
| `callout-info`    | Thông tin bổ trợ kiến trúc, giải thích tham số hoặc ghi chú chung.          |
| `callout-warning` | Cảnh báo rủi ro kỹ thuật, điều kiện rẽ nhánh, rate limiting, TTL.           |
| `callout-danger`  | Nguy cơ mất dữ liệu, breaking changes, lỗi bảo mật nghiêm trọng.            |
| `callout-success` | Khuyến nghị thực hành tốt (Best Practices), trạng thái hoàn tất thành công. |

---

## 2. Thẻ Trạng Thái & Huy Hiệu (Badges)

Tất cả các huy hiệu đều bắt đầu bằng class cơ sở `badge` kèm theo class biến thể tương ứng.

### HTTP Method Badges:

```html
<span class="badge badge-get">GET</span>
<span class="badge badge-post">POST</span>
<span class="badge badge-put">PUT</span>
<span class="badge badge-delete">DELETE</span>
<span class="badge badge-patch">PATCH</span>
```

### Lifecycle & Status Badges:

```html
<span class="badge badge-stable">STABLE</span>
<span class="badge badge-beta">BETA</span>
<span class="badge badge-deprecated">DEPRECATED</span>
<span class="badge badge-archived">ARCHIVED</span>
```

---

## 3. Bảng Đặc Tả Kỹ Thuật (Tech Tables)

Sử dụng định dạng Markdown Table chuẩn kết hợp với các cột canh lề rõ ràng:

- Cột Tên tham số/trường: Căn trái (`:---`), bọc tên biến trong backticks (`` `param` ``).
- Cột Bắt buộc / Tùy chọn: Căn giữa (`:---:`).
- Cột Kiểu dữ liệu & Mặc định: Căn trái.
- Cột Mô tả & Ràng buộc: Căn trái, giải thích rõ ngữ nghĩa và điều kiện validation.

Ví dụ:

```markdown
| Tham số     | Kiểu dữ liệu | Bắt buộc | Mặc định | Mô tả & Ràng buộc                             |
| :---------- | :----------- | :------: | :------- | :-------------------------------------------- |
| `username`  | `string`     |  **Có**  | -        | Định danh đăng nhập, 4-32 ký tự alphanumeric. |
| `is_active` | `boolean`    |  Không   | `true`   | Trạng thái kích hoạt tài khoản.               |
```

---

## 4. Khung Bọc Sơ Đồ (Diagram Wrapper)

Mọi khối `mermaid` đều **BẮT BUỘC** phải nằm bên trong `<div class="diagram-wrapper">`:

````html
<div class="diagram-wrapper">```mermaid flowchart TD ...</div>
````

</div>
```
