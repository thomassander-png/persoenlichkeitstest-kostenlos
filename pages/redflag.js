import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaredflag = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/redflag",
      "url": "https://persoenlichkeitstest-kostenlos.de/redflag",
      "name": "Red Flag Test kostenlos — Wie viele Red Flags habe ich? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Red Flag Test! Red Flag Detector für Beziehungen: Wie viele Red Flags hast du? Sofortiges Ergebnis, kein Account nötig. Jetzt kostenlos starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/redflag#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/redflag#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Red Flag Test", "item": "https://persoenlichkeitstest-kostenlos.de/redflag" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Red Flag Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/redflag",
      "description": "Mach den kostenlosen Red Flag Test! Red Flag Detector für Beziehungen: Wie viele Red Flags hast du? Sofortiges Ergebnis, kein Account nötig. Jetzt kostenlos starten!",
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
        { "@type": "Question", "name": "Was sind Red Flags?", "acceptedAnswer": { "@type": "Answer", "text": "Red Flags sind Warnsignale in Beziehungen, die auf potenziell problematisches Verhalten hinweisen — wie Eifersucht, Kontrollverhalten, Manipulation oder fehlende Empathie. Sie unterscheiden sich von normalen Beziehungsproblemen durch ihre Wiederholung und Tiefe." } },
        { "@type": "Question", "name": "Wie viele Red Flags habe ich?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Red Flag Test! Du beantwortest 10 Fragen zu deinem Verhalten in Beziehungen und erhältst sofort dein Ergebnis." } },
        { "@type": "Question", "name": "Kann man Red Flags ablegen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Der erste Schritt ist, sie zu erkennen — genau dabei hilft unser Test. Viele Red Flags entstehen aus Unsicherheiten und können durch Selbstreflexion, offene Kommunikation und ggf. professionelle Unterstützung reduziert werden." } },
        { "@type": "Question", "name": "Ist der Red Flag Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Red Flag Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "redflag", source: "subpage" });
    }
    router.push("/?test=redflag");
  };

  return (
    <>
      <Script id="schema-redflag" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaredflag)}</Script>
      <Head>
        <title>Red Flag Test kostenlos — Wie viele Red Flags habe ich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Red Flag Test! Red Flag Detector für Beziehungen: Wie viele Red Flags hast du? Sofortiges Ergebnis, kein Account nötig. Jetzt kostenlos starten!" />
        <meta name="keywords" content="red flag test, red flag detector, wie viele red flags habe ich, red flags test kostenlos, red flags beziehung test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <meta property="og:title" content="Red Flag Test kostenlos — Wie viele Red Flags habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Red Flag Test! Red Flag Detector für Beziehungen: Wie viele Red Flags hast du? Sofortiges Ergebnis, kein Account nötig. Jetzt kostenlos starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/redflag" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-redflag.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Red Flag Test kostenlos — Wie viele Red Flags habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Red Flag Test! Red Flag Detector für Beziehungen: Wie viele Red Flags hast du? Sofortiges Ergebnis, kein Account nötig. Jetzt kostenlos starten!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-redflag.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Red Flag Test — Wie viele Red Flags hast du?</h1>
          <p style={subtitleStyle}>Der kostenlose Red Flag Detector analysiert dein Verhalten in Beziehungen. Wie viele Red Flags hast du? Sofortiges Ergebnis in nur 2 Minuten — kein Account nötig.</p>
          <button onClick={handleStart} style={ctaBtn}>Red Flag Detector starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was sind Red Flags in Beziehungen?</h2>
          <p style={pStyle}>Red Flags (rote Flaggen) sind Warnsignale in Beziehungen und sozialen Interaktionen, die auf potenziell problematisches oder schädliches Verhalten hinweisen. Der Begriff stammt ursprünglich aus dem Sport, wo eine rote Flagge ein Stoppsignal ist, und wurde auf Beziehungen übertragen: Eine Red Flag ist ein Zeichen, das signalisiert, dass etwas nicht stimmt.</p>
          <p style={pStyle}>Typische Red Flags in Beziehungen sind: übermäßige Eifersucht und Kontrollverhalten, mangelnde Kommunikation oder das Vermeiden von wichtigen Gesprächen, emotionale Manipulation und Gaslighting, fehlende Empathie für den Partner, Unzuverlässigkeit und gebrochene Versprechen sowie das Herabsetzen des Partners vor anderen.</p>
          <p style={pStyle}>Der kostenlose Red Flag Test auf persoenlichkeitstest-kostenlos.de analysiert dein eigenes Verhalten in Beziehungen — nicht das deines Partners. Das Ziel ist Selbstreflexion: Welche Red Flags bringst du möglicherweise selbst mit?</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Der Unterschied zwischen Red Flags und normalen Problemen</h2>
          <p style={pStyle}>Nicht jedes Problem in einer Beziehung ist eine Red Flag. Normale Beziehungsprobleme entstehen durch Missverständnisse, unterschiedliche Erwartungen oder Stress — sie können durch offene Kommunikation gelöst werden. Red Flags hingegen sind tieferliegende Verhaltensmuster, die sich wiederholen und nicht einfach durch ein Gespräch verschwinden.</p>
          <p style={pStyle}>Eine wichtige Unterscheidung: Jemand, der einmal laut wird, ist keine Red Flag. Jemand, der regelmäßig seinen Partner anschreit und sich danach nicht entschuldigt, schon. Jemand, der gelegentlich vergisst, zurückzurufen, ist keine Red Flag. Jemand, der systematisch Kontakt vermeidet und den Partner im Unklaren lässt, schon.</p>
          <p style={pStyle}>Unser kostenloser Red Flag Detector hilft dir, diese Unterscheidung für dein eigenes Verhalten zu treffen. Wie viele Red Flags bringst du in Beziehungen mit? Mach den Test jetzt auf persoenlichkeitstest-kostenlos.de.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was tun, wenn man Red Flags bei sich selbst erkennt?</h2>
          <p style={pStyle}>Es ist mutig und wichtig, Red Flags im eigenen Verhalten zu erkennen. Der erste Schritt ist Akzeptanz: Niemand ist perfekt, und das Erkennen von problematischen Verhaltensweisen ist keine Schwäche, sondern Stärke. Viele Red Flags entstehen aus eigenen Unsicherheiten, Verletzungen oder unverarbeiteten Erfahrungen.</p>
          <p style={pStyle}>Wenn du Red Flags bei dir selbst erkennst, können folgende Schritte helfen: Reflektiere, woher das Verhalten kommt — oft stecken dahinter Ängste oder vergangene Verletzungen. Kommuniziere offen mit deinem Partner über deine Unsicherheiten. Suche professionelle Unterstützung, wenn du merkst, dass du alleine nicht weiterkommst.</p>
          <p style={pStyle}>Mach den kostenlosen Red Flag Test jetzt auf persoenlichkeitstest-kostenlos.de und erfahre, wie viele Red Flags du in Beziehungen mitbringst. Das Ergebnis ist der erste Schritt zu gesünderen, glücklicheren Beziehungen.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was sind Red Flags?</div>
            <div style={faqAStyle}>Red Flags sind Warnsignale in Beziehungen, die auf potenziell problematisches Verhalten hinweisen — wie Eifersucht, Kontrollverhalten, Manipulation oder fehlende Empathie. Sie unterscheiden sich von normalen Beziehungsproblemen durch ihre Wiederholung und Tiefe.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie viele Red Flags habe ich?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Red Flag Test! Du beantwortest 10 Fragen zu deinem Verhalten in Beziehungen und erhältst sofort dein Ergebnis.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Kann man Red Flags ablegen?</div>
            <div style={faqAStyle}>Ja! Der erste Schritt ist, sie zu erkennen — genau dabei hilft unser Test. Viele Red Flags entstehen aus Unsicherheiten und können durch Selbstreflexion, offene Kommunikation und ggf. professionelle Unterstützung reduziert werden.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Red Flag Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Red Flag Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/toxicity" style={relatedItemStyle}>☣️ Toxicity Test — Wie toxisch bist du?</a>
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
