import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Persoenlichkeit() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home with test pre-selected
    router.replace("/?test=persoenlichkeit");
  }, []);

  return (
    <Head>
      <title>Kostenloser Persönlichkeitstest — 16 Typen | persoenlichkeitstest-kostenlos.de</title>
      <meta name="description" content="Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, in nur 3 Minuten." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
      <meta property="og:title" content="Kostenloser Persönlichkeitstest — 16 Typen | persoenlichkeitstest-kostenlos.de" />
      <meta property="og:description" content="Welcher Persönlichkeitstyp bist du? Mach den kostenlosen Test und finde es in 3 Minuten heraus." />
      <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kostenloser Persönlichkeitstest — 16 Typen",
            "description": "MBTI-basierter Persönlichkeitstest auf Deutsch. Finde heraus welcher von 16 Typen du bist.",
            "url": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit",
            "isPartOf": { "@type": "WebSite", "url": "https://persoenlichkeitstest-kostenlos.de" }
          })
        }}
      />
    </Head>
  );
}
