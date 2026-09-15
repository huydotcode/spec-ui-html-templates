# Các Thành Phần Đặc Tả (Spec UI Components)

<span class="status-label stable">Component Reference v2.5.1</span>

Tài liệu này tổng hợp toàn bộ các khối giao diện chuyên dụng được thiết kế riêng để biểu diễn API, quy trình nghiệp vụ, ma trận so sánh và các cảnh báo kỹ thuật trong hệ thống **Spec UI System**.

---

## 1. Hộp Thông Tin Phân Cấp (Callout Boxes)

Hộp Callout dùng để làm nổi bật các ghi chú quan trọng, điều kiện rẽ nhánh hoặc cảnh báo bảo mật. Kết hợp cùng biểu tượng **Tabler Icons** giúp phân loại cảnh báo trực quan và chuyên nghiệp:

### Cú Pháp & Hiển Thị Mẫu:

```html
<div class="callout info">
  <i class="ti ti-info-circle"></i> <strong>Thông tin cấu hình:</strong> Cổng API Gateway mặc định lắng nghe tại port 3300.
</div>

<div class="callout success">
  <i class="ti ti-circle-check"></i> <strong>Tối ưu hóa:</strong> Sử dụng cơ chế In-Memory Cache giúp giảm 85% thời gian phản hồi.
</div>

<div class="callout warning">
  <i class="ti ti-alert-triangle"></i> <strong>Lưu ý logic ngầm:</strong> Tài khoản sẽ bị tạm khóa 15 phút nếu nhập sai OTP quá 5 lần.
</div>

<div class="callout danger">
  <i class="ti ti-alert-circle"></i> <strong>Nguy cơ bảo mật:</strong> Tuyệt đối không nhúng Secret Key vào mã nguồn client-side.
</div>
```

<div class="callout info">
  <i class="ti ti-info-circle"></i> <strong>Thông tin cấu hình:</strong> Cổng API Gateway mặc định lắng nghe tại port 3300.
</div>

<div class="callout success">
  <i class="ti ti-circle-check"></i> <strong>Tối ưu hóa:</strong> Sử dụng cơ chế In-Memory Cache giúp giảm 85% thời gian phản hồi của truy vấn.
</div>

<div class="callout warning">
  <i class="ti ti-alert-triangle"></i> <strong>Lưu ý logic ngầm:</strong> Tài khoản sẽ bị tạm khóa 15 phút nếu nhập sai OTP quá 5 lần liên tiếp.
</div>

<div class="callout danger">
  <i class="ti ti-alert-circle"></i> <strong>Nguy cơ bảo mật:</strong> Tuyệt đối không nhúng Secret Key vào mã nguồn frontend client-side.
</div>

---

## 2. HTTP Method Badges

Được sử dụng trong các bảng tài liệu hóa API Endpoints:

```html
<span class="badge get">GET</span>
<span class="badge post">POST</span>
<span class="badge put">PUT</span>
<span class="badge patch">PATCH</span>
<span class="badge delete">DELETE</span>
```

|               Phương Thức                | Mã Thẻ                                     | Ý Nghĩa Kỹ Thuật                        |
| :--------------------------------------: | :----------------------------------------- | :-------------------------------------- |
|    <span class="badge get">GET</span>    | `<span class="badge get">GET</span>`       | Truy vấn lấy dữ liệu (Idempotent, Safe) |
|   <span class="badge post">POST</span>   | `<span class="badge post">POST</span>`     | Tạo mới bản ghi tài nguyên              |
|    <span class="badge put">PUT</span>    | `<span class="badge put">PUT</span>`       | Cập nhật toàn bộ bản ghi tài nguyên     |
|  <span class="badge patch">PATCH</span>  | `<span class="badge patch">PATCH</span>`   | Cập nhật một phần thuộc tính tài nguyên |
| <span class="badge delete">DELETE</span> | `<span class="badge delete">DELETE</span>` | Xóa bản ghi tài nguyên                  |

---

## 3. Nhãn Trạng Thái Chức Năng (Status Labels)

Dùng để đánh dấu tình trạng hoàn thiện của module, hoặc đối chiếu trong quá trình chuyển đổi hệ thống:

```html
<span class="status-label stable">Đã Hoàn Thành</span>
<span class="status-label review">Đang Rà Soát</span>
<span class="status-label draft">Bản Nháp / Cần Xác Minh</span>
<span class="status-label deprecated">Không Sử Dụng / Bỏ</span>
```

