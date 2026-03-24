"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

const PASSWORD = "Findur2026!";

const TESTS = [
  { id: "persoenlichkeit", name: "Persönlichkeitstest", emoji: "🧠", color: "#00E5FF", path: "/persoenlichkeit",
    hooks: [
      "Nur 2% der Menschen sind dieser Typ...",
      "Der SELTENSTE Persönlichkeitstyp der Welt",
      "Welcher der 16 Typen bist du WIRKLICH?",
      "Dein Persönlichkeitstyp verrät ALLES über dich",
      "Die meisten kennen ihren wahren Typ nicht...",
      "POV: Du bekommst den seltensten Persönlichkeitstyp",
      "Dieser Typ ist so selten dass die meisten ihn nicht kennen",
      "Psychologen sagen: Dein Typ bestimmt dein Leben",
      "Warum du immer wieder dieselben Fehler machst 🧠",
      "Dein Typ erklärt ALLES über deine Beziehungen",
      "Warum manche Menschen einfach ANDERS ticken",
      "POV: Du findest endlich heraus wer du wirklich bist",
    ],
    fragen: [
      {q:"Du bist auf einer Party. Was machst du?",a:["🎤 Unterhalte alle","🤫 Tiefe Gespräche","👀 Beobachten","🎯 Organisiere alles"]},
      {q:"Wie triffst du Entscheidungen?",a:["💫 Bauchgefühl","📊 Fakten & Daten","👥 Frage andere","📝 Pro-Contra-Liste"]},
      {q:"Dein perfekter Sonntag?",a:["🌍 Abenteuer","🛋️ Couch & Netflix","🏃 Brunch + Sport","🎨 Kreativ sein"]},
      {q:"Was nervt dich am meisten?",a:["🙄 Oberflächlichkeit","⏰ Ineffizienz","🔒 Kontrolle","🌪️ Chaos"]},
      {q:"Dein Freundeskreis beschreibt dich als...",a:["🌟 Der Unterhalter","🔍 Der Analytiker","💛 Der Empath","🎯 Der Macher"]},
      {q:"Bei Stress reagierst du...",a:["🏃 Handeln sofort","🧘 Rückzug & Nachdenken","📞 Freunde anrufen","📋 Plan machen"]},
    ],
    ergebnisse: [
      {typ:"INTJ",name:"Der Architekt",pct:"2.1%",desc:"Strategisch. Unabhängig. Visionär."},
      {typ:"INFJ",name:"Der Advokat",pct:"1.5%",desc:"Idealistisch. Tiefgründig. Seltenster Typ."},
      {typ:"ENFP",name:"Der Aktivist",pct:"8.1%",desc:"Enthusiastisch. Kreativ. Sozial."},
      {typ:"ISTP",name:"Der Virtuose",pct:"5.4%",desc:"Praktisch. Cool. Analytisch."},
      {typ:"ENTJ",name:"Der Kommandeur",pct:"1.8%",desc:"Charismatisch. Entschlossen. Boss."},
      {typ:"INFP",name:"Der Vermittler",pct:"4.4%",desc:"Poetisch. Empathisch. Träumer."},
      {typ:"ENTP",name:"Der Debattierer",pct:"3.2%",desc:"Clever. Neugierig. Provokant."},
      {typ:"ISFJ",name:"Der Verteidiger",pct:"13.8%",desc:"Loyal. Fürsorglich. Zuverlässig."},
    ],
    hashtags: "#persönlichkeitstest #mbti #16typen #fyp #foryou #psychologie #persönlichkeit #wertyp",
  },
  { id: "rizz", name: "Rizz Score", emoji: "😏", color: "#FF0099", path: "/rizz",
    hooks: [
      "Dein RIZZ SCORE entscheidet alles",
      "0 oder 100 — wie viel Rizz hast du?",
      "Die WAHRHEIT über deinen Rizz Score",
      "Rizz Level: Unspoken oder Cringe?",
      "Dein Crush bewertet deinen Rizz...",
      "W oder L? Dein Rizz Score sagt die Wahrheit",
      "Unspoken Rizz oder Negative Rizz — wo stehst du?",
      "Dieser Test hat mein Selbstbewusstsein zerstört 💀",
      "POV: Dein Rizz Score kommt raus",
      "Warum manche Menschen einfach RIZZ haben",
      "Der Rizz Test der viral geht 🔥",
      "Dein Rizz Level in 3 Fragen bestimmt",
    ],
    fragen: [
      {q:"Dein Crush schreibt 'hey' um 23:47",a:["😴 Morgen antworten","👋 Sofort 'Hey!'","😏 'Konntest nicht schlafen?'","💀 Auf gelesen lassen"]},
      {q:"Erstes Date. Wer zahlt?",a:["💪 Ich natürlich","🤝 Teilen","🎩 Wer einlädt","🤷 Kommt drauf an"]},
      {q:"Crush likt dein altes Foto",a:["❤️ Zurückliken","😎 Cool bleiben","📸 Story posten","✍️ Direkt anschreiben"]},
      {q:"Du siehst jemanden attraktives. Du...",a:["👀 Augenkontakt halten","🙈 Wegschauen","😊 Lächeln","💬 Direkt ansprechen"]},
      {q:"Dein Flirt-Style ist...",a:["🔥 Direkt & confident","😂 Humor & Witz","🎯 Subtile Zeichen","🤷 Ich flirte nicht"]},
    ],
    ergebnisse: [
      {typ:"97",name:"UNSPOKEN RIZZ",pct:"Top 3%",desc:"Du sagst nichts und sie fallen um."},
      {typ:"87",name:"ELITE RIZZ",pct:"Top 13%",desc:"Smooth operator."},
      {typ:"52",name:"MID RIZZ",pct:"Top 48%",desc:"Mal ja, mal nein."},
      {typ:"23",name:"NEGATIVE RIZZ",pct:"Bottom 23%",desc:"Uff. Arbeit nötig."},
    ],
    hashtags: "#rizz #rizztest #rizzcheck #fyp #charisma #dating #crush #foryou #rizzler",
  },
  { id: "aura", name: "Aura Check", emoji: "✨", color: "#A855F7", path: "/aura",
    hooks: [
      "Welche AURA strahlst du aus?",
      "Nur 3% haben eine GOLDENE Aura",
      "Deine Aura-Farbe verrät dein wahres Ich",
      "Die SELTENSTE Aura der Welt",
      "Was sagt deine Energie über dich?",
      "Deine Aura Farbe in 3 Fragen",
      "Warum manche Menschen eine MAGNETISCHE Aura haben",
      "POV: Deine Aura wird enthüllt ✨",
      "Aura Check: Was sehen andere in dir?",
      "Goldene Aura oder Schwarze Aura?",
      "Deine Energie lügt nicht 🔮",
      "5.7 Milliarden Views — welche Aura hast DU?",
    ],
    fragen: [
      {q:"Du betrittst einen Raum. Was passiert?",a:["👑 Alle schauen","🫥 Keiner merkt es","🌊 Stimmung ändert sich","🪴 Suche eine Ecke"]},
      {q:"Welche Farbe zieht dich an?",a:["✨ Gold","💜 Violett","💙 Blau","❤️ Rot"]},
      {q:"Fremde erzählen dir Probleme. Warum?",a:["🔮 Meine Energie","😊 Mein Gesicht","🚫 Passiert nie","❓ Ich frage nach"]},
      {q:"Deine Energie ist am stärksten...",a:["🌅 Morgens","🌙 Nachts","🌿 In der Natur","👥 Mit Menschen"]},
      {q:"Was sagen Freunde über dich?",a:["🌟 Du bist ein Licht","🔮 Du bist mystisch","💙 Du bist beruhigend","🔥 Du bist intensiv"]},
    ],
    ergebnisse: [
      {typ:"GOLD",name:"Goldene Aura",pct:"3%",desc:"Magnetisch. Warm. Alle wollen bei dir sein."},
      {typ:"VIOLETT",name:"Violette Aura",pct:"7%",desc:"Mystisch. Intuitiv. Du spürst mehr."},
      {typ:"BLAU",name:"Blaue Aura",pct:"15%",desc:"Ruhig. Heilend. Du bringst Frieden."},
      {typ:"ROT",name:"Rote Aura",pct:"12%",desc:"Leidenschaftlich. Mutig. Pure Energie."},
    ],
    hashtags: "#aura #auracheck #auratest #fyp #energie #spirituell #viral #foryou #aurafarbe",
  },
  { id: "brainrot", name: "Brainrot Score", emoji: "🧟", color: "#00FF88", path: "/brainrot",
    hooks: [
      "Wie KAPUTT ist dein Gehirn?",
      "Brainrot Score: 0 oder 100?",
      "94% Brainrot... Hoffnung?",
      "Dein Gehirn nach 5h TikTok",
      "Sigma oder Skibidi? Dein Level",
      "Terminal Brainrot oder noch zu retten?",
      "POV: Dein Brainrot Score kommt raus 💀",
      "Wie viel Ohio steckt in dir?",
      "Dein Gehirn ist 94% Internet 🧟",
      "Skibidi Toilet hat dein Leben ruiniert",
      "Gen Z Brainrot Test — wie schlimm ist es?",
      "Dein Gehirn vor und nach TikTok 💀",
    ],
    fragen: [
      {q:"Jemand sagt 'Hallo'. Dein Gehirn:",a:["👋 Normal","🗿 Sigma Grindset","💀 SKIBIDI","🧠 Leer"]},
      {q:"Du siehst eine Treppe. Gedanke?",a:["🚶 Normal","🎵 Stairway","🚪 Backrooms","📍 Ohio"]},
      {q:"TikTok Stunden pro Tag?",a:["⏰ Unter 1h","📱 1-3h","📲 3-5h","😵 Was ist Schlaf?"]},
      {q:"Dein Lieblingswort ist...",a:["💬 Normal","🗿 'Rizz'","💀 'Skibidi'","🧠 'Sigma'"]},
      {q:"Wenn du Langeweile hast...",a:["📚 Buch lesen","📱 TikTok","🎮 Zocken","🌀 Doom-Scrolling"]},
    ],
    ergebnisse: [
      {typ:"94",name:"TERMINAL BRAINROT",pct:"Top 6%",desc:"Dein Gehirn ist 94% TikTok."},
      {typ:"72",name:"ADVANCED BRAINROT",pct:"Top 28%",desc:"Noch zu retten. Vielleicht."},
      {typ:"45",name:"MILD BRAINROT",pct:"Top 55%",desc:"Du kennst Memes aber lebst noch."},
      {typ:"12",name:"KEIN BRAINROT",pct:"Top 88%",desc:"Wie? Du bist auf TikTok OHNE Brainrot?"},
    ],
    hashtags: "#brainrot #brainrottest #fyp #genz #skibidi #sigma #tiktok #viral",
  },
  { id: "dark", name: "Dark Triad", emoji: "🖤", color: "#FF2255", path: "/dark",
    hooks: [
      "Wie DARK ist deine Persönlichkeit?",
      "Narzissmus. Machiavellismus. Psychopathie.",
      "Jeder hat eine dunkle Seite...",
      "Traust du dich DIESEN Test?",
      "Deine dunkle Seite in 3 Minuten enthüllt",
      "Dark Empath oder Pure Soul?",
      "Psychologen nennen das die gefährlichste Kombination",
      "POV: Deine dunkle Seite kommt raus 🖤",
      "Bist du ein Dark Empath ohne es zu wissen?",
      "Der Test den die meisten nicht bestehen wollen",
      "Wie dark bist du WIRKLICH?",
      "Deine Schattenseite — bist du bereit?",
    ],
    fragen: [
      {q:"Du gewinnst. Dein erster Gedanke?",a:["🏆 Verdient","😈 Die anderen verlieren","🤝 Glück gehabt","📈 Mehr davon"]},
      {q:"Jemand kritisiert dich öffentlich",a:["😤 Zurückschlagen","🧊 Kalt lächeln","😢 Verletzt sein","🤔 Drüber nachdenken"]},
      {q:"Du kannst jemanden manipulieren. Tust du es?",a:["✅ Wenn nötig","❌ Niemals","🤷 Kommt drauf an","😏 Schon passiert"]},
      {q:"Empathie ist für dich...",a:["💛 Alles","🔧 Ein Werkzeug","😐 Manchmal nützlich","🚫 Schwäche"]},
      {q:"Wenn du etwas willst...",a:["💬 Direkt fragen","🎭 Charmieren","🧠 Strategie entwickeln","⏳ Geduldig warten"]},
    ],
    ergebnisse: [
      {typ:"87%",name:"DARK EMPATH",pct:"Top 8%",desc:"Du verstehst Menschen UND nutzt es."},
      {typ:"65%",name:"STRATEGIST",pct:"Top 25%",desc:"Kalkuliert. Aber nicht böse."},
      {typ:"42%",name:"GREY AREA",pct:"Top 50%",desc:"Bisschen dark, bisschen light."},
      {typ:"15%",name:"PURE SOUL",pct:"Top 85%",desc:"Zu gut für diese Welt."},
    ],
    hashtags: "#darktriad #psychologie #narzissmus #persönlichkeit #fyp #viral #darkside #foryou",
  },
  { id: "npc", name: "NPC Test", emoji: "🤖", color: "#FFB800", path: "/npc",
    hooks: [
      "Bist du NPC oder MAIN CHARACTER?",
      "90% der Menschen leben wie NPCs...",
      "Main Character Energy oder NPC Dialog?",
      "Lebst du oder existierst du nur?",
      "NPC Check: Gleiche Route jeden Tag?",
      "POV: Du bist der NPC in deinem eigenen Leben",
      "Main Character oder Background NPC?",
      "Dein Leben als Videospiel — welche Rolle?",
      "Warum du vielleicht ein NPC bist 🤖",
      "NPC oder Main Character — der Test",
      "Gleiche Route. Gleicher Job. Gleicher Dialog.",
      "Bist du der Held deiner Geschichte?",
    ],
    fragen: [
      {q:"Dein Montag Morgen Routine?",a:["📋 Exakt gleich","🎲 Jeden Tag anders","😴 Kein Plan","⚡ Power Routine"]},
      {q:"Jemand spricht dich random an",a:["💬 Gespräch führen","🏃 Weitergehen","🔄 Standard-Antwort","🌟 Beste Unterhaltung"]},
      {q:"Dein Leben als Film wäre:",a:["🎬 Blockbuster","📺 Wiederholung","🎭 Indie Film","💤 Doku über Nichts"]},
      {q:"Dein letztes spontanes Abenteuer war...",a:["🌍 Letzte Woche","📅 Letzten Monat","🤔 Kann mich nicht erinnern","❌ Nie"]},
      {q:"Wenn jemand deine Meinung fragt...",a:["💡 Klare Ansicht","🤷 Kommt drauf an","🔄 Stimme zu","🤐 Sage nichts"]},
    ],
    ergebnisse: [
      {typ:"MAIN",name:"MAIN CHARACTER",pct:"Top 10%",desc:"Die Welt dreht sich um dich. Literally."},
      {typ:"SIDE",name:"SIDE CHARACTER",pct:"Top 35%",desc:"Wichtig, aber nicht der Held."},
      {typ:"BG",name:"BACKGROUND NPC",pct:"Top 65%",desc:"Du stehst rum und sagst 'Schönes Wetter'."},
      {typ:"NPC",name:"FULL NPC",pct:"Top 90%",desc:"Gleiche Route. Gleicher Dialog. Jeden Tag."},
    ],
    hashtags: "#npc #npctest #maincharacter #fyp #viral #genz #foryou #maincharacterenergy",
  },
  { id: "toxicity", name: "Toxicity Check", emoji: "☢️", color: "#FF6B35", path: "/toxicity",
    hooks: [
      "Von WHOLESOME bis BIOHAZARD",
      "Wie TOXISCH bist du wirklich?",
      "'Ich bin nicht toxisch, ich bin ehrlich'",
      "Toxicity Level: Messbar. Erschreckend.",
      "Dein Umfeld WEISS es schon...",
      "Biohazard oder Wholesome? Der Test",
      "Dein Toxicity Score in 3 Fragen",
      "POV: Dein Toxicity Level kommt raus ☢️",
      "Warum du vielleicht toxischer bist als du denkst",
      "Tschernobyl oder Angel? Dein Level",
      "Deine Freunde wissen es schon...",
      "Toxisch oder nur 'ehrlich'?",
    ],
    fragen: [
      {q:"Dein/e Ex hat jemand Neues. Reaktion?",a:["😊 Freut mich","📱 Stalken","🔥 Besser aussehen","😈 Den/die Neue anschreiben"]},
      {q:"Freund/in sagt Pläne ab. Du:",a:["👍 Kein Problem","😤 Beleidigt sein","📵 Ignorieren","💣 Drama machen"]},
      {q:"'Ich bin nicht toxisch, ich bin...'",a:["🤷 ...normal","💯 ...ehrlich","🙄 ...besser als du","😇 ...tatsächlich nett"]},
      {q:"Wenn jemand dich ignoriert...",a:["😐 Egal","📱 Doppelt schreiben","🔥 Konfrontieren","👻 Zurückghosten"]},
      {q:"In einem Streit bist du...",a:["🕊️ Vermittler","🔥 Eskalierst sofort","🧊 Schweigst","📋 Sachlich bleibst"]},
    ],
    ergebnisse: [
      {typ:"92%",name:"BIOHAZARD",pct:"Top 8%",desc:"Toxisch Level: Tschernobyl."},
      {typ:"67%",name:"GIFTIG",pct:"Top 33%",desc:"Du weißt es. Dein Umfeld auch."},
      {typ:"38%",name:"LEICHT TOXIC",pct:"Top 62%",desc:"Nur manchmal. Wenn provoziert."},
      {typ:"11%",name:"WHOLESOME",pct:"Top 89%",desc:"Du bist die Therapie deiner Freunde."},
    ],
    hashtags: "#toxic #toxicitycheck #toxisch #fyp #viral #foryou #realität #beziehung",
  },
  { id: "redflag", name: "Red Flag Detector", emoji: "🚩", color: "#FF2255", path: "/redflag",
    hooks: [
      "Wie viele RED FLAGS hast du?",
      "Die meisten haben 7+ ohne es zu wissen",
      "Red Flag Detector: Dein Ergebnis wird WILD",
      "Dein Date hat 3 Red Flags... und du?",
      "Red Flag oder Green Flag? Der Test",
      "POV: Dein Red Flag Score kommt raus 🚩",
      "Bist du selbst die Red Flag?",
      "11 Red Flags in einer Person — bist du dabei?",
      "Deine Freunde haben es dir nie gesagt...",
      "Green Flag oder Red Flag Factory?",
      "Der ehrlichste Red Flag Test 🚩",
      "Wie viele Flags hast du wirklich?",
    ],
    fragen: [
      {q:"Ex schreibt 'Ich vermisse dich' um 2 Uhr",a:["💬 Sofort antworten","😴 Ignorieren","💕 'Ich dich auch'","📸 Screenshot an Freunde"]},
      {q:"Partner checkt dein Handy. Deine Reaktion?",a:["🤷 Kein Problem","🚩 RED FLAG","📱 Gegenchecken","🔒 Passwort ändern"]},
      {q:"3. Date und er/sie folgt dem/der Ex",a:["👍 Normal","🚩 Sofort ansprechen","👻 Ghosten","🔍 Ex stalken"]},
      {q:"Dein letzter Beziehungsstatus war...",a:["💚 Gesund & glücklich","🔄 Kompliziert","🚩 Toxisch","🤷 Situationship"]},
      {q:"Wenn jemand dich ghostet...",a:["😐 Weitermachen","📱 Bombardieren","🔍 Social Media stalken","🤷 War sowieso nichts"]},
    ],
    ergebnisse: [
      {typ:"11",name:"RED FLAG FACTORY",pct:"Top 7%",desc:"Du BIST die Red Flag."},
      {typ:"7",name:"SUSPICIOUS",pct:"Top 30%",desc:"Einige Warnsignale erkannt."},
      {typ:"4",name:"MOSTLY CLEAN",pct:"Top 60%",desc:"Ein paar kleine Flags. Wer hat die nicht?"},
      {typ:"1",name:"GREEN FLAG",pct:"Top 90%",desc:"Du bist ein Walking Green Flag."},
    ],
    hashtags: "#redflag #redflagtest #dating #toxic #fyp #viral #foryou #beziehung #ex",
  },
  { id: "ki", name: "KI Persönlichkeit", emoji: "🤖", color: "#00FF88", path: "/ki-test",
    hooks: [
      "Welche KI bist du?",
      "ChatGPT oder Gemini — welcher Typ bist du?",
      "Dein Persönlichkeitstyp als KI-Modell",
      "POV: Du bist eine KI 🤖",
      "Welches KI-Modell passt zu dir?",
      "ChatGPT, Claude oder Gemini — du bist einer davon",
      "Deine Persönlichkeit als KI erklärt",
      "Welche KI hätte dein Gehirn?",
    ],
    fragen: [
      {q:"Wie löst du Probleme?",a:["📊 Analytisch","🎨 Kreativ","🤝 Kollaborativ","⚡ Schnell & direkt"]},
      {q:"Deine Stärke ist...",a:["🧠 Logik","💡 Ideen","❤️ Empathie","🎯 Effizienz"]},
      {q:"Bei Unsicherheit...",a:["📚 Mehr recherchieren","🎲 Ausprobieren","👥 Fragen","🤷 Entscheiden"]},
    ],
    ergebnisse: [
      {typ:"GPT-4",name:"ChatGPT",pct:"32%",desc:"Vielseitig. Direkt. Immer eine Antwort."},
      {typ:"Claude",name:"Claude",pct:"28%",desc:"Nachdenklich. Ethisch. Tiefgründig."},
      {typ:"Gemini",name:"Gemini",pct:"25%",desc:"Kreativ. Multimodal. Google-Energie."},
      {typ:"Grok",name:"Grok",pct:"15%",desc:"Frech. Direkt. Kein Filter."},
    ],
    hashtags: "#ki #chatgpt #gemini #persönlichkeit #fyp #viral #ai #foryou",
  },
];

