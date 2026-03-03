const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject', '.webp': 'image/webp',
  '.webm': 'video/webm', '.mp4': 'video/mp4', '.txt': 'text/plain',
  '.xml': 'text/xml', '.map': 'application/json'
};

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'));

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let filePath = path.join(ROOT, url);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end(); return;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else if (!err && stats.isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      if (fs.existsSync(idx)) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(idx).pipe(res);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(indexHtml);
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    }
  });
}).listen(PORT, () => console.log('Listening on ' + PORT));
