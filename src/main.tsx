import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'
import { clearChunkRecoveryState, recoverFromStaleChunk } from './app/lib/chunk-recovery'

window.addEventListener("error", (event) => {
  recoverFromStaleChunk(event.error ?? event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  recoverFromStaleChunk(event.reason);
});

window.addEventListener("load", () => {
  clearChunkRecoveryState();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
