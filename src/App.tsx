import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServicesBento } from './components/ServicesBento';
import { Interactive3DTooth } from './components/Interactive3DTooth';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SmileAssessment } from './components/SmileAssessment';
import { TeamSection } from './components/TeamSection';
import { ClinicTour } from './components/ClinicTour';
import { InsuranceMembership } from './components/InsuranceMembership';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/40 text-slate-900 selection:bg-teal-800 selection:text-white">
      {/* Top Navigation */}
      <TopNav onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Hero Section with Permanent High-Res Assets */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Emergency Triage & Same-Day Relief Notice */}
        <EmergencyBanner onOpenBooking={handleOpenBooking} />

        {/* Comprehensive Dental Services Portfolio */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* Three.js Interactive 3D Clinical Anatomy Stage */}
        <section id="anatomy-3d" className="py-20 bg-stone-950 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Biomimetic Science & Visual Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight mt-1">
                Explore Clinical Restorations in 3D
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Understand the difference between natural tooth anatomy, biocompatible ceramic crowns, and surgical titanium dental implants before treatment begins.
              </p>
            </div>

            <Interactive3DTooth />
          </div>
        </section>

        {/* Interactive Before & After Smile Transformation Slider */}
        <section id="cases" className="py-20 bg-stone-100/70 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeforeAfterSlider />
          </div>
        </section>

        {/* Personalized Treatment & Triage Navigator */}
        <section className="py-20 bg-stone-900 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SmileAssessment onOpenBooking={handleOpenBooking} />
          </div>
        </section>

        {/* Verified Clinicians & Dr. Austin Lyman Spotlight */}
        <TeamSection onOpenBooking={() => handleOpenBooking()} />

        {/* Practice Environment, Comfort & Digital Technology */}
        <ClinicTour />

        {/* Verified Insurance Checker & In-House $349 Membership Plan */}
        <InsuranceMembership onOpenBooking={() => handleOpenBooking()} />

        {/* Verified Patient Reviews & Google Star Showcase */}
        <TestimonialsSection />

        {/* Location, Verified Hours, Parking & Inquiries */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Multi-Step Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={selectedServiceForBooking}
      />
    </div>
  );
}
