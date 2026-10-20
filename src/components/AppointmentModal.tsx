import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, AlertCircle, Download, Shield } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [selectedService, setSelectedService] = useState<string>(
    preselectedServiceId || 'preventive-family'
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>('any');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [insurance, setInsurance] = useState<string>('PPO Insurance');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const randomId = 'COD-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedBookingId(randomId);
      setIsSubmitting(false);
      setStep(4);
    }, 700);
  };

  const handleDownloadCalendar = () => {
    const serviceName = SERVICES.find((s) => s.id === selectedService)?.name || 'Dental Visit';
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Conway Oaks Dental//Appointment Confirmation//EN
BEGIN:VEVENT
SUMMARY:Appointment: ${serviceName} at Conway Oaks Dental
DESCRIPTION:Dr. ${selectedDoctor === 'any' ? 'Austin Lyman & Team' : selectedDoctor}\\nAddress: ${CLINIC_INFO.address}, ${CLINIC_INFO.city}, ${CLINIC_INFO.state} ${CLINIC_INFO.zip}\\nPhone: ${CLINIC_INFO.phone}\\nBooking Ref: ${confirmedBookingId}
LOCATION:${CLINIC_INFO.address}, ${CLINIC_INFO.city}, ${CLINIC_INFO.state} ${CLINIC_INFO.zip}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ConwayOaksDental-${confirmedBookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitting(false);
    setConfirmedBookingId('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-stone-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-teal-400">
              Conway Oaks Dental · Orlando, FL
            </div>
            <h3 className="text-lg font-bold text-stone-100">
              {step === 4 ? 'Appointment Request Confirmed' : 'Request Patient Appointment'}
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1-3) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 1 ? 'bg-teal-800 text-white' : 'bg-stone-200 text-slate-700'}`}>1</span>
              <span className={step === 1 ? 'font-semibold text-slate-900' : ''}>Treatment</span>
            </div>
            <div className="w-8 h-px bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 2 ? 'bg-teal-800 text-white' : 'bg-stone-200 text-slate-700'}`}>2</span>
              <span className={step === 2 ? 'font-semibold text-slate-900' : ''}>Schedule</span>
            </div>
            <div className="w-8 h-px bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 3 ? 'bg-teal-800 text-white' : 'bg-stone-200 text-slate-700'}`}>3</span>
              <span className={step === 3 ? 'font-semibold text-slate-900' : ''}>Patient Info</span>
            </div>
          </div>
        )}

        {/* Body content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Treatment */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">What is the reason for your visit?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Select the primary service you wish to schedule.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      selectedService === s.id
                        ? 'border-teal-700 bg-teal-50/60 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2">{s.tagline}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Immediate toothache? Call <a href="tel:4072770981" className="font-semibold text-teal-800 underline">(407) 277-0981</a></span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
                >
                  Continue to Schedule
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Doctor & Time slot */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-bold text-slate-900">Select Clinician & Timing</h4>
                <p className="text-xs text-slate-500 mt-0.5">We open early at 7:30 am Monday through Friday.</p>
              </div>

              {/* Doctor preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Doctor Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor('any')}
                    className={`text-left p-3 rounded-lg border text-xs transition-colors ${
                      selectedDoctor === 'any'
                        ? 'border-teal-700 bg-teal-50 font-semibold text-teal-900'
                        : 'border-stone-200 text-slate-700 hover:bg-stone-50'
                    }`}
                  >
                    <div>First Available Clinician</div>
                    <div className="text-[11px] text-slate-500">Fastest appointment availability</div>
                  </button>
                  {DOCTORS.map((doc) => (
                    <button
                      key={doc.name}
                      type="button"
                      onClick={() => setSelectedDoctor(doc.name)}
                      className={`text-left p-3 rounded-lg border text-xs transition-colors ${
                        selectedDoctor === doc.name
                          ? 'border-teal-700 bg-teal-50 font-semibold text-teal-900'
                          : 'border-stone-200 text-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      <div>{doc.name}</div>
                      <div className="text-[11px] text-slate-500">{doc.role}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Date & Time block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Mon–Fri early hours available</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredTime('morning')}
                      className={`py-2 px-3 text-xs rounded-lg border text-center transition-colors ${
                        preferredTime === 'morning'
                          ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                          : 'border-stone-200 text-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      Morning (7:30–11:30 AM)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredTime('afternoon')}
                      className={`py-2 px-3 text-xs rounded-lg border text-center transition-colors ${
                        preferredTime === 'afternoon'
                          ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                          : 'border-stone-200 text-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      Afternoon (12:30–4:30 PM)
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
                >
                  Continue to Patient Info
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info & Insurance */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">Your Contact & Insurance Information</h4>
                <p className="text-xs text-slate-500 mt-0.5">We will confirm your exact slot via telephone or SMS.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(407) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Dental Insurance / Payment Method
                  </label>
                  <select
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                  >
                    <option value="Delta Dental">Delta Dental PPO / Premier</option>
                    <option value="Cigna">Cigna Dental</option>
                    <option value="MetLife">MetLife PDP Plus</option>
                    <option value="Aetna">Aetna PPO</option>
                    <option value="Florida Blue">Florida Blue (BCBS)</option>
                    <option value="Guardian">Guardian Dental</option>
                    <option value="Humana">Humana Dental</option>
                    <option value="UnitedHealthcare">UnitedHealthcare</option>
                    <option value="Conway Oaks Membership Plan">No Insurance (Interested in $349 Membership Plan)</option>
                    <option value="Self Pay / Other">Self-Pay / CareCredit Financing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Concerns, Symptoms, or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitivity to cold drinks on upper right molar, or interested in veneer consult"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 resize-none"
                />
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-[11px] text-slate-500 flex items-start gap-2">
                <Shield className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  HIPAA-compliant confidential scheduling. Your personal information is solely utilized to schedule your visit with Conway Oaks Dental.
                </span>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm disabled:opacity-60 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Confirming Reservation...</span>
                    </>
                  ) : (
                    <span>Submit Appointment Request</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Screen */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 bg-teal-50 text-teal-700 border-2 border-teal-600/30 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  We Have Received Your Appointment Request!
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Reference Code: <span className="font-mono font-bold text-teal-800">{confirmedBookingId}</span>
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">
                    {SERVICES.find((s) => s.id === selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Practitioner:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedDoctor === 'any' ? 'First Available Doctor' : selectedDoctor}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Window:</span>
                  <span className="font-semibold text-slate-900">
                    {preferredDate || 'Earliest Available'} ({preferredTime === 'morning' ? '7:30–11:30 AM' : '12:30–4:30 PM'})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900">
                    {CLINIC_INFO.address}, Orlando
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Insurance / Plan:</span>
                  <span className="font-semibold text-teal-800">{insurance}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-slate-600" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
                >
                  Return to Website
                </button>
              </div>

              <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                Need to modify? Call our front desk at <a href={`tel:${CLINIC_INFO.phoneClean}`} className="font-semibold text-teal-800 underline">{CLINIC_INFO.phone}</a> anytime during clinic hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
