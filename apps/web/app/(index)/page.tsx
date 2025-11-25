import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Spacer } from "@/components/spacer"
import { Header } from "@/components/upsher-header"
import { Newsletter } from "./local-components/Newsletter"
import { SocialIcon } from "./local-components/Socials"
import Writings from "./local-components/Writings"

export default function Page() {
  return (
    <>
      <Header />

      <Container asChild>
        <main>
          <section className="prose">
            <p>
              I work on the Web team at Linear. I like to build things for
              designers and developers, think deeply about the user interface,
              how it looks, feels, behaves.
            </p>
            <p>Previously, I worked on the design team at Vercel.</p>
            <p>
              In the past 2 years, I've worked at various startups products and
              large enterprise level companies. Here's a brief overview.
            </p>
            <p className="[&>.socialicon]:mx-0.5">
              You can see more of my work on{" "}
              <SocialIcon platform="twitter" url="https://x.com/theupsher" />,
              view my code on{" "}
              <SocialIcon
                platform="github"
                url="https://github.com/krish-das"
              />
              , and reach me via{" "}
              <SocialIcon platform="email" url="mailto:thekrishdas@gmail.com" />
              .
            </p>
          </section>

          <Spacer className="h-1.5" />
          <Writings />

          <Spacer className="h-1.5" />
          <Newsletter />
        </main>
      </Container>

      <Footer />
    </>
  )
}
