# Theme Specification (SuperDesign)

## Required structure
- Must include a :root selector with CSS custom properties.
- Each property uses format: --variable-name: value;
- Each property ends with a semicolon.
- Optional: provide a .dark selector for dark mode overrides.

## Required variables
### Core colors
- --background
- --foreground
- --card
- --card-foreground
- --popover
- --popover-foreground

### Semantic colors
- --primary
- --primary-foreground
- --secondary
- --secondary-foreground
- --muted
- --muted-foreground
- --accent
- --accent-foreground
- --destructive
- --destructive-foreground

### Form and outline
- --border
- --input
- --ring

### Data visualization
- --chart-1
- --chart-2
- --chart-3
- --chart-4
- --chart-5

### Sidebar
- --sidebar
- --sidebar-foreground
- --sidebar-primary
- --sidebar-primary-foreground
- --sidebar-accent
- --sidebar-accent-foreground
- --sidebar-border
- --sidebar-ring

### Typography
- --font-sans
- --font-serif
- --font-mono

### Spacing and radius
- --radius
- --spacing

### Shadows
- --shadow-2xs
- --shadow-xs
- --shadow-sm
- --shadow
- --shadow-md
- --shadow-lg
- --shadow-xl
- --shadow-2xl

## Optional extensions
- You may add additional variables if needed, but include all required variables above.
