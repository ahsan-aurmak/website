# 🚀 PRODUCTION LAUNCH CHECKLIST
**AURMAK Website - SEO Go-Live Guide**

---

## ⚠️ CURRENT STATUS: STAGING MODE (NOINDEX)

The website is currently **blocking all search engines** to prevent indexing during development/staging.

**What's Active:**
- ✅ All SEO meta tags configured
- ✅ Sitemap.xml ready
- ✅ Schema markup implemented
- ✅ FAQ sections added
- ⚠️ **robots.txt set to DISALLOW ALL**
- ⚠️ **All pages set to NOINDEX, NOFOLLOW**

---

## 📋 PRE-LAUNCH CHECKLIST

### Before Publishing to Production Domain:

#### 1. **Domain & Hosting** ☐
- [ ] Domain registered (www.aurmak.com)
- [ ] DNS configured
- [ ] SSL certificate installed (HTTPS)
- [ ] Hosting environment ready
- [ ] Production URL confirmed

#### 2. **Content Review** ☐
- [ ] All page content finalized
- [ ] All images optimized
- [ ] All links working (no broken links)
- [ ] Contact form tested
- [ ] All case studies complete
- [ ] Team photos and bios verified
- [ ] Client logos approved for use

#### 3. **Technical Testing** ☐
- [ ] Mobile responsiveness verified on real devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Page load speed tested (Google PageSpeed Insights)
- [ ] Core Web Vitals passing
- [ ] All forms functional
- [ ] Chatbot working
- [ ] Navigation links tested
- [ ] 404 page configured

#### 4. **Legal & Compliance** ☐
- [ ] Privacy policy reviewed
- [ ] Cookie policy reviewed
- [ ] Terms of service reviewed
- [ ] GDPR compliance verified (if applicable)
- [ ] Cookie consent banner configured (if needed)

---

## 🎯 LAUNCH DAY ACTIONS

### Step 1: Update robots.txt (5 minutes)

**File:** `/public/robots.txt`

**Replace with:**
```txt
# AURMAK Robots.txt
# PRODUCTION - ALLOW INDEXING

User-agent: *
Allow: /

# Block admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: https://www.aurmak.com/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Specific rules for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
```

---

### Step 2: Enable SEO Indexing (2 minutes)

**Option A: Global Change (Recommended)**

Update `/src/app/components/seo.tsx` line 19:
```tsx
// BEFORE (Staging):
noIndex = true, // Default to noindex until production launch

// AFTER (Production):
noIndex = false, // Allow indexing in production
```

**Option B: Per-Page Override** (if you want granular control)

On each page, explicitly set:
```tsx
<SEO
  title="..."
  description="..."
  noIndex={false}  // ← Add this to allow indexing
/>
```

---

### Step 3: Update Sitemap URLs (10 minutes)

**File:** `/public/sitemap.xml`

Replace all instances of the current domain with your production domain:

**Find:** `https://www.aurmak.com`  
**Replace with:** Your actual production URL

Update `<lastmod>` dates to launch date:
```xml
<lastmod>2026-03-15</lastmod>  <!-- Use actual launch date -->
```

---

### Step 4: Update Schema & Meta Tags URLs (5 minutes)

**File:** `/src/app/components/seo.tsx`

Update line 21:
```tsx
// BEFORE:
const siteUrl = 'https://www.aurmak.com';

// AFTER:
const siteUrl = 'https://YOUR-ACTUAL-DOMAIN.com';
```

Update Organization Schema URLs (lines 73-74):
```tsx
"url": "https://YOUR-ACTUAL-DOMAIN.com",
"logo": "https://YOUR-ACTUAL-DOMAIN.com/logo.png",
```

---

### Step 5: Add OG Images (Optional but Recommended)

Create and upload these images to `/public/`:
- `og-image.jpg` (1200x630px - Facebook/LinkedIn)
- `twitter-image.jpg` (1200x600px - Twitter)

Update SEO component default:
```tsx
ogImage = 'https://YOUR-DOMAIN.com/og-image.jpg',
```

**Recommended Image Content:**
- AURMAK logo
- Tagline: "Partnerships Built to Last"
- Key services or office locations
- Professional tech background

---

## 🔍 POST-LAUNCH SEO SETUP

### Week 1: Search Engine Submission

