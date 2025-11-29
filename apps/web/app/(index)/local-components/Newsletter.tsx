"use client"
import { api } from "@repo/backend/convex/_generated/api.js"
import { cn, wait } from "@repo/utils"
import { useMutation } from "convex/react"
import { useState } from "react"
import { Heading } from "@/components/section-heading"
import { Spinner } from "@/components/spinner"

export function Newsletter() {
  const [showGreetings, setShowGreetings] = useState(false)
  async function postSubscriptionAction() {
    // show greetings for 3 seconds
    setShowGreetings(true)
    await wait(3000)
    setShowGreetings(false)
  }

  return (
    <>
      <Heading>Newsletter</Heading>
      <section className="prose">
        <p>
          Exclusive, newsletter-only content once a month. No spam, no nonsense.
        </p>

        {showGreetings ? (
          <Greeting />
        ) : (
          <Input onSubscriptionComplete={postSubscriptionAction} />
        )}
      </section>
    </>
  )
}

function Input(props: { onSubscriptionComplete?: (email: string) => void }) {
  const addSubscriber = useMutation(api.subscriber.addSubscriber)
  const [email, setEmail] = useState("")
  const [isSubscribing, setSubscribing] = useState(false)
  const { onSubscriptionComplete } = props
  return (
    <div
      className="flex h-13 w-full items-center gap-2 rounded border border-gray-6 pr-1 md:h-10.5"
      style={
        {
          borderRadius: "16px",
          cornerShape: "squircle",
        } as React.CSSProperties
      }
    >
      <input
        className="h-full min-w-0 flex-1 pl-3.5 outline-none"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="email"
        value={email}
      />
      <button
        className="relative h-10 cursor-default touch-none select-none rounded-lg bg-ios-blue px-3 font-sfpro text-[0.9rem] text-white md:h-8 md:px-2.5"
        onClick={async () => {
          setSubscribing(true)
          await wait(500) // artificial delay?
          addSubscriber({
            email: "", // TODO: intentionaly cause error to prevent storing in DB for testing
            source: "home_footer",
          })
          setEmail("")
          setSubscribing(false)
          onSubscriptionComplete?.(email)
        }}
        style={
          {
            borderRadius: "12px",
            cornerShape: "squircle",
          } as React.CSSProperties
        }
        type="button"
      >
        <span className={cn(isSubscribing ? "opacity-0" : "")}>Subscribe</span>
        {isSubscribing ? (
          <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
            <Spinner />
          </span>
        ) : null}
      </button>
    </div>
  )
}

function Greeting() {
  return (
    <div
      className="flex h-13 w-full items-center rounded bg-ios-blue/12 px-4 text-ios-blue md:h-10.5"
      style={
        {
          borderRadius: "16px",
          cornerShape: "squircle",
        } as React.CSSProperties
      }
    >
      <span className="-tracking-[0.01em] font-sfpro">
        Thanks for subscribing.
      </span>
    </div>
  )
}
