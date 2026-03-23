import type { Metadata } from "next";
import Image from "next/image";
import { AboutExperienceStack } from "@/components/AboutExperienceStack";
import { EditorialSpotlightCard } from "@/components/EditorialSpotlightCard";
import { experience, getCanonicalUrl, principles, processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dhibi Chames Eddine, a full-stack web and mobile developer building products across frontend, backend, and mobile.",
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
              Building products that stay
              <span className="editorial-outline ml-2 inline-block">usable</span>
              ,
              <br />
              fast, and reliable.
            </h1>
            <div className="mt-8 grid gap-5 text-base leading-7 text-muted-foreground">
              <p>
                I work across frontend, backend, and mobile, so the product work is always tied to real implementation.
              </p>
              <p>
                That comes from current computer science studies at Universite de Gafsa and ongoing freelance work across web, mobile, and APIs.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-rows-[auto_1fr_auto]">
            <div className="ml-auto max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
              <p className="eyebrow text-white/70">Current direction</p>
              <p className="mt-2 text-sm leading-6 text-white/86">
                Next.js, Flutter, Node.js, and products built for real users.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[31rem]">
              <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-[2.6rem]">
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <Image
                  src="/images/avatar.webp"
                  alt="Portrait of Chames Dhibi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
              <p className="eyebrow text-primary">What matters most</p>
              <p className="mt-2 text-sm leading-6 text-white/82">
                The product should be clear, stable, and ready to ship.
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
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.body}</p>
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
              Clear process.
              <span className="editorial-outline ml-2 inline-block">Better result.</span>
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
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </article>
              </EditorialSpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
