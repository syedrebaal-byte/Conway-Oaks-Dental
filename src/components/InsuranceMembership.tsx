import React, { useState } from 'react';
import { ShieldCheck, Check, Calculator, Sparkles, CreditCard, HelpCircle } from 'lucide-react';
import { CLINIC_INFO, MEMBERSHIP_BENEFITS } from '../data/clinicData';

interface InsuranceMembershipProps {
  onOpenBooking: () => void;
}

export const InsuranceMembership: React.FC<InsuranceMembershipProps> = ({ onOpenBooking }) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [insuranceSearch, setInsuranceSearch] = useState('');

  const filteredInsurances = CLINIC_INFO.insuranceAccepted.filter((ins) =>
    ins.toLowerCase().includes(insuranceSearch.toLowerCase())
  );

  return (
    <section id="membership" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-2">
            <span>Accessible Care</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Insurance In-Network & In-House Membership
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We believe world-class dentistry should be straightforward and affordable. Whether you have top-tier PPO insurance or no insurance at all, we have transparent solutions to protect your budget.
          </p>
        </div>

        {/* 2-Column: Left Insurance Checker, Right In-House Membership Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Column 1: Insurance Provider Directory & Search */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>PPO Network Direct Acceptance</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Verify Your Dental Insurance
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We file all claims directly with your insurer and maximize your annual benefits.
              </p>

              {/* Instant Search Bar */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Type your insurer (e.g. Delta, Cigna, MetLife)..."
                  value={insuranceSearch}
                  onChange={(e) => setInsuranceSearch(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 bg-stone-50"
                />
              </div>

              {/* Insurer Tag List */}
              <div className="mt-4 space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {filteredInsurances.length > 0 ? (
                  filteredInsurances.map((ins, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-stone-50 text-xs text-slate-700 border border-stone-200/70"
                    >
                      <span className="font-medium">{ins}</span>
                      <span className="text-[10px] text-teal-800 font-semibold bg-teal-50 px-2 py-0.5 rounded">
                        In-Network / Accepted
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-xs text-slate-500 text-center">
                    Don't see your plan listed? We accept almost all PPO plans. Call us at (407) 277-0981 to verify within 5 minutes.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
              <span>Have an HSA or FSA card?</span>
              <span className="font-semibold text-teal-800">100% Eligible</span>
            </div>
          </div>

          {/* Column 2: In-House Membership Plans (For Non-Insured Patients) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border-2 border-teal-800/30 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                  No Insurance? No Problem.
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                  Conway Oaks Smile Membership
                </h3>
              </div>

              {/* Plan switcher tabs */}
              <div className="inline-flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200">
                {MEMBERSHIP_BENEFITS.map((p, idx) => (
                  <button
                    key={p.tier}
                    onClick={() => setSelectedPlanIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      selectedPlanIndex === idx
                        ? 'bg-teal-800 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {p.tier.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Plan Details */}
            {(() => {
              const current = MEMBERSHIP_BENEFITS[selectedPlanIndex];
              return (
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {current.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {current.period}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {current.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-teal-900">
                      <strong>Zero Waiting Periods. Zero Claim Denials.</strong>
                      <p className="text-[11px] text-teal-800/80 mt-0.5">
                        Enroll today and schedule your first exam and cleaning immediately.
                      </p>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm shrink-0 whitespace-nowrap"
                    >
                      Enroll & Schedule
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Financing Partners Banner */}
        <div className="p-6 bg-white rounded-xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-teal-700 shrink-0" />
            <div>
              <span className="font-bold text-slate-900">Interest-Free Monthly Financing Available</span>
              <p className="text-slate-500 mt-0.5">
                We partner with CareCredit® and Sunbit to provide 0% APR financing options up to 12 or 24 months.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold text-slate-800 hover:text-slate-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
          >
            Ask About Financing
          </button>
        </div>
      </div>
    </section>
  );
};
