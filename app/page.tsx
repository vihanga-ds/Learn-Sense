'use client'

import { useState } from 'react'
import VideoCapture from '@/components/VideoCapture'
import EngagementPanel from '@/components/EngagementPanel'
import StatisticsRow from '@/components/StatisticsRow'
import styles from './page.module.css'

export default function Home() {
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [currentScore, setCurrentScore] = useState(0)
  const [engagementScores, setEngagementScores] = useState<number[]>([])

  const handleSessionStart = () => {
    setIsSessionActive(true)
    setEngagementScores([])
    setCurrentScore(0)
  }

  const handleSessionStop = () => {
    setIsSessionActive(false)
    setCurrentScore(0)
  }

  const handleEngagementUpdate = (score: number) => {
    setCurrentScore(score)
    setEngagementScores(prev => [...prev, score])
  }

  return (
    <>
      {/* Background Effects */}
      <div className={styles.bgGrid}></div>
      <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
      <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>LS</div>
          <span>Learn Sense</span>
        </div>
        <div className={styles.statusBadge}>
          <div className={styles.statusDot}></div>
          <span>System Active</span>
        </div>
      </header>

      {/* Main Container */}
      <div className={styles.container}>
        {/* Main Grid */}
        <div className={styles.mainGrid}>
          <VideoCapture 
            onSessionStart={handleSessionStart}
            onSessionStop={handleSessionStop}
            onEngagementUpdate={handleEngagementUpdate}
          />
          
          <EngagementPanel 
            currentScore={currentScore}
            isActive={isSessionActive}
          />
        </div>

        {/* Bottom Statistics */}
        <StatisticsRow 
          isActive={isSessionActive}
          scores={engagementScores}
        />
      </div>
    </>
  )
}
