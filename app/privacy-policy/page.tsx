'use client'

import { clinic } from '@/lib/data'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-[1.1]">
            Privacy <span className="text-red-500">Policy</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg mx-auto">
            How we protect and manage your personal and medical information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-2xl shadow-sm border border-gray-100">
          <div className="prose prose-red max-w-none space-y-8">
            <p className="text-sm text-gray-400">Last Updated: March 14, 2026</p>
            
            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">At Raghuram Medicare, we are committed to protecting the privacy and confidentiality of our patients&apos; personal and medical information. This Privacy Policy describes how we collect, use, and safeguard your data when you visit our facility or use our website.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">2. Information Collection</h2>
              <p className="leading-relaxed">We collect information provided by you during registration, appointment booking, and clinical consultations. This may include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Personal identifiers (Name, Age, Gender, Contact Details)</li>
                <li>Medical history and clinical notes</li>
                <li>Diagnostic reports and imaging</li>
                <li>Financial and insurance information for billing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">3. Use of Information</h2>
              <p className="leading-relaxed">Your information is used solely for medical diagnosis, treatment planning, billing, and clinical communication. We do not sell or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">4. Data Security</h2>
              <p className="leading-relaxed">We implement appropriate technical and organizational measures to secure your digital and physical records. Access to medical data is restricted to authorized clinical and administrative staff only.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">You have the right to access your medical records, request corrections to your personal information, and receive a copy of your diagnostic reports as per hospital policy.</p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions regarding this policy or your data privacy, please contact us at:</p>
              <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900">{clinic.name}</p>
                <p>{clinic.address}</p>
                <p>Email: {clinic.email}</p>
                <p>Phone: {clinic.phoneDisplay}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
