import { Hero } from "../components/hero";
import { GlassCard } from "../components/card";
import { Button } from "../components/button";
import { motion } from "motion/react";
import { Cloud, RefreshCw, Brain, Building, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema, generateFAQSchema } from "../components/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Link } from "react-router";
import { useLanguage } from "../components/language-provider";

export default function Services() {
  const { localizePath, t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      title: t("services.service1Title"),
      description: t("services.service1Description"),
    },
    {
      icon: RefreshCw,
      title: t("services.service2Title"),
      description: t("services.service2Description"),
    },
    {
      icon: Brain,
      title: t("services.service3Title"),
      description: t("services.service3Description"),
    },
    {
      icon: Building,
      title: t("services.service4Title"),
      description: t("services.service4Description"),
    },
  ];

  const deliveryPoints = [
    t("services.deliveryPoint1"),
    t("services.deliveryPoint2"),
    t("services.deliveryPoint3"),
    t("services.deliveryPoint4"),
  ];

  const faqs = [
    { question: t("services.faq1Question"), answer: t("services.faq1Answer") },
    { question: t("services.faq2Question"), answer: t("services.faq2Answer") },
    { question: t("services.faq3Question"), answer: t("services.faq3Answer") },
    { question: t("services.faq4Question"), answer: t("services.faq4Answer") },
    { question: t("services.faq5Question"), answer: t("services.faq5Answer") },
    { question: t("services.faq6Question"), answer: t("services.faq6Answer") },
    { question: t("services.faq7Question"), answer: t("services.faq7Answer") },
    { question: t("services.faq8Question"), answer: t("services.faq8Answer") },
    { question: t("services.faq9Question"), answer: t("services.faq9Answer") },
  ];

  const approachStages = [
    t("services.approachStage1"),
    t("services.approachStage2"),
    t("services.approachStage3"),
    t("services.approachStage4"),
    t("services.approachStage5"),
  ];

  return (
    <div>
      <SEO
        title={t("services.seoTitle")}
        description={t("services.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/services")}`}
        keywords="enterprise systems, digital infrastructure, legacy modernisation, AI-enabled operational intelligence, data governance, system scalability, operational ROI"
        schema={generateFAQSchema(faqs)}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.services"), url: localizePath("/services") },
        ])}
      />

      <Hero
        eyebrow={t("services.eyebrow")}
        title={
          <>
            {t("services.heroTitleLead")}{" "}
            <span className="text-[#27aae1]">{t("services.heroTitleHighlight")}</span>
          </>
        }
        lead={t("services.heroLead")}
      >
        <Button to="/contact">
          {t("services.startConversation")}
          <ArrowRight className="rtl-arrow h-4 w-4" />
        </Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("services.coreTitleLead")} <span className="text-[#27aae1]">{t("services.coreTitleHighlight")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">{t("services.coreIntro")}</p>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 dark:text-slate-500">
              {t("services.coreProofBeforeRbs")}
              <Link to={localizePath("/premium-travel-portal")} className="font-medium text-[#27aae1] hover:underline">
                Royal Bank of Scotland
              </Link>
              {t("services.coreProofBetweenRbsAndCarlounge")}
              <Link to={localizePath("/carlounge-experience")} className="font-medium text-[#27aae1] hover:underline">
                CarLounge Garage Experience
              </Link>
              {t("services.coreProofBetweenCarloungeAndAljazeera")}
              <Link to={localizePath("/it-service-management-platform")} className="font-medium text-[#27aae1] hover:underline">
                Al Jazeera
              </Link>
              {t("services.coreProofBetweenAljazeeraAndCisco")}
              <Link to={localizePath("/stealthwatch-educational-portal")} className="font-medium text-[#27aae1] hover:underline">
                Cisco
              </Link>
              {t("services.coreProofAfterCisco")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                {t("services.deliveryTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("services.deliveryTitleHighlight")}</span>
              </h2>
              <div className="space-y-4">
                {deliveryPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
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
                  src={`${import.meta.env.BASE_URL}delivery_discipline_futuristic.jpg`}
                  alt="Illustration of structured enterprise delivery stages, review gates, and governance checkpoints"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="brand-surface-strong h-full rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/85 dark:shadow-none md:p-10">
                <div className="mb-6 h-px w-20 bg-[#27aae1]" />
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl">
                  {t("services.approachTitle")}
                </h2>
                <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  {t("services.approachBody")}
                </p>
                <p className="mb-8 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-500">
                  {t("services.approachExamplesBeforeAljazeera")}
                  <Link to={localizePath("/it-service-management-platform")} className="font-medium text-[#27aae1] hover:underline">
                    Al Jazeera ITSM
                  </Link>
                  {t("services.approachExamplesBetweenAljazeeraAndCarlounge")}
                  <Link to={localizePath("/carlounge-experience")} className="font-medium text-[#27aae1] hover:underline">
                    CarLounge Garage Experience
                  </Link>
                  {t("services.approachExamplesAfterCarlounge")}
                </p>
                <div className="mb-8 flex flex-wrap gap-3 text-sm text-slate-500">
                  {approachStages.map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900/70"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
                <Button to="/how-we-work">
                  {t("services.howWeWork")}
                  <ArrowRight className="rtl-arrow h-4 w-4" />
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
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl">
                  {t("services.standardsTitle")}
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {[t("services.standard1"), t("services.standard2"), t("services.standard3"), t("services.standard4")].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-sm font-medium text-slate-700 dark:border-white/8 dark:bg-slate-950/35 dark:text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{t("services.standardsBody")}</p>
              </div>
            </motion.div>
          </div>
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
            <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/85 px-4 py-2 text-sm font-medium text-[#27aae1] dark:bg-[#1B2A6B]/40 dark:text-cyan-400">
              <HelpCircle className="h-4 w-4" />
              {t("services.faqEyebrow")}
            </motion.div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("services.faqTitleLead")} <span className="text-[#27aae1]">{t("services.faqTitleHighlight")}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <GlassCard className="dark:border-slate-800/70 dark:bg-none dark:bg-slate-900/85 dark:shadow-none">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left text-[#282973] hover:text-[#27aae1] dark:text-slate-100 dark:hover:text-cyan-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5f6b8e] dark:text-slate-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
