"use client"

import { doctors } from '@/lib/data'

export default function DoctorsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* HERO */}
            <div className="pt-40 pb-20 bg-gray-900 px-6 lg:px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-red-400 text-[10px] font-bold tracking-[0.25em] uppercase">Our Specialists</span>
                    </div>
                    <h1 className="font-(family-name:--font-playfair) text-4xl md:text-6xl font-medium text-white mb-6">
                        Excellence in <span className="text-red-500">Medical Leadership</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Meet our highly qualified team of specialists dedicated to providing world-class respiratory, critical, and women&apos;s healthcare.
                    </p>
                </div>
            </div>

            {/* DOCTOR DIRECTORY */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    {doctors.map((doc) => (
                        <div key={doc.id} className="bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row group hover:shadow-xl hover:border-red-200 transition-all duration-300 rounded-2xl overflow-hidden">
                            <div className="w-full md:w-2/5 aspect-4/5 md:aspect-auto overflow-hidden relative">
                                <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-500" />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60 md:hidden" />
                            </div>
                            <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center bg-white relative">
                                <div className="text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{doc.designation}</div>
                                <h2 className="font-(family-name:--font-playfair) text-3xl text-gray-900 font-medium mb-2">{doc.name}</h2>
                                <p className="text-gray-500 text-sm mb-6">{doc.qualifications}</p>

                                <div className="space-y-4 mb-8 text-sm text-gray-600">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                                        <span>{doc.experience}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                                        <span>Consultation Hours: {(doc as any).timings}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                                        <span>{doc.affiliations[0]}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                                        <span>Direct Contact: {doc.phone}</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <a href={`tel:${doc.phone.replace(/[^0-9+]/g, '')}`} className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 shadow-sm shadow-red-600/20 hover:shadow-md">Book Consultation</a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder */}
                    <div className="bg-gray-100 border border-gray-200/50 border-dashed flex items-center justify-center min-h-[400px] text-center p-10 rounded-2xl">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center text-gray-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            </div>
                            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-gray-500 mb-2">Expanding Our Team</h3>
                            <p className="text-gray-400 text-sm">We are constantly evaluating top medical talent to join our centers of excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
