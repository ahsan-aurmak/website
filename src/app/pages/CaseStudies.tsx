import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["All", "Enterprise Technology", "Financial Services", "Public Sector", "Automotive"];

  const cases = [
    {
      client: "Metrikus",
      sector: "enterprise technology",
      meta: "Enterprise Technology",
      title: "Real-Time Building Performance Intelligence",
      summary: "Visibility into occupancy, energy performance, and operational efficiency across commercial buildings, supporting more efficient and sustainable operations through an integrated data platform.",
      kpis: ["45% faster insights delivery", "62% increase in user engagement"],
      path: "/smart-building-platform"
    },
    {
      client: "Cutover",
      sector: "enterprise technology",
      meta: "Enterprise Technology",
      title: "Structuring Workflow & Execution Systems",
      summary: "A structured redesign of an engineer-built platform, improving workflow clarity, usability, and execution efficiency.",
      kpis: ["100% task success rate", "Reduced task completion time to 12 minutes"],
      path: "/orchestration-management-platform"
    },
    {
      client: "Royal Bank of Scotland",
      sector: "financial services",
      meta: "Financial Services",
      title: "Premium Travel Booking Portal",
      summary: "Modernisation of a legacy travel platform, enabling premium banking customers to book travel across web and mobile, with improved usability and access to discounted rates.",
      kpis: ["Multiple travel categories supported", "Mobile-first responsive design"],
      path: "/premium-travel-portal"
    },
    {
      client: "Cisco",
      sector: "enterprise technology",
      meta: "Enterprise Technology",
      title: "Simplifying Cybersecurity Decision-Making",
      summary: "Research-led redesign of a cybersecurity platform, informed by direct engagement with enterprise decision-makers, improving how CIO and CTO-level users evaluate network threat detection solutions.",
      kpis: ["3x increase in user engagement", "75%+ usability success rate"],
      path: "/stealthwatch-educational-portal"
    },
    {
      client: "Al Jazeera",
      sector: "enterprise technology",
      meta: "Enterprise Technology",
      title: "Modernising Enterprise Service Operations",
      summary: "Platform redesign and migration combining UX improvements and system transition from ServiceNow to Jira, improving workflow clarity, usability, and adoption across enterprise service operations.",
      kpis: ["50% increase in sign-ups (first month)", "100% clutter reduction", "ServiceNow to Jira migration"],
      path: "/it-service-management-platform"
    },
    {
      client: "Castrol",
      sector: "automotive",
      meta: "Automotive",
      title: "Automotive Customer Experience Transformation",
      summary: "End-to-end design of a consumer and garage platform, introducing structured UX to improve booking flows, operational visibility, and overall customer experience.",
      kpis: ["2,000+ garages onboarded globally", "80% increase in customer satisfaction", "£4.5m funding secured"],
      path: "/carlounge-experience"
    },
    {
      client: "GTT Communications",
      sector: "enterprise technology",
      meta: "Enterprise Technology",
      title: "Enterprise Cloud, Made Usable",
      summary: "Enterprise SaaS/IaaS platform design simplifying complex cloud infrastructure for non-technical users, with functionality comparable to leading cloud platforms, validated through multiple rounds of usability testing.",
      kpis: ["4 usability testing rounds completed", "80% approval rating achieved", "Users migrated from AWS/Azure platforms"],
      path: "/enterprise-saas-iaas-platform"
    },
    {
      client: "Dubai Trade",
      sector: "public sector",
      meta: "Public Sector",
      title: "Structuring Complex Government Services",
      summary: "Consolidation of 700+ government services into a structured, user-friendly system through research-led UX, simplifying navigation across a complex government and trade ecosystem.",
      kpis: ["700+ services structured across unified categories", "5 key user personas identified", "100% stakeholder sign-off achieved"],
      path: "/government-services-portal"
    }
  ];

  const filteredCases = activeFilter === "all" 
    ? cases 
    : cases.filter(c => c.sector === activeFilter.toLowerCase().replace(" ", " "));

  return (
    <div>
      <SEO
        title="Enterprise Technology Case Studies and Delivery Outcomes"
        description="Review AURMAK case studies across SaaS, financial services, public sector, infrastructure, and operations programmes with measurable delivery outcomes."
        canonical="https://www.aurmak.com/case-studies"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" }
        ])}
      />
      <Hero
        eyebrow="Case Studies"
        title="Case Studies."
        lead="Explore selected programmes delivered across enterprise technology, financial services, public sector, and automotive industries. Each case shows the operating challenge, the engineering approach, and measurable outcomes."
        badge="📊 Proven Results"
      />

      {/* Filter Controls */}
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

      {/* Case Grid */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-3 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{caseStudy.meta}</div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">{caseStudy.title}</h3>
                  <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">{caseStudy.summary}</p>
                  <div className="mb-6 space-y-2 border-b border-slate-200 pb-6 dark:border-slate-800">
                    {caseStudy.kpis.map((kpi, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{kpi}</span>
                      </div>
                    ))}
                  </div>
                  <Button to={caseStudy.path} variant="ghost" className="w-full justify-between">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Band */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Similar Results in Your Operating Context?
            </h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              We can map your current systems, identify delivery priorities, and define a practical implementation roadmap.
            </p>
            <p className="mb-8 text-base text-slate-500 dark:text-slate-500">
              You can also review our{" "}
              <Link to="/services" className="font-medium text-[#27aae1] hover:underline">
                services
              </Link>{" "}
              and{" "}
              <Link to="/solutions" className="font-medium text-[#27aae1] hover:underline">
                operational solutions
              </Link>{" "}
              for a broader view of delivery capability.
            </p>
            <Button to="/contact">
              Arrange a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
