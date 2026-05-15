// Google Drive helpers.
//
// Drive "share links" look like:
//   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//   https://drive.google.com/open?id=FILE_ID
// We convert them to a direct image URL via Google's image CDN
// (lh3.googleusercontent.com) which serves the file inline and supports
// width sizing for performance.

export function driveImageUrl(url, width = 1600) {
  if (!url || typeof url !== "string") return null;

  // Already a googleusercontent URL — pass through (optionally re-size).
  if (url.includes("googleusercontent.com")) return url;

  let id = null;

  // Match /file/d/{id}/...
  const m1 = url.match(/\/file\/d\/([^/?#]+)/);
  if (m1) id = m1[1];

  // Match ?id={id}
  if (!id) {
    const m2 = url.match(/[?&]id=([^&]+)/);
    if (m2) id = m2[1];
  }

  // Couldn't parse — return as-is so callers still get a usable URL.
  if (!id) return url;

  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

// Returns a CSS `background` shorthand value.
// - If `value` looks like a CSS gradient/color, return it as-is (placeholder).
// - Otherwise treat it as an image URL (Drive link or direct) and wrap it
//   for use in `style={{ background: ... }}`.
export function backgroundFromValue(value) {
  if (!value || typeof value !== "string") return undefined;

  const lower = value.toLowerCase();
  const isCss =
    lower.includes("gradient") ||
    lower.startsWith("#") ||
    lower.startsWith("rgb") ||
    lower.startsWith("hsl");

  if (isCss) return value;

  const url = driveImageUrl(value);
  return `url("${url}") center / cover no-repeat`;
}
