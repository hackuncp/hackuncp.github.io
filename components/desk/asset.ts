/*
  Files in public/ are referenced by absolute path ("/brand/hackuncp-logo.png").
  When the site is published in a folder (a GitHub Pages project site lives at
  /repo-name/), the deploy workflow sets NEXT_PUBLIC_BASE_PATH and this adds it.
  Outside links (https://…) are left as they are.
*/
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return path.startsWith("/") && !path.startsWith("//") ? basePath + path : path;
}
