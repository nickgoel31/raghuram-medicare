"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { hospital } from '@/lib/data'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#145a75] text-white pt-20 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16">
          
          {/* Left Column: Headline, Brand Description & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
              Raghuram <span className="font-light text-white/90">Medicare</span>
            </h2>
            
            <p className="text-white/85 text-sm leading-relaxed max-w-sm font-normal">
              Premium multi-speciality care in Ghaziabad. Led by Dr. Mohan Bandhu &amp; Dr. Shubhra Gupta, we provide world-class treatment for pulmonology, gynaecology, infertility, and advanced diagnostics.
            </p>

            {/* Newsletter Subscription Pill */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-sm">
              <div className="relative flex items-center rounded-full border border-white/35 bg-white/10 backdrop-blur-xs p-1.5 focus-within:border-white transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-white hover:bg-slate-100 text-[#145a75] font-semibold text-sm px-5 py-2 rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Columns: Explore, Services, Contact */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-8">
            
            {/* Column 1: Explore */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-5">
                Explore
              </h3>
              <ul className="space-y-3.5 text-sm text-white/85 font-normal">
                <li>
                  <Link href="/" className="hover:text-[#38bdf8] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#38bdf8] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-[#38bdf8] transition-colors">Our Doctors</Link>
                </li>
                <li>
                  <Link href="/patient-guide" className="hover:text-[#38bdf8] transition-colors">Patient Guide</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#38bdf8] transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/appointment" className="hover:text-[#38bdf8] transition-colors">Book Appointment</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Departments & Services */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-5">
                Departments &amp; Services
              </h3>
              <ul className="space-y-3.5 text-sm text-white/85 font-normal">
                <li>
                  <Link href="/services/gynaecology-infertility" className="hover:text-[#38bdf8] transition-colors">
                    Gynaecology Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/chest-respiratory-critical-care" className="hover:text-[#38bdf8] transition-colors">
                    Respiratory &amp; Chest Care
                  </Link>
                </li>
                <li>
                  <Link href="/services/chest-respiratory-critical-care" className="hover:text-[#38bdf8] transition-colors">
                    Computerized PFT (Spirometry)
                  </Link>
                </li>
                <li>
                  <Link href="/services/gynaecology-infertility" className="hover:text-[#38bdf8] transition-colors">
                    Infertility (Baanjhpan Hospital)
                  </Link>
                </li>
                <li>
                  <Link href="/services/chest-respiratory-critical-care" className="hover:text-[#38bdf8] transition-colors">
                    Diagnostic Bronchoscopy
                  </Link>
                </li>
                <li>
                  <Link href="/services/gynaecology-infertility" className="hover:text-[#38bdf8] transition-colors">
                    Safe Delivery &amp; C-Section
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Hospital Hours */}
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-2">
                  Contact
                </h3>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">Emergency:</div>
                <a
                  href={`tel:${hospital.phone || '+918810242132'}`}
                  className="text-white hover:text-[#38bdf8] font-bold text-base tracking-wider block transition-colors mt-0.5"
                >
                  {hospital.phoneDisplay || '+91 8810242132'}
                </a>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">Hospital Address:</div>
                <p className="text-white/85 text-xs leading-relaxed">
                  G-156, Patel Nagar 3rd, Ghaziabad, Uttar Pradesh – 201002
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">Hospital Hours:</div>
                <div className="space-y-1.5 text-xs text-white/80">
                  <div>
                    <span className="font-bold text-white block text-[11px]">DR. M. BANDHU GUPTA</span>
                    <span>10:00 AM – 2:00 PM &amp; 6:00 PM – 8:00 PM</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block text-[11px]">DR. SHUBHRA GUPTA</span>
                    <span>10:00 AM – 1:00 PM &amp; 6:30 PM – 7:30 PM</span>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#38bdf8]/20 border border-[#38bdf8]/30 text-[#38bdf8] font-bold text-[11px]">
                      Monday: Closed
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
              <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c.68 0 1.34.09 1.97.25-2.9 1.48-4.97 4.5-4.97 8 0 3.5 2.07 6.52 4.97 8-.63.16-1.29.25-1.97.25z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Raghuram <span className="font-light text-white/90">Medicare</span>
            </span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl border border-white/25 bg-white/10 flex items-center justify-center text-white text-xs font-bold hover:bg-white/20 transition-colors cursor-pointer">
              𝕏
            </div>
            <div className="w-9 h-9 rounded-xl border border-white/25 bg-white/10 flex items-center justify-center text-white text-sm font-bold hover:bg-white/20 transition-colors cursor-pointer">
              f
            </div>
            <div className="w-9 h-9 rounded-xl border border-white/25 bg-white/10 flex items-center justify-center text-white text-xs hover:bg-white/20 transition-colors cursor-pointer">
              ▶
            </div>
          </div>

          {/* Copyright & Tagline */}
          <div className="text-center md:text-right text-xs text-white/80 leading-relaxed font-normal">
            <div>© {new Date().getFullYear()} Raghuram Medicare. All rights reserved.</div>
            <div className="text-white/60">Designed with care for healthier communities in Ghaziabad.</div>
          </div>

        </div>

      </div>
    </footer>
  )
}
