import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

const siteUrl = "https://pasaproductions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pasa Productions | Leading Film & Video Production Company in Nepal",
    template: "%s | Pasa Productions Nepal",
  },
  description:
    "Pasa Productions is Nepal's premier film and video production company. We specialize in TV commercials, music videos, documentaries, and corporate films. Award-winning production house based in Kathmandu with 16+ years of experience.",
  keywords: [
    "Pasa Productions",
    "production company Nepal",
    "film production Nepal",
    "video production Kathmandu",
    "TV commercial production Nepal",
    "music video production Nepal",
    "documentary filmmaking Nepal",
    "corporate video Nepal",
    "ad agency Nepal",
    "film company Nepal",
    "best production house Nepal",
    "Nepali film production",
    "cinematography Nepal",
    "video production house Kathmandu",
  ],
  authors: [{ name: "Pasa Productions", url: siteUrl }],
  creator: "Pasa Productions",
  publisher: "Pasa Productions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pasa Productions",
    title: "Pasa Productions | Leading Film & Video Production Company in Nepal",
    description:
      "Nepal's premier film and video production company. TV commercials, music videos, documentaries & corporate films. Award-winning production house in Kathmandu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pasa Productions - Film & Video Production Company in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasa Productions | Film & Video Production Company in Nepal",
    description:
      "Nepal's premier film and video production company. TV commercials, music videos, documentaries & corporate films.",
    images: ["/og-image.png"],
  },
  icons: {
    shortcut: "/favicon.png",
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "Film Production",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProductionCompany",
  name: "Pasa Productions",
  description:
    "Nepal's premier film and video production company specializing in TV commercials, music videos, documentaries, and corporate films.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: `${siteUrl}/og-image.png`,
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  areaServed: {
    "@type": "Country",
    name: "Nepal",
  },
  sameAs: ["https://www.instagram.com/pasaproductions"],
  knowsAbout: [
    "Film Production",
    "Video Production",
    "TV Commercials",
    "Music Videos",
    "Documentary Filmmaking",
    "Corporate Videos",
    "Cinematography",
    "Post Production",
    "Sound Design",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Production Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TV Commercial Production",
          description: "High-end TVC production with cinematic quality",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Music Video Production",
          description: "Creative music video production for artists",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Documentary Filmmaking",
          description: "Compelling documentary films and series",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Video Production",
          description: "Professional corporate videos and brand films",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
