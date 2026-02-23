#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/dist/ai2_export_bundle"
ZIP_PATH="$ROOT_DIR/dist/ai2_export_bundle.zip"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

if [[ -d "$ROOT_DIR/app/src/main/res" ]]; then
  mkdir -p "$OUT_DIR/android_res"
  cp -R "$ROOT_DIR/app/src/main/res/." "$OUT_DIR/android_res/"
fi

if [[ -f "$ROOT_DIR/google-services.json" ]]; then
  cp "$ROOT_DIR/google-services.json" "$OUT_DIR/"
fi

if [[ -f "$ROOT_DIR/app/google-services.json" ]]; then
  cp "$ROOT_DIR/app/google-services.json" "$OUT_DIR/google-services-app.json"
fi

if [[ -f "$ROOT_DIR/FIRESTORE_RULES.txt" ]]; then
  cp "$ROOT_DIR/FIRESTORE_RULES.txt" "$OUT_DIR/"
fi

cp "$ROOT_DIR/MIT_APP_INVENTOR_MIGRATION.md" "$OUT_DIR/"

mkdir -p "$ROOT_DIR/dist"
(
  cd "$ROOT_DIR/dist"
  rm -f "$(basename "$ZIP_PATH")"
  zip -r "$(basename "$ZIP_PATH")" "$(basename "$OUT_DIR")" >/dev/null
)

echo "Created: $ZIP_PATH"
