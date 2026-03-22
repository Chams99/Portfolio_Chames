"use client";

import { EditorialSpotlightCard } from "@/components/EditorialSpotlightCard";
import type { ExperienceItem } from "@/data/site";

interface AboutExperienceStackProps {
  items: ExperienceItem[];
}

export function AboutExperienceStack({ items }: AboutExperienceStackProps) {
  return (
    <div className="grid gap-5">
      {items.map((item, index) => {
        const isOffset = index === 1 || index === 3;

        return (
          <EditorialSpotlightCard
            key={`${item.period}-${item.title}`}
            className={isOffset ? "md:pl-16" : ""}
            contentClassName="p-7"
            delay={index * 0.06}
          >
            <article>
              <p className="eyebrow">{item.period}</p>
              <h2 className="mt-3 text-2xl text-foreground">{item.title}</h2>
              <p className="mt-1 text-sm text-primary">{item.place}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                {item.details}
              </p>
            </article>
          </EditorialSpotlightCard>
        );
      })}
    </div>
  );
}
