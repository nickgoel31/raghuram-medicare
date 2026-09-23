'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, CheckCircle2, ShieldCheck, HeartPulse, UserCheck, Phone } from 'lucide-react'
import { hospital } from '@/lib/data'

interface FormData {
  fullName: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  symptoms: string
  message: string
}

const timeSlots: { value: string; label: string }[] = [
  { value: '10:00 AM', label: '10:00 AM' },
  { value: '11:00 AM', label: '11:00 AM' },
  { value: '12:00 PM', label: '12:00 PM' },
  { value: '01:00 PM', label: '01:00 PM' },
  { value: '06:00 PM', label: '06:00 PM' },
  { value: '06:30 PM', label: '06:30 PM' },
  { value: '07:00 PM', label: '07:00 PM' },
  { value: '07:30 PM', label: '07:30 PM' },
]

const serviceOptions: string[] = [
  'Chest & Respiratory Care (Prof. Dr. Mohan Bandhu)',
  'Gynaecology & Obstetrics (Dr. Shubhra Gupta)',
  'Computerized PFT (Spirometry)',
  'Infertility Evaluation & Treatment',
  'General Medical Consultation',
]

const inputClass =
  'w-full px-5 py-3.5 border border-[#e2eff4] rounded-2xl bg-[#f8fbfd] text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:border-[#187597] focus:bg-white focus:ring-2 focus:ring-[#187597]/10 transition-all'
const labelClass = 'block text-xs font-bold tracking-wider uppercase text-slate-600 mb-2'

export default function AppointmentPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    symptoms: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          symptoms: '',
          message: '',
        })
        setTimeout(() => setSubmitted(false), 6000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

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
            <span>Online Scheduling</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Book Your Specialist<br />
            <span className="text-[#38bdf8]">Consultation</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule an appointment with Prof. (Dr.) Mohan Bandhu Gupta or Dr. Shubhra Gupta at Raghuram Medicare, Patel Nagar, Ghaziabad.
          </p>
        </div>
      </section>

      {/* 2. FORM & SIDEBAR */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase block mb-2">
                + PATIENT INTAKE FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                Enter Consultation Details
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Please select your preferred doctor, timing slot, and describe your symptoms.
              </p>
            </div>

            {submitted && (
              <div className="bg-[#f2f8fa] border border-[#187597]/30 text-[#187597] rounded-2xl p-5 mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#187597] shrink-0" />
                <div className="text-sm font-semibold">
                  Appointment request submitted successfully! Our clinic desk will contact you shortly to confirm your slot.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    className={inputClass}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Priya Sharma"
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98100 XXXXX"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className={labelClass}>Specialty / Service *</label>
                  <select
                    className={inputClass}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a department...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Preferred Date *</label>
                  <input
                    className={inputClass}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today}
                  />
                </div>
                <div>
                  <label className={labelClass}>Preferred Time Slot *</label>
                  <select
                    className={inputClass}
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select timing...</option>
                    {timeSlots.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Symptoms / Medical Concerns</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px]`}
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms (e.g. chronic cough, shortness of breath, antenatal checkup)..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-3 w-full bg-[#187597] hover:bg-[#14607c] text-white py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-60"
              >
                <span>{loading ? 'Processing...' : 'Confirm Appointment Request'}</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#187597] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </form>
          </div>

          {/* Right Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#f2f8fa] border border-[#e2eff4] rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#0f172a] border-b border-[#e2eff4] pb-4">
                Consultation Info
              </h3>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#187597] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Morning Sessions:</span>
                    <span>10:00 AM – 01:00 PM / 02:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#187597] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Evening Sessions:</span>
                    <span>06:00 PM – 08:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#187597] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">OPD Working Days:</span>
                    <span>Tuesday to Sunday (Monday Closed)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e2eff4]">
                <a
                  href={`tel:${hospital.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#e2eff4] text-xs font-bold text-[#187597] hover:bg-slate-50 transition-colors"
                >
                  <span>Direct Helpline:</span>
                  <span>{hospital.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Quick Emergency Note */}
            <div className="bg-[#0e3c4e] text-white rounded-3xl p-7 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#38bdf8]">
                Emergency Support
              </span>
              <h4 className="text-lg font-bold text-white leading-snug">
                Need Immediate Attention?
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                For urgent breathlessness, acute attacks, or maternity labor, call directly:
              </p>
              <a
                href={`tel:${hospital.phone}`}
                className="block text-center w-full py-2.5 bg-[#38bdf8] text-[#0e3c4e] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-cyan-300 transition-colors"
              >
                Call +91 8810242132
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TRUST HIGHLIGHTS */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center mx-auto">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a]">Senior Consultants</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Direct consultation with professors and senior clinical specialists.</p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a]">Minimal Waiting Time</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Pre-scheduled slots ensure dedicated attention without delays.</p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center mx-auto">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a]">Complete Diagnostics</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Computerized PFT, fetal Doppler, and in-house medical investigations.</p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0f172a]">Data Confidentiality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Strict patient privacy and digital record safety protocols.</p>
          </div>
        </div>
      </section>

    </div>
  )
}