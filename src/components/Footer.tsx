import React from 'react';
import { Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800 text-xs">
          {/* Col 1 & 2: Clinic Brand & Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              {CLINIC_INFO.name}
            </span>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Providing modern, compassionate, and comprehensive dentistry for Orlando families. Led by Dr. Austin Lyman and dedicated associates.
            </p>

            <div className="space-y-2 text-stone-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}, {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} className="hover:text-white transition-colors underline">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors underline">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Treatments */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">Treatments</span>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-teal-400 transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Practice & Navigation */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">Practice</span>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="hover:text-teal-400 transition-colors">Meet Dr. Lyman & Team</a>
              </li>
              <li>
                <a href="#anatomy-3d" className="hover:text-teal-400 transition-colors">3D Dental Anatomy</a>
              </li>
              <li>
                <a href="#cases" className="hover:text-teal-400 transition-colors">Transformation Gallery</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-teal-400 transition-colors">Clinic Comfort & Tech</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-teal-400 transition-colors">Smile Membership ($349)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">Office Hours & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Hours Snapshot */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">Hours</span>
            <div className="space-y-1.5 text-stone-400 text-[11px]">
              <div>Mon & Wed: 7:30 am – 5:00 pm</div>
              <div>Tue & Thu: 7:30 am – 4:30 pm</div>
              <div>Fri: 7:30 am – 12:30 pm</div>
              <div className="text-stone-500">Sat & Sun: Closed (Emergency on call)</div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-700 rounded-lg transition-colors text-center shadow-sm"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Conway Oaks Dental. All rights reserved. 3221 S. Conway Road, Orlando, FL.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>HIPAA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Accessibility (WCAG AA)</span>
            <span aria-hidden="true">·</span>
            <span>Orlando Local Dentistry</span>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-stone-600 leading-normal max-w-4xl">
          Medical Disclaimer: The dental and oral health information provided on this website is intended for informational and educational purposes only and should not be used as a substitute for professional clinical diagnosis or medical advice from a qualified dentist or physician.
        </p>
      </div>
    </footer>
  );
};
