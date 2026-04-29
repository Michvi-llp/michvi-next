import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.includes("stg.michvi.com")) {
    return new Response(
      `User-agent: *
Disallow: /
`,
      {
        headers: {
          "Content-Type": "text/plain",
          "X-Robots-Tag": "noindex, nofollow",
        },
      }
    );
  }

  return new Response(
    `User-agent: *
Allow: /
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}