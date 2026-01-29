'use client'

import { useEffect, useState } from 'react'
import styles from './EngagementPanel.module.css'

interface EngagementPanelProps {
  currentScore: number
  isActive: boolean
}

export default function EngagementPanel({ currentScore, isActive }: EngagementPanelProps) {
  const [level, setLevel] = useState('Initializing...')
  const [levelColor, setLevelColor] = useState('rgba(10, 132, 255, 0.15)')
  const [borderColor, setBorderColor] = useState('rgba(10, 132, 255, 0.3)')
  
  const [attentionMetric, setAttentionMetric] = useState('--')
  const [audioMetric, setAudioMetric] = useState('--')
  const [latencyMetric, setLatencyMetric] = useState('--')
  const [fpsMetric, setFpsMetric] = useState('--')

  useEffect(() => {
    if (!isActive || currentScore === 0) {
      setLevel('Initializing...')
      return
    }

    let newLevel, color, border
    if (currentScore >= 80) {
      newLevel = 'Peak High'
      color = 'rgba(52, 199, 89, 0.15)'
      border = 'rgba(52, 199, 89, 0.3)'
    } else if (currentScore >= 70) {
      newLevel = 'Sustained High'
      color = 'rgba(10, 132, 255, 0.15)'
      border = 'rgba(10, 132, 255, 0.3)'
    } else if (currentScore >= 60) {
      newLevel = 'Upper Medium'
      color = 'rgba(0, 217, 255, 0.15)'
      border = 'rgba(0, 217, 255, 0.3)'
    } else if (currentScore >= 50) {
      newLevel = 'Stable Medium'
      color = 'rgba(255, 214, 10, 0.15)'
      border = 'rgba(255, 214, 10, 0.3)'
    } else {
      newLevel = 'Lower Medium'
      color = 'rgba(255, 107, 107, 0.15)'
      border = 'rgba(255, 107, 107, 0.3)'
    }

    setLevel(newLevel)
    setLevelColor(color)
    setBorderColor(border)

    // Update metrics with random values
    setAttentionMetric((Math.random() * 20 + 75).toFixed(0) + '%')
    setAudioMetric((Math.random() * 30 + 60).toFixed(0) + '%')
    setLatencyMetric((Math.random() * 20 + 30).toFixed(0) + 'ms')
    setFpsMetric((Math.random() * 5 + 28).toFixed(0))
  }, [currentScore, isActive])

  return (
    <div className={styles.engagementPanel}>
      {/* Current Engagement */}
      <div className={styles.panelCard}>
        <div className={styles.panelHeader}>Real-Time Engagement</div>
        <div className={styles.panelContent}>
          <div className={styles.engagementScoreLarge}>
            <div className={styles.scoreValue}>
              {isActive && currentScore > 0 ? currentScore : '--'}
            </div>
            <div className={styles.scoreLabel}>Engagement Score</div>
            <div 
              className={styles.engagementLevel}
              style={{ 
                background: levelColor, 
                borderColor: borderColor 
              }}
            >
              {level}
            </div>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${currentScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className={styles.panelCard}>
        <div className={styles.panelHeader}>Live Metrics</div>
        <div className={styles.panelContent}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Attention</div>
              <div className={styles.metricValue}>{attentionMetric}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Audio</div>
              <div className={styles.metricValue}>{audioMetric}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Latency</div>
              <div className={styles.metricValue}>{latencyMetric}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>FPS</div>
              <div className={styles.metricValue}>{fpsMetric}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className={styles.panelCard}>
        <div className={styles.panelHeader}>Adaptive Feedback</div>
        <div className={styles.panelContent}>
          <div className={styles.feedbackList}>
            <div className={styles.feedbackItem}>
              {isActive 
                ? 'Monitoring your engagement in real-time. All processing is in-memory only (no storage).'
                : 'System ready. Start your session to receive real-time feedback.'}
              <div className={styles.feedbackTime}>
                {isActive ? 'Active' : 'Ready'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
