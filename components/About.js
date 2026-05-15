import MaskText from "@/components/MaskText";
import Reveal from "@/components/Reveal";

const stats = [
  ["99+", "Completed Projects"],
  ["5+", "Years of Experience"],
  ["100%", "Happy Clients"],
];

export default function About() {
  return (
    <section id="about" className="px-4">
      <div className="rounded-[2.5rem] border border-white/15 bg-ink text-white">
        <div className="container-x py-20 lg:py-28">
        <span className="text-sm font-bold tracking-tight">[03 About]</span>

        <MaskText
          as="h2"
          className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          lines={[
            <span key="1" className="text-white/45">
              Creative minds. Real people.
            </span>,
            "One tight-knit team.",
          ]}
        />

        {/* Team photo — swap this gradient for a real image in /public */}
        <div
          className="mt-10 aspect-[2/1] w-full overflow-hidden rounded-3xl lg:mt-14"
          style={{
            background:
              "linear-gradient(135deg, #3a3a3a 0%, #161616 55%, #0a0a0a 100%)",
          }}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal delay={80}>
            <dl className="flex flex-wrap gap-x-12 gap-y-6">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <dt className="text-4xl font-bold lg:text-5xl">{n}</dt>
                  <dd className="mt-1 text-sm text-white/50">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180} className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
              We don&apos;t just make things look good —{" "}
              <span className="font-semibold text-white">
                we make them work
              </span>
              . From early-stage startups to growing brands, we help teams turn
              ideas into{" "}
              <span className="font-semibold text-white">
                strategy, design, and digital experiences that matter
              </span>
              .
            </p>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
