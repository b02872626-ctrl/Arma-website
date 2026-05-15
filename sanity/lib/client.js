import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

// Client is null until the Sanity project ID env var is set.
// All callers handle a null client gracefully (fall back to placeholder data).
//
// `useCdn: false` -> always hit the live API (no stale CDN reads).
// We control caching via the `next` option on each fetch (see lib/projects.js
// and lib/blog.js) — currently revalidate every 30s.
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
    })
  : null;
