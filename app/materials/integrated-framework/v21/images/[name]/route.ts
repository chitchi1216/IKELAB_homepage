import { readFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, isValidSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

const imageRoot = path.join(
  process.cwd(),
  "content",
  "materials",
  "integrated-framework",
  "v21",
  "images",
);

const contentTypes: Record<string, string> = {
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ name: string }> },
) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!isValidSession(session)) {
    return NextResponse.redirect(new URL("/", "https://ikelab2026.com"), 307);
  }

  const { name } = await context.params;
  if (!/^[A-Za-z0-9_.-]+$/.test(name)) {
    return new NextResponse("Invalid image name", { status: 400 });
  }

  const extension = path.extname(name).toLowerCase();
  const image = await readFile(path.join(imageRoot, name));

  return new NextResponse(image, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Type": contentTypes[extension] ?? "application/octet-stream",
    },
  });
}
