import React, { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS, BEFORE_AFTER, CLINIC_STATS } from "../data/aestheticData";
import { Star, CheckCircle2, Sparkles, ArrowRight, Quote } from "lucide-react";

interface ResultadosProps {
  onOpenBooking: () => void;
}

export const Resultados: React.FC<ResultadosProps> = ({ onOpenBooking }) => {
  const [selectedBA, setSelectedBA] = useState<number>(0);
  const appleEase = [0.25, 0.1, 0.25, 1] as const;

  return (
    <section id="resultados" className="relative w-full bg-[#f5f5f7] py-32 md:py-40 overflow-hidden">
      {/* Background Subtle Refraction Blobs for Frosted Glass Effect */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-slate-300/70 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-[450px] h-[450px] bg-zinc-300/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-md border border-black/10 text-xs uppercase tracking-widest text-[#86868b] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
            Resultados comprovados
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#1d1d1f] leading-[1.1]">
            Histórias reais, <br className="hidden sm:inline" />
            <span className="font-serif-luxury italic font-normal text-[#86868b]">transformações sutis.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
            Nossos procedimentos são planejados para exaltar a sua essência única. Veja a evolução de quem confiou na Aura.
          </p>
        </motion.div>

        {/* 1. Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-20 md:mb-28">
          {CLINIC_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: appleEase }}
              className="rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-5 sm:p-8 text-center hover:bg-white/60 hover:scale-[1.02] hover:border-white/80 transition-all duration-300 ease-out cursor-default"
            >
              <p className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">{stat.valor}</p>
              <p className="mt-1 text-xs sm:text-sm font-light text-[#86868b]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 2. Case Study Cards */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-center mb-10 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              Evolução dos protocolos
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 font-light">
              Registros com consentimento clínico sob parâmetros padronizados de iluminação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {BEFORE_AFTER.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: appleEase }}
                className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-5 sm:p-8 hover:bg-white/45 hover:scale-[1.01] hover:border-white/80 transition-all duration-300 ease-out flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="rounded-full bg-white/60 backdrop-blur-sm px-3.5 py-1 text-xs font-medium text-[#1d1d1f] border border-white/80 shadow-xs">
                      {item.categoria}
                    </span>
                    <span className="text-xs text-[#86868b] font-light">
                      {item.tempoTratamento}
                    </span>
                  </div>

                  {/* Clean rounded images inside glass card */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100/50 shadow-inner">
                      <img
                        src={item.imagemAntes}
                        alt="Antes do tratamento"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/60 px-2.5 sm:px-3 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        Antes
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100/50 shadow-inner">
                      <img
                        src={item.imagemDepois}
                        alt="Depois do tratamento"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/75 px-2.5 sm:px-3 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm border border-white/20">
                        Depois
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{item.titulo}</h4>
                  <p className="text-xs sm:text-sm text-[#86868b] font-light leading-relaxed">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Real Patient Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-center mb-10 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              O que nossas pacientes dizem
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 font-light">
              Avaliações reais de quem vivenciou a experiência completa Aura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((depoimento, idx) => (
              <motion.div
                key={depoimento.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: appleEase }}
                className="group flex flex-col justify-between rounded-[2rem] bg-white/30 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 hover:-translate-y-3 hover:bg-white/50 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(depoimento.nota)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#1d1d1f] text-[#1d1d1f]" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-black/25 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-black/60" />
                  
                  <p className="text-sm font-light leading-relaxed text-[#1d1d1f]/90 italic mb-6">
                    “{depoimento.depoimento}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <img
                    src={depoimento.foto}
                    alt={depoimento.nome}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-black/10 transition-transform group-hover:scale-105"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-semibold text-[#1d1d1f]">{depoimento.nome}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1d1d1f]" />
                    </div>
                    <p className="text-[11px] text-[#86868b] font-light">{depoimento.tratamento}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Bottom CTA (The Glass Button with Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="mt-20 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/40 backdrop-blur-lg border border-white/80 text-[#1d1d1f] font-medium px-10 py-5 text-base shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white/70 hover:scale-105 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_12px_36px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>Agendar consulta avaliativa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Cloud-like Fading Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent to-[#f5f5f7] pointer-events-none z-20" />
    </section>
  );
};
