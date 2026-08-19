import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TREATMENTS } from "../data/aestheticData";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  useEffect(() => {
    if (initialTreatment) {
      setSelectedTreatment(initialTreatment);
    } else if (TREATMENTS.length > 0 && !selectedTreatment) {
      setSelectedTreatment(TREATMENTS[0].nome);
    }
  }, [initialTreatment]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Available Time Slots
  const timeSlots = [
    "09:00", "10:30", "11:45", "14:00", "15:30", "17:00", "18:30"
  ];

  // Quick upcoming dates (next 5 weekdays)
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 5) {
      const d = new Date(today);
      d.setDate(today.getDate() + daysAhead);
      // Skip Sundays (0)
      if (d.getDay() !== 0) {
        const diaSemana = d.toLocaleDateString("pt-BR", { weekday: "short" });
        const diaMes = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
        dates.push({
          value: d.toISOString().split("T")[0],
          displayDia: diaSemana.replace(".", ""),
          displayData: diaMes,
        });
        count++;
      }
      daysAhead++;
    }
    return dates;
  };

  const availableDates = getUpcomingDates();

  const handleNextStep = () => {
    if (step === 1) {
      if (!selectedTreatment) {
        setFormError("Por favor, selecione um procedimento.");
        return;
      }
      if (!selectedDate) {
        setFormError("Por favor, selecione uma data de preferência.");
        return;
      }
      if (!selectedTime) {
        setFormError("Por favor, selecione um horário de preferência.");
        return;
      }
      setFormError("");
      setStep(2);
    } else if (step === 2) {
      if (!name.trim()) {
        setFormError("Por favor, informe seu nome completo.");
        return;
      }
      if (!phone.trim() || phone.length < 9) {
        setFormError("Por favor, informe um WhatsApp válido para contato.");
        return;
      }
      setFormError("");
      setStep(3);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `*Solicitação de Agendamento - Aura Estética*\n\n` +
      `*Paciente:* ${name}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*E-mail:* ${email || "Não informado"}\n` +
      `*Tratamento:* ${selectedTreatment}\n` +
      `*Data Desejada:* ${selectedDate}\n` +
      `*Horário Desejado:* ${selectedTime}\n` +
      (notes ? `*Observações:* ${notes}\n\n` : `\n`) +
      `Gostaria de confirmar a disponibilidade para esta sessão.`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  const resetAndClose = () => {
    setStep(1);
    setFormError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetAndClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white p-6 sm:p-8 text-[#1d1d1f] shadow-2xl max-h-[90vh] flex flex-col justify-between"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 rounded-full p-2 text-[#86868b] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#86868b]">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a982]" />
            Atendimento exclusivo
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f] mt-1">
            {step === 3 ? "Agendamento solicitado!" : "Agendar consulta avaliativa"}
          </h3>
          <p className="text-xs sm:text-sm font-light text-[#86868b] mt-1">
            {step === 1 && "Escolha seu procedimento e data de preferência."}
            {step === 2 && "Preencha seus dados para confirmação da sessão."}
            {step === 3 && "Sua reserva prévia foi gerada com sucesso."}
          </p>
        </div>

        {/* Error message */}
        {formError && (
          <div className="mb-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
            {formError}
          </div>
        )}

        {/* Form Body */}
        <div className="overflow-y-auto pr-1 flex-1 py-1">
          {/* STEP 1: Escolha do Tratamento e Data */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Select Treatment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  Procedimento ou protocolo
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-3.5 text-sm font-medium text-[#1d1d1f] focus:border-black focus:outline-none transition-colors"
                >
                  <option value="" disabled>Selecione um tratamento...</option>
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.nome}>
                      {t.nome} ({t.duracao})
                    </option>
                  ))}
                  <option value="Consulta Avaliativa Personalizada">
                    Consulta avaliativa geral (diagnóstico completo)
                  </option>
                </select>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  Data de preferência
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.value;
                    return (
                      <button
                        type="button"
                        key={item.value}
                        onClick={() => setSelectedDate(item.value)}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-md"
                            : "bg-[#f5f5f7] text-[#1d1d1f] border-transparent hover:border-[#d2d2d7]"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-light opacity-70">
                          {item.displayDia}
                        </span>
                        <span className="text-xs font-semibold mt-0.5">
                          {item.displayData}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  Horário sugerido
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 rounded-xl text-xs font-medium border text-center transition-all ${
                          isSelected
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                            : "bg-[#f5f5f7] text-[#1d1d1f] border-transparent hover:border-[#d2d2d7]"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Dados do Paciente */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#86868b]" />
                  <input
                    type="text"
                    required
                    placeholder="Ex.: Maria Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] pl-10 pr-4 py-3 text-sm focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                  WhatsApp / Celular *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#86868b]" />
                  <input
                    type="tel"
                    required
                    placeholder="Ex.: (11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] pl-10 pr-4 py-3 text-sm focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                  E-mail (opcional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#86868b]" />
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] pl-10 pr-4 py-3 text-sm focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                  Dúvidas ou observações
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex.: Tenho pele sensível / Gostaria de saber mais sobre valores..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-3 text-sm focus:border-black focus:outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Confirmação */}
          {step === 3 && (
            <div className="space-y-6 text-center py-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="rounded-3xl bg-[#f5f5f7] p-6 text-left space-y-3 border border-[#e5e5ea]">
                <div className="flex justify-between text-xs border-b border-[#e5e5ea] pb-2">
                  <span className="text-[#86868b]">Tratamento:</span>
                  <span className="font-semibold text-[#1d1d1f]">{selectedTreatment}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-[#e5e5ea] pb-2">
                  <span className="text-[#86868b]">Data e horário:</span>
                  <span className="font-semibold text-[#1d1d1f]">{selectedDate} às {selectedTime}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#86868b]">Paciente:</span>
                  <span className="font-semibold text-[#1d1d1f]">{name}</span>
                </div>
              </div>

              <p className="text-xs text-[#86868b] font-light leading-relaxed">
                Nossa equipe entrará em contato via WhatsApp para confirmar os detalhes. Você também pode enviar a solicitação diretamente agora:
              </p>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-white border border-black/15 py-3.5 text-sm font-semibold text-[#1d1d1f] shadow-md hover:bg-[#f5f5f7] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#1d1d1f]" />
                Confirmar no WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 3 && (
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#f0f0f2]">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#86868b] hover:text-[#1d1d1f] font-medium"
              >
                ← Voltar
              </button>
            ) : (
              <span className="text-xs text-[#86868b]">Passo 1 de 2</span>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="flex items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-black transition-all cursor-pointer"
            >
              {step === 1 ? "Próximo passo" : "Confirmar agendamento"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