#### 1. **Google Search Console** (CRITICAL)
- [ ] Create account at search.google.com/search-console
- [ ] Add property: https://www.aurmak.com
- [ ] Verify ownership (DNS or HTML file method)
- [ ] Submit sitemap: `https://www.aurmak.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Monitor "Coverage" report for indexing status

#### 2. **Google Analytics 4**
- [ ] Create GA4 property
- [ ] Install tracking code in website
- [ ] Set up conversion goals (form submissions, button clicks)
- [ ] Link to Search Console
- [ ] Test tracking with GA Debugger

#### 3. **Bing Webmaster Tools**
- [ ] Create account at bing.com/webmasters
- [ ] Add site
- [ ] Submit sitemap
- [ ] Verify ownership

---

### Week 1-2: Validation & Testing

#### **Test SEO Tags:**

1. **Google Rich Results Test**
   - URL: search.google.com/test/rich-results
   - Test homepage and key pages
   - Verify schema markup displays correctly

2. **Facebook Sharing Debugger**
   - URL: developers.facebook.com/tools/debug
   - Test Open Graph tags
   - Clear cache and rescrape

3. **Twitter Card Validator**
   - URL: cards-dev.twitter.com/validator
   - Test Twitter Cards

4. **LinkedIn Post Inspector**
   - URL: linkedin.com/post-inspector
   - Test LinkedIn sharing preview

---

### Week 2-4: Monitoring & Optimization

#### **Daily Checks:**
- [ ] Monitor Google Search Console for errors
- [ ] Check indexing progress (target: 20/20 pages)
- [ ] Review crawl stats

#### **Weekly Checks:**
- [ ] Review Google Analytics traffic
- [ ] Check keyword rankings (use Google Search Console)
- [ ] Monitor Core Web Vitals
- [ ] Review page speed scores

#### **Monthly Checks:**
- [ ] Update sitemap with new content
- [ ] Refresh old content
- [ ] Add new FAQs based on user questions
- [ ] Review and respond to any errors

---

## 📊 SUCCESS METRICS

### Month 1 Targets:
- ✅ 100% of pages indexed (20/20)
- ✅ Appearing in search for "AURMAK"
- ✅ Schema markup validated
- ✅ 50+ organic sessions

### Month 3 Targets:
- ✅ 500+ organic sessions
- ✅ Ranking for 5+ branded + service keywords
- ✅ 10+ contact form submissions from organic search
- ✅ Featured in Google Knowledge Panel

### Month 6 Targets:
- ✅ 2,000+ organic sessions
- ✅ Page 1 rankings for 10+ keywords
- ✅ Domain Authority 25+
- ✅ 50+ quality backlinks

---

## 🛠️ QUICK REFERENCE

### Files to Update on Launch:

| File | What to Change | Priority |
|------|---------------|----------|
| `/public/robots.txt` | Change `Disallow: /` to `Allow: /` | 🔴 CRITICAL |
| `/src/app/components/seo.tsx` | Change `noIndex = true` to `noIndex = false` | 🔴 CRITICAL |
| `/public/sitemap.xml` | Update domain URLs and dates | 🔴 CRITICAL |
| `/src/app/components/seo.tsx` | Update `siteUrl` constant | 🟡 HIGH |
| `/public/og-image.jpg` | Upload social share image | 🟢 MEDIUM |
| `/public/logo.png` | Upload for schema markup | 🟢 MEDIUM |

---

## ⚡ QUICK LAUNCH COMMAND LIST

```bash
# 1. Update robots.txt (allow crawling)
# Edit /public/robots.txt - change Disallow to Allow

# 2. Enable indexing
# Edit /src/app/components/seo.tsx - line 19
# Change: noIndex = true → noIndex = false

# 3. Update domain in sitemap
# Edit /public/sitemap.xml - find/replace domain

# 4. Update schema URLs
# Edit /src/app/components/seo.tsx - update siteUrl

# 5. Deploy to production

# 6. Verify with Google Rich Results Test
# https://search.google.com/test/rich-results

# 7. Submit to Google Search Console
# https://search.google.com/search-console

# 8. Test social sharing
# Facebook: https://developers.facebook.com/tools/debug
# Twitter: https://cards-dev.twitter.com/validator
```

---

## 🚨 IMPORTANT NOTES

### DO NOT Enable Indexing Until:
- ✅ Website is on production domain (not staging)
- ✅ All content is final and approved
- ✅ SSL certificate is installed (HTTPS)
- ✅ Contact form is working
- ✅ Legal pages are complete
- ✅ Mobile responsiveness verified

### After Enabling Indexing:
- It takes 1-7 days for Google to start indexing
- Some pages may index faster than others
- Submit sitemap to speed up process
- Request indexing for priority pages in Search Console

---

## 📞 SUPPORT CONTACTS

**SEO Issues:**
- Check `/SEO_CRO_AUDIT_REPORT.md` for detailed guidance
- Use Google Search Console Help Center
- Monitor indexing status weekly

**Technical Issues:**
- Review `/SEO_IMPLEMENTATION_SUMMARY.md`
- Test with browser DevTools
- Validate schema with Google Rich Results Test

---

## ✅ FINAL PRE-LAUNCH CHECKLIST

**The Night Before Launch:**
- [ ] Full website backup created
- [ ] All edits committed to version control
- [ ] robots.txt update prepared
- [ ] SEO component update prepared
- [ ] Sitemap updates prepared
- [ ] Google Search Console account ready
- [ ] Google Analytics property created
- [ ] Team notified of launch timeline

**Launch Day Morning:**
- [ ] Deploy to production
- [ ] Update robots.txt (allow indexing)
- [ ] Update SEO component (noIndex = false)
- [ ] Update sitemap URLs
- [ ] Verify HTTPS working
- [ ] Test all pages load correctly
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for homepage
- [ ] Test social sharing on all platforms
- [ ] Verify schema with Rich Results Test

**Launch Day Afternoon:**
- [ ] Monitor Google Search Console for crawl activity
- [ ] Check Google Analytics for traffic
- [ ] Test contact form submission
- [ ] Share launch on social media (LinkedIn, Twitter)
- [ ] Send launch announcement to network

**Week 1:**
- [ ] Daily Search Console monitoring
- [ ] Track indexing progress
- [ ] Monitor for any errors
- [ ] Respond to any technical issues
- [ ] Begin backlink outreach

---

**Status:** 🟡 READY FOR LAUNCH (Pending Production Deployment)  
**Current Mode:** STAGING (NOINDEX Active)  
**Action Required:** Follow launch checklist when ready

---

*Launch Checklist Created: March 10, 2026*  
*Ready for Production Deployment*
