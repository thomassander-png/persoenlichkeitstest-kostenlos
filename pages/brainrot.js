import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaBrainrot = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "url": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "name": "Brainrot Score Test | Wie kaputt ist dein Gehirn?",
      "description": "Teste deinen Brainrot Score kostenlos! Wie sehr hat TikTok dein Gehirn beeinflusst? In nur 2 Minuten. KI-analysiert.",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Brainrot Score Test", "item": "https://persoenlichkeitstest-kostenlos.de/brainrot" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Brainrot Score Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "description": "Kostenloser Brainrot Score Test — Messe wie stark TikTok und Social Media dein Denken beeinflusst haben.",
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
        { "@type": "Question", "name": "Was ist Brainrot?", "acceptedAnswer": { "@type": "Answer", "text": "Brainrot beschreibt den Effekt von übermäßigem Social-Media-Konsum auf die Aufmerksamkeitsspanne und das Denken. Symptome sind verkürzte Konzentrationsfähigkeit, Denken in Memes und Schwierigkeiten, lange Texte zu lesen." } },
        { "@type": "Question", "name": "Wie brainrot bin ich?", "acceptedAnswer": { "@type": "Answer", "text": "Dein Brainrot Score wird durch 10 Fragen zu deinem Social-Media-Konsum, Aufmerksamkeitsspanne und Denkmustern ermittelt. Mach den kostenlosen Test auf persoenlichkeitstest-kostenlos.de." } },
        { "@type": "Question", "name": "Ist der Brainrot Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Brainrot Score Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten." } }
      ]
    }
  ]
};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=brainrot");
  }, []);
  return (
    <>
      <Script id="schema-brainrot" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaBrainrot)}</Script>
      <Head>
        <title>Brainrot Score Test | Wie kaputt ist dein Gehirn? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Teste deinen Brainrot Score kostenlos! Wie sehr hat TikTok dein Gehirn beeinflusst? In nur 2 Minuten. Sofortiges Ergebnis, kein Account nötig." />
        <meta name="keywords" content="brainrot test, brainrot score, wie brainrot bin ich, brainrot test kostenlos, tiktok brainrot test, brainrot test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <meta property="og:title" content="Brainrot Score Test | Wie kaputt ist dein Gehirn?" />
        <meta property="og:description" content="Teste deinen Brainrot Score kostenlos! Wie sehr hat TikTok dein Gehirn beeinflusst? In nur 2 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brainrot Score Test | Wie kaputt ist dein Gehirn?" />
        <meta name="twitter:description" content="Teste deinen Brainrot Score kostenlos! In nur 2 Minuten." />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
