import "@repo/ui/styles.css"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Spacer } from "@/components/spacer"
import { Header } from "@/components/upsher-header"
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
        <Provider>
          <Header />
          {children}

          <Spacer className="flex-1" />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
