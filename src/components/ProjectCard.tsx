"use client";

import Link from "next/link";
import { HighQualityCarousel } from "./HighQualityCarousel";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  category?: string;
  tags?: string[];
  publishedAt?: string;
}

const PROJECT_TAG_DISPLAY_LIMIT = 3;

export function ProjectCard({
  href,
  images = [],
  title,
  content,
  description,
  link,
  category,
  tags = [],
  publishedAt,
}: ProjectCardProps) {
  const visibleTags = tags.slice(0, PROJECT_TAG_DISPLAY_LIMIT);

  return (
    <article className="group bg-background border-2 border-foreground shadow-[6px_6px_0px_0px_var(--brutal-shadow)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_var(--brutal-shadow)] flex flex-col overflow-hidden">
      
      {/* Image Carousel & Category Badge */}
      <div className="relative border-b-2 border-foreground">
        <HighQualityCarousel images={images} title={title} />
        {category && (
          <div className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_var(--brutal-shadow)]">
            {category}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        
        {/* Header Row */}
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            {publishedAt && (
              <time className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider">
                {new Date(publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-none">
              {title}
            </h2>
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 border-2 border-foreground bg-primary text-primary-foreground font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--brutal-shadow)] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {visibleTags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 pt-1.5 border-2 border-foreground bg-muted text-xs font-bold font-mono uppercase tracking-widest">
                {tag}
              </span>
            ))}
            {tags.length > PROJECT_TAG_DISPLAY_LIMIT && (
              <span className="px-2.5 py-1 pt-1.5 border-2 border-foreground bg-muted text-xs font-bold font-mono uppercase tracking-widest">
                +{tags.length - PROJECT_TAG_DISPLAY_LIMIT}
              </span>
            )}
          </div>
        )}

        {/* Action Row */}
        {content?.trim() && (
          <div className="pt-4 mt-2 border-t-2 border-foreground/20">
            <Link 
              href={href}
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary hover:text-foreground hover:underline decoration-2 underline-offset-4 transition-colors"
            >
              Read Case Study &rarr;
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
