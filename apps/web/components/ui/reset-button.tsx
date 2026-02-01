"use client"

import { cn } from "@repo/utils"
import { useAnimate } from "motion/react"
import { Button, type PressEvent } from "react-aria-components"
import { LuRefreshCcw as RefreshIcon } from "react-icons/lu"
import { buttonVariants } from "./buttons"

export interface ResetButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "children"> {
  label: string
}

export function ResetButton({
  className,
  label,
  onPress,
  onPressStart,
  onPressEnd,
  ...rest
}: ResetButtonProps) {
  const [scope, animate] = useAnimate()

  const handlePress = (e: PressEvent) => {
    animate("svg", { rotate: [0, 20, -30, 0] }, { duration: 0.5 })
    onPress?.(e)
  }
  const handlePressStart = (e: PressEvent): void => {
    animate("svg", { scale: 0.95 }, { duration: 0 })
    onPressStart?.(e)
  }
  const handlePressEnd = (e: PressEvent): void => {
    animate("svg", { scale: 1 })
    onPressEnd?.(e)
  }

  return (
    <Button
      {...rest}
      aria-label={label}
      className={buttonVariants({
        size: "icon-sm",
        variant: "ghost",
        className: cn(className),
      })}
      onPress={handlePress}
      onPressEnd={handlePressEnd}
      onPressStart={handlePressStart}
      ref={scope} // TODO: use merge-ref
    >
      <RefreshIcon aria-hidden={true} />
      <span className="sr-only">{label}</span>
    </Button>
  )
}
