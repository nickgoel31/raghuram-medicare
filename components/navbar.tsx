"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { clinic, services } from '@/lib/data'
import { Menu, X, Phone, Mail, ChevronRight, ChevronDown, MoveRight } from 'lucide-react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false)
    const pathname = usePathname()
    const isHome = pathname === '/'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navBg = (scrolled || !isHome)
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3'
        : 'bg-transparent py-5'

    const textColor = (scrolled || !isHome) ? 'text-gray-600' : 'text-white/70'
    const logoColor = (scrolled || !isHome) ? 'text-gray-900' : 'text-white'
    const activeColor = 'text-red-600'

    return (
        <>
            {/* Top Bar */}
            <div className={`hidden lg:flex fixed top-0 left-0 right-0 z-[60] bg-red-600 px-10 h-9 items-center justify-between text-[10px] tracking-widest text-white transition-transform duration-500 ease-in-out ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 uppercase opacity-90">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Trusted Healthcare Excellence
                    </span>
                </div>
                <div className="flex items-center gap-6 uppercase">
                    <Link href="/patient-guide" className="hover:opacity-80 transition-opacity tracking-widest">Patient Guide</Link>
                    <Link href="/doctors" className="hover:opacity-80 transition-opacity tracking-widest">Find a Doctor</Link>
                    <span className="font-semibold">Emergency: <a href={`tel:${clinic.phone}`} className="underline underline-offset-2">{clinic.phoneDisplay}</a></span>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`fixed left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 transition-all duration-500 ease-in-out ${navBg} ${scrolled ? 'top-0' : 'top-0 lg:top-9'}`}
                onMouseLeave={() => setMegaMenuOpen(false)}
            >
                <Link href="/" className="group flex flex-col">
                    <span className={`font-[family-name:var(--font-playfair)] text-2xl lg:text-[26px] font-semibold tracking-wide transition-all duration-300 group-hover:scale-[1.02] ${logoColor}`}>
                        Raghuram <span className="text-red-600">Medicare</span>
                    </span>
                    <span className={`text-[8px] uppercase tracking-[0.35em] -mt-0.5 transition-colors duration-300 ${(scrolled || !isHome) ? 'text-gray-400' : 'text-white/40'}`}>Multi-Speciality Healthcare</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Centers of Excellence', '/services'],
                        ['Infrastructure', '/infrastructure']
                    ].map(([label, href]) => {
                        const active = pathname === href || (href !== '/' && pathname.startsWith(href as string))
                        const isServices = label === 'Centers of Excellence'

                        return (
                            <div
                                key={href as string}
                                className="relative"
                                onMouseEnter={() => isServices && setMegaMenuOpen(true)}
                            >
                                <Link
                                    href={href as string}
                                    className={`group flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${active ? activeColor : `${textColor} hover:text-red-600`}`}
                                >
                                    {label}
                                    {isServices && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                                    )}
                                    <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-red-600 rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/appointment" className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg relative overflow-hidden group shadow-lg shadow-red-600/20 hover:shadow-red-600/30">
                        <span className="relative z-10">Appointment</span>
                        <MoveRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    {/* Mobile Menu Toggle */}
                    <button
                        className={`lg:hidden p-2 transition-colors ${(scrolled || !isHome) ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-red-400'}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-7 h-7" />
                    </button>
                </div>

                {/* Mega Menu Dropdown */}
                <div
                    className={`absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-gray-100 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden hidden lg:block rounded-b-2xl ${megaMenuOpen ? 'max-h-[80vh] opacity-100 pointer-events-auto translate-y-0' : 'max-h-0 opacity-0 pointer-events-none -translate-y-4'}`}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                >
                    <div className="max-w-7xl mx-auto px-10 py-10">
                        <div className="grid grid-cols-12 gap-12">
                            {/* Left Column */}
                            <div className="col-span-3 space-y-6">
                                <div>
                                    <h3 className="text-red-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Centers of Excellence</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        World-class multi-speciality healthcare across multiple domains, led by Dr. M. Bandhu & Dr. Shubhra Gupta.
                                    </p>
                                </div>
                                <div className="p-4 bg-red-50 border border-red-100 rounded-xl space-y-3">
                                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">In-House Diagnostics</p>
                                    <p className="text-xs text-gray-700 leading-relaxed">Advanced Pulmonary Lab with state-of-the-art Spirometry and DLCO testing equipment.</p>
                                    <Link href="/infrastructure" className="inline-flex items-center gap-2 text-red-600 text-[10px] uppercase font-bold tracking-widest hover:gap-3 transition-all">
                                        Explore Lab <MoveRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {services.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="group p-5 hover:bg-red-50 border border-transparent hover:border-red-100 rounded-xl transition-all duration-300"
                                        onClick={() => setMegaMenuOpen(false)}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-xl rounded-lg mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-gray-900 text-[12px] font-bold tracking-wider mb-2 group-hover:text-red-600 transition-colors">{service.shortTitle}</h4>
                                        <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 group-hover:text-gray-500 transition-colors">
                                            {service.tagline}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-100 bg-white transition-all duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* mobile header */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                        <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-gray-900">
                            Raghuram <span className="text-red-600">Medicare</span>
                        </span>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-600 p-2 hover:text-red-600 transition-colors">
                            <X className="w-7 h-7" />
                        </button>
                    </div>

                    {/* mobile links */}
                    <div className="grow overflow-y-auto px-6 py-8">
                        <nav className="space-y-2">
                            {[
                                ['Home', '/'],
                                ['About Us', '/about'],
                                ['Centers of Excellence', '/services'],
                                ['Infrastructure', '/infrastructure'],
                                ['Patient Guide', '/patient-guide'],
                                ['Find a Doctor', '/doctors'],
                                ['Contact Us', '/contact']
                            ].map(([label, href]) => (
                                <Link
                                    key={href as string}
                                    href={href as string}
                                    className="flex items-center justify-between text-lg text-gray-800 border-b border-gray-50 py-4 group"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="group-hover:text-red-600 transition-colors font-medium">{label}</span>
                                    <ChevronRight className="w-5 h-5 text-red-400" />
                                </Link>
                            ))}
                        </nav>

                        {/* mobile contact */}
                        <div className="mt-10 space-y-3">
                            <div className="flex items-center gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                                <Phone className="w-5 h-5 text-red-600" />
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Emergency Number</div>
                                    <a href={`tel:${clinic.phone}`} className="text-gray-900 font-semibold">{clinic.phoneDisplay}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                <Mail className="w-5 h-5 text-red-600" />
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Email Address</div>
                                    <div className="text-gray-900 font-semibold">{clinic.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100">
                        <Link
                            href="/appointment"
                            className="block w-full text-center bg-red-600 text-white py-4 font-bold tracking-[0.15em] uppercase rounded-xl transition-all active:scale-95 shadow-lg shadow-red-600/20"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
