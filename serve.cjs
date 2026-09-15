const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3300;
// Mặc định phục vụ thư mục chứa tệp này hoặc đường dẫn tùy biến
const ROOT = path.resolve(process.env.DOCS_ROOT || __dirname);

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".mjs": "application/javascript; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".md": "text/markdown; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let pathname = decodeURIComponent(new URL(req.url, `http://localhost:${PORT}`).pathname);
  if (pathname === "/") pathname = "/index.html";
  const filePath = path.normalize(path.join(ROOT, pathname));

  // Chống Directory Traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=UTF-8" });
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
      return res.end("404 Not Found");
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Tài liệu đang chạy tại: http://localhost:${PORT}`);
});
