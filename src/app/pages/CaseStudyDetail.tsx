import { useLocation } from "react-router";
import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { GlassCard } from "../components/card";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { SEO, generateBreadcrumbSchema, generateCaseStudySchema } from "../components/seo";
import { getCaseStudyEntry } from "../lib/case-study-data";
import { useLanguage } from "../components/language-provider";

export default function CaseStudyDetail() {
  const location = useLocation();
  const { language, localizePath, t } = useLanguage();
  const slug = location.pathname.replace(/^\/ar/, "").replace("/", "");
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const data = getCaseStudyEntry(slug, language);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 text-[#282973] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
        <SEO title={t("caseStudyDetail.notFoundTitle")} description={t("caseStudyDetail.notFoundBody")} canonical={null} noIndex />
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t("caseStudyDetail.notFoundTitle")}</h1>
          <Button to="/case-studies" variant="primary">
            {t("caseStudyDetail.backToCaseStudies")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-[#282973] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <SEO
        title={data.title}
        description={data.lead}
        canonical={`https://www.aurmak.com${localizePath(`/${slug}`)}`}
        ogImage={data.images?.[0]?.src}
        schema={generateCaseStudySchema({
          title: data.title,
          description: data.lead,
          slug,
          image: data.images?.[0]?.src,
          client: data.clientName || data.snapshot?.[0]?.value,
          industry: data.snapshot?.[2]?.value,
        })}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: t("caseStudyDetail.home"), url: localizePath("/") },
          { name: t("navigation.caseStudies"), url: localizePath("/case-studies") },
          { name: data.title, url: localizePath(`/${slug}`) },
        ])}
      />

      <Hero kicker={data.kicker} title={data.title} lead={data.lead} align="center" size="large">
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {data.metrics.map((metric: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-[#27aae1] md:text-5xl">{metric.value}</div>
              <div className="mt-2 text-[#5f6b8e] dark:text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </Hero>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {data.snapshot.map((item: any, i: number) => (
                  <div key={i}>
                    <div className="mb-1 text-sm text-slate-500">{item.label}</div>
                    <div className="font-medium text-[#282973] dark:text-slate-200">
                      {i === 0 ? (data.clientName || item.value) : item.value}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-4 text-2xl font-bold text-cyan-400">{t("caseStudyDetail.challenge")}</h2>
              <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-4 text-2xl font-bold text-cyan-400">{t("caseStudyDetail.solution")}</h2>
              <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl">
            <GlassCard>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">{t("caseStudyDetail.execution")}</h2>
              <div className="space-y-3">
                {data.projectDetails.approach.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#27aae1] dark:text-cyan-400" />
                    <p className="text-[#5f6b8e] dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#eef7fc] py-12 dark:bg-slate-950/70">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-8 text-center text-3xl font-bold">{t("caseStudyDetail.businessImpact")}</h2>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {data.businessOutcomes.map((outcome: string, i: number) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#27aae1] dark:text-cyan-400" />
                  <p className="text-[#5f6b8e] dark:text-slate-300">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {data.images && data.images.length > 0 && (
        <section className="relative py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              {data.images.map((image: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-sm transition-colors hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/30 dark:shadow-none dark:hover:border-cyan-800/50">
                    <div className="aspect-video overflow-hidden bg-white">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="p-3">
                      <p className="text-center text-sm text-[#5f6b8e] dark:text-slate-400">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl">
            <button
              onClick={() => setShowProjectDetails(!showProjectDetails)}
              className="w-full rounded-xl border border-slate-200 bg-white/90 p-6 text-left shadow-sm transition-colors hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-cyan-800/50"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyan-400">{t("caseStudyDetail.projectOverview")}</h2>
                {showProjectDetails ? (
                  <ChevronUp className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                )}
              </div>
            </button>

            {showProjectDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 dark:shadow-none"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[#282973] dark:text-slate-200">{t("caseStudyDetail.projectScope")}</h3>
                    <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.projectDetails.scope}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[#282973] dark:text-slate-200">{t("caseStudyDetail.keyActivities")}</h3>
                    <ul className="space-y-2">
                      {data.projectDetails.approach.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#27aae1] dark:text-cyan-400" />
                          <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("caseStudyDetail.finalTitle")}</h2>
            <p className="mb-8 text-lg text-[#5f6b8e] dark:text-slate-300">{t("caseStudyDetail.finalBody")}</p>
            <Button to="/contact" size="large">
              {t("caseStudyDetail.startConversation")}
            </Button>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <div className="relative flex max-h-[90vh] w-full max-w-7xl flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 rounded-full bg-slate-800/50 p-2 transition-colors hover:bg-slate-700"
              aria-label={t("caseStudyDetail.closeModal")}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="h-auto max-h-[80vh] w-full object-contain" />
              <div className="bg-white p-6 text-[#282973] dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 dark:text-white">
                <p className="text-lg font-semibold">{selectedImage.caption}</p>
                <p className="mt-2 text-sm text-[#5f6b8e] dark:text-slate-400">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
