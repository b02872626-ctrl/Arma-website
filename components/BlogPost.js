import MaskChars from "@/components/MaskChars";
import ParallaxImage from "@/components/ParallaxImage";
import { backgroundFromValue } from "@/lib/drive";

export default function BlogPost({ post }) {
  return (
    <>
      {/* 1. Header */}
      <article className="container-x pt-10 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted">{post.date}</p>
          <MaskChars
            as="h1"
            text={post.title}
            className="mt-4 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl"
          />
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {(post.tags || []).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Cover image */}
        <ParallaxImage
          className="mx-auto mt-10 aspect-[16/10] max-w-4xl rounded-3xl lg:mt-12"
          background={backgroundFromValue(post.cover)}
        />

        {/* 3. Body */}
        <div className="mx-auto mt-12 max-w-2xl lg:mt-14">
          <p className="leading-relaxed text-muted">{post.intro}</p>

          {(post.sections || []).map((section) => (
            <div key={section.heading} className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>
              {section.body && (
                <p className="mt-4 leading-relaxed text-muted">
                  {section.body}
                </p>
              )}
              {section.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-8">
                  <h3 className="text-lg font-bold tracking-tight">
                    {sub.heading}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{sub.body}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </article>

      {/* 4. Call to action */}
      <section className="container-x pb-24 pt-16 lg:pb-32 lg:pt-24">
        <div className="rounded-[2.5rem] border border-line bg-ink px-8 py-16 text-center text-white lg:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build a brand that works as hard as you do?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/55">
            Let&apos;s talk about where you want to take it — and how we can
            help you get there.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
