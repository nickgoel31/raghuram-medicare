'use client'

import Link from 'next/link'
import { clinic, doctors, services } from '@/lib/data'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-red-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Departments & Specialties</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-[1.1]">
            Centers of<br /><span className="text-red-500">Clinical Excellence</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-xl mx-auto">
            Comprehensive hospital-grade clinical services provided by our leading specialists.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-red-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden block">
                {/* Card Header */}
                <div className="p-8 pb-6 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-red-600/10 transition-colors duration-500" />
                  <div className="inline-block bg-red-600 rounded-lg px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-white mb-4 relative z-10">
                    {s.tag}
                  </div>
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 leading-tight group-hover:text-red-600 transition-colors">{s.title}</h2>
                      <p className="text-gray-500 text-sm mt-1">{s.tagline}</p>
                    </div>
                    <span className="text-4xl shrink-0 ml-4 opacity-80">{s.icon}</span>
                  </div>
                </div>
                {/* Card Body */}
                <div className="p-8 pt-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.heroDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.conditions.slice(0, 3).map(c => (
                      <span key={c} className="text-[10px] bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 rounded-full">{c}</span>
                    ))}
                    {s.conditions.length > 3 && (
                      <span className="text-[10px] text-gray-400 px-2.5 py-1">+{s.conditions.length - 3} more</span>
                    )}
                  </div>
                  <div className="text-red-600 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Full Details <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DR STRIP */}
      <section className="py-16 px-6 lg:px-10 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10">
          {doctors.map((doc) => (
            <div key={doc.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <img src={doc.photo} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover shrink-0 shadow-sm" />
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-red-600 mb-1">{doc.designation}</div>
                <div className="font-[family-name:var(--font-playfair)] text-2xl text-gray-900 font-medium">{doc.name}</div>
                <div className="text-gray-500 text-xs mt-1">{doc.qualifications}</div>
              </div>
              <Link href="/doctors" className="shrink-0 mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-sm shadow-red-600/15">
                Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="py-24 px-6 lg:px-10 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Diagnostic Facilities</span>
              <div className="w-8 h-px bg-red-500" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white">
              Advanced <span className="text-red-500">Equipment</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { num: '01', title: 'Digital Chest Imaging', desc: 'High-resolution digital X-rays and access to HRCT chest CT scanning for precise characterisation of all pulmonary conditions including ILD, bronchiectasis, and tumours.' },
              { num: '02', title: 'Spirometry & PFT', desc: 'State-of-the-art spirometry systems for complete pulmonary function profiling — pre and post-bronchodilator testing, DLCO measurement, and bronchial challenge testing.' },
              { num: '03', title: 'Oxygen & Nebulization', desc: 'Modern oxygen delivery systems, continuous pulse oximetry monitoring, and nebulisation therapy for acute and chronic respiratory management.' },
              { num: '04', title: 'GeneXpert / CBNAAT', desc: 'Rapid molecular TB testing for same-day diagnosis of TB and drug resistance — critical for early, appropriate treatment in Ghaziabad\'s TB-endemic setting.' },
            ].map(t => (
              <div key={t.num} className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-red-500/40 transition-all duration-500">
                <div className="float-right font-[family-name:var(--font-playfair)] text-6xl font-light text-red-600/15 leading-none -mt-2">{t.num}</div>
                <div className="clear-right">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-white mb-3 tracking-wide">{t.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/infrastructure" className="text-red-400 text-xs font-bold tracking-[0.15em] uppercase hover:text-white transition-colors border-b border-red-500/30 hover:border-white pb-1">Explore Full Infrastructure →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-10 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900 mb-5 leading-[1.2]">
            Ready to Breathe <span className="text-red-600">Better?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">Visit our specialists at Raghuram Medicare</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/appointment" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
              Book Consultation
            </Link>
            <Link href="/contact" className="inline-block border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 px-10 py-4 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-lg">
              Contact Facility
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}