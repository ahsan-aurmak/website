import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object;
  noIndex?: boolean; // Allow override for specific pages
}

export function SEO({
  title,
  description,
  canonical = '',
  ogImage = 'https://www.aurmak.com/og-image.jpg',
  ogType = 'website',
  keywords = 'AI integration, industrial automation, SaaS development, building management systems, legacy modernization, enterprise technology',
  schema,
  noIndex = false, // Allow indexing in production
}: SEOProps) {
  const fullTitle = title.includes('AURMAK') ? title : `${title} | AURMAK`;
  const siteUrl = 'https://www.aurmak.com';
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* STAGING/DEV: Prevent indexing until production launch */}
      {noIndex && (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="bingbot" content="noindex, nofollow" />
        </>
      )}

      {/* PRODUCTION: Enable indexing (set noIndex={false}) */}
      {!noIndex && (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AURMAK" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

// Organization Schema for Global Use
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AURMAK",
  "url": "https://www.aurmak.com",
  "logo": "https://www.aurmak.com/logo.png",
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
      "description": "Strategic headquarters for governance and portfolio-level decision-making"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
      "description": "Regional execution and client coordination centre for GCC programmes"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK",
      "description": "Engineering and integration hub for software delivery"
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
      "item": `https://www.aurmak.com${item.url}`
    }))
  };
}