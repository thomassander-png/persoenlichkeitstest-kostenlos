import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { test, hook, frage, antworten, ergebnis, ergebnisDesc, path, emoji } = req.body;

  if (!test || !hook || !frage) {
    return res.status(400).json({ error: "Fehlende Parameter" });
  }

  try {
    const prompt = `Du bist ein viraler TikTok Content Creator für deutsche Persönlichkeitstests. Erstelle ein komplettes TikTok-Video-Script auf Deutsch.

Test: ${test} ${emoji}
Hook (Slide 1): ${hook}
Frage (Slide 2): ${frage}
Antwortoptionen: ${antworten?.join(", ")}
Ergebnis (Slide 3): ${ergebnis} — ${ergebnisDesc}
Link: persoenlichkeitstest-kostenlos.de${path}

Erstelle ein Script mit:
1. HOOK (0-3 Sek): Kurzer, reißerischer Einstieg — max 10 Wörter, direkt zum Punkt
2. KONTEXT (3-8 Sek): Warum dieser Test wichtig ist — 1-2 Sätze
3. FRAGE (8-15 Sek): Die Frage vorlesen + Spannung aufbauen
4. ERGEBNIS (15-20 Sek): Das Ergebnis dramatisch enthüllen
5. CTA (20-25 Sek): Klarer Call-to-Action mit Link

Format: Nummeriert, kurz, viral. Deutsch. Gen-Z Sprache. Keine Emojis im Script selbst.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "Du bist ein viraler TikTok Content Creator. Schreibe kurze, prägnante Scripts auf Deutsch. Gen-Z Sprache. Direkt. Keine langen Erklärungen."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 400,
      temperature: 0.8,
    });

    const script = completion.choices[0]?.message?.content;
    
    if (!script) {
      return res.status(500).json({ error: "Keine Antwort von KI" });
    }

    return res.status(200).json({ script });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return res.status(500).json({ error: "KI-Fehler: " + error.message });
  }
}
