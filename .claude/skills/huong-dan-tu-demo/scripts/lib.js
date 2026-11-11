const { chromium } = require('playwright');
exports.B='https://xuong.nextwaves.app';
exports.open = async () => { const b = await chromium.launch(); const ctx = await b.newContext({ viewport:{width:1366,height:820}, storageState:'state.json' }); const p = await ctx.newPage(); p.setDefaultTimeout(30000); return {b,p}; };
exports.shotter = (p, prefix) => { let n=0; return async (loc) => { n++; const f=`guide2/${prefix}${String(n).padStart(2,'0')}.png`;
  if (loc) { await loc.evaluate(e=>{e.dataset.o=e.style.outline; e.style.outline='4px solid #e11d48'; e.style.outlineOffset='3px'; e.scrollIntoView({block:'center'});}).catch(()=>{}); await p.waitForTimeout(300); }
  await p.screenshot({ path:f }); if (loc) await loc.evaluate(e=>{e.style.outline=e.dataset.o||'';}).catch(()=>{}); return f; }; };
exports.go = async (p,u) => { await p.goto(exports.B+u, { waitUntil:'domcontentloaded' }); await p.waitForTimeout(4500); };
