export interface Doctor {
  name: string;
  title: string;
  role: string;
  bio: string;
  specialties: string[];
  education: string;
}

export interface DentalService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDetails: string;
  benefits: string[];
  duration: string;
  recovery: string;
  suitableFor: string[];
  faqs: { question: string; answer: string }[];
  iconName: string;
}

export const CLINIC_INFO = {
  name: "Conway Oaks Dental",
  tagline: "Modern, Compassionate & Comprehensive Dentistry in Orlando",
  address: "3221 S. Conway Road, Suite A & C",
  city: "Orlando",
  state: "FL",
  zip: "32812",
  phone: "(407) 277-0981",
  phoneClean: "4072770981",
  email: "care@conwayoaksdental.com",
  googleMapsUrl: "https://maps.google.com/?q=3221+S+Conway+Rd+Suite+A+Orlando+FL+32812",
  rating: 4.9,
  reviewCount: 480,
  emergencyAvailable: true,
  hours: [
    { day: "Monday", hours: "7:30 am – 5:00 pm", status: "Open Early" },
    { day: "Tuesday", hours: "7:30 am – 4:30 pm", status: "Open Early" },
    { day: "Wednesday", hours: "7:30 am – 5:00 pm", status: "Open Early" },
    { day: "Thursday", hours: "7:30 am – 4:30 pm", status: "Open Early" },
    { day: "Friday", hours: "7:30 am – 12:30 pm", status: "Morning Care" },
    { day: "Saturday", hours: "Closed (Emergency on-call)", status: "On-Call" },
    { day: "Sunday", hours: "Closed (Emergency on-call)", status: "On-Call" },
  ],
  insuranceAccepted: [
    "Delta Dental Premier / PPO",
    "Cigna Dental DPPO",
    "MetLife PDP Plus",
    "Aetna Dental PPO",
    "Guardian DentalGuard",
    "Humana Dental PPO",
    "Florida Blue (BCBS)",
    "UnitedHealthcare Dental",
    "Principal Financial",
    "Careington Dental",
  ],
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Austin Lyman, DMD",
    title: "Lead Dentist & Practice Director",
    role: "General, Restorative & Cosmetic Dentistry",
    bio: "Dr. Austin Lyman joined Conway Oaks Dental in 2018 after establishing an exceptional reputation for clinical precision and compassionate bedside manner in the Florida Panhandle. Known for treating every patient like family, Dr. Lyman believes in thorough patient education, empowering individuals to make informed decisions about their lifelong oral health in a relaxed, pressure-free atmosphere.",
    specialties: ["Smile Makeovers", "Porcelain Crowns & Veneers", "Digital Restorations", "Gentle Root Canals"],
    education: "Doctor of Dental Medicine (DMD) · Member of ADA, FDA, and Central Florida District Dental Association",
  },
  {
    name: "Dr. Timothy Davidson, DDS",
    title: "Implant & Reconstructive Specialist",
    role: "Dental Implants & Complex Restorations",
    bio: "With advanced postdoctoral training in surgical implantology and bone preservation, Dr. Davidson focuses on restoring natural bite function and stunning aesthetics. He utilizes 3D CBCT digital planning to achieve predictable, minimally invasive implant placement.",
    specialties: ["Single & Multi-Tooth Implants", "Bone Grafting", "Full Arch Reconstruction", "Occlusal Therapy"],
    education: "Doctor of Dental Surgery (DDS) · Fellow of the International Congress of Oral Implantologists (ICOI)",
  },
  {
    name: "Dr. Ruby Wagimin, DMD",
    title: "Preventive & Family Dentist",
    role: "Family Care, Pediatrics & Oral Wellness",
    bio: "Dr. Ruby Wagimin is dedicated to making dental visits stress-free for patients of all ages, from toddlers receiving their first checkup to seniors managing long-term periodontal health. Her gentle touch and warm encouragement have helped hundreds of anxious patients overcome dental phobia.",
    specialties: ["Preventive Dentistry", "Pediatric Care", "Periodontal Therapy", "Nightguards & TMJ Care"],
    education: "Doctor of Dental Medicine (DMD) · Active Member of Academy of General Dentistry (AGD)",
  },
  {
    name: "Dr. Jonathan Elmore, DMD",
    title: "Surgical & Endodontic Care",
    role: "Endodontics & Oral Surgery",
    bio: "Dr. Elmore brings focused expertise in gentle tooth extractions, wisdom teeth management, and rotary endodontic root canal treatments. His priority is immediate pain relief and tooth preservation with maximum patient comfort.",
    specialties: ["Same-Day Emergency Relief", "Comfortable Extractions", "Rotary Endodontics", "Nitrous Oxide Sedation"],
    education: "Doctor of Dental Medicine (DMD) · Specialist Continuing Education in Advanced Endodontics",
  },
];

