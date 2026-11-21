"""Ghi nhật ký agent vào Việc/nhat-ky.jsonl (văn phòng ảo đọc file này).

Sự kiện ghi ra (mỗi dòng một JSON):
  giao      chat chính giao việc cho agent      (PreToolUse, tool Agent/Task)
  xong      agent xong việc                      (PostToolUse khi chạy thường; SubagentStop khi chạy nền)
  hoat-dong agent đang làm gì: doc | go | web | lenh | khac   (PreToolUse các tool khác)
Ghép giao/xong bằng id của lượt giao (tool_use_id), không ghép theo tên agent.
Mỗi dòng có thêm "phien": mã cuộc chat (session_id) phát ra dòng đó; văn phòng ảo dùng để tách
Trưởng nhóm (VS Code) và Phó nhóm (chat trên trang, mã ở Việc/.phien-chinh).
File phụ Việc/.nhat-ky-map.json: agent_id (chạy nền) -> id lượt giao.
Không bao giờ chặn công việc: lỗi gì cũng thoát 0.
"""
import json
import os
import re
import sys
from datetime import datetime

KIEU = {
    "Read": "doc", "Glob": "doc", "Grep": "doc", "NotebookRead": "doc",
    "Write": "go", "Edit": "go", "MultiEdit": "go", "NotebookEdit": "go",
    "WebSearch": "web", "WebFetch": "web",
    "Bash": "lenh",
}


def now():
    return datetime.now().astimezone().isoformat(timespec="seconds")


def read_rows(path):
    rows = []
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                try:
                    rows.append(json.loads(line))
                except Exception:
                    pass
    except FileNotFoundError:
        pass
    return rows


def load_map(p):
    try:
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def save_map(p, m):
    try:
        with open(p, "w", encoding="utf-8") as f:
            json.dump(m, f)
    except Exception:
        pass


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        return
    root = os.environ.get("CLAUDE_PROJECT_DIR") or data.get("cwd") or "."
    path = os.path.join(root, "Việc", "nhat-ky.jsonl")
    map_path = os.path.join(root, "Việc", ".nhat-ky-map.json")
    ev = data.get("hook_event_name", "")
    tool = data.get("tool_name", "")
    sub = data.get("agent_type") or ""          # có khi lệnh chạy bên trong agent con
    out = []

    if ev == "PreToolUse" and tool in ("Agent", "Task"):
        ti = data.get("tool_input") or {}
        out.append({
            "ts": now(), "su_kien": "giao",
            "agent": ti.get("subagent_type") or "general-purpose",
            "viec": (ti.get("description") or "")[:120],
            "id": data.get("tool_use_id") or now(),
            "nen": bool(ti.get("run_in_background")),
        })

    elif ev == "PostToolUse" and tool in ("Agent", "Task"):
        tid = data.get("tool_use_id")
        resp = json.dumps(data.get("tool_response"), ensure_ascii=False)
        ti = data.get("tool_input") or {}
        if ti.get("run_in_background") or "launched" in resp.lower():
            m = re.search(r"agentId[\"':\s\\]*([A-Za-z0-9_-]{6,})", resp)
            if m and tid:
                mp = load_map(map_path)
                mp[m.group(1)] = tid
                save_map(map_path, mp)
        else:
            rows = read_rows(path)
            g = next((r for r in rows if r.get("id") == tid and r.get("su_kien") == "giao"), None)
            done = any(r.get("id") == tid and r.get("su_kien") == "xong" for r in rows)
            if g and not done:
                out.append({"ts": now(), "su_kien": "xong", "agent": g["agent"], "viec": g.get("viec", ""), "id": tid})

    elif ev == "SubagentStop":
        rows = read_rows(path)
        done = {r.get("id") for r in rows if r.get("su_kien") == "xong"}
        tid = load_map(map_path).get(data.get("agent_id") or "")
        g = None
        if tid:
            g = next((r for r in rows if r.get("id") == tid and r.get("su_kien") == "giao"), None)
        if g is None and sub:  # dự phòng: lượt nền còn mở cũ nhất của đúng loại agent
            g = next((r for r in rows if r.get("su_kien") == "giao"
                      and r.get("agent") == sub and r.get("id") not in done
                      and r.get("id") not in load_map(map_path).values()), None)
            if g is None:  # cuối cùng: lượt cũ nhất còn mở của đúng loại agent
                g = next((r for r in rows if r.get("su_kien") == "giao"
                          and r.get("agent") == sub and r.get("id") not in done), None)
        if g and g.get("id") not in done:
            out.append({"ts": now(), "su_kien": "xong", "agent": g["agent"], "viec": g.get("viec", ""), "id": g["id"]})

    elif ev == "PreToolUse":
        out.append({
            "ts": now(), "su_kien": "hoat-dong",
            "agent": sub or "chat-chinh",
            "kieu": KIEU.get(tool, "khac"),
            "cong-cu": tool[:40],
        })

    if not out:
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    phien = data.get("session_id")
    with open(path, "a", encoding="utf-8") as f:
        for row in out:
            row["phien"] = phien
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    tu_don(path)


def tu_don(path, giu_ngay=7, nguong=200_000):
    """Tự dọn: file quá ~200 KB thì chỉ giữ các dòng của 7 ngày gần nhất."""
    try:
        if os.path.getsize(path) < nguong:
            return
        from datetime import timedelta
        moc = (datetime.now().astimezone() - timedelta(days=giu_ngay)).isoformat(timespec="seconds")
        with open(path, encoding="utf-8") as f:
            lines = f.readlines()
        keep = []
        for line in lines:
            try:
                if json.loads(line).get("ts", "") >= moc:
                    keep.append(line)
            except Exception:
                pass
        tmp = path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            f.writelines(keep)
        os.replace(tmp, path)
    except Exception:
        pass


try:
    main()
except Exception:
    pass
sys.exit(0)
