# UNH MECC Website

Static Astro site for the UNH Marine Energy Collegiate Competition team.

## Content

- `details/MEMBERS.md` is the canonical current roster. Update its YAML frontmatter to change visible team cards.
- `details/archive/TEMPLATE.md` defines each archive project's fields. Each year's description and roster live in `details/archive/YEAR/index.md`; put its media in `public/archive/YEAR/media/`. For example, set `coverImage` to `/archive/2023/media/cover.webp`.
- Browser-facing logo files live in `public/branding/logos/`. The original reference page and social media notes stay in `branding/` as source material.
- Replace the project, sponsor, and biography placeholders as final content and media become available.

## Run locally

Install the only dependency, Astro, then start the development server:

```sh
npm install
npm run dev
```

Use Node.js 22.19 or newer. Astro's font tooling currently brings in `undici@8`, which requires Node 22.19 or newer.

Build the static site with `npm run build` and preview it with `npm run preview`.

