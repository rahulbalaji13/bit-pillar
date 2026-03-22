# CodeCore - Project README

## 📱 Overview
**CodeCore** is a comprehensive Android application designed to revolutionize computer science education through AI-powered learning, curated content management, and an intuitive user experience.

## ✨ Key Features

### For Students
- 🎯 **Curated Learning Materials** - Access expert-created content on CS fundamentals
- 🤖 **AI Voice Assistant** - Get instant answers with natural language processing
- 📚 **Organized Content** - Browse by categories, search, and bookmark favorites
- 🌓 **Dark/Light Mode** - Study comfortably in any environment
- 📱 **Offline Access** - Download materials for learning on the go
- 🎨 **Modern UI** - Beautiful, intuitive interface built with Material 3

### For Admins
- 📤 **Content Management** - Upload, edit, and delete educational materials
- 📊 **Analytics Dashboard** - Track user engagement and popular content
- 🔐 **Secure Access** - Role-based authentication with Firebase
- 📁 **Multi-format Support** - PDFs, videos, articles, and quizzes

## 🛠️ Technology Stack

### Core
- **Language:** Kotlin
- **UI Framework:** Jetpack Compose
- **Architecture:** MVVM (Model-View-ViewModel)
- **Min SDK:** API 24 (Android 7.0)
- **Target SDK:** API 34 (Android 14)

### Backend & Services
- **Authentication:** Firebase Auth
- **Database:** Cloud Firestore
- **Storage:** Firebase Storage
- **Analytics:** Firebase Analytics
- **Crash Reporting:** Firebase Crashlytics

### AI & Voice
- **AI Provider:** Google Gemini API
- **Speech Recognition:** Android SpeechRecognizer
- **Text-to-Speech:** Android TTS Engine

### Libraries
- **Navigation:** Jetpack Navigation Compose
- **Image Loading:** Coil
- **Networking:** Retrofit
- **Coroutines:** Kotlin Coroutines
- **Dependency Injection:** Hilt (optional)

## 📂 Project Structure

```
app/
├── src/main/
│   ├── java/com/mastercs/fundamentals/
│   │   ├── data/
│   │   │   ├── models/          # Data classes
│   │   │   ├── repository/      # Data layer
│   │   │   └── remote/          # API services
│   │   ├── ui/
│   │   │   ├── auth/            # Login/Register screens
│   │   │   ├── admin/           # Admin dashboard & CMS
│   │   │   ├── student/         # Student learning interface
│   │   │   ├── assistant/       # AI voice assistant
│   │   │   ├── components/      # Reusable UI components
│   │   │   └── theme/           # App theming
│   │   ├── viewmodel/           # ViewModels
│   │   ├── utils/               # Utility classes
│   │   └── MainActivity.kt
│   └── res/                     # Resources
└── build.gradle.kts
```

## 🚀 Getting Started

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or later
- JDK 17
- Firebase account
- Google Gemini API key

### Setup Instructions

1. **Clone or create the project**
   ```bash
   # Follow instructions in QUICK_START.md
   ```

2. **Configure Firebase**
   - Create Firebase project
   - Add Android app
   - Download `google-services.json` to `app/` directory
   - Enable Authentication, Firestore, and Storage

3. **Add API Key**
   - Create `local.properties` in project root
   - Add: `GEMINI_API_KEY=your_api_key_here`

4. **Sync and Build**
   ```bash
   ./gradlew build
   ```

5. **Run the app**
   - Connect device or start emulator
   - Click Run in Android Studio

For detailed setup instructions, see **[QUICK_START.md](QUICK_START.md)**

## 🌐 Website Showcase

A ready-to-open static website is now included under `website/`. It presents attractive simulated Android app screens for CodeCore in the browser.

```bash
open website/index.html
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000/website/` in your browser.

## 📖 Documentation

| Document | Description |
|----------|-------------|
| **[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md)** | Comprehensive 11-week development roadmap |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | System architecture and technical design |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Step-by-step Play Store deployment |
| **[QUICK_START.md](QUICK_START.md)** | Immediate setup and first steps |

## 🏗️ Development Phases

### Phase 1: Authentication (Week 1-2)
- User authentication system
- Role-based access (Admin/Student)
- Firebase integration

### Phase 2: Content Management (Week 3-4)
- Admin dashboard
- Upload/edit/delete materials
- Category management

