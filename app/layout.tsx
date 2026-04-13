import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cowboy Drifters | Wyoming's Premier Fly Fishing Guides",
  description:
    "Experience world-class guided fly fishing on the Grey Reef, Miracle Mile, and North Platte River with Cowboy Drifters — Wyoming's premier fly fishing outfitter based in Casper.",
  openGraph: {
    title: "Cowboy Drifters | Wyoming's Premier Fly Fishing Guides",
    description:
      "Experience world-class guided fly fishing on the Grey Reef, Miracle Mile, and North Platte River with Cowboy Drifters — Wyoming's premier fly fishing outfitter based in Casper.",
    url: "https://wyocowboydrifters.com",
    siteName: "Cowboy Drifters",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cowboy Drifters",
  description:
    "Wyoming's premier fly fishing guide service offering guided trips on the Grey Reef, Miracle Mile, and North Platte River.",
  url: "https://wyocowboydrifters.com",
  telephone: "(307) 331-2031",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18187 Wyoming 220",
    addressLocality: "Casper",
    addressRegion: "WY",
    postalCode: "82604",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.8666,
    longitude: -106.3131,
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
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body text-foreground">
        {children}
      </body>
    </html>
  );
}
