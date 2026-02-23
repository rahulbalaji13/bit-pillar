# CoreCore APK Build Status

## What was fixed in this repository

- Added a missing Android `app` module with a minimal runnable `MainActivity`.
- Added Android manifest, resources, and a basic unit test.
- Corrected Android Gradle Plugin version in root `build.gradle.kts` from `8.13.2` (invalid) to `8.3.2`.
- Added a Unix `gradlew` helper script so Linux/macOS users can run Gradle commands.

## Why APK generation could not be completed in this environment

The container cannot download Android Gradle Plugin artifacts from Google's Maven repository. Build commands fail with:

- `Plugin [id: 'com.android.application', version: '8.3.2', apply: false] was not found`
- Google Maven URL returns `403` in this environment.

Without AGP resolution, Gradle cannot compile the app and therefore cannot produce an APK in this environment.

## How to generate the APK on your machine

1. Install Android Studio + SDK (API 34) and JDK 17.
2. Ensure network access to `https://dl.google.com/dl/android/maven2/`.
3. From project root run:
   - `./gradlew assembleDebug`
4. APK output path:
   - `app/build/outputs/apk/debug/app-debug.apk`

## QR install / open flow

After you have the APK, host it (Drive, Firebase Hosting, S3, etc.) and generate a QR code to that HTTPS URL. Scanning the QR from Android will open the APK download/install page.
