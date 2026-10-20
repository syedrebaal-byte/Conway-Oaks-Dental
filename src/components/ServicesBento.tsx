import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Smile,
  Activity,
  Zap,
  Crosshair,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  HelpCircle
} from 'lucide-react';
import { SERVICES, DentalService } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface ServicesBentoProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<DentalService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-teal-700" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-700" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-teal-700" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-stone-50/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-2">
              <span>Comprehensive Dental Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>All-Under-One-Roof Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clinical Excellence Tailored to Every Life Stage
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              From routine cleanings to complex smile reconstructions, our multidisciplinary team utilizes conservative, biomimetic dentistry to protect your oral health.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid of Services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = service.id === 'cosmetic-makeover' || service.id === 'dental-implants';

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/80 hover:border-teal-700/60 hover:shadow-lg transition-all duration-300 relative ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1 ring-1 ring-stone-900/5' : ''
                }`}
              >
                <div>
                  {/* Human Editorial Numbering */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-teal-800">
                      0{index + 1}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Benefits preview */}
                  <ul className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                    {service.benefits.slice(0, 2).map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Treatment Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:text-white hover:bg-teal-800 bg-stone-100 rounded-md transition-all"
                  >
                    Book This
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Feature Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] bg-stone-900 text-white flex flex-col justify-end p-6 border border-stone-800">
            <img
              src={IMAGES.consultation}
              alt="Digital smile makeover consultation with dentist and patient"
              className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-50 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <span className="text-[11px] uppercase font-semibold text-teal-300 tracking-wider">
                Digital Smile Design
              </span>
              <h4 className="text-xl font-bold mt-1">Preview Your Transformation in 3D</h4>
              <p className="text-xs text-stone-300 mt-1 max-w-md">
                Our digital scanning system maps your smile geometry, allowing you to preview aesthetic adjustments before any treatment begins.
              </p>
              <button
                onClick={() => onOpenBooking('cosmetic-makeover')}
                className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-stone-100 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Request Cosmetic Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[260px] bg-stone-900 text-white flex flex-col justify-end p-6 border border-stone-800">
            <img
              src={IMAGES.implants}
              alt="High-precision ceramic dental restorations and implant technology"
              className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-50 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <span className="text-[11px] uppercase font-semibold text-teal-300 tracking-wider">
                Restorative Precision
              </span>
              <h4 className="text-xl font-bold mt-1">Biomimetic Ceramic Restorations</h4>
              <p className="text-xs text-stone-300 mt-1 max-w-md">
                High-density zirconia and lithium disilicate materials engineered to match natural tooth density, thermal expansion, and light refraction.
              </p>
              <button
                onClick={() => onOpenBooking('dental-implants')}
                className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-stone-100 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Implant Options</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Treatment Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[85vh] flex flex-col">
            <div className="bg-stone-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400">
                  Treatment Guide · Conway Oaks Dental
                </span>
                <h3 className="text-lg font-bold text-stone-100">{activeServiceModal.name}</h3>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-800">
                  Clinical Overview
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {activeServiceModal.fullDetails}
                </p>
              </div>

              {/* Treatment Parameters */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Expected Duration:</span>
                  <strong className="text-slate-900">{activeServiceModal.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Recovery Time:</span>
                  <strong className="text-slate-900">{activeServiceModal.recovery}</strong>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Key Clinical Benefits</h4>
                <ul className="space-y-2">
                  {activeServiceModal.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {activeServiceModal.faqs.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold text-slate-900">Frequently Asked Questions</h4>
                  {activeServiceModal.faqs.map((faq, i) => (
                    <div key={i} className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
                        <span>{faq.question}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Modal footer CTA */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const sid = activeServiceModal.id;
                    setActiveServiceModal(null);
                    onOpenBooking(sid);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
                >
                  Schedule Appointment for This Care
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
