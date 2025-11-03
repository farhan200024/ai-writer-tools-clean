"use client";
import { useMemo, useState } from "react";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const counts = useMemo(() => {
    const chars = text.length;
    const words = (text.trim().match(/\S+/g) || []).length;
    return { chars, words };
  }, [text]);

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Word & Character Counter</h1>
      <textarea className="w-full border rounded p-3 h-56" value={text} onChange={e=>setText(e.target.value)} placeholder="Start typing..." />
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded p-3">Words: <b>{counts.words}</b></div>
        <div className="border rounded p-3">Characters: <b>{counts.chars}</b></div>
      </div>
    </main>
  );
}