export const SERVICES: DentalService[] = [
  {
    id: "preventive-family",
    name: "Preventive & Family Dentistry",
    tagline: "Proactive care that keeps your natural smile healthy and strong for life.",
    description: "Gentle routine cleanings, low-radiation digital x-rays, comprehensive oral cancer screenings, and fluoride varnish tailored for the whole family.",
    fullDetails: "At Conway Oaks Dental, preventive visits go far beyond standard polishing. We perform comprehensive periodontal charting, 3D intraoral scans to catch micro-fractures before they hurt, and gentle ultrasonic scaling that preserves enamel while removing stubborn tartar.",
    benefits: [
      "Ultrasonic gentle plaque and tartar removal",
      "Early-stage cavity detection using digital diagnostics",
      "Velscope oral cancer mucosal screenings",
      "Custom nightguards for clenching and TMJ relief",
    ],
    duration: "45–60 minutes",
    recovery: "Immediate return to daily activities",
    suitableFor: ["Adults", "Children & Teens", "Seniors", "Patients with sensitive gums"],
    iconName: "ShieldCheck",
    faqs: [
      {
        question: "How often should I schedule a professional cleaning?",
        answer: "The ADA and our team recommend visits every 6 months for most patients. If you manage periodontal conditions, cleanings every 3–4 months prevent bone loss."
      },
      {
        question: "Do you treat children at Conway Oaks Dental?",
        answer: "Yes, we welcome patients of all ages! Our team creates a calm, fun, and encouraging environment for kids' first visits."
      }
    ]
  },
  {
    id: "cosmetic-makeover",
    name: "Cosmetic Dentistry & Veneers",
    tagline: "Custom-sculpted porcelain aesthetics designed to match your natural facial symmetry.",
    description: "Hand-crafted ultra-thin porcelain veneers, cosmetic composite bonding, and medical-grade teeth whitening that elevates confidence.",
    fullDetails: "Dr. Lyman designs cosmetic transformations with meticulous attention to shade, translucency, and natural light refraction. Using digital mockups, you preview your prospective smile before treatment commences.",
    benefits: [
      "Custom shade matching to your natural skin undertones",
      "Stain-resistant high-density feldspathic porcelain",
      "Minimally invasive tooth preparation preserving enamel",
      "Up to 8 shades whiter with clinical in-office whitening",
    ],
    duration: "2 visits for veneers (1–2 weeks apart)",
    recovery: "Zero downtime; mild temperature sensitivity for 24 hours",
    suitableFor: ["Chipped or cracked teeth", "Permanent tetracycline staining", "Uneven lengths or minor gaps"],
    iconName: "Sparkles",
    faqs: [
      {
        question: "How long do porcelain veneers last?",
        answer: "With good oral hygiene and routine checkups, high-grade porcelain veneers routinely last 15 to 20 years or longer."
      },
      {
        question: "What is the difference between professional whitening and store kits?",
        answer: "Professional in-office whitening uses higher-concentration buffered peroxide agents activated safely under isolation, delivering dramatic results in one hour without stripping tooth enamel."
      }
    ]
  },
  {
    id: "dental-implants",
    name: "Dental Implants & Restorations",
    tagline: "The permanent, natural-feeling gold standard for replacing missing teeth.",
    description: "Biocompatible titanium implants topped with custom zirconia crowns that look, feel, and function just like your natural teeth.",
    fullDetails: "Whether replacing a single tooth, multiple missing teeth with an implant bridge, or securing full dentures, our 3D CBCT guided planning ensures millimeter precision and maximum bone preservation.",
    benefits: [
      "Halts jawbone resorption and preserves facial structure",
      "100% stable: eat, laugh, and speak without slipping",
      "Does not require grinding down adjacent healthy teeth",
      "Over 98% long-term clinical success rate",
    ],
    duration: "Placement visit: 60–90 min; Osseointegration: 3–4 months",
    recovery: "Mild discomfort for 2–3 days managed with standard OTC meds",
    suitableFor: ["Single missing tooth", "Failing bridge", "Loose removable dentures"],
    iconName: "Layers",
    faqs: [
      {
        question: "Are dental implants painful to place?",
        answer: "Most patients are surprised that implant placement causes less discomfort than a standard tooth extraction. We use local anesthesia and optional nitrous sedation for total comfort."
      },
      {
        question: "Am I a candidate if I have had missing teeth for years?",
        answer: "In many cases yes! If bone loss has occurred, Dr. Davidson performs gentle socket preservation or bone grafting to create a solid foundation."
      }
    ]
  },
  {
    id: "clear-aligners",
    name: "SimplyClear® Clear Aligners",
    tagline: "Straighten your smile discreetly without brackets, wires, or dietary restrictions.",
    description: "Custom-molded transparent orthodontic aligners that gently guide teeth into optimal alignment without disrupting your professional or social life.",
    fullDetails: "Conway Oaks Dental utilizes high-resolution digital scanning to map tooth movements millidegree by millidegree. You switch aligners every 1 to 2 weeks from the comfort of home.",
    benefits: [
      "Virtually invisible in social and professional settings",
      "Removable for brushing, flossing, and eating your favorite meals",
      "No painful metal brackets or irritating wire pokes",
      "Average treatment duration of 6 to 14 months",
    ],
    duration: "Regular 6–8 week check-ins; 15 min per checkup",
    recovery: "Zero downtime; gentle pressure for 24h per new tray",
    suitableFor: ["Crowded teeth", "Gapped teeth", "Mild to moderate overbites and crossbites"],
    iconName: "Smile",
    faqs: [
      {
        question: "How many hours a day do I need to wear the aligners?",
        answer: "For optimal results, aligners should be worn 20 to 22 hours daily, removing them only for meals, drinking hot beverages, and brushing."
      }
    ]
  },
  {
    id: "restorative-crowns",
    name: "Restorative Crowns & Bridges",
    tagline: "Durable, tooth-colored restorations engineered to withstand everyday chewing forces.",
    description: "Metal-free zirconia and e.max crowns that protect compromised teeth while flawlessly blending with neighboring enamel.",
    fullDetails: "When a tooth has sustained a large fracture, heavy decay, or root canal therapy, a full-coverage crown provides structural integrity. We utilize digital impressions—eliminating messy, gag-inducing impression putty.",
    benefits: [
      "100% metal-free, eliminating gray margins at the gumline",
      "Digital intraoral impression with zero gag reflex",
      "Precision-milled fit that seals against recurrent decay",
      "Color-calibrated to match adjacent tooth shades",
    ],
    duration: "Two visits or same-day restoration when scheduled",
    recovery: "Normal function resumes within 2 hours after numbness wears off",
    suitableFor: ["Cracked teeth", "Severe tooth decay", "Replacing aging silver amalgam fillings"],
    iconName: "Activity",
    faqs: [
      {
        question: "How do I care for my new dental crown?",
        answer: "Care for a crown just like a natural tooth: brush twice daily, floss gently around the margin, and visit us for routine biannual checkups."
      }
    ]
  },
  {
    id: "emergency-dentistry",
    name: "Emergency Dental Care",
    tagline: "Same-day appointments for acute dental pain, trauma, and broken restorations.",
    description: "Prompt, compassionate relief when you need it most. We prioritize dental emergencies to get you out of pain fast.",
    fullDetails: "Severe toothaches, sports dental injuries, knocked-out teeth, or lost crowns shouldn't wait. We reserve dedicated daily emergency slots in our morning and afternoon schedule.",
    benefits: [
      "Same-day evaluation and pain alleviation",
      "Digital x-ray diagnosis within 10 minutes of arrival",
      "Gentle sedation options available for acute anxiety",
      "Transparent treatment costs before any procedure begins",
    ],
    duration: "Emergency triage: 30–60 minutes",
    recovery: "Immediate pain relief protocol",
    suitableFor: ["Throbbing toothache", "Broken or chipped front tooth", "Lost crown or filling", "Dental abscess"],
    iconName: "Zap",
    faqs: [
      {
        question: "What should I do if a permanent tooth is knocked out?",
        answer: "Gently pick up the tooth by the crown (never the root), rinse briefly with water if dirty, and place it in a cup of milk or inside your cheek. Call us immediately at (407) 277-0981—time is critical within 60 minutes."
      }
    ]
  },
  {
    id: "oral-surgery",
    name: "Oral Surgery & Extractions",
    tagline: "Minimally invasive extractions and socket preservation with compassionate comfort.",
    description: "Comfortable wisdom teeth removal, non-restorable tooth extractions, and bone preservation procedures performed with gentle local anesthesia.",
    fullDetails: "We understand surgery can feel daunting. Dr. Elmore and Dr. Davidson utilize gentle luxation techniques that minimize tissue trauma, leading to rapid healing and low post-op discomfort.",
    benefits: [
      "Atraumatic extraction instruments preserving surrounding bone",
      "Socket grafting to prevent ridge collapse for future implants",
      "Comprehensive post-operative care package and check-in calls",
      "Nitrous oxide relaxation available",
    ],
    duration: "30–75 minutes depending on complexity",
    recovery: "Initial healing 3–5 days; full tissue recovery 2 weeks",
    suitableFor: ["Impacted wisdom teeth", "Severe decay beyond restoration", "Orthodontic spacing"],
    iconName: "Crosshair",
    faqs: [
      {
        question: "Will I feel pain during the extraction?",
        answer: "No. The procedure area is completely numbed with modern anesthetics. You will only feel light pressure, never sharp pain."
      }
    ]
  },
  {
    id: "periodontics-endodontics",
    name: "Gum Care & Root Canal Therapy",
    tagline: "Save your natural teeth and protect your systemic health from chronic infection.",
    description: "Advanced deep periodontal therapy to halt gum disease, coupled with quiet rotary root canals that resolve tooth infections comfortably.",
    fullDetails: "Periodontal health directly affects heart health and diabetic control. Our hygienists and doctors provide targeted scaling, root planing, and therapeutic antibiotic irrigation to restore healthy pink gums.",
    benefits: [
      "Arrests bleeding gums and chronic bad breath (halitosis)",
      "High-precision rotary nickel-titanium root canal instruments",
      "Eliminates deep dental abscess and preserves natural root",
      "Significantly less sound and vibration than traditional files",
    ],
    duration: "60–90 minutes",
    recovery: "Mild tenderness for 24–48 hours, resolved quickly",
    suitableFor: ["Bleeding gums during flossing", "Deep tooth nerve pain", "Gum recession"],
    iconName: "HeartPulse",
    faqs: [
      {
        question: "Is a root canal worse than a filling?",
        answer: "Root canals actually RELIEVE pain, rather than cause it. With contemporary anesthesia and rotary tech, most patients say it feels identical to receiving a routine filling."
      }
    ]
  }
];