- <span class="status-label stable">Đã Hoàn Thành / Ổn Định</span>: Tính năng đã được kiểm thử và đưa vào sản xuất.
- <span class="status-label review">Đang Rà Soát</span>: Đang trong quá trình tối ưu hóa hoặc kiểm tra chéo.
- <span class="status-label draft">Bản Nháp / Cần Xác Minh</span>: Cần bổ sung thông tin hoặc làm rõ yêu cầu nghiệp vụ.
- <span class="status-label deprecated">Không Sử Dụng / Bỏ</span>: Tính năng cũ sẽ bị loại bỏ trong hệ thống mới.

---

## 4. Bảng Đặc Tả Kỹ Thuật (Technical Tables)

Bảng đặc tả tham số I/O hoặc danh sách endpoint có định dạng rõ ràng, tương thích responsive:

| Tên Trường (Field) | Kiểu Dữ Liệu  |                                    Bắt Buộc                                     | Mô Tả Nghiệp Vụ & Giới Hạn                         |
| :----------------- | :-----------: | :-----------------------------------------------------------------------------: | :------------------------------------------------- |
| `userId`           |   `UUID v4`   | Có<span class="required-star" style="color:#ef4444;font-weight:bold;">\*</span> | Mã định danh duy nhất của người dùng               |
| `email`            |   `String`    | Có<span class="required-star" style="color:#ef4444;font-weight:bold;">\*</span> | Địa chỉ email hợp lệ, độ dài tối đa 255 ký tự      |
| `role`             |    `Enum`     |                                      Không                                      | Vai trò người dùng (`ADMIN`, `OPERATOR`, `MEMBER`) |
| `metadata`         | `JSON Object` |                                      Không                                      | Dữ liệu tùy biến mở rộng kèm theo                  |

---

## 5. Khối Chuyển Đổi Tab So Sánh Mã Nguồn (Docsify-Tabs)

Plugin Docsify-Tabs đã được tùy biến giao diện dạng nút tròn (Pill Buttons), đổi màu terracotta ấm khi active và có viền bo gọn gàng:

<!-- tabs:start -->

#### **TypeScript / Modern Approach**

```typescript
// Giao diện gọi API Type-safe với Async/Await
export async function getCampaignDetails(campaignId: string): Promise<CampaignDTO> {
  const response = await fetch(`/api/v2/campaigns/${campaignId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!response.ok) throw new Error("Không thể tải thông tin chiến dịch");
  return response.json();
}
```

#### **Legacy JavaScript Approach**

```javascript
// Gọi API qua Callback truyền thống
function getCampaignDetails(campaignId, callback) {
  $.ajax({
    url: "/api/v1/campaigns/" + campaignId,
    method: "GET",
    success: function (data) {
      callback(null, data);
    },
    error: function (err) {
      callback(err);
    },
  });
}
```

<!-- tabs:end -->

---

## 6. Biểu Tượng Công Năng (Tabler Icons)

Dự án tích hợp sẵn thư viện **Tabler Icons Webfont**. Bạn có thể chèn icon vào bất kỳ vị trí nào trong tài liệu markdown:

```html
<i class="ti ti-info-circle"></i>
<i class="ti ti-circle-check"></i>
<i class="ti ti-alert-triangle"></i>
<i class="ti ti-alert-circle"></i>
<i class="ti ti-arrows-maximize"></i>
<i class="ti ti-terminal-2"></i>
```

|                                    Mẫu Hiển Thị                                    | Mã HTML                                | Ứng Dụng Đề Xuất                 |
| :--------------------------------------------------------------------------------: | :------------------------------------- | :------------------------------- |
|   <i class="ti ti-info-circle" style="font-size:1.3em;color:var(--accent);"></i>   | `<i class="ti ti-info-circle"></i>`    | Gợi ý cấu hình, ghi chú bổ sung  |
|  <i class="ti ti-circle-check" style="font-size:1.3em;color:var(--success);"></i>  | `<i class="ti ti-circle-check"></i>`   | Thành công, tối ưu hóa, SLA      |
| <i class="ti ti-alert-triangle" style="font-size:1.3em;color:var(--warning);"></i> | `<i class="ti ti-alert-triangle"></i>` | Cảnh báo logic ngầm, edge case   |
|  <i class="ti ti-alert-circle" style="font-size:1.3em;color:var(--danger);"></i>   | `<i class="ti ti-alert-circle"></i>`   | Nguy cơ bảo mật, rủi ro hệ thống |
|     <i class="ti ti-terminal-2" style="font-size:1.3em;color:var(--ink);"></i>     | `<i class="ti ti-terminal-2"></i>`     | Lệnh dòng lệnh, CLI snippet      |
