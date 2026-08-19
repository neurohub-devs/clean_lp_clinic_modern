import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Interactive Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 rounded-2xl bg-white p-3.5 shadow-2xl border border-[#e5e5ea] text-xs text-[#1d1d1f]"
          >
            <div>
              <p className="font-semibold text-xs">Atendimento online</p>
              <p className="text-[11px] text-[#86868b] font-light">Tire dúvidas ou agende sua sessão pelo WhatsApp</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#86868b] hover:text-black p-1 cursor-pointer"
              aria-label="Fechar dica"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button in Minimalist Luxury White */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos%20da%20Aura%20Est%C3%A9tica."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/10 hover:bg-[#f5f5f7] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1d1d1f] text-[9px] font-bold text-white items-center justify-center">1</span>
        </span>
        <WhatsAppIcon className="h-7 w-7 text-[#1d1d1f]" />
      </a>
    </div>
  );
};
