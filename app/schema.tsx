export const TurnusSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Turnus",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BRL",
          lowPrice: "400",
          highPrice: "940",
          offerCount: "3",
        },
        description:
          "Sistema completo de gestão de escalas médicas. Automatize plantões, controle trocas e pagamentos com inteligência artificial.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
        author: {
          "@type": "Organization",
          name: "VOID Creative Code",
          url: "https://voidcc.com.br",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://voidcc.com.br/organization",
        name: "VOID Creative Code",
        url: "https://voidcc.com.br",
        logo: {
          "@type": "ImageObject",
          url: "https://turnus.app.br/icon-512.png",
          width: 512,
          height: 512,
        },
        description:
          "Software house especializada em soluções para gestão hospitalar e saúde.",
        sameAs: ["https://www.instagram.com/void.ccode/"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://turnus.app.br/#website",
        url: "https://turnus.app.br",
        name: "Turnus - Gestão de Plantões Médicos",
        description:
          "Tempus sub control. Sistema completo de gestão de escalas médicas.",
        publisher: {
          "@id": "https://voidcc.com.br/#organization",
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
