import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Du bist ein Optimierungs-Layer für einen bereits bestehenden TikTok-Content-Generator.
Du ersetzt den Generator NICHT.
Du erfindest KEIN neues Format.
Du optimierst nur die bestehenden Outputs, damit sie viraler, schärfer, kommentierbarer und serienfähiger werden.

Das bestehende Content-System produziert kurze TikTok-Quiz- und Testformate rund um:
- Brainrot
- psychologische Tests
- TikTok-Humor
- chronically online Sprache
- absurde, interaktive Antwortmechaniken
- provokante oder neugierig machende Hooks

Die bestehende Format-DNA ist:
Hook → kurze Frage oder Situation → 3-4 Antwortoptionen → humorvoll/absurd/TikTok-native Sprache → übertriebenes Ergebnis/Label/Score → CTA für Kommentare oder Interaktion

WICHTIGE REGELN:
- Das Grundformat bleibt erhalten
- Kein komplett neues Format entwickeln
- Keine langen Erklärungen
- Keine erwachsene Werbe- oder Markensprache
- Jede Optimierung muss sich anfühlen wie "stärkere Version von etwas, das schon funktioniert"

OPTIMIERUNGSHEBEL:
- Hook: kürzer, härter, neugieriger
- Frage: direkter, relatabler, internet-nativer
- Antwortoptionen: lustiger, absurder, typischer TikTok
- Ergebnis: extremer, emotionaler, teilbarer
- CTA: kommentierbarer, interaktiver, einfacher

PSYCHOLOGISCHE TRIGGER: Neugier, Ego, Challenge, Identität, Humor, sozialer Vergleich, "ich muss mein Ergebnis wissen"

SPRACHSTIL: jung, kurz, direkt, internet-nativ, TikTok-kompatibel, keine langen Sätze

DEINE AUSGABE — immer in genau dieser Struktur:

KURZE ANALYSE
• Was bereits funktioniert
• Was geschärft werden sollte
• Max 3 kurze Bulletpoints

OPTIMIERTE VERSION
Hook:
[verbesserte Version]

Frage:
[verbesserte Version]

Antworten:
[verbesserte Version]
[verbesserte Version]
[verbesserte Version]
[verbesserte Version]

Ergebnis:
[verbesserte Version]

CTA:
[verbesserte Version]

3 HOOK-VARIANTEN FÜR A/B-TESTS
Hook Variante 1:
[Text]

Hook Variante 2:
[Text]

Hook Variante 3:
[Text]

KURZE BEGRÜNDUNG
• Warum die neue Version stärker ist
• Welcher Trigger verstärkt wurde
• Warum das besser für TikTok funktioniert`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { hook, frage, antworten, ergebnis, cta } = req.body;

  if (!hook) {
    return res.status(400).json({ error: "Hook fehlt" });
  }

  const userInput = `FORMAT A: EIN EINZELNES KONZEPT

Hook:
${hook}

Frage:
${frage || "(keine Frage angegeben)"}

Antworten:
${(antworten || []).filter(a => a.trim()).join("\n") || "(keine Antworten angegeben)"}

Ergebnis:
${ergebnis || "(kein Ergebnis angegeben)"}

CTA:
${cta || "(kein CTA angegeben)"}`;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userInput }
      ],
      max_tokens: 700,
      temperature: 0.75,
    });

    const result = completion.choices[0]?.message?.content;

    if (!result) {
      return res.status(500).json({ error: "Keine Antwort von KI" });
    }

    return res.status(200).json({ result });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return res.status(500).json({ error: "KI-Fehler: " + error.message });
  }
}
