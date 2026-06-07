import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { allSchemas } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const TITLE =
  "MP Electric Works | Electrical & Mechanical Engineering Solutions Since 2008";
const DESCRIPTION =
  "MP Electric Works is a leading electrical and mechanical engineering company in Dewas, Madhya Pradesh, providing CNC machining, fabrication, electrical panels, motor winding, HT/LT works and industrial engineering solutions since 2008.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | MP Electric Works",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: "Next.js",
  keywords: [
    "MP Electric Works",
    "Electrical Engineering Company",
    "Mechanical Engineering Company",
    "CNC Machining",
    "Fabrication Services",
    "Electrical Panel Manufacturer",
    "PCC Panels",
    "MCC Panels",
    "APFC Panels",
    "Industrial Automation",
    "Motor Winding",
    "HT LT Contractor",
    "Industrial Solutions",
    "Dewas",
    "Madhya Pradesh",
  ],
  category: "Industrial Engineering",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/substation-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "MP Electric Works — electrical substation at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/substation-sunset.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#06182b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
