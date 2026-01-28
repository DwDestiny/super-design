# Board Index Spec

## File naming conventions
- Base: design_iterations/{design_name}_{n}.html
- Variant labels for the first page:
  - design_iterations/{design_name}_A_{n}.html
  - design_iterations/{design_name}_B_{n}.html
  - design_iterations/{design_name}_C_{n}.html

## Parsing logic
- group = design_name
- variant = A/B/C (optional)
- version = numeric suffix (optional)

## JSON fields (from /api/index)
```
{
  "root": ".superdesign",
  "generated_at": "2026-01-28T00:00:00Z",
  "designs": [
    {
      "name": "landing_A_1.html",
      "path": "landing_A_1.html",
      "group": "landing",
      "variant": "A",
      "version": 1,
      "modified_at": "2026-01-28T00:00:00",
      "size": 12345
    }
  ]
}
```
