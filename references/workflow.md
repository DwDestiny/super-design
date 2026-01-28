# Workflow (SuperDesign)

## Mandatory sequence
1. Layout design
2. Theme design (3 recommended variants based on business context)
3. Motion design (aligned to the chosen style)
4. Generate the first single-page HTML design in 3 variants
5. Write a one-click board script into the prototype directory and tell the user how to run it
6. User selects a preferred variant
7. All subsequent pages follow the selected style
8. Require explicit user approval before moving to the next step

## Layout design requirements
- Present the layout as an ASCII wireframe.
- Include the main UI regions and components.
- Provide at least one structural variant if it improves clarity.

## Theme design requirements (3 variants)
- Recommend 3 distinct styles based on the user’s business characteristics.
- Each variant must:
  - Use the theme variable specification from references/theme-spec.md.
  - Select typography from the approved Google Fonts list in references/design-guidelines.md.
  - Be clearly labeled (Variant A/B/C) with a short rationale.
  - Use 4pt or 8pt spacing system and touch targets ≥ 48px.
  - Use real icons and real open-source images for fidelity.

## Motion design requirements
- Define micro-interactions and transitions for key UI elements.
- Keep motion subtle and consistent with the chosen theme.

## HTML output constraints (first page)
- Output a single HTML page for one screen only.
- For the first page, generate 3 HTML variants aligned to the 3 recommended styles.
- Use the file naming convention:
  - .superdesign/design_iterations/{page_slug}_A_1.html
  - .superdesign/design_iterations/{page_slug}_B_1.html
  - .superdesign/design_iterations/{page_slug}_C_1.html
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
  - .superdesign/themes/{project_slug}_{variant}.css
- HTML outputs (step 4 and after):
  - .superdesign/design_iterations/{page_slug}_{variant}_{n}.html
- Board script location (step 5):
  - .superdesign/design_iterations/start_board.sh
  - .superdesign/design_iterations/start_board.ps1

## Theme linking rule
- Every HTML page must include the selected theme CSS via a <link> tag:
  - /.superdesign/themes/{project_slug}_{chosen_variant}.css
- If default_ui_darkmode.css exists, load it before the chosen theme CSS.

## After selection
- Ask the user to pick Variant A/B/C.
- Continue all remaining pages using only the selected style.
- Do not re-offer multiple variants unless the user asks.

## Approval checkpoints
- After presenting the ASCII wireframe, ask for confirmation.
- Do not proceed to Theme until the user approves Layout.
- Do not proceed to Motion until the user approves Theme.
- Do not generate HTML until the user approves Motion.
