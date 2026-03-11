import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

const cases = [
  {
    client: "Metrikus",
    sector: "Real Estate · UK",
    title: "Smart Building Platform",
    kpi: "45%",
    kpiLabel: "Faster Insights",
    sub: "62% increase in user engagement",
    color: "from-emerald-400 to-green-600",
    glow: "shadow-emerald-500/40",
    dot: "bg-emerald-400",
    emoji: "🏢",
    path: "/case-study-metrikus-smart-building",
  },
  {
    client: "Cutover",
    sector: "Enterprise Software · UK",
    title: "Change Orchestration Platform",
    kpi: "100%",
    kpiLabel: "Task Success",
    sub: "44 participants usability tested",
    color: "from-blue-400 to-cyan-600",
    glow: "shadow-blue-500/40",
    dot: "bg-blue-400",
    emoji: "⚙️",
    path: "/case-study-cutover-orchestration",
  },
  {
    client: "RBS",
    sector: "Financial Services · UK",
    title: "Premium Travel Portal",
    kpi: "4",
    kpiLabel: "Travel Categories",
    sub: "Full mobile + web platforms",
    color: "from-blue-600 to-indigo-800",
    glow: "shadow-blue-600/40",
    dot: "bg-blue-500",
    emoji: "🏦",
    path: "/case-study-rbs-travel-portal",
  },
  {
    client: "Cisco",
    sector: "Cybersecurity · US",
    title: "Stealthwatch Educational Portal",
    kpi: "3×",
    kpiLabel: "Content Reach",
    sub: "75%+ usability success rate",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/40",
    dot: "bg-cyan-400",
    emoji: "🔐",
    path: "/case-study-cisco-stealthwatch",
  },
  {
    client: "Al Jazeera",
    sector: "Media · Qatar",
    title: "IT Service Management Platform",
    kpi: "500+",
    kpiLabel: "Services Supported",
    sub: "Global broadcast operations",
    color: "from-violet-500 to-purple-700",
    glow: "shadow-violet-500/40",
    dot: "bg-violet-400",
    emoji: "📡",
    path: "/case-study-al-jazeera-itsm",
  },
  {
    client: "Castrol",
    sector: "Automotive · UAE",
    title: "CarLounge Experience",
    kpi: "5-Day",
    kpiLabel: "Design Sprint",
    sub: "End-to-end mobile journey",
    color: "from-green-500 to-emerald-700",
    glow: "shadow-emerald-500/40",
    dot: "bg-emerald-400",
    emoji: "🚗",
    path: "/case-study-castrol-carlounge",
  },
  {
    client: "GTT",
    sector: "Cloud Infrastructure · US",
    title: "Enterprise SaaS/IaaS Platform",
    kpi: "80%",
    kpiLabel: "Approval Rating",
    sub: "4 rounds of usability testing",
    color: "from-orange-500 to-red-600",
    glow: "shadow-orange-500/40",
    dot: "bg-orange-400",
    emoji: "☁️",
    path: "/case-study-gtt-saas-iaas",
  },
  {
    client: "Dubai Trade",
    sector: "E-Government · UAE",
    title: "Government Portal",
    kpi: "700+",
    kpiLabel: "Services Unified",
    sub: "100% stakeholder sign-off",
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/40",
    dot: "bg-blue-400",
    emoji: "🏛️",
    path: "/case-study-dubai-trade",
  },
];

const orbitals = [
  { text: "100% Task Success", sub: "Cutover · UK", delay: 0 },
  { text: "Smart City UX", sub: "Dubai · UAE", delay: 0.8 },
  { text: "45% Faster Insights", sub: "Metrikus · UK", delay: 1.6 },
  { text: "Global Scale", sub: "Castrol · Global", delay: 2.4 },
];

export function HeroCaseShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev: number) => (prev + 1) % cases.length);
    }, 3800);
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
          key={o.text}
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
          className={`absolute text-xs font-medium bg-slate-800/80 backdrop-blur border border-slate-700/60 text-slate-200 px-3 py-2 rounded-xl shadow-lg whitespace-nowrap z-20 hidden md:block ${
            i === 0 ? "-top-16 right-32" :
            i === 1 ? "top-40 -right-20" :
            i === 2 ? "-bottom-16 right-28" :
            "bottom-40 -left-20"
          }`}
        >
          <span className="text-cyan-400 font-semibold">{o.text}</span>
          <span className="block text-slate-500 text-[10px]">{o.sub}</span>
        </motion.div>
      ))}

      {/* ── Main showcase card ── */}
      <div className="relative w-full max-w-md">

        {/* Live indicator */}
        <div className="absolute -top-3 left-6 z-30 flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.dot} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`} />
          </span>
          <span className="text-slate-300 text-xs font-medium">Live results</span>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.96 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            {/* Client header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{current.emoji}</span>
                  <span className="text-slate-100 font-bold text-lg">{current.client}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  {current.sector}
                </div>
              </div>
              <motion.div
                className={`w-2 h-2 rounded-full ${current.dot}`}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Project title */}
            <p className="text-slate-400 text-sm mb-5 leading-snug">{current.title}</p>

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
              <div className="text-slate-300 font-semibold text-base">{current.kpiLabel}</div>
              <div className="text-slate-500 text-sm mt-0.5">{current.sub}</div>
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
                View case study <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom badge: cities ── */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -left-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl px-5 py-3 shadow-xl shadow-purple-500/30 z-30 lg:-left-12"
        >
          <div className="text-purple-100 text-[10px] uppercase tracking-widest mb-0.5">Offices in</div>
          <div className="text-white text-sm font-bold leading-tight whitespace-nowrap">London · Dubai · Lahore</div>
        </motion.div>

        {/* ── Top-right badge: clients ── */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-32 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl px-5 py-3 shadow-xl shadow-cyan-500/30 z-30 lg:top-12 lg:-right-12"
        >
          <div className="text-cyan-100 text-[10px] uppercase tracking-widest mb-0.5">Clients include</div>
          <div className="text-white text-sm font-bold leading-tight whitespace-nowrap">Cisco · Castrol · Al Jazeera</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
