import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaRizz = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "url": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "name": "Rizz Score Test kostenlos | Wie viel Charisma hast du?",
      "description": "Teste deinen Rizz Score kostenlos! Finde heraus wie viel Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten. KI-analysiert.",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/rizz#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/rizz#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Rizz Score Test", "item": "https://persoenlichkeitstest-kostenlos.de/rizz" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Rizz Score Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "description": "Kostenloser Rizz Score Test — Messe dein Charisma und deine Anziehungskraft in nur 2 Minuten.",
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
        { "@type": "Question", "name": "Was ist ein Rizz Score Test?", "acceptedAnswer": { "@type": "Answer", "text": "Der Rizz Score Test misst dein natürliches Charisma und deine Fähigkeit, andere Menschen anzuziehen und zu begeistern. 'Rizz' ist ein Slang-Begriff für Charisma und Anziehungskraft, der durch Social Media populär wurde." } },
        { "@type": "Question", "name": "Wie viel Rizz habe ich?", "acceptedAnswer": { "@type": "Answer", "text": "Dein Rizz Score wird durch 10 Fragen zu deinem sozialen Verhalten, Selbstbewusstsein und Charisma ermittelt. Das Ergebnis reicht von 'Kein Rizz' bis 'Unreal Rizz'. Mach den kostenlosen Test auf persoenlichkeitstest-kostenlos.de." } },
        { "@type": "Question", "name": "Ist der Rizz Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Rizz Score Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten." } }
      ]
    }
  ]
};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=rizz");
  }, []);
  return (
    <>
      <Script id="schema-rizz" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaRizz)}</Script>
      <Head>
        <title>Rizz Score Test kostenlos | Wie viel Charisma hast du? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Teste deinen Rizz Score kostenlos! Finde heraus wie viel Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten. Sofortiges Ergebnis, kein Account nötig." />
        <meta name="keywords" content="rizz test, rizz score, rizz test kostenlos, wie viel rizz habe ich, charisma test, rizz score test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <meta property="og:title" content="Rizz Score Test kostenlos | Wie viel Charisma hast du?" />
        <meta property="og:description" content="Teste deinen Rizz Score kostenlos! Finde heraus wie viel Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rizz Score Test kostenlos | Wie viel Charisma hast du?" />
        <meta name="twitter:description" content="Teste deinen Rizz Score kostenlos! In nur 2 Minuten." />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
