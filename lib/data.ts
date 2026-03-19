// lib/data.ts — Real data for Raghuram Medicare, Ghaziabad

export const hospital = {
    name: 'Raghuram Medicare',
    tagline: 'Expert Chest, Gynaecology & Multi-Speciality Care in Ghaziabad',
    address: 'G-156, Patel Nagar 3rd, Ghaziabad, Uttar Pradesh – 201002',
    addressShort: 'G-156, Patel Nagar 3rd, Ghaziabad',
    phone: '+91-8810242132',
    phoneDisplay: '+91 8810242132',
    email: 'drbandhumohan@gmail.com',
    hours: {
        weekdays: 'Tue – Sun: 10:00 AM – 8:00 PM',
        saturday: 'Monday: Closed',
        sunday: 'Emergency: Available 24×7 on +91 8810242132',
    },
    googleMapsUrl: 'https://maps.google.com/?q=G-156+Patel+Nagar+II+Ghaziabad',
    established: 2003,
}

export const doctors = [
    {
        id: 'dr-mohan-bandhu',
        name: 'Dr. Mohan Bandhu Gupta',
        shortName: 'Dr. M. Bandhu Gupta',
        designation: 'Chest Physician & Pulmonologist',
        qualifications: 'MBBS, MD (Respiratory Medicine), FCCS',
        registration: '8222',
        phone: '+91 9810747464',
        experience: 'Chest Physician',
        timings: '10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM',
        photo: 'https://www.shardahospital.org/uploads/doctor/doc_mohan-bandhu-gupta1.jpg',
        bio: [
            'Dr. Mohan Bandhu Gupta is one of the most respected and experienced Chest Physicians in the Delhi-NCR region, with over two decades of dedicated service in respiratory medicine and pulmonology.',
            'He holds an MBBS and an MD in Respiratory Medicine, along with a prestigious Fellowship in Fundamentals of Critical Care Support (FCCS) — a globally recognised qualification in critical care medicine.',
            'As a Professor affiliated with Sharda Medical College and Santosh Medical College, Ghaziabad, Dr. Gupta has mentored generations of doctors and continues to combine the sharpness of academic medicine with rich clinical practice. He is a trained and experienced Bronchoscopist and an expert in managing patients on mechanical ventilators and in the ICU.',
        ],
        qualificationsList: [
            { degree: 'MBBS', institution: 'Recognised Medical University' },
            { degree: 'MD', institution: 'Respiratory Medicine' },
            { degree: 'FCCS', institution: 'Fellowship – Fundamentals of Critical Care Support' },
        ],
        affiliations: [
            'Professor',
            'Sharda Medical College, Ghaziabad',
            'Santosh Medical College, Ghaziabad',
        ],
        expertise: [
            'Asthma & COPD',
            'Tuberculosis (TB), Pneumonia & Chest Infections',
            'Allergic Bronchitis & Respiratory Allergies',
            'Interstitial Lung Disease & Sleep Apnoea',
            'Lung Cancer — Diagnosis & Management',
            'Pulmonary Function Testing (PFT)',
            'Bronchoscopy',
            'ICU & Mechanical Ventilator Management'
        ],
    },
    {
        id: 'dr-shubhra-gupta',
        name: 'Dr. Shubhra Gupta',
        shortName: 'Dr. S. Gupta',
        designation: 'Gynaecologist',
        qualifications: 'MBBS, DGO (KGMC), DMCH (DELHI)',
        registration: '039545',
        phone: '+91 9810747454',
        experience: 'Gynaecologist',
        timings: '10:00 AM – 1:00 PM & 6:30 PM – 7:30 PM',
        photo: '/doctor-2.jpeg',
        bio: [
            'Dr. Shubhra Gupta is a highly qualified and experienced Gynaecologist and Obstetrician. She completed her MBBS followed by a Diploma in Gynaecology & Obstetrics (DGO) from the prestigious King George\'s Medical University (KGMC), Lucknow, and further specialised with a DMCH from Delhi.',
            'Dr. Gupta is known for her gentle, empathetic approach and her commitment to safe motherhood and women\'s reproductive health. She manages everything from routine women\'s health consultations to high-risk pregnancies, surgical procedures, and infertility treatment.',
            'Her patients appreciate her clear communication, compassionate care, and meticulous clinical practice, whether they are first-time mothers or women dealing with complex gynaecological conditions.',
        ],
        qualificationsList: [
            { degree: 'MBBS', institution: 'Recognised Medical University' },
            { degree: 'DGO', institution: 'King George\'s Medical University (KGMC), Lucknow' },
            { degree: 'DMCH', institution: 'Delhi' },
        ],
        affiliations: [
            'Senior Gynaecologist – Raghuram Medicare',
            'Infertility Treatment Specialist',
        ],
        expertise: [
            'Normal Delivery & C-Section',
            'High-Risk Pregnancy Management',
            'Infertility Evaluation & Treatment',
            'Family Planning (Tubectomy/Vasectomy)',
            'Medical Termination of Pregnancy (MTP)',
            'PCOS / PCOD & Menstrual Disorders',
            'Gynaecological Surgeries & Operations'
        ],
    }

]

