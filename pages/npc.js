import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaNpc = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://persoenlichkeitstest-kostenlos.de/npc", "url": "https://persoenlichkeitstest-kostenlos.de/npc", "name": "NPC Test | Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de", "description": "Mach den kostenlosen NPC Test und finde heraus ob du Main Character oder Hintergrundstatist bist. In nur 2 Minuten. Sofortiges Ergebnis, kein Account noetig.", "inLanguage": "de-DE", "breadcrumb": {"@id": "https://persoenlichkeitstest-kostenlos.de/npc#breadcrumb"}}, {"@type": "BreadcrumbList", "@id": "https://persoenlichkeitstest-kostenlos.de/npc#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/"}, {"@type": "ListItem", "position": 2, "name": "NPC Test", "item": "https://persoenlichkeitstest-kostenlos.de/npc"}]}, {"@type": "WebApplication", "name": "NPC Test", "url": "https://persoenlichkeitstest-kostenlos.de/npc", "description": "Kostenloser NPC Test - Finde heraus ob du Main Character oder Hintergrundstatist bist.", "applicationCategory": "LifestyleApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}, "inLanguage": "de-DE", "author": {"@type": "Organization", "name": "Social Media Venture GmbH", "url": "https://persoenlichkeitstest-kostenlos.de", "address": {"@type": "PostalAddress", "streetAddress": "Schliemannstrasse 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE"}}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist ein NPC Test?", "acceptedAnswer": {"@type": "Answer", "text": "Der NPC Test (Non-Player Character) prueft, ob du ein Main Character bist - also jemand der sein Leben aktiv gestaltet - oder ein NPC, der hauptsaechlich nach dem Skript anderer lebt. Der Begriff stammt aus der Gaming-Kultur."}}, {"@type": "Question", "name": "Bin ich ein NPC?", "acceptedAnswer": {"@type": "Answer", "text": "Ob du ein NPC oder Main Character bist, erfaehrst du durch 10 Fragen zu deinem Verhalten, deinen Entscheidungen und deiner Lebenseinstellung. Mach den kostenlosen NPC Test auf persoenlichkeitstest-kostenlos.de."}}, {"@type": "Question", "name": "Ist der NPC Test kostenlos?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, der NPC Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung notwendig. Sofortiges Ergebnis nach nur 2 Minuten."}}]}]};

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?test=npc");
  }, []);
  return (
    <>
      <Script id="schema-npc" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaNpc)}</Script>
      <Head>
        <title>NPC Test | Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen NPC Test und finde heraus ob du Main Character oder Hintergrundstatist bist. In nur 2 Minuten. Sofortiges Ergebnis, kein Account noetig." />
        <meta name="keywords" content="npc test, bin ich ein npc, main character test, npc test kostenlos, main character energy test, npc test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/npc" />
        <meta property="og:title" content="NPC Test | Bist du Main Character oder NPC?" />
        <meta property="og:description" content="Mach den kostenlosen NPC Test und finde heraus ob du Main Character oder Hintergrundstatist bist. In nur 2 Minuten." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/npc" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NPC Test | Bist du Main Character oder NPC?" />
        <meta name="twitter:description" content="Bist du Main Character oder NPC? Finde es kostenlos heraus!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
      </Head>
    </>
  );
}
