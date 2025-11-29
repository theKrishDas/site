import { api } from "@repo/backend/convex/_generated/api.js"
import { cn, wait } from "@repo/utils"
import { useForm } from "@tanstack/react-form"
import { useMutation } from "convex/react"
import { useState } from "react"
import z from "zod"
import { Spacer } from "@/components/spacer"
import { Spinner } from "@/components/spinner"

// TODO: put it somewhere relevant!
const schema = z.object({ email: z.email() })

export function NewsletterForm(props: {
  onSubscriptionComplete?: (email: string) => void
}) {
  // Props
  const { onSubscriptionComplete } = props

  // Hooks
  const addSubscriber = useMutation(api.subscriber.addSubscriber)
  const [isSubscribing, setSubscribing] = useState(false)
  const form = useForm({
    defaultValues: { email: "" },
    validators: { onBlur: schema },
    onSubmit: async ({ value: { email } }) => {
      setSubscribing(true)
      await wait(700) // add artificial delay?
      addSubscriber({
        email,
        source: "home_footer",
      })
      setSubscribing(false)
      onSubscriptionComplete?.(form.state.values.email)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <form.Field name="email">
        {(field) => {
          const isValid = field.state.meta.isValid
          return (
            <div className="">
              {/* input wraper: contains input and submit button */}
              <div
                className={cn(
                  "flex h-13 w-full items-center gap-2 rounded border border-gray-6 pr-1 md:h-10.5",
                  isValid ? "" : "border-ios-red/80 ring-3 ring-ios-red/30"
                )}
                style={
                  {
                    borderRadius: "16px",
                    cornerShape: "squircle",
                  } as React.CSSProperties
                }
              >
                {/* make label visible to screen-readers only */}
                <label className="sr-only" htmlFor={field.name}>
                  Email:
                </label>
                <input
                  className="h-full min-w-0 flex-1 pl-3.5 outline-none"
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  value={field.state.value}
                />

                {/* submit button */}
                <button
                  className="relative h-10 cursor-default touch-none select-none rounded-lg bg-ios-blue px-3 font-sfpro text-[0.9rem] text-white md:h-8 md:px-2.5"
                  style={
                    {
                      borderRadius: "12px",
                      cornerShape: "squircle",
                    } as React.CSSProperties
                  }
                  type="submit"
                >
                  {/* always render the label but hide when subscribing */}
                  <span className={cn(isSubscribing ? "opacity-0" : "")}>
                    Subscribe
                  </span>
                  {/* only render the spinner when subscribing */}
                  {isSubscribing ? (
                    <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                      <Spinner />
                    </span>
                  ) : null}
                </button>
              </div>

              {/** biome-ignore lint/nursery/noLeakedRender: This conditional render is safe; no values leak between renders. */}
              {form.state.isSubmitted && form.state.errors?.length && (
                <>
                  <Spacer className="h-2" />
                  <span className="-tracking-[0.01em] font-sfpro text-ios-red">
                    Something went wrong please try again later!
                  </span>
                </>
              )}
            </div>
          )
        }}
      </form.Field>
    </form>
  )
}
