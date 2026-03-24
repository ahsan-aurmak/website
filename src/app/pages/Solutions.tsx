import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Brain, Server, Zap, Database, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { GlassCard } from "../components/card";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Button } from "../components/button";
import { Link } from "react-router";

export default function Solutions() {
  const domains = [
    {
      icon: Zap,
      title: "Infrastructure Operations",
      description:
        "Platforms designed for environments where infrastructure, facilities, or equipment must be monitored and managed in real time.",
    },
    {
      icon: Server,
      title: "Asset & Portfolio Management",
      description:
        "Systems that connect operational dashboards, performance data, and reporting environments across complex asset portfolios.",
    },
    {
      icon: Building2,
      title: "Enterprise Operations",
      description:
        "Integrated operational systems that bring together data, workflows, and decision environments across complex organisations.",
    },
  ];

  const pillars = [
    {
      icon: Brain,
      title: "Single Pane Visibility",
      description: "A unified operational view across systems, assets, and performance data.",
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Reliable, governed data that supports accurate reporting and confident decisions.",
    },
    {
      icon: Zap,
      title: "Operational Pace",
      description: "Faster operational decisions enabled by integrated systems and real-time visibility.",
    },
  ];

  const contexts = [
    "Operational monitoring and performance intelligence",
    "Facilities and estate performance monitoring",
    "Portfolio-level reporting across projects and assets",
    "Regional operational dashboards for multi-region teams",
  ];

  return (
    <div>
      <SEO
        title="Operational Solutions for Complex Enterprise Environments"
        description="AURMAK delivers enterprise systems that improve operational control, data governance, and decision-making across complex operational environments."
        canonical="https://www.aurmak.com/solutions"
        keywords="enterprise systems, digital infrastructure, operational reporting, data governance, system scalability, operational ROI"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ])}
      />
      <Hero
        eyebrow="Solutions"
        title={
          <>
            Operational Solutions.{" "}
            <span className="text-[#27aae1]">
              Built for Complex Environments.
            </span>
          </>
        }
        lead="We design and deliver enterprise systems that improve visibility, strengthen operational control, and support faster decision-making across complex environments."
        badge="🏭 Operational Systems"
      >
        <Button to="/contact">
          Start a Conversation
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Hero>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Where Our{" "}
              <span className="text-[#27aae1]">
                Systems Operate
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Operational{" "}
                <span className="text-[#27aae1]">
                  Environments
                </span>
              </h2>
              <div className="space-y-4">
                {contexts.map((context, index) => (
                  <motion.div
                    key={context}
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
                  src={`${import.meta.env.BASE_URL}deployment_contexts_futuristic.jpg`}
                  alt="Diagram showing infrastructure operations, estate monitoring, and portfolio reporting environments"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Operational{" "}
              <span className="text-[#27aae1]">
                Outcomes
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-4xl text-center"
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">
              Enterprise systems require careful planning and structured delivery. Our teams work with organisations to design technology solutions aligned with operational goals and long-term performance.
            </p>
            <p className="mt-6 text-base text-slate-500 dark:text-slate-500">
              Explore related proof in the{" "}
              <Link to="/smart-building-platform" className="font-medium text-[#27aae1] hover:underline">
                Metrikus
              </Link>{" "}
              and{" "}
              <Link to="/government-services-portal" className="font-medium text-[#27aae1] hover:underline">
                Dubai Trade
              </Link>{" "}
              case studies, or review our{" "}
              <Link to="/services" className="font-medium text-[#27aae1] hover:underline">
                services
              </Link>.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
