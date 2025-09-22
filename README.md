# Gowide React Website

A modern, responsive React website for Gowide Business Services - a creative digital agency.

## Features

- **Modern React Architecture**: Component-based design with hooks
- **Responsive Design**: Mobile-first approach with styled-components
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: Framer Motion for engaging user experience
- **Interactive Components**: Flip cards, hover effects, and transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML and meta tags

## Tech Stack

- React 18
- Styled Components
- Framer Motion
- React Router DOM
- Font Awesome Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── HeroSection.js  # Hero banner
│   ├── ServicesSection.js
│   ├── ProductsSection.js
│   ├── ContactSection.js
│   └── Footer.js
├── pages/              # Page components
│   └── HomePage.js
├── context/            # React context
│   └── ThemeContext.js
├── styles/             # Styled components
│   └── GlobalStyles.js
├── App.js              # Main app component
└── index.js            # Entry point
```

## Components

### Header
- Fixed navigation with responsive hamburger menu
- Theme toggle (dark/light mode)
- Smooth scroll navigation

### HeroSection
- Animated hero banner with floating elements
- Call-to-action buttons
- Statistics display
- Brand showcase with interactive elements

### ServicesSection
- Grid layout of services
- Hover animations and effects
- Feature lists for each service

### ProductsSection
- Flip card animations
- Product showcase with descriptions
- Interactive hover states

### ContactSection
- Contact form with validation
- Multiple contact methods
- Smooth animations

### Footer
- Company information
- Quick links and social media
- Responsive grid layout

## Styling

The project uses styled-components with:
- CSS custom properties for theming
- Responsive breakpoints
- Smooth transitions and animations
- Consistent spacing and typography

## Theme System

- Dark theme (default)
- Light theme toggle
- Persistent theme storage
- Smooth theme transitions

## Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Deployment

The build folder can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## License

© 2025 Gowide Business Services Pvt Ltd. All rights reserved.