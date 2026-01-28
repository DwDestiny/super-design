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

## Images
- Use only known public URLs (e.g., Unsplash, placehold.co). Do not fabricate URLs.

## Icons
- Prefer Lucide icons. Include:
  - <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
