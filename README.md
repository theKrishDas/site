# Turborepo Tailwind CSS starter with Biome

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `backend`: a backend package
- `ui`: a React component library with [Tailwind CSS](https://tailwindcss.com/) shared by applications
- `utils`: a utilities package
- `tailwind-config`: shared Tailwind CSS configuration
- `typescript-config`: shared TypeScript configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

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

## Running locally

```sh
bunx turbo dev
```

## Building

```sh
bunx turbo build
```

## Code Quality

This project uses Biome with Ultracite for code quality enforcement:

- Check for issues: `bun run check`
- Fix issues: `bun run fix`
- Type checking: `bun run check-types`
- Clean build artifacts: `bun run clean`

## Workspace Structure

The repository is organized as a monorepo with the following workspace structure:

- `apps/web`: Main Next.js application
- `packages/backend`: Backend functionality
- `packages/ui`: Shared UI components
- `packages/utils`: Utility functions
- `tooling/tailwind-config`: Shared Tailwind configuration
- `tooling/typescript-config`: Shared TypeScript configuration

This structure allows for code sharing and consistency across applications while maintaining clear boundaries between different concerns.
