"use client"

import { useState } from "react"
import { Preview } from "@/components/mdx/preview"
import { ResetButton } from "@/components/ui/reset-button"
import { AnimatedRacButton } from "./buttons"

export function AnimationResetDemo() {
  const [key, setKey] = useState(0)

  return (
    <Preview className="h-32">
      <AnimatedRacButton key={key} useCssVariables={false} />

      <ResetButton
        className="absolute top-2 right-2"
        label="reset button styles"
        onPress={() => setKey((k) => k + 1)}
        size="icon-sm"
        variant="ghost"
      />
    </Preview>
  )
}
