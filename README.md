<h1 align="center"> teaching.1995parham.me </h1>

<p align="center">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/1995parham-teaching/1995parham-teaching.github.io/build.yaml?label=build&logo=github&style=for-the-badge&branch=main" />
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/1995parham-teaching/1995parham-teaching.github.io/lint.yaml?label=lint&logo=github&style=for-the-badge&branch=main" />
    <img alt="license" src="https://img.shields.io/github/license/1995parham-teaching/1995parham-teaching.github.io.svg?style=for-the-badge" />
    <img alt="Astro" src="https://img.shields.io/badge/astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white">
</p>

## Introduction

The landing page of the [1995parham-teaching](https://github.com/1995parham-teaching) organization, served at [teaching.1995parham.me](https://teaching.1995parham.me). It lists every course, hands-on project, workshop, and shared tool, and links to each course homepage and repository.

Built with [Astro](https://astro.build/), styled like [1995parham.me](https://1995parham.me), and deployed to GitHub Pages from `main`.

## Editing the list

Everything on the page comes from [`src/data/teaching.ts`](src/data/teaching.ts). Add or move an entry there; the page renders the sections in the order they appear. Set `archived: true` on a finished course so it gets the badge.

## Up and Running

```bash
pnpm install
just dev
```

Requires Node.js 22.12 or newer.
