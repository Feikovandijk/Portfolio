# Feiko van Dijk - Design System

> **Game Systems × Cloud Infrastructure**
> A personal brand & portfolio design system for Feiko van Dijk, repositioning from
> *"Technical & Game Designer"* toward a fusion identity: **game developer + cloud / Kubernetes engineer.**

This system exists because Feiko is now working primarily as a **Kubernetes / DevOps engineer**, while keeping
a rich history of shipped games (Arid, ~200k downloads in month one) and an MSc in Games research. The rebrand
fuses both worlds rather than dropping one: **the precision of cloud infrastructure with the craft of game worlds.**

---

## What this is

A folder of brand foundations, reusable CSS, real visual assets, and a high-fidelity UI kit that lets a
design agent (or a developer) produce on-brand interfaces, slides, and mockups for Feiko's portfolio and
personal brand - fast and consistently.

The visual foundations here describe the **new** hybrid brand. The UI kit recreates the **existing portfolio's
structure** (hero, project grid, project detail, about) re-skinned into the new identity - i.e. it *is* the
proposed redesign, built to be directly editable and extendable.

---

## Sources

This system was derived from Feiko's live portfolio source code. If you have access, explore these to do a
better job building on-brand designs:

- **Primary source - portfolio codebase:** https://github.com/Feikovandijk/Portfolio
  (Vite + React + TypeScript + Tailwind, `framer-motion`, `lucide-react`, `react-router-dom`.)
- Related repos that inform the *cloud/k8s* side of the brand (public):
  - https://github.com/Feikovandijk/GitOps - GitOps configuration
  - https://github.com/Feikovandijk/k8sdocs - Kubernetes docs/site
  - https://github.com/Feikovandijk/k3s-poc-stack - k3s proof-of-concept stack
  - https://github.com/Feikovandijk/borg-ui - web UI for Borg Backup
  - https://github.com/Feikovandijk/podinfo - Go microservice template for Kubernetes
- Game projects referenced in copy: **Arid** (Steam), **Quantum** (VR), plus student titles.

> The reader is **not** assumed to have access - everything needed is captured in this folder. Links are stored
> so a future build can pull deeper context (especially the k8s repos for the cloud half of the identity).

---

## The two halves of the brand

| | **Cloud / Kubernetes** (now) | **Game development** (heritage) |
|---|---|---|
| Feeling | precise, systemic, reliable, terminal | atmospheric, immersive, crafted, warm |
| Color | **Kubernetes blue** `#326CE5` | **desert amber / sand** `#E8A24C` (Arid) |
| Texture | hex grid, status dots, mono labels | full-bleed game imagery, alpine/desert photos |
| Voice | `kubectl`-style precision, status badges | first-person, story-driven project narratives |

The system holds these in tension on a **deep terminal-slate canvas** so neither half wins - the wordmark, the
status chrome, and the metadata feel like infrastructure; the imagery and headlines feel like games.

---

## CONTENT FUNDAMENTALS

How Feiko's copy is written, pulled directly from the existing portfolio voice and extended for the cloud half.

**Person & address.** First person, warm and direct. *"Hi, I'm Feiko."* / *"I'm a Technical Designer & DevOps
engineer from the Netherlands…"* He speaks as **I**; addresses the reader as **you** ("Below, you can find my
portfolio"). Never corporate "we" except when describing a team he was part of.

**Tone.** Grounded, curious, a little self-deprecating, never boastful. Real example of the humour:
*"(and occasionally 'fixing' something that wasn't broken keeps life interesting)."* Achievements are stated
plainly with the facts doing the bragging (*"over 200,000 downloads in the first month"*), not adjectives.

**Casing.** **Sentence case** for headings and body (*"Achievements & Recognitions"*, *"Other Projects"*).
Title Case only for proper nouns and project names (Arid, Quantum, Streamlined Mastermind). The new system
adds **lowercase monospace captions** for metadata (`role`, `stack`, `years`) - a quiet engineer-flavored
counterpoint to the sentence-case prose. Used sparingly; never as gimmicky terminal cosplay.

**Structure.** Project copy follows: a one-line hook → role → timeline → tags → a longer first-person
narrative ("Arid started out as a student project but ended up being an unexpected mini-hit"). Lists use
plain bullets; the thesis copy even uses `•` inline. Stats are concrete: team size, duration, platforms, tech.

**Vocabulary.** Mixes design language (*player experience, immersion, systemic, vision owner*) with
engineering language (*CI/CD, Perforce, Jenkins, analytics, pipeline*). The rebrand leans this mix harder:
**Kubernetes, GitOps, k3s, clusters, pods, deploys** sit alongside *weather systems, buffs & debuffs*.

**Emoji.** **None.** The original portfolio uses zero emoji. Keep it that way - use status dots (`●`),
mono labels, and Lucide icons instead. Unicode bullets (`•`) appear in long-form prose only.

