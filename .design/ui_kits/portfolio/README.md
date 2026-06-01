# UI Kit - Feiko van Dijk portfolio (rebranded)

An interactive, high-fidelity recreation of Feiko's portfolio, re-skinned into the new
**Game Systems × Cloud Infrastructure** identity. It's the proposed redesign, built to be
directly editable and reusable.

## Run it
Open `index.html`. It's a single-page app (no router) with three views:
- **Work (home)** - hero, stats strip, featured game projects, a *Cloud & infrastructure* grid
  (Feiko's real public repos), awards, and smaller projects.
- **About** - bio, skills, contact, photography.
- **Project detail** - click any featured project: cinematic full-bleed header, narrative,
  pull-quote, key contributions, and a mono "project spec" sidebar.

Dark/light theme toggles from the nav (dark is the hero theme).

## Files
- `index.html` - app shell: loads tokens, React 18 (pinned), Babel, Lucide `0.344`, then the scripts below.
- `data.js` - all content. Game projects from the live portfolio; the **infra** entries are
  Feiko's real repos (AridAsyncBackend, GameBacklog, GitOps, k3s-poc-stack, borg-ui, UT-CTFHeatmap).
- `primitives.jsx` - atoms & chrome: `Icon`, `Tag`, `Nav`, `Footer`. (Wordmark is type-only - no logo mark.)
- `views.jsx` - `ProjectCard`, `InfraCard`, `SmallCard`, `AchievementRow`, `Hero`, `StatsStrip`,
  `HomeView`, `AboutView`, `DetailView`.
- `kit.css` - component styles, all consuming tokens from `../../colors_and_type.css`.

## Conventions
- **No devops cosplay.** State is plain muted mono text (`Released`, `Running`), never a glowing badge.
- Metadata uses lowercase mono captions; prose is sentence-case IBM Plex Sans; headings are Space Grotesk.
- Icons are Lucide at the source repo's pinned version (`0.344`) so brand glyphs (github, linkedin) resolve.
- Cross-file React components are shared via `Object.assign(window, {...})` at the end of each `.jsx`.

## Cosmetic only
This is a UI kit, not production code - interactions are faked (links are real where known; video
players from the original site are omitted since the source `.mp4`s aren't in the repo). Lift the
components and styles; don't ship the data wiring as-is.
