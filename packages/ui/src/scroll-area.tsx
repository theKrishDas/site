import { ScrollArea as BUIScrollArea } from "@base-ui/react/scroll-area"

function Viewport({ className, ...props }: BUIScrollArea.Viewport.Props) {
  return (
    <BUIScrollArea.Viewport
      className={`ui:corner-squircle ui:-outline-offset-1 ui:h-full ui:overscroll-contain ui:rounded-2xl ui:focus-visible:outline-2 ui:focus-visible:outline-ios-blue ${className}`}
      {...props}
    />
  )
}

function Scrollbar({ className, ...props }: BUIScrollArea.Scrollbar.Props) {
  return (
    <BUIScrollArea.Scrollbar
      className={`ui:data-[orientation=vertical]:before:-translate-x-1/2 ui:data-[orientation=horizontal]:before:-bottom-2 ui:pointer-events-none ui:relative ui:flex ui:rounded ui:bg-fill-tertiary ui:opacity-0 ui:transition-opacity ui:before:absolute ui:before:content-[''] ui:data-hovering:pointer-events-auto ui:data-scrolling:pointer-events-auto ui:data-[orientation=horizontal]:m-2 ui:data-[orientation=vertical]:m-2 ui:data-[orientation=horizontal]:h-1 ui:data-[orientation=vertical]:w-1 ui:data-hovering:opacity-100 ui:data-scrolling:opacity-100 ui:data-hovering:delay-0 ui:data-scrolling:duration-0 ui:data-[orientation=horizontal]:before:right-0 ui:data-[orientation=horizontal]:before:left-0 ui:data-[orientation=vertical]:before:left-1/2 ui:data-[orientation=horizontal]:before:h-5 ui:data-[orientation=vertical]:before:h-full ui:data-[orientation=horizontal]:before:w-full ui:data-[orientation=vertical]:before:w-5 ${className}`}
      {...props}
    >
      <BUIScrollArea.Thumb className="ScrollAreaThumb ui:w-full ui:rounded ui:bg-gray-1" />
    </BUIScrollArea.Scrollbar>
  )
}

export const ScrollArea = {
  Root: BUIScrollArea.Root,
  Scrollbar,
  Viewport,
  Content: BUIScrollArea.Content,
  Corner: BUIScrollArea.Corner,
}
