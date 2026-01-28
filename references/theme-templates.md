# Theme Templates (SuperDesign)

## Neo-brutalism style (90s web feel)

```
:root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0.6489 0.2370 26.9728);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9680 0.2110 109.7692);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.9551 0 0);
  --muted-foreground: oklch(0.3211 0 0);
  --accent: oklch(0.5635 0.2408 260.8178);
  --accent-foreground: oklch(1.0000 0 0);
  --destructive: oklch(0 0 0);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0 0 0);
  --input: oklch(0 0 0);
  --ring: oklch(0.6489 0.2370 26.9728);
  --chart-1: oklch(0.6489 0.2370 26.9728);
  --chart-2: oklch(0.9680 0.2110 109.7692);
  --chart-3: oklch(0.5635 0.2408 260.8178);
  --chart-4: oklch(0.7323 0.2492 142.4953);
  --chart-5: oklch(0.5931 0.2726 328.3634);
  --sidebar: oklch(0.9551 0 0);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0.6489 0.2370 26.9728);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.5635 0.2408 260.8178);
  --sidebar-accent-foreground: oklch(1.0000 0 0);
  --sidebar-border: oklch(0 0 0);
  --sidebar-ring: oklch(0.6489 0.2370 26.9728);
  --font-sans: DM Sans, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: Space Mono, monospace;
  --radius: 0px;
  --shadow-2xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
  --shadow-xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
  --shadow-sm: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
  --shadow: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
  --shadow-md: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00);
  --shadow-lg: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00);
  --shadow-xl: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00);
  --shadow-2xl: 4px 4px 0px 0px hsl(0 0% 0% / 2.50);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Modern dark mode (Vercel/Linear style)

```
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.1450 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.1450 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1450 0 0);
  --primary: oklch(0.2050 0 0);
  --primary-foreground: oklch(0.9850 0 0);
  --secondary: oklch(0.9700 0 0);
  --secondary-foreground: oklch(0.2050 0 0);
  --muted: oklch(0.9700 0 0);
  --muted-foreground: oklch(0.5560 0 0);
  --accent: oklch(0.9700 0 0);
  --accent-foreground: oklch(0.2050 0 0);
  --destructive: oklch(0.5770 0.2450 27.3250);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.9220 0 0);
  --input: oklch(0.9220 0 0);
  --ring: oklch(0.7080 0 0);
  --chart-1: oklch(0.8100 0.1000 252);
  --chart-2: oklch(0.6200 0.1900 260);
  --chart-3: oklch(0.5500 0.2200 263);
  --chart-4: oklch(0.4900 0.2200 264);
  --chart-5: oklch(0.4200 0.1800 266);
  --sidebar: oklch(0.9850 0 0);
  --sidebar-foreground: oklch(0.1450 0 0);
  --sidebar-primary: oklch(0.2050 0 0);
  --sidebar-primary-foreground: oklch(0.9850 0 0);
  --sidebar-accent: oklch(0.9700 0 0);
  --sidebar-accent-foreground: oklch(0.2050 0 0);
  --sidebar-border: oklch(0.9220 0 0);
  --sidebar-ring: oklch(0.7080 0 0);
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.625rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Minimal light (clean product UI)

