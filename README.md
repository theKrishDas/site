[![Banner](./docs/banner.png)](https://upsher.dev)

<div align="center">

<a href="https://upsher.dev">Site</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://upsher.dev">Writing</a>

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=theupsher">
    <img src="https://img.shields.io/twitter/follow/theupsher.svg?label=Follow%20@theupsher" alt="Follow @theupsher" />
  </a>
</p>

</div>

---

# Upsher.dev

Hey, this is my personal site. It's a place where I share my work and what I'm about.

## About This Project

I built this site to share my work, thoughts and connect with others. It's constantly evolving. The goal was to create something clean, fast, and genuinely me.

If you spot something interesting or have questions about how something works, feel free to reach out.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `backend`: a backend package with [convex](https://convex.dev)
- `ui`: a React component library with [Tailwind CSS](https://tailwindcss.com/) shared by applications
- `utils`: a utilities package
- `tailwind-config`: shared Tailwind CSS configuration
- `typescript-config`: shared TypeScript configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Development Tools

This project uses modern tooling for a great developer experience:

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Biome](https://biomejs.dev/) via [Ultracite](https://www.ultracite.ai/) for formatting and linting
- [Bun](https://bun.sh/) for fast package management and scripting

## Getting Started

To run this site locally, make sure you have the `.env`s setup then run:

```sh
bun turbo prepare
bun turbo dev
```

This will start the development server available at http://localhost:3000

### Building for Production

```sh
bun turbo build
```

### Code Quality Commands

Maintaining code quality is important to me. Here are the commands I use:

- **Check for issues**: `bun turbo check`
- **Format code**: `bun turbo fix`
- **Type checking**: `bun turbo check-types`
- **Clean build artifacts**: `bun turbo clean`
- **Diagnose setup**: `bunx ultracite@latest doctor`

## Project Structure

The repository is organized as a monorepo with the following workspace structure:

- `apps/web`: Main Next.js application
- `packages/backend`: Backend functionality with Convex
- `packages/ui`: Shared UI components
- `packages/utils`: Utility functions
- `tooling/tailwind-config`: Shared Tailwind configuration
- `tooling/typescript-config`: Shared TypeScript configuration

This structure allows for code sharing and consistency across applications while maintaining clear boundaries between different concerns.
