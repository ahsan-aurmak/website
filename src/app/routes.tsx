import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";
import Root from "./pages/Root";

const lazyPage = (importer: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await importer()).default,
});

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, lazy: lazyPage(() => import("./pages/Home")) },
      { path: "about", lazy: lazyPage(() => import("./pages/About")) },
      { path: "services", lazy: lazyPage(() => import("./pages/Services")) },
      { path: "how-we-work", lazy: lazyPage(() => import("./pages/HowWeWork")) },
      { path: "solutions", lazy: lazyPage(() => import("./pages/Solutions")) },
      { path: "case-studies", lazy: lazyPage(() => import("./pages/CaseStudies")) },
      { path: "case-study-metrikus-smart-building", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-cutover-orchestration", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-rbs-travel-portal", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-cisco-stealthwatch", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-al-jazeera-itsm", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-castrol-carlounge", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-gtt-saas-iaas", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "case-study-dubai-trade", lazy: lazyPage(() => import("./pages/CaseStudyDetail")) },
      { path: "insights", lazy: lazyPage(() => import("./pages/Insights")) },
      { path: "insights/:slug", lazy: lazyPage(() => import("./pages/InsightArticle")) },
      { path: "lab", lazy: lazyPage(() => import("./pages/Lab")) },
      { path: "team", lazy: lazyPage(() => import("./pages/Team")) },
      { path: "careers", lazy: lazyPage(() => import("./pages/Careers")) },
      { path: "careers/:jobSlug", lazy: lazyPage(() => import("./pages/JobDetail")) },
      { path: "job-detail", lazy: lazyPage(() => import("./pages/JobDetail")) },
      { path: "contact", lazy: lazyPage(() => import("./pages/Contact")) },
      { path: "privacy", lazy: lazyPage(() => import("./pages/Privacy")) },
      { path: "cookies", lazy: lazyPage(() => import("./pages/Cookies")) },
      { path: "terms", lazy: lazyPage(() => import("./pages/Terms")) },
      { path: "*", lazy: lazyPage(() => import("./pages/NotFound")) },
    ],
  },
], { basename: import.meta.env.BASE_URL });
