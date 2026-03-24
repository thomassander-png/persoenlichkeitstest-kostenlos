import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaToxicity = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://persoenlichkeitstest-kostenlos.de/toxicity", "url": "https://persoenlichkeitstest-kostenlos.de/toxicity", "name": "Toxicity Check | Wie toxisch bist du wirklich? | persoenlichkeitstest-kostenlos.de", "description": "Mach den kostenlosen Toxicity Check und finde heraus wie toxisch du wirklich bist. Von Wholesome bis kritisch. In nur 2 Minuten. Sofortiges Ergebnis.", "inLanguage": "de-DE", "breadcrumb": {"@id": "https://persoenlichkeitstest-kostenlos.de/toxicity#breadcrumb"}}, {"@type": "BreadcrumbList", "@id": "https://persoenlichkeitstest-kostenlos.de/toxicity#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/"}, {"@type": "ListItem", "position": 2, "name": "Toxicity Check", "item": "https://persoenlichkeitstest-kostenlos.de/toxicity"}]}, {"@type": "WebApplication", "name": "Toxicity Check", "url": "https://persoenlichkeitstest-kostenlos.de/toxicity", "description": "Kostenloser Toxicity Check - Finde heraus wie toxisch dein Verhalten wirklich ist.", "applicationCategory": "LifestyleApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}, "inLanguage": "de-DE", "author": {"@type": "Organization", "name": "Social Media Venture GmbH", "url": "https://persoenlichkeitstest-kostenlos.de", "address": {"@type": "PostalAddress", "streetAddress": "Schliemannstrasse 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE"}}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist ein Toxicity Check?", "acceptedAnswer": {"@type": "Answer", "text": "Der Toxicity Check misst, wie toxisch dein Verhalten in Beziehungen und sozialen Situationen ist. Er bewertet Verhaltensweisen wie Manipulation, Kritik, Empathie und Kommunikationsstil."}}, {"@type": "Question", "name": "Wie toxisch bin ich?", "acceptedAnswer": {"@type": "Answer", "text": "Dein Toxicity Score wird durch 10 Fragen zu deinem Verhalten gegenueber anderen Menschen ermittelt. Das Ergebnis reicht von 'Wholesome' bis 'Kritisch toxisch'. Mach den kostenlosen Test auf persoenlichkeitstest-kostenlos.de."}}, {"@type": "Question", "name": "Ist der Toxicity Test kostenlos?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, der Toxicity Check auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten."}}]}]};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=toxicity");
  }, []);
  return (
    <>
      <Script id="schema-toxicity" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaToxicity)}</Script>
      <Head>
        <title>Toxicity Check | Wie toxisch bist du wirklich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Toxicity Check und finde heraus wie toxisch du wirklich bist. Von Wholesome bis kritisch. In nur 2 Minuten. Sofortiges Ergebnis." />
        <meta name="keywords" content="toxicity test, wie toxisch bin ich, toxisch test kostenlos, toxicity check, toxizitaet test deutsch, toxisches verhalten test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <meta property="og:title" content="Toxicity Check | Wie toxisch bist du wirklich?" />
        <meta property="og:description" content="Mach den kostenlosen Toxicity Check und finde heraus wie toxisch du wirklich bist. Von Wholesome bis kritisch. In nur 2 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toxicity Check | Wie toxisch bist du wirklich?" />
        <meta name="twitter:description" content="Wie toxisch bist du wirklich? Finde es kostenlos heraus!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
