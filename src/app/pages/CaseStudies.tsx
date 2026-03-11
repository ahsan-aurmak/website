import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["All", "Enterprise Technology", "Financial Services", "Public Sector", "Automotive"];

  const cases = [
    {
      client: "Metrikus",
      sector: "enterprise technology",
      meta: "Real Estate · United Kingdom",
      title: "Smart Building Platform",
      summary: "Building efficiency B2B SaaS platform delivering actionable insights to make commercial spaces efficient, productive and sustainable.",
      kpis: ["45% Faster space utilization insights", "62% Increase in user engagement"],
      path: "/case-study-metrikus-smart-building"
    },
    {
      client: "Cutover",
      sector: "enterprise technology",
      meta: "B2B SaaS · United Kingdom",
      title: "Orchestration and Execution Management Platform",
      summary: "Transformed engineer-built platform into user-centered product through comprehensive UX programme. First product designer hire establishing design culture and achieving 100% task success rate.",
      kpis: ["100% Task success rate", "44 Participants tested"],
      path: "/case-study-cutover-orchestration"
    },
    {
      client: "Royal Bank of Scotland",
      sector: "financial services",
      meta: "Financial Services · United Kingdom",
      title: "Premium Customer Travel Bookings Portal",
      summary: "B2C web and mobile app enabling premium banking customers to book travel at discounted rates. Enhanced outdated web experience and launched first mobile app with responsive design.",
      kpis: ["Multiple travel categories: flights, hotels, holidays, cruises", "Mobile-first responsive design"],
      path: "/case-study-rbs-travel-portal"
    },
    {
      client: "Cisco",
      sector: "enterprise technology",
      meta: "Cybersecurity · United States",
      title: "Stealthwatch Educational Portal",
      summary: "B2B educational web portal designed to educate CIO/CTO-level users about network threat detection. Conducted focus groups with enterprise decision-makers and created innovative UI increasing engagement by 3x.",
      kpis: ["10 CIO/CTO-level focus group participants", "75%+ Usability success rate", "3x Above-fold real estate increase"],
      path: "/case-study-cisco-stealthwatch"
    },
    {
      client: "Al Jazeera",
      sector: "public sector",
      meta: "Media & Broadcasting · Qatar",
      title: "IT Service Management (ITSM) Platform",
      summary: "Migrated from ServiceNow to Jira Service Desk with complete UX redesign. Led stakeholder workshops and delivered intuitive platform design resulting in 50% signup increase in first month.",
      kpis: ["50% Signup increase first month", "100% Clutter removal", "ServiceNow to Jira SD migration"],
      path: "/case-study-al-jazeera-itsm"
    },
    {
      client: "Castrol",
      sector: "automotive",
      meta: "Automotive Services · United Kingdom",
      title: "CarLounge Garage Experience",
      summary: "End-to-end consumer and garage platform introducing UX to the company. Conducted design sprints, created comprehensive journey maps, and delivered platform securing £4.5m funding.",
      kpis: ["2,000+ Garages signed up globally", "80% Customer satisfaction increase", "£4.5m Funding secured"],
      path: "/case-study-castrol-carlounge"
    },
    {
      client: "GTT Communications",
      sector: "enterprise technology",
      meta: "Cloud Infrastructure · United Kingdom",
      title: "Virtual Data Centre (VDC) SaaS/IaaS Platform",
      summary: "AWS/Azure-like cloud infrastructure platform designed to be user-friendly for non-technical users. Conducted 4 rounds of usability testing reaching 80% approval and attracting users from competitor platforms.",
      kpis: ["4 Usability testing rounds", "80% Approval rate achieved", "AWS/Azure users attracted"],
      path: "/case-study-gtt-saas-iaas"
    },
    {
      client: "Dubai Trade",
      sector: "public sector",
      meta: "E-Government · United Arab Emirates",
      title: "Smart Government Portal",
      summary: "Research-led UX for Dubai Smart Government unifying Dubai Customs, DP World, and JAFZA services. Grouped 700+ services into 5 primary categories through card sorting and user shadowing.",
      kpis: ["700+ Services unified", "5 User personas identified", "100% Stakeholder sign-off"],
      path: "/case-study-dubai-trade"
    }
  ];

  const filteredCases = activeFilter === "all" 
    ? cases 
    : cases.filter(c => c.sector === activeFilter.toLowerCase().replace(" ", " "));

  return (
    <div>
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
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-cyan-400 text-sm font-medium">{caseStudy.meta}</div>
                    <div className="text-xs font-semibold bg-slate-700 border border-slate-600 text-slate-200 px-3 py-1 rounded-full">
                      {caseStudy.client}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{caseStudy.title}</h3>
                  <p className="text-slate-400 mb-4 flex-1">{caseStudy.summary}</p>
                  <div className="space-y-2 mb-6 pb-6 border-b border-slate-800">
                    {caseStudy.kpis.map((kpi, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span className="text-slate-300 text-sm">{kpi}</span>
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
            <p className="text-slate-400 text-lg mb-8">
              We can map your current systems, identify delivery priorities, and define a practical implementation roadmap.
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