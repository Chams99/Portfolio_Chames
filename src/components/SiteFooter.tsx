import { contactChannels, isExternalHref } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <span className="sectionLabel">Portfolio v3</span>
        <p className="footerCopy">A sharper standalone direction built beside portfolio v2.</p>
      </div>
      <div className="footerLinks">
        {contactChannels.slice(0, 3).map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={isExternalHref(item.href) ? "_blank" : undefined}
            rel={isExternalHref(item.href) ? "noreferrer" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
