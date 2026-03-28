import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import umerPhoto from "../../assets/umar.jpeg";
import masoodPhoto from "../../assets/masood.jpeg";
import khurramPhoto from "../../assets/khurram.jpeg";
import { useLanguage } from "../components/language-provider";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.983 3.5C4.983 4.88 3.869 6 2.492 6A2.49 2.49 0 0 1 0 3.5C0 2.12 1.115 1 2.492 1a2.49 2.49 0 0 1 2.491 2.5ZM.395 8h4.194v13.5H.395V8ZM8.36 8h4.02v1.845h.057c.56-1.062 1.93-2.182 3.972-2.182 4.246 0 5.03 2.8 5.03 6.44V21.5h-4.19v-6.555c0-1.564-.028-3.575-2.18-3.575-2.184 0-2.518 1.705-2.518 3.462V21.5H8.36V8Z" />
    </svg>
  );
}

export default function Team() {
  const { localizePath, t } = useLanguage();

  const team = [
    {
      role: t("team.member1Role"),
      name: "Masood Zafar",
      bio: t("team.member1Bio"),
      linkedin: "https://www.linkedin.com/in/masood-zafar-7b45582a/",
      photo: masoodPhoto,
    },
    {
      role: t("team.member2Role"),
      name: "Umer Jalil",
      bio: t("team.member2Bio"),
      linkedin: "https://www.linkedin.com/in/umar-jalil/",
      photo: umerPhoto,
    },
    {
      role: t("team.member3Role"),
      name: "Khurram Sultan",
      bio: t("team.member3Bio"),
      linkedin: "https://www.linkedin.com/in/khuram-sultan-555a893a4/",
      photo: khurramPhoto,
    },
  ];

  return (
    <div>
      <SEO
        title={t("team.seoTitle")}
        description={t("team.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/team")}`}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.about"), url: localizePath("/about") },
          { name: t("navigation.team"), url: localizePath("/team") },
        ])}
      />
      <Hero
        eyebrow={t("team.eyebrow")}
        title={t("team.heroTitle")}
        lead={t("team.heroLead")}
        badge={t("team.heroBadge")}
      />

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("team.sectionTitleLead")} <span className="text-[#27aae1]">{t("team.sectionTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-8 dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
                  <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-6">
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

                    <div className="flex min-w-0 flex-col text-center lg:text-left">
                      <div className="text-sm uppercase text-slate-500 dark:text-slate-400" style={{ letterSpacing: "0.18em" }}>
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

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t("team.networkTitleLead")} <span className="text-[#27aae1]">{t("team.networkTitleHighlight")}</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>{t("team.networkBody1")}</p>
              <p>{t("team.networkBody2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
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
                  {t("team.careersTitleLead")} <span className="text-[#27aae1]">{t("team.careersTitleHighlight")}</span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{t("team.careersBody")}</p>
                <Button to="/careers" size="large">
                  {t("team.careersCta")}
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
