'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function ContactSection() {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-navy/5 to-teal/5">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to take the next step? Let&apos;s connect
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 card-hover">
                            <h3 className="text-2xl font-bold text-navy mb-8 border-b pb-4">Contact Information</h3>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                <a
                                    href="tel:+13364936245"
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-teal/5 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                        <FaPhone className="text-white text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                                        <p className="font-semibold text-navy truncate break-words">+1 (336) 493-6245</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/13364936245"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#25D366]/5 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                        <FaWhatsapp className="text-white text-2xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">WhatsApp</p>
                                        <p className="font-semibold text-navy truncate break-words">Message Me Directly</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:sdsmithtillman@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-teal/5 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                        <FaEnvelope className="text-white text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                                        <p className="font-semibold text-navy truncate break-words">sdsmithtillman@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sade-s-tillman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                        <FaLinkedin className="text-white text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">LinkedIn</p>
                                        <p className="font-semibold text-navy truncate break-words">linkedin.com/in/sade-s-tillman</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-navy mb-6">Connect Directly</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Looking for immediate assistance or have a specific inquiry?
                            Reach out through any of these quick channels. I&apos;m usually available
                            to respond within a few hours.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="https://wa.me/13364936245"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                            >
                                <FaWhatsapp className="text-xl" />
                                Message on WhatsApp
                            </a>
                            <a
                                href="mailto:sdsmithtillman@gmail.com?subject=Inquiry from Website"
                                className="flex items-center justify-center gap-3 w-full bg-navy text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                            >
                                <FaEnvelope className="text-xl" />
                                Send Direct Email
                            </a>
                            <a
                                href="tel:+13364936245"
                                className="flex items-center justify-center gap-3 w-full bg-white border-2 border-navy text-navy py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-all hover:scale-[1.02] active:scale-95 shadow-md"
                            >
                                <FaPhone className="text-xl" />
                                Give Me a Call
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-sm text-gray-500 text-center font-medium uppercase tracking-widest mb-4">
                                Consultation Hours
                            </p>
                            <div className="bg-gray-50 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="text-center sm:border-r border-gray-200">
                                    <p className="text-xs text-gray-500">Morning Session</p>
                                    <p className="text-navy font-bold">12:00 AM - 6:30 AM ET</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-500">Evening Session</p>
                                    <p className="text-navy font-bold">8:00 PM - 11:30 PM ET</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
