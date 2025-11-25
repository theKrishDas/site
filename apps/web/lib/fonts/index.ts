import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

export const sfPro = localFont({
  // biome-ignore format: preserve array layout
  src: [
    { path: "../../public/fonts/SFProText/SFProText-Ultralight.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Thin.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Heavy.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/SFProText/SFProText-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-sfpro",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "sans-serif",
  ],
})

export const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "sans-serif",
  ],
})

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  fallback: [
    "Georgia",
    "Times New Roman",
    "Times",
    "serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ],
})

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  fallback: [
    "SFMono",
    "Menlo",
    "Monaco",
    "Consolas",
    "ui-monospace",
    "monospace",
  ],
})
