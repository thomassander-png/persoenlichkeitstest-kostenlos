import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=brainrot");
  }, []);

  return (
    <Head>
      <title>Brainrot Score Test — Wie kaputt ist dein Gehirn? | persoenlichkeitstest-kostenlos.de</title>
      <meta name="description" content="Teste deinen Brainrot Score! Wie sehr hat TikTok und Social Media dein Gehirn beeinflusst? Kostenloser Test auf Deutsch." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/brainrot" />
      <meta property="og:title" content="Brainrot Score Test — Wie kaputt ist dein Gehirn? | persoenlichkeitstest-kostenlos.de" />
      <meta property="og:description" content="Teste deinen Brainrot Score! Wie sehr hat TikTok und Social Media dein Gehirn beeinflusst? Kostenloser Test auf Deutsch." />
      <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/brainrot" />
    </Head>
  );
}
