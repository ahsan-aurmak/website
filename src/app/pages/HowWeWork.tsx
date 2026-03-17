import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, Shield, FileCheck, GitBranch, Users, TestTube, Database } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function HowWeWork() {
  const stages = [
    {
      number: "01",
      title: "Discovery",
      description: "Define operational goals, constraints, and success metrics with leadership and technical stakeholders.",
      icon: Users
    },
    {
      number: "02",
      title: "Assessment",
      description: "Evaluate existing architecture, data environments, integrations, and operational risks.",
      icon: FileCheck
    },
    {
      number: "03",
      title: "Architecture",
      description: "Design the system architecture and define the phased delivery roadmap.",
      icon: GitBranch
    },
    {
      number: "04",
      title: "Pilot",
      description: "Validate system assumptions through controlled deployment and early operational testing.",
      icon: TestTube
    },
    {
      number: "05",
      title: "Rollout",
      description: "Deploy the system through controlled release stages with stability and adoption monitoring.",
      icon: ArrowRight
    },
    {
      number: "06",
      title: "Governance",
      description: "Run structured operating reviews tracking delivery progress, system performance, and commercial outcomes.",
      icon: Shield
    },
    {
      number: "07",
      title: "Support & Optimisation",
      description: "Provide ongoing system optimisation, enhancements, and operational support.",
      icon: Database
    }
  ];

  const trustMarkers = [
    {
      title: "Security Practices",
      description: "Secure development processes and infrastructure standards are embedded throughout system design and deployment."
    },
    {
      title: "Compliance Standards",
      description: "Delivery processes align with recognised security, data protection, and operational compliance requirements."
    },
    {
      title: "Contract Model",
      description: "Engagements operate under clearly defined delivery scopes, milestones, and accountability frameworks."
    },
    {
      title: "Governance Cadence",
      description: "Regular operating reviews track delivery progress, system performance, and key programme risks."
    },
    {
      title: "QA Discipline",
      description: "Structured testing and quality assurance ensure system stability, performance, and reliability before release."
    },
    {
      title: "Data Handling",
      description: "Clear data governance frameworks protect system integrity, access control, and operational transparency."
    }
  ];

  return (
    <div>
      <SEO
        title="Enterprise Delivery Model and Implementation Approach"
        description="Learn how AURMAK delivers enterprise systems through a structured model covering discovery, audit, roadmap, pilot, rollout, governance, and long-term support."
        canonical="https://www.aurmak.com/how-we-work"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "How We Work", url: "/how-we-work" }
        ])}
      />
      <Hero
        eyebrow="Delivery Framework"
        title="Structured Delivery for Complex Systems"
        lead="Every engagement follows a defined execution model from discovery and architecture through deployment and long-term system optimisation."
        badge="⚙️ Structured Delivery"
      >
        <Button to="/contact">
          Start a Conversation
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Hero>

      {/* Delivery Lifecycle */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Delivery{" "}
              <span className="text-[#27aae1]">
                Framework
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              Each engagement follows defined stages with clear outputs, review checkpoints, and accountable ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/40 p-6 dark:border-slate-800/70 dark:bg-transparent md:p-8 lg:p-10"
          >
            <div className="relative mx-auto max-w-4xl">
              <div
                className="absolute bottom-3 left-7 top-3 w-px bg-[#27aae1]/25 dark:bg-slate-700"
                aria-hidden="true"
              />
              <div className="space-y-12 md:space-y-14">
                {stages.map((stage, index) => (
                  <motion.div
                    key={`${stage.number}-${stage.title}-timeline`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative flex items-start gap-8"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#27aae1]/30 bg-[#eef7fc] text-lg font-semibold text-[#27aae1] shadow-sm dark:border-cyan-400/20 dark:bg-slate-900 dark:text-cyan-400 dark:shadow-none">
                      {stage.number}
                    </div>
                    <div className="min-w-0 pt-1 text-left">
                      <h3 className="text-2xl font-semibold">{stage.title}</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Trust Markers */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Delivery{" "}
              <span className="text-[#27aae1]">
                Standards
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
              Structured safeguards ensure systems are delivered securely, reliably, and in alignment with enterprise operational standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {trustMarkers.map((marker, index) => (
              <motion.div
                key={marker.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card hover={false} className="h-full border-slate-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{marker.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{marker.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
