'use client'
import ReduxProvider from '@/redux/reduxProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar/SideBarComponent'
import LandingPage from '@/app/landing/page'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pig Commander App',
  description: 'Your finance app'
}

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {path === '/landing' && <LandingPage/>}
          {!path.includes('/auth') && (path !== '/landing' && <SideBar/>)}
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}