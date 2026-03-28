import { Button } from "../components/button";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { SEO } from "../components/seo";
import { useLanguage } from "../components/language-provider";

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <SEO title={t("notFound.title")} description={t("notFound.description")} canonical={null} noIndex />
      <div className="max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 text-9xl font-bold text-[#27aae1]">404</div>
          <h1 className="mb-4 text-4xl font-bold text-[#282973] dark:text-slate-100 md:text-5xl">{t("notFound.title")}</h1>
          <p className="mb-8 text-lg text-[#5f6b8e] dark:text-slate-400">{t("notFound.body")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/">
              <Home className="h-4 w-4" />
              {t("notFound.goHome")}
            </Button>
            <Button onClick={() => navigate(-1)} variant="secondary">
              <ArrowLeft className="rtl-arrow h-4 w-4" />
              {t("notFound.goBack")}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
