'use strict';
// WORKNOTE: cổng báo cáo nội bộ (bản chạy thử). Không cần cài gói ngoài. Cần Node 22 trở lên.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '127.0.0.1'; // chỉ máy này truy cập được; đổi HOST khi cần mở cho mạng nội bộ
const PUBLIC = path.join(__dirname, 'public');
const DATA = process.env.DATA_DIR || path.join(__dirname, 'data');
const UPLOADS = path.join(DATA, 'uploads');
fs.mkdirSync(UPLOADS, { recursive: true });

const STATUSES = ['Hoàn thành', 'Đang thực hiện', 'Chờ duyệt', 'Có vướng mắc'];
const MAX_FILE = 25 * 1024 * 1024;
const ALLOWED = new Set(['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.ppt', '.pptx', '.txt', '.png', '.jpg', '.jpeg', '.gif']);
const MIME = {
  '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
};

const db = new DatabaseSync(path.join(DATA, 'worknote.db'));
db.exec(`
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS reports(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL, project TEXT NOT NULL, reporter TEXT NOT NULL,
  report_date TEXT NOT NULL, work TEXT NOT NULL,
  blockers TEXT NOT NULL DEFAULT '', plan TEXT NOT NULL DEFAULT '', link TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS files(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  report_id INTEGER NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  name TEXT NOT NULL, stored TEXT NOT NULL, size INTEGER NOT NULL, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS comments(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  report_id INTEGER NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  author TEXT NOT NULL, body TEXT NOT NULL, created_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_reports_date ON reports(report_date);
`);

const pad = (n) => String(n).padStart(2, '0');
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const daysAgo = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return ymd(d); };
const code = (id) => `BR-${String(id).padStart(5, '0')}`;
const nowIso = () => new Date().toISOString();
const clip = (s, n) => String(s ?? '').trim().slice(0, n);

function seed() {
  if (process.argv.includes('--empty')) return;
  if (db.prepare('SELECT COUNT(*) c FROM reports').get().c > 0) return;
  const ins = db.prepare('INSERT INTO reports(title,project,reporter,report_date,work,blockers,plan,link,status,created_at) VALUES (?,?,?,?,?,?,?,?,?,?)');
  const rows = [
    [3, 'WMS Philippines', 'Trần Thị Mai', 'Hoàn thành', 'Hoàn thiện module nhập kho\nFix lỗi hiển thị trên mobile\nTrao đổi với team PH về test case', '', 'Chạy test nội bộ vòng 2'],
    [2, 'Marketing', 'Lê Hoàng', 'Đang thực hiện', 'Triển khai chiến dịch Q2\nThiết kế 3 banner sản phẩm\nPhân tích hiệu quả ads tuần trước', '', 'Chạy A/B hai banner'],
    [2, 'WMS Philippines', 'Nguyễn Đức', 'Hoàn thành', 'Họp với đối tác PH về UAT\nCập nhật tài liệu hướng dẫn\nLên kế hoạch triển khai giai đoạn 2', '', ''],
    [1, 'Marketing', 'Phạm Thùy', 'Chờ duyệt', 'Báo cáo hiệu suất kênh Facebook\nTối ưu ngân sách quảng cáo\nChuẩn bị nội dung cho tuần tới', '', ''],
    [1, 'Sản phẩm', 'Lê Quân', 'Có vướng mắc', 'Rà soát yêu cầu tính năng mới\nLàm việc với team thiết kế UI/UX\nCập nhật tiến độ sprint', 'Chưa có bản thiết kế cuối cùng để chốt yêu cầu', 'Họp chốt thiết kế'],
  ];
  rows.forEach(([ago, project, reporter, status, work, blockers, plan], i) => {
    const d = daysAgo(ago);
    const d2 = new Date(); d2.setDate(d2.getDate() - ago); d2.setHours(9 + i, 10 + i * 7, 0, 0);
    ins.run(`Báo cáo ngày ${d.split('-').reverse().join('/')}`, project, reporter, d, work, blockers, plan, '', status, d2.toISOString());
  });
}
seed();

// ---------- tiện ích HTTP ----------
function send(res, code_, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code_, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(body);
}
function readJson(req, limit = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (c) => { size += c.length; if (size > limit) { reject(Object.assign(new Error('Dữ liệu quá lớn'), { status: 413 })); req.destroy(); } else chunks.push(c); });
    req.on('end', () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); } catch { reject(Object.assign(new Error('JSON không hợp lệ'), { status: 400 })); } });
    req.on('error', reject);
  });
}
const fail = (res, status, msg) => send(res, status, { error: msg });

