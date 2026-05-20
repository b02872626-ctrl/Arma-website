"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function Bracketed({ label }) {
  return (
    <span className="group inline-flex items-center text-lg font-semibold text-ink lg:text-2xl">
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">
        [
      </span>
      <span className="px-2.5">{label}</span>
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-[6px]">
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
      <nav className="flex h-20 items-center gap-4 px-5 sm:px-8 lg:px-12">
        {/* Mobile only: logo */}
        <a href="/" className="flex items-center lg:hidden">
          <img src="/logo-black.png" alt="ARMA" className="h-8 w-auto" />
        </a>

        {/* Desktop: nav links spread edge-to-edge */}
        <ul className="hidden w-full items-center justify-between lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                <Bracketed label={l.label} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-ink/15 lg:hidden"
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
          </ul>
        </div>
      )}
    </header>
  );
}
