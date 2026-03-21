import { contactChannels, isExternalHref } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full bg-background border-t-4 border-foreground mt-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 z-10 relative">
      <div className="flex flex-col gap-2 max-w-md">
        <span className="inline-block bg-primary text-primary-foreground font-black uppercase text-sm px-3 py-1 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--brutal-shadow)] w-fit mb-2">
          Portfolio v3
        </span>
        <p className="text-lg font-bold uppercase tracking-tight text-foreground/80 leading-snug">
          A sharper standalone direction built beside portfolio v2.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {contactChannels.slice(0, 3).map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 bg-card text-card-foreground border-2 border-foreground px-4 py-2 font-black uppercase text-sm tracking-widest shadow-[4px_4px_0px_0px_var(--brutal-shadow)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_var(--brutal-shadow)] hover:bg-secondary hover:text-secondary-foreground transition-all active:translate-x-0 active:translate-y-0 active:shadow-none group"
            target={isExternalHref(item.href) ? "_blank" : undefined}
            rel={isExternalHref(item.href) ? "noreferrer" : undefined}
          >
            {item.label}
            {isExternalHref(item.href) && <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
          </a>
        ))}
      </div>
    </footer>
  );
}
