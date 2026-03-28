import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card, GlassCard } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { useLanguage } from "../components/language-provider";

export default function Careers() {
  const { localizePath, t } = useLanguage();

  const roles = [
    {
      title: t("careers.role1Title"),
      location: t("careers.roleLocation"),
      model: t("careers.roleModel1"),
      slug: "tech-lead-backend-ai",
    },
    {
      title: t("careers.role2Title"),
      location: t("careers.roleLocation"),
      model: t("careers.roleModel2"),
      slug: "product-owner-delivery-lead",
    },
    {
      title: t("careers.role3Title"),
      location: t("careers.roleLocation"),
      model: t("careers.roleModel3"),
      slug: "frontend-developer-saas-modern-ui",
    },
  ];

  const whyJoin = [t("careers.whyJoin1"), t("careers.whyJoin2"), t("careers.whyJoin3"), t("careers.whyJoin4")];
  const benefits = [t("careers.benefit1"), t("careers.benefit2"), t("careers.benefit3"), t("careers.benefit4")];

  return (
    <div>
      <SEO
        title={t("careers.seoTitle")}
        description={t("careers.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/careers")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.careers"), url: localizePath("/careers") },
        ])}
      />
      <Hero
        eyebrow={t("careers.eyebrow")}
        title={
          <>
            {t("careers.heroTitleLead")} <span className="text-[#27aae1]">{t("careers.heroTitleHighlight")}</span>
          </>
        }
        lead={t("careers.heroLead")}
        badge={t("careers.heroBadge")}
      >
        <div className="flex flex-wrap gap-4">
          <Button to="#open-positions">
            {t("careers.viewOpenRoles")}
            <ArrowRight className="rtl-arrow h-4 w-4" />
          </Button>
          <Button to="/contact" variant="secondary">
            {t("careers.getInTouch")}
          </Button>
        </div>
      </Hero>

      <section id="open-positions" className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("careers.openTitleLead")} <span className="text-[#27aae1]">{t("careers.openTitleHighlight")}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">{t("careers.openIntro")}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.div
                key={role.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex h-full flex-col">
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">{role.title}</h3>
                  <div className="mb-6 flex-1 space-y-2">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4 w-4 text-[#27aae1] dark:text-cyan-400" />
                      {role.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Briefcase className="h-4 w-4 text-[#27aae1] dark:text-cyan-400" />
                      {role.model}
                    </div>
                  </div>
                  <Button to={`/careers/${role.slug}`} variant="ghost" className="w-full justify-between">
                    {t("careers.viewRoleApply")}
                    <ArrowRight className="rtl-arrow h-4 w-4" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">{t("careers.whyJoinTitle")}</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-400">{t("careers.whyJoinLead")}</p>
                <ul className="space-y-3">
                  {whyJoin.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27aae1]" />
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
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">{t("careers.benefitsTitle")}</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-400">{t("careers.benefitsLead")}</p>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27aae1]" />
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
