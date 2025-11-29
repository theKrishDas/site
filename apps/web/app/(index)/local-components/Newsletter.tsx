"use client"

import { wait } from "@repo/utils"
import { useState } from "react"
import { Heading } from "@/components/section-heading"
import { NewsletterForm as Form } from "./NewsletterForm"

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
          <Form onSubscriptionComplete={postSubscriptionAction} />
        )}
      </section>
    </>
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
