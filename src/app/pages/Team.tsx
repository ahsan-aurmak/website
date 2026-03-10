import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { Link } from "react-router";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
// import ahsanPhoto from "figma:asset/ac251f02a15fe8c2fa114e0c6715434297fd7bb0.png";
// import umerPhoto from "figma:asset/c51d4711944f49a9db2afb099cbacc1d351c4b1f.png";
import masoodPhoto from "figma:asset/179a43f3ad15df719e7ed737dee335f392a63f77.png";
// import khurramPhoto from "figma:asset/3f43403ed64485597e30ae74ae8e2d35586f44df.png";

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
      role: "Chief Product Officer",
      name: "Ahsan Jalil",
      bio: "Product strategy leader with 18+ years driving user-centered innovation across SaaS and enterprise applications, transforming complex systems into intuitive digital experiences that deliver measurable business results.",
      linkedin: "https://www.linkedin.com/in/vertage/",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80"
    },
    {
      role: "Chief Operating Officer",
      name: "Umer Jalil",
      bio: "Project management executive with 15+ years executing complex, critical projects across oil & gas and manufacturing sectors, specializing in end-to-end delivery governance, stakeholder engagement, and supply chain operations.",
      linkedin: "https://www.linkedin.com/in/umar-jalil/",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80"
    },
    {
      role: "Managing Director",
      name: "Khurram Sultan",
      bio: "Business development and operations transformation consultant with 12+ years of UK leadership experience across logistics, construction, and professional services, specializing in operational excellence and sustainable growth strategies.",
      linkedin: "https://www.linkedin.com/in/khuram-sultan-555a893a4/",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div>
      <SEO
        title="Team - Vertage"
        description="Meet our expert leadership team at Vertage, driving innovation and excellence in AI and industrial automation."
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
          { name: "Team", url: "/team" }
        ])}
      />
      <Hero
        eyebrow="Team"
        title="Leadership Team."
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                <GlassCard className="h-full">
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
                          <div className="text-cyan-400 text-sm font-medium mb-2">{member.role}</div>
                          <h3 className="text-2xl font-bold text-slate-100">{member.name}</h3>
                        </div>
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="min-w-[44px] min-h-[44px] w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400">{member.bio}</p>
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
            <GlassCard className="text-center py-12 px-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
                >
                  We're Hiring
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Growing Team
                  </span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  We're building the future of AI and industrial automation. If you're passionate about solving complex challenges and driving innovation, we'd love to hear from you.
                </p>
                <Link to="/careers">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
                  >
                    View Open Positions
                  </motion.button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}