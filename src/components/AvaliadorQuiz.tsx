import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Sun, 
  Diamond, 
  Leaf, 
  ShieldCheck, 
  Droplets, 
  Activity, 
  Clock, 
  Zap, 
  Check, 
  ArrowRight, 
  RotateCcw, 
  Calendar, 
  CheckCircle2 
} from "lucide-react";

interface AvaliadorQuizProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const AvaliadorQuiz: React.FC<AvaliadorQuizProps> = ({ onOpenBooking }) => {
  const [step, setStep] = useState<number>(1);
  const [objetivo, setObjetivo] = useState<string>("");
  const [tipoPele, setTipoPele] = useState<string>("");
  const [prazo, setPrazo] = useState<string>("");

  const objetivos = [
    { 
      id: "rejuvenescimento", 
      label: "Rejuvenescimento e firmeza", 
      icon: Sparkles, 
      desc: "Estimular colágeno, suavizar linhas e recuperar a elasticidade natural" 
    },
    { 
      id: "glow", 
      label: "Glow e uniformidade do tom", 
      icon: Sun, 
      desc: "Clarear manchas solares, diminuir poros e iluminar a pele" 
    },
    { 
      id: "contorno", 
      label: "Contorno e definição facial", 
      icon: Diamond, 
      desc: "Realçar mandíbula e maçãs do rosto, restaurando volumes de forma sutil" 
    },
    { 
      id: "corporal", 
      label: "Drenagem e modelagem corporal", 
      icon: Leaf, 
      desc: "Aliviar a retenção hídrica, tratar celulite e firmar tecidos" 
    },
  ];

  const tiposPele = [
    { 
      id: "sensivel", 
      label: "Sensível ou reativa", 
      icon: ShieldCheck, 
      desc: "Pele fina com tendência a vermelhidão e sensibilidade ao toque" 
    },
    { 
      id: "seca", 
      label: "Seca ou desidratada", 
      icon: Droplets, 
      desc: "Sensação de repuxamento, textura opaca e necessidade de viço" 
    },
    { 
      id: "mista_oleosa", 
      label: "Mista a oleosa", 
      icon: Activity, 
      desc: "Brilho na zona T, poros perceptíveis e tendência a oleosidade" 
    },
    { 
      id: "madura", 
      label: "Madura ou com linhas", 
      icon: Sparkles, 
      desc: "Sinais de perda de sustentação dérmica e linhas de expressão" 
    },
  ];

  const prazos = [
    { 
      id: "imediato", 
      label: "Efeito imediato (pré-evento)", 
      icon: Zap,
      desc: "Luminosidade e viço imediatos sem necessidade de repouso" 
    },
    { 
      id: "progressivo", 
      label: "Resultados duradouros e estruturais", 
      icon: Diamond,
      desc: "Transformação consistente por meio de bioestímulo profundo" 
    },
    { 
      id: "manutencao", 
      label: "Prevenção e cuidado contínuo", 
      icon: Clock,
      desc: "Manter a pele e o corpo sempre saudáveis, firmes e equilibrados" 
    },
  ];

  const resetQuiz = () => {
    setStep(1);
    setObjetivo("");
    setTipoPele("");
    setPrazo("");
  };

