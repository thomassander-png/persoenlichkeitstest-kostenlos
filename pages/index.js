"use client";
import { useState } from "react";
import Head from "next/head";

const TESTS = [
  { id: "persoenlichkeit", name: "Persönlichkeitstest", emoji: "🧠", desc: "16 Typen — Wer bist du wirklich?", color: "#00E5FF", questions: 12, time: "3 Min", hot: true },
  { id: "rizz", name: "Rizz Score", emoji: "😏", desc: "Wie viel Charisma steckt in dir?", color: "#FF0099", questions: 10, time: "2 Min", hot: true },
  { id: "aura", name: "Aura Check", emoji: "✨", desc: "Welche Energie strahlst du aus?", color: "#A855F7", questions: 10, time: "2 Min", hot: true },
  { id: "brainrot", name: "Brainrot Score", emoji: "🧟", desc: "Wie sehr hat TikTok dein Gehirn zerstört?", color: "#00FF88", questions: 8, time: "2 Min", hot: true },
  { id: "dark", name: "Dark Triad Test", emoji: "🖤", desc: "Narzissmus · Machiavellismus · Psychopathie", color: "#FF2255", questions: 12, time: "3 Min", hot: false },
  { id: "npc", name: "NPC Test", emoji: "🤖", desc: "Main Character oder Hintergrundstatist?", color: "#FFB800", questions: 8, time: "2 Min", hot: false },
  { id: "toxicity", name: "Toxicity Check", emoji: "☢️", desc: "Von Wholesome bis Biohazard", color: "#FF6B35", questions: 10, time: "2 Min", hot: false },
  { id: "redflag", name: "Red Flag Detector", emoji: "🚩", desc: "Wie viele Red Flags hast du?", color: "#FF2255", questions: 10, time: "2 Min", hot: false },
];

