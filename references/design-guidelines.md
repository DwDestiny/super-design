# Design Guidelines (SuperDesign)

## Baseline libraries
- Use Flowbite as the base UI library unless the user explicitly requests otherwise.
- Include Tailwind via CDN script:
  - <script src="https://cdn.tailwindcss.com"></script>
- Include Flowbite via CDN script:
  - <script src="https://cdn.jsdelivr.net/npm/flowbite@2.0.0/dist/flowbite.min.js"></script>

## Color rules
- Avoid indigo or blue by default. Only use blue/indigo when the user explicitly asks for it.
- Maintain clear contrast between background and foreground.

## Responsiveness
- Designs must be responsive by default.

## Spacing system
- Use a 4pt or 8pt spacing system only.
- All margins, padding, line-heights, and element sizes must be exact multiples.
- Touch targets must be at least 48x48px.

## Component/background contrast
- For components, posters, or any single-element design (not a full app screen), ensure the background contrasts the component well:
  - Light component -> dark background
  - Dark component -> light background

## Typography
- Use Google Fonts.
- Default font list:
  - JetBrains Mono
  - Fira Code
  - Source Code Pro
  - IBM Plex Mono
  - Roboto Mono
  - Space Mono
  - Geist Mono
  - Inter
  - Roboto
  - Open Sans
  - Poppins
  - Montserrat
  - Outfit
  - Plus Jakarta Sans
  - DM Sans
  - Geist
  - Oxanium
  - Architects Daughter
  - Merriweather
  - Playfair Display
  - Lora
  - Source Serif Pro
  - Libre Baskerville
  - Space Grotesk

## CSS precedence
- Add !important to any CSS property that could be overridden by Tailwind/Flowbite (e.g., body, h1, etc.).

## Images (high-fidelity required)
- Always use real, open-source image URLs to replace placeholders.
- Do not fabricate URLs.
- Recommended sources (direct image links only):
  - https://images.unsplash.com/ (Unsplash)
  - https://images.pexels.com/ (Pexels)

## Icons (must use real icons)
- Do not use empty placeholders for icons.
- Choose one open-source icon library and use real icons throughout.
- Recommended libraries by style:
  - Minimal / SaaS: Lucide (clean outline)
    - https://unpkg.com/lucide@latest/dist/umd/lucide.min.js
  - Apple-like / rounded: Heroicons (outline/solid)
    - Use SVG exports from https://heroicons.com/
  - Enterprise / filled: Material Symbols
    - https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined
  - Brand / social: Simple Icons
    - https://simpleicons.org/
  - Creative / playful: Phosphor Icons
    - https://unpkg.com/@phosphor-icons/web
- For Lucide, include and activate:
  - <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  - lucide.createIcons();

## Interaction & motion
- Use subtle micro-interactions: hover, focus, active, and press states.
- Keep motion under 200ms for UI feedback; avoid large scale jumps.
- Buttons, cards, and menus should all have hover feedback.
- Prefer opacity, shadow, and border color transitions to heavy transforms.

## Forbidden
- Do not use emoji in any UI text, labels, or icons.
