import { motion } from "motion/react";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          top: "30%",
          right: "-10%",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)",
          bottom: "-20%",
          left: "20%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function HeroGradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main dramatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20" />
      
      {/* Animated mesh overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(6, 182, 212, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 40% 80%, rgba(168, 85, 247, 0.3) 0px, transparent 50%),
            radial-gradient(at 90% 70%, rgba(236, 72, 153, 0.2) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Moving light streaks */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </div>
  );
}