const PERSONALITY_QUESTIONS = [
  { q: "Du bist auf einer Party. Was machst du?", a: [
    { text: "Ich bin im Mittelpunkt und unterhalte alle", scores: { E: 3, F: 1 } },
    { text: "Ich führe tiefe Gespräche mit 1-2 Leuten", scores: { I: 3, N: 1 } },
    { text: "Ich beobachte erstmal und warte ab", scores: { I: 2, T: 1 } },
    { text: "Ich organisiere Spiele und Aktivitäten", scores: { E: 2, J: 2 } },
  ]},
  { q: "Wie triffst du wichtige Entscheidungen?", a: [
    { text: "Mit dem Bauchgefühl — ich spüre was richtig ist", scores: { F: 3, N: 1 } },
    { text: "Ich analysiere alle Fakten und Daten", scores: { T: 3, S: 1 } },
    { text: "Ich frage Freunde und Familie um Rat", scores: { F: 2, E: 1 } },
    { text: "Pro-Contra-Liste und dann entscheiden", scores: { T: 2, J: 2 } },
  ]},
  { q: "Dein perfekter Sonntag sieht so aus:", a: [
    { text: "Abenteuer! Spontan was Neues entdecken", scores: { E: 2, P: 2, N: 1 } },
    { text: "Couch, Netflix und absolute Ruhe", scores: { I: 3, S: 1 } },
    { text: "Brunch mit Freunden und dann Sport", scores: { E: 2, S: 1, J: 1 } },
    { text: "Kreativ sein — malen, schreiben, Musik", scores: { I: 1, N: 3 } },
  ]},
  { q: "Ein Freund hat ein Problem. Du:", a: [
    { text: "Hörst zu und zeigst Mitgefühl", scores: { F: 3 } },
    { text: "Suchst sofort nach einer Lösung", scores: { T: 3 } },
    { text: "Teilst eine ähnliche Erfahrung von dir", scores: { E: 1, F: 1, S: 1 } },
    { text: "Gibst ehrliches Feedback, auch wenn es wehtut", scores: { T: 2, J: 1 } },
  ]},
  { q: "Wie gehst du mit Deadlines um?", a: [
    { text: "Ich plane voraus und bin immer fertig", scores: { J: 3, S: 1 } },
    { text: "Unter Druck läuft es bei mir am besten", scores: { P: 3 } },
    { text: "Ich brauche einen detaillierten Zeitplan", scores: { J: 2, T: 1 } },
    { text: "Deadlines stressen mich — ich brauche Flexibilität", scores: { P: 2, F: 1 } },
  ]},
  { q: "Was beschreibt dich besser?", a: [
    { text: "Ich lebe im Hier und Jetzt", scores: { S: 3, P: 1 } },
    { text: "Ich denke ständig über die Zukunft nach", scores: { N: 3, J: 1 } },
    { text: "Ich vertraue auf bewährte Methoden", scores: { S: 2, J: 1 } },
    { text: "Ich suche immer nach neuen Möglichkeiten", scores: { N: 2, P: 1 } },
  ]},
  { q: "In einer Gruppendiskussion bist du:", a: [
    { text: "Die Person die am meisten redet", scores: { E: 3 } },
    { text: "Der stille Beobachter mit den besten Ideen", scores: { I: 3, N: 1 } },
    { text: "Der Vermittler der alle zusammenbringt", scores: { F: 2, E: 1 } },
    { text: "Die Person die Fakten und Logik einbringt", scores: { T: 2, I: 1 } },
  ]},
  { q: "Was nervt dich am meisten?", a: [
    { text: "Unehrlichkeit und Oberflächlichkeit", scores: { N: 2, F: 1, I: 1 } },
    { text: "Ineffizienz und Zeitverschwendung", scores: { T: 2, J: 2 } },
    { text: "Wenn man mich einengt und kontrolliert", scores: { P: 3 } },
    { text: "Chaos und fehlende Struktur", scores: { J: 3, S: 1 } },
  ]},
  { q: "Dein Traumjob wäre:", a: [
    { text: "Kreativdirektor — Ideen zum Leben erwecken", scores: { N: 2, F: 1, P: 1 } },
    { text: "CEO — strategische Entscheidungen treffen", scores: { T: 2, J: 1, E: 1 } },
    { text: "Therapeut — Menschen helfen", scores: { F: 3, I: 1 } },
    { text: "Wissenschaftler — Geheimnisse entschlüsseln", scores: { T: 2, N: 1, I: 1 } },
  ]},
  { q: "Wie reagierst du auf Kritik?", a: [
    { text: "Nehme ich persönlich und denke lange drüber nach", scores: { F: 3, I: 1 } },
    { text: "Analysiere ob sie berechtigt ist", scores: { T: 3 } },
    { text: "Ignoriere ich meistens", scores: { P: 1, E: 1 } },
    { text: "Nutze sie um besser zu werden", scores: { J: 2, T: 1 } },
  ]},
  { q: "Was ist dir wichtiger?", a: [
    { text: "Harmonie und gute Beziehungen", scores: { F: 3 } },
    { text: "Wahrheit und Gerechtigkeit", scores: { T: 3 } },
    { text: "Freiheit und Unabhängigkeit", scores: { P: 2, N: 1 } },
    { text: "Sicherheit und Stabilität", scores: { S: 2, J: 1 } },
  ]},
  { q: "Letzte Frage — Pick a vibe:", a: [
    { text: "🌊 Deep Talk um 3 Uhr nachts", scores: { I: 2, N: 2, F: 1 } },
    { text: "🎉 Festival mit 50.000 Leuten", scores: { E: 3, S: 1, P: 1 } },
    { text: "📊 Einen perfekten Plan aufstellen", scores: { T: 1, J: 2, S: 1 } },
    { text: "🎨 Alleine was Kreatives erschaffen", scores: { I: 2, N: 2, P: 1 } },
  ]},
];

