import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schematoxicity = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/toxicity",
      "url": "https://persoenlichkeitstest-kostenlos.de/toxicity",
      "name": "Toxicity Test kostenlos — Wie toxisch bin ich? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Toxicity Test und finde heraus wie toxisch du wirklich bist! Wie toxisch bin ich Test mit sofortigem Ergebnis. Toxisch Test kostenlos. Jetzt starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/toxicity#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/toxicity#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Toxicity Check", "item": "https://persoenlichkeitstest-kostenlos.de/toxicity" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Toxicity Check",
      "url": "https://persoenlichkeitstest-kostenlos.de/toxicity",
      "description": "Mach den kostenlosen Toxicity Test und finde heraus wie toxisch du wirklich bist! Wie toxisch bin ich Test mit sofortigem Ergebnis. Toxisch Test kostenlos. Jetzt starten!",
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
        { "@type": "Question", "name": "Was ist toxisches Verhalten?", "acceptedAnswer": { "@type": "Answer", "text": "Toxisches Verhalten bezeichnet Verhaltensweisen, die anderen Menschen schaden und Beziehungen belasten — wie Manipulation, übermäßige Kritik, Eifersucht oder Kontrollverhalten. Jeder Mensch hat manchmal toxische Tendenzen." } },
        { "@type": "Question", "name": "Wie toxisch bin ich?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Toxicity Test! Du beantwortest 10 Fragen zu deinem Verhalten in Beziehungen und erhältst sofort dein Ergebnis — von 'Wholesome' bis 'Kritisch toxisch'." } },
        { "@type": "Question", "name": "Kann man toxisches Verhalten ändern?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Der erste Schritt ist Selbstbewusstsein — zu erkennen, welche Verhaltensweisen toxisch sind. Dann kann man gezielt daran arbeiten, durch aktives Zuhören, Verantwortungsübernahme und ehrliche Kommunikation." } },
        { "@type": "Question", "name": "Ist der Toxicity Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Toxicity Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "toxicity", source: "subpage" });
    }
    router.push("/?test=toxicity");
  };

  return (
    <>
      <Script id="schema-toxicity" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schematoxicity)}</Script>
      <Head>
        <title>Toxicity Test kostenlos — Wie toxisch bin ich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Toxicity Test und finde heraus wie toxisch du wirklich bist! Wie toxisch bin ich Test mit sofortigem Ergebnis. Toxisch Test kostenlos. Jetzt starten!" />
        <meta name="keywords" content="toxicity test, wie toxisch bin ich, toxisch test kostenlos, toxizität test, toxisches verhalten test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <meta property="og:title" content="Toxicity Test kostenlos — Wie toxisch bin ich? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Toxicity Test und finde heraus wie toxisch du wirklich bist! Wie toxisch bin ich Test mit sofortigem Ergebnis. Toxisch Test kostenlos. Jetzt starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/toxicity" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-toxicity.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Toxicity Test kostenlos — Wie toxisch bin ich? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Toxicity Test und finde heraus wie toxisch du wirklich bist! Wie toxisch bin ich Test mit sofortigem Ergebnis. Toxisch Test kostenlos. Jetzt starten!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-toxicity.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Toxicity Test — Wie toxisch bist du wirklich?</h1>
          <p style={subtitleStyle}>Finde heraus, wie toxisch dein Verhalten wirklich ist. Der kostenlose Toxicity Check analysiert dein Verhalten in Beziehungen und sozialen Situationen. Sofortiges Ergebnis.</p>
          <button onClick={handleStart} style={ctaBtn}>Toxicity Check starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist der Toxicity Test?</h2>
          <p style={pStyle}>Der Toxicity Test ist ein Selbstreflexionstest, der dir zeigt, wie toxisch dein Verhalten in Beziehungen, Freundschaften und sozialen Situationen ist. Toxisches Verhalten bezeichnet Verhaltensweisen, die anderen Menschen schaden, Beziehungen belasten und ein negatives soziales Umfeld schaffen. Dazu gehören Manipulation, übermäßige Kritik, Eifersucht, Kontrollverhalten und emotionale Unreife.</p>
          <p style={pStyle}>Der kostenlose Toxicity Check auf persoenlichkeitstest-kostenlos.de analysiert dein Verhalten anhand von 10 Fragen zu typischen Situationen in Beziehungen und Freundschaften. Das Ergebnis zeigt dir, ob du eher "Wholesome" (positiv und unterstützend), "Neutral", "Leicht toxisch" oder "Kritisch toxisch" bist.</p>
          <p style={pStyle}>Wichtig: Jeder Mensch hat manchmal toxische Verhaltensweisen — das ist menschlich. Der Test soll dir helfen, diese zu erkennen und bewusst daran zu arbeiten, nicht um dich zu verurteilen.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Zeichen von toxischem Verhalten</h2>
          <p style={pStyle}>Toxisches Verhalten zeigt sich in verschiedenen Formen. Manipulation ist eine der häufigsten: Wenn du andere Menschen durch Schuldgefühle, Lügen oder emotionale Erpressung dazu bringst, das zu tun, was du willst, ist das toxisch. Auch übermäßige Kritik und das ständige Herabsetzen anderer sind Zeichen von toxischem Verhalten.</p>
          <p style={pStyle}>Weitere Zeichen sind: Eifersucht und Kontrollverhalten in Beziehungen, die Unfähigkeit, Verantwortung für eigene Fehler zu übernehmen, das Verbreiten von Gerüchten oder das Ausnutzen von Vertrauen. Auch passiv-aggressives Verhalten — also indirekter Ausdruck von Ärger oder Unzufriedenheit — ist eine Form von Toxizität.</p>
          <p style={pStyle}>Der kostenlose Toxicity Test auf persoenlichkeitstest-kostenlos.de hilft dir, diese Muster in deinem eigenen Verhalten zu erkennen. Das ist der erste Schritt zur Veränderung.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Wie kann man toxisches Verhalten reduzieren?</h2>
          <p style={pStyle}>Toxisches Verhalten zu reduzieren beginnt mit Selbstbewusstsein — und genau dabei hilft unser kostenloser Toxicity Test. Wenn du erkennst, welche deiner Verhaltensweisen andere Menschen belasten, kannst du gezielt daran arbeiten.</p>
          <p style={pStyle}>Praktische Schritte zur Reduzierung von Toxizität: Übe aktives Zuhören, ohne sofort zu urteilen oder zu kritisieren. Übernimm Verantwortung für deine Fehler, anstatt andere zu beschuldigen. Kommuniziere deine Bedürfnisse direkt und ehrlich, anstatt Manipulation einzusetzen. Arbeite an deiner emotionalen Intelligenz und lerne, deine eigenen Emotionen besser zu regulieren.</p>
          <p style={pStyle}>Mach den kostenlosen Toxicity Test jetzt auf persoenlichkeitstest-kostenlos.de und erfahre, wo du auf dem Toxizitäts-Spektrum stehst. Das Ergebnis ist der erste Schritt zu gesünderen Beziehungen.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was ist toxisches Verhalten?</div>
            <div style={faqAStyle}>Toxisches Verhalten bezeichnet Verhaltensweisen, die anderen Menschen schaden und Beziehungen belasten — wie Manipulation, übermäßige Kritik, Eifersucht oder Kontrollverhalten. Jeder Mensch hat manchmal toxische Tendenzen.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie toxisch bin ich?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Toxicity Test! Du beantwortest 10 Fragen zu deinem Verhalten in Beziehungen und erhältst sofort dein Ergebnis — von 'Wholesome' bis 'Kritisch toxisch'.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Kann man toxisches Verhalten ändern?</div>
            <div style={faqAStyle}>Ja! Der erste Schritt ist Selbstbewusstsein — zu erkennen, welche Verhaltensweisen toxisch sind. Dann kann man gezielt daran arbeiten, durch aktives Zuhören, Verantwortungsübernahme und ehrliche Kommunikation.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Toxicity Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Toxicity Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/redflag" style={relatedItemStyle}>🚩 Red Flag Test — Wie viele Red Flags hast du?</a>
          <a href="/dark" style={relatedItemStyle}>🌑 Dark Triad Test — Narzissmus & Psychopathie</a>
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
