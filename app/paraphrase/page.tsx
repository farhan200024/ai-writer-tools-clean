"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function ParaphrasePage() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const run = async () => {
    setLoading(true);
    setOutput("");
    const res = await fetch("/api/paraphrase", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ text, tone })
    });
    const json = await res.json();
    setLoading(false);
    if (json.output) setOutput(json.output);
    else alert(json.error || "Something went wrong");
  };

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Paraphraser</h1>
      <textarea
        className="w-full border rounded p-3 h-48"
        placeholder="Paste your text..."
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <div className="flex items-center gap-3">
        <label className="text-sm">Tone</label>
        <select value={tone} onChange={e=>setTone(e.target.value)} className="border rounded p-2">
          <option value="neutral">Neutral</option>
          <option value="formal">Formal</option>
          <option value="simpler">Simpler</option>
          <option value="creative">Creative</option>
        </select>
        <button onClick={run} disabled={loading} className="ml-auto px-4 py-2 bg-black text-white rounded">
          {loading ? "Paraphrasing..." : "Paraphrase"}
        </button>
      </div>

      <AdSlot />

      <div>
        <h2 className="font-medium mt-2 mb-1">Output</h2>
        <textarea className="w-full border rounded p-3 h-48" readOnly value={output} />
      </div>
    </main>
  );
}
