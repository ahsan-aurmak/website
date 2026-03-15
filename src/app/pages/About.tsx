import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Globe2, Award, Code2, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function About() {
  const offices = [
    {
      icon: Globe2,
      city: "London",
      description: "Strategic headquarters for governance, commercial direction, and portfolio-level decision-making."
    },
    {
      icon: Award,
      city: "Dubai",
      description: "Regional execution and client coordination centre for GCC programmes and enterprise implementation."
    },
    {
      icon: Code2,
      city: "Lahore",
      description: "Engineering and integration hub delivering software builds, modernisation programmes, and quality assurance."
    }
  ];

  const modelPoints = [
    "International governance standards anchored in London and Dubai.",
    "Disciplined engineering delivery led from Lahore.",
    "Integrated strategy and execution model under shared leadership oversight.",
    "Operational maturity supported by established UK and UAE parent foundations."
  ];

  return (
    <div>
      <SEO
        title="About AURMAK | Global Enterprise Systems Partner"
        description="Learn how AURMAK combines strategic leadership, regional delivery, and disciplined engineering to build and modernise enterprise systems."
        canonical="https://www.aurmak.com/about"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ])}
      />
      <Hero
        eyebrow="About AURMAK"
        title="Global Vision."
        lead="AURMAK is a technology company backed by an established international technology group. We combine strategic leadership in London and Dubai with disciplined engineering execution from Lahore to deliver transformation with clear ownership."
        badge="🌍 Global Presence"
      />

      {/* Regional Offices */}
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
              <span className="text-[#27aae1]">
                One Vision.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="h-full text-center">
                  <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2CB5E3] to-[#1B2A6B]">
                    <office.icon className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">{office.city}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{office.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global HQ /{" "}
                <span className="text-[#27aae1]">
                  Local Delivery
                </span>
              </h2>
              <div className="space-y-4">
                {modelPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Heart className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#27aae1]" strokeWidth={1.75} />
                    <p className="text-slate-700 dark:text-slate-300">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 dark:shadow-2xl dark:shadow-cyan-500/10">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}global_hq_futuristic.png`}
                  alt="AURMAK Global Command Center connecting London, Dubai, and Lahore"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
