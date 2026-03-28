import { useRouteError, isRouteErrorResponse } from "react-router";
import { Button } from "../components/button";
import { getChunkLoadErrorMessage, isChunkLoadErrorMessage } from "../lib/chunk-recovery";
import { useLanguage } from "../components/language-provider";

export default function RouteError() {
  const error = useRouteError();
  const { t } = useLanguage();
  const message = getChunkLoadErrorMessage(error);
  const isChunkError = isChunkLoadErrorMessage(message);

  let title = t("routeError.title");
  let description = t("routeError.description");

  if (isChunkError) {
    title = t("routeError.refreshingTitle");
    description = t("routeError.refreshingDescription");
  } else if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? t("routeError.pageNotFound") : `Error ${error.status}`;
    description = error.statusText || description;
  }

  return (
    <div className="container mx-auto flex min-h-[70vh] max-w-2xl items-center px-4 py-20">
      <div className="w-full rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[#27aae1] dark:text-cyan-400">{t("routeError.brand")}</div>
        <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Button to="/" variant="secondary">
            {t("routeError.goHome")}
          </Button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-lg bg-[#27aae1] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1795c7]"
          >
            {t("routeError.refreshPage")}
          </button>
        </div>
      </div>
    </div>
  );
}
