import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Cpu, Zap, Eye, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";
import { useLanguage } from "../components/language-provider";

export default function Lab() {
  const { localizePath, t } = useLanguage();

  const principles = [
    {
      icon: Cpu,
      title: t("lab.principle1Title"),
      description: t("lab.principle1Description"),
    },
    {
      icon: Zap,
      title: t("lab.principle2Title"),
      description: t("lab.principle2Description"),
    },
    {
      icon: Eye,
      title: t("lab.principle3Title"),
      description: t("lab.principle3Description"),
    },
  ];

  const focusAreas = [
    { title: t("lab.focus1Title"), description: t("lab.focus1Description") },
    { title: t("lab.focus2Title"), description: t("lab.focus2Description") },
    { title: t("lab.focus3Title"), description: t("lab.focus3Description") },
    { title: t("lab.focus4Title"), description: t("lab.focus4Description") },
  ];

  return (
    <div>
      <SEO
        title={t("lab.seoTitle")}
        description={t("lab.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/lab")}`}
        keywords="venture studio, enterprise systems, AI-enabled operational intelligence, integration architecture, digital infrastructure"
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.lab"), url: localizePath("/lab") },
        ])}
      />
      <Hero
        eyebrow={t("lab.eyebrow")}
        title={
          <>
            {t("lab.heroTitleLead")} <span className="text-[#27aae1]">{t("lab.heroTitleHighlight")}</span>
          </>
        }
        lead={t("lab.heroLead")}
        badge={t("lab.heroBadge")}
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
              {t("lab.principlesTitleLead")} <span className="text-[#27aae1]">{t("lab.principlesTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <principle.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{principle.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{principle.description}</p>
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
              {t("lab.deliveryTitleLead")} <span className="text-[#27aae1]">{t("lab.deliveryTitleHighlight")}</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>{t("lab.deliveryBody1")}</p>
              <p>{t("lab.deliveryBody2")}</p>
              <p>
                {t("lab.deliveryBody3BeforeServices")}
                <Link to={localizePath("/services")} className="font-medium text-[#27aae1] hover:underline">
                  {t("navigation.services")}
                </Link>
                {t("lab.deliveryBody3BetweenServicesAndSolutions")}
                <Link to={localizePath("/solutions")} className="font-medium text-[#27aae1] hover:underline">
                  {t("navigation.solutions")}
                </Link>
                {t("lab.deliveryBody3BetweenSolutionsAndCaseStudies")}
                <Link to={localizePath("/case-studies")} className="font-medium text-[#27aae1] hover:underline">
                  {t("navigation.caseStudies")}
                </Link>
                {t("lab.deliveryBody3AfterCaseStudies")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("lab.focusTitleLead")} <span className="text-[#27aae1]">{t("lab.focusTitleHighlight")}</span>
              </h2>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <div className="text-slate-700 dark:text-slate-300">
                      <p className="font-semibold">{area.title}</p>
                      <p className="mt-1">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 dark:shadow-2xl dark:shadow-cyan-500/10">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}lab_focus_areas_futuristic.jpg`}
                  alt="Illustration of venture lab exploration areas across predictive maintenance, governed AI, and integration accelerators"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
