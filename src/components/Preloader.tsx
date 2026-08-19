import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"intro" | "vortex" | "exit">("intro");
  const luxuryEase = [0.76, 0, 0.24, 1] as const;

  useEffect(() => {
    // Lock scroll during entrance
    document.body.style.overflow = "hidden";

    // Phase 1: Intro logo reveal & vortex ignition (~700ms)
    const t1 = setTimeout(() => {
      setPhase("vortex");
    }, 750);

    // Phase 2: Fluid morph & vortex unravel (~1400ms)
    const t2 = setTimeout(() => {
      setPhase("exit");
    }, 1500);

    // Phase 3: Final unlock (~1800ms)
    const t3 = setTimeout(() => {
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
    }, 1850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.15,
        filter: "blur(24px)",
      }}
      transition={{ duration: 0.85, ease: luxuryEase }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070708] text-white select-none overflow-hidden pointer-events-none"
      style={{ perspective: 1200 }}
    >
      {/* 1. Deep 3D Ambient Glowing Vortices */}
      <motion.div
        animate={{
          scale: phase === "vortex" ? [1, 1.4, 2] : [0.8, 1],
          opacity: phase === "exit" ? 0 : [0.2, 0.5, 0.3],
          rotate: phase === "vortex" ? 180 : 0,
        }}
        transition={{ duration: 1.6, ease: luxuryEase }}
        className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-white/[0.08] via-slate-400/[0.04] to-transparent blur-[140px] pointer-events-none"
      />

      {/* 2. Organic 3D Fluid Glass Ribbons (Multi-layered SVG Morph) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 600 600"
          className="w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] overflow-visible"
        >
          <defs>
            {/* Glass ribbon gradient 1 */}
            <linearGradient id="fluidGlassGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="35%" stopColor="rgba(255, 255, 255, 0.85)" />
              <stop offset="70%" stopColor="rgba(200, 210, 230, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
            </linearGradient>

            {/* Glass ribbon gradient 2 */}
            <linearGradient id="fluidGlassGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.75)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
            </linearGradient>

            {/* Specular 3D glow filter */}
            <filter id="ribbonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="rgba(255, 255, 255, 0.4)" />
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(255, 255, 255, 0.8)" />
            </filter>
          </defs>

          {/* Ribbon Filament Layer 1 (Outer swirl) */}
          <motion.path
            d="M 300,300 m -180,0 a 180,180 0 1,0 360,0 a 180,180 0 1,0 -360,0"
            fill="none"
            stroke="url(#fluidGlassGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#ribbonGlow)"
            initial={{ pathLength: 0, rotate: -45, scale: 0.7, opacity: 0 }}
            animate={{
              pathLength: [0, 0.85, 1],
              rotate: phase === "vortex" ? 360 : 180,
              scale: phase === "exit" ? 2.2 : phase === "vortex" ? 1.25 : 1,
              opacity: phase === "exit" ? 0 : 0.9,
            }}
            transition={{ duration: 1.6, ease: luxuryEase }}
          />

          {/* Ribbon Filament Layer 2 (Inner undulating wave) */}
          <motion.path
            d="M 120,300 C 180,180 240,420 300,300 C 360,180 420,420 480,300"
            fill="none"
            stroke="url(#fluidGlassGrad2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
            animate={{
              pathLength: [0, 1],
              scale: phase === "exit" ? 2.5 : phase === "vortex" ? 1.3 : 1,
              rotate: phase === "vortex" ? -180 : 0,
              opacity: phase === "exit" ? 0 : 0.75,
            }}
            transition={{ duration: 1.5, ease: luxuryEase }}
          />

          {/* Ribbon Filament Layer 3 (Elliptical 3D depth orbital ring) */}
          <motion.ellipse
            cx="300"
            cy="300"
            rx="220"
            ry="75"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="12 18"
            initial={{ rotate: -25, scale: 0.6, opacity: 0 }}
            animate={{
              rotate: phase === "vortex" ? 155 : 35,
              scale: phase === "exit" ? 2.8 : phase === "vortex" ? 1.2 : 1,
              opacity: phase === "exit" ? 0 : 0.5,
            }}
            transition={{ duration: 1.6, ease: luxuryEase }}
          />
        </svg>
      </div>

      {/* 3. Core Brand Identity (Organic Unravel & Dissolve) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{
          opacity: phase === "exit" ? 0 : 1,
          scale: phase === "vortex" ? 1.08 : 1,
          letterSpacing: phase === "vortex" ? "0.08em" : "0em",
          y: phase === "exit" ? -30 : 0,
        }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="relative z-20 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white flex items-center justify-center gap-2.5">
          Aura
          <span className="font-serif-luxury italic font-light text-white/90">
            Estética
          </span>
        </h1>

        <motion.div
          animate={{
            opacity: phase === "vortex" ? 0.3 : 0.6,
            letterSpacing: phase === "vortex" ? "0.45em" : "0.3em",
          }}
          transition={{ duration: 0.8 }}
          className="mt-3.5 text-[11px] uppercase font-light text-white/60"
        >
          Alta tecnologia e autocuidado
        </motion.div>
      </motion.div>

      {/* 4. Ambient Sparkles / Luminous Particle Flakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${45 + (i % 3) * 10}%`,
              y: `${45 + Math.floor(i / 3) * 10}%`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: `${30 + Math.sin(i * 1.5) * 40}%`,
              y: `${30 + Math.cos(i * 1.5) * 40}%`,
              scale: phase === "vortex" ? [0, 1.5, 0] : 1,
              opacity: phase === "exit" ? 0 : [0, 0.8, 0],
            }}
            transition={{
              duration: 1.4,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
          />
        ))}
      </div>
    </motion.div>
  );
};
