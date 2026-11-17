import Link from "next/link";
import Heading from "../Heading/Heading";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

function PinIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-fuchsia-200"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-fuchsia-200"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v3h18V9a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H9zm0 2h6v1H9V6z"
      />
      <path d="M3 14v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-7v1.5h-2V14H3z" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-fuchsia-200"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#171717"
      >
        $
      </text>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Tag({ icon, children }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-2 text-xs font-medium text-white">
      {icon}
      {children}
    </li>
  );
}

export default function JobDiscovery() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <Heading SubTitle={`Smart job discovery`} Title={`The roles you'd never find by searching`}></Heading>

        {/* Job cards */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {JOBS.map((job) => (
            <li
              key={job.id}
              className="flex flex-col rounded-3xl bg-neutral-900 p-6"
            >
              <h3 className="text-2xl font-medium tracking-tight text-white">
                {job.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {job.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                <Tag icon={<PinIcon />}>{job.location}</Tag>
                <Tag icon={<BriefcaseIcon />}>{job.type}</Tag>
                <Tag icon={<DollarIcon />}>{job.salary}</Tag>
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  href={`/jobs/${job.id}`}
                  className="group inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Apply Now
                  <ArrowIcon />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* View all */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            href="/jobs"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View all open jobs
          </Link>
        </div>
      </div>
    </section>
  );
}