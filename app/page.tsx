'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
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

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-steel-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
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
                    ? 'text-steel-blue border-steel-blue' 
                    : 'text-white/90 hover:text-steel-blue border-transparent hover:border-steel-blue/50'
                }`}
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection(honoreesRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'honorees' 
                    ? 'text-steel-blue border-steel-blue' 
                    : 'text-white/90 hover:text-steel-blue border-transparent hover:border-steel-blue/50'
                }`}
              >
                Honorees
              </button>
              <button 
                onClick={() => scrollToSection(sponsorsRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'sponsors' 
                    ? 'text-steel-blue border-steel-blue' 
                    : 'text-white/90 hover:text-steel-blue border-transparent hover:border-steel-blue/50'
                }`}
              >
                Sponsors
              </button>
              <button 
                onClick={() => scrollToSection(receptionRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'reception' 
                    ? 'text-steel-blue border-steel-blue' 
                    : 'text-white/90 hover:text-steel-blue border-transparent hover:border-steel-blue/50'
                }`}
              >
                Reception Circle
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)} 
                className={`transition font-nav font-medium text-sm tracking-wide uppercase py-2 px-1 border-b-2 ${
                  activeSection === 'about' 
                    ? 'text-steel-blue border-steel-blue' 
                    : 'text-white/90 hover:text-steel-blue border-transparent hover:border-steel-blue/50'
                }`}
              >
                About iSCI
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/isci_access_granted" target="_blank" rel="noopener noreferrer" className="text-white hover:text-steel-blue transition min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/claradithlandry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-steel-blue transition min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-steel-blue/30 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection(ticketsRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'tickets' 
                      ? 'text-steel-blue bg-steel-blue/10 font-semibold' 
                      : 'text-white/90 hover:text-steel-blue hover:bg-white/5'
                  }`}
                >
                  Tickets
                </button>
                <button 
                  onClick={() => scrollToSection(honoreesRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'honorees' 
                      ? 'text-steel-blue bg-steel-blue/10 font-semibold' 
                      : 'text-white/90 hover:text-steel-blue hover:bg-white/5'
                  }`}
                >
                  Honorees
                </button>
                <button 
                  onClick={() => scrollToSection(sponsorsRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'sponsors' 
                      ? 'text-steel-blue bg-steel-blue/10 font-semibold' 
                      : 'text-white/90 hover:text-steel-blue hover:bg-white/5'
                  }`}
                >
                  Sponsors
                </button>
                <button 
                  onClick={() => scrollToSection(receptionRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'reception' 
                      ? 'text-steel-blue bg-steel-blue/10 font-semibold' 
                      : 'text-white/90 hover:text-steel-blue hover:bg-white/5'
                  }`}
                >
                  Reception Circle
                </button>
                <button 
                  onClick={() => scrollToSection(aboutRef)} 
                  className={`text-left py-2 px-2 rounded transition min-h-[44px] ${
                    activeSection === 'about' 
                      ? 'text-steel-blue bg-steel-blue/10 font-semibold' 
                      : 'text-white/90 hover:text-steel-blue hover:bg-white/5'
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
          className="fixed bottom-8 right-8 z-40 bg-steel-blue hover:bg-navy text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Hero Section */}
      <section ref={heroRef} id="main-content" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 flag-overlay"></div>
        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <SectionWrapper>
            {/* Logo */}
            <div className="mb-8 md:mb-12 flex justify-center">
              <div className="relative w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[320px]">
                <div className="rounded-full overflow-hidden shadow-2xl" style={{ 
                  boxShadow: '0 0 40px rgba(0,0,0,0.3), 0 0 80px rgba(0,0,0,0.2), inset 0 0 20px rgba(0,0,0,0.1)' 
                }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
                  <Image 
                    src="/logo.png" 
                    alt="Leadership in Sports, Wellness & Service Logo" 
                    width={400} 
                    height={400}
                    className="w-full h-auto rounded-full"
                  />
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-nav font-semibold mb-4 text-silver/90 drop-shadow-lg uppercase tracking-[0.15em] letter-spacing-wider">
              Celebration of Service™ Series
            </p>
            <div className="metallic-divider my-5 mx-auto max-w-xl opacity-60"></div>
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-nav font-bold mb-8 tracking-[0.2em] drop-shadow-lg uppercase leading-relaxed"
              style={{ 
                background: 'linear-gradient(135deg, #E8E8E8 0%, #FFFFFF 30%, #FFFFFF 70%, #C0C0C0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 12px rgba(0,0,0,0.4)'
              }}
            >
              Honor Legacy. Unite the Future.
            </p>
            <div className="metallic-divider my-6 mx-auto max-w-xl opacity-60"></div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2 text-white/95 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm sm:text-base md:text-lg font-body font-medium">Tuesday, November 11, 2025</p>
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
                <p className="text-sm sm:text-base md:text-lg font-body font-medium">Arlington, VA</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-sm sm:text-base font-body">Capacity: <span className="font-semibold">125 Guests</span></p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90 drop-shadow-md">
                <svg className="w-4 h-4 text-silver/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p className="text-sm sm:text-base font-body">Dress Code: <span className="font-semibold">Classic Chic / Cocktail Attire</span></p>
              </div>
            </div>
            <div className="metallic-divider my-6 mx-auto max-w-md opacity-60"></div>
            <button 
              onClick={() => scrollToSection(ticketsRef)}
              className="bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-nav font-semibold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl uppercase tracking-wide min-h-[48px]"
            >
              Buy Tickets
            </button>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">About the Celebration of Service Series</h2>
            <div className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed space-y-4 md:space-y-6">
              <p>
                Inclusive Security Collective Initiative (iSCI) LLC hosts the <span className="font-semibold">Celebration of Service™ Event Series</span>, 
                bridging defense, industry, and innovation through experiential programming that celebrates leadership, service, and community.
              </p>
              <p>
                Our mission: <span className="font-semibold">Advance inclusive economic pathways, cultural diplomacy, and leadership development </span> 
                across the Defense Industrial Complex and creative sectors — including sports, wellness, and the arts.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Event Schedule Section */}
      <section ref={scheduleRef} className="py-16 md:py-32 bg-gradient-to-b from-navy/5 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Event Schedule</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl border-t-4 border-steel-blue transition-all duration-300 hover:-translate-y-1">
                <div className="text-xl md:text-2xl font-heading font-bold text-steel-blue mb-2">4:30 – 5:30 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3 text-navy">VIP Reception</h3>
                <p className="text-sm md:text-base text-gray-600">Exclusive networking with honorees and special guests</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl border-t-4 border-navy transition-all duration-300 hover:-translate-y-1">
                <div className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">6:30 – 8:00 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3 text-navy">Main Program & Awards Presentation</h3>
                <p className="text-sm md:text-base text-gray-600">Keynote addresses and recognition of distinguished leaders</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl border-t-4 border-steel-blue transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
                <div className="text-xl md:text-2xl font-heading font-bold text-steel-blue mb-2">8:30 – 9:30 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3 text-navy">Closing Networking Reception</h3>
                <p className="text-sm md:text-base text-gray-600">Conclude the evening with refreshments and connections</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Tickets Section */}
      <section ref={ticketsRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Reserve Your Seat</h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-navy">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$50</div>
                <a 
                  href="https://buy.stripe.com/eVq14obPP4bJfto2JTfw401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-center text-sm md:text-base min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-navy">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$75</div>
                <a 
                  href="https://buy.stripe.com/bJe00kf21fUrfto84dfw403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-center text-sm md:text-base min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-navy">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$100</div>
                <a 
                  href="https://buy.stripe.com/dRm3cw0779w34OKdoxfw400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-center text-sm md:text-base min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-navy to-steel-blue p-6 md:p-8 rounded-lg shadow-lg text-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 group hover:ring-4 hover:ring-steel-blue/30">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3">VIP Ticket</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">$150</div>
                <a 
                  href="https://buy.stripe.com/bJe14o5rr9w31Cybgpfw402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-silver/90 active:bg-silver/80 text-navy font-bold py-3 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-center text-sm md:text-base min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-16 md:py-32 bg-gradient-to-b from-steel-blue/5 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-silver/30 hover:border-steel-blue hover:-translate-y-1 text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-3">Individual sponsor - Steward of Legacy</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$500</div>
                <a 
                  href="https://buy.stripe.com/9B614of21bEb0yuesBfw405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sponsor Now
                </a>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-silver/30 hover:border-steel-blue hover:-translate-y-1 text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-3">Individual Sponsor - Community Champion</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$1,000</div>
                <a 
                  href="https://buy.stripe.com/5kQbJ28DDgYv0yubgpfw406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sponsor Now
                </a>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-silver/30 hover:border-steel-blue hover:-translate-y-1 text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-3">Sponsorship - Legacy Supporter</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$5,000</div>
                <a 
                  href="https://buy.stripe.com/3cIbJ2cTTeQndlg2JTfw407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center min-h-[44px] flex items-center justify-center hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sponsor Now
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Honorees Section */}
      <section ref={honoreesRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Honorees & Speakers</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-steel-blue/30">
                    <Image
                      src="/rev-dr-arlester-brown.jpeg"
                      alt="Rev. Dr. Arlester Brown"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-2">
                      Rev. Dr. Arlester Brown
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-steel-blue mb-4">
                      World War II Veteran
                    </p>
                  </div>
                  
                  <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                    {!showBio ? (
                      <>
                        <div>
                          <h4 className="font-bold text-lg mb-2">LIFE AND EDUCATION:</h4>
                          <p>On April 1, 1924, Arlester Brown was born in Spring Lake, Louisiana. In his early age, a famine came upon the state of Louisiana. Many people became ill and also died. His family migrated to many areas in the South. His family did a lot of share cropping with many families in the corn fields. He spent a great deal of my childhood life in Chatham and Shreveport, Louisiana. He was was reared by his grandparents John Brown and Rosie Wilson Brown and my mother (with my sisters and brothers). Arlester moved back to Homer, Louisiana then onto Minden, Louisiana. His mother worked in a restaurant to feed the family. The entire family also worked on a farm outside Minden, Louisiana to have some income and care for the family. After living in Minden, Louisiana, the family moved to Sibling, Louisiana. At the age of 12 years-old, he lived with his grandmother in Grambling, Louisiana and went to elementary school. He later attended junior high and high school on the campus of Grambling College.</p>
                          <p className="mt-2">While living in Grambling, Louisiana, Coach Eddie Robinson (undefeated football team in history) made a recommendation for him to play football. Coach Eddie Robinson shared with Arlester&apos;s grandmother that he would make a good football player at Grambling College. Life was fun and he enjoyed playing with his best friend – &quot;PAUL TANK YOUNGER&quot;! It was the happiest days of his life to be with a future LEDGEND! He loved Coach Eddie Robinson and he was treated like he was his son.</p>
                        </div>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-steel-blue hover:text-navy active:text-steel-blue/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
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
                          className="text-steel-blue hover:text-navy active:text-steel-blue/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
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
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Award Categories Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-white to-silver/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Award Categories (Forthcoming)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Diplomacy Award</p>
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Corporate-Sponsor Service Award</p>
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Host City Award</p>
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Military Academy Recognition</p>
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Legacy in Service Award</p>
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg border border-silver/30 hover:border-steel-blue/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-steel-blue/10 rounded-full flex items-center justify-center group-hover:bg-steel-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-navy">Wellness & Resilience Highlight</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Reception Circle Section */}
      <section ref={receptionRef} className="py-16 md:py-32 bg-gradient-to-br from-steel-blue/10 via-steel-blue/5 to-navy/10 text-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Reception Circle</h2>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed">
                The Reception Circle is iSCI&apos;s exclusive network of legacy supporters and sponsors who help sustain 
                the Celebration of Service™ Event Series through their commitment to advancing inclusive economic 
                pathways and cultural diplomacy.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                Join this distinguished community and make a lasting impact on leadership development across 
                the Defense Industrial Complex and creative sectors.
              </p>
              <a 
                href="mailto:inclusivesecuritycollectiveinitiative@isciaccess.org?subject=Reception Circle Inquiry"
                className="inline-block bg-steel-blue hover:bg-steel-blue/90 active:bg-steel-blue/80 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl uppercase tracking-wide min-h-[48px] flex items-center justify-center"
              >
                Become a Partner
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Meet the Founder Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Meet the Founder</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-steel-blue/30">
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
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-2">
                      Claradith &quot;Clara&quot; E. Landry
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-steel-blue mb-1">
                      Army Veteran | Founder | CEO
                    </p>
                    <p className="text-base md:text-lg font-semibold text-steel-blue mb-4">
                      Inclusive Security Collective Initiative (iSCI) &<br />
                      Celebration of Service™ Event Series
                    </p>
                  </div>
                  
                  <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                    {!showFounderBio ? (
                      <>
                        <p>
                          A former Presidential Advisor, Corporate Senior Executive, and Military Intelligence Officer, I have dedicated my career to connecting military, corporate, and cultural communities through strategic storytelling and experiential design.
                        </p>
                        <p>
                          For nearly two decades, my work has centered on purpose, culture, innovation, expansion, and community-bridging the gap between defense, diplomacy, innovation, community, and industry. My experience spans global platforms that celebrate leadership and service, from developing communications and strategic frameworks for senior military leaders to advising on corporate positioning that aligns mission, values, and impact.
                        </p>
                        <button
                          onClick={() => setShowFounderBio(true)}
                          className="text-steel-blue hover:text-navy active:text-steel-blue/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          A former Presidential Advisor, Corporate Senior Executive, and Military Intelligence Officer, I have dedicated my career to connecting military, corporate, and cultural communities through strategic storytelling and experiential design.
                        </p>
                        <p>
                          For nearly two decades, my work has centered on purpose, culture, innovation, expansion, and community-bridging the gap between defense, diplomacy, innovation, community, and industry. My experience spans global platforms that celebrate leadership and service, from developing communications and strategic frameworks for senior military leaders to advising on corporate positioning that aligns mission, values, and impact.
                        </p>
                        <p>
                          I am a proud graduate of Saint Mary&apos;s College of Notre Dame and a commissioned officer from the prestigious Army ROTC program at the University of Notre Dame-foundations that deeply inform my commitment to service, excellence, and community.
                        </p>
                        <p>
                          The Celebration of Service™ event series was created to honor the enduring legacy of military service and the commitment it represents-one rooted in valor, unity, and America&apos;s core values. Through this series, my goal is to preserve tradition while celebrating the modern evolution of service. It is both a professional mission and a personal calling: to build community, cement a legacy of service, and inspire the next generation of leaders who will continue to shape our nation&apos;s story.
                        </p>
                        <button
                          onClick={() => setShowFounderBio(false)}
                          className="text-steel-blue hover:text-navy active:text-steel-blue/80 font-semibold underline transition-all duration-300 mt-2 min-h-[44px] px-2"
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
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>

      {/* Contact / Footer */}
      <section ref={contactRef} className="py-16 md:py-32 bg-gradient-to-b from-navy to-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-white tracking-tight">Stay Connected</h2>
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="text-center">
                <a href="mailto:inclusivesecuritycollectiveinitiative@isciaccess.org" className="text-xl md:text-2xl hover:text-steel-blue transition font-medium">
                  inclusivesecuritycollectiveinitiative@isciaccess.org
                </a>
              </div>
              <div className="flex justify-center space-x-8">
                <a href="https://instagram.com/isci_access_granted" target="_blank" rel="noopener noreferrer" className="hover:text-steel-blue transition transform hover:scale-110">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/claradith-e-l-10030694/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-steel-blue transition transform hover:scale-110">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-silver">
                <span>#CelebrationOfService</span>
                <span>#HonorLegacy</span>
                <span>#UniteTheFuture</span>
              </div>
            </div>
            <div className="metallic-divider my-12"></div>
            <div className="text-center text-silver text-sm">
              <p>© 2025 Inclusive Security Collective Initiative (iSCI) LLC.</p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-steel-blue hover:bg-navy text-white p-3 rounded-full shadow-lg transition z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  )
}

