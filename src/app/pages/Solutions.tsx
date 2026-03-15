import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Brain, Server, Zap, Database, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { GlassCard } from "../components/card";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function Solutions() {
  const domains = [
    {
      icon: Zap,
      title: "Power & Construction Systems",
      description: "Operational platforms for power and construction contexts requiring controlled delivery and real-time visibility."
    },
    {
      icon: Server,
      title: "Real Estate & Industrial Platforms",
      description: "Enterprise dashboards, ERP systems, and automation layers designed around measurable business outcomes."
    }
  ];

  const pillars = [
    {
      icon: Brain,
      title: "Single Pane",
      description: "Operational and executive visibility in one interface."
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Consistent metrics with auditable lineage across systems."
    },
    {
      icon: Zap,
      title: "Operational Pace",
      description: "Faster decisions with context-rich, live reporting."
    }
  ];

  const contexts = [
    "Production oversight and operations intelligence.",
    "Facilities and estate performance monitoring.",
    "Portfolio-level reporting and project control environments.",
    "Regional command views for distributed operations teams."
  ];

  return (
    <div>
      <SEO
        title="Enterprise Solutions for Operations, Infrastructure, and Real Estate"
        description="Explore AURMAK solutions for industrial digitisation, real estate platforms, and enterprise operations systems that improve visibility, control, and performance."
        canonical="https://www.aurmak.com/solutions"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" }
        ])}
      />
      <Hero
        eyebrow="Solutions"
        title="Industrial Digitisation."
        lead="We build systems that give teams clearer operational visibility, tighter execution control, and faster decisions."
        badge="🏭 Digital Transformation"
      />

      {/* Solution Domains */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                      <domain.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{domain.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{domain.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Pillars */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Three Outcome{" "}
              <span className="text-[#27aae1]">
                Pillars
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <pillar.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{pillar.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Deployment Contexts */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Deployment{" "}
                <span className="text-[#27aae1]">
                  Contexts
                </span>
              </h2>
              <div className="space-y-4">
                {contexts.map((context, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <p className="text-slate-700 dark:text-slate-300">{context}</p>
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
                  src={`${import.meta.env.BASE_URL}deployment_contexts_futuristic.png`}
                  alt="AURMAK Deployment Contexts - Cloud, Edge, and Data Center Infrastructure"
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
