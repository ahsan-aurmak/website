import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Globe2, Building2, Code2, CheckCircle2 } from "lucide-react";
import { Button } from "../components/button";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";
import { useLanguage } from "../components/language-provider";

export default function About() {
  const { direction, localizePath, t } = useLanguage();

  const centres = [
    {
      icon: Globe2,
      city: t("about.london"),
    },
    {
      icon: Building2,
      city: t("about.dubai"),
    },
    {
      icon: Code2,
      city: t("about.lahore"),
    },
  ];

  const modelPoints = [
    t("about.modelPoint1"),
    t("about.modelPoint2"),
    t("about.modelPoint3"),
    t("about.modelPoint4"),
  ];

  return (
    <div>
      <SEO
        title={t("about.seoTitle")}
        description={t("about.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/about")}`}
        keywords="enterprise systems, global technology leadership, digital infrastructure, legacy modernisation, operational governance"
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.about"), url: localizePath("/about") },
        ])}
      />

      <Hero
        eyebrow={t("about.eyebrow")}
        title={
          <>
            {t("about.heroTitleLead")}{" "}
            <span className="text-[#27aae1]">{t("about.heroTitleHighlight")}</span>
          </>
        }
        lead={t("about.heroLead")}
        badge={t("about.heroBadge")}
      >
        <Button to="/contact">{t("about.startConversation")}</Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <GlassCard className="p-8 lg:p-10">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("about.builtTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("about.builtTitleHighlight")}</span>
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
                <p>{t("about.builtBody1")}</p>
                <p>{t("about.builtBody2")}</p>
                <p>{t("about.builtBody3")}</p>
                <p>
                  {t("about.builtBody4BeforeServices")}
                  <Link to={localizePath("/services")} className="font-medium text-[#27aae1] hover:underline">
                    {t("navigation.services")}
                  </Link>
                  {t("about.builtBody4BetweenServicesAndSolutions")}
                  <Link to={localizePath("/solutions")} className="font-medium text-[#27aae1] hover:underline">
                    {t("navigation.solutions")}
                  </Link>
                  {t("about.builtBody4BetweenSolutionsAndLab")}
                  <Link to={localizePath("/lab")} className="font-medium text-[#27aae1] hover:underline">
                    {t("navigation.lab")}
                  </Link>
                  {t("about.builtBody4AfterLab")}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("about.centresTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("about.centresTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {centres.map((centre, index) => (
              <motion.div
                key={centre.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <GlassCard className="h-full p-8 text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <centre.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{centre.city}</h3>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300"
          >
            {t("about.centresBody")}
          </motion.p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 lg:p-10">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    {t("about.modelTitleLead")}{" "}
                    <span className="text-[#27aae1]">{t("about.modelTitleHighlight")}</span>
                  </h2>
                  <p className="mb-8 max-w-3xl text-lg text-[#5f6b8e] dark:text-slate-300">
                    {t("about.modelIntro")}
                  </p>

                  <div className="space-y-4">
                    {modelPoints.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start gap-3 py-1"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#27aae1] dark:text-cyan-400" />
                        <p className="text-slate-700 dark:text-slate-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 dark:shadow-2xl dark:shadow-cyan-500/10">
                    <ImageWithFallback
                      src={`${import.meta.env.BASE_URL}global_hq_futuristic.jpg`}
                      alt="Visual showing AURMAK's London, Dubai, and Lahore delivery model"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={direction === "rtl" ? "text-right" : "text-left"}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("about.systemsTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("about.systemsTitleHighlight")}</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">{t("about.systemsBody")}</p>
              <p className="mt-6 text-base text-slate-500 dark:text-slate-500">
                {t("about.systemsBody2BeforeCaseStudies")}
                <Link to={localizePath("/case-studies")} className="font-medium text-[#27aae1] hover:underline">
                  {t("navigation.caseStudies")}
                </Link>
                {t("about.systemsBody2Between")}
                <Link to={localizePath("/contact")} className="font-medium text-[#27aae1] hover:underline">
                  {t("about.startConversation")}
                </Link>
                {t("about.systemsBody2AfterContact")}
              </p>
            </motion.div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl rounded-3xl border border-slate-200 p-8 dark:border-slate-800 lg:p-10"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t("about.ventureTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("about.ventureTitleHighlight")}</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>{t("about.ventureBody1")}</p>
              <p>{t("about.ventureBody2")}</p>
            </div>
            <div className="mt-8">
              <Button to="/lab">{t("about.exploreLab")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t("about.finalTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("about.finalTitleHighlight")}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-[#5f6b8e] dark:text-slate-300">{t("about.finalBody")}</p>
            <Button to="/contact">{t("about.startConversation")}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
