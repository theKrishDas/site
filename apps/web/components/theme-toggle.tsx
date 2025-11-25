"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const themes = ["light", "dark", "system"] as const
export type Theme = (typeof themes)[number]

const themeIcons: Record<Theme, string> = {
  light: "􀆮",
  dark: "􀡍", // "􀆺",
  system: "􀙗",
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
    <span
      aria-hidden
      className="pointer-events-none mr-1 select-none font-sfpro"
    >
      {icon}
    </span>
  )

  return (
    <button
      className="group/theme-toggle-button relative isolate"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <span className="select-none font-jetbrains-mono font-normal text-label-tertiary text-sm uppercase tracking-tight transition-colors group-hover/theme-toggle-button:text-label-primary">
        <Icon />
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
