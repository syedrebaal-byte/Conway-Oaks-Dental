import React from 'react';
import { Phone, Calendar, Star, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-stone-50/80 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero split with balanced height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed natural editorial kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs text-teal-800 font-semibold tracking-wide uppercase mb-3">
              <span>Orlando, Florida</span>
              <span aria-hidden="true">·</span>
              <span>Conway Road Suite A & C</span>
              <span aria-hidden="true">·</span>
              <span>Dr. Austin Lyman & Associates</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Where Precision Dentistry Meets Genuine Southern Hospitality
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Experience modern, anxiety-free dental care in a serene clinical setting. From comprehensive family wellness and invisible aligners to precision dental implants, we treat every patient like our own family.
            </p>

            {/* CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                <Phone className="w-4 h-4 text-teal-800" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Adjacency Trust Badges (clean unboxed typography) */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.9/5.0</span>
                <span>(480+ Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-800" />
                <span>Open Early 7:30 AM M–F</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-800" />
                <span>Major PPO Plans Accepted</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Permanent Operatory Visual */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-200">
              <img
                src={IMAGES.hero}
                alt="Conway Oaks Dental modern luxury operatory suite overlooking peaceful greenery in Orlando"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback in case path fails
                  e.currentTarget.src = '/src/assets/images/hero_modern_dental_clinic_1792476638416.jpg';
                }}
              />

              {/* Subtle architectural overlay note */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md text-white border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <span className="font-semibold">Private Operatory Suite 01</span>
                  </div>
                  <span className="text-stone-300">Conway Road, Orlando</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-normal">
                  Equipped with gentle ultrasonic technology, low-dose digital sensors, and floor-to-ceiling tranquil nature views.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">7:30 AM</div>
            <div className="text-xs text-slate-500 font-medium">Early Morning Hours Before Work</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-teal-800">4.9 ★</div>
            <div className="text-xs text-slate-500 font-medium">Over 480+ Verified Patient Ratings</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">Same-Day</div>
            <div className="text-xs text-slate-500 font-medium">Emergency Pain Relief Slots</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-teal-800">$349 / yr</div>
            <div className="text-xs text-slate-500 font-medium">In-House Smile Membership Plan</div>
          </div>
        </div>
      </div>
    </section>
  );
};
