import { motion } from "motion/react";
import { ReactNode } from "react";
import { AnimatedBackground, FloatingOrbs, GridPattern } from "./animated-background";
import { Sparkles } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  title: string | ReactNode;
  lead: string;
  children?: ReactNode;
  badge?: string;
}

export function Hero({ eyebrow, title, lead, children, badge }: HeroProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden min-h-[70vh] lg:min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <FloatingOrbs />
      <GridPattern />
      <AnimatedBackground />
      
      {/* Accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              {eyebrow}
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-3xl"
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
            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium shadow-lg shadow-cyan-500/20"
          >
            {badge || "🚀 Innovation at Scale"}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}