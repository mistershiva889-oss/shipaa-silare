# StreamVibe - Mobile Video Streaming Platform

StreamVibe is a high-performance, mobile-first video streaming web app and Progressive Web App (PWA) built with React, Vite, Tailwind CSS, Express, and full offline-first local storage resilience.

---

## 🌟 Key Features

- 📱 **Mobile-First Experience:** Designed specifically for Android & iOS smartphone viewports.
- ⚡ **Zero-Password Instant Login:** Users register once using their mobile number and full name; returning sessions are remembered instantly.
- 🎬 **YouTube & Direct Video Streaming:** Supports direct MP4/WebM byte-range streams as well as embedded YouTube content.
- 🔄 **Landscape & Fullscreen Controls:** In-player rotation lock and full-screen streaming.
- 🛡️ **Zero-404 Architecture:** Automatically falls back to persistent client-side database (`localDB`) if backend is unavailable (e.g. offline, static Vercel, or standalone APK).
- ⚙️ **Admin Management Portal:**
  - Video uploads & management
  - Category manager
  - User activity & status control (active / blocked)
  - Real-time views analytics and system settings

---

## 🔐 Default Admin Credentials

- **Admin Portal Access:** Open app and tap the logo 5 times, or navigate to `/#admin`
- **Email:** `admin@streamvibe.io`
- **Password:** `admin123`

---

## 🚀 Deployment to Vercel

1. Push or export this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New Project** and import this repository.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**. Both the Vite frontend and the `/api` serverless backend are pre-configured in `vercel.json` and `api/index.ts`.

---

## 📱 Converting into Android APK

You can easily generate an Android APK file using **PWABuilder**:

1. Deploy the site to Vercel (or any HTTPS domain).
2. Visit [https://www.pwabuilder.com/](https://www.pwabuilder.com/)
3. Enter your deployed URL (e.g. `https://mr-shivuu.vercel.app`).
4. Click **Start**. The app scores 100% on PWA criteria with pre-configured 512×512 icons, manifest, and service worker.
5. Click **Package For Stores** -> **Android** -> **Download Package / APK**.
6. Install the resulting `.apk` directly onto any Android device.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local full-stack dev server
npm run dev

# Build production bundle
npm run build
```
