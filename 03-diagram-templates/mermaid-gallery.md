# Thư Viện 5 Mẫu Sơ Đồ Mermaid Chuẩn Hóa

<span class="status-label stable">Mermaid Engine v10 (Fit-to-Frame 100%)</span>

Tất cả các sơ đồ dưới đây đều được tích hợp tự động với:

- **Bộ lọc Auto-Sanitizer**: Khử sạch nút copy-code gây lỗi cú pháp (Syntax error in text).
- **Thanh công cụ Smart Toolbar**: Nút chuyển đổi 1-click giữa **🔍 Xem kích thước gốc** (cuộn ngang từ lề trái không bị cắt chữ) và **📐 Thu vừa khung**.
- **Thao tác nhấp đúp (Double-Click)**: Nhấp đúp chuột trực tiếp vào sơ đồ để chuyển đổi nhanh.
- **Fullscreen Modal chuẩn Figma/Miro**: Cuộn chuột phóng to/thu nhỏ, kéo chuột lia sơ đồ (Pan), phím tắt bàn phím `Esc`, `+`, `-`, `0`.

---

## 1. Mẫu 1: Sơ Đồ Trường Hợp Sử Dụng (Use Case Diagram)

Phù hợp cho việc mô tả các tác nhân bên ngoài (Actors) và các chức năng chính của hệ thống.

<div class="diagram-wrapper">
  <pre class="mermaid">
graph TB
  classDef actor fill:#eef2ff,stroke:#6366f1,stroke-width:1.5px,rx:10px,ry:10px;
  classDef uc fill:#ecfdf5,stroke:#10b981,stroke-width:1.5px,rx:8px,ry:8px;

subgraph Actors ["Tác nhân bên ngoài"]
Guest((Guest / Khách)):::actor
User((User / Thành viên)):::actor
Admin((Admin / Quản trị viên)):::actor
end

subgraph System ["Hệ Thống Phần Mềm Của Bạn"]
UC1[UC01: Đăng ký + Xác thực OTP]:::uc
UC2[UC02: Đăng nhập sinh trắc học / Khuôn mặt]:::uc
UC3[UC03: Gửi tin nhắn Realtime qua Socket]:::uc
UC4[UC04: Đăng tải phương tiện Media lên Cloud]:::uc
UC5[UC05: Báo cáo thống kê tài nguyên hệ thống]:::uc
end

Guest --> UC1
User --> UC2
User --> UC3
User --> UC4
Admin --> UC5

  </pre>
  <div class="diagram-caption">Hình 1.1: Sơ đồ Use Case tổng quát phân quyền theo tác nhân</div>
</div>

---

## 2. Mẫu 2: Sơ Đồ Kiến Trúc 3 Tầng (3-Layer Architecture Diagram)

Phù hợp cho việc biểu diễn phân tầng Presentation, Gateway, Microservices và Data Storage.

<div class="diagram-wrapper">
  <pre class="mermaid">
graph TD
  classDef client fill:#eef2ff,stroke:#6366f1,stroke-width:1.5px,rx:8px,ry:8px;
  classDef gateway fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,rx:8px,ry:8px;
  classDef service fill:#ecfdf5,stroke:#10b981,stroke-width:1.5px,rx:8px,ry:8px;
  classDef database fill:#fafaf9,stroke:#78716c,stroke-width:1.5px,rx:6px,ry:6px;

subgraph Clients [Tầng Client / Presentation Layer]
Web[React SPA Web App]:::client
Mobile[React Native Mobile App]:::client
end

subgraph GatewayLayer [Tầng Gateway & Reverse Proxy]
CloudFront[Amazon CloudFront CDN]:::gateway
APIGW[API Gateway / Load Balancer]:::gateway
end

subgraph Services [Tầng Microservices / Business Logic]
AuthService[Authentication Service]:::service
ChatService[Chat & Messaging Service]:::service
MediaService[Media Storage Service]:::service
end

subgraph Storage [Tầng Cơ Sở Dữ Liệu & Bộ Nhớ Đệm]
DDB[(DynamoDB Tables)]:::database
Redis[(Redis Cache Server)]:::database
S3[(Amazon S3 File Bucket)]:::database
end

Web & Mobile --> CloudFront
CloudFront --> APIGW
APIGW --> AuthService & ChatService & MediaService
AuthService --> Redis
ChatService --> DDB
MediaService --> S3 & DDB

  </pre>
  <div class="diagram-caption">Hình 1.2: Kiến trúc 3 tầng tổng thể của hệ thống phân tán</div>
</div>

---

## 3. Mẫu 3: Sơ Đồ Triển Khai Hạ Tầng Mạng (Deployment Diagram trên AWS)

