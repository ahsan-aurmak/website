# 📂 AURMAK Website - Complete File Export Checklist

Copy these files from Figma Make to your local machine:

## ✅ Root Configuration Files
- [ ] `package.json` - **CRITICAL** (contains all dependencies)
- [ ] `vite.config.ts` - **CRITICAL** (Vite configuration)
- [ ] `postcss.config.mjs` - **CRITICAL** (PostCSS configuration)
- [ ] Create: `tsconfig.json` (copy from EXPORT_TO_CURSOR_GUIDE.md)
- [ ] Create: `tsconfig.node.json` (copy from EXPORT_TO_CURSOR_GUIDE.md)
- [ ] Create: `.gitignore` (copy from EXPORT_TO_CURSOR_GUIDE.md)
- [ ] Create: `index.html` (create entry point - see below)

## ✅ Public Folder (`/public/`)
- [ ] `robots.txt`
- [ ] `sitemap.xml`

## ✅ Styles (`/src/styles/`)
- [ ] `index.css`
- [ ] `tailwind.css`
- [ ] `theme.css`
- [ ] `fonts.css`

## ✅ App Core (`/src/app/`)
- [ ] `App.tsx` - **CRITICAL** (Main app component)
- [ ] `routes.tsx` - **CRITICAL** (Router configuration)

## ✅ Pages (`/src/app/pages/`)
- [ ] `Root.tsx` - **CRITICAL** (Layout wrapper)
- [ ] `Home.tsx`
- [ ] `About.tsx`
- [ ] `Services.tsx`
- [ ] `Solutions.tsx`
- [ ] `CaseStudies.tsx`
- [ ] `CaseStudyDetail.tsx`
- [ ] `Team.tsx`
- [ ] `Careers.tsx`
- [ ] `JobDetail.tsx`
- [ ] `Contact.tsx`
- [ ] `HowWeWork.tsx`
- [ ] `Insights.tsx`
- [ ] `Lab.tsx`
- [ ] `Privacy.tsx`
- [ ] `Terms.tsx`
- [ ] `Cookies.tsx`
- [ ] `NotFound.tsx`

## ✅ Components (`/src/app/components/`)
- [ ] `navigation.tsx`
- [ ] `footer.tsx`
- [ ] `hero.tsx`
- [ ] `button.tsx`
- [ ] `card.tsx`
- [ ] `chatbot.tsx`
- [ ] `seo.tsx` - **CRITICAL** (SEO component)
- [ ] `staging-banner.tsx`
- [ ] `animated-background.tsx`
- [ ] `animated-counter.tsx`
- [ ] `cursor-follower.tsx`
- [ ] `global-map.tsx`
- [ ] `gradient-mesh.tsx`
- [ ] `loading.tsx`
- [ ] `office-clock.tsx`
- [ ] `tilt-card.tsx`
- [ ] `world-map.tsx`
- [ ] `index.ts`

## ✅ Figma Components (`/src/app/components/figma/`)
- [ ] `ImageWithFallback.tsx` - **CRITICAL**

