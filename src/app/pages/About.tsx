import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Globe2, Building2, Code2, CheckCircle2 } from "lucide-react";
import { Button } from "../components/button";
import { GlassCard } from "../components/card";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";

export default function About() {
  const centres = [
    {
      icon: Globe2,
      city: "London"
    },
    {
      icon: Building2,
      city: "Dubai"
    },
    {
      icon: Code2,
      city: "Lahore"
    }
  ];

  const modelPoints = [
    "International governance standards anchored in London and Dubai",
    "Disciplined engineering delivery executed across globally distributed teams",
    "Integrated strategy and execution under shared leadership",
    "Operational maturity supported by established UK and UAE parent foundations"
  ];

  return (
    <div>
      <SEO
        title="About AURMAK | Global Technology Leadership"
        description="AURMAK combines UK and UAE leadership with Lahore engineering delivery to execute enterprise systems with governance, clarity, and accountability."
        canonical="https://www.aurmak.com/about"
        keywords="enterprise systems, global technology leadership, digital infrastructure, legacy modernisation, operational governance"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ])}
      />

      <Hero
        eyebrow="About AURMAK"
        title={
          <>
            Global Technology{" "}
            <span className="text-[#27aae1]">Leadership</span>
          </>
        }
        lead="Strategic leadership in London and Dubai works alongside globally distributed engineering teams to deliver complex enterprise technology programmes with clear accountability across international engagements."
        badge="🌍 Global Presence"
      >
        <Button to="/contact">Start a Conversation</Button>
      </Hero>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <GlassCard className="p-8 lg:p-10">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Built on International{" "}
                <span className="text-[#27aae1]">Foundations</span>
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
                <p>
                  AURMAK represents a new technology brand built on the foundations of an established international technology group with operations in the UK and UAE.
                </p>
                <p>
                  This heritage provides the operational maturity, governance standards, and cross-regional experience required to deliver complex enterprise technology programmes.
                </p>
                <p>
                  Our international footprint strengthens delivery oversight, infrastructure awareness, and the ability to support organisations operating across multiple markets.
                </p>
                <p>
                  Explore our{" "}
                  <Link to="/services" className="font-medium text-[#27aae1] hover:underline">
                    services
                  </Link>,{" "}
                  <Link to="/solutions" className="font-medium text-[#27aae1] hover:underline">
                    solutions
                  </Link>, and{" "}
                  <Link to="/lab" className="font-medium text-[#27aae1] hover:underline">
                    venture lab
                  </Link>{" "}
                  to see how this model translates into delivery capability.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Three Centres.{" "}
              <span className="text-[#27aae1]">One Vision.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {centres.map((centre, index) => (
              <motion.div
                key={centre.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <GlassCard className="h-full p-8 text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <centre.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{centre.city}</h3>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300"
          >
            London, Dubai, and Lahore form AURMAK’s integrated global delivery network, combining strategic leadership, engineering capability, and operational execution. Our teams operate as a unified system, with the flexibility to deploy engineering and delivery capability across regions based on project requirements, regulatory needs, and client preferences.
          </motion.p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 lg:p-10">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    Strategic Leadership.{" "}
                    <span className="text-[#27aae1]">Engineering Delivery.</span>
                  </h2>
                  <p className="mb-8 max-w-3xl text-lg text-[#5f6b8e] dark:text-slate-300">
                    AURMAK’s delivery model combines international leadership with scalable engineering execution.
                  </p>

                  <div className="space-y-4">
                    {modelPoints.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start gap-3 py-1"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#27aae1] dark:text-cyan-400" />
                        <p className="text-slate-700 dark:text-slate-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 dark:shadow-2xl dark:shadow-cyan-500/10">
                    <ImageWithFallback
                      src={`${import.meta.env.BASE_URL}global_hq_futuristic.jpg`}
                      alt="Visual showing AURMAK's London, Dubai, and Lahore delivery model"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Focused on Enterprise{" "}
                <span className="text-[#27aae1]">Systems</span>
              </h2>
            <p className="text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              AURMAK designs and delivers enterprise technology systems that power modern operations, from SaaS platforms and digital infrastructure to AI-enabled operational intelligence.
            </p>
            <p className="mt-6 text-base text-slate-500 dark:text-slate-500">
              View our{" "}
              <Link to="/case-studies" className="font-medium text-[#27aae1] hover:underline">
                case studies
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="font-medium text-[#27aae1] hover:underline">
                start a conversation
              </Link>{" "}
              with the team.
            </p>
          </motion.div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl rounded-3xl border border-slate-200 p-8 dark:border-slate-800 lg:p-10"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Venture{" "}
              <span className="text-[#27aae1]">Development</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#5f6b8e] dark:text-slate-300">
              <p>
                Alongside enterprise client partnerships, AURMAK operates a venture studio focused on developing internal SaaS platforms and technology products.
              </p>
              <p>
                This work keeps our teams closely connected to product architecture, infrastructure design, and long-term platform thinking — experience that directly strengthens the systems we deliver for clients.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/lab">Explore The Lab</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Planning Your Next{" "}
              <span className="text-[#27aae1]">Enterprise System?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-[#5f6b8e] dark:text-slate-300">
              Speak with our team to explore the right technology approach for your organisation.
            </p>
            <Button to="/contact">Start a Conversation</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
