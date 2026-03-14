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
        title="Solutions"
        description="AURMAK builds industrial digitisation, real estate, and enterprise operations platforms that improve visibility, control, and delivery outcomes."
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
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <domain.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{domain.title}</h3>
                  <p className="text-slate-400">{domain.description}</p>
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{pillar.title}</h3>
                  <p className="text-slate-400">{pillar.description}</p>
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
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{context}</p>
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
