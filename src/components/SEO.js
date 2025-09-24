import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'GoWide - Creative Digital Solutions',
  description = 'Innovative branding, advertising, marketing, and technology services to grow your business. Your trusted digital partner.',
  keywords = 'branding, advertising, marketing, technology, web development, digital solutions, GoWide',
  image = '/og-image.jpg',
  url = 'https://gowide.in'
}) => {
  const fullTitle = title.includes('GoWide') ? title : `${title} | GoWide`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;