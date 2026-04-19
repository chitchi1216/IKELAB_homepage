export const SESSION_COOKIE_NAME = "ikelab_portal_session";

export function getSessionToken() {
  return process.env.IKELAB_PORTAL_SESSION_TOKEN;
}

export function isValidSession(value: string | undefined) {
  const token = getSessionToken();
  return Boolean(token && value && value === token);
}

