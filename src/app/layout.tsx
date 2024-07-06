import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PLPL Infotech & Infra Private Limited',
  description: 'PLPL Infotech & Infra Private Limited',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;
  return (
    <html lang="en" data-theme={theme ? theme : 'light'}>
      <body className={inter.className}  >
        <Navbar theme={theme} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
