import Heading from "../Heading/Heading";

const FEATURES = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: "search",
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: "chart",
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: "companies",
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: "bookmark",
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: "click",
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: "resume",
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: "hexagon",
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: "growth",
  },
];

const ICON_PATHS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="M20.5 20.5L17 17" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 6-7" />
    </>
  ),
  companies: (
    <>
      <rect x="3.5" y="11" width="5" height="9" rx="1" />
      <rect x="9.5" y="4" width="5" height="16" rx="1" />
      <rect x="15.5" y="9" width="5" height="11" rx="1" />
    </>
  ),
  bookmark: <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4-6.5 4V4.5a1 1 0 0 1 1-1z" />,
  click: (
    <>
      <path d="M11 11l9 3.5-4 1.5-1.5 4L11 11z" />
      <path d="M12 3v2.5M4.9 4.9l1.8 1.8M3 12h2.5M19.1 4.9l-1.8 1.8M4.9 19.1l1.8-1.8" />
    </>
  ),
  resume: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <circle cx="12" cy="8.5" r="1.7" />
      <path d="M8.5 13h7M8.5 16h7" />
    </>
  ),
  hexagon: <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3z" />,
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
};

function FeatureIcon({ name }) {
  return (
    <svg
      className="h-6 w-6 text-fuchsia-200 sm:h-7 sm:w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

export default function Features() {
  return (
    <section className="w-full bg-neutral-900">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <Heading SubTitle={`Features Job`} Title={`Everything you need to succeed`}></Heading>

        {/* Feature grid */}
        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4 xl:gap-x-6">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="flex items-start gap-4 sm:gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-linear-to-b from-black to-neutral-900 sm:h-21 sm:w-21">
                <FeatureIcon name={feature.icon} />
              </span>

              <div className="min-w-0">
                <h3 className="text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}