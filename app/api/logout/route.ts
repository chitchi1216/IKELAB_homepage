import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "../../../lib/auth";

function getSiteUrl(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  return process.env.IKELAB_SITE_URL ?? "https://ikelab2026.com";
}

export function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", getSiteUrl(request)), 303);
  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}