  // Logic to determine recommended protocol
  const getRecommendation = () => {
    if (objetivo === "corporal") {
      return {
        protocolo: "Protocolo Aura Silhouette & Drenagem High-Tech",
        tratamentoBase: "Terapia Corporal Avançada",
        descricao: "Combinação de drenagem computadorizada de alta precisão, ultrassom focado e massoterapia modeladora para desintoxicação linfática e remodelação corporal.",
        beneficios: ["Desintoxicação linfática imediata", "Atenuação de celulite e melhora do tônus", "Sensação imediata de leveza e bem-estar"],
        indicacao: "Sessões semanais com acompanhamento biométrico"
      };
    }
    if (objetivo === "glow") {
      return {
        protocolo: "Protocolo Aura Luminescence & Laser",
        tratamentoBase: "Laser Premium & Luz Pulsada",
        descricao: "Infusão dérmica de peptídeos antioxidantes associada a disparos de luz pulsada de última geração para uniformização do tom e fechamento dos poros.",
        beneficios: ["Clareamento de melasma e manchas solares", "Luminosidade pura com textura sedosa", "Estímulo de colágeno sem descamação agressiva"],
        indicacao: "Ciclo de 3 a 4 sessões personalizadas"
      };
    }
    if (objetivo === "contorno") {
      return {
        protocolo: "Protocolo Aura Harmony & Bioestimulação",
        tratamentoBase: "Harmonização & Bioestimuladores",
        descricao: "Arquitetura facial sob medida com microdoses de bioestimulador e ácido hialurônico de alta pureza para sustentação elegante, harmônica e natural.",
        beneficios: ["Definição natural do contorno mandibular e malar", "Estímulo contínuo de colágeno por até 24 meses", "Preservação integral da mímica facial"],
        indicacao: "Avaliação clínica prévia individualizada"
      };
    }
    // Default / Rejuvenescimento
    return {
      protocolo: "Protocolo Aura Eternal Glow & Criofrequência 3D",
      tratamentoBase: "Criofrequência & Lifting 3D",
      descricao: "Tecnologia de choque térmico aliada a ativos de hidratação celular profunda. Proporciona efeito tensor imediato e reorganização das fibras de sustentação.",
      beneficios: ["Efeito lifting e tensor imediato", "Suavização das linhas de expressão", "Reforço da barreira de hidratação celular"],
      indicacao: "Protocolo de 4 sessões com manutenção bimestral"
    };
  };

  const recommendation = getRecommendation();

