# AI Revolution

A modern, responsive landing page showcasing AI technologies and services.

## Tailwind CSS Implementation

### Design System (`src/App.css`)

- **Custom theme colors**: primary (`#6366f1`), secondary (`#8b5cf6`), accent (`#ec4899`), dark (`#1e293b`)
- **Typography**: Inter font family with gradient text utilities
- **Reusable components**: Buttons, cards, form inputs, navigation items, and section headers defined as `@layer components`

### Key Features

**Layout & Responsiveness**

- `app-container` utility for consistent max-width and padding
- Mobile-first grid systems (1col → 2col → 3col breakpoints)
- Responsive navigation with collapsible mobile menu

**Visual Effects**

- Glassmorphism cards with `backdrop-blur`, semi-transparent backgrounds
- Gradient overlays and mesh gradient backgrounds with animated blobs
- Hover animations: scale, translate-y, shadow transitions
- Smooth scroll behavior and animated underlines on nav items

**Interactive Components**

- Scroll-aware navbar with dynamic background/shadow changes
- Floating stat cards and glassmorphism overlays on hero image
- Tag-based categorization with color-coded badges
- Form inputs with focus rings and border transitions

**Dark Mode Sections**

- `bg-zinc-950` footer with `border-white/5` accents
- Dark gradient sections (`from-dark to-gray-900`) with readable light text

### Component Structure

- `Navbar` - Fixed nav with scroll detection, mobile menu
- `HeroSection` - Split layout with floating overlay cards
- `AiTypes` - Grid of image cards with icon badges and tags
- `AiBenefits` - Gradient background with glassmorphism cards
- `Contact` - Split layout with info cards and form
- `Footer` - Multi-column with social icons and gradient divider
