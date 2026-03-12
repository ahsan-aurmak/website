import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function Privacy() {
  return (
    <div>
      <SEO
        title="Privacy Policy"
        description="Read AURMAK's privacy policy covering enquiries, recruitment submissions, data handling, retention, and contact details."
        canonical="https://www.aurmak.com/privacy"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" }
        ])}
      />
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="This policy describes how AURMAK collects, processes, and protects personal data submitted via this website."
      />

      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="text-slate-400 space-y-4">
                <p>
                  We collect personal information that you voluntarily provide when using our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company or organisation details</li>
                  <li>Professional information and CVs for job applications</li>
                  <li>Project requirements and business enquiries</li>
                  <li>Portfolio links and professional profiles</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
              <div className="text-slate-400 space-y-4">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responding to enquiries and consultation requests</li>
                  <li>Processing job applications and recruitment activities</li>
                  <li>Providing information about our services and solutions</li>
                  <li>Improving our website and user experience</li>
                  <li>Complying with legal obligations and contractual requirements</li>
                </ul>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Storage and Security</h2>
              <div className="text-slate-400 space-y-4">
                <p>
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure data transmission protocols (SSL/TLS encryption)</li>
                  <li>Restricted access to personal information on a need-to-know basis</li>
                  <li>Regular security assessments and updates</li>
                  <li>Data retention policies aligned with legal requirements</li>
                </ul>
                <p>
                  Personal data is retained only for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable law.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="text-slate-400">
                <p>
                  For privacy requests, questions, or to exercise your data protection rights, contact:{" "}
                  <a href="mailto:info@aurmak.com" className="text-cyan-400 hover:underline">
                    info@aurmak.com
                  </a>
                </p>
                <p className="mt-4 text-slate-500 text-sm">
                  Arabic version available through language switch (العربية) in the footer.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
