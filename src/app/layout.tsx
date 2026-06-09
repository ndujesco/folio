import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://ndujekwu.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Peter Ndujekwu, Full-Stack Software Engineer",
  description:
    "Peter Ndujekwu is a full-stack software engineer (React, Next.js, Node.js, NestJS, FastAPI), Zecathon 2025 grand-prize winner with Team TrustLoop, and Technical Lead of UNILAG's Claude Builder Club.",
  keywords: [
    "Peter Ndujekwu", "Full-stack engineer", "Software engineer", "Next.js",
    "Node.js", "NestJS", "FastAPI", "TrustLoop", "Zecathon", "Claude Builder Club", "UNILAG",
  ],
  authors: [{ name: "Peter Ndujekwu" }],
  openGraph: {
    type: "profile",
    title: "Peter Ndujekwu, Full-Stack Software Engineer",
    description:
      "Full-stack engineer · Zecathon 2025 winner (Team TrustLoop) · Technical Lead, Claude Builder Club UNILAG.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Peter Ndujekwu, Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ugo_jekwu",
    title: "Peter Ndujekwu, Full-Stack Software Engineer",
    description:
      "Full-stack engineer · Zecathon 2025 winner · Technical Lead, Claude Builder Club UNILAG.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
