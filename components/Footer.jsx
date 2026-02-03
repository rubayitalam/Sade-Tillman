'use client'

import { FaLinkedin, FaGraduationCap, FaAward } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-navy to-navy/95 text-white">
            <div className="container-custom section-padding">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal to-gold">
                            Sade S. Tillman
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Your Next-Generation Career Catalyst
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/sade-s-tillman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal transition-all hover:scale-110"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-teal">Professional Credentials</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaGraduationCap className="text-gold" />
                                <span>MBA in Human Resources Management</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaGraduationCap className="text-gold" />
                                <span>BS in Communication</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaAward className="text-gold" />
                                <span>10+ Years Recruitment Experience</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaAward className="text-gold" />
                                <span>Career Development Certified</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-teal">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#about" className="hover:text-teal transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-teal transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#booking" className="hover:text-teal transition-colors">Book Consultation</a>
                            </li>
                            <li>
                                <a href="#opportunities" className="hover:text-teal transition-colors">Current Opportunities</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-teal transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © {currentYear} Sade S. Tillman. All rights reserved.
                        </p>
                        <p className="flex items-center gap-2">
                            Powered by
                            <span className="text-teal font-semibold">Zillion Technologies, Inc.</span>
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-teal transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
