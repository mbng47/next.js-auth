import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar  from '@/components/Navbar'
import MaxWidthWrapper from '@/components/utils/MaxWidthWrapper'

const fontSans = FontSans({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Auth-app next.js',
  description: 'Auth-app made in create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mainClasses =
  'mb-12 mt-14 sm:mt-20 w-4/6 items-center justify-center text-left'

  return (
    <html lang="en" suppressHydrationWarning={ true }>
      <body className={cn(
					'grainy min-h-screen font-sans anitialised',
					fontSans.className,
				)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <MaxWidthWrapper className={mainClasses}>
            {children}
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
