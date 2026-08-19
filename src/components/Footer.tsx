import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Calendar, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const appleEase = [0.25, 0.1, 0.25, 1] as const;

  return (
    <footer id="contato" className="relative flex w-full flex-col items-center bg-[#f5f5f7] pt-28 md:pt-36 text-[#1d1d1f] overflow-hidden">
      {/* Background Soft Refractive Blobs for Glass Refraction */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[450px] bg-slate-300/80 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-32 right-1/4 translate-x-1/2 w-[500px] h-[400px] bg-zinc-300/70 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Centerpiece Glass Container CTA */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="flex w-full flex-col items-center p-6 sm:p-12 lg:p-16 text-center bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2.5rem] sm:rounded-[3rem]"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#86868b] backdrop-blur-md border border-black/10 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={1.5} />
            Sua jornada começa aqui
          </div>

          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-[#1d1d1f]">
            Pronta para sua <br />
            <span className="font-serif-luxury italic font-normal text-[#86868b]">melhor versão?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base font-light text-[#86868b] leading-relaxed">
            Reserve sua consulta avaliativa e viva a experiência de um cuidado verdadeiramente sob medida.
          </p>

          <div className="mt-8 sm:mt-10 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white/60 backdrop-blur-lg border border-white/80 text-[#1d1d1f] font-medium px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:scale-105 hover:border-white transition-all duration-300 cursor-pointer active:scale-95 text-center"
            >
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-[#1d1d1f]" strokeWidth={1.5} />
              <span>Agendar consulta avaliativa</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Info Footer (Frosted Glass Style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: appleEase }}
        className="mt-32 w-full max-w-6xl border-t border-[#e5e5ea] px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-semibold tracking-tight text-[#1d1d1f] flex items-center gap-2">
              Aura<span className="font-light text-[#86868b]">Estética</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1d1d1f]" />
            </div>
            <p className="font-light text-[#86868b] leading-relaxed text-xs sm:text-sm">
              Clínica de estética avançada dedicada a exaltar a beleza natural por meio de tecnologia de ponta e protocolos clínicos seguros.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/60 p-2.5 text-[#1d1d1f] hover:bg-white hover:shadow-sm border border-white/80 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/60 p-2.5 text-[#1d1d1f] hover:bg-white hover:text-[#25D366] hover:shadow-sm border border-white/80 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Navegação
            </h4>
            <div className="flex flex-col gap-2.5 font-light text-xs sm:text-sm text-[#86868b]">
              <a href="#tratamentos" className="hover:text-[#1d1d1f] transition-colors">Especialidades</a>
              <a href="#clinica" className="hover:text-[#1d1d1f] transition-colors">A clínica e filosofia</a>
              <a href="#resultados" className="hover:text-[#1d1d1f] transition-colors">Resultados e depoimentos</a>
              <a href="#protocolo" className="hover:text-[#1d1d1f] transition-colors">Descubra seu protocolo</a>
              <a href="#duvidas" className="hover:text-[#1d1d1f] transition-colors">Perguntas frequentes</a>
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Contato e localização
            </h4>
            <div className="flex flex-col gap-3 font-light text-xs sm:text-sm text-[#86868b]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1d1d1f] flex-shrink-0 mt-0.5" />
                <span>Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1d1d1f] flex-shrink-0" />
                <span>(11) 99999-9999 / (11) 3214-5678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1d1d1f] flex-shrink-0" />
                <span>contato@auraestetica.com.br</span>
              </div>
            </div>
          </div>

          {/* Col 4: Working Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
              Horário de atendimento
            </h4>
            <div className="space-y-2 text-xs sm:text-sm font-light text-[#86868b]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#1d1d1f] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1d1d1f]">Segunda a sexta-feira</p>
                  <p className="text-xs text-[#86868b]">08:00 às 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#1d1d1f] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1d1d1f]">Sábados</p>
                  <p className="text-xs text-[#86868b]">09:00 às 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e5e5ea] pt-8 text-xs font-light text-[#86868b]">
          <p>© 2026 Aura Estética Avançada. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Política de privacidade</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
