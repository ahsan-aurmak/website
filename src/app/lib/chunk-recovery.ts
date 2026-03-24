const staleChunkReloadKey = "aurmak-stale-chunk-reload";

export function isChunkLoadErrorMessage(message: string) {
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed")
  );
}

export function getChunkLoadErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "";
}

export function recoverFromStaleChunk(error: unknown) {
  const message = getChunkLoadErrorMessage(error);

  if (!message || !isChunkLoadErrorMessage(message)) {
    return false;
  }

  const hasRetried = sessionStorage.getItem(staleChunkReloadKey) === "true";

  if (hasRetried) {
    sessionStorage.removeItem(staleChunkReloadKey);
    return false;
  }

  sessionStorage.setItem(staleChunkReloadKey, "true");

  const url = new URL(window.location.href);
  url.searchParams.set("_r", Date.now().toString());
  window.location.replace(url.toString());

  return true;
}

export function clearChunkRecoveryState() {
  sessionStorage.removeItem(staleChunkReloadKey);

  const url = new URL(window.location.href);
  if (url.searchParams.has("_r")) {
    url.searchParams.delete("_r");
    window.history.replaceState({}, document.title, url.toString());
  }
}
