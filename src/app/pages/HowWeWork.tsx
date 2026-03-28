import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { ArrowRight, Shield, FileCheck, GitBranch, Users, TestTube, Database } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { useLanguage } from "../components/language-provider";

export default function HowWeWork() {
  const { direction, localizePath, t } = useLanguage();

  const stages = [
    { number: "01", title: t("howWeWork.stage1Title"), description: t("howWeWork.stage1Description"), icon: Users },
    { number: "02", title: t("howWeWork.stage2Title"), description: t("howWeWork.stage2Description"), icon: FileCheck },
    { number: "03", title: t("howWeWork.stage3Title"), description: t("howWeWork.stage3Description"), icon: GitBranch },
    { number: "04", title: t("howWeWork.stage4Title"), description: t("howWeWork.stage4Description"), icon: TestTube },
    { number: "05", title: t("howWeWork.stage5Title"), description: t("howWeWork.stage5Description"), icon: ArrowRight },
    { number: "06", title: t("howWeWork.stage6Title"), description: t("howWeWork.stage6Description"), icon: Shield },
    { number: "07", title: t("howWeWork.stage7Title"), description: t("howWeWork.stage7Description"), icon: Database },
  ];

  const trustMarkers = [
    { title: t("howWeWork.marker1Title"), description: t("howWeWork.marker1Description") },
    { title: t("howWeWork.marker2Title"), description: t("howWeWork.marker2Description") },
    { title: t("howWeWork.marker3Title"), description: t("howWeWork.marker3Description") },
    { title: t("howWeWork.marker4Title"), description: t("howWeWork.marker4Description") },
    { title: t("howWeWork.marker5Title"), description: t("howWeWork.marker5Description") },
    { title: t("howWeWork.marker6Title"), description: t("howWeWork.marker6Description") },
  ];

  return (
    <div>
      <SEO
        title={t("howWeWork.seoTitle")}
        description={t("howWeWork.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/how-we-work")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.howWeWork"), url: localizePath("/how-we-work") },
        ])}
      />
      <Hero
        eyebrow={t("howWeWork.eyebrow")}
        title={
          <>
            {t("howWeWork.heroTitleLead")} <span className="text-[#27aae1]">{t("howWeWork.heroTitleHighlight")}</span>
          </>
        }
        lead={t("howWeWork.heroLead")}
        badge={t("howWeWork.heroBadge")}
      >
        <Button to="/contact">
          {t("howWeWork.startConversation")}
          <ArrowRight className="rtl-arrow h-4 w-4" />
        </Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("howWeWork.frameworkTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("howWeWork.frameworkTitleHighlight")}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">{t("howWeWork.frameworkIntro")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/40 p-6 dark:border-slate-800/70 dark:bg-transparent md:p-8 lg:p-10"
          >
            <div className="relative mx-auto max-w-4xl">
              <div
                className={`absolute bottom-3 top-3 w-px bg-[#27aae1]/25 dark:bg-slate-700 ${direction === "rtl" ? "right-7" : "left-7"}`}
                aria-hidden="true"
              />
              <div className="space-y-12 md:space-y-14">
                {stages.map((stage, index) => (
                  <motion.div
                    key={`${stage.number}-${stage.title}-timeline`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={direction === "rtl" ? "relative pr-24" : "relative flex items-start gap-8"}
                  >
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#27aae1]/30 bg-[#eef7fc] text-lg font-semibold text-[#27aae1] shadow-sm dark:border-cyan-400/20 dark:bg-slate-900 dark:text-cyan-400 dark:shadow-none ${
                        direction === "rtl" ? "absolute right-0 top-0" : ""
                      }`}
                    >
                      {stage.number}
                    </div>
                    <div className={direction === "rtl" ? "text-right" : "text-left"}>
                      <h3 className="text-2xl font-semibold">{stage.title}</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("howWeWork.standardsTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("howWeWork.standardsTitleHighlight")}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-400">{t("howWeWork.standardsIntro")}</p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustMarkers.map((marker, index) => (
              <motion.div
                key={marker.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card hover={false} className="h-full border-slate-700/50">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{marker.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{marker.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/contact">
              {t("howWeWork.startConversation")}
              <ArrowRight className="rtl-arrow h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
