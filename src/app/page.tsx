import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { ReactBitsHero } from "@/components/ReactBitsHero";
import { ReactBitsParagraph } from "@/components/ReactBitsParagraph";
import { Button } from "@/components/ui/button";
import {
  capabilities,
  featuredProjects,
  getCanonicalUrl,
  heroStats,
  homeIntro,
  homeNarrative,
  processSteps,
  trustSignals,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Dhibi Chames Eddine | Full-Stack Web & Mobile Developer",
  description:
    "Editorial portfolio for Dhibi Chames Eddine, a full-stack web and mobile developer building backend-powered products with Next.js, Flutter, Node.js, and AI integration.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

export default function Home() {
  return (
    <main className="pb-16">
      <section className="page-shell relative overflow-hidden py-12 md:py-20">
        <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />
        <p className="section-word pointer-events-none absolute left-0 top-20 z-0 text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[15rem]">
          Presence
        </p>

        <ReactBitsHero
          eyebrow={homeIntro.eyebrow}
          body={homeIntro.body}
          primaryLabel={homeIntro.ctaLabel}
          secondaryLabel={homeIntro.secondaryCtaLabel}
        />

        <div className="section-line mt-14 grid gap-4 pt-8 md:grid-cols-3">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-[1.75rem] border border-white/8 p-5 ${
                index === 1 ? "bg-white/[0.05]" : "bg-white/[0.025]"
              }`}
            >
              <p className="eyebrow">{stat.label}</p>
              <p className="mt-4 text-lg text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-12 md:py-14">
          <p className="section-word pointer-events-none absolute -right-4 top-8 text-[4.5rem] sm:text-[6rem] md:text-[8rem]">
            Story
          </p>
          <div className="grid gap-6 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="eyebrow">Positioning</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {homeNarrative.map((line) => (
                <ReactBitsParagraph
                  key={line}
                  text={line}
                  textClassName="text-base leading-7 text-muted-foreground"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute left-0 top-16 text-[5.5rem] sm:text-[8rem] md:text-[12rem]">
            Work
          </p>
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="display-monument mt-4 text-[3.8rem] text-foreground sm:text-[4.8rem] md:text-[6.5rem]">
                <span className="editorial-outline-soft block">Selected</span>
                projects with
                <span className="editorial-outline ml-2 inline-block">more tension</span>
                than a standard portfolio grid.
              </h2>
            </div>
            <Link href="/work" className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
              View the full archive
            </Link>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 lg:grid-cols-12">
            {featuredProjects.map((project, index) => {
              const layout =
                index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5 lg:translate-y-20"
                    : "lg:col-span-8 lg:ml-10";

              return (
                <ProjectPreviewCard
                  key={project.slug}
                  project={project}
                  priority={index === 0}
                  className={layout}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute right-0 top-6 text-[5.5rem] sm:text-[7rem] md:text-[11rem]">
            Offer
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="stage-line pl-6">
              <p className="eyebrow">Capabilities</p>
              <h2 className="editorial-title mt-4 text-5xl text-foreground md:text-7xl">
                More than visual polish.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <article
                  key={item.title}
                  className={`atmospheric-card p-7 ${index % 2 === 1 ? "md:translate-y-12" : ""}`}
                >
                  <p className="eyebrow text-primary">{item.title}</p>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute left-0 top-10 text-[5rem] sm:text-[7rem] md:text-[11rem]">
            Proof
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="eyebrow">Why this lands</p>
              <h2 className="display-monument mt-4 max-w-3xl text-[3.2rem] leading-[0.92] text-foreground sm:text-[4rem] md:text-[5rem]">
                Visual confidence
                <br />
                with enough
                <span className="editorial-outline ml-2 inline-block">control</span>
                to ship.
              </h2>
            </div>

            <div className="grid gap-4">
              {trustSignals.map((signal, index) => (
                <article
                  key={signal.label}
                  className={`atmospheric-card p-7 ${index === 1 ? "md:ml-16" : ""} ${index === 2 ? "md:mr-16" : ""}`}
                >
                  <p className="eyebrow">{signal.label}</p>
                  <h3 className="mt-3 text-2xl text-foreground">{signal.value}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{signal.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute right-0 top-16 text-[5rem] sm:text-[7rem] md:text-[10rem]">
            Process
          </p>
          <div className="max-w-3xl">
            <p className="eyebrow">Approach</p>
            <h2 className="display-monument mt-4 max-w-4xl text-[3.7rem] leading-[0.92] text-foreground sm:text-[4.8rem] md:text-[6rem]">
              Built in stages that
              <br />
              <span className="editorial-outline inline-block">shape feeling</span>
              and function together.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step.label}
                className={`atmospheric-card panel-gradient p-7 ${index === 1 || index === 3 ? "md:translate-y-12" : ""}`}
              >
                <p className="eyebrow text-primary">{step.label}</p>
                <h3 className="mt-4 text-2xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="page-shell py-16 md:py-24">
          <div className="atmospheric-card panel-gradient relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
            <p className="section-word pointer-events-none absolute -right-3 bottom-0 text-[5rem] sm:text-[7rem] md:text-[10rem]">
              Hello
            </p>
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2 className="display-monument mt-4 text-[3.8rem] text-foreground sm:text-[4.8rem] md:text-[6rem]">
                Let&apos;s make the next digital experience feel more singular.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Best suited for portfolio redesigns, product landing pages, and brand-led experiences that need a stronger point of view.
              </p>
              <Link href="/contact" className="mt-8 inline-flex">
                <Button className="rounded-full border border-primary/20 px-6 py-6 text-sm uppercase tracking-[0.22em]">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
