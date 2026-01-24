"use client"

import { motion } from "motion/react"
import { Button } from "react-aria-components"
import { BiCopy } from "react-icons/bi"
import { HiMiniCheckCircle } from "react-icons/hi2"
import useClipboard from "react-use-clipboard"

const CopyIcon = motion.create(BiCopy)
const CheckIcon = motion.create(HiMiniCheckCircle)

const transition = { type: "spring" } as const
const variants = {
  visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition },
  hidden: { scale: 0.87, opacity: 0, filter: "blur(2px)", transition },
} as const

export function CopyButton({ value }: { value: string }) {
  const [isCopied, setCopied] = useClipboard(value, {
    successDuration: 1300,
  })

  return (
    <>
      <span
        aria-hidden={true}
        className="--ui-filename-copy-icon ui:relative ui:inline-grid ui:h-full ui:w-fit ui:place-content-center ui:border-inherit ui:border-l ui:px-0.75 ui:text-label-secondary"
      >
        <CopyIcon
          animate={isCopied ? "hidden" : "visible"}
          aria-hidden={true}
          initial={false}
          strokeWidth={0}
          variants={variants}
        />
        <CheckIcon
          animate={isCopied ? "visible" : "hidden"}
          aria-hidden={true}
          className="ui:-translate-1/2 ui:absolute ui:top-1/2 ui:left-1/2 ui:text-ios-blue"
          initial={false}
          strokeWidth={0}
          variants={variants}
        />
      </span>
      <Button
        aria-label={isCopied ? "copied!" : "copy filename"}
        className="--ui-filename-copy-button ui:corner-squircle ui:-inset-px ui:absolute ui:cursor-copy ui:select-none ui:rounded-lg ui:outline-none ui:ring-ios-blue ui:data-focus-visible:ring-3"
        onPress={setCopied}
      />
    </>
  )
}
