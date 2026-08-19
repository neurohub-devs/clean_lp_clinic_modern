"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Especialidades } from "./components/Especialidades";
import { AvaliadorQuiz } from "./components/AvaliadorQuiz";
import { ClinicaJourney } from "./components/ClinicaJourney";
import { Resultados } from "./components/Resultados";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { TreatmentModal } from "./components/TreatmentModal";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Treatment } from "./data/aestheticData";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTreatment, setBookingTreatment] = useState<string | undefined>(undefined);
  const [selectedDetailTreatment, setSelectedDetailTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (treatmentName?: string) => {
    setBookingTreatment(treatmentName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setBookingTreatment(undefined);
  };

  const handleSelectDetailTreatment = (treatment: Treatment) => {
    setSelectedDetailTreatment(treatment);
  };

  const handleCloseDetailTreatment = () => {
    setSelectedDetailTreatment(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f5f5f7] font-sans antialiased selection:bg-[#1d1d1f] selection:text-white">
      {/* 0. Floating Sticky Global Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Clean Premium Hero with Parallax */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        {/* 2. Especialidades & Procedimentos */}
        <Especialidades
          onOpenBooking={handleOpenBooking}
          onSelectTreatment={handleSelectDetailTreatment}
        />

        {/* 3. Diagnóstico e Protocolo Personalizado */}
        <AvaliadorQuiz onOpenBooking={handleOpenBooking} />

        {/* 4. A Essência & Jornada Clínica */}
        <ClinicaJourney />

        {/* 5. Resultados & Transformações Antes/Depois & Depoimentos */}
        <Resultados onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Perguntas Frequentes (FAQ) */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <AnimatePresence>
        {bookingOpen && (
          <BookingModal
            isOpen={bookingOpen}
            onClose={handleCloseBooking}
            initialTreatment={bookingTreatment}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedDetailTreatment && (
          <TreatmentModal
            treatment={selectedDetailTreatment}
            onClose={handleCloseDetailTreatment}
            onBook={handleOpenBooking}
          />
        )}
      </AnimatePresence>
      {/* Floating Action Button */}
      <WhatsAppFloat />
    </div>
  );
}