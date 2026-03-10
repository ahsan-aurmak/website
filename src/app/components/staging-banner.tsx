import { AlertTriangle } from "lucide-react";

/**
 * Staging Mode Banner
 * 
 * Displays a warning banner when the site is in staging/development mode
 * with SEO indexing disabled. Remove this component or set SHOW_BANNER to false
 * when launching to production.
 */

// Set to false when ready for production launch
const SHOW_STAGING_BANNER = false;

export function StagingBanner() {
  if (!SHOW_STAGING_BANNER) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-sm">
      <div className="bg-yellow-500/10 border-2 border-yellow-500/50 backdrop-blur-xl rounded-lg p-4 shadow-2xl shadow-yellow-500/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-yellow-400 text-sm mb-1">
              🚧 Staging Mode Active
            </h3>
            <p className="text-yellow-200/80 text-xs leading-relaxed">
              Search engine indexing is <strong>disabled</strong>. Site will not appear in Google.
              <br />
              <span className="text-yellow-300/60 mt-1 block">
                See <code className="bg-yellow-500/20 px-1 rounded">/PRODUCTION_LAUNCH_CHECKLIST.md</code> before launch.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}