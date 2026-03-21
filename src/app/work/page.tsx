import type { Metadata } from "next";
import Image from "next/image";
import { getCanonicalUrl, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from Chames Dhibi with challenge and outcome framing across portfolio v3.",
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
};

export default function WorkPage() {
  return (
    <main className="pageShell pageStack">
      <section className="infoHero splitHero">
        <div>
          <span className="sectionLabel">Work</span>
          <h1 className="pageTitle">Selected projects with stronger framing and clearer outcomes.</h1>
        </div>
        <p className="pageLead">
          Each project here represents a different product mood, but all of them are pushed toward the same goal:
          clarity, pace, and a stronger first impression.
        </p>
      </section>

      <section className="stackedProjects">
        {projects.map((project, index) => (
          <article key={project.slug} className="featureProjectCard">
            <div className="featureProjectMedia">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 1000px) 100vw, 45vw" />
            </div>
            <div className="featureProjectBody">
              <div className="projectMeta">
                <span>0{index + 1}</span>
                <span>{project.year}</span>
                <span>{project.type}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="detailPair">
                <div className="detailCard">
                  <span className="sectionLabel">Challenge</span>
                  <p>{project.challenge}</p>
                </div>
                <div className="detailCard accent">
                  <span className="sectionLabel">Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
