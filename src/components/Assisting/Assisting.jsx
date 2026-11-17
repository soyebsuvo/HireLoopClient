const STATS = [
  { value: "50K", label: "Active Jobs", icon: "jobs" },
  { value: "12K", label: "Companies", icon: "companies" },
  { value: "2M", label: "Job Seekers", icon: "seekers" },
  { value: "97%", label: "Satisfaction Rate", icon: "rating" },
];

function StatIcon({ name }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "jobs": // briefcase with magnifier
      return (
        <svg {...common}>
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M20 12.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6" />
          <circle cx="17" cy="17" r="2.5" />
          <path d="M21 21l-1.6-1.6" />
        </svg>
      );
    case "companies": // bar / podium
      return (
        <svg {...common}>
          <rect x="3.5" y="11" width="5" height="9" rx="1" />
          <rect x="9.5" y="4" width="5" height="16" rx="1" />
          <rect x="15.5" y="9" width="5" height="11" rx="1" />
        </svg>
      );
    case "seekers": // person inside magnifier
      return (
        <svg {...common}>
          <circle cx="11" cy="10" r="7.5" />
          <circle cx="11" cy="8.5" r="2.2" />
          <path d="M7.2 14.2c.7-1.6 2-2.4 3.8-2.4s3.1.8 3.8 2.4" />
          <path d="M16.5 15.5L21 20" />
        </svg>
      );
    case "rating": // star outline
      return (
        <svg {...common}>
          <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.7 6.8 19.5l1-5.8-4.2-4.1 5.8-.8L12 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AssistingSection() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-medium leading-snug text-neutral-300 sm:text-3xl lg:text-4xl lg:leading-snug">
          Assisting over{" "}
          <span className="font-semibold text-white">15,000 job seekers</span>{" "}
          find their dream positions.
        </h2>

        {/* Stat cards */}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="flex min-h-45 flex-col justify-between rounded-2xl border border-white/10 bg-linear-to-b from-black to-neutral-900 p-6 sm:min-h-[200px] lg:min-h-[240px]"
            >
              <span className="text-white">
                <StatIcon name={stat.icon} />
              </span>

              <div className="mt-8">
                <p className="text-5xl font-medium tracking-tight text-white lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-base text-neutral-300">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
