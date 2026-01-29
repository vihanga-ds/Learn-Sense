# Learn Sense - Phase 1 Prototype

A Real-Time Multimodal Engagement Detection System for Online Learning

## 🚀 Features (Phase 1)

- ✅ Real webcam integration with browser API
- ✅ Live video feed display (1280x720 HD)
- ✅ Audio capture with mute/unmute controls
- ✅ Real-time engagement score simulation (60-90 range)
- ✅ 9-level engagement classification display
- ✅ Live metrics dashboard (Attention, Audio, Latency, FPS)
- ✅ Session statistics tracking
- ✅ Adaptive feedback panel
- ✅ Privacy-first architecture (in-memory processing only)
- ✅ Modern, professional UI with animations

## 📋 Prerequisites

- Node.js 18.17 or later
- Modern web browser (Chrome, Edge, Firefox)
- Webcam and microphone

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

1. **Start Camera**: Click "Start Camera" button to activate webcam and microphone
2. **Monitor Engagement**: Watch real-time engagement scores and metrics
3. **View Statistics**: Track session duration, average engagement, peak score
4. **Stop Session**: Click "Stop Session" to end monitoring

## 🏗️ Project Structure

```
learn-sense-phase1/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with state management
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global styles and animations
├── components/
│   ├── VideoCapture.tsx    # Webcam component
│   ├── EngagementPanel.tsx # Metrics display
│   └── StatisticsRow.tsx   # Session statistics
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🔒 Privacy Features

- **No Data Storage**: All processing happens in-memory
- **No Recording**: Video/audio streams are not saved
- **Browser-Only**: All processing happens client-side
- **Clear Indicators**: "System Active" status badge

## 🎨 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with custom variables
- **Video**: Browser MediaDevices API
- **State Management**: React useState/useEffect

## 📊 Engagement Classification

### 9-Level System:
- **Low**: Very Low → Low → Improving Low
- **Medium**: Lower Medium → Stable Medium → Upper Medium
- **High**: Entry High → Sustained High → Peak High

## 🚧 Phase 1 Scope

This is a **UI/UX prototype** demonstrating:
- Working webcam integration
- Professional interface design
- Real-time dashboard updates
- Simulated engagement metrics

## ⚡ Next Steps (Phase 2)

- Integrate MediaPipe for facial analysis
- Add Librosa for audio feature extraction
- Implement actual ML model for engagement detection
- Add multimodal fusion logic
- Create training/evaluation pipeline

## 📝 Notes

- Phase 1 uses **simulated** engagement scores for demonstration
- Actual ML integration will be implemented in Phase 2
- All browser permissions (camera/mic) are required for functionality

## 🎓 Academic Use

This project is part of a final-year research project:
**"Learn Sense: A Real-Time Multimodal Engagement Detection System for Online Learning"**

---

Built with Next.js and TypeScript | Privacy-First Architecture | No Data Storage
