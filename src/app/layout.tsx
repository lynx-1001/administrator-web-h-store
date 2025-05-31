'use client'

import { ThemeProvider } from 'next-themes'
import './globals.css'
import { SidebarProvider } from '@/core/context/SidebarContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
          {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
