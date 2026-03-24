"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

// ─── TEST DEFINITIONS ───────────────────────────────────────────────────────
const TESTS = [
  { id: "persoenlichkeit", name: "Persönlichkeitstest", emoji: "🧠", desc: "16 Typen — Wer bist du wirklich?", color: "#00E5FF", time: "3 Min", hot: true },
  { id: "rizz", name: "Rizz Score", emoji: "😏", desc: "Wie viel Charisma steckt in dir?", color: "#FF0099", time: "2 Min", hot: true },
  { id: "aura", name: "Aura Check", emoji: "✨", desc: "Welche Energie strahlst du aus?", color: "#A855F7", time: "2 Min", hot: true },
  { id: "brainrot", name: "Brainrot Score", emoji: "🧟", desc: "Wie sehr hat TikTok dein Gehirn beeinflusst?", color: "#00FF88", time: "2 Min", hot: true },
  { id: "dark", name: "Dark Triad Test", emoji: "🖤", desc: "Narzissmus · Machiavellismus · Psychopathie", color: "#FF2255", time: "3 Min", hot: false },
  { id: "npc", name: "NPC Test", emoji: "🤖", desc: "Main Character oder Hintergrundstatist?", color: "#FFB800", time: "2 Min", hot: false },
  { id: "toxicity", name: "Toxicity Check", emoji: "☢️", desc: "Von Wholesome bis kritisch", color: "#FF6B35", time: "2 Min", hot: false },
  { id: "redflag", name: "Red Flag Detector", emoji: "🚩", desc: "Wie viele Red Flags hast du?", color: "#FF2255", time: "2 Min", hot: false },
];

// ─── PERSÖNLICHKEITSTEST FRAGEN ──────────────────────────────────────────────
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

const PERSONALITY_TYPES = {
  INTJ: { name: "Der Architekt", desc: "Strategisch, unabhängig, visionär. Du siehst das große Bild und hast einen Plan für alles. Als INTJ gehörst du zu den seltensten Persönlichkeitstypen — nur 2,1% der Menschen teilen diesen Typ. Du kombinierst analytisches Denken mit kreativer Vorstellungskraft und setzt dir hohe Standards für dich selbst und andere.", pct: "2.1%", celeb: "Elon Musk, Nietzsche" },
  INTP: { name: "Der Denker", desc: "Logisch, kreativ, neugierig. Dein Gehirn hört nie auf zu analysieren. INTPs sind fasziniert von Ideen und Theorien — du liebst es, komplexe Systeme zu durchdenken und innovative Lösungen zu finden. Mit 3,3% der Bevölkerung bist du selten, aber dein Einfluss auf die Welt ist enorm.", pct: "3.3%", celeb: "Einstein, Bill Gates" },
  ENTJ: { name: "Der Kommandeur", desc: "Charismatisch, entschlossen, ehrgeizig. Du übernimmst natürlich die Führung. ENTJs sind geborene Anführer, die Ineffizienz nicht tolerieren und immer nach dem besten Weg suchen. Nur 1,8% der Menschen sind ENTJs — du bist in guter Gesellschaft mit einigen der einflussreichsten Persönlichkeiten der Geschichte.", pct: "1.8%", celeb: "Steve Jobs, Gordon Ramsay" },
  ENTP: { name: "Der Debattierer", desc: "Clever, witzig, provokant. Du liebst intellektuelle Herausforderungen und siehst jede Diskussion als Möglichkeit, neue Perspektiven zu entdecken. ENTPs sind bekannt dafür, den Advocatus Diaboli zu spielen — nicht aus Bosheit, sondern aus echtem Interesse an der Wahrheit.", pct: "3.2%", celeb: "Mark Twain, Tom Hanks" },
  INFJ: { name: "Der Advokat", desc: "Idealistisch, tiefgründig, mitfühlend. Du verstehst Menschen wie kein anderer. INFJs sind der seltenste Persönlichkeitstyp — nur 1,5% der Bevölkerung. Du hast eine einzigartige Fähigkeit, die Bedürfnisse und Motivationen anderer zu verstehen, bevor sie diese selbst artikulieren können.", pct: "1.5%", celeb: "Martin Luther King, Lady Gaga" },
  INFP: { name: "Der Mediator", desc: "Kreativ, empathisch, authentisch. Du lebst nach deinen Werten und suchst nach tiefem Sinn in allem. INFPs sind leidenschaftliche Idealisten, die die Welt durch ihre eigene einzigartige Linse sehen. Mit 4,4% der Bevölkerung bringst du eine wichtige Perspektive in die Welt.", pct: "4.4%", celeb: "Shakespeare, Johnny Depp" },
  ENFJ: { name: "Der Protagonist", desc: "Inspirierend, warmherzig, charismatisch. Menschen folgen dir natürlich, weil du echtes Interesse an ihrem Wohlbefinden zeigst. ENFJs sind natürliche Mentoren und Lehrer — du siehst das Potenzial in jedem Menschen und hilfst ihm, es zu entfalten.", pct: "2.5%", celeb: "Obama, Oprah" },
  ENFP: { name: "Der Aktivist", desc: "Enthusiastisch, kreativ, sozial. Du siehst Potenzial in jedem und in jeder Situation. ENFPs bringen Energie und Begeisterung in alles, was sie tun. Mit 8,1% der Bevölkerung bist du einer der häufigeren Typen — aber deine Einzigartigkeit macht dich unvergesslich.", pct: "8.1%", celeb: "Robin Williams, Robert Downey Jr." },
  ISTJ: { name: "Der Logistiker", desc: "Zuverlässig, gründlich, pflichtbewusst. Auf dich ist immer Verlass. ISTJs sind das Rückgrat der Gesellschaft — du hältst dein Wort, erledigst deine Aufgaben und erwartest dasselbe von anderen. Mit 11,6% bist du einer der häufigsten Typen.", pct: "11.6%", celeb: "Angela Merkel, Warren Buffett" },
  ISFJ: { name: "Der Verteidiger", desc: "Fürsorglich, loyal, beschützend. Du gibst mehr als du nimmst und sorgst dafür, dass alle um dich herum sich wohl fühlen. ISFJs sind die stillen Helden des Alltags — mit 13,8% der Bevölkerung der häufigste Typ.", pct: "13.8%", celeb: "Beyoncé, Kate Middleton" },
  ESTJ: { name: "Der Direktor", desc: "Organisiert, direkt, verantwortungsbewusst. Du bringst Ordnung ins Chaos und liebst klare Strukturen. ESTJs sind natürliche Manager und Organisatoren, die Traditionen respektieren und hohe Standards setzen.", pct: "8.7%", celeb: "Judge Judy, Sotomayor" },
  ESFJ: { name: "Der Konsul", desc: "Hilfsbereit, gesellig, beliebt. Du sorgst dafür dass es allen gut geht und bist das soziale Zentrum jeder Gruppe. ESFJs sind warmherzige, fürsorgliche Menschen, die Harmonie und Zusammengehörigkeit schätzen.", pct: "12.3%", celeb: "Taylor Swift, Jennifer Garner" },
  ISTP: { name: "Der Virtuose", desc: "Praktisch, cool, analytisch. Du löst Probleme mit den Händen und liebst es, zu verstehen wie Dinge funktionieren. ISTPs sind ruhige Beobachter, die in Krisenzeiten aufblühen und immer die praktischste Lösung finden.", pct: "5.4%", celeb: "James Bond, Tom Cruise" },
  ISFP: { name: "Der Abenteurer", desc: "Spontan, charmant, sensibel. Du lebst im Moment und hast einen ausgeprägten Sinn für Ästhetik. ISFPs sind künstlerische Seelen, die die Schönheit im Alltag sehen und authentische Verbindungen schätzen.", pct: "8.8%", celeb: "Rihanna, Michael Jackson" },
  ESTP: { name: "Der Unternehmer", desc: "Energisch, pragmatisch, mutig. Du handelst erst und denkst dann — und das funktioniert bei dir erstaunlich gut. ESTPs sind charmante Risikonehmer, die in der realen Welt aufblühen und andere mit ihrer Energie mitreißen.", pct: "4.3%", celeb: "Donald Trump, Madonna" },
  ESFP: { name: "Der Entertainer", desc: "Lebensfroh, spontan, großzügig. Jeder Raum wird heller wenn du reinkommst. ESFPs lieben das Leben und teilen diese Freude mit allen um sie herum. Du bist spontan, energiegeladen und weißt wie man eine Party schmeißt.", pct: "8.5%", celeb: "Adele, Jamie Oliver" },
};

