import { motion } from "motion/react";
import { ArrowRight, Brain, Code2, Sparkles, Cpu, Network, Rocket } from "lucide-react";
import { Feature3DCard } from "../components/tilt-card";
import { HeroGradientMesh } from "../components/gradient-mesh";
import { OfficeClock } from "../components/office-clock";
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
    { name: "Cisco", style: "font-bold" },
    { name: "Al Jazeera", style: "font-semibold" },
    { name: "Castrol", style: "font-bold" },
    { name: "RBS", style: "font-bold tracking-wider" },
    { name: "Metrikus", style: "font-semibold" },
    { name: "Cutover", style: "font-semibold" },
    { name: "GTT", style: "font-bold tracking-widest" },
    { name: "Dubai Trade", style: "font-semibold" },
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
            <p className="text-slate-400 text-lg">
              Delivering transformative solutions across diverse sectors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            {/* Scrolling clients */}
            <div className="flex gap-8">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="flex gap-8 flex-shrink-0"
              >
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center px-14 py-10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl min-w-[200px] sm:min-w-[280px] h-[160px] hover:border-cyan-500/30 transition-colors group"
                  >
                    <span className={`text-slate-200 text-xl sm:text-2xl whitespace-nowrap ${client.style} group-hover:text-cyan-400 transition-colors`}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </motion.div>
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
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Operating centres in London, Dubai, and Lahore providing 24/7 coverage and local expertise.
            </p>
          </motion.div>

          {/* Office locations - Main Feature */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                city: "London", 
                country: "United Kingdom", 
                flag: "🇬🇧", 
                gradient: "from-cyan-500 to-blue-600",
                timezone: "GMT+0",
                timezoneOffset: 0,
                coverage: "Europe, Americas"
              },
              { 
                city: "Dubai", 
                country: "United Arab Emirates", 
                flag: "🇦🇪", 
                gradient: "from-blue-500 to-purple-600",
                timezone: "GMT+4",
                timezoneOffset: 4,
                coverage: "Middle East, Africa"
              },
              { 
                city: "Lahore", 
                country: "Pakistan", 
                flag: "🇵🇰", 
                gradient: "from-purple-500 to-pink-600",
                timezone: "GMT+5",
                timezoneOffset: 5,
                coverage: "Asia, Pacific"
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
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex gap-6 items-start">
                    {/* Left side - Text content */}
                    <div className="flex-1">
                      {/* Flag Icon */}
                      <div className="text-7xl mb-6">{office.flag}</div>
                      
                      {/* City Name */}
                      <h3 className="text-3xl font-bold text-slate-100 mb-2">{office.city}</h3>
                      
                      {/* Country */}
                      <p className="text-slate-400 mb-6 text-lg">{office.country}</p>
                    </div>

                    {/* Right side - Analogue Clock */}
                    <div className="flex-shrink-0">
                      <OfficeClock offsetHours={office.timezoneOffset} gradient={office.gradient} />
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