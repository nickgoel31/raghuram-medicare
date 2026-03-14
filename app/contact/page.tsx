'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clinic } from '@/lib/data'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const faqs: { q: string; a: string }[] = [
  { q: 'How do I schedule an appointment?', a: `You can book online through our appointment page, call us at ${clinic.phoneDisplay}, or email ${clinic.email}. We confirm within 24 hours.` },
  { q: 'What should I bring to my first appointment?', a: 'Please bring a valid ID, health insurance documents if applicable, a list of current medications, and any previous medical reports related to your condition.' },
  { q: 'How long does a consultation take?', a: 'Initial consultations typically take 30–45 minutes. Follow-up appointments are usually 15–20 minutes, varying based on your condition and progress.' },
  { q: 'Do you accept health insurance?', a: 'We work with most major health insurance providers. Contact us before your appointment to confirm your specific coverage details.' },
  { q: 'Can I get a prescription refill without visiting?', a: 'For routine prescription refills, contact us via phone or email. We can often process these without requiring an in-person visit.' },
  { q: 'What is your cancellation policy?', a: 'We require at least 24 hours notice for cancellations. Please contact us as early as possible so we can offer your slot to another patient.' },
]

const contactDetails: { icon: string; label: string; value: string; sub: string }[] = [
  { icon: '📞', label: 'Phone', value: clinic.phoneDisplay, sub: 'Available 24×7 for emergencies' },
  { icon: '✉️', label: 'Email', value: clinic.email, sub: 'We respond within 24 hours' },
  { icon: '📍', label: 'Address', value: clinic.addressShort, sub: 'Uttar Pradesh, India' },
  { icon: '🕐', label: 'Hours', value: clinic.hours.weekdays, sub: clinic.hours.saturday },
]

const inputClass = 'w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] transition-all duration-300'
const labelClass = 'block text-[10px] font-bold tracking-[0.15em] uppercase text-gray-700 mb-2'

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
    <div className="min-h-screen bg-white text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-[1.1]">
            We&apos;re Here to <span className="text-red-500">Help</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg mx-auto">
            Reach out with any questions about our services, or simply to book your first consultation.
          </p>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:-translate-y-1 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <span className="text-3xl block mb-4">{c.icon}</span>
              <div className="font-bold text-gray-900 text-sm mb-2">{c.label}</div>
              <div className="text-red-600 font-semibold text-sm mb-1">{c.value}</div>
              <div className="text-gray-400 text-xs">{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-900 px-8 lg:px-11 py-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-white">Send Us a <span className="text-red-500">Message</span></h2>
              <p className="text-white/60 text-sm mt-2">We&apos;d love to hear from you</p>
            </div>
            <div className="px-8 lg:px-11 py-10">
              {submitted && (
                <div className="bg-red-50 border border-red-100 rounded-xl px-5 py-4 mb-7 flex gap-3 items-start">
                  <span className="text-red-600 shrink-0 mt-0.5">✓</span>
                  <div>
                    <div className="font-bold text-red-600 text-sm">Message Sent!</div>
                    <div className="text-gray-600 text-sm mt-0.5">We&apos;ll get back to you shortly.</div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input className={inputClass} type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number <span className="text-gray-400 font-normal normal-case tracking-normal">(Optional)</span></label>
                  <input className={inputClass} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={clinic.phoneDisplay} />
                </div>
                <div>
                  <label className={labelClass}>Subject *</label>
                  <input className={inputClass} type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help you?" />
                </div>
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea className={`${inputClass} resize-y min-h-[130px]`} name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." rows={5} />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 mt-4"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-2xl p-8 lg:p-11 shadow-sm border border-gray-100">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-8">Contact Details</h3>
              <div className="space-y-7">
                {contactDetails.map((d, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center text-lg shrink-0">{d.icon}</div>
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-1">{d.label}</div>
                      <div className="font-semibold text-gray-900 text-sm mb-0.5">{d.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{d.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 lg:p-10 text-center md:text-left">
              <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-red-400 mb-6">
                Urgent Cases
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-medium mb-4">Experiencing <span className="text-red-500">Acute Symptoms?</span></h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                For urgent health concerns or emergencies, don&apos;t wait — call us directly on {clinic.phoneDisplay} or visit our clinic. We prioritize critical cases.
              </p>
              <Link
                href={`tel:${clinic.phone}`}
                className="inline-block md:block w-full py-3.5 bg-red-600 text-white text-center text-xs font-bold tracking-[0.15em] uppercase rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20"
              >
                Call Emergency: {clinic.phoneDisplay}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="text-red-600 text-[10px] font-bold tracking-[0.25em] uppercase">Patient FAQ</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-10 bg-gray-900 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-white mb-6 leading-[1.2]">
            Compassionate Care,<br />
            <span className="text-red-500">Uncompromising Excellence.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">Delivering trusted multispecialty healthcare in a state-of-the-art facility.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/appointment" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
              Request Consult
            </Link>
            <Link href="/doctors" className="inline-block border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-10 py-4 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-lg">
              Meet Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}