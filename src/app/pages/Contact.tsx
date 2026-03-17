import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { MapPin, CheckCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/button";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { InlineWidget } from "react-calendly";
import { useTheme } from "../components/theme-provider";
import { GlassCard } from "../components/card";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    brief: "",
    website: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const offices = [
    { country: "United Kingdom", address: "124 City Road, London, EC1V 2NX." },
    { country: "United Arab Emirates", address: "BLA-507, Block A, Ajman Main Boulevard." },
    { country: "Pakistan", address: "306 Tipu Block, Bahria Town, Lahore." }
  ];

  const services = [
    "SaaS Product Development",
    "Legacy System Modernisation",
    "AI Integration",
    "Building Management Systems",
    "General Advisory"
  ];

  const calendlyPageSettings =
    theme === "dark"
      ? {
          backgroundColor: "0f172a",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "06b6d4",
          textColor: "f1f5f9",
        }
      : {
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "27aae1",
          textColor: "282973",
        };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Unable to submit your enquiry right now.");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        brief: "",
        website: ""
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit your enquiry right now.");
    }
  };

  return (
    <div>
      <SEO
        title="Contact AURMAK | Start an Enterprise Systems Conversation"
        description="Contact AURMAK to discuss enterprise systems, AI integration, SaaS platforms, and digital modernisation with our London, Dubai, and Lahore teams."
        canonical="https://www.aurmak.com/contact"
        keywords="contact AURMAK, enterprise technology consultation, AI integration inquiry, project discussion, London Dubai Lahore offices"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ])}
      />
      <Hero
        eyebrow="Contact"
        title={
          <>
            Start the{" "}
            <span className="text-[#27aae1]">Conversation.</span>
          </>
        }
        lead="Share your commercial priorities and operational constraints. We will respond with a structured path to execution."
        badge="📞 Get in Touch"
      />

      {/* Office Addresses */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="text-[#27aae1]">
                Offices
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                      <p className="text-sm text-slate-600 dark:text-slate-400">{office.address}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Booking */}
      <section id="book-call" className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
              <Calendar className="h-4 w-4 text-[#27aae1] dark:text-cyan-400" strokeWidth={1.75} />
              <span className="text-sm font-medium text-[#27aae1] dark:text-cyan-400">Prefer to talk first?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book a{" "}
              <span className="text-[#27aae1]">
                Discovery Call
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              30 minutes with a senior team member. No sales pitch — just a structured conversation about your priorities and how we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <InlineWidget
              url="https://calendly.com/ahsan-jalil-aurmak/30min"
              styles={{ height: "700px", minWidth: "100%", width: "100%" }}
              pageSettings={calendlyPageSettings}
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-6 py-2">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-sm font-medium text-slate-500">or send us a message</span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discuss Your{" "}
              <span className="text-[#27aae1]">
                Requirement
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Provide your requirements and we will connect you with the appropriate regional lead and delivery team.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="brand-surface rounded-2xl border border-slate-200 bg-white/88 p-8 shadow-sm dark:border-slate-700/50 dark:bg-transparent dark:shadow-none lg:p-12">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-400" strokeWidth={1.75} />
                  <h3 className="text-xl font-bold text-green-400 mb-2">Enquiry Submitted Successfully</h3>
                  <p className="text-slate-600 dark:text-slate-400">Our team will contact you shortly.</p>
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

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder="John Doe"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder="john@company.com"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company + Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                        placeholder="Your Company"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Service Requirement *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full cursor-pointer appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        >
                          <option value="">Select a service</option>
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

                  {/* Row 3: Message full-width */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Tell us about your business, what you're looking to achieve, and any timelines or constraints."
                      className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-12"
                    >
                      {status === "loading" ? "Submitting..." : "Submit Enquiry"}
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
