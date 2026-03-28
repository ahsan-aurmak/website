import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import darkLogo from "@assets/3cb6cb72c135cbff9f33bf11110879c261fa8882.png";
import lightLogo from "@assets/branding/aurmak-logo-lightmode.svg";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { direction, language, switchLanguage, t, localizePath } = useLanguage();
  const logoSrc = theme === "light" ? lightLogo : darkLogo;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t("navigation.home"), path: "/" },
    { 
      label: t("navigation.whatWeDo"), 
      path: "/services",
      submenu: [
        { label: t("navigation.services"), path: "/services" },
        { label: t("navigation.solutions"), path: "/solutions" },
        { label: t("navigation.howWeWork"), path: "/how-we-work" },
      ]
    },
    { label: t("navigation.caseStudies"), path: "/case-studies" },
    { 
      label: t("navigation.company"), 
      path: "/about",
      submenu: [
        { label: t("navigation.about"), path: "/about" },
        { label: t("navigation.team"), path: "/team" },
        { label: t("navigation.lab"), path: "/lab" },
        { label: t("navigation.insights"), path: "/insights" },
        { label: t("navigation.careers"), path: "/careers" },
      ]
    },
    { label: t("navigation.contact"), path: "/contact" },
  ];

  // Helper function to check if a parent menu item should be highlighted
  const isParentActive = (link: typeof navLinks[0]) => {
    const currentPath = location.pathname;
    if (!link.submenu) return currentPath === localizePath(link.path);
    return link.submenu.some(sublink => currentPath === localizePath(sublink.path));
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-slate-200/80 bg-white/88 shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/72 dark:shadow-cyan-500/5"
          : "border-transparent bg-white/35 backdrop-blur-[6px] dark:bg-slate-950/12"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={localizePath("/")} className="group flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                key={logoSrc}
                src={logoSrc}
                alt="AURMAK" 
                className="h-10 w-auto shrink-0 md:h-12"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                    {link.submenu ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button 
                      className={`relative flex items-center gap-1 font-medium transition-colors duration-200 ${
                        isParentActive(link) ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                      {isParentActive(link) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#27aae1]"
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-2 w-48 rounded-lg border border-slate-200 bg-white/95 py-2 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/95 ${direction === "rtl" ? "right-0" : "left-0"}`}
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.path}
                              to={localizePath(sublink.path)}
                              className={`block px-4 py-2 transition-colors duration-200 ${
                                location.pathname === localizePath(sublink.path)
                                  ? "bg-[#eef7fc] text-[#27aae1] dark:bg-slate-700/50 dark:text-cyan-400"
                                  : "text-[#282973] hover:bg-[#eef7fc] hover:text-[#27aae1] dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-cyan-400"
                              }`}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={localizePath(link.path)}
                    className={`font-medium relative transition-colors duration-200 ${
                      location.pathname === localizePath(link.path) ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                    {location.pathname === localizePath(link.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#27aae1]"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[#282973] transition-colors hover:text-[#27aae1] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label={theme === "dark" ? t("navigation.switchToLight") : t("navigation.switchToDark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="flex items-center rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === "en"
                    ? "border border-[#27aae1]/30 bg-[#eef7fc] font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {t("navigation.english")}
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("ar")}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === "ar"
                    ? "border border-[#27aae1]/30 bg-[#eef7fc] font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {t("navigation.arabic")}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#282973] transition-colors hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
            aria-label={t("navigation.toggleMenu")}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-x-0 bottom-0 top-[72px] bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 lg:hidden"
                style={{ zIndex: 40 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-x-4 top-[88px] z-50 max-h-[calc(100vh-104px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/95"
                style={{ zIndex: 50 }}
              >
                <div className="space-y-2 p-4">
                  <div className="mb-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#282973] transition-colors hover:text-[#27aae1] dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-cyan-400"
                        aria-label={theme === "dark" ? t("navigation.switchToLight") : t("navigation.switchToDark")}
                      >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      </button>
                      <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800/80">
                      <button
                        type="button"
                        onClick={() => switchLanguage("en")}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                          language === "en"
                            ? "border border-[#27aae1]/30 bg-[#eef7fc] font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {t("navigation.english")}
                      </button>
                      <button
                        type="button"
                        onClick={() => switchLanguage("ar")}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                          language === "ar"
                            ? "border border-[#27aae1]/30 bg-[#eef7fc] font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {t("navigation.arabic")}
                      </button>
                      </div>
                    </div>
                  </div>
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.submenu ? (
                        <div>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                            className={`w-full flex items-center justify-between transition-colors py-2 font-medium ${
                              isParentActive(link) ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                            }`}
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className={`${direction === "rtl" ? "pr-4" : "pl-4"} space-y-1 overflow-hidden`}
                              >
                                {link.submenu.map((sublink) => (
                                  <Link
                                    key={sublink.path}
                                    to={localizePath(sublink.path)}
                                    className={`block transition-colors py-1.5 ${
                                      location.pathname === localizePath(sublink.path)
                                        ? "text-cyan-400"
                                        : "text-[#5f6b8e] hover:text-[#27aae1] dark:text-slate-400 dark:hover:text-cyan-400"
                                    }`}
                                  >
                                    {sublink.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={localizePath(link.path)}
                          className={`block py-2 font-medium transition-colors ${
                            location.pathname === localizePath(link.path) ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
