import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
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
