import type { Metadata } from 'next'
import { Playfair_Display, Lato, Montserrat, Great_Vibes } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-nav',
  display: 'swap',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Celebration of Service Summit & Awards Reception | iSCI',
  description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable} ${montserrat.variable} ${greatVibes.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}


