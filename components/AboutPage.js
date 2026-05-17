import MaskChars from "@/components/MaskChars";
import MaskText from "@/components/MaskText";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";

const stats = [
  ["99+", "Completed Projects"],
  ["5+", "Years of Experience"],
  ["100%", "Happy Clients"],
  ["12", "Countries Served"],
];

const values = [
  {
    title: "Outcome over output",
    body: "We measure success by what changes — not by what we ship. Every choice is tied back to a result you actually care about.",
  },
  {
    title: "Calm process",
    body: "Clear plans, predictable timelines, no drama. Good work needs room to breathe and a team that respects yours.",
  },
  {
    title: "Built to grow",
    body: "We don't just hand off files — we build systems your team can run with after launch, without us in the room.",
  },
  {
    title: "Honest by default",
    body: "We tell you what we'd do if it were our own brand, even when it isn't the answer you came in expecting.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Title */}
      <section className="container-x pt-10 lg:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <MaskChars
            as="h1"
            text="About"
            className="-ml-[0.04em] select-none font-extrabold leading-[0.9] tracking-[-0.04em] text-ink text-6xl sm:text-7xl lg:text-[8rem]"
          />
          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-muted lg:text-right lg:text-lg">
              We&apos;re a creative studio for brands that want to be{" "}
              <span className="font-semibold text-ink">remembered</span>, not
              just seen — built on{" "}
              <span className="font-semibold text-ink">sharp strategy</span> and{" "}
              <span className="font-semibold text-ink">careful craft</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Team photo */}
      <section className="container-x mt-12 lg:mt-16">
        <Reveal>
          <ParallaxImage
            className="aspect-[2/1] w-full rounded-3xl"
            background="linear-gradient(135deg, #3a3a3a 0%, #161616 55%, #0a0a0a 100%)"
          />
        </Reveal>
      </section>

      {/* 3. Mission + stats */}
      <section className="container-x py-20 lg:py-28">
        <span className="text-sm font-bold tracking-tight">[ Mission ]</span>
        <MaskText
          as="h2"
          className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          lines={[
            <span key="1" className="text-neutral-400">
              We don&apos;t chase trends — we build
            </span>,
            "brands that earn long-term trust.",
          ]}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start lg:mt-16">
          <Reveal delay={80}>
            <dl className="flex flex-wrap gap-x-12 gap-y-8">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <dt className="text-4xl font-bold lg:text-5xl">{n}</dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-base leading-relaxed text-muted lg:text-lg">
              ARMA is a tight-knit team of strategists, designers and developers
              based in Addis Ababa, working with founders and marketing teams
              who want a partner that thinks like an owner. We move fast, ship
              sharp work, and treat your numbers like our own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. Values */}
      <section className="container-x py-20 lg:py-28">
        <span className="text-sm font-bold tracking-tight">
          [ How we work ]
        </span>
        <MaskText
          as="h2"
          className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          lines={[
            "Four principles we",
            <span key="2" className="text-neutral-400">
              don&apos;t bend on.
            </span>,
          ]}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 80}>
              <div className="rounded-[24px] border border-line bg-white p-8 lg:p-10">
                <span className="font-mono text-sm text-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Call to action */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="rounded-[2.5rem] border border-line bg-ink px-8 py-16 text-center text-white lg:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Want to work with us? We&apos;d love to hear what you&apos;re
            building.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/55">
            Tell us where you want to go — we&apos;ll come back with a clear
            plan to get there.
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
