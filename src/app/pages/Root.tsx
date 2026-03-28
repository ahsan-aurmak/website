import { Outlet, useLocation } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { CursorFollower, ScrollProgress } from "../components/cursor-follower";
import { StagingBanner } from "../components/staging-banner";
import { CookieConsent } from "../components/cookie-consent";
import { useEffect } from "react";
import { ThemeProvider } from "../components/theme-provider";
import { LanguageProvider } from "../components/language-provider";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
          <ScrollProgress />
          <CursorFollower />

          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#27aae1]/8 blur-3xl animate-pulse dark:bg-cyan-500/10" />
            <div
              className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#1B2A6B]/8 blur-3xl animate-pulse dark:bg-blue-500/10"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-white/40 blur-3xl animate-pulse dark:bg-blue-500/10"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div
            className="pointer-events-none fixed inset-0 opacity-[0.03] transition-opacity duration-300 dark:opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <Navigation />
          <main className="relative z-10 overflow-x-hidden pt-20">
            <StagingBanner />
            <Outlet />
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
