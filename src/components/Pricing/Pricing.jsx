"use client";

import { useState } from "react";
import Link from "next/link";
import Heading from "../Heading/Heading";

const YEARLY_DISCOUNT = 0.25; // 25% off when billed yearly

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    icon: "crown",
    featured: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 17,
    icon: "growth",
    featured: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 99,
    icon: "bolt",
    featured: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

function PlanIcon({ name }) {
  const common = {
    className: "h-5 w-5 text-fuchsia-200",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
  };

  if (name === "crown") {
    return (
      <svg {...common}>
        <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" />
      </svg>
    );
  }
  if (name === "growth") {
    return (
      <svg {...common}>
        <rect x="4" y="12" width="4" height="8" rx="1" />
        <rect x="10" y="8" width="4" height="12" rx="1" />
        <rect x="16" y="4" width="4" height="16" rx="1" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M13 2L5 13.5h6L10 22l8-11.5h-6L13 2z" />
    </svg>
  );
}

function PlusBox() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/20 text-white">
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
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

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const priceFor = (monthly) =>
    yearly ? Math.round(monthly * (1 - YEARLY_DISCOUNT)) : monthly;

  const toggleBase =
    "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:px-5 sm:py-2.5 sm:text-base";

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <Heading SubTitle={`Pricing`} Title={`Pay for the leverage, not the listings`}></Heading>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center rounded-full border border-white/10 bg-neutral-900 p-1.5 sm:p-2"
          >
            <button
              type="button"
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
              className={`${toggleBase} ${
                !yearly ? "bg-white text-black" : "text-white hover:text-neutral-300"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
              className={`${toggleBase} flex items-center gap-2 ${
                yearly ? "bg-white text-black" : "text-white hover:text-neutral-300"
              }`}
            >
              Yearly
              <span className="rounded-full bg-fuchsia-600 px-2.5 py-0.5 text-xs font-semibold text-white sm:text-sm">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mx-auto mt-10 grid max-w-xl gap-5 lg:mt-14 lg:max-w-none lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-3xl border border-white/10 p-6 ${
                plan.featured
                  ? "bg-neutral-900 shadow-xl shadow-black/40"
                  : "bg-black"
              }`}
            >
              {/* Plan header */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-linear-to-b from-black to-neutral-900">
                    <PlanIcon name={plan.icon} />
                  </span>
                  <h3 className="text-xl font-medium text-white xl:text-2xl">
                    {plan.name}
                  </h3>
                </div>

                <p className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-medium tracking-tight xl:text-5xl">
                    ${priceFor(plan.price)}
                  </span>
                  <span className="text-sm text-neutral-300">/month</span>
                </p>
              </div>

              {/* Features */}
              <h4 className="mt-10 text-lg font-medium text-white">
                Start building your insights hub:
              </h4>
              <ul className="mt-5 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-neutral-300"
                  >
                    <PlusBox />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <Link
                  href={`/signup?plan=${plan.id}&billing=${
                    yearly ? "yearly" : "monthly"
                  }`}
                  className={`group flex items-center justify-between rounded-xl px-6 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-neutral-800 text-white hover:bg-neutral-700"
                  }`}
                >
                  Choose This Plan
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}