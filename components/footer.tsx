"use client"

import Link from 'next/link'
import { hospital, services } from '@/lib/data'

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Top CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 mb-16 border-b border-gray-800">
                    <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-2">Dedicated to Your Complete Health</h3>
                        <p className="text-gray-400 text-sm">Expert care, advanced diagnostics, and compassionate treatment.</p>
                    </div>
                    <Link href="/appointment" className="shrink-0 bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
                        Request an Appointment
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white tracking-wide mb-6">
                            Raghuram <span className="text-red-500">Medicare</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                            Premium multi-speciality care in Ghaziabad. Led by Dr. Mohan Bandhu & Dr. Shubhra Gupta, we provide
                            world-class treatment for pulmonology, gynaecology, infertility, and advanced diagnostics.
                        </p>
                        <div className="flex gap-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-pointer">
                                    <span className="sr-only">Social Link</span>
                                    <div className="w-4 h-4 rounded-full bg-current opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {[['Home', '/'], ['About Us', '/about'], ['Our Doctors', '/doctors'], ['Patient Guide', '/patient-guide'], ['Contact', '/contact']].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 lg:col-start-8">
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-6">Departments & Services</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-red-400 transition-colors line-clamp-1">
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 lg:col-start-11">
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-6">Contact</h4>
                        <address className="not-italic space-y-4 text-sm text-gray-400">
                            <div>
                                <strong className="block text-white mb-1 font-medium">Emergency</strong>
                                <a href={`tel:${hospital.phone}`} className="hover:text-red-400 transition-colors">{hospital.phoneDisplay}</a>
                            </div>
                            <div>
                                <strong className="block text-white mb-1 font-medium">Hospital Address</strong>
                                {hospital.address}
                            </div>
                            <div>
                                <strong className="block text-white mb-2 font-medium">Hospital Hours</strong>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-white/60 text-[10px] uppercase tracking-wider font-bold mb-1">Dr. M. Bandhu Gupta</p>
                                        <p className="text-xs">10:00 AM – 2:00 PM</p>
                                        <p className="text-xs">6:00 PM – 8:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-[10px] uppercase tracking-wider font-bold mb-1">Dr. Shubhra Gupta</p>
                                        <p className="text-xs">10:00 AM – 1:00 PM</p>
                                        <p className="text-xs">6:30 PM – 7:30 PM</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-800">
                                        <p className="text-red-400 font-medium">Monday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} {hospital.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
