import Head from "next/head";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung | persoenlichkeitstest-kostenlos.de</title>
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

        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, background: "linear-gradient(135deg, #00E5FF, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Datenschutzerklärung</h1>
        <p style={{ fontSize: 12, color: "#7A84A8", marginBottom: 32 }}>Zuletzt aktualisiert: März 2026 · gemäß DSGVO und BDSG</p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>1. Verantwortlicher</h2>
          <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.8, margin: 0 }}>
            Social Media Venture GmbH<br />
            Schliemannstraße 23, 10437 Berlin<br />
            Telefon: +49 30 959 988 700<br />
            E-Mail: <a href="mailto:info@persoenlichkeitstest-kostenlos.de" style={{ color: "#00E5FF", textDecoration: "none" }}>info@persoenlichkeitstest-kostenlos.de</a>
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>2. Allgemeines zur Datenverarbeitung</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>3. Hosting durch Vercel</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel verarbeitet beim Aufruf unserer Website automatisch Server-Log-Dateien, die folgende Informationen enthalten können: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge, HTTP-Statuscode sowie Browser- und Betriebssystemkennung. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>https://vercel.com/legal/privacy-policy</a>.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>4. Cookies und Tracking</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
            Unsere Website verwendet Cookies und ähnliche Tracking-Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen:
          </p>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
            <strong style={{ color: "#D8DDF0" }}>Technisch notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            <strong style={{ color: "#D8DDF0" }}>Analyse- und Marketing-Cookies:</strong> Diese werden nur mit Ihrer Einwilligung gesetzt (Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>5. Google Analytics 4</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Diese Website nutzt Google Analytics 4 (GA4), einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. GA4 verwendet Cookies und ähnliche Technologien, um Informationen über die Nutzung unserer Website zu sammeln und auszuwerten. Die dabei erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.<br /><br />
            Wir haben die IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb der EU/des EWR gekürzt wird. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Erfassung durch Google Analytics verhindern, indem Sie das <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>Browser-Add-on zur Deaktivierung von Google Analytics</a> installieren.<br /><br />
            Weitere Informationen zur Datennutzung durch Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>https://policies.google.com/privacy</a>.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>6. Google AdSense</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Diese Website verwendet Google AdSense, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, zur Einbindung von Werbeanzeigen. Google AdSense verwendet Cookies und Web-Beacons, um personalisierte Werbung anzuzeigen. Dabei werden Informationen über Ihre Nutzung dieser und anderer Websites gesammelt. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).<br /><br />
            Sie können personalisierte Werbung unter <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>https://www.google.com/settings/ads</a> deaktivieren. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#00E5FF" }}>https://policies.google.com/privacy</a>.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>7. E-Mail-Kontakt und Newsletter</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Wenn Sie uns per E-Mail kontaktieren oder sich für unseren Newsletter anmelden, werden die von Ihnen übermittelten Daten (E-Mail-Adresse, ggf. Name) zur Bearbeitung Ihrer Anfrage bzw. zur Zusendung des Newsletters verarbeitet. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder zur Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Sie können Ihre Einwilligung zum Newsletter-Empfang jederzeit widerrufen, indem Sie auf den Abmelde-Link in der jeweiligen E-Mail klicken oder uns unter <a href="mailto:info@persoenlichkeitstest-kostenlos.de" style={{ color: "#00E5FF", textDecoration: "none" }}>info@persoenlichkeitstest-kostenlos.de</a> kontaktieren.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>8. Ihre Rechte als betroffene Person (DSGVO Art. 13–21)</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
          </p>
          <div style={{ background: "rgba(22,28,53,0.7)", borderRadius: 12, padding: 16, border: "1px solid #1A2040" }}>
            {[
              { title: "Recht auf Auskunft (Art. 15 DSGVO)", desc: "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden, sowie Auskunft über diese Daten und weitere Informationen zu erhalten." },
              { title: "Recht auf Berichtigung (Art. 16 DSGVO)", desc: "Sie haben das Recht, unverzüglich die Berichtigung unrichtiger personenbezogener Daten zu verlangen." },
              { title: "Recht auf Löschung (Art. 17 DSGVO)", desc: "Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen erfüllt sind." },
              { title: "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)", desc: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen." },
              { title: "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)", desc: "Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten." },
              { title: "Recht auf Widerspruch (Art. 21 DSGVO)", desc: "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen." },
              { title: "Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)", desc: "Sie haben das Recht, Ihre erteilte Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt." },
            ].map((r, i) => (
              <div key={i} style={{ marginBottom: i < 6 ? 12 : 0, paddingBottom: i < 6 ? 12 : 0, borderBottom: i < 6 ? "1px solid #1A2040" : "none" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#D8DDF0", marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7, marginTop: 12 }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@persoenlichkeitstest-kostenlos.de" style={{ color: "#00E5FF", textDecoration: "none" }}>info@persoenlichkeitstest-kostenlos.de</a><br /><br />
            Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>9. Datensicherheit</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#00E5FF", marginBottom: 12 }}>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p style={{ fontSize: 13, color: "#7A84A8", lineHeight: 1.7 }}>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <a href="https://persoenlichkeitstest-kostenlos.de/datenschutz" style={{ color: "#00E5FF", textDecoration: "none" }}>persoenlichkeitstest-kostenlos.de/datenschutz</a> abgerufen und ausgedruckt werden.
          </p>
        </section>

        {/* Footer */}
        <div style={{ padding: "24px 0", textAlign: "center", borderTop: "1px solid #1A2040", marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
            <Link href="/impressum" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ fontSize: 10, color: "#00E5FF", textDecoration: "none" }}>Datenschutz</Link>
          </div>
          <div style={{ fontSize: 10, color: "#4A5470" }}>© 2026 Social Media Venture GmbH · persoenlichkeitstest-kostenlos.de</div>
        </div>
      </div>
    </>
  );
}
