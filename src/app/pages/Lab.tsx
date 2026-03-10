import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Cpu, Zap, Eye, Globe2, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Lab() {
  const principles = [
    {
      icon: Cpu,
      title: "Human-Led Diagnostics",
      description: "We begin with commercial and operational diagnosis before defining what should be built."
    },
    {
      icon: Zap,
      title: "Structured Build Cycles",
      description: "Product experiments are developed through controlled cycles with clear checkpoints and technical governance."
    },
    {
      icon: Eye,
      title: "Scalability Readiness",
      description: "Outputs are designed to scale, informing both client delivery and future venture opportunities."
    }
  ];

  const focusAreas = [
    "Predictive maintenance workflows for industrial reliability.",
    "Governed AI interfaces for enterprise reporting systems.",
    "Facility performance modelling for building operations.",
    "Integration accelerators for legacy modernisation programmes."
  ];

  return (
    <div>
      <Hero
        eyebrow="The Lab"
        title="The Venture Lab."
        lead="The Lab converts internal product thinking into practical delivery capability. We test, refine, and operationalise ideas using the same discipline applied to client programmes."
        badge="🔬 Innovation Lab"
      />

      {/* Principles */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{principle.title}</h3>
                  <p className="text-slate-400">{principle.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Current Focus{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Areas
                </span>
              </h2>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{area}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3klMjBmYWN0b3J5fGVufDF8fHx8MTc3Mjg5OTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial automation technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "5+", label: "Active Research Projects" },
              { value: "3", label: "Product Experiments" },
              { value: "100%", label: "Client-Informed" },
              { value: "2024", label: "Lab Established" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}