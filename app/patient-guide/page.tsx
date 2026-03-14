"use client"

export default function PatientGuidePage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* HERO */}
            <div className="pt-40 pb-20 bg-gray-900 px-6 lg:px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/8 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Essential Information</span>
                    </div>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium text-white mb-6">
                        Patient <span className="text-red-500">Guide</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Everything you need to know before visiting our facility, from admissions to insurance coverage.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-10 mt-20">
                <div className="space-y-8">
                    <div className="bg-white p-10 border border-gray-100 shadow-sm rounded-2xl">
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Consultation Process</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                            <p><strong className="text-gray-800">1. Appointment Booking:</strong> We highly recommend booking an appointment prior to your visit to minimize wait times. Emergency cases are prioritized upon arrival.</p>
                            <p><strong className="text-gray-800">2. Initial Assessment:</strong> Upon arrival, our nursing staff will record your vital signs (SPO2, BP, Temp) and take a brief medical history.</p>
                            <p><strong className="text-gray-800">3. Specialist Consultation:</strong> The doctor will conduct a thorough hospital examination. Please bring all previous medical records, X-Rays, and current medications.</p>
                        </div>
                    </div>

                    <div className="bg-white p-10 border border-gray-100 shadow-sm rounded-2xl">
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Insurance & TPA</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                            <p>For inpatient procedures and critical care admissions at our affiliated hospitals (Yashoda Hospital / Sharda Hospital), cashless hospitalization is available via major TPAs.</p>
                            <p>OPD consultations at Raghuram Medicare are generally out-of-pocket, but we provide all necessary official receipts and prescriptions for you to claim OPD reimbursements if your policy allows.</p>
                        </div>
                    </div>

                    <div className="bg-white p-10 border border-gray-100 shadow-sm rounded-2xl">
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Diagnostic Preparation</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                            <p><strong className="text-gray-800">Pulmonary Function Test (PFT):</strong> Please do not use your rescue inhaler (salbutamol/levosalbutamol) for at least 6 hours before the test unless absolutely necessary.</p>
                            <p><strong className="text-gray-800">Bronchoscopy:</strong> Requires explicit fasting for 6-8 hours prior to the procedure. Detailed instructions will be provided upon booking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
