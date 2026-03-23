import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=rizz");
  }, []);

  return (
    <Head>
      <title>Rizz Score Test — Wie viel Charisma hast du? | findur.app</title>
      <meta name="description" content="Teste deinen Rizz Score kostenlos! Finde heraus wie viel Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://findur.app/rizz" />
      <meta property="og:title" content="Rizz Score Test — Wie viel Charisma hast du? | findur.app" />
      <meta property="og:description" content="Teste deinen Rizz Score kostenlos! Finde heraus wie viel Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten." />
      <meta property="og:url" content="https://findur.app/rizz" />
    </Head>
  );
}
