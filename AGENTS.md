# Mavife

Static marketing site for a florist (Next.js 16 App Router, React 19, Tailwind v4). Orders are placed via WhatsApp deep links; there is no backend or database.

## Cursor Cloud specific instructions

- Package manager is **Yarn 4** (via Corepack). Node 22 (`.nvmrc`). Standard commands live in `package.json` and `README.md`.
- The single service is the Next.js dev server: `yarn dev` (Turbopack, http://localhost:3000). Routes: `/` and `/about`.
- `yarn install` reports that `sharp`/`unrs-resolver` build scripts are disabled; this is expected and does not affect `yarn dev`, `yarn lint`, or `yarn build`.
- The WhatsApp contact number and all copy/content live in `src/lib/content.ts`. Order buttons open `wa.me` links in a new tab.
