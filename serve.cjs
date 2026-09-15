const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3300;
// Mặc định phục vụ thư mục chứa tệp này hoặc đường dẫn tùy biến
const ROOT = path.resolve(process.env.DOCS_ROOT || __dirname);
const ENABLE_LIVE_RELOAD = process.env.LIVE_RELOAD !== "false" && process.env.NO_RELOAD !== "1";

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

// --- Cấu hình Live Reload (SSE & File Watcher) ---
const sseClients = new Set();

const LIVE_RELOAD_SNIPPET = `
<!-- Live Reload Injected by serve.cjs -->
<script>
(function() {
  if (!window.EventSource) return;
  var es = new EventSource('/__livereload');
  es.onmessage = function(e) {
    if (e.data === 'reload') {
      console.log('[Spec UI] Phát hiện thay đổi tệp, đang tự động tải lại...');
      location.reload();
    }
  };
})();
</script>
`;

if (ENABLE_LIVE_RELOAD) {
  // Gửi heartbeat ping mỗi 30 giây để giữ kết nối SSE
  setInterval(() => {
    for (const client of sseClients) {
      client.write(": ping\n\n");
    }
  }, 30000).unref();

  const WATCH_EXTS = new Set([".md", ".css", ".html", ".js", ".json", ".svg", ".png", ".jpg", ".jpeg"]);

  let debounceTimer = null;
  function broadcastReload() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      for (const client of sseClients) {
        client.write("data: reload\n\n");
      }
    }, 150);
  }

  try {
    fs.watch(ROOT, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      const normalized = filename.replace(/\\/g, "/");
      // Bỏ qua thư mục hệ thống, git, node_modules, codegraph và tệp ẩn/backup
      if (
        normalized.includes(".git/") ||
        normalized.includes(".codegraph/") ||
        normalized.includes("node_modules/") ||
        normalized.startsWith(".git") ||
        normalized.startsWith(".codegraph") ||
        normalized.startsWith("node_modules") ||
        normalized.includes("/.") ||
        normalized.startsWith(".") ||
        normalized.endsWith("~") ||
        normalized.endsWith(".tmp") ||
        normalized.endsWith(".swp")
      ) {
        return;
      }
      const ext = path.extname(filename).toLowerCase();
      if (WATCH_EXTS.has(ext)) {
        broadcastReload();
      }
    });
  } catch (err) {
    console.warn("[Spec UI] Canh bao: Khong the khoi tao File Watcher tu dong:", err.message);
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://localhost:${PORT}`).pathname);
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=UTF-8" });
    return res.end("400 Bad Request: Malformed URI");
  }

  // Endpoint tiếp nhận kết nối Server-Sent Events (SSE)
  if (ENABLE_LIVE_RELOAD && pathname === "/__livereload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=UTF-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(": connected\n\n");
    sseClients.add(res);
    req.on("close", () => {
      sseClients.delete(res);
    });
    return;
  }

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

    // Tiêm động đoạn script Live Reload khi phục vụ trang index.html
    if (ENABLE_LIVE_RELOAD && pathname === "/index.html") {
      fs.readFile(filePath, "utf8", (readErr, content) => {
        if (readErr) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
          return res.end("500 Internal Server Error");
        }
        const injected = content.includes("</body>")
          ? content.replace("</body>", `${LIVE_RELOAD_SNIPPET}\n</body>`)
          : content + LIVE_RELOAD_SNIPPET;
        const buffer = Buffer.from(injected, "utf8");
        res.writeHead(200, {
          "Content-Type": "text/html; charset=UTF-8",
          "Content-Length": buffer.length,
        });
        res.end(buffer);
      });
      return;
    }

    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    const stream = fs.createReadStream(filePath);
    stream.on("error", (streamErr) => {
      if (!res.headersSent) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
        res.end("500 Read Stream Error");
      }
    });
    stream.pipe(res);
  });
});

server.on("error", (err) => {
  console.error("[Spec UI] Loi Server:", err.message);
});

process.on("uncaughtException", (err) => {
  console.error("[Spec UI] Loi He Thong (Uncaught):", err.message);
});

server.listen(PORT, () => {
  console.log(`[Spec UI] Tai lieu dang chay tai: http://localhost:${PORT}`);
  if (ENABLE_LIVE_RELOAD) {
    console.log(`[Spec UI] Live Reload: DANG BAT (Tu dong tai lai khi sua file)`);
  }
});
