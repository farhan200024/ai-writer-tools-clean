import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const key = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const maxChars = Number(process.env.MAX_INPUT_CHARS || 4000);

    if (!key) return NextResponse.json({ error: "Server misconfigured: missing OPENAI_API_KEY" }, { status: 500 });
    if (!text || typeof text !== "string" || text.trim().length < 30) {
      return NextResponse.json({ error: "Please paste at least 30 characters to summarize." }, { status: 400 });
    }
    if (text.length > maxChars) {
      return NextResponse.json({ error: `Input too long. Max ${maxChars} characters.` }, { status: 400 });
    }

    const prompt = `Summarize the following text in 3–5 concise bullet points, preserving key facts and removing fluff.\n\n"""${text}"""`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2
      })
    });

    if (!r.ok) {
      const e = await r.text();
      return NextResponse.json({ error: e || "Upstream error" }, { status: 502 });
    }
    const data = await r.json();
    const output = data?.choices?.[0]?.message?.content || "";
    return NextResponse.json({ output });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 });
  }
}
