import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { insightArticles } from "../lib/insights";

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("all topics");

  const filters = ["All Topics", "Product Development", "Design & Testing"];

  const filteredInsights = activeFilter === "all topics" 
    ? insightArticles
    : insightArticles.filter((article) => article.topic === activeFilter.toLowerCase());

  return (
    <div>
      <SEO
        title="Enterprise Systems Insights, Strategy, and Delivery Thinking"
        description="Browse AURMAK insights on enterprise SaaS, product strategy, validation, delivery practices, and business-focused digital modernisation."
        canonical="https://www.aurmak.com/insights"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" }
        ])}
      />
      <Hero
        eyebrow="Insights"
        title="Business Strategy Through Design."
        lead="Expert insights on leveraging UX and product design to drive revenue growth, reduce risk, and accelerate digital transformation."
        badge="📊 Strategic Resources"
      />

      {/* Topic Filters */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.toLowerCase()
                    ? "border border-[#27aae1]/30 bg-[#eef7fc] text-[#282973] shadow-sm dark:border-white dark:bg-white dark:text-slate-950 dark:shadow-lg dark:shadow-white/10"
                    : "border border-slate-200 bg-white text-[#5f6b8e] hover:border-[#27aae1]/20 hover:bg-slate-100 hover:text-[#282973] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
                aria-pressed={activeFilter === filter.toLowerCase()}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insight Cards */}
      <section className="pt-8 pb-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={`/insights/${insight.slug}`} className="block h-full">
                  <Card className="h-full group flex flex-col">
                    <div className="mb-3 text-xs font-medium uppercase tracking-wide text-[#27aae1] dark:text-cyan-400">
                      {insight.topic}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#27aae1] dark:text-slate-100 dark:group-hover:text-cyan-400">
                      {insight.title}
                    </h3>
                    <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">{insight.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-800">
                      <span>{insight.meta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
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
