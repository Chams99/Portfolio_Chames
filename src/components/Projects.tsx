"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { IntegratedSearchFilter } from "./IntegratedSearchFilter";
import type { ProjectWithMetadata, FilterOption } from "@/lib/projectFilters";
import { filterProjects } from "@/lib/projectFilters";

interface ProjectsProps {
  projects: ProjectWithMetadata[];
  categories: FilterOption[];
  technologies: FilterOption[];
  range?: [number, number?];
  exclude?: string[];
  showFilters?: boolean;
}

export function Projects({
  projects: allProjects,
  categories,
  technologies,
  range,
  exclude,
  showFilters = true,
}: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    const projectPool = exclude?.length
      ? allProjects.filter((project) => !exclude.includes(project.slug))
      : allProjects;

    return filterProjects(projectPool, searchQuery, selectedCategories, selectedTechnologies).sort(
      (a, b) => {
        const aPriority = a.metadata.priority ?? 0;
        const bPriority = b.metadata.priority ?? 0;

        if (aPriority !== bPriority) {
          return bPriority - aPriority;
        }

        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
      },
    );
  }, [allProjects, exclude, searchQuery, selectedCategories, selectedTechnologies]);

  const displayedProjects = range
    ? filteredProjects.slice(range[0] - 1, range[1] ?? filteredProjects.length)
    : filteredProjects;

  return (
    <div className="flex flex-col w-full gap-8">
      {showFilters && (
        <div className="flex flex-col gap-4">
          <IntegratedSearchFilter
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategories}
            onTechnologyChange={setSelectedTechnologies}
            categories={categories}
            technologies={technologies}
            selectedCategories={selectedCategories}
            selectedTechnologies={selectedTechnologies}
            placeholder="Search projects by title, category, or stack..."
          />
          <div className="font-mono text-sm uppercase tracking-widest font-bold text-muted-foreground border-l-4 border-primary pl-3 py-1">
            {displayedProjects.length} PROJECT{displayedProjects.length !== 1 ? "S" : ""} LISTED
            {(searchQuery || selectedCategories.length > 0 || selectedTechnologies.length > 0) &&
              ` / ${allProjects.length} TOTAL`}
          </div>
        </div>
      )}

      {displayedProjects.length === 0 ? (
        <div className="w-full p-12 border-2 border-foreground bg-secondary flex flex-col items-center justify-center gap-6 shadow-[8px_8px_0px_0px_var(--brutal-shadow)] text-center">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight">No Matches Found</h3>
          <p className="text-secondary-foreground font-mono max-w-md">
            Try adjusting your search terms or clearing some filters to see more projects.
          </p>
          <button
            type="button"
            className="px-6 py-3 border-2 border-foreground bg-background text-foreground font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--brutal-shadow)] transition-all"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategories([]);
              setSelectedTechnologies([]);
            }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {displayedProjects.map((post, index) => (
            <ProjectCard
              key={post.slug}
              priority={index < 2}
              href={`/work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
              category={post.metadata.category}
              tags={post.metadata.tags}
              publishedAt={post.metadata.publishedAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
