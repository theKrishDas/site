"use client"

import { motion } from "motion/react"
import { Link } from "react-aria-components"
import { cn } from "tailwind-variants"
import {
  MaterialSymbolsAlternateEmail,
  MingcuteGithubFill,
  RiTwitterXLine,
} from "@/components/icons"

export const SocialIcon = ({
  platform,
  url,
  className,
}: {
  platform: "twitter" | "github" | "email"
  url: string
  className?: string
}) => {
  const labels: Record<typeof platform, string> = {
    twitter: "X",
    github: "GitHub",
    email: "Email",
  }
  const label = labels[platform]

  const icons: Record<typeof platform, React.ReactNode> = {
    twitter: <RiTwitterXLine />,
    github: <MingcuteGithubFill />,
    email: <MaterialSymbolsAlternateEmail />,
  }
  const icon = icons[platform]

  const backgroundClasses: Record<typeof platform, string> = {
    twitter: "bg-foreground text-background",
    email: "bg-ios-red text-white",
    github: "bg-ios-blue text-white",
  }

  const loopTransition = {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    ease: "easeInOut",
  } as const

  return (
    <Link
      className={cn(
        "not-prose group/social-link [--icon-size:1.5rem]",
        className
      )}
      href={url}
      target="_blank"
    >
      {({ isHovered }) => (
        <>
          <span
            aria-hidden={true}
            className="pointer-events-none relative mr-1 mb-px ml-px hidden size-(--icon-size) select-none align-middle md:inline-block"
          >
            <motion.span
              animate={isHovered ? "hover" : "idle"}
              className={cn(
                "-translate-y-1/2 corner-squircle absolute top-1/2 inline-grid size-(--icon-size) origin-center place-content-center rounded-xl",
                backgroundClasses[platform]
              )}
              initial="idle"
              variants={{
                idle: { scale: 1, rotate: 0, y: 0, x: 0 },
                hover: {
                  scale: 1.125,
                  rotate: [null, 3, -3],
                  y: [null, 0.65, -0.65],
                  x: [null, 0.35, -0.6],

                  transition: {
                    rotate: { ...loopTransition, duration: 5 },
                    y: { ...loopTransition, duration: 2 },
                    x: { ...loopTransition, duration: 3.5 },
                  },
                },
              }}
            >
              {icon}
            </motion.span>
          </span>

          <span
            className={cn(
              "font-medium text-foreground underline decoration-[1.5px] decoration-label-tertiary underline-offset-[3.5px] transition-opacity duration-200",
              isHovered ? "opacity-80" : null
            )}
          >
            {label}
          </span>
        </>
      )}
    </Link>
  )
}
