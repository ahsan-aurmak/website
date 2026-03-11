export const SITE_NAME = "AURMAK";
export const SITE_URL = "https://www.aurmak.com";
export const LIVE_HOSTNAMES = new Set(["aurmak.com", "www.aurmak.com"]);

function normalizePath(path = "/") {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function buildCanonicalUrl(path = "/") {
  return `${SITE_URL}${normalizePath(path) || "/"}`;
}

export function getRuntimeHostname() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.hostname.toLowerCase();
}

export function isLiveHostname(hostname = getRuntimeHostname()) {
  return LIVE_HOSTNAMES.has(hostname.toLowerCase());
}

export function isIndexingEnabled(hostname = getRuntimeHostname()) {
  return import.meta.env.VITE_ALLOW_INDEXING === "true" && isLiveHostname(hostname);
}
