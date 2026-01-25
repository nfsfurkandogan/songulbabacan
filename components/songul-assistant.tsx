"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { RefreshCcw, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const START_MESSAGE =
  "Merhaba! Ben Songül Asistan. Bu sayfadaki içerikleri okuyup sorularını yanıtlayabilirim. Örnek: \"Eğitimler hakkında bilgi verir misin?\"";
const SNIPPET_LENGTH = 220;
const MAX_ANSWER_LENGTH = 420;

function normalizeForSearch(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOPWORD_LIST = [
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

const STOPWORDS = new Set(STOPWORD_LIST.map((word) => normalizeForSearch(word)));

function tokenize(value: string) {
  const normalized = normalizeForSearch(value);
  if (!normalized) return [];
  return normalized
    .split(" ")
    .filter(Boolean)
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
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

function scoreSnippet(snippet: string, tokens: string[]) {
  if (!snippet || tokens.length === 0) return 0;
  const normalized = normalizeForSearch(snippet);
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

function findBestAnswer(question: string, siteText: string) {
  const normalizedQuestion = normalizeForSearch(question);
  if (
    normalizedQuestion === "merhaba" ||
    normalizedQuestion === "selam" ||
    normalizedQuestion.startsWith("merhaba ") ||
    normalizedQuestion.startsWith("selam ")
  ) {
    return "Merhaba! Ben Songül Asistan. Sitedeki içeriklere göre yanıt veriyorum.";
  }

  if (normalizedQuestion.includes("kimsin") || normalizedQuestion.includes("yardim")) {
    return "Ben Songül Asistan. Bu sitedeki metinleri okuyup sorularına yanıt veriyorum.";
  }

  if (!siteText || siteText.length < 30) {
    return "Henüz sayfadaki metinleri okuyamadım. Birkaç saniye sonra tekrar sorabilir misin?";
  }

  const tokens = tokenize(question);
  if (tokens.length === 0) {
    return "Soruyu biraz daha netleştirir misin? Böylece sitedeki içerikten daha doğru yanıt bulabilirim.";
  }

  const snippets = buildSnippets(siteText);
  const scored = snippets
    .map((snippet) => ({ snippet, score: scoreSnippet(snippet, tokens) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return "Bu soruyla ilgili sayfada net bir bilgi bulamadım. Sorunu biraz daha detaylandırabilir misin?";
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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: START_MESSAGE }
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
      window.setTimeout(runIndex, 0);
    }

    return () => {
      cancelled = true;
    };
  }, [pathname, indexTick]);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    const answer = isIndexing
      ? "Sayfayı tarıyorum. Birkaç saniye sonra tekrar sorabilir misin?"
      : findBestAnswer(question, siteText);

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

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start gap-3 md:bottom-8 md:left-8">
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
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-glow">
          <Sparkles className="h-4 w-4" />
        </span>
        Songül Asistan
      </button>

      {isOpen && (
        <div
          id="songul-assistant-panel"
          className="w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-3xl border border-border bg-white/95 shadow-lift backdrop-blur"
          role="dialog"
          aria-label="Songül Asistan"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">Songül Asistan</p>
              <p className="text-xs text-ink-soft">
                {isIndexing
                  ? "Sayfa taranıyor..."
                  : `İçerik okundu${lastIndexed ? ` • ${lastIndexed}` : ""}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReindex}
                disabled={isIndexing}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition hover:text-ink disabled:opacity-50"
                aria-label="Sayfayı yeniden tara"
              >
                <RefreshCcw className={cn("h-4 w-4", isIndexing && "animate-spin")} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition hover:text-ink"
                aria-label="Kapat"
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
                  "w-fit max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
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

          <form
            className="flex items-center gap-2 border-t border-border px-4 py-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Sorunu yaz..."
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
