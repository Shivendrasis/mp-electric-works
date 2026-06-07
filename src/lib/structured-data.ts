import { SITE } from "./site";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
  addressLocality: SITE.address.city,
  postalCode: SITE.address.postalCode,
  addressRegion: SITE.address.region,
  addressCountry: "IN",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneRaw,
  foundingDate: String(SITE.established),
  logo: `${SITE.url}/images/factory-exterior.jpg`,
  address: postalAddress,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneRaw,
    email: SITE.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.name,
  image: `${SITE.url}/images/factory-exterior.jpg`,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneRaw,
  priceRange: "$$",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },
  areaServed: ["Madhya Pradesh", "Gujarat", "Uttar Pradesh", "India"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-IN",
};

export const allSchemas = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
];
