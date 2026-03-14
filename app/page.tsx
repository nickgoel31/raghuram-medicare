'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { doctors, clinic, testimonials as realTestimonials, services as realServices } from '@/lib/data'

const features: { icon: string; title: string; desc: string }[] = [
  { icon: '⚕️', title: 'Board Certified Specialists', desc: 'Expert doctors with credentials from India\'s top medical institutions.' },
  { icon: '🔬', title: 'Advanced Diagnostics', desc: 'State-of-the-art PFT, bronchoscopy, pathology and digital imaging on-site.' },
  { icon: '📅', title: 'Priority Scheduling', desc: 'Flexible appointments with priority slots for urgent cases.' },
  { icon: '🎯', title: 'Targeted Treatment', desc: 'Personalized care plans tailored precisely to your condition and lifestyle.' },
]

export default function Home() {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* HERO */}
      <section className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden pt-20">
        {/* Red gradient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-red-600/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full grid md:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-[10px] font-bold tracking-[0.2em] uppercase">Raghuram Medicare</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-white mb-8 tracking-tight">
              Caring for You.<br />
              <span className="text-red-500">Every Step of the Way.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
              Welcome to Raghuram Medicare — a trusted multispecialty medical centre in the heart of Patel Nagar, Ghaziabad. Backed by highly experienced doctors and a modern diagnostic setup, we are committed to delivering compassionate, affordable, and expert healthcare.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/appointment" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg hover:-translate-y-0.5 shadow-lg shadow-red-600/25">
                Schedule Consultation
              </Link>
              <Link href="/services" className="border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-lg">
                View Departments
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8">
              {[{ num: '20+', label: 'Years Exp.' }, { num: '10K+', label: 'Lives Touched' }, { num: '24×7', label: 'Emergency' }].map((s) => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-white mb-2">
                    {s.num}
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Doctor Showcase */}
          <div className="hidden md:grid grid-cols-2 gap-4 relative h-full min-h-[500px] items-center">
            {doctors.map((doc, idx) => (
                <div key={doc.id} className={`relative rounded-2xl overflow-hidden h-[450px] ${idx === 0 ? '-translate-y-8' : 'translate-y-8'}`}>
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top brightness-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-400">
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                         </div>
                         <div className="font-[family-name:var(--font-playfair)] text-lg font-medium text-white leading-tight mt-1">{doc.name}</div>
                      </div>
                      <div className="text-[9px] tracking-[0.15em] uppercase text-white/60 pl-11">{doc.designation}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold tracking-[0.25em] uppercase">Why Choose Us</span>
              <div className="w-8 h-px bg-red-600" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900">
              Where <em className="italic text-red-600">Excellence</em> Meets Compassion
            </h2>
            <p className="text-gray-500 mt-4 max-w-md mx-auto leading-relaxed">Every decision we make is guided by your health and long-term wellbeing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="relative bg-white p-10 rounded-2xl group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-red-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute top-6 right-6 font-[family-name:var(--font-playfair)] text-7xl font-light text-red-600/5 leading-none pointer-events-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-red-100 transition-colors duration-200">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS / SERVICES */}
      <section className="py-24 px-6 lg:px-10 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-red-500" />
                <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Centers of Excellence</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white">
                Advanced <span className="text-red-500">Specialties</span>
              </h2>
            </div>
            <Link href="/services" className="shrink-0 text-white/60 hover:text-red-400 text-xs font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group">
              View All Departments
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {realServices.slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-red-500/40 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-red-600/20 transition-colors duration-500" />
                <span className="text-4xl block mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{s.icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-white mb-3 tracking-wide">{s.shortTitle}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2">{s.heroDesc}</p>
                <div className="text-red-400 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT STORIES */}
      <section className="py-24 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-red-600 text-[10px] font-bold tracking-[0.25em] uppercase">Patient Stories</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900">
              Patient <span className="text-red-600">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {realTestimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-6 text-red-500 text-sm">
                  {Array.from({ length: 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-8 grow">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.init}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm tracking-wide">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.condition}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="relative py-32 px-6 lg:px-10 bg-gray-900 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white mb-6 leading-[1.2]">
            Compassionate Care,<br />
            <span className="text-red-500">Uncompromising Excellence.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">Delivering trusted multispecialty healthcare in a state-of-the-art facility.</p>
          <Link href="/appointment" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/25">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}