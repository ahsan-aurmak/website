import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { MapPin, CheckCircle, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
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
      <section className="py-16 relative">
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
            className="rounded-2xl overflow-hidden border border-slate-700/50 bg-white"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discuss Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Requirement
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Provide your requirements and we will connect you with the appropriate regional lead and delivery team.
              </p>

              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBzZXJ2ZXJzJTIwZGF0YWNlbnRlcnxlbnwxfHx8fDE3NzI4OTk3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Network infrastructure datacenter"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="border border-slate-700/50 rounded-2xl p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-400 mb-2">Enquiry Submitted Successfully</h3>
                    <p className="text-slate-400">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Project Brief *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        placeholder="Summarise your objective, constraints, and expected timeline."
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full"
                    >
                      {status === "loading" ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}