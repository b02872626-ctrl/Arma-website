import MaskChars from "@/components/MaskChars";

// Placeholder contact details — swap for ARMA's real info.
const details = [
  { label: "Email", value: "hello@armastudio.com", href: "mailto:hello@armastudio.com" },
  { label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { label: "Address", value: "742 Studio Street\nAddis Ababa, ET" },
];

const socials = [
  { label: "Instagram", value: "@arma.studio", href: "#" },
  { label: "Twitter", value: "@studio.arma", href: "#" },
];

function DetailItem({ label, value, href }) {
  const text = (
    <span className="mt-1 block whitespace-pre-line text-xl font-semibold tracking-tight">
      {value}
    </span>
  );
  return (
    <div>
      <div className="text-sm text-muted">{label}</div>
      {href ? (
        <a href={href} className="transition hover:text-muted">
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="container-x pt-10 pb-40 lg:pt-16 lg:pb-56">
      <MaskChars
        as="h1"
        text="Contacts"
        className="-ml-[0.06em] select-none font-extrabold leading-[0.85] tracking-[-0.04em] text-ink text-[20vw] lg:text-[14vw]"
      />

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-start">
        <h2 className="max-w-md text-3xl font-bold leading-[1.15] tracking-tight lg:text-4xl">
          <span className="text-neutral-400">
            Got an idea, a goal, or a challenge?
          </span>{" "}
          Let&apos;s build something exceptional — together.
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          <div className="space-y-8">
            {details.map((d) => (
              <DetailItem key={d.label} {...d} />
            ))}
          </div>
          <div className="space-y-8">
            {socials.map((s) => (
              <DetailItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
