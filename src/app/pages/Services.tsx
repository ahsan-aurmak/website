import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { Cloud, RefreshCw, Brain, Building, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema, generateFAQSchema } from "../components/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Link } from "react-router";

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

  const faqs = [
    {
      question: "Can AURMAK work with our existing technology stack?",
      answer:
        "Yes. Most organisations operate complex technology environments, and our work typically involves integrating with existing systems rather than replacing them. Our teams assess current architecture, identify integration points, and design solutions that modernise or extend your systems while maintaining stability, security, and operational continuity.",
    },
    {
      question: "How does AURMAK approach legacy system modernisation?",
      answer:
        "Modernising legacy systems requires balancing innovation with operational stability. Our teams assess the existing architecture and dependencies, then design a phased modernisation approach that improves reliability, scalability, and integration without disrupting critical operations. This allows organisations to evolve their technology environments while maintaining continuity and control.",
    },
    {
      question: "How long does an AI integration project typically take?",
      answer:
        "AI integration projects typically take 3-6 months, depending on system complexity and implementation scope. Our teams follow a structured delivery process that covers discovery, architecture, integration, testing, and controlled deployment, ensuring reliable performance within the existing enterprise environment.",
    },
    {
      question: "How does AURMAK ensure data security and compliance?",
      answer:
        "Security and compliance are embedded throughout our delivery process, from system architecture to deployment. Our teams implement structured governance, secure development practices, and rigorous testing to ensure every system meets enterprise standards for reliability, data protection, and regulatory compliance.",
    },
    {
      question: "Do you work with internal engineering teams?",
      answer:
        "Yes. We frequently work alongside internal engineering and technology teams. Our role is to complement existing capabilities, supporting architecture, system development, and complex integrations while collaborating closely with internal stakeholders.",
    },
    {
      question: "Do you provide ongoing support after system delivery?",
      answer:
        "Yes. Many client partnerships continue beyond the initial system delivery. We provide ongoing system optimisation, maintenance, and operational assistance through structured service arrangements designed to match each organisation’s operational and SLA requirements. Our global team ensures systems remain reliable, secure, and aligned with evolving business needs.",
    },
    {
      question: "What makes AURMAK different from other technology partners?",
      answer:
        "AURMAK combines strategic technology consulting with disciplined engineering delivery. Our teams work with leadership to diagnose operational challenges, design the right technology architecture, and deliver enterprise systems through structured, accountable implementation. Alongside client partnerships, our venture-led model keeps our teams closely connected to real product development and emerging technologies.",
    },
    {
      question: "What industries does AURMAK work with?",
      answer:
        "AURMAK supports organisations across sectors, including infrastructure, real estate, energy, and enterprise technology. Our experience in complex operational environments allows us to design and deliver systems that support modern digital operations across multiple industries.",
    },
    {
      question: "When can organisations expect ROI from AI initiatives?",
      answer:
        "The timeline for measurable return depends on the scope of the implementation and the maturity of existing systems and data. Organisations often begin to see operational improvements early in deployment as automation and better data visibility are introduced. Clear performance indicators are defined during discovery so progress can be measured against agreed operational and commercial outcomes.",
    },
  ];

  return (
    <div>
      <SEO
        title="Enterprise Systems Development, AI Integration, and Modernisation"
        description="AURMAK designs enterprise systems, digital infrastructure, and AI integration with delivery governance, data governance, and system scalability built in."
        canonical="https://www.aurmak.com/services"
        keywords="enterprise systems, digital infrastructure, legacy modernisation, AI-enabled operational intelligence, data governance, system scalability, operational ROI"
        schema={generateFAQSchema(faqs)}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ])}
      />

      <Hero
        eyebrow="Services"
        title={
          <>
            Enterprise Systems.{" "}
            <span className="text-[#27aae1]">Built and Delivered.</span>
          </>
        }
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
              <span className="text-[#27aae1]">
                Power Modern Operations
              </span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              Our engineering capabilities focus on building, modernising, and integrating enterprise technology systems.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-base text-slate-500 dark:text-slate-500">
              Proof points include{" "}
              <Link to="/case-study-metrikus-smart-building" className="font-medium text-[#27aae1] hover:underline">
                Metrikus
              </Link>,{" "}
              <Link to="/case-study-cutover-orchestration" className="font-medium text-[#27aae1] hover:underline">
                Cutover
              </Link>,{" "}
              <Link to="/case-study-al-jazeera-itsm" className="font-medium text-[#27aae1] hover:underline">
                Al Jazeera
              </Link>, and{" "}
              <Link to="/case-study-dubai-trade" className="font-medium text-[#27aae1] hover:underline">
                Dubai Trade
              </Link>.
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
                <GlassCard className="h-full dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
                  <div className="flex items-start gap-5">
                    <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                      <service.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                    </div>
                  </div>
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
                <span className="text-[#27aae1]">
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
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <p className="text-slate-700 dark:text-slate-300">{point}</p>
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
                  src={`${import.meta.env.BASE_URL}delivery_discipline_futuristic.png`}
                  alt="Illustration of structured enterprise delivery stages, review gates, and governance checkpoints"
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
              <div className="brand-surface-strong h-full rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/85 dark:shadow-none md:p-10">
                <div className="mb-6 h-px w-20 bg-[#27aae1]" />
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl">Our Delivery Approach</h2>
                <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Projects move through structured stages: discovery, architecture, pilot, rollout, and long-term support, with clear accountability at every step.
                </p>
                <p className="mb-8 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-500">
                  For delivery examples, review the{" "}
                  <Link to="/case-study-al-jazeera-itsm" className="font-medium text-[#27aae1] hover:underline">
                    Al Jazeera ITSM case study
                  </Link>{" "}
                  and the{" "}
                  <Link to="/case-study-metrikus-smart-building" className="font-medium text-[#27aae1] hover:underline">
                    Metrikus platform case study
                  </Link>.
                </p>
                <div className="mb-8 flex flex-wrap gap-3 text-sm text-slate-500">
                  {["Discovery", "Architecture", "Pilot", "Rollout", "Long-Term Support"].map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900/70"
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
              <div className="brand-surface-muted h-full rounded-[28px] border border-cyan-500/20 bg-[#27aae1]/8 p-8 md:p-10 dark:bg-[#1B2A6B]/30">
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl">Enterprise-Grade Standards</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Security", "Compliance", "QA Discipline", "Data Governance"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-sm font-medium text-slate-700 dark:border-white/8 dark:bg-slate-950/35 dark:text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/85 px-4 py-2 text-sm font-medium text-[#27aae1] dark:bg-[#1B2A6B]/40 dark:text-cyan-400"
            >
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Clients{" "}
              <span className="text-[#27aae1]">
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
            <GlassCard className="dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[0].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[0].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[1].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[1].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[2].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[2].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[3].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[3].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[4].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[4].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[5].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[5].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[6].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[6].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[7].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[7].answer}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                    {faqs[8].question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                    {faqs[8].answer}
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
