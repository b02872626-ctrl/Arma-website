import { getProjects } from "@/lib/projects";
import { backgroundFromValue } from "@/lib/drive";
import MaskChars from "@/components/MaskChars";
import Reveal from "@/components/Reveal";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      {/* 1. Title */}
      <section className="container-x pt-10 lg:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <MaskChars
            as="h1"
            text="Projects"
            className="-ml-[0.04em] select-none font-extrabold leading-[0.9] tracking-[-0.04em] text-ink text-6xl sm:text-7xl lg:text-[8rem]"
          />
          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-muted lg:text-right lg:text-lg">
              A look at what we&apos;ve been building —{" "}
              <span className="font-semibold text-ink">brand systems</span>,{" "}
              <span className="font-semibold text-ink">websites</span>, and{" "}
              <span className="font-semibold text-ink">digital work</span> made
              to perform, not just to impress. Browse a selection of our recent
              collaborations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Project cards */}
      <section className="container-x pb-24 pt-14 lg:pb-32 lg:pt-20">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <a
                href={`/projects/${p.slug}`}
                className="group block rounded-[24px] border border-line bg-white p-3 transition hover:-translate-y-1"
              >
                <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-[16px]"
                  style={{ background: backgroundFromValue(p.cover) }}
                />
                <div className="flex items-center justify-between gap-4 px-3 py-4">
                  <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
                  <div className="flex shrink-0 gap-2">
                    {(p.tags || []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-bg px-3 py-1.5 text-sm font-medium text-muted"
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
