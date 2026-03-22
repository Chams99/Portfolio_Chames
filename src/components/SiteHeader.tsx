"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 border-b border-white/8 bg-background/72 backdrop-blur-xl">
      <header className="page-shell">
        <nav
          className="flex items-center justify-between gap-4 py-5"
          aria-label="Main navigation"
        >
          <Link href="/" className="group">
            <div className="eyebrow text-foreground/75 transition-colors group-hover:text-foreground">
              Dhibi Chames Eddine
            </div>
            <div className="text-sm text-muted-foreground">Full-Stack Web & Mobile Developer</div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
}
