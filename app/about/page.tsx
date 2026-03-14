import Link from "next/link";
import { doctors } from "@/lib/data";

export const metadata = {
  title: "About Us | Raghuram Medicare, Ghaziabad",
  description:
    "Learn about Raghuram Medicare, a trusted multispecialty clinic and hospital in Patel Nagar, Ghaziabad. Led by Dr. Mohan Bandhu Gupta and Dr. Shubhra Gupta.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700 pt-24">
      {/* HERO */}
      <section className="relative bg-gray-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-[10px] font-bold tracking-[0.2em] uppercase">Who We Are</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl font-medium text-white mb-6 leading-tight">
            About <span className="text-red-500">Raghuram Medicare</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Two decades of trust, expertise, and healing — rooted in Ghaziabad, reaching for excellence in multispecialty care.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-red-600" />
                <span className="text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase">Our Foundation</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-gray-900 mb-8">
                About <span className="text-red-600">Raghuram Medicare</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Raghuram Medicare is a well-established multispecialty clinic and hospital in Patel Nagar, Ghaziabad — a trusted name in the community for quality medical care. We offer a comprehensive range of services spanning chest & respiratory medicine, gynaecology & obstetrics, pathology diagnostics, infertility treatment, and advanced procedures such as bronchoscopy and pulmonary function testing.
                </p>
                <p>
                  Our facility is led by two senior specialists — Dr. Mohan Bandhu Gupta, a highly respected Chest Physician & Pulmonologist, and Dr. Shubhra Gupta, an experienced Gynaecologist & Obstetrician. Together, they bring decades of academic training and hands-on clinical expertise from some of India&apos;s most prestigious institutions.
                </p>
                <p>
                  At Raghuram Medicare, we believe that every patient deserves timely, accurate diagnosis and personalised treatment in a warm and supportive environment. Whether it is a routine consultation, a diagnostic investigation, or a surgical procedure, our team is here to guide you every step of the way.
                </p>
              </div>
            </div>

            {/* WHY PATIENTS TRUST US */}
            <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-2xl shadow-sm">
               <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-medium mb-6 text-gray-900">Why Patients Trust Us</h3>
               <div className="space-y-5">
                 {[
                   "Experienced specialists with credentials from national medical institutions",
                   "In-house pathology and diagnostics — results without the wait",
                   "Affordable, patient-first treatment philosophy",
                   "Safe surgical and procedural services under expert supervision",
                   "Emergency support available on call, 24×7"
                 ].map((reason, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                       <div className="w-2 h-2 rounded-full bg-red-600" />
                     </div>
                     <p className="text-gray-600 leading-relaxed">{reason}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase">Medical Directors</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-gray-900">
              Meet Our <span className="text-red-600">Specialists</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {doctors.map(doc => (
              <div key={doc.id} className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden shadow-md relative">
                  <img 
                    src={doc.photo} 
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-gray-900 mb-2">{doc.name}</h3>
                  <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-4">{doc.qualifications}</p>
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-6 text-sm">
                    {doc.bio.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doc.expertise.slice(0, 4).map((a) => (
                      <span key={a} className="bg-white border border-gray-200 text-gray-500 text-[10px] uppercase tracking-wide px-3 py-1.5 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            Experience the <span className="text-red-600">Raghuram Medicare</span> Difference
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Schedule your consultation with our specialists and take the first step toward better health.
          </p>
          <Link href="/appointment" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg shadow-lg shadow-red-600/20">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
