// api/ai/feedback-insights.ts
import Groq from "groq-sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text } = req.body;

    if (!text || text.length < 20) {
      return res.status(400).json({ error: "Text too short" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "Return ONLY valid JSON. No explanation.",
        },
        {
          role: "user",
          content: `
{
  "sentiment": "positive | neutral | negative",
  "score": number,
  "issues": string[],
  "suggestion": string
}

Feedback:
"${text}"
          `,
        },
      ],
    });

    const raw = completion.choices[0].message.content ?? "";
    const json = raw.match(/\{[\s\S]*\}/)?.[0];

    if (!json) throw new Error("Invalid AI response");

    res.status(200).json(JSON.parse(json));
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: message });
  }
}
