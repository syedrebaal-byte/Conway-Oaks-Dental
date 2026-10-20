import React, { useState } from 'react';
import { AlertCircle, Phone, Clock, ChevronDown, ChevronUp, ShieldAlert, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface EmergencyBannerProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenBooking }) => {
  const [showTriageGuide, setShowTriageGuide] = useState(false);

  return (
    <section className="bg-stone-900 text-white border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Same-Day Emergency Dental Care · Orlando, FL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
              In Severe Dental Pain? Don't Suffer in Silence.
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We reserve dedicated emergency slots every morning starting at 7:30 am for acute toothaches, chipped or knocked-out teeth, and lost crowns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line: {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => setShowTriageGuide(!showTriageGuide)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors border border-stone-700 whitespace-nowrap"
            >
              <span>Emergency First-Aid Steps</span>
              {showTriageGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Collapsible First-Aid Guide */}
        {showTriageGuide && (
          <div className="mt-8 pt-6 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in text-xs">
            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="font-bold text-amber-300 mb-1">01. Knocked-Out Adult Tooth</div>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                Hold the tooth only by the white crown (never touch the root). Gently rinse if dirty, then place it in a cup of cold milk or back in the cheek pouch. Reach our clinic within 60 minutes for highest re-implantation success.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="font-bold text-amber-300 mb-1">02. Acute Throbbing Toothache</div>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                Rinse gently with warm salt water and gently floss to remove trapped debris. Never place an aspirin directly against the gum tissue (it causes chemical burns). Take ibuprofen as directed and call us for immediate nerve evaluation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="font-bold text-amber-300 mb-1">03. Broken Crown or Chipped Tooth</div>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                Save any broken tooth fragments in a clean container. If sharp edges irritate your tongue, apply temporary dental wax or sugarless gum. We offer same-day digital re-bonding and replacement crowns.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
