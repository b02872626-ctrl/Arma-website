// Sample placeholder logos — swap these for real client logos later.
// Drop logo files in /public and replace each entry's `mark` with an <img>.
const logos = [
  { name: "Acme", mark: "●" },
  { name: "Northwind", mark: "▲" },
  { name: "Globex", mark: "◆" },
  { name: "Umbra", mark: "■" },
  { name: "Vertex", mark: "✦" },
  { name: "Lumio", mark: "◐" },
  { name: "Cascade", mark: "❋" },
  { name: "Monolith", mark: "⬢" },
];

function LogoChip({ name, mark }) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap text-xl font-semibold text-ink/55">
      <span className="text-base text-ink/40">{mark}</span>
      {name}
    </span>
  );
}

export default function Marquee() {
  return (
    <section className="border-y border-line bg-bg py-6">
      <div className="relative flex overflow-hidden">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 animate-marquee items-center gap-14 pr-14"
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoChip key={i} {...logo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
