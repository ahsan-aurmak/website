import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { getInsightArticles } from "../lib/insights";
import { useLanguage } from "../components/language-provider";

export default function Insights() {
  const { language, localizePath, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all topics");
  const localizedArticles = useMemo(() => getInsightArticles(language), [language]);

  const filters = useMemo(
    () => [
      { id: "all topics", label: t("insights.filterAllTopics") },
      { id: "product development", label: t("insights.filterProductDevelopment") },
      { id: "design & testing", label: t("insights.filterDesignTesting") },
    ],
    [t],
  );

  const topicLabels = {
    "product development": t("insights.topicProductDevelopment"),
    "design & testing": t("insights.topicDesignTesting"),
  } as const;

  const filteredInsights =
    activeFilter === "all topics"
      ? localizedArticles
      : localizedArticles.filter((article) => article.topic === activeFilter);

  return (
    <div>
      <SEO
        title={t("insights.seoTitle")}
        description={t("insights.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/insights")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.insights"), url: localizePath("/insights") },
        ])}
      />
      <Hero eyebrow={t("insights.eyebrow")} title={t("insights.heroTitle")} lead={t("insights.heroLead")} badge={t("insights.heroBadge")} />

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

      <section className="relative pb-20 pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={localizePath(`/insights/${insight.slug}`)} className="block h-full">
                  <Card className="group flex h-full flex-col">
                    <div className="mb-3 text-xs font-medium uppercase tracking-wide text-[#27aae1] dark:text-cyan-400">
                      {topicLabels[insight.topic]}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#27aae1] dark:text-slate-100 dark:group-hover:text-cyan-400">
                      {insight.title}
                    </h3>
                    <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">{insight.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-800">
                      <span>{insight.meta}</span>
                      <ArrowRight className="h-4 w-4 transition-colors group-hover:text-cyan-400" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
