// Performance optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700;800&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
  
  // Preload critical images
  const heroImage = new Image();
  heroImage.src = '/gowide-logo.png';
};

// Lazy load non-critical resources
export const lazyLoadResources = () => {
  // Load non-critical CSS
  const loadCSS = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);
  };
  
  // Load Font Awesome after initial render
  setTimeout(() => {
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  }, 100);
};

// Optimize animations for performance
export const optimizeAnimations = () => {
  // Reduce animations on low-end devices
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                        navigator.deviceMemory <= 2;
  
  if (isLowEndDevice) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
    document.documentElement.style.setProperty('--animation-enabled', '0');
  }
};

// Bundle splitting helper
export const loadComponentAsync = (importFunc) => {
  return React.lazy(() => 
    importFunc().then(module => ({
      default: module.default || module
    }))
  );
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    body { 
      font-family: 'Catamaran', sans-serif; 
      margin: 0; 
      padding: 0; 
      background: #0f0e17;
      color: #fffffe;
    }
    .loading-screen { 
      position: fixed; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      background: #0f0e17; 
      z-index: 9999; 
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

export default {
  preloadCriticalResources,
  lazyLoadResources,
  optimizeAnimations,
  loadComponentAsync,
  inlineCriticalCSS
};