  return (
    <section id="protocolo" className="relative w-full bg-[#f5f5f7] py-32 md:py-40 text-[#1d1d1f] overflow-hidden">
      {/* Background Soft Refractive Shapes for Frosted Glass Effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-slate-300/80 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[420px] h-[420px] bg-zinc-300/70 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-slate-200/90 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center mb-14 max-w-4xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-md border border-black/10 text-xs uppercase tracking-widest text-[#86868b] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
            Guia interativo
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#1d1d1f] leading-[1.1]">
            Descubra seu <span className="font-serif-luxury italic font-normal text-[#86868b]">protocolo ideal.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
            Responda 3 perguntas rápidas para receber uma recomendação desenhada sob medida para as necessidades da sua pele.
          </p>
        </motion.div>

        {/* Minimalist Progress Indicator & Frosted Glass Panel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === i
                    ? "w-8 bg-[#1d1d1f]"
                    : step > i
                    ? "w-3 bg-[#86868b]"
                    : "w-1.5 bg-[#d2d2d7]"
                }`}
              />
            ))}
          </div>

          {/* True Frosted Glassmorphism Panel */}
          <div className="rounded-[2.5rem] bg-white/30 p-6 sm:p-10 md:p-12 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
          <AnimatePresence mode="wait">
            {/* STEP 1: Objetivo */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#86868b]">Passo 1 de 3</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">Qual é o seu objetivo principal hoje?</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {objetivos.map((obj) => {
                    const Icon = obj.icon;
                    const isSelected = objetivo === obj.id;
                    return (
                      <button
                        key={obj.id}
                        onClick={() => {
                          setObjetivo(obj.id);
                          setStep(2);
                        }}
                        className={`group text-left p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out cursor-pointer hover:scale-[1.02] shadow-sm ${
                          isSelected
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-lg"
                            : "bg-white/40 border-white/50 hover:bg-white/70 hover:border-white/70 hover:shadow-md text-[#1d1d1f]"
                        }`}
                      >
                        <div className="mb-4">
                          <Icon 
                            className={`w-6 h-6 transition-colors ${
                              isSelected ? "text-white" : "text-[#1d1d1f]/80 group-hover:text-[#1d1d1f]"
                            }`} 
                            strokeWidth={1.2} 
                          />
                        </div>
                        <h4 className="font-medium text-base mb-1.5">{obj.label}</h4>
                        <p className={`text-xs font-light leading-relaxed ${isSelected ? "text-white/70" : "text-[#86868b]"}`}>
                          {obj.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Tipo de Pele */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#86868b]">Passo 2 de 3</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">Como você descreve sua pele?</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tiposPele.map((tp) => {
                    const Icon = tp.icon;
                    const isSelected = tipoPele === tp.id;
                    return (
                      <button
                        key={tp.id}
                        onClick={() => {
                          setTipoPele(tp.id);
                          setStep(3);
                        }}
                        className={`group text-left p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out cursor-pointer hover:scale-[1.02] shadow-sm ${
                          isSelected
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-lg"
                            : "bg-white/40 border-white/50 hover:bg-white/70 hover:border-white/70 hover:shadow-md text-[#1d1d1f]"
                        }`}
                      >
                        <div className="mb-4">
                          <Icon 
                            className={`w-6 h-6 transition-colors ${
                              isSelected ? "text-white" : "text-[#1d1d1f]/80 group-hover:text-[#1d1d1f]"
                            }`} 
                            strokeWidth={1.2} 
                          />
                        </div>
                        <h4 className="font-medium text-base mb-1.5">{tp.label}</h4>
                        <p className={`text-xs font-light leading-relaxed ${isSelected ? "text-white/70" : "text-[#86868b]"}`}>
                          {tp.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
                  >
                    ← Voltar ao passo anterior
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Prazo / Intenção */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#86868b]">Passo 3 de 3</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1d1d1f]">Qual a sua expectativa de tempo?</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {prazos.map((prz) => {
                    const Icon = prz.icon;
                    const isSelected = prazo === prz.id;
                    return (
                      <button
                        key={prz.id}
                        onClick={() => {
                          setPrazo(prz.id);
                          setStep(4);
                        }}
                        className={`group text-left p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out cursor-pointer flex items-center justify-between hover:scale-[1.02] shadow-sm ${
                          isSelected
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-lg"
                            : "bg-white/40 border-white/50 hover:bg-white/70 hover:border-white/70 hover:shadow-md text-[#1d1d1f]"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <Icon 
                            className={`w-6 h-6 mt-0.5 flex-shrink-0 transition-colors ${
                              isSelected ? "text-white" : "text-[#1d1d1f]/80 group-hover:text-[#1d1d1f]"
                            }`} 
                            strokeWidth={1.2} 
                          />
                          <div>
                            <h4 className="font-medium text-base mb-1">{prz.label}</h4>
                            <p className={`text-xs font-light leading-relaxed ${isSelected ? "text-white/70" : "text-[#86868b]"}`}>
                              {prz.desc}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className={`w-4 h-4 ml-4 flex-shrink-0 transition-transform group-hover:translate-x-1 ${isSelected ? "text-white" : "text-[#86868b]"}`} strokeWidth={1.5} />
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
                  >
                    ← Voltar ao passo anterior
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Resultado Sob Medida */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1d1d1f]">
                    <CheckCircle2 className="w-4 h-4 text-[#1d1d1f]" strokeWidth={1.5} />
                    Protocolo recomendado
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Refazer teste
                  </button>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
                    {recommendation.protocolo}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#86868b]">
                    {recommendation.descricao}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/40 p-6 space-y-4 border border-white/60 backdrop-blur-md shadow-sm">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                    Benefícios em destaque
                  </h4>
                  <ul className="space-y-2.5 text-xs font-light text-[#86868b]">
                    {recommendation.beneficios.map((ben, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#1d1d1f] flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-[#1d1d1f]/90">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(recommendation.tratamentoBase)}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] py-4 px-8 text-sm font-semibold text-white shadow-xl hover:scale-[1.02] hover:bg-black active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" strokeWidth={1.5} />
                    Agendar protocolo personalizado
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </motion.div>
      </div>

      {/* Cloud-like Fading Overlay into Clinica Journey */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-20" />
    </section>
  );
};
