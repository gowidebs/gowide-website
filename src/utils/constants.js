// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Company information
export const COMPANY_INFO = {
  name: 'Gowide Business Services Pvt Ltd',
  tagline: 'Creative Digital Solutions for Growing Brands',
  email: 'contact@gowide.in',
  phone: '+91 9876543210',
  address: 'KM XIII/292, WMO APS Building, PWD Road, Kalpetta, Wayanad, Kerala - 673121',
  social: {
    facebook: 'https://www.facebook.com/people/Gowide/100086573702193/',
    linkedin: 'https://www.linkedin.com/company/79442116/admin/dashboard/',
    instagram: 'https://www.instagram.com/go.wide/?next=%2F'
  }
};

// Services data
export const SERVICES = [
  {
    id: 1,
    title: 'Branding',
    icon: 'fas fa-palette',
    description: 'Complete brand identity solutions',
    features: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Brand Strategy']
  },
  {
    id: 2,
    title: 'Technology',
    icon: 'fas fa-code',
    description: 'Modern web and mobile solutions',
    features: ['Web Development', 'Mobile Apps', 'Custom Software', 'API Integration']
  },
  {
    id: 3,
    title: 'Marketing',
    icon: 'fas fa-bullhorn',
    description: 'Digital marketing strategies',
    features: ['Digital Marketing', 'Content Strategy', 'Social Media', 'SEO Optimization']
  },
  {
    id: 4,
    title: 'Advertising',
    icon: 'fas fa-ad',
    description: 'Performance-driven advertising',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'Analytics & Reporting']
  }
];

// Products data
export const PRODUCTS = [
  {
    id: 1,
    title: 'UpFlyOver',
    icon: 'fas fa-globe-americas',
    tagline: 'Global B2B Networking',
    description: 'Connect with verified businesses worldwide through AI-powered matching and intelligent networking platform.',
    link: '/upflyover',
    status: 'live'
  },
  {
    id: 2,
    title: 'Gymestry',
    icon: 'fas fa-dumbbell',
    tagline: 'Fitness Management',
    description: 'Complete gym management solution with member tracking, workout plans, and business analytics.',
    link: '/gymestry',
    status: 'live'
  },
  {
    id: 3,
    title: 'Rendre',
    icon: 'fas fa-paint-brush',
    tagline: 'Creative Solutions',
    description: 'Professional design and creative services platform for modern businesses and brands.',
    link: '#contact',
    status: 'coming-soon'
  }
];

// Navigation links
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' }
];

// Statistics
export const STATS = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '15+', label: 'Team Members' }
];

// Theme colors
export const COLORS = {
  primary: '#ff8906',
  secondary: '#ff9a1a',
  tertiary: '#ffb347',
  textPrimary: '#fffffe',
  textSecondary: '#a7a9be',
  bgPrimary: '#0f0e17',
  bgLight: '#fffffe'
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1400px'
};