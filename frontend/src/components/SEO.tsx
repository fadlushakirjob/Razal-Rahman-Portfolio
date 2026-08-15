import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
  type?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  canonical,
  type = 'website',
  ogImage,
}) => {
  const seoTitle = title ? title : siteConfig.title; // Using exact title passed for better SEO control
  const seoDescription = description || siteConfig.description;
  const seoImage = ogImage || image || siteConfig.ogImage;
  
  // Construct absolute URL for canonical
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const canonicalPath = canonical || url || '';
  const seoUrl = canonicalPath.startsWith('http') ? canonicalPath : `${baseUrl}${canonicalPath}`;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": siteConfig.name,
          "jobTitle": "Founder & CEO",
          "url": siteConfig.url,
          "image": seoImage,
          "sameAs": Object.values(siteConfig.socials).filter(Boolean),
          "worksFor": {
            "@type": "Organization",
            "name": "TravelZync Labs"
          }
        })}
      </script>
    </Helmet>
  );
};