## ✅ UI Components (`/src/app/components/ui/`)
- [ ] `accordion.tsx` - **CRITICAL** (FAQ component)
- [ ] `alert-dialog.tsx`
- [ ] `alert.tsx`
- [ ] `aspect-ratio.tsx`
- [ ] `avatar.tsx`
- [ ] `badge.tsx`
- [ ] `breadcrumb.tsx`
- [ ] `button.tsx`
- [ ] `calendar.tsx`
- [ ] `card.tsx`
- [ ] `carousel.tsx`
- [ ] `chart.tsx`
- [ ] `checkbox.tsx`
- [ ] `collapsible.tsx`
- [ ] `command.tsx`
- [ ] `context-menu.tsx`
- [ ] `dialog.tsx`
- [ ] `drawer.tsx`
- [ ] `dropdown-menu.tsx`
- [ ] `form.tsx`
- [ ] `hover-card.tsx`
- [ ] `input.tsx`
- [ ] `input-otp.tsx`
- [ ] `label.tsx`
- [ ] `menubar.tsx`
- [ ] `navigation-menu.tsx`
- [ ] `pagination.tsx`
- [ ] `popover.tsx`
- [ ] `progress.tsx`
- [ ] `radio-group.tsx`
- [ ] `resizable.tsx`
- [ ] `scroll-area.tsx`
- [ ] `select.tsx`
- [ ] `separator.tsx`
- [ ] `sheet.tsx`
- [ ] `sidebar.tsx`
- [ ] `skeleton.tsx`
- [ ] `slider.tsx`
- [ ] `sonner.tsx`
- [ ] `switch.tsx`
- [ ] `table.tsx`
- [ ] `tabs.tsx`
- [ ] `textarea.tsx`
- [ ] `toggle.tsx`
- [ ] `toggle-group.tsx`
- [ ] `tooltip.tsx`
- [ ] `utils.ts` - **CRITICAL** (Utility functions)
- [ ] `use-mobile.ts`

## ✅ Hooks (`/src/app/hooks/`)
- [ ] `useTimezoneTime.ts`

## ✅ Imports Folder (`/src/imports/`)
- [ ] `aurmak-website-spec.md`
- [ ] `hubco-experience.md`
- [ ] `operations-manager-resume.md`
- [ ] `simple-map.html`
- [ ] `user-experience-summary.md`

## ✅ Documentation (Optional but Recommended)
- [ ] `EXPORT_TO_CURSOR_GUIDE.md`
- [ ] `FILE_EXPORT_CHECKLIST.md`
- [ ] `SEO_IMPLEMENTATION_SUMMARY.md`
- [ ] `STAGING_MODE_ACTIVE.md`
- [ ] `PRODUCTION_LAUNCH_CHECKLIST.md`

---

## 🚨 Critical Missing File: `index.html`

Create this file in your project root:

**`/index.html`:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AURMAK - Partnerships Built to Last</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 🚨 Critical Missing File: `src/main.tsx`

Create this file:

**`/src/main.tsx`:**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 📊 Export Progress Tracking

### Core Files (Must Have):
- [ ] ✅ 6/6 Root config files
- [ ] ✅ 2/2 Public files
- [ ] ✅ 4/4 Style files
- [ ] ✅ 2/2 App core files

### Content Files (Must Have):
- [ ] ✅ 17/17 Page components
- [ ] ✅ 14/14 Main components
- [ ] ✅ 1/1 Figma components
- [ ] ✅ 1/1 Custom hooks

### UI Components (Important):
- [ ] ✅ 45/45 UI library components

### Assets (Optional):
- [ ] ✅ 5/5 Import documents

---

## 🎯 Quick Start After Export

1. Open terminal in project folder
2. Run: `pnpm install` (or `npm install`)
3. Run: `pnpm dev` (or `npm run dev`)
4. Open: `http://localhost:5173`

**Total Files to Export: ~95 files**

---

## 💡 Pro Tips

### Time-Saving Method:
If you have access to a code assistant in Cursor:
1. Export critical files first (marked **CRITICAL** above)
2. Get the site running with basic structure
3. Add UI components as needed

### Priority Order:
1. **Tier 1 (Required):** Config files, App.tsx, routes.tsx, Root.tsx, main.tsx, index.html
2. **Tier 2 (Core):** All pages, navigation, footer, SEO component
3. **Tier 3 (Features):** Chatbot, animations, UI components
4. **Tier 4 (Optional):** Documentation, import files

---

## ✅ Verification

After export, verify these work:
- [ ] `pnpm install` completes without errors
- [ ] `pnpm dev` starts successfully
- [ ] Home page loads at localhost:5173
- [ ] Navigation works
- [ ] All routes accessible
- [ ] No console errors

---

**Estimated Export Time:** 30-60 minutes (manual copy)

Good luck with your export! 🚀
