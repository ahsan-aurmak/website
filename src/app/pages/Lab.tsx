import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Cpu, Zap, Eye, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";

export default function Lab() {
  const principles = [
    {
      icon: Cpu,
      title: "Human-Led Diagnostics",
      description: "We begin by analysing operational problems and commercial needs before defining what should be built."
    },
    {
      icon: Zap,
      title: "Structured Build Cycles",
      description: "Product concepts are developed through controlled build cycles with clear checkpoints and technical governance."
    },
    {
      icon: Eye,
      title: "Scalability Readiness",
      description: "Every output is designed to scale, informing both client delivery and future venture opportunities."
    }
  ];

  const focusAreas = [
    "Predictive Maintenance Workflows\nAnticipating equipment issues through AI-driven operational intelligence.",
    "Governed AI Interfaces\nSecure AI interaction layers for enterprise systems.",
    "Facility Performance Modelling\nSimulating infrastructure performance and optimisation.",
    "Integration Accelerators\nReusable frameworks for faster enterprise system integration."
  ];

  return (
    <div>
      <SEO
        title="Venture Lab for Enterprise Technology Capability"
        description="The Venture Lab strengthens AURMAK’s enterprise systems, AI-enabled operational intelligence, and delivery model through disciplined product exploration."
        canonical="https://www.aurmak.com/lab"
        keywords="venture studio, enterprise systems, AI-enabled operational intelligence, integration architecture, digital infrastructure"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Lab", url: "/lab" }
        ])}
      />
      <Hero
        eyebrow="The Lab"
        title={
          <>
            The Venture{" "}
            <span className="text-[#27aae1]">Lab</span>
          </>
        }
        lead="Where internal product ideas become real technology capability. Concepts are tested, refined, and built using the same engineering discipline that powers our client systems."
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
              How the Lab{" "}
              <span className="text-[#27aae1]">
                Operates
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

      {/* Current Exploration Areas */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovation That{" "}
              <span className="text-[#27aae1]">
                Strengthens Delivery
              </span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>
                The Venture Studio exists to explore new technology approaches that may influence how enterprise systems are designed, built, and operated.
              </p>
              <p>
                Insights from these initiatives inform AURMAK’s delivery capability, ensuring our teams remain closely connected to emerging platforms, architectures, and operational models.
              </p>
              <p>
                This work directly supports our{" "}
                <Link to="/services" className="font-medium text-[#27aae1] hover:underline">
                  services
                </Link>,{" "}
                <Link to="/solutions" className="font-medium text-[#27aae1] hover:underline">
                  solutions
                </Link>, and selected{" "}
                <Link to="/case-studies" className="font-medium text-[#27aae1] hover:underline">
                  case studies
                </Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Current Exploration{" "}
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
                    <div className="text-slate-700 dark:text-slate-300">
                      <p className="font-semibold">{area.split("\n")[0]}</p>
                      <p className="mt-1">{area.split("\n")[1]}</p>
                    </div>
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
                  alt="Illustration of venture lab exploration areas across predictive maintenance, governed AI, and integration accelerators"
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
