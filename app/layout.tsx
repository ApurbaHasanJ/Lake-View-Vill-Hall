"use client"
import React from "react"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BottomNav } from '../components/navigation/bottom-nav'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

// export const metadata: Metadata = {
//   title: 'Lakeview Village Hall | Community Hub in Sittingbourne',
//   description: 'Lakeview Village Hall is a community hub for the Great Easthall estate. Book the hall for events, find out what\'s on, and join our community.',
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <BottomNav isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <Analytics />
      </body>
    </html>
  )
}
