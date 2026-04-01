import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Google Trends RSS Feed abrufen und parsen
async function fetchGoogleTrends() {
  try {
    const res = await fetch("https://trends.google.com/trending/rss?geo=DE", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; TrendBot/1.0)" },
      signal: AbortSignal.timeout(5000),
    });
    const xml = await res.text();
    
    // Trend-Titel aus RSS extrahieren
    const titles = [];
    const traffic = [];
    const titleMatches = xml.matchAll(/<title>(?!Daily Search Trends)([^<]+)<\/title>/g);
    const trafficMatches = xml.matchAll(/<ht:approx_traffic>([^<]+)<\/ht:approx_traffic>/g);
    
    for (const m of titleMatches) titles.push(m[1].trim());
    for (const m of trafficMatches) traffic.push(m[1].trim());
    
    // Top 15 Trends zurückgeben
    return titles.slice(0, 15).map((t, i) => ({ query: t, traffic: traffic[i] || "100+" }));
  } catch (e) {
    console.error("Google Trends RSS Fehler:", e.message);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

  // Google Trends Live-Daten holen
  const googleTrends = await fetchGoogleTrends();
  const hasLiveData = googleTrends && googleTrends.length > 0;
  
  const googleTrendsContext = hasLiveData
    ? `\n\nAKTUELLE GOOGLE TRENDS DEUTSCHLAND (${today}, LIVE):\n${googleTrends.map((t, i) => `${i+1}. "${t.query}" (${t.traffic} Suchanfragen)`).join("\n")}\n\nNutze diese echten Trends als Basis und verbinde sie kreativ mit Persönlichkeitstests.`
    : "";

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `Du bist ein TikTok-Trend-Analyst für eine deutsche Persönlichkeitstest-Website (persoenlichkeitstest-kostenlos.de). 
Du analysierst aktuelle Trends und verbindest sie kreativ mit Persönlichkeitstests.

Verfügbare Tests: Persönlichkeitstest (MBTI), Rizz Score, Aura Check, Brainrot Score, Dark Triad, NPC Test, Toxicity Check, Red Flag Detector, KI-Persönlichkeit, Welcher Typ bin ich, Manipulierbar Test, Mental Age Test, Delulu Test, Pick Me Test, Sigma Test, Toxic Trait Test, Ick Factor Test, Emotional Damage Test, Roman Empire Test, Attachment Style Test

Antworte NUR mit einem validen JSON-Array. Kein Text davor oder danach.`
        },
        {
          role: "user",
          content: `Datum: ${today}${googleTrendsContext}

Generiere 8 TikTok-Content-Ideen für Deutschland, die perfekt zu Persönlichkeitstests passen.
${hasLiveData ? "Beziehe die echten Google Trends oben mit ein — verbinde aktuelle News/Trends kreativ mit Persönlichkeitstests." : "Nutze aktuelle Gen-Z Trends, Dating-Kultur, Psychologie-Content."}

Für jeden Trend gib zurück:
- name: Trend-Name (kurz, prägnant)
- score: Viral-Score 60-99
- rising: true/false (steigt gerade)
- category: Kategorie (Dating, Psychologie, Meme, Format, Viral, Nische, News)
- desc: Kurze Beschreibung (max 60 Zeichen)
- bestTest: Welcher unserer Tests passt am besten (Test-ID: persoenlichkeit/rizz/aura/brainrot/dark/npc/toxicity/redflag/ki/welchertyp/manipulierbar/mentalage/delulu/pickme/sigma/toxictrait/ickfactor/emotionaldamage/romanempire/attachment)
- hook: Konkreter viraler Hook-Satz für diesen Trend (max 60 Zeichen, auf Deutsch, ohne Emojis)
- hookEmoji: 1-2 passende Emojis
- warum: Warum dieser Trend jetzt viral ist (max 80 Zeichen)
- isLive: ${hasLiveData} (ob echte Google-Trends-Daten genutzt wurden)

Antworte NUR mit dem JSON-Array, kein anderer Text.`
        }
      ],
      temperature: 0.8,
      max_tokens: 1800,
    });

    const raw = completion.choices[0].message.content.trim();
    
    let trends;
    try {
      trends = JSON.parse(raw);
    } catch {
      const match = raw.match(/\[[\s\S]*\]/);
      if (match) {
        trends = JSON.parse(match[0]);
      } else {
        throw new Error("Kein valides JSON in der Antwort");
      }
    }

    return res.status(200).json({ 
      trends, 
      generatedAt: new Date().toISOString(),
      liveData: hasLiveData,
      googleTrendsCount: googleTrends?.length || 0,
    });

  } catch (error) {
    console.error("Trend-Analyse Fehler:", error);
    
    const fallbackTrends = [
      { name: "POV Overreaction", score: 95, rising: true, category: "Format", desc: "Banale Situationen dramatisiert", bestTest: "persoenlichkeit", hook: "Nur 2% der Menschen reagieren so", hookEmoji: "😱", warum: "POV-Format dominiert FYP gerade", isLive: false },
      { name: "Red Flag Bingo", score: 92, rising: true, category: "Dating", desc: "Dating Red Flags als Bingo-Karte", bestTest: "redflag", hook: "Wie viele Red Flags hast du?", hookEmoji: "🚩", warum: "Red Flag Content ist Dauerbrenner", isLive: false },
      { name: "Aura Points", score: 91, rising: false, category: "Viral", desc: "5.7 Mrd Views — Aura explodiert", bestTest: "aura", hook: "Deine Aura-Farbe verrät alles", hookEmoji: "✨", warum: "Aura-Trend hält sich seit Monaten", isLive: false },
      { name: "Attachment Style", score: 88, rising: true, category: "Psychologie", desc: "Beziehungstyp-Tests boomen", bestTest: "attachment", hook: "Dein Attachment Style erklärt alles", hookEmoji: "💔", warum: "Psychologie-Content boomt auf TikTok", isLive: false },
      { name: "NPC Mode", score: 85, rising: true, category: "Meme", desc: "NPC-Verhalten im echten Leben", bestTest: "npc", hook: "Bist du heimlich ein NPC?", hookEmoji: "🤖", warum: "NPC-Meme ist zurück und stärker", isLive: false },
      { name: "Delulu Check", score: 83, rising: true, category: "Dating", desc: "Wie delulu bist du wirklich?", bestTest: "delulu", hook: "Dein Delulu Score schockiert dich", hookEmoji: "🤩", warum: "Delulu is the solulu boomt weiter", isLive: false },
      { name: "Dark Triad Test", score: 80, rising: true, category: "Psychologie", desc: "Dunkle Persönlichkeit enthüllt", bestTest: "dark", hook: "Wie dunkel ist deine Persönlichkeit?", hookEmoji: "🌑", warum: "Kontroverse Tests performen besser", isLive: false },
      { name: "Sigma Test", score: 78, rising: true, category: "Meme", desc: "Sigma oder Alpha — der Test entscheidet", bestTest: "sigma", hook: "Bist du wirklich ein Sigma?", hookEmoji: "🕱️", warum: "Sigma Grindset ist zurück auf FYP", isLive: false },
    ];
    
    return res.status(200).json({ trends: fallbackTrends, generatedAt: new Date().toISOString(), fallback: true, liveData: false });
  }
}
