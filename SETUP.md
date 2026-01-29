# Learn Sense Phase 1 - Setup Instructions

## Quick Start Guide

### Step 1: Extract the Project
Unzip the `learn-sense-phase1` folder to your desired location.

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- All required dependencies

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to: **http://localhost:3000**

## Browser Compatibility

✅ **Recommended Browsers:**
- Google Chrome (latest)
- Microsoft Edge (latest)
- Firefox (latest)

⚠️ **Note:** Safari may have MediaDevices API limitations

## Permissions Required

When you click "Start Camera", your browser will ask for:
- 📹 **Camera Access** - Required for video feed
- 🎤 **Microphone Access** - Required for audio analysis

Click "Allow" to enable both.

## Troubleshooting

### Camera Not Working?
1. Check browser permissions (click lock icon in address bar)
2. Ensure no other app is using the camera
3. Try refreshing the page
4. Check browser console for errors (F12)

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 Already in Use?
```bash
# Use a different port
npm run dev -- -p 3001
```

## Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

## Development Tips

- **Hot Reload**: Changes auto-refresh while running `npm run dev`
- **TypeScript**: Full type checking enabled
- **CSS Modules**: Component-scoped styling
- **Console Logs**: Check browser console for debug info

## File Structure Overview

```
learn-sense-phase1/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (main app)
│   ├── page.module.css    # Page styles
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── VideoCapture.tsx   # Webcam integration
│   ├── EngagementPanel.tsx# Metrics dashboard
│   └── StatisticsRow.tsx  # Session stats
├── public/               # Static files
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
└── next.config.js        # Next.js config
```

## Features Demonstrated

### ✅ Working Features:
- Real webcam video capture
- Audio stream capture
- Session timer
- Live metrics updates
- Engagement score simulation
- Responsive design
- Privacy indicators

### 🚧 Phase 2 (Coming Next):
- MediaPipe integration
- Librosa audio analysis
- Actual ML model
- Real engagement detection

## Academic Presentation Tips

### What to Show:
1. **Privacy First**: Highlight "no storage" architecture
2. **Professional UI**: Modern, polished design
3. **Real-time Processing**: Live metrics updates
4. **Scalability**: Component-based architecture ready for ML

### Demo Flow:
1. Show landing page (camera off)
2. Click "Start Camera" → show permissions
3. Demonstrate real-time metrics
4. Show engagement level changes
5. Display session statistics
6. Stop session → show privacy message

## Next Steps for Development

1. **Phase 2 Integration**:
   - Add MediaPipe library
   - Implement face mesh detection
   - Add Librosa for audio
   - Create ML model pipeline

2. **Backend (Optional)**:
   - Add API routes for model inference
   - Database for analytics (anonymized)
   - User authentication

3. **Deployment**:
   - Deploy to Vercel (free)
   - Or use Docker container

## Support

For issues or questions:
- Check browser console (F12)
- Review README.md
- Check Next.js documentation: https://nextjs.org/docs

---

**Ready to impress your examiners!** 🚀
