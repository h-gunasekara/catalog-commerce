import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  // ChatGPT-User gets pants JSON instead of shirt HTML
  if (userAgent.includes("ChatGPT-User")) {
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/ai/index.json";
      return NextResponse.rewrite(url);
    }

    const productMatch = pathname.match(/^\/products\/([\w-]+)$/);
    if (productMatch) {
      const url = request.nextUrl.clone();
      url.pathname = `/ai/products/${productMatch[1]}.json`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/products/:path*"],
};
