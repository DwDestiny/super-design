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
- references/theme-spec.md
- references/theme-templates.md
- references/workflow.md
- references/board-architecture.md
- references/board-interactions.md
- references/board-index-spec.md
- references/board-runbook.md
