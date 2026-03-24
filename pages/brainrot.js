import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemabrainrot = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "url": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "name": "Brainrot Test kostenlos — Wie Brainrot bin ich? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen Brainrot Test und finde deinen Brainrot Score heraus! Wie sehr hat TikTok dein Gehirn beeinflusst? Brainrot Quiz mit sofortigem Ergebnis. Jetzt starten!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/brainrot#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "Brainrot Score Test", "item": "https://persoenlichkeitstest-kostenlos.de/brainrot" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Brainrot Score Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/brainrot",
      "description": "Mach den kostenlosen Brainrot Test und finde deinen Brainrot Score heraus! Wie sehr hat TikTok dein Gehirn beeinflusst? Brainrot Quiz mit sofortigem Ergebnis. Jetzt starten!",
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
        { "@type": "Question", "name": "Was bedeutet Brainrot?", "acceptedAnswer": { "@type": "Answer", "text": "Brainrot ist Slang für den Zustand, in dem jemand so viel TikTok und Social Media konsumiert hat, dass sein Denken und seine Sprache stark davon beeinflusst werden. Es ist ein humorvoller Begriff ohne klinische Bedeutung." } },
        { "@type": "Question", "name": "Wie hoch ist mein Brainrot Score?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen Brainrot Test! Du beantwortest 10 Fragen und erhältst sofort deinen Score von 0 (kein Brainrot) bis 100 (maximales Brainrot)." } },
        { "@type": "Question", "name": "Ist Brainrot gefährlich?", "acceptedAnswer": { "@type": "Answer", "text": "Nein, Brainrot ist ein humorvoller Begriff. Allerdings kann exzessiver Social-Media-Konsum die Aufmerksamkeitsspanne beeinflussen. Der Test ist zur Unterhaltung und Selbstreflexion gedacht." } },
        { "@type": "Question", "name": "Ist der Brainrot Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Brainrot Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "brainrot", source: "subpage" });
    }
    router.push("/?test=brainrot");
  };

  return (
    <>
      <Script id="schema-brainrot" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemabrainrot)}</Script>
      <Head>
        <title>Brainrot Test kostenlos — Wie Brainrot bin ich? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Brainrot Test und finde deinen Brainrot Score heraus! Wie sehr hat TikTok dein Gehirn beeinflusst? Brainrot Quiz mit sofortigem Ergebnis. Jetzt starten!" />
        <meta name="keywords" content="brainrot test, brainrot score, wie brainrot bin ich, brainrot quiz, tiktok brainrot test, gehirn test" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <meta property="og:title" content="Brainrot Test kostenlos — Wie Brainrot bin ich? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen Brainrot Test und finde deinen Brainrot Score heraus! Wie sehr hat TikTok dein Gehirn beeinflusst? Brainrot Quiz mit sofortigem Ergebnis. Jetzt starten!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/brainrot" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="Brainrot Test kostenlos — Wie Brainrot bin ich? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen Brainrot Test und finde deinen Brainrot Score heraus! Wie sehr hat TikTok dein Gehirn beeinflusst? Brainrot Quiz mit sofortigem Ergebnis. Jetzt starten!" />
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
          <h1 style={h1Style}>Brainrot Test — Wie Brainrot bist du wirklich?</h1>
          <p style={subtitleStyle}>Teste deinen Brainrot Score kostenlos! Wie sehr hat Social Media dein Gehirn beeinflusst? Das Brainrot Quiz mit sofortigem Ergebnis — in nur 2 Minuten.</p>
          <button onClick={handleStart} style={ctaBtn}>Brainrot Score testen →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist Brainrot?</h2>
          <p style={pStyle}>Brainrot ist ein Internet-Slang-Begriff, der den Zustand beschreibt, in dem jemand so viel Social Media — insbesondere TikTok — konsumiert hat, dass sein Denken, seine Sprache und sein Humor stark davon beeinflusst werden. Menschen mit hohem Brainrot Score denken in Memes, sprechen in TikTok-Slang und finden Dinge lustig, die andere Menschen nicht verstehen.</p>
          <p style={pStyle}>Der Begriff ist humorvoll gemeint und beschreibt eine kulturelle Erscheinung der Generation Z und Millennials, die täglich stundenlang kurze Videos konsumieren. Typische Zeichen von Brainrot sind: Du kennst alle aktuellen TikTok-Trends, du denkst in Memes, du verwendest Begriffe wie "rizz", "slay", "no cap" oder "it's giving" im Alltag, und du verstehst Referenzen, die andere Menschen komplett verwirren.</p>
          <p style={pStyle}>Der kostenlose Brainrot Test auf persoenlichkeitstest-kostenlos.de misst deinen Brainrot Score von 0 (kein Brainrot, du lebst noch in der realen Welt) bis 100 (maximales Brainrot, du bist ein wandelndes Meme-Lexikon).</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Die Brainrot-Stufen erklärt</h2>
          <p style={pStyle}>Der Brainrot Score wird in verschiedene Stufen eingeteilt. Ein Score von 0–20 bedeutet "Kein Brainrot" — du nutzt Social Media moderat und bist noch fest in der realen Welt verankert. Ein Score von 21–40 bedeutet "Leichtes Brainrot" — du kennst die wichtigsten Memes und Trends, aber bist noch nicht vollständig infiziert.</p>
          <p style={pStyle}>Ein Score von 41–60 bedeutet "Mittleres Brainrot" — du verbringst viel Zeit auf TikTok und denkst manchmal in Memes. Ein Score von 61–80 bedeutet "Starkes Brainrot" — dein Gehirn ist stark von Social Media geprägt, du kennst jeden Trend und jeden Slang. Ein Score von 81–100 bedeutet "Maximales Brainrot" — du bist ein wandelndes Internet-Lexikon und kannst ohne TikTok kaum noch existieren.</p>
          <p style={pStyle}>Unser kostenloser Brainrot Test analysiert dein Mediennutzungsverhalten, deine Sprachgewohnheiten und dein Wissen über aktuelle Internet-Trends, um deinen persönlichen Brainrot Score zu bestimmen.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Ist Brainrot schlecht?</h2>
          <p style={pStyle}>Brainrot ist zunächst einmal ein humorvoller Begriff ohne klinische Bedeutung. Es ist normal und harmlos, die Kultur und Sprache der Plattformen zu übernehmen, auf denen man viel Zeit verbringt. Wer viel TikTok schaut, kennt die Trends — das ist kein Problem.</p>
          <p style={pStyle}>Allerdings kann exzessiver Social-Media-Konsum tatsächlich die Aufmerksamkeitsspanne verkürzen und es schwieriger machen, sich auf längere Texte oder Aufgaben zu konzentrieren. Wenn du merkst, dass du ohne ständige Stimulation durch kurze Videos nicht mehr entspannen kannst, könnte eine bewusste Auszeit sinnvoll sein.</p>
          <p style={pStyle}>Der Brainrot Test auf persoenlichkeitstest-kostenlos.de ist in erster Linie zur Unterhaltung gedacht — er soll dir einen humorvollen Spiegel vorhalten und zeigen, wie sehr du von der Internet-Kultur geprägt bist. Mach den Test jetzt kostenlos und finde deinen Brainrot Score heraus!</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was bedeutet Brainrot?</div>
            <div style={faqAStyle}>Brainrot ist Slang für den Zustand, in dem jemand so viel TikTok und Social Media konsumiert hat, dass sein Denken und seine Sprache stark davon beeinflusst werden. Es ist ein humorvoller Begriff ohne klinische Bedeutung.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Wie hoch ist mein Brainrot Score?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen Brainrot Test! Du beantwortest 10 Fragen und erhältst sofort deinen Score von 0 (kein Brainrot) bis 100 (maximales Brainrot).</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist Brainrot gefährlich?</div>
            <div style={faqAStyle}>Nein, Brainrot ist ein humorvoller Begriff. Allerdings kann exzessiver Social-Media-Konsum die Aufmerksamkeitsspanne beeinflussen. Der Test ist zur Unterhaltung und Selbstreflexion gedacht.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der Brainrot Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der Brainrot Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/rizz" style={relatedItemStyle}>✨ Rizz Test — Wie viel Charisma hast du?</a>
          <a href="/npc" style={relatedItemStyle}>🎮 NPC Test — Bist du Main Character oder NPC?</a>
          <a href="/aura" style={relatedItemStyle}>🌈 Aura Test — Welche Aura hast du?</a>
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
