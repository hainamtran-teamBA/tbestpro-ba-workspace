(() => {
'use strict';

const STATUSES = ['Hoàn thành', 'Đang thực hiện', 'Chờ duyệt', 'Có vướng mắc'];
const STATUS_CLASS = { 'Hoàn thành': 'ok', 'Đang thực hiện': 'doing', 'Chờ duyệt': 'wait', 'Có vướng mắc': 'bad' };
const DEFAULT_PROJECTS = ['WMS Philippines', 'Marketing', 'Sản phẩm', 'Kho', 'SMS'];
const MAX_FILE = 25 * 1024 * 1024;
const ALLOWED = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.ppt', '.pptx', '.txt', '.png', '.jpg', '.jpeg', '.gif'];

const P = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  plus: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
  plusSm: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  clip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  dots: '<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',
  chev: '<polyline points="9 18 15 12 9 6"/>',
};
const ic = (n, s = 20) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (sel, root = document) => root.querySelector(sel);

const state = { route: 'overview', filters: { q: '', project: '', date: '', status: '' }, projects: [] };

// ---------- tiện ích ----------
const getName = () => { try { return localStorage.getItem('worknote_name') || ''; } catch { return ''; } };
const setName = (n) => { try { localStorage.setItem('worknote_name', n); } catch { /* bỏ qua */ } };
const initials = (n) => (String(n).trim().split(/\s+/).slice(-2).map((w) => w[0]).join('') || '?').toUpperCase();
const fmtDate = (d) => (d || '').split('-').reverse().join('/');
const fmtTime = (iso) => { const d = new Date(iso); return isNaN(d) ? '' : d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); };
const fmtDateTime = (iso) => { const d = new Date(iso); return isNaN(d) ? '' : `${d.toLocaleDateString('vi-VN')} ${fmtTime(iso)}`; };
const fmtSize = (b) => (b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB');
const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const lines = (t) => String(t || '').split('\n').map((l) => l.replace(/^\s*[-•*]\s*/, '').trim()).filter(Boolean);
const bullets = (t, max) => { const l = lines(t); const shown = max ? l.slice(0, max) : l; return shown.length ? `<ul>${shown.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''; };
const pill = (s) => `<span class="pill ${STATUS_CLASS[s] || 'wait'}">${esc(s)}</span>`;

async function api(path, opts = {}) {
  const res = await fetch(path, opts);
  let data = null;
  try { data = await res.json(); } catch { /* không phải JSON */ }
  if (!res.ok) throw new Error((data && data.error) || `Lỗi ${res.status}`);
  return data;
}
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('show'), 3200); }

// ---------- khung ----------
function drawChrome() {
  $('#nav-overview').innerHTML = `${ic('home')}<span>Tổng quan</span>`;
  $('#nav-reports').innerHTML = `${ic('file')}<span>Báo cáo</span>`;
  $('#nav-create').innerHTML = `${ic('plus')}<span>Tạo báo cáo</span>`;
  $('#nav-settings').innerHTML = `${ic('gear')}<span>Cài đặt</span>`;
  $('#bell').innerHTML = ic('bell', 22);
  const n = getName();
  $('#hello').textContent = n || 'Bạn';
  $('#hello-date').textContent = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('#user-chip').innerHTML = `<span class="avatar">${esc(initials(n || 'B'))}</span><span>${esc(n || 'Nhập tên')}</span>`;
  document.querySelectorAll('nav a').forEach((a) => a.classList.toggle('active', a.dataset.nav === state.route));
}

// ---------- danh sách ----------
function filtersHtml() {
  const f = state.filters;
  const projects = [...new Set([...DEFAULT_PROJECTS, ...state.projects])].sort();
  return `<div class="filters">
    <label class="field">${ic('search', 18)}<input id="f-q" type="search" placeholder="Tìm kiếm báo cáo, dự án, người thực hiện..." value="${esc(f.q)}"></label>
    <label class="field">${ic('folder', 18)}<select id="f-project"><option value="">Dự án</option>${projects.map((p) => `<option ${p === f.project ? 'selected' : ''}>${esc(p)}</option>`).join('')}</select></label>
    <label class="field">${ic('cal', 18)}<input id="f-date" type="date" value="${esc(f.date)}"></label>
    <label class="field"><select id="f-status"><option value="">Trạng thái</option>${STATUSES.map((s) => `<option ${s === f.status ? 'selected' : ''}>${esc(s)}</option>`).join('')}</select></label>
  </div>`;
}
function rowsHtml(reports) {
  if (!reports.length) return `<tr><td colspan="6"><div class="empty">Chưa có báo cáo nào khớp. Bấm “Tạo báo cáo” để bắt đầu.</div></td></tr>`;
  return reports.map((r) => `<tr class="row" data-id="${r.id}">
    <td><div class="rt">${esc(r.title)}</div>${r.file_count ? `<div class="rc"><span class="clipn" style="margin-left:0">${ic('clip', 13)}${r.file_count} file đính kèm</span></div>` : ''}</td>
    <td><span class="chip">${ic('folder', 16)}${esc(r.project)}</span></td>
    <td>${bullets(r.work, 3)}</td>
    <td><div class="person"><span class="avatar">${esc(initials(r.reporter))}</span>${esc(r.reporter)}</div></td>
    <td class="dt">${esc(fmtDate(r.report_date))}<small>${esc(fmtTime(r.created_at))}</small></td>
    <td>${pill(r.status)}</td></tr>`).join('');
}
function tableHtml(title, link) {
  return `<div class="tablecard"><div class="tablehead"><h2>${esc(title)}</h2>${link || ''}</div>
    <table><thead><tr><th>Tiêu đề báo cáo</th><th>Dự án</th><th>Tóm tắt công việc</th><th>Người thực hiện</th><th>Ngày báo cáo</th><th>Trạng thái</th></tr></thead>
    <tbody id="rows"><tr><td colspan="6"><div class="empty">Đang tải…</div></td></tr></tbody></table></div>`;
}
async function loadRows(limit) {
  const f = state.filters;
  const qs = new URLSearchParams({ ...f, limit: String(limit || 200) });
  try {
    const { reports } = await api('/api/reports?' + qs);
    $('#rows').innerHTML = rowsHtml(reports);
    $('#rows').querySelectorAll('tr.row').forEach((tr) => tr.addEventListener('click', () => openDetail(Number(tr.dataset.id))));
  } catch (e) { $('#rows').innerHTML = `<tr><td colspan="6"><div class="empty">${esc(e.message)}</div></td></tr>`; }
}
function bindFilters(limit) {
  let h;
  const upd = () => { state.filters = { q: $('#f-q').value.trim(), project: $('#f-project').value, date: $('#f-date').value, status: $('#f-status').value }; loadRows(limit); };
  $('#f-q').addEventListener('input', () => { clearTimeout(h); h = setTimeout(upd, 250); });
  ['#f-project', '#f-date', '#f-status'].forEach((s) => $(s).addEventListener('change', upd));
}

// ---------- màn hình ----------
async function renderOverview() {
  $('#view').innerHTML = `<div class="panel"><div class="headrow"><div><h1>Tổng quan công việc</h1><div class="sub">Theo dõi tiến độ, báo cáo và các vấn đề trong công việc</div></div>
      <button class="btn" id="btn-create">${ic('plusSm')}Tạo báo cáo</button></div></div>
    <div class="cards" id="cards"></div>${filtersHtml()}${tableHtml('Danh sách báo cáo')}`;
  $('#btn-create').addEventListener('click', openCreate);
  bindFilters(200);
  loadRows(200);
  try {
    const s = await api('/api/summary');
    $('#cards').innerHTML = `
      <button class="stat" data-go="today"><span class="ico">${ic('file', 30)}</span><span><div class="lbl">Báo cáo hôm nay</div><div class="num">${s.today}</div></span></button>
      <button class="stat" data-go="bad"><span class="ico">${ic('alert', 30)}</span><span><div class="lbl">Có vướng mắc</div><div class="num">${s.blockers}</div></span></button>
      <button class="stat" data-go="projects"><span class="ico">${ic('folder', 30)}</span><span><div class="lbl">Dự án</div><div class="num">${s.projects}<span class="delta">${s.active} đang thực hiện</span></div></span></button>`;
    $('#cards').querySelectorAll('.stat').forEach((b) => b.addEventListener('click', () => {
      const g = b.dataset.go;
      state.filters = { q: '', project: '', date: g === 'today' ? todayStr() : '', status: g === 'bad' ? 'Có vướng mắc' : '' };
      renderOverview();
    }));
  } catch (e) { $('#cards').innerHTML = ''; }
}
async function renderReports() {
  $('#view').innerHTML = `<div class="panel"><div class="headrow"><div><h1>Báo cáo</h1><div class="sub">Tất cả báo cáo công việc, mới nhất ở trên</div></div>
      <button class="btn" id="btn-create">${ic('plusSm')}Tạo báo cáo</button></div></div>${filtersHtml()}${tableHtml('Danh sách báo cáo')}`;
  $('#btn-create').addEventListener('click', openCreate);
  bindFilters(200);
  loadRows(200);
}
async function route() {
  const hash = location.hash;
  const mDetail = hash.match(/^#\/report\/(\d+)/);
  state.route = hash.startsWith('#/reports') || mDetail ? 'reports' : 'overview';
  drawChrome();
  try { state.projects = (await api('/api/projects')).projects; } catch { /* bỏ qua */ }
  if (state.route === 'overview') { if (!route.keep) state.filters = { q: '', project: '', date: '', status: '' }; await renderOverview(); } else await renderReports();
  route.keep = false;
  if (mDetail) { history.replaceState(null, '', '#/reports'); openDetail(Number(mDetail[1])); }
  else if (hash === '#/new') { history.replaceState(null, '', '#/'); openCreate(); }
}

// ---------- hộp thoại ----------
function closeModal() { $('#modal-root').innerHTML = ''; document.removeEventListener('keydown', onKey); }
function onKey(e) { if (e.key === 'Escape') closeModal(); }
function openModal(html, wide) {
  $('#modal-root').innerHTML = `<div class="overlay" id="overlay"><div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true">${html}</div></div>`;
  $('#overlay').addEventListener('mousedown', (e) => { if (e.target.id === 'overlay') closeModal(); });
  document.addEventListener('keydown', onKey);
}

function openCreate() {
  const projects = [...new Set([...DEFAULT_PROJECTS, ...state.projects])].sort();
  const files = [];
  openModal(`
    <div class="mhead"><div><h2>Gửi báo cáo công việc</h2><div class="sub">Cập nhật kết quả công việc, vướng mắc và kế hoạch tiếp theo</div></div><button class="xbtn" id="m-close" aria-label="Đóng">${ic('x', 18)}</button></div>
    <div id="m-err"></div>
    <div class="grid2">
      <div class="fg"><label class="l" for="c-name">Người báo cáo *</label><input class="inp" id="c-name" maxlength="80" value="${esc(getName())}" placeholder="Họ và tên"></div>
      <div class="fg"><label class="l" for="c-date">Ngày báo cáo *</label><input class="inp" id="c-date" type="date" value="${todayStr()}"></div>
      <div class="fg"><label class="l" for="c-project">Dự án / Bộ phận *</label><input class="inp" id="c-project" list="plist" maxlength="80" placeholder="Chọn hoặc nhập dự án / bộ phận"><datalist id="plist">${projects.map((p) => `<option value="${esc(p)}">`).join('')}</datalist></div>
      <div class="fg"><label class="l" for="c-status">Trạng thái *</label><select class="sel" id="c-status">${STATUSES.map((s) => `<option>${esc(s)}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label class="l" for="c-title">Tiêu đề báo cáo</label><input class="inp" id="c-title" maxlength="150" placeholder="Để trống sẽ tự đặt: Báo cáo ngày …"></div>
    <div class="fg"><label class="l" for="c-work">Công việc đã thực hiện * <span class="rc">(mỗi dòng một đầu việc)</span></label><textarea class="ta" id="c-work" maxlength="1000" placeholder="Liệt kê các công việc đã thực hiện, kết quả đạt được..."></textarea><div class="cnt" id="n-work">0/1000</div></div>
    <div class="fg"><label class="l" for="c-block">Vướng mắc / Cần hỗ trợ</label><textarea class="ta" id="c-block" maxlength="1000" placeholder="Nêu rõ các vướng mắc, khó khăn (nếu có) và đề xuất hỗ trợ..."></textarea><div class="cnt" id="n-block">0/1000</div></div>
    <div class="fg"><label class="l" for="c-plan">Kế hoạch tiếp theo</label><textarea class="ta" id="c-plan" maxlength="1000" placeholder="Kế hoạch công việc trong thời gian tới..."></textarea><div class="cnt" id="n-plan">0/1000</div></div>
    <div class="fg"><label class="l">Đính kèm file</label>
      <div class="drop" id="drop">${ic('clip', 18)} Kéo thả file vào đây hoặc bấm để chọn <div class="rc">PDF, Word, Excel, PowerPoint, ảnh · tối đa 25 MB mỗi file</div></div>
      <input type="file" id="c-file" multiple hidden><ul class="flist" id="flist"></ul></div>
    <div class="fg"><label class="l" for="c-link">Link tài liệu</label><input class="inp" id="c-link" maxlength="500" placeholder="Dán link tài liệu liên quan (Drive, Notion, Figma, ...)"></div>
    <div class="mfoot"><button class="btn ghost" id="m-cancel">Hủy</button><button class="btn" id="m-send">${ic('send', 16)}Gửi báo cáo</button></div>`);

  const showErr = (m) => { $('#m-err').innerHTML = m ? `<div class="err">${esc(m)}</div>` : ''; };
  const redrawFiles = () => {
    $('#flist').innerHTML = files.map((f, i) => `<li><span class="nm">${esc(f.name)}<small>${fmtSize(f.size)}</small></span><button type="button" class="linkbtn" data-i="${i}">Xóa</button></li>`).join('');
    $('#flist').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { files.splice(Number(b.dataset.i), 1); redrawFiles(); }));
  };
  const addFiles = (list) => {
    for (const f of list) {
      const ext = (f.name.match(/\.[^.]+$/) || [''])[0].toLowerCase();
      if (!ALLOWED.includes(ext)) { showErr(`Không nhận loại file “${ext || f.name}”.`); continue; }
      if (f.size > MAX_FILE) { showErr(`“${f.name}” quá lớn (tối đa 25 MB).`); continue; }
      if (files.some((x) => x.name === f.name && x.size === f.size)) continue;
      files.push(f);
    }
    redrawFiles();
  };
  [['c-work', 'n-work'], ['c-block', 'n-block'], ['c-plan', 'n-plan']].forEach(([a, b]) => $('#' + a).addEventListener('input', () => { $('#' + b).textContent = `${$('#' + a).value.length}/1000`; }));
  const drop = $('#drop'), input = $('#c-file');
  drop.addEventListener('click', () => input.click());
  input.addEventListener('change', () => { addFiles([...input.files]); input.value = ''; });
  drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('over'));
  drop.addEventListener('drop', (e) => { e.preventDefault(); drop.classList.remove('over'); addFiles([...e.dataTransfer.files]); });
  $('#m-close').addEventListener('click', closeModal);
  $('#m-cancel').addEventListener('click', closeModal);
  $('#m-send').addEventListener('click', async () => {
    showErr('');
    const body = {
      reporter: $('#c-name').value.trim(), report_date: $('#c-date').value, project: $('#c-project').value.trim(), status: $('#c-status').value,
      title: $('#c-title').value.trim(), work: $('#c-work').value.trim(), blockers: $('#c-block').value.trim(), plan: $('#c-plan').value.trim(), link: $('#c-link').value.trim(),
    };
    const btn = $('#m-send'); btn.disabled = true; btn.textContent = 'Đang gửi…';
    try {
      const created = await api('/api/reports', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      setName(body.reporter);
      const failed = [];
      for (const f of files) {
        try { await api(`/api/reports/${created.id}/files`, { method: 'POST', headers: { 'X-Filename': encodeURIComponent(f.name), 'Content-Type': 'application/octet-stream' }, body: f }); }
        catch (e) { failed.push(`${f.name}: ${e.message}`); }
      }
      closeModal(); drawChrome();
      toast(failed.length ? `Đã gửi báo cáo, nhưng ${failed.length} file lỗi: ${failed[0]}` : 'Đã gửi báo cáo');
      route.keep = false; route();
    } catch (e) { showErr(e.message); btn.disabled = false; btn.innerHTML = `${ic('send', 16)}Gửi báo cáo`; }
  });
  $('#c-work').focus();
}

async function openDetail(id) {
  openModal('<div class="empty">Đang tải…</div>', true);
  try {
    const { report: r, files, comments } = await api('/api/reports/' + id);
    const viewable = (n) => /\.(pdf|png|jpe?g|gif|txt)$/i.test(n);
    const fileHtml = files.length ? files.map((f) => `<div class="fitem"><span>${ic('file', 18)} ${viewable(f.name) ? `<a href="#" class="view-file" data-id="${f.id}">${esc(f.name)}</a>` : `<span style="font-weight:600">${esc(f.name)}</span>`} <span class="rc">${fmtSize(f.size)}</span></span><span>${viewable(f.name) ? `<a href="#" class="view-file" data-id="${f.id}">Xem</a> · ` : ''}<a href="/api/files/${f.id}">Tải về</a></span></div>`).join('') : '<div class="rc">Chưa có file đính kèm.</div>';
    const cmts = comments.length ? comments.map((c) => `<div class="cmt"><b>${esc(c.author)}</b><small>${esc(fmtDateTime(c.created_at))}</small><p>${esc(c.body)}</p></div>`).join('') : '<div class="rc">Chưa có phản hồi.</div>';
    const safeLink = /^https?:\/\//i.test(r.link) ? r.link : '';
    openModal(`
      <div class="mhead"><div><h2>${esc(r.title)}</h2><div class="sub">${esc(fmtDate(r.report_date))} · ${esc(r.project)} · ${esc(r.reporter)}</div></div>
        <div style="display:flex;gap:10px;align-items:center">${pill(r.status)}<button class="xbtn" id="m-close" aria-label="Đóng">${ic('x', 18)}</button></div></div>
      <div class="detail"><div>
        <div class="sec"><h3>Công việc đã thực hiện</h3>${bullets(r.work) || '<div class="rc">—</div>'}</div>
        <div class="sec"><h3>Vướng mắc / Cần hỗ trợ</h3>${bullets(r.blockers) || '<div class="rc">Không có.</div>'}</div>
        <div class="sec"><h3>Kế hoạch tiếp theo</h3>${bullets(r.plan) || '<div class="rc">—</div>'}</div>
        <div class="sec"><h3>Phản hồi</h3>${cmts}
          <div class="fg" style="margin-top:12px"><div class="grid2"><input class="inp" id="k-name" maxlength="80" placeholder="Tên của bạn" value="${esc(getName())}"></div></div>
          <div class="fg"><textarea class="ta" id="k-body" maxlength="1000" placeholder="Viết phản hồi cho báo cáo này..."></textarea></div>
          <div id="k-err"></div><div class="mfoot"><button class="btn small" id="k-send">${ic('send', 14)}Gửi phản hồi</button></div></div>
      </div><div>
        <div class="sec"><h3>${ic('clip', 16)} Tài liệu đính kèm</h3>${fileHtml}${safeLink ? `<div class="fitem"><span>${ic('link', 18)} <a href="${esc(safeLink)}" target="_blank" rel="noopener noreferrer">Link tài liệu</a></span></div>` : ''}</div>
        <div class="sec"><h3>Thông tin báo cáo</h3><dl class="meta"><dt>Ngày báo cáo</dt><dd>${esc(fmtDate(r.report_date))}</dd><dt>Dự án / Bộ phận</dt><dd>${esc(r.project)}</dd><dt>Người thực hiện</dt><dd>${esc(r.reporter)}</dd><dt>Trạng thái</dt><dd>${pill(r.status)}</dd><dt>Gửi lúc</dt><dd>${esc(fmtDateTime(r.created_at))}</dd></dl></div>
      </div></div>`, true);
    $('#m-close').addEventListener('click', closeModal);
    document.querySelectorAll('.view-file').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); const f = files.find((x) => x.id === Number(a.dataset.id)); if (f) openViewer(f, id); }));
    $('#k-send').addEventListener('click', async () => {
      const author = $('#k-name').value.trim(), body = $('#k-body').value.trim();
      $('#k-err').innerHTML = '';
      try { await api(`/api/reports/${id}/comments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ author, body }) }); setName(author); drawChrome(); toast('Đã gửi phản hồi'); openDetail(id); }
      catch (e) { $('#k-err').innerHTML = `<div class="err">${esc(e.message)}</div>`; }
    });
  } catch (e) { openModal(`<div class="mhead"><h2>Không mở được báo cáo</h2><button class="xbtn" id="m-close">${ic('x', 18)}</button></div><div class="err">${esc(e.message)}</div>`); $('#m-close').addEventListener('click', closeModal); }
}

