import type { Metadata } from "next";
import { experience, getCanonicalUrl, manifesto, principles } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Chames Dhibi, design and development principles, and the experience shaping portfolio v3.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main className="pageShell pageStack">
      <section className="infoHero splitHero">
        <div>
          <span className="sectionLabel">About</span>
          <h1 className="pageTitle">I build the visual system and the product underneath it.</h1>
        </div>
        <p className="pageLead">
          My work sits between design direction and implementation. I care about hierarchy, interface rhythm,
          performance, and the small structural decisions that make a site feel authored.
        </p>
      </section>

      <section className="contentPanel twoColumnPanel">
        <div>
          <span className="sectionLabel">Principles</span>
          <h2 className="panelTitle">How I think while building</h2>
        </div>
        <div className="cardGrid threeAcross compactCards">
          {principles.map((item) => (
            <article key={item.title} className="contentCard">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel twoColumnPanel">
        <div>
          <span className="sectionLabel">Experience</span>
          <h2 className="panelTitle">From code-first work to product-facing presentation</h2>
        </div>
        <div className="timelineList">
          {experience.map((item) => (
            <article key={`${item.period}-${item.title}`} className="timelineItem">
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <span className="sectionLabel">Manifesto</span>
        <div className="manifestoGrid">
          {manifesto.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
