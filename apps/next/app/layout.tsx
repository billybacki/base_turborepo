import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Provider } from './provider'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'MUI + Tailwind 主题系统',
  description: '完美集成的现代前端主题解决方案'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 防止主题闪烁的脚本 - 必须在 body 开始处 */}
        <InitColorSchemeScript attribute="data-mui-color-scheme" />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
