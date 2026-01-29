import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learn Sense - Real-Time Engagement Detection',
  description: 'A Real-Time Multimodal Engagement Detection System for Online Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
