import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_LIST } from "../data/aestheticData";
import { HelpCircle, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const appleEase = [0.25, 0.1, 0.25, 1] as const;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative w-full bg-[#f5f5f7] py-32 md:py-40 text-[#1d1d1f] overflow-hidden">
      {/* Background Soft Refraction Blobs for Frosted Glass Effect */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-slate-300/70 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[450px] h-[450px] bg-zinc-300/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-14 max-w-4xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-md border border-black/10 text-xs uppercase tracking-widest text-[#86868b] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
            Tire suas dúvidas
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#1d1d1f] leading-[1.1]">
            Perguntas <span className="font-serif-luxury italic font-normal text-[#86868b]">frequentes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
            Transparência e clareza em todas as etapas da sua jornada de autocuidado.
          </p>
        </motion.div>

        {/* FAQ Frosted Glass Accordion List with Staggered Scroll Reveal */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: appleEase }}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:bg-white/50 hover:border-white/70 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left font-medium text-[#1d1d1f] focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium pr-4 text-[#1d1d1f]">
                    {item.pergunta}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    className="flex-shrink-0 text-[#86868b] transition-colors group-hover:text-[#1d1d1f]"
                  >
                    <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: appleEase }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base font-light leading-relaxed text-[#86868b] border-t border-white/60 pt-4">
                        {item.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Cohesive Frosted Glass Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="mt-14 text-center rounded-3xl bg-white/20 backdrop-blur-lg border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 sm:p-10"
        >
          <p className="text-base font-medium text-[#1d1d1f]">Ainda tem alguma dúvida específica?</p>
          <p className="text-xs sm:text-sm font-light text-[#86868b] mt-1.5 mb-6 max-w-md mx-auto">
            Nossa equipe de concierge clínico está pronta para atender você com exclusividade.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20procedimentos%20da%20Aura%20Est%C3%A9tica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[#1d1d1f] px-8 py-3.5 text-xs sm:text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:scale-105 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#1d1d1f]" />
            <span>Falar com a equipe no WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Cloud-like Fading Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent to-[#f5f5f7] pointer-events-none z-20" />
    </section>
  );
};
