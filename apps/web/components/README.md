## Local components

Components that are the part of this app. No need to move.

- `Container` (depends on `@radix-ui/react-slot`)
- `upsher-header` (depends on `Container`)
- `Heading` aka section-heading (no dependencies)
- `Footer` (depends on `Container`)
- `ThemeToggle` (depends on `next-themes`)
- `Rayso` (no dependencies)
- Remove `padding` component completely

## UI components

Components that must be moved to `@repo/ui`:

- [ ] `Spacer` (depends on `@radix-ui/react-slot`)
- [ ] `Kbd` (no dependencies)

## Overall dependencies

- `@radix-ui/react-slot`