### Phase 3: Student Interface (Week 5)
- Browse and search materials
- Material viewer
- Bookmarks and favorites

### Phase 4: AI Voice Assistant (Week 6-7)
- Gemini API integration
- Speech recognition
- Text-to-speech
- Chat interface

### Phase 5: UI/UX Polish (Week 8)
- Dark/Light theme
- Animations and transitions
- Responsive design

### Phase 6: Testing & Optimization (Week 9)
- Unit and integration tests
- Performance optimization
- Bug fixes

### Phase 7: Deployment (Week 10-11)
- Play Store preparation
- Security audit
- Release and monitoring

## 🔒 Security Features

- ✅ Firebase Authentication with email/password
- ✅ Role-based access control
- ✅ Firestore security rules
- ✅ API key protection (BuildConfig)
- ✅ ProGuard code obfuscation
- ✅ Encrypted SharedPreferences
- ✅ HTTPS-only network calls

## 🧪 Testing

```bash
# Run unit tests
./gradlew test

# Run instrumentation tests
./gradlew connectedAndroidTest

# Run all tests
./gradlew testDebugUnitTest connectedDebugAndroidTest
```

## 📊 Performance Targets

- **App size:** < 50 MB
- **Cold start:** < 2 seconds
- **Crash rate:** < 1%
- **ANR rate:** < 0.5%
- **Memory usage:** < 200 MB

## 🌍 Localization

Currently supports:
- English (US)

Planned:
- Spanish
- Hindi
- French

## 📱 Supported Devices

- **Phones:** Android 7.0+ (API 24+)
- **Tablets:** 7" and 10" tablets
- **Screen sizes:** Small to Extra Large
- **Orientations:** Portrait and Landscape

## 🤝 Contributing

This is a proprietary project. For internal development team only.

### Development Guidelines
- Follow Kotlin coding conventions
- Write meaningful commit messages
- Create feature branches
- Test before pushing
- Update documentation

## 📄 License

Proprietary - All rights reserved

## 👥 Team

- **Developer:** [Your Name]
- **Designer:** [Designer Name]
- **Project Manager:** [PM Name]

## 📞 Support

For issues or questions:
- **Email:** support@mastercs.com
- **Documentation:** See docs folder
- **Firebase Console:** [Your Firebase Project]

## 🗺️ Roadmap

### Version 1.0 (Launch)
- ✅ User authentication
- ✅ Content management
- ✅ AI voice assistant
- ✅ Dark/Light mode

### Version 1.1 (Q2 2026)
- 📝 Quiz system
- 🏆 Achievement badges
- 📈 Progress tracking
- 🔔 Push notifications

### Version 2.0 (Q3 2026)
- 👥 Social features (study groups)
- 💬 Discussion forums
- 📹 Live sessions
- 💰 Premium subscription

## 📈 Success Metrics

### Launch Goals (Month 1)
- 100+ downloads
- 4.0+ star rating
- 30% D1 retention
- <1% crash rate

### Growth Goals (Month 6)
- 1,000+ active users
- 4.5+ star rating
- 50% D7 retention
- Featured in Play Store

## 🔧 Troubleshooting

### Common Issues

**Build fails:**
```bash
./gradlew clean
./gradlew build --refresh-dependencies
```

**Firebase not working:**
- Verify `google-services.json` is in `app/` directory
- Check Firebase project configuration
- Ensure SHA-1 fingerprint is added

**API key issues:**
- Check `local.properties` has correct key
- Sync Gradle files
- Rebuild project

## 📚 Learning Resources

- [Android Developer Guide](https://developer.android.com)
- [Jetpack Compose Tutorial](https://developer.android.com/jetpack/compose/tutorial)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Kotlin Coroutines Guide](https://kotlinlang.org/docs/coroutines-guide.html)
- [Material Design 3](https://m3.material.io)

## 🎯 Project Status

- [x] Planning complete
- [ ] Development in progress
- [ ] Testing phase
- [ ] Beta release
- [ ] Production release

## 📝 Changelog

### Version 1.0.0 (Planned)
- Initial release
- Core features implementation
- Play Store launch

---

**Built with ❤️ for CS learners worldwide**

For detailed implementation instructions, start with **[QUICK_START.md](QUICK_START.md)**
