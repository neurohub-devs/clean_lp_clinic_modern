import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Treatment } from "../data/aestheticData";
import { X, Clock, Sparkles, Check, Calendar, Activity, AlertCircle } from "lucide-react";

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBook,
}) => {
  // ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (treatment) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white text-[#1d1d1f] shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Banner Image */}
        <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
          <img
            src={treatment.src}
            alt={treatment.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-medium backdrop-blur-md border border-white/30">
              {treatment.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2">
              {treatment.nome}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          {/* Quick Details Pill Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 rounded-2xl bg-[#f5f5f7] p-4 text-center border border-[#e5e5ea]">
            <div>
              <p className="text-[10px] sm:text-xs uppercase text-[#86868b] font-medium">Duração</p>
              <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f] mt-0.5">{treatment.duracao}</p>
            </div>
            <div className="border-x border-[#d2d2d7]">
              <p className="text-[10px] sm:text-xs uppercase text-[#86868b] font-medium">Recuperação</p>
              <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f] mt-0.5">{treatment.recuperacao.split(" ")[0]}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase text-[#86868b] font-medium">Frequência</p>
              <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f] mt-0.5">Personalizada</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
              Sobre o procedimento
            </h4>
            <p className="text-sm font-light leading-relaxed text-[#1d1d1f]/90">
              {treatment.descricao}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
              Principais benefícios
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.beneficios.map((beneficio, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-light text-[#1d1d1f] bg-[#f9f9fb] p-3 rounded-xl border border-[#f0f0f2]">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indication */}
          <div className="rounded-2xl bg-amber-50/70 p-4 border border-amber-200/60 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-amber-900">Indicação clínica:</p>
              <p className="font-light text-amber-800 mt-0.5">{treatment.indicacao}</p>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-6 border-t border-[#f0f0f2] bg-white flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(treatment.nome);
            }}
            className="flex items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-black transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Agendar este tratamento
          </button>
        </div>
      </motion.div>
    </div>
  );
};
