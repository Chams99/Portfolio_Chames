"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <Link href="/" className="brandMark" aria-label="Go to home page">
        <span>CHAMES</span>
        <span>DHIBI</span>
      </Link>

      <nav className="siteNav" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navLink${isActive ? " navLinkActive" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}