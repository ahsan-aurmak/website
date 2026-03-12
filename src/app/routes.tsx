import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowWeWork from "./pages/HowWeWork";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Lab from "./pages/Lab";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "how-we-work", Component: HowWeWork },
      { path: "solutions", Component: Solutions },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-study-metrikus-smart-building", Component: CaseStudyDetail },
      { path: "case-study-cutover-orchestration", Component: CaseStudyDetail },
      { path: "case-study-rbs-travel-portal", Component: CaseStudyDetail },
      { path: "case-study-cisco-stealthwatch", Component: CaseStudyDetail },
      { path: "case-study-al-jazeera-itsm", Component: CaseStudyDetail },
      { path: "case-study-castrol-carlounge", Component: CaseStudyDetail },
      { path: "case-study-gtt-saas-iaas", Component: CaseStudyDetail },
      { path: "case-study-dubai-trade", Component: CaseStudyDetail },
      { path: "insights", Component: Insights },
      { path: "insights/:slug", Component: InsightArticle },
      { path: "lab", Component: Lab },
      { path: "team", Component: Team },
      { path: "careers", Component: Careers },
      { path: "careers/:jobSlug", Component: JobDetail },
      { path: "job-detail", Component: JobDetail },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "cookies", Component: Cookies },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
], { basename: import.meta.env.BASE_URL });
