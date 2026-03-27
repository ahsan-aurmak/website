import type { Theme } from "../components/theme-provider";

export function getCalendlyPageSettings(theme: Theme) {
  if (theme === "dark") {
    return {
      backgroundColor: "0f172a",
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: "06b6d4",
      textColor: "f1f5f9",
    };
  }

  return {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "27aae1",
    textColor: "282973",
  };
}

export function getCalendlyEmbedUrl(theme: Theme) {
  void theme;
  return "https://calendly.com/ahsan-jalil-aurmak/30min";
}
