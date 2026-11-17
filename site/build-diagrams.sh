#!/usr/bin/env bash
# Vẽ lại mọi sơ đồ: diagrams/**/*.puml -> hai ảnh cùng chỗ, cùng tên:
#   <tên>.svg       chủ đề sáng  (diagrams/theme-light.puml)
#   <tên>.dark.svg  chủ đề tối   (diagrams/theme-dark.puml)
# Mỗi sơ đồ gọi  !include ../theme.puml ; mỗi lượt vẽ chép file chủ đề tương ứng thành diagrams/theme.puml.
# Chạy:  bash build-diagrams.sh
# Đổi đường dẫn bằng biến môi trường, ví dụ trên Mac:
#   JAVA=java PLANTUML_JAR=~/tools/plantuml.jar bash build-diagrams.sh
set -euo pipefail
cd "$(dirname "$0")"

WIN_JAVA="/c/Users/PC/tools/jdk-21.0.13+9-jre/bin/java.exe"
WIN_JAR="/c/Users/PC/tools/plantuml/plantuml-1.2026.10.jar"

if [ -z "${JAVA:-}" ]; then
  if [ -x "$WIN_JAVA" ]; then JAVA="$WIN_JAVA"; else JAVA="java"; fi
fi
PLANTUML_JAR="${PLANTUML_JAR:-$WIN_JAR}"

if [ ! -f "$PLANTUML_JAR" ]; then
  echo "Không thấy PlantUML: $PLANTUML_JAR (đặt biến PLANTUML_JAR)" >&2
  exit 1
fi

# Bỏ qua file chủ đề (theme*.puml) vì không phải sơ đồ.
files=()
while IFS= read -r -d '' f; do files+=("$f"); done < <(find diagrams -name '*.puml' ! -name 'theme*' -print0)

if [ ${#files[@]} -eq 0 ]; then echo "Không có file .puml nào."; exit 0; fi

echo "Vẽ ${#files[@]} sơ đồ, mỗi sơ đồ hai chủ đề..."
# Lượt 1: tối -> đổi tên thành .dark.svg
cp diagrams/theme-dark.puml diagrams/theme.puml
"$JAVA" -jar "$PLANTUML_JAR" -charset UTF-8 -tsvg "${files[@]}"
for f in "${files[@]}"; do mv -f "${f%.puml}.svg" "${f%.puml}.dark.svg"; echo "  ${f%.puml}.dark.svg"; done
# Lượt 2: sáng -> .svg
cp diagrams/theme-light.puml diagrams/theme.puml
"$JAVA" -jar "$PLANTUML_JAR" -charset UTF-8 -tsvg "${files[@]}"
for f in "${files[@]}"; do echo "  ${f%.puml}.svg"; done
echo "Xong."
