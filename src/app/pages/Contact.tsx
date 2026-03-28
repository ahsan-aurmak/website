import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { MapPin, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/button";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { InlineWidget } from "react-calendly";
import { useTheme } from "../components/theme-provider";
import { GlassCard } from "../components/card";
import { getCalendlyPageSettings } from "../lib/calendly";
import { Turnstile } from "../components/turnstile";
import { useLanguage } from "../components/language-provider";

export default function Contact() {
  const { theme } = useTheme();
  const { localizePath, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    brief: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const offices = [
    {
      country: t("contact.office1Country"),
      address: "124 City Road, London, EC1V 2NX",
      focus: t("contact.office1Focus"),
    },
    {
      country: t("contact.office2Country"),
      address: "BLA-507, Block A, Ajman Main Boulevard",
      focus: t("contact.office2Focus"),
    },
    {
      country: t("contact.office3Country"),
      address: "306 Tipu Block, Bahria Town, Lahore",
      focus: t("contact.office3Focus"),
    },
  ];

  const services = [
    t("contact.service1"),
    t("contact.service2"),
    t("contact.service3"),
    t("contact.service4"),
    t("contact.service5"),
  ];

  const calendlyPageSettings = getCalendlyPageSettings(theme);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || t("contact.submitErrorGeneric"));
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        brief: "",
        website: "",
      });
      setTurnstileToken("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("contact.submitErrorGeneric"));
    }
  };

  return (
    <div>
      <SEO
        title={t("contact.seoTitle")}
        description={t("contact.seoDescription")}
        canonical={`https://www.aurmak.com${localizePath("/contact")}`}
        keywords="contact AURMAK, enterprise technology consultation, AI integration inquiry, project discussion, London Dubai Lahore offices"
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("navigation.contact"), url: localizePath("/contact") },
        ])}
      />
      <Hero
        eyebrow={t("contact.eyebrow")}
        title={
          <>
            {t("contact.heroTitleLead")} <span className="text-[#27aae1]">{t("contact.heroTitleHighlight")}</span>
          </>
        }
        lead={t("contact.heroLead")}
        badge={t("contact.heroBadge")}
      >
        <Button to="/contact#message">{t("contact.startConversation")}</Button>
      </Hero>

      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("contact.officesTitleLead")} <span className="text-[#27aae1]">{t("contact.officesTitleHighlight")}</span>
            </h2>
          </motion.div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-8 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                      <MapPin className="h-9 w-9 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">{office.country}</h3>
                      <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">{office.address}</p>
                      <p className="text-sm font-medium text-[#282973] dark:text-slate-200">{office.focus}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/contact#message" variant="ghost" className="gap-2">
              {t("contact.speakDirectly")}
              <ArrowRight className="rtl-arrow h-4 w-4" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </section>

      <section id="book-call" className="relative py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center"
          >
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
              <Calendar className="h-4 w-4 text-[#27aae1] dark:text-cyan-400" strokeWidth={1.75} />
              <span className="text-sm font-medium text-[#27aae1] dark:text-cyan-400">{t("contact.calendlyLabel")}</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("contact.bookingTitleLead")} <span className="text-[#27aae1]">{t("contact.bookingTitleHighlight")}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">{t("contact.bookingLead")}</p>
          </motion.div>

          <motion.div
            key={`calendly-${theme}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-[1120px]"
          >
            <InlineWidget
              url="https://calendly.com/ahsan-jalil-aurmak/30min"
              styles={{ height: "700px", minWidth: "100%", width: "100%" }}
              pageSettings={calendlyPageSettings}
            />
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-6 py-2">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-sm font-medium text-slate-500">{t("contact.divider")}</span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>

      <section id="message" className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("contact.messageTitleLead")} <span className="text-[#27aae1]">{t("contact.messageTitleHighlight")}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">{t("contact.messageLead")}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="brand-surface rounded-2xl border border-slate-200 bg-white/88 p-8 shadow-sm dark:border-slate-700/50 dark:bg-transparent dark:shadow-none lg:p-12">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-400" strokeWidth={1.75} />
                  <h3 className="mb-2 text-xl font-bold text-green-400">{t("contact.successTitle")}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t("contact.successBody")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {t("contact.fullName")}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder={t("contact.fullNamePlaceholder")}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder={t("contact.emailPlaceholder")}
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {t("contact.company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder={t("contact.companyPlaceholder")}
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {t("contact.serviceRequirement")}
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full cursor-pointer appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        >
                          <option value="">{t("contact.selectService")}</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">{t("contact.message")}</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Turnstile
                      theme={theme === "dark" ? "dark" : "light"}
                      onVerify={(token) => {
                        setTurnstileToken(token);
                        setErrorMessage("");
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                      }}
                    />
                    {import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t("contact.securityCheck")}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={status === "loading" || (!!import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken)}
                      className="px-12"
                    >
                      {status === "loading" ? t("contact.submitting") : t("contact.submitEnquiry")}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
