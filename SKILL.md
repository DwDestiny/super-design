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
Global constraint: once this skill is active, follow the workflow strictly unless the user explicitly asks to deviate.
1. Business understanding (internal):
   - Extract core product information from user-provided context (text, docs, images).
   - Capture target users, usage scenarios, user flows, feature list, and content types.
   - Do not include design topics (layout, theme, visual direction).
   - Output a written brief to the strategy directory.
2. Page intent mapping (internal):
   - Determine required page count and the goal of each page (analysis, operation, conversion).
   - Identify visual priorities for each page based on the goal.
   - Output a page intent map to the strategy directory.
3. Skeleton exploration (internal):
   - Build 3–5 skeleton options for the first page and render full HTML with a neutral, shared visual tone.
   - Focus on structure, information flow, and density; keep component styling intentionally neutral.
   - If the user specifies a skeleton, output that as one option and still propose additional recommendations.
   - Output skeleton options with short rationales to the strategy directory.
4. Skeleton preview (external):
   - Provide a one-click board script so the user can preview and pick the preferred skeleton.
5. Theme exploration (external):
   - If the user specifies a preferred style or layout, generate 4 directions within that scope.
   - Additionally, explore 3–4 alternative directions outside the user’s scope and explain why they may be stronger.
   - If the user does not specify a style, generate 4 clearly different directions for the first page.
   - If the user specifies a direction count, honor that count.
   - Keep the chosen skeleton fixed; let themes reshape component language, typography, and color.
6. Motion design:
   - Define micro-interactions that reinforce the selected style direction.
7. Theme output:
   - Deliver multiple theme directions as HTML files built on the selected skeleton.
   - Let the user pick the preferred theme.
8. Board preview:
   - Start the board and show all theme directions in one view.
9. Single direction continuation:
   - Apply the selected direction consistently to all remaining pages.
10. Require explicit user approval before moving to the next step.

See references/workflow.md for the detailed procedure and constraints.

## Step-to-tool mapping
1. Business understanding:
   - No tools required; produce internal strategy brief.
2. Page intent mapping:
   - No tools required; produce internal page intent map.
3. Skeleton exploration:
   - Produce full HTML skeletons with a shared neutral tone.
4. Skeleton preview:
   - Create the one-click script in `/.superdesign/design_iterations/` and tell the user to launch the board.
5. Theme exploration:
   - Prepare theme CSS directions under `/.superdesign/themes/`.
   - Ensure baseline CSS exists.
6. Motion design:
   - Document micro-interaction rules; no tools required.
7. Theme output:
   - Write theme HTML files into `/.superdesign/design_iterations/`.
   - Link baseline CSS first (if present), then theme CSS.
8. Board preview:
   - Start the board server so the user can compare theme directions.
9. After selection:
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
  - Use at step 5: copy into `/.superdesign/design_iterations/start_board.sh` and replace placeholders with local paths.
- `scripts/test_dashboard.py`
  - Smoke test for the dashboard server.
- `scripts/test_board_state.js`
  - Unit test for the board UI state helpers.

## Artifacts & Output Paths
- Strategy outputs:
  - `/.superdesign/strategy/01_product_brief.md`
  - `/.superdesign/strategy/02_page_intent_map.md`
  - `/.superdesign/strategy/03_skeleton_options.md`
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
- Strategy docs:
  - `/.superdesign/strategy/01_product_brief.md`
  - `/.superdesign/strategy/02_page_intent_map.md`
  - `/.superdesign/strategy/03_skeleton_options.md`

## Theme linking rule
- Every HTML page must include the selected theme CSS via a `<link>` tag.
- Use the exact path in the workspace:
  - `/.superdesign/themes/{project_slug}_{style_name}.css`
- If `default_ui_darkmode.css` exists, load it first, then load the chosen theme CSS after it.
- When served via the board, prefer `/files/...` absolute URLs for HTML/CSS/JS assets to avoid relative path breakage.

## Visual fidelity rules
- Use open-source images (real URLs) instead of placeholders.
- Use real icons from open-source icon libraries; no empty placeholders.
- Use 4pt or 8pt spacing system and keep touch targets ≥ 48px.
- Do not use emoji in any UI text, labels, or icons.
- Follow references/icon-text-guideline.md to decide icon-only vs. icon + text usage.
- If the user provides explicit product feature planning, follow it strictly and do not add new modules.
- No placeholders anywhere. Generate realistic mock content by understanding the business context and requirements, including data, avatars, logos, icons, lists, and charts. Do not wait for provided assets or data; create domain-appropriate mock content so every element looks production-ready.

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
- If the user specifies a direction count, follow it exactly for the first-page outputs.
- Business understanding, page intent mapping, and skeleton exploration are internal deliverables; summarize progress without requesting approval.
 - The strategy outputs must explicitly confirm mock content coverage and rule compliance.

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
- references/skeleton-guidance.md
- references/theme-spec.md
- references/theme-templates.md
- references/workflow.md
- references/board-architecture.md
- references/board-interactions.md
- references/board-index-spec.md
- references/board-runbook.md
