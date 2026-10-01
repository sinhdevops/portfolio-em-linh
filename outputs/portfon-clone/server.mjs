import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const manifestText = (await readFile(path.join(root, "assets-manifest.json"), "utf8")).replace(/^\uFEFF/, "");
const assetManifest = JSON.parse(manifestText);
const replaceFramerCdn = (input) => {
  const source = Buffer.from("https://framerusercontent.com");
  const local = Buffer.from("http://127.0.0.1:3000/assets/");
  if (source.length !== local.length) throw new Error("CDN rewrite must preserve byte length");
  const output = Buffer.from(input);
  let index = output.indexOf(source);
  while (index !== -1) {
    local.copy(output, index);
    index = output.indexOf(source, index + source.length);
  }
  return output;
};
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".framercms": "application/octet-stream",
};

createServer(async (req, res) => {
  let pathname;
  let search;
  try {
    const requestUrl = new URL(req.url, "http://localhost");
    pathname = decodeURIComponent(requestUrl.pathname);
    search = requestUrl.search;
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  const relative = pathname.replace(/^[/\\]+/, "") || "index.html";
  let file = path.resolve(root, relative);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  if (!path.extname(file)) file = path.join(file, "index.html");

  let responseBody;
  if (search && file.startsWith(path.join(root, "assets", "cms") + path.sep)) {
    const requestedRanges = new URLSearchParams(search).get("range")?.split(",").map((value) => value.match(/^(\d+)-(\d+)$/));
    if (requestedRanges?.length && requestedRanges.every(Boolean)) {
      const pathnameForAssets = path.posix.normalize(pathname.slice("/assets".length));
      const chunks = [];
      let coveredAll = true;
      for (const requestedRange of requestedRanges) {
        const start = Number(requestedRange[1]);
        const end = Number(requestedRange[2]);
        const covering = assetManifest.assets.find((asset) => {
          if (asset.status !== "downloaded") return false;
          const assetUrl = new URL(asset.url);
          if (assetUrl.pathname !== pathnameForAssets) return false;
          const range = new URLSearchParams(assetUrl.search).get("range")?.match(/^(\d+)-(\d+)$/);
          return range && Number(range[1]) <= start && Number(range[2]) >= end;
        });
        if (!covering) { coveredAll = false; break; }
        const source = path.resolve(root, covering.localPath.replace(/^[/\\]+/, ""));
        const bytes = await readFile(source);
        const sourceRange = new URL(covering.url).searchParams.get("range").match(/^(\d+)-(\d+)$/);
        const offset = start - Number(sourceRange[1]);
        const chunk = bytes.subarray(offset, offset + (end - start + 1));
        if (chunk.length !== end - start + 1) { coveredAll = false; break; }
        chunks.push(chunk);
      }
      if (coveredAll) responseBody = replaceFramerCdn(Buffer.concat(chunks));
    }
  }

  if (!responseBody && search && file.startsWith(path.join(root, "assets") + path.sep)) {
    const extension = path.extname(file);
    const digest = createHash("sha256").update(search).digest("hex").slice(0, 10);
    const candidate = file.slice(0, -extension.length) + `_${digest}` + extension;
    try {
      await readFile(candidate);
      file = candidate;
    } catch {
      // A runtime can request an unobserved size; fall through to its unvaried asset path.
    }
  }

  let status = pathname.replace(/\/+$/, "") === "/404" ? 404 : 200;
  try {
    const body = responseBody || await readFile(file);
    res.writeHead(status, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(body);
  } catch {
    status = 404;
    try {
      const body = await readFile(path.join(root, "404", "index.html"));
      res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
      res.end(body);
    } catch {
      res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    }
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Portfon clone available at http://localhost:${port}`);
});
