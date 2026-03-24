import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import umerPhoto from "../../assets/umar.jpeg";
import masoodPhoto from "../../assets/masood.jpeg";
import khurramPhoto from "../../assets/khurram.jpeg";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.983 3.5C4.983 4.88 3.869 6 2.492 6A2.49 2.49 0 0 1 0 3.5C0 2.12 1.115 1 2.492 1a2.49 2.49 0 0 1 2.491 2.5ZM.395 8h4.194v13.5H.395V8ZM8.36 8h4.02v1.845h.057c.56-1.062 1.93-2.182 3.972-2.182 4.246 0 5.03 2.8 5.03 6.44V21.5h-4.19v-6.555c0-1.564-.028-3.575-2.18-3.575-2.184 0-2.518 1.705-2.518 3.462V21.5H8.36V8Z" />
    </svg>
  );
}

export default function Team() {
  const team = [
    {
      role: "Co-founder",
      name: "Masood Zafar",
      bio: "Engineering executive with more than 30 years of leadership experience across power generation, manufacturing operations, and large-scale infrastructure programmes. Masood provides operational leadership and strategic oversight across AURMAK’s enterprise engagements.",
      linkedin: "https://www.linkedin.com/in/masood-zafar-7b45582a/",
      photo: masoodPhoto
    },
    {
      role: "Chief Operating Officer",
      name: "Umer Jalil",
      bio: "Programme delivery leader with more than 15 years of experience managing complex projects across manufacturing, oil and gas environments. Umer specialises in delivery governance, stakeholder coordination, and operational execution across large-scale initiatives.",
      linkedin: "https://www.linkedin.com/in/umar-jalil/",
      photo: umerPhoto
    },
    {
      role: "Managing Director",
      name: "Khurram Sultan",
      bio: "Operations and business transformation consultant with more than 12 years of leadership experience across logistics, construction, and professional services. Khurram focuses on operational performance, commercial strategy, and sustainable growth initiatives.",
      linkedin: "https://www.linkedin.com/in/khuram-sultan-555a893a4/",
      photo: khurramPhoto
    },
  ];

  return (
    <div>
      <SEO
        title="AURMAK Leadership Team"
        description="Meet the AURMAK leadership team guiding technology strategy, engineering delivery, and operational execution across global enterprise engagements."
        canonical="https://www.aurmak.com/team"
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Team", url: "/team" }
        ])}
      />
      <Hero
        eyebrow="Team"
        title="Leadership"
        lead="AURMAK’s leadership brings extensive experience across complex global enterprise engagements, guiding technology strategy, engineering delivery, and operational execution."
        badge="👥 Leadership"
      />

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Leadership{" "}
              <span className="text-[#27aae1]">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-8 dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
                  <div
                    className="items-start"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "150px minmax(0, 1fr)",
                      gap: "1.5rem",
                    }}
                  >
                    <div className="flex flex-col items-center gap-5">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className={`rounded-2xl object-cover grayscale transition-all duration-300 hover:grayscale-0 ring-2 ring-slate-700 hover:ring-cyan-500 ${
                          member.name === "Masood Zafar" ? "object-top" : ""
                        }`}
                        style={{
                          width: 150,
                          height: 190,
                          transform: member.name === "Khurram Sultan" ? "scale(1.035)" : undefined,
                          transformOrigin: member.name === "Khurram Sultan" ? "center center" : undefined,
                        }}
                      />
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#5f6b8e] transition-all duration-200 hover:bg-[#eef7fc] hover:text-[#27aae1] dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-cyan-400"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <LinkedInIcon size={18} />
                      </motion.a>
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <div
                        className="text-sm uppercase text-slate-500 dark:text-slate-400"
                        style={{ letterSpacing: "0.18em" }}
                      >
                        {member.role}
                      </div>
                      <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">{member.name}</h3>
                      <p className="mt-5 max-w-xl text-lg leading-9 text-slate-700 dark:text-slate-300">{member.bio}</p>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Global Expert{" "}
              <span className="text-[#27aae1]">Network</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>
                Alongside its leadership team, AURMAK works with a global network of specialist engineers, architects, and delivery partners supporting enterprise programmes across infrastructure systems, data platforms, and AI-enabled solutions.
              </p>
              <p>
                This model enables AURMAK to assemble the right expertise for each engagement while maintaining disciplined programme oversight and strategic leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Careers at{" "}
                  <span className="text-[#27aae1]">AURMAK</span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                  We design and build technology systems for real operational environments. If you’re motivated by solving complex technical challenges, we’d like to hear from you.
                </p>
                <Button to="/careers" size="large">
                  Explore Opportunities
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
