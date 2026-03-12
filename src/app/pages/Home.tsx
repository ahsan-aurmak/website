import { motion } from "motion/react";
import { ArrowRight, Brain, Code2, Sparkles, Cpu, Network, Rocket } from "lucide-react";
import { Feature3DCard } from "../components/tilt-card";
import { HeroGradientMesh } from "../components/gradient-mesh";
import { Button } from "../components/button";
import { SEO, organizationSchema } from "../components/seo";
import { HeroCaseShowcase } from "../components/hero-case-showcase";

export default function Home() {
  const services = [
    { 
      icon: Brain, 
      title: "AI Integration", 
      description: "Custom AI models and automation that actually work for your business.",
      gradient: "from-cyan-500 to-blue-600",
      badge: "Hot 🔥"
    },
    { 
      icon: Code2, 
      title: "SaaS Development", 
      description: "Build scalable cloud-native applications with modern tech stacks.",
      gradient: "from-blue-500 to-purple-600",
    },
    { 
      icon: Cpu, 
      title: "Smart BMS", 
      description: "Intelligent building management systems powered by IoT and AI.",
      gradient: "from-purple-500 to-pink-600",
    },
    { 
      icon: Network, 
      title: "System Modernisation", 
      description: "Transform legacy systems into modern, efficient architectures.",
      gradient: "from-pink-500 to-orange-600",
    },
  ];

  const clients = [
    "Cisco",
    "Al Jazeera",
    "Castrol",
    "RBS",
    "Metrikus",
    "Cutover",
    "GTT",
    "Dubai Trade",
  ];

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="AI Integration & Industrial Automation Solutions | AURMAK"
        description="AURMAK delivers enterprise AI integration, SaaS development, and industrial automation solutions. 25+ years experience serving global clients. Offices in London, Dubai, Lahore. Partnerships Built to Last."
        canonical="https://www.aurmak.com/"
        keywords="AI integration, industrial automation, SaaS development, building management systems, legacy modernization, enterprise technology, smart BMS, system modernization"
        schema={organizationSchema}
      />
      {/* Hero Section with Mesh */}
      <section className="relative min-h-screen flex items-center -mt-20 pt-20">
        <HeroGradientMesh />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Welcome to the Future of Business
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1]"
                >
                  Build Faster.{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
                    Operate Smarter.
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
                >
                  We help organisations modernise operations through{" "}
                  <span className="text-cyan-400 font-semibold">AI-enabled systems</span>,{" "}
                  automation, and disciplined execution.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button to="/contact" variant="secondary">
                    Book a Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Visual element */}
            <HeroCaseShowcase />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnering with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Selected experience across enterprise SaaS, infrastructure, media, operations, and digital platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex min-h-[92px] items-center justify-center rounded-[22px] border border-white/6 bg-white/[0.02] px-5 py-6 text-center backdrop-blur-sm"
                >
                  <span className="text-base font-medium tracking-[0.18em] text-slate-400 sm:text-lg">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - 3D Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4" />
              What We Do Best
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Feature3DCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Global Presence - Google Maps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Delivery Network
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Local leadership and delivery teams across London, Dubai, and Lahore, supporting programmes that span the UK, Middle East, Europe, North America, and South Asia.
            </p>
          </motion.div>

          {/* Office locations - Main Feature */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              { 
                city: "London", 
                country: "United Kingdom", 
                gradient: "from-cyan-500 to-blue-600",
                background: "linear-gradient(135deg, rgba(220,38,38,0.32) 0%, rgba(220,38,38,0.32) 16%, rgba(255,255,255,0.16) 16%, rgba(255,255,255,0.16) 24%, rgba(37,99,235,0.26) 24%, rgba(37,99,235,0.26) 100%), linear-gradient(45deg, rgba(37,99,235,0.20) 0%, rgba(37,99,235,0.20) 42%, rgba(255,255,255,0.12) 42%, rgba(255,255,255,0.12) 50%, rgba(220,38,38,0.24) 50%, rgba(220,38,38,0.24) 58%, rgba(37,99,235,0.20) 58%, rgba(37,99,235,0.20) 100%)",
                coverage: "Supporting the UK, Europe, and North America"
              },
              { 
                city: "Dubai", 
                country: "United Arab Emirates", 
                gradient: "from-blue-500 to-purple-600",
                background: "linear-gradient(90deg, rgba(220,38,38,0.32) 0%, rgba(220,38,38,0.32) 22%, transparent 22%, transparent 100%), linear-gradient(180deg, rgba(34,197,94,0.24) 0%, rgba(34,197,94,0.24) 33%, rgba(255,255,255,0.14) 33%, rgba(255,255,255,0.14) 66%, rgba(15,23,42,0.20) 66%, rgba(15,23,42,0.20) 100%)",
                coverage: "Supporting the Middle East and Africa"
              },
              { 
                city: "Lahore", 
                country: "Pakistan", 
                gradient: "from-purple-500 to-pink-600",
                background: "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.18) 18%, rgba(34,197,94,0.26) 18%, rgba(34,197,94,0.26) 100%), radial-gradient(circle at 72% 34%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.14) 10%, transparent 10%), radial-gradient(circle at 77% 38%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.10) 7%, transparent 7%)",
                coverage: "Supporting South Asia and APAC"
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Card */}
                <div className="relative border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden h-full bg-slate-900/85 backdrop-blur-xl">
                  <div className="absolute inset-0 opacity-95" style={{ backgroundImage: office.background }} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.34),transparent_38%)]" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-slate-950/60" />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-slate-100 mb-2">{office.city}</h3>
                      <p className="text-slate-400 text-lg">{office.country}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-700/60 bg-slate-950/30 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-2">
                        Regional Coverage
                      </div>
                      <p className="text-slate-300 leading-7">{office.coverage}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - More Dynamic */}
      <section className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
              >
                <Rocket className="w-4 h-4" />
                Ready to Transform?
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Let's Build the{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Future Together
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Book a free consultation and discover how we can help modernise your business with AI-driven systems.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button to="/contact" className="text-lg px-8 py-4">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button to="/case-studies" variant="secondary" className="text-lg px-8 py-4">
                    View Case Studies
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
