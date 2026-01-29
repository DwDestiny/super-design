# Workflow (SuperDesign)

## Mandatory sequence
1. Structure intent mapping (internal)
2. Style exploration (4 distinct directions)
3. Motion design (aligned to the selected direction)
4. Generate the first single-page HTML in 4 directions
5. Write a one-click board script into the prototype directory and tell the user how to run it
6. User selects a preferred direction
7. All subsequent pages follow the selected direction
8. Require explicit user approval before moving to the next step

## Structure intent mapping (internal)
- Use PRD to define each page’s intent and hierarchy.
- Decide layout direction internally; do not ask the user to confirm layout.
- Keep this as internal reasoning, not an external deliverable.

## Style exploration requirements (4 directions)
- Recommend 4 clearly different style directions based on product attributes, target audience, and usage context.
- If the user specifies a preferred style or layout, generate 4 directions within that scope.
- Additionally, explore 3–4 alternative directions outside the user’s scope and explain why they may be stronger.
- Differences must be obvious at first glance (not just color changes).
- Each direction must:
  - Use the theme variable specification from references/theme-spec.md.
  - Select typography from the approved Google Fonts list in references/design-guidelines.md.
  - Be clearly labeled with a short rationale.
  - Use 4pt or 8pt spacing system and touch targets ≥ 48px.
  - Use real icons and real open-source images for fidelity.
  - Apply icon/text decision guidance from references/icon-text-guideline.md.

## Motion design requirements
- Define micro-interactions and transitions for key UI elements.
- Keep motion subtle and consistent with the chosen theme.

## HTML output constraints (first page)
- Output a single HTML page for one screen only.
- For the first page, generate 4 HTML directions aligned to the 4 recommended styles.
- Use the file naming convention:
  - .superdesign/design_iterations/{page_slug}_{style_name}_1.html
- Reference the theme CSS file created in the Theme step.

## Board server notice
- After generating the first 3 HTML variants, create a one-click script in the prototype directory:
  - macOS/Linux: design_iterations/start_board.sh
  - Windows: design_iterations/start_board.ps1
- Use the exact commands from references/board-runbook.md (absolute path already filled).
- Explain to the user that the dashboard will list all versions and allow preview in one place.

## Directory and naming rules (all steps)
- Base workspace directory:
  - .superdesign/
- Default UI baseline CSS:
  - .superdesign/design_iterations/default_ui_darkmode.css (copy from references/default_ui_darkmode.css)
- Slug rules:
  - Use lowercase ASCII only.
  - Replace spaces with `-`.
  - Remove symbols; keep letters, numbers, and `-` only.
- Theme outputs (step 2):
  - .superdesign/themes/{project_slug}_{style_name}.css
- HTML outputs (step 4 and after):
  - .superdesign/design_iterations/{page_slug}_{variant}_{n}.html
- Board script location (step 5):
  - .superdesign/design_iterations/start_board.sh
  - .superdesign/design_iterations/start_board.ps1

## Theme linking rule
- Every HTML page must include the selected theme CSS via a <link> tag:
  - /.superdesign/themes/{project_slug}_{style_name}.css
- If default_ui_darkmode.css exists, load it before the chosen theme CSS.

## After selection
- Ask the user to pick one direction (from both in-scope and alternative proposals).
- Continue all remaining pages using only the selected direction.
- Do not re-offer multiple directions unless the user asks.

## Exploration mindset
- Be bold and exploratory; avoid defaulting to common templates.
- Propose fresh but reasonable layouts and interactions with clear rationale.

## Approval checkpoints
- Do not ask the user to confirm layout; keep it internal.
- Ask for confirmation after presenting the 4 style directions.
- Do not proceed to Motion until the user approves the chosen direction.
- Do not generate additional pages until the user approves Motion.
