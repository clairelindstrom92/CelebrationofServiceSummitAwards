'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const scheduleRef = useRef(null)
  const ticketsRef = useRef(null)
  const sponsorsRef = useRef(null)
  const honoreesRef = useRef(null)
  const receptionRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const SectionWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
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
              <button onClick={() => scrollToSection(ticketsRef)} className="text-white hover:text-steel-blue transition">Tickets</button>
              <button onClick={() => scrollToSection(honoreesRef)} className="text-white hover:text-steel-blue transition">Honorees</button>
              <button onClick={() => scrollToSection(sponsorsRef)} className="text-white hover:text-steel-blue transition">Sponsors</button>
              <button onClick={() => scrollToSection(receptionRef)} className="text-white hover:text-steel-blue transition">Reception Circle</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-steel-blue transition">About iSCI</button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/isci_access_granted" target="_blank" rel="noopener noreferrer" className="text-white hover:text-steel-blue transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/claradithlandry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-steel-blue transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-steel-blue/30">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection(ticketsRef)} className="text-white hover:text-steel-blue transition text-left">Tickets</button>
                <button onClick={() => scrollToSection(honoreesRef)} className="text-white hover:text-steel-blue transition text-left">Honorees</button>
                <button onClick={() => scrollToSection(sponsorsRef)} className="text-white hover:text-steel-blue transition text-left">Sponsors</button>
                <button onClick={() => scrollToSection(receptionRef)} className="text-white hover:text-steel-blue transition text-left">Reception Circle</button>
                <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-steel-blue transition text-left">About iSCI</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 flag-overlay"></div>
        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <SectionWrapper>
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-auto max-w-[250px] md:max-w-[350px]">
                <Image 
                  src="/logo.png" 
                  alt="iSCI Logo" 
                  width={400} 
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 text-white drop-shadow-lg leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Leadership in Sports, Wellness & Service
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-script mb-3 text-white/95 drop-shadow-lg tracking-wide" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Summit & Reception
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-nav font-semibold mb-6 text-silver drop-shadow-md uppercase tracking-wide">
              Celebration of Service™ Series
            </p>
            <div className="metallic-divider my-8 mx-auto max-w-lg"></div>
            <p className="text-2xl md:text-3xl font-nav font-bold mb-8 text-silver tracking-widest drop-shadow-md uppercase" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Honor Legacy. Unite the Future.
            </p>
            <div className="text-base md:text-lg text-white/95 mb-4 font-light drop-shadow-md space-y-1">
              <p>Tuesday, November 11, 2025</p>
              <p>Army & Navy Country Club • Arlington, VA</p>
            </div>
            <div className="metallic-divider my-6 mx-auto max-w-md"></div>
            <button 
              onClick={() => scrollToSection(ticketsRef)}
              className="bg-steel-blue hover:bg-steel-blue/90 text-white font-nav font-semibold py-3 px-10 rounded-lg transition transform hover:scale-105 shadow-xl uppercase tracking-wide"
            >
              Buy Tickets
            </button>
          </SectionWrapper>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-navy tracking-tight">About the Celebration of Service Series</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
              <p>
                Inclusive Security Collective Initiative (iSCI) LLC hosts the <span className="font-semibold">Celebration of Service™ Event Series</span>, 
                bridging defense, industry, and innovation through experiential programming that celebrates leadership, service, and community.
              </p>
              <p>
                Our mission: <span className="font-semibold">Advance inclusive economic pathways, cultural diplomacy, and leadership development</span> 
                across the Defense Industrial Complex and creative sectors — including sports, wellness, and the arts.
              </p>
              <div className="metallic-divider my-8"></div>
              <p className="font-semibold text-xl">Key Goals:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share information about upcoming events and initiatives</li>
                <li>Sell tickets for high-level receptions and summits</li>
                <li>Attract sponsors and philanthropic partners</li>
                <li>Build awareness of iSCI&apos;s Celebration of Service™ Series</li>
              </ul>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section ref={scheduleRef} className="py-32 bg-gradient-to-b from-navy/5 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-navy tracking-tight">Event Schedule</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-steel-blue hover:shadow-lg transition" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-2xl font-heading font-bold text-steel-blue mb-2">4:30 – 5:30 PM</div>
                <h3 className="text-xl font-heading font-semibold mb-3">VIP Reception</h3>
                <p className="text-gray-600">Exclusive networking with honorees and special guests</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-navy hover:shadow-lg transition" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-2xl font-heading font-bold text-navy mb-2">6:30 – 8:00 PM</div>
                <h3 className="text-xl font-heading font-semibold mb-3">Main Program & Awards Presentation</h3>
                <p className="text-gray-600">Keynote addresses and recognition of distinguished leaders</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-steel-blue hover:shadow-lg transition" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-2xl font-heading font-bold text-steel-blue mb-2">8:30 – 9:30 PM</div>
                <h3 className="text-xl font-heading font-semibold mb-3">Closing Networking Reception</h3>
                <p className="text-gray-600">Conclude the evening with refreshments and connections</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Tickets Section */}
      <section ref={ticketsRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-navy tracking-tight">Reserve Your Seat</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-silver/20 to-white p-10 rounded-lg shadow-xl hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition hover:scale-[1.02] group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-2xl font-heading font-bold mb-4">General Admission</h3>
                <div className="text-4xl font-heading font-bold text-steel-blue mb-6">$125</div>
                <ul className="space-y-2 mb-8">
                  <li>✓ Main Program Access</li>
                  <li>✓ Awards Presentation</li>
                  <li>✓ Networking Reception</li>
                </ul>
                <a 
                  href="https://buy.stripe.com/YOUR-GA-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-3 px-6 rounded-lg transition text-center"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-navy to-steel-blue p-10 rounded-lg shadow-xl text-white hover:scale-[1.02] transition group hover:shadow-2xl hover:ring-4 hover:ring-steel-blue/30">
                <h3 className="text-2xl font-heading font-bold mb-4">VIP Ticket</h3>
                <div className="text-4xl font-heading font-bold text-white mb-6">$250</div>
                <ul className="space-y-2 mb-8">
                  <li>✓ All General Admission Benefits</li>
                  <li>✓ VIP Reception Access</li>
                  <li>✓ Reserved Premium Seating</li>
                  <li>✓ Meet & Greet with Honorees</li>
                </ul>
                <a 
                  href="https://buy.stripe.com/YOUR-VIP-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-silver text-navy font-bold py-3 px-6 rounded-lg transition text-center"
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-32 bg-gradient-to-b from-white to-steel-blue/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-navy tracking-tight">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { tier: "Commander-in-Chief", amount: "$25,000", benefits: ["Title recognition", "Remarks", "Premier logo placement"] },
                { tier: "General's Circle", amount: "$15,000", benefits: ["On-stage recognition", "Media inclusion"] },
                { tier: "Distinguished Partner", amount: "$10,000", benefits: ["Logo on collateral", "VIP access"] },
                { tier: "Legacy Supporter", amount: "$5,000", benefits: ["Table sponsorship", "Program acknowledgment"] }
              ].map((sponsor, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition border-2 border-silver/30 hover:border-steel-blue">
                  <h3 className="text-xl font-heading font-bold text-navy mb-2">{sponsor.tier}</h3>
                  <div className="text-3xl font-heading font-bold text-steel-blue mb-4">{sponsor.amount}</div>
                  <ul className="space-y-1">
                    {sponsor.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Honorees Section */}
      <section ref={honoreesRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-4">Honorees & Speakers</h2>
            <p className="text-center text-gray-600 mb-12">Full honoree list coming soon.</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="aspect-square bg-gradient-to-br from-steel-blue to-navy"></div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold mb-1">Honoree Name</h3>
                    <p className="text-sm text-gray-600 mb-2">Title/Organization</p>
                    <p className="text-sm text-gray-700">Brief bio description of the honoree&apos;s achievements and contributions.</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Reception Circle Section */}
      <section ref={receptionRef} className="py-32 bg-gradient-to-br from-steel-blue/10 via-steel-blue/5 to-navy/10 text-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-navy tracking-tight">Reception Circle</h2>
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
                className="inline-block bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-4 px-12 rounded-lg transition transform hover:scale-105 shadow-xl uppercase tracking-wide"
              >
                Become a Partner
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-12">Past Events & Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "2024 Salute to Service", year: "2024" },
                { title: "2023 Leadership Reception", year: "2023" },
                { title: "Celebration of Service", year: "2023" },
                { title: "Awards Ceremony", year: "2022" },
                { title: "Industry Summit", year: "2022" },
                { title: "Veterans Recognition", year: "2021" }
              ].map((event, idx) => (
                <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-steel-blue to-navy group-hover:scale-110 transition duration-300"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <div className="text-sm opacity-80">{event.year}</div>
                      <div className="text-xl font-heading font-bold">{event.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Contact / Footer */}
      <section ref={contactRef} className="py-32 bg-gradient-to-b from-navy to-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 text-white tracking-tight">Stay Connected</h2>
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
                <span>#CoSGoArmy</span>
                <span>#CoSGoNavy</span>
              </div>
            </div>
            <div className="metallic-divider my-12"></div>
            <div className="text-center text-silver text-sm">
              <p>© 2025 Inclusive Security Collective Initiative (iSCI) LLC.</p>
              <p className="mt-2">Built by Claire Lindstrom.</p>
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

