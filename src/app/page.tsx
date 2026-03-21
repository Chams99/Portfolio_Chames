import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { capabilities, getCanonicalUrl, heroStats, manifesto, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio v3 home page for Chames Dhibi with selected work, capabilities, and a sharper product-led visual direction.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

export default function Home() {
  return (
    <main className="pageShell">
      <section className="hero">
        <div className="heroTopline">
          <span className="eyebrow">Portfolio v3</span>
          <span className="eyebrow ghost">New standalone direction</span>
        </div>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="microCopy">Full-stack developer building sharp digital products.</p>
            <h1>
              SIGNAL.
              <br />
              SHAPE.
              <br />
              SHIP.
            </h1>
            <p className="lead">
              Chames Dhibi designs and builds bold web experiences with strong hierarchy, clean systems,
              and enough personality to be remembered.
            </p>

            <div className="heroActions">
              <Link href="/work" className="primaryAction">See selected work</Link>
              <Link href="/contact" className="secondaryAction">Start a project</Link>
            </div>
          </div>

          <div className="heroAside">
            <div className="portraitCard">
              <div className="portraitWrap">
                <Image src="/images/avatar.webp" alt="Chames Dhibi portrait" fill sizes="320px" priority />
              </div>
              <div className="portraitMeta">
                <span>Chames Dhibi</span>
                <span>Gafsa, Tunisia</span>
              </div>
            </div>

            <div className="statsGrid">
              {heroStats.map((item) => (
                <article key={item.label} className="statCard">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="manifestoPanel">
        <div className="sectionLabel">What changes in v3</div>
        <div className="manifestoGrid">
          {manifesto.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section id="work" className="workSection">
        <div className="sectionHeading">
          <span className="sectionLabel">Selected work</span>
          <h2>Three projects. Three moods. One sharper system.</h2>
        </div>

        <div className="projectList">
          {projects.map((project, index) => (
            <article key={project.title} className="projectCard">
              <div className="projectMedia">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="projectBody">
                <div className="projectMeta">
                  <span>0{index + 1}</span>
                  <span>{project.year}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilitiesSection">
        <div className="sectionHeading compact">
          <span className="sectionLabel">Capabilities</span>
          <h2>Built for shipping, not just showing.</h2>
        </div>
        <div className="capabilityWall">
          {capabilities.map((item) => (
            <div key={item} className="capabilityTag">{item}</div>
          ))}
        </div>
      </section>

      <section className="contactBand">
        <div>
          <span className="sectionLabel">Contact</span>
          <h2>Need the portfolio to feel more like a product and less like a template?</h2>
        </div>
        <Link href="/contact" className="primaryAction">Open contact page</Link>
      </section>
    </main>
  );
}
