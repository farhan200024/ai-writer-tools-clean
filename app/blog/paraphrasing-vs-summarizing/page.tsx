
import type { Metadata } from "next";

export const metadata: Metadata = {{
  title: "Paraphrasing vs Summarizing: The Complete Difference Explained",
  description: "Learn when to paraphrase and when to summarize — examples, key differences, and use cases."
}};

export default function Post() {{
  return (
    <main className="prose max-w-none">
      <h1>Paraphrasing vs Summarizing: The Complete Difference Explained</h1>
      <p className="lead">Learn when to paraphrase and when to summarize — examples, key differences, and use cases.</p>
      
<h2>Key differences</h2>
<ul>
  <li><strong>Paraphrasing</strong> rewrites the same idea in new words.</li>
  <li><strong>Summarizing</strong> condenses core ideas and removes details.</li>
  <li>Use paraphrasing to improve clarity; use summarizing to reduce length.</li>
</ul>
<h2>Examples</h2>
<p><em>Original:</em> The committee met to evaluate proposals and will announce a decision next week.</p>
<p><em>Paraphrase:</em> The committee reviewed the proposals and will share the outcome next week.</p>
<p><em>Summary:</em> Decision on proposals due next week.</p>
<h2>When to use which</h2>
<ul>
  <li>Academic writing: paraphrase sources; summarize literature.</li>
  <li>Business: paraphrase for tone; summarize for executive briefs.</li>
</ul>

      <hr />
      <p><strong>Try our free tools:</strong> <a href="/paraphrase">Paraphraser</a> · <a href="/summarize">Summarizer</a> · <a href="/plagiarism">Plagiarism Checker</a> · <a href="/word-counter">Word Counter</a></p>
    </main>
  );
}}
