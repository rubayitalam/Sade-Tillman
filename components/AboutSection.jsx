'use client'

import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaAward, FaUsers, FaGraduationCap } from 'react-icons/fa'

const testimonials = [
    {
        name: "Suresh Babu",
        role: "Strategic Sourcing Specialist",
        text: "Sade led our team as a prominent recruitment leader. I was one of the core members supporting Tech and Engineering under her guidance. She has extensive experience leading teams and supporting Fortune 500 companies, specializing in advanced technologies including AI, Robotics, and unique technical positions in the automotive industry.",
        rating: 5
    },
    {
        name: "Camden Sauls",
        role: "Recruiting Specialist at Randstad (Google Support)",
        text: "Sade was an incredible teammate and an absolute joy to interact with! She truly embodies what it looks like to be a great team player while driving towards success. She brought a positive energy and attitude every single day while finding incredible talent. I highly recommend Sade for her drive and positivity!",
        rating: 5
    },
    {
        name: "Aura Coburn",
        role: "Recruiting Specialist at Randstad (Google Support)",
        text: "It was an absolute pleasure working with Sade over the last few years. Her professionalism and recruiting expertise were quickly evident during our team calls and one-to-one interactions. Anytime Sade had a presentation to share, I came away learning something new! She would make an amazing addition to any team.",
        rating: 5
    },
    {
        name: "Nathan Bristow",
        role: "Recruiting Specialist at Randstad (Google Support)",
        text: "I wholeheartedly endorse Sade as an outstanding professional with a remarkable work ethic, tremendous sourcing abilities, and an unwavering positive attitude. She consistently demonstrates an exceptional commitment to going above and beyond to deliver results. She possesses a keen eye for talent and a knack for identifying the right candidates for complex IT roles.",
        rating: 5
    },
    {
        name: "Laural Freeman",
        role: "Director, Global Client Delivery at Randstad",
        text: "Sade displays great talents in sourcing, candidate experience, DEI, and Full Life Cycle Recruiting. I have watched her grow continuously while staying agile and adaptable to business needs. Beyond her technical skills, Sade was a joy to work with because of her amazingly positive attitude. She quickly becomes an asset to any organization.",
        rating: 5
    },
    {
        name: "Mariah Kerlin",
        role: "Talent Delivery Manager at Randstad (Google Support)",
        text: "Sade has been wonderful to get to know and work with over the past 2+ years. She has a great attitude, is hard-working, and is a dedicated team player. She would make an excellent addition to any team looking for a professional who delivers consistent results with a positive spirit.",
        rating: 5
    },
    {
        name: "April E. Connell, MBA",
        role: "Technical Recruiting Strategist & HR Professional",
        text: "I had the pleasure of working with Sade for several years within both career coaching and technical recruiting industries. She has exceptional time management and client service skills that played a huge role in our team's success. She adapts quickly and overcomes challenges with a smile on her face. I highly recommend her!",
        rating: 5
    }
]

const trustBadges = [
    { icon: FaAward, text: "Google Support", color: "text-gold" },
    { icon: FaUsers, text: "Randstad Alumni", color: "text-teal" },
    { icon: FaGraduationCap, text: "Career Development Certified", color: "text-navy" }
]

export default function AboutSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 8000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="about" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Professional Impact
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Endorsements from former colleagues and industry leaders
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6 animate-slide-in-left">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Dedicated to revolutionizing the traditional staffing and career development landscape through <span className="font-bold text-navy">Next Generation Career Coaching</span>.
                            With a specialized focus on technical placements, I connect top-tier talent with leading companies.
                            <span className="font-semibold text-navy"> I don&apos;t just match skills—I cultivate careers.</span>
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Bringing over a decade of expertise in talent recruitment, I ensure a perfect fit for your
                            specific requirements while offering comprehensive career development solutions for tech enthusiasts.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6">
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover border-b-4 border-teal">
                                <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">10+</div>
                                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover border-b-4 border-gold">
                                <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">8k+</div>
                                <div className="text-xs sm:text-sm text-gray-600 font-medium">Industry Network</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover border-b-4 border-navy col-span-2 sm:col-span-1">
                                <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">MBA</div>
                                <div className="text-xs sm:text-sm text-gray-600 font-medium">HR Management</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            {trustBadges.map((badge, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 card-hover"
                                >
                                    <badge.icon className={`text-xl ${badge.color}`} />
                                    <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-gray-100 h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal/5 to-gold/5 rounded-bl-full"></div>

                            <FaQuoteLeft className="text-4xl text-teal/20 mb-6" />

                            <div className="relative flex-grow">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-700 transform ${index === currentTestimonial
                                            ? 'opacity-100 translate-x-0 relative'
                                            : 'opacity-0 translate-x-8 absolute inset-0 invisible'
                                            }`}
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-gold text-lg" />
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-medium">
                                            &quot;{testimonial.text}&quot;
                                        </p>

                                        <div className="pt-6 border-t border-gray-100 mt-auto">
                                            <p className="font-bold text-navy text-xl">{testimonial.name}</p>
                                            <p className="text-teal font-semibold text-sm uppercase tracking-wider mt-1">{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-3 mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2 transition-all duration-300 rounded-full ${index === currentTestimonial
                                            ? 'bg-teal w-12'
                                            : 'bg-gray-200 w-3 hover:bg-gray-300'
                                            }`}
                                        aria-label={`View testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
