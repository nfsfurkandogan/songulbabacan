import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STATIC_ASSET_EXTENSIONS = /\.(png|jpe?g|webp|gif|svg|ico|avif|bmp|woff2?|ttf|otf)$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/_next/static/media/")) {
    const mediaPath = pathname.replace("/_next/static/media/", "");
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/api/assets/next-media/${mediaPath}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  if (pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (STATIC_ASSET_EXTENSIONS.test(pathname)) {
    const publicPath = pathname.replace(/^\/+/, "");
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/api/assets/public/${publicPath}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"]
};

