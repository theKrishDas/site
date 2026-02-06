"use client"

import { Button as RacButton } from "react-aria-components"
import { IoArrowUp } from "react-icons/io5"
import { Preview } from "@/components/mdx/preview"
import { AnimatedRacButton } from "./animated-button"
import { Counter } from "./counter"
import { buttonClasses } from "./styles"

// Plain HTML <button>: click handler only; you own focus/press styles.
export const DefaultButtonCounter = () => (
  <Preview placement="center">
    <Counter.Root>
      {({ count, increment }) => (
        <>
          <button
            className={buttonClasses(["default-interactions"])}
            onClick={increment}
            type="button"
          >
            <IoArrowUp className="-ml-px" size={16.5} /> Count Up
          </button>
          <Counter.Display count={count} />
        </>
      )}
    </Counter.Root>
  </Preview>
)

// react-aria-components <Button>: uses `onPress` for mouse/touch/keyboard,
// and supports richer interaction states (hover/press + accessible focus).
export const RacButtonCounter = () => (
  <Preview placement="center">
    <Counter.Root>
      {({ count, increment }) => (
        <>
          <RacButton
            className={buttonClasses(
              ["rac-interactions", "rac-a11y-focus"],
              "tap-highlight-none touch-none select-none"
            )}
            onPress={increment}
          >
            <IoArrowUp className="-ml-px" size={16.5} /> Count Up
          </RacButton>
          <Counter.Display count={count} />
        </>
      )}
    </Counter.Root>
  </Preview>
)

// Animated react-aria-components <Button>: uses `onPress` for mouse/touch/keyboard,
// and supports richer interaction states (hover/press + accessible focus).
export const AnimatedRacButtonCounter = () => (
  <Preview placement="center">
    <Counter.Root>
      {({ count, increment }) => (
        <>
          <AnimatedRacButton onPress={increment}>
            <IoArrowUp className="-ml-px" size={16.5} /> Count Up
          </AnimatedRacButton>
          <Counter.Display count={count} />
        </>
      )}
    </Counter.Root>
  </Preview>
)
