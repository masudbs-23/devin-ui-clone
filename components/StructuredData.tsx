import Script from 'next/script';
import { config } from '../lib/config';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.site.name,
    url: config.site.url,
    logo: `${config.site.url}/logo.png`,
    description: config.site.description,
    sameAs: [
      config.social.twitter,
      config.social.github,
      config.social.linkedin,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.contact.phone,
      contactType: 'sales',
      availableLanguage: 'English',
    },
  };

  return <StructuredData data={organizationData} />;
}

export function WebSiteStructuredData() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.site.name,
    url: config.site.url,
    description: config.site.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${config.site.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={websiteData} />;
}

export function SoftwareApplicationStructuredData() {
  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: config.site.name,
    operatingSystem: 'Web, Windows, macOS, Linux',
    applicationCategory: 'DeveloperApplication',
    description: config.site.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  return <StructuredData data={softwareData} />;
}
