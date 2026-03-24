import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?test=npc");
  }, []);

  return (
    <Head>
      <title>NPC Test — Main Character oder Hintergrundstatist? | persoenlichkeitstest-kostenlos.de</title>
      <meta name="description" content="Bist du ein Main Character oder ein NPC? Mach den kostenlosen NPC-Test und finde es heraus!" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/npc" />
      <meta property="og:title" content="NPC Test — Main Character oder Hintergrundstatist? | persoenlichkeitstest-kostenlos.de" />
      <meta property="og:description" content="Bist du ein Main Character oder ein NPC? Mach den kostenlosen NPC-Test und finde es heraus!" />
      <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/npc" />
    </Head>
  );
}
