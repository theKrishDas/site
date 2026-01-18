export interface KbdProps extends React.ComponentProps<"kbd"> {}

/**
 * Heavily inspired by base-ui - https://github.com/mui/base-ui/blob/master/docs/src/components/Kbd
 */
export function Kbd({ className, ...rest }: KbdProps) {
  return (
    <kbd
      className={`--ui-kbd ui:relative ui:top-[-0.03em] ui:mx-px ui:box-border ui:inline-flex ui:h-fit ui:min-w-[1.75em] ui:shrink-0 ui:items-center ui:justify-center ui:whitespace-nowrap ui:rounded-[0.325em] ui:bg-neutral-50 ui:px-[0.5em] ui:py-[0.025em] ui:align-top ui:font-mono ui:font-normal ui:text-[0.8em] ui:text-neutral-700 ui:leading-[1.65em] ui:tracking-[-0.015em] ui:shadow-[inset_0_round(0.05em,1px)_white,inset_0_round(0.25em,1px)_round(0.75em,1px)_var(--color-gray-6),inset_0_round(-0.05em,1px)_var(--color-gray-3),0_0_0_round(0.05em,1px)_var(--color-gray-5)] ui:[word-spacing:-0.1em] ui:dark:bg-black ui:dark:text-white ui:dark:shadow-[inset_0_round(-0.1em,1px)_black,inset_0_round(-0.05em,1px)_round(0.75em,1px)_var(--color-gray-5),0_0_0_round(0.075em,1px)_var(--color-gray-5),inset_0_round(0.05em,1px)_var(--color-gray-2)] ui:dark:[text-shadow:#fff8_0_0_1px] ${className}`}
      {...rest}
    />
  )
}
