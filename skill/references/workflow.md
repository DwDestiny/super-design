# Workflow (SuperDesign)

## Mandatory sequence
1. Business understanding (internal)
2. Page intent mapping (internal)
3. Skeleton exploration (internal)
4. Skeleton preview (board)
5. Theme exploration (4 distinct directions)
6. Motion design (aligned to the selected direction)
7. Generate the first single-page HTML in 4 directions
8. Write a one-click board script into the prototype directory and tell the user how to run it
9. User selects a preferred direction
10. All subsequent pages follow the selected direction
11. Require explicit user approval before moving to the next step

## Business understanding (internal)
- Extract product information from user-provided context (text, docs, images).
- Capture target users, usage scenarios, user flows, feature list, and required content types.
- Do not include design decisions (layout, theme, visual direction).
- Output: `.superdesign/strategy/01_product_brief.md`.
- This step is internal; do not ask for approval. Inform the user that analysis is complete.

## Page intent mapping (internal)
- Determine required page count and each page’s intent (analysis, operation, conversion).
- Define visual priorities per page based on its intent.
- Output: `.superdesign/strategy/02_page_intent_map.md`.
- This step is internal; do not ask for approval. Inform the user that mapping is complete.

## Skeleton exploration (internal)
- Build 3–5 skeleton options for the first page and render full HTML with a neutral, shared visual tone.
- Emphasize structure, information flow, and density; keep component styling intentionally neutral.
- If the user specifies a skeleton, output that as one option and still propose additional recommendations.
- Use references/skeleton-guidance.md as a reasoning aid (not a formula).
- Output: `.superdesign/strategy/03_skeleton_options.md`.
- This step is internal; do not ask for approval. Inform the user that skeletons are prepared.
- Note: skeletons define structure logic; style exploration translates the chosen skeleton into visual language.

## Skeleton preview (board)
- Provide the one-click board script after skeleton HTML is generated.
- Tell the user to use the board to compare skeletons and choose a structure.

## Theme exploration requirements (direction count and selection timing)
- Default to 4 clearly different style directions based on product attributes, target audience, and usage context.
- If the user specifies a direction count (e.g. 5 or 6), honor that count.
- If the user specifies a preferred style or layout, generate directions within that scope.
- Additionally, explore 3–4 alternative directions outside the user’s scope and explain why they may be stronger.
- Differences must be obvious at first glance (not just color changes).
- Each direction must:
  - Use the theme variable specification from references/theme-spec.md.
  - Select typography from the approved Google Fonts list in references/design-guidelines.md.
  - Be clearly labeled with a short rationale.
  - Use 4pt or 8pt spacing system and touch targets ≥ 48px.
  - Use real icons and real open-source images for fidelity.
  - Apply icon/text decision guidance from references/icon-text-guideline.md.
  - Respect the user's explicit product feature planning; do not add extra modules.
  - No placeholders anywhere. Generate realistic mock content by understanding the business context and requirements, including data, avatars, logos, icons, lists, and charts. Do not wait for provided assets or data; create domain-appropriate mock content so every element looks production-ready.
  - Keep the chosen skeleton fixed; vary visual language, components, and color to express theme.

## Motion design requirements
- Define micro-interactions and transitions for key UI elements.
- Keep motion subtle and consistent with the chosen theme.

## HTML output constraints (first page)
- Output a single HTML page for one screen only.
- For the first page, generate HTML directions aligned to the explored directions.
- Use the file naming convention:
  - .superdesign/design_iterations/{page_slug}_{style_name}_1.html
- Reference the theme CSS file created in the Theme step.

## Selection timing (important)
- Do not ask the user to choose a direction before visual outputs exist.
- The user should select a direction only after reviewing the actual HTML previews.
- Use text-only direction names for explanation, not as a pre‑selection gate.

## Direction delivery checklist (each direction)
- Provide a brief note on icon/text strategy (based on references/icon-text-guideline.md).
- Confirm mock content coverage (no placeholders, realistic data and assets).
- Confirm alignment with the user’s feature plan (no added modules).
- State explicitly that placeholders are fully replaced with mock content.

## Board server notice
- After generating the first 3 HTML variants, create a one-click script in the prototype directory:
  - macOS/Linux: design_iterations/start_board.sh
  - Windows: design_iterations/start_board.ps1
- Use the commands from references/board-runbook.md and replace placeholders for the local environment.
- Explain to the user that the dashboard will list all versions and allow preview in one place.

## Directory and naming rules (all steps)
- Base workspace directory:
  - .superdesign/
- Strategy outputs (steps 1–3):
  - .superdesign/strategy/01_product_brief.md
  - .superdesign/strategy/02_page_intent_map.md
  - .superdesign/strategy/03_skeleton_options.md
  - Include: summary, key assumptions, and risks (if any) to keep strategy reusable.
- Default UI baseline CSS:
  - .superdesign/design_iterations/default_ui_darkmode.css (copy from references/default_ui_darkmode.css)
- Slug rules:
  - Use lowercase ASCII only.
  - Replace spaces with `-`.
  - Remove symbols; keep letters, numbers, and `-` only.
- Theme outputs (style exploration):
  - .superdesign/themes/{project_slug}_{style_name}.css
- HTML outputs (first page and after):
  - .superdesign/design_iterations/{page_slug}_{variant}_{n}.html
- Board script location (board step):
  - .superdesign/design_iterations/start_board.sh
  - .superdesign/design_iterations/start_board.ps1

## Theme linking rule
- Every HTML page must include the selected theme CSS via a <link> tag:
  - /.superdesign/themes/{project_slug}_{style_name}.css
- If default_ui_darkmode.css exists, load it before the chosen theme CSS.
- When running in the board, use `/files/...` absolute URLs for HTML/CSS/JS assets to avoid relative path failures.

## After selection
- Ask the user to pick one direction (from both in-scope and alternative proposals).
- Continue all remaining pages using only the selected direction.
- Do not re-offer multiple directions unless the user asks.

## Exploration mindset
- Be bold and exploratory; avoid defaulting to common templates.
- Propose fresh but reasonable layouts and interactions with clear rationale.

## Approval checkpoints
- Do not ask the user to confirm layout; keep it internal.
- Ask for confirmation only after presenting the visual directions.
- Do not proceed to Motion until the user approves the chosen direction.
- Do not generate additional pages until the user approves Motion.
