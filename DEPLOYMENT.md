# Gowide React Website - Deployment Guide

## 🚀 Production Deployment

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git repository

### Build for Production

1. **Install Dependencies**
```bash
npm install
```

2. **Build the Project**
```bash
npm run build
```

3. **Test Production Build Locally**
```bash
npx serve -s build
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

**Vercel Configuration** (`vercel.json`):
```json
{
  "name": "gowide-website",
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"homepage": "https://yourusername.github.io/gowide-website",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### 4. AWS S3 + CloudFront
```bash
# Install AWS CLI
npm install -g aws-cli

# Build and sync to S3
npm run build
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Environment Variables

Create `.env.production` file:
```env
REACT_APP_API_URL=https://api.gowide.in
REACT_APP_CONTACT_EMAIL=contact@gowide.in
REACT_APP_ANALYTICS_ID=your-analytics-id
REACT_APP_SITE_URL=https://gowide.in
```

## 📊 Performance Optimization

### 1. Bundle Analysis
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

### 2. Lighthouse Audit
- Run Lighthouse in Chrome DevTools
- Target scores: Performance 90+, Accessibility 95+, Best Practices 90+, SEO 95+

### 3. Image Optimization
- Use WebP format for images
- Implement lazy loading
- Compress images before deployment

## 🔒 Security Headers

Add to your hosting platform:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📈 Monitoring & Analytics

### 1. Google Analytics 4
Add to `public/index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Error Monitoring
```bash
npm install @sentry/react @sentry/tracing
```

## 🚀 CI/CD Pipeline

### GitHub Actions (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test -- --coverage --watchAll=false
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🔍 SEO Optimization

### 1. Meta Tags
- Implemented in `public/index.html`
- Dynamic meta tags for different pages

### 2. Sitemap
Generate `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gowide.in/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gowide.in/services</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://gowide.in/sitemap.xml
```

## 📱 PWA Configuration

### 1. Service Worker
- Already configured with Create React App
- Customize in `public/sw.js` if needed

### 2. Web App Manifest
Update `public/manifest.json`:
```json
{
  "short_name": "Gowide",
  "name": "Gowide - Creative Digital Solutions",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#ff8906",
  "background_color": "#0f0e17"
}
```

## 🔧 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Theme toggle works
- [ ] Contact form submits successfully
- [ ] All animations work smoothly
- [ ] Mobile responsiveness verified
- [ ] Performance scores meet targets
- [ ] SEO meta tags are correct
- [ ] Analytics tracking works
- [ ] Error monitoring is active
- [ ] SSL certificate is valid
- [ ] CDN is properly configured

## 📞 Support

For deployment issues or questions:
- Email: contact@gowide.in
- Documentation: Check README.md
- Issues: Create GitHub issue

---

**🎉 Your production-ready Gowide website is now live!**