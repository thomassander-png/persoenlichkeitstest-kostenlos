import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schemanpc = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://persoenlichkeitstest-kostenlos.de/npc",
      "url": "https://persoenlichkeitstest-kostenlos.de/npc",
      "name": "NPC Test kostenlos — Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de",
      "description": "Mach den kostenlosen NPC Test! Bist du Main Character oder Hintergrundstatist? Main Character Test mit sofortigem Ergebnis. Bin ich ein NPC? Jetzt kostenlos herausfinden!",
      "inLanguage": "de-DE",
      "breadcrumb": { "@id": "https://persoenlichkeitstest-kostenlos.de/npc#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://persoenlichkeitstest-kostenlos.de/npc#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://persoenlichkeitstest-kostenlos.de/" },
        { "@type": "ListItem", "position": 2, "name": "NPC Test", "item": "https://persoenlichkeitstest-kostenlos.de/npc" }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "NPC Test",
      "url": "https://persoenlichkeitstest-kostenlos.de/npc",
      "description": "Mach den kostenlosen NPC Test! Bist du Main Character oder Hintergrundstatist? Main Character Test mit sofortigem Ergebnis. Bin ich ein NPC? Jetzt kostenlos herausfinden!",
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
        { "@type": "Question", "name": "Was bedeutet NPC?", "acceptedAnswer": { "@type": "Answer", "text": "NPC steht für 'Non-Player Character' aus der Gaming-Kultur. Im Internet-Slang bezeichnet es Menschen, die auf Autopilot leben, keine eigenen Meinungen haben und einfach dem Strom folgen — im Gegensatz zum 'Main Character'." } },
        { "@type": "Question", "name": "Bin ich ein NPC?", "acceptedAnswer": { "@type": "Answer", "text": "Das erfährst du in unserem kostenlosen NPC Test! Du beantwortest 10 Fragen zu deinem Verhalten und deiner Lebenseinstellung und erhältst sofort dein Ergebnis." } },
        { "@type": "Question", "name": "Was ist Main Character Energy?", "acceptedAnswer": { "@type": "Answer", "text": "Main Character Energy beschreibt die Haltung, das eigene Leben aktiv zu gestalten, eigene Entscheidungen zu treffen und eine starke, authentische Persönlichkeit zu haben — wie der Hauptcharakter in einem Film." } },
        { "@type": "Question", "name": "Ist der NPC Test kostenlos?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, der NPC Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis." } }
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
      window.gtag("event", "test_start", { test_name: "npc", source: "subpage" });
    }
    router.push("/?test=npc");
  };

  return (
    <>
      <Script id="schema-npc" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemanpc)}</Script>
      <Head>
        <title>NPC Test kostenlos — Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen NPC Test! Bist du Main Character oder Hintergrundstatist? Main Character Test mit sofortigem Ergebnis. Bin ich ein NPC? Jetzt kostenlos herausfinden!" />
        <meta name="keywords" content="npc test, bin ich ein npc, main character test, npc oder main character, npc test kostenlos, main character energie" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Social Media Venture GmbH" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/npc" />
        <link rel="alternate" hrefLang="de" href="https://persoenlichkeitstest-kostenlos.de/npc" />
        <link rel="alternate" hrefLang="x-default" href="https://persoenlichkeitstest-kostenlos.de/npc" />
        <meta property="og:title" content="NPC Test kostenlos — Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="Mach den kostenlosen NPC Test! Bist du Main Character oder Hintergrundstatist? Main Character Test mit sofortigem Ergebnis. Bin ich ein NPC? Jetzt kostenlos herausfinden!" />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/npc" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="persoenlichkeitstest-kostenlos.de" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-npc.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@persoenlichkeitstests" />
        <meta name="twitter:creator" content="@persoenlichkeitstests" />
        <meta name="twitter:title" content="NPC Test kostenlos — Bist du Main Character oder NPC? | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Mach den kostenlosen NPC Test! Bist du Main Character oder Hintergrundstatist? Main Character Test mit sofortigem Ergebnis. Bin ich ein NPC? Jetzt kostenlos herausfinden!" />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-npc.png" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.5200;13.4050" />
        <meta name="ICBM" content="52.5200, 13.4050" />
        <meta httpEquiv="content-language" content="de" />
        <meta name="theme-color" content="#060A14" />
      </Head>
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>NPC Test — Bist du Main Character oder NPC?</h1>
          <p style={subtitleStyle}>Finde heraus, ob du der Hauptcharakter deines Lebens bist oder ein NPC im Hintergrund. Der kostenlose NPC Test mit sofortigem Ergebnis — in nur 2 Minuten.</p>
          <button onClick={handleStart} style={ctaBtn}>NPC Test jetzt starten →</button>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Was ist der NPC Test?</h2>
          <p style={pStyle}>Der NPC Test ist ein viraler Internet-Persönlichkeitstest, der aus der Gaming-Kultur stammt. NPC steht für "Non-Player Character" — das sind Figuren in Videospielen, die von einem Computer gesteuert werden und immer dieselben vorprogrammierten Handlungen ausführen. Im Internet-Slang bezeichnet man Menschen als NPC, die scheinbar auf Autopilot leben, keine eigenen Meinungen haben und einfach dem Strom folgen.</p>
          <p style={pStyle}>Der Gegensatz zum NPC ist der "Main Character" — der Hauptcharakter, der sein Leben aktiv gestaltet, eigene Entscheidungen trifft und eine starke, einzigartige Persönlichkeit hat. Main Character Energy beschreibt die Haltung, das eigene Leben wie einen Film zu betrachten, in dem man die Hauptrolle spielt.</p>
          <p style={pStyle}>Der kostenlose NPC Test auf persoenlichkeitstest-kostenlos.de analysiert dein Verhalten, deine Entscheidungsfindung und deine Lebenseinstellung, um herauszufinden, ob du eher ein NPC oder ein Main Character bist.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>NPC vs. Main Character — Was sind die Unterschiede?</h2>
          <p style={pStyle}>Ein NPC zeichnet sich durch folgende Eigenschaften aus: Er folgt immer den Erwartungen anderer, hat keine starken eigenen Meinungen, macht immer dasselbe und reagiert auf Situationen immer gleich. NPCs sind die Menschen, die nie auffallen, nie anecken und immer im Hintergrund bleiben. Sie sind zuverlässig, aber wenig inspirierend.</p>
          <p style={pStyle}>Ein Main Character hingegen hat eine starke Persönlichkeit und klare Werte. Er trifft eigene Entscheidungen, auch wenn sie unbequem sind. Er hat Träume und verfolgt sie aktiv. Er fällt auf — nicht weil er es will, sondern weil er authentisch ist. Main Characters sind die Menschen, an die man sich erinnert.</p>
          <p style={pStyle}>Interessanterweise ist keiner von beiden automatisch "besser" — NPCs bringen Stabilität und Verlässlichkeit in die Gesellschaft, während Main Characters für Veränderung und Innovation sorgen. Unser kostenloser NPC Test zeigt dir, wo du auf dem Spektrum zwischen NPC und Main Character stehst.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Wie entwickelt man Main Character Energy?</h2>
          <p style={pStyle}>Main Character Energy zu entwickeln bedeutet nicht, egozentrisch zu werden — es bedeutet, das eigene Leben bewusster und aktiver zu gestalten. Der erste Schritt ist Selbstreflexion: Was sind deine echten Werte, Träume und Ziele? Was würdest du tun, wenn du keine Angst vor dem Urteil anderer hättest?</p>
          <p style={pStyle}>Der zweite Schritt ist, kleine Entscheidungen bewusster zu treffen. Statt immer das Gleiche zu essen, den gleichen Weg zu gehen und die gleichen Dinge zu tun, probiere neue Dinge aus. Entwickle eine eigene Meinung zu Themen, die dir wichtig sind, und stehe dazu.</p>
          <p style={pStyle}>Mach den kostenlosen NPC Test jetzt auf persoenlichkeitstest-kostenlos.de und erfahre, wie viel Main Character Energy du bereits hast — und in welchen Bereichen du noch mehr Hauptcharakter-Energie entwickeln kannst.</p>
        </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Häufig gestellte Fragen</h2>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was bedeutet NPC?</div>
            <div style={faqAStyle}>NPC steht für 'Non-Player Character' aus der Gaming-Kultur. Im Internet-Slang bezeichnet es Menschen, die auf Autopilot leben, keine eigenen Meinungen haben und einfach dem Strom folgen — im Gegensatz zum 'Main Character'.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Bin ich ein NPC?</div>
            <div style={faqAStyle}>Das erfährst du in unserem kostenlosen NPC Test! Du beantwortest 10 Fragen zu deinem Verhalten und deiner Lebenseinstellung und erhältst sofort dein Ergebnis.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Was ist Main Character Energy?</div>
            <div style={faqAStyle}>Main Character Energy beschreibt die Haltung, das eigene Leben aktiv zu gestalten, eigene Entscheidungen zu treffen und eine starke, authentische Persönlichkeit zu haben — wie der Hauptcharakter in einem Film.</div>
          </div>

          <div style={faqItemStyle}>
            <div style={faqQStyle}>Ist der NPC Test kostenlos?</div>
            <div style={faqAStyle}>Ja, der NPC Test auf persoenlichkeitstest-kostenlos.de ist 100% kostenlos. Kein Account, keine Registrierung, sofortiges Ergebnis.</div>
          </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Verwandte Tests</h2>
            <div style={relatedStyle}>
          <a href="/rizz" style={relatedItemStyle}>✨ Rizz Test — Wie viel Charisma hast du?</a>
          <a href="/brainrot" style={relatedItemStyle}>🧠 Brainrot Test — Wie Brainrot bist du?</a>
          <a href="/persoenlichkeit" style={relatedItemStyle}>🎭 Persönlichkeitstest — 16 Typen MBTI Test</a>
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
