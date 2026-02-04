'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function HeroSection() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/95 to-teal/20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="container-custom section-padding relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6 md:space-y-8 animate-slide-in-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Your Next-Generation
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold">
                                    Career Catalyst
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light">
                                Connecting Top-Tier Tech Talent with Leading Companies
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('booking')}
                                className="btn-primary w-full sm:w-auto"
                            >
                                Book a Consultation
                            </button>
                            <button
                                onClick={() => scrollToSection('opportunities')}
                                className="btn-outline border-white text-white hover:bg-white hover:text-navy w-full sm:w-auto"
                            >
                                View Open Positions
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/20">
                            <a
                                href="tel:+13364936245"
                                className="flex items-center gap-3 text-base hover:text-teal transition-colors group"
                            >
                                <FaPhone className="text-gold group-hover:scale-110 transition-transform" />
                                <span>+1 (336) 493-6245</span>
                            </a>
                            <a
                                href="https://wa.me/13364936245"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-base hover:text-teal transition-colors group"
                            >
                                <FaWhatsapp className="text-[#25D366] group-hover:scale-110 transition-transform" />
                                <span>WhatsApp Me</span>
                            </a>
                            <a
                                href="mailto:smitht@getstartedwithnextgen.today"
                                className="flex items-center gap-3 text-base hover:text-teal transition-colors group"
                            >
                                <FaEnvelope className="text-gold group-hover:scale-110 transition-transform" />
                                <span className="truncate">smitht@getstartedwithnextgen.today</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sade-s-tillman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-base hover:text-teal transition-colors group"
                            >
                                <FaLinkedin className="text-gold group-hover:scale-110 transition-transform" />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:items-end animate-slide-in-right order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal to-gold rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-gold shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/images/sade-headshot.jpg"
                                    alt="Sade S. Tillman - Professional Headshot"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                                />
                            </div>
                        </div>
                        <div className="mt-6 text-center lg:text-right">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">Sade S. Tillman</h2>
                            <p className="text-teal font-medium uppercase tracking-[0.2em] text-sm mt-1">Technical Recruiter</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="Scroll to About section"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
