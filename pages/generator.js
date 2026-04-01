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
  { id: "manipulierbar", name: "Manipulierbar Test", emoji: "🎭", color: "#FF6B35", path: "/manipulierbar",
    hooks: [
      "Wie leicht bist du manipulierbar?",
      "Jemand manipuliert dich gerade — merkst du es?",
      "Dein Manipulations-Score in 3 Fragen",
      "Bist du ein leichtes Ziel?",
      "Wie gut erkennst du Manipulation?",
    ],
    fragen: [
      {q:"Jemand sagt dir du siehst müde aus. Was denkst du?",a:["😴 Stimmt, ich bin müde","🤔 Warum sagt er das?","🙄 Ich fühle mich gut","🔍 Ich hinterfrage die Aussage"]},
      {q:"Dein Freund sagt alle anderen machen das so. Du...",a:["👍 Mache es auch","🤔 Überlege erst","🚫 Mache es nicht","🔍 Frage nach Belegen"]},
      {q:"Jemand macht dir ein Geschenk und bittet dann um einen Gefallen. Du...",a:["👍 Helfe sofort","🤔 Fühle mich komisch","🙄 Sage nein","🔍 Erkenne das Muster"]},
    ],
    ergebnisse: [
      {typ:"LEICHTES ZIEL",name:"Hochmanipulierbar",pct:"35%",desc:"Du glaubst Menschen schnell. Das nutzen andere aus."},
      {typ:"NAIV",name:"Gutgläubig",pct:"30%",desc:"Du siehst das Gute in Menschen — manchmal zu viel."},
      {typ:"SKEPTISCH",name:"Kritisch",pct:"25%",desc:"Du hinterfragst. Gut so."},
      {typ:"UNMANIPULIERBAR",name:"Manipulation-Proof",pct:"10%",desc:"Du erkennst jeden Trick sofort."},
    ],
    hashtags: "#manipulation #psychologie #manipulierbar #fyp #viral #psychology #mindgames #foryou",
  },
  { id: "mentalage", name: "Mental Age Test", emoji: "🧠", color: "#00E5FF", path: "/mentalage",
    hooks: [
      "Dein mentales Alter ist nicht was du denkst",
      "Wie alt ist dein Gehirn wirklich?",
      "Mental Age Test — die meisten liegen falsch",
      "Dein Gehirn ist jünger als du glaubst",
      "Wie alt fühlst du dich wirklich?",
    ],
    fragen: [
      {q:"Was machst du an einem freien Samstag?",a:["🎉 Feiern gehen","📚 Lesen & Entspannen","🎮 Zocken","🌿 Natur & Sport"]},
      {q:"Wie reagierst du auf Kritik?",a:["😢 Ich nehme es persönlich","🤔 Ich reflektiere","😤 Ich ignoriere es","💪 Ich nutze es"]},
      {q:"Deine Lieblingszeit ist...",a:["3 Uhr nachts","Morgens früh","Nachmittags","Abends"]},
    ],
    ergebnisse: [
      {typ:"16",name:"Mental Age 16",pct:"25%",desc:"Dein Gehirn ist jung, wild und will Spaß."},
      {typ:"25",name:"Mental Age 25",pct:"30%",desc:"Ambitiös, energetisch, noch nicht ganz erwachsen."},
      {typ:"35",name:"Mental Age 35",pct:"28%",desc:"Reif, ausgeglichen, weißt was du willst."},
      {typ:"50+",name:"Mental Age 50+",pct:"17%",desc:"Weise. Geduldig. Du hast alles schon gesehen."},
    ],
    hashtags: "#mentalage #mentalagetest #fyp #viral #psychologie #gehirn #alter #foryou",
  },
  { id: "delulu", name: "Delulu Test", emoji: "🤩", color: "#FF0099", path: "/delulu",
    hooks: [
      "Wie delulu bist du wirklich?",
      "Dein Delulu Score — sei ehrlich",
      "Delulu is the solulu — oder?",
      "Bist du delulu oder realistisch?",
      "Dein Delulu Level in 3 Fragen",
    ],
    fragen: [
      {q:"Dein Crush hat dich einmal angeschaut. Du denkst...",a:["💘 Er/Sie liebt mich","🤔 Vielleicht mag er/sie mich","🤷 Nichts besonderes","😂 Ich war im Weg"]},
      {q:"Du hast einen Traum und alle sagen er ist unrealistisch. Du...",a:["🔥 Machst es trotzdem","🤔 Überlegst nochmal","😢 Gibst auf","💪 Beweist allen das Gegenteil"]},
      {q:"Wie oft glaubst du an Zeichen vom Universum?",a:["Ständig","Manchmal","Selten","Nie"]},
    ],
    ergebnisse: [
      {typ:"100%",name:"FULL DELULU",pct:"20%",desc:"Delulu is the solulu. Du lebst in deiner eigenen Realität."},
      {typ:"70%",name:"DELULU QUEEN/KING",pct:"35%",desc:"Optimistisch bis zum Anschlag. Das ist deine Stärke."},
      {typ:"40%",name:"REALISTIC DREAMER",pct:"30%",desc:"Du träumst, aber mit einem Fuß auf dem Boden."},
      {typ:"10%",name:"HYPER REALISTIC",pct:"15%",desc:"Du siehst die Welt wie sie ist. Manchmal zu klar."},
    ],
    hashtags: "#delulu #deluluisthesolulu #fyp #viral #genz #manifestation #foryou #trending",
  },
  { id: "pickme", name: "Pick Me Test", emoji: "🙋", color: "#FF69B4", path: "/pickme",
    hooks: [
      "Bist du ein Pick Me?",
      "Dein Pick Me Score — die Wahrheit",
      "Pick Me oder authentisch?",
      "Wie sehr bist du ein Pick Me?",
      "Pick Me Check in 3 Fragen",
    ],
    fragen: [
      {q:"Jemand kritisiert andere Mädchen/Jungs. Du...",a:["👍 Stimmst zu um zu gefällen","🤔 Sagst nichts","🚫 Widersprichst","🤷 Interessiert mich nicht"]},
      {q:"Wie oft passt du dich an um zu gefällen?",a:["Ständig","Manchmal","Selten","Nie"]},
      {q:"Dein Crush mag eine bestimmte Musik. Du...",a:["🎵 Magst sie plötzlich auch","🤔 Probierst sie aus","🤷 Bleibst bei deiner Musik","🔥 Zeigst ihm/ihr deine Musik"]},
    ],
    ergebnisse: [
      {typ:"FULL PICK ME",name:"Pick Me Champion",pct:"20%",desc:"Du verlierst dich für andere. Zeit für dich selbst."},
      {typ:"LEICHT PICK ME",name:"Anpassungstalent",pct:"35%",desc:"Du willst gefällen. Das ist menschlich."},
      {typ:"BALANCED",name:"Authentisch",pct:"30%",desc:"Du bist du selbst. Meistens."},
      {typ:"ANTI PICK ME",name:"Unfiltered",pct:"15%",desc:"Du bist 100% du. Kein Filter, keine Anpassung."},
    ],
    hashtags: "#pickme #pickmetest #fyp #viral #genz #authentisch #foryou #trending",
  },
  { id: "sigma", name: "Sigma Test", emoji: "🕱️", color: "#6B7FFF", path: "/sigma",
    hooks: [
      "Bist du wirklich ein Sigma?",
      "Sigma oder Alpha — der Test entscheidet",
      "Dein Sigma Score in 3 Fragen",
      "Sigma Male/Female Test — die Wahrheit",
      "Wie viel Sigma steckt in dir?",
    ],
    fragen: [
      {q:"Wie wichtig ist dir die Meinung anderer?",a:["🙏 Sehr wichtig","🤔 Manchmal","🤷 Kaum","💀 Gar nicht"]},
      {q:"Du bist auf einer Party. Du...",a:["🎉 Bist Mittelpunkt","👥 Redest mit wenigen","👀 Beobachtest","🎮 Bist gar nicht da"]},
      {q:"Dein Ziel im Leben ist...",a:["👑 Respekt & Status","💰 Geld & Freiheit","🧠 Wissen & Wachstum","🔥 Meine eigenen Regeln"]},
    ],
    ergebnisse: [
      {typ:"FULL SIGMA",name:"Sigma Grindset",pct:"8%",desc:"Du spielst nach deinen Regeln. Lone Wolf Energy."},
      {typ:"SIGMA TENDENZ",name:"Introvert Alpha",pct:"22%",desc:"Stark, still, strategisch."},
      {typ:"ALPHA",name:"Alpha Energy",pct:"35%",desc:"Du führst. Du dominierst. Du gewinnst."},
      {typ:"BETA",name:"Team Player",pct:"35%",desc:"Du bist loyal, kooperativ und unterschätzt."},
    ],
    hashtags: "#sigma #sigmatest #sigmamale #fyp #viral #grindset #alpha #foryou",
  },
  { id: "toxictrait", name: "Toxic Trait Test", emoji: "☠️", color: "#FF2255", path: "/toxictrait",
    hooks: [
      "Dein toxischster Trait — die Wahrheit",
      "Jeder hat einen toxic trait. Welcher ist deiner?",
      "Dein Toxic Trait in 3 Fragen",
      "Was ist dein schlimmster Trait?",
      "Toxic Trait Check — sei ehrlich",
    ],
    fragen: [
      {q:"Was machst du wenn du verletzt wirst?",a:["🤐 Stille Behandlung","😤 Eskalieren","🎼 Dramatisieren","💬 Reden"]},
      {q:"Wie oft bist du eifersüchtig?",a:["Ständig","Manchmal","Selten","Nie"]},
      {q:"Wenn du im Unrecht bist...",a:["🙄 Gebe es nie zu","🤔 Überlege lange","😢 Entschuldige mich sofort","💪 Lerne daraus"]},
    ],
    ergebnisse: [
      {typ:"STONEWALLER",name:"Stille Behandlung",pct:"28%",desc:"Du mauert bis die andere Person aufgibt."},
      {typ:"DRAMATIZER",name:"Drama Queen/King",pct:"25%",desc:"Alles ist eine Katastrophe. Alles."},
      {typ:"GASLIGHTER",name:"Reality Bender",pct:"22%",desc:"Du lässt andere an ihrer Wahrnehmung zweifeln."},
      {typ:"PEOPLE PLEASER",name:"Grenzenlos",pct:"25%",desc:"Du sagst nie nein und brichst dann zusammen."},
    ],
    hashtags: "#toxictrait #toxic #fyp #viral #psychologie #beziehung #redflags #foryou",
  },
  { id: "ickfactor", name: "Ick Factor Test", emoji: "🤢", color: "#FFB800", path: "/ickfactor",
    hooks: [
      "Was ist dein größter Ick?",
      "Ick Factor Test — was tötet deine Anziehung?",
      "Dein Ick Level in 3 Fragen",
      "Jeder hat einen Ick. Welcher ist deiner?",
      "Ick Check — die Wahrheit über deine Grenzen",
    ],
    fragen: [
      {q:"Was tötet deine Anziehung sofort?",a:["🚄 Zu langsam fahren","👌 Falsche Emojis","🎵 Falsche Musik","🍽️ Komisch essen"]},
      {q:"Wie schnell kriegst du den Ick?",a:["Sofort","Nach Tagen","Nach Wochen","Kaum"]},
      {q:"Was ist dein größter Ick bei Dates?",a:["📱 Zu viel Handy","💰 Über Geld reden","🥳 Zu laut lachen","😰 Zu schüchtern sein"]},
    ],
    ergebnisse: [
      {typ:"HIGH ICK",name:"Ick Machine",pct:"25%",desc:"Du kriegst den Ick bei allem. Standards auf 1000."},
      {typ:"MEDIUM ICK",name:"Selektiv",pct:"40%",desc:"Du hast klare Grenzen. Das ist gesund."},
      {typ:"LOW ICK",name:"Tolerant",pct:"25%",desc:"Dich stört kaum was. Du siehst das Große."},
      {typ:"NO ICK",name:"Unconditional",pct:"10%",desc:"Du liebst bedingungslos. Schön aber riskant."},
    ],
    hashtags: "#ick #ickfactor #icktest #fyp #viral #dating #genz #foryou",
  },
  { id: "emotionaldamage", name: "Emotional Damage Test", emoji: "💔", color: "#A855F7", path: "/emotionaldamage",
    hooks: [
      "Dein Emotional Damage Level",
      "Wie viel Emotional Damage hast du?",
      "Emotional Damage Test — die Wahrheit",
      "Dein Trauma Score in 3 Fragen",
      "Wie gebrochen bist du wirklich?",
    ],
    fragen: [
      {q:"Wie oft weinst du ohne Grund?",a:["Ständig","Manchmal","Selten","Nie"]},
      {q:"Wenn jemand nett zu dir ist, denkst du...",a:["💀 Was will er/sie?","🤔 Ist das echt?","😊 Ich freue mich","💛 Ich vertraue sofort"]},
      {q:"Deine Kindheit war...",a:["😢 Schwierig","🤔 Gemischt","😊 Normal","🌟 Wunderschön"]},
    ],
    ergebnisse: [
      {typ:"MAXIMUM DAMAGE",name:"Emotional Wreck",pct:"20%",desc:"Du trägst viel. Aber du bist noch hier."},
      {typ:"HIGH DAMAGE",name:"Healing in Progress",pct:"35%",desc:"Du arbeitest daran. Das zählt."},
      {typ:"MEDIUM DAMAGE",name:"Functional Mess",pct:"30%",desc:"Du funktionierst. Meistens."},
      {typ:"LOW DAMAGE",name:"Emotionally Stable",pct:"15%",desc:"Du hast dich selbst. Das ist alles."},
    ],
    hashtags: "#emotionaldamage #trauma #fyp #viral #mentalhealth #healing #psychology #foryou",
  },
  { id: "romanempire", name: "Roman Empire Test", emoji: "🏛️", color: "#C0A060", path: "/romanempire",
    hooks: [
      "Wie oft denkst du ans Römische Reich?",
      "Roman Empire Test — wie viel steckt in dir?",
      "Dein Inner Roman in 3 Fragen",
      "Bist du ein moderner Römer?",
      "Roman Empire Energie — welcher Typ bist du?",
    ],
    fragen: [
      {q:"Wie oft denkst du ans Römische Reich?",a:["Täglich","Wöchentlich","Manchmal","Nie"]},
      {q:"Was fasziniert dich an Geschichte?",a:["⚔️ Kriege & Strategie","🏙️ Architektur","👑 Macht & Politik","📚 Gar nichts"]},
      {q:"Deine Lebensphilosophie?",a:["Carpe Diem","Veni Vidi Vici","Dum spiro spero","YOLO"]},
    ],
    ergebnisse: [
      {typ:"CAESAR",name:"Der Herrscher",pct:"15%",desc:"Du denkst täglich ans Römische Reich. Und das ist gut so."},
      {typ:"SENATOR",name:"Der Stratege",pct:"30%",desc:"Machtbewusst. Kalkuliert. Immer einen Plan."},
      {typ:"LEGIONÄR",name:"Der Kämpfer",pct:"35%",desc:"Du kämpfst für deine Ziele. Kein Rückzug."},
      {typ:"PLEBEJER",name:"Der Moderne",pct:"20%",desc:"Römisches Reich? Kein Gedanke. TikTok > Geschichte."},
    ],
    hashtags: "#romanempire #romanempiretest #fyp #viral #history #caesar #foryou #trending",
  },
  { id: "attachment", name: "Attachment Style Test", emoji: "💞", color: "#FF69B4", path: "/attachment",
    hooks: [
      "Dein Attachment Style erklärt alles",
      "Warum du in Beziehungen so bist wie du bist",
      "Attachment Style Test — die Wahrheit",
      "Anxious, Avoidant oder Secure?",
      "Dein Bindungsstil in 3 Fragen",
    ],
    fragen: [
      {q:"Dein Partner antwortet 3h nicht. Du...",a:["😤 Schreibst 10 Nachrichten","🤔 Machst dir Sorgen","🤷 Machst dein Ding","💀 Blockierst ihn/sie"]},
      {q:"Wie nähe magst du in Beziehungen?",a:["💘 So nah wie möglich","🤔 Mittel","💪 Etwas Abstand","🔥 Viel Freiraum"]},
      {q:"Was passiert wenn du verlassen wirst?",a:["😢 Ich breche zusammen","😤 Ich werde wütend","🤷 Ich akzeptiere es","🔥 Ich werde besser"]},
    ],
    ergebnisse: [
      {typ:"ANXIOUS",name:"Anxious Attachment",pct:"25%",desc:"Du liebst zu viel, zu schnell, zu intensiv."},
      {typ:"AVOIDANT",name:"Avoidant Attachment",pct:"30%",desc:"Nähe macht dir Angst. Du läufst weg."},
      {typ:"SECURE",name:"Secure Attachment",pct:"35%",desc:"Du liebst gesund. Du bist die Ausnahme."},
      {typ:"DISORGANIZED",name:"Disorganized",pct:"10%",desc:"Du willst Nähe und fliehst gleichzeitig."},
    ],
    hashtags: "#attachmentstyle #attachment #anxious #avoidant #fyp #viral #beziehung #psychology #foryou",
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
          placeholder="Passwort" style={{background:"#161C35",border:`1px solid ${error?"#FF2255":"#1A2040"}`,borderRadius:10,padding:"14px 16px",color:"#fff",fontSize:16,width:"min(260px,80vw)",textAlign:"center",outline:"none",WebkitAppearance:"none",display:"block",margin:"0 auto"}}
          onKeyDown={e=>{if(e.key==="Enter"){pw===PASSWORD?onLogin():setError(true);}}} />
        <br/>
        <button onClick={()=>pw===PASSWORD?onLogin():setError(true)}
          style={{background:"linear-gradient(135deg,#00E5FF,#A855F7)",border:"none",borderRadius:10,padding:"14px 32px",color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:12,minHeight:52,touchAction:"manipulation",WebkitTapHighlightColor:"transparent"}}>
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
  const [aggressivLevel, setAggressivLevel] = useState(7);
  const [activeVorlage, setActiveVorlage] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);
  const [slideGenerated, setSlideGenerated] = useState(null);
  const [slideLoading, setSlideLoading] = useState(false);
  const [slideTest, setSlideTest] = useState(TESTS[0]);
  // Trends Tab State
  const [trendData, setTrendData] = useState(TRENDS);
  const [trendLoading, setTrendLoading] = useState(false);
  const [trendError, setTrendError] = useState(null);
  const [trendLastUpdate, setTrendLastUpdate] = useState(null);
  const [trendContent, setTrendContent] = useState({});

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
        body: JSON.stringify({...optimizeInput, aggressivLevel, vorlage: activeVorlage})
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

  // Canvas Slide Generator
  const generateSlides = async (testOverride, generatedOverride) => {
    const t = testOverride || slideTest;
    const g = generatedOverride || {
      hook: t.hooks[Math.floor(Math.random()*t.hooks.length)],
      frage: t.fragen[Math.floor(Math.random()*t.fragen.length)],
      ergebnis: t.ergebnisse[Math.floor(Math.random()*t.ergebnisse.length)],
    };
    setSlideLoading(true);
    setSlideGenerated(null);
    await new Promise(r => setTimeout(r, 50));

    const W = 1080, H = 1920;
    const slides = [];

    const drawSlide = (drawFn) => {
      const canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext('2d');
      // Background
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, W, H);
      // Decorative triangles
      const tris = [
        {x:120,y:180,s:28,c:'#8B0000'},{x:680,y:120,s:20,c:'#8B0000'},
        {x:900,y:400,s:16,c:'#8B0000'},{x:200,y:1600,s:22,c:'#8B0000'},
        {x:800,y:1750,s:18,c:'#8B0000'},{x:50,y:900,s:14,c:'#8B0000'},
        {x:1020,y:700,s:12,c:'#8B0000'},{x:500,y:1850,s:24,c:'#8B0000'},
      ];
      tris.forEach(({x,y,s,c}) => {
        ctx.beginPath();
        ctx.moveTo(x, y-s); ctx.lineTo(x+s*0.87, y+s*0.5); ctx.lineTo(x-s*0.87, y+s*0.5);
        ctx.closePath(); ctx.fillStyle = c; ctx.fill();
      });
      // Subtle gradient overlay
      const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.8);
      grad.addColorStop(0, 'rgba(20,10,40,0.3)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
      drawFn(ctx, W, H);
      return canvas.toDataURL('image/png');
    };

    const roundRect = (ctx, x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    const PADX = 80; // horizontal padding each side

    // Wrap text with automatic line breaking — x is always center
    const wrapText = (ctx, text, centerX, y, maxW, lineH) => {
      const words = text.split(' ');
      let line = '';
      let lines = [];
      for (let w of words) {
        const test = line + w + ' ';
        if (ctx.measureText(test).width > maxW && line !== '') {
          lines.push(line.trim()); line = w + ' ';
        } else { line = test; }
      }
      if (line.trim()) lines.push(line.trim());
      lines.forEach((l, i) => ctx.fillText(l, centerX, y + i * lineH));
      return lines.length;
    };

    // Auto-shrink font until text fits within maxW, then draw
    const fitText = (ctx, text, centerX, y, maxW, startSize, minSize=28) => {
      let size = startSize;
      const family = ctx.font.replace(/^\d+px\s+/, '');
      const weight = ctx.font.includes('bold') ? 'bold ' : '';
      while (size >= minSize) {
        ctx.font = `${weight}${size}px ${family}`;
        if (ctx.measureText(text).width <= maxW) break;
        size -= 4;
      }
      ctx.fillText(text, centerX, y);
      return size;
    };

    // Wrap + auto-shrink: shrink font until all lines fit, then wrap
    const wrapAutoShrink = (ctx, text, centerX, y, maxW, lineH, startSize, minSize=28) => {
      let size = startSize;
      const family = ctx.font.replace(/^\d+px\s+/, '');
      const weight = ctx.font.includes('bold') ? 'bold ' : '';
      // Shrink until longest word fits
      const words = text.split(' ');
      while (size >= minSize) {
        ctx.font = `${weight}${size}px ${family}`;
        const longest = words.reduce((a,b) => ctx.measureText(a).width > ctx.measureText(b).width ? a : b);
        if (ctx.measureText(longest).width <= maxW) break;
        size -= 4;
      }
      return wrapText(ctx, text, centerX, y, maxW, Math.round(size * 1.25));
    };

    // SLIDE 1: Hook
    slides.push(drawSlide((ctx, W, H) => {
      const maxW = W - PADX * 2;
      // Top label
      ctx.font = 'bold 36px Arial';
      ctx.fillStyle = t.color;
      ctx.textAlign = 'center';
      fitText(ctx, t.emoji + ' ' + t.name.toUpperCase(), W/2, 280, maxW, 36);
      // Hook — wrap with auto-shrink, split into 2 color blocks
      const hookWords = g.hook.split(' ');
      const midIdx = Math.ceil(hookWords.length / 2);
      const line1 = hookWords.slice(0, midIdx).join(' ');
      const line2 = hookWords.slice(midIdx).join(' ');
      ctx.fillStyle = '#ffffff';
      const s1 = fitText(ctx, line1, W/2, H/2 - 100, maxW, 96);
      ctx.fillStyle = t.color;
      ctx.font = `bold ${s1}px Arial`;
      fitText(ctx, line2, W/2, H/2 + 40, maxW, s1);
      // Subline
      ctx.font = '52px Arial';
      ctx.fillStyle = '#FFB800';
      fitText(ctx, 'Die meisten wissen es nicht...', W/2, H/2 + 200, maxW, 52);
      // Bottom URL
      ctx.font = 'bold 38px Arial';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      fitText(ctx, 'persoenlichkeitstest-kostenlos.de', W/2, H - 200, maxW, 38);
    }));

    // SLIDE 2: Frage
    slides.push(drawSlide((ctx, W, H) => {
      const maxW = W - PADX * 2;
      ctx.font = 'bold 40px Arial';
      ctx.fillStyle = t.color;
      ctx.textAlign = 'center';
      ctx.fillText('FRAGE:', W/2, 280);
      ctx.font = 'bold 72px Arial';
      ctx.fillStyle = '#ffffff';
      const lines = wrapAutoShrink(ctx, g.frage.q, W/2, H/2 - 280, maxW, 90, 72);
      // Answers
      g.frage.a.forEach((ans, i) => {
        const ay = H/2 + 80 + i * 160;
        ctx.fillStyle = i === 0 ? t.color + '30' : 'rgba(255,255,255,0.05)';
        roundRect(ctx, PADX, ay - 55, W - PADX*2, 120, 20);
        ctx.fill();
        ctx.strokeStyle = i === 0 ? t.color : 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 2;
        roundRect(ctx, PADX, ay - 55, W - PADX*2, 120, 20);
        ctx.stroke();
        ctx.font = 'bold 52px Arial';
        ctx.fillStyle = i === 0 ? t.color : '#D8DDF0';
        ctx.textAlign = 'center';
        fitText(ctx, ans, W/2, ay + 15, maxW - 20, 52);
      });
    }));

    // SLIDE 3: Ergebnis
    slides.push(drawSlide((ctx, W, H) => {
      const maxW = W - PADX * 2;
      ctx.font = 'bold 44px Arial';
      ctx.fillStyle = t.color;
      ctx.textAlign = 'center';
      ctx.fillText('DEIN ERGEBNIS:', W/2, 280);
      // Big result type — auto-shrink
      ctx.font = 'bold 160px Arial';
      ctx.fillStyle = t.color;
      fitText(ctx, g.ergebnis.typ, W/2, H/2 - 60, maxW, 160);
      // Name — auto-shrink
      ctx.font = 'bold 80px Arial';
      ctx.fillStyle = '#ffffff';
      fitText(ctx, g.ergebnis.name, W/2, H/2 + 80, maxW, 80);
      // Percentage
      ctx.font = '52px Arial';
      ctx.fillStyle = '#FFB800';
      fitText(ctx, 'Nur ' + g.ergebnis.pct + ' der Menschen', W/2, H/2 + 200, maxW, 52);
      // Desc — wrap
      ctx.font = '48px Arial';
      ctx.fillStyle = 'rgba(216,221,240,0.8)';
      wrapAutoShrink(ctx, g.ergebnis.desc, W/2, H/2 + 340, maxW, 65, 48);
    }));

    // SLIDE 4: CTA
    slides.push(drawSlide((ctx, W, H) => {
      const maxW = W - PADX * 2;
      ctx.font = 'bold 52px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      fitText(ctx, 'Welcher Typ bist', W/2, H/2 - 200, maxW, 52);
      ctx.font = 'bold 120px Arial';
      ctx.fillStyle = t.color;
      fitText(ctx, 'DU?', W/2, H/2 - 60, maxW, 120);
      ctx.font = '52px Arial';
      ctx.fillStyle = '#FFB800';
      fitText(ctx, '👇 Link in der Bio', W/2, H/2 + 100, maxW, 52);
      // URL box
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      roundRect(ctx, PADX, H/2 + 200, W - PADX*2, 120, 20);
      ctx.fill();
      ctx.font = 'bold 44px Arial';
      ctx.fillStyle = t.color;
      fitText(ctx, 'persoenlichkeitstest-kostenlos.de' + t.path, W/2, H/2 + 278, maxW - 20, 44);
    }));

    setSlideGenerated({slides, test: t, generated: g});
    setSlideLoading(false);
  };

  const downloadSlide = (dataUrl, index, testName) => {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `slide_${testName.replace(/\s/g,'_')}_${index+1}.png`;
    a.click();
  };

  const downloadAllSlides = () => {
    if (!slideGenerated) return;
    slideGenerated.slides.forEach((s, i) => {
      setTimeout(() => downloadSlide(s, i, slideGenerated.test.name), i * 300);
    });
  };

  const generateVideo = async () => {
    if (!slideGenerated || !slideGenerated.slides || slideGenerated.slides.length === 0) return;
    setVideoLoading(true);
    setVideoProgress(0);
    setVideoUrl(null);
    try {
      const W = 1080, H = 1920;
      const canvas = document.createElement("canvas");
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext("2d");
      const stream = canvas.captureStream(30);
      const chunks = [];
      const recorder = new MediaRecorder(stream, {mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8000000});
      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunks, {type:"video/webm"});
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setVideoLoading(false);
        setVideoProgress(100);
      };
      recorder.start();
      const SLIDE_DURATION = 3000; // 3s per slide
      const FPS = 30;
      const FRAMES_PER_SLIDE = (SLIDE_DURATION / 1000) * FPS;
      const slides = slideGenerated.slides;
      for (let si = 0; si < slides.length; si++) {
        const img = new Image();
        img.src = slides[si];
        await new Promise(r => { img.onload = r; img.onerror = r; });
        for (let f = 0; f < FRAMES_PER_SLIDE; f++) {
          const progress = f / FRAMES_PER_SLIDE;
          // Ken Burns zoom-in effect
          const scale = 1 + progress * 0.06;
          const offsetX = (W * (scale - 1)) / 2;
          const offsetY = (H * (scale - 1)) / 2;
          ctx.clearRect(0, 0, W, H);
          ctx.save();
          ctx.translate(-offsetX, -offsetY);
          ctx.drawImage(img, 0, 0, W * scale, H * scale);
          ctx.restore();
          // Fade in first 15 frames, fade out last 15 frames
          if (f < 15) {
            ctx.fillStyle = `rgba(0,0,0,${1 - f/15})`;
            ctx.fillRect(0, 0, W, H);
          } else if (f > FRAMES_PER_SLIDE - 15) {
            ctx.fillStyle = `rgba(0,0,0,${(f - (FRAMES_PER_SLIDE-15))/15})`;
            ctx.fillRect(0, 0, W, H);
          }
          await new Promise(r => setTimeout(r, 1000/FPS));
        }
        setVideoProgress(Math.round(((si+1)/slides.length)*90));
      }
      recorder.stop();
    } catch(e) {
      console.error("Video error:", e);
      setVideoLoading(false);
    }
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
    <div style={{minHeight:"100vh",background:"#060A14",fontFamily:"'DM Sans',system-ui,sans-serif",color:"#fff",maxWidth:600,margin:"0 auto",padding:"12px 14px",WebkitTapHighlightColor:"transparent",overflowX:"hidden"}}>
      <Head><title>Content Generator | Admin</title></Head>
      
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:16}}>
        <div style={{fontSize:10,color:"#7A84A8",letterSpacing:3}}>ADMIN DASHBOARD</div>
        <div style={{fontSize:20,fontWeight:900,background:"linear-gradient(135deg,#00E5FF,#FF0099)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Content Generator + Trend Radar</div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,marginBottom:16,overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",paddingBottom:2}}>
        <style>{`.tab-scroll::-webkit-scrollbar{display:none}`}</style>
        {[{id:"generate",label:"⚡ Generator"},{id:"batch",label:"📦 Batch"},{id:"slides",label:"📸 Slides"},{id:"optimize",label:"🔥 Optimieren"},{id:"script",label:"🎬 Script"},{id:"trends",label:"📈 Trends"},{id:"calendar",label:"📅 Plan"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            flexShrink:0,background:tab===t.id?"rgba(0,229,255,0.15)":"rgba(22,28,53,0.7)",
            border:`1px solid ${tab===t.id?"#00E5FF":"#1A2040"}`,borderRadius:8,
            padding:"10px 12px",minHeight:44,
            fontSize:11,fontWeight:700,color:tab===t.id?"#00E5FF":"#7A84A8",cursor:"pointer",whiteSpace:"nowrap",
            WebkitTapHighlightColor:"transparent",touchAction:"manipulation"
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
            border:"none",borderRadius:12,padding:"16px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:16,
            minHeight:52,touchAction:"manipulation",WebkitTapHighlightColor:"transparent"
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

      {/* SLIDES TAB */}
      {tab==="slides" && (
        <div>
          <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:8}}>📸 TIKTOK SLIDE GENERATOR</div>
          <div style={{fontSize:10,color:"#7A84A8",marginBottom:12}}>Fertige 9:16 PNG-Slides zum direkten Upload auf TikTok & Instagram</div>
          
          {/* Test auswählen */}
          <div style={{fontSize:10,color:"#7A84A8",marginBottom:6}}>TEST AUSWÄHLEN:</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
            {TESTS.map(t=>(
              <button key={t.id} onClick={()=>setSlideTest(t)} style={{
                background:slideTest.id===t.id?`${t.color}20`:"rgba(22,28,53,0.7)",
                border:`1px solid ${slideTest.id===t.id?t.color:"#1A2040"}`,
                borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:10,
                color:slideTest.id===t.id?t.color:"#7A84A8",fontWeight:600
              }}>{t.emoji} {t.name}</button>
            ))}
          </div>

          <button onClick={()=>generateSlides()} disabled={slideLoading} style={{
            width:"100%",background:slideLoading?"rgba(22,28,53,0.7)":"linear-gradient(135deg,#A855F7,#FF0099)",
            color:"#fff",border:"none",borderRadius:12,padding:"14px",fontSize:14,fontWeight:700,
            cursor:slideLoading?"not-allowed":"pointer",marginBottom:16,opacity:slideLoading?0.7:1
          }}>{slideLoading?"⏳ Slides werden erstellt...":"📸 Slides generieren"}</button>

          {generated && tab==="slides" && (
            <button onClick={()=>generateSlides(generated.test, generated)} style={{
              width:"100%",background:"rgba(0,229,255,0.1)",color:"#00E5FF",
              border:"1px solid #00E5FF",borderRadius:10,padding:"10px",fontSize:12,fontWeight:700,
              cursor:"pointer",marginBottom:12
            }}>⚡ Slides aus aktuellem Generator-Output</button>
          )}

          {slideGenerated && (
            <div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2}}>VORSCHAU ({slideGenerated.slides.length} SLIDES)</div>
                <button onClick={downloadAllSlides} style={{
                  background:"linear-gradient(135deg,#00FF88,#00E5FF)",color:"#000",
                  border:"none",borderRadius:8,padding:"8px 14px",fontSize:11,fontWeight:800,cursor:"pointer"
                }}>⬇️ Alle downloaden</button>
              </div>
              {slideGenerated.slides.map((s,i)=>(
                <div key={i} style={{marginBottom:12}}>
                  <div style={{fontSize:9,color:"#7A84A8",marginBottom:4}}>SLIDE {i+1} — {["HOOK","FRAGE","ERGEBNIS","CTA"][i]}</div>
                  <div style={{position:"relative"}}>
                    <img src={s} style={{width:"100%",borderRadius:12,border:`1px solid ${slideGenerated.test.color}40`,display:"block"}} alt={`Slide ${i+1}`} />
                    <button onClick={()=>downloadSlide(s,i,slideGenerated.test.name)} style={{
                      position:"absolute",bottom:8,right:8,
                      background:"rgba(0,0,0,0.7)",color:"#fff",border:"1px solid rgba(255,255,255,0.3)",
                      borderRadius:6,padding:"6px 10px",fontSize:10,fontWeight:700,cursor:"pointer"
                    }}>⬇️ PNG</button>
                  </div>
                </div>
              ))}
              <button onClick={downloadAllSlides} style={{
                width:"100%",background:"linear-gradient(135deg,#00FF88,#00E5FF)",color:"#000",
                border:"none",borderRadius:12,padding:"14px",fontSize:14,fontWeight:800,cursor:"pointer",marginTop:4
              }}>⬇️ Alle 4 Slides als PNG downloaden</button>

              {/* Video generieren Button */}
              <div style={{marginTop:12,background:"rgba(168,85,247,0.08)",borderRadius:12,padding:14,border:"1px solid rgba(168,85,247,0.3)"}}>
                <div style={{fontSize:9,color:"#A855F7",letterSpacing:2,marginBottom:6}}>🎬 VIDEO EXPORT (BETA)</div>
                <div style={{fontSize:10,color:"#7A84A8",marginBottom:10}}>4 Slides als WebM-Video mit Zoom-Effekt — direkt für TikTok</div>
                <button onClick={generateVideo} disabled={videoLoading} style={{
                  width:"100%",background:videoLoading?"rgba(22,28,53,0.7)":"linear-gradient(135deg,#A855F7,#FF0099)",
                  color:"#fff",border:"none",borderRadius:10,padding:"12px",fontSize:13,fontWeight:700,
                  cursor:videoLoading?"not-allowed":"pointer",opacity:videoLoading?0.7:1
                }}>{videoLoading?`🎬 Rendering... ${videoProgress}%`:"🎬 Video generieren"}</button>
                {videoUrl && (
                  <div style={{marginTop:10}}>
                    <video src={videoUrl} controls style={{width:"100%",borderRadius:10,marginBottom:8}} />
                    <a href={videoUrl} download={`${slideGenerated.test.name}_video.webm`} style={{
                      display:"block",width:"100%",boxSizing:"border-box",
                      background:"linear-gradient(135deg,#00FF88,#00E5FF)",color:"#000",
                      border:"none",borderRadius:10,padding:"12px",fontSize:13,fontWeight:800,
                      cursor:"pointer",textAlign:"center",textDecoration:"none"
                    }}>⬇️ Video downloaden (.webm)</a>
                  </div>
                )}
              </div>

              {/* Caption für diese Slides */}
              <div style={{marginTop:16,background:"rgba(22,28,53,0.7)",borderRadius:12,padding:14,border:`1px solid ${slideGenerated.test.color}30`}}>
                <div style={{fontSize:9,color:"#7A84A8",letterSpacing:2,marginBottom:6}}>📋 CAPTION FÜR TIKTOK</div>
                <pre style={{fontSize:11,color:"#D8DDF0",whiteSpace:"pre-wrap",margin:0,lineHeight:1.6,background:"rgba(6,10,20,0.4)",borderRadius:8,padding:"10px 12px"}}>{`${slideGenerated.generated.hook} ${slideGenerated.test.emoji}\n\n${slideGenerated.generated.frage.q}\n\npersoenlichkeitstest-kostenlos.de${slideGenerated.test.path}\n\n${slideGenerated.test.hashtags}`}</pre>
                <button onClick={()=>copyText(`${slideGenerated.generated.hook} ${slideGenerated.test.emoji}\n\n${slideGenerated.generated.frage.q}\n\npersoenlichkeitstest-kostenlos.de${slideGenerated.test.path}\n\n${slideGenerated.test.hashtags}`,"slide-caption")} style={{
                  width:"100%",marginTop:8,
                  background:copied==="slide-caption"?"#00FF8820":"transparent",
                  border:`1px solid ${copied==="slide-caption"?"#00FF88":slideGenerated.test.color+"60"}`,
                  borderRadius:8,padding:"10px",fontSize:12,
                  color:copied==="slide-caption"?"#00FF88":slideGenerated.test.color,
                  cursor:"pointer",fontWeight:700
                }}>{copied==="slide-caption"?"✅ Kopiert!":"📋 Caption kopieren"}</button>
              </div>
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

          {/* VORLAGEN */}
          {[{
            id:"ego", label:"👑 Ego-Trigger", color:"#FF0099",
            vorlagen:[
              {name:"Nur 1%",hook:"Nur 1% der Menschen haben diesen Typ",frage:"Was tust du wenn alle gegen dich sind?",antworten:["💪 Ich gewinne trotzdem","😤 Ich kämpfe zurück","🤐 Ich schweige","🏃 Ich gehe"],ergebnis:"ALPHA — Du bist nicht für die Masse gemacht",cta:"Kommentier deinen Typ 👇"},
              {name:"Seltenster Typ",hook:"Der seltenste Typ der Welt — bist du dabei?",frage:"Wie reagierst du auf Kritik?",antworten:["😂 Lachen","🔥 Kontern","😶 Ignorieren","📝 Notieren"],ergebnis:"SIGMA — Unkontrollierbar. Unberechenbar. Unaufhaltbar.",cta:"Teile wenn du auch Sigma bist 🔥"},
              {name:"IQ Test",hook:"Dein IQ in 3 Fragen — die meisten scheitern",frage:"Was ist wichtiger?",antworten:["🧠 Intelligenz","💛 Empathie","💰 Geld","🔥 Charisma"],ergebnis:"TOP 5% — Du denkst anders als 95% der Menschen",cta:"Zeig deinen Score 👇"},
              {name:"Dunkle Seite",hook:"Deine dunkle Seite die du versteckst...",frage:"Was würdest du tun wenn niemand zuschaut?",antworten:["😈 Das was ich will","🤫 Nichts ändern","💭 Nachdenken","🚀 Alles riskieren"],ergebnis:"DARK SIGMA — Du hast Macht die du noch nicht nutzt",cta:"Kommentier wenn das stimmt 💀"},
            ]
          },{
            id:"fomo", label:"😱 Fear/FOMO", color:"#FF6B35",
            vorlagen:[
              {name:"Warnung",hook:"WARNUNG: Dieser Test verändert wie du dich siehst",frage:"Was macht dir heimlich Angst?",antworten:["😰 Versagen","💔 Verlassen werden","🤷 Bedeutungslos sein","🕰️ Zeit verlieren"],ergebnis:"ANXIOUS ACHIEVER — Du läufst vor dir selbst weg",cta:"Wer kennt das? Kommentier 👇"},
              {name:"Zu spät",hook:"Wenn du das nicht weißt ist es zu spät...",frage:"Wie viel Prozent deines Potenzials nutzt du?",antworten:["😅 10%","🤔 30%","💪 60%","🔥 100%"],ergebnis:"SCHLAFENDER RIESE — 90% deines Potenzials liegt brach",cta:"Spar dir den Test wenn du bereit bist 👇"},
              {name:"Letzter Test",hook:"Der letzte Persönlichkeitstest den du je brauchst",frage:"Was hält dich wirklich zurück?",antworten:["😨 Angst","🦥 Faulheit","👥 Andere Menschen","🧠 Ich selbst"],ergebnis:"SELF-SABOTEUR — Du bist dein größter Feind",cta:"Kommentier wenn das zu real ist 💀"},
              {name:"Niemand sagt dir",hook:"Was dir niemand über dich sagt...",frage:"Wie oft denkst du an die Zukunft?",antworten:["⏰ Ständig","🌅 Manchmal","🤷 Selten","💀 Nie"],ergebnis:"CHRONIC OVERTHINKER — Dein Gehirn lässt dich nicht schlafen",cta:"Wer ist auch so? 👇"},
            ]
          },{
            id:"challenge", label:"⚡ Challenge", color:"#00E5FF",
            vorlagen:[
              {name:"3 Fragen",hook:"3 Fragen die dich komplett entlarven",frage:"Frage 1: Was machst du wenn du allein bist?",antworten:["📱 TikTok scrollen","🎮 Zocken","📚 Lesen","😴 Schlafen"],ergebnis:"CHRONICALLY ONLINE — Du existierst nur mit WLAN",cta:"Kommentier deine Antwort 👇"},
              {name:"Ehrlich",hook:"Sei mal ehrlich zu dir selbst...",frage:"Wie oft checkst du dein Handy pro Stunde?",antworten:["😅 1-2 mal","📱 5-10 mal","💀 Ich höre nie auf","🤔 Ich weiß es nicht"],ergebnis:"PHONE ADDICT LEVEL 9000 — Dein Daumen ist dein bestes Körperteil",cta:"Zeig deinen Score deinen Freunden 😂"},
              {name:"Typ erraten",hook:"Ich errate deinen Typ in 3 Fragen",frage:"Erste Nachricht von Crush um Mitternacht?",antworten:["😴 Morgen antworten","💬 Sofort schreiben","😏 Warten lassen","👀 Gelesen lassen"],ergebnis:"CERTIFIED RIZZ KING — Du spielst das Spiel besser als alle",cta:"Stimmt das? Kommentier 👇"},
              {name:"Wahrheit",hook:"Die Wahrheit über deinen Typ die du nicht hören willst",frage:"Was sagen deine Freunde hinter deinem Rücken?",antworten:["🤣 Er/Sie ist zu viel","😴 Er/Sie ist langweilig","🔥 Er/Sie ist intense","🤷 Nichts Besonderes"],ergebnis:"TOO MUCH — Du bist eine Hauptfigur in einem Film den niemand sehen will",cta:"Wer kennt das Gefühl? 💀"},
            ]
          },{
            id:"drama", label:"💔 Relationship Drama", color:"#A855F7",
            vorlagen:[
              {name:"Attachment Style",hook:"Dein Attachment Style erklärt ALLES",frage:"Dein Partner antwortet 3h nicht. Was denkst du?",antworten:["😤 Er/Sie ignoriert mich","😰 Ist was passiert?","🤷 Ist mir egal","📱 Ich schreibe nochmal"],ergebnis:"ANXIOUS ATTACHMENT — Du liebst zu viel und zu schnell",cta:"Wer ist auch anxious? Kommentier 👇"},
              {name:"Red Flag",hook:"Deine größte Red Flag in Beziehungen",frage:"Was machst du nach einem Streit?",antworten:["🤐 Stille Behandlung","💬 Sofort reden","🏃 Weglaufen","😤 Eskalieren"],ergebnis:"STONEWALLER — Du mauert bis die andere Person aufgibt",cta:"Wer hat das auch? 💀"},
              {name:"Crush Test",hook:"Was dein Crush wirklich über dich denkt...",frage:"Wie lange brauchst du um Gefühle zu zeigen?",antworten:["💨 Sofort","🤔 Wochen","🗓️ Monate","💀 Nie"],ergebnis:"EMOTIONALLY UNAVAILABLE — Du bist ein Rätsel das niemand lösen kann",cta:"Kommentier wenn das zu real ist 💔"},
              {name:"Toxic Trait",hook:"Dein toxischster Trait in Beziehungen",frage:"Was machst du wenn jemand dich verlässt?",antworten:["😤 Ich zeige was er/sie verliert","😢 Ich breche zusammen","🤷 Ich mache weiter","🔥 Ich werde besser"],ergebnis:"REVENGE GLOW-UP TYPE — Du nutzt Schmerz als Treibstoff",cta:"Wer ist auch so? 🔥"},
            ]
          },{
            id:"identity", label:"🎭 Identity", color:"#00FF88",
            vorlagen:[
              {name:"Welcher Typ",hook:"Welcher Typ bist du wirklich?",frage:"Wie würdest du dich in einem Wort beschreiben?",antworten:["🔥 Intense","😎 Chill","🧠 Analytisch","💛 Emotional"],ergebnis:"THE MAIN CHARACTER — Du lebst dein Leben als wärst du in einem Film",cta:"Kommentier deinen Typ 👇"},
              {name:"Energie",hook:"Deine Energie verrät alles über dich",frage:"Was ist deine Superpower?",antworten:["👁️ Ich lese Menschen","💬 Ich überzeuge alle","🧠 Ich löse alles","💛 Ich heile andere"],ergebnis:"EMPATH SIGMA — Du fühlst was andere denken bevor sie es sagen",cta:"Wer ist auch so? Kommentier 👇"},
              {name:"Vibe Check",hook:"Dein Vibe Check Ergebnis...",frage:"Was machst du wenn du gestresst bist?",antworten:["🏃 Sport","🎵 Musik","😴 Schlafen","📱 Scrollen"],ergebnis:"CHAOTIC NEUTRAL — Du bist unvorhersehbar und das ist deine Stärke",cta:"Zeig deinen Freunden deinen Vibe 🔥"},
              {name:"Geheimnis",hook:"Das Geheimnis das dein Typ verrät",frage:"Was denkst du wenn du allein bist?",antworten:["🌍 Über die Welt","💭 Über mich selbst","💔 Über andere","🤷 An nichts"],ergebnis:"DEEP THINKER — Du lebst in deinem Kopf und das ist okay",cta:"Wer kennt das? 👇"},
            ]
          },{
            id:"brainrot", label:"🧟 Brainrot/Meme", color:"#FFB800",
            vorlagen:[
              {name:"Sigma Test",hook:"Dein Sigma Score in 3 Fragen 💀",frage:"Was ist dein Lieblingsessen um 3 Uhr nachts?",antworten:["🍕 Kalte Pizza","🥣 Trockene Cornflakes","🍜 Instant Nudeln","💀 Ich schlafe nicht"],ergebnis:"FULL SIGMA — Du brauchst keine Gesellschaft. Nur WLAN und Snacks.",cta:"Kommentier deinen Score 💀"},
              {name:"Brainrot Level",hook:"Dein Brainrot Level ist erschreckend",frage:"Was sagst du wenn jemand fragt wie es dir geht?",antworten:["😊 Gut danke","💀 Ich bin müde","🤖 Ich funktioniere","🧟 Existieren ist genug"],ergebnis:"CHRONICALLY ONLINE LEVEL 100 — Du bist nicht mehr zu retten",cta:"Wer ist auch so? 🧟"},
              {name:"NPC Check",hook:"Bist du ein NPC oder Hauptcharakter?",frage:"Was machst du wenn du eine Gruppe siehst die lacht?",antworten:["😰 Denken sie über mich nach?","🤷 Interessiert mich nicht","😂 Mitlachen","👀 Beobachten"],ergebnis:"BACKGROUND CHARACTER — Du existierst aber niemand merkt es",cta:"NPC oder Hauptcharakter? Kommentier 👇"},
              {name:"Skibidi Test",hook:"Skibidi oder Sigma? Der Test entscheidet",frage:"Wie oft sagst du 'no cap' pro Tag?",antworten:["💀 Ständig","😅 Manchmal","🤔 Was ist no cap?","🚫 Nie"],ergebnis:"CERTIFIED SKIBIDI — Du bist die Hauptfigur der Gen Z Apokalypse",cta:"Kommentier dein Level 🔥"},
            ]
          }].map(kat => (
            <div key={kat.id} style={{marginBottom:12}}>
              <div style={{fontSize:9,color:kat.color,letterSpacing:2,marginBottom:6,fontWeight:700}}>{kat.label}</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {kat.vorlagen.map((v,i) => (
                  <button key={i} onClick={()=>{
                    setActiveVorlage(kat.id);
                    setOptimizeInput({hook:v.hook,frage:v.frage,antworten:v.antworten,ergebnis:v.ergebnis,cta:v.cta});
                  }} style={{
                    background: activeVorlage===kat.id && optimizeInput.hook===v.hook ? `${kat.color}25` : "rgba(22,28,53,0.7)",
                    border:`1px solid ${activeVorlage===kat.id && optimizeInput.hook===v.hook ? kat.color : "#1A2040"}`,
                    borderRadius:8,padding:"5px 10px",cursor:"pointer",fontSize:10,
                    color: activeVorlage===kat.id && optimizeInput.hook===v.hook ? kat.color : "#7A84A8",fontWeight:600
                  }}>{v.name}</button>
                ))}
              </div>
            </div>
          ))}

          {/* AGGRESSIVITÄTS-SLIDER */}
          <div style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:"12px 14px",marginBottom:12,border:"1px solid #1A2040"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <div style={{fontSize:9,color:"#7A84A8",letterSpacing:2}}>⚡ AGGRESSIVITÄTS-LEVEL</div>
              <div style={{fontSize:12,fontWeight:800,color: aggressivLevel<=3?"#00E5FF":aggressivLevel<=6?"#FFB800":aggressivLevel<=8?"#FF6B35":"#FF2255"}}>
                {aggressivLevel} — {aggressivLevel<=3?"Soft":aggressivLevel<=5?"Medium":aggressivLevel<=7?"Aggressiv":aggressivLevel<=9?"Maximum":"NUCLEAR 💀"}
              </div>
            </div>
            <input type="range" min={1} max={10} value={aggressivLevel} onChange={e=>setAggressivLevel(Number(e.target.value))}
              style={{width:"100%",accentColor: aggressivLevel<=3?"#00E5FF":aggressivLevel<=6?"#FFB800":aggressivLevel<=8?"#FF6B35":"#FF2255",cursor:"pointer"}} />
            <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"#7A84A8",marginTop:4}}>
              <span>😊 Soft</span><span>🔥 Aggressiv</span><span>💀 Nuclear</span>
            </div>
          </div>

          {/* Input Felder */}
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>HOOK</div>
            <input value={optimizeInput.hook} onChange={e=>setOptimizeInput(p=>({...p,hook:e.target.value}))}
              placeholder="z.B. Nur 2% der Menschen sind dieser Typ..."
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"12px 12px",color:"#fff",fontSize:16,outline:"none",boxSizing:"border-box",WebkitAppearance:"none"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>FRAGE</div>
            <input value={optimizeInput.frage} onChange={e=>setOptimizeInput(p=>({...p,frage:e.target.value}))}
              placeholder="z.B. Du bist auf einer Party. Was machst du?"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"12px 12px",color:"#fff",fontSize:16,outline:"none",boxSizing:"border-box",WebkitAppearance:"none"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>ANTWORTEN (eine pro Zeile)</div>
            <textarea value={optimizeInput.antworten.join("\n")} onChange={e=>setOptimizeInput(p=>({...p,antworten:e.target.value.split("\n")}))}
              rows={4} placeholder="🎤 Unterhalte alle\n🤫 Tiefe Gespräche\n👀 Beobachten\n🎯 Organisiere alles"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"12px 12px",color:"#fff",fontSize:16,outline:"none",resize:"none",boxSizing:"border-box",WebkitAppearance:"none"}} />
          </div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>ERGEBNIS</div>
            <input value={optimizeInput.ergebnis} onChange={e=>setOptimizeInput(p=>({...p,ergebnis:e.target.value}))}
              placeholder="z.B. INTJ — Strategisch. Unabhängig. Visionär."
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"12px 12px",color:"#fff",fontSize:16,outline:"none",boxSizing:"border-box",WebkitAppearance:"none"}} />
          </div>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>CTA</div>
            <input value={optimizeInput.cta} onChange={e=>setOptimizeInput(p=>({...p,cta:e.target.value}))}
              placeholder="z.B. Welcher Typ bist DU? Link in der Bio 👇"
              style={{width:"100%",background:"#161C35",border:"1px solid #1A2040",borderRadius:8,padding:"12px 12px",color:"#fff",fontSize:16,outline:"none",boxSizing:"border-box",WebkitAppearance:"none"}} />
          </div>

          <button onClick={generateOptimize} disabled={optimizeLoading || !optimizeInput.hook} style={{
            width:"100%",background:optimizeLoading?"rgba(22,28,53,0.7)":`linear-gradient(135deg,${aggressivLevel<=5?"#FF6B35":aggressivLevel<=8?"#FF2255":"#8B0000"},${aggressivLevel<=5?"#FF2255":aggressivLevel<=8?"#A855F7":"#FF0000"})`,color:"#fff",
            border:"none",borderRadius:12,padding:"16px",fontSize:15,fontWeight:700,cursor:optimizeLoading?"not-allowed":"pointer",marginBottom:12,opacity:optimizeLoading?0.7:1,
            minHeight:52,touchAction:"manipulation",WebkitTapHighlightColor:"transparent"
          }}>{optimizeLoading?`🔥 KI optimiert...`:`🔥 Optimieren (Level ${aggressivLevel})`}</button>

          {optimizeError && <div style={{color:"#FF2255",fontSize:11,marginBottom:8,textAlign:"center"}}>{optimizeError}</div>}

          {optimizeResult && (
            <div>
              <div style={{background:"rgba(255,107,53,0.08)",borderRadius:12,padding:16,marginBottom:8,border:"1px solid rgba(255,107,53,0.25)"}}>
                <div style={{fontSize:9,color:"#FF6B35",letterSpacing:2,marginBottom:8}}>🔥 OPTIMIERTER OUTPUT (LEVEL {aggressivLevel})</div>
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
          {/* Header */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
            <div>
              <div style={{fontSize:11,color:"#7A84A8",letterSpacing:2,marginBottom:2}}>📈 TREND RADAR</div>
              <div style={{fontSize:10,color:"#7A84A8"}}>
                {trendLastUpdate ? `KI-Analyse: ${new Date(trendLastUpdate).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr` : "Klick Analysieren für KI-Trends"}
              </div>
            </div>
            <button onClick={async()=>{
              setTrendLoading(true);
              setTrendError(null);
              try {
                const res = await fetch("/api/analyze-trends",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});
                const data = await res.json();
                if(data.trends && data.trends.length>0){
                  setTrendData(data.trends);
                  setTrendLastUpdate(data.generatedAt);
                  setTrendContent({});
                  if(data.fallback) setTrendError("⚠️ Offline-Daten (OpenAI API Key fehlt)");
                } else {
                  setTrendError("Fehler beim Laden");
                }
              } catch(e){
                setTrendError("API nicht erreichbar");
              }
              setTrendLoading(false);
            }} disabled={trendLoading} style={{
              background:trendLoading?"rgba(22,28,53,0.7)":"linear-gradient(135deg,#00E5FF,#A855F7)",
              color:"#fff",border:"none",borderRadius:10,padding:"8px 12px",
              fontSize:11,fontWeight:700,cursor:trendLoading?"not-allowed":"pointer",
              opacity:trendLoading?0.7:1,whiteSpace:"nowrap",flexShrink:0
            }}>{trendLoading?"🔄 Analysiere...":"🔄 Analysieren"}</button>
          </div>

          {trendError && (
            <div style={{color:trendError.startsWith("⚠️")?"#FFB800":"#FF2255",fontSize:10,marginBottom:8,textAlign:"center"}}>{trendError}</div>
          )}

          {/* Trend-Karten */}
          {[...trendData].sort((a,b)=>b.score-a.score).map((t,i)=>{
            const testObj = t.bestTest ? TESTS.find(x=>x.id===t.bestTest) : null;
            const scoreColor = t.score>85?"#00FF88":t.score>70?"#FFB800":"#7A84A8";
            const content = trendContent[i];
            return (
              <div key={i} style={{background:"rgba(22,28,53,0.7)",borderRadius:12,padding:12,marginBottom:8,borderLeft:`3px solid ${scoreColor}`}}>
                {/* Trend-Header */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                      <span style={{fontSize:13,fontWeight:700,color:"#fff"}}>{t.name}</span>
                      {t.rising && <span style={{fontSize:9,color:"#00FF88",background:"rgba(0,255,136,0.1)",padding:"1px 5px",borderRadius:4}}>↑ RISING</span>}
                      <span style={{fontSize:9,color:"#7A84A8",background:"rgba(122,132,168,0.1)",padding:"1px 5px",borderRadius:4}}>{t.category}</span>
                    </div>
                    <div style={{fontSize:10,color:"#7A84A8",marginTop:2}}>{t.desc}</div>
                    {t.warum && <div style={{fontSize:9,color:"rgba(255,184,0,0.7)",marginTop:2}}>💡 {t.warum}</div>}
                  </div>
                  <div style={{fontSize:20,fontWeight:900,color:scoreColor,marginLeft:8,flexShrink:0}}>{t.score}</div>
                </div>

                {/* Score Bar */}
                <div style={{height:3,background:"#1A2040",borderRadius:2,marginBottom:6,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${t.score}%`,background:scoreColor,borderRadius:2}} />
                </div>

                {/* Passender Test + Hook-Vorschlag */}
                {(testObj || t.hook) && (
                  <div style={{background:"rgba(6,10,20,0.5)",borderRadius:8,padding:"6px 8px",marginBottom:6}}>
                    {testObj && (
                      <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:t.hook?3:0}}>
                        <span style={{fontSize:9,color:"#7A84A8"}}>BESTER TEST:</span>
                        <span style={{fontSize:10,color:testObj.color,fontWeight:700}}>{testObj.emoji} {testObj.name}</span>
                      </div>
                    )}
                    {t.hook && (
                      <div style={{display:"flex",alignItems:"center",gap:4}}>
                        <span style={{fontSize:9,color:"#7A84A8"}}>HOOK:</span>
                        <span style={{fontSize:10,color:"#fff",fontStyle:"italic"}}>&#34;{t.hookEmoji} {t.hook}&#34;</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content-Ergebnis wenn generiert */}
                {content && (
                  <div style={{background:"rgba(0,229,255,0.06)",borderRadius:8,padding:"8px 10px",marginBottom:6,border:"1px solid rgba(0,229,255,0.15)"}}>
                    <div style={{fontSize:9,color:"#00E5FF",letterSpacing:1,marginBottom:6}}>⚡ CONTENT READY</div>
                    <div style={{marginBottom:4}}>
                      <span style={{fontSize:9,color:"#7A84A8"}}>HOOK: </span>
                      <span style={{fontSize:11,color:"#fff",fontWeight:700}}>{content.hook}</span>
                    </div>
                    <div style={{marginBottom:6}}>
                      <span style={{fontSize:9,color:"#7A84A8"}}>FRAGE: </span>
                      <span style={{fontSize:10,color:"#D8DDF0"}}>{content.frage}</span>
                    </div>
                    <div style={{fontSize:9,color:"#7A84A8",marginBottom:3}}>CAPTION:</div>
                    <div style={{fontSize:10,color:"#D8DDF0",lineHeight:1.5,marginBottom:8,whiteSpace:"pre-line",background:"rgba(6,10,20,0.4)",borderRadius:6,padding:"6px 8px"}}>{content.caption}</div>
                    <div style={{display:"flex",gap:6}}>
                      <button onClick={()=>copyText(content.caption,`trend-cap-${i}`)} style={{
                        flex:1,background:copied===`trend-cap-${i}`?"#00FF8820":"transparent",
                        border:`1px solid ${copied===`trend-cap-${i}`?"#00FF88":"rgba(0,229,255,0.3)"}`,
                        borderRadius:6,padding:"5px",fontSize:9,color:copied===`trend-cap-${i}`?"#00FF88":"#00E5FF",cursor:"pointer",fontWeight:700
                      }}>{copied===`trend-cap-${i}`?"✅ Kopiert":"📋 Caption"}</button>
                      <button onClick={()=>{
                        const testForSlide = testObj || TESTS[0];
                        setSlideTest(testForSlide);
                        generateSlides(testForSlide, {
                          hook: content.hook,
                          frage: content.frageObj || testForSlide.fragen[0],
                          ergebnis: testForSlide.ergebnisse[0],
                        });
                        setTab("slides");
                      }} style={{
                        flex:1,background:"linear-gradient(135deg,rgba(168,85,247,0.2),rgba(0,229,255,0.2))",
                        border:"1px solid rgba(168,85,247,0.4)",
                        borderRadius:6,padding:"5px",fontSize:9,color:"#A855F7",cursor:"pointer",fontWeight:700
                      }}>📸 → Slides</button>
                    </div>
                  </div>
                )}

                {/* Content erstellen Button */}
                <button onClick={()=>{
                  const targetTest = testObj || TESTS[Math.floor(Math.random()*TESTS.length)];
                  const hook = t.hook ? `${t.hookEmoji||""} ${t.hook}`.trim() : targetTest.hooks[Math.floor(Math.random()*targetTest.hooks.length)];
                  const frageObj = targetTest.fragen[Math.floor(Math.random()*targetTest.fragen.length)];
                  const ergebnis = targetTest.ergebnisse[Math.floor(Math.random()*targetTest.ergebnisse.length)];
                  const caption = `${hook} ${targetTest.emoji}\n\n${frageObj.q}\n\npersoenlichkeitstest-kostenlos.de${targetTest.path}\n\n${targetTest.hashtags}`;
                  setTrendContent(prev=>({...prev,[i]:{hook,frage:frageObj.q,frageObj,ergebnis,caption,test:targetTest}}));
                }} style={{
                  width:"100%",background:content?"rgba(22,28,53,0.5)":"linear-gradient(135deg,rgba(0,229,255,0.15),rgba(168,85,247,0.15))",
                  border:`1px solid ${content?"rgba(122,132,168,0.3)":"rgba(0,229,255,0.4)"}`,
                  borderRadius:8,padding:"7px",fontSize:10,
                  color:content?"#7A84A8":"#00E5FF",cursor:"pointer",fontWeight:700
                }}>{content?"🔄 Neu generieren":"⚡ Content erstellen"}</button>
              </div>
            );
          })}

          {/* Info-Box */}
          <div style={{background:"rgba(0,229,255,0.06)",borderRadius:10,padding:10,marginTop:4,border:"1px solid rgba(0,229,255,0.15)"}}>
            <div style={{fontSize:10,color:"#00E5FF",fontWeight:700,marginBottom:3}}>💡 WORKFLOW</div>
            <div style={{fontSize:9,color:"#7A84A8",lineHeight:1.6}}>
              1. &#34;Analysieren&#34; → KI scannt aktuelle Trends<br/>
              2. Trend auswählen → &#34;Content erstellen&#34; klicken<br/>
              3. Caption kopieren + &#34;→ Slides&#34; für TikTok<br/>
              4. Trends haben 24-72h Fenster — schnell handeln!
            </div>
          </div>
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
