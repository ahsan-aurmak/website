import { Hero } from "../components/hero";
import { Card, GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { Cloud, RefreshCw, Brain, Building, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: "SaaS Product Development",
      description: "Building enterprise SaaS products through defined delivery models that reduce risk and accelerate validated market entry."
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernisation",
      description: "Modernising legacy environments to improve security posture, scalability, and operational reliability."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing AI capabilities within governed models to improve decision speed, process quality, and operational control."
    },
    {
      icon: Building,
      title: "Building Management Systems",
      description: "Deploying building and facility automation systems that improve energy performance, monitoring, and infrastructure oversight."
    }
  ];

  const deliveryPoints = [
    "Defined implementation stages with clear ownership and review gates.",
    "Governance, security, and compliance integrated from the start.",
    "Cross-functional execution led by accountable delivery leadership.",
    "Performance tracking aligned to agreed commercial and operational outcomes."
  ];

  const diagramLabels = ["Data Layer", "AI Services", "BMS", "Enterprise Operations Dashboard"];

  return (
    <div>
      <SEO
        title="Structured Delivery - Enterprise Solutions"
        description="We deliver through defined frameworks that align business objectives, architecture decisions, and accountable implementation."
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ])}
      />

      <Hero
        eyebrow="Services"
        title="Structured Delivery."
        lead="We deliver through defined frameworks that align business objectives, architecture decisions, and accountable implementation."
        badge="💼 Enterprise Solutions"
      />

      {/* Core Service Pillars */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Core Service{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Discipline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Delivery{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Discipline
                </span>
              </h2>
              <div className="space-y-4">
                {deliveryPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{point}</p>
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
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}delivery_discipline_futuristic.png`}
                  alt="AURMAK Disciplined Project Delivery Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">How We Work</h2>
                <p className="text-slate-400 mb-6">
                  Our delivery method covers discovery, audit, roadmap, pilot, rollout, governance, and long-term support with clear accountability at each stage.
                </p>
                <Button to="/how-we-work">
                  View Framework
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Built for Enterprise Confidence</h3>
                <p className="text-slate-400">
                  Security practices, compliance awareness, QA discipline, and formal data handling controls are embedded in every engagement.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What industries does AURMAK serve?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AURMAK serves enterprise clients across multiple sectors including real estate and building management, financial services, manufacturing and industrial operations, media and broadcasting, automotive services, telecommunications, and public sector organizations. Our solutions are designed to meet the complex requirements of enterprise-scale operations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    How long does a typical AI integration project take?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AI integration projects typically range from 3-6 months depending on complexity and scope. Our phased approach includes discovery (2-4 weeks), development and integration (8-12 weeks), testing and validation (2-4 weeks), and deployment (2-3 weeks). This structured timeline ensures thorough implementation with clear review gates and controlled risk.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What is your approach to legacy system modernization?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    We take a systematic approach to legacy modernization: comprehensive audit of current systems, risk assessment and dependency mapping, phased migration strategy, parallel running where appropriate, and continuous validation. Our goal is to improve security posture, scalability, and operational reliability while minimizing business disruption.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    Do you provide ongoing support after project delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes, we provide comprehensive post-delivery support including maintenance agreements, monitoring services, security updates, performance optimization, and access to our global support network across London, Dubai, and Lahore providing 24/7 coverage. Support packages are tailored to your operational requirements and SLA expectations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What makes AURMAK different from other technology consultancies?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AURMAK combines strategic leadership from London and Dubai with disciplined engineering execution from Lahore, providing enterprise-grade delivery at competitive economics. Our model emphasizes clear ownership, defined implementation stages, integrated governance and security from day one, and long-term partnerships rather than project-based engagements. We're backed by an established international technology group providing stability and resources.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    How do you ensure data security and compliance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Security and compliance are integrated into every stage of our delivery framework. We implement formal data handling controls, follow international governance standards anchored in London and Dubai operations, conduct regular security audits, maintain ISO-aligned quality processes, and ensure compliance awareness across all team members. Confidentiality, integrity, and availability are core to our operational discipline.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    Can you work with our existing technology stack?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes, we're technology-agnostic and work with diverse technology stacks across cloud platforms (AWS, Azure, GCP), programming languages, databases, and enterprise systems. Our team has experience integrating with existing infrastructure, whether on-premise, cloud, or hybrid environments. We prioritize solutions that align with your current architecture and long-term technology strategy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What is the ROI timeline for AI integration projects?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    ROI timelines vary by use case, but most clients see measurable improvements within 6-12 months post-deployment. Benefits typically include reduced operational costs (15-30%), improved decision speed (40-60% faster), enhanced process quality, and reduced error rates. We work with you to define clear KPIs during discovery and track progress against agreed commercial and operational outcomes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}