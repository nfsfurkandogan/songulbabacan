"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { RefreshCcw, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

type Locale = "tr" | "en";

const COPY = {
  tr: {
    assistantName: "Songül Asistan",
    startMessage: [
      "Merhaba! Ben Songül Asistan.",
      "Bu sayfadaki içerikleri okuyup sorularını yanıtlayabilirim.",
      "Örnek: \"Eğitimler neleri kapsıyor?\""
    ].join("\n"),
    quickQuestions: [
      "Eğitimler neleri kapsıyor?",
      "Kazanç planı nasıl ilerliyor?",
      "Mentorluk süreci nasıl işliyor?",
      "Farmasi ürünleri hangi kategorilerde?"
    ],
    clarifyMessage: [
      "Hangi konu hakkında bilgi istersin?",
      "Örnek: Eğitimler, Kazanç planı, Üyelik süreci, Farmasi ürünleri."
    ].join("\n"),
    noMatchMessage: [
      "Bu soruyla ilgili sayfada net bir bilgi bulamadım.",
      "İstersen şu başlıklardan birini sorabilirsin: Eğitimler, Kazanç planı, Mentorluk, Üyelik, Farmasi ürünleri."
    ].join("\n"),
    placeholder: "Sorunu yaz (ör. Kazanç planı nasıl?)",
    scanning: "Sayfa taranıyor...",
    scannedLabel: "İçerik okundu",
    reindexLabel: "Sayfayı yeniden tara",
    closeLabel: "Kapat",
    quickLabel: "Hızlı sorular",
    indexingReply: "Sayfayı tarıyorum. Birkaç saniye sonra tekrar sorabilir misin?",
    greetReply: "Merhaba! Ben Songül Asistan. Sitedeki içeriklere göre yanıt veriyorum.",
    whoReply: "Ben Songül Asistan. Bu sitedeki metinleri okuyup sorularına yanıt veriyorum.",
    notReadyReply: "Henüz sayfadaki metinleri okuyamadım. Birkaç saniye sonra tekrar sorabilir misin?"
  },
  en: {
    assistantName: "Songül Assistant",
    startMessage: [
      "Hi! I'm Songül Assistant.",
      "I can read the content on this page and answer your questions.",
      "Example: \"What does the training cover?\""
    ].join("\n"),
    quickQuestions: [
      "What does the training cover?",
      "How does the earnings plan work?",
      "How does the mentorship process work?",
      "Which categories do Farmasi products include?"
    ],
    clarifyMessage: [
      "Which topic would you like to know about?",
      "Examples: Training, Earnings plan, Membership, Farmasi products."
    ].join("\n"),
    noMatchMessage: [
      "I couldn't find a clear answer on this page.",
      "You can ask about: Training, Earnings plan, Mentorship, Membership, Farmasi products."
    ].join("\n"),
    placeholder: "Type your question (e.g. How does the earnings plan work?)",
    scanning: "Scanning page...",
    scannedLabel: "Content read",
    reindexLabel: "Rescan page",
    closeLabel: "Close",
    quickLabel: "Quick questions",
    indexingReply: "I'm scanning the page. Could you ask again in a few seconds?",
    greetReply: "Hi! I'm Songül Assistant. I answer based on the content on this site.",
    whoReply: "I'm Songül Assistant. I read the text on this site and answer your questions.",
    notReadyReply: "I couldn't read the page text yet. Please try again in a few seconds."
  }
} as const;
const SNIPPET_LENGTH = 220;
const MAX_ANSWER_LENGTH = 420;

