# CORE Engineering Handbook

A [Docusaurus](https://docusaurus.io/) site holding the engineering handbook for
the CORE project (values, principles, practices, working agreement, story
workflow, estimation, and definition of ready/done).

## Local development

```bash
npm install
npm start          # dev server at http://localhost:3000
```

Edit the markdown in `docs/`. Ordering is controlled by the `sidebar_position`
front matter at the top of each file.

## Build

```bash
npm run build      # static site into ./build
npm run serve      # preview the production build locally
```

## Hosting (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push
to `main`. To go live:

1. In the repo (`focusconsulting/core-eng-handbook`): **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
2. Push to `main`. The workflow builds and publishes automatically.

`baseUrl`/`url`/`organizationName`/`projectName` in `docusaurus.config.js` are
set to match `focusconsulting/core-eng-handbook`; if the repo is renamed, update
them or the deployed CSS and links will 404.

For a custom or internal domain, set `baseUrl` back to `'/'` and `url` to that
domain.

> Note: public GitHub Pages serves the site publicly. For an internal-only
> handbook, use a GitHub Team/Enterprise org with access-controlled Pages, or
> serve the `build/` output on Focus's internal host instead.
