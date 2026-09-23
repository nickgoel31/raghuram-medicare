'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react'
import { doctors, hospital, testimonials as realTestimonials, services as realServices } from '@/lib/data'
import { BlurReveal } from '@/components/ui/blur-reveal'

const slides = [
  {
    id: 'slide-1',
    bgImage: '/hero-slide-1.jpg',
    tag: 'Trusted by 10k+ Families in Ghaziabad',
    headline: (
      <>
        Your Trusted<br />
        Partner in Modern<br />
        Healthcare
      </>
    ),
    btnText: 'Explore Services',
    btnHref: '/services',
    subTitle: 'Comprehensive Care',
    subDesc:
      'Accessible, modern medical care in Ghaziabad — where technology meets compassion. Book appointments, view reports, and stay healthy with expert specialists.',
    statLabel: 'Trusted Care Rate',
    statValue: '97%',
    statDesc: 'Our patients trust us and are consistently satisfied with our clinical treatment & support.',
    pill1: 'Caring',
    pill2: 'Personalized',
    pill3: 'Reliable',
  },
  {
    id: 'slide-2',
    bgImage: '/hero-slide-2.jpg',
    tag: '20+ Years Pulmonology Excellence',
    headline: (
      <>
        Expert Chest &<br />
        Pulmonary Care in<br />
        Ghaziabad
      </>
    ),
    btnText: 'Meet Dr. Bandhu',
    btnHref: '/doctors',
    subTitle: 'Advanced Pulmonology',
    subDesc:
      'Led by Prof. (Dr.) Mohan Bandhu (MD, FCCS). State-of-the-art computerized PFT, bronchoscopy, asthma, allergy, and critical respiratory management.',
    statLabel: 'Lives Touched',
    statValue: '10K+',
    statDesc: 'Over two decades of trusted respiratory and critical care across Delhi-NCR.',
    pill1: 'Advanced PFT',
    pill2: 'Chest Care',
    pill3: 'ICU Support',
  },
  {
    id: 'slide-3',
    bgImage: '/hero-slide-3.jpg',
    tag: "Compassionate Women's Health",
    headline: (
      <>
        Dedicated Infertility &<br />
        Gynaecological<br />
        Excellence
      </>
    ),
    btnText: 'Book Consultation',
    btnHref: '/appointment',
    subTitle: 'Safe Motherhood',
    subDesc:
      'Led by Senior Gynaecologist Dr. Shubhra Gupta (DGO, DMCH). Providing safe delivery, high-risk pregnancy management, and infertility solutions.',
    statLabel: 'Emergency Support',
    statValue: '24×7',
    statDesc: 'Round-the-clock emergency support, maternity care, and critical attention.',
    pill1: 'Safe Delivery',
    pill2: 'Infertility Clinic',
    pill3: 'Compassion',
  },
]

const specialtiesList = [
  {
    id: 'gynaecology',
    name: 'Gynaecology & Obstetrics',
    num: '01',
    doctor: 'Dr. Shubhra Gupta',
    role: 'Senior Gynaecologist & Obstetrician (DGO, DMCH)',
    image: '/doctor-2.jpeg',
    consultationImage: '/gynae-consultation.jpg',
    badgeTitle: 'PATIENT-CENTERED MATERNITY',
    badgeSubtitle: 'Safe Normal Delivery, High-Risk Pregnancy & Infertility',
    description: 'Specialized women’s clinical care covering safe delivery, antenatal monitoring, PCOS/PCOD, laparoscopic procedures, and a dedicated Infertility Hospital (Baanjhpan clinic).',
    cardTitle: 'Dedicated center of excellence for safe motherhood, women’s wellness & infertility.',
    cardDesc: 'Equipped with comfortable private labor facilities, fetal diagnostics, safe delivery infrastructure, and compassionate hormonal and reproductive counseling.',
    tags: [
      'Normal & C-Section Delivery',
      'High-Risk Pregnancy',
      'Infertility (Baanjhpan)',
      'Antenatal Checkups',
      'PCOS & Hormonal Care',
      'Gynaecological Surgeries',
      'Family Planning'
    ]
  },
  {
    id: 'pulmonology',
    name: 'Respiratory & Chest Care',
    num: '02',
    doctor: 'Prof. (Dr.) Mohan Bandhu Gupta',
    role: 'Chest Physician & Pulmonologist (MD, FCCS)',
    image: '/doctor-bandhu.jpg',
    consultationImage: '/chest-consultation.jpg',
    badgeTitle: 'ADVANCED PULMONARY MEDICINE',
    badgeSubtitle: 'Computerized PFT, Asthma Relief & Critical Chest Care',
    description: 'Prof. (Dr.) Mohan Bandhu offers comprehensive lung care including computerized PFT (spirometry), bronchoscopy, allergy testing, chronic asthma/COPD management, and ICU support.',
    cardTitle: 'Expert pulmonary diagnostics, asthma relief & critical respiratory care.',
    cardDesc: 'Over two decades of clinical leadership in diagnosing chronic cough, allergies, bronchitis, tuberculosis (DOTS), and life-threatening critical respiratory conditions.',
    tags: [
      'Computerized PFT (Spirometry)',
      'Asthma & Allergy Care',
      'COPD & Bronchitis',
      'Diagnostic Bronchoscopy',
      'Tuberculosis (TB / DOTS)',
      'ICU & Ventilator Support',
      'Post-COVID Lung Care'
    ]
  }
]

