import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const HeroPremium: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const ease = [0.25, 0.1, 0.25, 1] as const;
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracker for Hero background image and content
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], [0, 70]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Smooth Parallax Depth Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease }}
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Ambiente Clínica de Estética"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Main Hero Content with Parallax Fade-Out & Elevation */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 pb-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="max-w-5xl space-y-6 sm:space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[1.08] sm:leading-[1.05] tracking-tight text-white">
            Sua beleza natural, <br />
            elevada à <span className="font-serif-luxury italic font-light text-white/90">arte.</span>
          </h1>

          <p className="mx-auto max-w-xl text-base font-light text-white/80 sm:text-lg md:text-xl leading-relaxed">
            Tecnologia de ponta e protocolos exclusivos. Um espaço projetado para o seu bem-estar absoluto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 sm:pt-6 w-full max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="w-full sm:w-auto rounded-full bg-white px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black transition-transform hover:scale-105 shadow-xl active:scale-95 cursor-pointer text-center"
            >
              Agendar consulta
            </button>
            <button
              onClick={() => handleScrollTo("tratamentos")}
              className="w-full sm:w-auto rounded-full bg-white/10 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 active:scale-95 cursor-pointer text-center"
            >
              Ver tratamentos
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Hero = HeroPremium;
