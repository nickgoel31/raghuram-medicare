'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { services, clinic, doctors, ServiceData } from '@/lib/data'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function ServicePage({ params }: PageProps) {
    const { slug } = use(params)
    const service: ServiceData | undefined = services.find(s => s.slug === slug)

    if (!service) {
        notFound()
    }

    const currentIndex = services.findIndex(s => s.slug === slug)
    const related = services.filter((_, i) => i !== currentIndex).slice(0, 3)

    const leadDoctor = service.slug === 'gynaecology-infertility'
        ? doctors.find(d => d.id === 'dr-shubhra-gupta') || doctors[1]
        : doctors.find(d => d.id === 'dr-mohan-bandhu') || doctors[0]

    return (
        <div className="min-h-screen bg-gray-50 text-gray-700">
            {/* BREADCRUMB */}
            <div className="pt-40 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/30">
                    <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
                    <span className="opacity-50">/</span>
                    <Link href="/services" className="hover:text-red-400 transition-colors">Services</Link>
                    <span className="opacity-50">/</span>
                    <span className="text-white/60">{service.shortTitle}</span>
                </div>
            </div>

            {/* HERO */}
            <section className="relative pb-24 px-6 lg:px-10 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center bg-red-600/10 border border-red-500/20 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-red-400 mb-8">
                            Specialist Care Unit
                        </div>
                        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium text-white leading-[1.05] mb-8">
                            {service.title}
                        </h1>
                        <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl">
                            {service.heroDesc}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/appointment" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20 hover:-translate-y-0.5">
                                Consult our Specialist
                            </Link>
                            <a href={`tel:${clinic.phone}`} className="border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-10 py-5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg hover:bg-white/5">
                                Call {clinic.phoneDisplay}
                            </a>
                        </div>
                    </div>

                    {/* Quick Info Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 mt-2 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/8 rounded-bl-full -mr-16 -mt-16 group-hover:bg-red-600/15 transition-colors duration-500" />
                        <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400 mb-6 relative z-10">Lead Physician</div>
                        <div className="flex gap-5 items-center mb-8 relative z-10">
                            <img
                                src={leadDoctor.photo}
                                alt={leadDoctor.name}
                                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/30 group-hover:ring-red-500/60 transition-all duration-500"
                            />
                            <div>
                                <div className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">{leadDoctor.name}</div>
                                <div className="text-white/40 text-[11px] mt-1 tracking-wide">{leadDoctor.qualifications}</div>
                            </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                            {[
                                { label: 'Clinical Experience', val: leadDoctor.experience },
                                { label: 'Primary Facility', val: clinic.addressShort },
                                { label: 'Available Days', val: 'Tue – Sun' },
                            ].map(item => (
                                <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                                    <span className="text-white/30 text-[10px] font-bold tracking-wider uppercase">{item.label}</span>
                                    <span className="text-white/70 text-xs tracking-wide">{item.val}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 relative z-10">
                            <Link href="/doctors" className="block text-center py-4 border border-white/10 hover:border-red-500 text-white/60 hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-xl">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="py-24 px-6 lg:px-10 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-red-600" />
                            <span className="text-red-600 text-[10px] font-bold tracking-[0.25em] uppercase">Clinical Overview</span>
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900 mb-10 leading-tight">
                            Advancing <span className="text-red-600">Patient Outcomes</span>
                        </h2>
                        <div className="space-y-6">
                            {service.overview.map((para, i) => (
                                <p key={i} className="text-gray-500 text-lg leading-relaxed">{para}</p>
                            ))}
                        </div>

                        <div className="mt-14 p-10 bg-gray-50 border border-gray-100 rounded-2xl">
                            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-6">Conditions Treated</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.conditions.map(c => (
                                    <div key={c} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-600" />
                                        <span className="text-gray-600 text-sm tracking-wide">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-gray-900 rounded-2xl p-10 lg:p-12 shadow-2xl sticky top-32">
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-white mb-8 border-b border-white/10 pb-6 uppercase tracking-widest">Core Features</h3>
                        <ul className="space-y-5">
                            {service.features.map((f, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="w-2 h-2 rounded-full border border-red-500 mt-1.5 shrink-0" />
                                    <span className="text-white/60 text-sm leading-relaxed">{f}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/appointment" className="block w-full text-center mt-10 py-4 bg-red-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* OUR APPROACH */}
            <section className="py-24 px-6 lg:px-10 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="text-red-600 text-[10px] font-bold tracking-[0.25em] uppercase">Our Methodology</span>
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900">
                            Patient-Centric <span className="text-red-600">Clinical Pathway</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.approach.map((step, i) => (
                            <div key={i} className="bg-white rounded-2xl p-10 border border-gray-100 relative overflow-hidden group hover:border-red-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                                <div className="absolute top-6 right-8 font-[family-name:var(--font-playfair)] text-7xl font-light text-red-600/5 group-hover:text-red-600/10 transition-colors duration-500">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xs font-bold mb-6 group-hover:bg-red-600 transition-colors duration-500">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-4">{step.step}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 lg:px-10 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-6">
                            Treatment FAQ
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white">
                            Understanding <span className="text-red-500">Your Care</span>
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {service.faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-red-500/40 transition-all duration-500">
                                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-white mb-4">{faq.q}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DR INFO STRIP */}
            <section className="py-20 px-6 lg:px-10 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto bg-white border border-gray-100 p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <img src={leadDoctor.photo} alt={leadDoctor.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg shrink-0" />
                        <div>
                            <div className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900">{leadDoctor.name}</div>
                            <p className="text-red-600 text-xs font-bold tracking-widest uppercase mt-1 mb-3">{leadDoctor.designation}</p>
                            <div className="text-gray-500 text-sm leading-relaxed">{leadDoctor.qualifications}</div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/appointment" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
                            Book Now
                        </Link>
                        <Link href="/doctors" className="border border-gray-300 hover:border-red-600 text-gray-900 hover:text-red-600 px-10 py-5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg">
                            Meet Doctor
                        </Link>
                    </div>
                </div>
            </section>

            {/* RELATED SERVICES */}
            <section className="py-24 px-6 lg:px-10 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-gray-900">Complementary <span className="text-red-600">Treatments</span></h2>
                        </div>
                        <Link href="/services" className="hidden md:inline-block border-b border-gray-900 text-gray-900 hover:text-red-600 hover:border-red-600 pb-1 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300">
                            View Full Portfolio →
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {related.map(s => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white p-10 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-red-200 block rounded-2xl">
                                <span className="text-4xl block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{s.icon}</span>
                                <div className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{s.shortTitle}</div>
                                <div className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{s.tagline}</div>
                                <div className="text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                                    Clinical Profile <span>→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32 px-6 lg:px-10 bg-gray-900 overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-600/15 rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium text-white mb-8 leading-[1.1]">
                        Begin Your Journey to<br />
                        <span className="text-red-500">Better Health</span>
                    </h2>
                    <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">Consult with our leading specialist at Patel Nagar, Ghaziabad.</p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Link href="/appointment" className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
                            Request Consultation
                        </Link>
                        <Link href="/contact" className="border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg">
                            Contact Facility
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}