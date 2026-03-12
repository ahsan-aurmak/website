import { Outlet, useLocation } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { CursorFollower, ScrollProgress } from "../components/cursor-follower";
import { StagingBanner } from "../components/staging-banner";
import { CookieConsent } from "../components/cookie-consent";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Custom Cursor */}
      <CursorFollower />
      
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Navigation />
      <main className="relative z-10 pt-20 pb-20">
        <StagingBanner />
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
