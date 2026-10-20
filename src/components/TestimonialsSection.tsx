import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, Shield } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_INFO } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = filter === 'all'
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter((r) =>
        r.treatment.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <section id="reviews" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Rating Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-2">
              <span>Verified Patient Feedback</span>
              <span aria-hidden="true">·</span>
              <span>Google Verified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Experiences from Orlando Families
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Hear directly from patients who have trusted Dr. Lyman, Dr. Davidson, and our team with their dental health and confidence.
            </p>
          </div>

          {/* Google Rating Block */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-4 shrink-0">
            <div className="text-3xl font-extrabold font-mono text-slate-900">
              4.9
            </div>
            <div>
              <div className="flex text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-slate-500">
                Over <strong className="text-slate-900">480+ Google Reviews</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'cosmetic', label: 'Cosmetic & Veneers' },
            { id: 'implant', label: 'Dental Implants' },
            { id: 'emergency', label: 'Emergency Relief' },
            { id: 'family', label: 'Family Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-stone-100 text-slate-600 hover:text-slate-900 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 hover:border-teal-700/50 transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{review.author}</div>
                  <div className="text-[11px] text-slate-500">{review.location}</div>
                </div>
                <div className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {review.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
