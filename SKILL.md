---
name: super-design
description: Apply SuperDesign design rules, template library, and stepwise workflow to deliver prototypes, UI mockups, and website/tool/app designs. Use when users say they want to design a website/tool/app, create a prototype, produce a visual mockup, or request a high-quality UI style.
---

# Super Design

## Overview
Use a structured, approval-gated workflow, strict visual guidelines, and a local board server to reproduce SuperDesign-quality outputs.

## When to use
- The user wants a prototype, UI mockup, or visual design.
- The user asks for website/tool/app design or a full screen layout.
- The user requests a specific UI style, theme, or high-quality visual output.

## Workflow (must follow in order)
1. Structure intent mapping (internal):
   - Translate PRD into page-by-page intent and hierarchy.
   - Decide each page’s layout direction internally (no user confirmation).
2. Style exploration (external):
   - If the user specifies a preferred style or layout, generate 4 directions within that scope.
   - Additionally, explore 3–4 alternative directions outside the user’s scope and explain why they may be stronger.
   - If the user does not specify a style, generate 4 clearly different directions for the first page.
   - Each direction must change layout, typography, density, and component language together.
3. Motion design:
   - Define micro-interactions that reinforce the selected style direction.
4. First page output:
   - Deliver 4 style directions as 4 HTML files.
   - Let the user pick the preferred direction.
5. Board preview:
   - Start the board and show all 4 directions in one view.
6. Single direction continuation:
   - Apply the selected direction consistently to all remaining pages.
7. Require explicit user approval before moving to the next step.

See references/workflow.md for the detailed procedure and constraints.

## Step-to-tool mapping
1. Structure intent mapping:
   - No tools required; keep internal notes only.
2. Style exploration:
   - Prepare theme CSS directions under `/.superdesign/themes/`.
   - Ensure baseline CSS exists.
3. Motion design:
   - Document micro-interaction rules; no tools required.
4. First page output:
   - Write 4 HTML files into `/.superdesign/design_iterations/`.
   - Link baseline CSS first (if present), then theme CSS.
5. Board preview:
   - Create the one-click script in `/.superdesign/design_iterations/`.
   - Start the board server so the user can compare directions.
6. After selection:
   - Continue with a single selected direction only.
## Tools & Commands (when to use)
### Local board server
- Use after step 4 (first-page HTML variants generated) to let the user compare and pick a style.
- Purpose: serve the design iteration board and render HTML pages as a canvas of iframes.
- Command (from project root):
  - `./.superdesign/design_iterations/start_board.sh`
- Fallback (if the script is unavailable):
  - `python3 /path/to/skill/scripts/serve_dashboard.py --root <project>/.superdesign --port 3077`
- If the port is in use:
  - Re-run with a different port, e.g. `--port 3088`

### Scripts included in this skill
- `scripts/serve_dashboard.py`
  - Standalone HTTP server for the board UI and file browsing.
  - Use for preview if the project does not provide `start_board.sh`.
- `scripts/start_board.sh`
  - Template one-click board script (macOS/Linux).
  - Use at step 5: copy into `/.superdesign/design_iterations/start_board.sh` with the absolute path preserved.
- `scripts/test_dashboard.py`
  - Smoke test for the dashboard server.
- `scripts/test_board_state.js`
  - Unit test for the board UI state helpers.

## Artifacts & Output Paths
- Design HTML outputs:
  - `/.superdesign/design_iterations/` (project workspace)
- Theme CSS outputs:
  - `/.superdesign/themes/` (project workspace)
- Default UI baseline CSS:
  - `/.superdesign/design_iterations/default_ui_darkmode.css` (copy from references/default_ui_darkmode.css)
- Board UI assets:
  - `assets/dashboard/` (inside this skill package)
- Data index endpoint:
  - `GET /api/index` from the local board server

## Naming conventions (required)
- Slug rules:
  - Use lowercase ASCII only.
  - Replace spaces with `-`.
  - Remove symbols; keep letters, numbers, and `-` only.
- Theme CSS file:
  - `/.superdesign/themes/{project_slug}_{style_name}.css`
- First-page HTML directions:
  - `/.superdesign/design_iterations/{page_slug}_{style_name}_1.html`
- Subsequent pages (single chosen style only):
  - `/.superdesign/design_iterations/{page_slug}_{style_name}_{n}.html`

## Theme linking rule
- Every HTML page must include the selected theme CSS via a `<link>` tag.
- Use the exact path in the workspace:
  - `/.superdesign/themes/{project_slug}_{style_name}.css`
- If `default_ui_darkmode.css` exists, load it first, then load the chosen theme CSS after it.

## Visual fidelity rules
- Use open-source images (real URLs) instead of placeholders.
- Use real icons from open-source icon libraries; no empty placeholders.
- Use 4pt or 8pt spacing system and keep touch targets ≥ 48px.
- Do not use emoji in any UI text, labels, or icons.
- Follow references/icon-text-guideline.md to decide icon-only vs. icon + text usage.

## Style exploration guidance (non-formula)
- The 4 directions must be clearly different in design intent, not minor variants.
- Differences should be obvious at first glance so the user can pick a direction confidently.
- Each direction should combine multiple changes together:
  - Layout structure and information flow
  - Typography pairing and hierarchy emphasis
  - Density and whitespace rhythm
  - Component language (card vs. non-card, border vs. shadow)
  - Accent usage and focal points
  - Image treatment and cropping
- If user preferences are present, include a short rationale for any alternative directions outside that scope.

## Exploration mindset
- Design should be bold and exploratory, not restricted to common patterns.
- Propose fresh but usable structures and interactions grounded in product logic.
- Avoid safe, repetitive templates; pursue novelty when it improves clarity or delight.

## Integration notes
- The board server is only meaningful after HTML pages exist.
- For multi-page projects, keep the selected style consistent across all subsequent pages.
- Always tell the user the local URL printed by the server and how to stop it.
- If the board script is missing, generate it before asking the user to run it.

## Skill tree
- Design workflow
  - Structure intent mapping (internal)
  - 4-direction style exploration and selection
  - Motion and micro-interactions
  - First page multi-direction output, single-direction continuation
  - Local board server usage
- Design guidelines
  - Color, typography, responsiveness
  - Component/background contrast rules
  - Asset usage constraints (images/icons/scripts)
- Template library
  - Neo-brutalism theme
  - Modern dark mode theme
  - Additional style templates (see references/theme-templates.md)

## References
- references/design-guidelines.md
- references/default_ui_darkmode.css
- references/icon-text-guideline.md
- references/theme-spec.md
- references/theme-templates.md
- references/workflow.md
- references/board-architecture.md
- references/board-interactions.md
- references/board-index-spec.md
- references/board-runbook.md
