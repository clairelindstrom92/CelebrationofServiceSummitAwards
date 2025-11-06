'use client'

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBio, setShowBio] = useState(false)
  const [showFounderBio, setShowFounderBio] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const scheduleRef = useRef(null)
  const ticketsRef = useRef(null)
  const sponsorsRef = useRef(null)
  const honoreesRef = useRef(null)
  const receptionRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Track active section and scroll position
  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      setShowScrollTop(scrollPosition > 400)

      const sections = [
        { ref: heroRef, id: 'hero' },
        { ref: aboutRef, id: 'about' },
        { ref: scheduleRef, id: 'schedule' },
        { ref: ticketsRef, id: 'tickets' },
        { ref: sponsorsRef, id: 'sponsors' },
        { ref: honoreesRef, id: 'honorees' },
        { ref: receptionRef, id: 'reception' },
        { ref: contactRef, id: 'contact' }
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const offsetTop = (section.ref.current as HTMLElement).offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    // Delay to ensure hydration is complete
    const timeoutId = setTimeout(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const SectionWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C1F36]/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 flex-1">
              <button 
                onClick={() => scrollToSection(ticketsRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'tickets' 
                    ? 'text-gold border-gold' 
                    : 'text-white/90 hover:text-gold border-transparent hover:border-gold/50'
                }`}
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection(honoreesRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'honorees' 
                    ? 'text-gold border-gold' 
                    : 'text-white/90 hover:text-gold border-transparent hover:border-gold/50'
                }`}
              >
                Honorees
              </button>
              <button 
                onClick={() => scrollToSection(sponsorsRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'sponsors' 
                    ? 'text-gold border-gold' 
                    : 'text-white/90 hover:text-gold border-transparent hover:border-gold/50'
                }`}
              >
                Sponsors
              </button>
              <button 
                onClick={() => scrollToSection(receptionRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'reception' 
                    ? 'text-gold border-gold' 
                    : 'text-white/90 hover:text-gold border-transparent hover:border-gold/50'
                }`}
              >
                Reception Circle
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'about' 
                    ? 'text-gold border-gold' 
                    : 'text-white/90 hover:text-gold border-transparent hover:border-gold/50'
                }`}
              >
                About iSCI
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/isci_access_granted" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/claradithlandry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <Image 
                src="/claraslogo.png" 
                alt="iSCI Logo" 
                width={40} 
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 opacity-90"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gold/30 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection(ticketsRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'tickets' 
                      ? 'text-gold bg-gold/10 font-semibold' 
                      : 'text-white/90 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  Tickets
                </button>
                <button 
                  onClick={() => scrollToSection(honoreesRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'honorees' 
                      ? 'text-gold bg-gold/10 font-semibold' 
                      : 'text-white/90 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  Honorees
                </button>
                <button 
                  onClick={() => scrollToSection(sponsorsRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'sponsors' 
                      ? 'text-gold bg-gold/10 font-semibold' 
                      : 'text-white/90 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  Sponsors
                </button>
                <button 
                  onClick={() => scrollToSection(receptionRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'reception' 
                      ? 'text-gold bg-gold/10 font-semibold' 
                      : 'text-white/90 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  Reception Circle
                </button>
                <button 
                  onClick={() => scrollToSection(aboutRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'about' 
                      ? 'text-gold bg-gold/10 font-semibold' 
                      : 'text-white/90 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  About iSCI
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gold hover:bg-gold-dark text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Hero Section */}
      <section ref={heroRef} id="main-content" className="hero-bg min-h-screen flex items-start justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 flag-overlay"></div>
        {/* Event Logo - Upper right corner */}
        <div className="absolute top-20 right-4 md:top-24 md:right-8 z-40">
          <div className="relative w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
            <Image 
              src="/logo.png" 
              alt="Leadership in Sports, Wellness & Service Logo" 
              width={160} 
              height={160}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="container mx-auto px-6 pt-48 md:pt-56 lg:pt-64 pb-20 text-center text-white relative z-10">
          <SectionWrapper>

            <p className="text-sm sm:text-base md:text-lg font-serif font-semibold mb-4 text-gold drop-shadow-lg uppercase tracking-[0.15em] letter-spacing-wider" style={{ fontVariant: 'small-caps' }}>
              Celebration of Service™ Event Series Presents:
            </p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-white drop-shadow-lg tracking-wide">
              Leadership in Sports, Wellness & Service Awards & Networking Reception
            </h1>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
            <p className="text-base font-nav font-medium mb-8 text-silver/80 drop-shadow-md">
              Hosted by Inclusive Security Collective Initiative
            </p>
            <div className="gold-divider my-6 mx-auto max-w-xl"></div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-white/95 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-base font-body font-medium uppercase">Tuesday, November 11, 2025 (Veterans Day)</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/95 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-base font-body font-medium">5:30 PM – 8:30 PM ET</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-white/95 drop-shadow-md">
                <div className="flex items-center justify-center">
                  <Image 
                    src="/armynavy-logo.svg" 
                    alt="Army & Navy Country Club" 
                    width={250} 
                    height={25}
                    className="h-6 md:h-8 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-base font-body font-medium">1700 Army Navy Dr., Arlington, VA 22202</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p className="text-base font-body uppercase">Attire: <span className="font-semibold">Cocktail</span></p>
              </div>
              <div className="mt-4 mb-4">
                <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-bordeaux to-transparent mb-3 opacity-60"></div>
                <p 
                  className="text-lg font-tagline font-semibold tracking-[0.2em] drop-shadow-lg uppercase"
                  style={{ 
                    color: '#C5A64A',
                    textShadow: '0 2px 8px rgba(197,166,74,0.5), 0 4px 12px rgba(0,0,0,0.4)'
                  }}
                >
                  HONOR LEGACY. UNITE THE FUTURE.™
                </p>
                <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-bordeaux to-transparent mt-3 opacity-60"></div>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-body text-white/90">Doors Open: 5:30 PM</p>
                <p className="text-sm font-body text-white/90">Program: 6:00 PM – 7:30 PM</p>
                <p className="text-sm font-body text-white/90">Networking Reception: 7:30 PM – 8:30 PM</p>
              </div>
              <div className="gold-divider my-6 mx-auto max-w-md"></div>
            </div>
            <div className="gold-divider my-8 mx-auto max-w-md"></div>
            <button 
              onClick={() => scrollToSection(ticketsRef)}
              className="text-white font-nav font-semibold py-3 px-10 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg uppercase tracking-wide min-h-[48px] sparkle-button"
            >
              Purchase Your Ticket
            </button>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-20 bg-ivory section-enhanced">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              About the Celebration of Service™ Event Series
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="content-card elegant-text">
                <p className="text-base mb-6">
                  A convening honoring service in all its forms — military, civic, athletic, and community. Held at the historic Army Navy Country Club, this fourth installment of the <span className="font-semibold text-navy">Celebration of Service™ Event Series</span> brings together leaders across defense, sports, and wellness to reflect on legacy, uplift present commitments, and strengthen the future we build together.
                </p>
                <p className="text-base">
                  This reception recognizes the legacy we inherit, the commitments we uphold today, and the future we are responsible for shaping together. It is a space to reconnect, to honor those who serve and have served, and to strengthen the bonds that allow communities to thrive. The 2025 Celebration of Service™ Awards will include a special recognition honoring 101-year-old WWII Veteran, Rev. Dr. Arlester Brown, for leadership across sports, wellness, and service.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Event Run of Show Section */}
      <section ref={scheduleRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Event Run of Show
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="timeline-card border-gold p-6 md:p-8 rounded-2xl">
                <div className="text-lg font-heading font-bold text-gold mb-3">4:30 PM – 5:30 PM</div>
                <h3 className="text-base font-heading font-semibold mb-2 md:mb-3 text-navy">Exclusive VIP Reception</h3>
                <p className="text-base text-gray-600">Private networking</p>
              </div>
              <div className="timeline-card border-navy p-6 md:p-8 rounded-2xl">
                <div className="text-lg font-heading font-bold text-navy mb-3">5:30 PM – 6:00 PM</div>
                <h3 className="text-base font-heading font-semibold mb-2 md:mb-3 text-navy">Pre-Event Networking & Refreshments</h3>
              </div>
              <div className="timeline-card border-gold p-6 md:p-8 rounded-2xl">
                <div className="text-lg font-heading font-bold text-gold mb-3">6:00 PM – 7:30 PM</div>
                <h3 className="text-base font-heading font-semibold mb-2 md:mb-3 text-navy">Speaker Remarks & Award Presentations</h3>
              </div>
              <div className="timeline-card border-navy p-6 md:p-8 rounded-2xl">
                <div className="text-lg font-heading font-bold text-navy mb-3">7:30 PM – 8:30 PM</div>
                <h3 className="text-base font-heading font-semibold mb-2 md:mb-3 text-navy">Networking Reception</h3>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* More About the Venue Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              About the Army & Navy Country Club
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="elegant-card p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-full md:w-64">
                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-gold/30 ring-2 ring-gold/10 image-warm-tone">
                      <Image
                        src="/aboutthevenue.png"
                        alt="Army & Navy Country Club Interior"
                        width={256}
                        height={192}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Decorative venue image - similar to flyer */}
                    <div className="mt-4 hidden md:block">
                      <div className="relative w-full rounded-lg overflow-hidden shadow-lg border-2 border-gold/30 ring-1 ring-gold/10 image-warm-tone">
                        <Image
                          src="/background33.png"
                          alt="Army & Navy Country Club"
                          width={256}
                          height={160}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-base leading-relaxed space-y-4 md:space-y-6 elegant-text">
                    <p>
                      Established in 1924, the Army & Navy Country Club in Arlington, VA, is one of the nation&apos;s most historic private clubs, serving leaders from defense, diplomacy, and public service. Its facilities host senior-level gatherings across Washington D.C., including Department of Defense, NATO, and service academy events.
                    </p>
                    <p>
                      The Club&apos;s tradition of excellence mirrors the mission of the Celebration of Service™ Event Series—to honor legacy, uplift current commitments, and strengthen future leadership through connection and reflection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Tickets Section */}
      <section ref={ticketsRef} className="py-16 md:py-20 bg-white section-enhanced">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Purchase Tickets
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="premium-card p-6 md:p-8 rounded-2xl text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-heading font-bold">Exclusive VIP Ticket + Tour Option</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-white/40 to-white/70 rounded-full"></div>
                </div>
                <div className="text-lg font-heading font-bold text-white mb-2">$150</div>
                <p className="text-sm text-white/80 mb-6">(max 10 tickets)</p>
                <a 
                  href="https://buy.stripe.com/bJe14o5rr9w31Cybgpfw402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-md transition-all duration-300 text-center text-base min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] bg-white/20 hover:bg-white/30 border border-white/30"
                >
                  Purchase Tickets
                </a>
              </div>
              <div className="elegant-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-heading font-bold text-navy">Early Bird</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-gold/40 to-gold/70 rounded-full"></div>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6">$50</div>
                <a 
                  href="https://buy.stripe.com/eVq14obPP4bJfto2JTfw401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-md transition-all duration-300 text-center text-base min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button"
                >
                  Purchase Tickets
                </a>
              </div>
              <div className="elegant-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-heading font-bold text-navy">General Admission</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-gold/40 to-gold/70 rounded-full"></div>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6">$75</div>
                <a 
                  href="https://buy.stripe.com/bJe00kf21fUrfto84dfw403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-md transition-all duration-300 text-center text-base min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button"
                >
                  Purchase Tickets
                </a>
              </div>
              <div className="elegant-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-heading font-bold text-navy">Elevated Entry</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-gold/40 to-gold/70 rounded-full"></div>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6">$100</div>
                <a 
                  href="https://buy.stripe.com/dRm3cw0779w34OKdoxfw400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-md transition-all duration-300 text-center text-base min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button"
                >
                  Purchase Tickets
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-16 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Sponsorship Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
              <div className="elegant-card p-6 md:p-8 rounded-2xl flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-3 rounded-full"></div>
                  <h3 className="text-base font-heading font-bold text-navy mb-3">Honor Supporter</h3>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6 text-center">$500</div>
                <ul className="text-base text-gray-700 space-y-2 mb-6 flex-grow">
                  <li>• Name listed in program and website</li>
                  <li>• Recognition in remarks</li>
                </ul>
                <a 
                  href="https://buy.stripe.com/9B614of21bEb0yuesBfw405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-navy font-bold py-3 px-6 rounded-md transition-all duration-300 text-center min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button mt-auto"
                >
                  Sponsor Now
                </a>
              </div>
              <div className="elegant-card p-6 md:p-8 rounded-2xl flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-3 rounded-full"></div>
                  <h3 className="text-base font-heading font-bold text-navy mb-3">Community Champion</h3>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6 text-center">$1,000</div>
                <ul className="text-base text-gray-700 space-y-2 mb-6 flex-grow">
                  <li>• Includes Honor Supporter benefits</li>
                  <li>• Logo placement on event signage and digital flyer</li>
                  <li>• Two general-admission tickets</li>
                </ul>
                <a 
                  href="https://buy.stripe.com/5kQbJ28DDgYv0yubgpfw406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-navy font-bold py-3 px-6 rounded-md transition-all duration-300 text-center min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button mt-auto"
                >
                  Sponsor Now
                </a>
              </div>
              <div className="elegant-card p-6 md:p-8 rounded-2xl border-gold/40 flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-3 rounded-full"></div>
                  <h3 className="text-base font-heading font-bold text-navy mb-3">Legacy Supporter</h3>
                </div>
                <div className="text-lg font-heading font-bold text-gold mb-6 text-center">$5,000</div>
                <ul className="text-base text-gray-700 space-y-2 mb-6 flex-grow">
                  <li>• Includes all previous benefits</li>
                  <li>• Four complimentary VIP tickets</li>
                  <li>• Verbal acknowledgment during program</li>
                  <li>• Inclusion in post-event press release</li>
                </ul>
                <a 
                  href="https://buy.stripe.com/3cIbJ2cTTeQndlg2JTfw407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-navy font-bold py-3 px-6 rounded-md transition-all duration-300 text-center min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] sparkle-button mt-auto"
                >
                  Sponsor Now
                </a>
              </div>
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-base text-gray-700 mb-4">
                 For sponsorships above $5,000, contact <a href="mailto:inclusivesecuritycollectiveinitiative@isciaccess.org" className="text-gold hover:text-gold-dark hover:underline">inclusivesecuritycollectiveinitiative@isciaccess.org</a>.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Honorees Section */}
      <section ref={honoreesRef} className="py-16 md:py-20 bg-ivory section-enhanced">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Honorees & Speakers
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="elegant-card p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 md:w-64 shadow-2xl border-4 border-gold/30 ring-4 ring-gold/10 rounded-lg overflow-hidden image-warm-tone">
                      <Image
                        src="/rev-dr-arlester-brown.jpeg"
                        alt="Rev. Dr. Arlester Brown"
                        width={256}
                        height={320}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-navy mb-2">
                        Rev. Dr. Arlester Brown
                      </h3>
                      <p className="text-base font-semibold text-gold mb-4">
                        Legacy in Service Award Honoree
                      </p>
                    </div>
                    
                    <div className="text-base leading-relaxed text-gray-700 space-y-4">
                    {!showBio ? (
                      <>
                        <p>
                          A 101-year-old World War II veteran and lifelong advocate for faith-based and civic leadership. Rev. Dr. Brown served in the U.S. Army and later led Faith Christian Fellowship&apos;s global outreach for more than five decades. His lifetime of service bridges generations of military, spiritual, and community leadership, inspiring resilience and gratitude in every sphere he touched.
                        </p>
                        <p>
                          He continues to uplift through mentorship, speaking engagements, and advocacy for wellness and purpose among veterans and youth alike.
                        </p>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-gold hover:text-gold-dark active:text-gold/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          A 101-year-old World War II veteran and lifelong advocate for faith-based and civic leadership. Rev. Dr. Brown served in the U.S. Army and later led Faith Christian Fellowship&apos;s global outreach for more than five decades. His lifetime of service bridges generations of military, spiritual, and community leadership, inspiring resilience and gratitude in every sphere he touched.
                        </p>
                        <p>
                          He continues to uplift through mentorship, speaking engagements, and advocacy for wellness and purpose among veterans and youth alike.
                        </p>
                        <div>
                          <h4 className="font-bold text-lg mb-2">LIFE AND EDUCATION:</h4>
                          <p>On April 1, 1924, Arlester Brown was born in Spring Lake, Louisiana. In his early age, a famine came upon the state of Louisiana. Many people became ill and also died. His family migrated to many areas in the South. His family did a lot of share cropping with many families in the corn fields. He spent a great deal of my childhood life in Chatham and Shreveport, Louisiana. He was was reared by his grandparents John Brown and Rosie Wilson Brown and my mother (with my sisters and brothers). Arlester moved back to Homer, Louisiana then onto Minden, Louisiana. His mother worked in a restaurant to feed the family. The entire family also worked on a farm outside Minden, Louisiana to have some income and care for the family. After living in Minden, Louisiana, the family moved to Sibling, Louisiana. At the age of 12 years-old, he lived with his grandmother in Grambling, Louisiana and went to elementary school. He later attended junior high and high school on the campus of Grambling College.</p>
                          <p className="mt-2">While living in Grambling, Louisiana, Coach Eddie Robinson (undefeated football team in history) made a recommendation for him to play football. Coach Eddie Robinson shared with Arlester&apos;s grandmother that he would make a good football player at Grambling College. Life was fun and he enjoyed playing with his best friend – &quot;PAUL TANK YOUNGER&quot;! It was the happiest days of his life to be with a future LEDGEND! He loved Coach Eddie Robinson and he was treated like he was his son.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">DRAFTED IN THE ARMY:</h4>
                          <p>At age 18 (6 July 1942), Arlester was drafted in the U.S. Army from Grambling, Louisiana. He joined the Army in Ruston, Louisiana and also in Shreveport, Louisiana. He received his booth camp training at Camp Ellis in Peoria, Illinois where he was a laundry technician. He was later shipped to New York to embark on a ship. He sailed 14 days across the Atlantic Ocean with airplanes and battleships who protected them. Germany had many attacks and plans to attack ships sailing across the Atlantic Ocean. He and his shipmates sailed to South Hampton, England. He was also deployed in various locations across Saint Lo, France, Normandy, France, Belgium, Holland and Rhineland, Germany and Arkin, Germany. He worked as a Quartermaster engineer with the 599th Quartermaster Laundry Company which was known for its involvement in the historical cleaning and supply for the front line. The supply line was formed by an all Black troop who worked tirelessly to keep the troops clothing and cleaning supplies in line while the soldiers were in and out of combat during World War II. He also assisted in special attention in giving the soldiers personal hygiene and clean clothing. He along with other black soldiers were treated with more respect and equality in Europe than home in a highly segregated American culture.</p>
                          <p className="mt-2">While in Germany, he was injured and also hit in the face by an unmanned buzz bomb. It exploded close to him and a shrapnel struck my face. He was sent to Camp Shelby in Mississippi, and later sent to Tuscaloosa, Alabama for military surgery and care. He was also sent to a camp in New Jersey for rehabilitation and then sent back to Camp Shelby.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">DISCHARGE FROM THE ARMY:</h4>
                          <p>Arlester was discharged on December 28, 1945 from the Army. He received numerous military awards such as ATO Medal, EAMETO Medal, Good Conduct Award, World War II Medal and Victory Medal. He was transported by train to Shreveport, Louisiana and returned to live with his mother, sisters and brothers.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">EDUCATION AFTER THE WAR:</h4>
                          <p>After Arlester returned home from the Army. He visited the registrar&apos;s office at Grambling College and spoke with an officer about the GI Bill of Rights. The GI Bill of Rights allowed Veterans to receive their education from the U.S. Government. The Bill allowed him to finished high school and receive my B.S. degree. Today, he has earned a B.S. Degree in Education from Grambling State University (Grambling College). He also became a principal at the CATO Parish in Shreveport, LA and a clergy person (missionary). He also studied and received two Master Degrees: one in Education from Texas Southern University and another one in Divinity from Howard University School of Religion and a Doctorate of Divinity from Universal Life Church. He left the field of Education to seek a clergyman life. He felt if he would engage full time in the ministry he could teach many children a better life. During his first summer at Wesley Theological Seminary, his too his entire class went to the Canal Zone for a summer. He also conducted a missionary trip and journey for two groups to Israel and also South Africa as well.</p>
                          <p className="mt-2">Today, he is a retired clergyman who has ministered in many churches in Louisiana and the Washington District area. He also served as a Superintendent in the VA, DC and Maryland area, Advocate for 100 Men March in Washington, DC, Employed by Washington DC Kennedy Center. In addition, He supported the DC Counsel Men Group and the action for &quot;Get Crime Out of DC&quot;. He pastored in DC at Wesley Theological Seminary Campus, North DC Church (Integrated Church for 3 years), and supported Howard University School of Divinity and CME Churches. At Howard University, he gives Dr. James D. Tyms credit for his outstanding student advisory, discipline, coaching, mentoring assistant with his Masters thesis. At Howard University, he networked with the students and faculty, attended conferences and worship at the chapel. This helped Arlester provide good ministry and service to the community. Arlester has received numerous awards and recognition for my outstanding works in bringing many to Christ.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">RETURN TO NORMANDY, FRANCE:</h4>
                          <p>Arlester had the honor and pleasure to return to Normandy, France via the Best Defense Foundation (BDF) organization from California. I was accompanied by his caregiver and Executive Assistant, Ms. Elma Williams-Coleman.</p>
                          <p className="mt-2">The trip there and back was quite an experience and he truly enjoyed it. He flew from Washington, DC to Atlanta, GA via Delta-1 Airline (sponsors) on July 29, 2023. He was also flown with 44 other World War II Veterans. They were greeted by the Delta Airline&apos;s sponsors, host, staff and employees with a kick-off welcome and celebration. Also Michelin Corporation was also a sponsor. The next morning the Veterans and team were flown by Delta Airline once again, first class to Normandy, France. The next day the Veterans were greeted with awesome cheers by many Frenchmen. What a way to bring Veterans back home!!!!! While in France he visited the Omaha Beach, the French and German Cemetery, Catholic Church, City Parade, and nightly welcome celebrations by all branches of the Government. When he walked the grounds of the cemetery and saw all of the markers, the HOLY SPIRIT flashed across his mind and heart he began to leave his mark with singing &quot;Amazing Grace&quot;! The Normandy, France trip really helped him to answer some questions that I had over the years. Normandy, France will be forever in my heart and my service in World War III will never be forgotten. Arlester received the French of Legion Award (one of France&apos;s highest Military Awards) from President Emmanuel Macron during the 80th D-Day Celebration in Normandy, France (June 2024).</p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="font-semibold">SALUTE! God Almighty was his co-pilot while in the military and during his entire life.</p>
                          <p className="mt-2 italic">Arlester&apos;s favorite quote is: &quot;I am blessed to be a blessing&quot;.</p>
                          <p className="mt-4">With love and gratitude,</p>
                          <p className="font-bold">Rev. Dr. Arlester Brown</p>
                        </div>
                        <button
                          onClick={() => setShowBio(false)}
                          className="text-gold hover:text-gold-dark active:text-gold/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Show less
                        </button>
                      </>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Additional Speakers Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Additional Speakers
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="elegant-card p-8 rounded-2xl">
                <h3 className="text-base font-heading font-semibold mb-6 text-navy">Speakers to be Confirmed:</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li>• Paxton Baker – Chairman, Washington Nationals Founding Partners Group (2019 World Series Champions)</li>
                  <li>• Travis Smith / Center Circle</li>
                  <li>• Face the Fight representative (TBD)</li>
                  <li>• LTG (Ret.) Leslie Smith (AUSA)</li>
                  <li>• MAJ (Ret.) Natasha Fultz-Castro</li>
                  <li>• Embassy representative (Spain or Middle East)</li>
                  <li>• USMA and USNA emblems</li>
                  <li>• MC – TBD</li>
                </ul>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Program Highlights Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Program Highlights
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="elegant-card p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <Image 
                        src="/usma-logo.png" 
                        alt="U.S. Military Academy – West Point" 
                        width={120} 
                        height={120}
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                      <Image 
                        src="/usna-logo.png" 
                        alt="U.S. Naval Academy" 
                        width={120} 
                        height={120}
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-heading font-bold text-navy mb-3">
                        <strong>Military Academy Recognition</strong> – Celebrating 125 years of Army & Navy academies.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="elegant-card p-6 md:p-8 rounded-2xl">
                  <h3 className="text-base font-heading font-bold text-navy mb-3">
                    <strong>Wellness & Resilience Highlight</strong> – Featuring the Face the Fight Council and its coalition of 20+ organizations advancing mental-health resilience and community wellness among veterans and service members.
                  </h3>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Sponsors & Partners Section */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Sponsors & Partners
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-heading font-semibold mb-4 text-navy">Venue Sponsors & Partners:</h3>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li>• Army and Navy Country Club</li>
                    <li>• Zipped Shut Collective LLC</li>
                    <li>• ANCC Member Host: LTC (Ret.) Terron Sims</li>
                    <li>• More Coming…</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Reception Circle Section */}
      <section ref={receptionRef} className="py-16 md:py-20 bg-ivory text-navy relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Reception Circle
            </h2>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-lg leading-relaxed">
                The Reception Circle is iSCI&apos;s exclusive network of legacy supporters and sponsors who help sustain 
                the Celebration of Service™ Event Series through their commitment to advancing inclusive economic 
                pathways and cultural diplomacy.
              </p>
              <p className="text-lg leading-relaxed">
                Join this distinguished community and make a lasting impact on leadership development across 
                the Defense Industrial Complex and creative sectors.
              </p>
              <a 
                href="mailto:inclusivesecuritycollectiveinitiative@isciaccess.org?subject=Reception Circle Inquiry"
                className="inline-block text-white font-bold py-4 px-12 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg uppercase tracking-wide min-h-[48px] flex items-center justify-center sparkle-button"
              >
                Become a Partner
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Meet the Founder Section */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Meet the Founder
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-gold/30">
                    <Image
                      src="/clara.png"
                      alt="Claradith 'Clara' E. Landry"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-navy mb-2">
                      Claradith &quot;Clara&quot; E. Landry
                    </h3>
                    <p className="text-base font-semibold text-gold mb-1">
                      Founder | CEO | Army Veteran
                    </p>
                    <p className="text-base font-semibold text-gold mb-4">
                      Inclusive Security Collective Initiative (iSCI) &<br />
                      Celebration of Service™ Event Series
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/claradith-e-l-10030694/?skipRedirect=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-dark underline text-base"
                    >
                      LinkedIn
                    </a>
                  </div>
                  
                  <div className="text-base leading-relaxed text-gray-700 space-y-4">
                    {!showFounderBio ? (
                      <>
                        <p>
                          A former Presidential Appointee and Advisor, a Senior Executive with cross-sector leadership in Fortune 500 consulting and private investment, and an Army Officer, I have dedicated my career to connecting military, corporate, and cultural communities through strategic storytelling and experiential design.
                        </p>
                        <p>
                          For nearly two decades, my work has centered on purpose, culture, innovation, expansion, and community-bridging the gap between defense, diplomacy, innovation, community, and industry. My experience spans global platforms that celebrate leadership and service, from developing communications and strategic frameworks for senior military leaders to advising on corporate positioning that aligns mission, values, and impact.
                        </p>
                        <button
                          onClick={() => setShowFounderBio(true)}
                          className="text-gold hover:text-gold-dark active:text-gold/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          A former Presidential Appointee and Advisor, a Senior Executive with cross-sector leadership in Fortune 500 consulting and private investment, and an Army Officer, I have dedicated my career to connecting military, corporate, and cultural communities through strategic storytelling and experiential design.
                        </p>
                        <p>
                          For nearly two decades, my work has centered on purpose, culture, innovation, expansion, and community-bridging the gap between defense, diplomacy, innovation, community, and industry. My experience spans global platforms that celebrate leadership and service, from developing communications and strategic frameworks for senior military leaders to advising on corporate positioning that aligns mission, values, and impact.
                        </p>
                        <p>
                          I am a proud graduate of Saint Mary&apos;s College of Notre Dame and a commissioned Army Officer from the prestigious Army ROTC program at the University of Notre Dame-foundations that deeply inform my commitment to service, excellence, and community.
                        </p>
                        <p>
                          I established the Celebration of Service™ Event Series to honor the enduring legacy of military service and the commitment it represents-one rooted in valor, unity, and America&apos;s core values. Through this series, my goal is to preserve tradition while celebrating the modern evolution of service. It is both a professional mission and a personal calling: to build community, cement a legacy of service, and inspire the next generation of leaders who will continue to shape our nation&apos;s story.
                        </p>
                        <button
                          onClick={() => setShowFounderBio(false)}
                          className="text-gold hover:text-gold-dark active:text-gold/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Show less
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Long-Term Vision Section */}
      <section className="py-16 md:py-20 bg-ivory text-navy relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Long-Term Vision of the Celebration of Service™ Event Series
            </h2>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-lg leading-relaxed font-semibold">
                The Celebration of Service™ Event Series is more than an event — it&apos;s a movement.
              </p>
              <div className="space-y-6 text-base leading-relaxed text-left">
                <div>
                  <h3 className="font-heading font-bold text-navy mb-2 text-base">Reimagine Honor</h3>
                  <p className="text-gray-700">Transforming how America recognizes leadership in service.</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-2 text-base">Strengthen Communities</h3>
                  <p className="text-gray-700">Building bridges among civic, corporate, and defense sectors.</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-2 text-base">Inspire Leaders</h3>
                  <p className="text-gray-700">Encouraging the next generation through shared values of duty and compassion.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed font-bold mt-8">
                Together, we HONOR LEGACY and UNITE THE FUTURE.™
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Program Disclaimer Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-navy tracking-wide section-title-accent sparkle-header">
              Program Disclaimer
            </h2>
            <div className="max-w-4xl mx-auto text-base leading-relaxed space-y-4 md:space-y-6">
              <p>
                Inclusive Security Collective Initiative (&quot;ISCI LLC&quot;) is a non-partisan entity that produces leadership events to advance dialogue across military, civic, corporate, and non-profit sectors. Participation does not imply endorsement by the Department of Defense or any U.S. military branch.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider-elegant"></div>

      {/* Contact / Footer */}
      <section ref={contactRef} className="py-10 bg-[#0C1F36] text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-white tracking-wide">Stay Connected</h2>
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="text-center">
                <a href="mailto:inclusivesecuritycollectiveinitiative@isciaccess.org" className="text-base hover:text-gold transition font-medium">
                  inclusivesecuritycollectiveinitiative@isciaccess.org
                </a>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-gold to-gold-dark my-6 opacity-70"></div>
              <div className="flex justify-center items-center space-x-8">
                <a href="https://instagram.com/isci_access_granted" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition transform hover:scale-110">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/claradith-e-l-10030694/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition transform hover:scale-110">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <Image 
                  src="/claraslogo.png" 
                  alt="iSCI Logo" 
                  width={50} 
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 opacity-90"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-silver">
                <span>#CelebrationOfService</span>
                <span>#HonorLegacy</span>
                <span>#UniteTheFuture</span>
              </div>
            </div>
            <div className="metallic-divider my-12"></div>
            <div className="text-center text-silver text-sm space-y-2">
              <p>© 2025 Inclusive Security Collective Initiative LLC — All rights reserved.</p>
              <p>Celebration of Service™ is a registered trademark of ISCI.</p>
            </div>
          </SectionWrapper>
        </div>
      </section>

    </main>
  )
}

