'use client'

const expertiseAreas = [
    { name: "Technical Talent Acquisition", color: "from-teal to-teal/80" },
    { name: "TS/SCI Clearance Positions", color: "from-navy to-navy/80" },
    { name: "Software Engineering", color: "from-teal to-navy" },
    { name: "Data Engineering", color: "from-navy to-teal" },
    { name: "Career Coaching", color: "from-gold to-teal" },
    { name: "Resume Writing", color: "from-teal to-gold" },
    { name: "Interview Preparation", color: "from-navy to-gold" },
    { name: "Diversity & Inclusion", color: "from-gold to-navy" }
]

export default function ExpertiseSection() {
    return (
        <section className="section-padding bg-gradient-to-br from-navy/5 to-teal/5">
            <div className="container-custom">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Areas of Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Specialized knowledge across multiple domains
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {expertiseAreas.map((area, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`
                bg-gradient-to-r ${area.color}
                px-6 py-3 rounded-full
                text-white font-semibold
                shadow-lg
                transition-all duration-300
                hover:shadow-2xl hover:scale-110
                cursor-default
              `}>
                                {area.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-navy mb-4">For Job Seekers</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-teal text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Personalized career guidance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Access to exclusive opportunities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Resume and interview coaching</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Salary negotiation support</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-navy mb-4">For Employers</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Pre-vetted technical talent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Specialized clearance recruiting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Diversity hiring initiatives</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Market insights and consulting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
