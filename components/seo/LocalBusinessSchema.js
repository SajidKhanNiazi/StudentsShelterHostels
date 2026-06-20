export default function LocalBusinessSchema({ hostel }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `https://studentsshelter.com/${hostel.type}-hostels/${hostel.slug}/#business`,
        "name": `${hostel.name} — ${hostel.branchLabel || hostel.area}`,
        "description": hostel.seo.description,
        "url": `https://studentsshelter.com/${hostel.type}-hostels/${hostel.slug}/`,
        "telephone": hostel.phone || "0331-4343676",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": hostel.fullAddress,
          "addressLocality": "Islamabad",
          "addressRegion": "IslamCapital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        },
        "hasMap": hostel.googleMapsUrl,
        "priceRange": "₨₨",
        "audience": {
          "@type": "Audience",
          "audienceType": hostel.type === 'boys' ? "Male University Students" : "Female University Students"
        },
        "amenityFeature": hostel.amenities.map(amenity => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity,
          "value": true
        })),
        "parentOrganization": {
          "@type": "Organization",
          "name": "Students Shelter Hostels",
          "url": "https://studentsshelter.com/"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
