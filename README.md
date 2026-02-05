# TRACE | Signal Intelligence Unit

High-fidelity synthetic speech detection system based on the AASIST HtrgGAT deep learning architecture.

## 🔧 Errors Fixed

### Critical Issues Resolved:
1. ✅ **Missing Components** - Created all required React components:
   - `Layout.tsx`
   - `Uploader.tsx`
   - `AudioRecorder.tsx`
   - `ResultView.tsx`
   - `ProcessingView.tsx`
   - `EducationalPanel.tsx`
   - `CodeViewer.tsx`

2. ✅ **Missing Service** - Created `geminiService.ts` for Google AI integration

3. ✅ **Configuration Files** - Fixed file naming issues:
   - `vite_config.ts` → `vite.config.ts`
   - `tailwind_config.js` → `tailwind.config.js`
   - `_gitignore` → `.gitignore`

4. ✅ **Missing Styles** - Created `index.css` with Tailwind directives and animations

5. ✅ **Missing Dependencies** - Added `gunicorn` to `requirements.txt`

6. ✅ **PostCSS Config** - Created `postcss.config.js` for Tailwind processing

7. ✅ **Environment Variables** - Created `.env.example` for API key setup

## 🚀 Setup Instructions

### Prerequisites
- Node.js 20.x or higher
- Python 3.11.9
- npm or yarn
- Google AI API key from [Google AI Studio](https://aistudio.google.com/)

### Frontend Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment Variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your API key
VITE_API_KEY=your_actual_api_key_here
```

3. **Run Development Server**
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

4. **Build for Production**
```bash
npm run build
```

### Backend Setup (Optional - for local testing)

1. **Create Virtual Environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install Python Dependencies**
```bash
pip install -r requirements.txt
```

3. **Run FastAPI Server**
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

## 📁 Project Structure

```
trace-forensics/
├── components/              # React components
│   ├── Layout.tsx
│   ├── Uploader.tsx
│   ├── AudioRecorder.tsx
│   ├── ResultView.tsx
│   ├── ProcessingView.tsx
│   ├── EducationalPanel.tsx
│   └── CodeViewer.tsx
├── services/               # API integration
│   └── geminiService.ts
├── App.tsx                 # Main application
├── types.ts                # TypeScript types
├── index.tsx               # React entry point
├── index.html              # HTML template
├── index.css               # Global styles
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── tsconfig.json           # TypeScript config
├── package.json            # Node dependencies
├── main.py                 # FastAPI backend
├── requirements.txt        # Python dependencies
├── render.yaml             # Render deployment config
└── README.md               # This file
```

## 🌐 Deployment

### Deploy to Render (Recommended)

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Create a new Static Site
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

3. **Add Environment Variables**
   - Key: `VITE_API_KEY`
   - Value: Your Google AI API key

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Add Environment Variable**
```bash
vercel env add VITE_API_KEY
```

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Deploy**
```bash
netlify deploy --prod
```

3. **Set Environment Variable** in Netlify dashboard

## 🔑 API Key Setup

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create a new API key
5. Copy the key and add it to your `.env` file or deployment environment

## 🎯 Features

- **Audio Upload** - Drag & drop or select audio files (WAV, MP3, M4A, FLAC, OGG)
- **Live Recording** - Record audio directly from your microphone
- **AI Analysis** - Powered by Google's Gemini 2.0 Flash
- **Detailed Reports** - Comprehensive forensic analysis with technical details
- **Real-time Processing** - Visual feedback during analysis
- **Educational Content** - Learn about AASIST architecture
- **Code Viewer** - Explore the neural network implementation

## 🛠️ Technology Stack

**Frontend:**
- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

**AI:**
- Google Generative AI (Gemini 2.0)

**Backend (Optional):**
- FastAPI
- Python 3.11
- Uvicorn/Gunicorn

## 🧪 Testing

Run the development server and test:
1. Upload an audio file
2. Try live recording (requires microphone permission)
3. View the analysis results
4. Explore the educational content

## 📝 Methodology

The TRACE engine leverages an Integrated Spectro-Temporal Graph Attention Network (AASIST) to analyze audio features as nodes in a high-dimensional graph, detecting anomalies that traditional spectrogram-based models often miss.

Key components:
- **Sinc-Convolutional Front-end** - Processes raw waveforms
- **Heterogeneous Graph Attention (HtrgGAT)** - Models spectro-temporal relationships
- **Attention-Based Graph Pooling** - Aggregates multi-scale information
- **End-to-End Training** - Learns optimal features automatically

## 🐛 Troubleshooting

### "API key not configured" error
- Make sure you've created a `.env` file with `VITE_API_KEY`
- Restart the development server after adding the key

### Blank page after deployment
- Check that `VITE_API_KEY` is set in your deployment environment
- Verify the build command completed successfully

### Microphone not working
- Grant microphone permissions in your browser
- Check that you're using HTTPS (required for microphone access)

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 📄 License

© 2024 Team STRATAGEM

## 🔗 References

Based on "AASIST: Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks" by Jung et al. (2022)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.
