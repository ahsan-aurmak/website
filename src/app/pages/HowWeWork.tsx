import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card, GlassCard } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, Shield, FileCheck, GitBranch, Users, TestTube, Database } from "lucide-react";

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
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              Seven-stage execution model
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Delivery{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Lifecycle
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each stage has clear outputs, review checks, and named owners before we move ahead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-7xl font-bold text-cyan-500/5">
                    {stage.number}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-cyan-400 text-sm font-medium mb-2">Stage {stage.number}</div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3">{stage.title}</h3>
                    <p className="text-slate-400 text-sm">{stage.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Markers
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
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
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{marker.title}</h3>
                  <p className="text-slate-400 text-sm">{marker.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}