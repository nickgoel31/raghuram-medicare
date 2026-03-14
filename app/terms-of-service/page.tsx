'use client'

import { clinic } from '@/lib/data'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-[1.1]">
            Terms of <span className="text-red-500">Service</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg mx-auto">
            General terms and guidelines for patients visiting Raghuram Medicare.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-red max-w-none space-y-8">
            <p className="text-sm text-gray-400">Effective Date: March 14, 2026</p>
            
            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing the facilities of Raghuram Medicare or using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">2. Medical Disclaimer</h2>
              <p className="leading-relaxed text-red-600 font-medium italic">Important: Information provided on this website is for educational purposes only and does not constitute medical advice. For any health concerns, please consult a qualified medical professional.</p>
              <p className="mt-4 leading-relaxed">In case of a life-threatening emergency, please call local emergency services immediately or proceed to the nearest emergency room.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">3. Appointments & Cancellations</h2>
              <p className="leading-relaxed">Appointments are subject to doctor availability. While we strive to maintain timings, medical emergencies may cause delays. We request patients to provide at least 24 hours notice for cancellations.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">4. Patient Conduct</h2>
              <p className="leading-relaxed">We maintain a zero-tolerance policy towards any form of harassment, verbal abuse, or violence directed at our staff or other patients. Such behavior may result in immediate refusal of service.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">5. Billing & Payments</h2>
              <p className="leading-relaxed">Payment for consultations and diagnostic services is due at the time of service. We accept various payment modes. For insurance claims, patients are responsible for verifying their coverage with their respective TPAs/insurers.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="leading-relaxed">Raghuram Medicare reserves the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of the new terms.</p>
            </section>

            <div className="mt-12 p-8 bg-red-50 border border-red-100 rounded-xl text-center">
              <p className="text-gray-700 mb-4 italic">&quot;Your health and safety are our top priorities.&quot;</p>
              <p className="font-bold text-gray-900">{clinic.name} Administration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
