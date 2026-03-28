import { Hero } from "../components/hero";
import { Card } from "../components/card";
import { motion } from "motion/react";
import { SEO, generateBreadcrumbSchema } from "../components/seo";
import { Link } from "react-router";
import { useLanguage } from "../components/language-provider";

export default function Privacy() {
  const { direction, localizePath, t } = useLanguage();

  return (
    <div>
      <SEO
        title={t("legal.privacyTitle")}
        description={t("legal.privacyDescription")}
        canonical={`https://www.aurmak.com${localizePath("/privacy")}`}
        schema={generateBreadcrumbSchema([
          { name: t("navigation.home"), url: localizePath("/") },
          { name: t("legal.privacyTitle"), url: localizePath("/privacy") },
        ])}
      />
      <Hero eyebrow={t("legal.legalEyebrow")} title={t("legal.privacyTitle")} lead={t("legal.privacyLead")} />

      <section className="relative py-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.privacySection1Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.privacySection1Lead")}</p>
                <ul className={`${direction === "rtl" ? "mr-4 text-right" : "ml-4"} list-inside list-disc space-y-2`}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i}>{t(`legal.privacyItem${i}`)}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.privacySection2Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.privacySection2Lead")}</p>
                <ul className={`${direction === "rtl" ? "mr-4 text-right" : "ml-4"} list-inside list-disc space-y-2`}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i}>{t(`legal.privacyUse${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.privacySection2Body")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.privacySection3Title")}</h2>
              <div className="space-y-4 text-[#5f6b8e] dark:text-slate-400">
                <p>{t("legal.privacySection3Lead")}</p>
                <ul className={`${direction === "rtl" ? "mr-4 text-right" : "ml-4"} list-inside list-disc space-y-2`}>
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`legal.privacySecurity${i}`)}</li>
                  ))}
                </ul>
                <p>{t("legal.privacySection3Body")}</p>
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold">{t("legal.privacySection4Title")}</h2>
              <div className="text-[#5f6b8e] dark:text-slate-400">
                <p>
                  {t("legal.privacySection4BodyBefore")}
                  <Link to={localizePath("/contact")} className="text-[#27aae1] hover:underline dark:text-cyan-400">
                    {t("navigation.contact")}
                  </Link>
                  {t("legal.privacySection4BodyAfter")}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
