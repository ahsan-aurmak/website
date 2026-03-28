import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Brain, Server, Zap, Database, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { GlassCard } from "../components/card";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Button } from "../components/button";
import { useLanguage } from "../components/language-provider";

export default function Solutions() {
  const { localizePath, t } = useLanguage();

  const domains = [
    {
      icon: Zap,
      title: t("solutions.domain1Title"),
      description: t("solutions.domain1Description"),
    },
    {
      icon: Server,
      title: t("solutions.domain2Title"),
      description: t("solutions.domain2Description"),
    },
    {
      icon: Building2,
      title: t("solutions.domain3Title"),
      description: t("solutions.domain3Description"),
    },
  ];

  const pillars = [
    {
      icon: Brain,
      title: t("solutions.pillar1Title"),
      description: t("solutions.pillar1Description"),
    },
    {
      icon: Database,
      title: t("solutions.pillar2Title"),
      description: t("solutions.pillar2Description"),
    },
    {
      icon: Zap,
      title: t("solutions.pillar3Title"),
      description: t("solutions.pillar3Description"),
    },
  ];

  const contexts = [t("solutions.context1"), t("solutions.context2"), t("solutions.context3"), t("solutions.context4")];

  return (
    <div>
      <SEO
        title={t("solutions.seoTitle")}
        description={t("solutions.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/solutions")}`}
        keywords="enterprise systems, digital infrastructure, operational reporting, data governance, system scalability, operational ROI"
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.solutions"), url: localizePath("/solutions") },
        ])}
      />
      <Hero
        eyebrow={t("solutions.eyebrow")}
        title={
          <>
            {t("solutions.heroTitleLead")}{" "}
            <span className="text-[#27aae1]">{t("solutions.heroTitleHighlight")}</span>
          </>
        }
        lead={t("solutions.heroLead")}
        badge={t("solutions.heroBadge")}
      >
        <Button to="/contact">
          {t("solutions.startConversation")}
          <ArrowRight className="rtl-arrow h-4 w-4" />
        </Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("solutions.domainsTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("solutions.domainsTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                      <domain.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{domain.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{domain.description}</p>
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("solutions.contextsTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("solutions.contextsTitleHighlight")}</span>
              </h2>
              <div className="space-y-4">
                {contexts.map((context, index) => (
                  <motion.div
                    key={context}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <p className="text-slate-700 dark:text-slate-300">{context}</p>
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
                  src={`${import.meta.env.BASE_URL}deployment_contexts_futuristic.jpg`}
                  alt="Diagram showing infrastructure operations, estate monitoring, and portfolio reporting environments"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
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
              {t("solutions.outcomesTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("solutions.outcomesTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <pillar.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{pillar.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-4xl text-center"
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">{t("solutions.finalBody")}</p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact">
                {t("solutions.startConversation")}
                <ArrowRight className="rtl-arrow h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
