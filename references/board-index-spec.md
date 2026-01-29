# Board Index Spec

## File naming conventions
- Base: design_iterations/{page_slug}_{style_name}_{n}.html
- Direction labels for the first page:
  - design_iterations/{page_slug}_{style_name}_1.html

## Parsing logic
- group = page_slug
- variant = style_name (optional)
- version = numeric suffix (optional)

## JSON fields (from /api/index)
```
{
  "root": ".superdesign",
  "generated_at": "2026-01-28T00:00:00Z",
  "designs": [
    {
      "name": "landing_neon_1.html",
      "path": "design_iterations/landing_neon_1.html",
      "group": "landing",
      "variant": "neon",
      "version": 1,
      "modified_at": "2026-01-28T00:00:00",
      "size": 12345
    }
  ]
}
```
