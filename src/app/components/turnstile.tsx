import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        selector: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      remove?: (widgetId: string) => void;
      reset?: (widgetId: string) => void;
    };
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
}

const scriptId = "cloudflare-turnstile-script";

export function Turnstile({ onVerify, onExpire, theme = "auto" }: TurnstileProps) {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
  const containerId = useId().replace(/:/g, "");
  const widgetIdRef = useRef<string | null>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (!siteKey) {
      return;
    }

    const renderWidget = () => {
      if (!window.turnstile || renderedRef.current) {
        return;
      }

      const widgetId = window.turnstile.render(`#${containerId}`, {
        sitekey: siteKey,
        theme,
        callback: onVerify,
        "expired-callback": () => {
          onExpire?.();
        },
        "error-callback": () => {
          onExpire?.();
        },
      });

      widgetIdRef.current = widgetId;
      renderedRef.current = true;
    };

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener("load", renderWidget, { once: true });
      }

      return () => {
        existingScript.removeEventListener("load", renderWidget);
        if (widgetIdRef.current && window.turnstile?.remove) {
          window.turnstile.remove(widgetIdRef.current);
        }
      };
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget, { once: true });
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", renderWidget);
      if (widgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [containerId, onExpire, onVerify, siteKey, theme]);

  if (!siteKey) {
    return null;
  }

  return <div id={containerId} className="min-h-16" />;
}
