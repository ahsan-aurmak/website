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
      description: "Define business priorities, decision constraints, and success criteria with key stakeholders.",
      icon: Users
    },
    {
      number: "02",
      title: "Audit",
      description: "Assess architecture, data quality, integrations, and process risk before technical decisions are locked.",
      icon: FileCheck
    },
    {
      number: "03",
      title: "Roadmap",
      description: "Translate findings into phased scope, ownership, milestones, and measurable delivery outcomes.",
      icon: GitBranch
    },
    {
      number: "04",
      title: "Pilot",
      description: "Validate assumptions with a controlled deployment, baseline metrics, and rapid iteration loops.",
      icon: TestTube
    },
    {
      number: "05",
      title: "Rollout",
      description: "Roll out in planned waves with release checks, environment controls, and adoption planning.",
      icon: ArrowRight
    },
    {
      number: "06",
      title: "Governance",
      description: "Run regular operating reviews covering delivery cadence, quality signals, and commercial performance.",
      icon: Shield
    },
    {
      number: "07",
      title: "Support",
      description: "Provide ongoing optimisation, incident response, and enhancement planning to maintain performance over time.",
      icon: Database
    }
  ];

  const trustMarkers = [
    {
      title: "Security Practices",
      description: "Principle-of-least-privilege access, environment isolation, and controlled credential handling."
    },
    {
      title: "Compliance Awareness",
      description: "Delivery aligned to sector obligations, audit readiness, and documented decision trails."
    },
    {
      title: "Contract Model",
      description: "Clear scope definitions, change-control process, and stage-gated commercial accountability."
    },
    {
      title: "Delivery Governance",
      description: "Fixed review cadence, escalation pathways, and transparent milestone reporting."
    },
    {
      title: "QA Approach",
      description: "Structured test coverage, regression control, and release sign-off before production rollout."
    },
    {
      title: "Data Handling",
      description: "Defined retention boundaries, role-based access, and secure transfer protocols."
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
        title="How We Work."
        lead="We deliver with a structured model that balances speed, control, and accountability from first briefing through long-term support."
        badge="⚙️ Proven Process"
      />

      {/* Delivery Lifecycle */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-[#27aae1] dark:text-cyan-400">
              Seven-stage execution model
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Delivery{" "}
              <span className="text-[#27aae1]">
                Lifecycle
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              Each stage has clear outputs, review checks, and named owners before we move ahead.
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
              Trust{" "}
              <span className="text-[#27aae1]">
                Markers
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
              We don't believe in fragmented delivery. Every engagement follows a defined method covering discovery, audit, roadmap, pilot, rollout, governance, and long-term support.
            </p>
            <Button to="/contact">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
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
        </div>
      </section>
    </div>
  );
}
