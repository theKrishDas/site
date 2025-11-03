# Turborepo Tailwind CSS starter with Biome

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `base`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `www`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `www` and `base` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.ts`. This was chosen for several reasons:

- Make sharing Tailwind CSS configuration to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to ensure your apps are aware of your package locations, so Tailwind can find all usages of the `tailwindcss` class names for CSS compilation.

If you choose this strategy, you can remove the `tailwindcss` dependency from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for formatting and linting (via [Ultracite](https://www.ultracite.ai/))

### Tooling Configuration

This project uses [Ultracite](https://www.ultracite.ai), a zero-config Biome preset that enforces strict code quality standards through automated formatting and linting.

Key features:

- **Format code**: `bun run fix`
- **Check for issues**: `bun run check`
- **Diagnose setup**: `npx ultracite@latest doctor`

Biome (the underlying engine) provides extremely fast Rust-based linting and formatting. Most issues are automatically fixable.

The configuration is defined in `biome.json` and extends Ultracite presets for both core JavaScript/TypeScript and Next.js specific rules.

## Cloning:

### Clone Nextkit:

```sh
git clone -b monorep-with-tailwind https://github.com/Krish-Das/nextkit.git
```

### or Clone in current directory:

```sh
git clone -b monorep-with-tailwind https://github.com/Krish-Das/nextkit.git .
```

### or Clone single branch in current directory:

```sh
git clone -b monorep-with-tailwind --single-branch https://github.com/Krish-Das/nextkit.git .
```

### or Clone in a pre-existing repository (detached HEAD):

1. Fetch the remote branch:
   ```sh
   git fetch https://github.com/Krish-Das/nextkit.git monorep-with-tailwind
   ```
2. Create and checkout a new branch:
   ```sh
   git checkout -b monorep-with-tailwind FETCH_HEAD
   ```

## Running locally

```sh
bunx turbo dev
```
