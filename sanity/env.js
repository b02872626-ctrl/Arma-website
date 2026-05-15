// Sanity project credentials. Set these in .env.local
// (NEXT_PUBLIC_ prefix means they're available in the browser, which is
// required for the embedded Studio at /studio).

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-01";
