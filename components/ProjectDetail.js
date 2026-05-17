import MaskChars from "@/components/MaskChars";
import ParallaxImage from "@/components/ParallaxImage";
import { backgroundFromValue } from "@/lib/drive";

export default function ProjectDetail({ project, previousProject, nextProject }) {
  return (
    <>
      {/* 1. Title */}
      <section className="container-x pt-10 lg:pt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <MaskChars
            as="h1"
            text={project.name}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          />
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-lg font-medium text-muted transition hover:text-ink"
          >
            Live Project <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-md leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex shrink-0 gap-2">
            {(project.tags || []).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Images — cover + equal-sized gallery */}
      <section className="container-x pb-16 pt-10 lg:pb-20 lg:pt-14">
        <ParallaxImage
          className="aspect-[16/10] w-full rounded-3xl"
          background={backgroundFromValue(project.cover)}
        />
        <div className="mt-5 space-y-5">
          {(project.gallery || []).map((img, i) => (
            <ParallaxImage
              key={i}
              className="aspect-[16/9] w-full rounded-3xl"
              background={backgroundFromValue(img)}
            />
          ))}
        </div>
      </section>

      {/* 3. Previous + Next project */}
      {(previousProject || nextProject) && (
        <section className="container-x pb-24 lg:pb-32">
          <div className="grid gap-4 md:grid-cols-2">
            {previousProject && (
              <a
                href={`/projects/${previousProject.slug}`}
                className="group relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-line p-8 text-center lg:min-h-[400px]"
                style={{ background: backgroundFromValue(previousProject.cover) }}
              >
                <div className="absolute inset-0 bg-ink/55 transition group-hover:bg-ink/45" />
                <div className="relative text-white">
                  <span className="text-sm font-bold tracking-tight text-white/70">
                    [ PREVIOUS PROJECT ]
                  </span>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {previousProject.name}
                  </h2>
                  <span className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white/80 transition group-hover:text-white">
                    <span aria-hidden>←</span> View project
                  </span>
                </div>
              </a>
            )}

            {nextProject && (
              <a
                href={`/projects/${nextProject.slug}`}
                className="group relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-line p-8 text-center lg:min-h-[400px]"
                style={{ background: backgroundFromValue(nextProject.cover) }}
              >
                <div className="absolute inset-0 bg-ink/55 transition group-hover:bg-ink/45" />
                <div className="relative text-white">
                  <span className="text-sm font-bold tracking-tight text-white/70">
                    [ NEXT PROJECT ]
                  </span>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {nextProject.name}
                  </h2>
                  <span className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white/80 transition group-hover:text-white">
                    View project <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            )}
          </div>
        </section>
      )}
    </>
  );
}
