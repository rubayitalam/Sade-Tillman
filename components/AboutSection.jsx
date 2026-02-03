'use client'

import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaAward, FaUsers, FaGraduationCap } from 'react-icons/fa'

const testimonials = [
    {
        name: "April E. Connell",
        role: "Software Engineer",
        text: "Sade is an exceptional recruiter who truly understands the tech industry. She helped me land my dream role and provided invaluable career guidance throughout the process.",
        rating: 5
    },
    {
        name: "Mariah Kerlin",
        role: "Data Engineer",
        text: "Working with Sade was a game-changer for my career. Her expertise in technical recruitment and genuine care for candidates sets her apart from other recruiters.",
        rating: 5
    },
    {
        name: "Camden Sauls",
        role: "Full Stack Developer",
        text: "Sade's professionalism and dedication are unmatched. She not only found me the perfect position but also coached me through negotiations. Highly recommended!",
        rating: 5
    },
    {
        name: "Suresh Babu",
        role: "Systems Engineer",
        text: "An outstanding recruiter with deep knowledge of the technical landscape. Sade's personalized approach and commitment to finding the right fit made all the difference.",
        rating: 5
    }
]

const trustBadges = [
    { icon: FaAward, text: "Google Partner", color: "text-gold" },
    { icon: FaUsers, text: "Randstad Alumni", color: "text-teal" },
    { icon: FaGraduationCap, text: "Career Development Certified", color: "text-navy" }
]

export default function AboutSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="about" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6 animate-slide-in-left">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Dedicated to revolutionizing the traditional staffing and career development landscape.
                            With a specialized focus on technical placements, I connect top-tier talent with leading companies.
                            <span className="font-semibold text-navy"> I don't just match skills—I cultivate careers.</span>
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Bringing over a decade of expertise in talent recruitment, I ensure a perfect fit for your
                            specific requirements while offering comprehensive career development solutions for tech enthusiasts.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6">
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover">
                                <div className="text-2xl sm:text-3xl font-bold text-teal mb-1">10+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover">
                                <div className="text-2xl sm:text-3xl font-bold text-teal mb-1">8,288+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Followers</div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md card-hover col-span-2 sm:col-span-1">
                                <div className="text-2xl sm:text-3xl font-bold text-teal mb-1">MBA</div>
                                <div className="text-xs sm:text-sm text-gray-600">HR Management</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            {trustBadges.map((badge, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md card-hover"
                                >
                                    <badge.icon className={`text-xl ${badge.color}`} />
                                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal/10 to-gold/10 rounded-bl-full"></div>

                            <FaQuoteLeft className="text-4xl text-teal/20 mb-4" />

                            <div className="relative min-h-[250px]">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                            }`}
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-gold text-xl" />
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="border-t pt-4">
                                            <p className="font-semibold text-navy text-lg">{testimonial.name}</p>
                                            <p className="text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                            ? 'bg-teal w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
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
