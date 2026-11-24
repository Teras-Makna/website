import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.subtitle}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Teras Makna",
    "komunitas filsafat",
    "kesadaran",
    "neurosains",
    "spiritualitas",
    "sufisme",
    "kopdar",
    "kesehatan mental",
    "penyembuhan diri",
    "ruang refleksi",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.subtitle}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo-teras-makna.jpg",
        width: 1200,
        height: 675,
        alt: "Teras Makna — Ruang Refleksi & Kolaborasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.subtitle}`,
    description: siteConfig.tagline,
    images: ["/images/logo-teras-makna.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#091a2e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f3eb" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('teras-makna-theme');
    var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="dark"
      suppressHydrationWarning
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased selection:bg-[#d4b46a] selection:text-[#091a2e]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
