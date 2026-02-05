# 🚀 TRACE - Quick Setup Guide

## Step-by-Step Installation

### 1️⃣ Prerequisites
```bash
# Check Node.js version (should be 20.x or higher)
node --version

# Check npm version
npm --version
```

### 2️⃣ Create Project Directory
```bash
mkdir trace-forensics
cd trace-forensics
```

### 3️⃣ Copy All Files
Copy all 24 files from the outputs folder to your project directory, maintaining the folder structure:

```
trace-forensics/
├── components/
│   ├── Layout.tsx
│   ├── Uploader.tsx
│   ├── AudioRecorder.tsx
│   ├── ResultView.tsx
│   ├── ProcessingView.tsx
│   ├── EducationalPanel.tsx
│   └── CodeViewer.tsx
├── services/
│   └── geminiService.ts
├── .env.example
├── .gitignore
├── App.tsx
├── index.css
├── index.html
├── index.tsx
├── main.py
├── metadata.json
├── package.json
├── postcss.config.js
├── README.md
├── render.yaml
├── requirements.txt
├── tailwind.config.js
├── tsconfig.json
├── types.ts
└── vite.config.ts
```

### 4️⃣ Install Dependencies
```bash
# Install Node.js packages
npm install
```

This will install:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Google Generative AI
- Lucide React (icons)

### 5️⃣ Configure API Key

**Get your Google AI API Key:**
1. Go to https://aistudio.google.com/
2. Sign in with Google account
3. Click "Get API Key"
4. Copy the key

**Create .env file:**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and paste your API key
nano .env  # or use any text editor
```

**.env file should contain:**
```
VITE_API_KEY=AIzaSy...your_actual_key_here
```

### 6️⃣ Run Development Server
```bash
npm run dev
```

You should see:
```
VITE v7.3.1  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### 7️⃣ Open in Browser
Navigate to: http://localhost:3000

You should see the TRACE application with:
- ✅ Cyberpunk UI with grid and scan lines
- ✅ Three tabs: Import Signal, Live Capture, GAT Logic
- ✅ Upload area or microphone interface
- ✅ Educational content at the bottom

### 8️⃣ Test the Application

**Test File Upload:**
1. Click "Import Signal" tab
2. Drag & drop an audio file (MP3, WAV, etc.)
3. Click "Deploy TRACE Probe"
4. Watch the processing animation
5. View the analysis results

**Test Live Recording:**
1. Click "Live Capture" tab
2. Click "Start Recording" (grant microphone permission)
3. Speak for a few seconds
4. Click "Stop Recording"
5. Click "Deploy TRACE Probe"
6. View results

**View Code:**
1. Click "GAT Logic" tab
2. See the AASIST architecture pseudo-code

---

## 🏗️ Build for Production

### Build the Application
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Render

### Option 1: Render Dashboard (Recommended)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up/login with GitHub

2. **New Static Site**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository

3. **Configure Build**
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

4. **Add Environment Variable**
   - Key: `VITE_API_KEY`
   - Value: Your Google AI API key

5. **Deploy**
   - Click "Create Static Site"
   - Wait for build to complete

### Option 2: Render CLI

```bash
# Install Render CLI
npm install -g @render/cli

# Login
render login

# Deploy
render deploy
```

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add VITE_API_KEY
# Paste your API key when prompted

# Deploy to production
vercel --prod
```

---

## 🚀 Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod

# Add environment variable in Netlify dashboard
# Site settings → Environment variables → Add variable
# VITE_API_KEY = your_api_key
```

---

## 🐛 Troubleshooting

### Issue: "VITE_API_KEY not found"
**Solution:**
```bash
# Make sure .env file exists
ls -la .env

# Check if it contains the key
cat .env

# Restart dev server after adding key
npm run dev
```

### Issue: "Module not found" errors
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Blank page after deployment
**Solution:**
- Verify `VITE_API_KEY` is set in deployment environment
- Check build logs for errors
- Ensure `base: '/'` is in vite.config.ts

### Issue: Microphone not working
**Solution:**
- Grant microphone permission in browser
- Use HTTPS (microphone requires secure context)
- Check browser console for errors

### Issue: Build fails
**Solution:**
```bash
# Clear cache
rm -rf .vite
rm -rf dist

# Clean install
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

---

## 📱 Browser Compatibility

**Supported Browsers:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Required Features:**
- WebRTC (for microphone access)
- FileReader API (for file uploads)
- ES2020+ JavaScript

---

## 🎯 Next Steps

1. **Customize the UI**
   - Edit `tailwind.config.js` for colors
   - Modify `index.css` for animations
   - Update `index.html` for visual effects

2. **Enhance Analysis**
   - Improve prompts in `geminiService.ts`
   - Add more technical metrics
   - Implement additional AI models

3. **Add Features**
   - Batch processing
   - Result history
   - Export reports
   - User accounts

4. **Optimize Performance**
   - Add caching
   - Implement lazy loading
   - Optimize bundle size

---

## 📚 Learn More

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Google AI:** https://ai.google.dev
- **AASIST Paper:** Search for "AASIST Audio Anti-Spoofing"

---

## ✅ Success Checklist

- [ ] Node.js 20+ installed
- [ ] All 24 files copied
- [ ] npm install completed
- [ ] .env file created with API key
- [ ] Dev server running (npm run dev)
- [ ] Application opens in browser
- [ ] File upload works
- [ ] Microphone recording works
- [ ] Analysis returns results
- [ ] Build succeeds (npm run build)
- [ ] Ready to deploy!

---

## 🎉 You're Ready!

Your TRACE application is fully set up and ready to use. Start analyzing audio files for synthetic speech detection!

**Need help?** Check the README.md for detailed information or ERROR_REPORT.md for common issues.
