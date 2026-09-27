import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Egypt Gas — Engineered End to End | غاز مصر",
  description:
    "Egypt's largest natural gas distributor and EPC contractor since 1983. Networks, stations, connections, operation and maintenance. Independent digital concept by GrindCTRL.",
  metadataBase: new URL("https://egyptgas.grindctrl.cloud"),
  openGraph: {
    title: "Egypt Gas — Engineered End to End",
    description:
      "Survey, design, build, connect, operate, maintain. One national infrastructure company.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#060d18",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${arabic.variable} ${plexMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
