import type { Metadata } from "next";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { getCanonicalUrl, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from Chames Dhibi across digital products, service platforms, company websites, and interactive tools.",
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
};

export default function WorkPage() {
  return (
    <main className="pb-16">
      <section className="page-shell relative overflow-hidden py-12 md:py-20">
        <p className="section-word pointer-events-none absolute left-0 top-14 text-[5rem] sm:text-[8rem] md:text-[13rem]">
          Archive
        </p>
        <div className="relative z-10 max-w-5xl">
          <p className="eyebrow">Archive</p>
          <h1 className="display-monument mt-5 text-[4.3rem] text-foreground sm:text-[5.4rem] md:text-[7.4rem]">
            Selected work with a
            <span className="editorial-outline ml-2 inline-block">sharper presence</span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Websites, tools, and apps built for clarity, presence, and real use.
          </p>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-12">
            {projects.map((project, index) => {
              const layouts = [
                "lg:col-span-7",
                "lg:col-span-5 lg:pt-10",
                "lg:col-span-6",
                "lg:col-span-6 lg:pt-10",
                "lg:col-span-5",
                "lg:col-span-7 lg:pt-10",
              ];
              const layout = layouts[index % layouts.length];

              return (
                <ProjectPreviewCard
                  key={project.slug}
                  project={project}
                  priority={index === 0}
                  className={layout}
                  compact
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
