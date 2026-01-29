'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './VideoCapture.module.css'

interface VideoCaptureProps {
  onSessionStart: () => void
  onSessionStop: () => void
  onEngagementUpdate: (score: number) => void
}

export default function VideoCapture({ onSessionStart, onSessionStop, onEngagementUpdate }: VideoCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [audioMuted, setAudioMuted] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const simulationIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: true
      })

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }

      setStream(mediaStream)
      setIsActive(true)
      onSessionStart()

      // Start simulated engagement detection
      simulationIntervalRef.current = setInterval(() => {
        const score = Math.floor(Math.random() * 30) + 60 // 60-90 range
        onEngagementUpdate(score)
      }, 2000)

    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Could not access camera/microphone. Please check permissions.')
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
      setStream(null)
      setIsActive(false)
      onSessionStop()

      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current)
      }
    }
  }

  const toggleAudio = () => {
    if (stream) {
      const newMutedState = !audioMuted
      stream.getAudioTracks().forEach(track => {
        track.enabled = !newMutedState
      })
      setAudioMuted(newMutedState)
    }
  }

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current)
      }
    }
  }, [stream])

  return (
    <div className={styles.videoSection}>
      <div className={styles.videoHeader}>
        <div className={styles.videoTitle}>
          <span>📹</span>
          Live Video Feed
        </div>
        <div className={styles.liveIndicator}>
          <div className={styles.liveDot}></div>
          LIVE
        </div>
      </div>

      <div className={styles.videoContainer}>
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className={styles.video}
        />
        {!isActive && (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>🎥</div>
            <h3>Camera Not Started</h3>
            <p>Click &quot;Start Camera&quot; to begin</p>
          </div>
        )}
      </div>

      <div className={styles.videoControls}>
        {!isActive ? (
          <button className={styles.controlBtn} onClick={startCamera}>
            <span>▶</span>
            Start Camera
          </button>
        ) : (
          <>
            <button 
              className={`${styles.controlBtn} ${styles.secondary}`} 
              onClick={toggleAudio}
            >
              <span>🎤</span>
              {audioMuted ? 'Unmute Audio' : 'Mute Audio'}
            </button>
            <button 
              className={`${styles.controlBtn} ${styles.danger}`} 
              onClick={stopCamera}
            >
              <span>⏹</span>
              Stop Session
            </button>
          </>
        )}
      </div>
    </div>
  )
}
