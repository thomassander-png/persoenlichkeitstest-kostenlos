import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemadark = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/dark",
      "url": "https://persoenlichkeitstest-kostenlos.de/dark",
      "name": "Dark Triad Test kostenlos — Narzissmus & Psychopathie Test | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Dark Triad Test! Teste dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Dark Triad Test Deutsch mit sofortigem Ergebnis. Jetzt starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/dark#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/dark#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Dark Triad Test", "item": "https://persoenlichkeitstest-kostenlos.de/dark" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Dark Triad Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/dark",
      "description": "Mach den kostenlosen Dark Triad Test! Teste dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Dark Triad Test Deutsch mit sofortigem Ergebnis. Jetzt starten!",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE",
      "author": {
        "@type": "Organization",
        "name": "Social Media Venture GmbH",
        "url": "https://persoenlichkeitstest-kostenlos.de",
        "address": { "@type": "PostalAddress", "streetAddress": "Schliemannstraße 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE" }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Was ist die Dark Triad?", "acceptedAnswer": { "@type": "Answer", "text": "Die Dark Triad ist ein psychologisches Konzept, das drei Persönlichkeitseigenschaften beschreibt: Narzissmus (übertriebenes Selbstbewusstsein), Machiavellismus (manipulatives Denken) und Psychopathie (mangelnde Empathie). Ein gewisses Maß ist normal." } },
        { "@type": "Question", "name": "Bin ich ein Narzisst?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Dark Triad Test! Du beantwortest Fragen zu deinem Verhalten und erhältst sofort dein Niveau in allen drei Dark Triad-Dimensionen." } },
        { "@type": "Question", "name": "Ist ein hoher Dark Triad Score schlecht?", "acceptedAnswer": { "@type": "Answer", "text": "Nicht unbedingt. Ein moderates Niveau an Dark Triad-Eigenschaften korreliert oft mit Führungsqualitäten und Erfolg. Erst extreme Ausprägungen werden problematisch. Der Test dient der Selbstreflexion." } },
        { "@type": "Question", "name": "Ist der Dark Triad Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Dark Triad Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } },
        { "@type": "Question", "name": "Wie unterscheidet sich Narzissmus von Psychopathie?", "acceptedAnswer": { "@type": "Answer", "text": "Narzissmus ist durch übertriebenes Selbstbewusstsein und Bewunderungsbedürfnis gekennzeichnet. Psychopathie hingegen durch mangelnde Empathie, Impulsivität und Rücksichtslosigkeit. Beide können Teil der Dark Triad sein, sind aber unterschiedliche Eigenschaften." } }
      ]
    }
  ]
};


const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #060A14 0%, #0D1526 50%, #060A14 100%)',
  color: '#fff',
  fontFamily: "'Inter', -apple-system, sans-serif",
  padding: '0',
};
const containerStyle = {
  maxWidth: '680px',
  margin: '0 auto',
  padding: '24px 16px 48px',
};
const h1Style = {
  fontSize: '26px',
  fontWeight: '900',
  color: '#fff',
  marginBottom: '8px',
  lineHeight: '1.3',
};
const subtitleStyle = {
  fontSize: '15px',
  color: '#7A84A8',
  marginBottom: '24px',
  lineHeight: '1.6',
};
const ctaBtn = {
  display: 'block',
  width: '100%',
  padding: '16px',
  background: 'linear-gradient(135deg, #00E5FF, #7B2FFF)',
  color: '#fff',
  fontWeight: '800',
  fontSize: '17px',
  border: 'none',
  borderRadius: '14px',
  cursor: 'pointer',
  textAlign: 'center',
  marginBottom: '32px',
  textDecoration: 'none',
};
const sectionStyle = {
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '16px',
  padding: '20px',
  marginBottom: '20px',
  border: '1px solid rgba(255,255,255,0.08)',
};
const h2Style = {
  fontSize: '18px',
  fontWeight: '800',
  color: '#fff',
  marginBottom: '12px',
  marginTop: '0',
};
const pStyle = {
  fontSize: '14px',
  color: '#7A84A8',
  lineHeight: '1.8',
  marginBottom: '12px',
};
const faqItemStyle = {
  background: 'rgba(0,229,255,0.05)',
  borderRadius: '10px',
  padding: '14px',
  marginBottom: '10px',
  border: '1px solid rgba(0,229,255,0.1)',
};
const faqQStyle = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#00E5FF',
  marginBottom: '6px',
};
const faqAStyle = {
  fontSize: '13px',
  color: '#7A84A8',
  lineHeight: '1.7',
};
const linkStyle = {
  color: '#00E5FF',
  textDecoration: 'none',
  fontWeight: '600',
};
const relatedStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};
const relatedItemStyle = {
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '10px',
  padding: '12px 16px',
  border: '1px solid rgba(255,255,255,0.08)',
  textDecoration: 'none',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600',
};