export interface ServiceData {
    slug: string
    icon: string
    tag: string
    title: string
    shortTitle: string
    tagline: string
    heroDesc: string
    overview: string[]
    features: string[]
    conditions: string[]
    approach: { step: string; desc: string }[]
    faqs: { q: string; a: string }[]
    metaDesc: string
}

export const services: ServiceData[] = [
    {
        slug: 'gynaecology-infertility',
        icon: '👩‍⚕️',
        tag: 'Women\'s Health',
        shortTitle: 'Gynaecology Services',
        title: 'Infertility Hospital & Gynaecological Services',
        tagline: 'Complete Women\'s Health Care by Dr. Shubhra Gupta',
        heroDesc: 'Comprehensive care covering normal delivery, high-risk pregnancy, surgical procedures, and a dedicated infertility (Baanjhpan) hospital.',
        overview: [
            'Led by Senior Gynaecologist Dr. Shubhra Gupta, our hospital provides empathetic, confidential, and comprehensive care for women across all stages of life.',
            'We manage everything from routine consultations to high-risk pregnancies, hormonal disorders, advanced gynaecological operations, and dedicated infertility treatments to support your journey to motherhood.'
        ],
        features: [
            'Normal & Caesarean Delivery (Prasav Seva)',
            'Infertility Treatment (Baanjhpan Hospital)',
            'Safe Medical Termination of Pregnancy (MTP)',
            'Nasbandi — Family Planning (Sterilisation)',
            'Gynaecological Operations & Surgeries',
            'Hysterectomy & Fibroid Removal',
            'Antenatal & Postnatal Care'
        ],
        conditions: ['High-Risk Pregnancy', 'Infertility (Baanjhpan)', 'PCOS / PCOD', 'Uterine Fibroids & Cysts', 'Menstrual Disorders'],
        approach: [
            { step: 'Infertility Evaluation', desc: 'Hormonal assessment, ovulation monitoring, semen analysis, and counseling for both partners.' },
            { step: 'Safe Pregnancy & Delivery', desc: 'Expert management of antenatal monitoring and skilled execution of normal or C-section deliveries in a safe, supported environment.' },
            { step: 'Family Planning & MTP', desc: 'Legal, safe, and confidential pregnancy termination, alongside permanent sterilization options (Tubectomy/Vasectomy).' },
            { step: 'Surgical Procedures', desc: 'Full range of operations including Laparoscopic gynaecological procedures, D&C, and pelvic floor repair.' }
        ],
        faqs: [
            { q: 'Does the infertility hospital evaluate both partners?', a: 'Yes, our evaluations include hormonal assessments and semen analysis to provide comprehensive counseling and treatment plans.' },
            { q: 'Are surgical procedures safe?', a: 'All operations are conducted under expert supervision with our advanced surgical infrastructure ensuring patient safety and rapid recovery.' }
        ],
        metaDesc: 'Expert Gynaecology, Obstetrics, and Infertility treatments in Ghaziabad by Dr. Shubhra Gupta at Raghuram Medicare.',
    },
    {
        slug: 'chest-respiratory-critical-care',
        icon: '🫁',
        tag: 'Specialist Care',
        shortTitle: 'Respiratory & Chest Care',
        title: 'Chest, Respiratory & Critical Care Services',
        tagline: 'Expert Lung Care by Dr. Mohan Bandhu Gupta — Professor & FCCS-Certified Specialist',
        heroDesc: 'Advanced pulmonary interventions including nebulisation therapy, diagnostic bronchoscopy, and comprehensive pulmonary function testing.',
        overview: [
            'Respiratory health is paramount to your well-being. Dr. Mohan Bandhu Gupta, a renowned Professor and FCCS-certified specialist, leads our chest and respiratory department.',
            'We offer state-of-the-art diagnostic and therapeutic respiratory procedures, providing rapid relief and long-term management for complex lung conditions like asthma, COPD, and tuberculosis.'
        ],
        features: [
            'Nebulisation Therapy for rapid relief',
            'Bronchoscopy (Diagnostic & Therapeutic)',
            'Pulmonary Function Test (PFT / Spirometry)',
            'Management of Asthma & COPD Exacerbations',
            'ICU & Mechanical Ventilator Management',
            'Tuberculosis (TB) Management'
        ],
        conditions: ['Acute Asthma Attacks', 'COPD Exacerbations', 'Severe Bronchitis', 'Lung Infections & TB', 'Sleep-Disordered Breathing'],
        approach: [
            { step: 'Nebulisation Therapy', desc: 'Direct delivery of bronchodilators into the lungs for rapid relief of acute asthma or COPD exacerbations.' },
            { step: 'Bronchoscopy', desc: 'Minimally invasive examination of airways using a flexible camera tube for accurate biopsy, diagnosis, or foreign body removal.' },
            { step: 'PFT / Spirometry', desc: 'Precise measurement of lung capacity and airflow speed to grade conditions like Asthma and COPD accurately.' },
            { step: 'Critical Care Support', desc: 'Expert ventilator and ICU management for patients experiencing life-threatening respiratory distress.' }
        ],
        faqs: [
            { q: 'What is a Bronchoscopy used for?', a: 'It helps diagnose lung infections or tumors, collect tissue samples, and occasionally clear airways safely under specialist supervision.' },
            { q: 'Is Nebulisation effective for sudden attacks?', a: 'Yes, it provides immediate relief by delivering medication directly to the airways during acute asthma or bronchitis episodes.' }
        ],
        metaDesc: 'Advanced Chest, Respiratory & Critical Care Services in Ghaziabad by Dr. Mohan Bandhu Gupta, including Bronchoscopy and PFT.',
    }

]

export const testimonials = [
    {
        name: 'Parth Mukul Gupta',
        location: 'Ghaziabad',
        condition: 'Maternity & Gynaecology',
        init: 'P',
        rating: 5,
        text: 'Dr Shubra Gupta is the reason why Doctor all over the world given the stature next to God it happens so mostly because they are life saver who work tireless for mankind moreover being a doctor is considered one of the most sought after profession. She is the best Doctor you could ever get.',
    },
    {
        name: 'Rounak Gupta',
        location: 'Ghaziabad',
        condition: 'Respiratory Care',
        init: 'R',
        rating: 5,
        text: 'The doctor was really nice and I would recommend this place for any respiratory related issues',
    },
    {
        name: 'Deepa Negi',
        location: 'Ghaziabad',
        condition: 'Gynaecology Services',
        init: 'D',
        rating: 5,
        text: 'Dr.Shubhra Gupta is an awesome gynecologist, I had a very good experience and she was really helpful and I appreciated her care. May Almighty protect you and bless you with more success and health. Lots of love, I will suggest everybody to consult her. Just go by her words, have faith and you would definitely get results.',
    },
]