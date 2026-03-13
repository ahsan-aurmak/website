import { motion } from "motion/react";

interface StatCalloutProps {
  value: string;
  body: string;
  accent?: string;
  align?: "left" | "center";
}

export function StatCallout({
  value,
  body,
  accent = "from-cyan-400 to-blue-500",
  align = "left",
}: StatCalloutProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mx-auto max-w-3xl ${alignment}`}
    >
      <div className="grid gap-5 border-l border-slate-700/80 pl-5 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8 sm:pl-6">
        <div className="relative">
          <div className={`mb-4 h-px w-16 bg-gradient-to-r ${accent}`} />
          <div className={`text-3xl font-semibold leading-none sm:text-4xl bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {value}
          </div>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
