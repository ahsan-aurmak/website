# 🚀 Export AURMAK Website to Cursor/Local Development

This guide will help you export your complete AURMAK website from Figma Make to Cursor (or any local IDE) for continued development.

---

## 📋 Prerequisites

Before you begin, ensure you have installed:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **pnpm** (recommended) or npm - Install with: `npm install -g pnpm`
3. **Cursor IDE** - [Download here](https://cursor.sh/) or use VS Code
4. **Git** (optional but recommended) - [Download here](https://git-scm.com/)

---

## 📦 Step 1: Export Your Code from Figma Make

### Option A: Download as ZIP (Recommended)
1. In Figma Make, click the **Download/Export** button (usually top-right)
2. Select **"Download Project"** or **"Export as ZIP"**
3. Save the ZIP file to your computer
4. Extract the ZIP to a folder (e.g., `aurmak-website`)

### Option B: Manual Copy (If no export button)
If there's no built-in export:
1. Copy all files and folders from this project
2. Create a new folder on your computer: `aurmak-website`
3. Paste all files into this folder

---

## 🛠️ Step 2: Project Structure

Your exported project should have this structure:

```
aurmak-website/
├── src/
│   ├── app/
│   │   ├── components/      # All React components
│   │   ├── pages/           # All page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── routes.tsx       # React Router configuration
│   │   └── App.tsx          # Main app component
│   ├── imports/             # Imported assets and docs
│   └── styles/              # CSS and Tailwind styles
├── public/
│   ├── robots.txt           # SEO: Search engine rules
│   └── sitemap.xml          # SEO: Site structure
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration (if exists)
```

---

## ⚙️ Step 3: Setup in Cursor/Local Environment

### 1. Open Project in Cursor
```bash
# Navigate to your project folder
cd aurmak-website

# Open in Cursor
cursor .

# Or if using VS Code
code .
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended - faster, more efficient)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

**Wait for installation to complete.** This will install all packages listed in `package.json`.

---

## 🚀 Step 4: Run Development Server

### Start the dev server:
```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

### You should see output like:
```
  VITE v6.3.5  ready in 543 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Open your browser:
Navigate to `http://localhost:5173/` to see your website running locally!

---

## 🔧 Step 5: Additional Setup (Optional)

### Create Missing Files

**1. Create `tsconfig.json`** (if not exported):
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**2. Create `tsconfig.node.json`**:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

**3. Create `.gitignore`**:
```
# Dependencies
node_modules
.pnpm-store

# Build output
dist
build
.vite

# Environment files
.env
.env.local
.env.production

# IDE
.vscode/*
!.vscode/extensions.json
.idea
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing
coverage
```

---

## 🏗️ Step 6: Build for Production

### Build the project:
```bash
# Using pnpm
pnpm build

# Using npm
npm run build

# Using yarn
yarn build
```

This creates an optimized production build in the `dist/` folder.

### Preview production build:
```bash
# Using pnpm
pnpm preview

# Using npm
npm run preview
```

---

## 📝 Step 7: Essential Package Commands

Add these scripts to your `package.json` if not already present:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🔍 Troubleshooting Common Issues

### Issue: "Module not found" errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json
pnpm install
```

### Issue: Port 5173 already in use
**Solution:**
```bash
# Kill the process using port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use a different port:
vite --port 3000
```

### Issue: "Cannot find module '@/...'"
**Solution:** Ensure `tsconfig.json` has the correct path alias:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Issue: Tailwind styles not loading
**Solution:**
1. Check that `@tailwindcss/vite` is in `vite.config.ts`
2. Verify `src/styles/tailwind.css` is imported in your entry point
3. Clear browser cache and restart dev server

---

## 🎯 Development Workflow

### Recommended Extensions for Cursor/VS Code:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier - Code formatter**
- **Auto Rename Tag**
- **Path Intellisense**

### Install Extensions in Cursor:
```bash
cursor --install-extension dsznajder.es7-react-js-snippets
cursor --install-extension bradlc.vscode-tailwindcss
cursor --install-extension dbaeumer.vscode-eslint
cursor --install-extension esbenp.prettier-vscode
```

---

## 🚢 Deployment Options

### 1. **Vercel** (Recommended for React/Vite)
```bash
npm i -g vercel
vercel
```

### 2. **Netlify**
```bash
npm i -g netlify-cli
netlify deploy
```

### 3. **GitHub Pages**
- Push code to GitHub
- Enable GitHub Pages in repo settings
- Set build command: `pnpm build`
- Set publish directory: `dist`

### 4. **Custom Server**
- Build: `pnpm build`
- Upload `dist/` folder to server
- Configure web server (nginx/apache) to serve static files

---

## 📊 Project Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | Latest | Type Safety |
| Vite | 6.3.5 | Build Tool |
| Tailwind CSS | 4.1.12 | Styling |
| React Router | 7.13.0 | Routing |
| Motion | 12.23.24 | Animations |
| Radix UI | Various | Accessible Components |
| React Helmet Async | 3.0.0 | SEO Meta Tags |
| Lucide React | 0.487.0 | Icons |

---

## 🔐 Important Notes

### SEO Configuration:
- **robots.txt**: Currently set to `Disallow: /` (blocks all crawlers)
- **Meta tags**: All pages have `noindex, nofollow`
- **Action Required**: Before going live, update these files to allow indexing

### Environment Variables:
If you add API keys or secrets:
1. Create `.env` file in root
2. Add variables: `VITE_API_KEY=your_key_here`
3. Access in code: `import.meta.env.VITE_API_KEY`
4. Never commit `.env` to Git

---

## 📞 Next Steps

1. ✅ Install all prerequisites
2. ✅ Export and extract project
3. ✅ Run `pnpm install`
4. ✅ Run `pnpm dev`
5. ✅ Open `http://localhost:5173`
6. ✅ Start developing!

### Development Checklist:
- [ ] Set up Git version control: `git init`
- [ ] Create GitHub repository
- [ ] Configure ESLint and Prettier
- [ ] Set up CI/CD pipeline
- [ ] Configure production environment variables
- [ ] Update SEO settings before launch
- [ ] Test on multiple browsers
- [ ] Optimize images and assets
- [ ] Run performance audits

---

## 🎓 Resources

- **Vite Documentation**: https://vitejs.dev/
- **React Router v7**: https://reactrouter.com/
- **Tailwind CSS v4**: https://tailwindcss.com/
- **Motion (Framer)**: https://motion.dev/
- **Cursor IDE**: https://cursor.sh/

---

## ✨ You're All Set!

Your AURMAK website is now ready for local development in Cursor. Happy coding! 🚀

For questions or issues, refer to the official documentation of each technology listed above.
