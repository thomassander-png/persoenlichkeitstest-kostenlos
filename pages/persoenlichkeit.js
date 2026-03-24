import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemapersoenlichkeit = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit",
      "url": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit",
      "name": "Persönlichkeitstest kostenlos — 16 Typen MBTI | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, sofortiges Ergebnis. Jetzt kostenlos starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Persönlichkeitstest", "item": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Persönlichkeitstest",
      "url": "https://persoenlichkeitstest-kostenlos.de/persoenlichkeit",
      "description": "Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, sofortiges Ergebnis. Jetzt kostenlos starten!",
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
        { "@type": "Question", "name": "Was ist der MBTI Persönlichkeitstest?", "acceptedAnswer": { "@type": "Answer", "text": "Der MBTI (Myers-Briggs Type Indicator) ist eines der bekanntesten Persönlichkeitsmodelle weltweit. Er unterscheidet 16 Persönlichkeitstypen basierend auf vier Dimensionen und hilft dir, deine Stärken, Schwächen und Verhaltensweisen besser zu verstehen." } },
        { "@type": "Question", "name": "Wie lange dauert der kostenlose Persönlichkeitstest?", "acceptedAnswer": { "@type": "Answer", "text": "Der kostenlose Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de dauert ca. 3 Minuten. Du beantwortest 12 Fragen und erhältst sofort dein detailliertes Ergebnis mit deinem Persönlichkeitstyp." } },
        { "@type": "Question", "name": "Welcher Persönlichkeitstyp bin ich?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Test! Die 16 Typen reichen von INTJ (Der Architekt) bis ESFP (Der Entertainer). Mach den Test jetzt auf persoenlichkeitstest-kostenlos.de und finde es heraus." } },
        { "@type": "Question", "name": "Ist der Persönlichkeitstest wissenschaftlich?", "acceptedAnswer": { "@type": "Answer", "text": "Unser Test basiert auf dem MBTI-Modell, das auf der Typenlehre von C.G. Jung aufbaut. Er ist für Selbstreflexion und Orientierung konzipiert. Für klinische Diagnosen empfehlen wir professionelle psychologische Beratung." } },
        { "@type": "Question", "name": "Kostet der Persönlichkeitstest etwas?", "acceptedAnswer": { "@type": "Answer", "text": "Nein! Der Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos — ohne Anmeldung, ohne Abo, ohne versteckte Kosten. Jetzt und für immer." } }
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
      window.gtag("event", "test_start", { test_name: "persoenlichkeit", source: "subpage" });
    }
    router.push("/?test=persoenlichkeit");
  };

  return (
    <>
      <Script id="schema-persoenlichkeit" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemapersoenlichkeit)}</Script>
      <Head>
        <title>Persönlichkeitstest kostenlos — 16 Typen MBTI | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta name="keywords" content="persönlichkeitstest kostenlos, persönlichkeitstest online, kostenloser persönlichkeitstest, 16 typen test, mbti test deutsch kostenlos, persönlichkeitstypen test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
        <meta property="og:title" content="Persönlichkeitstest kostenlos — 16 Typen MBTI | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/persoenlichkeit" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-persoenlichkeit.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Persönlichkeitstest kostenlos — 16 Typen MBTI | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Persönlichkeitstest und finde heraus welcher von 16 Typen du bist. MBTI-basiert, auf Deutsch, sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-persoenlichkeit.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Persönlichkeitstest kostenlos — Welcher von 16 Typen bist du?</h1>
          <p style={subtitleStyle}>Der MBTI-basierte Persönlichkeitstest auf Deutsch. In nur 3 Minuten erfährst du, welcher von 16 Persönlichkeitstypen du bist — kostenlos, ohne Anmeldung.</p>
          <button onClick={handleStart} style={ctaBtn}>Persönlichkeitstest jetzt starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist der kostenlose Persönlichkeitstest?</h2>
          <p style={pStyle}>Der kostenlose Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de basiert auf dem weltweit anerkannten MBTI-Modell (Myers-Briggs Type Indicator) und unterscheidet 16 verschiedene Persönlichkeitstypen. Das Modell wurde von Isabel Briggs Myers und ihrer Mutter Katharine Cook Briggs auf Grundlage der Typenlehre von Carl Gustav Jung entwickelt und ist heute eines der meistgenutzten Persönlichkeitsmodelle weltweit.</p>
          <p style={pStyle}>Der Test analysiert deine Persönlichkeit anhand von vier zentralen Dimensionen: Extraversion vs. Introversion (wie du Energie gewinnst), Intuition vs. Sensorik (wie du Informationen aufnimmst), Denken vs. Fühlen (wie du Entscheidungen triffst) und Urteilen vs. Wahrnehmen (wie du deinen Alltag strukturierst). Aus diesen vier Dimensionen ergeben sich 16 einzigartige Persönlichkeitstypen wie INTJ, ENFP, ISTJ oder INFJ.</p>
          <p style={pStyle}>Unser kostenloser Online-Persönlichkeitstest stellt dir 12 sorgfältig ausgewählte Fragen und liefert dir in weniger als 3 Minuten ein detailliertes Ergebnis mit deinem Persönlichkeitstyp, deinen Stärken, Schwächen und passenden Karrierewegen. Kein Account, keine Registrierung, keine versteckten Kosten — jetzt und für immer kostenlos.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Die 16 Persönlichkeitstypen im Überblick</h2>
          <p style={pStyle}>Die 16 Persönlichkeitstypen lassen sich in vier Gruppen einteilen: Die Analysten (INTJ, INTP, ENTJ, ENTP) sind strategische Denker und Visionäre. Die Diplomaten (INFJ, INFP, ENFJ, ENFP) sind empathische Idealisten und Kommunikatoren. Die Wächter (ISTJ, ISFJ, ESTJ, ESFJ) sind zuverlässige, pflichtbewusste Organisatoren. Die Entdecker (ISTP, ISFP, ESTP, ESFP) sind spontane, praktische Abenteurer.</p>
          <p style={pStyle}>Jeder Typ hat einzigartige Stärken und Eigenschaften. Der INFJ gilt als seltenster Typ (nur ca. 1–2% der Bevölkerung), während der ISFJ mit etwa 13–14% der häufigste ist. Unser kostenloser Persönlichkeitstest hilft dir herauszufinden, wo du dich einordnest und was das über dich aussagt.</p>
          <p style={pStyle}>Wichtig zu verstehen: Kein Persönlichkeitstyp ist besser oder schlechter als ein anderer. Der Test dient der Selbstreflexion und dem besseren Verständnis der eigenen Stärken und Verhaltensweisen — nicht als klinische Diagnose.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Warum solltest du den Persönlichkeitstest machen?</h2>
          <p style={pStyle}>Ein Persönlichkeitstest kann dir wertvolle Einblicke in deine eigene Persönlichkeit geben. Viele Menschen nutzen die Ergebnisse, um ihre Karriereentscheidungen zu verbessern, da bestimmte Persönlichkeitstypen in bestimmten Berufsfeldern besonders erfolgreich sind. Andere nutzen den Test, um ihre Beziehungen zu verbessern — wenn du verstehst, wie du und andere Menschen ticken, kannst du Konflikte besser lösen und Verbindungen tiefer gestalten.</p>
          <p style={pStyle}>Der kostenlose Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de ist ideal für alle, die sich selbst besser kennenlernen möchten, ohne dafür teure Coaching-Sitzungen oder kostenpflichtige Tests zu buchen. Unser Test ist wissenschaftlich fundiert, auf Deutsch verfügbar und liefert sofortige, detaillierte Ergebnisse.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was ist der MBTI Persönlichkeitstest?</div>
            <div style={faqAStyle}>Der MBTI (Myers-Briggs Type Indicator) ist eines der bekanntesten Persönlichkeitsmodelle weltweit. Er unterscheidet 16 Persönlichkeitstypen basierend auf vier Dimensionen und hilft dir, deine Stärken, Schwächen und Verhaltensweisen besser zu verstehen.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie lange dauert der kostenlose Persönlichkeitstest?</div>
            <div style={faqAStyle}>Der kostenlose Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de dauert ca. 3 Minuten. Du beantwortest 12 Fragen und erhältst sofort dein detailliertes Ergebnis mit deinem Persönlichkeitstyp.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Welcher Persönlichkeitstyp bin ich?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Test! Die 16 Typen reichen von INTJ (Der Architekt) bis ESFP (Der Entertainer). Mach den Test jetzt auf persoenlichkeitstest-kostenlos.de und finde es heraus.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Persönlichkeitstest wissenschaftlich?</div>
            <div style={faqAStyle}>Unser Test basiert auf dem MBTI-Modell, das auf der Typenlehre von C.G. Jung aufbaut. Er ist für Selbstreflexion und Orientierung konzipiert. Für klinische Diagnosen empfehlen wir professionelle psychologische Beratung.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Kostet der Persönlichkeitstest etwas?</div>
            <div style={faqAStyle}>Nein! Der Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos — ohne Anmeldung, ohne Abo, ohne versteckte Kosten. Jetzt und für immer.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/dark" style={relatedItemStyle}>🌑 Dark Triad Test — Wie dunkel ist deine Persönlichkeit?</a>
          <a href="/ki-test" style={relatedItemStyle}>🤖 KI Persönlichkeitstest — KI analysiert deine Persönlichkeit</a>
          <a href="/npc" style={relatedItemStyle}>🎮 NPC Test — Bist du Main Character oder NPC?</a>
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
