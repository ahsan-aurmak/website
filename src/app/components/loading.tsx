import { motion } from "motion/react";

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
      />
    </div>
  );
}
