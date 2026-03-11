import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, isIndexingEnabled, SITE_NAME } from "../lib/site";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
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
  keywords = 'AI integration, industrial automation, SaaS development, building management systems, legacy modernization, enterprise technology',
  schema,
  breadcrumbSchema,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || buildCanonicalUrl('/');
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
      <link rel="canonical" href={canonicalUrl} />

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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
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
  "description": "Enterprise AI integration, SaaS development, and industrial automation solutions provider",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Technology Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Integration",
          "description": "Custom AI models and automation solutions for enterprise systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Development",
          "description": "Enterprise SaaS product development through defined delivery models"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Legacy System Modernization",
          "description": "Modernizing legacy environments to improve security and scalability"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Management Systems",
          "description": "Intelligent building automation systems powered by IoT and AI"
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
