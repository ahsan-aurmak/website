import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import darkLogo from "@assets/3cb6cb72c135cbff9f33bf11110879c261fa8882.png";
import { useTheme } from "./theme-provider";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showArabicMessage, setShowArabicMessage] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === "light" ? "/aurmak-logo-lightmode.svg" : darkLogo;

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

  const navLinks = [
    { label: "Home", path: "/" },
    { 
      label: "What We Do", 
      path: "/services",
      submenu: [
        { label: "Services", path: "/services" },
        { label: "Solutions", path: "/solutions" },
        { label: "How We Work", path: "/how-we-work" },
      ]
    },
    { label: "Work", path: "/case-studies" },
    { 
      label: "Company", 
      path: "/about",
      submenu: [
        { label: "About", path: "/about" },
        { label: "Team", path: "/team" },
        { label: "The Lab", path: "/lab" },
        { label: "Insights", path: "/insights" },
        { label: "Careers", path: "/careers" },
      ]
    },
    { label: "Contact", path: "/contact" },
  ];

  // Helper function to check if a parent menu item should be highlighted
  const isParentActive = (link: typeof navLinks[0]) => {
    if (!link.submenu) return location.pathname === link.path;
    return link.submenu.some(sublink => location.pathname === sublink.path);
  };

  const handleArabicClick = () => {
    setShowArabicMessage(true);
    setTimeout(() => setShowArabicMessage(false), 3000);
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
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src={logoSrc}
                alt="AURMAK" 
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button 
                      className={`flex items-center space-x-1 transition-colors duration-200 font-medium relative ${
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
                          className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white/95 py-2 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/95"
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.path}
                              to={sublink.path}
                              className={`block px-4 py-2 transition-colors duration-200 ${
                                location.pathname === sublink.path
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
                    to={link.path}
                    className={`font-medium relative transition-colors duration-200 ${
                      location.pathname === link.path ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
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
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="flex items-center rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <button className="rounded-full border border-[#27aae1]/30 bg-[#eef7fc] px-3 py-1.5 text-sm font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none">
                EN
              </button>
              <button
                onClick={handleArabicClick}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-[#282973] transition-colors hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
              >
                العربية
              </button>
            </div>
            {showArabicMessage && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-slate-500 dark:text-slate-400"
              >
                Arabic version coming soon.
              </motion.p>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#282973] transition-colors hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
            aria-label="Toggle menu"
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
                className="fixed inset-0 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 lg:hidden"
                style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute left-4 right-4 top-full mt-4 overflow-hidden rounded-lg border border-slate-200 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/95"
                style={{ zIndex: 50 }}
              >
                <div className="p-4 space-y-2">
                  <div className="mb-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#282973] transition-colors hover:text-[#27aae1] dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-cyan-400"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                      >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      </button>
                      <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800/80">
                      <button className="rounded-full border border-[#27aae1]/30 bg-[#eef7fc] px-3 py-1.5 text-sm font-semibold text-[#282973] shadow-sm dark:border-transparent dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-none">
                        EN
                      </button>
                      <button
                        onClick={handleArabicClick}
                        className="rounded-full px-3 py-1.5 text-sm font-medium text-[#282973] transition-colors hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
                      >
                        العربية
                      </button>
                      </div>
                    </div>
                    {showArabicMessage && (
                      <span className="ml-3 text-right text-xs text-slate-500 dark:text-slate-400">
                        Coming soon
                      </span>
                    )}
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
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {link.submenu.map((sublink) => (
                                  <Link
                                    key={sublink.path}
                                    to={sublink.path}
                                    className={`block transition-colors py-1.5 ${
                                      location.pathname === sublink.path
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
                          to={link.path}
                          className={`block py-2 font-medium transition-colors ${
                            location.pathname === link.path ? "text-[#27aae1] dark:text-cyan-400" : "text-[#282973] hover:text-[#27aae1] dark:text-slate-300 dark:hover:text-cyan-400"
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
