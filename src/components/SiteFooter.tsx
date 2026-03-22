import Link from "next/link";
import { ReactBitsHelloMarquee } from "@/components/ReactBitsHelloMarquee";
import { contactChannels, helloMarquee, isExternalHref, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="section-line mt-24">
      <ReactBitsHelloMarquee texts={helloMarquee} />
      <div className="page-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow">Closing note</p>
            <h2 className="editorial-title max-w-xl text-4xl text-foreground md:text-6xl">
              Built for products and websites that need a sharper digital presence.
            </h2>
            <p className="max-w-lg text-base leading-7 text-muted-foreground">
              Strong UI direction, full-stack execution, and launch-ready thinking in one workflow.
            </p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Navigate</p>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Connect</p>
            <div className="flex flex-col gap-2">
              {contactChannels.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternalHref(item.href) ? "_blank" : undefined}
                  rel={isExternalHref(item.href) ? "noreferrer" : undefined}
                  className="link-underline w-fit text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}: {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-5 text-sm text-muted-foreground">
          Copyright {new Date().getFullYear()} Dhibi Chames Eddine
        </div>
      </div>
    </footer>
  );
}
