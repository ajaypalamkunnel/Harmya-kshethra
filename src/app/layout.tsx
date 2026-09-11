import type { Metadata, Viewport } from "next";
import "./globals.css";
import { companyInfo } from "@/data/companyInfo";
import { JSONLD } from "@/components/JSONLD";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: companyInfo.seo.title,
  description: companyInfo.seo.description,
  keywords: companyInfo.seo.keywords,
  authors: [{ name: "HARMYA KSHETHRA" }],
  creator: "HARMYA KSHETHRA",
  publisher: "HARMYA KSHETHRA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harmyakshethra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: companyInfo.seo.title,
    description: companyInfo.seo.description,
    url: "https://harmyakshethra.com",
    siteName: companyInfo.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "HARMYA KSHETHRA Luxury Architecture Studio Ramapuram Kottayam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.seo.title,
    description: companyInfo.seo.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JSONLD />
      </head>
      <body className="bg-dark text-white font-sans antialiased selection:bg-gold selection:text-dark">
        {children}
      </body>
    </html>
  );
}
