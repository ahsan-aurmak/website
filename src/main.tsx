import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

const staleChunkReloadKey = "aurmak-stale-chunk-reload";

function isChunkLoadErrorMessage(message: string) {
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed")
  );
}

function recoverFromStaleChunk(error: unknown) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "";

  if (!message || !isChunkLoadErrorMessage(message)) {
    return;
  }

  const hasRetried = sessionStorage.getItem(staleChunkReloadKey) === "true";

  if (hasRetried) {
    sessionStorage.removeItem(staleChunkReloadKey);
    return;
  }

  sessionStorage.setItem(staleChunkReloadKey, "true");
  window.location.reload();
}

window.addEventListener("error", (event) => {
  recoverFromStaleChunk(event.error ?? event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  recoverFromStaleChunk(event.reason);
});

window.addEventListener("load", () => {
  sessionStorage.removeItem(staleChunkReloadKey);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
