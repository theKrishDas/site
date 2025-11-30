import type { Metadata } from "next"
import { baseURL } from "./constants"

const creator = "Upsher" as const
const title = "Upsher - Webapp engineer" as const
const description = "Webapp engineer, optimist, living in India" as const
const siteName = "Upsher - Webapp engineer" as const

const OGAltText = "Upsher - Webapp engineer" as const
const twitterHandle = "@theupsher" as const

export const siteMetadata: Metadata = {
  title: {
    default: title,
    template: "%s - by Upsher",
  },
  description,
  keywords: [
    "Krish Das",
    "Upsher",
    "Webapp engineer",
    "Web App developer",
    "Web Application developer",
    "Web developer",
    "Next.js",
    "React",
    "Next.js Developer",
    "React Developer",
    "Tailwind Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "JavaScript",
    "Web Developer Portfolio",
    "portfolio",
  ],
  authors: [{ name: creator, url: baseURL }],
  creator,
  openGraph: {
    title,
    description,
    url: baseURL,
    siteName,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: OGAltText,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: twitterHandle,
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: OGAltText,
      },
    ],
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
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: "/",
  },
}
