import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Mono, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getCanonicalUrl, siteConfig } from "@/data/site";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMonoHeading = JetBrains_Mono({subsets:['latin'],variable:'--font-heading'});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  keywords: [
    siteConfig.name,
    "Full-stack developer",
    "Next.js portfolio",
    "React portfolio",
    "Web designer and developer",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: getCanonicalUrl("/"),
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#ff5a36",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", geist.variable, "font-mono", geistMono.variable, jetbrainsMonoHeading.variable)}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:p-4 focus:bg-primary focus:text-primary-foreground focus:font-bold focus:border-4 focus:border-foreground focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0_0_var(--brutal-shadow)]">Skip to content</a>
          <div className="appFrame">
            <SiteHeader />
            <div id="main-content" tabIndex={-1}>
              {children}
            </div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
