import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Lato, Great_Vibes } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nav',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
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
  openGraph: {
    title: 'Celebration of Service Summit & Awards Reception | iSCI',
    description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Leadership in Sports, Wellness & Service',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebration of Service Summit & Awards Reception | iSCI',
    description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/background33.png',
    apple: '/background33.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}


