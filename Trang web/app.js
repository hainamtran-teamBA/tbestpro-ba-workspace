/* Hồ sơ BA – trang xem dự án và đặc tả nghiệp vụ (chỉ xem, không có máy chủ).
 * Dữ liệu nằm trong data/*.js (khai báo ở data/manifest.js), nạp bằng thẻ <script> nên mở thẳng index.html được.
 * Địa chỉ trang: #/ trang chủ · #/<dự án> · #/<dự án>/<UC> · #/cong-cu bộ công cụ.
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------ Kho dữ liệu
  const SITE = window.SITE = {
    projects: [],          // theo thứ tự nạp
    ucs: {},               // { projectId: { ucId: uc } }
    toolbox: [],
    errors: [],
    addProject(p) {
      if (!p || !p.id) return this.errors.push("Dự án thiếu id");
      if (this.projects.some(x => x.id === p.id)) return this.errors.push("Trùng id dự án: " + p.id);
      this.projects.push(p);
    },
    addUC(projectId, uc) {
      if (!uc || !uc.id) return this.errors.push("UC thiếu id (dự án " + projectId + ")");
      (this.ucs[projectId] = this.ucs[projectId] || {})[uc.id] = uc;
    },
    setToolbox(list) { this.toolbox = Array.isArray(list) ? list : []; },
    load(files) {
      let i = 0;
      const next = () => {
        if (i >= files.length) return start();
        const src = files[i++];
        const s = document.createElement("script");
        s.src = src;
        s.onload = next;
        s.onerror = () => { SITE.errors.push("Không tìm thấy file <code>" + esc(src) + "</code> (kiểm tra data/manifest.js)"); next(); };
        document.body.appendChild(s);
      };
      next();
    }
  };
  // Lỗi cú pháp trong file dữ liệu → hiện thanh báo lỗi thay vì trang trắng
  window.addEventListener("error", e => {
    if (e && e.filename && /\/data\//.test(e.filename)) {
      const f = decodeURIComponent(e.filename.replace(/^.*?\/(data\/)/, "$1"));
      SITE.errors.push("Lỗi trong <code>" + esc(f) + "</code> dòng " + e.lineno + ": " + esc(e.message));
    }
  });

  const TAGS = { "chot": "Đã chốt", "de-xuat": "Đề xuất", "can-chot": "Cần chốt", "chua-co": "Phần mềm chưa có" };
  const ROLE_COLORS = ["#7fa8f0", "#e8925a", "#a98be0", "#e07a86", "#b5bd4f", "#4fb8d0", "#d4a94a"];
  const SYSTEM = "Hệ thống";

  // ------------------------------------------------------------------ Tiện ích
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  const fmtDate = d => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ""); return m ? `${m[3]}/${m[2]}/${m[1]}` : esc(d); };
  const pad2 = i => String(i).padStart(2, "0");
  const href = (...parts) => "#/" + parts.map(encodeURIComponent).join("/");
  const shortName = p => p.name.split(":")[0].trim();
  const stClass = s => /làm/i.test(s) ? "s-lam" : /thử/i.test(s) ? "s-thu" : /dừng/i.test(s) ? "s-dung" : /xong|hoàn/i.test(s) ? "s-xong" : "";
  const pillClass = s => /duyệt/i.test(s) ? "p-duyet" : /chốt|xong/i.test(s) ? "p-chot" : /đang viết/i.test(s) ? "p-viet" : "";
  const pill = s => `<span class="pill ${pillClass(s)}">${esc(s || "Chưa viết")}</span>`;
  const tag = t => t ? `<span class="tag ${esc(t)}">${esc(TAGS[t] || t)}</span>` : "";
  const dots = (s, sep) => String(s || "").split(sep || "·").map(x => esc(x.trim())).filter(Boolean).join(", ");
  const USER = "Nam";                       // tên trong lời chào trang chủ
  const THEME_KEY = "hsba-theme";

  // Biểu tượng nét (kiểu Lucide), vẽ sẵn, không cần mạng
  const ICONS = {
    home: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    tools: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    review: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    question: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    decision: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    open: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    expand: '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.38 3.62a1 1 0 0 1 3 3L7.37 18.64a2 2 0 0 1-.86.5l-2.87.84a.5.5 0 0 1-.62-.62l.84-2.87a2 2 0 0 1 .5-.86z"/>',
    spec: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    sheet: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/>',
    page: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    panel: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'
  };
  const icon = (n, cls) => `<svg class="ic ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[n]}</svg>`;

  // Chủ đề sáng / tối (lưu trong trình duyệt; mặc định sáng)
  const getTheme = () => document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const m = document.querySelector('meta[name="color-scheme"]'); if (m) m.content = t;
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* trình duyệt chặn lưu: bỏ qua */ }
  }
  const isDark = () => getTheme() === "dark";
  const list = a => Array.isArray(a) ? a : [];
  const ucsOf = p => SITE.ucs[p.id] || {};
  const hasDetail = d => d && Array.isArray(d.steps) && d.steps.length > 0;
  function roleColor(p, r) {
    if (r === SYSTEM) return isDark() ? "#7ac4b0" : "#0f766e";
    const i = list(p.roles).indexOf(r);
    return ROLE_COLORS[(i < 0 ? list(p.roles).length + r.length : i) % ROLE_COLORS.length];
  }
  const role = (p, r) => `<span class="role" style="--rc:${roleColor(p, r)}">${esc(r)}</span>`;

  let offs = [];
  function on(t, ev, fn, opt) { t.addEventListener(ev, fn, opt); offs.push(() => t.removeEventListener(ev, fn, opt)); }
  function cleanup() { offs.forEach(f => f()); offs = []; }
  function afterFonts(fn) { requestAnimationFrame(fn); if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(fn)); }

  // ------------------------------------------------------------------ Khung trang: thanh bên + vùng nội dung
  // Mức UC: chưa viết / đang viết / đang duyệt / đã chốt (dùng cho chấm màu và thanh tiến độ)
  const ucLevel = s => /duyệt/i.test(s) ? "duyet" : /chốt|xong/i.test(s) ? "chot" : /đang viết/i.test(s) ? "viet" : "chua";
  const LEVELS = [["chot", "đã chốt"], ["duyet", "đang duyệt"], ["viet", "đang viết"], ["chua", "chưa viết"]];

  function sidebar(active, cur) {
    const projects = SITE.projects.map(p => {
      const on = cur && cur.p === p;
      let sub = "";
      // Người dùng không muốn cây UC trong thanh bên (13/11): chỉ liệt kê dự án.
      if (false && on && list(p.groups).length) {
        const ucs = ucsOf(p);
        sub = `<div class="sucs">${list(p.groups).map(g => `<div class="sg" style="--gc:${esc(g.color)}"><div class="sgh"><i></i>${esc(g.name)}</div>
          ${list(g.ucs).map(id => { const u = ucs[id] || { name: "(chưa có file)", status: "" };
            return `<a class="suc ${cur.uc === id ? "on" : ""}" href="${href(p.id, id)}" ${cur.uc === id ? 'aria-current="page"' : ""}>
              <span class="sdot l-${ucLevel(u.status)}" title="${esc(u.status || "Chưa viết")}"></span><span class="mono">${esc(id)}</span><span class="nm">${esc(u.name)}</span>
              <span class="sr">, ${esc(u.status || "Chưa viết")}</span></a>`; }).join("")}</div>`).join("")}</div>`;
      }
      const ini = p.abbr || shortName(p).split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
      return `<a class="sproj ${on ? "on" : ""}" href="${href(p.id)}" data-tip="${esc(shortName(p) + " · " + p.status)}" ${on && !cur.uc ? 'aria-current="page"' : ""}>
        <span class="st ${stClass(p.status)}" title="${esc(p.status)}"></span><span class="ava" aria-hidden="true">${esc(ini)}</span><span class="nm">${esc(shortName(p))}</span><span class="sr">, ${esc(p.status)}</span></a>${sub}`;
    }).join("");
    const dark = isDark(), rail = isRail(active);
    return `<aside class="side" id="side" aria-label="Điều hướng">
      <div class="stop"><a class="brand" href="#/" title="Hồ sơ BA"><i>BA</i><span class="lbl">Hồ sơ BA</span></a>
        <button type="button" class="railbtn" data-rail aria-pressed="${rail}" title="${rail ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}">${icon("panel")}<span class="sr">${rail ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}</span></button></div>
      <nav class="snav" aria-label="Trang chính">
        <a href="#/" title="Tổng quan" class="${active === "home" ? "on" : ""}" ${active === "home" ? 'aria-current="page"' : ""}>${icon("home")}<span class="lbl">Tổng quan</span></a>
        <a href="#/cong-cu" title="Bộ công cụ" class="${active === "tools" ? "on" : ""}" ${active === "tools" ? 'aria-current="page"' : ""}>${icon("tools")}<span class="lbl">Bộ công cụ</span></a>
      </nav>
      <div class="sgroup"><div class="sh" id="sh-proj">Dự án</div><nav aria-labelledby="sh-proj">${projects}</nav></div>
      <div class="sfoot" role="group" aria-label="Giao diện">
        <button type="button" data-theme-set="light" aria-pressed="${!dark}" title="Giao diện sáng">${icon("sun")}<span class="lbl">Sáng</span></button>
        <button type="button" data-theme-set="dark" aria-pressed="${dark}" title="Giao diện tối">${icon("moon")}<span class="lbl">Tối</span></button>
      </div>
    </aside>`;
  }
  // Thanh bên thu gọn (dải biểu tượng): mặc định khi đang xem dự án, để cây tài liệu có chỗ.
  // Người dùng bấm nút thì nhớ lựa chọn (localStorage "hsba-side" = "open" | "rail").
  const SIDE_KEY = "hsba-side";
  function sidePref() { try { return localStorage.getItem(SIDE_KEY); } catch (e) { return null; } }
  function isRail(active) { const p = sidePref(); return p === "rail" || (p !== "open" && active === "project"); }
  function errorBar() {
    return SITE.errors.length ? `<div class="data-errors"><b>Lỗi dữ liệu</b><ul>${SITE.errors.map(e => `<li>${e}</li>`).join("")}</ul></div>` : "";
  }
  function layout(active, cur, inner) {
    return `<a class="skip" href="#main" data-skip>Bỏ qua tới nội dung</a><div class="app ${isRail(active) ? "rail" : ""}">${sidebar(active, cur)}<div class="scrim" data-side-close></div>
      <div class="main">
        <header class="mbar"><button type="button" class="iconbtn" data-side-open aria-controls="side" aria-expanded="false" aria-label="Mở thanh điều hướng">${icon("menu")}</button>
          <a class="brand" href="#/"><i>BA</i><span>Hồ sơ BA</span></a></header>
        ${errorBar()}
        <main class="page" id="main" tabindex="-1">${inner}</main>
      </div></div>`;
  }

  // ------------------------------------------------------------------ Trang chủ
  function greeting() {
    const h = new Date().getHours();
    return h < 12 ? "Chào buổi sáng" : h < 18 ? "Chào buổi chiều" : "Chào buổi tối";
  }
  function todayText() {
    const d = new Date(), wd = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"][d.getDay()];
    return `${wd}, ${d.getDate()} tháng ${d.getMonth() + 1} năm ${d.getFullYear()}`;
  }
  const isoDay = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

  function renderHome(el) {
    document.title = "Tổng quan – Hồ sơ BA";
    const P = SITE.projects;
    const allUc = P.flatMap(p => Object.values(ucsOf(p)).map(u => ({ p, u })));
    const active = P.filter(p => /làm/i.test(p.status));
    const reviewing = allUc.filter(x => /duyệt/i.test(x.u.status));
    const pq = P.reduce((s, p) => s + list(p.openQuestions).length, 0), uq = allUc.reduce((s, x) => s + list(x.u.questions).length, 0);
    const since = new Date(); since.setDate(since.getDate() - 6); const sinceIso = isoDay(since), todayIso = isoDay(new Date());
    const recent = P.flatMap(p => list(p.decisions)).filter(d => d.date >= sinceIso && d.date <= todayIso);
    const latest = recent.map(d => d.date).sort().pop();
    const lead = active.slice().sort((a, b) => String(b.updated).localeCompare(String(a.updated)))[0];

    const stat = (ic, v, k, s, cls, to) => `<${to ? `a href="${to}"` : "div"} class="stat ${cls || ""} ${to ? "link" : ""}"><span class="sic">${icon(ic)}</span><div class="v">${v}</div><div class="k">${k}</div>${s ? `<div class="s">${s}</div>` : ""}</${to ? "a" : "div"}>`;
    const qTop = P.slice().sort((a, b) => list(b.openQuestions).length - list(a.openQuestions).length)[0];
    const dTop = P.find(p => list(p.decisions).some(d => d.date === latest));
    const stats = stat("briefcase", active.length, "Dự án đang làm", `trên tổng ${P.length} dự án`)
      + stat("review", reviewing.length, "UC đang duyệt", reviewing.length ? reviewing.slice(0, 2).map(x => `<span class="mono">${esc(x.u.id)}</span> ${esc(shortName(x.p))}`).join(", ") + (reviewing.length > 2 ? ` và ${reviewing.length - 2} UC khác` : "") : "Không có UC nào chờ duyệt", reviewing.length ? "hot" : "", reviewing.length ? href(reviewing[0].p.id, reviewing[0].u.id) : "")
      + stat("question", pq + uq, "Câu hỏi mở", `${pq} của dự án, ${uq} trong use case`, "", qTop && pq ? href(qTop.id, "dac-ta", "cau-hoi") : "")
      + stat("decision", recent.length, "Quyết định 7 ngày qua", latest ? `Gần nhất ngày ${fmtDate(latest)}` : "Chưa có quyết định mới", "", dTop ? href(dTop.id, "dac-ta", "quyet-dinh") : "");

    const rows = P.map(p => {
      const ucs = Object.values(ucsOf(p)), n = ucs.length;
      const cnt = {}; ucs.forEach(u => { const l = ucLevel(u.status); cnt[l] = (cnt[l] || 0) + 1; });
      const parts = LEVELS.filter(([l]) => cnt[l]);
      const legend = parts.map(([l, t]) => `<span><i class="sdot l-${l}"></i>${cnt[l]} ${t}</span>`).join("");
      const prog = n ? `<div class="bar" role="img" aria-label="${n} use case: ${esc(parts.map(([l, t]) => cnt[l] + " " + t).join(", "))}">${parts.map(([l]) => `<i class="l-${l}" style="flex:${cnt[l]}"></i>`).join("")}</div>
          <div class="plg">${legend}</div>` : `<div class="plg none">Chưa có use case</div>`;
      return `<a class="prow" href="${href(p.id)}">
        <span class="pcode">${esc(p.code)}</span>
        <div class="pmain"><div class="pname">${esc(p.name)}</div><div class="pgoal">${esc(p.goal)}</div></div>
        <div class="pprog">${n ? `<div class="pn">${n} use case</div>` : ""}${prog}</div>
        <div class="pside"><span class="st ${stClass(p.status)}">${esc(p.status)}</span><span class="upd">Cập nhật ${fmtDate(p.updated)}</span></div></a>`;
    }).join("");

    // Hai biểu đồ vòng: use case theo mức, tài liệu theo loại
    const ucCnt = {}; allUc.forEach(x => { const l = ucLevel(x.u.status); ucCnt[l] = (ucCnt[l] || 0) + 1; });
    const ucSegs = LEVELS.map(([l, t]) => ({ n: ucCnt[l] || 0, label: t.charAt(0).toUpperCase() + t.slice(1), c: `var(--l-${l})` }));
    const chot = ucCnt.chot || 0;
    const DOC_ORDER = [["Google Docs", "--c1"], ["PDF", "--c3"], ["Google Sheets", "--c2"], ["Trang Claude", "--c4"]];
    const docCnt = {}; let docAll = 0;
    P.forEach(p => docGroups(p).forEach(g => g.items.forEach(it => { const k = docKind(it).label; const key = DOC_ORDER.some(([n]) => n === k) ? k : "Khác"; docCnt[key] = (docCnt[key] || 0) + 1; docAll++; })));
    // xếp nhiều trước (phần lớn nhất bắt đầu ở 12 giờ); màu đi theo loại, không theo thứ hạng; "Khác" luôn cuối
    const docSegs = DOC_ORDER.map(([n, c]) => ({ n: docCnt[n] || 0, label: n, c: `var(${c})` })).sort((a, b) => b.n - a.n)
      .concat([{ n: docCnt["Khác"] || 0, label: "Khác (thư mục, link)", c: "var(--c0)" }]);
    const ucPct = allUc.length ? Math.round(chot / allUc.length * 100) : 0;

    el.innerHTML = layout("home", null, `<div class="home wrap">
      <header class="greet"><div><h1>${greeting()}, ${esc(USER)}</h1><p class="today">${todayText()}</p></div>
        <div class="acts"><a class="btn" href="#/cong-cu">${icon("tools")}Bộ công cụ</a></div></header>
      <div class="hgrid">
        <section class="hcard projects" aria-labelledby="h-proj"><div class="h"><h2 id="h-proj">Dự án</h2><span class="note">${P.length} dự án</span></div>
          <div class="plist">${rows || `<div class="empty">Chưa có dự án nào. Thêm file dự án vào data/manifest.js.</div>`}</div></section>
        <section class="stats" aria-label="Tóm tắt">${stats}</section>
      </div>
      <div class="hgrid2">
        ${donutCard("Use case theo trạng thái", ucSegs, allUc.length, "use case", "Mức", `${allUc.length} use case, ${ucPct}% đã chốt`)}
        ${donutCard("Tài liệu liên quan theo loại", docSegs, docAll, "tài liệu", "Loại", `${docAll} tài liệu`)}
      </div></div>`);
  }

  // Thẻ biểu đồ vòng kèm bảng số liệu (bảng là chú giải và cũng là bản đọc thay biểu đồ)
  function donutCard(title, segs, center, sub, col, total) {
    const all = segs.reduce((s, x) => s + x.n, 0), R = 46, C = 2 * Math.PI * R, GAP = 2;
    let off = 0;
    const arcs = all ? segs.filter(s => s.n).map(s => { const len = s.n / all * C, d = Math.max(len - GAP, 1);
      const a = `<circle r="${R}" cx="60" cy="60" fill="none" stroke="${s.c}" stroke-width="13" stroke-dasharray="${d.toFixed(2)} ${(C - d).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}"><title>${esc(s.label)}: ${s.n}</title></circle>`;
      off += len; return a; }).join("") : "";
    const pct = n => all ? Math.round(n / all * 100) + "%" : "–";
    const rows = segs.map(s => `<tr class="${s.n ? "" : "zero"}"><td><i class="chip" style="background:${s.c}"></i></td><td>${esc(s.label)}</td><td class="n">${s.n}</td><td class="n p">${pct(s.n)}</td></tr>`).join("");
    return `<section class="hcard dcard"><h2>${esc(title)}</h2>
      <div class="dbody"><table class="dtbl"><thead><tr><th colspan="2">${esc(col)}</th><th class="n">Số</th><th class="n">Tỷ lệ</th></tr></thead><tbody>${rows}</tbody></table>
        <figure class="donut" role="img" aria-label="${esc(title)}: ${esc(segs.map(s => s.label + " " + s.n + " (" + pct(s.n) + ")").join(", "))}">
          <svg viewBox="0 0 120 120"><circle r="${R}" cx="60" cy="60" fill="none" stroke="var(--line)" stroke-width="13"/><g transform="rotate(-90 60 60)">${arcs}</g></svg>
          <figcaption><b>${esc(String(center))}</b><span>${esc(sub)}</span></figcaption></figure></div>
      <p class="dnote">Tổng ${esc(total)}</p></section>`;
  }

  // ------------------------------------------------------------------ Bản đồ nghiệp vụ
  function mindmapHtml(p) {
    const groups = list(p.groups), ucs = ucsOf(p);
    const total = groups.reduce((s, g) => s + list(g.ucs).length, 0);
    // chia nhóm hai bên, cân số UC, giữ thứ tự
    let acc = 0, split = groups.length;
    for (let i = 0; i < groups.length; i++) { if (acc + list(groups[i].ucs).length / 2 > total / 2) { split = i; break; } acc += list(groups[i].ucs).length; }
    if (split === 0) split = 1;
    const left = groups.slice(0, split), right = groups.slice(split);
    const grp = (g, side) => `<div class="grp" data-side="${side}" data-color="${esc(g.color)}" style="--gc:${esc(g.color)}">
      <div class="gh"><i></i>${esc(g.name)}<em>${list(g.ucs).length} UC</em></div>
      <div class="cards">${list(g.ucs).map(id => { const u = ucs[id] || { name: "(chưa có file " + id + ")", status: "" };
        return `<a class="ucc ${/duyệt/i.test(u.status) ? "hot" : ""}" href="${href(p.id, id)}">
          <div class="r1"><span class="code">${esc(id)}</span>${pill(u.status)}</div>
          <div class="nm">${esc(u.name)}</div>${u.who ? `<div class="who">${dots(u.who)}</div>` : ""}</a>`; }).join("")}</div></div>`;
    const parts = p.name.split(/:\s*/);
    let sub = (parts[1] || "").replace(/^kiểm soát kho\s+/i, "");
    sub = sub.charAt(0).toUpperCase() + sub.slice(1);
    return `<div class="mm">
      <svg class="lines" aria-hidden="true"></svg>
      <div class="mcol">${left.map(g => grp(g, "L")).join("")}</div>
      <div class="mid"><div class="hub"><b>${esc(parts[0])}</b>${sub ? `<span>${esc(sub)}</span>` : ""}<small>${groups.length} luồng, ${total} UC</small></div></div>
      <div class="mcol">${right.map(g => grp(g, "R")).join("")}</div>
    </div>`;
  }
  function drawMindmap(mm) {
    if (!mm || !mm.isConnected) return;
    const svg = mm.querySelector("svg.lines"), hub = mm.querySelector(".hub");
    if (getComputedStyle(svg).display === "none") return;
    const base = mm.getBoundingClientRect(), hb = hub.getBoundingClientRect();
    const cx = hb.left - base.left + hb.width / 2, cy = hb.top - base.top + hb.height / 2, r = hb.width / 2;
    let out = "";
    mm.querySelectorAll(".grp").forEach(g => {
      const b = g.getBoundingClientRect(), L = g.dataset.side === "L", col = g.dataset.color;
      const ex = (L ? b.right : b.left) - base.left, ey = b.top - base.top + Math.min(28, b.height / 2);
      const ang = Math.atan2(ey - cy, ex - cx);
      const sx = cx + Math.cos(ang) * (r + 6), sy = cy + Math.sin(ang) * (r + 6);
      const dx = (ex - sx) * 0.55;
      out += `<path d="M${sx.toFixed(1)},${sy.toFixed(1)} C${(sx + dx).toFixed(1)},${sy.toFixed(1)} ${(ex - dx).toFixed(1)},${ey.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}" fill="none" stroke="${col}" stroke-width="1.8" opacity=".8"/>`
        + `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="3" fill="${col}"/><circle cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" r="4" fill="${col}"/>`;
    });
    svg.innerHTML = out;
  }

  // ------------------------------------------------------------------ Sơ đồ use case (vai trò → chức năng)
  function useCaseSvg(p) {
    const links = p.useCaseLinks || {};
    const actors = list(p.roles).concat(Object.keys(links).filter(a => !list(p.roles).includes(a))).filter(a => list(links[a]).length);
    const fnActors = {};
    actors.forEach(a => links[a].forEach(f => { (fnActors[f] = fnActors[f] || []).push(a); }));
    // chia vai trò hai bên, cân số chức năng
    const side = {}; let nL = 0, nR = 0;
    [...actors].sort((a, b) => links[b].length - links[a].length).forEach(a => {
      if (nL <= nR) { side[a] = "L"; nL += links[a].length; } else { side[a] = "R"; nR += links[a].length; }
    });
    const fnSide = f => { const s = new Set(fnActors[f].map(a => side[a])); return s.size > 1 ? "M" : [...s][0]; };
    const shared = Object.keys(fnActors).filter(f => fnSide(f) === "M");
    const order = s => actors.filter(a => side[a] === s).sort((a, b) => {
      const sa = links[a].some(f => shared.includes(f)) ? 0 : 1, sb = links[b].some(f => shared.includes(f)) ? 0 : 1;
      return sa - sb || actors.indexOf(a) - actors.indexOf(b);
    });
    const W = 1200, ROW = 62, top = 84, FS = 14;
    const ctx = document.createElement("canvas").getContext("2d"); ctx.font = `500 ${FS}px 'Be Vietnam Pro', sans-serif`;
    const wrap = t => { if (t.length <= 26) return [t]; const w = t.split(" "); let a = "", lines = [];
      w.forEach(x => { if ((a + " " + x).trim().length > Math.ceil(t.length / 2) + 3 && a) { lines.push(a); a = x; } else a = (a + " " + x).trim(); }); lines.push(a); return lines; };
    const pos = {};
    const place = (f, x, y) => { const lines = wrap(f); const tw = Math.max(...lines.map(l => ctx.measureText(l).width));
      pos[f] = { x, y, rx: Math.max(96, tw / 2 + 30), ry: lines.length > 1 ? 29 : 23, lines }; };
    const colX = { L: 410, M: W / 2, R: W - 410 };
    shared.forEach((f, i) => place(f, colX.M, top + 34 + i * ROW));
    const actorY = {};
    let maxRow = shared.length;
    ["L", "R"].forEach(s => {
      let row = shared.length;
      order(s).forEach(a => {
        const own = links[a].filter(f => fnSide(f) === s && !pos[f]);
        const ys = [];
        own.forEach(f => { place(f, colX[s], top + 34 + row * ROW); ys.push(pos[f].y); row++; });
        const sh = links[a].filter(f => shared.includes(f)).map(f => pos[f].y);
        actorY[a] = sh.length ? sh.reduce((x, y) => x + y, 0) / sh.length : ys.length ? (ys[0] + ys[ys.length - 1]) / 2 : top + 34 + row * ROW;
      });
      let last = -1e9; order(s).forEach(a => { if (actorY[a] < last + 120) actorY[a] = last + 120; last = actorY[a]; });
      maxRow = Math.max(maxRow, row);
    });
    const actorMaxY = Math.max(...Object.values(actorY));
    const bTop = 14, bBot = Math.max(top + 34 + (maxRow - 1) * ROW + 46, actorMaxY + 24), H = bBot + 64;
    const bx1 = 190, bx2 = W - 190, ax = { L: 84, R: W - 84 };
    let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sơ đồ use case: vai trò và chức năng">`;
    s += `<rect class="u-sys" x="${bx1}" y="${bTop}" width="${bx2 - bx1}" height="${bBot - bTop}" rx="24"/>`;
    s += `<text class="u-syst" x="${W / 2}" y="${bTop + 34}" text-anchor="middle" font-size="14" font-weight="600">${esc(p.useCaseSystem || "Phần mềm")}</text>`;
    actors.forEach(a => links[a].forEach(f => {
      const e = pos[f], L = side[a] === "L";
      const x1 = ax[side[a]] + (L ? 24 : -24), y1 = actorY[a] - 8;
      const x2 = e.x + (L ? -e.rx : e.rx);
      s += `<line class="u-ln" x1="${x1}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${e.y}" stroke="${roleColor(p, a)}" stroke-width="1.2"/>`;
    }));
    Object.keys(pos).forEach(f => { const e = pos[f], sh = fnSide(f) === "M";
      s += `<ellipse class="u-fn ${sh ? "sh" : ""}" cx="${e.x}" cy="${e.y}" rx="${e.rx.toFixed(1)}" ry="${e.ry}" stroke-width="1.4"/>`;
      e.lines.forEach((l, i) => { s += `<text class="u-fnt" x="${e.x}" y="${(e.y + 5 + (i - (e.lines.length - 1) / 2) * 17).toFixed(1)}" text-anchor="middle" font-size="${FS}" font-weight="500">${esc(l)}</text>`; });
    });
    actors.forEach(a => { const x = ax[side[a]], y = actorY[a], c = roleColor(p, a);
      s += `<g stroke="${c}" stroke-width="1.8" fill="none" stroke-linecap="round"><circle cx="${x}" cy="${y - 32}" r="10"/><line x1="${x}" y1="${y - 22}" x2="${x}" y2="${y + 5}"/><line x1="${x - 16}" y1="${y - 12}" x2="${x + 16}" y2="${y - 12}"/><line x1="${x}" y1="${y + 5}" x2="${x - 13}" y2="${y + 27}"/><line x1="${x}" y1="${y + 5}" x2="${x + 13}" y2="${y + 27}"/></g>`;
      s += `<text class="u-act" style="--rc:${c}" x="${x}" y="${y + 50}" text-anchor="middle" font-size="14.5" font-weight="600">${esc(a)}</text>`;
    });
    return s + `</svg>`;
  }

  // ------------------------------------------------------------------ Hồ sơ dự án: cây tài liệu bên trái + nội dung
  // #/<dự án>                  mục lục hồ sơ (2 nhánh: Tài liệu đặc tả, Tài liệu liên quan)
  // #/<dự án>/dac-ta[/<mục>]   tài liệu đặc tả (bản đồ nghiệp vụ nằm ở đây)
  // #/<dự án>/lien-quan        tài liệu liên quan (link Google Docs, Sheets, trang Claude…)
  const DOC_KINDS = [
    [/docs\.google\.com\/spreadsheets/, "Google Sheets", "sheet", "k-sheet"],
    [/docs\.google\.com\/presentation/, "Google Slides", "page", "k-slide"],
    [/drive\.google\.com\/drive\/folders/, "Thư mục Drive", "folder", "k-link"],
    [/docs\.google\.com|drive\.google\.com/, "Google Docs", "file", "k-doc"],
    [/claude\.ai\//, "Trang Claude", "page", "k-claude"],
    [/notion\.(so|site)/, "Notion", "file", "k-notion"]
  ];
  // Mục có type: "pdf" (file PDF trên Drive) hiện nhãn PDF thay vì Google Docs
  const docKind = d => { const it = typeof d === "string" ? { url: d } : (d || {});
    if (it.type === "pdf") return { label: "PDF", ic: "file", cls: "k-pdf" };
    const url = it.url, k = DOC_KINDS.find(x => x[0].test(url || "")); return k ? { label: k[1], ic: k[2], cls: k[3] } : { label: "Liên kết", ic: "link", cls: "k-link" }; };
  const reEsc = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const docName = (p, n) => String(n || "").replace(new RegExp("^" + reEsc(shortName(p)) + "\\s*[-–:]\\s*", "i"), "") || n;
  const docGroups = p => list(p.docs).filter(g => list(g.items).length);
  const docCount = p => docGroups(p).reduce((s, g) => s + g.items.length, 0);

  // Các mục của tài liệu đặc tả (dùng cho trang đặc tả, mục lục hồ sơ và cây bên trái)
  function specSections(p) {
    const ucs = ucsOf(p), groups = list(p.groups), links = p.useCaseLinks || {};
    const nUc = groups.reduce((s, g) => s + list(g.ucs).length, 0);
    const hasLinks = Object.keys(links).some(k => list(links[k]).length);
    const nRoles = Object.keys(links).filter(k => list(links[k]).length).length;
    const decs = list(p.decisions), qs = list(p.openQuestions), gl = list(p.glossary);
    const scopeIn = list(p.scopeIn), scopeOut = list(p.scopeOut), roles = list(p.roles);
    const overview = `<p class="lead">${esc(p.goal)}</p>
      ${scopeIn.length || scopeOut.length ? `<div class="twocol">
        ${scopeIn.length ? `<div><h3 class="lbl">Trong phạm vi</h3><ul class="plain">${scopeIn.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
        ${scopeOut.length ? `<div><h3 class="lbl">Ngoài phạm vi</h3><ul class="plain out">${scopeOut.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}</div>` : ""}
      ${roles.length ? `<h3 class="lbl" style="margin-top:32px">Vai trò</h3><div class="roles">${roles.map(r => role(p, r)).join("")}</div>` : ""}`;
    const ucRows = groups.map(g => list(g.ucs).map(id => { const u = ucs[id] || { name: "(chưa có file)", status: "" };
      return `<tr><td><a class="uclink" href="${href(p.id, id)}"><span class="mono">${esc(id)}</span>${esc(u.name)}</a></td>
        <td><span class="g" style="--gc:${esc(g.color)}"><i></i>${esc(g.name)}</span></td><td>${pill(u.status)}</td></tr>`; }).join("")).join("");
    return [
      p.goal && { id: "tong-quan", title: "Tổng quan và phạm vi", html: `<div class="paper">${overview}</div>` },
      groups.length && { id: "ban-do", title: "Bản đồ nghiệp vụ", note: `${groups.length} luồng, ${nUc} use case. Bấm thẻ để mở đặc tả.`,
        html: `<div class="board">${mindmapHtml(p)}</div>` },
      hasLinks && { id: "ai-dung", title: "Ai dùng chức năng nào", note: `${nRoles} vai trò. Ô viền vàng là chức năng dùng chung.`,
        html: `<p class="swipe">Vuốt ngang để xem hết sơ đồ.</p><div class="board ucd">${useCaseSvg(p)}</div>` },
      nUc && { id: "use-case", title: "Danh sách use case", note: `${nUc} use case`,
        html: `<div class="paper flush"><div class="tblwrap"><table class="t uctbl"><thead><tr><th>Use case</th><th style="width:150px">Luồng</th><th style="width:130px">Trạng thái</th></tr></thead><tbody>${ucRows}</tbody></table></div></div>` },
      decs.length && { id: "quyet-dinh", title: "Quyết định", note: `${decs.length} mục`,
        html: `<div class="paper"><div class="declist">${decs.map(d => `<div class="dec"><span class="d">${fmtDate(d.date)}</span><span>${esc(d.text)}</span><span class="by">${esc(d.by)}</span></div>`).join("")}</div></div>` },
      qs.length && { id: "cau-hoi", title: "Câu hỏi mở", note: `${qs.length} câu`,
        html: `<div class="paper"><ol class="qlist">${qs.map(q => `<li><span>${esc(q)}</span></li>`).join("")}</ol></div>` },
      gl.length && { id: "thuat-ngu", title: "Thuật ngữ", note: `${gl.length} từ`,
        html: `<div class="paper"><dl class="gloss">${gl.map(g => `<dt>${esc(g.term)}</dt><dd>${esc(g.def)}</dd>`).join("")}</dl></div>` }
    ].filter(Boolean);
  }
  const hasSpec = p => list(p.groups).length > 0 || list(p.decisions).length > 0 || list(p.openQuestions).length > 0;

  // Cây tài liệu bên trái. view: "home" | "spec" | "related"
  function docTree(p, view, secs) {
    const groups = docGroups(p);
    const ext = it => { const k = docKind(it);
      return `<a class="dt-i ext" href="${esc(it.url)}" target="_blank" rel="noopener" title="${esc(it.name)} (${k.label}, mở tab mới)">
        <span class="kd ${k.cls}">${icon(k.ic)}</span><span class="nm">${esc(docName(p, it.name))}</span>${icon("open", "xo")}<span class="sr"> (${k.label}, mở tab mới)</span></a>`; };
    return `<nav class="dtree glass" data-p="${esc(p.id)}" aria-label="Tài liệu ${esc(shortName(p))}">
      <button type="button" class="dt-toggle" aria-expanded="false" aria-controls="dt-body">${icon("menu")}<span>Mục lục hồ sơ</span>${icon("chev", "chev")}</button>
      <div class="dt-body" id="dt-body">
      <a class="dt-top ${view === "home" ? "on" : ""}" href="${href(p.id)}" ${view === "home" ? 'aria-current="page"' : ""}>
        <span class="st ${stClass(p.status)}" title="${esc(p.status)}"></span><span><b>${esc(shortName(p))}</b><small>Hồ sơ dự án</small></span></a>
      <label class="dt-search">${icon("search")}<span class="sr">Lọc tài liệu</span><input type="search" placeholder="Lọc tài liệu…" autocomplete="off" spellcheck="false"></label>
      <div class="dt-hits" hidden></div>
      <div class="dt-none" role="status" hidden></div>
      <div class="dt-g">
        <a class="dt-h ${view === "spec" ? "on" : ""}" href="${href(p.id, "dac-ta")}">${icon("spec")}<span>Tài liệu đặc tả</span></a>
        ${hasSpec(p) ? `<div class="dt-items">${secs.map(s => `<a class="dt-i" data-sec="${s.id}" href="${href(p.id, "dac-ta", s.id)}"><span class="nm">${esc(s.title)}</span></a>`).join("")}</div>`
          : `<div class="dt-empty">Chưa có đặc tả</div>`}
      </div>
      <div class="dt-g">
        <a class="dt-h ${view === "related" ? "on" : ""}" href="${href(p.id, "lien-quan")}">${icon("folder")}<span>Tài liệu liên quan</span>${docCount(p) ? `<span class="c">${docCount(p)}</span>` : ""}</a>
        ${groups.length ? groups.map((g, i) => `<details class="dt-f" ${view === "related" || i === 0 || g.items.some(it => /dùng chính/i.test(it.note || "")) ? "open" : ""}><summary>${icon("chev", "chev")}<span>${esc(g.group)}</span><span class="c">${g.items.length}</span></summary>
          <div class="dt-items">${g.items.map(ext).join("")}</div></details>`).join("") : `<div class="dt-empty">Chưa có tài liệu</div>`}
      </div></div>
    </nav>`;
  }

  function relatedList(p) {
    const groups = docGroups(p);
    if (!groups.length) return `<div class="paper nospec"><b>Chưa có tài liệu liên quan</b>Thêm link vào mục <code>docs</code> trong <code>data/projects/${esc(p.id)}/project.js</code>.</div>`;
    return groups.map(g => `<div class="rgroup"><h3 class="lbl">${esc(g.group)}<span class="c">${g.items.length}</span></h3>
      <div class="rlist">${g.items.map(it => { const k = docKind(it);
        return `<a class="ritem" href="${esc(it.url)}" target="_blank" rel="noopener">
          <span class="kd ${k.cls}">${icon(k.ic)}</span>
          <span class="rbody"><b>${esc(docName(p, it.name))}</b><span class="rmeta"><span>${k.label}</span>${it.note ? `<span>${esc(it.note)}</span>` : ""}</span></span>
          ${it.date ? `<span class="rdate">${fmtDate(it.date)}</span>` : `<span class="rdate"></span>`}
          <span class="ropen">${icon("open")}</span></a>`; }).join("")}</div></div>`).join("");
  }

  function projShell(p, view, secs, crumbTail, inner) {
    const crumb = `<nav class="crumb" aria-label="Đường dẫn"><a href="#/">Tổng quan</a><span class="sep">/</span>${crumbTail
      ? `<a href="${href(p.id)}">${esc(shortName(p))}</a><span class="sep">/</span><span class="cur" aria-current="page">${esc(crumbTail)}</span>`
      : `<span class="cur" aria-current="page">${esc(shortName(p))}</span>`}</nav>`;
    return layout("project", { p }, `<div class="proj shell">${crumb}<div class="hoso">${docTree(p, view, secs)}<div class="hmain">${inner}</div></div></div>`);
  }
  const metaRow = p => `<div class="metarow"><span class="st ${stClass(p.status)}">${esc(p.status)}</span>${p.owner ? `<span>Phụ trách <b>${esc(p.owner)}</b></span>` : ""}${p.approver ? `<span>Duyệt <b>${esc(p.approver)}</b></span>` : ""}<span>Cập nhật <b>${fmtDate(p.updated)}</b></span></div>`;

  // Tổng quan dự án: gói trong một màn hình, mỗi khối dẫn sang chỗ chi tiết
  function renderProject(el, p) {
    document.title = shortName(p) + " – Hồ sơ BA";
    const secs = specSections(p), ucs = ucsOf(p);
    const ids = list(p.groups).flatMap(g => list(g.ucs));
    const cnt = { chot: 0, duyet: 0, viet: 0, chua: 0 };
    ids.forEach(id => cnt[ucLevel((ucs[id] || {}).status)]++);
    const ucWords = LEVELS.filter(([k]) => cnt[k]).map(([k, t]) => `${cnt[k]} ${t}`).join(", ");
    const decs = list(p.decisions), qs = list(p.openQuestions), next = list(p.next);
    const uq = ids.reduce((s, id) => s + list((ucs[id] || {}).questions).length, 0);
    const allDocs = docGroups(p).flatMap(g => g.items.map(it => Object.assign({ group: g.group }, it)));
    const dated = allDocs.some(d => d.date);
    const recent = allDocs.slice().sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 4);
    const header = `<header class="ohead"><h1>${esc(p.name)}</h1>${metaRow(p)}
        ${p.goal ? `<p class="ogoal"><b>Mục tiêu</b>${esc(p.goal)}</p>` : ""}</header>`;

    // Dự án mới chỉ có tên và mục tiêu: một khung trống có chủ đích, không bày các ô rỗng
    if (!hasSpec(p) && !allDocs.length && !next.length) {
      el.innerHTML = projShell(p, "home", secs, "", `${header}
        <div class="card notyet oempty"><div class="ico">${icon("folder")}</div><b>Hồ sơ đang trống</b>
          <p>Dự án mới có tên và mục tiêu. Đặc tả nghiệp vụ, quyết định và tài liệu liên quan sẽ hiện ở đây khi được thêm vào.</p></div>`);
      return;
    }

    const tile = (to, n, label, sub, extra) => `<a class="tile" href="${to}"><span class="tn">${n}</span><span class="tl">${label}</span>
      ${extra || ""}<span class="ts">${sub}</span></a>`;
    const tiles = [
      ids.length && tile(href(p.id, "dac-ta", "use-case"), ids.length, "use case", ucWords,
        `<span class="prog" aria-hidden="true">${LEVELS.map(([k]) => cnt[k] ? `<i class="l-${k}" style="flex:${cnt[k]}"></i>` : "").join("")}</span>`),
      decs.length && tile(href(p.id, "dac-ta", "quyet-dinh"), decs.length, "quyết định", `mới nhất ${fmtDate(decs[0].date)}`),
      (qs.length + uq) && tile(href(p.id, "dac-ta", "cau-hoi"), qs.length + uq, "câu hỏi mở", uq ? `${qs.length} của dự án, ${uq} trong use case` : "chờ trả lời"),
      allDocs.length && tile(href(p.id, "lien-quan"), allDocs.length, "tài liệu liên quan", `${docGroups(p).length} nhóm`)
    ].filter(Boolean);

    const box = (title, more, body, cls) => `<section class="obox ${cls || ""}"><div class="oh"><h2>${title}</h2>${more || ""}</div>${body}</section>`;
    const moreLink = (to, t) => `<a class="more" href="${to}">${t}${icon("back", "fwd")}</a>`;
    const mitem = it => { const k = docKind(it);
      return `<a class="mitem" href="${esc(it.url)}" target="_blank" rel="noopener" title="${esc(it.name)}"><span class="kd ${k.cls}">${icon(k.ic)}</span>
        <span class="rbody"><b>${esc(docName(p, it.name))}</b><span class="rmeta"><span>${k.label}</span>${it.date ? `<span>${fmtDate(it.date)}</span>` : ""}</span></span>
        ${icon("open", "xo")}<span class="sr"> (mở tab mới)</span></a>`; };

    const nextBox = next.length || qs.length ? box("Việc tiếp theo", qs.length ? moreLink(href(p.id, "dac-ta", "cau-hoi"), `${qs.length + uq} câu hỏi mở`) : "",
      `<ul class="olist next">${(next.length ? next : qs).slice(0, 4).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`) : "";
    const decBox = decs.length ? box("Quyết định gần đây", moreLink(href(p.id, "dac-ta", "quyet-dinh"), `Xem cả ${decs.length}`),
      `<ul class="olist decs">${decs.slice(0, 3).map(d => `<li><span class="d">${fmtDate(d.date)}</span><span>${esc(d.text)}</span></li>`).join("")}</ul>`) : "";
    // Đặc tả: bấm thẳng vào từng UC; dự án chưa có đặc tả trên trang thì chỉ sang tài liệu đặc tả bên ngoài (nếu có)
    const extSpec = allDocs.filter(d => /đặc tả|spec/i.test(d.name));
    const specBox = ids.length
      ? box("Đặc tả nghiệp vụ", moreLink(href(p.id, "dac-ta", "ban-do"), "Mở bản đồ nghiệp vụ"),
        `<p class="odesc">${list(p.groups).length} luồng, ${ids.length} use case${ucWords ? ": " + ucWords : ""}. Bấm mã để mở use case.</p>
        <div class="ucchips">${ids.map(id => { const u = ucs[id] || { name: "(chưa có file)", status: "" };
          return `<a href="${href(p.id, id)}" title="${esc(id + " " + u.name + " – " + (u.status || "Chưa viết"))}"><i class="sdot l-${ucLevel(u.status)}"></i><span class="mono">${esc(id)}</span><span class="sr"> ${esc(u.name)}, ${esc(u.status || "Chưa viết")}</span></a>`; }).join("")}</div>`)
      : box("Đặc tả nghiệp vụ", "", extSpec.length
        ? `<p class="odesc">Đặc tả chưa đưa lên trang này; bản hiện có ở tài liệu ngoài:</p><div class="mini">${extSpec.map(mitem).join("")}</div>`
        : `<p class="odesc">Chưa có đặc tả. Bản đồ nghiệp vụ và use case sẽ hiện ở đây khi được viết.</p>`);
    const relBox = allDocs.length ? box(dated ? "Tài liệu mới cập nhật" : "Tài liệu", moreLink(href(p.id, "lien-quan"), `Xem cả ${allDocs.length}`),
      `<div class="mini">${recent.map(mitem).join("")}</div>`) : "";

    el.innerHTML = projShell(p, "home", secs, "", `${header}
      ${tiles.length ? `<div class="tiles">${tiles.join("")}</div>` : ""}
      <div class="ogrid">${nextBox}${decBox}${specBox}${relBox}</div>`);
  }

  function renderRelated(el, p) {
    document.title = "Tài liệu liên quan – " + shortName(p) + " – Hồ sơ BA";
    el.innerHTML = projShell(p, "related", specSections(p), "Tài liệu liên quan", `
      <header class="dochead"><p class="kicker">${esc(shortName(p))}</p><h1>Tài liệu liên quan</h1>
        <p class="lede">Google Docs, Sheets, PDF trên Drive và các trang đã làm cho dự án. Bấm để mở trong tab mới.</p></header>
      <section class="hsec">${relatedList(p)}</section>`);
  }

  // Tài liệu đặc tả: các mục nối tiếp; cây bên trái làm mục lục
  function renderSpec(el, p, target) {
    document.title = "Đặc tả – " + shortName(p) + " – Hồ sơ BA";
    const secs = specSections(p);
    el.innerHTML = projShell(p, "spec", secs, "Tài liệu đặc tả", `
      <header class="dochead"><p class="kicker">Tài liệu đặc tả</p><h1>Đặc tả nghiệp vụ ${esc(shortName(p))}</h1>${metaRow(p)}</header>
      ${secs.length ? secs.map((s, i) => `<section class="sec" id="s-${s.id}" tabindex="-1" aria-labelledby="h-${s.id}">
        <div class="sechead"><span class="n" aria-hidden="true">${pad2(i + 1)}</span><h2 id="h-${s.id}">${esc(s.title)}</h2>${s.note ? `<span class="note">${esc(s.note)}</span>` : ""}</div>
        ${s.html}</section>`).join("") : `<div class="paper nospec"><b>Chưa có đặc tả</b>Dự án này chưa có bản đồ nghiệp vụ, use case hay quyết định nào được ghi.</div>`}`);

    const mm = el.querySelector(".mm");
    if (mm) {
      const redraw = () => drawMindmap(mm);
      afterFonts(redraw);
      on(window, "resize", redraw);
      if (window.ResizeObserver) { const ro = new ResizeObserver(redraw); ro.observe(mm); offs.push(() => ro.disconnect()); }
    }
    const ucd = el.querySelector(".ucd");
    if (ucd && document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (ucd.isConnected) ucd.innerHTML = useCaseSvg(p); });
    if (!secs.length) return;

    // Bấm mục trong cây: cuộn tới mục, không vẽ lại trang
    const items = [...el.querySelectorAll(".dtree [data-sec]")];
    const go = (id, how) => { const t = document.getElementById("s-" + id); if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 12 - barH(), behavior: how }); };
    items.forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      history.replaceState(null, "", href(p.id, "dac-ta", a.dataset.sec));
      go(a.dataset.sec, smooth());
      const t = document.getElementById("s-" + a.dataset.sec); if (t) t.focus({ preventScroll: true });
    }));
    if (target) afterFonts(() => go(target, "auto"));
    const spy = () => {
      let cur = secs[0].id;
      secs.forEach(s => { const t = document.getElementById("s-" + s.id); if (t && t.getBoundingClientRect().top < innerHeight * 0.3) cur = s.id; });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = secs[secs.length - 1].id;
      items.forEach(a => { const v = a.dataset.sec === cur; a.classList.toggle("on", v); if (v) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current"); });
    };
    on(window, "scroll", spy, { passive: true });
    spy();
  }

  // ------------------------------------------------------------------ Trang UC
  function diagramFig(p, uc, kind, caption, zoomable) {
    const src = `diagrams/${p.id}/${uc.id}-${kind}${isDark() ? ".dark" : ""}.svg`;   // .svg sáng, .dark.svg tối
    return `<div class="fig ${zoomable ? "zoomable" : ""}" data-kind="${kind}"><img src="${esc(src)}" alt="${esc(caption)} ${esc(uc.id)}" data-src="${esc(src)}"></div>
      <div class="figcap"><span>${esc(caption)}</span><a href="${esc(src)}" target="_blank" rel="noopener">Mở ảnh gốc${icon("open")}</a></div>`;
  }

  // UC trước / UC sau theo thứ tự trên bản đồ nghiệp vụ
  function pager(p, ucId) {
    const ids = list(p.groups).flatMap(g => list(g.ucs)), i = ids.indexOf(ucId), u = ucsOf(p);
    if (i < 0) return "";
    const lk = (id, cls, lab) => id ? `<a class="${cls}" href="${href(p.id, id)}"><small>${lab}</small><span><span class="mono">${esc(id)}</span> ${esc((u[id] || {}).name || "")}</span></a>` : "<span></span>";
    return `<nav class="ucpager" aria-label="Chuyển use case">${lk(ids[i - 1], "prev", "← Use case trước")}${lk(ids[i + 1], "next", "Use case sau →")}</nav>`;
  }
  function renderUc(el, p, ucId) {
    const u = ucsOf(p)[ucId];
    const g = list(p.groups).find(x => list(x.ucs).includes(ucId));
    document.title = ucId + (u ? " " + u.name : "") + " – Hồ sơ BA";
    const crumb = `<nav class="crumb" aria-label="Đường dẫn"><a href="#/">Tổng quan</a><span class="sep">/</span><a href="${href(p.id)}">${esc(shortName(p))}</a><span class="sep">/</span><a href="${href(p.id, "dac-ta")}">Tài liệu đặc tả</a><span class="sep">/</span>
      <span class="cur" aria-current="page"><span class="mono">${esc(ucId)}</span>${u ? " " + esc(u.name) : ""}</span><a class="back" href="${href(p.id, "dac-ta", "ban-do")}">${icon("back")}Về bản đồ nghiệp vụ</a></nav>`;
    const cur = { p, uc: ucId };
    if (!u) {
      el.innerHTML = layout("project", cur, `<div class="ucpage shell">${crumb}<div class="card notyet" style="margin-top:22px"><div class="ico">${icon("search")}</div><b>Không tìm thấy ${esc(ucId)}</b>
        <p>Chưa có file <span class="mono">data/projects/${esc(p.id)}/uc/${esc(ucId)}.js</span> hoặc file chưa được khai báo trong data/manifest.js.</p></div></div>`);
      return;
    }
    const d = u, detail = hasDetail(d);
    const grpLine = `<div class="code"><span class="mono">${esc(ucId)}</span>${g ? `<span class="g" style="--gc:${esc(g.color)}"><i></i>${esc(g.name)}</span>` : ""}</div>`;

    if (!detail) {
      el.innerHTML = layout("project", cur, `<div class="ucpage shell">${crumb}<div class="uclayout">
        <aside class="card sum">${grpLine}<h1 class="nm">${esc(u.name)}</h1>${pill(u.status)}
          ${u.who ? `<div class="meta" style="grid-template-columns:1fr"><div><span>Người tham gia</span><ul class="pre who">${String(u.who).split("·").map(x => x.trim()).filter(Boolean).map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>` : ""}</aside>
        <div class="card notyet"><div class="ico">${icon("pencil")}</div><b>Chưa viết</b>
          <p>Use case này mới có tên và người tham gia; đặc tả chi tiết (luồng, ngoại lệ, quy tắc, user story…) chưa được viết.</p>
          <a class="btn primary" href="${href(p.id, "dac-ta", "ban-do")}">${icon("back")}Về bản đồ ${esc(shortName(p))}</a>${pager(p, ucId)}</div>
      </div></div>`);
      return;
    }

    const diagrams = list(d.diagrams);
    const steps = list(d.steps), exs = list(d.exceptions), rules = list(d.rules), stories = list(d.stories),
      data = list(d.data), layers = list(d.layers), qs = list(d.questions), clog = list(d.changelog);
    const legend = Object.keys(TAGS).map(tag).join("");

    const parts = [
      diagrams.includes("activity") && { id: "luong", nav: "Luồng", title: "Luồng hoạt động",
        x: `<button type="button" class="btn" data-zoom="activity">${icon("expand")}Phóng to</button>`,
        html: diagramFig(p, u, "activity", "Sơ đồ hoạt động. Bấm vào hình hoặc nút Phóng to để xem lớn.", true) },
      { id: "cac-buoc", nav: "Các bước", title: "Các bước chính", c: steps.length, x: legend,
        html: `<ol class="steps">${steps.map((s, i) => `<li style="--rc:${roleColor(p, s.who)}"><span class="num" aria-hidden="true">${i + 1}</span><div class="body">
          <div class="top">${role(p, s.who)}${tag(s.tag)}</div><div class="act">${esc(s.act)}</div>
          ${s.sys ? `<div class="sys"><b>Hệ thống:</b> ${esc(s.sys)}</div>` : ""}</div></li>`).join("")}</ol>` },
      exs.length && { id: "ngoai-le", nav: "Ngoại lệ", title: "Ngoại lệ", c: exs.length,
        html: `<div class="exs">${exs.map(e => `<div class="ex ${esc(e.tag)}"><div class="t"><b><span class="mono">${esc(e.id)}</span>${esc(e.name)}</b>${tag(e.tag)}</div><p>${esc(e.text)}</p></div>`).join("")}</div>` },
      rules.length && { id: "quy-tac", nav: "Quy tắc", title: "Quy tắc nghiệp vụ", c: rules.length,
        html: `<div class="tblwrap"><table class="t"><thead><tr><th style="width:96px">Mã</th><th>Quy tắc</th><th style="width:150px">Nhãn</th></tr></thead><tbody>
          ${rules.map(r => `<tr><td class="id">${esc(r.id)}</td><td style="color:var(--tx)">${esc(r.text)}</td><td>${tag(r.tag)}</td></tr>`).join("")}</tbody></table></div>` },
      stories.length && { id: "user-story", nav: "User story", title: "User story", c: stories.length,
        html: `<div class="sts">${stories.map(s => `<div class="us"><div class="hd"><span class="id">${esc(s.id)}</span>${role(p, s.who)}</div>
          <div class="say">Là <b>${esc(s.who)}</b>, tôi muốn ${esc(String(s.want || "").charAt(0).toLowerCase() + String(s.want || "").slice(1))} <em>${esc(s.why)}</em>.</div>
          <ul>${list(s.ok).map(x => `<li class="y"><i>✓</i><span>${esc(x)}</span></li>`).join("")}${list(s.no).map(x => `<li class="n"><i>✗</i><span>${esc(x)}</span></li>`).join("")}</ul></div>`).join("")}</div>` },
      (data.length || diagrams.includes("state")) && { id: "trang-thai", nav: "Trạng thái & dữ liệu", title: "Trạng thái & dữ liệu",
        html: `<div class="${diagrams.includes("state") && data.length ? "sd" : ""}">
          ${diagrams.includes("state") ? `<div>${diagramFig(p, u, "state", "Trạng thái phiếu", true)}</div>` : ""}
          ${data.length ? `<div><h3 class="lbl">Dữ liệu cần lưu</h3><div class="tblwrap"><table class="t"><thead><tr><th style="width:130px">Đối tượng</th><th>Trường</th></tr></thead><tbody>
            ${data.map(r => `<tr><td class="k">${esc(r.obj)}</td><td>${dots(r.fields)}</td></tr>`).join("")}</tbody></table></div></div>` : ""}</div>` },
      layers.length && { id: "ba-lop", nav: "3 lớp", title: "3 lớp: nghiệp vụ – Nextwaves – Ganico v2", c: layers.length,
        html: `<div class="tblwrap scroll"><table class="t" style="min-width:720px"><thead><tr><th style="width:20%">Việc</th><th style="width:20%">Nghiệp vụ</th><th>Nextwaves giai đoạn 1</th><th style="width:25%">Ganico v2</th></tr></thead><tbody>
          ${layers.map(l => `<tr><td class="k">${esc(l.item)}<div style="margin-top:8px">${tag(l.tag)}</div></td><td>${esc(l.biz)}</td><td>${esc(l.nw)}</td><td>${esc(l.g2)}</td></tr>`).join("")}</tbody></table></div>` },
      qs.length && { id: "cau-hoi", nav: "Câu hỏi mở", title: "Câu hỏi mở", c: qs.length,
        html: `<ol class="qs">${qs.map(q => `<li><span>${esc(q)}</span></li>`).join("")}</ol>` },
      clog.length && { id: "nhat-ky", nav: "Nhật ký", title: "Nhật ký thay đổi", c: clog.length,
        html: `<ul class="clog">${clog.map(c => `<li><span class="v">v${esc(c.v)}</span><span class="d">${fmtDate(c.date)}</span><span>${esc(c.text)}</span></li>`).join("")}</ul>` }
    ].filter(Boolean);

    const actors = String(d.actors || "").split("·").map(x => x.trim()).filter(Boolean);
    const pre = String(d.pre || "").split("·").map(x => x.trim()).filter(Boolean);
    const f = (label, body, cls) => body ? `<div class="f ${cls || ""}"><span>${label}</span><div>${body}</div></div>` : "";

    el.innerHTML = layout("project", cur, `<div class="ucpage shell">${crumb}<div class="uclayout">
      <aside class="card sum">
        ${grpLine}<h1 class="nm">${esc(u.name)}</h1>${pill(u.status)}
        <div class="meta"><div><span>Phiên bản</span><b>v${esc(d.version)}</b></div><div><span>Cập nhật</span><b>${fmtDate(d.updated)}</b></div>
          <div style="grid-column:1/-1"><span>Người duyệt</span><b>${esc(d.approver)}</b></div></div>
        ${f("Mục tiêu", d.goal ? `<div class="goal">${esc(d.goal)}</div>` : "")}
        ${actors.length ? `<div class="f"><span>Tác nhân</span><div class="chips">${actors.map(a => role(p, a)).join("")}</div></div>` : ""}
        ${f("Bắt đầu khi", esc(d.trigger))}
        ${pre.length ? `<div class="f"><span>Điều kiện trước</span><ul class="pre">${pre.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
        ${f("Thành công", esc(d.success), "ok")}
        ${f("Không thành công", esc(d.fail), "bad")}
        ${qs.length ? `<div class="oq"><b>Câu hỏi mở (${qs.length})</b><ul>${qs.map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>` : ""}
      </aside>
      <div class="ucmain">
        <nav class="secnav" aria-label="Các phần">${parts.map((s, i) => `<button type="button" data-t="p-${s.id}" class="${i ? "" : "on"}">${esc(s.nav)}${s.c ? `<span class="c">${s.c}</span>` : ""}</button>`).join("")}</nav>
        ${parts.map((s, i) => `<section class="card part" id="p-${s.id}" tabindex="-1"><h2><span class="n" aria-hidden="true">${pad2(i + 1)}</span>${esc(s.title)}${s.x ? `<span class="x">${s.x}</span>` : ""}</h2>${s.html}</section>`).join("")}
        ${pager(p, ucId)}
      </div></div></div>`);

    // Ảnh sơ đồ chưa vẽ → báo cách vẽ
    el.querySelectorAll(".fig img").forEach(img => {
      img.addEventListener("error", () => {
        const fig = img.parentElement; fig.classList.remove("zoomable");
        fig.innerHTML = `<div class="figmiss">Chưa có ảnh <code>${esc(img.dataset.src)}</code><br>Chạy <code>build-diagrams</code> để vẽ từ file .puml cùng tên.</div>`;
      });
    });
    // Phóng to
    const openZoom = kind => { const img = el.querySelector(`.fig[data-kind="${kind}"] img`); if (img && img.naturalWidth) zoomOverlay(img.dataset.src, `${ucId}: ${kind === "state" ? "sơ đồ trạng thái" : "sơ đồ hoạt động"}`); };
    el.querySelectorAll("[data-zoom]").forEach(b => b.onclick = () => openZoom(b.dataset.zoom));
    el.querySelectorAll(".fig.zoomable").forEach(fig => fig.addEventListener("click", () => { if (fig.classList.contains("zoomable")) openZoom(fig.dataset.kind); }));

    // Mục đang xem
    const nav = el.querySelector(".secnav");
    const btns = [...nav.querySelectorAll("button")];
    btns.forEach(b => b.onclick = () => { const t = document.getElementById(b.dataset.t); if (t) { window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - nav.offsetHeight - barH() - 14, behavior: smooth() }); t.focus({ preventScroll: true }); } });
    const spy = () => {
      const lim = nav.offsetHeight + barH() + 40;
      let cur = btns[0].dataset.t;
      btns.forEach(b => { const t = document.getElementById(b.dataset.t); if (t && t.getBoundingClientRect().top < lim) cur = b.dataset.t; });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = btns[btns.length - 1].dataset.t;
      btns.forEach(b => { const v = b.dataset.t === cur; b.classList.toggle("on", v); if (v) b.setAttribute("aria-current", "location"); else b.removeAttribute("aria-current"); });
      // hàng tab cuộn ngang: giữ tab đang xem trong tầm nhìn (chỉ cuộn hàng tab, không cuộn trang)
      const ob = nav.querySelector("button.on");
      if (ob && nav.scrollWidth > nav.clientWidth) {
        const l = ob.offsetLeft - 8, r = ob.offsetLeft + ob.offsetWidth + 8;
        if (l < nav.scrollLeft) nav.scrollLeft = l; else if (r > nav.scrollLeft + nav.clientWidth) nav.scrollLeft = r - nav.clientWidth;
      }
    };
    on(window, "scroll", spy, { passive: true });
    spy();
  }

  // ------------------------------------------------------------------ Lớp phủ phóng to (cuộn, kéo, Ctrl + lăn chuột)
  function zoomOverlay(src, title) {
    const ov = document.createElement("div");
    ov.className = "zoom"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", title);
    const opener = document.activeElement, appEl = document.getElementById("app");
    ov.innerHTML = `<div class="bar"><span class="ttl">${esc(title)}</span><span class="hint">Kéo để di chuyển, Ctrl + lăn chuột để phóng</span>
      <button type="button" class="btn primary zclose" data-a="close" title="Đóng (Esc)">${icon("close")}Đóng</button>
      <button type="button" class="btn ghost" data-a="out" title="Thu nhỏ (−)" aria-label="Thu nhỏ">−</button><span class="lvl">100%</span><button type="button" class="btn ghost" data-a="in" title="Phóng to (+)" aria-label="Phóng to">+</button>
      <button type="button" class="btn ghost" data-a="fit" title="Vừa màn hình (0)">Vừa màn hình</button><button type="button" class="btn ghost" data-a="one" title="Kích thước gốc (1)">100%</button>
</div>
      <div class="stage" tabindex="0" aria-label="Sơ đồ; dùng phím mũi tên để di chuyển"><div class="inner"><img alt="${esc(title)}"></div></div>`;
    document.body.appendChild(ov);
    const img = ov.querySelector("img"), stage = ov.querySelector(".stage"), lvl = ov.querySelector(".lvl");
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    let z = 1, nw = 0, nh = 0;
    const apply = (nz, cx, cy) => {
      nz = Math.min(4, Math.max(0.2, nz));
      const r = stage.getBoundingClientRect();
      cx = cx == null ? r.width / 2 : cx; cy = cy == null ? r.height / 2 : cy;
      const fx = (stage.scrollLeft + cx) / (nw * z + 56), fy = (stage.scrollTop + cy) / (nh * z + 56);
      z = nz; img.style.width = (nw * z) + "px"; img.style.height = (nh * z) + "px"; lvl.textContent = Math.round(z * 100) + "%";
      stage.scrollLeft = fx * (nw * z + 56) - cx; stage.scrollTop = fy * (nh * z + 56) - cy;
    };
    const fit = () => { const r = stage.getBoundingClientRect(); apply(Math.min((r.width - 56) / nw, (r.height - 56) / nh, 1.6)); stage.scrollTop = 0; };
    img.onload = () => { nw = img.naturalWidth || 1000; nh = img.naturalHeight || 1000; fit(); };
    img.src = src;
    setTimeout(() => { const c = ov.querySelector('[data-a="close"]'); if (c) c.focus(); }, 0);
    if (appEl) appEl.inert = true;
    const close = () => { ov.remove(); document.documentElement.style.overflow = prevOverflow; removeEventListener("keydown", key); removeEventListener("hashchange", close);
      if (appEl) appEl.inert = false; if (opener && opener.isConnected && opener.focus) opener.focus(); };
    const key = e => {
      if (e.key === "Escape") close();
      else if (e.key === "Tab") { const f = [...ov.querySelectorAll("button, .stage")]; const i = f.indexOf(document.activeElement);
        e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
      else if (/^Arrow/.test(e.key)) { e.preventDefault(); const d = 60; stage.scrollBy({ left: e.key === "ArrowLeft" ? -d : e.key === "ArrowRight" ? d : 0, top: e.key === "ArrowUp" ? -d : e.key === "ArrowDown" ? d : 0 }); }
      else if (e.key === "+" || e.key === "=") apply(z * 1.25);
      else if (e.key === "-") apply(z / 1.25);
      else if (e.key === "0") fit();
      else if (e.key === "1") apply(1);
    };
    addEventListener("keydown", key);
    addEventListener("hashchange", close);
    ov.querySelector(".bar").addEventListener("click", e => {
      const a = e.target.closest("[data-a]"); if (!a) return;
      ({ in: () => apply(z * 1.25), out: () => apply(z / 1.25), fit, one: () => apply(1), close })[a.dataset.a]();
    });
    stage.addEventListener("wheel", e => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const r = stage.getBoundingClientRect();
      apply(z * (e.deltaY < 0 ? 1.12 : 1 / 1.12), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    let drag = null;
    stage.addEventListener("pointerdown", e => { if (e.button !== 0) return; drag = { x: e.clientX, y: e.clientY, l: stage.scrollLeft, t: stage.scrollTop }; stage.classList.add("drag"); stage.setPointerCapture(e.pointerId); });
    stage.addEventListener("pointermove", e => { if (!drag) return; stage.scrollLeft = drag.l - (e.clientX - drag.x); stage.scrollTop = drag.t - (e.clientY - drag.y); });
    const end = () => { drag = null; stage.classList.remove("drag"); };
    stage.addEventListener("pointerup", end); stage.addEventListener("pointercancel", end);
  }

  // ------------------------------------------------------------------ Bộ công cụ
  function renderTools(el) {
    document.title = "Bộ công cụ – Hồ sơ BA";
    let rows = "";
    SITE.toolbox.forEach((st, gi) => {
      const items = list(st.items);
      items.forEach((it, i) => {
        const cmds = Array.isArray(it.cmd) ? it.cmd : [it.cmd].filter(Boolean);
        rows += `<tr class="${i === 0 ? "first" : ""}">
          ${i === 0 ? `<td class="step" rowspan="${items.length}"><span class="n">Bước ${gi + 1}</span><b>${esc(st.step)}</b></td>` : ""}
          <td class="nm">${esc(it.name)}</td><td class="use">${esc(it.use)}</td>
          <td class="cmd"><div class="cmdline">${cmds.map(c => /^\//.test(c)
            ? `<span class="kbd"><span>${esc(c)}</span><button type="button" data-copy="${esc(c)}" aria-label="Chép lệnh ${esc(c)}">Chép</button></span>`
            : `<span class="kbd plain"><span>${esc(c)}</span></span>`).join("")}</div>${it.note ? `<span class="cmdnote">${esc(it.note)}</span>` : ""}</td></tr>`;
      });
    });
    const n = SITE.toolbox.reduce((s, g) => s + list(g.items).length, 0);
    el.innerHTML = layout("tools", null, `<div class="tools wrap">
      <p class="kicker">Skill và agent của Claude Code</p>
      <h1>Bộ công cụ</h1>
      <p class="lede">${n} công cụ xếp theo bước làm việc. Lệnh bắt đầu bằng <code>/</code> thì gõ thẳng vào Claude Code; các mục khác nhắc tên trong yêu cầu, Claude tự gọi.</p>
      <div class="glass tkwrap"><table class="tk"><thead><tr><th scope="col">Bước</th><th scope="col">Skill</th><th scope="col">Dùng khi</th><th scope="col">Gõ lệnh</th></tr></thead><tbody>${rows}</tbody></table></div></div>`);
    el.querySelectorAll("[data-copy]").forEach(b => b.onclick = () => {
      const txt = b.dataset.copy;
      const done = () => { b.textContent = "Đã chép"; b.classList.add("done"); setTimeout(() => { b.textContent = "Chép"; b.classList.remove("done"); }, 1400); };
      const fallback = () => { const ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) { /* bỏ qua */ } ta.remove(); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
    });
  }

  // ------------------------------------------------------------------ Điều hướng
  function render(keep) {
    const y = scrollY, sideEl = document.getElementById("side"), sy = sideEl ? sideEl.scrollTop : 0;
    cleanup();
    const route = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    const el = document.getElementById("app");
    if (!route.length) renderHome(el);
    else if (route[0] === "cong-cu") renderTools(el);
    else {
      const p = SITE.projects.find(x => x.id === route[0]);
      if (!p) {
        document.title = "Không tìm thấy – Hồ sơ BA";
        el.innerHTML = layout("home", null, `<div class="shell"><div class="empty" style="padding-top:80px"><b>Không tìm thấy dự án “${esc(route[0])}”</b><a class="btn primary" href="#/">${icon("back")}Về tổng quan</a></div></div>`);
      } else if (route.length === 1) renderProject(el, p);
      else if (route[1] === "dac-ta") renderSpec(el, p, route[2]);
      else if (route[1] === "lien-quan") renderRelated(el, p);
      else renderUc(el, p, route[1]);
    }
    wireChrome(el);
    wireTree(el);
    const side = document.getElementById("side");
    if (keep) { window.scrollTo(0, y); if (side) side.scrollTop = sy; }
    else {
      window.scrollTo(0, 0);
      const on = side && side.querySelector(".suc.on, .sproj.on");   // giữ mục đang mở trong tầm nhìn của thanh bên
      if (side) { side.scrollTop = sy; if (on) { const r = on.getBoundingClientRect(), b = side.getBoundingClientRect(); if (r.top < b.top + 60 || r.bottom > b.bottom - 80) on.scrollIntoView({ block: "center" }); } }
    }
  }
  // Thanh bên (mở/đóng trên màn hình hẹp) và nút đổi giao diện
  function wireChrome(el) {
    const app = el.querySelector(".app"), opener = el.querySelector("[data-side-open]");
    if (!app) return;
    const mainCol = el.querySelector(".main");
    const setOpen = v => { app.classList.toggle("side-open", v); if (opener) opener.setAttribute("aria-expanded", v); if (mainCol) mainCol.inert = v;
      if (v) { const f = el.querySelector(".side a"); if (f) f.focus(); } else if (opener && opener.offsetParent) opener.focus(); };
    if (opener) opener.onclick = () => setOpen(true);
    el.querySelectorAll("[data-side-close]").forEach(b => b.onclick = () => setOpen(false));
    on(window, "keydown", e => { if (e.key === "Escape" && app.classList.contains("side-open")) setOpen(false); });
    const sk = el.querySelector("[data-skip]");
    if (sk) sk.onclick = e => { e.preventDefault(); const m = document.getElementById("main"); if (m) m.focus(); };
    // chú thích hiện ngay khi rê chuột / Tab vào biểu tượng (dải thu gọn)
    if (app.classList.contains("rail")) {
      let tip = document.querySelector(".railtip"); if (!tip) { tip = document.createElement("div"); tip.className = "railtip"; tip.setAttribute("aria-hidden", "true"); document.body.appendChild(tip); }
      const show = t => { const lab = t.dataset.tip || t.getAttribute("title"); if (!lab) return; const r = t.getBoundingClientRect(); tip.textContent = lab; tip.style.top = (r.top + r.height / 2) + "px"; tip.style.left = (r.right + 10) + "px"; tip.classList.add("on"); };
      const hide = () => tip.classList.remove("on");
      el.querySelectorAll(".side [data-tip], .side [title]").forEach(t => { on(t, "mouseenter", () => show(t)); on(t, "focus", () => show(t)); on(t, "mouseleave", hide); on(t, "blur", hide); });
      offs.push(hide);
    }
    const rb = el.querySelector("[data-rail]");
    if (rb) rb.onclick = () => {
      const now = app.classList.contains("rail");
      try { localStorage.setItem(SIDE_KEY, now ? "open" : "rail"); } catch (e) { /* bỏ qua */ }
      render(true);
      const nb = document.querySelector("[data-rail]"); if (nb) nb.focus();
    };
    el.querySelectorAll("[data-theme-set]").forEach(b => b.onclick = () => {
      const t = b.dataset.themeSet;
      if (getTheme() === t) return;
      setTheme(t); render(true);
      const nb = document.querySelector(`[data-theme-set="${t}"]`); if (nb) nb.focus();
    });
  }
  // Cây tài liệu: lọc theo chữ (bỏ dấu), gập/mở trên màn hẹp
  const fold = t => String(t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  function wireTree(el) {
    const tree = el.querySelector(".dtree"); if (!tree) return;
    const tg = tree.querySelector(".dt-toggle");
    if (tg) tg.onclick = () => { const o = !tree.classList.contains("open"); tree.classList.toggle("open", o); tg.setAttribute("aria-expanded", o); };
    const inp = tree.querySelector(".dt-search input"), none = tree.querySelector(".dt-none");
    if (!inp) return;
    const folders = [...tree.querySelectorAll(".dt-f")], was = folders.map(d => d.open);
    inp.addEventListener("input", () => {
      const q = fold(inp.value.trim());
      let hits = 0;
      tree.querySelectorAll(".dt-i").forEach(a => { const m = !q || fold(a.textContent).includes(q); a.hidden = !m; if (m && q) hits++; });
      folders.forEach((d, i) => { const any = [...d.querySelectorAll(".dt-i")].some(a => !a.hidden); d.hidden = !!q && !any; d.open = q ? any : was[i]; });
      // kết quả trong nội dung dự án
      const box = tree.querySelector(".dt-hits"), p = SITE.projects.find(x => x.id === tree.dataset.p);
      let found = [];
      if (q && p) {
        const u = ucsOf(p);
        list(p.groups).flatMap(g => list(g.ucs)).forEach(id => { const x = u[id] || {}; if (fold(id + " " + (x.name || "")).includes(q)) found.push([href(p.id, id), "Use case", id + " " + (x.name || "")]); });
        list(p.decisions).forEach(d => { if (fold(d.text).includes(q)) found.push([href(p.id, "dac-ta", "quyet-dinh"), "Quyết định " + fmtDate(d.date), d.text]); });
        list(p.openQuestions).forEach(t => { if (fold(t).includes(q)) found.push([href(p.id, "dac-ta", "cau-hoi"), "Câu hỏi mở", t]); });
        list(p.glossary).forEach(g => { if (fold(g.term + " " + g.def).includes(q)) found.push([href(p.id, "dac-ta", "thuat-ngu"), "Thuật ngữ", g.term + ": " + g.def]); });
        list(p.next).forEach(t => { if (fold(t).includes(q)) found.push([href(p.id), "Việc tiếp theo", t]); });
      }
      box.hidden = !found.length;
      box.innerHTML = found.length ? `<div class="dt-hh">Trong nội dung (${found.length})</div>` + found.slice(0, 8).map(([to, k, t]) => `<a class="dt-hit" href="${to}"><small>${esc(k)}</small><span>${esc(t)}</span></a>`).join("") : "";
      hits += found.length;
      none.hidden = !q || hits > 0;
      if (q && !hits) none.innerHTML = `Không thấy tài liệu hay nội dung nào chứa “${esc(inp.value.trim())}”. Thử từ ngắn hơn, ví dụ “Nextwaves”, “phân quyền”.`;
    });
    inp.addEventListener("keydown", e => { if (e.key === "Escape" && inp.value) { e.stopPropagation(); inp.value = ""; inp.dispatchEvent(new Event("input")); } });
  }
  const barH = () => { const b = document.querySelector(".mbar"); return b && getComputedStyle(b).display !== "none" ? b.offsetHeight : 0; };
  const smooth = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  function start() {
    if (SITE.errors.length) console.warn("Lỗi dữ liệu:", SITE.errors);
    addEventListener("hashchange", () => render());
    render();
  }
})();
