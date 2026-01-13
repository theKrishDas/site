import "./globals.css"
import { instrumentSerif, inter, jetbrainsMono, sourceSerif } from "@/lib/fonts"
import { siteMetadata } from "@/lib/metadata"
import Provider from "./provider"

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
