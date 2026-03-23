import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=redflag");
  }, []);

  return (
    <Head>
      <title>Red Flag Detector — Wie viele Red Flags hast du? | findur.app</title>
      <meta name="description" content="Teste dich mit dem Red Flag Detector! Wie viele Red Flags hast du in Beziehungen? Kostenloser Test auf Deutsch." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://findur.app/redflag" />
      <meta property="og:title" content="Red Flag Detector — Wie viele Red Flags hast du? | findur.app" />
      <meta property="og:description" content="Teste dich mit dem Red Flag Detector! Wie viele Red Flags hast du in Beziehungen? Kostenloser Test auf Deutsch." />
      <meta property="og:url" content="https://findur.app/redflag" />
    </Head>
  );
}
