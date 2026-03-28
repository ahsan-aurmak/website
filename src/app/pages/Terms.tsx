import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";
import { useLanguage } from "../components/language-provider";

export default function Terms() {
  const { localizePath, t } = useLanguage();

  return (
    <div>
      <SEO
        title={t("legal.termsTitle")}
        description={t("legal.termsDescription")}
        canonical={`https://www.aurmak.com${localizePath("/terms")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("legal.termsTitle"), url: localizePath("/terms") },
        ])}
      />
      <Hero eyebrow={t("legal.legalEyebrow")} title={t("legal.termsTitle")} lead={t("legal.termsLead")} />

      <section className="relative py-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.termsSection1Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.termsSection1Body1")}</p>
                <p>{t("legal.termsSection1Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>{t(`legal.termsUse${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.termsSection1Body2")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.termsSection2Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.termsSection2Body1")}</p>
                <p>{t("legal.termsSection2Body2")}</p>
                <p>{t("legal.termsSection2Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`legal.termsIp${i}`)}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.termsSection3Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.termsSection3Lead")}</p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`legal.termsLiability${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.termsSection3Body")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.termsSection4Title")}</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400">
                <p>
                  {t("legal.termsSection4BodyBefore")}
                  <Link to={localizePath("/contact")} className="text-[#27aae1] hover:underline dark:text-cyan-400">
                    {t("navigation.contact")}
                  </Link>
                  {t("legal.termsSection4BodyAfter")}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
