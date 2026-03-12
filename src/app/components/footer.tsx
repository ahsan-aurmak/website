import { Link } from "react-router";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/3cb6cb72c135cbff9f33bf11110879c261fa8882.png";

export function Footer() {
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
    { icon: Linkedin, url: "https://www.linkedin.com/company/aurmak", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/aurmak", label: "X" },
    { icon: Youtube, url: "https://www.youtube.com/@aurmak", label: "YouTube" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <img 
                src={logo} 
                alt="AURMAK" 
                className="h-10 w-auto"
              />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="min-w-[44px] min-h-[44px] w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">
            © {currentYear} AURMAK. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-500 hover:text-slate-400 transition-colors text-sm"
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
