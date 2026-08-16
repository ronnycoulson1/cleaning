import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cleanandshine.example/#business",
    name: site.name,
    description: site.tagline,
    url: "https://cleanandshine.example",
    email: site.email,
    image: "https://cleanandshine.example/images/cleaner-bathroom.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.city,
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "Varies — estimate on request",
    founder: {
      "@type": "Person",
      name: site.owner.name,
      jobTitle: site.owner.role,
      image: `https://cleanandshine.example${site.owner.photo}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