// ─── RIZZ SCORE FRAGEN ───────────────────────────────────────────────────────
const RIZZ_QUESTIONS = [
  { q: "Jemand Attraktives schaut dich an. Was machst du?", a: [
    { text: "Lächle zurück und halte den Blickkontakt", score: 4 },
    { text: "Schau weg und werde rot", score: 1 },
    { text: "Geh rüber und sag was Witziges", score: 5 },
    { text: "Ignoriere es — war bestimmt Zufall", score: 0 },
  ]},
  { q: "Wie würdest du jemanden ansprechen?", a: [
    { text: "Mit einem originellen, persönlichen Kommentar", score: 5 },
    { text: "Mit einem klassischen 'Hi, ich bin...'", score: 3 },
    { text: "Ich warte bis sie mich ansprechen", score: 1 },
    { text: "Ich schicke lieber eine DM", score: 2 },
  ]},
  { q: "Dein Date fragt: 'Was machst du so?' Du antwortest:", a: [
    { text: "Mit einer spannenden, kurzen Geschichte", score: 5 },
    { text: "Nenne meinen Job und frage zurück", score: 3 },
    { text: "Erzähle alles über mich in 10 Minuten", score: 1 },
    { text: "Sage 'nichts Besonderes' und lache", score: 2 },
  ]},
  { q: "Wie reagierst du auf Ablehnung?", a: [
    { text: "Lache drüber und mache weiter", score: 5 },
    { text: "Es trifft mich, aber ich erhole mich schnell", score: 4 },
    { text: "Ich denke tagelang darüber nach", score: 1 },
    { text: "Ich versuche sie zu überzeugen", score: 0 },
  ]},
  { q: "Was ist dein Geheimnis beim Flirten?", a: [
    { text: "Echtes Interesse zeigen und zuhören", score: 5 },
    { text: "Witze und Humor", score: 4 },
    { text: "Ich habe kein Geheimnis — ich bin einfach ich", score: 3 },
    { text: "Ich flirte eigentlich nicht bewusst", score: 2 },
  ]},
  { q: "Jemand gibt dir ein Kompliment. Du:", a: [
    { text: "Bedankst dich und gibst eines zurück", score: 5 },
    { text: "Wirst verlegen und sagst 'ach was'", score: 2 },
    { text: "Nimmst es selbstbewusst an", score: 4 },
    { text: "Zweifelst ob es ernst gemeint ist", score: 1 },
  ]},
  { q: "Wie ist deine Körpersprache normalerweise?", a: [
    { text: "Offen, aufrecht, Augenkontakt", score: 5 },
    { text: "Entspannt und locker", score: 4 },
    { text: "Eher zurückhaltend und verschlossen", score: 1 },
    { text: "Ich denke nicht darüber nach", score: 2 },
  ]},
  { q: "Was denkst du über dich selbst?", a: [
    { text: "Ich bin interessant und habe viel zu bieten", score: 5 },
    { text: "Ich bin okay, könnte aber besser sein", score: 3 },
    { text: "Ich bin nicht besonders attraktiv", score: 1 },
    { text: "Ich bin einzigartig auf meine Art", score: 4 },
  ]},
  { q: "Beim ersten Date bist du:", a: [
    { text: "Entspannt, witzig, präsent", score: 5 },
    { text: "Nervös aber charmant", score: 3 },
    { text: "Sehr nervös und redselig", score: 1 },
    { text: "Ruhig und beobachtend", score: 2 },
  ]},
  { q: "Dein Rizz-Stil ist:", a: [
    { text: "Verbal — ich kann mit Worten überzeugen", score: 5 },
    { text: "Non-verbal — meine Präsenz spricht für sich", score: 4 },
    { text: "Humor — ich mache sie zum Lachen", score: 4 },
    { text: "Ich habe noch keinen Stil gefunden", score: 1 },
  ]},
];

const RIZZ_RESULTS = [
  { min: 0, max: 15, title: "Rizz-Anfänger", emoji: "🌱", desc: "Dein Rizz steckt noch in den Kinderschuhen — aber das ist kein Problem! Rizz ist eine Fähigkeit, die man lernen kann. Fange damit an, mehr Augenkontakt zu halten, aktiv zuzuhören und dich selbst besser kennenzulernen. Selbstvertrauen ist die Basis von allem." },
  { min: 16, max: 28, title: "Solider Rizz", emoji: "😊", desc: "Du hast eine gute Basis! Du bist sympathisch und weißt wie man Gespräche führt. Mit etwas mehr Selbstvertrauen und Spontaneität kannst du deinen Rizz auf das nächste Level bringen. Übe, in sozialen Situationen präsenter zu sein." },
  { min: 29, max: 38, title: "Starker Rizz", emoji: "🔥", desc: "Dein Rizz ist stark! Du weißt wie man Verbindungen aufbaut, bist selbstbewusst und authentisch. Menschen fühlen sich von dir angezogen, weil du echtes Interesse zeigst und eine positive Energie ausstrahlst." },
  { min: 39, max: 50, title: "Unwiderstehlicher Rizz", emoji: "⚡", desc: "Maximaler Rizz! Du bist das, was andere anstreben. Deine Kombination aus Selbstvertrauen, Humor, Empathie und Authentizität macht dich magnetisch. Du weißt genau wie du in sozialen Situationen glänzt — ohne es zu erzwingen." },
];

// ─── AURA CHECK FRAGEN ───────────────────────────────────────────────────────
const AURA_QUESTIONS = [
  { q: "Welche Farbe zieht dich am meisten an?", a: [
    { text: "Tiefes Blau oder Violett", score: "mystisch" },
    { text: "Strahlendes Gold oder Gelb", score: "solar" },
    { text: "Frisches Grün oder Türkis", score: "heilend" },
    { text: "Intensives Rot oder Orange", score: "feuer" },
  ]},
  { q: "Wie reagieren andere auf deine Anwesenheit?", a: [
    { text: "Sie werden ruhiger und entspannter", score: "heilend" },
    { text: "Sie werden energetischer und motivierter", score: "solar" },
    { text: "Sie fühlen sich fasziniert und neugierig", score: "mystisch" },
    { text: "Sie werden lebhafter und aufgeregter", score: "feuer" },
  ]},
  { q: "Was ist deine stärkste Eigenschaft?", a: [
    { text: "Intuition — ich spüre was andere fühlen", score: "mystisch" },
    { text: "Wärme — ich mache alle willkommen", score: "heilend" },
    { text: "Energie — ich reißt andere mit", score: "feuer" },
    { text: "Klarheit — ich sehe Lösungen wo andere Probleme sehen", score: "solar" },
  ]},
  { q: "Wo fühlst du dich am wohlsten?", a: [
    { text: "In der Natur, besonders nachts unter Sternen", score: "mystisch" },
    { text: "Im Wald oder am Wasser", score: "heilend" },
    { text: "In der Stadt, wo viel passiert", score: "feuer" },
    { text: "An einem sonnigen, offenen Ort", score: "solar" },
  ]},
  { q: "Was tust du wenn jemand traurig ist?", a: [
    { text: "Ich höre zu und halte Raum für ihre Gefühle", score: "heilend" },
    { text: "Ich versuche sie aufzuheitern und abzulenken", score: "feuer" },
    { text: "Ich teile tiefe Gedanken die helfen könnten", score: "mystisch" },
    { text: "Ich gebe praktische Ratschläge", score: "solar" },
  ]},
  { q: "Dein Schlafrhythmus:", a: [
    { text: "Nachtmensch — ich lebe nach Mitternacht auf", score: "mystisch" },
    { text: "Früh ins Bett, früh aufstehen", score: "solar" },
    { text: "Unregelmäßig — je nach Energie", score: "feuer" },
    { text: "Sanft — ich brauche viel Schlaf zum Regenerieren", score: "heilend" },
  ]},
  { q: "Welches Tier repräsentiert dich am besten?", a: [
    { text: "Wolf oder Rabe — weise und unabhängig", score: "mystisch" },
    { text: "Löwe oder Adler — mutig und führend", score: "solar" },
    { text: "Delfin oder Schmetterling — frei und verspielt", score: "feuer" },
    { text: "Hirsch oder Katze — sanft und intuitiv", score: "heilend" },
  ]},
  { q: "Was ist deine Beziehung zur Spiritualität?", a: [
    { text: "Sehr wichtig — ich glaube an mehr als das Sichtbare", score: "mystisch" },
    { text: "Ich finde Spiritualität in der Natur und Verbindung", score: "heilend" },
    { text: "Ich lebe im Moment — das ist meine Spiritualität", score: "feuer" },
    { text: "Ich glaube an Vernunft und innere Stärke", score: "solar" },
  ]},
];

const AURA_RESULTS = {
  mystisch: { title: "Mystische Aura 🔮", color: "#A855F7", desc: "Deine Aura ist tief violett und geheimnisvoll. Du besitzt eine seltene Intuition und eine Verbindung zur unsichtbaren Welt. Menschen fühlen sich von dir fasziniert, auch wenn sie nicht genau sagen können warum. Du siehst Muster und Bedeutungen, die anderen verborgen bleiben. Deine Energie ist ruhig aber tiefgründig — wie ein stiller See mit unbekannter Tiefe." },
  solar: { title: "Solare Aura ☀️", color: "#FFB800", desc: "Deine Aura strahlt goldenes Licht aus. Du bist eine natürliche Führungspersönlichkeit mit klarer Vision und positiver Energie. Menschen fühlen sich in deiner Nähe motiviert und aufgebaut. Du bringst Licht in dunkle Räume — nicht durch Lautstärke, sondern durch deine authentische Präsenz und innere Stärke." },
  heilend: { title: "Heilende Aura 💚", color: "#00FF88", desc: "Deine Aura ist tiefes Smaragdgrün — die Farbe der Heilung und des Wachstums. Du hast eine natürliche Gabe, anderen Trost und Geborgenheit zu geben. Menschen öffnen sich dir intuitiv und teilen Dinge, die sie sonst niemandem erzählen würden. Deine Energie ist nährend wie die Natur selbst." },
  feuer: { title: "Feuer-Aura 🔥", color: "#FF6B35", desc: "Deine Aura brennt in leuchtendem Orange-Rot. Du bist pure Energie — leidenschaftlich, spontan und ansteckend begeistert. Wo du auftauchst, passiert etwas. Du lebst intensiv und inspirierst andere durch deine Lebendigkeit. Deine Energie ist wie ein Feuer: wärmend für die Nähestehenden, beeindruckend für alle anderen." },
};

