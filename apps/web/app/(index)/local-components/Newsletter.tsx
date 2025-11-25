import { Heading } from "@/components/section-heading"

export function Newsletter() {
  return (
    <>
      <Heading>Newsletter</Heading>
      <section className="prose">
        <p>
          Exclusive, newsletter-only content once a month. No spam, no nonsense.
        </p>
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
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="h-10 cursor-default touch-none select-none rounded-lg bg-ios-blue px-3 font-sfpro text-[0.9rem] text-white md:h-8 md:px-2.5"
            style={
              {
                borderRadius: "12px",
                cornerShape: "squircle",
              } as React.CSSProperties
            }
            type="button"
          >
            Subscribe
          </button>
        </div>
      </section>
    </>
  )
}