const TRENDS = [
  {name:"POV Overreaction",score:95,desc:"POV-Format wo banale Situationen dramatisiert werden",rising:true,category:"Format"},
  {name:"Red Flag Content",score:92,desc:"Dating Red Flags sind Dauerbrenner",rising:false,category:"Dating"},
  {name:"Aura Points",score:92,desc:"5.7 Mrd Views - Aura Trend explodiert",rising:false,category:"Viral"},
  {name:"Breakup Content",score:88,desc:"Megan Moroney Cloud 9 treibt emotionalen Content",rising:true,category:"Thema"},
  {name:"Situationship",score:86,desc:"Beziehungsstatus-Content trending",rising:true,category:"Dating"},
  {name:"Corporate Brainrot",score:85,desc:"Büro-Humor meets Internet-Kultur",rising:true,category:"Nische"},
  {name:"Older Brother Core",score:82,desc:"Beschützer-Energie und Geschwister-Dynamik",rising:true,category:"Trend"},
  {name:"Attachment Style",score:78,desc:"Beziehungstyp-Tests boomen auf TikTok",rising:true,category:"Psychologie"},
  {name:"Sigma Grindset",score:75,desc:"Ironische Sigma-Male Inhalte",rising:false,category:"Meme"},
  {name:"Welcher Rapper bist du",score:80,desc:"Pop Culture Personality Mapping",rising:false,category:"Test"},
];

