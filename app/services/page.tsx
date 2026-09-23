'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Activity, Stethoscope, Heart, Baby, CheckCircle2 } from 'lucide-react'
import { hospital, doctors, services } from '@/lib/data'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#0c2f3d] via-[#10485e] to-[#145a75] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38bdf8] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#47b5cb] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#38bdf8] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>Departments &amp; Specialties</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Centers of Medical &amp;<br />
            <span className="text-[#38bdf8]">Clinical Excellence</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Providing comprehensive chest &amp; pulmonary medicine, gynaecological surgery, safe delivery, and dedicated infertility care in Patel Nagar, Ghaziabad.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> SPECIALIZED DEPARTMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Specialist Healthcare Tailored to You
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Comprehensive treatments led directly by senior professors and consultants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#187597]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block bg-[#187597]/10 text-[#187597] text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full mb-3">
                        {s.tag}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight group-hover:text-[#187597] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mt-1">
                        {s.tagline}
                      </p>
                    </div>
                    <span className="text-4xl p-3 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4] shrink-0">
                      {s.icon}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {s.heroDesc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights &amp; Treatments:
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {s.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#187597] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 mb-6">
                    {s.conditions.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-xl bg-[#f2f8fa] text-xs font-medium text-slate-600"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-bold text-[#187597] hover:underline uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>View Service Details</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/appointment"
                    className="group/btn inline-flex items-center gap-2.5 bg-[#187597] hover:bg-[#14607c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
                  >
                    <span>Book Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DIAGNOSTIC INFRASTRUCTURE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> DIAGNOSTIC FACILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Modern Diagnostic &amp; Clinical Equipment
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Enabling precise evaluations, rapid diagnosis, and targeted therapeutic management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Computerized PFT (Spirometry)',
                desc: 'Complete pulmonary function profiling with pre- and post-bronchodilator analysis for asthma & COPD.',
              },
              {
                num: '02',
                title: 'Diagnostic Bronchoscopy',
                desc: 'Minimally invasive camera evaluation of airways, foreign body retrieval, and bronchial biopsy.',
              },
              {
                num: '03',
                title: 'Nebulization & Oxygen Care',
                desc: 'Rapid medical response for acute asthmatic attacks, chronic bronchitis, and severe breathlessness.',
              },
              {
                num: '04',
                title: 'Fetal & Antenatal Monitoring',
                desc: 'Continuous fetal heart monitoring, high-risk ultrasound guidance, and safe delivery support.',
              },
            ].map((d) => (
              <div
                key={d.num}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-bold text-[#187597]/30 mb-2">{d.num}</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{d.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{d.desc}</p>
                </div>
                <div className="w-8 h-1 rounded-full bg-[#187597]/20" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DOCTORS STRIP */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#f2f8fa] border border-[#e2eff4] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs"
              >
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-white border-2 border-white">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-[#187597] uppercase">
                    {doc.designation}
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a]">{doc.name}</h3>
                  <p className="text-xs text-slate-500">{doc.qualifications}</p>
                  <p className="text-xs font-semibold text-[#187597] pt-1">
                    Timings: {doc.timings}
                  </p>
                </div>
                <Link
                  href="/appointment"
                  className="shrink-0 bg-[#187597] hover:bg-[#14607c] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs"
                >
                  Consult
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#145a75] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            Need Specialist Medical Consultation?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out to our clinical team at Patel Nagar, Ghaziabad for consultations, diagnostic tests, or second opinions.
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