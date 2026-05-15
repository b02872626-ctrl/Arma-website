import { client } from "@/sanity/lib/client";
import { projectsQuery, projectBySlugQuery } from "@/sanity/lib/queries";

// Fallback / placeholder data used when Sanity isn't configured yet.
// Once NEXT_PUBLIC_SANITY_PROJECT_ID is set and you've added projects in the
// Studio at /studio, this fallback is bypassed automatically.
const fallbackProjects = [
  {
    slug: "helix-robotics",
    name: "Helix Robotics",
    tags: ["3D", "Motion"],
    description:
      "A full visual identity and 3D campaign for a robotics company — built to make complex engineering feel approachable, premium, and unmistakably theirs.",
    liveUrl: "#",
    cover: "radial-gradient(130% 110% at 30% 20%, #ffffff 0%, #cfcfcf 100%)",
    gallery: [
      "linear-gradient(135deg, #f0f0f0 0%, #c2c2c2 100%)",
      "radial-gradient(90% 90% at 70% 30%, #ffffff 0%, #b8b8b8 100%)",
      "linear-gradient(200deg, #d8d8d8 0%, #9a9a9a 100%)",
      "radial-gradient(120% 100% at 40% 60%, #ededed 0%, #b0b0b0 100%)",
    ],
  },
  {
    slug: "lumen-botanics",
    name: "Lumen Botanics",
    tags: ["Branding", "Packaging"],
    description:
      "Brand identity and packaging for a botanical skincare line, balancing natural warmth with a clean, modern shelf presence.",
    liveUrl: "#",
    cover: "linear-gradient(160deg, #8f8f8f 0%, #4a4a4a 100%)",
    gallery: [
      "linear-gradient(135deg, #9a9a9a 0%, #565656 100%)",
      "radial-gradient(100% 100% at 30% 20%, #b0b0b0 0%, #4f4f4f 100%)",
      "linear-gradient(210deg, #808080 0%, #3a3a3a 100%)",
      "radial-gradient(120% 90% at 60% 70%, #a0a0a0 0%, #424242 100%)",
    ],
  },
  {
    slug: "orbital",
    name: "Orbital",
    tags: ["Motion", "Web"],
    description:
      "A motion-led brand system for a creative tech studio — fluid, tactile, and designed to move.",
    liveUrl: "#",
    cover: "radial-gradient(90% 70% at 50% 50%, #2c2c2c 0%, #0a0a0a 100%)",
    gallery: [
      "radial-gradient(80% 80% at 40% 40%, #333333 0%, #0a0a0a 100%)",
      "linear-gradient(135deg, #2a2a2a 0%, #050505 100%)",
      "radial-gradient(100% 100% at 70% 30%, #3a3a3a 0%, #0e0e0e 100%)",
      "repeating-conic-gradient(from 20deg at 50% 50%, #161616 0deg 10deg, #2f2f2f 10deg 20deg)",
    ],
  },
  {
    slug: "letterform",
    name: "Letterform",
    tags: ["Type", "Branding"],
    description:
      "A typographic identity project exploring how custom letterforms can carry a brand's whole personality.",
    liveUrl: "#",
    cover:
      "repeating-conic-gradient(from 20deg at 50% 50%, #161616 0deg 10deg, #2f2f2f 10deg 20deg)",
    gallery: [
      "linear-gradient(135deg, #2e2e2e 0%, #101010 100%)",
      "radial-gradient(90% 90% at 30% 30%, #3a3a3a 0%, #0c0c0c 100%)",
      "repeating-linear-gradient(125deg, #1a1a1a 0px, #1a1a1a 8px, #2c2c2c 8px, #2c2c2c 16px)",
      "radial-gradient(120% 100% at 60% 50%, #333333 0%, #0a0a0a 100%)",
    ],
  },
  {
    slug: "atrium-studio",
    name: "Atrium Studio",
    tags: ["Web", "Identity"],
    description:
      "A website redesign and build for an architecture practice, structured around clarity, space, and their portfolio.",
    liveUrl: "#",
    cover: "linear-gradient(135deg, #e6e6e6 0%, #b3b3b3 100%)",
    gallery: [
      "linear-gradient(135deg, #f2f2f2 0%, #c8c8c8 100%)",
      "radial-gradient(90% 90% at 70% 20%, #ffffff 0%, #c0c0c0 100%)",
      "linear-gradient(200deg, #dedede 0%, #a6a6a6 100%)",
      "radial-gradient(120% 100% at 40% 60%, #ebebeb 0%, #b4b4b4 100%)",
    ],
  },
  {
    slug: "northbeam",
    name: "Northbeam",
    tags: ["Identity", "Web"],
    description:
      "A complete identity refresh for a growth analytics platform — sharper, more confident, and ready to scale.",
    liveUrl: "#",
    cover: "radial-gradient(120% 120% at 70% 10%, #ffffff 0%, #c4c4c4 100%)",
    gallery: [
      "linear-gradient(135deg, #f0f0f0 0%, #c4c4c4 100%)",
      "radial-gradient(100% 100% at 30% 30%, #ffffff 0%, #bcbcbc 100%)",
      "linear-gradient(210deg, #dadada 0%, #a2a2a2 100%)",
      "radial-gradient(120% 90% at 60% 70%, #ededed 0%, #b0b0b0 100%)",
    ],
  },
];

async function fetchFromSanity(query, params) {
  if (!client) return null;
  try {
    // Revalidate every 30s so editors see changes quickly (and prod gets ISR).
    const data = await client.fetch(query, params, {
      next: { revalidate: 30 },
    });
    return data;
  } catch (e) {
    console.error("[sanity] projects fetch failed:", e?.message || e);
    return null;
  }
}

export async function getProjects() {
  const data = await fetchFromSanity(projectsQuery);
  if (data?.length) return data;
  return fallbackProjects;
}

export async function getProject(slug) {
  if (client) {
    const data = await fetchFromSanity(projectBySlugQuery, { slug });
    if (data) return data;
  }
  return fallbackProjects.find((p) => p.slug === slug) || null;
}

export async function getNextProject(slug) {
  const all = await getProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return all[(i + 1) % all.length];
}

export async function getPreviousProject(slug) {
  const all = await getProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return all[(i - 1 + all.length) % all.length];
}
