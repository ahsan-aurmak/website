import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { useLanguage } from "../components/language-provider";

export default function CaseStudies() {
  const { localizePath, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = useMemo(
    () => [
      { id: "all", label: t("caseStudies.filterAll") },
      { id: "enterprise technology", label: t("caseStudies.filterEnterpriseTechnology") },
      { id: "financial services", label: t("caseStudies.filterFinancialServices") },
      { id: "public sector", label: t("caseStudies.filterPublicSector") },
      { id: "automotive", label: t("caseStudies.filterAutomotive") },
    ],
    [t],
  );

  const cases = useMemo(
    () => [
      {
        sector: "enterprise technology",
        meta: t("caseStudies.case1Meta"),
        title: t("caseStudies.case1Title"),
        summary: t("caseStudies.case1Summary"),
        kpis: [t("caseStudies.case1Kpi1"), t("caseStudies.case1Kpi2")],
        path: "/smart-building-platform",
      },
      {
        sector: "enterprise technology",
        meta: t("caseStudies.case2Meta"),
        title: t("caseStudies.case2Title"),
        summary: t("caseStudies.case2Summary"),
        kpis: [t("caseStudies.case2Kpi1"), t("caseStudies.case2Kpi2")],
        path: "/orchestration-management-platform",
      },
      {
        sector: "financial services",
        meta: t("caseStudies.case3Meta"),
        title: t("caseStudies.case3Title"),
        summary: t("caseStudies.case3Summary"),
        kpis: [t("caseStudies.case3Kpi1"), t("caseStudies.case3Kpi2")],
        path: "/premium-travel-portal",
      },
      {
        sector: "enterprise technology",
        meta: t("caseStudies.case4Meta"),
        title: t("caseStudies.case4Title"),
        summary: t("caseStudies.case4Summary"),
        kpis: [t("caseStudies.case4Kpi1"), t("caseStudies.case4Kpi2")],
        path: "/stealthwatch-educational-portal",
      },
      {
        sector: "enterprise technology",
        meta: t("caseStudies.case5Meta"),
        title: t("caseStudies.case5Title"),
        summary: t("caseStudies.case5Summary"),
        kpis: [t("caseStudies.case5Kpi1"), t("caseStudies.case5Kpi2"), t("caseStudies.case5Kpi3")],
        path: "/it-service-management-platform",
      },
      {
        sector: "automotive",
        meta: t("caseStudies.case6Meta"),
        title: t("caseStudies.case6Title"),
        summary: t("caseStudies.case6Summary"),
        kpis: [t("caseStudies.case6Kpi1"), t("caseStudies.case6Kpi2"), t("caseStudies.case6Kpi3")],
        path: "/carlounge-experience",
      },
      {
        sector: "enterprise technology",
        meta: t("caseStudies.case7Meta"),
        title: t("caseStudies.case7Title"),
        summary: t("caseStudies.case7Summary"),
        kpis: [t("caseStudies.case7Kpi1"), t("caseStudies.case7Kpi2"), t("caseStudies.case7Kpi3")],
        path: "/enterprise-saas-iaas-platform",
      },
      {
        sector: "public sector",
        meta: t("caseStudies.case8Meta"),
        title: t("caseStudies.case8Title"),
        summary: t("caseStudies.case8Summary"),
        kpis: [t("caseStudies.case8Kpi1"), t("caseStudies.case8Kpi2"), t("caseStudies.case8Kpi3")],
        path: "/government-services-portal",
      },
    ],
    [t],
  );

  const filteredCases = activeFilter === "all" ? cases : cases.filter((caseStudy) => caseStudy.sector === activeFilter);

  return (
    <div>
      <SEO
        title={t("caseStudies.seoTitle")}
        description={t("caseStudies.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/case-studies")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.caseStudies"), url: localizePath("/case-studies") },
        ])}
      />
      <Hero
        eyebrow={t("caseStudies.eyebrow")}
        title={t("caseStudies.heroTitle")}
        lead={t("caseStudies.heroLead")}
        badge={t("caseStudies.heroBadge")}
      />

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-lg px-6 py-2 font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "border border-[#27aae1]/30 bg-[#eef7fc] text-[#282973] shadow-sm dark:border-white dark:bg-white dark:text-slate-950 dark:shadow-lg dark:shadow-white/10"
                    : "border border-slate-200 bg-white text-[#5f6b8e] hover:border-[#27aae1]/20 hover:bg-slate-100 hover:text-[#282973] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col">
                  <div className="mb-3 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{caseStudy.meta}</div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">{caseStudy.title}</h3>
                  <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">{caseStudy.summary}</p>
                  <div className="mb-6 space-y-2 border-b border-slate-200 pb-6 dark:border-slate-800">
                    {caseStudy.kpis.map((kpi) => (
                      <div key={kpi} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{kpi}</span>
                      </div>
                    ))}
                  </div>
                  <Button to={caseStudy.path} variant="ghost" className="w-full justify-between">
                    {t("caseStudies.readCaseStudy")}
                    <ArrowRight className="rtl-arrow h-4 w-4" />
                  </Button>
                </Card>
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
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("caseStudies.finalTitle")}</h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{t("caseStudies.finalBody")}</p>
            <Button to="/contact">
              {t("caseStudies.startConversation")}
              <ArrowRight className="rtl-arrow h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
