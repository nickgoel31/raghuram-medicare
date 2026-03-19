'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '18:30', label: '06:30 PM' },
  { value: '19:00', label: '07:00 PM' },
  { value: '19:30', label: '07:30 PM' },
  { value: '20:00', label: '08:00 PM' },
]

const serviceOptions: string[] = [
  'Chest & Respiratory Care',
  'Gynaecology & Obstetrics',
]

const trustPoints: { icon: string; title: string; desc: string }[] = [
  { icon: '⚕️', title: 'Expert Specialists', desc: 'Board-certified doctors with decades of clinical excellence.' },
  { icon: '⚡', title: 'Fast Confirmation', desc: 'Secure your slot with immediate digital confirmation.' },
  { icon: '📅', title: 'Flexible Slots', desc: 'Convenient OPD timing: Morning & Evening Sessions.' },
  { icon: '🔒', title: 'Confidential Care', desc: 'Your medical data is encrypted and strictly confidential.' },
]

const inputClass = 'w-full px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(220,38,38,0.08)] focus:ring-0 transition-all duration-300'
const labelClass = 'block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2.5'

export default function Appointment() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '', email: '', phone: '', date: '', time: '', service: '', symptoms: '', message: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
        setFormData({ fullName: '', email: '', phone: '', date: '', time: '', service: '', symptoms: '', message: '' })
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
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-red-400 text-[10px] font-bold tracking-[0.3em] uppercase">Book Your Visit</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium text-white leading-[1.05]">
            Request Your <span className="text-red-500">Consultation</span>
          </h1>
          <p className="text-white/50 text-xl mt-8 leading-relaxed max-w-2xl mx-auto">
            Secure a specialized consultation at our facility. Our team will reach out to confirm your slot.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-start">

          {/* FORM CARD */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gray-900 px-12 py-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-white">Patient Intake Form</h2>
              <div className="w-12 h-1 bg-red-600 mt-4 rounded-full" />
            </div>

            {/* Form Body */}
            <div className="px-12 py-12">
              {submitted && (
                <div className="bg-red-50 border border-red-100 rounded-xl px-8 py-6 mb-10 flex gap-5 items-start">
                  <span className="text-red-600 text-xl shrink-0">✓</span>
                  <div>
                    <div className="font-[family-name:var(--font-playfair)] text-2xl text-gray-900 font-medium">Request Logged</div>
                    <div className="text-gray-500 text-sm mt-1">Our coordination desk will contact you for confirmation.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input className={inputClass} type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Your full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input className={inputClass} type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Preferred Date *</label>
                    <input className={inputClass} type="date" name="date" value={formData.date} onChange={handleChange} required min={today} />
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Time *</label>
                    <select className={inputClass} name="time" value={formData.time} onChange={handleChange} required>
                      <option value="">Select time slot</option>
                      {timeSlots.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Service Required *</label>
                  <select className={inputClass} name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Current Symptoms</label>
                  <textarea className={`${inputClass} resize-y min-h-[96px]`} name="symptoms" value={formData.symptoms} onChange={handleChange} placeholder="Describe your symptoms or concerns..." rows={3} />
                </div>

                <div>
                  <label className={labelClass}>Additional Information</label>
                  <textarea className={`${inputClass} resize-y min-h-[96px]`} name="message" value={formData.message} onChange={handleChange} placeholder="Any other details you'd like us to know..." rows={3} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 mt-4 shadow-lg shadow-red-600/20"
                >
                  {loading ? 'Processing...' : 'Request Consultation →'}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you consent to being contacted for appointment confirmation.
                </p>
              </form>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-5">Facility Details</h3>
              <div className="space-y-8">
                {[
                  { icon: '📞', label: 'Primary Contact', value: hospital.phoneDisplay, sub: 'Coordination Desk' },
                  { icon: '✉️', label: 'Email', value: hospital.email, sub: 'Hospital Inquiries' },
                  { icon: '📍', label: 'Address', value: hospital.addressShort, sub: hospital.address },
                  { icon: '🕐', label: 'Hours', value: hospital.hours.weekdays, sub: hospital.hours.saturday },
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 items-start group">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-lg shrink-0 border border-red-100 group-hover:bg-red-100 transition-colors">{item.icon}</div>
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">{item.label}</div>
                      <div className="font-medium text-gray-900 text-sm">{item.value}</div>
                      <div className="text-[11px] text-gray-400 mt-1 leading-relaxed">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/8 rounded-bl-full -mr-16 -mt-16 group-hover:bg-red-600/15 transition-colors" />
              <div className="inline-flex items-center bg-red-600/10 border border-red-500/20 rounded-full px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-red-400 mb-6 relative z-10">
                Emergency
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4 relative z-10">Urgent Consultation</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 relative z-10">
                For acute health emergencies, please proceed directly to the facility or call us immediately.
              </p>
              <a
                href={`tel:${hospital.phone}`}
                className="block w-full py-4 bg-red-600 hover:bg-red-700 text-white text-center text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 relative z-10 shadow-lg shadow-red-600/20"
              >
                Hotline: {hospital.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((t, i) => (
            <div key={i} className="text-center group">
              <span className="text-4xl block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{t.icon}</span>
              <div className="font-[family-name:var(--font-playfair)] text-xl font-medium text-gray-900 mb-3">{t.title}</div>
              <div className="text-gray-400 text-xs leading-relaxed px-4">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}