const impactList = [
  {
    value: '20+',
    label: 'Years of Clinical Excellence',
    desc: 'Serving Ghaziabad and Delhi-NCR with dedicated respiratory and women’s care since 2003.',
  },
  {
    value: '10K+',
    label: 'Patients Successfully Treated',
    desc: 'Trusted by families across Patel Nagar and surrounding NCR communities.',
  },
  {
    value: '24×7',
    label: 'Emergency Helpline',
    desc: 'Round-the-clock medical assistance for critical respiratory and maternity emergencies.',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeSpecialtyIndex, setActiveSpecialtyIndex] = useState(0)
  const [activeImpactIndex, setActiveImpactIndex] = useState(0)

  // Auto slide rotation every 6 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="min-h-screen bg-white text-gray-700">
      
      {/* 1. FUNCTIONAL HERO SLIDESHOW */}
      <section 
        className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#10485e]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide Backgrounds with smooth cross-fade and subtle zoom */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center lg:bg-[right_center] xl:bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 -z-10'
              }`}
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              {/* Gradient Overlays for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2f3d]/90 via-[#10485e]/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e3c4e]/75 via-transparent to-slate-900/20" />
            </div>
          )
        })}

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 w-full flex flex-col justify-between min-h-[92vh] lg:min-h-[96vh]">
          
          {/* Active Slide Content */}
          <div className="max-w-2xl mt-4 sm:mt-8">
            {/* Social Proof: Avatars & Tag */}
            <div 
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-sm animate-hero-blur-1 max-w-full"
            >
              <div className="flex -space-x-2 shrink-0">
                <img
                  className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover object-top"
                  src="/doctor-bandhu.jpg"
                  alt="Prof. Dr. Mohan Bandhu"
                />
                <img
                  className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover object-top"
                  src="/doctor-2.jpeg"
                  alt="Dr. Shubhra Gupta"
                />
                <img
                  className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Verified Patient"
                />
              </div>
              <span className="text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide truncate">
                {slides[currentSlide].tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              key={`headline-${currentSlide}`}
              className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.08] mb-6 sm:mb-8 min-h-[110px] sm:min-h-[160px] lg:min-h-[190px] flex items-center animate-hero-blur-2"
            >
              {slides[currentSlide].headline}
            </h1>

            {/* Explore Services Pill Button */}
            <div 
              key={`cta-${currentSlide}`}
              className="mb-8 sm:mb-10 animate-hero-blur-3"
            >
              <Link
                href={slides[currentSlide].btnHref}
                className="group inline-flex items-center gap-3 sm:gap-4 bg-white text-slate-900 hover:bg-slate-50 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                <span>{slides[currentSlide].btnText}</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#187597] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Row: Bottom-Left Narrative & Bottom-Right Glass Cards */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 pt-4 sm:pt-6 mt-auto">
            
            {/* Bottom Left: Feature Narrative */}
            <div 
              key={`sub-${currentSlide}`}
              className="max-w-md text-white min-h-[70px] sm:min-h-[85px] animate-hero-blur-4"
            >
              <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-1.5 tracking-tight">
                {slides[currentSlide].subTitle}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
                {slides[currentSlide].subDesc}
              </p>
            </div>

            {/* Bottom Right: 2 Frosted Glass Widget Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
              
              {/* Card 1: Metric / Care Rate */}
              <div 
                key={`stat-${currentSlide}`}
                className="bg-white/20 backdrop-blur-xl border border-white/35 rounded-3xl p-5 sm:p-6 shadow-2xl text-white w-full sm:max-w-[260px] min-h-[140px] sm:min-h-[155px] animate-hero-blur-4"
              >
                <div className="text-xs sm:text-sm font-medium text-white/90 mb-1 sm:mb-1.5">
                  {slides[currentSlide].statLabel}
                </div>
                <div className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-1 sm:mb-1.5">
                  {slides[currentSlide].statValue}
                </div>
                <div className="text-[11px] sm:text-xs text-white/85 leading-relaxed font-normal">
                  {slides[currentSlide].statDesc}
                </div>
              </div>

              {/* Card 2: Interactive Pill Matrix */}
              <div 
                key={`pills-${currentSlide}`}
                className="bg-white/20 backdrop-blur-xl border border-white/35 rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col gap-2 sm:gap-2.5 w-full sm:min-w-[210px] animate-hero-blur-5"
              >
                {/* Row 1 */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white text-xs">
                    <CloseIcon className="w-3.5 h-3.5 stroke-[1.75]" />
                  </div>
                  <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/40 bg-white/10 text-white text-xs font-medium tracking-wide">
                    {slides[currentSlide].pill1}
                  </div>
                </div>

                {/* Row 2 (Active Highlight Pill) */}
                <div className="flex items-center gap-2">
                  <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-[#187597] text-xs font-bold shadow-md tracking-wide">
                    {slides[currentSlide].pill2}
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white text-xs">
                    <CloseIcon className="w-3.5 h-3.5 stroke-[1.75]" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white text-xs">
                    <CloseIcon className="w-3.5 h-3.5 stroke-[1.75]" />
                  </div>
                  <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/40 bg-white/10 text-white text-xs font-medium tracking-wide">
                    {slides[currentSlide].pill3}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Interactive Slideshow Controls: Indicators & Prev/Next Arrows */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            {/* Left Prev Arrow Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Clickable Slide Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, idx) => {
                const isActive = idx === currentSlide
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'w-20 sm:w-28 bg-white shadow-md'
                        : 'w-8 sm:w-12 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                )
              })}
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. EMPOWERED BY COMPASSION / ENHANCING HEALTH THROUGH CARE */}
      <section id="empowered-by-compassion" className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden scroll-mt-20">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#187597]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Top Row: Heading (Left) & Narrative (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <BlurReveal delay={0} yOffset={24} className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#187597] uppercase flex items-center gap-1.5 mb-3">
                <span className="text-sm">+</span> EMPOWERED BY COMPASSION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight leading-[1.15]">
                Enhancing health<br className="hidden sm:inline" /> through care
              </h2>
            </BlurReveal>

            <BlurReveal delay={150} yOffset={24} className="lg:col-span-6 space-y-4 text-slate-500 text-[15px] sm:text-base leading-relaxed">
              <p>
                At Raghuram Medicare, we are committed to providing exceptional healthcare that prioritizes patient well-being. Our experienced team works collaboratively to create personalized treatment plans that cater to individual needs.
              </p>
              <p>
                Empowering you with expert care and personalized support to take control of your well-being every step of the way.
              </p>
            </BlurReveal>
          </div>

          {/* Bottom Row: 4 Feature Items with Medical Teal Line Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-16 mt-16 border-t border-gray-100">
            {/* 1. Medical Consult */}
            <BlurReveal delay={100} yOffset={30}>
              <div className="space-y-3.5 group">
                <div className="w-10 h-10 text-[#187597] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a3 3 0 0 1 0 6M22 10a5 5 0 0 1 0 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">
                  Medical consult
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Expert medical advice tailored to your needs by senior clinical specialists.
                </p>
              </div>
            </BlurReveal>

            {/* 2. Medical Records */}
            <BlurReveal delay={220} yOffset={30}>
              <div className="space-y-3.5 group">
                <div className="w-10 h-10 text-[#187597] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6M9 18h4" />
                    <circle cx="16" cy="18" r="2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">
                  Medical records
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Secure and seamless access to your diagnostic reports and health data anytime.
                </p>
              </div>
            </BlurReveal>

            {/* 3. Emergency Help */}
            <BlurReveal delay={340} yOffset={30}>
              <div className="space-y-3.5 group">
                <div className="w-10 h-10 text-[#187597] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17V8a2 2 0 0 1 2-2h10l4 4v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h4M11 8v4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">
                  Emergency help
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Fast and reliable 24×7 support in urgent and critical medical situations.
                </p>
              </div>
            </BlurReveal>

            {/* 4. Pharmacy Care */}
            <BlurReveal delay={460} yOffset={30}>
              <div className="space-y-3.5 group">
                <div className="w-10 h-10 text-[#187597] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
                    <rect x="6" y="7" width="12" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v4H9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 13h4M12 11v4" />
                    <circle cx="18" cy="18" r="1.5" />
                    <circle cx="16" cy="20" r="1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">
                  Pharmacy care
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Easy and reliable access to essential medications, prescriptions, and supplies.
                </p>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US & CLINIC IMPACT */}
      <section id="about" className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden border-t border-gray-100 scroll-mt-20">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Tag */}
          <BlurReveal delay={0} yOffset={20} className="mb-6">
            <span className="text-[#187597] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
              <span className="text-sm">+</span> ABOUT RAGHURAM MEDICARE
            </span>
          </BlurReveal>

          {/* Top Grid: Dr. Mohan Bandhu Avatar + Main Statement */}
          <BlurReveal delay={100} yOffset={28} className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10 mb-16 lg:mb-20">
            {/* Dr. Mohan Bandhu Portrait Thumbnail */}
            <div className="flex-shrink-0 w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shadow-md bg-slate-100 border-2 border-white">
              <img
                src="/doctor-bandhu.jpg"
                alt="Prof. (Dr.) Mohan Bandhu Gupta - Chest Specialist"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Narrative Headline */}
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#1e293b] leading-[1.3] tracking-tight">
                Established in 2003, Raghuram Medicare is Ghaziabad&apos;s trusted center for specialized Chest &amp; Respiratory Medicine and Women&apos;s Health, providing ethical, senior consultant-led care.
              </h2>
            </div>
          </BlurReveal>

          {/* Bottom Grid: Impact Metric (Left) & 2 Modern Feature Cards (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Column: Our Impact with Interactive Toggle */}
            <BlurReveal delay={200} yOffset={28} className="lg:col-span-4 space-y-6">
              {/* Pill & Arrow Navigation Buttons */}
              <div className="flex items-center gap-3">
                <span className="px-5 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wide">
                  Our Impact
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveImpactIndex((prev) => (prev - 1 + impactList.length) % impactList.length)}
                    aria-label="Previous metric"
                    className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImpactIndex((prev) => (prev + 1) % impactList.length)}
                    aria-label="Next metric"
                    className="w-9 h-9 rounded-full bg-[#187597] text-white flex items-center justify-center hover:bg-[#14607c] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Big Stat */}
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-[#187597] tracking-tight mb-2">
                  {impactList[activeImpactIndex].value}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-snug max-w-[260px]">
                  {impactList[activeImpactIndex].desc}
                </p>
              </div>
            </BlurReveal>

            {/* Right Column: 2 Modern Specialty Feature Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              
              {/* Card 1: Chest & Respiratory Care */}
              <BlurReveal delay={250} yOffset={32}>
                <div className="bg-[#f2f8fa] border border-[#e2eff4] rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#187597] text-white flex items-center justify-center shadow-xs">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white text-slate-700 text-xs font-semibold shadow-2xs">
                      Dr. Mohan Bandhu
                    </span>
                  </div>

                  {/* Content Block */}
                  <div>
                    <h3 className="text-lg font-bold text-[#187597] mb-3">
                      Chest &amp; Respiratory Care
                    </h3>
                    <div className="bg-white rounded-2xl p-4 shadow-2xs text-slate-600 text-xs sm:text-sm leading-relaxed">
                      State-of-the-art Computerized PFT, Allergy Testing, Bronchoscopy, and expert management for Asthma, COPD, and Tuberculosis.
                    </div>
                  </div>
                </div>
              </BlurReveal>

              {/* Card 2: Gynaecology & Safe Motherhood */}
              <BlurReveal delay={350} yOffset={32}>
                <div className="bg-[#f2f8fa] border border-[#e2eff4] rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#187597] text-white flex items-center justify-center shadow-xs">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white text-slate-700 text-xs font-semibold shadow-2xs">
                      Dr. Shubhra Gupta
                    </span>
                  </div>

                  {/* Content Block */}
                  <div>
                    <h3 className="text-lg font-bold text-[#187597] mb-3">
                      Maternity &amp; Women&apos;s Health
                    </h3>
                    <div className="bg-white rounded-2xl p-4 shadow-2xs text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Comprehensive women&apos;s care, high-risk pregnancy monitoring, safe delivery, and dedicated Infertility (Baanjhpan) treatment.
                    </div>
                  </div>
                </div>
              </BlurReveal>

            </div>

          </div>

        </div>
      </section>

      {/* 4. CLINICAL SPECIALTIES: GYNAECOLOGY & RESPIRATORY CHEST CARE */}
      <section id="specialties" className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-100 overflow-hidden scroll-mt-20">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#187597]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          
          {/* Top Header Row */}
          <BlurReveal delay={0} yOffset={24} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="text-[#187597] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                + CLINICAL SPECIALTIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
                Gynaecology Services &amp;<br />
                Respiratory Chest Care
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-md">
              Led by Senior Consultants Prof. (Dr.) Mohan Bandhu and Dr. Shubhra Gupta, offering patient-centered clinical expertise, advanced diagnostics, and compassionate treatment in Ghaziabad.
            </p>
          </BlurReveal>

          {/* Main 3-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Specialties List with Interactive Selection */}
            <BlurReveal delay={120} yOffset={32} className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 border-b border-gray-100 mb-2">
                  <span>Specialties List</span>
                  <span>{String(activeSpecialtyIndex + 1).padStart(2, '0')}/02</span>
                </div>

                <div className="space-y-1">
                  {specialtiesList.map((spec, idx) => {
                    const isActive = idx === activeSpecialtyIndex
                    return (
                      <div
                        key={spec.name}
                        onClick={() => setActiveSpecialtyIndex(idx)}
                        className={`relative py-4 border-b border-gray-100 transition-all cursor-pointer flex items-center justify-between group ${
                          isActive
                            ? 'text-[#187597] font-bold text-xl sm:text-2xl'
                            : 'text-slate-400 hover:text-slate-600 font-medium text-lg sm:text-xl'
                        }`}
                      >
                        <span className="pr-4">{spec.name}</span>

                        {/* Floating Doctor Thumbnail Preview for Active Item */}
                        {isActive && (
                          <div className="absolute right-0 -top-6 sm:-top-8 w-20 h-26 sm:w-24 sm:h-30 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 transform rotate-3 z-10 transition-all duration-300">
                            <img
                              src={spec.image}
                              alt={spec.doctor}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-[#0e3c4e]/90 backdrop-blur-xs text-[9px] text-white text-center py-0.5 font-bold tracking-tight truncate px-1">
                              {spec.doctor}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Active Specialty Quick Description */}
                <div className="mt-5 p-4 rounded-2xl bg-[#f2f8fa] border border-[#e2eff4] text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-[#187597] block mb-1">
                    {specialtiesList[activeSpecialtyIndex].role}
                  </span>
                  {specialtiesList[activeSpecialtyIndex].description}
                </div>
              </div>

              {/* Book Consultation Pill Button */}
              <div className="pt-6">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-3 bg-[#187597] hover:bg-[#14607c] text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Book Consultation</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#187597] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </BlurReveal>

            {/* Middle Column: Doctor Consultation Photo */}
            <BlurReveal delay={240} yOffset={32} className="lg:col-span-4">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[3/4] h-full min-h-[460px] bg-slate-100">
                <img
                  key={specialtiesList[activeSpecialtyIndex].id}
                  src={specialtiesList[activeSpecialtyIndex].consultationImage}
                  alt={specialtiesList[activeSpecialtyIndex].name}
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white">
                  <div className="text-[11px] uppercase tracking-widest text-[#38bdf8] font-bold mb-1">
                    {specialtiesList[activeSpecialtyIndex].badgeTitle}
                  </div>
                  <div className="text-sm sm:text-base font-semibold leading-snug">
                    {specialtiesList[activeSpecialtyIndex].badgeSubtitle}
                  </div>
                </div>
              </div>
            </BlurReveal>

            {/* Right Column: Cyan Feature Card with Quote & Dynamic Specialty Tags */}
            <BlurReveal delay={360} yOffset={32} className="lg:col-span-4 bg-[#3891af] text-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[460px]">
              <div>
                <h3 className="text-2xl sm:text-[26px] font-bold leading-snug tracking-tight text-white mb-4">
                  {specialtiesList[activeSpecialtyIndex].cardTitle}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  {specialtiesList[activeSpecialtyIndex].cardDesc}
                </p>
              </div>

              {/* Dynamic Tag Cloud Bubbles for Active Specialty */}
              <div className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {specialtiesList[activeSpecialtyIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-xs text-xs font-medium text-white shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BlurReveal>

          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS / REAL STORIES, REAL HEALING */}
      <section id="testimonials" className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-100 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#187597]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <BlurReveal delay={0} yOffset={24} className="text-center mb-16 lg:mb-20">
            <span className="text-[#187597] text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-1.5 mb-3">
              <span className="text-sm">+</span> TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-4">
              Real Stories, Real Healing — From<br className="hidden sm:inline" /> Our Community
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Serving Patel Nagar, Ghaziabad, and Delhi-NCR with ethical, senior consultant-led medical care since 2003.
            </p>
          </BlurReveal>

          {/* 3-Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: Gynaecology & Maternity Review (Dr. Shubhra Gupta) */}
            <BlurReveal delay={100} yOffset={32}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[380px] h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <img
                      src="/doctor-2.jpeg"
                      alt="Dr. Shubhra Gupta"
                      className="w-8 h-8 rounded-full object-cover object-top border border-[#187597]/30"
                    />
                    <span className="text-[11px] font-bold text-[#187597] uppercase tracking-wider bg-[#f2f8fa] px-2.5 py-1 rounded-full">
                      Dr. Shubhra Gupta
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                    Compassionate Maternity &amp; Gynaecology Care
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    &ldquo;Dr. Shubhra Gupta is an awesome gynecologist. I had a very good experience and she was really helpful and compassionate throughout my treatment. Just go by her words and have faith — you will definitely get results.&rdquo;
                  </p>
                </div>

                {/* Card 1 Bottom: Avatar + Name + Socials */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#187597] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      DN
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">Deepa Negi</h4>
                      <span className="text-xs text-slate-400 font-medium">Verified Patient, Ghaziabad</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
            </BlurReveal>

            {/* Card 2: Featured Photo Card (Prof. Dr. Mohan Bandhu) */}
            <BlurReveal delay={220} yOffset={32}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[380px] h-full bg-slate-900 flex flex-col justify-end group">
                <img
                  src="/hero-slide-2.jpg"
                  alt="Prof. (Dr.) Mohan Bandhu Gupta - Pulmonology Consultation"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3c4e]/95 via-[#0e3c4e]/60 to-transparent" />

                {/* Card 2 Bottom Details */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end text-white space-y-2.5">
                  <div className="inline-flex items-center gap-2 bg-[#38bdf8]/20 backdrop-blur-md border border-[#38bdf8]/40 text-[#38bdf8] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit">
                    Lead Pulmonologist
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    Prof. (Dr.) Mohan Bandhu Gupta
                  </h4>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    &ldquo;The doctor was really nice, attentive, and highly knowledgeable. I strongly recommend Raghuram Medicare for any respiratory, chest, or allergy-related issues.&rdquo;
                  </p>
                  <div className="text-[11px] text-[#38bdf8] font-semibold pt-1">
                    — Rounak Gupta, Respiratory Patient
                  </div>
                </div>
              </div>
            </BlurReveal>

            {/* Card 3: Overall Hospital & Doctor Excellence (Parth Mukul Gupta) */}
            <BlurReveal delay={340} yOffset={32}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[380px] h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <img
                      src="/doctor-bandhu.jpg"
                      alt="Prof. Dr. Mohan Bandhu"
                      className="w-8 h-8 rounded-full object-cover object-top border border-[#187597]/30"
                    />
                    <span className="text-[11px] font-bold text-[#187597] uppercase tracking-wider bg-[#f2f8fa] px-2.5 py-1 rounded-full">
                      Clinical Excellence
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                    Lifesaving Medical Dedication
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    &ldquo;The doctors at Raghuram Medicare are true lifesavers who work tirelessly for their patients. Their clinical precision and empathetic nature make this hospital the most trusted healthcare center in Patel Nagar.&rdquo;
                  </p>
                </div>

                {/* Card 3 Bottom: Avatar + Name + Socials */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#187597] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      PG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">Parth Mukul Gupta</h4>
                      <span className="text-xs text-slate-400 font-medium">Verified Patient, Ghaziabad</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
            </BlurReveal>

          </div>
        </div>
      </section>

      {/* 6. BLOG / EXPLORE EXPERT INSIGHTS */}
      <section id="blog" className="relative py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-100 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#187597]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <BlurReveal delay={0} yOffset={24} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="text-[#187597] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                + BLOG
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
                Explore Expert Insights for a<br className="hidden sm:inline" /> Healthier, Happier Life
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-md">
              Discover expert health insights, wellness advice, and medical updates to help you make informed decisions and live a healthier life every day.
            </p>
          </BlurReveal>

          {/* 3-Column Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            
            {/* Post 1 */}
            <BlurReveal delay={100} yOffset={32}>
              <div className="flex flex-col justify-between group h-full">
                <div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full mb-6 bg-slate-100 shadow-xs">
                    <img
                      src="/blog-1.jpg"
                      alt="5 Daily Habits for a Healthier Heart"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#187597] leading-snug tracking-tight mb-3 group-hover:underline cursor-pointer">
                    5 Daily Habits for a Healthier Heart you deserve.
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                    Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.
                  </p>
                </div>

                {/* Bottom Read More & Date */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 border border-slate-200 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold text-[#187597] hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Read More</span>
                    <span className="w-6 h-6 rounded-full bg-[#187597] text-white flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <span className="text-xs text-slate-400 font-medium">Jan 25, 2025</span>
                </div>
              </div>
            </BlurReveal>

            {/* Post 2 */}
            <BlurReveal delay={220} yOffset={32}>
              <div className="flex flex-col justify-between group h-full">
                <div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full mb-6 bg-slate-100 shadow-xs">
                    <img
                      src="/blog-2.jpg"
                      alt="Top Benefits of Regular Health Checkups"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#187597] leading-snug tracking-tight mb-3 group-hover:underline cursor-pointer">
                    Top Benefits of Regular Health Checkups.
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                    Discover how routine health checkups help detect issues early, prevent serious diseases, and promote long-term physical and mental wellness.
                  </p>
                </div>

                {/* Bottom Read More & Date */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#187597] hover:gap-3 transition-all"
                  >
                    <span>Read More</span>
                    <span className="w-7 h-7 rounded-full border border-[#187597] flex items-center justify-center text-[#187597]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <span className="text-xs text-slate-400 font-medium">Jan 25, 2025</span>
                </div>
              </div>
            </BlurReveal>

            {/* Post 3 */}
            <BlurReveal delay={340} yOffset={32}>
              <div className="flex flex-col justify-between group h-full">
                <div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full mb-6 bg-slate-100 shadow-xs">
                    <img
                      src="/blog-3.jpg"
                      alt="The Link Between Stress & Physical Health"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#187597] leading-snug tracking-tight mb-3 group-hover:underline cursor-pointer">
                    The Link Between Stress & Physical Health.
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                    Understand how unmanaged stress affects your body and why regular health checkups are vital for early detection and prevention.
                  </p>
                </div>

                {/* Bottom Read More & Date */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#187597] hover:gap-3 transition-all"
                  >
                    <span>Read More</span>
                    <span className="w-7 h-7 rounded-full border border-[#187597] flex items-center justify-center text-[#187597]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <span className="text-xs text-slate-400 font-medium">Jan 25, 2025</span>
                </div>
              </div>
            </BlurReveal>

          </div>

        </div>
      </section>
    </div>
  )
}