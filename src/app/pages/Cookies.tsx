import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";

export default function Cookies() {
  return (
    <div>
      <Hero
        eyebrow="Legal"
        title="Cookies Policy"
        lead="This website may use essential cookies for site functionality and analytics cookies for usage insights."
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
              <div className="text-slate-400 space-y-4">
                <p>
                  Essential cookies are necessary for the website to function properly. These cookies enable core functionality such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Navigation and access to secure areas</li>
                  <li>Session management and authentication</li>
                  <li>Language preferences and regional settings</li>
                  <li>Form submission and validation</li>
                </ul>
                <p>
                  Essential cookies do not require user consent as they are strictly necessary for the operation of the website.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Analytics Cookies</h2>
              <div className="text-slate-400 space-y-4">
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
                  We use aggregated analytics data to make informed decisions about website improvements and content strategy.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <div className="text-slate-400 space-y-4">
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
                    className="text-cyan-400 hover:underline"
                  >
                    aboutcookies.org
                  </a>
                  .
                </p>
                <p className="mt-6 text-slate-500 text-sm">
                  Arabic version available through language switch (AR) in the footer.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
