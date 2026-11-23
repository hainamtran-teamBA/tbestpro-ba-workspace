"""Ghép ảnh chụp các bước thành trang hướng dẫn nhiều tab.

Cách dùng: python3 -I build_guide.py spec.json out.html
spec.json:
{
  "eyebrow": "Kho 7 · Thử trên demo X · 06/11/2026",
  "title": "Hướng dẫn dùng X cho ...",
  "lead": "Mỗi tab là một nghiệp vụ ... Ô viền đỏ là chỗ cần bấm.",
  "foot": "Ghi chú cuối trang",
  "tabs": [
    {"id": "nhap", "name": "Nhập kho", "roles": "Làm: ... · Duyệt: ...",
     "ok": ["Làm được ..."], "no": ["Chưa làm được ..."],
     "steps": [["anh.jpg", "Tiêu đề bước", "Mô tả, được dùng <b>đậm</b>"]]}
  ]
}
Đường dẫn ảnh tính từ thư mục chứa spec.json. Ảnh nên nén trước (sips -Z 1100, JPEG 70).
"""
import base64, json, os, sys

CSS = """
:root{--bg:#f5f6f8;--card:#fff;--ink:#1d1d1f;--muted:#5b5f69;--line:#e2e4ea;--accent:#0b5cad;--accent-soft:#e8f1fb;--ok:#17663a;--ok-bg:#e8f6ee;--no:#8a4b00;--no-bg:#fff4e2}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#111214;--card:#1b1c20;--ink:#f1f2f4;--muted:#a3a7b0;--line:#2d2f35;--accent:#6aa9ec;--accent-soft:#18283c;--ok:#7bd59f;--ok-bg:#15301f;--no:#f0c060;--no-bg:#3a2c12}}
:root[data-theme="dark"]{--bg:#111214;--card:#1b1c20;--ink:#f1f2f4;--muted:#a3a7b0;--line:#2d2f35;--accent:#6aa9ec;--accent-soft:#18283c;--ok:#7bd59f;--ok-bg:#15301f;--no:#f0c060;--no-bg:#3a2c12}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;line-height:1.6}
.wrap{max-width:1000px;margin:0 auto;padding:28px 16px 64px}
.eyebrow{color:var(--accent);font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
h1{font-size:clamp(26px,4vw,36px);letter-spacing:-.8px;margin:6px 0 8px;line-height:1.2}
.lead{color:var(--muted);margin:0 0 20px;font-size:16px}
.tabs{position:sticky;top:0;z-index:5;display:flex;gap:6px;overflow-x:auto;padding:8px;background:var(--card);border:1px solid var(--line);border-radius:14px;margin-bottom:20px}
.tab{flex:0 0 auto;border:0;background:transparent;color:var(--muted);font-weight:600;font-size:15px;font-family:inherit;padding:11px 16px;border-radius:10px;cursor:pointer;white-space:nowrap}
.tab:hover{color:var(--ink);background:var(--bg)}
.tab[aria-selected="true"]{background:var(--accent);color:#fff}
.tab:focus-visible{outline:3px solid #86b6eb;outline-offset:2px}
.roles{display:inline-block;background:var(--accent-soft);color:var(--accent);font-weight:600;font-size:14px;padding:8px 14px;border-radius:10px;margin-bottom:14px}
.status{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:22px}
.status>div{border-radius:14px;padding:14px 18px}.ok{background:var(--ok-bg);color:var(--ok)}.no{background:var(--no-bg);color:var(--no)}
.status h4{margin:0 0 6px;font-size:15px}.status ul{margin:0;padding-left:18px;font-size:14.5px}.status li{margin:3px 0}
.step{display:grid;grid-template-columns:40px minmax(0,1fr);gap:14px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px;margin-bottom:16px}
.num{width:40px;height:40px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;font-weight:700}
h3{margin:6px 0 4px;font-size:19px;letter-spacing:-.3px}
.step p{margin:0 0 12px;font-size:15.5px}
.step img{display:block;width:100%;height:auto;border-radius:10px;border:1px solid var(--line)}
.foot{color:var(--muted);font-size:13px;margin-top:24px}
@media(max-width:640px){.status{grid-template-columns:1fr}.step{grid-template-columns:1fr}}
"""

JS = """
const tabs=[...document.querySelectorAll('.tab')];
function show(id){tabs.forEach(t=>{const on=t.dataset.t===id;t.setAttribute('aria-selected',on);document.getElementById('p-'+t.dataset.t).hidden=!on;});try{history.replaceState(null,'','#'+id)}catch(e){}window.scrollTo({top:0});}
tabs.forEach(t=>t.addEventListener('click',()=>show(t.dataset.t)));
const h=(location.hash||'').slice(1);show(tabs.some(t=>t.dataset.t===h)?h:tabs[0].dataset.t);
"""


def data_uri(path):
    with open(path, "rb") as f:
        return "data:image/jpeg;base64," + base64.b64encode(f.read()).decode()


def main(spec_path, out_path):
    base = os.path.dirname(os.path.abspath(spec_path))
    spec = json.load(open(spec_path, encoding="utf-8"))
    nav = "".join(
        f'<button class="tab" role="tab" data-t="{t["id"]}" aria-selected="false">{t["name"]}</button>'
        for t in spec["tabs"]
    )
    panels = ""
    for t in spec["tabs"]:
        ok = "".join(f"<li>{x}</li>" for x in t.get("ok", []))
        no = "".join(f"<li>{x}</li>" for x in t.get("no", []))
        steps = "".join(
            f'<section class="step"><div class="num">{i + 1}</div><div class="body"><h3>{h}</h3><p>{d}</p>'
            f'<img src="{data_uri(os.path.join(base, img))}" alt="{t["name"]} bước {i + 1}: {h}" loading="lazy"></div></section>'
            for i, (img, h, d) in enumerate(t["steps"])
        )
        panels += (
            f'<div class="panel" role="tabpanel" id="p-{t["id"]}" hidden><div class="roles">{t.get("roles", "")}</div>'
            f'<div class="status"><div class="ok"><h4>Làm được (đã thử)</h4><ul>{ok}</ul></div>'
            f'<div class="no"><h4>Chưa làm được / cần hỏi nhà cung cấp</h4><ul>{no}</ul></div></div>{steps}</div>'
        )
    page = (
        '<!doctype html><html lang="vi"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{spec.get("short_title", spec["title"])}</title><style>{CSS}</style></head><body><div class="wrap">'
        f'<div class="eyebrow">{spec["eyebrow"]}</div><h1>{spec["title"]}</h1><p class="lead">{spec["lead"]}</p>'
        f'<nav class="tabs" role="tablist" aria-label="Nghiệp vụ">{nav}</nav>{panels}'
        f'<p class="foot">{spec.get("foot", "")}</p></div><script>{JS}</script></body></html>'
    )
    open(out_path, "w", encoding="utf-8").write(page)
    print(f"{out_path}: {len(page) // 1024} KB")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
