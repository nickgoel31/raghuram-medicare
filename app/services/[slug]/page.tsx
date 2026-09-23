'use client'

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { ArrowRight, CheckCircle2, Phone, Clock, MapPin, ChevronRight } from 'lucide-react'
import { services, hospital, doctors, ServiceData } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ServicePage({ params }: PageProps) {
  const { slug } = use(params)
  const service: ServiceData | undefined = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const related = services.filter((_, i) => i !== currentIndex)

  const leadDoctor =
    service.slug === 'gynaecology-infertility'
      ? doctors.find((d) => d.id === 'dr-shubhra-gupta') || doctors[1]
      : doctors.find((d) => d.id === 'dr-mohan-bandhu') || doctors[0]

  return (
    <div className="min-h-screen bg-white text-slate-700">
      
      {/* 1. HERO & BREADCRUMB */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#0c2f3d] via-[#10485e] to-[#145a75] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38bdf8] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#47b5cb] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#38bdf8]">{service.shortTitle}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-white/10 text-[#38bdf8] border border-white/20 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-xs">
                {service.tag}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                {service.title}
              </h1>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.heroDesc}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#145a75] pl-7 pr-2 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Consult Specialist</span>
                  <span className="w-8 h-8 rounded-full bg-[#187597] text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <a
                  href={`tel:${hospital.phone}`}
                  className="inline-flex items-center px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-sm font-semibold tracking-wide transition-colors"
                >
                  Call {hospital.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Lead Doctor Card */}
            <div className="lg:col-span-5 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl text-white space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                Department Lead Consultant
              </div>

              <div className="flex items-center gap-5">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-white/40 shadow-md">
                  <img
                    src={leadDoctor.photo}
                    alt={leadDoctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{leadDoctor.name}</h3>
                  <p className="text-xs text-white/80 font-medium">{leadDoctor.qualifications}</p>
                  <p className="text-xs text-[#38bdf8] font-semibold">{leadDoctor.designation}</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/15 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span>Consultation Timings:</span>
                  <span className="font-semibold text-white">{leadDoctor.timings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Days:</span>
                  <span className="font-semibold text-white">Tue – Sun (Mon Closed)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Facility Location:</span>
                  <span className="font-semibold text-white">Patel Nagar 3rd, Ghaziabad</span>
                </div>
              </div>

              <Link
                href="/doctors"
                className="block text-center w-full py-2.5 rounded-full bg-white text-[#187597] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CONDITIONS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase block mb-3">
                + CLINICAL OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2] mb-6">
                Advancing Healthcare Outcomes with Targeted Precision
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                {service.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Conditions Treated */}
            <div className="p-8 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Common Conditions Treated</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#187597] shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Core Features Box */}
          <div className="lg:col-span-4 bg-[#0e3c4e] text-white rounded-3xl p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white pb-4 border-b border-white/10">
              Department Features
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/appointment"
                className="block text-center w-full py-3 bg-[#187597] hover:bg-[#14607c] text-white text-xs font-bold tracking-wider uppercase rounded-full transition-colors shadow-md"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. APPROACH / METHODOLOGY */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> METHODOLOGY &amp; CARE PATHWAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Our Systematic Treatment Pathway
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold text-[#187597]/40 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{step.step}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
                <div className="w-8 h-1 rounded-full bg-[#187597]/20" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Understanding Your Treatment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-2.5"
              >
                <h3 className="text-base font-bold text-[#0f172a]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#145a75] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            Consult with our Senior Specialists Today
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get personalized medical advice and treatment plans tailored directly to your health requirements.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="group inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#145a75] pl-7 pr-2 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95"
            >
              <span>Book Appointment</span>
              <span className="w-8 h-8 rounded-full bg-[#187597] text-white flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-sm font-semibold tracking-wide transition-colors"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}