// ─── BRAINROT FRAGEN ─────────────────────────────────────────────────────────
const BRAINROT_QUESTIONS = [
  { q: "Wie lange schaust du täglich TikTok/Reels?", a: [
    { text: "Gar nicht oder unter 30 Minuten", score: 0 },
    { text: "1-2 Stunden", score: 2 },
    { text: "3-4 Stunden", score: 4 },
    { text: "Ich verliere den Überblick — einfach sehr lange", score: 5 },
  ]},
  { q: "Kannst du noch einen langen Text lesen ohne abgelenkt zu werden?", a: [
    { text: "Ja, kein Problem", score: 0 },
    { text: "Meistens schon, manchmal schweife ich ab", score: 2 },
    { text: "Ich scrolle oft nach unten bevor ich fertig bin", score: 4 },
    { text: "Ich lese kaum noch lange Texte", score: 5 },
  ]},
  { q: "Denkst du manchmal in TikTok-Sounds oder Memes?", a: [
    { text: "Nein, nie", score: 0 },
    { text: "Manchmal kommt ein Sound in meinen Kopf", score: 2 },
    { text: "Regelmäßig — Situationen erinnern mich an Memes", score: 4 },
    { text: "Mein ganzes Denken ist in Meme-Format", score: 5 },
  ]},
  { q: "Wie lange kannst du ohne Handy sitzen?", a: [
    { text: "Stundenlang — kein Problem", score: 0 },
    { text: "30-60 Minuten, dann wird es unruhig", score: 2 },
    { text: "Maximal 15 Minuten", score: 4 },
    { text: "Ich greife automatisch zum Handy ohne es zu merken", score: 5 },
  ]},
  { q: "Wie oft verwendest du Internet-Slang im echten Leben?", a: [
    { text: "Kaum oder nie", score: 0 },
    { text: "Ab und zu mit Freunden", score: 2 },
    { text: "Regelmäßig — 'no cap', 'slay', 'based' etc.", score: 3 },
    { text: "Ich spreche fast nur noch in Slang und Memes", score: 5 },
  ]},
  { q: "Kannst du dir einen Film ohne Handy anschauen?", a: [
    { text: "Ja, ich bin voll dabei", score: 0 },
    { text: "Meistens, aber ich checke manchmal kurz", score: 2 },
    { text: "Ich scrolle parallel auf dem Handy", score: 4 },
    { text: "Ich schaue kaum noch Filme — zu lang", score: 5 },
  ]},
  { q: "Was denkst du über Videos die länger als 10 Minuten sind?", a: [
    { text: "Kein Problem, wenn der Inhalt gut ist", score: 0 },
    { text: "Ich schaue sie, aber springe manchmal vor", score: 2 },
    { text: "Ich schaue nur noch Shorts und Reels", score: 4 },
    { text: "10 Minuten? Das ist ein Spielfilm für mich", score: 5 },
  ]},
  { q: "Wie ist deine Aufmerksamkeitsspanne bei Gesprächen?", a: [
    { text: "Ich bin voll präsent und höre zu", score: 0 },
    { text: "Meistens gut, manchmal wandern Gedanken", score: 2 },
    { text: "Ich denke oft an andere Dinge während jemand redet", score: 4 },
    { text: "Ich unterbreche oft oder verliere den Faden", score: 5 },
  ]},
];

const BRAINROT_RESULTS = [
  { min: 0, max: 8, title: "Brainrot-frei 🧠", emoji: "✅", desc: "Dein Gehirn ist in ausgezeichnetem Zustand! Du hast eine gesunde Beziehung zu Social Media und kannst dich noch konzentrieren. Deine Aufmerksamkeitsspanne ist intakt — ein seltenes Gut in der heutigen Zeit. Weiter so!" },
  { min: 9, max: 18, title: "Leichter Brainrot 🌀", emoji: "😅", desc: "Du zeigst erste Anzeichen von digitalem Overload. Deine Aufmerksamkeitsspanne ist noch okay, aber du merkst wie Social Media dein Denken beeinflusst. Ein paar bewusste Digital-Detox-Tage würden dir gut tun." },
  { min: 19, max: 28, title: "Mittlerer Brainrot 🧟", emoji: "⚠️", desc: "Das Brainrot hat sich eingenistet. Du denkst in Memes, deine Aufmerksamkeitsspanne leidet und lange Texte sind eine Herausforderung. Versuche täglich 1 Stunde ohne Bildschirm zu verbringen und wieder mehr zu lesen." },
  { min: 29, max: 40, title: "Fortgeschrittener Brainrot 💀", emoji: "🚨", desc: "Maximaler Brainrot-Level! TikTok hat dein Gehirn erfolgreich umprogrammiert. Aber keine Panik — das Gehirn ist plastisch und kann sich erholen. Fange mit kleinen Schritten an: ein Buch, ein Spaziergang ohne Handy, ein Gespräch ohne Bildschirm." },
];

// ─── DARK TRIAD FRAGEN ───────────────────────────────────────────────────────
const DARK_QUESTIONS = [
  { q: "Wenn ich ein Ziel erreichen will:", a: [
    { text: "Plane ich sorgfältig und nutze alle verfügbaren Mittel", score: { mach: 2 } },
    { text: "Arbeite ich hart und bleibe meinen Werten treu", score: { narr: 0 } },
    { text: "Erwarte ich dass andere mir helfen — ich verdiene Erfolg", score: { narr: 2 } },
    { text: "Tue ich was nötig ist, ohne mich von Gefühlen leiten zu lassen", score: { psych: 2 } },
  ]},
  { q: "In Gruppen bin ich meistens:", a: [
    { text: "Der natürliche Anführer — andere folgen mir", score: { narr: 2 } },
    { text: "Der strategische Denker im Hintergrund", score: { mach: 2 } },
    { text: "Gleichberechtigt mit allen anderen", score: { narr: 0 } },
    { text: "Unabhängig — ich brauche keine Gruppe", score: { psych: 1 } },
  ]},
  { q: "Wie gehst du mit den Schwächen anderer um?", a: [
    { text: "Ich helfe ihnen, diese zu überwinden", score: { narr: 0 } },
    { text: "Ich nutze sie strategisch wenn nötig", score: { mach: 3 } },
    { text: "Sie interessieren mich nicht besonders", score: { psych: 2 } },
    { text: "Ich finde sie faszinierend zu beobachten", score: { mach: 1, psych: 1 } },
  ]},
  { q: "Empathie für andere:", a: [
    { text: "Ist eine meiner größten Stärken", score: { narr: 0 } },
    { text: "Zeige ich wenn es mir nützt", score: { mach: 2 } },
    { text: "Fällt mir ehrlich gesagt schwer", score: { psych: 3 } },
    { text: "Ist wichtig, aber ich stelle meine Bedürfnisse vor", score: { narr: 1 } },
  ]},
  { q: "Was denkst du über Regeln?", a: [
    { text: "Regeln sind wichtig für das Zusammenleben", score: { narr: 0 } },
    { text: "Regeln sind für Menschen die nicht clever genug sind, sie zu umgehen", score: { mach: 3 } },
    { text: "Ich folge Regeln wenn es mir passt", score: { psych: 2 } },
    { text: "Ich mache lieber meine eigenen Regeln", score: { narr: 2 } },
  ]},
  { q: "Wie wichtig ist dir Bewunderung anderer?", a: [
    { text: "Sehr wichtig — ich brauche Anerkennung", score: { narr: 3 } },
    { text: "Ich bevorzuge Respekt vor Bewunderung", score: { mach: 1 } },
    { text: "Nicht besonders wichtig", score: { narr: 0 } },
    { text: "Ich bin gleichgültig gegenüber Meinungen anderer", score: { psych: 2 } },
  ]},
  { q: "In Konflikten:", a: [
    { text: "Suche ich nach einer fairen Lösung für alle", score: { narr: 0 } },
    { text: "Sorge ich dafür dass ich gewinne", score: { mach: 2, narr: 1 } },
    { text: "Nutze ich die Situation zu meinem Vorteil", score: { mach: 3 } },
    { text: "Bin ich emotional wenig beteiligt und rational", score: { psych: 2 } },
  ]},
  { q: "Deine Meinung über die meisten Menschen:", a: [
    { text: "Sie sind gut und vertrauenswürdig", score: { narr: 0 } },
    { text: "Sie sind naiv und leicht zu beeinflussen", score: { mach: 3 } },
    { text: "Sie sind Mittel zum Zweck", score: { psych: 2 } },
    { text: "Die meisten sind weniger fähig als ich", score: { narr: 2 } },
  ]},
];

