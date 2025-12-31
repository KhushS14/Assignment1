import type { VercelRequest, VercelResponse } from "@vercel/node";
import Groq from "groq-sdk";

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
    const { text } = req.body as { text?: string };

    if (!text || text.length < 20) {
      return res.status(400).json({ error: "Text too short" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You analyze feedback and return ONLY valid JSON. No explanation.",
        },
        {
          role: "user",
          content: `
Return JSON ONLY in this format:
{
  "sentiment": "positive | neutral | negative",
  "score": number (1-5),
  "issues": string[],
  "suggestion": string
}

Feedback:
"${text}"
          `,
        },
      ],
      temperature: 0.2,
    });

    const raw = completion.choices[0].message.content ?? "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No JSON found");
    }

    return res.status(200).json(JSON.parse(jsonMatch[0]));
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) message = error.message;

    return res.status(500).json({
      error: "AI analysis failed",
      details: message,
    });
  }
}
