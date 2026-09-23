import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import { doctors, hospital } from '@/lib/data'

export const metadata = {
  title: 'About Us | Raghuram Medicare, Ghaziabad',
  description:
    'Learn about Raghuram Medicare, a trusted multispecialty healthcare center in Patel Nagar, Ghaziabad. Led by Prof. (Dr.) Mohan Bandhu Gupta and Dr. Shubhra Gupta since 2003.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#0c2f3d] via-[#10485e] to-[#145a75] text-white overflow-hidden">
        {/* Subtle background blurs */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38bdf8] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#47b5cb] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#38bdf8] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>About Raghuram Medicare</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Two Decades of Trusted<br />
            <span className="text-[#38bdf8]">Healthcare in Ghaziabad</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in 2003, Raghuram Medicare has been Patel Nagar’s premier medical center for specialized Chest &amp; Respiratory Medicine, Women’s Health, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* 2. FOUNDATION & OUR STORY */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center gap-1.5">
                <span className="text-sm">+</span> OUR FOUNDATION &amp; PURPOSE
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
                Healing Lives with Clinical Mastery &amp; Deep Empathy
              </h2>

              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                Raghuram Medicare was established with a singular vision: to make world-class, ethical medical care accessible to families across Ghaziabad and Delhi-NCR. Over the past 20+ years, our center has grown into a trusted destination for patients seeking definitive diagnosis and treatment.
              </p>

              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                Led by <strong>Prof. (Dr.) Mohan Bandhu Gupta</strong> (Chest Physician &amp; Pulmonologist) and <strong>Dr. Shubhra Gupta</strong> (Senior Gynaecologist &amp; Infertility Specialist), our hospital bridges cutting-edge diagnostic technology with personal warmth and dedicated attention.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#187597] mb-1">2003</div>
                  <div className="text-xs text-slate-600 font-medium">Established in Patel Nagar</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#187597] mb-1">10,000+</div>
                  <div className="text-xs text-slate-600 font-medium">Patients Treated</div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Patients Trust Us Cards */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#187597] text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">Senior Clinical Leadership</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Professors and FCCS-certified specialists with credentials from India&apos;s premier medical universities.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#187597] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">Advanced Diagnostics</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Equipped with computerized PFT (spirometry), diagnostic bronchoscopy, and fetal monitoring.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#187597] text-white flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">Compassionate Care</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Patient-first treatment philosophy where every patient receives dedicated consultation time.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f2f8fa] border border-[#e2eff4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#187597] text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">24/7 Emergency Support</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Round-the-clock telephone and emergency response on +91 8810242132 for urgent medical cases.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SENIOR MEDICAL DIRECTORS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> MEDICAL DIRECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Meet Our Senior Consultants
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Distinguished clinical specialists providing top-tier medical care in Ghaziabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-100 border-2 border-white">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] font-bold tracking-widest text-[#187597] uppercase block mb-1">
                        {doc.designation}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-1">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mb-2">
                        {doc.qualifications}
                      </p>
                      <span className="inline-block bg-[#187597]/10 text-[#187597] text-[11px] font-bold px-3 py-1 rounded-full">
                        Timings: {doc.timings}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {doc.bio[0]}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specializations:</div>
                    <div className="flex flex-wrap gap-2">
                      {doc.expertise.slice(0, 4).map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 rounded-xl bg-[#f2f8fa] border border-[#e2eff4] text-xs text-[#187597] font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`tel:${doc.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs font-bold text-slate-500 hover:text-[#187597] transition-colors"
                  >
                    Direct: {doc.phone}
                  </a>
                  <Link
                    href="/appointment"
                    className="group inline-flex items-center gap-2 bg-[#187597] hover:bg-[#14607c] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
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

      {/* 4. CTA BANNER */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#145a75] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            Ready to Experience Personalized Healthcare?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule a consultation with our senior specialists at Patel Nagar, Ghaziabad or call our 24/7 helpline.
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
            <a
              href={`tel:${hospital.phone}`}
              className="inline-flex items-center px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-sm font-semibold tracking-wide transition-colors"
            >
              Call {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
