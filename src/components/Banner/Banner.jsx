"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TRENDING = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

function SearchIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7.5" />
      <path d="M20.5 20.5L17 17" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21.5s7-5.6 7-11.2A7 7 0 0 0 5 10.3c0 5.6 7 11.2 7 11.2z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function Banner() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location.trim()) params.set("location", location.trim());
    const qs = params.toString();
    router.push(qs ? `/jobs?${qs}` : "/jobs");
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
        {/* Badge with side lines */}
        <div className="flex w-full items-center justify-center">
          <span
            aria-hidden="true"
            className="hidden h-px w-24 bg-linear-to-r from-transparent to-white/25 md:block lg:w-40"
          />
          <p className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-wide text-neutral-400 sm:gap-3 sm:px-6 sm:py-2.5 sm:text-base lg:text-xl">
            <span role="img" aria-label="Briefcase" className="text-xl sm:text-3xl">
              💼
            </span>
            <span>
              <strong className="font-bold text-white">50,000+</strong> New jobs
              this month
            </span>
          </p>
          <span
            aria-hidden="true"
            className="hidden h-px w-24 bg-linear-to-l from-transparent to-white/25 md:block lg:w-40"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:mt-10 sm:text-6xl lg:text-7xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400 sm:mt-6 sm:text-lg lg:text-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          role="search"
          className="mt-10 flex w-full max-w-4xl flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-950/80 p-2 text-left backdrop-blur sm:mt-12 sm:flex-row sm:items-center"
        >
          <label className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3.5 text-neutral-300 focus-within:bg-white/5">
            <SearchIcon className="h-6 w-6 shrink-0" />
            <span className="sr-only">Job title, skill or company</span>
            <input
              type="text"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, skill or company"
              autoComplete="off"
              className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </label>

          <span
            aria-hidden="true"
            className="mx-4 h-px bg-white/10 sm:mx-0 sm:h-7 sm:w-px"
          />

          <label className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3.5 text-neutral-300 focus-within:bg-white/5">
            <PinIcon className="h-6 w-6 shrink-0" />
            <span className="sr-only">Location or Remote</span>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              autoComplete="off"
              className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-1 flex h-14 items-center justify-center gap-2 rounded-xl bg-[#5b5cff] px-6 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-[#6c6dff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:mt-0 sm:w-14 sm:shrink-0 sm:px-0"
            aria-label="Search jobs"
          >
            <SearchIcon className="h-6 w-6" />
            <span className="sm:hidden">Search jobs</span>
          </button>
        </form>

        {/* Trending positions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          <span className="w-full text-base text-neutral-400 sm:w-auto sm:pr-2 sm:text-lg">
            Trending Position
          </span>
          {TRENDING.map((term) => (
            <Link
              key={term}
              href={`/jobs?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-indigo-400/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:text-base"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}