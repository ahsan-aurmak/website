import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Cpu, Zap, Eye, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

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
      <SEO
        title="Venture Lab"
        description="The AURMAK Lab develops practical experiments in predictive maintenance, enterprise AI interfaces, facility performance modelling, and integration accelerators."
        canonical="https://www.aurmak.com/lab"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Lab", url: "/lab" }
        ])}
      />
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
              <span className="text-[#27aae1]">
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
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <principle.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{principle.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{principle.description}</p>
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
                <span className="text-[#27aae1]">
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
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <p className="text-slate-700 dark:text-slate-300">{area}</p>
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
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 dark:shadow-2xl dark:shadow-cyan-500/10">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}lab_focus_areas_futuristic.png`}
                  alt="AURMAK Venture Lab - Research and Development Focus Areas"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
