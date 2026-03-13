import { motion } from "motion/react";
import { ArrowRight, Brain, Code2, Network, Rocket } from "lucide-react";
import { Feature3DCard } from "../components/tilt-card";
import { HeroGradientMesh } from "../components/gradient-mesh";
import { Button } from "../components/button";
import { SEO, organizationSchema } from "../components/seo";
import { HeroCaseShowcase } from "../components/hero-case-showcase";

export default function Home() {
  const services = [
    { 
      icon: Code2, 
      title: "Enterprise SaaS Platforms", 
      description: "Design and development of scalable SaaS products built to support complex enterprise operations at scale.",
      gradient: "from-cyan-500 to-blue-600",
      to: "/services",
    },
    { 
      icon: Network, 
      title: "Digital Infrastructure & Automation", 
      description: "Modernising legacy systems and building reliable digital infrastructure for more connected, efficient operations.",
      gradient: "from-blue-500 to-purple-600",
      to: "/services",
    },
    { 
      icon: Brain, 
      title: "AI-Enabled Operational Intelligence", 
      description: "Applying AI and data models to improve operational visibility, decision-making, and performance.",
      gradient: "from-purple-500 to-pink-600",
      to: "/services",
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

  const capabilities = [
    {
      title: "AI-Accelerated Engineering",
      description:
        "Human engineering judgement supported by AI-assisted tooling to accelerate delivery while maintaining enterprise-grade quality.",
    },
    {
      title: "Enterprise Delivery Discipline",
      description:
        "Structured delivery with governance controls, defined checkpoints, and measurable operational outcomes.",
    },
    {
      title: "Venture-Led Innovation",
      description:
        "Client insight informs internal product incubation, enabling proven solutions and delivery patterns to be applied faster across industries.",
    },
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
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1]"
                >
                  Built to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
                    Think and Deliver.
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
                >
                  We design and deliver enterprise systems that power modern operations, from SaaS platforms and digital infrastructure to AI-enabled automation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button to="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Visual element */}
            <HeroCaseShowcase />
          </div>
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
              What AURMAK Builds
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Systems That Power{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Modern Operations
              </span>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              AURMAK partners with organisations to design, build, and modernise the digital systems that power operations, decision-making, and growth.
            </p>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto mt-4">
              Our work combines strategic consulting with hands-on engineering. We help organisations move from concept to reliable enterprise execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

          <div className="mt-16">
            <div className="mx-auto">
              <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/45 backdrop-blur-sm overflow-hidden px-6 py-8 md:px-8 md:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    Engineering Capability.{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Strategic Thinking.
                    </span>
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 border-t border-slate-800 md:grid-cols-3">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative border-b border-slate-800 py-8 md:border-b-0 md:px-6 md:last:border-r-0"
                  >
                    <h4 className="text-2xl font-semibold text-slate-100 leading-tight mb-4">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-lg leading-8">
                      {item.description}
                    </p>
                    {index < capabilities.length - 1 && (
                      <div className="absolute right-0 top-10 bottom-10 hidden w-px bg-slate-800 md:block" />
                    )}
                  </motion.div>
                ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <Button to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Global{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Delivery. Proven Execution.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-8 max-w-none">
                A delivery model built around regional presence, disciplined execution, and measurable enterprise outcomes.
              </p>
            </motion.div>

            <div>
              <div className="border-t border-slate-800">
                {[
                  {
                    title: "Regional Operating Centres",
                    value: "3",
                    description: "London, Dubai, and Lahore supporting integrated global delivery.",
                    accent: "from-cyan-400 to-blue-500",
                  },
                  {
                    title: "Core Delivery Capabilities",
                    value: "4",
                    description: "SaaS platforms, system modernisation, AI integration, and smart infrastructure.",
                    accent: "from-blue-400 to-violet-500",
                  },
                  {
                    title: "Measured Outcomes",
                    value: "95%",
                    description: "Reporting consistency after enterprise data model alignment.",
                    accent: "from-emerald-400 to-cyan-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="grid gap-4 border-b border-slate-800 py-7 sm:grid-cols-[220px_140px_minmax(0,1fr)] sm:items-start sm:gap-8"
                  >
                    <div className="pt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
                      {item.title}
                    </div>
                    <div className={`text-5xl md:text-6xl font-bold leading-none bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>
                      {item.value}
                    </div>
                    <p className="text-lg text-slate-300 leading-8">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <p className="text-slate-400 text-lg max-w-none mx-auto">
              Selected experience across enterprise SaaS, infrastructure, media, operations, and digital platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto"
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

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-10 flex justify-center"
          >
            <Button to="/case-studies">
              Explore Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-slate-800/70 px-8 py-8 md:px-10 md:py-10"
            >
              <div className="mb-5 h-px w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Beyond Delivery.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Building What Comes Next.
                </span>
              </h2>
              <p className="text-slate-300 text-xl leading-9 max-w-4xl">
                Alongside enterprise client partnerships, AURMAK operates a venture studio, incubating internal SaaS platforms and technology ventures.
              </p>
              <p className="text-slate-400 text-lg leading-8 max-w-4xl mt-5">
                This model keeps our teams closely connected to both enterprise delivery and product innovation.
              </p>
              <div className="mt-8">
                <Button to="/lab">
                  Explore the Lab
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - More Dynamic */}
      <section className="py-32 relative overflow-visible">
        <div className="absolute -inset-y-16 inset-x-0 overflow-visible pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Planning Your Next{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Enterprise System?
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let’s discuss the right approach for your organisation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
