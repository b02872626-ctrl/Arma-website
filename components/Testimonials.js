import MaskText from "@/components/MaskText";

// Avatars are gradient placeholders — drop real photos in /public and swap.
const testimonials = [
  {
    name: "Adaeze O.",
    role: "Brand Lead, Habari",
    quote:
      "They felt less like an agency and more like part of our team. Fast, thoughtful, and genuinely invested in getting it right. From the first call to launch day every step was clear, every deadline was met, and the final work raised the bar for everything we do.",
    avatar: "linear-gradient(135deg, #d4d4d4, #9a9a9a)",
  },
  {
    name: "Daniel K.",
    role: "Founder, Stacklane",
    quote:
      "The site they built doesn't just look sharp — it converts. Sign-ups jumped within weeks of launch and our bounce rate dropped noticeably. They understood our product, asked the right questions, and turned a vague brief into something we're proud to send people to.",
    avatar: "linear-gradient(135deg, #c0c0c0, #6b6b6b)",
  },
  {
    name: "Mariam T.",
    role: "Marketing Director, Folio",
    quote:
      "Clear process, zero drama, and work we're proud to show off. We've already kicked off our next project with them. What stood out most was how easy they made it — regular updates, honest feedback, and a team that treated our goals like their own.",
    avatar: "linear-gradient(135deg, #e0e0e0, #a8a8a8)",
  },
  {
    name: "Yonas B.",
    role: "CEO, Northbeam",
    quote:
      "Every decision was tied back to a result we cared about. Rare to find a studio that thinks that way. They balanced creativity with discipline, pushed back when it mattered, and delivered something that actually moved our numbers — not just a nice-looking deliverable.",
    avatar: "linear-gradient(135deg, #cccccc, #808080)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="container-x">
        <span className="text-sm font-bold tracking-tight">
          [04 Testimonials]
        </span>
        <MaskText
          as="h2"
          className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          lines={[
            "Real stories. Real results.",
            <span key="2" className="text-neutral-400">
              Straight from our clients.
            </span>,
          ]}
        />
      </div>

      <div className="mt-12 overflow-hidden lg:mt-16">
        <div className="flex w-max gap-5 animate-marquee [animation-duration:44s] hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              className="flex min-h-[420px] w-[340px] shrink-0 flex-col rounded-[24px] border border-line bg-white p-8 sm:w-[420px] lg:p-10"
            >
              <figcaption className="flex items-center gap-3">
                <span
                  className="h-12 w-12 shrink-0 rounded-xl"
                  style={{ background: t.avatar }}
                />
                <span>
                  <span className="block font-bold tracking-tight">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
              <blockquote className="mt-8 text-lg font-light leading-snug tracking-tight lg:text-xl">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
