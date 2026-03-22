import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "dist");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

function getContentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
}

function resolvePath(urlPath) {
  const cleaned = decodeURIComponent(urlPath.split("?")[0]);
  const filePath = path.resolve(root, `.${cleaned}`);
  if (!filePath.startsWith(root)) return null;
  return filePath;
}

const server = http.createServer(async (req, res) => {
  try {
    const requestPath = resolvePath(req.url || "/");
    if (!requestPath) {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }

    let filePath = requestPath;
    let stats;

    try {
      stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        filePath = path.join(filePath, "index.html");
        stats = await fs.stat(filePath);
      }
    } catch {
      filePath = path.join(root, "index.html");
      stats = await fs.stat(filePath);
    }

    const data = await fs.readFile(filePath);
    res.writeHead(200, {
      "Content-Type": getContentType(filePath),
      "Content-Length": data.byteLength,
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Static dist server running at http://${host}:${port}/`);
});
