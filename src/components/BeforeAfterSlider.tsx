import React, { useState, useRef } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  doctor: string;
  duration: string;
  description: string;
  // We can render SVG/Canvas simulated realistic clinical teeth profiles with high fidelity
  beforeColor: string;
  afterColor: string;
  beforeSpacing: string;
  afterSpacing: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Porcelain Veneer Smile Transformation',
    category: 'Cosmetic Dentistry',
    doctor: 'Dr. Austin Lyman, DMD',
    duration: '2 appointments (14 days)',
    description: 'Patient presented with chipped incisal edges, deep intrinsic tetracycline discoloration, and uneven tooth lengths. Completed 6 handcrafted e.max porcelain veneers with natural translucency.',
    beforeColor: '#f1dfb5',
    afterColor: '#ffffff',
    beforeSpacing: 'irregular',
    afterSpacing: 'harmonic',
  },
  {
    id: 'case-2',
    title: 'SimplyClear® Diastema & Alignment',
    category: 'Clear Aligners',
    doctor: 'Dr. Ruby Wagimin, DMD',
    duration: '7 months (14 aligners)',
    description: 'Adult patient desired closure of a 2.8mm midline diastema (gap) and rotation of the upper lateral incisors without conventional metal brackets.',
    beforeColor: '#f4ede0',
    afterColor: '#fcfcfc',
    beforeSpacing: 'wide gap',
    afterSpacing: 'closed contact',
  },
  {
    id: 'case-3',
    title: 'Single-Visit In-Office Medical Whitening',
    category: 'Teeth Whitening',
    doctor: 'Conway Oaks Hygiene Team',
    duration: '60 minutes',
    description: 'Removal of 8+ years of coffee and tea staining utilizing advanced light-activated hydrogen peroxide gel with desensitizing potassium nitrate.',
    beforeColor: '#e8d2a6',
    afterColor: '#fbfcfd',
    beforeSpacing: 'normal',
    afterSpacing: 'radiant',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = CASES[activeCaseIndex];

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handlePointerMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-stone-200/80 shadow-lg p-6 sm:p-8">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200/70">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Documented Clinical Results</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Smile Transformation Gallery
          </h3>
          <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Slide the divider to compare the clinical condition prior to care versus the final aesthetic outcome.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="inline-flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200 shrink-0">
          {CASES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(i);
                setSliderPos(50);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCaseIndex === i
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Case 0{i + 1}: {c.category}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Visual Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
        {/* Slider Box */}
        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden select-none cursor-ew-resize bg-stone-900 shadow-inner"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => (isDragging.current = true)}
            onTouchEnd={() => (isDragging.current = false)}
            onTouchMove={handleTouchMove}
          >
            {/* "AFTER" (Full background layer) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-stone-900 via-teal-950 to-slate-900 flex items-center justify-center p-8">
              {/* Graphic representation of pristine aligned smile */}
              <div className="relative w-full max-w-md flex flex-col items-center">
                {/* Upper dental arch curve */}
                <div className="flex items-end justify-center gap-1.5 sm:gap-2 mb-2">
                  {/* Central incisors & canines */}
                  <div className="w-8 sm:w-10 h-16 sm:h-20 bg-gradient-to-b from-stone-100 to-white rounded-b-xl border-t-2 border-rose-300 shadow-md shadow-teal-500/10 flex items-end justify-center pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500/20" />
                  </div>
                  <div className="w-9 sm:w-11 h-18 sm:h-22 bg-gradient-to-b from-stone-100 to-white rounded-b-xl border-t-2 border-rose-300 shadow-lg shadow-teal-500/20 flex items-end justify-center pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500/20" />
                  </div>
                  <div className="w-9 sm:w-11 h-18 sm:h-22 bg-gradient-to-b from-stone-100 to-white rounded-b-xl border-t-2 border-rose-300 shadow-lg shadow-teal-500/20 flex items-end justify-center pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500/20" />
                  </div>
                  <div className="w-8 sm:w-10 h-16 sm:h-20 bg-gradient-to-b from-stone-100 to-white rounded-b-xl border-t-2 border-rose-300 shadow-md shadow-teal-500/10 flex items-end justify-center pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500/20" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold tracking-wide text-teal-300 uppercase">After Treatment</span>
                  <div className="text-[11px] text-stone-300">Natural translucency · Ideal Golden Proportions</div>
                </div>
              </div>
            </div>

            {/* "BEFORE" (Clipped overlay based on sliderPos) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-slate-900 border-r-2 border-white shadow-2xl"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center p-8"
                style={{ width: containerRef.current?.clientWidth || 600 }}
              >
                {/* Graphic representation of stained / uneven condition */}
                <div className="relative w-full max-w-md flex flex-col items-center">
                  <div className="flex items-end justify-center gap-1.5 sm:gap-2 mb-2">
                    {/* Discolored or gapped teeth */}
                    <div
                      className="w-8 sm:w-10 h-14 sm:h-17 rounded-b-md border-t-2 border-rose-400/60 shadow-sm"
                      style={{ backgroundColor: activeCase.beforeColor }}
                    />
                    <div
                      className="w-9 sm:w-10 h-17 sm:h-19 rounded-b-md border-t-2 border-rose-400/60 shadow-sm transform -rotate-1"
                      style={{ backgroundColor: activeCase.beforeColor }}
                    />
                    {activeCase.id === 'case-2' && <div className="w-3" />}
                    <div
                      className="w-9 sm:w-10 h-16 sm:h-18 rounded-b-md border-t-2 border-rose-400/60 shadow-sm transform rotate-2"
                      style={{ backgroundColor: activeCase.beforeColor }}
                    />
                    <div
                      className="w-8 sm:w-10 h-13 sm:h-16 rounded-b-md border-t-2 border-rose-400/60 shadow-sm"
                      style={{ backgroundColor: activeCase.beforeColor }}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold tracking-wide text-amber-300 uppercase">Before Treatment</span>
                    <div className="text-[11px] text-stone-300">Initial clinical presentation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
              style={{ left: `calc(${sliderPos}% - 18px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl border-2 border-teal-600 flex items-center justify-center cursor-ew-resize">
                <ArrowLeftRight className="w-4 h-4 text-teal-700" />
              </div>
            </div>

            {/* Labels in corners */}
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-semibold backdrop-blur-sm">
              BEFORE
            </div>
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-semibold backdrop-blur-sm">
              AFTER
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
            <span>← Drag left for Before</span>
            <span className="font-mono text-teal-800 font-semibold">{Math.round(sliderPos)}% Split</span>
            <span>Drag right for After →</span>
          </div>
        </div>

        {/* Case Study Details Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full bg-stone-50 rounded-xl p-6 border border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
              <span>{activeCase.category}</span>
              <span aria-hidden="true">·</span>
              <span>Orlando Practice</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 leading-snug">
              {activeCase.title}
            </h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {activeCase.description}
            </p>

            <div className="mt-6 space-y-3 border-t border-stone-200 pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Treating Clinician</span>
                <span className="font-semibold text-slate-900">{activeCase.doctor}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Treatment Duration</span>
                <span className="font-semibold text-slate-900">{activeCase.duration}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Material Standard</span>
                <span className="font-semibold text-teal-800">Biocompatible Ceramics</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200">
            <a
              href="#appointment-booking"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
            >
              Request Smile Evaluation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
