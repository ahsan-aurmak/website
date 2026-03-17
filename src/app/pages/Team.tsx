import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import umerPhoto from "../../assets/umar.jpeg";
import masoodPhoto from "@assets/179a43f3ad15df719e7ed737dee335f392a63f77.png";
import khurramPhoto from "../../assets/khurram.jpeg";

export default function Team() {
  const team = [
    {
      role: "Chief Executive Officer",
      name: "Masood Zafar",
      bio: "Veteran engineering executive with 30 years of leadership experience including full P&L responsibility across power generation, manufacturing operations, and large-scale infrastructure projects.",
      linkedin: "https://www.linkedin.com/in/masood-zafar-7b45582a/",
      photo: masoodPhoto
    },
    {
      role: "Chief Operating Officer",
      name: "Umer Jalil",
      bio: "Project management executive with 15+ years executing complex, critical projects across oil & gas and manufacturing sectors, specializing in end-to-end delivery governance, stakeholder engagement, and supply chain operations.",
      linkedin: "https://www.linkedin.com/in/umar-jalil/",
      photo: umerPhoto
    },
    {
      role: "Managing Director",
      name: "Khurram Sultan",
      bio: "Business development and operations transformation consultant with 12+ years of UK leadership experience across logistics, construction, and professional services, specializing in operational excellence and sustainable growth strategies.",
      linkedin: "https://www.linkedin.com/in/khuram-sultan-555a893a4/",
      photo: khurramPhoto
    }
  ];

  return (
    <div>
      <SEO
        title="Leadership Team"
        description="Meet the AURMAK leadership team overseeing product strategy, operational delivery, and engineering execution across London, Ajman, and Lahore."
        canonical="https://www.aurmak.com/team"
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Team", url: "/team" }
        ])}
      />
      <Hero
        eyebrow="Team"
        title={
          <>
            Leadership{" "}
            <span className="text-[#27aae1]">Team.</span>
          </>
        }
        lead="Our leadership team aligns product strategy, operational control, and engineering delivery to ensure disciplined execution across all engagements."
        badge="👥 Expert Team"
      />

      {/* Board & Leadership */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Board &{" "}
              <span className="text-[#27aae1]">
                Leadership
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
                  <div className="flex items-start gap-6 mb-4">
                    {/* Profile Photo */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ring-2 ring-slate-700 hover:ring-cyan-500"
                    />
                    
                    {/* Name, Role, LinkedIn */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="mb-2 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{member.role}</div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{member.name}</h3>
                        </div>
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[#5f6b8e] transition-all duration-200 hover:bg-[#eef7fc] hover:text-[#27aae1] dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-cyan-400"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="relative overflow-hidden px-6 py-12 text-center dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
              <div className="pointer-events-none absolute inset-0 bg-[#27aae1]/6 dark:bg-[#27aae1]/8" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-[#27aae1] dark:text-cyan-400"
                >
                  We're Hiring
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our{" "}
                  <span className="text-[#27aae1]">
                    Growing Team
                  </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                  We're building the future of AI and industrial automation. If you're passionate about solving complex challenges and driving innovation, we'd love to hear from you.
                </p>
                <Button to="/careers" size="large">
                  View Open Positions
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
