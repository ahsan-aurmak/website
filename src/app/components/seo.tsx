import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, isIndexingEnabled, SITE_NAME } from "../lib/site";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string | null;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object;
  breadcrumbSchema?: object;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  canonical = '',
  ogImage = buildCanonicalUrl('/global_hq_futuristic.png'),
  ogType = 'website',
  keywords = 'enterprise systems, digital infrastructure, legacy modernisation, AI-enabled operational intelligence, enterprise technology',
  schema,
  breadcrumbSchema,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical === null ? null : (canonical || buildCanonicalUrl('/'));
  const effectiveNoIndex = noIndex || !isIndexingEnabled();
  const schemas = [schema, breadcrumbSchema].filter(Boolean);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Staging remains blocked until the live domain is explicitly enabled. */}
      {effectiveNoIndex && (
        <>
          <meta name="robots" content="noindex, nofollow, noarchive" />
          <meta name="googlebot" content="noindex, nofollow, noarchive" />
        </>
      )}

      {!effectiveNoIndex && (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="googlebot" content="index, follow, max-image-preview:large" />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta property="twitter:url" content={canonicalUrl} />}
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schemas.map((item, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

// Organization Schema for Global Use
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": buildCanonicalUrl("/"),
  "logo": buildCanonicalUrl("/aurmak-logo.svg"),
  "description": "AURMAK designs and delivers enterprise systems, digital infrastructure, legacy modernisation, and AI-enabled operational intelligence for complex operations.",
  "slogan": "Partnerships Built to Last",
  "foundingDate": "2001",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "25+"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "England",
      "addressCountry": "GB",
      "streetAddress": "124 City Road",
      "postalCode": "EC1V 2NX"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Ajman",
      "addressRegion": "Ajman",
      "addressCountry": "AE",
      "streetAddress": "BLA-507, Block A, Ajman Main Boulevard"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK",
      "streetAddress": "306 Tipu Block, Bahria Town"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/aurmak"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Inquiries",
    "availableLanguage": ["English"]
  },
  "areaServed": [
    "United Kingdom",
    "United Arab Emirates",
    "Saudi Arabia",
    "Pakistan"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Technology Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Product Development",
          "description": "Scalable SaaS platforms designed to support enterprise operations, delivery governance, and system scalability."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Legacy System Modernisation",
          "description": "Legacy modernisation improving reliability, data governance, integration architecture, and operational resilience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Integration",
          "description": "AI integration aligned to commercial priorities, operational visibility, governed delivery, and operational ROI."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Management Systems",
          "description": "Intelligent building systems that improve infrastructure performance, operational visibility, and connected reporting environments."
        }
      }
    ]
  }
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": buildCanonicalUrl(item.url)
    }))
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}

interface JobPostingInput {
  title: string;
  description: string;
  identifier: string;
  employmentType: string;
  location: string;
  validThrough?: string;
}

export function generateJobPostingSchema(job: JobPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": SITE_NAME,
      "value": job.identifier,
    },
    "datePosted": "2026-03-15",
    "validThrough": job.validThrough || "2026-09-30T23:59:00+01:00",
    "employmentType": job.employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": SITE_NAME,
      "sameAs": buildCanonicalUrl("/"),
      "logo": buildCanonicalUrl("/aurmak-logo.svg"),
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
      },
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": job.location,
    },
    "directApply": true,
  };
}

interface CaseStudySchemaInput {
  title: string;
  description: string;
  slug: string;
  image?: string;
  client?: string;
  industry?: string;
}

export function generateCaseStudySchema(caseStudy: CaseStudySchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "author": {
      "@type": "Organization",
      "name": SITE_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": buildCanonicalUrl("/aurmak-logo.svg"),
      },
    },
    "mainEntityOfPage": buildCanonicalUrl(`/${caseStudy.slug}`),
    "image": caseStudy.image,
    "about": [
      caseStudy.client,
      caseStudy.industry,
      "Enterprise systems delivery",
      "Digital infrastructure",
      "Legacy modernisation",
    ].filter(Boolean),
    "articleSection": "Case Studies",
  };
}
