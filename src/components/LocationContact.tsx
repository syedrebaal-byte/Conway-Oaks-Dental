import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, Car, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-semibold mb-2">
            <span>Find Our Practice</span>
            <span aria-hidden="true">·</span>
            <span>Convenient Orlando Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Conway Oaks Dental
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Conveniently situated on South Conway Road in Orlando, with dedicated complimentary ground-level parking directly adjacent to our suite entrances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Practice Info & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Office Location</h3>
                <div className="flex items-start gap-3 mt-3 text-sm text-slate-700">
                  <MapPin className="w-4 h-4 text-teal-800 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">{CLINIC_INFO.name}</div>
                    <div>{CLINIC_INFO.address}</div>
                    <div>{CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}</div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 mt-2 underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Direct Contact</h3>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-800" />
                    <span>Telephone: <a href={`tel:${CLINIC_INFO.phoneClean}`} className="font-semibold text-teal-800 underline">{CLINIC_INFO.phone}</a></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-teal-800" />
                    <span>Email: <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-teal-800 underline">{CLINIC_INFO.email}</a></span>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wide mb-3">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>Verified Hours of Care</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1 border-b border-stone-200/50 last:border-0"
                    >
                      <span className="font-medium text-slate-700">{h.day}</span>
                      <span className="font-mono text-slate-900 font-semibold">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-center gap-2.5 text-xs text-slate-600">
                <Car className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Complimentary patient parking directly in front of Suites A & C.</span>
              </div>
            </div>
          </div>

          {/* Contact / Inquiries Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Front Desk Inquiries
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Have a Question for Our Team?
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Send a non-urgent message to our front office coordinators, or call directly during business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-teal-50 rounded-xl border border-teal-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-teal-700 mx-auto" />
                <h4 className="text-base font-bold text-teal-900">Message Received</h4>
                <p className="text-xs text-teal-800 max-w-sm mx-auto">
                  Thank you, {name}. A member of the Conway Oaks Dental team will contact you shortly by telephone or email.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-teal-900 bg-white border border-teal-300 rounded-lg hover:bg-teal-100 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Cooper"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(407) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    How can we assist you? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about insurance verification, records transfer, or appointment availability..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-700 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    We respond within 1 business day.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
