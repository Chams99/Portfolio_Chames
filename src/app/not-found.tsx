import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pageShell pageStack">
      <section className="infoHero splitHero">
        <div>
          <span className="sectionLabel">404</span>
          <h1 className="pageTitle">This route fell off the grid.</h1>
        </div>
        <p className="pageLead">
          The page you were looking for does not exist in portfolio v3, but the main routes are still ready to explore.
        </p>
      </section>

      <section className="contentPanel notFoundActions">
        <Link href="/" className="primaryAction">Go home</Link>
        <Link href="/work" className="secondaryAction">View work</Link>
      </section>
    </main>
  );
}