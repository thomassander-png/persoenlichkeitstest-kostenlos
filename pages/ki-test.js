import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=persoenlichkeit");
  }, []);

  return (
    <Head>
      <title>KI Persönlichkeitstest — Kostenlos auf Deutsch | findur.app</title>
      <meta name="description" content="Der KI-gestützte Persönlichkeitstest auf findur.app. Finde heraus welcher Typ du wirklich bist — kostenlos, auf Deutsch, in 3 Minuten." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://findur.app/ki-test" />
      <meta property="og:title" content="KI Persönlichkeitstest — Kostenlos auf Deutsch | findur.app" />
      <meta property="og:description" content="Der KI-gestützte Persönlichkeitstest auf findur.app. Finde heraus welcher Typ du wirklich bist — kostenlos, auf Deutsch, in 3 Minuten." />
      <meta property="og:url" content="https://findur.app/ki-test" />
    </Head>
  );
}
