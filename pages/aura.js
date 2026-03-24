import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemaaura = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/aura",
      "url": "https://persoenlichkeitstest-kostenlos.de/aura",
      "name": "Aura Test kostenlos — Welche Aura habe ich? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Aura Test und entdecke deine Aura-Farbe! Aura Check online: Welche Energie strahlst du aus? Sofortiges Ergebnis, kein Account nötig. Jetzt starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/aura#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/aura#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Aura Test", "item": "https://persoenlichkeitstest-kostenlos.de/aura" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Aura Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/aura",
      "description": "Mach den kostenlosen Aura Test und entdecke deine Aura-Farbe! Aura Check online: Welche Energie strahlst du aus? Sofortiges Ergebnis, kein Account nötig. Jetzt starten!",
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
        { "@type": "Question", "name": "Was bedeutet meine Aura-Farbe?", "acceptedAnswer": { "@type": "Answer", "text": "Jede Aura-Farbe steht für bestimmte Eigenschaften: Blau für Ruhe und Kommunikation, Violett für Intuition und Kreativität, Grün für Heilung und Harmonie, Rot für Leidenschaft und Energie. Unser Aura Test erklärt dir deine Farbe im Detail." } },
        { "@type": "Question", "name": "Wie funktioniert der Aura Check online?", "acceptedAnswer": { "@type": "Answer", "text": "Du beantwortest 10 Fragen zu deinem Verhalten, deinen Emotionen und deiner Energie. Unser Algorithmus analysiert deine Antworten und bestimmt deine dominante Aura-Farbe mit detaillierter Erklärung." } },
        { "@type": "Question", "name": "Welche Aura habe ich?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Aura Test! Mach den Test jetzt auf persoenlichkeitstest-kostenlos.de und entdecke in 2 Minuten deine Aura-Farbe." } },
        { "@type": "Question", "name": "Ist der Aura Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Aura Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, kein Abo — sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "aura", source: "subpage" });
    }
    router.push("/?test=aura");
  };

  return (
    <>
      <Script id="schema-aura" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaaura)}</Script>
      <Head>
        <title>Aura Test kostenlos — Welche Aura habe ich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Aura Test und entdecke deine Aura-Farbe! Aura Check online: Welche Energie strahlst du aus? Sofortiges Ergebnis, kein Account nötig. Jetzt starten!" />
        <meta name="keywords" content="aura test, aura check online, aura test kostenlos, welche aura habe ich, aura farbe test, meine aura farbe" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/aura" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/aura" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/aura" />
        <meta property="og:title" content="Aura Test kostenlos — Welche Aura habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Aura Test und entdecke deine Aura-Farbe! Aura Check online: Welche Energie strahlst du aus? Sofortiges Ergebnis, kein Account nötig. Jetzt starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/aura" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Aura Test kostenlos — Welche Aura habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Aura Test und entdecke deine Aura-Farbe! Aura Check online: Welche Energie strahlst du aus? Sofortiges Ergebnis, kein Account nötig. Jetzt starten!" />
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
          <h1 style={h1Style}>Aura Test kostenlos — Welche Aura hast du?</h1>
          <p style={subtitleStyle}>Entdecke deine Aura-Farbe mit unserem kostenlosen Aura Check. Welche Energie strahlst du aus? In nur 2 Minuten — sofortiges Ergebnis, kein Account nötig.</p>
          <button onClick={handleStart} style={ctaBtn}>Aura Test jetzt starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist ein Aura Test?</h2>
          <p style={pStyle}>Ein Aura Test ist ein psychologisch inspirierter Test, der dir zeigt, welche Energie und Ausstrahlung du auf andere Menschen hast. Die Aura beschreibt in vielen spirituellen und psychologischen Konzepten die unsichtbare Energie, die jeder Mensch ausstrahlt. Verschiedene Aura-Farben stehen dabei für unterschiedliche Persönlichkeitseigenschaften, Stärken und Energiefelder.</p>
          <p style={pStyle}>Der kostenlose Aura Test auf persoenlichkeitstest-kostenlos.de analysiert dein Verhalten, deine Emotionen und deine Reaktionen auf verschiedene Situationen, um deine dominante Aura-Farbe zu bestimmen. Das Ergebnis gibt dir Einblicke in deine innere Energie, deine Stärken und wie andere Menschen dich wahrnehmen.</p>
          <p style={pStyle}>Ob du eine blaue Aura (ruhig, kommunikativ, vertrauenswürdig), eine violette Aura (intuitiv, spirituell, kreativ), eine grüne Aura (heilend, natürlich, ausgewogen) oder eine rote Aura (leidenschaftlich, energetisch, mutig) hast — unser kostenloser Aura Check gibt dir die Antwort in nur 2 Minuten.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Die verschiedenen Aura-Farben und ihre Bedeutung</h2>
          <p style={pStyle}>Jede Aura-Farbe hat eine einzigartige Bedeutung und steht für bestimmte Persönlichkeitseigenschaften. Die blaue Aura steht für Ruhe, Kommunikation und Vertrauenswürdigkeit — Menschen mit einer blauen Aura sind oft gute Zuhörer und Vermittler. Die violette Aura symbolisiert Intuition, Spiritualität und Kreativität — diese Menschen haben oft eine tiefe innere Weisheit.</p>
          <p style={pStyle}>Die grüne Aura steht für Heilung, Wachstum und Harmonie — Menschen mit grüner Aura sind oft einfühlsam und naturverbunden. Die rote Aura symbolisiert Leidenschaft, Energie und Mut — diese Menschen sind oft Anführer und Macher. Die gelbe Aura steht für Optimismus, Kreativität und Intelligenz, während die orange Aura für Begeisterung, Abenteuer und Geselligkeit steht.</p>
          <p style={pStyle}>Unser kostenloser Aura Test analysiert deine Antworten und bestimmt deine dominante Aura-Farbe sowie Sekundärfarben, die deine Persönlichkeit weiter beschreiben.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Warum solltest du deinen Aura Check machen?</h2>
          <p style={pStyle}>Der Aura Check auf persoenlichkeitstest-kostenlos.de ist mehr als nur ein unterhaltsamer Test — er kann dir helfen, dich selbst besser zu verstehen. Viele Menschen berichten, dass die Ergebnisse ihres Aura Tests ihnen geholfen haben, ihre Stärken bewusster einzusetzen und ihre Energie gezielter zu lenken.</p>
          <p style={pStyle}>Der Test ist besonders beliebt bei Menschen, die sich für Spiritualität, Persönlichkeitsentwicklung und Selbstreflexion interessieren. Er kombiniert psychologische Erkenntnisse mit dem Konzept der Aura-Energie und liefert dir ein intuitives, leicht verständliches Ergebnis.</p>
          <p style={pStyle}>Mach den kostenlosen Aura Test jetzt auf persoenlichkeitstest-kostenlos.de — ohne Anmeldung, ohne Kosten, mit sofortigem Ergebnis. Entdecke, welche Aura-Farbe zu dir gehört und was sie über deine Persönlichkeit und Energie aussagt.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was bedeutet meine Aura-Farbe?</div>
            <div style={faqAStyle}>Jede Aura-Farbe steht für bestimmte Eigenschaften: Blau für Ruhe und Kommunikation, Violett für Intuition und Kreativität, Grün für Heilung und Harmonie, Rot für Leidenschaft und Energie. Unser Aura Test erklärt dir deine Farbe im Detail.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie funktioniert der Aura Check online?</div>
            <div style={faqAStyle}>Du beantwortest 10 Fragen zu deinem Verhalten, deinen Emotionen und deiner Energie. Unser Algorithmus analysiert deine Antworten und bestimmt deine dominante Aura-Farbe mit detaillierter Erklärung.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Welche Aura habe ich?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Aura Test! Mach den Test jetzt auf persoenlichkeitstest-kostenlos.de und entdecke in 2 Minuten deine Aura-Farbe.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Aura Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Aura Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, kein Abo — sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/rizz" style={relatedItemStyle}>✨ Rizz Test — Wie viel Charisma hast du?</a>
          <a href="/persoenlichkeit" style={relatedItemStyle}>🧠 Persönlichkeitstest — 16 Typen MBTI Test</a>
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
