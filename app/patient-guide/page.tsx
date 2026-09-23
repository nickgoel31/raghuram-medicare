'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, ShieldCheck, Activity, Clock, Phone } from 'lucide-react'
import { hospital } from '@/lib/data'

export default function PatientGuidePage() {
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
            <span>Essential Patient Information</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Your Comprehensive<br />
            <span className="text-[#38bdf8]">Patient Guide</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before visiting Raghuram Medicare — consultation flow, diagnostic instructions, and insurance details.
          </p>
        </div>
      </section>

      {/* 2. MAIN GUIDE CONTENT */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Card 1: Consultation Process */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#187597] uppercase tracking-wider block">
                  Step-by-Step
                </span>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Consultation Process &amp; OPD Flow
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">1. Pre-Booking:</strong>
                We strongly recommend scheduling your appointment online or calling {hospital.phoneDisplay} to select your preferred doctor and reduce clinic waiting times.
              </div>
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">2. Vital Checks &amp; Intake:</strong>
                Upon arrival at Patel Nagar, our nursing team will take your pulse oximetry (SpO2), blood pressure, and brief health history.
              </div>
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">3. Clinical Examination:</strong>
                Detailed physical and specialist consultation with Dr. Mohan Bandhu Gupta or Dr. Shubhra Gupta. Please bring all past reports and active prescriptions.
              </div>
            </div>
          </div>

          {/* Card 2: Diagnostic Preparation */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#187597] uppercase tracking-wider block">
                  Test Guidelines
                </span>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Diagnostic Preparation Instructions
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">Computerized PFT (Spirometry):</strong>
                Avoid using fast-acting inhalers (such as Asthalin / Levolin) for at least 4–6 hours prior to the test unless instructed otherwise by the doctor.
              </div>
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">Bronchoscopy &amp; Endoscopy:</strong>
                Requires strict fasting of 6 to 8 hours before the procedure. Specific pre-procedure instructions will be provided during booking.
              </div>
              <div className="p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4]">
                <strong className="text-slate-900 block mb-1">Antenatal &amp; Pelvic Ultrasound:</strong>
                Follow hydration and bladder preparation advice given by our nursing staff at the time of your checkup.
              </div>
            </div>
          </div>

          {/* Card 3: Insurance & Payments */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#187597] uppercase tracking-wider block">
                  Financials &amp; Coverage
                </span>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Insurance, TPA &amp; Documentation
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                For tertiary inpatient admissions and major surgical procedures at our affiliated teaching hospitals (such as Sharda Medical College or Santosh Hospital), cashless hospitalization is available via major insurance TPAs.
              </p>
              <p>
                At our Patel Nagar clinic, we provide itemized official receipts, doctor prescriptions, and diagnostic test reports so you can easily claim your OPD reimbursement from your insurer.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#145a75] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            Have More Questions Before Your Visit?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our helpdesk is available to assist you with directions, appointments, and test preparations.
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
