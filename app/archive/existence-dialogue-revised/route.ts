import { readFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, isValidSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

const archivePath = path.join(
  process.cwd(),
  "content",
  "archive",
  "existence-dialogue-revised",
  "index.html",
);

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!isValidSession(session)) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }

  const html = await readFile(archivePath, "utf8");

  return new NextResponse(html, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
