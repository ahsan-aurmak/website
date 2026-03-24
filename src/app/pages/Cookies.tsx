import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";

export default function Cookies() {
  return (
    <div>
      <SEO
        title="Cookies Policy"
        description="Review AURMAK's cookies policy, including essential cookies, analytics usage, and visitor cookie controls."
        canonical="https://www.aurmak.com/cookies"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Cookies Policy", url: "/cookies" }
        ])}
      />
      <Hero
        eyebrow="Legal"
        title="Cookies Policy"
        lead="This policy explains how AURMAK uses essential cookies, analytics cookies, and local storage preferences on this website."
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
              <h2 className="text-2xl font-bold mb-4">Essential Cookies</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  Essential cookies are necessary for the website to function properly. These cookies enable core functionality such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Navigation and core site functionality</li>
                  <li>Form submission and validation</li>
                  <li>Cookie consent preferences</li>
                  <li>Display and interface preferences where applicable</li>
                </ul>
                <p>
                  Essential cookies do not require user consent as they are strictly necessary for the operation of the website.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Analytics Cookies</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This information helps us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analyse website traffic and user behaviour patterns</li>
                  <li>Identify popular content and pages</li>
                  <li>Improve website performance and user experience</li>
                  <li>Understand visitor demographics and interests</li>
                </ul>
                <p>
                  We use aggregated analytics data to make informed decisions about website improvements, content performance, and user experience.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Consent Choices</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  When you first visit the website, AURMAK may present a cookie consent notice allowing you to accept optional cookies or continue with essential-only settings.
                </p>
                <p>
                  Your cookie preference may be stored in your browser using local storage so that the notice does not reappear on every visit.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400 space-y-4">
                <p>
                  You can control and manage cookies in your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from particular sites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p>
                  Please note that blocking or deleting cookies may impact your experience on our website and limit access to certain features.
                </p>
                <p>
                  For more information about cookies and how to manage them, visit{" "}
                  <a
                    href="https://www.aboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#27aae1] hover:underline dark:text-cyan-400"
                  >
                    aboutcookies.org
                  </a>
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
