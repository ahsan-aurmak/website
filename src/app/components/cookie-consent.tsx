import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Cookie, X, CheckCircle2 } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aurmak-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aurmak-cookie-consent", "accepted");
    setIsAccepted(true);
    setTimeout(() => setIsVisible(false), 1000);
  };

  const handleMinimal = () => {
    localStorage.setItem("aurmak-cookie-consent", "minimal");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="relative group overflow-hidden bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
            {/* Gradient glow edge */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50" />
            
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 text-cyan-400">
                <Cookie className="h-6 w-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 flex items-center gap-2">
                    Privacy Preference
                    {isAccepted && (
                      <motion.span 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        className="text-emerald-400"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </motion.span>
                    )}
                  </h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  We use essential cookies to keep our site secure and optional analytics cookies to help us improve. 
                  We <span className="text-slate-200 font-medium">never sell</span> your personal data. 
                  View our <Link to="/cookies" className="text-cyan-400 hover:underline">Cookie Policy</Link>.
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAccept}
                    disabled={isAccepted}
                    className="flex-1 relative group px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAccepted ? "Preferences Saved" : "Accept All"}
                  </button>
                  <button
                    onClick={handleMinimal}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all duration-300"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
            </div>

            {/* Ambient pattern */}
            <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
              <Cookie className="h-24 w-24 text-cyan-500 rotate-12" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
