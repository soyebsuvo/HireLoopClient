import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative flex min-h-130 w-full items-center justify-center bg-cover bg-top bg-no-repeat sm:min-h-145 lg:min-h-170"
      style={{ backgroundImage: "url('/images/cta-bg.png')" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-32 text-center sm:px-8 lg:pb-24 lg:pt-44">
        <h2 className="text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
          Your next role is <br className="hidden sm:block" />
          already looking for you
        </h2>

        <p className="mt-5 max-w-xl text-base text-neutral-400 sm:mt-6 sm:text-lg">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/signup"
            className="w-full rounded-xl bg-white px-6 py-3.5 text-center text-base font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            Create a free account
          </Link>
          <Link
            href="/pricing"
            className="w-full rounded-xl border border-white/15 bg-neutral-950 px-6 py-3.5 text-center text-base font-medium text-white transition-colors hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:w-auto"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}