// FleetGo – server mẫu, không cần cài thư viện.
// Chạy: node server.js  → http://localhost:8080
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, "public");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);

    if (url === "/api/health") {
      res.writeHead(200, { "Content-Type": TYPES[".json"] });
      return res.end(JSON.stringify({ ok: true, time: new Date().toISOString() }));
    }

    const filePath = path.join(PUBLIC_DIR, url === "/" ? "index.html" : url);
    if (!filePath.startsWith(PUBLIC_DIR)) {
      res.writeHead(403);
      return res.end("Forbidden");
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": TYPES[".html"] });
        return res.end("<h1>404</h1><p>Không tìm thấy trang.</p>");
      }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(filePath)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`FleetGo đang chạy: http://localhost:${PORT}`));
