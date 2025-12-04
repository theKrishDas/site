import { Container } from "@/components/container"
import { Spacer } from "@/components/spacer"
import About from "./local-components/About"
import { Newsletter } from "./local-components/Newsletter"
import Writings from "./local-components/Writings"

export default function Page() {
  return (
    <Container asChild>
      <main>
        <About />

        <Spacer className="h-1.5" />
        <Writings />

        <Spacer className="h-1.5" />
        <Newsletter />
      </main>
    </Container>
  )
}
