import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { contactChannels, getCanonicalUrl, isExternalHref, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dhibi Chames Eddine for product websites, portfolio redesigns, Flutter app work, and backend-powered digital products.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="pb-16">
      <section className="page-shell relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <p className="section-word pointer-events-none absolute left-0 top-20 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem] lg:text-[11rem]">
          Contact
        </p>
        <div className="relative z-10 max-w-5xl">
          <p className="eyebrow">Contact</p>
          <h1 className="display-monument mt-5 max-w-[13ch] text-[3.8rem] text-foreground sm:text-[4.8rem] md:text-[5.9rem] lg:text-[6.8rem]">
            For projects that need
            <span className="editorial-outline ml-2 inline-block">more presence</span>
            , not just a cleaner layout.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Open to product websites, portfolio redesigns, Flutter app work, and backend-powered experiences that need stronger hierarchy, better structure, and a more distinctive digital voice.
          </p>
        </div>
      </section>

      <section className="section-line overflow-hidden">
        <div className="page-shell grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="eyebrow">Best fit</p>
            <h2 className="editorial-title text-5xl text-foreground md:text-6xl">
              Launch-ready web work with a stronger point of view.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              If the project needs better rhythm, clearer positioning, and a result that still feels intentional across the interface, backend, and mobile experience, that is where I do my best work.
            </p>

            <div className="atmospheric-card panel-gradient max-w-md p-6">
              <p className="eyebrow">Primary contact</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-flex min-w-0 max-w-full items-center gap-3 text-xl text-foreground transition-colors hover:text-primary"
              >
                <span className="[overflow-wrap:anywhere]">{siteConfig.email}</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactChannels.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={isExternalHref(item.href) ? "_blank" : undefined}
                rel={isExternalHref(item.href) ? "noreferrer" : undefined}
                className={`atmospheric-card panel-gradient flex min-h-48 flex-col justify-between p-6 hover:bg-white/[0.06] ${
                  index % 2 === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-foreground/70">{item.label}</p>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-lg leading-7 text-foreground [overflow-wrap:anywhere]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