export const PATIENT_REVIEWS = [
  {
    id: "1",
    author: "Jessica M.",
    location: "Orlando, FL",
    treatment: "Cosmetic Veneers & Whitening",
    rating: 5,
    date: "Verified Google Review · 2 months ago",
    quote: "Dr. Lyman and the entire Conway Oaks staff are truly exceptional. I had been terrified of dentists for a decade after a bad experience elsewhere. Dr. Lyman listened to every concern, walked me through my digital scan without pushing anything, and gave me the most natural, gorgeous smile. I cannot stop smiling!",
  },
  {
    id: "2",
    author: "Marcus T.",
    location: "Conway, Orlando",
    treatment: "Dental Implant & Crown",
    rating: 5,
    date: "Verified Google Review · 4 months ago",
    quote: "Had a front tooth replaced with an implant by Dr. Davidson and Dr. Lyman. The technology in this office is unbelievable. The 3D scan and custom porcelain crown match my other teeth so flawlessly that even my wife cannot tell which one is the implant. Super clean clinic and no wait time.",
  },
  {
    id: "3",
    author: "Elena R.",
    location: "SODO / Orlando, FL",
    treatment: "Emergency Toothache Relief",
    rating: 5,
    date: "Verified Google Review · 1 month ago",
    quote: "Woke up at 6am on a Tuesday with agonizing tooth pain. Conway Oaks took my call at 7:30 am and had me in the chair by 8:15 am. They treated the infected nerve right away and relieved the pain immediately. Friendly, transparent with costs, and deeply compassionate.",
  },
  {
    id: "4",
    author: "David H.",
    location: "Belle Isle, FL",
    treatment: "Family Preventive Care & Aligners",
    rating: 5,
    date: "Verified Google Review · 3 months ago",
    quote: "Our whole family of five comes to Conway Oaks Dental. Dr. Ruby Wagimin was wonderful with our 7-year-old daughter. The in-house membership plan saved us hundreds of dollars compared to our old private insurance. Beautiful, peaceful office right on Conway Road.",
  }
];