function reportRow(r) { return { ...r, code: code(r.id) }; }
function fileRow(f) { return { id: f.id, name: f.name, size: f.size, created_at: f.created_at }; }

// ---------- API ----------
async function api(req, res, url) {
  const m = req.method;
  const p = url.pathname;
  let mm;

  if (m === 'GET' && p === '/api/summary') {
    const today = daysAgo(0), yest = daysAgo(1);
    const cnt = (sql, ...a) => db.prepare(sql).get(...a).c;
    const t = cnt('SELECT COUNT(*) c FROM reports WHERE report_date=?', today);
    const y = cnt('SELECT COUNT(*) c FROM reports WHERE report_date=?', yest);
    const bt = cnt("SELECT COUNT(*) c FROM reports WHERE report_date=? AND status='Có vướng mắc'", today);
    const by = cnt("SELECT COUNT(*) c FROM reports WHERE report_date=? AND status='Có vướng mắc'", yest);
    const projects = cnt('SELECT COUNT(DISTINCT project) c FROM reports');
    const active = cnt("SELECT COUNT(DISTINCT project) c FROM reports WHERE status='Đang thực hiện' AND report_date>=?", daysAgo(7));
    return send(res, 200, { today: t, todayDelta: t - y, blockers: bt, blockersDelta: bt - by, projects, active });
  }
  if (m === 'GET' && p === '/api/projects') {
    const rows = db.prepare('SELECT DISTINCT project FROM reports ORDER BY project').all().map((r) => r.project);
    return send(res, 200, { projects: rows });
  }
  if (m === 'GET' && p === '/api/reports') {
    const q = clip(url.searchParams.get('q'), 100), project = clip(url.searchParams.get('project'), 100);
    const date = clip(url.searchParams.get('date'), 10), status = clip(url.searchParams.get('status'), 30);
    const limit = Math.min(Number(url.searchParams.get('limit')) || 200, 500);
    const where = [], args = [];
    if (q) { where.push('(title LIKE ? OR project LIKE ? OR reporter LIKE ? OR work LIKE ?)'); const l = `%${q}%`; args.push(l, l, l, l); }
    if (project) { where.push('project=?'); args.push(project); }
    if (date) { where.push('report_date=?'); args.push(date); }
    if (status) { where.push('status=?'); args.push(status); }
    const sql = `SELECT * FROM reports ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY report_date DESC, created_at DESC LIMIT ?`;
    const rows = db.prepare(sql).all(...args, limit).map(reportRow);
    const fc = db.prepare('SELECT report_id, COUNT(*) c FROM files GROUP BY report_id').all();
    const map = new Map(fc.map((r) => [r.report_id, r.c]));
    rows.forEach((r) => { r.file_count = map.get(r.id) || 0; });
    return send(res, 200, { reports: rows });
  }
  if (m === 'POST' && p === '/api/reports') {
    const b = await readJson(req);
    const rep = {
      reporter: clip(b.reporter, 80), project: clip(b.project, 80), date: clip(b.report_date, 10),
      status: clip(b.status, 30), work: clip(b.work, 1000), blockers: clip(b.blockers, 1000),
      plan: clip(b.plan, 1000), link: clip(b.link, 500), title: clip(b.title, 150),
    };
    if (!rep.reporter) return fail(res, 400, 'Vui lòng nhập người báo cáo');
    if (!rep.project) return fail(res, 400, 'Vui lòng chọn dự án / bộ phận');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(rep.date)) return fail(res, 400, 'Ngày báo cáo không hợp lệ');
    if (!STATUSES.includes(rep.status)) return fail(res, 400, 'Trạng thái không hợp lệ');
    if (!rep.work) return fail(res, 400, 'Vui lòng nhập công việc đã thực hiện');
    if (rep.link && !/^https?:\/\//i.test(rep.link)) return fail(res, 400, 'Link tài liệu phải bắt đầu bằng http:// hoặc https://');
    if (!rep.title) rep.title = `Báo cáo ngày ${rep.date.split('-').reverse().join('/')}`;
    const r = db.prepare('INSERT INTO reports(title,project,reporter,report_date,work,blockers,plan,link,status,created_at) VALUES (?,?,?,?,?,?,?,?,?,?)')
      .run(rep.title, rep.project, rep.reporter, rep.date, rep.work, rep.blockers, rep.plan, rep.link, rep.status, nowIso());
    const id = Number(r.lastInsertRowid);
    return send(res, 201, { id, code: code(id) });
  }
  if ((mm = p.match(/^\/api\/reports\/(\d+)$/)) && m === 'GET') {
    const r = db.prepare('SELECT * FROM reports WHERE id=?').get(Number(mm[1]));
    if (!r) return fail(res, 404, 'Không tìm thấy báo cáo');
    const files = db.prepare('SELECT * FROM files WHERE report_id=? ORDER BY id').all(r.id).map(fileRow);
    const comments = db.prepare('SELECT * FROM comments WHERE report_id=? ORDER BY id').all(r.id);
    return send(res, 200, { report: reportRow(r), files, comments });
  }
  if ((mm = p.match(/^\/api\/reports\/(\d+)\/comments$/)) && m === 'POST') {
    const id = Number(mm[1]);
    if (!db.prepare('SELECT 1 FROM reports WHERE id=?').get(id)) return fail(res, 404, 'Không tìm thấy báo cáo');
    const b = await readJson(req);
    const author = clip(b.author, 80), body = clip(b.body, 1000);
    if (!author) return fail(res, 400, 'Vui lòng nhập tên người phản hồi');
    if (!body) return fail(res, 400, 'Vui lòng nhập nội dung phản hồi');
    db.prepare('INSERT INTO comments(report_id,author,body,created_at) VALUES (?,?,?,?)').run(id, author, body, nowIso());
    return send(res, 201, { ok: true });
  }
  if ((mm = p.match(/^\/api\/reports\/(\d+)\/files$/)) && m === 'POST') {
    const id = Number(mm[1]);
    if (!db.prepare('SELECT 1 FROM reports WHERE id=?').get(id)) return fail(res, 404, 'Không tìm thấy báo cáo');
    let name = '';
    try { name = decodeURIComponent(String(req.headers['x-filename'] || '')); } catch { /* bỏ qua */ }
    name = path.basename(name).replace(/[\u0000-\u001f<>:"/\\|?*]/g, '_').slice(0, 150);
    const ext = path.extname(name).toLowerCase();
    if (!name || !ALLOWED.has(ext)) return fail(res, 400, `Loại file không được phép (${ext || 'không rõ'})`);
    const declared = Number(req.headers['content-length'] || 0);
    if (declared > MAX_FILE) return fail(res, 413, 'File quá lớn (tối đa 25 MB)');
    const stored = crypto.randomBytes(16).toString('hex') + ext;
    const dest = path.join(UPLOADS, stored);
    const out = fs.createWriteStream(dest, { flags: 'wx' });
    let size = 0, aborted = false;
    req.on('data', (c) => { size += c.length; if (size > MAX_FILE && !aborted) { aborted = true; out.destroy(); req.unpipe(out); fs.rm(dest, { force: true }, () => {}); fail(res, 413, 'File quá lớn (tối đa 25 MB)'); } });
    req.pipe(out);
    out.on('finish', () => {
      if (aborted) return;
      db.prepare('INSERT INTO files(report_id,name,stored,size,created_at) VALUES (?,?,?,?,?)').run(id, name, stored, size, nowIso());
      send(res, 201, { ok: true });
    });
    out.on('error', () => { if (!aborted) fail(res, 500, 'Không lưu được file'); });
    return;
  }
  if ((mm = p.match(/^\/api\/files\/(\d+)$/)) && m === 'GET') {
    const f = db.prepare('SELECT * FROM files WHERE id=?').get(Number(mm[1]));
    if (!f) return fail(res, 404, 'Không tìm thấy file');
    const file = path.join(UPLOADS, f.stored);
    if (!fs.existsSync(file)) return fail(res, 404, 'File đã bị xóa khỏi máy chủ');
    const ext = path.extname(f.stored).toLowerCase();
    const inline = url.searchParams.get('inline') === '1' && ['.pdf', '.txt', '.png', '.jpg', '.jpeg', '.gif'].includes(ext);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': f.size,
      'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename*=UTF-8''${encodeURIComponent(f.name)}`,
      'X-Content-Type-Options': 'nosniff',
    });
    return fs.createReadStream(file).pipe(res);
  }
  return fail(res, 404, 'Không tìm thấy');
}

function serveStatic(req, res, url) {
  let rel = decodeURIComponent(url.pathname);
  if (rel === '/') rel = '/index.html';
  const file = path.normalize(path.join(PUBLIC, rel));
  if (!file.startsWith(PUBLIC + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(buf);
  });
}

http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return await api(req, res, url);
    if (req.method !== 'GET') { res.writeHead(405); return res.end(); }
    return serveStatic(req, res, url);
  } catch (e) {
    if (!res.headersSent) fail(res, e.status || 500, e.status ? e.message : 'Lỗi máy chủ');
    else res.end();
    if (!e.status) console.error(e);
  }
}).listen(PORT, HOST, () => console.log(`WORKNOTE chạy tại http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`));
