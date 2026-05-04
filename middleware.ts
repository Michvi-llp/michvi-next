import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host") || "";

  if (host.includes("stg.michvi.com")) {
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive, nosnippet"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply only to actual pages
     * Exclude:
     * - _next (assets)
     * - api
     * - vercel internals
     */
    "/((?!_next|api|.*\\..*).*)",
  ],
};
