import type { Metadata } from "next";
import { contactChannels, getCanonicalUrl, isExternalHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chames Dhibi for freelance work, product design and development collaborations, and portfolio inquiries.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="pageShell pageStack">
      <section className="infoHero splitHero contactHero">
        <div>
          <span className="sectionLabel">Contact</span>
          <h1 className="pageTitle">Let's build something sharper than the default.</h1>
        </div>
        <p className="pageLead">
          If you need a landing page, portfolio, product surface, or a stronger visual system for an existing project,
          I'm open to freelance work and focused collaborations.
        </p>
      </section>

      <section className="contentPanel twoColumnPanel">
        <div>
          <span className="sectionLabel">Channels</span>
          <h2 className="panelTitle">Pick the fastest route</h2>
        </div>
        <div className="cardGrid twoAcross">
          {contactChannels.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contentCard actionCard"
              target={isExternalHref(item.href) ? "_blank" : undefined}
              rel={isExternalHref(item.href) ? "noreferrer" : undefined}
            >
              <span className="sectionLabel">{item.label}</span>
              <h3>{item.value}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="contentPanel contactPrompt">
        <span className="sectionLabel">Working together</span>
        <h2 className="panelTitle">Best fit for startup sites, personal brands, product launches, and redesigns that need more point of view.</h2>
      </section>
    </main>
  );
}
