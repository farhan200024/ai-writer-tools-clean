import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const email = process.env.COPYLEAKS_EMAIL;
    const key = process.env.COPYLEAKS_KEY;

    if (!text || text.trim().length < 100) {
      return NextResponse.json({ error: "Please paste at least 100 characters." }, { status: 400 });
    }

    if (!email || !key) {
      return NextResponse.json({
        status: "submitted",
        message: "Demo mode: Copyleaks credentials missing. Replace COPYLEAKS_EMAIL/KEY in .env.local to enable real submissions."
      });
    }

    const payload = {
      base64: Buffer.from(text).toString("base64"),
      properties: {
        webhooks: { status: "https://webhook.site/your-temp-endpoint" }
      }
    };

    const res = await fetch("https://api.copyleaks.com/v3/scans/submit/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(`${email}:${key}`).toString("base64")
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const e = await res.text();
      return NextResponse.json({ error: e || "Copyleaks request failed" }, { status: 502 });
    }

    return NextResponse.json({ status: "submitted", message: "Scan initiated successfully. Results will be posted to your webhook." });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 });
  }
}
