import { getPosts } from "@/lib/blog";
import { backgroundFromValue } from "@/lib/drive";
import MaskChars from "@/components/MaskChars";
import Reveal from "@/components/Reveal";

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <>
      {/* Title */}
      <section className="container-x pt-10 lg:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <MaskChars
            as="h1"
            text="Blog"
            className="-ml-[0.04em] select-none font-extrabold leading-[0.9] tracking-[-0.04em] text-ink text-6xl sm:text-7xl lg:text-[8rem]"
          />
          <p className="max-w-md text-base leading-relaxed text-muted lg:text-right lg:text-lg">
            Stories, strategies, and creative perspectives from the team — on{" "}
            <span className="font-semibold text-ink">branding</span>,{" "}
            <span className="font-semibold text-ink">design</span>, and building
            work that performs.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="container-x pb-24 pt-14 lg:pb-32 lg:pt-20">
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <a
                href={`/blog/${p.slug}`}
                className="group block rounded-[20px] border border-line bg-white p-3 transition hover:-translate-y-1"
              >
                <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-[14px]"
                  style={{ background: backgroundFromValue(p.cover) }}
                />
                <div className="px-3 py-4">
                  <p className="text-sm text-muted">{p.date}</p>
                  <h3 className="mt-1 font-bold tracking-tight transition group-hover:text-muted">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags || []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
