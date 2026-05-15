import { getProjects } from "@/lib/projects";
import { backgroundFromValue } from "@/lib/drive";
import MaskText from "@/components/MaskText";
import Reveal from "@/components/Reveal";

export default async function Work() {
  const projects = await getProjects();

  return (
    <section id="work" className="container-x pt-12 pb-20 lg:pt-16 lg:pb-28">
      <span className="text-sm font-bold tracking-tight">[01 Projects]</span>
      <MaskText
        as="h2"
        className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        lines={[
          <span key="1" className="text-neutral-400">
            Selected work —
          </span>,
          "crafted, shipped, and proven.",
        ]}
      />

      <div className="mt-12 grid gap-5 lg:mt-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 100}>
            <a
              href={`/projects/${p.slug}`}
              className="group block rounded-[24px] border border-line bg-white p-3 transition hover:-translate-y-1"
            >
              <div
                className="aspect-[16/11] w-full overflow-hidden rounded-[16px]"
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

      <div className="mt-10 flex justify-center lg:mt-12">
        <a
          href="/projects"
          className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/85"
        >
          View more projects <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
