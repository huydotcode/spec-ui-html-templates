---
name: codebase-survey
description: Kỹ năng khảo sát sâu một codebase, phân tích package manifests, routing, database schemas, middleware, và phân rã hệ thống thành các Domain Bounded Contexts cho tài liệu Spec UI.
---

# Kỹ Năng: Khảo Sát Nền Tảng & Phân Rã Domain (`codebase-survey`)

Kỹ năng này hướng dẫn Agent cách quét toàn diện một dự án bất kỳ từ mã nguồn thực tế để chuẩn bị dữ liệu cho việc viết tài liệu đặc tả kiến trúc.

---

## 🎯 Quy Trình Thực Hiện Từng Bước

### Bước 1: Quét Manifest & Nhận Diện Tech Stack

1. Tìm kiếm và đọc các tệp cấu hình phụ thuộc ở thư mục gốc:
   - Node.js/TypeScript: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`
   - Golang: `go.mod`, `go.sum`
   - Python: `pyproject.toml`, `requirements.txt`, `Pipfile`
   - Java/Kotlin: `pom.xml`, `build.gradle`
   - Rust: `Cargo.toml`
   - PHP: `composer.json`
2. Trích xuất thông tin:
   - Runtime version (Node 20, Go 1.22, Python 3.11...).
   - Web/API Framework (NestJS, Express, FastAPI, Gin, Spring Boot...).
   - Database driver & ORM (Prisma, TypeORM, Mongoose, GORM, SQLAlchemy, Hibernate...).
   - Cache / Queue / Messaging (Redis, RabbitMQ, Kafka, BullMQ...).
   - Auth strategy (JWT, Passport, NextAuth, OAuth2, Session cookies...).

### Bước 2: Khảo Sát Routing & API Endpoints

1. Quét các thư mục thường chứa routes/controllers: `routes/`, `controllers/`, `api/`, `handlers/`, `src/modules/`.
2. Trích xuất:
   - Các HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`).
   - Đường dẫn URI và version prefix (ví dụ: `/api/v1/auth/login`, `/api/v2/orders`).
   - Middleware được áp dụng cho từng route (Auth guard, Role/Permission check, Rate limit, Body validator).

### Bước 3: Khảo Sát Cơ Sở Dữ Liệu & Thực Thể

1. Đọc các schema definitions:
   - `prisma/schema.prisma`
   - `src/**/*.entity.ts` hoặc `models/*.go` hoặc `*.sql`
2. Xác định các thực thể chính, trường dữ liệu quan trọng, khóa chính/ngoại, và các ràng buộc dữ liệu (Unique, Index, Cascade).

### Bước 4: Phân Rã Hệ Thống Thành 6–10 Domain Bounded Contexts

Nhóm các tính năng và module vào các phân vùng nghiệp vụ mạch lạc. Một cấu trúc khuyến nghị tiêu chuẩn gồm:

- `01-foundation` / `01-architecture`: Tổng quan kiến trúc, Tech stack, Quy ước, Cấu hình môi trường.
- `02-identity` / `02-auth`: Đăng ký, Đăng nhập, Quản lý phiên làm việc, Phân quyền RBAC.
- `03..08-core-domains`: Các domain nghiệp vụ lõi của dự án (ví dụ: `03-billing`, `04-catalog`, `05-ordering`, `06-notification`, `07-analytics`...).
- `09-infrastructure` / `09-operations`: CI/CD, Deployment, Monitoring, Logging, Docker, Kubernetes.

### Bước 5: Cập Nhật Navigation & Bảng Ma Trận Tổng Quan

1. Khởi tạo cây thư mục tài liệu tương ứng với các Bounded Contexts đã xác định.
2. Cập nhật `_sidebar.md` và `_navbar.md` với danh mục chương và các bài viết con.
3. Cập nhật bảng System Profile Matrix tại `README.md`.
