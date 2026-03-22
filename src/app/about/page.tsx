import type { Metadata } from "next";
import Image from "next/image";
import { AboutExperienceStack } from "@/components/AboutExperienceStack";
import { EditorialSpotlightCard } from "@/components/EditorialSpotlightCard";
import { experience, getCanonicalUrl, principles, processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dhibi Chames Eddine, the full-stack web and mobile background behind the work, and the approach that connects product thinking, interface design, and backend-aware implementation.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main className="pb-16">
      <section className="page-shell relative overflow-hidden py-12 md:py-20">
        <p className="section-word pointer-events-none absolute left-0 top-12 text-[5rem] sm:text-[7rem] md:text-[12rem]">
          About
        </p>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="display-monument mt-5 text-[4.3rem] text-foreground sm:text-[5.4rem] md:text-[7rem]">
              Building digital work that feels
              <span className="editorial-outline ml-2 inline-block">precise</span>
              ,
              <br />
              emotional, and considered.
            </h1>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-muted-foreground">
              <p>
                My work sits between product thinking, interface design, and the implementation instincts that help ideas survive contact with production. I care about what a site says, but also about how it moves, how it breathes, how the data flows, and how quickly it earns belief across both web and mobile products.
              </p>
              <p>
                That mix comes from working across both design and development, backed by current computer science studies at Universite de Gafsa and ongoing freelance product work. The point is never decoration for its own sake. It is a stronger presence, a clearer narrative, and a product that still feels deliberate once the UI, backend, and real usage all meet.
              </p>
            </div>
          </div>

          <div className="relative min-h-[34rem]">
            <div className="image-frame absolute inset-x-10 top-8 bottom-16 -rotate-[4deg]">
              <Image
                src="/images/avatar.webp"
                alt="Portrait of Chames Dhibi"
                fill
                className="object-cover"
              />
            </div>

            <div className="atmospheric-card absolute left-0 top-0 max-w-xs p-5">
              <p className="eyebrow">Current direction</p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Next.js websites, Flutter apps, backend-aware products, and cleaner digital storytelling for real users.
              </p>
            </div>

            <div className="atmospheric-card absolute bottom-0 right-0 max-w-sm p-5">
              <p className="eyebrow text-primary">What matters most</p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                A premium result should still feel calm, legible, and ready to ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute right-0 top-10 text-[5rem] sm:text-[7rem] md:text-[11rem]">
            Values
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Principles</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item, index) => (
                <EditorialSpotlightCard
                  key={item.title}
                  className={index === 1 ? "md:translate-y-12" : ""}
                  contentClassName="p-7"
                  delay={index * 0.06}
                >
                  <article>
                  <h2 className="text-2xl text-foreground">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{item.body}</p>
                  </article>
                </EditorialSpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute left-0 top-10 text-[5rem] sm:text-[7rem] md:text-[11rem]">
            Path
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Experience</p>
            </div>
            <AboutExperienceStack items={experience} />
          </div>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell relative py-16 md:py-20">
          <p className="section-word pointer-events-none absolute right-0 top-16 text-[5rem] sm:text-[7rem] md:text-[10rem]">
            Process
          </p>
          <div className="max-w-3xl">
            <p className="eyebrow">How I work</p>
            <h2 className="display-monument mt-4 text-[3.8rem] text-foreground sm:text-[4.8rem] md:text-[6rem]">
              Calm process.
              <span className="editorial-outline ml-2 inline-block">Sharper result.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <EditorialSpotlightCard
                key={step.label}
                className={index % 2 === 1 ? "md:translate-y-10" : ""}
                contentClassName="panel-gradient p-7"
                delay={index * 0.06}
              >
                <article>
                  <p className="eyebrow text-primary">{step.label}</p>
                  <h3 className="mt-4 text-2xl text-foreground">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{step.body}</p>
                </article>
              </EditorialSpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
