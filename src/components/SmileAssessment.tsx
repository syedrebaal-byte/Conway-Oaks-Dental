import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

interface SmileAssessmentProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SmileAssessment: React.FC<SmileAssessmentProps> = ({ onOpenBooking }) => {
  const [goal, setGoal] = useState<string>('cosmetic');
  const [lastVisit, setLastVisit] = useState<string>('recent');
  const [insuranceStatus, setInsuranceStatus] = useState<string>('ppo');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  const getRecommendation = () => {
    switch (goal) {
      case 'pain':
        return {
          serviceId: 'emergency-dentistry',
          title: 'Same-Day Urgent Care & Diagnostic Exam',
          doctor: 'Dr. Jonathan Elmore / Dr. Austin Lyman',
          timing: 'Immediate / Same-Day Slot Available',
          duration: '30–45 mins',
          summary: 'We prioritize prompt relief from toothaches, cracked restorations, and acute sensitivity. Digital low-radiation diagnostic x-rays are taken immediately upon arrival.',
          insuranceNote: insuranceStatus === 'ppo' ? 'Typically covered at 80%–100% under standard PPO diagnostic benefits.' : 'Eligible for 20% discount with Conway Oaks Membership or flat initial emergency diagnostic fee.',
        };
      case 'straighten':
        return {
          serviceId: 'clear-aligners',
          title: 'SimplyClear® Digital Orthodontic Scan',
          doctor: 'Dr. Ruby Wagimin, DMD',
          timing: 'Consultation within 2–4 days',
          duration: '45 mins',
          summary: 'A 3D iTero intraoral digital simulation to visualize how your teeth will move week-by-week. Completely metal-free and invisible.',
          insuranceNote: insuranceStatus === 'ppo' ? 'Many dental PPO plans include $1,000–$2,500 lifetime orthodontic benefits for adults and teens.' : 'Flexible monthly payment plans available starting around $120/mo through CareCredit/Sunbit.',
        };
      case 'missing':
        return {
          serviceId: 'dental-implants',
          title: '3D CBCT Guided Implant Consultation',
          doctor: 'Dr. Timothy Davidson, DDS',
          timing: 'Consultation within 2–5 days',
          duration: '60 mins',
          summary: 'High-resolution 3D bone density assessment and precision virtual implant simulation for permanent single-tooth or full-arch replacement.',
          insuranceNote: insuranceStatus === 'ppo' ? 'Portions of implant surgery and ceramic crowns are billable to major PPO plans.' : 'Conway Oaks Membership plan provides 20% off all surgical and restorative implant procedures.',
        };
      case 'routine':
        return {
          serviceId: 'preventive-family',
          title: 'Comprehensive New Patient Experience',
          doctor: 'Dr. Austin Lyman & Hygiene Team',
          timing: 'Flexible morning & afternoon openings',
          duration: '60 mins',
          summary: 'Includes gentle ultrasonic scaling, thorough periodontal charting, oral cancer screening, low-dose digital x-rays, and one-on-one consultation.',
          insuranceNote: insuranceStatus === 'ppo' ? 'Covered 100% by almost all in-network PPO plans with zero out-of-pocket cost.' : 'Fully covered under the $349/year Adult Wellness Membership Plan (includes 2 cleanings & 2 exams/yr).',
        };
      case 'cosmetic':
      default:
        return {
          serviceId: 'cosmetic-makeover',
          title: 'Digital Smile Makeover Consultation',
          doctor: 'Dr. Austin Lyman, DMD',
          timing: 'Consultation within 2–4 days',
          duration: '45 mins',
          summary: 'In-depth aesthetic evaluation of tooth proportions, symmetry, and color. Dr. Lyman reviews handcrafted porcelain veneers and medical-grade whitening options.',
          insuranceNote: insuranceStatus === 'ppo' ? 'Elective cosmetic enhancements are self-pay, with restorative crowns and bonding partially billable.' : 'Covered with customized interest-free financing up to 12–24 months.',
        };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-stone-900 to-slate-900 text-white p-6 sm:p-10 border border-stone-800 shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Patient Triage</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
          Personalized Treatment & Care Navigator
        </h3>
        <p className="text-sm text-stone-400 mt-1 max-w-2xl">
          Select your current priority to generate a tailored treatment recommendation, estimated appointment length, and insurance guidance.
        </p>

        {/* 3 Step Interactive Triage Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-8 border-b border-stone-800">
          {/* Question 1: Priority */}
          <div>
            <span className="block text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
              1. What is your primary dental goal?
            </span>
            <div className="space-y-1.5">
              {[
                { id: 'cosmetic', label: 'Enhance aesthetics & whiten smile' },
                { id: 'straighten', label: 'Straighten teeth (SimplyClear®)' },
                { id: 'missing', label: 'Replace missing teeth (Implants)' },
                { id: 'pain', label: 'Relieve pain or fix broken tooth' },
                { id: 'routine', label: 'Routine wellness cleaning & exam' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setGoal(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                    goal === opt.id
                      ? 'bg-teal-700 text-white font-medium shadow-sm'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Recency */}
          <div>
            <span className="block text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
              2. When was your last dental visit?
            </span>
            <div className="space-y-1.5">
              {[
                { id: 'recent', label: 'Within the last 6 months' },
                { id: 'year', label: '6 to 12 months ago' },
                { id: 'years', label: '1 to 3 years ago' },
                { id: 'anxious', label: '3+ years ago (Dental anxiety)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setLastVisit(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                    lastVisit === opt.id
                      ? 'bg-teal-700 text-white font-medium shadow-sm'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Coverage */}
          <div>
            <span className="block text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
              3. What is your insurance status?
            </span>
            <div className="space-y-1.5">
              {[
                { id: 'ppo', label: 'PPO Insurance (Delta, Cigna, etc.)' },
                { id: 'none', label: 'No insurance (Membership plan)' },
                { id: 'finance', label: 'Looking for monthly financing' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setInsuranceStatus(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                    insuranceStatus === opt.id
                      ? 'bg-teal-700 text-white font-medium shadow-sm'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Personalized Recommendation Result */}
        <div className="mt-8 bg-stone-900/90 rounded-xl p-6 border border-teal-800/40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Recommended Clinical Pathway</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {rec.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {rec.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clinician: <strong className="text-stone-200">{rec.doctor}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Appointment: <strong className="text-stone-200">{rec.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Availability: <strong className="text-teal-300">{rec.timing}</strong></span>
                </div>
              </div>

              <div className="p-3 bg-stone-950/60 rounded-lg border border-stone-800 text-[11px] text-stone-300">
                <span className="font-semibold text-teal-300">Financial & Insurance Note: </span>
                {rec.insuranceNote}
              </div>
            </div>

            {/* Action CTA */}
            <div className="shrink-0 flex flex-col items-stretch lg:items-end gap-2">
              <button
                type="button"
                onClick={() => onOpenBooking(rec.serviceId)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-600 rounded-lg transition-colors shadow-md whitespace-nowrap"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-stone-400 text-center lg:text-right">
                No immediate payment required to request
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
