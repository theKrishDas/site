import { Footer } from "@/components/footer"
import { Spacer } from "@/components/spacer"
import { Header } from "@/components/upsher-header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {children}
      <Spacer className="flex-1" />
      <Footer />
    </>
  )
}
