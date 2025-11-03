"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function PlagiarismPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const check = async () => {
    setLoading(true);
    setResult(null);
    const r = await fetch("/api/plagiarism", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text })
    });
    const j = await r.json();
    setLoading(false);
    setResult(j.error ? `Error: ${j.error}` : j.message || "Scan submitted.");
  };

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Plagiarism Checker</h1>
      <p className="text-sm text-gray-600">Paste your text below to initiate a plagiarism scan. For demo use, results are simulated unless Copyleaks credentials are added.</p>
      <textarea className="w-full border rounded p-3 h-56" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your content..." />
      <div className="flex items-center gap-3">
        <button onClick={check} disabled={loading} className="px-4 py-2 bg-black text-white rounded">
          {loading ? "Checking..." : "Check for Plagiarism"}
        </button>
      </div>

      <AdSlot />

      {result && <div className="border rounded p-3 bg-gray-50">{result}</div>}
      <section className="prose max-w-none">
        <h2>How it works</h2>
        <p>
          We submit your text to a plagiarism detection service. In full production, results return via a secure webhook and are shown here.
          For privacy, we do not store your text for free scans beyond the time needed to process the request.
        </p>
      </section>
    </main>
  );
}
