import { Link } from "react-router";
import { motion } from "motion/react";
import darkLogo from "@assets/3cb6cb72c135cbff9f33bf11110879c261fa8882.png";
import lightLogo from "@assets/branding/aurmak-logo-lightmode.svg";
import { useTheme } from "./theme-provider";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.983 3.5C4.983 4.88 3.869 6 2.492 6A2.49 2.49 0 0 1 0 3.5C0 2.12 1.115 1 2.492 1a2.49 2.49 0 0 1 2.491 2.5ZM.395 8h4.194v13.5H.395V8ZM8.36 8h4.02v1.845h.057c.56-1.062 1.93-2.182 3.972-2.182 4.246 0 5.03 2.8 5.03 6.44V21.5h-4.19v-6.555c0-1.564-.028-3.575-2.18-3.575-2.184 0-2.518 1.705-2.518 3.462V21.5H8.36V8Z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.117 8.134L22.75 22h-6.555l-5.133-6.71L5.19 22H1.93l7.61-8.7L1.25 2h6.721l4.64 6.13L18.244 2Zm-1.141 18h1.804L6.998 3.895H5.062L17.103 20Z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.499 6.203a2.98 2.98 0 0 0-2.098-2.11C19.548 3.6 12 3.6 12 3.6s-7.548 0-9.401.493A2.98 2.98 0 0 0 .5 6.203C0 8.068 0 12 0 12s0 3.932.5 5.797a2.98 2.98 0 0 0 2.099 2.11C4.452 20.4 12 20.4 12 20.4s7.548 0 9.401-.493a2.98 2.98 0 0 0 2.098-2.11C24 15.932 24 12 24 12s0-3.932-.501-5.797ZM9.6 15.6V8.4l6 3.6-6 3.6Z" />
    </svg>
  );
}

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? lightLogo : darkLogo;
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "How We Work", path: "/how-we-work" },
    { label: "Solutions", path: "/solutions" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Insights", path: "/insights" },
    { label: "The Lab", path: "/lab" },
    { label: "Team", path: "/team" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Cookies Policy", path: "/cookies" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, url: "https://www.linkedin.com/company/aurmak", label: "LinkedIn" },
    { icon: XIcon, url: "https://x.com/aurmakdigital", label: "X" },
    { icon: YouTubeIcon, url: "https://www.youtube.com/@Aurmak", label: "YouTube" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[#27aae1]/[0.02] dark:bg-[#27aae1]/[0.03]" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <img 
                key={logoSrc}
                src={logoSrc}
                alt="AURMAK" 
                className="h-10 w-auto shrink-0"
              />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-[#282973] dark:text-slate-200">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#5f6b8e] transition-colors hover:text-[#27aae1] dark:text-slate-400 dark:hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 font-semibold text-[#282973] dark:text-slate-200">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#5f6b8e] transition-colors hover:text-[#27aae1] dark:text-slate-400 dark:hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 font-semibold text-[#282973] dark:text-slate-200">Connect</h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-slate-200 hover:text-[#27aae1] dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-cyan-400"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row md:space-y-0">
          <p className="text-sm text-slate-500">
            © {currentYear} AURMAK. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
