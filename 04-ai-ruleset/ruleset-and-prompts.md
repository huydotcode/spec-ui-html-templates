# Quy Chuẩn Dành Cho AI (AI Ruleset v1.7)

<span class="status-label stable">AI Ruleset Specification v1.7</span>

Tài liệu này định nghĩa tập hợp các quy định bắt buộc dành cho lập trình viên và các trình sinh mã tự động (AI Code Generators / LLMs) khi tạo mới hoặc cập nhật các trang tài liệu trong hệ sinh thái **Spec UI System**.

---

## 1. Nguyên Tắc Bắt Buộc Khi Sinh Mã Tài Liệu

1. **Định dạng chuẩn**: Viết hoàn toàn bằng cú pháp **GitHub Flavored Markdown (`.md`)** kết hợp các thẻ HTML component đặc tả đã được định nghĩa trong hệ thống.
2. **Không tự tạo class mới**: Chỉ sử dụng các class có trong danh mục component chuẩn (`.callout`, `.badge`, `.status-label`, `.diagram-wrapper`, `.table-tech`).
3. **Không thêm thuộc tính inline style**: Hạn chế tối đa việc thêm `style=""` trực tiếp trong thẻ; thay vào đó hãy sử dụng class CSS của hệ sinh thái hoặc CSS variables.
4. **Mỗi chức năng một tệp riêng**: Không nhồi nhét toàn bộ hệ thống vào 1 tệp markdown duy nhất. Phân chia rõ ràng thành các Bounded Contexts.
5. **Tuyệt đối không dùng emoji ở tiêu đề ("Non-AI" Aesthetics)**: Nghiêm cấm đưa emoji hoạt hình (như 🚀, 🎯, ⚡, 🎨, 📢...) vào tiêu đề các cấp (H1, H2, H3) và thanh điều hướng. Giữ typography thuần khiết, thanh lịch. Chỉ sử dụng **Tabler Icons** (`<i class="ti ti-..."></i>`) khi phục vụ mục đích công năng (chỉ dẫn trạng thái Callout, nút bấm, CLI).

---

## 2. Cấu Trúc Bắt Buộc Khi Mô Tả Một Module

Mỗi tệp tài liệu đặc tả chức năng phải tuân thủ đúng thứ tự 5 phần sau:

```text
1. Tiêu đề H1 + Nhãn trạng thái (.status-label) + Tóm tắt nghiệp vụ
2. Sơ đồ Mermaid trực quan (.diagram-wrapper > pre.mermaid)
3. Bảng đặc tả API (sử dụng .badge HTTP method) hoặc Bảng tham số I/O
4. Hộp thông tin phân cấp (.callout.warning hoặc .callout.info) cho logic ngầm
5. Khối so sánh mã nguồn (<!-- tabs:start --> ... <!-- tabs:end -->) nếu là dự án Migration
```

---

## 3. Bảng Tra Cứu Component (Component Reference)

| Phân Loại   | Các Class Được Phép Sử Dụng                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| **CALLOUT** | `.callout.info` \| `.callout.success` \| `.callout.warning` \| `.callout.danger`                        |
| **BADGE**   | `.badge.get` \| `.badge.post` \| `.badge.put` \| `.badge.delete` \| `.badge.patch`                      |
| **STATUS**  | `.status-label.stable` \| `.status-label.review` \| `.status-label.draft` \| `.status-label.deprecated` |
| **TABLE**   | `.table-tech` (kết hợp `<span class="required-star">*</span>` cho trường bắt buộc)                      |
| **DIAGRAM** | `.diagram-wrapper > pre.mermaid + .diagram-caption`                                                     |
| **TABS**    | `<!-- tabs:start -->` ... `<!-- tabs:end -->` (cú pháp Docsify-Tabs)                                    |
| **ICONS**   | Tabler Icons Webfont: `<i class="ti ti-[tên-icon]"></i>` (chỉ dùng khi cần mục đích công năng)          |

---

## 4. Quy Chuẩn Kỹ Thuật Khi Vẽ Sơ Đồ Mermaid

- **Luồng xác thực / Giao tiếp mạng**: Bắt buộc dùng `sequenceDiagram` kèm từ khóa `autonumber`.
- **Luồng trạng thái / Rẽ nhánh điều kiện**: Dùng `flowchart TD` (Top-Down).
- **Kiến trúc phân tầng / Module**: Dùng `graph TD` hoặc `graph LR`.
- **Cấm dùng mũi tên ngược**: Không dùng `<-` hoặc `<--` trong flowchart vì sẽ gây lỗi Syntax Error. Luôn viết mũi tên xuôi `-->` và đảo vị trí nút.
- **Ký tự đặc biệt trong nhãn**: Nếu nhãn chứa dấu gạch chéo `/`, dấu hai chấm `:`, hoặc ngoặc `()`, bắt buộc bọc trong nháy kép `""`, ví dụ: `A["Đăng nhập (OTP SMS / Email)"] --> B`.
- **Fit-to-Frame 100%**: Mọi sơ đồ tự động co vừa vặn khung thẻ card, tự kích hoạt Smart Toolbar (Xem kích thước gốc / Thu vừa khung) và Fullscreen Modal Figma/Miro.

---

## 5. Sử Dụng Cẩm Nang Master Prompt Cho AI

Khi chuyển giao tài liệu này cho trợ lý AI làm việc trên một codebase mới, hãy trỏ AI đọc tệp:
→ **[`AI-SPEC-WRITER-GUIDE.md`](AI-SPEC-WRITER-GUIDE.md)**

Trong tệp này đã đóng gói sẵn:

- Quy trình 4 bước khảo sát toàn bộ codebase.
- Hướng dẫn phân rã kiến trúc thành 6 - 10 chương logic.
- Câu lệnh One-shot Prompt mẫu để copy-paste trực tiếp.