const SCRIPTS = {
  persoenlichkeit: {
    voiceover: [
      "Warte mal kurz. Nur 2% der Menschen haben diesen Persönlichkeitstyp. Und die meisten wissen nicht mal welcher Typ sie sind. Mach den Test — Link in der Bio.",
      "Dein Persönlichkeitstyp erklärt ALLES. Warum du in Beziehungen immer dieselben Fehler machst. Warum bestimmte Jobs dich ausbrennen. Und warum du mit manchen Menschen einfach nicht klarkommst. 3 Minuten. Kostenlos. Link in der Bio.",
      "Ich hab den Persönlichkeitstest gemacht und... ich bin schockiert. Schau dir an was rausgekommen ist. Mach ihn selbst — Link in der Bio.",
    ],
    cta: ["Dein Typ wartet auf dich 👇", "Link in der Bio — 3 Minuten", "Welcher Typ bist DU? 👇"],
  },
  rizz: {
    voiceover: [
      "Dein Rizz Score in 3 Fragen. Ich warne dich — das Ergebnis könnte wehtun. Link in der Bio.",
      "Unspoken Rizz oder Negative Rizz? Der Test zeigt die Wahrheit. Und die meisten landen nicht wo sie denken. Link in der Bio.",
      "Mein Rizz Score ist rausgekommen und ich bin... überrascht. Mach den Test selbst. Link in der Bio.",
    ],
    cta: ["Dein Rizz Score 👇", "Wie viel Rizz hast du? 👇", "Link in der Bio 😏"],
  },
  aura: {
    voiceover: [
      "Welche Aura strahlst du aus? Goldene Aura haben nur 3% der Menschen. Mach den Test — Link in der Bio.",
      "Deine Aura-Farbe verrät mehr über dich als du denkst. 5.7 Milliarden Views — jetzt weißt du warum. Link in der Bio.",
      "Ich hab meinen Aura Check gemacht. Das Ergebnis hat mich umgehauen. Dein Link ist in der Bio.",
    ],
    cta: ["Welche Aura hast du? ✨", "Deine Aura wartet 👇", "Link in der Bio ✨"],
  },
};

