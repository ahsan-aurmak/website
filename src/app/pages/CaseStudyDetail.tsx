import { useLocation } from "react-router";
import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { GlassCard } from "../components/card";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { SEO, generateBreadcrumbSchema, generateCaseStudySchema } from "../components/seo";
import { caseStudyData } from "../lib/case-study-data";
import { Link } from "react-router";

export default function CaseStudyDetail() {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const data = caseStudyData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 text-[#282973] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
        <SEO
          title="Case Study Not Found"
          description="The requested case study could not be found."
          canonical={null}
          noIndex
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button to="/case-studies" variant="primary">Back to Case Studies</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-[#282973] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <SEO
        title={data.title}
        description={data.lead}
        canonical={`https://www.aurmak.com/${slug}`}
        ogImage={data.images?.[0]?.src}
        schema={generateCaseStudySchema({
          title: data.title,
          description: data.lead,
          slug,
          image: data.images?.[0]?.src,
          client: data.clientName || data.snapshot?.find((item: any) => item.label === "Client")?.value,
          industry: data.snapshot?.find((item: any) => item.label === "Industry")?.value,
        })}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: data.title, url: `/${slug}` }
        ])}
      />

      <Hero
        kicker={data.kicker}
        title={data.title}
        lead={data.lead}
        align="center"
        size="large"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {data.metrics.map((metric: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-[#27aae1] md:text-5xl">
                {metric.value}
              </div>
              <div className="mt-2 text-[#5f6b8e] dark:text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </Hero>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {data.snapshot.map((item: any, i: number) => (
                  <div key={i}>
                    <div className="mb-1 text-sm text-slate-500">{item.label}</div>
                    <div className="font-medium text-[#282973] dark:text-slate-200">
                      {item.label === "Client" ? (data.clientName || item.value) : item.value}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-2xl font-bold text-cyan-400">The Challenge</h2>
              <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-2xl font-bold text-cyan-400">Our Solution</h2>
              <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <GlassCard>
              <h2 className="mb-6 text-2xl font-bold text-cyan-400">Execution</h2>
              <div className="space-y-3">
                {data.projectDetails.approach.map((item: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Business Impact</h2>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {data.businessOutcomes.map((outcome: string, i: number) => (
                <div key={i} className="flex items-start space-x-3 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none">
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
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover object-top"
                      />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <button
              onClick={() => setShowProjectDetails(!showProjectDetails)}
                className="w-full rounded-xl border border-slate-200 bg-white/90 p-6 text-left shadow-sm transition-colors hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-cyan-800/50"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyan-400">Project Overview</h2>
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
                    <h3 className="mb-3 text-lg font-semibold text-[#282973] dark:text-slate-200">Project Scope</h3>
                    <p className="leading-relaxed text-[#5f6b8e] dark:text-slate-300">{data.projectDetails.scope}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[#282973] dark:text-slate-200">Key Activities</h3>
                    <ul className="space-y-2">
                      {data.projectDetails.approach.map((item: string, i: number) => (
                        <li key={i} className="flex items-start space-x-3">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Move Your Operations Forward?
            </h2>
            <p className="mb-8 text-lg text-[#5f6b8e] dark:text-slate-300">
              We help organisations simplify complex systems, define clear delivery priorities, and build structured, scalable solutions aligned to real operational needs.
            </p>
            <p className="mb-8 text-base text-slate-500 dark:text-slate-500">
              Explore our{" "}
              <Link to="/services" className="font-medium text-[#27aae1] hover:underline">
                services
              </Link>{" "}
              and{" "}
              <Link to="/solutions" className="font-medium text-[#27aae1] hover:underline">
                solutions
              </Link>{" "}
              for related delivery approaches.
            </p>
            <Button to="/contact" size="large">
              Start a Conversation
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
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-auto max-h-[80vh] w-full object-contain"
              />
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
