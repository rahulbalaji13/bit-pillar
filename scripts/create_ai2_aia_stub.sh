#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
WORK_DIR="$DIST_DIR/ai2_aia_stub"
PROJECT_NAME="CoreCoreSimulation"
PACKAGE_PATH="appinventor/ai_user/${PROJECT_NAME}"
AIA_PATH="$DIST_DIR/${PROJECT_NAME}.aia"

rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR/src/$PACKAGE_PATH" "$WORK_DIR/assets" "$WORK_DIR/youngandroidproject"

cat > "$WORK_DIR/youngandroidproject/project.properties" <<PROP
main=appinventor.ai_user.${PROJECT_NAME}.Screen1
name=${PROJECT_NAME}
assets=../assets
source=../src
build=../build
versioncode=1
versionname=1.0
useslocation=False
aname=${PROJECT_NAME}
PROP

cat > "$WORK_DIR/src/$PACKAGE_PATH/Screen1.scm" <<'SCM'
#|
$JSON
{"authURL":["ai2.appinventor.mit.edu"],"YaVersion":"223","Source":"Form","Properties":{"$Name":"Screen1","$Type":"Form","$Version":"30","AppName":"CoreCoreSimulation","Title":"CoreCore Simulation","Uuid":"0","AlignHorizontal":"3","AlignVertical":"2","Theme":"AppTheme.Light","Scrollable":"True","Sizing":"Responsive","$Components":[{"$Name":"TitleLabel","$Type":"Label","$Version":"5","Text":"CoreCore simulation starter","FontBold":"True","FontSize":"22.0","Width":"Fill parent","TextAlignment":"1"},{"$Name":"HintLabel","$Type":"Label","$Version":"5","Text":"Import your assets and rebuild logic with blocks.","Width":"Fill parent","TextAlignment":"1"}]}}
$END
|#
SCM

cat > "$WORK_DIR/src/$PACKAGE_PATH/Screen1.bky" <<'BKY'
<xml xmlns="https://developers.google.com/blockly/xml"></xml>
BKY

cp "$ROOT_DIR/MIT_APP_INVENTOR_MIGRATION.md" "$WORK_DIR/assets/"
if [[ -f "$ROOT_DIR/FIRESTORE_RULES.txt" ]]; then
  cp "$ROOT_DIR/FIRESTORE_RULES.txt" "$WORK_DIR/assets/"
fi
if [[ -f "$ROOT_DIR/google-services.json" ]]; then
  cp "$ROOT_DIR/google-services.json" "$WORK_DIR/assets/"
fi

mkdir -p "$DIST_DIR"
(
  cd "$WORK_DIR"
  zip -r "$AIA_PATH" . >/dev/null
)

echo "Created importable AIA stub: $AIA_PATH"
