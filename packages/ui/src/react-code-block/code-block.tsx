/**
 * Code Block Component
 *
 * A flexible, headless code block component with syntax highlighting support via Shiki.
 * Provides granular control over rendering with line highlighting, word highlighting,
 * and customizable styling.
 *
 * Based on react-code-block by Akash Hamirwasia (@blenderskool)
 * @see https://github.com/blenderskool/react-code-block
 * @license MIT
 *
 * This is a consolidated single-file version for easy integration into projects.
 */

import React, { type CSSProperties, createContext, use, useMemo } from "react"
import type { ThemedToken, TokensResult } from "shiki"

// ============================================================================
// Type Definitions
// ============================================================================

export interface BaseContextProps {
  lines: (number | string)[]
  words: [string, [number, number]][]
}

export interface BaseLineContextProps {
  lineNumber: number
}

export type WithAsProp<T extends React.ElementType, U extends object> = ({
  as?: T
} & U) &
  Omit<React.ComponentPropsWithoutRef<T>, keyof U>

export interface WithDisplayName {
  displayName: string
}

export interface ShikiRootContextProps extends BaseContextProps {
  tokens: TokensResult
}

export interface ShikiLineContextProps extends BaseLineContextProps {
  line: ThemedToken[]
  lineNumber: number
}

export type CodeProps<T extends React.ElementType> = WithAsProp<
  T,
  {
    children:
      | React.ReactNode
      | ((
          data: { isLineHighlighted: boolean; lineNumber: number },
          idx: number
        ) => React.ReactNode)
  }
>

export type LineContentProps<T extends React.ElementType> = WithAsProp<
  T,
  object
>

export type LineNumberProps<T extends React.ElementType> = WithAsProp<T, object>

export type TokenProps<T extends React.ElementType> = WithAsProp<
  T,
  {
    children?: (data: {
      isTokenHighlighted: boolean
      children: React.ReactNode
      token: ThemedToken
    }) => React.ReactNode
  }
>

// ============================================================================
// Utility Functions
// ============================================================================

export const shouldHighlightLine = (
  line: number,
  highlights: (number | string)[]
): boolean =>
  highlights.some((highlight) => {
    if (typeof highlight === "number") {
      return line === highlight
    }

    const [min, max] = highlight
      .split(":")
      .map((val) => Number.parseInt(val, 10))

    if (min === undefined || max === undefined) return false

    return min <= line && line <= max
  })

export const shouldHighlightToken = (
  word: string,
  line: number,
  highlights: BaseContextProps["words"]
): boolean =>
  highlights.some(
    ([highlightWord, [min, max]]) =>
      highlightWord === word && min <= line && line <= max
  )

export const splitStringByWords = (
  str: string,
  words: BaseContextProps["words"]
): string[] =>
  str
    .split(new RegExp(`(${words.map(([word]) => word).join("|")})`))
    .filter(Boolean)

export const parseWordHighlights = (
  words: string[]
): BaseContextProps["words"] =>
  words.map((wordInput) => {
    const normalizedWord = wordInput.startsWith("/")
      ? wordInput
      : `/${wordInput}`
    const [, highlightWord = "", highlightRange = "0:Infinity"] =
      normalizedWord.split("/")
    const [minStr, maxStr] = highlightRange.split(":")
    const min = Number(minStr ?? 0)
    const max = maxStr ? Number(maxStr) : min
    return [highlightWord, [min, max]]
  })

export const fontStyleToCss = (token: ThemedToken): CSSProperties => {
  const fontStyles: CSSProperties = {}
  if (!token.fontStyle || token.fontStyle === -1) return fontStyles

  // biome-ignore lint/suspicious/noBitwiseOperators: Font style flags from Shiki use bitwise operations (1=italic, 2=bold, 4=underline, 8=strikethrough)
  if (token.fontStyle & 1) {
    fontStyles.fontStyle = "italic"
  }
  // biome-ignore lint/suspicious/noBitwiseOperators: Font style flags from Shiki use bitwise operations
  if (token.fontStyle & 2) {
    fontStyles.fontWeight = "bold"
  }
  // biome-ignore lint/suspicious/noBitwiseOperators: Font style flags from Shiki use bitwise operations
  if (token.fontStyle & 4) {
    fontStyles.textDecoration =
      `${fontStyles.textDecoration ?? ""} underline`.trim()
  }
  // biome-ignore lint/suspicious/noBitwiseOperators: Font style flags from Shiki use bitwise operations
  if (token.fontStyle & 8) {
    fontStyles.textDecoration =
      `${fontStyles.textDecoration ?? ""} line-through`.trim()
  }

  return fontStyles
}

export const createUseContext =
  <T,>(context: React.Context<T | undefined>, errMessage: string): (() => T) =>
  () => {
    const ctx = use(context)
    if (ctx === undefined) {
      throw new Error(errMessage)
    }
    return ctx as T
  }

// ============================================================================
// React Contexts
// ============================================================================

export const ShikiRootContext = createContext<
  ShikiRootContextProps | undefined
>(undefined)

