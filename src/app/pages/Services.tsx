import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { Cloud, RefreshCw, Brain, Building, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: "SaaS Product Development",
      description: "Design and development of scalable SaaS platforms for enterprise operations."
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernisation",
      description: "Improving reliability and scalability across legacy systems and infrastructure."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Applying AI to improve operational visibility, automation, and decision-making."
    },
    {
      icon: Building,
      title: "Building Management Systems",
      description: "Design and integration of intelligent building systems that improve operational visibility and infrastructure performance."
    }
  ];

  const deliveryPoints = [
    "Defined implementation stages with clear ownership and review gates.",
    "Governance, security, and compliance integrated from the start.",
    "Cross-functional execution led by accountable delivery leadership.",
    "Performance tracking aligned to agreed commercial and operational outcomes."
  ];

  return (
    <div>
      <SEO
        title="Enterprise Systems. Built and Delivered."
        description="Our teams design, build, and modernise the technology platforms organisations rely on to operate, scale, and make decisions."
        canonical="https://www.aurmak.com/services"
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ])}
      />

      <Hero
        eyebrow="Services"
        title="Enterprise Systems. Built and Delivered."
        lead="Our teams design, build, and modernise the technology platforms organisations rely on to operate, scale, and make decisions, from SaaS and AI integration to digital infrastructure and operational intelligence."
      >
        <Button to="/contact">
          Start a Conversation
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Hero>

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
              Technology Systems That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Power Modern Operations
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-3xl mx-auto">
              Our engineering capabilities focus on building, modernising, and integrating enterprise technology systems.
            </p>
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
                Structured Enterprise{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Delivery
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-[28px] border border-slate-800/70 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 md:p-10 backdrop-blur-sm">
                <div className="mb-6 h-px w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">Our Delivery Approach</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-400 mb-8">
                  Projects move through structured stages: discovery, architecture, pilot, rollout, and long-term support, with clear accountability at every step.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-8">
                  {["Discovery", "Architecture", "Pilot", "Rollout", "Long-Term Support"].map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
                <Button to="/how-we-work">
                  How We Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-full rounded-[28px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Enterprise-Grade Standards</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Security", "Compliance", "QA Discipline", "Data Governance"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-4 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-300">
                  Security, compliance, QA discipline, and structured data governance are built into every system we deliver.
                </p>
              </div>
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
              What Clients{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ask
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
                    Can AURMAK work with our existing technology stack?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes. Most organisations operate complex technology environments, and our work typically involves integrating with existing systems rather than replacing them. Our teams assess current architecture, identify integration points, and design solutions that modernise or extend your systems while maintaining stability, security, and operational continuity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    How does AURMAK approach legacy system modernisation?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Modernising legacy systems requires balancing innovation with operational stability. Our teams assess the existing architecture and dependencies, then design a phased modernisation approach that improves reliability, scalability, and integration without disrupting critical operations. This allows organisations to evolve their technology environments while maintaining continuity and control.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    How long does an AI integration project typically take?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AI integration projects typically take 3-6 months, depending on system complexity and implementation scope. Our teams follow a structured delivery process that covers discovery, architecture, integration, testing, and controlled deployment, ensuring reliable performance within the existing enterprise environment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    How does AURMAK ensure data security and compliance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Security and compliance are embedded throughout our delivery process, from system architecture to deployment. Our teams implement structured governance, secure development practices, and rigorous testing to ensure every system meets enterprise standards for reliability, data protection, and regulatory compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    Do you work with internal engineering teams?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes. We frequently work alongside internal engineering and technology teams. Our role is to complement existing capabilities, supporting architecture, system development, and complex integrations while collaborating closely with internal stakeholders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    Do you provide ongoing support after system delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes. Many client partnerships continue beyond the initial system delivery. We provide ongoing system optimisation, maintenance, and operational assistance through structured service arrangements designed to match each organisation’s operational and SLA requirements. Our global team ensures systems remain reliable, secure, and aligned with evolving business needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What makes AURMAK different from other technology partners?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AURMAK combines strategic technology consulting with disciplined engineering delivery. Our teams work with leadership to diagnose operational challenges, design the right technology architecture, and deliver enterprise systems through structured, accountable implementation. Alongside client partnerships, our venture-led model keeps our teams closely connected to real product development and emerging technologies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    What industries does AURMAK work with?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    AURMAK supports organisations across sectors, including infrastructure, real estate, energy, and enterprise technology. Our experience in complex operational environments allows us to design and deliver systems that support modern digital operations across multiple industries.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400">
                    When can organisations expect ROI from AI initiatives?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    The timeline for measurable return depends on the scope of the implementation and the maturity of existing systems and data. Organisations often begin to see operational improvements early in deployment as automation and better data visibility are introduced. Clear performance indicators are defined during discovery so progress can be measured against agreed operational and commercial outcomes.
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
