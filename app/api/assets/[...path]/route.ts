import { readFile } from "node:fs/promises";
import path from "node:path";

type RouteContext = {
  params: {
    path: string[];
  };
};

const MIME_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".bmp": "image/bmp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

const ROOTS = {
  public: path.resolve(process.cwd(), "public"),
  "next-media": path.resolve(process.cwd(), ".next/static/media")
} as const;

function getContentType(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  return MIME_TYPES[extension] ?? "application/octet-stream";
}

function resolveSafePath(root: string, pathParts: string[]): string | null {
  const relativePath = pathParts.join("/");

  if (!relativePath || relativePath.includes("..")) {
    return null;
  }

  const absolutePath = path.resolve(root, relativePath);
  const normalizedRoot = root.endsWith(path.sep) ? root : `${root}${path.sep}`;

  if (absolutePath !== root && !absolutePath.startsWith(normalizedRoot)) {
    return null;
  }

  return absolutePath;
}

export async function GET(_: Request, context: RouteContext) {
  const [rootType, ...pathParts] = context.params.path ?? [];

  if (!rootType || !(rootType in ROOTS)) {
    return new Response("Not Found", { status: 404 });
  }

  const root = ROOTS[rootType as keyof typeof ROOTS];
  const absolutePath = resolveSafePath(root, pathParts);

  if (!absolutePath) {
    return new Response("Not Found", { status: 404 });
  }

  try {
    const file = await readFile(absolutePath);
    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": getContentType(absolutePath),
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

