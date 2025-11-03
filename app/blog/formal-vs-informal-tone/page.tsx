
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formal vs Informal Tone: When to Use Which",
  description: "Tips to adjust tone in academic and casual writing with examples."
};

export default function Post() {
  return (
    <main className="prose max-w-none">
      <h1>Formal vs Informal Tone: When to Use Which</h1>
      <p className="lead">Tips to adjust tone in academic and casual writing with examples.</p>
      
<h2>How to choose</h2>
<ul>
  <li><strong>Formal:</strong> academia, legal, reports.</li>
  <li><strong>Informal:</strong> social posts, personal blogs.</li>
</ul>
<h2>Conversion tips</h2>
<ul>
  <li>Swap contractions and colloquialisms appropriately.</li>
  <li>Adjust pronouns and directness for audience.</li>
</ul>

      <hr />
      <p><strong>Try our free tools:</strong> <a href="/paraphrase">Paraphraser</a> · <a href="/summarize">Summarizer</a> · <a href="/plagiarism">Plagiarism Checker</a> · <a href="/word-counter">Word Counter</a></p>
    </main>
  );
}
