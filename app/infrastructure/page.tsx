"use client"

export default function InfrastructurePage() {
    const facilities = [
        { title: "Advanced Pulmonary Function Lab", desc: "Equipped with state-of-the-art spirometry and DLCO machines for precise lung capacity and diffusion testing.", icon: "🔬" },
        { title: "Level-3 ICU Setup", desc: "Collaborating with premium hospitals to provide intensive care unit management with advanced mechanical ventilation.", icon: "🏥" },
        { title: "Bronchoscopy Suite", desc: "High-definition video bronchoscopy for diagnostic and therapeutic airway interventions.", icon: "📷" },
        { title: "Sleep Evaluation Center", desc: "Overnight polysomnography (sleep study) capabilities for comprehensive sleep apnea diagnosis.", icon: "🛏️" }
    ]

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* HERO */}
            <div className="pt-40 pb-20 bg-gray-900 px-6 lg:px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Infrastructure</span>
                    </div>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium text-white mb-6">
                        State-of-the-Art <span className="text-red-500">Facilities</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Modern medical infrastructure designed for absolute precision in diagnostics and comfort in patient care.
                    </p>
                </div>
            </div>

            {/* FACILITIES GRID */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {facilities.map((f, i) => (
                        <div key={i} className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-3xl group-hover:bg-red-100 transition-all duration-300 shadow-sm">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-gray-900 font-medium mb-3">{f.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BANNER */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
                <div className="bg-gray-900 rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-gray-800" />
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-red-600/8 rounded-full blur-[100px]" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-medium mb-6">Committed to Clinical Safety & Hygiene</h2>
                        <p className="text-white/60 max-w-2xl mx-auto mb-8">
                            Our clinic maintains international standards for sterilization and air quality, ensuring a safe environment for highly susceptible respiratory patients.
                        </p>
                        <div className="inline-block border border-red-500/50 text-red-400 px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase rounded-xl hover:bg-red-600/10 transition-colors">
                            ISO Compliant Protocols
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
