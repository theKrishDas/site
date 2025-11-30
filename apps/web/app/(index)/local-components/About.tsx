import { SocialIcon } from "./Socials"

export default function About() {
  return (
    <section className="prose">
      {/* About upsher */}
      <p>Hey, I'm Upsher. I build things for the web.</p>
      <p>
        I'm a webapp engineer focused on crafting useful, high-performance apps.
        I obsess over the user experience, how an app feels and behaves.
      </p>
      <p>
        I love simple and functional interfaces. I believe in the power of
        simple, expressive code and the magic of a seamless user experience.
      </p>

      {/* interactive social links */}
      <p className="[&>.socialicon]:mx-0.5">
        You can check out my work on{" "}
        <SocialIcon platform="twitter" url="https://x.com/theupsher" />, view my
        code on{" "}
        <SocialIcon platform="github" url="https://github.com/krish-das" />, or
        just say hello via{" "}
        <SocialIcon platform="email" url="mailto:thekrishdas@gmail.com" />.
      </p>
    </section>
  )
}
