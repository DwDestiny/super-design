# Icon & Text Usage Guide (Design Thinking)

This guide is a decision framework, not a rigid rulebook. It synthesizes common patterns from major design systems and accessibility guidance and leaves room for creative exploration.

## 1) Core principle
Icons are a recognition accelerator, not a replacement for meaning. When meaning is ambiguous, text is the fastest way to reduce cognitive load. Icons work best when the user already understands the action or the symbol is widely recognized.

## 2) Decision cues (how to decide)
Use this thought process instead of hard rules:
- **First‑time clarity vs. repeat efficiency**
  - First‑time or high‑risk actions should prioritize text (or icon + text).
  - High‑frequency, low‑risk actions can use icon‑only when clear.
- **Semantic certainty**
  - If the icon is not universally understood, add text.
  - If the icon could mean multiple things, do not use it alone.
- **Interface density**
  - When density is high, icons can aid scanning, but only if meaning remains unambiguous.
  - If complexity rises, rely more on text to avoid misinterpretation.
- **Attention hierarchy**
  - Icons can unintentionally elevate priority. Use them only where emphasis is desired.

## 3) Scenario guidance (by interface area)
### Toolbars and quick action areas
- Icon‑only works well for compact, repeat actions if tooltips are present.
- Use tooltips to clarify meaning and improve accessibility.

### Primary or irreversible actions
- Prefer text or icon + text to avoid ambiguity.
- Clarity is more important than compactness for these actions.

### Navigation (side nav, primary menus)
- Use text as the primary label; icons can be supportive but should not replace text.
- Avoid icon‑only navigation for broad audiences.

### Data‑dense dashboards
- Icons can speed up scanning, but the moment interpretation becomes uncertain, add text or tooltips.
- Avoid icon‑only in complex layouts where users must reason about meaning.

### Mobile interfaces
- Hover tooltips are unreliable on touch devices. Prefer visible labels or icon + text.
- If icon‑only is used, ensure the icon is standard and self‑explanatory.

## 4) Theme‑sensitive usage (style alignment)
### Minimal / premium / finance
- Favor text or icon + text for clarity and trust.
- Use icons sparingly and consistently.

### SaaS / data tools
- Icon‑only can be used in toolbars and shortcuts, but support with tooltips.
- Keep icon sets consistent and reduce semantic variety.

### Brutal / retro / expressive styles
- Icons can be more decorative, but critical actions still require clear labels.
- Let style serve function, not overpower comprehension.

### Public sector / healthcare / compliance
- Emphasize clarity and accessibility. Use text labels with icons by default.
- Icons should reinforce meaning, not replace it.

## 5) Accessibility and consistency essentials
- Always provide labels for icon buttons (even if visually hidden).
- Tooltips help explain icon‑only actions, especially on desktop.
- Consistency matters: mixed icon styles or inconsistent semantics increase cognitive cost.
- One icon, one meaning: avoid reusing a single icon for different actions.

## 6) Practical checklist
- Is the icon widely understood by the target audience?
- Is the action critical or irreversible?
- Will the user encounter this for the first time?
- Is there a tooltip or label for icon‑only actions?
- Does this icon align with the chosen visual style and the rest of the set?

## 7) Recommended balance (non‑formula)
- Use **icon + text** when clarity matters most.
- Use **icon‑only** only when the action is high‑frequency, low‑risk, and universally understood.
- Avoid icon‑only navigation unless the audience is expert and highly familiar with the product.

---

This guide is meant to inform design judgment, not to enforce rigid constraints. The skill should adapt icon/text choices to product context, user familiarity, and theme direction.
