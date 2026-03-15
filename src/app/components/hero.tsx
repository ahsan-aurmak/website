import { motion } from "motion/react";
import { ReactNode } from "react";
import { AnimatedBackground, FloatingOrbs, GridPattern } from "./animated-background";
import { Sparkles } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  kicker?: string;
  title: string | ReactNode;
  lead: string;
  children?: ReactNode;
  badge?: string;
  align?: "left" | "center";
  size?: "default" | "large";
}

export function Hero({
  eyebrow,
  kicker,
  title,
  lead,
  children,
  badge,
  align = "left",
  size = "default",
}: HeroProps) {
  const eyebrowText = eyebrow || kicker;
  const alignmentClassName = align === "center" ? "max-w-5xl mx-auto text-center" : "max-w-4xl";
  const titleClassName = size === "large"
    ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
    : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden min-h-[70vh] lg:min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <FloatingOrbs />
      <GridPattern />
      <AnimatedBackground />
      
      {/* Accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#27aae1]/25 dark:bg-[#27aae1]/35" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2CB5E3]/8 via-transparent to-transparent dark:from-cyan-500/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={alignmentClassName}
        >
          {eyebrowText && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#27aae1]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#27aae1] backdrop-blur-sm dark:bg-[#1B2A6B]/40"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2} />
              {eyebrowText}
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${titleClassName} font-bold mb-6 leading-tight`}
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mb-8 text-xl leading-relaxed text-[#5f6b8e] dark:text-slate-300 md:text-2xl ${align === "center" ? "max-w-4xl mx-auto" : "max-w-3xl"}`}
          >
            {lead}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-[#27aae1]/20 bg-white/90 px-6 py-3 text-sm font-medium text-[#27aae1] shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-cyan-500/30 dark:bg-[#1B2A6B]/75 dark:text-cyan-300 dark:shadow-cyan-500/10"
          >
            {badge || "🚀 Innovation at Scale"}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
