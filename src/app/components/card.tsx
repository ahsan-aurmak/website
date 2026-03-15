import { motion } from "motion/react";
import { ReactNode, useState } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`brand-surface relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-900/85 ${
        hover ? "hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10" : ""
      } transition-all duration-300 ${className}`}
    >
      {/* Spotlight effect on hover */}
      {hover && isHovered && (
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      className={`brand-surface-strong rounded-2xl border border-slate-200 bg-white/85 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-cyan-500/10 dark:border-slate-800/70 dark:bg-slate-900/85 dark:shadow-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
