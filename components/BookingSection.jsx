'use client'

import { useState } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaClipboardList, FaWhatsapp } from 'react-icons/fa'
import { generateTimeSlots, formatTimeSlot } from '@/lib/timeSlots'
import { validateEmail, validatePhone, validateRequired, validateDate, formatPhone } from '@/lib/validation'

const serviceTypes = [
    'Job Seeker Consultation',
    'Employer Hiring',
    'Career Coaching',
    'Resume Review'
]

export default function BookingSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        time: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const timeSlots = generateTimeSlots()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!validateRequired(formData.name)) {
            newErrors.name = 'Full name is required'
        }

        if (!validateRequired(formData.email)) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number'
        }

        if (!validateRequired(formData.serviceType)) {
            newErrors.serviceType = 'Please select a service type'
        }

        if (!validateRequired(formData.date)) {
            newErrors.date = 'Please select a date'
        } else if (!validateDate(formData.date)) {
            newErrors.date = 'Please select a future date'
        }

        if (!validateRequired(formData.time)) {
            newErrors.time = 'Please select a time slot'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Construct the email body
            const body = `Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone || 'N/A'}
Service Type: ${formData.serviceType}
Preferred Date: ${formData.date}
Preferred Time Slot: ${formatTimeSlot(formData.time)}

Message:
${formData.message || 'No additional message.'}`

            const subject = `Appointment Booking Request - ${formData.name}`
            const mailtoLink = `mailto:sdsmithtillman@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

            // Open the user's default email client
            window.location.href = mailtoLink

            setSubmitSuccess(true)
            setSubmitError('')

            // We don't clear the form immediately so they can see what they sent
            // but we show the success message with instructions
        } catch (error) {
            setSubmitError('An error occurred while preparing your email. Please try the "Email Me Directly" button below.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const today = new Date().toISOString().split('T')[0]

    return (
        <section id="booking" className="section-padding bg-gradient-to-br from-navy/5 via-white to-teal/5">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Schedule Your Consultation
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your journey? Book a session or reach out directly.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Quick Contact Buttons */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-12 px-4 sm:px-0">
                        <a
                            href="https://wa.me/13364936245"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95"
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp
                        </a>
                        <a
                            href="mailto:sdsmithtillman@gmail.com"
                            className="flex items-center justify-center gap-3 bg-white border-2 border-teal text-teal py-4 rounded-2xl font-bold hover:bg-teal hover:text-white transition-all shadow-md active:scale-95"
                        >
                            <FaEnvelope />
                            Email Direct
                        </a>
                        <a
                            href="tel:+13364936245"
                            className="flex items-center justify-center gap-3 bg-white border-2 border-navy text-navy py-4 rounded-2xl font-bold hover:bg-navy hover:text-white transition-all shadow-md active:scale-95"
                        >
                            <FaPhone />
                            Call Now
                        </a>
                    </div>

                    {submitSuccess && (
                        <div className="mb-8 bg-gradient-to-r from-teal to-teal/90 text-white p-6 rounded-2xl shadow-lg animate-slide-up">
                            <h3 className="text-2xl font-bold mb-2">📬 Almost Ready!</h3>
                            <p className="text-white/90">
                                Your email client should have opened with the appointment details.
                                <span className="font-bold block mt-2 text-gold">Please click "SEND" in your email app to complete your booking!</span>
                            </p>
                        </div>
                    )}

                    {submitError && (
                        <div className="mb-8 bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-lg">
                            <p className="font-semibold">Note</p>
                            <p>{submitError}</p>
                        </div>
                    )}

                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-navy to-teal p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">Consultation Booking Form</h3>
                            <p className="text-white/90">This form will prepare an email with your details</p>
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                                <FaClock className="text-gold" />
                                <span>Available: 12:00 AM - 6:30 AM ET | 8:00 PM - 11:30 PM ET</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaUser className="text-teal" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaEnvelope className="text-teal" />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaPhone className="text-teal" />
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="serviceType" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaClipboardList className="text-teal" />
                                        Service Type *
                                    </label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.serviceType ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="">Select a service...</option>
                                        {serviceTypes.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaCalendarAlt className="text-teal" />
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={today}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.date ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                                </div>

                                <div>
                                    <label htmlFor="time" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                        <FaClock className="text-teal" />
                                        Preferred Time Slot *
                                    </label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all ${errors.time ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="">Select a time...</option>
                                        {timeSlots.map((slot) => (
                                            <option key={slot.value} value={slot.value}>
                                                {slot.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="flex items-center gap-2 text-navy font-semibold mb-2">
                                    Message / Additional Details (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all resize-none"
                                    placeholder="Tell me about your career goals, hiring needs, or any specific topics you'd like to discuss..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-teal to-navy text-white py-4 rounded-full font-bold text-lg transition-all ${isSubmitting
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:shadow-2xl hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {isSubmitting ? 'Opening Email Client...' : 'Book My 30-Minute Session'}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                This will open your default email application to send the request.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
