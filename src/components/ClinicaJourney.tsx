import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sparkles, Shield, HeartHandshake, Award } from "lucide-react";

export const ClinicaJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress along the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const informacoes = [
    {
      tag: "Nossa filosofia",
      titulo: "A beleza não é um padrão artificial.",
      texto: "É a harmonia única que existe em você. Nosso propósito não é alterar seus traços nem criar fisionomias padronizadas, mas realçar e preservar o que você já tem de mais nobre e elegante.",
      icone: Sparkles
    },
    {
      tag: "Tecnologia e ciência",
      titulo: "Inovação a favor da sua pele.",
      texto: "Investimos continuamente nas melhores tecnologias mundiais de laser, radiofrequência e bioestímulo. Todos os equipamentos são certificados pela ANVISA para garantir segurança clínica absoluta.",
      icone: Shield
    },
    {
      tag: "Processo de cuidado",
      titulo: "Mapeamento minucioso e individual.",
      texto: "Cada tratamento começa com uma análise detalhada. Ouvimos seus desejos e desenhamos um mapa exclusivo para o seu rosto e corpo, respeitando seu estilo de vida e tempo de recuperação.",
      icone: HeartHandshake
    },
  ];

  const pilares = [
    {
      titulo: "Privacidade e conforto",
      desc: "Salas de atendimento individuais e climatizadas com cromoterapia e isolamento acústico."
    },
    {
      titulo: "Corpo clínico dedicado",
      desc: "Profissionais médicos e biomédicos estetas com constante atualização técnica e científica."
    },
    {
      titulo: "Acompanhamento contínuo",
      desc: "Suporte e monitoramento atenciosos em todas as etapas da sua evolução pós-procedimento."
    }
  ];

  // Clean, tight central spine curve that stays strictly within the middle corridor (x: 375 to 425)
  const spinePath = "M 400, 0 C 390, 80, 375, 160, 385, 260 C 395, 360, 425, 430, 415, 520 C 405, 610, 375, 700, 385, 800 C 395, 900, 400, 960, 400, 1000";

  return (
    <section id="clinica" className="relative w-full overflow-hidden bg-white py-32 md:py-40 text-[#1d1d1f]">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="mx-auto mb-20 md:mb-24 max-w-4xl px-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-md border border-black/10 text-xs uppercase tracking-widest text-[#86868b] mb-3">
          <Award className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
          A experiência Aura
        </div>
        <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-[#1d1d1f]">
          A <span className="font-serif-luxury italic font-normal text-[#86868b]">essência</span> <br />
          do nosso cuidado.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
          Nossa abordagem integra sensibilidade artística e rigor científico para preservar o que você tem de mais nobre.
        </p>
      </motion.div>

      {/* Interactive Timeline with Central Glass Spine */}
      <div ref={containerRef} className="mx-auto max-w-5xl px-4 sm:px-6 relative mb-20 md:mb-28">
        
        {/* Tight Central Glass Spine (Desktop & Tablet) */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-visible">
          <svg
            viewBox="0 0 800 1000"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              {/* Premium translucent glass stroke gradient */}
              <linearGradient id="glassPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(29, 29, 31, 0.15)" />
                <stop offset="30%" stopColor="rgba(29, 29, 31, 0.7)" />
                <stop offset="70%" stopColor="rgba(29, 29, 31, 0.75)" />
                <stop offset="100%" stopColor="rgba(29, 29, 31, 0.25)" />
              </linearGradient>

              {/* Specular highlight for 3D glass tube feel */}
              <linearGradient id="glassHighlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.7)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.85)" />
              </linearGradient>

              {/* 3D Glass refraction drop-shadow filter */}
              <filter id="glassTubeShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0, 0, 0, 0.08)" />
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="rgba(255, 255, 255, 0.9)" />
              </filter>
            </defs>

            {/* Static glass guide track */}
            <path
              d={spinePath}
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Main animated glass tube path */}
            <motion.path
              d={spinePath}
              style={{
                pathLength: scrollYProgress,
              }}
              stroke="url(#glassPathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glassTubeShadow)"
            />

            {/* Inner specular glass highlight */}
            <motion.path
              d={spinePath}
              style={{
                pathLength: scrollYProgress,
              }}
              stroke="url(#glassHighlightGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.85}
            />
          </svg>
        </div>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-16 md:gap-40">
          {informacoes.map((info, index) => {
            const isPar = index % 2 === 0;
            const Icon = info.icone;
            return (
              <div key={index} className="relative flex w-full flex-col items-start md:items-center md:flex-row">
                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className={`w-full md:w-1/2 ${
                    isPar ? "md:pr-16 lg:pr-20 md:text-right" : "md:ml-auto md:pl-16 lg:pl-20 md:text-left"
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 mb-2 ${isPar ? "md:justify-end" : "md:justify-start"}`}>
                    <Icon className="w-4 h-4 text-[#1d1d1f]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                      {info.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1d1d1f]">
                    {info.titulo}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#86868b]">
                    {info.texto}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust Pillars Grid with Defined Glass Panes */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-8 border-t border-[#e5e5ea]/80">
        {/* Background Distinct Blurred Blobs */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-slate-300/80 blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute left-1/3 top-4 w-72 h-72 rounded-full bg-gray-300/70 blur-[70px] -z-10 pointer-events-none" />
        <div className="absolute -right-10 bottom-4 w-80 h-80 rounded-full bg-zinc-300/80 blur-[80px] -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="relative z-10 bg-white/30 backdrop-blur-2xl border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.06)] rounded-3xl p-6 sm:p-8 hover:-translate-y-1.5 hover:bg-white/45 hover:border-white transition-all duration-300 ease-out cursor-default"
            >
              <h4 className="text-base sm:text-lg font-semibold text-[#1d1d1f] mb-2">{pilar.titulo}</h4>
              <p className="text-xs sm:text-sm font-light text-[#86868b] leading-relaxed">{pilar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cloud-like Fading Overlay into Resultados */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent via-[#f5f5f7]/60 to-[#f5f5f7] pointer-events-none z-20" />
    </section>
  );
};