export const MEMBERSHIP_BENEFITS = [
  {
    tier: "Adult Wellness Plan",
    price: "$349",
    period: "per year ($650+ retail value)",
    popular: true,
    features: [
      "2 Comprehensive Dental Cleanings & Polishing",
      "2 Complete Exams with Dr. Lyman or Team",
      "All Routine Diagnostic Digital X-Rays & 3D Imaging",
      "1 Emergency Exam with X-Ray included annually",
      "20% Flat Discount on ALL fillings, crowns, implants, & surgery",
      "No waiting periods, no deductibles, no maximum limits",
    ]
  },
  {
    tier: "Child Wellness Plan",
    price: "$279",
    period: "per year (Ages 13 & under)",
    popular: false,
    features: [
      "2 Pediatric Dental Cleanings & Hygiene Coaching",
      "2 Doctor Exams with gentle oral growth checks",
      "2 Fluoride Varnish Applications",
      "All necessary digital bite-wing x-rays",
      "20% Flat Discount on sealants, fillings, & trauma care",
      "Zero insurance claim denials or paperwork stress",
    ]
  },
  {
    tier: "Periodontal Maintenance",
    price: "$549",
    period: "per year ($980+ retail value)",
    popular: false,
    features: [
      "3 to 4 Periodontal Maintenance Cleanings per year",
      "2 Comprehensive Doctor Exams & Gum Charting",
      "All periodic diagnostic digital x-rays",
      "20% Flat Discount on deep scaling & root planing",
      "Active bone loss monitoring with 3D intraoral scans",
      "Custom antibiotic irrigation discounts",
    ]
  }
];
