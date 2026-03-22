import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell py-20 md:py-28">
      <div className="atmospheric-card max-w-4xl px-6 py-10 md:px-10 md:py-14">
        <p className="eyebrow">404</p>
        <h1 className="editorial-title mt-4 text-5xl text-foreground md:text-7xl">
          This page is no longer part of the story.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          The route you were looking for does not exist, but the main portfolio pages are still available.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-6 py-3 text-sm uppercase tracking-[0.22em] text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm uppercase tracking-[0.22em] text-foreground hover:bg-white/5"
          >
            View work
          </Link>
        </div>
      </div>
    </main>
  );
}
