"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Bracketed({ label }) {
  return (
    <span className="group nav-link inline-flex items-center">
      <span className="text-muted transition-transform duration-300 ease-out group-hover:translate-x-[5px]">
        [
      </span>
      <span className="px-2">{label}</span>
      <span className="text-muted transition-transform duration-300 ease-out group-hover:-translate-x-[5px]">
        ]
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true); // scrolling down
      } else if (y < lastY - 4) {
        setHidden(false); // scrolling up
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/85 backdrop-blur transition-transform duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-1.5 w-full bg-ink/10" />
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="/" className="flex items-center">
          {/* Black logo for the light navbar — save file at /public/logo-black.png */}
          <img
            src="/logo-black.png"
            alt="ARMA"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                <Bracketed label={l.label} />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="/contact" className="btn-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Get in Touch
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-dark w-full justify-center"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