Phù hợp cho việc mô tả cấu hình VPC, Public/Private Subnet, cân bằng tải và bảo mật máy chủ.

<div class="diagram-wrapper">
  <pre class="mermaid">
graph LR
  classDef client fill:#eef2ff,stroke:#6366f1,stroke-width:1.5px,rx:8px,ry:8px;
  classDef gateway fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,rx:8px,ry:8px;
  classDef service fill:#ecfdf5,stroke:#10b981,stroke-width:1.5px,rx:8px,ry:8px;
  classDef database fill:#fafaf9,stroke:#78716c,stroke-width:1.5px,rx:6px,ry:6px;

subgraph AWS_Cloud [AWS Cloud Infrastructure]
subgraph VPC [VPC Mạng Cô Lập: 10.0.0.0/16]
subgraph Public_Subnet [Public Subnet - Internet Facing]
ALB[Application Load Balancer]:::gateway
end
subgraph Private_Subnet [Private Subnet - App & Data Nodes]
EC2[EC2 Container Cluster - App Server]:::service
Cache[(Redis Cache Server Cluster)]:::database
end
end
S3[(Amazon S3 Media Storage)]:::database
DDB[(Amazon DynamoDB Managed Service)]:::database
end

UserApp[User Browser / App Client]:::client -->|Yêu cầu HTTPS| ALB
ALB -->|Forward Port 8080| EC2
EC2 -->|Lưu trữ / Đọc Session| Cache
EC2 -->|Ghi nhận Metadata| DDB
EC2 -->|Upload trực tiếp Media| S3

  </pre>
  <div class="diagram-caption">Hình 1.3: Sơ đồ triển khai hạ tầng vật lý trên Amazon Web Services</div>
</div>

---

## 4. Mẫu 4: Sơ Đồ Trình Tự Giao Tiếp Mạng (WebSocket Sequence Diagram)

Phù hợp cho việc biểu diễn các tương tác tuần tự thời gian thực giữa Người dùng, Client, Gateway và Microservices.

<div class="diagram-wrapper">
  <pre class="mermaid">
sequenceDiagram
  autonumber
  actor User as Người dùng
  participant APP as Mobile Client (React Native)
  participant GW as API Gateway (Port 8080)
  participant MSG as Chat Microservice
  participant DB as DynamoDB / Message Store

User->>APP: Nhấn nút gửi tin nhắn
APP->>GW: Gửi thông điệp WebSocket (send_message payload)
GW->>MSG: Điều phối thông điệp tới xử lý Chat
MSG->>DB: Lưu trữ tin nhắn vào bảng Messages
DB-->>MSG: Xác nhận đã ghi thành công (200 OK)
MSG-->>APP: Phản hồi WebSocket: Ack (msgId, status: SENT)
APP-->>User: Hiển thị dấu tích đã gửi thành công (✓)

  </pre>
  <div class="diagram-caption">Hình 1.4: Trình tự xử lý gửi tin nhắn thời gian thực qua WebSocket</div>
</div>

---

## 5. Mẫu 5: Sơ Đồ Hoạt Động Rẽ Nhánh Logic (Activity Diagram - OTP SMS)

Phù hợp cho việc biểu diễn logic nghiệp vụ, các bước kiểm tra điều kiện và xử lý lỗi.

<div class="diagram-wrapper">
  <pre class="mermaid">
flowchart TD
  classDef endpoint fill:#ecfdf5,stroke:#10b981,stroke-width:1.5px,rx:20px,ry:20px;
  classDef step fill:#eef2ff,stroke:#6366f1,stroke-width:1.5px,rx:8px,ry:8px;
  classDef branch fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,rx:6px,ry:6px;

Start([Bắt đầu]):::endpoint --> InputPhone[Nhập số điện thoại đăng nhập]:::step
InputPhone --> ClickSend[Nhấn nhận mã xác thực OTP]:::step
ClickSend --> SendSMS[Hệ thống phát mã OTP 6 chữ số qua SMS]:::step
SendSMS --> InputOTP[Người dùng nhập mã OTP]:::step
InputOTP --> CheckOTP{Kiểm tra mã OTP hợp lệ?}:::branch
CheckOTP -->|Khớp & Còn hiệu lực| Success[Đăng nhập thành công]:::step
CheckOTP -->|Sai mã / Đã hết hạn| ShowError[Hiển thị thông báo lỗi và yêu cầu thử lại]:::step
ShowError --> InputOTP
Success --> CreateSession[Khởi tạo phiên làm việc và chuyển hướng]:::step
CreateSession --> End([Kết thúc quy trình]):::endpoint

  </pre>
  <div class="diagram-caption">Hình 1.5: Sơ đồ luồng hoạt động đăng nhập qua mã xác thực OTP SMS</div>
</div>
