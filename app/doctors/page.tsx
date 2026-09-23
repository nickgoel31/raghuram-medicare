'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Clock, Award, ShieldCheck, HeartPulse } from 'lucide-react'
import { doctors, hospital } from '@/lib/data'

export default function DoctorsPage() {
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
            <span>Our Specialists &amp; Consultants</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Meet Our Senior<br />
            <span className="text-[#38bdf8]">Clinical Leadership</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Experienced medical professors and consultants with decades of specialized practice in Pulmonology, Critical Care, Gynaecology, and Safe Motherhood.
          </p>
        </div>
      </section>

      {/* 2. DOCTORS DIRECTORY */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#187597]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-100 border-2 border-white">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left space-y-1.5">
                      <span className="inline-block bg-[#187597]/10 text-[#187597] text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                        {doc.designation}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                        {doc.name}
                      </h2>
                      <p className="text-xs font-semibold text-slate-500">
                        {doc.qualifications}
                      </p>
                      <div className="pt-2 text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#187597]" />
                        <span>Timings: {doc.timings}</span>
                      </div>
                      <div className="text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-[#187597]" />
                        <span>Registration No: {doc.registration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
                    {doc.bio.slice(0, 2).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div className="space-y-2 mb-8">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Clinical Expertise:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doc.expertise.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-xl bg-[#f2f8fa] border border-[#e2eff4] text-xs font-medium text-[#187597]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={`tel:${doc.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#187597] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#187597]" />
                    <span>Direct: {doc.phone}</span>
                  </a>

                  <Link
                    href="/appointment"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#187597] hover:bg-[#14607c] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CLINICAL VALUES */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> PATIENT COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Our Clinical Standards &amp; Ethics
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Evidence-Based Medicine</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Diagnostic accuracy driven by modern computerized testing, ensuring every treatment plan is clinically validated and safe.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Compassionate Delivery</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Warm and supportive consultation environment where doctors take the time to listen, explain, and guide every patient.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Academic Rigor</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Led by professors from premier medical colleges with deep experience in critical care, bronchoscopy, and high-risk maternity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#145a75] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            Schedule an Appointment with Our Specialists
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Visit Raghuram Medicare at Patel Nagar, Ghaziabad for senior consultant consultations and specialized medical care.
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
              Emergency: {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
