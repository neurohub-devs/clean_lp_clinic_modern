import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface NavbarProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "A clínica", href: "#clinica" },
    { label: "Resultados", href: "#resultados" },
    { label: "Descubra seu protocolo", href: "#protocolo" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="fixed left-0 right-0 top-4 sm:top-6 z-50 flex w-full justify-center px-4 pointer-events-none"
      >
        <div
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 sm:px-6 py-3 sm:py-3.5 backdrop-blur-2xl border transition-all duration-500 pointer-events-auto ${
            scrolled
              ? "bg-white/80 border-white/80 shadow-[0_12px_36px_rgba(0,0,0,0.08)] scale-[0.99] text-[#1d1d1f]"
              : "bg-white/15 border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)] scale-100 text-white"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-xl font-semibold tracking-tight transition-colors">
              Aura<span className={`font-light transition-colors ${scrolled ? "text-[#86868b]" : "text-white/70"}`}>Estética</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className={`hidden items-center gap-7 text-sm font-medium transition-colors lg:flex ${
            scrolled ? "text-[#1d1d1f]/80" : "text-white/85"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:transition-all hover:after:w-full ${
                  scrolled
                    ? "hover:text-[#1d1d1f] after:bg-[#1d1d1f]"
                    : "hover:text-white after:bg-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20tratamentos%20da%20Aura%20Est%C3%A9tica."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium border transition-colors ${
                scrolled
                  ? "border-black/10 text-[#1d1d1f] hover:bg-black/5"
                  : "border-white/20 text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              <WhatsAppIcon className={`w-3.5 h-3.5 ${scrolled ? "text-[#1d1d1f]" : "text-white"}`} />
              WhatsApp
            </a>
            <button
              onClick={() => onOpenBooking()}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 shadow-md active:scale-95 cursor-pointer ${
                scrolled
                  ? "bg-[#1d1d1f] text-white hover:bg-black"
                  : "bg-white text-black hover:bg-white/95"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className={`md:hidden rounded-full px-3.5 py-1.5 text-xs font-semibold cursor-pointer shadow-sm active:scale-95 transition-colors ${
                scrolled
                  ? "bg-[#1d1d1f] text-white"
                  : "bg-white text-black"
              }`}
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-full p-2 focus:outline-none cursor-pointer transition-colors ${
                scrolled
                  ? "text-[#1d1d1f] hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 bg-white/95 pt-28 pb-10 px-6 backdrop-blur-2xl border-b border-[#e5e5ea] text-[#1d1d1f] shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6 max-w-lg mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-light text-[#1d1d1f] border-b border-[#f0f0f2] pb-3"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b]" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] py-3.5 text-sm font-semibold text-white shadow-lg cursor-pointer hover:bg-black transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar consulta avaliativa
                </button>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Aura%20Est%C3%A9tica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] py-3 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#1d1d1f]" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
