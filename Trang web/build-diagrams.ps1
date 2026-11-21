# Vẽ lại mọi sơ đồ: diagrams/**/*.puml -> hai ảnh cùng chỗ, cùng tên:
#   <tên>.svg       chủ đề sáng  (diagrams/theme-light.puml)
#   <tên>.dark.svg  chủ đề tối   (diagrams/theme-dark.puml)
# Mỗi sơ đồ gọi  !include ../theme.puml ; mỗi lượt vẽ chép file chủ đề tương ứng thành diagrams/theme.puml.
# Chạy:  powershell -ExecutionPolicy Bypass -File build-diagrams.ps1
# Đổi đường dẫn Java / PlantUML bằng biến môi trường JAVA và PLANTUML_JAR.
$ErrorActionPreference = "Stop"
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dir  = Join-Path $root "diagrams"

$java = if ($env:JAVA) { $env:JAVA } else { "C:\Users\PC\tools\jdk-21.0.13+9-jre\bin\java.exe" }
$jar  = if ($env:PLANTUML_JAR) { $env:PLANTUML_JAR } else { "C:\Users\PC\tools\plantuml\plantuml-1.2026.10.jar" }

if (-not (Test-Path $jar)) { Write-Error "Không thấy PlantUML: $jar (đặt biến PLANTUML_JAR)"; exit 1 }

# Bỏ qua file chủ đề (theme*.puml) vì không phải sơ đồ.
$files = Get-ChildItem -Path $dir -Recurse -Filter *.puml |
  Where-Object { $_.Name -notlike "theme*" } |
  ForEach-Object { $_.FullName }

if (-not $files) { Write-Host "Không có file .puml nào."; exit 0 }

Write-Host "Vẽ $(@($files).Count) sơ đồ, mỗi sơ đồ hai chủ đề..."
# Lượt 1: tối -> đổi tên thành .dark.svg
Copy-Item (Join-Path $dir "theme-dark.puml") (Join-Path $dir "theme.puml") -Force
& $java -jar $jar -charset UTF-8 -tsvg $files
if ($LASTEXITCODE -ne 0) { Write-Error "PlantUML báo lỗi (mã $LASTEXITCODE)"; exit $LASTEXITCODE }
$files | ForEach-Object { $svg = $_ -replace '\.puml$', '.svg'; $dark = $_ -replace '\.puml$', '.dark.svg'
  Move-Item $svg $dark -Force; Write-Host "  $dark" }
# Lượt 2: sáng -> .svg
Copy-Item (Join-Path $dir "theme-light.puml") (Join-Path $dir "theme.puml") -Force
& $java -jar $jar -charset UTF-8 -tsvg $files
if ($LASTEXITCODE -ne 0) { Write-Error "PlantUML báo lỗi (mã $LASTEXITCODE)"; exit $LASTEXITCODE }
$files | ForEach-Object { Write-Host ("  " + ($_ -replace '\.puml$', '.svg')) }
Write-Host "Xong."
