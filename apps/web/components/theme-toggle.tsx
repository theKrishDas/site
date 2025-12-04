"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IoIosSunny as SunIcon } from "react-icons/io"
import { MdOutlineDesktopWindows as SystemIcon } from "react-icons/md"
import { WiMoonAltWaxingCrescent4 as MoonIcon } from "react-icons/wi"

export const themes = ["light", "dark", "system"] as const
export type Theme = (typeof themes)[number]

const themeIcons: Record<Theme, React.ReactNode> = {
  light: <SunIcon size={16} />,
  dark: <MoonIcon size={17} />,
  system: <SystemIcon />,
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return
  const icon = themeIcons[theme as Theme]
  const Icon = () => (
    <span aria-hidden className="pointer-events-none select-none">
      {icon}
    </span>
  )

  return (
    <button
      className="group/theme-toggle-button relative isolate inline-flex select-none items-center gap-1 text-label-tertiary transition-colors hover:text-label-primary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Icon />
      <span className="font-jetbrains-mono font-normal text-sm uppercase tracking-tight">
        {theme}
      </span>
      <span
        className="-inset-y-1 -inset-x-3 -z-1 absolute bg-fill-secondary opacity-0 group-hover/theme-toggle-button:opacity-100"
        style={
          {
            borderRadius: "14px",
            cornerShape: "squircle",
          } as React.CSSProperties
        }
      />
    </button>
  )
}
