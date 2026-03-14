'use client'

import Link from 'next/link'
import { services, doctors } from '@/lib/data'

export default function Sitemap() {
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Our Services', href: '/services' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Patient Guide', href: '/patient-guide' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book Appointment', href: '/appointment' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Navigation Guide</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-[1.1]">
            Site <span className="text-red-500">Map</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg mx-auto">
            A comprehensive list of all pages and departments available on the Raghuram Medicare website.
          </p>
        </div>
      </section>

      {/* SITEMAP CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          
          {/* Main Pages */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-4">Main Navigation</h2>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-4">Centers of Excellence</h2>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctors & Legal */}
          <div className="space-y-12">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-4">Our Specialists</h2>
              <ul className="space-y-4">
                {doctors.map((doc) => (
                  <li key={doc.id} className="text-gray-600 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    {doc.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-4">Legal & Support</h2>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
