import Head from "next/head";
import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum | persoenlichkeitstest-kostenlos.de</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ minHeight: "100vh", background: "#060A14", fontFamily: "'DM Sans', system-ui, sans-serif", color: "#fff", maxWidth: 680, margin: "0 auto", padding: "0 16px" }}>
        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #1A2040", marginBottom: 32 }}>
          <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <span style={{ fontSize: 16, fontWeight: 900, color: "#00E5FF" }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>PERSÖNLICHKEITSTEST</span>
          </Link>
          <Link href="/" style={{ fontSize: 11, color: "#7A84A8", textDecoration: "none" }}>← Zurück</Link>
        </nav>

        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, background: "linear-gradient(135deg, #00E5FF, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Impressum</h1>
        <p style={{ fontSize: 12, color: "#7A84A8", marginBottom: 32 }}>Angaben gemäß § 5 TMG</p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Anbieter</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Social Media Venture GmbH<br />
            Schliemannstraße 23<br />
            10437 Berlin<br />
            Deutschland
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Handelsregister</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Registernummer: HRB 162557 B<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Vertreten durch</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Thomas Sander (Geschäftsführer)
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Kontakt</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Telefon: +49 30 959 988 700<br />
            E-Mail: <a href="mailto:info@persoenlichkeitstest-kostenlos.de" style={{ color: "#00E5FF", textDecoration: "none" }}>info@persoenlichkeitstest-kostenlos.de</a>
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Umsatzsteuer-Identifikationsnummer</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            USt-IdNr.: DE298885799<br />
            (gemäß § 27a Umsatzsteuergesetz)
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Thomas Sander<br />
            Social Media Venture GmbH<br />
            Schliemannstraße 23<br />
            10437 Berlin
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Haftungsausschluss</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#A855F7", marginBottom: 8 }}>Haftung für Inhalte</h3>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginBottom: 16 }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#A855F7", marginBottom: 8 }}>Haftung für Links</h3>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginBottom: 16 }}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#A855F7", marginBottom: 8 }}>Urheberrecht</h3>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>Verbraucherstreitbeilegung</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>https://ec.europa.eu/consumers/odr/</a>.<br /><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        {/* Footer */}
        <div style={{ padding: "24px 0", textAlign: "center", borderTop: "1px solid #1A2040", marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
            <Link href="/impressum" style={{ fontSize: 10, color: "#00E5FF", textDecoration: "none" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Datenschutz</Link>
          </div>
          <div style={{ fontSize: 10, color: "#4A5470" }}>© 2026 Social Media Venture GmbH · persoenlichkeitstest-kostenlos.de</div>
        </div>
      </div>
    </>
  );
}
