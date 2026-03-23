"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContent } from "@appletosolutions/reactbits";
import type { Project } from "@/data/site";

interface ProjectPreviewCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
  compact?: boolean;
}

export function ProjectPreviewCard({
  project,
  priority = false,
  className = "",
  compact = false,
}: ProjectPreviewCardProps) {
  return (
    <div className={`${className} min-w-0`}>
      <AnimatedContent
        distance={34}
        duration={0.9}
        scale={0.985}
        initialOpacity={0}
        threshold={0.15}
      >
        <Link
          href={`/work/${project.slug}`}
          className="group block h-full w-full min-w-0 transition-transform duration-500 hover:-translate-y-1"
        >
          <article className="atmospheric-card panel-gradient glow-accent flex h-full w-full min-w-0 flex-col overflow-hidden">
            <div className="relative aspect-[5/4] overflow-hidden bg-black/20">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority={priority}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-90" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
              <p className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-foreground/80 backdrop-blur-sm">
                {project.category}
              </p>
            </div>

            <div className={`flex flex-1 flex-col ${compact ? "gap-4 p-5" : "gap-5 p-6"}`}>
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-foreground/70">{project.year}</p>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <div className="min-w-0">
                <h3 className={`editorial-title text-foreground ${compact ? "text-[2.2rem] md:text-[2.8rem]" : "text-3xl md:text-4xl"}`}>
                  {project.title}
                </h3>
                {!compact ? (
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                ) : null}
              </div>

              {!compact ? (
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.roles.slice(0, 2).map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        </Link>
      </AnimatedContent>
    </div>
  );
}
