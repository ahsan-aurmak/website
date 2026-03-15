import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router";
import { Button } from "../components/button";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import {
  buildInsightArticleSchema,
  getInsightArticle,
  getInsightCanonicalUrl,
  insightArticles,
} from "../lib/insights";

const topicLabels = {
  "product development": "Product Development",
  "design & testing": "Design & Testing",
} as const;

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default function InsightArticle() {
  const { slug } = useParams();
  const article = getInsightArticle(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <SEO
          title="Insight Not Found"
          description="The requested insight could not be found."
          canonical="https://www.aurmak.com/insights"
          noIndex
        />
        <div className="text-center max-w-xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100">Insight Not Found</h1>
          <p className="mb-8 text-[#5f6b8e] dark:text-slate-400">The article you requested is not available.</p>
          <Button to="/insights">Return to Insights</Button>
        </div>
      </div>
    );
  }

  const topicLabel = topicLabels[article.topic];
  const relatedArticles = insightArticles
    .filter((entry) => entry.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="pb-16 sm:pb-20">
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={getInsightCanonicalUrl(article.slug)}
        schema={buildInsightArticleSchema(article)}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: article.title, url: `/insights/${article.slug}` }
        ])}
      />

      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(39,170,225,0.12),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(40,41,115,0.08),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(248,250,252,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl"
          >
            <Link
              to="/insights"
              className="mb-8 inline-flex items-center gap-2 text-sm text-[#27aae1] transition-colors hover:text-[#1d8fc2] dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>

            <div className="max-w-4xl">
              <div>
                  <div className="mb-5 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-[#27aae1] dark:text-cyan-300">
                    {topicLabel}
                  </div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#282973] dark:text-white sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f6b8e] dark:text-slate-300 sm:text-xl">
                  {article.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-[#5f6b8e] dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                    <CalendarDays className="h-4 w-4 text-[#27aae1] dark:text-cyan-300" />
                    {formatPublishedDate(article.publishedDate)}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-[#5f6b8e] dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                    <Clock3 className="h-4 w-4 text-[#27aae1] dark:text-cyan-300" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pt-10 sm:pt-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
              <div className="rounded-[32px] border border-slate-200 bg-white/92 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/75 dark:shadow-none sm:p-8 lg:p-10">
                <div className="border-l-2 border-cyan-400 pl-6">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                    Editorial Perspective
                  </div>
                  <p className="mt-4 text-xl leading-9 text-[#282973] dark:text-slate-200 sm:text-2xl">
                    The strongest product content does not just explain UX. It translates design decisions
                    into adoption, revenue, delivery confidence, and operational clarity.
                  </p>
                </div>
              </div>

              <article className="mt-8 space-y-8">
                {article.sections.map((section, index) => {
                  const sectionId = slugifyHeading(section.heading);

                  return (
                    <motion.section
                      key={section.heading}
                      id={sectionId}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="rounded-[32px] border border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/45 dark:shadow-none p-6 sm:p-8 lg:p-10"
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-[#27aae1] dark:text-cyan-300">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h2 className="text-2xl font-semibold leading-tight text-[#282973] dark:text-white sm:text-3xl">
                            {section.heading}
                          </h2>
                        </div>
                      </div>

                      <div className="mt-6 space-y-5 text-lg leading-8 text-[#5f6b8e] dark:text-slate-300">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {section.bullets && (
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                          {section.bullets.map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-[#5f6b8e] dark:border-slate-800 dark:bg-slate-950/75 dark:text-slate-300"
                            >
                              <div className="mb-3 h-1.5 w-12 rounded-full bg-[#2CB5E3]" />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  );
                })}
              </article>

              <section className="mt-10 rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/55 dark:shadow-none sm:p-8 lg:p-10">
                <div className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                  Key Takeaways
                </div>
                <ul className="mt-6 space-y-4">
                  {article.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#5f6b8e] dark:text-slate-300">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8 rounded-[32px] border border-cyan-500/20 bg-[#eef7fc] p-6 shadow-sm dark:bg-slate-900/90 dark:shadow-none sm:p-8 lg:p-10">
                <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#27aae1] dark:text-cyan-300/80">
                  Next Step
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-[#282973] dark:text-white">{article.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f6b8e] dark:text-slate-300">{article.ctaBody}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button to="/contact">
                    Talk to AURMAK
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button to="/case-studies" variant="secondary">
                    See Case Studies
                  </Button>
                </div>
              </section>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="pt-16 sm:pt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                    Continue Reading
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-[#282973] dark:text-white">More from Insights</h2>
                </div>
                <Link
                  to="/insights"
                  className="hidden text-sm text-[#27aae1] transition-colors hover:text-[#1d8fc2] dark:text-cyan-400 dark:hover:text-cyan-300 sm:inline-flex sm:items-center sm:gap-2"
                >
                  All insights
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {relatedArticles.map((entry) => (
                  <Link
                    key={entry.slug}
                    to={`/insights/${entry.slug}`}
                    className="group rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm transition-colors hover:border-cyan-400/40 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/45 dark:shadow-none dark:hover:bg-slate-900/75"
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.24em] text-[#27aae1] dark:text-cyan-300">
                      {topicLabels[entry.topic]}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#282973] dark:text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#5f6b8e] dark:text-slate-400">{entry.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#5f6b8e] transition-colors group-hover:text-[#27aae1] dark:text-slate-300 dark:group-hover:text-cyan-300">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
