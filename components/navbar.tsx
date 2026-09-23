"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { hospital } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Team', href: '/doctors' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ]

  const isTransparent = !scrolled && isHome

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Banner */}
      <div className="w-full bg-[#0e3c4e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-9 flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase">
          <div className="hidden md:flex items-center gap-2 text-white/85">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span>Trusted Healthcare Excellence</span>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-3 sm:gap-7 text-white/90 text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <Link href="/patient-guide" className="hover:text-[#38bdf8] transition-colors">
                Patient Guide
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/doctors" className="hover:text-[#38bdf8] transition-colors">
                Doctors
              </Link>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="hidden sm:inline-block bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold tracking-wider">
                24/7
              </span>
              <a 
                href={`tel:${hospital.phone || '+918810242132'}`} 
                className="text-white hover:text-[#38bdf8] transition-colors font-bold tracking-wider"
              >
                {hospital.phoneDisplay || '+91 8810242132'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isTransparent && !mobileOpen
            ? 'bg-transparent py-3.5 text-white'
            : 'bg-white/95 backdrop-blur-md py-2.5 text-slate-900 shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-18 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group" onClick={() => setMobileOpen(false)}>
            <div
              className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isTransparent && !mobileOpen
                  ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
                  : 'bg-[#187597] text-white shadow-xs'
              }`}
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c.68 0 1.34.09 1.97.25-2.9 1.48-4.97 4.5-4.97 8 0 3.5 2.07 6.52 4.97 8-.63.16-1.29.25-1.97.25z"/>
              </svg>
            </div>
            <span
              className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isTransparent && !mobileOpen ? 'text-white' : 'text-slate-900'
              }`}
            >
              Raghuram{' '}
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isTransparent && !mobileOpen ? 'text-white/90' : 'text-[#187597]'
                }`}
              >
                Medicare
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-medium transition-colors duration-300 ${
              isTransparent ? 'text-white/80' : 'text-slate-600'
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && !link.href.startsWith('/#') && pathname.startsWith(link.href))

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-1.5 transition-colors duration-200 ${
                    isTransparent
                      ? isActive
                        ? 'text-white font-semibold'
                        : 'hover:text-white'
                      : isActive
                      ? 'text-[#187597] font-semibold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full inline-block ${
                        isTransparent ? 'bg-white' : 'bg-[#187597]'
                      }`}
                    />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right CTA Button: Book Appointment with Round Arrow */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/appointment"
              className={`group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 duration-300 ${
                isTransparent && !mobileOpen
                  ? 'bg-white text-slate-900 hover:bg-slate-50'
                  : 'bg-[#187597] text-white hover:bg-[#14607c]'
              }`}
            >
              <span>Book Appointment</span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 ${
                  isTransparent && !mobileOpen ? 'bg-[#187597] text-white' : 'bg-white text-[#187597]'
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent && !mobileOpen ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Smooth Slide & Backdrop */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl text-slate-900 border-t border-gray-100 px-6 py-6 space-y-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base py-2 px-3 rounded-xl transition-colors ${
                    isActive ? 'bg-[#f2f8fa] text-[#187597] font-bold' : 'text-slate-700 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Link
              href="/appointment"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between w-full bg-[#187597] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-all"
            >
              <span>Book Appointment</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#187597] flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <a
              href={`tel:${hospital.phone || '+918810242132'}`}
              className="flex items-center justify-center w-full border border-[#187597] text-[#187597] px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#187597]/5 transition-colors"
            >
              Emergency Call: {hospital.phoneDisplay || '+91 8810242132'}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
