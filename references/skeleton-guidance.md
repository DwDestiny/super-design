# Skeleton Design Guidance (Experience Notes)

This guidance is a decision aid for building layout skeletons. It is not a formula. Use it to translate product intent into structure while keeping room for exploration.

## 1) Skeletons define content hierarchy, not decoration
Skeletons should make the content hierarchy obvious at a glance. Use size, placement, and grouping to communicate priority before any styling is applied.

## 2) Avoid too many regions
Too many regions fragment attention and create awkward L-shaped flows. Prefer fewer regions with stronger whitespace separation to keep structure readable.

## 3) Device context shapes skeleton tendencies (not strict rules)
- **Mobile**: single-column rhythm, clear vertical progression, reduce side-by-side density.
- **Tablet**: hybrid structures with a stable primary column and supporting side rails when needed.
- **Desktop**: can support multi-region layouts (navigation, content canvas, side rail), but avoid slicing into too many micro-panels.

## 4) Use structure to reflect intent
Skeletons should map to the page goal:
- **Analysis**: emphasize summary metrics and comparative blocks.
- **Operation**: center the primary workspace and keep secondary tools within reach.
- **Conversion**: lead with narrative, reduce competing regions, and keep focus paths clear.

## 5) Keep main content readable
When content is dense, constrain line length and keep main reading zones clear. Many service layouts default to a primary column, with optional secondary space when needed.

## 6) Region roles should be explicit
Each region should have a role: navigation, primary content, secondary context, or tools. Avoid regions that have no clear function.

## 7) White space is a structural tool
Use white space to separate roles instead of adding more dividers or panels. This keeps skeletons clean and reduces visual noise.

---

This guidance should inform skeleton options, not constrain them. The goal is to propose multiple plausible structures that express the same intent with different rhythms.
