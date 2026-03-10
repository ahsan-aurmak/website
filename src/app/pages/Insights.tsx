import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("all topics");

  const filters = ["All Topics", "Product Development", "Design & Testing"];

  const insights = [
    {
      topic: "product development",
      title: "Scaling Enterprise SaaS: Design Patterns That Drive Adoption",
      body: "Reduce time-to-value and increase user activation with proven design patterns for onboarding, feature discovery, and enterprise workflows.",
      meta: "Product Strategy · 12 min read",
      url: "https://www.toptal.com/designers/saas/saas-design"
    },
    {
      topic: "product development",
      title: "Overcoming UX Barriers That Block SaaS Revenue Growth",
      body: "Common UX obstacles—complex onboarding, feature bloat, poor navigation—directly impact conversion and retention. Here's how to fix them.",
      meta: "Revenue Strategy · 8 min read",
      url: "https://www.linkedin.com/pulse/ux-design-challenges-saas-products-how-mitigate-them-ahsan-jalil"
    },
    {
      topic: "product development",
      title: "Integrating UX into Agile Without Slowing Down Delivery",
      body: "Balance speed and quality by embedding UX research and design into agile sprints—without adding overhead or extending timelines.",
      meta: "Delivery Strategy · 9 min read",
      url: "https://www.linkedin.com/pulse/how-align-product-ux-design-agile-development-ahsan-jalil/?trackingId=5O8CH2xeTveP%2BAT4PmTkjA%3D%3D"
    },
    {
      topic: "design & testing",
      title: "Why Inadequate UX Testing Creates Business Risk",
      body: "Real-world case studies where poor UX validation led to product failures, safety incidents, and revenue loss—and how to prevent them.",
      meta: "Risk Management · 7 min read",
      url: "https://www.linkedin.com/pulse/design-without-little-testing-can-cost-lives-ahsan-jalil/?trackingId=5O8CH2xeTveP%2BAT4PmTkjA%3D%3D"
    }
  ];

  const filteredInsights = activeFilter === "all topics" 
    ? insights 
    : insights.filter(i => i.topic === activeFilter.toLowerCase());

  return (
    <div>
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
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
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
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => (
              <motion.a
                key={insight.title}
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full group">
                  <div className="text-cyan-400 text-xs uppercase tracking-wide font-medium mb-3">
                    {insight.topic}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{insight.body}</p>
                  <div className="flex items-center justify-between text-slate-500 text-sm border-t border-slate-800 pt-4">
                    <span>{insight.meta}</span>
                    <ExternalLink className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Insights KPI Row */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "4", label: "Strategic articles on design-led business outcomes." },
              { value: "SaaS", label: "Primary focus: Enterprise SaaS product development and scaling." },
              { value: "100%", label: "ROI-focused insights for product leaders and executives." }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}