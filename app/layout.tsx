import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Writer Tools",
  description:
    "Paraphraser, Summarizer, and Word Counter — free online tools for writers and students.",
  openGraph: {
    title: "AI Writer Tools",
    description: "Free tools for paraphrasing and summarizing",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="3fmQ-0vGGeUoGzNVIBAOaEt5p8RlWz36Sg0GHJ-utiE"
        />

        {/* ✅ Google Analytics 4 (Measurement ID: G-C3BLFCELRB) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C3BLFCELRB"
        ></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C3BLFCELRB');
            `,
          }}
        />
      </head>

      <body>
        <div className="max-w-5xl mx-auto px-4 py-6">
          <header className="flex items-center gap-4 py-4">
            <a href="/" className="text-xl font-semibold">
              AI Writer Tools
            </a>
            <nav className="ml-auto flex gap-4 text-sm">
              <a href="/paraphrase" className="hover:underline">
                Paraphrase
              </a>
              <a href="/summarize" className="hover:underline">
                Summarize
              </a>
              <a href="/word-counter" className="hover:underline">
                Word Counter
              </a>
              <a href="/plagiarism" className="hover:underline">
                Plagiarism Checker
              </a>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </nav>
          </header>

          {children}

          <footer className="mt-16 text-xs text-gray-500 border-t pt-6">
            <p>
              &copy; {new Date().getFullYear()} AI Writer Tools. This site may
              use AI to process your input. Do not enter sensitive data.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
