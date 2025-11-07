import type { Metadata } from 'next'
import { Playfair_Display, Libre_Baskerville, Montserrat, Lato, Inter, Cinzel, Great_Vibes } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading-alt',
  display: 'swap',
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-tagline',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
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
  variable: '--font-body-alt',
  display: 'swap',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Celebration of Service Summit & Awards Reception | iSCI',
  description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
  openGraph: {
    title: 'Celebration of Service Summit & Awards Reception | iSCI',
    description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
    images: [
      {
        url: '/Veterans Day  Sports and Service Networking Reception-3.png',
        width: 1500,
        height: 2000,
        alt: 'Leadership in Sports, Wellness & Service Event Invitation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebration of Service Summit & Awards Reception | iSCI',
    description: 'Leadership in Sports, Wellness & Service Summit & Reception hosted by Inclusive Security Collective Initiative (iSCI) LLC',
    images: ['/Veterans Day  Sports and Service Networking Reception-3.png'],
  },
  icons: {
    icon: '/Veterans Day  Sports and Service Networking Reception-3.png',
    apple: '/Veterans Day  Sports and Service Networking Reception-3.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${libreBaskerville.variable} ${cinzel.variable} ${inter.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}


