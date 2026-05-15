import Reveal from "@/components/Reveal";
import MaskChars from "@/components/MaskChars";
import MaskText from "@/components/MaskText";

const stats = [
  ["99+", "Completed Projects"],
  ["5+", "Years of Experience"],
  ["100%", "Happy Clients"],
];

// Paste your YouTube video ID here to show the showreel (e.g. "dQw4w9WgXcQ").
// Leave it empty to show the placeholder.
const SHOWREEL_YOUTUBE_ID = "";

export default function Hero() {
  return (
    <section id="top" className="pt-10 pb-6 lg:pt-16">
      {/* Headline + intro stay within the content container */}
      <div className="container-x">
        <MaskChars
          as="h1"
          text="ARMA"
          duration={1000}
          stagger={70}
          className="-ml-[0.06em] select-none font-extrabold leading-[0.85] tracking-[-0.04em] text-ink text-[24vw] lg:text-[19vw]"
        />

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-end">
          <Reveal delay={120}>
            <dl className="flex flex-wrap gap-x-12 gap-y-6">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <dt className="text-3xl font-bold lg:text-4xl">{n}</dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <MaskText
            as="p"
            className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end lg:text-lg"
            lines={[
              <span key="1">
                We craft memorable{" "}
                <span className="font-semibold text-ink">brands</span>, design
                and develop stunning
              </span>,
              <span key="2">
                <span className="font-semibold text-ink">websites</span>,
                sharpen your presence with strategic{" "}
                <span className="font-semibold text-ink">SEO</span>, and amplify
              </span>,
              <span key="3">
                your impact with results-driven{" "}
                <span className="font-semibold text-ink">digital marketing</span>
                .
              </span>,
            ]}
          />
        </div>
      </div>

      {/* Showreel video — breaks out near full-width */}
      <Reveal delay={320}>
        <div className="mt-12 px-4 sm:px-6 lg:mt-16">
          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-ink">
            {SHOWREEL_YOUTUBE_ID ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${SHOWREEL_YOUTUBE_ID}`}
                title="ARMA showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-xl">
                  ▶
                </div>
                <p className="mt-4 text-lg font-semibold">Showreel</p>
                <p className="mt-1 text-sm text-white/50">
                  Add your YouTube video ID in Hero.js
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
