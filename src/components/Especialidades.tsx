import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TREATMENTS, Treatment } from "../data/aestheticData";
import { Sparkles, Clock, ArrowRight, Info } from "lucide-react";

interface EspecialidadesProps {
  onOpenBooking: (treatmentName?: string) => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const Especialidades: React.FC<EspecialidadesProps> = ({
  onOpenBooking,
  onSelectTreatment,
}) => {
  const appleEase = [0.25, 0.1, 0.25, 1] as const;
  const [activeImage, setActiveImage] = useState<number>(0);
  const [filterTag, setFilterTag] = useState<string>("todos");

  const tags = ["todos", "facial", "corporal", "laser"];

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (filterTag === "todos") return true;
    if (filterTag === "facial") return t.tag.toLowerCase().includes("facial") || t.tag.toLowerCase().includes("colágeno") || t.tag.toLowerCase().includes("renovação");
    if (filterTag === "corporal") return t.tag.toLowerCase().includes("corporal") || t.tag.toLowerCase().includes("firmeza");
    if (filterTag === "laser") return t.tag.toLowerCase().includes("laser") || t.tag.toLowerCase().includes("textura");
    return true;
  });

  return (
    <section id="tratamentos" className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#f5f5f7] py-28 md:py-36">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: appleEase }}
        className="mb-14 w-full max-w-4xl px-4 text-center mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-md border border-black/10 text-xs uppercase tracking-widest text-[#86868b] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
          Procedimentos de alta precisão
        </div>
        <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#1d1d1f] leading-[1.1]">
          Nossas <span className="font-serif-luxury italic font-normal text-[#86868b]">especialidades.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
          Tratamentos não invasivos e minimamente invasivos executados por especialistas com foco em harmonia e segurança.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setFilterTag(tag);
                setActiveImage(0);
              }}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                filterTag === tag
                  ? "bg-[#1d1d1f] text-white shadow-md"
                  : "bg-white/80 text-[#86868b] hover:bg-white hover:text-[#1d1d1f] border border-[#e5e5ea]"
              }`}
            >
              {tag === "todos" ? "Todos os tratamentos" : tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Desktop Expanding Interactive Gallery (lg and above / 1024px+) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: appleEase }}
        className="hidden lg:block relative w-full max-w-6xl px-4 lg:px-8"
      >
        <div className="flex w-full items-stretch justify-center gap-3 lg:gap-4 h-[36rem] lg:h-[38rem]">
          {filteredTreatments.map((treatment, index) => {
            const isActive = activeImage === index;
            return (
              <motion.div
                key={treatment.id}
                className="relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] shadow-xl group select-none"
                initial={false}
                animate={{
                  flex: isActive ? 4.5 : 1,
                }}
                transition={{ duration: 0.65, ease: appleEase }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => setActiveImage(index)}
              >
                {/* Background Image */}
                <img
                  src={treatment.src}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.8s] ${
                    isActive ? "scale-105" : "scale-100 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                  alt={treatment.alt}
                />

                {/* Inactive Card Overlay */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors pointer-events-none z-10" />
                )}

                {/* Active Card Content & Gradient Overlay */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      {/* Dark Gradient Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 z-10 pointer-events-none"
                      />

                      {/* Content Container - Fixed Dimensions & Left-Aligned with generous edge margins */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pointer-events-none flex justify-start pb-8 lg:pb-10 pl-8 lg:pl-10 pr-8 lg:pr-10"
                      >
                        <div className="w-[28rem] lg:w-[32rem] min-w-[28rem] lg:min-w-[32rem] flex flex-col items-start text-left text-white pointer-events-auto space-y-4">
                          {/* Badges / Meta row left-aligned */}
                          <div className="flex items-center justify-start gap-2.5">
                            <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur-md border border-white/30 text-white whitespace-nowrap">
                              {treatment.tag}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-light text-white/90 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 whitespace-nowrap">
                              <Clock className="w-3.5 h-3.5 text-white/80" />
                              {treatment.duracao}
                            </span>
                          </div>

                          {/* Titles & Description with left alignment and protected margins */}
                          <div className="space-y-2.5 w-full text-left max-w-sm lg:max-w-md pr-4">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                              {treatment.nome}
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-base font-light text-white/90 leading-relaxed text-left">
                              {treatment.resumo}
                            </p>
                          </div>

                          {/* CTAs Left-Aligned and Well-Spaced */}
                          <div className="flex items-center justify-start gap-3.5 pt-2 w-full">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenBooking(treatment.nome);
                              }}
                              className="rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-semibold text-black shadow-xl hover:bg-white/90 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                            >
                              Agendar
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectTreatment(treatment);
                              }}
                              className="rounded-full bg-white/15 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md border border-white/25 hover:bg-white/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                            >
                              Ver detalhes
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile & Tablet Responsive Grid View (below lg) */}
      <div className="lg:hidden w-full max-w-5xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredTreatments.map((treatment, idx) => (
          <motion.div
            key={treatment.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: appleEase }}
            className="overflow-hidden rounded-[2rem] bg-white shadow-xl border border-[#e5e5ea] flex flex-col justify-between"
          >
            {/* Image Header with Left-Aligned Tag and Title */}
            <div className="relative h-56 sm:h-64 w-full">
              <img
                src={treatment.src}
                alt={treatment.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
              <div className="absolute top-4 left-4 flex justify-start">
                <span className="rounded-full bg-black/50 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/20">
                  {treatment.tag}
                </span>
              </div>
              <div className="absolute bottom-4 inset-x-0 px-6 text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  {treatment.nome}
                </h3>
              </div>
            </div>

            {/* Left-Aligned Content Body with Safe Gutter */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col items-start justify-between text-left space-y-5">
              <p className="text-xs sm:text-sm font-light text-[#86868b] leading-relaxed text-left w-full max-w-sm pr-2">
                {treatment.resumo}
              </p>
              
              <div className="w-full space-y-4">
                {/* Duration & Sessions Pill Bar Left-Aligned */}
                <div className="flex items-center justify-start gap-3 text-xs font-medium text-[#86868b] py-2 px-4 bg-[#f5f5f7] rounded-full border border-[#e5e5ea] w-fit mr-auto">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1d1d1f]" />
                    {treatment.duracao}
                  </span>
                  <span className="inline-block w-1 h-1 rounded-full bg-[#d2d2d7]" />
                  <span className="font-light">{treatment.sessoes}</span>
                </div>

                {/* Left-Aligned CTAs */}
                <div className="flex items-center justify-start gap-2.5 pt-1 w-full">
                  <button
                    onClick={() => onOpenBooking(treatment.nome)}
                    className="flex-1 rounded-full bg-[#1d1d1f] py-3.5 text-xs sm:text-sm font-semibold text-white text-center shadow-md active:scale-95 cursor-pointer hover:bg-black transition-colors"
                  >
                    Agendar
                  </button>
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="flex-1 rounded-full border border-[#d2d2d7] py-3.5 text-xs sm:text-sm font-semibold text-[#1d1d1f] text-center active:scale-95 cursor-pointer hover:bg-[#f5f5f7] transition-colors"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cloud-like Fading Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent to-[#f5f5f7] pointer-events-none z-20" />
    </section>
  );
};
