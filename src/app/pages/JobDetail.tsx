import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { SEO, generateBreadcrumbSchema, generateJobPostingSchema } from "../components/seo";
import { Turnstile } from "../components/turnstile";

export default function JobDetail() {
  const { jobSlug: routeJobSlug } = useParams();
  const location = useLocation();
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

  const jobData: Record<string, any> = {
    "tech-lead-backend-ai": {
      code: "AUR-ENG-001",
      title: "Tech Lead (Backend/AI)",
      lead: "Lead the Lahore engineering hub and build the scalable systems that power modern operations, from SaaS platforms to AI-enabled automation.",
      location: "Lahore, Pakistan (with London and Dubai collaboration)",
      workModel: "Hybrid, Full-time",
      experience: "5+ years",
      summary: "We are seeking an enterprise-grade architect to lead our engineering hub in Lahore. You will balance high-level architecture with AI-accelerated execution across client delivery and internal product incubation.",
      responsibilities: [
        "System Architecture: Design and maintain robust backend environments using PostgreSQL and Supabase.",
        "AI-Accelerated Development: Lead development cycles using Cursor to maintain high velocity without compromising enterprise-grade quality.",
        "Dual-Track Execution: Manage technical delivery for both high-end client services and internal product incubation.",
        "Enterprise Standards: Ensure all systems meet strict standards for security, governance, and data integrity."
      ],
      requirements: [
        "Expertise in PostgreSQL and modern backend architecture.",
        "Proficiency in Supabase and AI-assisted coding workflows, specifically Cursor.",
        "Experience modernizing legacy systems and building reliable digital infrastructure."
      ],
      benefits: [
        "Opportunity to work from AURMAK's Dubai and London offices.",
        "Long-term team members may be offered a permanent role in an AURMAK international office.",
        "After successful completion of probation, eligibility for a company car.",
        "After successful completion of probation, eligibility for medical insurance and paid holidays."
      ]
    },
    "product-owner-delivery-lead": {
      code: "AUR-DEL-002",
      title: "Product Owner (Delivery Lead)",
      lead: "Bridge strategic leadership in London and Dubai with daily engineering execution in Lahore while maintaining disciplined delivery against commercial goals.",
      location: "Lahore, Pakistan",
      workModel: "Hybrid, Full-time",
      experience: "5+ years",
      summary: "As the primary on-ground commander in Lahore, you will enforce AURMAK’s delivery model, maintain the 50/50 workflow, and keep engineering execution aligned with strategic leadership.",
      responsibilities: [
        "Workflow Management: Strictly enforce the 50/50 Rule, with Monday to Wednesday focused on client projects and Thursday to Friday reserved for internal SaaS products.",
        "Stakeholder Coordination: Act as the primary link between the engineering team and the Dubai front office for requirements and reporting.",
        "Structured Delivery: Oversee the full lifecycle from discovery and architecture to pilot and rollout.",
        "Diagnostic Leadership: Facilitate human-led diagnostics to ensure technology is an outcome of clear problem definition."
      ],
      requirements: [
        "Strong background in ticket management, sprint planning, and client reporting.",
        "Ability to manage complex transformations without allowing tech-for-tech's-sake.",
        "Experience in a proxy model of management, ensuring execution while partners are engaged globally."
      ],
      benefits: [
        "Opportunity to work from AURMAK's Dubai and London offices.",
        "Long-term team members may be offered a permanent role in an AURMAK international office.",
        "After successful completion of probation, eligibility for a company car.",
        "After successful completion of probation, eligibility for medical insurance and paid holidays."
      ]
    },
    "frontend-developer-saas-modern-ui": {
      code: "AUR-FE-003",
      title: "Frontend Developer (SaaS & Modern UI)",
      lead: "Build minimalist, high-performance interfaces that bring engineering clarity to complex enterprise systems and operational dashboards.",
      location: "Lahore, Pakistan",
      workModel: "On-site / Hybrid, Full-time",
      experience: "3+ years",
      summary: "You will use modern boilerplates to accelerate delivery while maintaining AURMAK’s corporate, high-tech aesthetic across SaaS products and client systems.",
      responsibilities: [
        "Rapid Implementation: Build responsive UIs using React or Vue, leveraging Antigravity or similar boilerplates to test ideas quickly.",
        "Visual Precision: Implement clean, grid-based layouts inspired by Palantir's design language.",
        "Performance Dashboards: Create unified operational views that provide single-pane visibility across assets and data."
      ],
      requirements: [
        "Mastery of React or Vue.js and Tailwind CSS.",
        "Ability to work with Ant Design 6.3.0 and the 8-point grid system.",
        "Focus on visual explanation over long text, utilising diagrams and system flows."
      ],
      benefits: [
        "Opportunity to work from AURMAK's Dubai and London offices.",
        "Long-term team members may be offered a permanent role in an AURMAK international office.",
        "After successful completion of probation, eligibility for a company car.",
        "After successful completion of probation, eligibility for medical insurance and paid holidays."
      ]
    }
  };

  const job = jobSlug ? jobData[jobSlug] : null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();

      if (file.size > maxSize) {
        setErrorMessage("CV file must be less than 5MB");
        return;
      }

      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage("CV must be PDF, DOC, or DOCX format");
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
        throw new Error(data?.message || "Unable to submit your application right now.");
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
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit your application right now.");
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <SEO
          title="Role Not Found"
          description="The requested role could not be found."
          canonical={null}
          noIndex
        />
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Role Not Found</h1>
          <p className="text-[#5f6b8e] dark:text-slate-400 mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/careers">Return to Careers</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO
      title={`${job.title} Careers`}
      description={job.lead}
      canonical={`https://www.aurmak.com/careers/${jobSlug}`}
      schema={generateJobPostingSchema({
        title: job.title,
        description: `${job.summary} Responsibilities: ${job.responsibilities.join(" ")} Requirements: ${job.requirements.join(" ")}`,
        identifier: job.code,
        employmentType: job.workModel.includes("Full-time") ? "FULL_TIME" : job.workModel,
        location: job.location,
      })}
      breadcrumbSchema={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Careers", url: "/careers" },
        { name: job.title, url: `/careers/${jobSlug}` }
        ])}
      />
      <Hero
        eyebrow="Structured Opportunity"
        title={job.title}
        lead={job.lead}
        badge="💼 Career Opportunity"
      >
        <Button to="/careers" variant="secondary">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Return to Careers
        </Button>
      </Hero>

      {/* Role Summary */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Role Summary</h2>
                <Card>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <dt className="text-[#27aae1] dark:text-cyan-400 text-sm font-medium mb-1">Job Code</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.code}</dd>
                    </div>
                    <div>
                      <dt className="text-[#27aae1] dark:text-cyan-400 text-sm font-medium mb-1">Location</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.location}</dd>
                    </div>
                    <div>
                      <dt className="text-[#27aae1] dark:text-cyan-400 text-sm font-medium mb-1">Work Model</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.workModel}</dd>
                    </div>
                    <div>
                      <dt className="text-[#27aae1] dark:text-cyan-400 text-sm font-medium mb-1">Experience</dt>
                      <dd className="text-[#282973] dark:text-slate-200">{job.experience}</dd>
                    </div>
                  </dl>
                  <p className="text-[#5f6b8e] dark:text-slate-400">{job.summary}</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Core Responsibilities</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item: string, i: number) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#27aae1] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.requirements.map((item: string, i: number) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#27aae1] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <Card>
                  <ul className="space-y-3">
                    {job.benefits.map((item: string, i: number) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#27aae1] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#5f6b8e] dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="brand-surface-strong">
                  <h2 className="text-2xl font-bold mb-4">Submit Application</h2>
                  <p className="text-[#5f6b8e] dark:text-slate-400 text-sm mb-6">
                    Submit your application details below. Your CV will be attached to the review email.
                  </p>

                  {status === "success" ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-green-400 font-medium mb-2">Application submitted successfully!</p>
                      <p className="text-[#5f6b8e] dark:text-slate-400 text-sm">
                        Our team will review your profile and respond shortly.
                      </p>
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
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Current Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Portfolio or LinkedIn
                        </label>
                        <input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Application Note
                        </label>
                        <textarea
                          rows={3}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2 text-[#282973] transition-colors focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
                        />
                      </div>

                      <div>
                        <label className="block text-[#282973] dark:text-slate-300 text-sm font-medium mb-2">
                          Upload CV * (PDF, DOC, DOCX, max 5MB)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="cv-upload"
                          />
                          <label
                            htmlFor="cv-upload"
                            className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 py-3 text-[#5f6b8e] transition-colors hover:border-cyan-500 hover:text-[#27aae1] cursor-pointer dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-cyan-400"
                          >
                            <Upload className="w-5 h-5 mr-2" />
                            {formData.cv ? formData.cv.name : "Choose file"}
                          </label>
                        </div>
                      </div>

                      {errorMessage && (
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                      )}

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
                          <p className="text-xs text-[#5f6b8e] dark:text-slate-400">
                            Please complete the security check before submitting.
                          </p>
                        )}
                      </div>

                      <p className="text-[#5f6b8e] dark:text-slate-500 text-xs">
                        Your CV is sent as an attachment to the AURMAK careers inbox for review.
                      </p>

                      <Button
                        type="submit"
                        disabled={status === "loading" || !formData.cv || (!!import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken)}
                        className="w-full"
                      >
                        {status === "loading" ? "Submitting..." : "Submit Application"}
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
