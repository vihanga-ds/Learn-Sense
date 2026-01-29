'use client'

import { useEffect, useState } from 'react'
import styles from './StatisticsRow.module.css'

interface StatisticsRowProps {
  isActive: boolean
  scores: number[]
}

export default function StatisticsRow({ isActive, scores }: StatisticsRowProps) {
  const [sessionTime, setSessionTime] = useState('00:00')
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null)

  useEffect(() => {
    if (isActive && !sessionStartTime) {
      setSessionStartTime(Date.now())
    } else if (!isActive) {
      setSessionStartTime(null)
      setSessionTime('00:00')
    }
  }, [isActive, sessionStartTime])

  useEffect(() => {
    if (!isActive || !sessionStartTime) return

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000)
      const minutes = Math.floor(elapsed / 60)
      const seconds = elapsed % 60
      setSessionTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, sessionStartTime])

  const avgEngagement = scores.length > 0 
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(0)
    : '--'

  const peakEngagement = scores.length > 0 
    ? Math.max(...scores).toString()
    : '--'

  const dataPoints = scores.length

  return (
    <div className={styles.statsRow}>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>⏱️</div>
        <div className={styles.statValue}>{sessionTime}</div>
        <div className={styles.statLabel}>Session Duration</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={styles.statIcon}>📊</div>
        <div className={styles.statValue}>{avgEngagement}</div>
        <div className={styles.statLabel}>Avg. Engagement</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={styles.statIcon}>🎯</div>
        <div className={styles.statValue}>{peakEngagement}</div>
        <div className={styles.statLabel}>Peak Score</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={styles.statIcon}>✅</div>
        <div className={styles.statValue}>{dataPoints}</div>
        <div className={styles.statLabel}>Data Points</div>
      </div>
    </div>
  )
}
