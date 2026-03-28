import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { SEO, generateBreadcrumbSchema, generateJobPostingSchema } from "../components/seo";
import { Turnstile } from "../components/turnstile";
import { useLanguage } from "../components/language-provider";

export default function JobDetail() {
  const { jobSlug: routeJobSlug } = useParams();
  const location = useLocation();
  const { localizePath, t } = useLanguage();
  const searchParams = new URLSearchParams(location.search);
  const jobSlug = routeJobSlug || searchParams.get("job");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    portfolio: "",
    note: "",
    cv: null as File | null,
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const sharedBenefits = [t("careers.benefit1"), t("careers.benefit2"), t("careers.benefit3"), t("careers.benefit4")];

  const jobData: Record<string, any> = {
    "tech-lead-backend-ai": {
      code: "AUR-ENG-001",
      title: t("careers.role1Title"),
      lead: t("jobDetail.job1Lead"),
      location: t("jobDetail.job1Location"),
      workModel: t("jobDetail.job1WorkModel"),
      experience: t("jobDetail.experience5"),
      summary: t("jobDetail.job1Summary"),
      responsibilities: [t("jobDetail.job1Resp1"), t("jobDetail.job1Resp2"), t("jobDetail.job1Resp3"), t("jobDetail.job1Resp4")],
      requirements: [t("jobDetail.job1Req1"), t("jobDetail.job1Req2"), t("jobDetail.job1Req3")],
      benefits: sharedBenefits,
    },
    "product-owner-delivery-lead": {
      code: "AUR-DEL-002",
      title: t("careers.role2Title"),
      lead: t("jobDetail.job2Lead"),
      location: t("jobDetail.job2Location"),
      workModel: t("jobDetail.job2WorkModel"),
      experience: t("jobDetail.experience5"),
      summary: t("jobDetail.job2Summary"),
      responsibilities: [t("jobDetail.job2Resp1"), t("jobDetail.job2Resp2"), t("jobDetail.job2Resp3"), t("jobDetail.job2Resp4")],
      requirements: [t("jobDetail.job2Req1"), t("jobDetail.job2Req2"), t("jobDetail.job2Req3")],
      benefits: sharedBenefits,
    },
    "frontend-developer-saas-modern-ui": {
      code: "AUR-FE-003",
      title: t("careers.role3Title"),
      lead: t("jobDetail.job3Lead"),
      location: t("jobDetail.job3Location"),
      workModel: t("jobDetail.job3WorkModel"),
      experience: t("jobDetail.experience3"),
      summary: t("jobDetail.job3Summary"),
      responsibilities: [t("jobDetail.job3Resp1"), t("jobDetail.job3Resp2"), t("jobDetail.job3Resp3")],
      requirements: [t("jobDetail.job3Req1"), t("jobDetail.job3Req2"), t("jobDetail.job3Req3")],
      benefits: sharedBenefits,
    },
  };

  const job = jobSlug ? jobData[jobSlug] : null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024;
      const allowedTypes = [".pdf", ".doc", ".docx"];
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

      if (file.size > maxSize) {
        setErrorMessage(t("jobDetail.fileTooLarge"));
        return;
      }

      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage(t("jobDetail.fileInvalid"));
        return;
      }

      setFormData({ ...formData, cv: file });
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      if (!job) {
        throw new Error(t("jobDetail.notFoundTitle"));
      }

      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("location", formData.location);
      payload.append("portfolio", formData.portfolio);
      payload.append("note", formData.note);
      payload.append("website", formData.website);
      payload.append("jobTitle", job.title);
      payload.append("jobCode", job.code);
      payload.append("turnstileToken", turnstileToken);

      if (formData.cv) {
        payload.append("cv", formData.cv);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: payload,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || t("jobDetail.submitErrorGeneric"));
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        portfolio: "",
        note: "",
        cv: null,
        website: "",
      });
      setTurnstileToken("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("jobDetail.submitErrorGeneric"));
    }
  };

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <SEO title={t("jobDetail.notFoundTitle")} description={t("jobDetail.notFoundBody")} canonical={null} noIndex />
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-3xl font-bold">{t("jobDetail.notFoundTitle")}</h1>
          <p className="mb-6 text-[#5f6b8e] dark:text-slate-400">{t("jobDetail.notFoundBody")}</p>
          <Button to="/careers">{t("jobDetail.returnToCareers")}</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${job.title} | ${t("navigation.careers")}`}
        description={job.lead}
        canonical={`https://www.aurmak.com${localizePath(`/careers/${jobSlug}`)}`}
        schema={generateJobPostingSchema({
          title: job.title,
          description: `${job.summary} Responsibilities: ${job.responsibilities.join(" ")} Requirements: ${job.requirements.join(" ")}`,
          identifier: job.code,
          employmentType: job.workModel.includes("Full") || job.workModel.includes("دوام") ? "FULL_TIME" : job.workModel,
          location: job.location,
        })}
        breadcrumbSchema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.careers"), url: localizePath("/careers") },
          { name: job.title, url: localizePath(`/careers/${jobSlug}`) },
        ])}
      />
      <Hero
        eyebrow={t("jobDetail.eyebrow")}
        title={job.title}
        lead={job.lead}
        badge={t("jobDetail.heroBadge")}
      >
        <Button to="/careers" variant="secondary">
          <ArrowLeft className="rtl-arrow h-4 w-4" />
          {t("jobDetail.returnToCareers")}
        </Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-6 text-2xl font-bold">{t("jobDetail.roleSummary")}</h2>
                <Card>
                  <dl className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <dt className="mb-1 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{t("jobDetail.jobCode")}</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.code}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{t("jobDetail.location")}</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.location}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{t("jobDetail.workModel")}</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.workModel}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-sm font-medium text-[#27aae1] dark:text-cyan-400">{t("jobDetail.experience")}</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.experience}</dd>
                    </div>
                  </dl>
                  <p className="text-[#5f6b8e] dark:text-slate-400">{job.summary}</p>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-4 text-2xl font-bold">{t("jobDetail.responsibilities")}</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27aae1]" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-4 text-2xl font-bold">{t("jobDetail.requirements")}</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.requirements.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27aae1]" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-4 text-2xl font-bold">{t("jobDetail.benefits")}</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.benefits.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27aae1]" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="brand-surface-strong">
                  <h2 className="mb-4 text-2xl font-bold">{t("jobDetail.submitApplication")}</h2>
                  <p className="mb-6 text-sm text-[#5f6b8e] dark:text-slate-400">{t("jobDetail.submitLead")}</p>

                  {status === "success" ? (
                    <div className="py-8 text-center">
                      <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-400" />
                      <p className="mb-2 font-medium text-green-400">{t("jobDetail.successTitle")}</p>
                      <p className="text-sm text-[#5f6b8e] dark:text-slate-400">{t("jobDetail.successBody")}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="sr-only" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.fullName")}</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.workEmail")}</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.phone")}</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.currentLocation")}</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.portfolio")}</label>
                        <input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.note")}</label>
                        <textarea
                          rows={3}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#282973] dark:text-slate-300">{t("jobDetail.uploadCv")}</label>
                        <div className="relative">
                          <input type="file" required accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" id="cv-upload" />
                          <label
                            htmlFor="cv-upload"
                            className="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 py-3 text-[#5f6b8e] transition-colors hover:border-cyan-500 hover:text-[#27aae1] dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-cyan-400"
                          >
                            <Upload className="h-5 w-5" />
                            {formData.cv ? formData.cv.name : t("jobDetail.chooseFile")}
                          </label>
                        </div>
                      </div>

                      {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

                      <div className="space-y-2">
                        <Turnstile
                          onVerify={(token) => {
                            setTurnstileToken(token);
                            setErrorMessage("");
                          }}
                          onExpire={() => {
                            setTurnstileToken("");
                          }}
                        />
                        {import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken && (
                          <p className="text-xs text-[#5f6b8e] dark:text-slate-400">{t("jobDetail.securityCheck")}</p>
                        )}
                      </div>

                      <p className="text-xs text-[#5f6b8e] dark:text-slate-500">{t("jobDetail.cvReviewNote")}</p>

                      <Button
                        type="submit"
                        disabled={status === "loading" || !formData.cv || (!!import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken)}
                        className="w-full"
                      >
                        {status === "loading" ? t("jobDetail.submitting") : t("jobDetail.submitCta")}
                      </Button>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
