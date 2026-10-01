const fs = require("node:fs/promises");
const path = require("node:path");

const siteRoot = path.resolve(process.cwd(), "outputs", "portfon-clone");
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".framercms": "application/octet-stream",
};

function send(res, status, contentType, body, method) {
  res.statusCode = status;
  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  if (method === "HEAD") return res.end();
  return res.end(body);
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).end("Method not allowed");
  }

  if (req.query.page === "404") {
    try {
      const body = await fs.readFile(path.join(siteRoot, "404", "index.html"));
      return send(res, 404, mimeTypes[".html"], body, req.method);
    } catch {
      return res.status(404).end("Not found");
    }
  }

  const relativeCmsPath = String(req.query.path || "").replace(/^\/+/, "");
  const cmsPath = `/cms/${relativeCmsPath}`;
  const rawRange = Array.isArray(req.query.range)
    ? req.query.range.join(",")
    : String(req.query.range || "");
  const requestedRanges = rawRange.split(",").map((value) => value.match(/^(\d+)-(\d+)$/));

  if (!relativeCmsPath || !rawRange || !requestedRanges.length || requestedRanges.some((range) => !range)) {
    return res.status(400).end("Invalid CMS range request");
  }

  try {
    const manifestText = await fs.readFile(path.join(siteRoot, "assets-manifest.json"), "utf8");
    const manifest = JSON.parse(manifestText.replace(/^\uFEFF/, ""));
    const chunks = [];

    for (const requestedRange of requestedRanges) {
      const start = Number(requestedRange[1]);
      const end = Number(requestedRange[2]);
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || end < start) {
        return res.status(400).end("Invalid CMS byte range");
      }

      const coveringAsset = manifest.assets.find((asset) => {
        if (asset.status !== "downloaded") return false;
        const sourceUrl = new URL(asset.url);
        if (sourceUrl.pathname !== cmsPath) return false;
        const sourceRange = sourceUrl.searchParams.get("range")?.match(/^(\d+)-(\d+)$/);
        return sourceRange && Number(sourceRange[1]) <= start && Number(sourceRange[2]) >= end;
      });

      if (!coveringAsset) return res.status(404).end("CMS range not captured");

      const fragmentPath = path.resolve(siteRoot, coveringAsset.localPath.replace(/^[/\\]+/, ""));
      if (!fragmentPath.startsWith(`${siteRoot}${path.sep}`)) return res.status(404).end("Not found");

      const bytes = await fs.readFile(fragmentPath);
      const sourceRange = new URL(coveringAsset.url).searchParams.get("range").match(/^(\d+)-(\d+)$/);
      const offset = start - Number(sourceRange[1]);
      const chunk = bytes.subarray(offset, offset + end - start + 1);
      if (chunk.length !== end - start + 1) return res.status(404).end("CMS range incomplete");
      chunks.push(chunk);
    }

    return send(res, 200, mimeTypes[".framercms"], Buffer.concat(chunks), req.method);
  } catch {
    return res.status(500).end("Unable to serve captured CMS data");
  }
};