export default function Page() {
  const router = useRouter();
  
  const handleStart = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "test_start", { test_name: "dark", source: "subpage" });
    }
    router.push("/?test=dark");
  };

  return (
    <>
      <Script id="schema-dark" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemadark)}</Script>
      <Head>
        <title>Dark Triad Test kostenlos — Narzissmus & Psychopathie Test | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Dark Triad Test! Teste dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Dark Triad Test Deutsch mit sofortigem Ergebnis. Jetzt starten!" />
        <meta name="keywords" content="dark triad test, dark triad test deutsch, narzissmus test kostenlos, psychopathie test, machiavellismus test, dunkle triade test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/dark" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/dark" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/dark" />
        <meta property="og:title" content="Dark Triad Test kostenlos — Narzissmus & Psychopathie Test | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Dark Triad Test! Teste dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Dark Triad Test Deutsch mit sofortigem Ergebnis. Jetzt starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/dark" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Dark Triad Test kostenlos — Narzissmus & Psychopathie Test | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Dark Triad Test! Teste dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Dark Triad Test Deutsch mit sofortigem Ergebnis. Jetzt starten!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Dark Triad Test — Narzissmus, Psychopathie & Machiavellismus</h1>
          <p style={subtitleStyle}>Der kostenlose Dark Triad Test misst dein Niveau an Narzissmus, Machiavellismus und Psychopathie. Auf Deutsch, sofortiges Ergebnis, kein Account nötig.</p>
          <button onClick={handleStart} style={ctaBtn}>Dark Triad Test starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist die Dark Triad?</h2>
          <p style={pStyle}>Die Dark Triad ist ein psychologisches Konzept, das drei miteinander verbundene, aber unterschiedliche Persönlichkeitseigenschaften beschreibt: Narzissmus, Machiavellismus und Psychopathie. Der Begriff wurde 2002 von den Psychologen Delroy Paulhus und Kevin Williams geprägt und hat seitdem in der Persönlichkeitspsychologie große Aufmerksamkeit erhalten.</p>
          <p style={pStyle}>Narzissmus bezeichnet übertriebenes Selbstbewusstsein, ein starkes Bedürfnis nach Bewunderung und mangelnde Empathie für andere. Machiavellismus beschreibt eine manipulative, berechnende Persönlichkeit, die andere Menschen als Mittel zum Zweck betrachtet und langfristig strategisch denkt. Psychopathie ist gekennzeichnet durch mangelnde Empathie, Impulsivität, Rücksichtslosigkeit und oberflächlichen Charme.</p>
          <p style={pStyle}>Der kostenlose Dark Triad Test auf persoenlichkeitstest-kostenlos.de misst dein Niveau in allen drei Dimensionen und zeigt dir, wie "dunkel" deine Persönlichkeit wirklich ist. Wichtig: Ein gewisses Maß an Dark Triad-Eigenschaften ist normal und kann sogar vorteilhaft sein — erst extreme Ausprägungen werden problematisch.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Narzissmus, Machiavellismus und Psychopathie erklärt</h2>
          <p style={pStyle}>Narzissmus existiert auf einem Spektrum. Gesunder Narzissmus — also ein positives Selbstbild und Selbstbewusstsein — ist wichtig für psychische Gesundheit und Erfolg. Problematischer Narzissmus hingegen ist durch Grandiosität, Empathiemangel und das Ausnutzen anderer gekennzeichnet. Studien zeigen, dass ein moderates Maß an Narzissmus mit Führungsqualitäten und Karriereerfolg korreliert.</p>
          <p style={pStyle}>Machiavellismus beschreibt eine strategische, manipulative Denkweise, benannt nach Niccolò Machiavelli und seinem Werk "Der Fürst". Menschen mit hohem Machiavellismus sind oft sehr erfolgreich in Politik und Wirtschaft, da sie langfristig denken und strategisch handeln. Die Kehrseite ist, dass sie Beziehungen oft instrumentalisieren.</p>
          <p style={pStyle}>Psychopathie ist die "dunkelste" der drei Eigenschaften und ist durch mangelnde Empathie, Impulsivität und Rücksichtslosigkeit gekennzeichnet. Subklinische Psychopathie — also ein erhöhtes Niveau ohne klinische Diagnose — kommt häufiger vor als man denkt und findet sich überproportional häufig in bestimmten Berufsgruppen wie Chirurgen, Anwälten und CEOs.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was sagt der Dark Triad Test über mich aus?</h2>
          <p style={pStyle}>Der Dark Triad Test gibt dir Einblicke in die "dunkleren" Aspekte deiner Persönlichkeit. Ein hohes Ergebnis in einer oder mehreren Dimensionen bedeutet nicht, dass du ein schlechter Mensch bist — es zeigt lediglich, dass du bestimmte Persönlichkeitseigenschaften stärker ausgeprägt hast als andere.</p>
          <p style={pStyle}>Tatsächlich haben viele erfolgreiche Menschen erhöhte Dark Triad-Werte. Selbstbewusstsein, strategisches Denken und die Fähigkeit, in schwierigen Situationen kühl zu bleiben, können in vielen Lebensbereichen vorteilhaft sein. Entscheidend ist, wie du diese Eigenschaften einsetzt — zum Wohl anderer oder auf deren Kosten.</p>
          <p style={pStyle}>Mach den kostenlosen Dark Triad Test jetzt auf persoenlichkeitstest-kostenlos.de und erfahre dein persönliches Niveau in Narzissmus, Machiavellismus und Psychopathie. Das Ergebnis wird dich vielleicht überraschen.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was ist die Dark Triad?</div>
            <div style={faqAStyle}>Die Dark Triad ist ein psychologisches Konzept, das drei Persönlichkeitseigenschaften beschreibt: Narzissmus (übertriebenes Selbstbewusstsein), Machiavellismus (manipulatives Denken) und Psychopathie (mangelnde Empathie). Ein gewisses Maß ist normal.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Bin ich ein Narzisst?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Dark Triad Test! Du beantwortest Fragen zu deinem Verhalten und erhältst sofort dein Niveau in allen drei Dark Triad-Dimensionen.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist ein hoher Dark Triad Score schlecht?</div>
            <div style={faqAStyle}>Nicht unbedingt. Ein moderates Niveau an Dark Triad-Eigenschaften korreliert oft mit Führungsqualitäten und Erfolg. Erst extreme Ausprägungen werden problematisch. Der Test dient der Selbstreflexion.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Dark Triad Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Dark Triad Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie unterscheidet sich Narzissmus von Psychopathie?</div>
            <div style={faqAStyle}>Narzissmus ist durch übertriebenes Selbstbewusstsein und Bewunderungsbedürfnis gekennzeichnet. Psychopathie hingegen durch mangelnde Empathie, Impulsivität und Rücksichtslosigkeit. Beide können Teil der Dark Triad sein, sind aber unterschiedliche Eigenschaften.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/toxicity" style={relatedItemStyle}>☣️ Toxicity Test — Wie toxisch bist du?</a>
          <a href="/redflag" style={relatedItemStyle}>🚩 Red Flag Test — Wie viele Red Flags hast du?</a>
          <a href="/persoenlichkeit" style={relatedItemStyle}>🧠 Persönlichkeitstest — 16 Typen MBTI Test</a>
            </div>
          </div>
          <div style={{ ...sectionStyle, textAlign: "center" }}>
            <p style={{ ...pStyle, fontSize: "12px" }}>
              <a href="/" style={linkStyle}>← Alle Tests auf persoenlichkeitstest-kostenlos.de</a>
            </p>
            <p style={{ ...pStyle, fontSize: "11px" }}>
              © 2026 Social Media Venture GmbH · <a href="/impressum" style={linkStyle}>Impressum</a> · <a href="/datenschutz" style={linkStyle}>Datenschutz</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
