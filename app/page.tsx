'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBio, setShowBio] = useState(false)
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

            <p className="text-sm sm:text-base md:text-lg font-nav font-semibold mb-3 text-silver drop-shadow-md uppercase tracking-wide">
              Celebration of Service™ Series
            </p>
            <div className="metallic-divider my-4 mx-auto max-w-lg"></div>
            <p className="text-sm sm:text-base md:text-lg font-nav font-bold mb-6 text-silver tracking-widest drop-shadow-md uppercase" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Honor Legacy. Unite the Future.
            </p>
            <div className="text-sm sm:text-base md:text-lg text-white/95 mb-4 font-light drop-shadow-md space-y-2">
              <p>Tuesday, November 11, 2025</p>
              <p>Army & Navy Country Club • Arlington, VA</p>
              <p>Capacity: 125 Guests</p>
              <p>Dress Code: Classic Chic / Cocktail Attire</p>
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
                Our mission: <span className="font-semibold">Advance inclusive economic pathways, cultural diplomacy, and leadership development</span> 
                across the Defense Industrial Complex and creative sectors — including sports, wellness, and the arts.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section ref={scheduleRef} className="py-16 md:py-32 bg-gradient-to-b from-navy/5 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Event Schedule</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-steel-blue hover:shadow-lg transition" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-xl md:text-2xl font-heading font-bold text-steel-blue mb-2">4:30 – 5:30 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3">VIP Reception</h3>
                <p className="text-sm md:text-base text-gray-600">Exclusive networking with honorees and special guests</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-navy hover:shadow-lg transition" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">6:30 – 8:00 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3">Main Program & Awards Presentation</h3>
                <p className="text-sm md:text-base text-gray-600">Keynote addresses and recognition of distinguished leaders</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-steel-blue hover:shadow-lg transition sm:col-span-2 md:col-span-1" style={{ boxShadow: '0 4px 6px -1px rgba(148, 163, 184, 0.3)' }}>
                <div className="text-xl md:text-2xl font-heading font-bold text-steel-blue mb-2">8:30 – 9:30 PM</div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3">Closing Networking Reception</h3>
                <p className="text-sm md:text-base text-gray-600">Conclude the evening with refreshments and connections</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Tickets Section */}
      <section ref={ticketsRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Reserve Your Seat</h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition hover:scale-[1.02] group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$50</div>
                <a 
                  href="https://buy.stripe.com/eVq14obPP4bJfto2JTfw401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition text-center text-sm md:text-base"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition hover:scale-[1.02] group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$75</div>
                <a 
                  href="https://buy.stripe.com/bJe00kf21fUrfto84dfw403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition text-center text-sm md:text-base"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-silver/20 to-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl border-2 border-silver/30 hover:border-steel-blue transition hover:scale-[1.02] group hover:ring-4 hover:ring-steel-blue/20">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3">General Admission</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-steel-blue mb-6">$100</div>
                <a 
                  href="https://buy.stripe.com/dRm3cw0779w34OKdoxfw400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition text-center text-sm md:text-base"
                >
                  Buy Ticket
                </a>
              </div>
              <div className="bg-gradient-to-br from-navy to-steel-blue p-6 md:p-8 rounded-lg shadow-xl text-white hover:scale-[1.02] transition group hover:shadow-2xl hover:ring-4 hover:ring-steel-blue/30">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3">VIP Ticket</h3>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">$150</div>
                <a 
                  href="https://buy.stripe.com/bJe14o5rr9w31Cybgpfw402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-silver text-navy font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition text-center text-sm md:text-base"
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Attendee Breakdown Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                125 guests total – 45% Defense Leaders, 35% Corporate & Sports, 20% Nonprofit & Media. Sectors represented include Defense, Sports, Tech, Policy, Innovation, Media, Finance, Law, and Education.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-16 md:py-32 bg-gradient-to-b from-white to-steel-blue/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-16 text-navy tracking-tight">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
              {[
                { tier: "Presenting Sponsor", amount: "$25,000", benefits: ["Title recognition", "Remarks", "Premier logo placement"] },
                { tier: "Platinum Sponsor", amount: "$20,000", benefits: ["On-stage recognition", "Media inclusion", "VIP access"] },
                { tier: "Leadership Sponsor", amount: "$15,000", benefits: ["Recognition", "Media inclusion", "Event access"] },
                { tier: "Sports Sponsor", amount: "$10,000", benefits: ["Logo on collateral", "VIP access"] },
                { tier: "Service Sponsor", amount: "$5,000", benefits: ["Table sponsorship", "Program acknowledgment"] }
              ].map((sponsor, idx) => {
                const emailSubject = encodeURIComponent(`Sponsorship Inquiry - ${sponsor.tier} (${sponsor.amount})`);
                const emailBody = encodeURIComponent(`Dear iSCI Team,\n\nI am interested in the ${sponsor.tier} sponsorship tier at ${sponsor.amount} for the Celebration of Service Summit & Awards Reception.\n\nPlease provide more information about this sponsorship opportunity.\n\nThank you,\n[Your Name]`);
                const mailtoLink = `mailto:inclusivesecuritycollectiveinitiative@isciaccess.org?subject=${emailSubject}&body=${emailBody}`;
                
                return (
                  <div 
                    key={idx} 
                    onClick={() => window.location.href = mailtoLink}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition border-2 border-silver/30 hover:border-steel-blue cursor-pointer hover:scale-[1.03]"
                  >
                    <h3 className="text-xl font-heading font-bold text-navy mb-2">{sponsor.tier}</h3>
                    <div className="text-3xl font-heading font-bold text-steel-blue mb-4">{sponsor.amount}</div>
                    <ul className="space-y-1 mb-4">
                      {sponsor.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600">• {benefit}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-steel-blue font-semibold mt-4">Click to inquire</p>
                  </div>
                );
              })}
            </div>
            
            {/* Distinguished Service Founders Brigade Sub-section */}
            <div className="mt-12 max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6 text-navy">Distinguished Service Founders Brigade</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { amount: "$1,000" },
                  { amount: "$2,500" },
                  { amount: "$5,000" },
                  { amount: "$10,000" }
                ].map((level, idx) => {
                  const emailSubject = encodeURIComponent(`Founders Brigade Inquiry - ${level.amount}`);
                  const emailBody = encodeURIComponent(`Dear iSCI Team,\n\nI am interested in the Distinguished Service Founders Brigade contribution level at ${level.amount} for the Celebration of Service Summit & Awards Reception.\n\nPlease provide more information about this opportunity.\n\nThank you,\n[Your Name]`);
                  const mailtoLink = `mailto:inclusivesecuritycollectiveinitiative@isciaccess.org?subject=${emailSubject}&body=${emailBody}`;
                  
                  return (
                    <div 
                      key={idx}
                      onClick={() => window.location.href = mailtoLink}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition border-2 border-silver/30 hover:border-steel-blue cursor-pointer hover:scale-[1.02] text-center"
                    >
                      <div className="text-2xl font-heading font-bold text-steel-blue mb-2">{level.amount}</div>
                      <p className="text-xs text-steel-blue font-semibold mt-2">Click to inquire</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Honorees Section */}
      <section ref={honoreesRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Honorees & Speakers</h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative">
                <Image 
                  src="/rev-dr-arlester-brown.jpeg" 
                  alt="Rev. Dr. Arlester Brown" 
                  width={600} 
                  height={600}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-navy">Rev. Dr. Arlester Brown</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4">World War II Veteran</p>
                {!showBio && (
                  <button
                    onClick={() => setShowBio(true)}
                    className="text-steel-blue hover:text-navy font-semibold underline transition"
                  >
                    Click to read more
                  </button>
                )}
                {showBio && (
                  <div className="mt-4 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
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
                      className="text-steel-blue hover:text-navy font-semibold underline transition mt-4"
                    >
                      Show less
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-white to-silver/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Award Categories (Forthcoming)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Diplomacy Award</p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Corporate-Sponsor Service Award</p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Host City Award</p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Military Academy Recognition</p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Legacy in Service Award</p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-silver/30">
                  <p className="font-heading font-semibold text-navy">Wellness & Resilience Highlight</p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

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
                className="inline-block bg-steel-blue hover:bg-steel-blue/90 text-white font-bold py-4 px-12 rounded-lg transition transform hover:scale-105 shadow-xl uppercase tracking-wide"
              >
                Become a Partner
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 text-navy tracking-tight">Meet the Founder</h2>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-2">
                Claradith &quot;Clara&quot; E. Landry
              </h3>
              <p className="text-lg md:text-xl font-semibold text-steel-blue mb-6">
                Founder & CEO, Inclusive Security Collective Initiative (iSCI)
              </p>
              <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                <p>
                  Claradith &quot;Clara&quot; E. Landry is the visionary founder and CEO of Inclusive Security Collective Initiative (iSCI), dedicated to advancing inclusive economic pathways, cultural diplomacy, and leadership development across the Defense Industrial Complex and creative sectors.
                </p>
                <p>
                  Through the Celebration of Service™ Event Series, she bridges defense, industry, and innovation, creating experiential programming that celebrates leadership, service, and community while fostering meaningful connections between diverse sectors.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

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