```
:root {
  --background: oklch(0.995 0.002 260);
  --foreground: oklch(0.160 0.010 260);
  --card: oklch(1.000 0 0);
  --card-foreground: oklch(0.160 0.010 260);
  --popover: oklch(1.000 0 0);
  --popover-foreground: oklch(0.160 0.010 260);
  --primary: oklch(0.260 0.030 260);
  --primary-foreground: oklch(0.980 0 0);
  --secondary: oklch(0.960 0.004 260);
  --secondary-foreground: oklch(0.220 0.020 260);
  --muted: oklch(0.970 0.003 260);
  --muted-foreground: oklch(0.500 0.010 260);
  --accent: oklch(0.950 0.006 260);
  --accent-foreground: oklch(0.260 0.030 260);
  --destructive: oklch(0.610 0.190 29.0);
  --destructive-foreground: oklch(0.980 0 0);
  --border: oklch(0.920 0.006 260);
  --input: oklch(0.920 0.006 260);
  --ring: oklch(0.620 0.040 260);
  --chart-1: oklch(0.620 0.120 250);
  --chart-2: oklch(0.680 0.100 190);
  --chart-3: oklch(0.720 0.080 120);
  --chart-4: oklch(0.640 0.110 20);
  --chart-5: oklch(0.560 0.090 320);
  --sidebar: oklch(0.990 0.002 260);
  --sidebar-foreground: oklch(0.180 0.010 260);
  --sidebar-primary: oklch(0.260 0.030 260);
  --sidebar-primary-foreground: oklch(0.980 0 0);
  --sidebar-accent: oklch(0.960 0.004 260);
  --sidebar-accent-foreground: oklch(0.220 0.020 260);
  --sidebar-border: oklch(0.920 0.006 260);
  --sidebar-ring: oklch(0.620 0.040 260);
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  --font-serif: "Source Serif Pro", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 2px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0 1px 3px hsl(0 0% 0% / 0.06);
  --shadow-sm: 0 2px 6px hsl(0 0% 0% / 0.08);
  --shadow: 0 4px 10px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 6px 16px hsl(0 0% 0% / 0.12);
  --shadow-lg: 0 10px 24px hsl(0 0% 0% / 0.14);
  --shadow-xl: 0 16px 40px hsl(0 0% 0% / 0.16);
  --shadow-2xl: 0 24px 60px hsl(0 0% 0% / 0.18);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Soft pastel (friendly UI)

```
:root {
  --background: oklch(0.985 0.015 90);
  --foreground: oklch(0.200 0.015 270);
  --card: oklch(0.995 0.010 90);
  --card-foreground: oklch(0.200 0.015 270);
  --popover: oklch(0.995 0.010 90);
  --popover-foreground: oklch(0.200 0.015 270);
  --primary: oklch(0.720 0.120 300);
  --primary-foreground: oklch(0.120 0.010 270);
  --secondary: oklch(0.900 0.050 160);
  --secondary-foreground: oklch(0.180 0.015 270);
  --muted: oklch(0.940 0.030 90);
  --muted-foreground: oklch(0.450 0.020 270);
  --accent: oklch(0.900 0.060 40);
  --accent-foreground: oklch(0.180 0.015 270);
  --destructive: oklch(0.650 0.170 25);
  --destructive-foreground: oklch(0.985 0.010 90);
  --border: oklch(0.900 0.020 90);
  --input: oklch(0.900 0.020 90);
  --ring: oklch(0.720 0.120 300);
  --chart-1: oklch(0.740 0.110 300);
  --chart-2: oklch(0.820 0.080 160);
  --chart-3: oklch(0.860 0.070 40);
  --chart-4: oklch(0.760 0.090 210);
  --chart-5: oklch(0.700 0.100 20);
  --sidebar: oklch(0.980 0.010 90);
  --sidebar-foreground: oklch(0.200 0.015 270);
  --sidebar-primary: oklch(0.720 0.120 300);
  --sidebar-primary-foreground: oklch(0.120 0.010 270);
  --sidebar-accent: oklch(0.900 0.050 160);
  --sidebar-accent-foreground: oklch(0.180 0.015 270);
  --sidebar-border: oklch(0.900 0.020 90);
  --sidebar-ring: oklch(0.720 0.120 300);
  --font-sans: "Plus Jakarta Sans", "DM Sans", ui-sans-serif, system-ui;
  --font-serif: "Merriweather", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.75rem;
  --shadow-2xs: 0 1px 3px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0 2px 6px hsl(0 0% 0% / 0.06);
  --shadow-sm: 0 4px 10px hsl(0 0% 0% / 0.08);
  --shadow: 0 6px 14px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 8px 18px hsl(0 0% 0% / 0.12);
  --shadow-lg: 0 12px 24px hsl(0 0% 0% / 0.14);
  --shadow-xl: 0 16px 36px hsl(0 0% 0% / 0.16);
  --shadow-2xl: 0 22px 48px hsl(0 0% 0% / 0.18);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Glassmorphism dark (frosted panels)

```
:root {
  --background: oklch(0.120 0.020 260);
  --foreground: oklch(0.920 0.010 260);
  --card: oklch(0.180 0.020 260);
  --card-foreground: oklch(0.940 0.010 260);
  --popover: oklch(0.180 0.020 260);
  --popover-foreground: oklch(0.940 0.010 260);
  --primary: oklch(0.780 0.120 240);
  --primary-foreground: oklch(0.140 0.020 260);
  --secondary: oklch(0.260 0.030 260);
  --secondary-foreground: oklch(0.920 0.010 260);
  --muted: oklch(0.240 0.020 260);
  --muted-foreground: oklch(0.700 0.010 260);
  --accent: oklch(0.320 0.050 200);
  --accent-foreground: oklch(0.940 0.010 260);
  --destructive: oklch(0.640 0.180 25);
  --destructive-foreground: oklch(0.980 0 0);
  --border: oklch(0.260 0.030 260);
  --input: oklch(0.260 0.030 260);
  --ring: oklch(0.780 0.120 240);
  --chart-1: oklch(0.780 0.120 240);
  --chart-2: oklch(0.660 0.140 190);
  --chart-3: oklch(0.600 0.120 140);
  --chart-4: oklch(0.700 0.140 20);
  --chart-5: oklch(0.680 0.120 320);
  --sidebar: oklch(0.160 0.020 260);
  --sidebar-foreground: oklch(0.900 0.010 260);
  --sidebar-primary: oklch(0.780 0.120 240);
  --sidebar-primary-foreground: oklch(0.140 0.020 260);
  --sidebar-accent: oklch(0.260 0.040 200);
  --sidebar-accent-foreground: oklch(0.920 0.010 260);
  --sidebar-border: oklch(0.260 0.030 260);
  --sidebar-ring: oklch(0.780 0.120 240);
  --font-sans: "Geist", "Inter", ui-sans-serif, system-ui;
  --font-serif: "Merriweather", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 1rem;
  --shadow-2xs: 0 2px 6px hsl(0 0% 0% / 0.25);
  --shadow-xs: 0 4px 10px hsl(0 0% 0% / 0.30);
  --shadow-sm: 0 6px 16px hsl(0 0% 0% / 0.35);
  --shadow: 0 10px 24px hsl(0 0% 0% / 0.40);
  --shadow-md: 0 14px 32px hsl(0 0% 0% / 0.45);
  --shadow-lg: 0 18px 42px hsl(0 0% 0% / 0.50);
  --shadow-xl: 0 24px 56px hsl(0 0% 0% / 0.55);
  --shadow-2xl: 0 32px 72px hsl(0 0% 0% / 0.60);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Warm vintage (editorial)

```
:root {
  --background: oklch(0.965 0.020 80);
  --foreground: oklch(0.210 0.030 40);
  --card: oklch(0.990 0.010 80);
  --card-foreground: oklch(0.210 0.030 40);
  --popover: oklch(0.990 0.010 80);
  --popover-foreground: oklch(0.210 0.030 40);
  --primary: oklch(0.550 0.110 40);
  --primary-foreground: oklch(0.980 0.010 80);
  --secondary: oklch(0.880 0.040 70);
  --secondary-foreground: oklch(0.260 0.030 40);
  --muted: oklch(0.920 0.030 80);
  --muted-foreground: oklch(0.480 0.030 40);
  --accent: oklch(0.820 0.060 50);
  --accent-foreground: oklch(0.260 0.030 40);
  --destructive: oklch(0.600 0.160 30);
  --destructive-foreground: oklch(0.980 0.010 80);
  --border: oklch(0.860 0.030 80);
  --input: oklch(0.860 0.030 80);
  --ring: oklch(0.550 0.110 40);
  --chart-1: oklch(0.560 0.120 40);
  --chart-2: oklch(0.620 0.110 60);
  --chart-3: oklch(0.700 0.090 80);
  --chart-4: oklch(0.520 0.100 20);
  --chart-5: oklch(0.620 0.090 100);
  --sidebar: oklch(0.970 0.015 80);
  --sidebar-foreground: oklch(0.220 0.030 40);
  --sidebar-primary: oklch(0.550 0.110 40);
  --sidebar-primary-foreground: oklch(0.980 0.010 80);
  --sidebar-accent: oklch(0.880 0.040 70);
  --sidebar-accent-foreground: oklch(0.260 0.030 40);
  --sidebar-border: oklch(0.860 0.030 80);
  --sidebar-ring: oklch(0.550 0.110 40);
  --font-sans: "Outfit", "DM Sans", ui-sans-serif, system-ui;
  --font-serif: "Playfair Display", "Libre Baskerville", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px hsl(30 20% 20% / 0.06);
  --shadow-xs: 0 2px 6px hsl(30 20% 20% / 0.08);
  --shadow-sm: 0 4px 10px hsl(30 20% 20% / 0.10);
  --shadow: 0 6px 14px hsl(30 20% 20% / 0.12);
  --shadow-md: 0 8px 18px hsl(30 20% 20% / 0.14);
  --shadow-lg: 0 12px 24px hsl(30 20% 20% / 0.16);
  --shadow-xl: 0 16px 36px hsl(30 20% 20% / 0.18);
  --shadow-2xl: 0 22px 48px hsl(30 20% 20% / 0.20);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Bento grid (structured product showcase)

```
:root {
  --background: oklch(0.985 0.004 260);
  --foreground: oklch(0.170 0.010 260);
  --card: oklch(1.000 0 0);
  --card-foreground: oklch(0.170 0.010 260);
  --popover: oklch(1.000 0 0);
  --popover-foreground: oklch(0.170 0.010 260);
  --primary: oklch(0.260 0.035 260);
  --primary-foreground: oklch(0.980 0 0);
  --secondary: oklch(0.960 0.006 260);
  --secondary-foreground: oklch(0.240 0.020 260);
  --muted: oklch(0.970 0.004 260);
  --muted-foreground: oklch(0.520 0.010 260);
  --accent: oklch(0.940 0.008 260);
  --accent-foreground: oklch(0.260 0.035 260);
  --destructive: oklch(0.620 0.180 29.0);
  --destructive-foreground: oklch(0.980 0 0);
  --border: oklch(0.920 0.008 260);
  --input: oklch(0.920 0.008 260);
  --ring: oklch(0.620 0.040 260);
  --chart-1: oklch(0.620 0.120 260);
  --chart-2: oklch(0.680 0.100 190);
  --chart-3: oklch(0.720 0.080 120);
  --chart-4: oklch(0.640 0.110 20);
  --chart-5: oklch(0.560 0.090 320);
  --sidebar: oklch(0.990 0.002 260);
  --sidebar-foreground: oklch(0.180 0.010 260);
  --sidebar-primary: oklch(0.260 0.035 260);
  --sidebar-primary-foreground: oklch(0.980 0 0);
  --sidebar-accent: oklch(0.960 0.006 260);
  --sidebar-accent-foreground: oklch(0.240 0.020 260);
  --sidebar-border: oklch(0.920 0.008 260);
  --sidebar-ring: oklch(0.620 0.040 260);
  --font-sans: "Plus Jakarta Sans", "Inter", ui-sans-serif, system-ui;
  --font-serif: "Source Serif Pro", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.75rem;
  --shadow-2xs: 0 1px 2px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0 2px 6px hsl(0 0% 0% / 0.06);
  --shadow-sm: 0 4px 10px hsl(0 0% 0% / 0.08);
  --shadow: 0 6px 14px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 8px 18px hsl(0 0% 0% / 0.12);
  --shadow-lg: 0 12px 24px hsl(0 0% 0% / 0.14);
  --shadow-xl: 0 16px 36px hsl(0 0% 0% / 0.16);
  --shadow-2xl: 0 22px 48px hsl(0 0% 0% / 0.18);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Neumorphism (soft UI)

```
:root {
  --background: oklch(0.940 0.005 260);
  --foreground: oklch(0.220 0.010 260);
  --card: oklch(0.950 0.005 260);
  --card-foreground: oklch(0.220 0.010 260);
  --popover: oklch(0.950 0.005 260);
  --popover-foreground: oklch(0.220 0.010 260);
  --primary: oklch(0.500 0.050 260);
  --primary-foreground: oklch(0.980 0 0);
  --secondary: oklch(0.920 0.006 260);
  --secondary-foreground: oklch(0.260 0.015 260);
  --muted: oklch(0.930 0.006 260);
  --muted-foreground: oklch(0.520 0.010 260);
  --accent: oklch(0.900 0.010 260);
  --accent-foreground: oklch(0.260 0.015 260);
  --destructive: oklch(0.610 0.180 25);
  --destructive-foreground: oklch(0.980 0 0);
  --border: oklch(0.900 0.006 260);
  --input: oklch(0.900 0.006 260);
  --ring: oklch(0.500 0.050 260);
  --chart-1: oklch(0.600 0.080 260);
  --chart-2: oklch(0.640 0.070 200);
  --chart-3: oklch(0.700 0.060 140);
  --chart-4: oklch(0.560 0.070 20);
  --chart-5: oklch(0.520 0.060 320);
  --sidebar: oklch(0.945 0.005 260);
  --sidebar-foreground: oklch(0.220 0.010 260);
  --sidebar-primary: oklch(0.500 0.050 260);
  --sidebar-primary-foreground: oklch(0.980 0 0);
  --sidebar-accent: oklch(0.900 0.010 260);
  --sidebar-accent-foreground: oklch(0.260 0.015 260);
  --sidebar-border: oklch(0.900 0.006 260);
  --sidebar-ring: oklch(0.500 0.050 260);
  --font-sans: "DM Sans", "Inter", ui-sans-serif, system-ui;
  --font-serif: "Merriweather", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 1rem;
  --shadow-2xs: 6px 6px 12px hsl(0 0% 0% / 0.08), -6px -6px 12px hsl(0 0% 100% / 0.70);
  --shadow-xs: 8px 8px 16px hsl(0 0% 0% / 0.10), -8px -8px 16px hsl(0 0% 100% / 0.80);
  --shadow-sm: 10px 10px 20px hsl(0 0% 0% / 0.12), -10px -10px 20px hsl(0 0% 100% / 0.85);
  --shadow: 12px 12px 24px hsl(0 0% 0% / 0.14), -12px -12px 24px hsl(0 0% 100% / 0.90);
  --shadow-md: 14px 14px 28px hsl(0 0% 0% / 0.16), -14px -14px 28px hsl(0 0% 100% / 0.92);
  --shadow-lg: 18px 18px 36px hsl(0 0% 0% / 0.18), -18px -18px 36px hsl(0 0% 100% / 0.95);
  --shadow-xl: 22px 22px 44px hsl(0 0% 0% / 0.20), -22px -22px 44px hsl(0 0% 100% / 0.96);
  --shadow-2xl: 28px 28px 56px hsl(0 0% 0% / 0.22), -28px -28px 56px hsl(0 0% 100% / 0.97);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Brutalism (raw, high-contrast)

```
:root {
  --background: oklch(1.000 0 0);
  --foreground: oklch(0 0 0);
  --card: oklch(1.000 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1.000 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0 0 0);
  --primary-foreground: oklch(1.000 0 0);
  --secondary: oklch(0.950 0 0);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.940 0 0);
  --muted-foreground: oklch(0.300 0 0);
  --accent: oklch(0.700 0.260 30);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.600 0.250 30);
  --destructive-foreground: oklch(1.000 0 0);
  --border: oklch(0 0 0);
  --input: oklch(0 0 0);
  --ring: oklch(0 0 0);
  --chart-1: oklch(0.700 0.260 30);
  --chart-2: oklch(0.900 0.200 120);
  --chart-3: oklch(0.620 0.240 280);
  --chart-4: oklch(0.800 0.240 160);
  --chart-5: oklch(0.650 0.260 320);
  --sidebar: oklch(0.980 0 0);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0 0 0);
  --sidebar-primary-foreground: oklch(1.000 0 0);
  --sidebar-accent: oklch(0.900 0 0);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(0 0 0);
  --sidebar-ring: oklch(0 0 0);
  --font-sans: "Space Grotesk", "Inter", ui-sans-serif, system-ui;
  --font-serif: "Playfair Display", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0px;
  --shadow-2xs: 4px 4px 0px 0px hsl(0 0% 0% / 1.00);
  --shadow-xs: 4px 4px 0px 0px hsl(0 0% 0% / 1.00);
  --shadow-sm: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
  --shadow: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
  --shadow-md: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00);
  --shadow-lg: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00);
  --shadow-xl: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00);
  --shadow-2xl: 4px 4px 0px 0px hsl(0 0% 0% / 2.50);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Retro pixel (arcade)

```
:root {
  --background: oklch(0.100 0.030 260);
  --foreground: oklch(0.940 0.020 90);
  --card: oklch(0.140 0.040 260);
  --card-foreground: oklch(0.940 0.020 90);
  --popover: oklch(0.140 0.040 260);
  --popover-foreground: oklch(0.940 0.020 90);
  --primary: oklch(0.760 0.220 310);
  --primary-foreground: oklch(0.120 0.020 260);
  --secondary: oklch(0.780 0.180 140);
  --secondary-foreground: oklch(0.120 0.020 260);
  --muted: oklch(0.200 0.030 260);
  --muted-foreground: oklch(0.760 0.080 90);
  --accent: oklch(0.820 0.200 40);
  --accent-foreground: oklch(0.120 0.020 260);
  --destructive: oklch(0.650 0.200 25);
  --destructive-foreground: oklch(0.980 0.010 90);
  --border: oklch(0.300 0.060 260);
  --input: oklch(0.300 0.060 260);
  --ring: oklch(0.760 0.220 310);
  --chart-1: oklch(0.760 0.220 310);
  --chart-2: oklch(0.780 0.180 140);
  --chart-3: oklch(0.820 0.200 40);
  --chart-4: oklch(0.700 0.200 200);
  --chart-5: oklch(0.680 0.220 20);
  --sidebar: oklch(0.120 0.030 260);
  --sidebar-foreground: oklch(0.940 0.020 90);
  --sidebar-primary: oklch(0.760 0.220 310);
  --sidebar-primary-foreground: oklch(0.120 0.020 260);
  --sidebar-accent: oklch(0.200 0.040 260);
  --sidebar-accent-foreground: oklch(0.940 0.020 90);
  --sidebar-border: oklch(0.300 0.060 260);
  --sidebar-ring: oklch(0.760 0.220 310);
  --font-sans: "Oxanium", "Space Grotesk", ui-sans-serif, system-ui;
  --font-serif: "Playfair Display", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.25rem;
  --shadow-2xs: 0 0 0 2px hsl(0 0% 100% / 0.15);
  --shadow-xs: 0 0 0 3px hsl(0 0% 100% / 0.20);
  --shadow-sm: 0 0 0 4px hsl(0 0% 100% / 0.25);
  --shadow: 0 0 0 6px hsl(0 0% 100% / 0.30);
  --shadow-md: 0 0 0 8px hsl(0 0% 100% / 0.35);
  --shadow-lg: 0 0 0 12px hsl(0 0% 100% / 0.40);
  --shadow-xl: 0 0 0 16px hsl(0 0% 100% / 0.45);
  --shadow-2xl: 0 0 0 24px hsl(0 0% 100% / 0.50);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Luxury fashion (editorial, premium)

```
:root {
  --background: oklch(0.970 0.010 80);
  --foreground: oklch(0.180 0.020 80);
  --card: oklch(0.990 0.008 80);
  --card-foreground: oklch(0.180 0.020 80);
  --popover: oklch(0.990 0.008 80);
  --popover-foreground: oklch(0.180 0.020 80);
  --primary: oklch(0.420 0.080 70);
  --primary-foreground: oklch(0.980 0.010 80);
  --secondary: oklch(0.900 0.020 80);
  --secondary-foreground: oklch(0.240 0.020 80);
  --muted: oklch(0.930 0.015 80);
  --muted-foreground: oklch(0.500 0.020 80);
  --accent: oklch(0.840 0.030 80);
  --accent-foreground: oklch(0.240 0.020 80);
  --destructive: oklch(0.600 0.160 30);
  --destructive-foreground: oklch(0.980 0.010 80);
  --border: oklch(0.860 0.015 80);
  --input: oklch(0.860 0.015 80);
  --ring: oklch(0.420 0.080 70);
  --chart-1: oklch(0.450 0.080 70);
  --chart-2: oklch(0.550 0.070 90);
  --chart-3: oklch(0.620 0.060 110);
  --chart-4: oklch(0.380 0.060 50);
  --chart-5: oklch(0.520 0.070 130);
  --sidebar: oklch(0.975 0.008 80);
  --sidebar-foreground: oklch(0.180 0.020 80);
  --sidebar-primary: oklch(0.420 0.080 70);
  --sidebar-primary-foreground: oklch(0.980 0.010 80);
  --sidebar-accent: oklch(0.900 0.020 80);
  --sidebar-accent-foreground: oklch(0.240 0.020 80);
  --sidebar-border: oklch(0.860 0.015 80);
  --sidebar-ring: oklch(0.420 0.080 70);
  --font-sans: "Outfit", "Plus Jakarta Sans", ui-sans-serif, system-ui;
  --font-serif: "Playfair Display", "Libre Baskerville", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 2px 6px hsl(30 20% 20% / 0.08);
  --shadow-xs: 0 4px 10px hsl(30 20% 20% / 0.10);
  --shadow-sm: 0 6px 14px hsl(30 20% 20% / 0.12);
  --shadow: 0 8px 18px hsl(30 20% 20% / 0.14);
  --shadow-md: 0 12px 24px hsl(30 20% 20% / 0.16);
  --shadow-lg: 0 16px 32px hsl(30 20% 20% / 0.18);
  --shadow-xl: 0 22px 44px hsl(30 20% 20% / 0.20);
  --shadow-2xl: 0 30px 60px hsl(30 20% 20% / 0.22);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

## Tech neon (high contrast, electric)

```
:root {
  --background: oklch(0.080 0.030 260);
  --foreground: oklch(0.920 0.020 260);
  --card: oklch(0.120 0.040 260);
  --card-foreground: oklch(0.920 0.020 260);
  --popover: oklch(0.120 0.040 260);
  --popover-foreground: oklch(0.920 0.020 260);
  --primary: oklch(0.750 0.220 230);
  --primary-foreground: oklch(0.080 0.030 260);
  --secondary: oklch(0.740 0.200 310);
  --secondary-foreground: oklch(0.080 0.030 260);
  --muted: oklch(0.160 0.040 260);
  --muted-foreground: oklch(0.720 0.060 260);
  --accent: oklch(0.820 0.220 140);
  --accent-foreground: oklch(0.080 0.030 260);
  --destructive: oklch(0.700 0.220 25);
  --destructive-foreground: oklch(0.980 0 0);
  --border: oklch(0.220 0.060 260);
  --input: oklch(0.220 0.060 260);
  --ring: oklch(0.750 0.220 230);
  --chart-1: oklch(0.750 0.220 230);
  --chart-2: oklch(0.740 0.200 310);
  --chart-3: oklch(0.820 0.220 140);
  --chart-4: oklch(0.680 0.220 30);
  --chart-5: oklch(0.700 0.200 190);
  --sidebar: oklch(0.100 0.040 260);
  --sidebar-foreground: oklch(0.920 0.020 260);
  --sidebar-primary: oklch(0.750 0.220 230);
  --sidebar-primary-foreground: oklch(0.080 0.030 260);
  --sidebar-accent: oklch(0.180 0.050 260);
  --sidebar-accent-foreground: oklch(0.920 0.020 260);
  --sidebar-border: oklch(0.220 0.060 260);
  --sidebar-ring: oklch(0.750 0.220 230);
  --font-sans: "Geist", "Inter", ui-sans-serif, system-ui;
  --font-serif: "Merriweather", ui-serif, Georgia, "Times New Roman", Times, serif;
  --font-mono: "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.75rem;
  --shadow-2xs: 0 2px 6px hsl(230 80% 50% / 0.20);
  --shadow-xs: 0 4px 10px hsl(230 80% 50% / 0.28);
  --shadow-sm: 0 6px 14px hsl(230 80% 50% / 0.34);
  --shadow: 0 8px 20px hsl(230 80% 50% / 0.40);
  --shadow-md: 0 12px 28px hsl(230 80% 50% / 0.46);
  --shadow-lg: 0 16px 36px hsl(230 80% 50% / 0.52);
  --shadow-xl: 0 22px 48px hsl(230 80% 50% / 0.58);
  --shadow-2xl: 0 30px 60px hsl(230 80% 50% / 0.64);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```
