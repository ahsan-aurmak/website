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
      className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 relative overflow-hidden ${
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
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}