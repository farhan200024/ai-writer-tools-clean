import AdSlot from "@/components/AdSlot";

export default function HomePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">Write better, faster.</h1>
      <p className="text-gray-700">
        Free, privacy-friendly tools for writers and students: paraphrase, summarize, and count words/characters.
      </p>
      <div className="grid sm:grid-cols-4 gap-4">
        <a href="/paraphrase" className="border rounded p-4 hover:shadow">
          <h2 className="font-medium mb-1">Paraphraser</h2>
          <p className="text-sm text-gray-600">Rewrite text to improve clarity while keeping meaning.</p>
        </a>
        <a href="/summarize" className="border rounded p-4 hover:shadow">
          <h2 className="font-medium mb-1">Summarizer</h2>
          <p className="text-sm text-gray-600">Condense long passages into crisp bullet points.</p>
        </a>
        <a href="/word-counter" className="border rounded p-4 hover:shadow">
          <h2 className="font-medium mb-1">Word Counter</h2>
          <p className="text-sm text-gray-600">Instant word & character counts as you type.</p>
        </a>
        <a href="/plagiarism" className="border rounded p-4 hover:shadow">
    <h2 className="font-medium mb-1">Plagiarism Checker</h2>
    <p className="text-sm text-gray-600">Scan your text for duplicate content.</p>
  </a>
</div>

<AdSlot />


      <section className="prose max-w-none">
        <h2>How it works</h2>
        <p>
          Paste your text into a tool and get results in seconds. We don&apos;t persist your text on our servers for free tools.
        </p>
      </section>
    </main>
  );
}
