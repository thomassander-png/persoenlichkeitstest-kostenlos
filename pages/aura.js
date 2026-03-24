import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaAura = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/aura",
      "url": "https://persoenlichkeitstest-kostenlos.de/aura",
      "name": "Aura Check online kostenlos | Welche Energie strahlst du aus?",
      "description": "Mach den kostenlosen Aura Check und entdecke deine Aura-Farbe. Welche Energie strahlst du aus? In nur 2 Minuten. KI-analysiert.",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/aura#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/aura#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Aura Check", "item": "https://persoenlichkeitstest-kostenlos.de/aura" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Aura Check",
      "url": "https://persoenlichkeitstest-kostenlos.de/aura",
      "description": "Kostenloser Aura Check — Entdecke deine Aura-Farbe und welche Energie du ausstrahlst.",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE",
      "author": {
        "@type": "Organization",
        "name": "Social Media Venture GmbH",
        "url": "https://persoenlichkeitstest-kostenlos.de",
        "address": { "@type": "PostalAddress", "streetAddress": "Schliemannstraße 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE" }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Was ist ein Aura Check?", "acceptedAnswer": { "@type": "Answer", "text": "Ein Aura Check analysiert deine persönliche Energie und Ausstrahlung. Basierend auf deinen Antworten zu Persönlichkeit, Verhalten und Vorlieben wird deine dominante Aura-Farbe bestimmt: Mystisch (Violett), Solar (Gold), Heilend (Grün) oder Feuer (Orange)." } },
        { "@type": "Question", "name": "Welche Aura habe ich?", "acceptedAnswer": { "@type": "Answer", "text": "Deine Aura-Farbe wird durch den kostenlosen Aura Check auf persoenlichkeitstest-kostenlos.de ermittelt. Mögliche Aura-Typen sind: Mystische Aura (Violett), Solar Aura (Gold), Heilende Aura (Grün) und Feuer Aura (Orange)." } },
        { "@type": "Question", "name": "Ist der Aura Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Aura Check auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten." } }
      ]
    }
  ]
};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=aura");
  }, []);
  return (
    <>
      <Script id="schema-aura" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaAura)}</Script>
      <Head>
        <title>Aura Check online kostenlos | Welche Energie strahlst du aus? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Aura Check und entdecke deine Aura-Farbe. Welche Energie strahlst du aus? In nur 2 Minuten. Sofortiges Ergebnis, kein Account nötig." />
        <meta name="keywords" content="aura test, aura check, welche aura habe ich, aura farbe test kostenlos, aura check online, aura test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/aura" />
        <meta property="og:title" content="Aura Check online kostenlos | Welche Energie strahlst du aus?" />
        <meta property="og:description" content="Mach den kostenlosen Aura Check und entdecke deine Aura-Farbe. Welche Energie strahlst du aus?" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/aura" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aura Check online kostenlos | Welche Energie strahlst du aus?" />
        <meta name="twitter:description" content="Entdecke deine Aura-Farbe kostenlos! In nur 2 Minuten." />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
