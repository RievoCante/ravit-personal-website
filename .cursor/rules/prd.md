## Dark-Themed Developer Portfolio Website

### Project Overview

A modern, dark-themed personal portfolio website for developers. The site showcases projects, skills, and professional information with interactive animations and a sophisticated dark aesthetic.

### Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Typography**: Montserrat (headings), Open Sans (body text)
- **Icons**: Lucide React
- **Animations**: CSS transforms and transitions

### Design System

#### Color Palette

- **Primary**: `#0891b2` (cyan-600) - Main brand color for CTAs and highlights
- **Accent**: `#34d399` (green-400) - Success states and growth indicators
- **Neutrals**:

- Background: `#1f2937` (gray-800)
- Surface: `#374151` (gray-700)
- Text Primary: `#ffffff`
- Text Secondary: `#d1d5db` (gray-300)

#### Typography

- **Headings**: Montserrat Black (900 weight)
- **Body**: Open Sans Regular (400 weight)
- **Hierarchy**: text-4xl → text-2xl → text-xl → text-lg → text-base

#### Layout System

- **Container**: max-w-7xl with responsive padding
- **Grid**: CSS Grid for main layout (sidebar + content)
- **Spacing**: Consistent 4px base unit (space-4, space-6, space-8)
- **Breakpoints**: Mobile-first responsive design

### Component Architecture

#### Main Layout Structure

```plaintext
app/
├── layout.tsx (font configuration, global HTML structure)
├── page.tsx (main portfolio page)
└── globals.css (design tokens, animations)
```

#### Key Components

1. **Profile Sidebar** (`ProfileSection`)

1. Circular avatar with glow effect
2. Name, title, location
3. Bio and statistics
4. Email subscription form
5. Social media links

2. **Skills Wheel** (`SkillsWheel`)

1. Interactive circular skill display
2. Hover effects with scaling
3. Technology icons and labels
4. Floating animation

3. **Project Grid** (`ProjectGrid`)

1. 2x4 responsive grid layout
2. Project cards with hover effects
3. Revenue/metrics display
4. Technology stack indicators

### Features & Functionality

#### Interactive Elements

- **Hover Animations**: Scale transforms on project cards and skills
- **Floating Effects**: Subtle vertical movement on skills wheel
- **Glow Effects**: CSS box-shadow animations on profile and interactive elements
- **Form Handling**: Email subscription with validation

#### Responsive Behavior

- **Desktop**: Sidebar + grid layout
- **Tablet**: Stacked layout with adjusted grid
- **Mobile**: Single column, optimized spacing

### Animation Specifications

#### CSS Animations

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(8, 145, 178, 0.3) }
  50% { box-shadow: 0 0 30px rgba(8, 145, 178, 0.6) }
}
```

#### Hover States

- **Scale**: `hover:scale-105` for cards
- **Glow**: Dynamic box-shadow intensity
- **Color**: Accent color transitions

### Content Structure

#### Profile Information

- Name and professional title
- Location and availability status
- Professional tagline/bio
- Key statistics (followers, projects, etc.)
- Contact information

#### Project Showcase

Each project card includes:

- Project name and icon
- Brief description
- Revenue/usage metrics
- Technology stack
- Growth indicators
- Visual chart representation

#### Skills Display

- Technical skills in circular arrangement
- Proficiency levels
- Technology categories
- Interactive hover states


### File Dependencies

#### Required Imports

```typescript
// Icons
import { Mail, MapPin, Github, Twitter, Linkedin, ExternalLink }

// Fonts
import { Montserrat, Open_Sans } from 'next/font/google'

// React hooks
import { useState } from 'react'
```

#### Asset Requirements

- Profile image (circular crop recommended)
- Project icons/logos
- Technology stack icons
- Social media icons (via Lucide)

### Performance Considerations

- **Font Loading**: `display: 'swap'` for web fonts
- **Image Optimization**: Next.js Image component
- **CSS**: Minimal custom CSS, Tailwind utility classes
- **Animations**: CSS-based, hardware accelerated

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Focus states and tab order
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respect user preferences

### Browser Support

- Modern browsers supporting CSS Grid and Flexbox
- ES6+ JavaScript features
- CSS custom properties support
- Transform and transition animations