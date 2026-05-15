import { client } from "@/sanity/lib/client";
import { postsQuery, postBySlugQuery } from "@/sanity/lib/queries";

// Fallback / placeholder data used when Sanity isn't configured.
// Once NEXT_PUBLIC_SANITY_PROJECT_ID is set and posts exist in the Studio,
// this is bypassed automatically.
const fallbackPosts = [
  {
    slug: "why-brand-identity-is-your-best-investment",
    title: "Why Brand Identity Is Your Best Investment",
    date: "Apr 30, 2026",
    tags: ["Branding", "Strategy"],
    cover: "linear-gradient(135deg, #e8e8e8 0%, #b6b6b6 100%)",
    intro:
      "Attention is scarce and trust is earned in seconds. A brand identity carries both — it's the difference between being remembered and being scrolled past. Here's why identity belongs at the centre of your strategy, not the end of it.",
    sections: [
      {
        heading: "More Than a Logo",
        body: "A brand identity is the full system a company uses to show up in the world — the colours, type, voice, imagery and rhythm that make it recognisable before a single word is read. A logo is one piece of that system, not the whole of it. When the system is coherent, every touchpoint reinforces the same idea, and recognition compounds over time.",
        subsections: [],
      },
      {
        heading: "What a Strong Identity Actually Does",
        body: "",
        subsections: [
          {
            heading: "It builds trust",
            body: "People judge credibility fast. A consistent, considered identity signals that a business cares about the details — and that impression carries straight over to the product itself.",
          },
          {
            heading: "It lowers the cost of attention",
            body: "When a brand looks the same everywhere, audiences stop having to relearn it. Familiarity does the heavy lifting, and every bit of marketing spend goes further.",
          },
        ],
      },
      {
        heading: "Designing an Identity That Lasts",
        body: "",
        subsections: [
          {
            heading: "Start with strategy",
            body: "Before colour or type, get clear on who the brand is for, what it stands against, and the one idea it wants to own. Visual decisions become easy once the strategy is settled.",
          },
          {
            heading: "Build for flexibility",
            body: "An identity should stretch across a website, an app, packaging and a billboard without breaking. Design the system, not just the artefacts, so it can grow with the business.",
          },
        ],
      },
    ],
  },
  {
    slug: "designing-for-consistency",
    title: "Designing for Consistency Across Every Touchpoint",
    date: "Apr 12, 2026",
    tags: ["Design", "Systems"],
    cover:
      "repeating-linear-gradient(125deg, #8f8f8f 0px, #8f8f8f 6px, #6f6f6f 6px, #6f6f6f 12px)",
    intro:
      "Consistency is what turns a collection of designs into a brand. When every screen, post and page feels like it came from the same place, audiences relax — and that ease is worth more than any single clever layout.",
    sections: [
      {
        heading: "Why Consistency Compounds",
        body: "Each consistent touchpoint is a small deposit into the same account. Miss the mark and you spend recognition instead of building it. A design system makes consistency the default rather than something the team has to remember.",
        subsections: [],
      },
      {
        heading: "Putting It Into Practice",
        body: "",
        subsections: [
          {
            heading: "Define the rules once",
            body: "Tokens for colour, spacing and type, plus a small set of components, give everyone the same starting point — and a clear reason when something needs to be an exception.",
          },
          {
            heading: "Make the right thing the easy thing",
            body: "If reusing a component is faster than rebuilding one, people will reuse it. Good systems win by being convenient, not by being enforced.",
          },
        ],
      },
    ],
  },
  {
    slug: "a-practical-guide-to-website-strategy",
    title: "A Practical Guide to Website Strategy",
    date: "Mar 28, 2026",
    tags: ["Web", "Strategy"],
    cover: "radial-gradient(120% 120% at 60% 30%, #d6d6d6 0%, #707070 100%)",
    intro:
      "A website is rarely just a website — it's a tool with a job to do. Before touching a layout, it's worth being honest about what that job is and how you'll know it's working.",
    sections: [
      {
        heading: "Start With the Job, Not the Pages",
        body: "Most site projects start with a page list. Better ones start with a single question: what should a visitor do, think or feel by the time they leave? Every page then earns its place by serving that outcome.",
        subsections: [],
      },
      {
        heading: "Building Something That Holds Up",
        body: "",
        subsections: [
          {
            heading: "Design for the first ten seconds",
            body: "Most visitors decide quickly whether to stay. The top of every key page should make the offer and the next step obvious — clarity beats cleverness here.",
          },
          {
            heading: "Plan to measure",
            body: "Decide upfront what success looks like and how you'll see it. A site you can't measure is a site you can't improve.",
          },
        ],
      },
    ],
  },
];

async function fetchFromSanity(query, params) {
  if (!client) return null;
  try {
    return await client.fetch(query, params, {
      next: { revalidate: 30 },
    });
  } catch (e) {
    console.error("[sanity] posts fetch failed:", e?.message || e);
    return null;
  }
}

function formatDate(value) {
  // Sanity returns ISO dates; turn them into "Apr 30, 2026"
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function getPosts() {
  const data = await fetchFromSanity(postsQuery);
  if (data?.length) {
    return data.map((p) => ({ ...p, date: formatDate(p.date) }));
  }
  return fallbackPosts;
}

export async function getPost(slug) {
  if (client) {
    const data = await fetchFromSanity(postBySlugQuery, { slug });
    if (data) return { ...data, date: formatDate(data.date) };
  }
  return fallbackPosts.find((p) => p.slug === slug) || null;
}
