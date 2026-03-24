import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Hero } from "../components/hero";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";
import { SEO, generateBreadcrumbSchema, generateJobPostingSchema } from "../components/seo";

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

  const jobData: Record<string, any> = {
    "senior-ai-product-engineer": {
      code: "AUR-ENG-001",
      title: "Senior AI Product Engineer",
      lead: "Lead implementation of production AI workflows in enterprise SaaS and industrial systems.",
      location: "Lahore, Pakistan (with Dubai collaboration)",
      workModel: "Hybrid, Full-time",
      experience: "5+ years",
      summary: "You will own AI-enabled product features from architecture to deployment and work directly with product and delivery leadership.",
      responsibilities: [
        "Design, build, and deploy AI-powered modules for enterprise products.",
        "Integrate LLM and data pipelines into secure, production-ready services.",
        "Collaborate with UX, backend, and DevOps teams on release delivery.",
        "Improve model performance, observability, and inference cost efficiency."
      ],
      requirements: [
        "Strong experience in Python or TypeScript backend engineering.",
        "Hands-on experience with modern AI APIs and vector data workflows.",
        "Solid understanding of cloud deployment and CI/CD practices.",
        "Ability to communicate technical trade-offs with clarity."
      ]
    },
    "enterprise-solutions-architect": {
      code: "AUR-SOL-002",
      title: "Enterprise Solutions Architect",
      lead: "Design scalable architectures for industrial digitisation and multi-system integrations.",
      location: "Dubai, UAE (regional travel as required)",
      workModel: "Hybrid, Full-time",
      experience: "7+ years",
      summary: "You will define technical solution blueprints for enterprise dashboards, ERP modernisation, and automation programmes.",
      responsibilities: [
        "Lead architecture design for client platforms across multiple sectors.",
        "Define integration standards, data contracts, and security baselines.",
        "Translate business goals into practical technical roadmaps.",
        "Support pre-sales technical workshops and implementation planning."
      ],
      requirements: [
        "Proven experience in enterprise solution architecture roles.",
        "Deep understanding of APIs, event-driven systems, and data platforms.",
        "Experience with cloud infrastructure and governance controls.",
        "Strong stakeholder communication and documentation discipline."
      ]
    },
    "full-stack-product-engineer": {
      code: "AUR-ENG-003",
      title: "Full Stack Product Engineer",
      lead: "Build and modernise web applications for enterprise operations and analytics use cases.",
      location: "Lahore, Pakistan",
      workModel: "On-site / Hybrid, Full-time",
      experience: "3+ years",
      summary: "You will ship frontend and backend features for internal products and client delivery projects with measurable business outcomes.",
      responsibilities: [
        "Develop robust web interfaces and APIs for B2B products.",
        "Implement secure authentication, role management, and reporting features.",
        "Write maintainable tests and support production troubleshooting.",
        "Collaborate with product teams to iterate quickly and safely."
      ],
      requirements: [
        "Strong JavaScript or TypeScript across frontend and backend.",
        "Experience with modern component-based frontend frameworks.",
        "Comfort with relational databases and REST API design.",
        "Clear communication and ownership mindset."
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

                      <p className="text-[#5f6b8e] dark:text-slate-500 text-xs">
                        Your CV is sent as an attachment to the AURMAK careers inbox for review.
                      </p>

                      <Button
                        type="submit"
                        disabled={status === "loading" || !formData.cv}
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
