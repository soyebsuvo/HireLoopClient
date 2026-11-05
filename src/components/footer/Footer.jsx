import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Companies", href: "/companies" },
      { label: "Salary data", href: "/salary" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/career-library" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
];

/* Replace these with your real social profile URLs */
const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.8c0-.9.4-1.7 1.8-1.7h1.5V3.3S15.1 3 13.9 3C11.4 3 9.8 4.5 9.8 7.3v2.5H7v3.2h2.8v8h3.7z" />
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/",
    icon: (
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <path d="M5.4 8.6h3.2V19H5.4V8.6zM7 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zM10.6 8.6h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19h-3.2v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19h-3.2V8.6z" />
    ),
  },
];

function LoopIcon() {
  return (
    <svg
      className="mx-0.5 h-6 w-10 translate-y-[3px] sm:h-7 sm:w-12"
      viewBox="0 0 44 22"
      fill="none"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="hireloop-grad-footer"
          x1="0"
          y1="0"
          x2="44"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0A84FF" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#FF7A00" />
        </linearGradient>
      </defs>
      <path
        d="M22 11C17 3 5 2.5 5 11s12 8 17 0c5-8 17-8.5 17 0s-12 8-17 0z"
        stroke="url(#hireloop-grad-footer)"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className="inline-flex items-center rounded-lg text-4xl font-bold leading-none tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-5xl"
    >
      <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
        hirel
      </span>
      <LoopIcon />
      <span className="text-orange-500">p</span>
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        {/* Top: brand + link columns */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-base leading-8 text-neutral-400 sm:text-lg">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-lg font-medium text-indigo-400 sm:text-xl">
                  {col.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded text-base text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-lg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom: socials + legal */}
        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <ul className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-neutral-300 transition-colors hover:bg-[#5b5cff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:h-14 sm:w-14"
                >
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 text-sm text-neutral-500 sm:text-base md:flex-row md:items-center md:gap-8 md:text-lg">
            <p>Copyright {year} — HireLoop</p>
            <p className="text-neutral-300">
              <Link
                href="/terms"
                className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Terms &amp; Policy
              </Link>
              {" - "}
              <Link
                href="/privacy"
                className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Privacy Guideline
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
