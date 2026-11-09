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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://exceleduacademy.com"),
  title: "Excellence Education Academy | Premier Coaching & Academics in Goa",
  description:
    "Excellence Education Academy (Estd. 2025, Goa) provides premier academic coaching for Board Exams (CBSE, ICSE, Goa Board), NEET, JEE, Foundation courses, and Olympiads.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Excellence Education Academy | Goa",
    description:
      "Empowering students in Goa to achieve academic excellence through expert faculty, personalized mentorship, and proven curricula.",
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
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-[#BB9331]/20 selection:text-[#19364f]">
        {children}
      </body>
    </html>
  );
}
