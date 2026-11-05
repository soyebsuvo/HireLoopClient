"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

/* Infinity loop that replaces the "oo" in the wordmark (blue -> orange) */
function LoopIcon() {
  return (
    <svg
      className="mx-0.5 h-5 w-9 translate-y-[3px] sm:h-6 sm:w-11"
      viewBox="0 0 44 22"
      fill="none"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hireloop-grad" x1="0" y1="0" x2="44" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0A84FF" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#FF7A00" />
        </linearGradient>
      </defs>
      <path
        d="M22 11C17 3 5 2.5 5 11s12 8 17 0c5-8 17-8.5 17 0s-12 8-17 0z"
        stroke="url(#hireloop-grad)"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className="flex items-center rounded-lg text-3xl font-bold leading-none tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-4xl"
    >
      <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
        hirel
      </span>
      <LoopIcon />
      <span className="text-orange-500">p</span>
    </Link>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Close the mobile menu after navigating to another page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Add a stronger shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close with Escape, and when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Stop the page behind the menu from scrolling while it is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 lg:px-10">
      {/* Floating rounded bar */}
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/5 bg-[#222222]/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-xl shadow-black/40" : "shadow-none"
        }`}
      >
        <nav
          className="flex h-20 items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop: links + divider + actions */}
          <div className="hidden items-center lg:flex">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-lg px-4 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                      isActive(link.href)
                        ? "bg-white/10 text-white"
                        : "text-neutral-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <span className="mx-6 h-10 w-px bg-white/15" aria-hidden="true" />

            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-lg font-medium text-indigo-400 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="ml-4 rounded-xl bg-[#5b5cff] px-6 py-3 text-lg font-medium text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#6c6dff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-neutral-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={open} />
          </button>
        </nav>

        {/* Mobile / tablet menu (expands inside the same rounded bar) */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out lg:hidden ${
            open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-white/10 px-4 pb-5 pt-3 sm:px-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive(link.href)
                          ? "bg-white/10 text-white"
                          : "text-neutral-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
                <Link
                  href="/login"
                  className="rounded-xl border border-white/15 px-4 py-3 text-center text-base font-medium text-indigo-400 hover:bg-white/5"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl bg-[#5b5cff] px-4 py-3 text-center text-base font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-[#6c6dff]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
