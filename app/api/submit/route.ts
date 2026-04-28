import { NextResponse } from "next/server";

const PORTAL_ID = "245466474";
const FORM_ID = "35370b2f-16f3-4448-a6a4-a83eb3cc9aea";

export async function POST(req: Request) {
  const body = await req.json();

  const payload = {
    fields: [
      { name: "firstname", value: body.name },
      { name: "email", value: body.email },

      // optional shared fields
      { name: "company", value: body.organisation || "" },
      { name: "jobtitle", value: body.role || "" },
      { name: "website", value: body.website || "" },
      { name: "primary_analytics_platform", value: body.analytics || "" },
      { name: "message", value: body.context || body.message || "" },

      // 🔥 CORE CONTROL FIELD
      { name: "form_type", value: body.form_type },
    ],
    context: {
      pageUri: body.pageUrl,
      pageName: body.pageTitle,
    },
  };

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}