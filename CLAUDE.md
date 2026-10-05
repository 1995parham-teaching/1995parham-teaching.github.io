# CLAUDE.md — 1995parham-teaching.github.io

Landing page for Parham's teaching, served at `teaching.1995parham.me` (the GitHub Pages organization site of `1995parham-teaching`, custom domain set in the repository's Pages settings; the DNS record lives in Cloudflare). Astro 7 + TypeScript, pnpm, Biome; same toolchain and `global.css` as `1995parham/1995parham.github.io`, so keep the two visually in sync when the design changes there.

## Build

```sh
just dev      # astro dev
just build    # astro build
just check    # astro check
just lint     # biome check .
```

## Layout

- `src/data/teaching.ts` — the only content file: sections → entries → links. Order matters; nothing sorts.
- `src/pages/index.astro` — renders the sections. Single page; `#courses`, `#projects`, `#workshops`, `#tooling` anchors are the nav.
- `src/layouts/Layout.astro`, `src/components/` — shell, icons (inline SVG from Font Awesome via `icons.ts`), theme toggle.
- `src/styles/global.css` — copied from the homepage, plus a `Teaching page` block at the end.

Because this is the organization's user site, every project site in the org (`ie-lecture`, `is-lecture`, `Python201`, …) is also reachable under `teaching.1995parham.me/<repo>/`; their `*.github.io` URLs keep working. Internal decks (`call-quality-slides`, `avee-infra-101`, `snapp-nats-architecture`) and Elaheh's machine-learning repositories are deliberately not listed.
