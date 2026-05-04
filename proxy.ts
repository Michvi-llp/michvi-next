import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host") || "";

  // ✅ Allow Vercel preview iframe
  response.headers.set("X-Frame-Options", "ALLOWALL");

  // ✅ Staging no-index protection
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
    "/((?!_next|api|.*\\..*).*)",
  ],
};