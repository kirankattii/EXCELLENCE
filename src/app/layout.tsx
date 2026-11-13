import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#175CD3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://exceleduacademy.com"),
  title: "Excellence Education Academy | Goa's Leading Culinary & Hospitality Academy",
  description:
    "Goa's first CTH-accredited culinary and hospitality institute. Professional Diplomas & Certificates in Culinary Skills, Patisserie, Cruise Hospitality, Front Office, and Bartending with 100% placement assistance.",
  keywords: [
    "Culinary Academy Goa",
    "Hospitality Institute Goa",
    "CTH Accredited Culinary School",
    "Diploma in Culinary Skills Goa",
    "Patisserie courses Goa",
    "Cruise ship hospitality training",
    "Chef training institute Goa",
    "Excellence Education Academy",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Excellence Education Academy | Goa's Leading Culinary & Hospitality Academy",
    description:
      "Goa's first CTH-accredited institute for culinary arts, pastry, cruise line hospitality, and hotel management with dedicated placement assistance.",
    url: "https://exceleduacademy.com",
    siteName: "Excellence Education Academy",
    images: [
      {
        url: "/logo1.png",
        width: 1080,
        height: 900,
        alt: "Excellence Education Academy Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-[#D4F85A] selection:text-[#0A1118]">
        {children}
      </body>
    </html>
  );
}
