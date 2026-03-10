import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card, GlassCard } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export default function Careers() {
  const roles = [
    {
      code: "AUR-ENG-001",
      title: "Senior AI Product Engineer",
      location: "Lahore, Pakistan",
      model: "Hybrid, Full-time",
      slug: "senior-ai-product-engineer"
    },
    {
      code: "AUR-SOL-002",
      title: "Enterprise Solutions Architect",
      location: "Dubai, UAE",
      model: "Hybrid, Full-time",
      slug: "enterprise-solutions-architect"
    },
    {
      code: "AUR-ENG-003",
      title: "Full Stack Product Engineer",
      location: "Lahore, Pakistan",
      model: "On-site / Hybrid, Full-time",
      slug: "full-stack-product-engineer"
    }
  ];

  const whyJoin = [
    "Disciplined engineering culture with leadership accountability.",
    "Cross-regional collaboration across London, Dubai, and Lahore teams.",
    "Balanced exposure to client delivery and internal product development.",
    "Clear ownership, governance, and measurable outcomes."
  ];

  const hiringPipeline = [
    "Select a role and submit your application profile.",
    "Include portfolio or project links where relevant.",
    "Applications are reviewed by engineering and operations leads.",
    "Shortlisted candidates receive a structured interview plan."
  ];

  return (
    <div>
      <Hero
        eyebrow="Careers"
        title="Careers at AURMAK."
        lead="Join a team where commercial clarity, technical discipline, and accountable delivery define how work gets done."
        badge="🚀 Join Us"
      >
        <div className="flex flex-wrap gap-4">
          <Button to="#open-positions">
            View Open Roles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </Hero>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-slate-400">
              Current openings include a dedicated role detail page and direct application submission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="text-cyan-400 text-sm font-medium mb-3">{role.code}</div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">{role.title}</h3>
                  <div className="space-y-2 mb-6 flex-1">
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {role.location}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                      {role.model}
                    </div>
                  </div>
                  <Button to={`/job-detail?job=${role.slug}`} variant="ghost" className="w-full justify-between">
                    View Role & Apply
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join / Hiring Pipeline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Why Join AURMAK</h2>
                <p className="text-slate-400 mb-6">
                  Contribute to enterprise delivery while building practical product capability through our innovation model.
                </p>
                <ul className="space-y-3">
                  {whyJoin.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Hiring Pipeline</h2>
                <p className="text-slate-400 mb-6">
                  Apply through the job detail form with CV upload. Every application is reviewed through a defined evaluation process.
                </p>
                <ul className="space-y-3">
                  {hiringPipeline.map((step, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 text-sm font-medium flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}