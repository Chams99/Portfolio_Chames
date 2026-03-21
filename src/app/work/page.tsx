import type { Metadata } from "next";
import { getCanonicalUrl, projects as siteProjects } from "@/data/site";
import { Projects } from "@/components/Projects";
import type { ProjectWithMetadata } from "@/lib/projectFilters";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from Chames Dhibi with challenge and outcome framing across portfolio v3.",
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
};

export default function WorkPage() {
  // Map siteProjects to the expected ProjectWithMetadata interface from v2
  const mappedProjects: ProjectWithMetadata[] = siteProjects.map((p) => ({
    slug: p.slug,
    content: "",
    metadata: {
      title: p.title,
      summary: p.summary,
      category: p.type,
      tags: ["React", "UI/UX", "Tailwind"],
      publishedAt: `${p.year}-01-01`,
      images: [p.image],
    },
  }));

  const mockCategories = [
    { label: "Interactive Product", value: "Interactive Product", count: 1 },
    { label: "Agency System", value: "Agency System", count: 1 },
    { label: "Company Website", value: "Company Website", count: 1 },
  ];

  const mockTechnologies = [
    { label: "React", value: "React", count: 3 },
    { label: "Tailwind", value: "Tailwind", count: 3 },
    { label: "UI/UX", value: "UI/UX", count: 3 },
  ];

  return (
    <main className="min-h-screen bg-background border-x-4 border-foreground max-w-[1400px] mx-auto flex flex-col font-sans mb-20 pt-24 px-4 md:px-8">
      <section className="py-12 md:py-20 border-b-4 border-foreground mb-12">
        <div className="flex flex-col gap-4">
          <div className="inline-block border-4 border-foreground px-4 py-2 font-black uppercase text-sm bg-secondary w-fit shadow-brutalist">
            Work
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            Selected projects with stronger framing and clearer outcomes.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-primary pl-6 py-2 bg-secondary/20 uppercase mt-4">
            Each project represents a different mood, pushed toward clarity, pace, and a stronger first impression.
          </p>
        </div>
      </section>

      <section className="w-full">
        <Projects 
          projects={mappedProjects} 
          categories={mockCategories} 
          technologies={mockTechnologies} 
        />
      </section>
    </main>
  );
}