const TYPES = {
  INTJ: { name: "Der Architekt", desc: "Strategisch, unabhängig, visionär. Du siehst das große Bild und hast einen Plan für alles.", pct: "2.1%", celeb: "Elon Musk, Nietzsche" },
  INTP: { name: "Der Denker", desc: "Logisch, kreativ, neugierig. Dein Gehirn hört nie auf zu analysieren.", pct: "3.3%", celeb: "Einstein, Bill Gates" },
  ENTJ: { name: "Der Kommandeur", desc: "Charismatisch, entschlossen, ehrgeizig. Du übernimmst natürlich die Führung.", pct: "1.8%", celeb: "Steve Jobs, Gordon Ramsay" },
  ENTP: { name: "Der Debattierer", desc: "Clever, witzig, provokant. Du liebst intellektuelle Herausforderungen.", pct: "3.2%", celeb: "Mark Twain, Tom Hanks" },
  INFJ: { name: "Der Advokat", desc: "Idealistisch, tiefgründig, mitfühlend. Du verstehst Menschen wie kein anderer.", pct: "1.5%", celeb: "Martin Luther King, Lady Gaga" },
  INFP: { name: "Der Mediator", desc: "Kreativ, empathisch, authentisch. Du lebst nach deinen Werten.", pct: "4.4%", celeb: "Shakespeare, Johnny Depp" },
  ENFJ: { name: "Der Protagonist", desc: "Inspirierend, warmherzig, charismatisch. Menschen folgen dir natürlich.", pct: "2.5%", celeb: "Obama, Oprah" },
  ENFP: { name: "Der Aktivist", desc: "Enthusiastisch, kreativ, sozial. Du siehst Potenzial in jedem.", pct: "8.1%", celeb: "Robin Williams, Robert Downey Jr." },
  ISTJ: { name: "Der Logistiker", desc: "Zuverlässig, gründlich, pflichtbewusst. Auf dich ist immer Verlass.", pct: "11.6%", celeb: "Angela Merkel, Warren Buffett" },
  ISFJ: { name: "Der Verteidiger", desc: "Fürsorglich, loyal, beschützend. Du gibst mehr als du nimmst.", pct: "13.8%", celeb: "Beyoncé, Kate Middleton" },
  ESTJ: { name: "Der Direktor", desc: "Organisiert, direkt, verantwortungsbewusst. Du bringst Ordnung ins Chaos.", pct: "8.7%", celeb: "Judge Judy, Sotomayor" },
  ESFJ: { name: "Der Konsul", desc: "Hilfsbereit, gesellig, beliebt. Du sorgst dafür dass es allen gut geht.", pct: "12.3%", celeb: "Taylor Swift, Jennifer Garner" },
  ISTP: { name: "Der Virtuose", desc: "Praktisch, cool, analytisch. Du löst Probleme mit den Händen.", pct: "5.4%", celeb: "James Bond, Tom Cruise" },
  ISFP: { name: "Der Abenteurer", desc: "Spontan, charmant, sensibel. Du lebst im Moment.", pct: "8.8%", celeb: "Rihanna, Michael Jackson" },
  ESTP: { name: "Der Unternehmer", desc: "Energisch, pragmatisch, mutig. Du handelst erst und denkst dann.", pct: "4.3%", celeb: "Donald Trump, Madonna" },
  ESFP: { name: "Der Entertainer", desc: "Lebensfroh, spontan, großzügig. Jeder Raum wird heller wenn du reinkommst.", pct: "8.5%", celeb: "Adele, Jamie Oliver" },
};

function getType(scores) {
  const E = scores.E || 0, I = scores.I || 0;
  const S = scores.S || 0, N = scores.N || 0;
  const T = scores.T || 0, F = scores.F || 0;
  const J = scores.J || 0, P = scores.P || 0;
  return { code: (E >= I ? "E" : "I") + (S >= N ? "S" : "N") + (T >= F ? "T" : "F") + (J >= P ? "J" : "P"), scores: { E, I, S, N, T, F, J, P } };
}

