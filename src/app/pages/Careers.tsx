import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card, GlassCard } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function Careers() {
  const roles = [
    {
      code: "AUR-ENG-001",
      title: "Tech Lead (Backend/AI)",
      location: "Lahore, Pakistan",
      model: "Hybrid, Full-time",
      slug: "tech-lead-backend-ai"
    },
    {
      code: "AUR-DEL-002",
      title: "Product Owner (Delivery Lead)",
      location: "Lahore, Pakistan",
      model: "Hybrid, Full-time",
      slug: "product-owner-delivery-lead"
    },
    {
      code: "AUR-FE-003",
      title: "Frontend Developer (SaaS & Modern UI)",
      location: "Lahore, Pakistan",
      model: "On-site / Hybrid, Full-time",
      slug: "frontend-developer-saas-modern-ui"
    }
  ];

  const whyJoin = [
    "Disciplined engineering culture with leadership accountability.",
    "Cross-regional collaboration across London, Dubai, and Lahore teams.",
    "Balanced exposure to client delivery and internal product development.",
    "Clear ownership, governance, and measurable outcomes."
  ];

  const benefits = [
    "Opportunity to work from AURMAK's Dubai and London offices.",
    "Long-term team members may be offered a permanent role in an AURMAK international office.",
    "After successful completion of probation, eligibility for a company car.",
    "After successful completion of probation, eligibility for medical insurance and paid holidays."
  ];

  return (
    <div>
      <SEO
        title="Careers at AURMAK"
        description="Explore current AURMAK roles across engineering, delivery, frontend development, and rapid prototyping within our global delivery model."
        canonical="https://www.aurmak.com/careers"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" }
        ])}
      />
      <Hero
        eyebrow="Careers"
        title={
          <>
            Careers at{" "}
            <span className="text-[#27aae1]">AURMAK.</span>
          </>
        }
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
              <span className="text-[#27aae1]">
                Positions
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
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
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">{role.title}</h3>
                  <div className="space-y-2 mb-6 flex-1">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="mr-2 h-4 w-4 text-[#27aae1] dark:text-cyan-400" />
                      {role.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Briefcase className="mr-2 h-4 w-4 text-[#27aae1] dark:text-cyan-400" />
                      {role.model}
                    </div>
                  </div>
                  <Button to={`/careers/${role.slug}`} variant="ghost" className="w-full justify-between">
                    View Role & Apply
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join / Benefits */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Why Join AURMAK</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  Contribute to enterprise delivery while building practical product capability through our innovation model.
                </p>
                <ul className="space-y-3">
                  {whyJoin.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#27aae1] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{point}</span>
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
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Company Benefits</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  We invest in long-term team development with international exposure and structured benefits after probation.
                </p>
                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#27aae1] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
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
