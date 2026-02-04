"use client"

import { ScrollArea } from "@base-ui/react"
import { CodeBlock as Block } from "@repo/ui/react-code-block"
import { cn } from "@repo/utils"
import { useEffect, useState } from "react"
import {
  type BundledLanguage,
  codeToTokens,
  type TokensResult,
} from "shiki/bundle/web"
import { shikiOptions } from "@/lib/shiki"

export interface CodeBlockProps {
  children: string
  language?: BundledLanguage
  hideLineNumbers?: boolean
  title?: string
  className?: string
}

export function CodeBlock(props: CodeBlockProps) {
  const { language: lang = "text", hideLineNumbers, className } = props
  const code = String(props.children).trim()
  const [tokens, setTokens] = useState<TokensResult | null>(null)
  // const lineCount = tokens?.tokens.length

  useEffect(() => {
    codeToTokens(code, { lang, ...shikiOptions }).then(setTokens)
  }, [code, lang])

  if (!tokens) {
    return <Pre className="leading-relaxed">{code}</Pre>
  }

  return (
    <Block tokens={tokens}>
      <Block.Code as={Pre} className={className}>
        <Line>
          {hideLineNumbers ? (
            <span className="table-cell w-px" />
          ) : (
            <Block.LineNumber as={LineNumber} />
          )}
          <Code>
            <Block.Token>
              {({ token, children }) => (
                <Token
                  style={
                    // Setting up shiki variables for highlighting
                    // biome-ignore lint/nursery/noLeakedRender: SHUT UP!
                    token.htmlStyle
                      ? ({
                          "--shiki-light": token.htmlStyle.color,
                          "--shiki-dark": token.htmlStyle["--shiki-dark"],
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  {children}
                </Token>
              )}
            </Block.Token>
          </Code>
        </Line>
      </Block.Code>
    </Block>
  )
}

const Pre = ({ className, ...rest }: React.ComponentProps<"pre">) => (
  <ScrollArea.Root>
    <ScrollArea.Viewport
      render={
        <pre
          className={cn(
            "not-prose not-fumadocs-codeblock",
            "corner-squircle border:gray-200/50 whitespace-pre rounded-xl border bg-white px-3 py-3 text-[0.9rem] outline-none dark:border-gray-6/80 dark:bg-neutral-950",
            className
          )}
          tabIndex={-1}
          {...rest}
        />
      }
    />
  </ScrollArea.Root>
)
const Line = ({ className, ...rest }: React.ComponentProps<"div">) => (
  <div
    className={cn(
      "group relative table-row",
      // Pseudo element for hover line highlight
      "after:pointer-events-none after:absolute after:inset-0 after:z-1 after:bg-fill-color/8 after:opacity-0 after:content-[''] hover:after:opacity-100 dark:after:bg-fill-color/6",
      // Extend the ::after element to full-width by offsetting the parent's horizontal padding
      // Tailwind px-3 = 0.75rem per side, so width is increased by 0.75rem × 2
      "after:-translate-x-3 after:w-[calc(100%+0.75rem*2)]",
      className
    )}
    {...rest}
  />
)
const Code = ({ className, ...rest }: React.ComponentProps<"code">) => (
  <code
    className={cn(
      "relative z-10 table-cell h-lh w-full leading-relaxed",
      className
    )}
    {...rest}
  />
)
const Token = ({ className, ...rest }: React.ComponentProps<"span">) => (
  <span
    className={cn("text-(--shiki-light) dark:text-(--shiki-dark)", className)}
    {...rest}
  />
)
const LineNumber = ({ className, ...rest }: React.ComponentProps<"span">) => (
  <span
    className={cn(
      "relative z-10 table-cell min-h-lh select-none place-content-center pr-4 text-right text-gray-3 text-sm dark:text-label-tertiary",
      className
    )}
    {...rest}
  />
)
