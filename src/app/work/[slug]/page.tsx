import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import {
  featuredProjects,
  getCanonicalUrl,
  getProjectBySlug,
  projectSlugs,
} from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: getCanonicalUrl(`/work/${project.slug}`),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="pb-16">
      <section className="page-shell relative overflow-hidden py-12 md:py-16">
        <p className="section-word pointer-events-none absolute left-0 top-16 text-[5rem] sm:text-[7rem] md:text-[12rem]">
          {project.category}
        </p>
        <Link
          href="/work"
          className="link-underline relative z-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <div className="relative z-10 mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">{project.year}</p>
            <h1 className="display-monument mt-4 text-[4.3rem] text-foreground sm:text-[5.2rem] md:text-[7rem]">
              {project.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{project.summary}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <aside className="atmospheric-card panel-gradient glow-accent relative overflow-hidden p-6">
            <p className="section-word pointer-events-none absolute -right-4 bottom-0 text-[4rem] md:text-[6rem]">
              Note
            </p>
            <div className="relative z-10">
              <p className="eyebrow">Opening note</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.intro}</p>

              {project.metrics?.length ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className={`rounded-2xl border border-white/8 bg-white/[0.04] p-4 ${index === 1 ? "sm:translate-y-6" : ""}`}
                    >
                      <p className="eyebrow">{metric.label}</p>
                      <p className="mt-3 text-lg text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-foreground hover:bg-white/5"
                >
                  Visit project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="image-frame relative min-h-[24rem] lg:col-span-8 lg:aspect-[16/10]">
              <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
            </div>
            <div className="atmospheric-card panel-gradient flex flex-col justify-end p-6 lg:col-span-4 lg:translate-y-16">
              <p className="eyebrow text-primary">Core idea</p>
              <p className="mt-4 text-2xl leading-tight text-foreground">{project.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute right-0 top-8 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">
            Story
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <article className="atmospheric-card p-7 lg:col-span-4">
              <p className="eyebrow">Problem</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.problem}</p>
            </article>

            <article className="atmospheric-card p-7 lg:col-span-5 lg:translate-y-14">
              <p className="eyebrow text-primary">Creative approach</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.creativeApproach}</p>
            </article>

            <article className="atmospheric-card p-7 lg:col-span-3">
              <p className="eyebrow">Outcome</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.outcome}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute left-0 top-12 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">
            Frames
          </p>
          <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {project.gallery.map((image, index) => {
              const layout =
                index === 0
                  ? "lg:col-span-7 lg:aspect-[16/9]"
                  : index === 1
                    ? "lg:col-span-5 lg:translate-y-16"
                    : "lg:col-span-6 lg:-mt-10";

              return (
                <div
                  key={`${project.slug}-${index}`}
                  className={`image-frame relative min-h-72 aspect-[4/5] ${layout}`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="section-line overflow-hidden">
          <div className="page-shell relative py-16 md:py-20">
            <p className="section-word pointer-events-none absolute right-0 top-16 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">
              Next
            </p>
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Related work</p>
                <h2 className="display-monument mt-4 text-[3.6rem] text-foreground sm:text-[4.4rem] md:text-[5.6rem]">
                  More case studies
                </h2>
              </div>
              <Link href="/work" className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground">
                Return to archive
              </Link>
            </div>

            <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((item, index) => (
                <ProjectPreviewCard
                  key={item.slug}
                  project={item}
                  className={index === 1 ? "md:translate-y-10" : ""}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
