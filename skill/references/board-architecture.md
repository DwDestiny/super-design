# Board Architecture (Web Dashboard)

## Purpose
Provide a local web dashboard to browse, compare, and preview all prototype HTML files without opening many tabs.

## Architecture overview
- Local HTTP server (script: scripts/serve_dashboard.py)
- Static dashboard UI (assets/dashboard/index.html)
- API endpoint: /api/index (JSON list of prototypes)
- File endpoint: /files/<relative-path> (serves HTML/SVG)

## Data flow
1. Server scans the prototype directory (default: .superdesign/design_iterations)
2. Server builds an index (group, variant, version, timestamps)
3. Dashboard UI fetches /api/index
4. Dashboard renders groups, cards, and iframe previews

## Security boundary
- All file requests are restricted to the configured root directory.
- Path traversal is blocked by resolving and checking the root prefix.

## Extensibility
- Add thumbnail generation for each HTML file.
- Add caching for large directories.
- Add tags/labels from front-matter or file naming conventions.
