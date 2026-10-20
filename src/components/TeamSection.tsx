import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface TeamSectionProps {
  onOpenBooking: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="team" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-2">
            <span>Experienced Clinicians</span>
            <span aria-hidden="true">·</span>
            <span>Orlando, FL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Dentists of Conway Oaks Dental
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our clinical team combines decades of specialized experience with a gentle, patient-first philosophy. We treat you like our own family—listening first and customizing every treatment to your comfort.
          </p>
        </div>

        {/* Lead Doctor Spotlight Card (Dr. Austin Lyman) */}
        <div className="rounded-2xl bg-stone-50 border border-stone-200 overflow-hidden shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* High-res permanent doctor portrait */}
            <div className="lg:col-span-5 h-80 sm:h-96 lg:h-full relative min-h-[380px] bg-stone-200">
              <img
                src={IMAGES.dentist}
                alt="Dr. Austin Lyman DMD lead dentist at Conway Oaks Dental in Orlando"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-slate-900/85 backdrop-blur-md rounded-xl text-white border border-white/10">
                <div className="font-bold text-sm">Dr. Austin Lyman, DMD</div>
                <div className="text-[11px] text-teal-300">Lead General & Cosmetic Clinician · Joined 2018</div>
              </div>
            </div>

            {/* Doctor Bio and Philosophy */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-teal-800 font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-teal-700" />
                  <span>Clinical Director</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dr. Austin Lyman, DMD
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  General, Restorative & Cosmetic Dentistry
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Dr. Austin Lyman joined Conway Oaks Dental in 2018 after practicing in the Florida Panhandle. Known for treating patients like family, he believes patient education is the bedrock of lifelong oral wellness.
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  "My goal is never to tell a patient what they must do, but to examine, educate, and empower them to choose the treatment that matches their comfort, goals, and budget."
                </p>

                <div className="mt-6 space-y-2.5 border-t border-stone-200 pt-5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <GraduationCap className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                    <span>Doctor of Dental Medicine (DMD) · Member of ADA, FDA, and Central Florida District Dental Association</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Heart className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Focus Areas: Digital Porcelain Veneers, Zirconia Crowns, Biomimetic Restorations, Anxiety-Free Care</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with Dr. Lyman</span>
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-stone-300 rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Practice</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Associates & Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTORS.slice(1).map((doctor) => (
            <div
              key={doctor.name}
              className="flex flex-col justify-between p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-teal-700/50 transition-all hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center font-bold text-sm mb-4">
                  {doctor.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{doctor.name}</h4>
                <div className="text-xs font-semibold text-teal-800 mt-0.5">{doctor.role}</div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-200/80">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Clinical Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, i) => (
                      <span key={i} className="text-[11px] text-slate-600 bg-white px-2 py-0.5 rounded border border-stone-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 text-xs font-semibold text-slate-800 hover:text-white bg-white hover:bg-teal-800 border border-stone-200 rounded-lg transition-all"
                >
                  Schedule with {doctor.name.split(',')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