const DARK_RESULTS = (scores) => {
  const total = (scores.narr || 0) + (scores.mach || 0) + (scores.psych || 0);
  const max = Math.max(scores.narr || 0, scores.mach || 0, scores.psych || 0);
  if (total <= 5) return { title: "Heller Charakter ✨", desc: "Dein Profil zeigt kaum Anzeichen der Dunklen Triade. Du bist empathisch, kooperativ und orientierst dich an ethischen Werten. Das ist die gesündeste Grundlage für Beziehungen und Zusammenarbeit." };
  if (total <= 12) return { title: "Ausgewogenes Profil ⚖️", desc: "Du zeigst moderate Züge der Dunklen Triade — das ist bei den meisten Menschen so. Ein gewisses Maß an Selbstbewusstsein, strategischem Denken und emotionaler Distanz kann in bestimmten Kontexten sogar hilfreich sein." };
  if (max === (scores.narr || 0)) return { title: "Narzisstische Tendenz 👑", desc: "Dein dominantes Merkmal ist Narzissmus. Du hast ein starkes Selbstbewusstsein und das Bedürfnis nach Bewunderung. Das kann dich zu einem charismatischen Anführer machen — aber auch Beziehungen belasten, wenn die Bedürfnisse anderer ignoriert werden." };
  if (max === (scores.mach || 0)) return { title: "Machiavellistische Tendenz 🎭", desc: "Dein dominantes Merkmal ist Machiavellismus. Du denkst strategisch, planst langfristig und bist bereit, Mittel einzusetzen, die andere als unethisch betrachten würden. Diese Eigenschaft kann in der Geschäftswelt nützlich sein — erfordert aber ethische Grenzen." };
  return { title: "Psychopathische Tendenz 🧊", desc: "Dein dominantes Merkmal ist subklinische Psychopathie — das bedeutet emotionale Distanz und geringe Empathie. Das ist kein klinischer Befund, sondern ein Persönlichkeitszug. In manchen Berufen (Chirurgie, Recht, Militär) kann diese Kälte ein Vorteil sein." };
};

// ─── NPC TEST FRAGEN ─────────────────────────────────────────────────────────
const NPC_QUESTIONS = [
  { q: "Wie oft handelst du gegen den Strom?", a: [
    { text: "Regelmäßig — ich mache mein Ding", score: 5 },
    { text: "Manchmal, wenn ich überzeugt bin", score: 3 },
    { text: "Selten — ich passe mich lieber an", score: 1 },
    { text: "Nie — warum Ärger machen?", score: 0 },
  ]},
  { q: "Hast du eigene, ungewöhnliche Überzeugungen?", a: [
    { text: "Ja, viele — und ich verteidige sie", score: 5 },
    { text: "Ein paar, aber ich halte sie meistens für mich", score: 3 },
    { text: "Ich übernehme meistens die Meinungen anderer", score: 1 },
    { text: "Ich denke nicht viel über solche Dinge nach", score: 0 },
  ]},
  { q: "Wenn alle eine Meinung teilen, denkst du:", a: [
    { text: "Vielleicht haben alle Unrecht — ich prüfe selbst", score: 5 },
    { text: "Wahrscheinlich haben sie Recht, aber ich überlege", score: 3 },
    { text: "Dann ist es wohl so — so viele können nicht irren", score: 1 },
    { text: "Ich schließe mich der Mehrheit an", score: 0 },
  ]},
  { q: "Deine Träume und Ziele:", a: [
    { text: "Sind einzigartig und unkonventionell", score: 5 },
    { text: "Sind ambitioniert aber realistisch", score: 3 },
    { text: "Sind ähnlich wie die meiner Freunde", score: 1 },
    { text: "Ich habe keine klaren Ziele", score: 0 },
  ]},
  { q: "Wie oft hinterfragst du deine eigenen Überzeugungen?", a: [
    { text: "Regelmäßig — ich entwickle mich weiter", score: 5 },
    { text: "Manchmal wenn etwas nicht stimmt", score: 3 },
    { text: "Selten — ich halte an meinen Ansichten fest", score: 2 },
    { text: "Nie — warum sollte ich?", score: 0 },
  ]},
  { q: "In einer Gruppe bist du:", a: [
    { text: "Die Person die neue Ideen einbringt", score: 5 },
    { text: "Ein aktives Mitglied mit eigener Stimme", score: 3 },
    { text: "Eher mitlaufend", score: 1 },
    { text: "Im Hintergrund und unsichtbar", score: 0 },
  ]},
];

const NPC_RESULTS = [
  { min: 0, max: 8, title: "NPC Level 5 🤖", desc: "Du lebst stark nach dem Skript anderer. Das ist keine Kritik — viele Menschen fühlen sich in Strukturen wohl. Aber frage dich: Was willst du wirklich? Was würdest du tun wenn niemand zuschaut? Dein Main-Character-Moment wartet auf dich." },
  { min: 9, max: 16, title: "Side Character 👥", desc: "Du bist kein reiner NPC, aber noch nicht der Hauptcharakter deiner Geschichte. Du hast eigene Gedanken und Meinungen, aber gibst ihnen nicht immer Raum. Trau dich mehr, deine einzigartige Perspektive zu teilen." },
  { min: 17, max: 24, title: "Main Character Energy ⭐", desc: "Du lebst dein Leben als Hauptcharakter! Du hast eigene Überzeugungen, handelst unabhängig und hinterfragst den Status quo. Du bist die Art von Person, die Geschichten schreibt — nicht nur in ihnen vorkommt." },
  { min: 25, max: 30, title: "Legendary Main Character 🌟", desc: "Absolutes Main Character Energy! Du bist vollständig du selbst — unabhängig, authentisch und mutig. Du folgst deinem eigenen Pfad, hinterfragst alles und inspirierst andere durch deine Einzigartigkeit. Legendary." },
];

// ─── TOXICITY FRAGEN ─────────────────────────────────────────────────────────
const TOXICITY_QUESTIONS = [
  { q: "Wenn jemand eine andere Meinung hat als du:", a: [
    { text: "Höre ich zu und diskutiere respektvoll", score: 0 },
    { text: "Versuche ich sie zu überzeugen", score: 1 },
    { text: "Werde ich frustriert und zeige es", score: 3 },
    { text: "Greife ich die Person persönlich an", score: 5 },
  ]},
  { q: "Wie reagierst du wenn du verlierst oder Unrecht hast?", a: [
    { text: "Ich akzeptiere es und lerne daraus", score: 0 },
    { text: "Es ärgert mich, aber ich gebe es zu", score: 1 },
    { text: "Ich suche nach Ausreden", score: 3 },
    { text: "Ich gebe es nie zu und schiebe die Schuld auf andere", score: 5 },
  ]},
  { q: "In Online-Diskussionen:", a: [
    { text: "Bleibe ich sachlich und respektvoll", score: 0 },
    { text: "Werde ich manchmal emotional", score: 2 },
    { text: "Nutze ich Sarkasmus und Ironie als Waffe", score: 3 },
    { text: "Flamme ich andere an wenn sie mich ärgern", score: 5 },
  ]},
  { q: "Wie gehst du mit dem Erfolg anderer um?", a: [
    { text: "Ich freue mich für sie", score: 0 },
    { text: "Ich bin neutral", score: 1 },
    { text: "Ich bin manchmal neidisch", score: 2 },
    { text: "Ich suche nach Fehlern in ihrem Erfolg", score: 4 },
  ]},
  { q: "Wenn jemand dich kritisiert:", a: [
    { text: "Nehme ich es als Feedback an", score: 0 },
    { text: "Verteidige ich mich sachlich", score: 1 },
    { text: "Werde ich defensiv und greife zurück", score: 3 },
    { text: "Werde ich sehr wütend und vergesse es nie", score: 5 },
  ]},
  { q: "Wie oft klagst du über andere?", a: [
    { text: "Selten — ich fokussiere mich auf mich", score: 0 },
    { text: "Manchmal wenn es berechtigt ist", score: 1 },
    { text: "Regelmäßig — viele Menschen nerven mich", score: 3 },
    { text: "Fast täglich — die Welt ist voller Idioten", score: 5 },
  ]},
  { q: "Deine Beziehungen sind meistens:", a: [
    { text: "Harmonisch und gegenseitig respektvoll", score: 0 },
    { text: "Gut, mit gelegentlichen Konflikten", score: 1 },
    { text: "Kompliziert — viele Missverständnisse", score: 3 },
    { text: "Oft konflikthaft — andere verstehen mich nicht", score: 5 },
  ]},
];

