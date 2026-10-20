import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface TopNavProps {
  onOpenBooking: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        {/* Strict Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single element, clean display face) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-teal-900 transition-colors"
          >
            Conway Oaks Dental
          </a>

          {/* Zone 2: 4–5 single-line clean navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#team" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Our Doctors
            </a>
            <a href="#anatomy-3d" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              3D Anatomy
            </a>
            <a href="#cases" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Results
            </a>
            <a href="#membership" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Plans & Insurance
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action + quick call on desktop */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-900 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Book Visit
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 z-30 bg-white border-b border-stone-200 p-6 shadow-xl space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Services & Treatments
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Meet Dr. Austin Lyman & Team
            </a>
            <a
              href="#anatomy-3d"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Interactive 3D Anatomy
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Smile Transformation Cases
            </a>
            <a
              href="#membership"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Membership & Insurance
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-800 transition-colors"
            >
              Hours, Map & Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-stone-200 space-y-3">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-900 bg-stone-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-teal-800" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-teal-800 rounded-lg"
            >
              Request Appointment Online
            </button>
          </div>
        </div>
      )}
    </>
  );
};
