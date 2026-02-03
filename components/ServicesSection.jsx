'use client'

import { useState } from 'react'
import { FaBriefcase, FaChartLine, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const services = [
    {
        icon: FaBriefcase,
        title: "Recruitment & Direct Placement",
        shortDesc: "Specializing in technical talent acquisition and TS/SCI clearance positions",
        details: [
            "Technical talent acquisition for leading companies",
            "TS/SCI clearance position placements",
            "Software Engineers, Developers, Data Engineers",
            "Systems Engineers and AI/Robotics specialists",
            "Automotive industry placements",
            "Full-time and contract positions"
        ],
        color: "from-teal to-teal/80"
    },
    {
        icon: FaChartLine,
        title: "Career Development Coaching",
        shortDesc: "Personalized coaching for tech professionals to accelerate their careers",
        details: [
            "One-on-one career coaching sessions",
            "Professional resume writing and review",
            "Interview preparation and mock interviews",
            "Salary negotiation support and strategies",
            "Personal branding and LinkedIn optimization",
            "Career transition guidance"
        ],
        color: "from-navy to-navy/80"
    },
    {
        icon: FaSearch,
        title: "Specialized Search Solutions",
        shortDesc: "Executive placements and specialized technical talent sourcing",
        details: [
            "Executive-level technical placements",
            "Specialized technical talent sourcing",
            "Remote and hybrid opportunity matching",
            "Diversity and inclusion consulting",
            "Market insights and salary benchmarking",
            "Long-term talent partnership strategies"
        ],
        color: "from-gold to-gold/80"
    }
]

export default function ServicesSection() {
    const [expandedService, setExpandedService] = useState(null)

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? null : index)
    }

    const scrollToBooking = () => {
        const element = document.getElementById('booking')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Services Offered
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions for both job seekers and employers
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
                        >
                            <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                                <service.icon className="text-5xl mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-white/90 text-sm">{service.shortDesc}</p>
                            </div>

                            <div className="p-6">
                                <button
                                    onClick={() => toggleService(index)}
                                    className="flex items-center justify-between w-full text-left mb-4 text-navy font-semibold hover:text-teal transition-colors"
                                >
                                    <span>View Details</span>
                                    {expandedService === index ? (
                                        <FaChevronUp className="text-teal" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${expandedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <ul className="space-y-2 mb-6">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                <span className="text-teal mt-1">✓</span>
                                                <span className="text-sm">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={scrollToBooking}
                                    className="w-full bg-navy text-white py-3 rounded-full font-semibold hover:bg-navy/90 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                                >
                                    Request Services
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
