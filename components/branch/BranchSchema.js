export default function BranchSchema({ hostel }) {
  const isBoys = hostel.type === 'boys';

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": `${hostel.name} - ${hostel.branch || hostel.area}`,
    "description": hostel.description || `${isBoys ? 'Boys' : 'Girls'} student hostel in ${hostel.area}, Islamabad`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hostel.address,
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    ...(hostel.phone && { "telephone": hostel.phone }),
    "hasMap": hostel.googleMapsUrl,
    "audience": {
      "@type": "Audience",
      "audienceType": isBoys ? "Male Students" : "Female Students"
    },
    "amenityFeature": [
      ...(hostel.amenities || []).map(a => ({
        "@type": "LocationFeatureSpecification",
        "name": a,
        "value": true
      })),
      {
        "@type": "LocationFeatureSpecification",
        "name": isBoys ? "Boys Only" : "Girls Only",
        "value": true
      },
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Students Shelter Hostels",
      "url": "https://www.studentsshelter.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
