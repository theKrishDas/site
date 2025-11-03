# Fix Tailwind v4 Biome Linting Error

## Problem

Biome flags `@import 'tailwindcss' prefix(ui);` as invalid CSS in `packages/ui/src/styles.css`, but `turbo run build` works.

## Solution

Add this to `biome.json`:

```json
{
  "css": {
    "parser": {
      "tailwindDirectives": true,
      "cssModules": true
    }
  },
  "files": {
    "includes": ["!packages/ui/src/styles.css"]
  }
}
```

## Explanation

- `tailwindDirectives: true` enables Tailwind v4 syntax support
- `!packages/ui/src/styles.css` excludes the file from Biome linting (safe since build passes)

## Notes

- Editor may still show error — ignore it
- Only needed for Tailwind v4 in Turborepo `with-tailwind` template
