import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";

const cases = [
  {
    client: "Metrikus",
    sector: { en: "Real Estate · UK", ar: "العقارات · المملكة المتحدة" },
    title: { en: "Smart Building Platform", ar: "منصة المباني الذكية" },
    kpi: "45%",
    kpiLabel: { en: "Faster Insights", ar: "رؤى أسرع" },
    sub: { en: "62% increase in user engagement", ar: "زيادة التفاعل بنسبة 62%" },
    color: "from-emerald-400 to-green-600",
    glow: "shadow-emerald-500/40",
    dot: "bg-emerald-400",
    emoji: "🏢",
    path: "/smart-building-platform",
  },
  {
    client: "Cutover",
    sector: { en: "Enterprise Software · UK", ar: "برمجيات مؤسسية · المملكة المتحدة" },
    title: { en: "Change Orchestration Platform", ar: "منصة تنسيق التغيير" },
    kpi: "100%",
    kpiLabel: { en: "Task Success", ar: "نجاح المهام" },
    sub: { en: "44 participants usability tested", ar: "اختبار قابلية الاستخدام مع 44 مشاركاً" },
    color: "from-blue-400 to-cyan-600",
    glow: "shadow-blue-500/40",
    dot: "bg-blue-400",
    emoji: "⚙️",
    path: "/orchestration-management-platform",
  },
  {
    client: "RBS",
    sector: { en: "Financial Services · UK", ar: "الخدمات المالية · المملكة المتحدة" },
    title: { en: "Premium Travel Portal", ar: "بوابة السفر المميزة" },
    kpi: "4",
    kpiLabel: { en: "Travel Categories", ar: "فئات السفر" },
    sub: { en: "Full mobile + web platforms", ar: "منصات كاملة للويب والجوال" },
    color: "from-blue-600 to-indigo-800",
    glow: "shadow-blue-600/40",
    dot: "bg-blue-500",
    emoji: "🏦",
    path: "/premium-travel-portal",
  },
  {
    client: "Cisco",
    sector: { en: "Cybersecurity · US", ar: "الأمن السيبراني · الولايات المتحدة" },
    title: { en: "Stealthwatch Educational Portal", ar: "بوابة Stealthwatch التعليمية" },
    kpi: "3×",
    kpiLabel: { en: "Content Reach", ar: "وصول المحتوى" },
    sub: { en: "75%+ usability success rate", ar: "نجاح قابلية الاستخدام بنسبة 75%+" },
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/40",
    dot: "bg-cyan-400",
    emoji: "🔐",
    path: "/stealthwatch-educational-portal",
  },
  {
    client: "Al Jazeera",
    sector: { en: "Media · Qatar", ar: "الإعلام · قطر" },
    title: { en: "IT Service Management Platform", ar: "منصة إدارة خدمات تقنية المعلومات" },
    kpi: "500+",
    kpiLabel: { en: "Services Supported", ar: "خدمات مدعومة" },
    sub: { en: "Global broadcast operations", ar: "عمليات بث عالمية" },
    color: "from-violet-500 to-purple-700",
    glow: "shadow-violet-500/40",
    dot: "bg-violet-400",
    emoji: "📡",
    path: "/it-service-management-platform",
  },
  {
    client: "Castrol",
    sector: { en: "Automotive · UAE", ar: "السيارات · الإمارات" },
    title: { en: "CarLounge Experience", ar: "تجربة CarLounge" },
    kpi: "5-Day",
    kpiLabel: { en: "Design Sprint", ar: "سبرنت التصميم" },
    sub: { en: "End-to-end mobile journey", ar: "رحلة جوال متكاملة" },
    color: "from-green-500 to-emerald-700",
    glow: "shadow-emerald-500/40",
    dot: "bg-emerald-400",
    emoji: "🚗",
    path: "/carlounge-experience",
  },
  {
    client: "GTT",
    sector: { en: "Cloud Infrastructure · US", ar: "البنية السحابية · الولايات المتحدة" },
    title: { en: "Enterprise SaaS/IaaS Platform", ar: "منصة SaaS/IaaS مؤسسية" },
    kpi: "80%",
    kpiLabel: { en: "Approval Rating", ar: "نسبة القبول" },
    sub: { en: "4 rounds of usability testing", ar: "4 جولات من اختبار قابلية الاستخدام" },
    color: "from-orange-500 to-red-600",
    glow: "shadow-orange-500/40",
    dot: "bg-orange-400",
    emoji: "☁️",
    path: "/enterprise-saas-iaas-platform",
  },
  {
    client: "Dubai Trade",
    sector: { en: "E-Government · UAE", ar: "الحكومة الإلكترونية · الإمارات" },
    title: { en: "Government Portal", ar: "البوابة الحكومية" },
    kpi: "700+",
    kpiLabel: { en: "Services Unified", ar: "خدمات موحدة" },
    sub: { en: "100% stakeholder sign-off", ar: "اعتماد كامل من أصحاب المصلحة" },
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/40",
    dot: "bg-blue-400",
    emoji: "🏛️",
    path: "/government-services-portal",
  },
];

