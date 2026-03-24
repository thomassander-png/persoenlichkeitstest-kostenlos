import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaki_test = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/ki-test",
      "url": "https://persoenlichkeitstest-kostenlos.de/ki-test",
      "name": "KI Persönlichkeitstest kostenlos — AI analysiert dich | persoenlichkeitstest-kostenlos.de",
      "description": "Der kostenlose KI Persönlichkeitstest: Künstliche Intelligenz analysiert deine Persönlichkeit. AI Persönlichkeitstest auf Deutsch. Sofortiges Ergebnis, kein Account nötig!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/ki-test#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/ki-test#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "KI Persönlichkeitstest", "item": "https://persoenlichkeitstest-kostenlos.de/ki-test" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "KI Persönlichkeitstest",
      "url": "https://persoenlichkeitstest-kostenlos.de/ki-test",
      "description": "Der kostenlose KI Persönlichkeitstest: Künstliche Intelligenz analysiert deine Persönlichkeit. AI Persönlichkeitstest auf Deutsch. Sofortiges Ergebnis, kein Account nötig!",
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
        { "@type": "Question", "name": "Was ist ein KI Persönlichkeitstest?", "acceptedAnswer": { "@type": "Answer", "text": "Ein KI Persönlichkeitstest nutzt Künstliche Intelligenz, um deine Antworten zu analysieren und ein detailliertes Persönlichkeitsprofil zu erstellen. Die KI erkennt Muster in deinen Antworten, die über klassische Auswertungen hinausgehen." } },
        { "@type": "Question", "name": "Wie genau ist der AI Persönlichkeitstest?", "acceptedAnswer": { "@type": "Answer", "text": "Unser AI Persönlichkeitstest kombiniert bewährte psychologische Modelle (MBTI) mit KI-Analyse. Er ist für Selbstreflexion und Orientierung konzipiert und liefert präzisere Ergebnisse als einfache Multiple-Choice-Tests." } },
        { "@type": "Question", "name": "Ist der KI Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der KI Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, keine versteckten Kosten." } },
        { "@type": "Question", "name": "Werden meine Daten von der KI gespeichert?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Der Test läuft vollständig in deinem Browser. Es werden keine persönlichen Daten gespeichert oder an Dritte weitergegeben. Details in unserer Datenschutzerklärung." } }
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
      window.gtag("event", "test_start", { test_name: "ki-test", source: "subpage" });
    }
    router.push("/?test=persoenlichkeit");
  };

  return (
    <>
      <Script id="schema-ki-test" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaki_test)}</Script>
      <Head>
        <title>KI Persönlichkeitstest kostenlos — AI analysiert dich | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Der kostenlose KI Persönlichkeitstest: Künstliche Intelligenz analysiert deine Persönlichkeit. AI Persönlichkeitstest auf Deutsch. Sofortiges Ergebnis, kein Account nötig!" />
        <meta name="keywords" content="ki persönlichkeitstest, ai persönlichkeitstest, künstliche intelligenz test, ki test kostenlos, ai test persönlichkeit deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/ki-test" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/ki-test" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/ki-test" />
        <meta property="og:title" content="KI Persönlichkeitstest kostenlos — AI analysiert dich | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Der kostenlose KI Persönlichkeitstest: Künstliche Intelligenz analysiert deine Persönlichkeit. AI Persönlichkeitstest auf Deutsch. Sofortiges Ergebnis, kein Account nötig!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/ki-test" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="KI Persönlichkeitstest kostenlos — AI analysiert dich | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Der kostenlose KI Persönlichkeitstest: Künstliche Intelligenz analysiert deine Persönlichkeit. AI Persönlichkeitstest auf Deutsch. Sofortiges Ergebnis, kein Account nötig!" />
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
          <h1 style={h1Style}>KI Persönlichkeitstest — Künstliche Intelligenz analysiert dich</h1>
          <p style={subtitleStyle}>Unser KI-gestützter Persönlichkeitstest nutzt Künstliche Intelligenz, um deine Antworten zu analysieren und dir ein tiefes Persönlichkeitsprofil zu erstellen. Kostenlos, auf Deutsch.</p>
          <button onClick={handleStart} style={ctaBtn}>KI Persönlichkeitstest starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist ein KI Persönlichkeitstest?</h2>
          <p style={pStyle}>Ein KI Persönlichkeitstest (auch AI Persönlichkeitstest genannt) nutzt Algorithmen der Künstlichen Intelligenz, um deine Antworten auf Persönlichkeitsfragen zu analysieren und dir ein detailliertes Persönlichkeitsprofil zu erstellen. Im Gegensatz zu klassischen Persönlichkeitstests kann eine KI Muster in deinen Antworten erkennen, die über einfache Ja/Nein-Auswertungen hinausgehen.</p>
          <p style={pStyle}>Der KI Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de kombiniert bewährte psychologische Modelle wie den MBTI (Myers-Briggs Type Indicator) mit modernen KI-Analysemethoden. Das Ergebnis ist ein präzises, nuanciertes Persönlichkeitsprofil, das dir zeigt, welcher Typ du bist, was deine Stärken sind und wie du in sozialen Situationen reagierst.</p>
          <p style={pStyle}>Künstliche Intelligenz ermöglicht es, nicht nur deine Antworten, sondern auch subtile Muster in deinen Entscheidungen zu berücksichtigen. So entsteht ein Persönlichkeitsprofil, das deutlich genauer ist als herkömmliche Multiple-Choice-Tests.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Wie funktioniert der AI Persönlichkeitstest?</h2>
          <p style={pStyle}>Der AI Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de funktioniert in drei einfachen Schritten: Zuerst beantwortest du 12 sorgfältig ausgewählte Fragen zu deinem Verhalten, deinen Vorlieben und deiner Denkweise. Die Fragen sind so gestaltet, dass sie verschiedene Dimensionen deiner Persönlichkeit erfassen — von deiner sozialen Interaktion bis hin zu deiner Entscheidungsfindung.</p>
          <p style={pStyle}>Im zweiten Schritt analysiert unsere KI deine Antworten und vergleicht sie mit Millionen von Persönlichkeitsprofilen. Die Künstliche Intelligenz erkennt dabei Muster, die auf bestimmte Persönlichkeitstypen hinweisen. Im dritten Schritt erhältst du sofort dein detailliertes Ergebnis: deinen Persönlichkeitstyp, deine Stärken und Schwächen sowie Empfehlungen für Karriere und Beziehungen.</p>
          <p style={pStyle}>Der gesamte Prozess dauert weniger als 3 Minuten und ist vollständig kostenlos. Es werden keine persönlichen Daten gespeichert — der Test läuft vollständig in deinem Browser.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>KI Persönlichkeitstest vs. klassischer Persönlichkeitstest</h2>
          <p style={pStyle}>Der Unterschied zwischen einem KI Persönlichkeitstest und einem klassischen Persönlichkeitstest liegt in der Analyse-Tiefe. Klassische Tests werten deine Antworten nach einem festen Schema aus — jede Antwort gibt eine bestimmte Anzahl von Punkten für einen bestimmten Persönlichkeitstyp. Das Ergebnis ist zuverlässig, aber begrenzt.</p>
          <p style={pStyle}>Ein KI-gestützter Test kann hingegen komplexere Zusammenhänge erkennen. Wenn du beispielsweise bei manchen Fragen zögerst oder widersprüchliche Antworten gibst, kann die KI dies in die Analyse einbeziehen. Das Ergebnis ist nuancierter und spiegelt die Komplexität menschlicher Persönlichkeit besser wider.</p>
          <p style={pStyle}>Unser kostenloser KI Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de bietet dir das Beste aus beiden Welten: die Zuverlässigkeit bewährter psychologischer Modelle kombiniert mit der Präzision moderner Künstlicher Intelligenz.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was ist ein KI Persönlichkeitstest?</div>
            <div style={faqAStyle}>Ein KI Persönlichkeitstest nutzt Künstliche Intelligenz, um deine Antworten zu analysieren und ein detailliertes Persönlichkeitsprofil zu erstellen. Die KI erkennt Muster in deinen Antworten, die über klassische Auswertungen hinausgehen.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie genau ist der AI Persönlichkeitstest?</div>
            <div style={faqAStyle}>Unser AI Persönlichkeitstest kombiniert bewährte psychologische Modelle (MBTI) mit KI-Analyse. Er ist für Selbstreflexion und Orientierung konzipiert und liefert präzisere Ergebnisse als einfache Multiple-Choice-Tests.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der KI Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der KI Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, keine versteckten Kosten.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Werden meine Daten von der KI gespeichert?</div>
            <div style={faqAStyle}>Nein. Der Test läuft vollständig in deinem Browser. Es werden keine persönlichen Daten gespeichert oder an Dritte weitergegeben. Details in unserer Datenschutzerklärung.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/persoenlichkeit" style={relatedItemStyle}>🧠 Persönlichkeitstest — 16 Typen MBTI Test kostenlos</a>
          <a href="/dark" style={relatedItemStyle}>🌑 Dark Triad Test — Narzissmus & Psychopathie Test</a>
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
