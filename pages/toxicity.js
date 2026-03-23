import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=toxicity");
  }, []);

  return (
    <Head>
      <title>Toxicity Check — Wie toxisch bist du wirklich? | findur.app</title>
      <meta name="description" content="Mach den kostenlosen Toxicity Check und finde heraus wie toxisch dein Verhalten wirklich ist. Ehrlich, anonym, kostenlos." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://findur.app/toxicity" />
      <meta property="og:title" content="Toxicity Check — Wie toxisch bist du wirklich? | findur.app" />
      <meta property="og:description" content="Mach den kostenlosen Toxicity Check und finde heraus wie toxisch dein Verhalten wirklich ist. Ehrlich, anonym, kostenlos." />
      <meta property="og:url" content="https://findur.app/toxicity" />
    </Head>
  );
}
