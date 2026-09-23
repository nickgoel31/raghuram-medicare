'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react'
import { hospital } from '@/lib/data'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I schedule an appointment at Raghuram Medicare?',
    a: `You can easily book online through our appointment page or call our clinic directly at ${hospital.phoneDisplay}. Same-day slots are often available for urgent consultations.`,
  },
  {
    q: 'What are your OPD consultation timings?',
    a: 'Morning OPD runs from 10:00 AM to 1:00 PM/2:00 PM, and Evening OPD from 6:00 PM to 8:00 PM (Tuesday to Sunday, Monday closed). Emergency helpline is 24×7.',
  },
  {
    q: 'What should I bring to my consultation?',
    a: 'Please bring any previous medical prescriptions, chest X-rays, PFT reports, ultrasound scans, or recent blood investigation reports.',
  },
  {
    q: 'Where is the hospital located in Ghaziabad?',
    a: `We are located at ${hospital.address}, easily accessible from all parts of Ghaziabad and Delhi-NCR.`,
  },
]

const contactCards = [
  {
    icon: Phone,
    label: 'Helpline & Emergency',
    value: hospital.phoneDisplay,
    href: `tel:${hospital.phone}`,
    sub: 'Available 24×7 for emergency assistance',
  },
  {
    icon: Mail,
    label: 'Email Inquiries',
    value: hospital.email,
    href: `mailto:${hospital.email}`,
    sub: 'We typically respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Clinic Location',
    value: hospital.addressShort,
    href: hospital.googleMapsUrl,
    sub: 'Patel Nagar 3rd, Ghaziabad, UP',
  },
  {
    icon: Clock,
    label: 'Consultation Hours',
    value: '10:00 AM – 8:00 PM',
    href: '#',
    sub: 'Tue – Sun (Monday Closed)',
  },
]

const inputClass =
  'w-full px-5 py-3.5 border border-[#e2eff4] rounded-2xl bg-[#f8fbfd] text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:border-[#187597] focus:bg-white focus:ring-2 focus:ring-[#187597]/10 transition-all'
const labelClass = 'block text-xs font-bold tracking-wider uppercase text-slate-600 mb-2'

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

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
            <span>Connect with Us</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            We&apos;re Here to<br />
            <span className="text-[#38bdf8]">Assist Your Health</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Get in touch with Raghuram Medicare for appointments, specialist queries, medical records, or emergency medical guidance in Ghaziabad.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO TILES */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((c, i) => {
            const Icon = c.icon
            return (
              <a
                key={i}
                href={c.href}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#187597]/30 transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#187597]/10 text-[#187597] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {c.label}
                  </div>
                  <div className="text-base font-bold text-[#0f172a] mb-1">{c.value}</div>
                  <div className="text-xs text-slate-500">{c.sub}</div>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* 3. FORM & CLINIC DETAILS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase block mb-2">
                + SEND A MESSAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                Leave us a Message
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Fill out the form below and our medical team will get back to you promptly.
              </p>
            </div>

            {submitted && (
              <div className="bg-[#f2f8fa] border border-[#187597]/30 text-[#187597] rounded-2xl p-5 mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#187597] shrink-0" />
                <div className="text-sm font-semibold">
                  Thank you! Your message has been sent successfully. We will reach out shortly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    className={inputClass}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ramesh Sharma"
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98100 XXXXX"
                  />
                </div>
                <div>
                  <label className={labelClass}>Subject *</label>
                  <input
                    className={inputClass}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Doctor Consultation"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[120px]`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can our clinical team help you?..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-3 w-full bg-[#187597] hover:bg-[#14607c] text-white py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-60"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#187597] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </form>
          </div>

          {/* Right Sidebar: Location & Urgent Care */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Box */}
            <div className="bg-[#0e3c4e] text-white rounded-3xl p-8 shadow-xl space-y-4">
              <span className="bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block">
                Urgent Medical Cases
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Experiencing Acute Chest or Maternity Distress?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                For acute respiratory issues, severe asthma attacks, or urgent maternity emergencies, please contact our 24/7 helpline immediately.
              </p>
              <a
                href={`tel:${hospital.phone}`}
                className="block text-center w-full py-3.5 bg-white text-[#0e3c4e] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-full transition-colors shadow-md"
              >
                Emergency: {hospital.phoneDisplay}
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-[#f2f8fa] border border-[#e2eff4] rounded-3xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#0f172a]">Hospital Address</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {hospital.address}
              </p>
              <div className="pt-2">
                <a
                  href={hospital.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#187597] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center justify-center gap-1.5 mb-3">
              <span className="text-sm">+</span> COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Patient Help &amp; FAQs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-2.5"
              >
                <h3 className="text-base font-bold text-[#0f172a]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}