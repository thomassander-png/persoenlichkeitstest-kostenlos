import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaDark = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://persoenlichkeitstest-kostenlos.de/dark", "url": "https://persoenlichkeitstest-kostenlos.de/dark", "name": "Dark Triad Test kostenlos | Narzissmus Psychopathie Machiavellismus | persoenlichkeitstest-kostenlos.de", "description": "Mach den kostenlosen Dark Triad Test. Messe dein Niveau an Narzissmus, Machiavellismus und Psychopathie. In nur 3 Minuten. Sofortiges Ergebnis, kein Account noetig.", "inLanguage": "de-DE", "breadcrumb": {"@id": "https://persoenlichkeitstest-kostenlos.de/dark#breadcrumb"}}, {"@type": "BreadcrumbList", "@id": "https://persoenlichkeitstest-kostenlos.de/dark#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/"}, {"@type": "ListItem", "position": 2, "name": "Dark Triad Test", "item": "https://persoenlichkeitstest-kostenlos.de/dark"}]}, {"@type": "WebApplication", "name": "Dark Triad Test", "url": "https://persoenlichkeitstest-kostenlos.de/dark", "description": "Kostenloser Dark Triad Test - Messe dein Niveau an Narzissmus, Machiavellismus und Psychopathie.", "applicationCategory": "LifestyleApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}, "inLanguage": "de-DE", "author": {"@type": "Organization", "name": "Social Media Venture GmbH", "url": "https://persoenlichkeitstest-kostenlos.de", "address": {"@type": "PostalAddress", "streetAddress": "Schliemannstrasse 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE"}}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist der Dark Triad Test?", "acceptedAnswer": {"@type": "Answer", "text": "Der Dark Triad Test misst drei Persoenlichkeitsmerkmale: Narzissmus, Machiavellismus und subklinische Psychopathie. Diese Eigenschaften kommen in unterschiedlichem Ausmass bei fast allen Menschen vor."}}, {"@type": "Question", "name": "Ist der Dark Triad Test auf Deutsch kostenlos?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, der Dark Triad Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos und auf Deutsch verfuegbar. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 3 Minuten."}}, {"@type": "Question", "name": "Was bedeutet ein hoher Narzissmus-Score?", "acceptedAnswer": {"@type": "Answer", "text": "Ein hoher Narzissmus-Score deutet auf ein stark ausgepraegtes Selbstbewusstsein und Bewunderungsbeduerfnis hin. Der Test dient zur Selbstreflexion, nicht zur klinischen Diagnose."}}]}]};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=dark");
  }, []);
  return (
    <>
      <Script id="schema-dark" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaDark)}</Script>
      <Head>
        <title>Dark Triad Test kostenlos | Narzissmus Psychopathie Machiavellismus | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Dark Triad Test. Messe dein Niveau an Narzissmus, Machiavellismus und Psychopathie. In nur 3 Minuten. Sofortiges Ergebnis, kein Account noetig." />
        <meta name="keywords" content="dark triad test, dark triad test deutsch, narzissmus test kostenlos, machiavellismus test, psychopathie test, dark triad test online" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/dark" />
        <meta property="og:title" content="Dark Triad Test kostenlos | Narzissmus Psychopathie Machiavellismus" />
        <meta property="og:description" content="Mach den kostenlosen Dark Triad Test. Messe dein Niveau an Narzissmus, Machiavellismus und Psychopathie. In nur 3 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/dark" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dark Triad Test kostenlos | Narzissmus Psychopathie Machiavellismus" />
        <meta name="twitter:description" content="Messe dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Kostenlos!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
