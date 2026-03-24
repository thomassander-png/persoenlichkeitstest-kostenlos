import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemarizz = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "url": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "name": "Rizz Test kostenlos — Wie viel Rizz habe ich? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Rizz Test und finde deinen Rizz Score heraus! Wie viel Charisma und Anziehungskraft hast du wirklich? Sofortiges Ergebnis. Jetzt kostenlos starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/rizz#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/rizz#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Rizz Score Test", "item": "https://persoenlichkeitstest-kostenlos.de/rizz" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Rizz Score Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/rizz",
      "description": "Mach den kostenlosen Rizz Test und finde deinen Rizz Score heraus! Wie viel Charisma und Anziehungskraft hast du wirklich? Sofortiges Ergebnis. Jetzt kostenlos starten!",
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
        { "@type": "Question", "name": "Was bedeutet Rizz?", "acceptedAnswer": { "@type": "Answer", "text": "Rizz ist Slang für natürliches Charisma und Anziehungskraft. Der Begriff wurde durch TikTok populär und beschreibt die Fähigkeit, andere Menschen mühelos für sich zu begeistern — durch Persönlichkeit, Humor und Selbstbewusstsein." } },
        { "@type": "Question", "name": "Wie viel Rizz habe ich?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Rizz Test! Du beantwortest 10 Fragen und erhältst sofort deinen Rizz Score — von 'No Rizz' bis 'Unreal Rizz'." } },
        { "@type": "Question", "name": "Ist Rizz dasselbe wie Attraktivität?", "acceptedAnswer": { "@type": "Answer", "text": "Nein! Rizz hat nichts mit äußerer Attraktivität zu tun. Es geht um innere Ausstrahlung, Charisma und die Fähigkeit, Gespräche zu führen. Jeder kann einen hohen Rizz Score haben." } },
        { "@type": "Question", "name": "Ist der Rizz Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Rizz Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "rizz", source: "subpage" });
    }
    router.push("/?test=rizz");
  };

  return (
    <>
      <Script id="schema-rizz" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemarizz)}</Script>
      <Head>
        <title>Rizz Test kostenlos — Wie viel Rizz habe ich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Rizz Test und finde deinen Rizz Score heraus! Wie viel Charisma und Anziehungskraft hast du wirklich? Sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta name="keywords" content="rizz test, rizz score, rizz test kostenlos, wie viel rizz habe ich, charisma test, rizz score test deutsch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <meta property="og:title" content="Rizz Test kostenlos — Wie viel Rizz habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Rizz Test und finde deinen Rizz Score heraus! Wie viel Charisma und Anziehungskraft hast du wirklich? Sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/rizz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-rizz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Rizz Test kostenlos — Wie viel Rizz habe ich? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Rizz Test und finde deinen Rizz Score heraus! Wie viel Charisma und Anziehungskraft hast du wirklich? Sofortiges Ergebnis. Jetzt kostenlos starten!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-rizz.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Rizz Test — Wie viel Rizz hast du wirklich?</h1>
          <p style={subtitleStyle}>Teste deinen Rizz Score kostenlos! Finde heraus, wie viel natürliches Charisma und Anziehungskraft du wirklich hast. In nur 2 Minuten — sofortiges Ergebnis.</p>
          <button onClick={handleStart} style={ctaBtn}>Rizz Score jetzt testen →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist Rizz und wie wird es gemessen?</h2>
          <p style={pStyle}>Rizz ist ein moderner Slang-Begriff für natürliches Charisma, Anziehungskraft und die Fähigkeit, andere Menschen mühelos für sich zu begeistern. Der Begriff wurde durch Social Media — insbesondere TikTok — populär und beschreibt die Kunst, durch Persönlichkeit, Humor und Selbstbewusstsein andere zu faszinieren, ohne sich dabei anzustrengen.</p>
          <p style={pStyle}>Der kostenlose Rizz Test auf persoenlichkeitstest-kostenlos.de misst deinen Rizz Score anhand von 10 Fragen zu deinem sozialen Verhalten, deinem Selbstbewusstsein, deinem Humor und deiner Fähigkeit, in sozialen Situationen zu glänzen. Das Ergebnis reicht von "Kein Rizz" (du bist eher zurückhaltend) bis "Unreal Rizz" (du hast außergewöhnliches natürliches Charisma).</p>
          <p style={pStyle}>Rizz ist nicht dasselbe wie Attraktivität — es geht um die innere Ausstrahlung, die Fähigkeit, Gespräche zu führen und Menschen anzuziehen, unabhängig vom äußeren Erscheinungsbild. Jeder kann seinen Rizz Score verbessern.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Die verschiedenen Rizz-Level im Überblick</h2>
          <p style={pStyle}>Der Rizz Score wird in verschiedene Level eingeteilt: "No Rizz" bedeutet, dass du in sozialen Situationen oft unsicher bist und Schwierigkeiten hast, andere für dich zu begeistern. "Low Rizz" bedeutet, dass du zwar Charisma hast, es aber noch nicht voll entfaltest. "Mid Rizz" ist der Durchschnitt — du kommst gut an, aber bist noch kein Magnet.</p>
          <p style={pStyle}>"High Rizz" bedeutet, dass du natürliches Charisma besitzt und andere Menschen mühelos anziehst. "God Rizz" ist die höchste Stufe — du bist ein geborener Charmebolzen, der in jedem Raum die Aufmerksamkeit auf sich zieht. "Unreal Rizz" ist die legendäre Stufe, die nur wenige Menschen erreichen.</p>
          <p style={pStyle}>Unser kostenloser Rizz Test analysiert dein Verhalten in sozialen Situationen und gibt dir einen genauen Rizz Score mit detaillierter Erklärung, was dein Ergebnis bedeutet und wie du deinen Rizz verbessern kannst.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Kann man seinen Rizz Score verbessern?</h2>
          <p style={pStyle}>Ja! Rizz ist keine angeborene Eigenschaft, die man entweder hat oder nicht hat — es ist eine Fähigkeit, die man entwickeln und verbessern kann. Die wichtigsten Faktoren für einen hohen Rizz Score sind Selbstbewusstsein, aktives Zuhören, Humor und die Fähigkeit, in sozialen Situationen präsent und authentisch zu sein.</p>
          <p style={pStyle}>Menschen mit hohem Rizz Score zeichnen sich dadurch aus, dass sie anderen Menschen echtes Interesse entgegenbringen, Gespräche lebendig gestalten und eine positive, einladende Energie ausstrahlen. Sie sind nicht perfekt — aber sie sind authentisch und selbstsicher.</p>
          <p style={pStyle}>Mach den kostenlosen Rizz Test jetzt auf persoenlichkeitstest-kostenlos.de und erfahre deinen aktuellen Rizz Score. Das Ergebnis zeigt dir nicht nur, wo du stehst, sondern auch, in welchen Bereichen du dein Charisma noch weiter entwickeln kannst.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was bedeutet Rizz?</div>
            <div style={faqAStyle}>Rizz ist Slang für natürliches Charisma und Anziehungskraft. Der Begriff wurde durch TikTok populär und beschreibt die Fähigkeit, andere Menschen mühelos für sich zu begeistern — durch Persönlichkeit, Humor und Selbstbewusstsein.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie viel Rizz habe ich?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Rizz Test! Du beantwortest 10 Fragen und erhältst sofort deinen Rizz Score — von 'No Rizz' bis 'Unreal Rizz'.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist Rizz dasselbe wie Attraktivität?</div>
            <div style={faqAStyle}>Nein! Rizz hat nichts mit äußerer Attraktivität zu tun. Es geht um innere Ausstrahlung, Charisma und die Fähigkeit, Gespräche zu führen. Jeder kann einen hohen Rizz Score haben.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Rizz Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Rizz Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/aura" style={relatedItemStyle}>✨ Aura Test — Welche Aura hast du?</a>
          <a href="/npc" style={relatedItemStyle}>🎮 NPC Test — Bist du Main Character oder NPC?</a>
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
