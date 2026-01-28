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
1. Layout design: produce an ASCII wireframe.
2. Theme design: propose 3 recommended style variants based on the user’s business context.
3. Motion design: specify micro-interactions and transitions aligned to the chosen style.
4. Generate the first single-page HTML design in 3 style variants.
5. Tell the user how to start the local board server and view the dashboard.
6. After the user selects a style, all subsequent pages must follow the chosen style.
7. Require explicit user approval before moving to the next step.

See references/workflow.md for the detailed procedure and constraints.

## Tools & Commands (when to use)
### Local board server
- Use after step 4 (first-page HTML variants generated) to let the user compare and pick a style.
- Purpose: serve the design iteration board and render HTML pages as a canvas of iframes.
- Command (from project root):
  - `./.superdesign/design_iterations/start_board.sh`
- Fallback (if the script is unavailable):
  - `python3 /path/to/skill/scripts/serve_dashboard.py --root <project>/.superdesign/design_iterations --port 3077`

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
  - `/.superdesign/themes/{project_slug}_{variant}.css`
- First-page HTML variants:
  - `/.superdesign/design_iterations/{page_slug}_A_1.html`
  - `/.superdesign/design_iterations/{page_slug}_B_1.html`
  - `/.superdesign/design_iterations/{page_slug}_C_1.html`
- Subsequent pages (single chosen style only):
  - `/.superdesign/design_iterations/{page_slug}_{chosen_variant}_{n}.html`

## Theme linking rule
- Every HTML page must include the selected theme CSS via a `<link>` tag.
- Use the exact path in the workspace:
  - `/.superdesign/themes/{project_slug}_{chosen_variant}.css`
- If `default_ui_darkmode.css` exists, load it first, then load the chosen theme CSS after it.

## Visual fidelity rules
- Use open-source images (real URLs) instead of placeholders.
- Use real icons from open-source icon libraries; no empty placeholders.
- Use 4pt or 8pt spacing system and keep touch targets ≥ 48px.

## Integration notes
- The board server is only meaningful after HTML pages exist.
- For multi-page projects, keep the selected style consistent across all subsequent pages.
- Always tell the user the local URL printed by the server and how to stop it.

## Skill tree
- Design workflow
  - ASCII wireframing and layout decomposition
  - 3-variant theme recommendation and selection
  - Motion and micro-interactions
  - 3-variant first page, single-style continuation
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
- references/theme-spec.md
- references/theme-templates.md
- references/workflow.md
- references/board-architecture.md
- references/board-interactions.md
- references/board-index-spec.md
- references/board-runbook.md