const TOXICITY_RESULTS = [
  { min: 0, max: 7, title: "Wholesome 🌸", desc: "Du bist eine der angenehmsten Personen in jedem Raum. Deine Energie ist positiv, du gehst respektvoll mit anderen um und weißt wie man konstruktiv kommuniziert. Menschen fühlen sich in deiner Nähe wohl und sicher." },
  { min: 8, max: 16, title: "Mostly Harmless 😊", desc: "Du bist grundsätzlich eine positive Person mit gelegentlichen menschlichen Momenten. Du wirst manchmal frustriert oder defensiv — das ist normal. Mit etwas Achtsamkeit kannst du deine Reaktionen weiter verbessern." },
  { min: 17, max: 25, title: "Mildly Toxic ⚠️", desc: "Du zeigst einige toxische Muster, besonders unter Stress oder in Konflikten. Das ist ein Signal, dass es sich lohnt, an deiner emotionalen Reaktionsfähigkeit zu arbeiten. Therapie oder Coaching könnte sehr hilfreich sein." },
  { min: 26, max: 35, title: "High Toxicity 🚨", desc: "Deine Interaktionsmuster sind oft belastend — für andere und wahrscheinlich auch für dich selbst. Toxisches Verhalten entsteht meist aus unverarbeiteten Verletzungen. Es ist nie zu spät, daran zu arbeiten und gesündere Muster zu entwickeln." },
];

// ─── RED FLAG FRAGEN ─────────────────────────────────────────────────────────
const REDFLAG_QUESTIONS = [
  { q: "In einer Beziehung: Wie oft checkst du das Handy deines Partners?", a: [
    { text: "Nie — das wäre ein Vertrauensbruch", score: 0 },
    { text: "Nur wenn ich konkrete Gründe habe", score: 1 },
    { text: "Gelegentlich — nur um sicher zu sein", score: 3 },
    { text: "Regelmäßig — ich muss wissen was los ist", score: 5 },
  ]},
  { q: "Wenn ein Partner Zeit mit Freunden verbringt:", a: [
    { text: "Finde ich das wichtig und unterstütze es", score: 0 },
    { text: "Ist es okay, solange wir genug Zeit haben", score: 1 },
    { text: "Bin ich manchmal eifersüchtig", score: 2 },
    { text: "Mag ich es nicht und mache Druck", score: 5 },
  ]},
  { q: "Nach einem Streit:", a: [
    { text: "Entschuldige ich mich wenn ich falsch lag", score: 0 },
    { text: "Warten wir beide bis es sich beruhigt hat", score: 1 },
    { text: "Gebe ich selten nach — ich habe meistens Recht", score: 3 },
    { text: "Nutze ich Schweigen als Strafe", score: 5 },
  ]},
  { q: "Wie oft übertreibst du oder lügst du in Beziehungen?", a: [
    { text: "Nie — Ehrlichkeit ist mir sehr wichtig", score: 0 },
    { text: "Nur kleine Notlügen um Gefühle zu schonen", score: 1 },
    { text: "Manchmal wenn die Wahrheit unbequem ist", score: 3 },
    { text: "Öfter — manchmal ist es einfacher", score: 5 },
  ]},
  { q: "Wenn ein Ex einen neuen Partner hat:", a: [
    { text: "Freue ich mich für ihn/sie", score: 0 },
    { text: "Bin ich neutral — das Leben geht weiter", score: 1 },
    { text: "Bin ich neidisch oder eifersüchtig", score: 3 },
    { text: "Versuche ich die neue Beziehung zu sabotieren", score: 5 },
  ]},
  { q: "Wie gehst du mit den Grenzen anderer um?", a: [
    { text: "Ich respektiere sie immer", score: 0 },
    { text: "Meistens, manchmal teste ich sie", score: 2 },
    { text: "Ich finde Grenzen oft übertrieben", score: 3 },
    { text: "Ich ignoriere sie wenn sie mir nicht passen", score: 5 },
  ]},
  { q: "Gaslighting — hast du schon mal jemanden an seiner Wahrnehmung zweifeln lassen?", a: [
    { text: "Nein, das wäre manipulativ", score: 0 },
    { text: "Nicht absichtlich, aber vielleicht unbewusst", score: 2 },
    { text: "Manchmal wenn ich im Recht sein wollte", score: 4 },
    { text: "Ja, das ist eine effektive Strategie", score: 5 },
  ]},
];

const REDFLAG_RESULTS = [
  { min: 0, max: 7, title: "Green Flag 💚", desc: "Du bist ein Green Flag! Du gehst respektvoll, ehrlich und einfühlsam mit anderen um. Deine Partner und Freunde können sich glücklich schätzen. Du weißt wie gesunde Beziehungen aussehen und lebst das auch." },
  { min: 8, max: 16, title: "Yellow Flag 💛", desc: "Ein paar gelbe Flaggen — aber nichts Dramatisches. Du hast einige Verhaltensweisen, die in Beziehungen zu Reibung führen können. Mit etwas Selbstreflexion und offener Kommunikation kannst du diese Muster auflösen." },
  { min: 17, max: 25, title: "Orange Flag 🟠", desc: "Mehrere rote Flaggen in Orange. Einige deiner Verhaltensweisen können Beziehungen belasten. Es lohnt sich, ehrlich zu reflektieren: Woher kommen diese Muster? Oft stecken eigene Verletzungen dahinter, die Aufmerksamkeit verdienen." },
  { min: 26, max: 35, title: "Red Flag 🚩", desc: "Viele rote Flaggen. Deine Verhaltensmuster in Beziehungen sind oft belastend — für andere und für dich selbst. Das ist kein Urteil, sondern eine Einladung zur Selbstreflexion. Professionelle Unterstützung kann helfen, diese Muster zu verstehen und zu verändern." },
];

// ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────
function getType(scores) {
  const E = scores.E || 0, I = scores.I || 0;
  const S = scores.S || 0, N = scores.N || 0;
  const T = scores.T || 0, F = scores.F || 0;
  const J = scores.J || 0, P = scores.P || 0;
  return { code: (E >= I ? "E" : "I") + (S >= N ? "S" : "N") + (T >= F ? "T" : "F") + (J >= P ? "J" : "P"), scores: { E, I, S, N, T, F, J, P } };
}

function getScoreResult(results, score) {
  return results.find(r => score >= r.min && score <= r.max) || results[results.length - 1];
}

function getAuraResult(answers) {
  const counts = {};
  answers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return AURA_RESULTS[dominant];
}

