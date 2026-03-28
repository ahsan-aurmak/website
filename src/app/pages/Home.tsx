import { motion } from "motion/react";
import { ArrowRight, Brain, Code2, Network, Rocket } from "lucide-react";
import { Feature3DCard } from "../components/tilt-card";
import { HeroGradientMesh } from "../components/gradient-mesh";
import { Button } from "../components/button";
import { SEO, organizationSchema } from "../components/seo";
import { HeroCaseShowcase } from "../components/hero-case-showcase";
import { useLanguage } from "../components/language-provider";

export default function Home() {
  const { localizePath, t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t("home.service1Title"),
      description: t("home.service1Description"),
      gradient: "from-[#2CB5E3] to-[#1B2A6B]",
      to: "/services",
    },
    {
      icon: Network,
      title: t("home.service2Title"),
      description: t("home.service2Description"),
      gradient: "from-[#2CB5E3] via-[#2A7FC4] to-[#1B2A6B]",
      to: "/services",
    },
    {
      icon: Brain,
      title: t("home.service3Title"),
      description: t("home.service3Description"),
      gradient: "from-[#58C7EC] to-[#1B2A6B]",
      to: "/services",
    },
  ];

  const clients = ["Cisco", "Al Jazeera", "Castrol", "RBS", "Metrikus", "Cutover", "GTT", "Dubai Trade"];

  const capabilities = [
    {
      title: t("home.capability1Title"),
      description: t("home.capability1Description"),
    },
    {
      title: t("home.capability2Title"),
      description: t("home.capability2Description"),
    },
    {
      title: t("home.capability3Title"),
      description: t("home.capability3Description"),
    },
  ];

  const deliveryMetrics = [
    {
      title: t("home.metric1Title"),
      value: t("home.metric1Value"),
      description: t("home.metric1Description"),
    },
    {
      title: t("home.metric2Title"),
      value: t("home.metric2Value"),
      description: t("home.metric2Description"),
    },
    {
      title: t("home.metric3Title"),
      value: t("home.metric3Value"),
      description: t("home.metric3Description"),
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <SEO
        title={t("home.seoTitle")}
        description={t("home.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/")}`}
        keywords="enterprise systems, digital infrastructure, legacy modernisation, AI-enabled operational intelligence, proptech, industrial operations, real estate technology"
        schema={organizationSchema}
      />

      <section className="relative -mt-20 flex min-h-screen items-center pt-20">
        <HeroGradientMesh />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl"
                >
                  {t("home.heroTitleLead")}{" "}
                  <span className="mt-2 block text-[#27aae1]">{t("home.heroTitleHighlight")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-700 dark:text-slate-300 md:text-2xl"
                >
                  {t("home.heroLead")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button to="/contact">
                    {t("home.startConversation")}
                    <ArrowRight className="rtl-arrow h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <HeroCaseShowcase />
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27aae1]/8 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/85 px-4 py-2 text-sm font-medium text-[#27aae1] dark:bg-[#1B2A6B]/40 dark:text-cyan-400"
            >
              <Rocket className="h-4 w-4" />
              {t("home.servicesEyebrow")}
            </motion.div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {t("home.servicesTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("home.servicesTitleHighlight")}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400">
              {t("home.servicesIntro")}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500 dark:text-slate-500">
              {t("home.servicesIntroSecondary")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Feature3DCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mx-auto">
              <div className="brand-surface-strong overflow-hidden rounded-[28px] border border-slate-200 bg-white/88 px-6 py-8 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/72 md:px-8 md:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    {t("home.capabilityTitleLead")}{" "}
                    <span className="text-[#27aae1]">{t("home.capabilityTitleHighlight")}</span>
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 border-t border-slate-200 dark:border-slate-800 md:grid-cols-3">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="relative border-b border-slate-200 py-8 dark:border-slate-800 md:border-b-0 md:px-6 md:last:border-r-0"
                    >
                      <h4 className="mb-4 text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">{item.description}</p>
                      {index < capabilities.length - 1 && (
                        <div className="absolute right-0 top-10 bottom-10 hidden w-px bg-slate-200 dark:bg-slate-800 md:block" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <Button to="/services">
                    {t("home.exploreServices")}
                    <ArrowRight className="rtl-arrow h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                {t("home.deliveryTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("home.deliveryTitleHighlight")}</span>
              </h2>
              <p className="max-w-none text-lg leading-8 text-slate-600 dark:text-slate-400">
                {t("home.deliveryIntro")}
              </p>
            </motion.div>

            <div>
              <div className="border-t border-slate-200 dark:border-slate-800">
                {deliveryMetrics.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="grid gap-4 border-b border-slate-200 py-7 dark:border-slate-800 sm:grid-cols-[220px_140px_minmax(0,1fr)] sm:items-start sm:gap-8"
                  >
                    <div className="pt-1 text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                      {item.title}
                    </div>
                    <div className="text-5xl font-bold leading-none text-[#27aae1] md:text-6xl">{item.value}</div>
                    <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("home.clientsTitleLead")}{" "}
              <span className="text-[#27aae1]">{t("home.clientsTitleHighlight")}</span>
            </h2>
            <p className="mx-auto max-w-none text-lg text-slate-600 dark:text-slate-400">
              {t("home.clientsIntro")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="brand-surface flex min-h-[92px] items-center justify-center rounded-[22px] border border-slate-200 bg-white/90 px-5 py-6 text-center shadow-sm backdrop-blur-sm dark:border-white/6 dark:bg-white/[0.02] dark:shadow-none"
                >
                  <span className="text-base font-medium tracking-[0.18em] text-slate-600 dark:text-slate-400 sm:text-lg">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-10 flex justify-center"
          >
            <Button to="/case-studies">
              {t("home.exploreCaseStudies")}
              <ArrowRight className="rtl-arrow h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brand-surface rounded-[32px] border border-slate-200 bg-white/82 px-8 py-8 backdrop-blur-sm dark:border-slate-800/70 dark:bg-transparent md:px-10 md:py-10"
            >
              <div className="mb-5 h-px w-20 bg-[#27aae1]" />
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("home.labTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("home.labTitleHighlight")}</span>
              </h2>
              <p className="max-w-4xl text-xl leading-9 text-slate-700 dark:text-slate-300">{t("home.labIntro")}</p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                {t("home.labIntroSecondary")}
              </p>
              <div className="mt-8">
                <Button to="/lab">
                  {t("home.exploreLab")}
                  <ArrowRight className="rtl-arrow h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-visible py-32">
        <div className="pointer-events-none absolute -inset-y-16 inset-x-0 overflow-visible">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27aae1]/12 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brand-surface-strong relative mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-12 text-center shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/85 dark:shadow-none md:p-16"
          >
            <div className="absolute inset-0 bg-[#27aae1]/6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[#27aae1]/8" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              >
                {t("home.finalTitleLead")}{" "}
                <span className="text-[#27aae1]">{t("home.finalTitleHighlight")}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-700 dark:text-slate-300 md:text-2xl"
              >
                {t("home.finalLead")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button to="/contact">
                  {t("home.startConversation")}
                  <ArrowRight className="rtl-arrow h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