function openViewer(f, reportId) {
  const isImg = /\.(png|jpe?g|gif)$/i.test(f.name);
  const src = `/api/files/${f.id}?inline=1`;
  openModal(`<div class="mhead"><div><h2 style="font-size:20px">${esc(f.name)}</h2><div class="sub">${fmtSize(f.size)}</div></div>
    <div style="display:flex;gap:10px;align-items:center"><a class="btn ghost small" href="/api/files/${f.id}">Tải về</a><a class="btn ghost small" href="${src}" target="_blank" rel="noopener">Mở tab mới</a><button class="xbtn" id="m-back" aria-label="Quay lại">${ic('x', 18)}</button></div></div>
    ${isImg ? `<div style="text-align:center"><img src="${src}" alt="${esc(f.name)}" style="max-width:100%;max-height:78vh;border-radius:12px"></div>` : `<iframe src="${src}" title="${esc(f.name)}" style="width:100%;height:78vh;border:1px solid var(--line);border-radius:12px"></iframe>`}`, true);
  $('#m-back').addEventListener('click', () => openDetail(reportId));
}

// ---------- khởi động ----------
$('#nav-create').addEventListener('click', openCreate);
$('#user-chip').addEventListener('click', () => { const n = prompt('Tên của bạn (dùng khi gửi báo cáo và phản hồi):', getName()); if (n !== null) { setName(n.trim().slice(0, 80)); drawChrome(); } });
window.addEventListener('hashchange', () => { route.keep = state.route === 'overview' && location.hash.startsWith('#/reports'); route(); });
route();
})();
