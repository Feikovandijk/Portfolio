---
name: feiko-design
description: Use this skill to generate well-branded interfaces and assets for Feiko van Dijk - a Kubernetes/DevOps engineer and former game designer - either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the "Game Systems × Cloud Infrastructure" identity.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

This is a personal brand & portfolio design system for Feiko van Dijk. Its identity fuses two halves:
**Kubernetes / cloud engineering** (Kubernetes blue, mono metadata, hairline structure) and
**game development** (desert-amber warmth, cinematic imagery), set on a deep terminal-slate canvas.

Key files:
- `README.md` - brand context, content & visual foundations, iconography, and flagged open items. Start here.
- `colors_and_type.css` - design tokens (colors for dark + light themes, fonts, type roles, spacing, radii,
  shadows). Import this first in any build.
- `assets/` - real project imagery (Arid, Quantum, etc.) and personal photos.
- `preview/` - standalone specimen cards for colors, type, components and brand chrome.
- `ui_kits/portfolio/` - an interactive, high-fidelity recreation of the rebranded portfolio with reusable
  JSX components (`Nav`, `Hero`, `ProjectCard`, `InfraCard`, `Footer`, …).

**House rules (important):** keep it restrained and editorial. The fusion shows through palette, typography
and structure - **not** devops cosplay. No fake terminal windows, no glowing `● Running` status badges, no
`kubectl` chrome as decoration, no emoji. State is plain muted mono text. Sentence-case prose; lowercase mono
metadata captions; Space Grotesk display, IBM Plex Sans body, JetBrains Mono for system text. Icons are Lucide.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static
HTML files for the user to view. If working on production code, copy assets and read the rules here to become
an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a
few focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code,
depending on the need.