function LoginScreen({onLogin}) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  return (
    <div style={{minHeight:"100vh",background:"#060A14",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <div style={{textAlign:"center",padding:32}}>
        <div style={{fontSize:48,marginBottom:12}}>🔒</div>
        <div style={{fontSize:20,fontWeight:900,color:"#fff",marginBottom:4}}>Content Generator</div>
        <div style={{fontSize:12,color:"#7A84A8",marginBottom:20}}>Nur für Admins</div>
        <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setError(false);}}
          placeholder="Passwort" style={{background:"#161C35",border:`1px solid ${error?"#FF2255":"#1A2040"}`,borderRadius:10,padding:"12px 16px",color:"#fff",fontSize:14,width:220,textAlign:"center",outline:"none"}}
          onKeyDown={e=>{if(e.key==="Enter"){pw===PASSWORD?onLogin():setError(true);}}} />
        <br/>
        <button onClick={()=>pw===PASSWORD?onLogin():setError(true)}
          style={{background:"linear-gradient(135deg,#00E5FF,#A855F7)",border:"none",borderRadius:10,padding:"12px 32px",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",marginTop:12}}>
          Einloggen
        </button>
        {error && <div style={{color:"#FF2255",fontSize:11,marginTop:8}}>Falsches Passwort</div>}
      </div>
    </div>
  );
}

function ContentGenerator() {
  const [tab, setTab] = useState("generate");
  const [selectedTest, setSelectedTest] = useState(TESTS[0]);
  const [generated, setGenerated] = useState(null);
  const [batchCount, setBatchCount] = useState(5);
  const [batchResults, setBatchResults] = useState([]);
  const [copied, setCopied] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiScript, setAiScript] = useState(null);
  const [aiError, setAiError] = useState(null);
  const [optimizeLoading, setOptimizeLoading] = useState(false);
  const [optimizeResult, setOptimizeResult] = useState(null);
  const [optimizeError, setOptimizeError] = useState(null);
  const [optimizeInput, setOptimizeInput] = useState({hook:"",frage:"",antworten:["","","",""],ergebnis:"",cta:""});

  const generate = () => {
    const hook = selectedTest.hooks[Math.floor(Math.random()*selectedTest.hooks.length)];
    const frage = selectedTest.fragen[Math.floor(Math.random()*selectedTest.fragen.length)];
    const ergebnis = selectedTest.ergebnisse[Math.floor(Math.random()*selectedTest.ergebnisse.length)];
    const caption = `${hook} ${selectedTest.emoji}\n\n${frage.q}\n\npersoenlichkeitstest-kostenlos.de${selectedTest.path}\n\n${selectedTest.hashtags}`;
    setGenerated({hook,frage,ergebnis,caption,test:selectedTest});
    setAiScript(null);
    setAiError(null);
  };

  const generateBatch = () => {
    const results = [];
    for(let i=0;i<batchCount;i++){
      const test = TESTS[Math.floor(Math.random()*TESTS.length)];
      const hook = test.hooks[Math.floor(Math.random()*test.hooks.length)];
      const frage = test.fragen[Math.floor(Math.random()*test.fragen.length)];
      const ergebnis = test.ergebnisse[Math.floor(Math.random()*test.ergebnisse.length)];
      const caption = `${hook} ${test.emoji}\n\n${frage.q}\n\npersoenlichkeitstest-kostenlos.de${test.path}\n\n${test.hashtags}`;
      results.push({hook,frage,ergebnis,caption,test,id:i});
    }
    setBatchResults(results);
  };

  const generateAiScript = async () => {
    if (!generated) return;
    setAiLoading(true);
    setAiError(null);
    try {
      const res = await fetch("/api/generate-script", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          test: generated.test.name,
          hook: generated.hook,
          frage: generated.frage.q,
          antworten: generated.frage.a,
          ergebnis: generated.ergebnis.name,
          ergebnisDesc: generated.ergebnis.desc,
          path: generated.test.path,
          emoji: generated.test.emoji,
        })
      });
      const data = await res.json();
      if (data.script) {
        setAiScript(data.script);
      } else {
        setAiError("Fehler beim Generieren");
      }
    } catch(e) {
      setAiError("API nicht erreichbar");
    }
    setAiLoading(false);
  };

  const copyText = (text,id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(()=>setCopied(null),2000);
  };

  const exportBatch = () => {
    const text = batchResults.map((r,i) => `=== VIDEO ${i+1} — ${r.test.name} ===\n${r.caption}\n`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied("export");
    setTimeout(()=>setCopied(null),2000);
  };

  const generateOptimize = async () => {
    setOptimizeLoading(true);
    setOptimizeError(null);
    setOptimizeResult(null);
    try {
      const res = await fetch("/api/optimize-content", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(optimizeInput)
      });
      const data = await res.json();
      if (data.result) {
        setOptimizeResult(data.result);
      } else {
        setOptimizeError(data.error || "Fehler beim Optimieren");
      }
    } catch(e) {
      setOptimizeError("API nicht erreichbar");
    }
    setOptimizeLoading(false);
  };

  const fillFromGenerated = () => {
    if (!generated) return;
    setOptimizeInput({
      hook: generated.hook,
      frage: generated.frage.q,
      antworten: generated.frage.a,
      ergebnis: generated.ergebnis.name + " — " + generated.ergebnis.desc,
      cta: "Welcher Typ bist DU? Link in der Bio 👇"
    });
    setTab("optimize");
  };

  const getScriptForTest = (testId) => {
    const scripts = SCRIPTS[testId];
    if (!scripts) return null;
    return {
      voiceover: scripts.voiceover[Math.floor(Math.random()*scripts.voiceover.length)],
      cta: scripts.cta[Math.floor(Math.random()*scripts.cta.length)],
    };
  };

  return (
    <div style={{minHeight:"100vh",background:"#060A14",fontFamily:"'DM Sans',system-ui,sans-serif",color:"#fff",maxWidth:600,margin:"0 auto",padding:"12px 16px"}}>
      <Head><title>Content Generator | Admin</title></Head>
      
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:16}}>
        <div style={{fontSize:10,color:"#7A84A8",letterSpacing:3}}>ADMIN DASHBOARD</div>
        <div style={{fontSize:20,fontWeight:900,background:"linear-gradient(135deg,#00E5FF,#FF0099)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Content Generator + Trend Radar</div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,marginBottom:16,overflowX:"auto"}}>
        {[{id:"generate",label:"⚡ Generator"},{id:"batch",label:"📦 Batch"},{id:"optimize",label:"🔥 Optimieren"},{id:"script",label:"🎬 Script"},{id:"trends",label:"📈 Trends"},{id:"calendar",label:"📅 Plan"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            flexShrink:0,background:tab===t.id?"rgba(0,229,255,0.15)":"rgba(22,28,53,0.7)",
            border:`1px solid ${tab===t.id?"#00E5FF":"#1A2040"}`,borderRadius:8,padding:"8px 10px",
            fontSize:10,fontWeight:700,color:tab===t.id?"#00E5FF":"#7A84A8",cursor:"pointer",whiteSpace:"nowrap"
          }}>{t.label}</button>
        ))}
      </div>

      {/* GENERATOR TAB */}
      {tab==="generate" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>TEST AUSWÄHLEN</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
            {TESTS.map(t=>(
              <button key={t.id} onClick={()=>{setSelectedTest(t);setGenerated(null);setAiScript(null);}} style={{
                background:selectedTest.id===t.id?`${t.color}20`:"rgba(22,28,53,0.7)",
                border:`1px solid ${selectedTest.id===t.id?t.color:"#1A2040"}`,
                borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:11,
                color:selectedTest.id===t.id?t.color:"#7A84A8",fontWeight:600
              }}>{t.emoji} {t.name}</button>
            ))}
          </div>

          <button onClick={generate} style={{
            width:"100%",background:"linear-gradient(135deg,#00E5FF,#A855F7)",color:"#fff",
            border:"none",borderRadius:12,padding:"14px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:16
          }}>⚡ Video generieren</button>

          {generated && (
            <div>
              {/* Slide Preview */}
              <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>SLIDE-VORSCHAU</div>
              
              {/* Hook */}
              <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:16,marginBottom:8,borderLeft:`3px solid ${generated.test.color}`}}>
                <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>SLIDE 1 — HOOK</div>
                <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>{generated.hook}</div>
                <div style={{fontSize:12,color:generated.test.color,marginTop:4}}>{generated.test.emoji}</div>
              </div>

              {/* Frage */}
              <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:16,marginBottom:8,borderLeft:`3px solid ${generated.test.color}`}}>
                <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>SLIDE 2 — FRAGE</div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:8}}>{generated.frage.q}</div>
                {generated.frage.a.map((a,i)=>(
                  <div key={i} style={{background:i===2?`${generated.test.color}15`:"rgba(255,255,255,0.03)",border:`1px solid ${i===2?generated.test.color+"40":"rgba(255,255,255,0.06)"}`,borderRadius:8,padding:"6px 10px",marginBottom:4,fontSize:11,color:i===2?generated.test.color:"#D8DDF0"}}>{a}</div>
                ))}
              </div>

              {/* Ergebnis */}
              <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:16,marginBottom:8,borderLeft:`3px solid ${generated.test.color}`}}>
                <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>SLIDE 3 — ERGEBNIS</div>
                <div style={{fontSize:28,fontWeight:900,color:generated.test.color}}>{generated.ergebnis.typ}</div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>{generated.ergebnis.name}</div>
                <div style={{fontSize:11,color:"#7A84A8"}}>Nur {generated.ergebnis.pct}</div>
                <div style={{fontSize:11,color:"#D8DDF0",marginTop:4}}>{generated.ergebnis.desc}</div>
              </div>

              {/* CTA */}
              <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:16,marginBottom:12,borderLeft:`3px solid ${generated.test.color}`}}>
                <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>SLIDE 4 — CTA</div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>Welcher Typ bist DU?</div>
                <div style={{fontSize:12,color:generated.test.color,marginTop:4}}>persoenlichkeitstest-kostenlos.de{generated.test.path}</div>
              </div>

              {/* Voiceover (wenn verfügbar) */}
              {SCRIPTS[generated.test.id] && (
                <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:16,marginBottom:12,borderLeft:"3px solid #FFB800"}}>
                  <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>🎙️ VOICEOVER VORSCHLAG</div>
                  <div style={{fontSize:12,color:"#D8DDF0",lineHeight:1.6}}>{getScriptForTest(generated.test.id)?.voiceover}</div>
                  <button onClick={()=>copyText(getScriptForTest(generated.test.id)?.voiceover,"vo")} style={{
                    background:"transparent",border:"1px solid #FFB800",borderRadius:6,padding:"4px 10px",
                    fontSize:10,color:"#FFB800",cursor:"pointer",marginTop:8,fontWeight:600
                  }}>{copied==="vo"?"✅ Kopiert":"📋 Kopieren"}</button>
                </div>
              )}

              {/* Optimieren Button */}
              <button onClick={fillFromGenerated} style={{
                width:"100%",background:"linear-gradient(135deg,#FF6B35,#FF2255)",color:"#fff",
                border:"none",borderRadius:12,padding:"10px",fontSize:12,fontWeight:700,cursor:"pointer",marginBottom:8
              }}>🔥 Diesen Output optimieren</button>

              {/* KI Script Button */}
              <button onClick={generateAiScript} disabled={aiLoading} style={{
                width:"100%",background:aiLoading?"rgba(22,28,53,0.7)":"linear-gradient(135deg,#FF0099,#FFB800)",color:"#fff",
                border:"none",borderRadius:12,padding:"12px",fontSize:13,fontWeight:700,cursor:aiLoading?"not-allowed":"pointer",marginBottom:8,opacity:aiLoading?0.7:1
              }}>{aiLoading?"🤖 KI schreibt Script...":"🤖 KI-Script generieren (GPT-4)"}</button>

              {aiError && <div style={{color:"#FF2255",fontSize:11,marginBottom:8,textAlign:"center"}}>{aiError}</div>}

              {aiScript && (
                <div style={{background:"rgba(255,0,153,0.08)",borderRadius:12,padding:16,marginBottom:12,border:"1px solid rgba(255,0,153,0.2)"}}>
                  <div style={{fontSize:9,color:"#FF0099",letterSpacing:2,marginBottom:8}}>🤖 KI-GENERIERTES SCRIPT</div>
                  <pre style={{fontSize:11,color:"#D8DDF0",whiteSpace:"pre-wrap",margin:0,lineHeight:1.7}}>{aiScript}</pre>
                  <button onClick={()=>copyText(aiScript,"ai")} style={{
                    width:"100%",background:copied==="ai"?"#00FF8820":"transparent",
                    border:`1px solid ${copied==="ai"?"#00FF88":"rgba(255,0,153,0.3)"}`,borderRadius:8,
                    padding:"8px",fontSize:11,color:copied==="ai"?"#00FF88":"#FF0099",cursor:"pointer",fontWeight:700,marginTop:8
                  }}>{copied==="ai"?"✅ Kopiert!":"📋 Script kopieren"}</button>
                </div>
              )}

              {/* Caption */}
              <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:6}}>CAPTION ZUM KOPIEREN</div>
              <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:8,border:"1px solid #1A2040"}}>
                <pre style={{fontSize:11,color:"#D8DDF0",whiteSpace:"pre-wrap",margin:0,lineHeight:1.5}}>{generated.caption}</pre>
              </div>
              <button onClick={()=>copyText(generated.caption,"caption")} style={{
                width:"100%",background:copied==="caption"?"#00FF8820":"rgba(22,28,53,0.7)",
                border:`1px solid ${copied==="caption"?"#00FF88":"#1A2040"}`,borderRadius:8,
                padding:"10px",fontSize:12,color:copied==="caption"?"#00FF88":"#00E5FF",cursor:"pointer",fontWeight:700
              }}>{copied==="caption"?"✅ Kopiert!":"📋 Caption kopieren"}</button>
            </div>
          )}
        </div>
      )}

      {/* BATCH TAB */}
      {tab==="batch" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>BATCH GENERATOR</div>
          <div style={{display:"flex",gap:8,marginBottom:12,alignItems:"center"}}>
            <span style={{fontSize:12,color:"#7A84A8"}}>Anzahl:</span>
            {[5,10,15,20,30].map(n=>(
              <button key={n} onClick={()=>setBatchCount(n)} style={{
                background:batchCount===n?"#00E5FF20":"rgba(22,28,53,0.7)",
                border:`1px solid ${batchCount===n?"#00E5FF":"#1A2040"}`,borderRadius:6,
                padding:"6px 12px",fontSize:12,color:batchCount===n?"#00E5FF":"#7A84A8",cursor:"pointer",fontWeight:700
              }}>{n}</button>
            ))}
          </div>
          <button onClick={generateBatch} style={{
            width:"100%",background:"linear-gradient(135deg,#FF0099,#FFB800)",color:"#fff",
            border:"none",borderRadius:12,padding:"14px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:8
          }}>📦 {batchCount} Videos generieren</button>

          {batchResults.length > 0 && (
            <button onClick={exportBatch} style={{
              width:"100%",background:copied==="export"?"#00FF8820":"rgba(22,28,53,0.7)",
              border:`1px solid ${copied==="export"?"#00FF88":"#1A2040"}`,borderRadius:8,
              padding:"10px",fontSize:12,color:copied==="export"?"#00FF88":"#FFB800",cursor:"pointer",fontWeight:700,marginBottom:16
            }}>{copied==="export"?"✅ Alle kopiert!":"📤 Alle Captions exportieren"}</button>
          )}

          {batchResults.map((r,i)=>(
            <div key={i} style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:8,borderLeft:`3px solid ${r.test.color}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <div>
                  <span style={{fontSize:9,color:"#7A84A8"}}>VIDEO {i+1}</span>
                  <span style={{fontSize:11,color:r.test.color,fontWeight:700,marginLeft:8}}>{r.test.emoji} {r.test.name}</span>
                </div>
                <button onClick={()=>copyText(r.caption,`batch-${i}`)} style={{
                  background:copied===`batch-${i}`?"#00FF8820":"transparent",
                  border:`1px solid ${copied===`batch-${i}`?"#00FF88":"#1A2040"}`,borderRadius:6,
                  padding:"4px 10px",fontSize:10,color:copied===`batch-${i}`?"#00FF88":"#00E5FF",cursor:"pointer"
                }}>{copied===`batch-${i}`?"✅":"📋"}</button>
              </div>
              <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:4}}>{r.hook}</div>
              <div style={{fontSize:10,color:"#7A84A8"}}>{r.frage.q}</div>
              <div style={{fontSize:11,color:r.test.color,fontWeight:700,marginTop:4}}>{r.ergebnis.typ} — {r.ergebnis.name}</div>
              <div style={{fontSize:10,color:"#7A84A8",marginTop:2,fontStyle:"italic"}}>{r.ergebnis.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* OPTIMIZE TAB */}
      {tab==="optimize" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:4}}>🔥 OPTIMIERUNGS-LAYER</div>
          <div style={{fontSize:10,color:"#7A84A8",marginBottom:12}}>Bestehenden Output schärfen. Nicht neu erfinden — aggressiv verbessern.</div>

          {/* Input Felder */}
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>HOOK</div>
            <input value={optimizeInput.hook} onChange={e=>setOptimizeInput(p=>({...p,hook:e.target.value}))}
              placeholder="z.B. Nur 2% der Menschen sind dieser Typ..."
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"8px 10px",color:"#fff",fontSize:11,outline:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>FRAGE</div>
            <input value={optimizeInput.frage} onChange={e=>setOptimizeInput(p=>({...p,frage:e.target.value}))}
              placeholder="z.B. Du bist auf einer Party. Was machst du?"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"8px 10px",color:"#fff",fontSize:11,outline:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>ANTWORTEN (eine pro Zeile)</div>
            <textarea value={optimizeInput.antworten.join("\n")} onChange={e=>setOptimizeInput(p=>({...p,antworten:e.target.value.split("\n")}))}
              rows={4} placeholder="🎤 Unterhalte alle\n🤫 Tiefe Gespräche\n👀 Beobachten\n🎯 Organisiere alles"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"8px 10px",color:"#fff",fontSize:11,outline:"none",resize:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>ERGEBNIS</div>
            <input value={optimizeInput.ergebnis} onChange={e=>setOptimizeInput(p=>({...p,ergebnis:e.target.value}))}
              placeholder="z.B. INTJ — Strategisch. Unabhängig. Visionär."
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"8px 10px",color:"#fff",fontSize:11,outline:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>CTA</div>
            <input value={optimizeInput.cta} onChange={e=>setOptimizeInput(p=>({...p,cta:e.target.value}))}
              placeholder="z.B. Welcher Typ bist DU? Link in der Bio 👇"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"8px 10px",color:"#fff",fontSize:11,outline:"none",boxSizing:"border-box"}} />
          </div>

          <button onClick={generateOptimize} disabled={optimizeLoading || !optimizeInput.hook} style={{
            width:"100%",background:optimizeLoading?"rgba(22,28,53,0.7)":"linear-gradient(135deg,#FF6B35,#FF2255)",color:"#fff",
            border:"none",borderRadius:12,padding:"14px",fontSize:14,fontWeight:700,cursor:optimizeLoading?"not-allowed":"pointer",marginBottom:12,opacity:optimizeLoading?0.7:1
          }}>{optimizeLoading?"🔥 KI optimiert...":"🔥 Jetzt optimieren"}</button>

          {optimizeError && <div style={{color:"#FF2255",fontSize:11,marginBottom:8,textAlign:"center"}}>{optimizeError}</div>}

          {optimizeResult && (
            <div>
              <div style={{background:"rgba(255,107,53,0.08)",borderRadius:12,padding:16,marginBottom:8,border:"1px solid rgba(255,107,53,0.25)"}}>
                <div style={{fontSize:9,color:"#FF6B35",letterSpacing:2,marginBottom:8}}>🔥 OPTIMIERTER OUTPUT</div>
                <pre style={{fontSize:11,color:"#D8DDF0",whiteSpace:"pre-wrap",margin:0,lineHeight:1.8}}>{optimizeResult}</pre>
                <button onClick={()=>copyText(optimizeResult,"opt")} style={{
                  width:"100%",background:copied==="opt"?"#00FF8820":"transparent",
                  border:`1px solid ${copied==="opt"?"#00FF88":"rgba(255,107,53,0.4)"}`,borderRadius:8,
                  padding:"8px",fontSize:11,color:copied==="opt"?"#00FF88":"#FF6B35",cursor:"pointer",fontWeight:700,marginTop:10
                }}>{copied==="opt"?"✅ Kopiert!":"📋 Alles kopieren"}</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SCRIPT TAB */}
      {tab==="script" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:4}}>🎬 SCRIPT BIBLIOTHEK</div>
          <div style={{fontSize:10,color:"#7A84A8",marginBottom:16}}>Fertige Voiceover-Scripts für jede Testkategorie</div>
          {TESTS.filter(t => SCRIPTS[t.id]).map(t=>(
            <div key={t.id} style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:8,borderLeft:`3px solid ${t.color}`}}>
              <div style={{fontSize:12,fontWeight:700,color:t.color,marginBottom:8}}>{t.emoji} {t.name}</div>
              {SCRIPTS[t.id].voiceover.map((v,i)=>(
                <div key={i} style={{marginBottom:8}}>
                  <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>SCRIPT {i+1}</div>
                  <div style={{fontSize:11,color:"#D8DDF0",lineHeight:1.6,marginBottom:4}}>{v}</div>
                  <button onClick={()=>copyText(v,`script-${t.id}-${i}`)} style={{
                    background:copied===`script-${t.id}-${i}`?"#00FF8820":"transparent",
                    border:`1px solid ${copied===`script-${t.id}-${i}`?"#00FF88":t.color+"40"}`,borderRadius:6,
                    padding:"3px 8px",fontSize:9,color:copied===`script-${t.id}-${i}`?"#00FF88":t.color,cursor:"pointer"
                  }}>{copied===`script-${t.id}-${i}`?"✅ Kopiert":"📋 Kopieren"}</button>
                </div>
              ))}
            </div>
          ))}
          <div style={{background:"rgba(0,229,255,0.08)",borderRadius:10,padding:12,marginTop:8,border:"1px solid rgba(0,229,255,0.2)"}}>
            <div style={{fontSize:10,color:"#00E5FF",fontWeight:700,marginBottom:4}}>💡 TIPP: KI-Scripts</div>
            <div style={{fontSize:10,color:"#7A84A8"}}>Im Generator-Tab kannst du per KI individuelle Scripts für jede Kombination aus Hook + Frage + Ergebnis generieren lassen.</div>
          </div>
        </div>
      )}

      {/* TRENDS TAB */}
      {tab==="trends" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>TREND RADAR — AKTUELL</div>
          {TRENDS.sort((a,b)=>b.score-a.score).map((t,i)=>(
            <div key={i} style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:6,borderLeft:`3px solid ${t.score>85?"#00FF88":t.score>70?"#FFB800":"#7A84A8"}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <span style={{fontSize:13,fontWeight:700,color:"#fff"}}>{t.name}</span>
                  {t.rising && <span style={{fontSize:9,color:"#00FF88",marginLeft:6}}>↑ RISING</span>}
                </div>
                <div style={{fontSize:18,fontWeight:900,color:t.score>85?"#00FF88":t.score>70?"#FFB800":"#7A84A8"}}>{t.score}</div>
              </div>
              <div style={{fontSize:10,color:"#7A84A8",marginTop:2}}>{t.desc}</div>
              <div style={{height:4,background:"#1A2040",borderRadius:2,marginTop:6,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${t.score}%`,background:t.score>85?"#00FF88":t.score>70?"#FFB800":"#7A84A8",borderRadius:2}} />
              </div>
              <div style={{fontSize:9,color:"#7A84A8",marginTop:3}}>{t.category}</div>
            </div>
          ))}
        </div>
      )}

      {/* CALENDAR TAB */}
      {tab==="calendar" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>POSTING PLAN — DIESE WOCHE</div>
          {["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"].map((day,i)=>(
            <div key={i} style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:6}}>
              <div style={{fontSize:12,fontWeight:700,color:"#fff",marginBottom:6}}>{day}</div>
              <div style={{display:"flex",gap:6}}>
                {[{time:"14:00",test:TESTS[(i*2)%TESTS.length]},{time:"18:00",test:TESTS[(i*2+1)%TESTS.length]},{time:"21:00",test:TESTS[(i*2+3)%TESTS.length]}].map((slot,j)=>(
                  <div key={j} style={{flex:1,background:"rgba(6,10,20,0.5)",borderRadius:8,padding:"6px 8px",borderLeft:`2px solid ${slot.test.color}`}}>
                    <div style={{fontSize:9,color:"#7A84A8"}}>{slot.time}</div>
                    <div style={{fontSize:10,color:slot.test.color,fontWeight:600}}>{slot.test.emoji} {slot.test.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{background:"rgba(0,255,136,0.08)",borderRadius:10,padding:10,marginTop:8,border:"1px solid rgba(0,255,136,0.2)"}}>
            <div style={{fontSize:10,color:"#00FF88",fontWeight:700}}>BESTE POSTING-ZEITEN DEUTSCHLAND:</div>
            <div style={{fontSize:10,color:"#7A84A8",marginTop:4}}>Di-Do 14:00-18:00 Uhr (höchste Aktivität)</div>
            <div style={{fontSize:10,color:"#7A84A8"}}>Sa-So 12:00-15:00 + 19:00-22:00 Uhr</div>
            <div style={{fontSize:10,color:"#7A84A8",marginTop:4}}>🎯 3 Posts/Tag = maximale Reichweite</div>
            <div style={{fontSize:10,color:"#7A84A8"}}>📈 Wechsel zwischen Tests für Algorithmus-Boost</div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{textAlign:"center",padding:"16px 0",marginTop:16,borderTop:"1px solid #1A2040"}}>
        <div style={{fontSize:9,color:"#7A84A8"}}>persoenlichkeitstest-kostenlos.de | Admin Generator | 2026</div>
      </div>
    </div>
  );
}

export default function Generator() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? <ContentGenerator /> : <LoginScreen onLogin={()=>setLoggedIn(true)} />;
}