// ─── SCHEMA.ORG JSON-LD ──────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://persoenlichkeitstest-kostenlos.de/#webapp",
      "name": "persoenlichkeitstest-kostenlos.de — Kostenlose Persönlichkeitstests",
      "url": "https://persoenlichkeitstest-kostenlos.de",
      "description": "Kostenlose KI-gestützte Persönlichkeitstests auf Deutsch. Persönlichkeitstest 16 Typen, Rizz Score, Aura Check, Brainrot Test, Dark Triad, NPC Test, Toxicity Check und Red Flag Detector.",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "author": {
        "@type": "Organization",
        "name": "Social Media Venture GmbH",
        "url": "https://persoenlichkeitstest-kostenlos.de",
        "address": { "@type": "PostalAddress", "streetAddress": "Schliemannstraße 23", "addressLocality": "Berlin", "postalCode": "10437", "addressCountry": "DE" }
      },
      "inLanguage": "de-DE",
      "audience": { "@type": "Audience", "audienceType": "Allgemein" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Was ist ein Persönlichkeitstest?", "acceptedAnswer": { "@type": "Answer", "text": "Ein Persönlichkeitstest ist ein psychologisches Instrument, das Charaktereigenschaften, Verhaltensweisen und Denkweisen einer Person misst. Der bekannteste ist der MBTI-Test mit 16 Persönlichkeitstypen, der auf den Theorien von Carl Gustav Jung basiert." } },
        { "@type": "Question", "name": "Was ist der Rizz Score Test?", "acceptedAnswer": { "@type": "Answer", "text": "Der Rizz Score Test misst dein natürliches Charisma und deine Fähigkeit, andere Menschen anzuziehen und zu begeistern. 'Rizz' ist ein Slang-Begriff für Charisma und Anziehungskraft, der durch Social Media populär wurde." } },
        { "@type": "Question", "name": "Was ist ein Aura Check?", "acceptedAnswer": { "@type": "Answer", "text": "Ein Aura Check analysiert deine persönliche Energie und Ausstrahlung. Basierend auf deinen Antworten zu Persönlichkeit, Verhalten und Vorlieben wird deine dominante Aura-Farbe bestimmt: Mystisch (Violett), Solar (Gold), Heilend (Grün) oder Feuer (Orange)." } },
        { "@type": "Question", "name": "Was ist der Dark Triad Test?", "acceptedAnswer": { "@type": "Answer", "text": "Der Dark Triad Test misst drei Persönlichkeitsmerkmale: Narzissmus (übertriebenes Selbstbewusstsein), Machiavellismus (strategisches, manipulatives Denken) und subklinische Psychopathie (emotionale Distanz). Diese Eigenschaften kommen in unterschiedlichem Ausmaß bei fast allen Menschen vor." } },
        { "@type": "Question", "name": "Was bedeutet Brainrot?", "acceptedAnswer": { "@type": "Answer", "text": "Brainrot beschreibt den Effekt von übermäßigem Social-Media-Konsum auf die Aufmerksamkeitsspanne und das Denken. Symptome sind verkürzte Konzentrationsfähigkeit, Denken in Memes und Schwierigkeiten, lange Texte zu lesen. Der Brainrot Score Test misst, wie stark TikTok und Co. dein Denken beeinflusst haben." } },
        { "@type": "Question", "name": "Sind die Tests wissenschaftlich fundiert?", "acceptedAnswer": { "@type": "Answer", "text": "Die Tests auf persoenlichkeitstest-kostenlos.de basieren auf etablierten psychologischen Konzepten und sind für Unterhaltungs- und Selbstreflexionszwecke konzipiert. Der Persönlichkeitstest basiert auf dem MBTI-Framework. Für klinische Diagnosen empfehlen wir professionelle psychologische Beratung." } },
        { "@type": "Question", "name": "Kostet persoenlichkeitstest-kostenlos.de etwas?", "acceptedAnswer": { "@type": "Answer", "text": "Alle Tests auf persoenlichkeitstest-kostenlos.de sind 100% kostenlos. Es ist kein Account oder keine Registrierung erforderlich. Du kannst alle Tests sofort und ohne Einschränkungen nutzen." } },
        { "@type": "Question", "name": "Was ist ein NPC Test?", "acceptedAnswer": { "@type": "Answer", "text": "Der NPC Test (Non-Player Character) prüft, ob du ein 'Main Character' bist — also jemand der sein Leben aktiv gestaltet und eigene Überzeugungen hat — oder ein NPC, der hauptsächlich nach dem Skript anderer lebt. Der Begriff stammt aus der Gaming-Kultur." } }
      ]
    }
  ]
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Home() {
  const [page, setPage] = useState("home");
  const [testId, setTestId] = useState(null);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [resultData, setResultData] = useState(null);

  const router = useRouter();

  // Auto-start test from URL parameter (?test=rizz etc.)
  useEffect(() => {
    if (router.isReady && router.query.test) {
      const tid = router.query.test;
      const validTests = ["persoenlichkeit", "rizz", "aura", "brainrot", "dark", "npc", "toxicity", "redflag"];
      if (validTests.includes(tid)) {
        setTestId(tid);
        setPage("test");
        setCurrent(0);
        setScores({});
        setAnswers([]);
        setSelected(null);
        setResultData(null);
      }
    }
  }, [router.isReady, router.query.test]);

  const startTest = (id) => { setTestId(id); setPage("test"); setCurrent(0); setScores({}); setAnswers([]); setSelected(null); setResultData(null); };
  const goHome = () => { setPage("home"); setTestId(null); setResultData(null); };

  const getQuestions = () => {
    switch (testId) {
      case "persoenlichkeit": return PERSONALITY_QUESTIONS;
      case "rizz": return RIZZ_QUESTIONS;
      case "aura": return AURA_QUESTIONS;
      case "brainrot": return BRAINROT_QUESTIONS;
      case "dark": return DARK_QUESTIONS;
      case "npc": return NPC_QUESTIONS;
      case "toxicity": return TOXICITY_QUESTIONS;
      case "redflag": return REDFLAG_QUESTIONS;
      default: return [];
    }
  };

  const handleAnswer = (answer) => {
    setSelected(answer);
    setTimeout(() => {
      const questions = getQuestions();
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      setSelected(null);

      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        // Calculate result
        let result = null;
        if (testId === "persoenlichkeit") {
          const newScores = {};
          newAnswers.forEach(a => { Object.entries(a.scores).forEach(([k, v]) => { newScores[k] = (newScores[k] || 0) + v; }); });
          const t = getType(newScores);
          result = { ...PERSONALITY_TYPES[t.code], ...t, type: "persoenlichkeit" };
        } else if (testId === "rizz") {
          const total = newAnswers.reduce((s, a) => s + (a.score || 0), 0);
          result = { ...getScoreResult(RIZZ_RESULTS, total), total, type: "rizz" };
        } else if (testId === "aura") {
          const auraScores = newAnswers.map(a => a.score);
          result = { ...getAuraResult(auraScores), type: "aura" };
        } else if (testId === "brainrot") {
          const total = newAnswers.reduce((s, a) => s + (a.score || 0), 0);
          result = { ...getScoreResult(BRAINROT_RESULTS, total), total, type: "brainrot" };
        } else if (testId === "dark") {
          const darkScores = {};
          newAnswers.forEach(a => { Object.entries(a.score).forEach(([k, v]) => { darkScores[k] = (darkScores[k] || 0) + v; }); });
          result = { ...DARK_RESULTS(darkScores), darkScores, type: "dark" };
        } else if (testId === "npc") {
          const total = newAnswers.reduce((s, a) => s + (a.score || 0), 0);
          result = { ...getScoreResult(NPC_RESULTS, total), total, type: "npc" };
        } else if (testId === "toxicity") {
          const total = newAnswers.reduce((s, a) => s + (a.score || 0), 0);
          result = { ...getScoreResult(TOXICITY_RESULTS, total), total, type: "toxicity" };
        } else if (testId === "redflag") {
          const total = newAnswers.reduce((s, a) => s + (a.score || 0), 0);
          result = { ...getScoreResult(REDFLAG_RESULTS, total), total, type: "redflag" };
        }
        setResultData(result);
        setPage("result");
      }
    }, 350);
  };

  const questions = getQuestions();
  const currentTest = TESTS.find(t => t.id === testId);
  const dims = [
    { left: "Introvert", right: "Extravert", lKey: "I", rKey: "E", lColor: "#A855F7", rColor: "#FFB800" },
    { left: "Intuition", right: "Sensorik", lKey: "N", rKey: "S", lColor: "#00E5FF", rColor: "#00FF88" },
    { left: "Fühlen", right: "Denken", lKey: "F", rKey: "T", lColor: "#FF0099", rColor: "#00E5FF" },
    { left: "Wahrnehmen", right: "Urteilen", lKey: "P", rKey: "J", lColor: "#FFB800", rColor: "#A855F7" },
  ];

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EJ938L3HJR" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-EJ938L3HJR');`}</Script>
      {/* Google AdSense */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5239592989987247" crossOrigin="anonymous" strategy="afterInteractive" />
      {/* Schema.org */}
      <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(schemaData)}</Script>

      <Head>
        <title>Kostenloser Persönlichkeitstest 2026 | KI-gestützt | persoenlichkeitstest-kostenlos.de</title>
        <meta name="description" content="Mach den kostenlosen Persönlichkeitstest 2026 auf persoenlichkeitstest-kostenlos.de. 8 Tests: 16 Persönlichkeitstypen, Rizz Score, Aura Check, Brainrot Test, Dark Triad, NPC Test. Sofortiges Ergebnis, kein Account nötig." />
        <meta name="keywords" content="persönlichkeitstest kostenlos, persönlichkeitstest online, 16 persönlichkeitstypen test, mbti test kostenlos deutsch, rizz test, aura check, brainrot test, dark triad test, npc test, toxicity test, red flag test" />
        <link rel="canonical" href="https://persoenlichkeitstest-kostenlos.de/" />
        {/* Open Graph */}
        <meta property="og:title" content="Kostenloser Persönlichkeitstest 2026 | KI-gestützt | persoenlichkeitstest-kostenlos.de" />
        <meta property="og:description" content="8 kostenlose Persönlichkeitstests: Persönlichkeitstest, Rizz Score, Aura Check, Brainrot Score und mehr. KI-analysiert, sofortiges Ergebnis." />
        <meta property="og:url" content="https://persoenlichkeitstest-kostenlos.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Kostenloser Persönlichkeitstest 2026 — 8 Tests, sofortiges Ergebnis" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kostenloser Persönlichkeitstest 2026 | persoenlichkeitstest-kostenlos.de" />
        <meta name="twitter:description" content="Wer bist du wirklich? 8 kostenlose Tests: Persönlichkeit, Rizz, Aura, Brainrot und mehr." />
        <meta name="twitter:image" content="https://persoenlichkeitstest-kostenlos.de/og-image.png" />
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#060A14", fontFamily: "'DM Sans', system-ui, sans-serif", color: "#fff", maxWidth: 520, margin: "0 auto" }}>
        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #1A2040" }}>
          <div onClick={goHome} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 900, color: "#00E5FF" }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>PERSÖNLICHKEITSTEST</span>
          </div>
          <span style={{ fontSize: 10, color: "#00E5FF", background: "#00E5FF15", padding: "3px 8px", borderRadius: 20, fontWeight: 700 }}>KOSTENLOS</span>
        </nav>

        {/* ── HOME ── */}
        {page === "home" && (
          <div>
            <div style={{ textAlign: "center", padding: "40px 20px 30px" }}>
              <div style={{ fontSize: 11, letterSpacing: 5, color: "#7A84A8", marginBottom: 8 }}>KI-GESTÜTZTE ANALYSE</div>
              <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.1, background: "linear-gradient(135deg, #00E5FF 0%, #A855F7 50%, #FF0099 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Wer bist du wirklich?</h1>
              <p style={{ fontSize: 14, color: "#7A84A8", maxWidth: 400, margin: "0 auto 20px" }}>Kostenlose Persönlichkeitstests — wissenschaftlich fundiert, KI-analysiert, sofort Ergebnis.</p>
              <button onClick={() => startTest("persoenlichkeit")} style={{ background: "linear-gradient(135deg, #00E5FF, #A855F7)", color: "#000", fontWeight: 800, fontSize: 14, padding: "14px 32px", borderRadius: 50, border: "none", cursor: "pointer" }}>Jetzt starten →</button>
            </div>

            {/* Trending */}
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
                    <span style={{ fontSize: 9, color: test.color, background: `${test.color}15`, padding: "2px 6px", borderRadius: 4 }}>{test.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Tests */}
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

            {/* SEO Content Block - Vollständiger SEO-Text */}
            <div style={{ padding: "20px 16px", borderTop: "1px solid #1A2040" }}>
              
              {/* Persönlichkeitstest */}
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 10 }}>Kostenloser Persönlichkeitstest 2026 — 16 Typen</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Entdecke deinen Persönlichkeitstyp mit dem kostenlosen KI-Persönlichkeitstest auf persoenlichkeitstest-kostenlos.de. Basierend auf dem MBTI-Framework (Myers-Briggs Type Indicator) und den Theorien von Carl Gustav Jung analysiert unser Test in nur 12 Fragen, welcher der 16 Persönlichkeitstypen du bist. Ob Architekt (INTJ), Mediator (INFP), Entertainer (ESFP) oder Kommandeur (ENTJ) — dein Ergebnis zeigt dir deine Stärken, Schwächen und Karrierepfade.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der persönlichkeitstest kostenlos online ist wissenschaftlich fundiert und basiert auf vier Dimensionen: Introversion vs. Extraversion, Intuition vs. Sensorik, Fühlen vs. Denken und Wahrnehmen vs. Urteilen. Diese vier Achsen ergeben 16 einzigartige Persönlichkeitstypen, die jeweils unterschiedliche Stärken, Kommunikationsstile und Lebenswege beschreiben.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Kein Account nötig, 100% kostenlos, sofortiges Ergebnis. Der 16 Persönlichkeitstypen Test dauert nur 3 Minuten und liefert dir eine detaillierte Analyse deines Persönlichkeitstyps inklusive berühmter Persönlichkeiten mit demselben Typ.
              </p>

              {/* Rizz Score */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#FF0099", marginBottom: 8 }}>Rizz Score Test — Wie viel Charisma hast du?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der Rizz Score Test misst dein natürliches Charisma und deine soziale Anziehungskraft. "Rizz" — ein Slang-Begriff für Charisma, der durch Social Media und besonders TikTok populär wurde — beschreibt die Fähigkeit, andere mühelos zu begeistern und anzuziehen. In 10 Fragen analysiert der rizz test kostenlos deine Körpersprache, Selbstwahrnehmung, Kommunikationsstil und sozialen Fähigkeiten.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Das Ergebnis reicht von "Kein Rizz" bis "Unreal Rizz" und gibt dir konkrete Hinweise, wie du dein Charisma verbessern kannst. Verwandte Tests: <span onClick={() => startTest("aura")} style={{ color: "#A855F7", cursor: "pointer", textDecoration: "underline" }}>Aura Check</span>, <span onClick={() => startTest("toxicity")} style={{ color: "#FF6B35", cursor: "pointer", textDecoration: "underline" }}>Toxicity Check</span>.
              </p>

              {/* Aura Check */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#A855F7", marginBottom: 8 }}>Aura Check — Welche Energie strahlst du aus?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der Aura Check analysiert deine persönliche Energie und Ausstrahlung. Basierend auf deinen Antworten zu Persönlichkeit, Verhalten und Vorlieben wird deine dominante Aura-Farbe bestimmt. Mögliche Aura-Typen sind: Mystische Aura (Violett) für tiefgründige, spirituelle Menschen; Solare Aura (Gold) für energiegeladene, optimistische Persönlichkeiten; Heilende Aura (Grün) für empathische, fürsorgliche Menschen; und Feuer-Aura (Orange) für leidenschaftliche, kreative Naturen.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Der aura farbe test kostenlos dauert nur 2 Minuten und gibt dir einen tiefen Einblick in deine Energie und Ausstrahlung. Verwandte Tests: <span onClick={() => startTest("rizz")} style={{ color: "#FF0099", cursor: "pointer", textDecoration: "underline" }}>Rizz Score</span>, <span onClick={() => startTest("persoenlichkeit")} style={{ color: "#00E5FF", cursor: "pointer", textDecoration: "underline" }}>Persönlichkeitstest</span>.
              </p>

              {/* Brainrot */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#00FF88", marginBottom: 8 }}>Brainrot Score Test — Wie kaputt ist dein Gehirn?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Brainrot beschreibt den Effekt von übermäßigem Social-Media-Konsum — besonders TikTok und Instagram — auf die Aufmerksamkeitsspanne und das Denken. Symptome sind verkürzte Konzentrationsfähigkeit, Denken in Memes und Schwierigkeiten, lange Texte zu lesen. Der brainrot test kostenlos misst, wie stark dein Gehirn von der digitalen Reizüberflutung beeinflusst wurde.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Das Ergebnis reicht von "Gesundes Gehirn" bis "Terminaler Brainrot" und gibt dir einen humorvollen, aber aufschlussreichen Blick auf deine digitalen Gewohnheiten. Verwandte Tests: <span onClick={() => startTest("npc")} style={{ color: "#FFB800", cursor: "pointer", textDecoration: "underline" }}>NPC Test</span>, <span onClick={() => startTest("rizz")} style={{ color: "#FF0099", cursor: "pointer", textDecoration: "underline" }}>Rizz Score</span>.
              </p>

              {/* Dark Triad */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#FF2255", marginBottom: 8 }}>Dark Triad Test — Narzissmus, Machiavellismus, Psychopathie</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Die Dunkle Triade ist ein psychologisches Konzept, das drei Persönlichkeitsmerkmale beschreibt: Narzissmus (übertriebenes Selbstbewusstsein und Bewunderungsbedürfnis), Machiavellismus (strategisches, manipulatives Denken und Zynismus) und subklinische Psychopathie (emotionale Distanz und Impulsivität). Diese Eigenschaften kommen in unterschiedlichem Ausmaß bei fast allen Menschen vor.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Der dark triad test deutsch ist kein klinisches Diagnosewerkzeug, sondern dient der Selbstreflexion. Er zeigt dir, welche dieser drei Eigenschaften bei dir stärker ausgeprägt sind. Verwandte Tests: <span onClick={() => startTest("toxicity")} style={{ color: "#FF6B35", cursor: "pointer", textDecoration: "underline" }}>Toxicity Check</span>, <span onClick={() => startTest("redflag")} style={{ color: "#FF2255", cursor: "pointer", textDecoration: "underline" }}>Red Flag Detector</span>.
              </p>

              {/* NPC Test */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#FFB800", marginBottom: 8 }}>NPC Test — Main Character oder Hintergrundstatist?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der NPC Test (Non-Player Character) ist ein viraler Internet-Trend, der die Frage stellt: Lebst du dein Leben als Hauptfigur (Main Character) oder als Hintergrundstatist (NPC)? Main Characters gestalten ihr Leben aktiv, treffen eigene Entscheidungen und folgen ihren eigenen Werten. NPCs hingegen reagieren hauptsächlich auf andere und folgen sozialen Skripten.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Der bin ich ein npc test analysiert deine Entscheidungsfindung, Eigeninitiative und Lebenseinstellung in 10 Fragen. Verwandte Tests: <span onClick={() => startTest("brainrot")} style={{ color: "#00FF88", cursor: "pointer", textDecoration: "underline" }}>Brainrot Score</span>, <span onClick={() => startTest("persoenlichkeit")} style={{ color: "#00E5FF", cursor: "pointer", textDecoration: "underline" }}>Persönlichkeitstest</span>.
              </p>

              {/* Toxicity Check */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#FF6B35", marginBottom: 8 }}>Toxicity Check — Wie toxisch bist du wirklich?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der Toxicity Check misst, wie toxisch dein Verhalten in Beziehungen und sozialen Situationen ist. Toxisches Verhalten umfasst Manipulation, übermäßige Kritik, Passiv-Aggressivität, Eifersucht und mangelnde Empathie. Der wie toxisch bin ich test gibt dir einen ehrlichen Einblick in deine Verhaltensweisen.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 12 }}>
                Das Ergebnis reicht von "Wholesome" bis "Kritisch toxisch" und gibt dir konkrete Hinweise, welche Verhaltensweisen du in Beziehungen verbessern könntest. Verwandte Tests: <span onClick={() => startTest("redflag")} style={{ color: "#FF2255", cursor: "pointer", textDecoration: "underline" }}>Red Flag Detector</span>, <span onClick={() => startTest("dark")} style={{ color: "#FF2255", cursor: "pointer", textDecoration: "underline" }}>Dark Triad Test</span>.
              </p>

              {/* Red Flag */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#FF2255", marginBottom: 8 }}>Red Flag Test — Wie viele Red Flags hast du?</h2>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 8 }}>
                Der Red Flag Test analysiert dein Verhalten in Beziehungen und zeigt dir, welche potenziell problematischen Verhaltensweisen (Red Flags) du haben könntest. Red Flags sind Warnsignale in Beziehungen, die auf ungesunde Muster hinweisen: Eifersucht, Kontrollverhalten, mangelnde Kommunikation oder emotionale Unreife.
              </p>
              <p style={{ fontSize: 12, color: "#7A84A8", lineHeight: 1.7, marginBottom: 16 }}>
                Der red flag detector zeigt dir in 10 Fragen, wie viele Red Flags du in Beziehungen mitbringst — von "Grüne Flagge" bis "Rote Flagge". Verwandte Tests: <span onClick={() => startTest("toxicity")} style={{ color: "#FF6B35", cursor: "pointer", textDecoration: "underline" }}>Toxicity Check</span>, <span onClick={() => startTest("dark")} style={{ color: "#FF2255", cursor: "pointer", textDecoration: "underline" }}>Dark Triad Test</span>.
              </p>

              {/* FAQ Section */}
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 12, marginTop: 8 }}>Häufig gestellte Fragen</h2>
              {[
                { q: "Sind die Tests kostenlos?", a: "Ja, alle 8 Tests auf persoenlichkeitstest-kostenlos.de sind 100% kostenlos. Kein Account, keine Registrierung, kein Abo — jetzt und für immer." },
                { q: "Wie lange dauern die Tests?", a: "Die meisten Tests dauern 2-3 Minuten. Der Persönlichkeitstest hat 12 Fragen (ca. 3 Min.), alle anderen Tests haben 8-10 Fragen (ca. 2 Min.)." },
                { q: "Sind die Ergebnisse wissenschaftlich fundiert?", a: "Die Tests basieren auf etablierten psychologischen Konzepten (MBTI, Dark Triad) und sind für Selbstreflexion und Unterhaltung konzipiert. Für klinische Diagnosen empfehlen wir professionelle psychologische Beratung." },
                { q: "Werden meine Daten gespeichert?", a: "Nein. Die Tests laufen vollständig im Browser. Es werden keine persönlichen Daten gespeichert oder weitergegeben. Details in unserer Datenschutzerklärung." },
                { q: "Was ist der MBTI Test?", a: "Der MBTI (Myers-Briggs Type Indicator) ist eines der bekanntesten Persönlichkeitsmodelle weltweit. Er unterscheidet 16 Persönlichkeitstypen basierend auf vier Dimensionen: Extraversion/Introversion, Intuition/Sensorik, Denken/Fühlen und Urteilen/Wahrnehmen." },
                { q: "Was bedeutet Rizz?", a: "Rizz ist ein Slang-Begriff für Charisma und natürliche Anziehungskraft, der durch Social Media populär wurde. Ein hoher Rizz Score bedeutet, dass du andere Menschen leicht für dich begeistern und anziehen kannst." },
              ].map((faq, i) => (
                <div key={i} style={{ marginBottom: 10, background: "rgba(22,28,53,0.5)", borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#00E5FF", marginBottom: 4 }}>{faq.q}</div>
                  <div style={{ fontSize: 11, color: "#7A84A8", lineHeight: 1.6 }}>{faq.a}</div>
                </div>
              ))}

              {/* Organization Info */}
              <div style={{ marginTop: 16, padding: "12px", background: "rgba(22,28,53,0.3)", borderRadius: 10, border: "1px solid #1A2040" }}>
                <div style={{ fontSize: 10, color: "#4A5470", lineHeight: 1.6 }}>
                  <strong style={{ color: "#7A84A8" }}>Social Media Venture GmbH</strong> · Schliemannstraße 23, 10437 Berlin, Deutschland · 
                  <a href="mailto:info@persoenlichkeitstest-kostenlos.de" style={{ color: "#00E5FF", textDecoration: "none" }}> info@persoenlichkeitstest-kostenlos.de</a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: "16px", textAlign: "center", borderTop: "1px solid #1A2040" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
                <a href="/impressum" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Impressum</a>
                <a href="/datenschutz" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Datenschutz</a>
              </div>
              <div style={{ fontSize: 10, color: "#4A5470" }}>© 2026 Social Media Venture GmbH · persoenlichkeitstest-kostenlos.de</div>
            </div>
          </div>
        )}

        {/* ── TEST ── */}
        {page === "test" && questions.length > 0 && (
          <div style={{ padding: "16px", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <button onClick={goHome} style={{ background: "none", border: "none", color: "#7A84A8", cursor: "pointer", fontSize: 13 }}>✕</button>
              <span style={{ fontSize: 11, color: "#7A84A8" }}>{current + 1} / {questions.length}</span>
              <span style={{ fontSize: 14 }}>{currentTest?.emoji}</span>
            </div>
            <div style={{ height: 4, background: "#1A2040", borderRadius: 2, marginBottom: 28, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${((current + 1) / questions.length) * 100}%`, background: `linear-gradient(90deg, ${currentTest?.color || "#00E5FF"}, #A855F7)`, borderRadius: 2, transition: "width 0.4s ease" }} />
            </div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.3 }}>{questions[current].q}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {questions[current].a.map((answer, i) => (
                <button key={i} onClick={() => !selected && handleAnswer(answer)}
                  style={{ background: selected === answer ? `${currentTest?.color || "#00E5FF"}20` : "rgba(22,28,53,0.7)", border: `1px solid ${selected === answer ? (currentTest?.color || "#00E5FF") : "#1A2040"}`, borderRadius: 12, padding: "14px 16px", textAlign: "left", color: "#D8DDF0", fontSize: 13, cursor: selected ? "default" : "pointer", transition: "all 0.2s", opacity: selected && selected !== answer ? 0.4 : 1 }}>
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {page === "result" && resultData && (
          <div style={{ padding: "20px 16px", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              {resultData.type === "persoenlichkeit" && (
                <>
                  <div style={{ fontSize: 11, color: "#7A84A8", letterSpacing: 3, marginBottom: 6 }}>DEIN TYP</div>
                  <div style={{ display: "inline-block", padding: "8px 24px", borderRadius: 50, background: "linear-gradient(135deg, #00E5FF20, #A855F720)", border: "1px solid #00E5FF40", marginBottom: 10 }}>
                    <span style={{ fontSize: 28, fontWeight: 900, color: "#00E5FF", letterSpacing: 4 }}>{resultData.code}</span>
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 6px" }}>{resultData.name}</h2>
                  <div style={{ fontSize: 12, color: "#7A84A8" }}>Nur {resultData.pct} der Bevölkerung · {resultData.celeb}</div>
                </>
              )}
              {resultData.type !== "persoenlichkeit" && (
                <>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>{resultData.emoji || currentTest?.emoji}</div>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: resultData.color || currentTest?.color || "#00E5FF", margin: "0 0 6px" }}>{resultData.title}</h2>
                </>
              )}
            </div>

            <div style={{ background: "rgba(22,28,53,0.7)", borderRadius: 16, padding: 16, border: "1px solid #1A204080", marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#D8DDF0", lineHeight: 1.7, margin: 0 }}>{resultData.desc}</p>
            </div>

            {/* MBTI Dimensions */}
            {resultData.type === "persoenlichkeit" && (
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
            )}

            {/* Share */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {[{ name: "WhatsApp", color: "#25D366", icon: "💬" }, { name: "X/Twitter", color: "#1DA1F2", icon: "𝕏" }, { name: "Link kopieren", color: "#7A84A8", icon: "🔗" }].map((s, i) => (
                <button key={i} style={{ flex: 1, background: `${s.color}15`, border: `1px solid ${s.color}30`, borderRadius: 10, padding: "10px 8px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <span style={{ fontSize: 9, color: s.color, fontWeight: 600 }}>{s.name}</span>
                </button>
              ))}
            </div>

            {/* More Tests */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#7A84A8", letterSpacing: 2, marginBottom: 10 }}>WEITERE TESTS</div>
              <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
                {TESTS.filter(t => t.id !== testId).slice(0, 4).map(t => (
                  <div key={t.id} onClick={() => startTest(t.id)} style={{ minWidth: 120, background: "rgba(22,28,53,0.7)", borderRadius: 12, padding: 12, cursor: "pointer", border: `1px solid ${t.color}20` }}>
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{t.emoji}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 9, color: "#7A84A8", marginTop: 2 }}>{t.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={goHome} style={{ width: "100%", background: "rgba(22,28,53,0.7)", color: "#7A84A8", border: "1px solid #1A2040", borderRadius: 12, padding: "12px", fontSize: 12, cursor: "pointer" }}>← Alle Tests</button>

            {/* Footer */}
            <div style={{ padding: "16px 0", textAlign: "center", marginTop: 8 }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 6 }}>
                <a href="/impressum" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Impressum</a>
                <a href="/datenschutz" style={{ fontSize: 10, color: "#7A84A8", textDecoration: "none" }}>Datenschutz</a>
              </div>
              <div style={{ fontSize: 10, color: "#4A5470" }}>© 2026 Social Media Venture GmbH · persoenlichkeitstest-kostenlos.de</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
