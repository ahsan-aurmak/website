import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { MapPin, CheckCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/button";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    brief: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Mock submission
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div>
      <SEO
        title="Contact Us - Start Your Project"
        description="Contact AURMAK to discuss your AI integration, SaaS development, or industrial automation project. Offices in London, Dubai, and Lahore. Start the conversation today."
        canonical="https://www.aurmak.com/contact"
        keywords="contact AURMAK, enterprise technology consultation, AI integration inquiry, project discussion, London Dubai Lahore offices"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ])}
      />
      <Hero
        eyebrow="Contact"
        title="Start the Conversation."
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                <div className="text-center h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{office.country}</h3>
                  <p className="text-slate-400 text-sm">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Booking */}
      <section id="book-call" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Prefer to talk first?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Discovery Call
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              30 minutes with a senior team member. No sales pitch — just a structured conversation about your priorities and how we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-slate-700/50 px-2 md:px-0"
          >
            <InlineWidget
              url="https://calendly.com/ahsan-jalil-aurmak/30min"
              styles={{ height: "700px", minWidth: "320px" }}
              pageSettings={{
                backgroundColor: '0f172a',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '06b6d4',
                textColor: 'f1f5f9'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-6 py-4">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-500 text-sm font-medium">or send us a message</span>
          <div className="flex-1 h-px bg-slate-800" />
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Requirement
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Provide your requirements and we will connect you with the appropriate regional lead and delivery team.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="border border-slate-700/50 rounded-2xl p-8 lg:p-12">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-2">Enquiry Submitted Successfully</h3>
                  <p className="text-slate-400">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-slate-300 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="John Doe"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
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
                      <label htmlFor="company" className="block text-slate-300 text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="Your Company"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Service Requirement *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 pr-10 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message full-width */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Tell us about your business, what you're looking to achieve, and any timelines or constraints."
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

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