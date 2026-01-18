# Code Block Component

A flexible, headless code block component with syntax highlighting support via Shiki.

Based on [react-code-block](https://github.com/blenderskool/react-code-block) by @blenderskool

## Usage

```tsx
import { CodeBlock } from "@repo/ui/react-code-block"
import { codeToTokens } from "shiki";

// Get tokens from Shiki
const tokens = await codeToTokens(code, {
  lang: "typescript",
  theme: "github-dark",
})

// Render code block
<CodeBlock tokens={tokens} lines={[1, 3, "5:8"]} words={["/useState", "/useEffect/2:5"]}>
  <CodeBlock.Code>
    {({ isLineHighlighted }) => (
      <CodeBlock.LineContent
        style={{
          backgroundColor: isLineHighlighted ? "rgba(255, 255, 0, 0.1)" : "transparent",
        }}
      >
        <CodeBlock.LineNumber />
        <CodeBlock.Token />
      </CodeBlock.LineContent>
    )}
  </CodeBlock.Code>
</CodeBlock>
```

## API

### `<CodeBlock>`

Top-level component that provides context for all sub-components.

**Props:**

- `tokens`: TokensResult from Shiki
- `lines?`: Array of line numbers or ranges to highlight (e.g., `[1, 3, "5:8"]`)
- `words?`: Array of words to highlight with optional line ranges (e.g., `["/useState", "/keyword/2:5"]`)

### `<CodeBlock.Code>`

Container for all code lines. Uses `<pre>` by default.

**Props:**

- `as?`: Custom element type
- `children`: ReactNode or render function with `{ isLineHighlighted, lineNumber }`

### `<CodeBlock.LineContent>`

Container for a single line. Uses `<div>` by default.

**Props:**

- `as?`: Custom element type

### `<CodeBlock.Token>`

Renders syntax-highlighted tokens. Uses `<span>` by default.

**Props:**

- `as?`: Custom element type
- `children?`: Render function with `{ isTokenHighlighted, children, token }`

### `<CodeBlock.LineNumber>`

Renders the current line number. Uses `<span>` by default.

**Props:**

- `as?`: Custom element type

## License

MIT - Original library by Akash Hamirwasia (@blenderskool)
