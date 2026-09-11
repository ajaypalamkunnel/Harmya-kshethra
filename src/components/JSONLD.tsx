import React from "react";
import { companyInfo } from "@/data/companyInfo";

export const JSONLD: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ArchitecturalFirm", "GeneralContractor"],
    "@id": "https://harmyakshethra.com/#organization",
    "name": companyInfo.name,
    "description": companyInfo.seo.description,
    "url": "https://harmyakshethra.com",
    "logo": "https://harmyakshethra.com/images/logo.jpg",
    "image": "https://harmyakshethra.com/images/hero.jpg",
    "telephone": companyInfo.phone,
    "email": companyInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.fullAddress,
      "addressLocality": "Ramapuram",
      "addressRegion": "Kerala",
      "postalCode": "686576",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyInfo.geo.latitude,
      "longitude": companyInfo.geo.longitude
    },
    "sameAs": [
      companyInfo.instagramUrl,
      companyInfo.facebookUrl
    ],
    "areaServed": [
      "Ramapuram",
      "Kottayam",
      "Pala",
      "Ernakulam",
      "Kerala"
    ],
    "priceRange": "$$$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": companyInfo.name,
    "url": "https://harmyakshethra.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://harmyakshethra.com/#projects",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