const orbitals = [
  { text: { en: "100% Task Success", ar: "نجاح 100% في المهام" }, sub: { en: "Cutover · UK", ar: "Cutover · المملكة المتحدة" }, delay: 0 },
  { text: { en: "Smart City UX", ar: "تجربة مدن ذكية" }, sub: { en: "Dubai · UAE", ar: "دبي · الإمارات" }, delay: 0.8 },
  { text: { en: "45% Faster Insights", ar: "رؤى أسرع بنسبة 45%" }, sub: { en: "Metrikus · UK", ar: "Metrikus · المملكة المتحدة" }, delay: 1.6 },
  { text: { en: "Global Scale", ar: "نطاق عالمي" }, sub: { en: "Castrol · Global", ar: "Castrol · عالمي" }, delay: 2.4 },
];

export function HeroCaseShowcase() {
  const { direction, language } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev: number) => (prev + 1) % cases.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  const current = cases[active];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative flex items-center justify-center w-full mt-16 lg:mt-0"
    >
      {/* Ambient glow behind card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-10 blur-3xl rounded-full`}
        />
      </AnimatePresence>

      {/* ── Orbital stat pills ── */}
      {orbitals.map((o, i) => (
        <motion.div
          key={o.text.en}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, i % 2 === 0 ? -10 : 10, 0],
          }}
          transition={{
            opacity: { delay: 1.2 + o.delay, duration: 0.4 },
            scale: { delay: 1.2 + o.delay, duration: 0.4 },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: o.delay },
          }}
          className={`absolute z-20 hidden whitespace-nowrap rounded-xl border border-slate-700/60 bg-slate-800/80 px-3 py-2 text-xs font-medium text-slate-200 shadow-lg backdrop-blur md:block ${
            direction === "rtl"
              ? i === 0
                ? "-top-16 left-32"
                : i === 1
                  ? "top-40 -left-8"
                  : i === 2
                    ? "-bottom-16 left-28"
                    : "bottom-40 -right-8"
              : i === 0
                ? "-top-16 right-32"
                : i === 1
                  ? "top-40 -right-8"
                  : i === 2
                    ? "-bottom-16 right-28"
                    : "bottom-40 -left-8"
          }`}
        >
          <span className="font-semibold text-cyan-400">{o.text[language]}</span>
          <span className="block text-[10px] text-slate-500">{o.sub[language]}</span>
        </motion.div>
      ))}

      {/* ── Main showcase card ── */}
      <div className="relative w-full max-w-md">

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.96 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 md:p-8 shadow-2xl"
          style={{ direction }}
        >
            {/* Client header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{current.emoji}</span>
                  <span className="text-slate-100 font-bold text-lg">{current.client}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="w-3 h-3" />
                  {current.sector[language]}
                </div>
              </div>
              <motion.div
                className={`w-2 h-2 rounded-full ${current.dot}`}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Project title */}
            <p className="mb-5 text-sm leading-snug text-slate-400">{current.title[language]}</p>

            {/* The big number */}
            <div className="mb-4">
              <motion.div
                key={`kpi-${active}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                className={`text-7xl font-black bg-gradient-to-r ${current.color} bg-clip-text text-transparent leading-none mb-1`}
              >
                {current.kpi}
              </motion.div>
              <div className="text-base font-semibold text-slate-300">{current.kpiLabel[language]}</div>
              <div className="mt-0.5 text-sm text-slate-500">{current.sub[language]}</div>
            </div>

            {/* Progress dots / case stepper */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-700/50">
              <div className="flex gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show case study ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? `w-6 bg-gradient-to-r ${current.color}`
                        : "w-1.5 bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
              <Link
                to={current.path}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {language === "ar" ? "عرض دراسة الحالة" : "View case study"} <ArrowUpRight className="rtl-arrow w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom badge: cities ── */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -bottom-5 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 px-4 py-3 shadow-xl shadow-purple-500/30 z-30 sm:px-5 ${
            direction === "rtl" ? "right-4 lg:-right-12" : "left-4 lg:-left-12"
          }`}
        >
          <div className="mb-0.5 text-[10px] uppercase tracking-widest text-purple-100">{language === "ar" ? "مكاتبنا في" : "Offices in"}</div>
          <div className="text-sm font-bold leading-tight text-white">{language === "ar" ? "لندن · دبي · لاهور" : "London · Dubai · Lahore"}</div>
        </motion.div>

        {/* ── Top-right badge: clients ── */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className={`absolute top-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-3 shadow-xl shadow-cyan-500/30 z-30 sm:px-5 lg:top-12 ${
            direction === "rtl" ? "left-4 lg:-left-12" : "right-4 lg:-right-12"
          }`}
        >
          <div className="mb-0.5 text-[10px] uppercase tracking-widest text-cyan-100">{language === "ar" ? "يشمل العملاء" : "Clients include"}</div>
          <div className="text-sm font-bold leading-tight text-white">{language === "ar" ? "Cisco · Castrol · Al Jazeera" : "Cisco · Castrol · Al Jazeera"}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
