import React from 'react';
import { Sparkles, Eye, Shield, Cpu, VolumeX, Sun } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const ClinicTour: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Practice Environment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight leading-tight">
              Anxiety-Free Dentistry Guided by Modern Innovation
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              We have eliminated the cold, clinical feel of traditional dental offices. From our warm, sunlit lounge on Conway Road to private operatory suites equipped with digital diagnostics, your comfort comes first.
            </p>

            {/* Feature matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-teal-950 flex items-center justify-center text-teal-400 mb-2">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-stone-200">3D Digital Impressions</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  No gagging on messy alginate trays. Our scanner creates precision 3D digital models in under 3 minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-teal-950 flex items-center justify-center text-teal-400 mb-2">
                  <Sun className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-stone-200">Low-Dose Digital X-Rays</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  Reduces radiation exposure by up to 90% compared to film x-rays while yielding instant high-definition diagnostics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-teal-950 flex items-center justify-center text-teal-400 mb-2">
                  <VolumeX className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-stone-200">Quiet Rotary Handpieces</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  Electric rotary instruments minimize standard dental whirring and vibrations for a serene, calm appointment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-teal-950 flex items-center justify-center text-teal-400 mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-stone-200">Hospital-Grade Sterilization</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  Autoclave multi-cycle biological monitoring ensuring absolute sterility for every patient instrument.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-800">
              <img
                src={IMAGES.lounge}
                alt="Conway Oaks Dental modern boutique patient reception lounge with architectural oak and travertine"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider">
                  Patient Comfort Experience
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Relaxed, Spa-Inspired Reception & Lounge
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Natural oak wood acoustics, warm beverage station, and zero waiting room backlog. We respect your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
