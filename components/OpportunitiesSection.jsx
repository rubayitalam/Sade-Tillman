'use client'

import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa'

const opportunities = [
    {
        title: "Senior Software Engineer",
        location: "Columbia, MD",
        type: "Full-Time",
        clearance: "TS/SCI Required",
        salary: "$140k - $180k",
        requirements: [
            "5+ years software development",
            "Java, Python, or C++ expertise",
            "Active TS/SCI clearance",
            "Agile methodology experience"
        ]
    },
    {
        title: "Full Stack Developer",
        location: "Washington, DC",
        type: "Full-Time",
        clearance: "Secret Clearance",
        salary: "$120k - $160k",
        requirements: [
            "React, Node.js, TypeScript",
            "3+ years full stack experience",
            "Cloud platform knowledge (AWS/Azure)",
            "Secret clearance or ability to obtain"
        ]
    },
    {
        title: "Data Engineer",
        location: "Remote",
        type: "Contract",
        clearance: "No Clearance Required",
        salary: "$100k - $140k",
        requirements: [
            "Python, SQL, Spark expertise",
            "ETL pipeline development",
            "Data warehouse experience",
            "Remote work experience preferred"
        ]
    }
]

export default function OpportunitiesSection() {
    return (
        <section id="opportunities" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Current Opportunities
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Featured positions available now
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {opportunities.map((job, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 card-hover"
                        >
                            <div className="bg-gradient-to-r from-navy to-teal p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-white/90">
                                    <FaMapMarkerAlt />
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaBriefcase className="text-teal" />
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaDollarSign className="text-gold" />
                                        <span className="font-semibold">{job.salary}</span>
                                    </div>
                                </div>

                                <div className="bg-teal/10 text-teal px-3 py-2 rounded-lg text-sm font-semibold text-center">
                                    {job.clearance}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-navy mb-2">Key Requirements:</h4>
                                    <ul className="space-y-1">
                                        {job.requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-teal mt-0.5">•</span>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="https://www.linkedin.com/in/sade-s-tillman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-navy text-white py-3 rounded-full font-semibold hover:bg-navy/90 transition-all hover:shadow-lg hover:scale-105 active:scale-95 block text-center"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://www.linkedin.com/in/sade-s-tillman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                    >
                        View All Positions on LinkedIn
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
