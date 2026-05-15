import MaskText from "@/components/MaskText";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Brand Strategy & Identity",
    desc: "Strategic identities built to tell your story with clarity — setting you apart and forging real connections with the people who matter.",
  },
  {
    title: "Website Development",
    desc: "Responsive, user-first websites engineered for effortless navigation, sharp visuals, and conversion at every step.",
  },
  {
    title: "Seo Marketing",
    desc: "Data-driven search strategies that lift visibility, pull in qualified traffic, and keep you a step ahead of competitors.",
  },
  {
    title: "Packaging Design",
    desc: "Distinctive packaging that earns attention on the shelf, signals product value, and turns browsers into buyers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="container-x py-20 lg:py-28">
      <span className="text-sm font-bold tracking-tight">[02 Services]</span>

      <MaskText
        as="h2"
        className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        lines={[
          <span key="1" className="text-neutral-400">
            Not just services — we deliver
          </span>,
          <span key="2">
            growth<span className="text-neutral-400">,</span> clarity
            <span className="text-neutral-400">, and </span>real impact
            <span className="text-neutral-400">.</span>
          </span>,
        ]}
      />

      <div className="mt-12 space-y-3 lg:mt-16">
        {services.map((s) => (
          <Reveal key={s.title}>
            <div className="flex flex-col gap-6 rounded-[28px] border border-line bg-white p-8 md:flex-row md:items-center md:gap-10 md:p-10 lg:p-12">
              <p className="text-sm leading-relaxed text-muted md:w-1/3 md:max-w-xs">
                {s.desc}
              </p>
              <h3 className="text-3xl font-bold tracking-tight md:ml-auto md:text-right lg:text-5xl">
                {s.title}
              </h3>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <a
            href="/contact"
            className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-ink p-8 text-white transition hover:bg-ink/90 md:flex-row md:items-center md:justify-between md:p-10 lg:p-12"
          >
            <span className="text-3xl font-bold tracking-tight lg:text-4xl">
              Ready to Start?
            </span>
            <span className="flex items-center gap-3 text-3xl font-bold tracking-tight lg:text-4xl">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Get in Touch
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
