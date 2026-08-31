import Script from 'next/script';

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
    name: 'Puku',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev'}/logo.png`,
    description: 'Puku is the all-in-one environment for AI workflows, software development, and design.',
    sameAs: [
      'https://twitter.com/puku',
      'https://github.com/puku',
      'https://linkedin.com/company/puku',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-555-5555',
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
    name: 'Puku',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev',
    description: 'Puku is the all-in-one environment for AI workflows, software development, and design.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev'}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={websiteData} />;
}

export function SoftwareApplicationStructuredData() {
  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Puku',
    operatingSystem: 'Web, Windows, macOS, Linux',
    applicationCategory: 'DeveloperApplication',
    description: 'Puku is the all-in-one environment for AI workflows, software development, and design.',
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