export default function Home() {
  const [page, setPage] = useState("home");
  const [testId, setTestId] = useState(null);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [selected, setSelected] = useState(null);
  const [resultData, setResultData] = useState(null);

  const startTest = (id) => { setTestId(id); setPage("test"); setCurrent(0); setScores({}); setSelected(null); };
  const goHome = () => { setPage("home"); setTestId(null); setResultData(null); };

  const handleAnswer = (answer) => {
    setSelected(answer);
    const newScores = { ...scores };
    Object.entries(answer.scores).forEach(([key, val]) => { newScores[key] = (newScores[key] || 0) + val; });
    setTimeout(() => {
      setScores(newScores);
      setSelected(null);
      if (current < PERSONALITY_QUESTIONS.length - 1) { setCurrent(current + 1); }
      else { const t = getType(newScores); setResultData({ ...TYPES[t.code], ...t }); setPage("result"); }
    }, 400);
  };

  const dims = [
    { left: "Introvert", right: "Extravert", lKey: "I", rKey: "E", lColor: "#A855F7", rColor: "#FFB800" },
    { left: "Intuition", right: "Sensorik", lKey: "N", rKey: "S", lColor: "#00E5FF", rColor: "#00FF88" },
    { left: "Fühlen", right: "Denken", lKey: "F", rKey: "T", lColor: "#FF0099", rColor: "#00E5FF" },
    { left: "Wahrnehmen", right: "Urteilen", lKey: "P", rKey: "J", lColor: "#FFB800", rColor: "#A855F7" },
  ];

  return (
    <>
      <Head>
        <title>Kostenloser Persönlichkeitstest 2026 | KI-gestützte Analyse</title>
        <meta name="description" content="Entdecke deinen Persönlichkeitstyp mit unserem kostenlosen KI-Persönlichkeitstest. 16 Typen, 12 Fragen, sofortiges Ergebnis. Kein Account nötig." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#060A14", fontFamily: "'DM Sans', system-ui, sans-serif", color: "#fff", maxWidth: 520, margin: "0 auto" }}>
        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #1A2040" }}>
          <div onClick={goHome} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 900, color: "#00E5FF" }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>PERSÖNLICHKEITSTEST</span>
          </div>
          <span style={{ fontSize: 9, color: "#00E5FF", background: "#00E5FF15", padding: "3px 8px", borderRadius: 4, fontWeight: 700 }}>KOSTENLOS</span>
        </nav>

        {/* HOME */}
        {page === "home" && (
          <div>
            <div style={{ textAlign: "center", padding: "40px 20px 30px" }}>
              <div style={{ fontSize: 11, letterSpacing: 5, color: "#7A84A8", marginBottom: 8 }}>KI-GESTÜTZTE ANALYSE</div>
              <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.1, background: "linear-gradient(135deg, #00E5FF 0%, #A855F7 50%, #FF0099 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Wer bist du wirklich?</h1>
              <p style={{ fontSize: 14, color: "#7A84A8", maxWidth: 400, margin: "0 auto 20px" }}>Kostenlose Persönlichkeitstests — wissenschaftlich fundiert, KI-analysiert, sofort Ergebnis.</p>
              <button onClick={() => startTest("persoenlichkeit")} style={{ background: "linear-gradient(135deg, #00E5FF, #A855F7)", color: "#fff", border: "none", borderRadius: 50, padding: "14px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 1 }}>JETZT TESTEN →</button>
              <div style={{ fontSize: 11, color: "#7A84A8", marginTop: 10 }}>Kein Account nötig · 100% kostenlos · 2-3 Minuten</div>
            </div>
            <div style={{ padding: "0 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span style={{ fontSize: 14 }}>🔥</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#FF0099", letterSpacing: 2 }}>TRENDING</span>
              </div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 10 }}>
                {TESTS.filter(t => t.hot).map(test => (
                  <div key={test.id} onClick={() => startTest(test.id)} style={{ minWidth: 150, cursor: "pointer", background: "rgba(22,28,53,0.7)", border: `1px solid ${test.color}20`, borderRadius: 16, padding: 14 }}>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>{test.emoji}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{test.name}</div>
                    <div style={{ fontSize: 10, color: "#7A84A8", marginBottom: 8 }}>{test.desc}</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span style={{ fontSize: 9, color: test.color, background: `${test.color}15`, padding: "2px 6px", borderRadius: 4 }}>{test.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "20px 16px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: 2, marginBottom: 12 }}>ALLE TESTS</div>
              {TESTS.map(test => (
                <div key={test.id} onClick={() => startTest(test.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "rgba(22,28,53,0.5)", borderRadius: 12, marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ fontSize: 24, width: 40, textAlign: "center" }}>{test.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{test.name}</div>
                    <div style={{ fontSize: 10, color: "#7A84A8" }}>{test.desc}</div>
                  </div>
                  <div style={{ fontSize: 10, color: test.color, fontWeight: 700 }}>{test.time}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "20px 16px", borderTop: "1px solid #1A2040" }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Kostenloser Persönlichkeitstest 2026</h2>
              <p style={{ fontSize: 11, color: "#7A84A8", lineHeight: 1.6 }}>Entdecke deinen Persönlichkeitstyp mit unserem kostenlosen KI-gestützten Persönlichkeitstest. Basierend auf den 16 Persönlichkeitstypen analysiert unser Test deine Stärken, Schwächen und versteckten Eigenschaften. Über 12 wissenschaftlich fundierte Fragen erfährst du, ob du ein Architekt, Mediator, Entertainer oder einer der 13 anderen Typen bist. Kein Account nötig, 100% kostenlos, sofortiges Ergebnis.</p>
            </div>
            <div style={{ padding: "16px", textAlign: "center", borderTop: "1px solid #1A2040" }}>
              <div style={{ fontSize: 10, color: "#7A84A8" }}>© 2026 persoenlichkeitstest-kostenlos.de</div>
            </div>
          </div>
        )}

        {/* TEST */}
        {page === "test" && testId === "persoenlichkeit" && (
          <div style={{ padding: "16px", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <button onClick={goHome} style={{ background: "none", border: "none", color: "#7A84A8", cursor: "pointer", fontSize: 13 }}>✕</button>
              <span style={{ fontSize: 11, color: "#7A84A8" }}>{current + 1} / {PERSONALITY_QUESTIONS.length}</span>
              <span style={{ fontSize: 11, color: "#00E5FF" }}>🧠</span>
            </div>
            <div style={{ height: 4, background: "#1A2040", borderRadius: 2, marginBottom: 28, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${((current + 1) / PERSONALITY_QUESTIONS.length) * 100}%`, background: "linear-gradient(90deg, #00E5FF, #A855F7)", borderRadius: 2, transition: "width 0.4s ease" }} />
            </div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.3 }}>{PERSONALITY_QUESTIONS[current].q}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PERSONALITY_QUESTIONS[current].a.map((answer, i) => (
                <button key={i} onClick={() => !selected && handleAnswer(answer)} style={{ background: selected === answer ? "rgba(0,229,255,0.15)" : "rgba(22,28,53,0.7)", border: `1px solid ${selected === answer ? "#00E5FF" : "#1A2040"}`, borderRadius: 12, padding: "14px 16px", textAlign: "left", color: "#D8DDF0", fontSize: 13, cursor: selected ? "default" : "pointer", transition: "all 0.2s", opacity: selected && selected !== answer ? 0.4 : 1 }}>
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TEST - Coming Soon */}
        {page === "test" && testId !== "persoenlichkeit" && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{TESTS.find(t => t.id === testId)?.emoji}</div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{TESTS.find(t => t.id === testId)?.name}</h2>
            <p style={{ fontSize: 13, color: "#7A84A8", marginBottom: 24 }}>Dieser Test wird bald freigeschaltet!</p>
            <button onClick={goHome} style={{ background: "rgba(22,28,53,0.7)", color: "#00E5FF", border: "1px solid #00E5FF40", borderRadius: 50, padding: "12px 28px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>← Zurück</button>
          </div>
        )}

        {/* RESULT */}
        {page === "result" && resultData && (
          <div style={{ padding: "20px 16px", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: "#7A84A8", letterSpacing: 3, marginBottom: 6 }}>DEIN TYP</div>
              <div style={{ display: "inline-block", padding: "8px 24px", borderRadius: 50, background: "linear-gradient(135deg, #00E5FF20, #A855F720)", border: "1px solid #00E5FF40", marginBottom: 10 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#00E5FF", letterSpacing: 4 }}>{resultData.code}</span>
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 6px" }}>{resultData.name}</h2>
              <div style={{ fontSize: 12, color: "#7A84A8" }}>Nur {resultData.pct} der Bevölkerung · {resultData.celeb}</div>
            </div>
            <div style={{ background: "rgba(22,28,53,0.7)", borderRadius: 16, padding: 16, border: "1px solid #1A204080", marginBottom: 20 }}>
              <p style={{ fontSize: 14, color: "#D8DDF0", lineHeight: 1.6, margin: 0 }}>{resultData.desc}</p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#7A84A8", letterSpacing: 2, marginBottom: 10 }}>DEIN PROFIL</div>
              {dims.map((d, i) => {
                const lVal = resultData.scores[d.lKey] || 0, rVal = resultData.scores[d.rKey] || 0;
                const lPct = Math.round((lVal / (lVal + rVal || 1)) * 100);
                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3 }}>
                      <span style={{ color: d.lColor, fontWeight: 700 }}>{d.left} {lPct}%</span>
                      <span style={{ color: d.rColor, fontWeight: 700 }}>{100 - lPct}% {d.right}</span>
                    </div>
                    <div style={{ height: 8, background: "#1A2040", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                      <div style={{ width: `${lPct}%`, background: d.lColor, transition: "width 0.6s ease" }} />
                      <div style={{ width: `${100 - lPct}%`, background: d.rColor, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ background: "rgba(22,28,53,0.7)", borderRadius: 16, padding: 16, border: "1px dashed #7A84A840", marginBottom: 20, position: "relative", overflow: "hidden" }}>
              <div style={{ filter: "blur(4px)", pointerEvents: "none" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Detaillierte Analyse</div>
                <div style={{ fontSize: 10, color: "#7A84A8", lineHeight: 1.5 }}>Deine Top-3 Stärken sind Kreativität, strategisches Denken und emotionale Intelligenz. In Beziehungen tendierst du dazu einen Partner zu suchen der deine Werte teilt...</div>
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 20 }}>🔒</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginTop: 4 }}>Detail-Analyse freischalten</div>
                <div style={{ fontSize: 10, color: "#7A84A8", marginTop: 2 }}>Teile dein Ergebnis oder schau ein kurzes Video</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {[{ name: "WhatsApp", color: "#25D366", icon: "💬" }, { name: "X", color: "#1DA1F2", icon: "𝕏" }, { name: "Link", color: "#7A84A8", icon: "🔗" }].map((s, i) => (
                <button key={i} style={{ flex: 1, background: `${s.color}15`, border: `1px solid ${s.color}30`, borderRadius: 10, padding: "10px 8px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <span style={{ fontSize: 9, color: s.color, fontWeight: 600 }}>{s.name}</span>
                </button>
              ))}
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#7A84A8", letterSpacing: 2, marginBottom: 10 }}>WEITERMACHEN</div>
              <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
                {TESTS.filter(t => t.id !== "persoenlichkeit").slice(0, 4).map(t => (
                  <div key={t.id} onClick={() => startTest(t.id)} style={{ minWidth: 120, background: "rgba(22,28,53,0.7)", borderRadius: 12, padding: 12, cursor: "pointer", border: `1px solid ${t.color}20` }}>
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{t.emoji}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={goHome} style={{ width: "100%", background: "rgba(22,28,53,0.7)", color: "#7A84A8", border: "1px solid #1A2040", borderRadius: 12, padding: "12px", fontSize: 12, cursor: "pointer" }}>← Alle Tests</button>
          </div>
        )}
      </div>
    </>
  );
}
