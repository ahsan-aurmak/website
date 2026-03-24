import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";

export default function Terms() {
  return (
    <div>
      <SEO
        title="Terms and Conditions"
        description="Review AURMAK's website terms and conditions, including permitted use, intellectual property, and liability provisions."
        canonical="https://www.aurmak.com/terms"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms", url: "/terms" }
        ])}
      />
      <Hero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="By using this website, you agree to these terms governing access to AURMAK’s content, communications, and online services."
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
              <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  By accessing and using this website, you agree to these terms. The materials on this website are provided for general information about AURMAK, its services, its case studies, its careers opportunities, and related business enquiries.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use this website in any way that causes damage to the website or impairs user access</li>
                  <li>Use this website in any unlawful manner or for any unlawful purpose</li>
                  <li>Attempt to gain unauthorised access to any portion or feature of the website</li>
                  <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, or create derivative works from any materials</li>
                  <li>Use automated systems or software to extract data from this website (screen scraping)</li>
                </ul>
                <p>
                  We reserve the right to restrict or suspend access to the website where necessary to protect the website, our users, or our legal rights.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  All content, materials, information, and intellectual property on this website, including text, graphics, logos, images, case study materials, software, and design, are owned by or licensed to AURMAK and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Unless otherwise stated, AURMAK and/or its licensors own the intellectual property rights for all material on this website. You may view, download, and print pages from the website for your own personal use, subject to restrictions set in these terms and conditions.
                </p>
                <p>
                  You must not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Republish material from this website without proper attribution</li>
                  <li>Sell, rent, or sub-license material from the website</li>
                  <li>Reproduce, duplicate, or copy material for commercial purposes</li>
                  <li>Redistribute content from AURMAK without explicit permission</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Liability</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, AURMAK:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  <li>Does not warrant that the website will be constantly available or available at all</li>
                  <li>Reserves the right to discontinue or alter any or all of the website services without notice</li>
                </ul>
                <p>
                  Nothing in these terms and conditions will limit or exclude our liability for death or personal injury resulting from negligence, fraud, or any liability that cannot be excluded or limited by applicable law.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400">
                <p>
                  For legal enquiries or questions about these terms, please use our{" "}
                  <Link to="/contact" className="text-[#27aae1] hover:underline dark:text-cyan-400">
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
