import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaRedflag = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://persoenlichkeitstest-kostenlos.de/redflag", "url": "https://persoenlichkeitstest-kostenlos.de/redflag", "name": "Red Flag Test | Wie viele Red Flags hast du? | persoenlichkeitstest-kostenlos.de", "description": "Mach den kostenlosen Red Flag Test und finde heraus wie viele Red Flags du hast. Red Flag Detector fuer Beziehungen. In nur 2 Minuten. Sofortiges Ergebnis.", "inLanguage": "de-DE", "breadcrumb": {"@id": "https://persoenlichkeitstest-kostenlos.de/redflag#breadcrumb"}}, {"@type": "BreadcrumbList", "@id": "https://persoenlichkeitstest-kostenlos.de/redflag#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/"}, {"@type": "ListItem", "position": 2, "name": "Red Flag Detector", "item": "https://persoenlichkeitstest-kostenlos.de/redflag"}]}, {"@type": "WebApplication", "name": "Red Flag Detector", "url": "https://persoenlichkeitstest-kostenlos.de/redflag", "description": "Kostenloser Red Flag Test - Finde heraus wie viele Red Flags du in Beziehungen hast.", "applicationCategory": "LifestyleApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}, "inLanguage": "de-DE", "author": {"@type": "Organization", "name": "Social Media Venture GmbH", "url": "https://persoenlichkeitstest-kostenlos.de", "address": {"@type": "PostalAddress", "streetAddress": "Schliemannstrasse 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE"}}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist ein Red Flag Test?", "acceptedAnswer": {"@type": "Answer", "text": "Der Red Flag Test analysiert dein Verhalten in Beziehungen und zeigt dir, welche potenziell problematischen Verhaltensweisen (Red Flags) du haben koenntest. Red Flags sind Warnsignale, die auf ungesunde Beziehungsmuster hinweisen."}}, {"@type": "Question", "name": "Wie viele Red Flags habe ich?", "acceptedAnswer": {"@type": "Answer", "text": "Deine Red Flags werden durch 10 Fragen zu deinem Verhalten in Beziehungen ermittelt. Das Ergebnis zeigt dir, wie viele Red Flags du hast und was das bedeutet. Mach den kostenlosen Test auf persoenlichkeitstest-kostenlos.de."}}, {"@type": "Question", "name": "Ist der Red Flag Test kostenlos?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, der Red Flag Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten."}}]}]};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=redflag");
  }, []);
  return (
    <>
      <Script id="schema-redflag" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaRedflag)}</Script>
      <Head>
        <title>Red Flag Test | Wie viele Red Flags hast du? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Red Flag Test und finde heraus wie viele Red Flags du hast. Red Flag Detector fuer Beziehungen. In nur 2 Minuten. Sofortiges Ergebnis." />
        <meta name="keywords" content="red flag test, red flag detector, wie viele red flags habe ich, red flag test kostenlos, red flags beziehung test, red flag test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <meta property="og:title" content="Red Flag Test | Wie viele Red Flags hast du?" />
        <meta property="og:description" content="Mach den kostenlosen Red Flag Test und finde heraus wie viele Red Flags du hast. Red Flag Detector fuer Beziehungen. In nur 2 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Red Flag Test | Wie viele Red Flags hast du?" />
        <meta name="twitter:description" content="Wie viele Red Flags hast du? Finde es kostenlos heraus!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
