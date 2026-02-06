"use client"

import { useState } from "react"
import { LuMousePointerClick } from "react-icons/lu"

type CounterRenderProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  increment: () => void
}

function Root({
  children,
}: {
  children: (props: CounterRenderProps) => React.ReactNode
}) {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => (c >= 99 ? 0 : c + 1))

  return children({ count, setCount, increment })
}

// use render props instead of context
function Display({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Clicked {count} times</span>
      <span
        aria-hidden={true}
        className="-tracking-[0.01em] pointer-events-none absolute top-2 right-2 inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-0.5 rounded-full bg-ios-blue px-1.5 pr-1.75 font-medium text-white text-xs leading-none ring-2 ring-white dark:ring-neutral-950"
      >
        <LuMousePointerClick className="-ml-px mb-px" size="1.2em" />
        {count}
      </span>
    </div>
  )
}

const Counter = { Root, Display }
export { Counter }
