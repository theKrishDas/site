"use client"

import { Button as RacButton } from "react-aria-components"
import { LuMousePointerClick } from "react-icons/lu"
import { MdCenterFocusStrong } from "react-icons/md"
import { PiWaveformBold } from "react-icons/pi"
import {
  AnimatedRacButton as AnimatedButton,
  type AnimatedRacButtonDemoOnlyProps,
} from "./animated-button"
import { buttonClasses } from "./styles"

export const DefaultBasicButton = () => (
  <button className={buttonClasses()} type="button">
    <PiWaveformBold className="-ml-px" size={16.5} />
    Start listening
  </button>
)

export const RacBasicButton = () => (
  <RacButton className={buttonClasses()}>
    <LuMousePointerClick className="-ml-px" size={17} /> Press
  </RacButton>
)

export const RacHoverPressButton = () => (
  <RacButton className={buttonClasses(["rac-interactions"])}>
    <LuMousePointerClick className="-ml-px" size={17} /> Press
  </RacButton>
)

export const RacA11yFocusButton = () => (
  <RacButton className={buttonClasses(["rac-interactions", "rac-a11y-focus"])}>
    <MdCenterFocusStrong className="-ml-px" size={17} /> Focus
  </RacButton>
)

export const AnimatedRacButton = (props: AnimatedRacButtonDemoOnlyProps) => (
  <AnimatedButton {...props}>
    <LuMousePointerClick className="-ml-px" size={17} /> Press
  </AnimatedButton>
)
