import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `Du bist ein TikTok-Trend-Analyst für eine deutsche Persönlichkeitstest-Website (persoenlichkeitstest-kostenlos.de). 
Du analysierst aktuelle TikTok-Trends und verbindest sie mit Persönlichkeitstests.

Verfügbare Tests: Persönlichkeitstest (MBTI), Rizz Score, Aura Check, Brainrot Score, Dark Triad, NPC Test, Toxicity Check, Red Flag Detector, KI-Persönlichkeit, Welcher Typ bin ich

Antworte NUR mit einem validen JSON-Array. Kein Text davor oder danach.`
        },
        {
          role: "user",
          content: `Datum: ${today}

Generiere 8 aktuelle TikTok-Trends für Deutschland, die perfekt zu Persönlichkeitstests passen.

Für jeden Trend gib zurück:
- name: Trend-Name (kurz, prägnant)
- score: Viral-Score 60-99
- rising: true/false (steigt gerade)
- category: Kategorie (Dating, Psychologie, Meme, Format, Viral, Nische)
- desc: Kurze Beschreibung (max 60 Zeichen)
- bestTest: Welcher unserer Tests passt am besten (Test-ID: persoenlichkeit/rizz/aura/brainrot/dark/npc/toxicity/redflag/ki/welchertyp)
- hook: Konkreter viraler Hook-Satz für diesen Trend (max 60 Zeichen, auf Deutsch, ohne Emojis)
- hookEmoji: 1-2 passende Emojis
- warum: Warum dieser Trend jetzt viral ist (max 80 Zeichen)

Denke an aktuelle Themen: Dating-Kultur, Gen-Z Sprache, Psychologie-Content, Beziehungen, Selbstoptimierung, Internet-Kultur.

Antworte NUR mit dem JSON-Array, kein anderer Text.`
        }
      ],
      temperature: 0.8,
      max_tokens: 1500,
    });

    const raw = completion.choices[0].message.content.trim();
    
    // JSON aus der Antwort extrahieren
    let trends;
    try {
      // Versuche direkt zu parsen
      trends = JSON.parse(raw);
    } catch {
      // Fallback: JSON-Block extrahieren
      const match = raw.match(/\[[\s\S]*\]/);
      if (match) {
        trends = JSON.parse(match[0]);
      } else {
        throw new Error("Kein valides JSON in der Antwort");
      }
    }

    return res.status(200).json({ trends, generatedAt: new Date().toISOString() });

  } catch (error) {
    console.error("Trend-Analyse Fehler:", error);
    
    // Fallback-Trends wenn API nicht verfügbar
    const fallbackTrends = [
      { name: "POV Overreaction", score: 95, rising: true, category: "Format", desc: "Banale Situationen dramatisiert", bestTest: "persoenlichkeit", hook: "Nur 2% der Menschen reagieren so", hookEmoji: "😱", warum: "POV-Format dominiert FYP gerade" },
      { name: "Red Flag Bingo", score: 92, rising: true, category: "Dating", desc: "Dating Red Flags als Bingo-Karte", bestTest: "redflag", hook: "Wie viele Red Flags hast du?", hookEmoji: "🚩", warum: "Red Flag Content ist Dauerbrenner" },
      { name: "Aura Points", score: 91, rising: false, category: "Viral", desc: "5.7 Mrd Views — Aura explodiert", bestTest: "aura", hook: "Deine Aura-Farbe verrät alles", hookEmoji: "✨", warum: "Aura-Trend hält sich seit Monaten" },
      { name: "Attachment Style", score: 88, rising: true, category: "Psychologie", desc: "Beziehungstyp-Tests boomen", bestTest: "persoenlichkeit", hook: "Dein Attachment Style erklärt alles", hookEmoji: "💔", warum: "Psychologie-Content boomt auf TikTok" },
      { name: "NPC Mode", score: 85, rising: true, category: "Meme", desc: "NPC-Verhalten im echten Leben", bestTest: "npc", hook: "Bist du heimlich ein NPC?", hookEmoji: "🤖", warum: "NPC-Meme ist zurück und stärker" },
      { name: "Rizz Check", score: 83, rising: false, category: "Dating", desc: "Charisma-Tests viral auf TikTok", bestTest: "rizz", hook: "Dein Rizz Score schockiert dich", hookEmoji: "😏", warum: "Rizz bleibt Top-Dating-Content" },
      { name: "Dark Triad Test", score: 80, rising: true, category: "Psychologie", desc: "Dunkle Persönlichkeit enthüllt", bestTest: "dark", hook: "Wie dunkel ist deine Persönlichkeit?", hookEmoji: "🌑", warum: "Kontroverse Tests performen besser" },
      { name: "Brainrot Score", score: 78, rising: true, category: "Meme", desc: "Internet-Sucht als Persönlichkeitstest", bestTest: "brainrot", hook: "Dein Brainrot Level ist erschreckend", hookEmoji: "💀", warum: "Gen-Z Selbstironie ist mega viral" },
    ];
    
    return res.status(200).json({ trends: fallbackTrends, generatedAt: new Date().toISOString(), fallback: true });
  }
}
