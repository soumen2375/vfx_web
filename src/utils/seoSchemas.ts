/**
 * Structured Data (Schema.org JSON-LD) Generators for Right Time FX Studio / RIK NOVA TECHNOLOGY
 * Phase 5 SEO & GEO Schema Markup Implementation
 */

export const STUDIO_BASE_URL = 'https://www.righttimefx.com';

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${STUDIO_BASE_URL}/#organization`,
    name: 'Right Time FX Studio',
    alternateName: ['RIK NOVA TECHNOLOGY', 'Right Time FX'],
    url: STUDIO_BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${STUDIO_BASE_URL}/favicon-32x32.png`,
      caption: 'Right Time FX Studio Logo'
    },
    image: `${STUDIO_BASE_URL}/android-chrome-512x512.png`,
    description: 'Leading VFX Outsourcing Studio in India providing premium Rotoscoping, Matchmove, Paint & Cleanup, 3D Animation, CGI, and Compositing for feature films, episodic TV, and commercials worldwide.',
    telephone: '+91-8509587525',
    email: 'soumadipdinda18@gmail.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'National VFX & Post-Production Hub',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5726',
      longitude: '88.3639'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8509587525',
        contactType: 'Production Inquiries',
        email: 'soumadipdinda18@gmail.com',
        areaServed: ['IN', 'US', 'GB', 'CA', 'AU', 'EU'],
        availableLanguage: ['English', 'Hindi', 'Bengali']
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/right-time-fx',
      'https://www.instagram.com/righttimefx',
      'https://www.facebook.com/righttimefx',
      'https://www.youtube.com/@righttimefx'
    ]
  };
};

export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${STUDIO_BASE_URL}/#website`,
    url: STUDIO_BASE_URL,
    name: 'Right Time FX Studio',
    description: 'Leading VFX Outsourcing Studio in India | Rotoscoping, Matchmove, CGI, Animation',
    publisher: {
      '@id': `${STUDIO_BASE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${STUDIO_BASE_URL}/?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  providerName?: string;
  areaServed?: string[];
}

export const getServiceSchema = (input: ServiceSchemaInput) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: {
      '@type': 'ProfessionalService',
      name: input.providerName || 'Right Time FX Studio',
      url: STUDIO_BASE_URL,
      telephone: '+91-8509587525'
    },
    areaServed: input.areaServed || ['Global', 'India', 'United States', 'United Kingdom', 'Canada'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VFX Outsourcing Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: input.name
          }
        }
      ]
    }
  };
};

export interface FAQItemSchema {
  question: string;
  answer: string;
}

export const getFaqSchema = (faqs: FAQItemSchema[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export interface BreadcrumbItemSchema {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItemSchema[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  authorName?: string;
}

export const getArticleSchema = (article: ArticleSchemaInput) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    image: article.imageUrl || `${STUDIO_BASE_URL}/android-chrome-512x512.png`,
    author: {
      '@type': 'Organization',
      name: article.authorName || 'Right Time FX Editorial Team',
      url: STUDIO_BASE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'Right Time FX Studio',
      logo: {
        '@type': 'ImageObject',
        url: `${STUDIO_BASE_URL}/favicon-32x32.png`
      }
    },
    datePublished: article.datePublished || '2026-07-31'
  };
};
