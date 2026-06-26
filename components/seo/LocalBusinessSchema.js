export default function LocalBusinessSchema({ hostel }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studentsshelterhostels.vercel.app';
  const schemaData = hostel.localBusinessSchema || {};

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": schemaData.name || `${hostel.name} — ${hostel.branchLabel || hostel.area}`,
    "description": schemaData.description || hostel.seo.description,
    "url": `${SITE_URL}/${hostel.type}-hostels/${hostel.slug}`,
    "telephone": hostel.phone || "0331-4343676",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schemaData.streetAddress || hostel.fullAddress,
      "addressLocality": "Islamabad",
      "addressRegion": "Islamabad Capital Territory",
      "addressCountry": "PK"
    },
    "hasMap": hostel.googleMapsUrl,
    "priceRange": "PKR",
    "audience": {
      "@type": "Audience",
      "audienceType": schemaData.audienceType || (hostel.type === 'boys' ? "Male University Students" : "Female University Students")
    },
    "amenityFeature": hostel.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "parentOrganization": {
      "@type": "Organization",
      "name": "Students Shelter Hostels",
      "url": SITE_URL
    }
  };

  // Breadcrumb schema
  const breadcrumb = hostel.breadcrumbSchema || {};
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": breadcrumb.hubName || (hostel.type === 'boys' ? 'Boys Hostels' : 'Girls Hostels'), "item": `${SITE_URL}${breadcrumb.hubPath || `/${hostel.type}-hostels`}` },
      { "@type": "ListItem", "position": 3, "name": breadcrumb.branchName || hostel.branchLabel || hostel.area }
    ]
  };

  // FAQ schema
  const faqSchema = hostel.faqs && hostel.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": hostel.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
