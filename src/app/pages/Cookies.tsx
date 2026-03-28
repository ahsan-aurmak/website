import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { useLanguage } from "../components/language-provider";

export default function Cookies() {
  const { localizePath, t } = useLanguage();

  return (
    <div>
      <SEO
        title={t("legal.cookiesTitle")}
        description={t("legal.cookiesDescription")}
        canonical={`https://www.aurmak.com${localizePath("/cookies")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("legal.cookiesTitle"), url: localizePath("/cookies") },
        ])}
      />
      <Hero eyebrow={t("legal.legalEyebrow")} title={t("legal.cookiesTitle")} lead={t("legal.cookiesLead")} />

      <section className="relative py-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.cookiesSection1Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.cookiesSection1Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`legal.cookiesEssential${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.cookiesSection1Body")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.cookiesSection2Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.cookiesSection2Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`legal.cookiesAnalytics${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.cookiesSection2Body")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.cookiesSection3Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.cookiesSection3Body1")}</p>
                <p>{t("legal.cookiesSection3Body2")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.cookiesSection4Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.cookiesSection4Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>{t(`legal.cookiesManage${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.cookiesSection4Body1")}</p>
                <p>
                  {t("legal.cookiesSection4Body2Before")}
                  <a
                    href="https://www.aboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#27aae1] hover:underline dark:text-cyan-400"
                  >
                    aboutcookies.org
                  </a>
                  {t("legal.cookiesSection4Body2After")}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
