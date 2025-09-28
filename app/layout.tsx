import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agimi Atef - Mechanical Designer Portfolio',
  description: 'Professional mechanical designer specializing in CAD design, manufacturing processes, and engineering solutions. Expert in SolidWorks, Catia V5, and AutoCAD.',
  keywords: 'mechanical designer, CAD, SolidWorks, Catia V5, AutoCAD, manufacturing, engineering, FEA',
  authors: [{ name: 'Agimi Atef' }],
  creator: 'Agimi Atef',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agimi-atef-portfolio.vercel.app',
    title: 'Agimi Atef - Mechanical Designer Portfolio',
    description: 'Professional mechanical designer specializing in CAD design, manufacturing processes, and engineering solutions.',
    siteName: 'Agimi Atef Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agimi Atef - Mechanical Designer Portfolio',
    description: 'Professional mechanical designer specializing in CAD design, manufacturing processes, and engineering solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