**Do / Don't**
- ✅ *"I'm a Kubernetes engineer who used to ship survival games - I bring systems thinking to both."*
- ✅ *"9 months · 21 developers · 200k downloads"* (mono caption, factual, lowercase)
- ❌ *"🚀 Passionate rockstar developer crafting AMAZING experiences!!!"*
- ❌ Marketing superlatives, exclamation spam, or hiding the gamedev past.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Dark-first, "terminal at night in the desert." Deep blue-slate canvas with two warm/cool
accents pulled from real project imagery (cool Kubernetes blue from the sky/cloud half; warm Arid amber from
the game half). Engineered, calm, high-contrast, a little cinematic.

**Color.**
- Canvas: `--bg-0 #0B0F17` (near-black blue), surfaces `--bg-1 #11161F`, elevated `--bg-2 #161C28`.
- Primary: **Kubernetes blue** `#326CE5`, brighter `#5B8DEF` on hover.
- Accent: **desert sand** `#E8A24C` / terracotta `#C9683A` - used sparingly for the gamedev warmth and highlights.
- Status (from kubectl): running green `#3FB950`, warning `#D9A441`, error `#F0533F`, info `#58A6FF`.
- A **light theme** mirrors the portfolio's existing dark/light toggle and is a designed, first-class mode
  (not just an inversion): on white, accents deepen to `--k8s-blue-deep` and the warm **terracotta** `#C9683A`
  replaces sand for legible accent text, cards lift on soft shadows instead of hairline borders, and the grid
  texture warms to a faint blue. Dark is the hero; the choice persists across reloads.

**Type.** `Space Grotesk` for display/headings (engineered yet characterful), `IBM Plex Sans` for body
(humanist, technical), `JetBrains Mono` for all system chrome - metadata, tags, kickers, status, terminal.
Headings use tight negative tracking (-0.02em); mono labels use wide positive tracking (+0.12em, uppercase).
*Note: the original site used Helvetica Neue / Arial; these are intentionally replaced as part of the rebrand.*

**Spacing & layout.** 4px base scale. Generous vertical rhythm - sections breathe with `py-24`/`py-32`-scale
gaps (the original portfolio uses big `py-32` hero sections; we keep that air). Content max-width ~1120px,
centered. Fixed translucent top nav with backdrop blur. A faint **hex/grid motif** (`--grid-line`) can texture
large dark backgrounds at very low opacity - never loud.

**Backgrounds.** Two registers: (1) **full-bleed game/photo imagery** (Arid desert, alpine climbs) behind
heroes and project headers, darkened with a bottom-up `from-black/60` protection gradient so text stays legible;
(2) **flat dark surfaces** with optional faint hex grid for everything else. No purple gradients, no noisy textures.

**Imagery vibe.** Game screenshots are warm and cinematic (rust, terracotta, amber grass, blue sky - Arid).
Personal photos are cool and outdoorsy (alpine blue, climbing). The brand embraces both; never desaturate to
grayscale. Keep images crisp and color-rich; round to `--radius-lg` for cards, `999px` (circle) for portraits.

**Borders.** Hairline 1px translucent borders (`--border-1`) define cards on dark surfaces - this is the
primary separation device, more than shadow. Hover brightens the border (`--border-2`).

**Shadows & elevation.** Dark-first, so elevation reads as **glow + faint deep shadow**, not heavy drop
shadow. Primary actions can carry a subtle blue `--glow-primary`; the accent a warm `--glow-accent`. Cards use
`--shadow-md`. Avoid the original's bright `shadow-2xl` look on dark.

**Corner radii.** Cards/media `--radius-lg (14px)`, buttons/inputs `--radius-md (10px)`, tags/status `pill`,
portraits full circle. Consistent, modern, not overly rounded.

**Cards.** Dark surface `--bg-1`, 1px `--border-1`, `--radius-lg`, `--shadow-md`. Often topped with a
full-width media image and a quiet mono metadata caption (role · discipline) plus a year and a hairline rule
above the footer. On hover: border brightens and the image scales `1.03`. Restrained and editorial - the card
lets the game imagery carry the warmth; no badges, no glow.

**Signature motifs (restrained).** The engineer half is expressed through *structure*, not props: lowercase
mono metadata captions (`role`, `stack`, `years`), hairline rules and spec-sheet key/value blocks, a type-only
wordmark, and a disciplined slate-blue-sand palette. **Avoid devops cosplay** - no fake terminal windows,
no glowing `● Running` status badges, no `kubectl` chrome as decoration. State, when shown, is plain muted
mono text (`Released`, `In development`, `Research`, `Archived`).

**Animation.** Inherited from the portfolio's `framer-motion` usage: gentle **fade + 20px rise on enter**
(`opacity 0→1, y 20→0`, ~0.5s, staggered by section delay 0.2s). Hovers are **200–300ms ease** color/border
transitions and small `scale(1.03)` image zooms. No bounces, no spring overshoot, no neon glows - calm and
deliberate, matching the engineering half.

**Hover / press states.**
- Links: muted `--fg-2` → `--fg-1`, 200ms.
- Primary button: `--primary` → `--primary-hover`, optional glow; **press** deepens to `--k8s-blue-deep` and
  `scale(0.98)`.
