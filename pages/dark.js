import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=dark");
  }, []);

  return (
    <Head>
      <title>Dark Triad Test — Narzissmus, Machiavellismus, Psychopathie | persoenlichkeitstest-kostenlos.de</title>
      <meta name="description" content="Mach den kostenlosen Dark Triad Test und finde heraus wie hoch deine Werte in Narzissmus, Machiavellismus und Psychopathie sind." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/dark" />
      <meta property="og:title" content="Dark Triad Test — Narzissmus, Machiavellismus, Psychopathie | persoenlichkeitstest-kostenlos.de" />
      <meta property="og:description" content="Mach den kostenlosen Dark Triad Test und finde heraus wie hoch deine Werte in Narzissmus, Machiavellismus und Psychopathie sind." />
      <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/dark" />
    </Head>
  );
}
