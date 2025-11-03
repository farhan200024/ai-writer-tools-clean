"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function SummarizePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const run = async () => {
    setLoading(true);
    setOutput("");
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ text })
    });
    const json = await res.json();
    setLoading(false);
    if (json.output) setOutput(json.output);
    else alert(json.error || "Something went wrong");
  };

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Summarizer</h1>
      <textarea
        className="w-full border rounded p-3 h-48"
        placeholder="Paste your text..."
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <div className="flex items-center gap-3">
        <button onClick={run} disabled={loading} className="ml-auto px-4 py-2 bg-black text-white rounded">
          {loading ? "Summarizing..." : "Summarize"}
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
