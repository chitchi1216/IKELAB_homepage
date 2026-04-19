import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, getSessionToken } from "../../../lib/auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password");
  const expectedPassword = process.env.IKELAB_PORTAL_PASSWORD;
  const sessionToken = getSessionToken();

  if (
    !expectedPassword ||
    !sessionToken ||
    typeof password !== "string" ||
    password !== expectedPassword
  ) {
    return NextResponse.redirect(new URL("/?error=1", request.url), 303);
  }

  const response = NextResponse.redirect(new URL("/portal", request.url), 303);
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: sessionToken,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}

