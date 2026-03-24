import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=aura");
  }, []);

  return (
    <Head>
      <title>Aura Check — Welche Energie strahlst du aus? | persoenlichkeitstest-kostenlos.de</title>
      <meta name="description" content="Mach den kostenlosen Aura Check und finde heraus welche Energie du ausstrahlst. Kostenlos, auf Deutsch, in 2 Minuten." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/aura" />
      <meta property="og:title" content="Aura Check — Welche Energie strahlst du aus? | persoenlichkeitstest-kostenlos.de" />
      <meta property="og:description" content="Mach den kostenlosen Aura Check und finde heraus welche Energie du ausstrahlst. Kostenlos, auf Deutsch, in 2 Minuten." />
      <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/aura" />
    </Head>
  );
}
