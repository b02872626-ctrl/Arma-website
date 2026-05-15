const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

function Bracketed({ label }) {
  return (
    <span className="text-sm font-medium text-white/55 transition group-hover:text-white">
      <span className="text-white/30">[</span> {label}{" "}
      <span className="text-white/30">]</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-4">
      <div className="rounded-[2.5rem] border border-white/15 bg-ink text-white">
        <div className="container-x py-12 lg:py-16">
        {/* Top row: nav + socials */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href} className="group">
                <a href={l.href}>
                  <Bracketed label={l.label} />
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-x-6">
            {socialLinks.map((l) => (
              <li key={l.label} className="group">
                <a href={l.href}>
                  <Bracketed label={l.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center headline */}
        <h2 className="py-20 text-center text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:py-28 lg:text-6xl">
          <span className="text-white/40">Your brand deserves better.</span>
          <br />
          Let&apos;s build it right.
        </h2>

        {/* Bottom row */}
        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="/" className="inline-flex items-center">
              {/* White logo for the dark footer — save file at /public/logo-white.png */}
              <img
                src="/logo-white.png"
                alt="ARMA"
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-2 text-sm text-white/40">
              {new Date().getFullYear()} © All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms"].map((l) => (
              <a key={l} href="#" className="group">
                <Bracketed label={l} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <div className="text-sm text-white/40">Email</div>
              <a
                href="mailto:hello@armastudio.com"
                className="mt-1 block text-lg font-semibold transition hover:text-white/80"
              >
                hello@armastudio.com
              </a>
            </div>
            <div>
              <div className="text-sm text-white/40">Phone</div>
              <a
                href="tel:+15550000000"
                className="mt-1 block text-lg font-semibold transition hover:text-white/80"
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
