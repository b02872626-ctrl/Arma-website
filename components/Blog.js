import { getPosts } from "@/lib/blog";
import { backgroundFromValue } from "@/lib/drive";
import MaskText from "@/components/MaskText";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section id="blog" className="container-x py-20 lg:py-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <span className="text-sm font-bold tracking-tight">[05 Blog]</span>
        <MaskText
          as="h2"
          className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:max-w-3xl lg:text-right lg:text-6xl"
          lines={[
            <span key="1">
              Stories<span className="text-neutral-400">,</span> strategies
              <span className="text-neutral-400">, and </span>creative
              perspectives
            </span>,
            <span key="2" className="text-neutral-400">
              from the team.
            </span>,
          ]}
        />
      </div>

      <a
        href="/blog"
        className="mt-10 inline-flex items-center gap-2 text-lg font-medium text-muted transition hover:text-ink"
      >
        All Blogs <span aria-hidden>→</span>
      </a>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {posts.slice(0, 3).map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-[20px] border border-line bg-white p-3 transition hover:-translate-y-1"
          >
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-[14px]"
              style={{ background: backgroundFromValue(p.cover) }}
            />
            <h3 className="px-3 py-4 font-bold tracking-tight transition group-hover:text-muted">
              {p.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