export const ShikiLineContext = createContext<
  ShikiLineContextProps | undefined
>(undefined)

// ============================================================================
// Custom Hooks
// ============================================================================

export const useRootContext = createUseContext(
  ShikiRootContext,
  'Could not find nearest <CodeBlock /> component. Please wrap this component with a <CodeBlock /> component imported from "react-code-block/shiki".'
)

export const useLineContext = createUseContext(
  ShikiLineContext,
  'Could not find nearest <CodeBlock.Code /> component. Please wrap this component with <CodeBlock.Code /> component imported from "react-code-block/shiki".'
)

// ============================================================================
// Component Implementations
// ============================================================================

export interface CodeBlockProps {
  tokens: TokensResult
  lines?: (number | string)[]
  words?: string[]
  children: React.ReactNode
}

/**
 * Top-level root component which contains all the sub-components to construct a code block.
 *
 * API Reference: {@link https://react-code-block.netlify.app/api-reference#codeblock}
 */
const CodeBlockRoot = ({
  tokens,
  words = [],
  lines = [],
  children,
  ...props
}: CodeBlockProps) => {
  const parsedWords = useMemo(() => parseWordHighlights(words), [words])

  return (
    <ShikiRootContext.Provider
      value={{ tokens, words: parsedWords, lines, ...props }}
    >
      {children}
    </ShikiRootContext.Provider>
  )
}

/**
 * Container which contains code to render each line of the code.
 *
 * API Reference: {@link https://react-code-block.netlify.app/api-reference#codeblockcode}
 */
const Code = <T extends React.ElementType = "pre">({
  as,
  children,
  ...props
}: CodeProps<T>) => {
  const { tokens, lines } = useRootContext()

  const Tag = as ?? "pre"

  return (
    <Tag {...props}>
      {tokens.tokens.map((line, i) => {
        const lineNumber = i + 1
        const isLineHighlighted = shouldHighlightLine(lineNumber, lines)

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Tokens don't have unique IDs, index is stable for syntax highlighting
          <ShikiLineContext.Provider key={i} value={{ line, lineNumber }}>
            {typeof children === "function"
              ? children({ isLineHighlighted, lineNumber }, i)
              : (children ?? null)}
          </ShikiLineContext.Provider>
        )
      })}
    </Tag>
  )
}

/**
 * Container for a single line of the code.
 *
 * API Reference: {@link https://react-code-block.netlify.app/api-reference#codeblocklinecontent}
 */
const LineContent = <T extends React.ElementType = "div">({
  as,
  style,
  ...rest
}: LineContentProps<T>) => {
  const { tokens } = useRootContext()

  const Tag = as ?? "div"
  // FIXME: Probably resort this typecasting
  // biome-ignore lint/suspicious/noExplicitAny: Probably fine
  return <Tag {...rest} style={{ ...(style as any), color: tokens.fg }} />
}

/**
 * Renders a syntax-highlighted token from the current line.
 *
 * API Reference: {@link https://react-code-block.netlify.app/api-reference#codeblocktoken}
 */
const Token = <T extends React.ElementType = "span">({
  as,
  children: renderToken = ({ children: tokenChildren }) => (
    <span>{tokenChildren}</span>
  ),
  className,
  style,
  ...rest
}: TokenProps<T>) => {
  const { words } = useRootContext()
  const { line, lineNumber } = useLineContext()
  const Tag = as ?? "span"

  return (
    <>
      {line.map((token, tokenIndex) => {
        const tokenContent = words.length
          ? splitStringByWords(token.content, words)
          : [token.content]

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Tokens don't have unique IDs, index is stable for syntax highlighting
          <React.Fragment key={tokenIndex}>
            {tokenContent.map((contentPart, contentIndex) => (
              <Tag
                // biome-ignore lint/suspicious/noArrayIndexKey: Content parts don't have unique IDs, index is stable
                key={contentIndex}
                style={{
                  color: token.color,
                  backgroundColor: token.bgColor,
                  ...fontStyleToCss(token),
                  ...style,
                }}
                {...token.htmlAttrs}
                {...rest}
              >
                {renderToken({
                  children: contentPart,
                  token,
                  isTokenHighlighted: shouldHighlightToken(
                    contentPart,
                    lineNumber,
                    words
                  ),
                })}
              </Tag>
            ))}
          </React.Fragment>
        )
      })}
    </>
  )
}

/**
 * Renders the line number for the current line.
 *
 * API Reference: {@link https://react-code-block.netlify.app/api-reference#codeblocklinenumber}
 */
const LineNumber = <T extends React.ElementType = "span">({
  as,
  ...props
}: LineNumberProps<T>) => {
  const { lineNumber } = useLineContext()
  const Tag = as ?? "span"
  return <Tag {...props}>{lineNumber}</Tag>
}

// ============================================================================
// Component Composition
// ============================================================================

export const CodeBlock = Object.assign(CodeBlockRoot, {
  Code,
  LineContent,
  Token,
  LineNumber,
})

// ============================================================================
// Exports
// ============================================================================

export { Code, LineContent, Token, LineNumber }