- Cards: border `--border-1` → `--border-2`, slight media zoom.
- Icon buttons: background `--bg-2` → `--bg-3`.

**Transparency & blur.** Used purposefully: the fixed nav is `bg-1` at ~92% with `backdrop-blur`; image
protection gradients are the main use of alpha. Avoid frosted glass everywhere - it's a accent, not a base.

---

## ICONOGRAPHY

**System: Lucide.** The portfolio uses [`lucide-react`](https://lucide.dev) (v0.344) exclusively - thin,
consistent **1.5–2px stroke**, rounded line-caps, 24px default. The rebrand keeps Lucide as the single icon
system; it pairs perfectly with the engineered/technical feel and is CDN-available.

- **How to use it here:** load Lucide from CDN (`https://unpkg.com/lucide@latest`) or
  `lucide-react`. Match the original sizes: `16` for inline/buttons, `20` for nav/contact, `24` for menu/social.
  Stroke width 2 (Lucide default). Color from `currentColor` so icons inherit `--fg-2`/`--fg-1`.
- **Icons seen in the source:** `Menu`, `Moon`, `Sun`, `Mail`, `Linkedin`, `Github`, `Flag` (CTFTime),
  `Award`, `ArrowRight`, `Play`, `BookOpen`, `ExternalLink`, `Youtube`, `Stamp` (used as a Steam glyph).
- **Cloud half additions (still Lucide):** `Boxes`/`Box` (pods), `Container`, `Cloud`, `Server`, `Terminal`,
  `GitBranch`, `Workflow`, `Cpu`, `Activity`, `ShieldCheck`. Use these for the k8s/DevOps surfaces.
- **Brand glyphs:** Kubernetes and Steam have official marks. Where a brand glyph is needed (Kubernetes helm
  wheel, Steam), prefer the official SVG; the original portfolio approximated Steam with Lucide's `Stamp`.
  *(No bespoke brand SVGs are bundled here - substitute the official mark or closest Lucide icon and flag it.)*

**Emoji:** never (see Content Fundamentals). **Unicode:** `●` for status dots and `•` for prose bullets only.

**No bespoke/hand-drawn icons.** Do not invent SVG icons - always reach for Lucide first, or an official brand
mark. This keeps stroke weight and visual language consistent.

> **Logo / wordmark:** there is no logo image - and per Feiko's direction the brand uses **no logo mark**.
> The identity is carried by a **type-only wordmark**: the name in Space Grotesk with a lowercase mono role
> line (`kubernetes engineer · game designer`). See `preview/brand-wordmark.html` and the UI kit nav.

---

## INDEX - what's in this folder

**Foundations**
- `README.md` - this file. Brand context, content & visual foundations, iconography.
- `colors_and_type.css` - all design tokens: colors (dark + light themes), fonts, type roles, spacing, radii,
  shadows/glows. Import this first in any build.
- `SKILL.md` - Agent-Skill manifest so this folder works as a downloadable Claude skill.

**Assets** (`assets/`)
- Real project imagery: `Arid2.png`, `Aztech.png`, `DemonsHeaven.png`, `QuantumLogo.png`, `Streamlined.png`,
  `buasthesis.png` (game projects); `feikohome.png`, `feikoclimb.jpg`, `feikoballs.jpg`, `feikofancy.jpg`
  (personal photos). Use these for heroes, cards, and about sections.

**Design-system cards** (`preview/`)
- Standalone HTML specimen cards (color, type, components, brand chrome) that populate the Design System tab.

**UI kit** (`ui_kits/portfolio/`)
- `index.html` - interactive, click-through recreation of the rebranded portfolio (hero → projects → detail → about).
- JSX components - `Nav`, `Hero`, `ProjectCard`, `InfraCard`, `Footer`, etc. Modular and reusable.
- `README.md` - kit-specific notes.

*(No `slides/` folder - no slide template was provided. Ask if you'd like a deck system built.)*

---

## SUBSTITUTIONS & OPEN ITEMS (flagged)

- **Fonts are Google Fonts substitutions.** The original site used *Helvetica Neue / Arial*; the rebrand
  intentionally moves to **Space Grotesk + IBM Plex Sans + JetBrains Mono** (loaded from Google Fonts via
  `@import`, not bundled as local files). If you want self-hosted `.ttf`/`.woff2` files in `fonts/`, or a
  different type pairing, say so.
- **No logo mark.** Per Feiko's direction the brand uses **no logo / monogram** - the identity is a
  **type-only wordmark** (name in Space Grotesk + mono role line). If you later want a bespoke mark, that's open.
- **Icons via CDN.** Lucide is pinned to `0.344` (matching the source `lucide-react`) and loaded from unpkg;
  brand glyphs (GitHub, LinkedIn) live in that version. Nothing is bundled locally.
- **Cloud/infra content** is grounded in Feiko's real public repos but the descriptions are written for this
  system - confirm they match how he'd describe each project.

---

*Built from Feiko's portfolio source. The cloud/k8s half of the identity is best deepened by exploring the
GitOps / k8sdocs / k3s repos linked above.*
