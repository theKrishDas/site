"use client"

import { useAnimate } from "motion/react-mini"
import {
  Button as RacButton,
  type ButtonProps as RacButtonProps,
} from "react-aria-components"
import { buttonClasses } from "@/content/writings/overengineer-button-component/demos/styles"

/**
 * Demo-only props.
 *
 * These props are intentionally shipped to production **only** to support
 * interactive examples in articles.
 *
 * They must NOT be used to build or affect the actual application UI.
 */
export interface AnimatedRacButtonDemoOnlyProps {
  noAnimationReset?: boolean
  useCssVariables?: boolean
}
export function AnimatedRacButton({
  className,
  noAnimationReset = false,
  useCssVariables = true,
  ...rest
}: RacButtonProps & AnimatedRacButtonDemoOnlyProps) {
  const [scope, animate] = useAnimate()
  const animatePressStart = (): void => {
    animate(
      scope.current,
      {
        scale: 0.97,
        backgroundColor: useCssVariables
          ? "var(--button-bg-pressed)"
          : "var(--color-gray-4)",
      },
      { duration: noAnimationReset ? undefined : 0 }
    )
  }
  const animatePressEnd = (): void => {
    animate(scope.current, {
      scale: 1,
      backgroundColor: useCssVariables
        ? "var(--button-bg-idle)"
        : "var(--color-gray-2)",
    })
  }

  return (
    <RacButton
      className={buttonClasses(
        ["rac-a11y-focus"],
        [
          "tap-highlight-none static select-none",
          useCssVariables ? "" : "bg-fill-tertiary",
        ]
      )}
      onPressEnd={animatePressEnd}
      onPressStart={animatePressStart}
      ref={scope}
      {...rest}
    />
  )
}