function normalizeForSearch(value: string, locale: Locale) {
  const lowered =
    locale === "tr" ? value.toLocaleLowerCase("tr").replace(/ı/g, "i") : value.toLowerCase();
  return lowered
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOPWORD_LIST_TR = [
  "ve",
  "veya",
  "ile",
  "icin",
  "için",
  "ama",
  "fakat",
  "ancak",
  "bu",
  "su",
  "şu",
  "bir",
  "biraz",
  "cok",
  "çok",
  "daha",
  "en",
  "gibi",
  "olan",
  "olarak",
  "mi",
  "mı",
  "mu",
  "mü",
  "neden",
  "niye",
  "ne",
  "nasil",
  "nasıl",
  "hangi",
  "kim",
  "nerede",
  "nereye",
  "ben",
  "sen",
  "siz",
  "biz",
  "onlar",
  "da",
  "de",
  "ki",
  "ya",
  "hakkinda",
  "hakkında",
  "hakkindaki",
  "hakkındaki",
  "site",
  "sayfa",
  "sitede",
  "sayfada",
  "sayfanin",
  "sitenin"
];

const STOPWORD_LIST_EN = [
  "and",
  "or",
  "with",
  "for",
  "about",
  "this",
  "that",
  "a",
  "an",
  "the",
  "to",
  "in",
  "on",
  "of",
  "is",
  "are",
  "was",
  "were",
  "be",
  "can",
  "could",
  "should",
  "would",
  "please",
  "tell",
  "me",
  "you",
  "your",
  "my",
  "we",
  "our",
  "us",
  "i",
  "do",
  "does",
  "how",
  "what",
  "which",
  "where",
  "when",
  "why",
  "who",
  "site",
  "page",
  "website",
  "info",
  "information"
];

const STOPWORDS_TR = new Set(STOPWORD_LIST_TR.map((word) => normalizeForSearch(word, "tr")));
const STOPWORDS_EN = new Set(STOPWORD_LIST_EN.map((word) => normalizeForSearch(word, "en")));

function getStopwords(locale: Locale) {
  return locale === "tr" ? STOPWORDS_TR : STOPWORDS_EN;
}

function tokenize(value: string, locale: Locale) {
  const normalized = normalizeForSearch(value, locale);
  if (!normalized) return [];
  const stopwords = getStopwords(locale);
  return normalized
    .split(" ")
    .filter(Boolean)
    .filter((token) => token.length > 1 && !stopwords.has(token));
}

function buildSnippets(text: string) {
  if (!text) return [] as string[];
  const chunks = text
    .split(/(?:[.!?]+\s+|\n+)/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  const snippets: string[] = [];
  for (const chunk of chunks) {
    if (chunk.length <= SNIPPET_LENGTH) {
      snippets.push(chunk);
      continue;
    }

    for (let i = 0; i < chunk.length; i += SNIPPET_LENGTH) {
      snippets.push(chunk.slice(i, i + SNIPPET_LENGTH).trim());
    }
  }

  return snippets;
}

function scoreSnippet(snippet: string, tokens: string[], locale: Locale) {
  if (!snippet || tokens.length === 0) return 0;
  const normalized = normalizeForSearch(snippet, locale);
  let hits = 0;
  for (const token of tokens) {
    if (normalized.includes(token)) hits += 1;
  }

  if (hits === 0) return 0;
  const density = hits / tokens.length;
  return hits + density;
}

function collectPageText() {
  if (typeof document === "undefined") return "";
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const rawText = [header, main, footer]
    .map((section) => (section ? section.innerText : ""))
    .join(" ");
  return rawText.replace(/\s+/g, " ").trim();
}

function findBestAnswer(question: string, siteText: string, locale: Locale) {
  const normalizedQuestion = normalizeForSearch(question, locale);
  const copy = COPY[locale];
  if (locale === "tr") {
    if (
      normalizedQuestion === "merhaba" ||
      normalizedQuestion === "selam" ||
      normalizedQuestion.startsWith("merhaba ") ||
      normalizedQuestion.startsWith("selam ")
    ) {
      return copy.greetReply;
    }

    if (normalizedQuestion.includes("kimsin") || normalizedQuestion.includes("yardim")) {
      return copy.whoReply;
    }
  } else {
    if (
      normalizedQuestion === "hi" ||
      normalizedQuestion === "hello" ||
      normalizedQuestion === "hey" ||
      normalizedQuestion.startsWith("hi ") ||
      normalizedQuestion.startsWith("hello ") ||
      normalizedQuestion.startsWith("hey ")
    ) {
      return copy.greetReply;
    }

    if (
      normalizedQuestion.includes("who are you") ||
      normalizedQuestion.includes("what are you") ||
      normalizedQuestion.includes("help")
    ) {
      return copy.whoReply;
    }
  }

  if (!siteText || siteText.length < 30) {
    return copy.notReadyReply;
  }

  const tokens = tokenize(question, locale);
  if (tokens.length === 0) {
    return copy.clarifyMessage;
  }

  const snippets = buildSnippets(siteText);
  const scored = snippets
    .map((snippet) => ({ snippet, score: scoreSnippet(snippet, tokens, locale) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return copy.noMatchMessage;
  }

  const response = scored
    .slice(0, 2)
    .map((item) => item.snippet)
    .join(" ")
    .trim();

  if (response.length > MAX_ANSWER_LENGTH) {
    return `${response.slice(0, MAX_ANSWER_LENGTH).trim()}…`;
  }

  return response;
}

export default function SongulAssistant() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith("/en") ? "en" : "tr";
  const copy = COPY[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: copy.startMessage }
  ]);
  const [input, setInput] = useState("");
  const [siteText, setSiteText] = useState("");
  const [isIndexing, setIsIndexing] = useState(true);
  const [lastIndexed, setLastIndexed] = useState<string | null>(null);
  const [indexTick, setIndexTick] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsIndexing(true);

    const runIndex = () => {
      if (cancelled) return;
      const text = collectPageText();
      setSiteText(text);
      setIsIndexing(false);
      setLastIndexed(
        new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => number })
        .requestIdleCallback(runIndex);
    } else {
      setTimeout(runIndex, 0);
    }

    return () => {
      cancelled = true;
    };
  }, [pathname, indexTick]);

  useEffect(() => {
    setMessages([{ role: "assistant", content: copy.startMessage }]);
    setInput("");
  }, [copy]);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    const answer = isIndexing
      ? copy.indexingReply
      : findBestAnswer(question, siteText, locale);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: answer }
    ]);
    setInput("");
  };

  const handleReindex = () => {
    setIndexTick((prev) => prev + 1);
  };

  const handleQuickAsk = (question: string) => {
    const answer = isIndexing
      ? copy.indexingReply
      : findBestAnswer(question, siteText, locale);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: answer }
    ]);
  };

  return (
    <div className="fixed bottom-[6.5rem] left-4 z-40 flex flex-col items-start gap-4 md:bottom-28 md:left-8">
      <button
        type="button"
        className={cn(
          "flex items-center gap-3 rounded-full border border-border bg-white/90 px-4 py-3 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5",
          isOpen && "bg-white"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="songul-assistant-panel"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-glow">
          <span className="absolute inset-0 rounded-full bg-brand/50 animate-ping" />
          <Sparkles className="relative h-4 w-4" />
        </span>
        {copy.assistantName}
      </button>

      {isOpen && (
        <div
          id="songul-assistant-panel"
          className="w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-3xl border border-border bg-white/95 shadow-lift backdrop-blur"
          role="dialog"
          aria-label={copy.assistantName}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">{copy.assistantName}</p>
              <p className="text-xs text-ink-soft">
                {isIndexing
                  ? copy.scanning
                  : `${copy.scannedLabel}${lastIndexed ? ` • ${lastIndexed}` : ""}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReindex}
                disabled={isIndexing}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition hover:text-ink disabled:opacity-50"
                aria-label={copy.reindexLabel}
              >
                <RefreshCcw className={cn("h-4 w-4", isIndexing && "animate-spin")} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition hover:text-ink"
                aria-label={copy.closeLabel}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "w-fit max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed",
                  message.role === "assistant"
                    ? "border border-border bg-white text-ink"
                    : "ml-auto bg-brand text-white"
                )}
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {copy.quickLabel}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {copy.quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => handleQuickAsk(question)}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs text-ink-muted transition hover:border-brand hover:text-ink"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <form className="flex items-center gap-2 px-4 pb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.placeholder}
              className="h-10 flex-1 rounded-full border border-border bg-white px-4 text-sm text-ink outline-none transition focus:border-brand"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-glow transition hover:bg-brand-dark disabled:opacity-40"
              aria-label="Gönder"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
