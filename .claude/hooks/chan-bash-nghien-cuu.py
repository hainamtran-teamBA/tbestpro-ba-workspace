"""Chặn lệnh Bash của agent nghien-cuu: chỉ cho chạy trình duyệt playwright-cli.

Duyệt 2026-11-16 (đề xuất của phó nhóm, người dùng chọn phương án A).
Agent nghien-cuu đọc web lạ; trang web có thể chứa câu dụ AI chạy lệnh khác.
Hook này kiểm từng đoạn lệnh (tách theo && || ; | xuống dòng):
  được phép: export PATH=..., cd <thư mục tạm>, mkdir -p <thư mục tạm>, sleep <số>, playwright-cli ...
  cấm: mọi lệnh khác, chuyển hướng ghi file (> >>), $( ), dấu `.
Chỉ áp cho agent_type == "nghien-cuu"; agent khác và chat chính không bị ảnh hưởng.
Chặn: thoát mã 2, lý do in ra stderr (Claude Code báo lại cho agent).
"""
import json
import re
import shlex
import sys

TMP_ROOTS = ("/private/tmp/", "/tmp/", "/private/var/folders/", "/var/folders/")


def la_thu_muc_tam(p):
    p = p.strip("'\"")
    return p.startswith(TMP_ROOTS) or p in ("$TMPDIR", "${TMPDIR}") or p.startswith(("$TMPDIR/", "${TMPDIR}/"))


def doan_hop_le(doan):
    doan = doan.strip()
    if not doan:
        return True
    try:
        tu = shlex.split(doan)
    except ValueError:
        return False
    if not tu:
        return True
    lenh = tu[0]
    if lenh == "export":
        return len(tu) == 2 and tu[1].startswith("PATH=")
    if lenh == "cd":
        return len(tu) == 2 and la_thu_muc_tam(tu[1])
    if lenh == "mkdir":
        return len(tu) == 3 and tu[1] == "-p" and la_thu_muc_tam(tu[2])
    if lenh == "sleep":
        return len(tu) == 2 and re.fullmatch(r"\d+(\.\d+)?", tu[1]) is not None
    if lenh in ("playwright-cli",) or lenh.endswith("/playwright-cli"):
        # file lưu ra (ảnh, pdf...) chỉ được nằm trong thư mục tạm
        for i, w in enumerate(tu):
            if w.startswith(("--filename=", "--output=", "--path=")):
                if not la_thu_muc_tam(w.split("=", 1)[1]):
                    return False
            if w in ("--filename", "--output", "--path", "-o") and i + 1 < len(tu):
                if not la_thu_muc_tam(tu[i + 1]):
                    return False
        return True
    return False


def kiem(cmd):
    if re.search(r"\$\(|`|(?<![0-9&])>|>>", cmd):
        return "không được dùng $( ), dấu ` hay ghi ra file (>)"
    for doan in re.split(r"&&|\|\||;|\||\n", cmd):
        if not doan_hop_le(doan):
            return "lệnh không nằm trong danh sách cho phép: " + doan.strip()[:120]
    return None


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        return 0
    if data.get("hook_event_name") != "PreToolUse" or data.get("tool_name") != "Bash":
        return 0
    if (data.get("agent_type") or "") != "nghien-cuu":
        return 0
    cmd = ((data.get("tool_input") or {}).get("command") or "")
    loi = kiem(cmd)
    if loi:
        sys.stderr.write(
            "Đã chặn (hook chan-bash-nghien-cuu): agent nghien-cuu chỉ được chạy playwright-cli "
            "(cùng export PATH, cd/mkdir -p trong thư mục tạm, sleep). Lý do: " + loi + "\n"
        )
        return 2
    return 0


try:
    sys.exit(main())
except SystemExit:
    raise
except Exception:
    sys.exit(0)
